import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, ChevronLeft, ChevronRight, Flag, CheckCircle2, 
  AlertTriangle, X, Zap, Youtube, Sparkles, Rocket, Trophy, Flame, Heart, Star 
} from 'lucide-react';
import { getPaper } from '../data/papers.js';
import { SECTIONS, MOCK_DURATION_MIN } from '../config.js';
import { useTimer, fmtTime } from '../hooks/useTimer.js';
import { useProgress } from '../state/ProgressContext.jsx';
import { Chip } from '../components/ui.jsx';
import { Figure } from '../components/Figure.jsx';
import { figureFor } from '../data/figures.js';
import { videoForTag } from '../data/youtube.js';
import { askExplanation } from '../lib/openai.js';
import { PLAYER_NAME, createDrillSession, logDrillResponse, finishDrillSession } from '../lib/supabase.js';

const sectionOrder = ['A', 'B', 'C', 'D'];

// Motivational messages for correct answers
const CORRECT_MESSAGES = [
  `🔥 Amazing, ${PLAYER_NAME}! You nailed it!`,
  `🎯 Perfect shot, ${PLAYER_NAME}!`,
  `✨ Brilliant, ${PLAYER_NAME}! Keep this energy!`,
  `💪 You're on fire, ${PLAYER_NAME}!`,
  `🌟 ${PLAYER_NAME}, you're unstoppable!`,
  `🚀 ${PLAYER_NAME} is crushing it!`,
  `💎 That's the ${PLAYER_NAME} magic!`,
  `⚡ Lightning fast & correct, ${PLAYER_NAME}!`,
  `🏆 Champion move, ${PLAYER_NAME}!`,
  `🎉 Yes! ${PLAYER_NAME} knows this!`,
];
const WRONG_MESSAGES = [
  `No worries, ${PLAYER_NAME}! Every mistake is a lesson 💡`,
  `Almost there, ${PLAYER_NAME}! You'll get the next one 🎯`,
  `Keep going, ${PLAYER_NAME}! Growth is the goal 🌱`,
  `That's okay, ${PLAYER_NAME}! Now you know it forever 🧠`,
  `${PLAYER_NAME}, this one was tricky! You've got the next one 💪`,
];
const STREAK_MESSAGES = {
  3: `🔥 ${PLAYER_NAME} is on a 3-streak! Unstoppable!`,
  5: `⚡ 5 in a row! ${PLAYER_NAME} is in the zone!`,
  7: `🏆 7-streak! ${PLAYER_NAME} is absolutely dominating!`,
  10: `👑 10 STREAK! ${PLAYER_NAME}, you are a LEGEND!`,
};
function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

export default function MockTaker() {
  const { id } = useParams();
  const nav = useNavigate();
  const paper = useMemo(() => getPaper(id), [id]);
  const { recordMockAttempt } = useProgress();

  const [searchParams] = useSearchParams();
  const startSection = searchParams.get('section') || 'A';
  const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : null;
  const isSmart = searchParams.get('smart') === '1';
  const smartTime = Number(searchParams.get('time') || 15);
  const smartModsRaw = searchParams.get('mods') || 'A,B,C,D';
  const smartMods = useMemo(() => smartModsRaw.split(','), [smartModsRaw]);

  const [activeSection, setActiveSection] = useState(startSection);
  const [activeIndex, setActiveIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { qid: optionIndex }
  const [marked, setMarked] = useState(new Set());
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [aiData, setAiData] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [attempts, setAttempts] = useState({}); // { qid: number }
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [motivationMsg, setMotivationMsg] = useState(null);
  const [motivationTone, setMotivationTone] = useState('success'); // 'success' | 'warn'
  const sessionIdRef = useRef(null);
  const qStartTimeRef = useRef(Date.now());

  const isDrill = limit != null || isSmart;
  const drillDurationSec = isSmart ? smartTime * 60 : (isDrill ? limit * 60 : MOCK_DURATION_MIN * 60);

  // Use a ref to store the smart-pooled questions so they are only shuffled once
  const smartPoolRef = useRef(null);
  const sectionList = useMemo(() => {
    if (isSmart) {
      // Return the cached pool if we already built it
      if (smartPoolRef.current) return smartPoolRef.current;

      // SMART ALLOCATION LOGIC
      // A/B = 1.5 min/Q, C/D = 1 min/Q
      const totalMods = smartMods.length;
      const timePerMod = smartTime / totalMods;
      
      let pooled = [];
      smartMods.forEach(code => {
        const fullList = paper.sections[code] || [];
        const timeWeight = (code === 'A' || code === 'B') ? 1.5 : 1.0;
        const qCount = Math.max(1, Math.floor(timePerMod / timeWeight));
        
        // Randomly pick qCount from fullList
        const shuffled = [...fullList].sort(() => 0.5 - Math.random());
        pooled = [...pooled, ...shuffled.slice(0, qCount)];
      });
      smartPoolRef.current = pooled;
      return pooled;
    }
    const list = paper.sections[activeSection] || [];
    return limit ? list.slice(0, limit) : list;
  }, [paper, activeSection, limit, isSmart, smartMods, smartTime]);

  // ---- Within-mock adaptive: track per-section running accuracy and re-pool from easier/harder pool ----
  const adaptedSectionList = useMemo(() => {
    const attempted = sectionList.filter((q) => answers[q.id] != null);
    if (attempted.length < 4) return sectionList;
    const correct = attempted.filter((q) => answers[q.id] === q.correct).length;
    const acc = correct / attempted.length;
    if (acc < 0.5) {
      const remaining = sectionList.filter((q) => answers[q.id] == null);
      const reordered = [...remaining].sort((a, b) => a.difficulty - b.difficulty);
      const attemptedSet = new Set(attempted.map((q) => q.id));
      return [...sectionList.filter((q) => attemptedSet.has(q.id)), ...reordered];
    } else if (acc > 0.75) {
      const remaining = sectionList.filter((q) => answers[q.id] == null);
      const reordered = [...remaining].sort((a, b) => b.difficulty - a.difficulty);
      const attemptedSet = new Set(attempted.map((q) => q.id));
      return [...sectionList.filter((q) => attemptedSet.has(q.id)), ...reordered];
    }
    return sectionList;
  }, [sectionList, answers]);

  const adaptedQ = adaptedSectionList[activeIndex];
  const passage = useMemo(() => {
    if (!adaptedQ || !adaptedQ.passageRef) return null;
    return paper.passages?.[adaptedQ.passageRef];
  }, [adaptedQ, paper]);

  const submit = useCallback((forced = false) => {
    let totalMarks = 0;
    let earnedMarks = 0;
    if (isDrill) {
      const earned = sectionList.reduce((s, q) => s + (answers[q.id] === q.correct ? q.marks : 0), 0);
      const total = sectionList.reduce((s, q) => s + q.marks, 0);
      const score = total ? (earned / total) * 100 : 0;
      
      // Build per-module scores for the drill
      const drillSectionScores = {};
      const mods = isSmart ? smartMods : [activeSection];
      mods.forEach(code => {
        const modQs = sectionList.filter(q => (q.section || activeSection) === code);
        if (!modQs.length) return;
        const modCorrect = modQs.filter(q => answers[q.id] === q.correct).length;
        drillSectionScores[code] = Math.round((modCorrect / modQs.length) * 100);
      });

      recordMockAttempt(paper.id, {
        mockId: paper.id,
        score,
        marks: earned,
        total: total,
        sectionScores: drillSectionScores,
        answers,
        forced,
        isDrill: true,
        drillQuestions: sectionList.map(q => q.id),
        drillModules: mods
      });
    } else {
      const sectionScores = {};
      sectionOrder.forEach((code) => {
        const list = paper.sections[code];
        let total = 0, earned = 0, correct = 0, attempted = 0;
        list.forEach((q) => {
          total += q.marks;
          if (answers[q.id] != null) {
            attempted++;
            if (answers[q.id] === q.correct) {
              earned += q.marks;
              correct++;
            }
          }
        });
        totalMarks += total;
        earnedMarks += earned;
        sectionScores[code] = list.length ? Math.round((correct / list.length) * 100) : 0;
      });
      const score = totalMarks ? (earnedMarks / totalMarks) * 100 : 0;
      recordMockAttempt(paper.id, {
        mockId: paper.id,
        score,
        marks: earnedMarks,
        total: totalMarks,
        sectionScores,
        answers,
        forced
      });
    }
    nav(`/review/${paper.id}`);
    // Finish Supabase drill session
    if (isSmart && sessionIdRef.current) {
      const c = sectionList.filter(q => answers[q.id] === q.correct).length;
      const w = sectionList.filter(q => answers[q.id] != null && answers[q.id] !== q.correct).length;
      const pct = sectionList.length ? Math.round((c / sectionList.length) * 100) : 0;
      finishDrillSession({ sessionId: sessionIdRef.current, correct: c, wrong: w, scorePct: pct, streakBest: bestStreak });
    }
  }, [answers, paper, nav, recordMockAttempt, isDrill, sectionList, activeSection, isSmart, bestStreak]);

  const remaining = useTimer(drillDurationSec, {
    onExpire: () => submit(true)
  });

  // Create Supabase drill session on mount (for smart drills)
  useEffect(() => {
    if (isSmart && !sessionIdRef.current) {
      createDrillSession({
        mockId: paper.id,
        modules: smartMods,
        timeMinutes: smartTime,
        totalQs: sectionList.length
      }).then(res => {
        if (res.ok) sessionIdRef.current = res.sessionId;
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function selectOption(idx) {
    if (showFeedback || !adaptedQ) return;
    const isCorrect = idx === adaptedQ.correct;
    setAnswers((a) => ({ ...a, [adaptedQ.id]: idx }));

    // Track score + streak
    if (isCorrect) {
      setCorrectCount(c => c + 1);
      setStreak(s => {
        const newStreak = s + 1;
        setBestStreak(b => Math.max(b, newStreak));
        // Show streak milestone or random correct message
        const streakMsg = STREAK_MESSAGES[newStreak];
        setMotivationMsg(streakMsg || pickRandom(CORRECT_MESSAGES));
        setMotivationTone('success');
        return newStreak;
      });
    } else {
      setWrongCount(w => w + 1);
      setStreak(0);
      setMotivationMsg(pickRandom(WRONG_MESSAGES));
      setMotivationTone('warn');
    }

    // Log to Supabase
    const elapsed = Date.now() - qStartTimeRef.current;
    logDrillResponse({
      sessionId: sessionIdRef.current,
      questionId: adaptedQ.id,
      section: adaptedQ.section || activeSection,
      tag: adaptedQ.tag,
      selected: idx,
      correctIdx: adaptedQ.correct,
      isCorrect,
      timeMs: elapsed
    });

    if (isDrill) setShowFeedback(true);
  }
  function toggleMark() {
    if (!adaptedQ) return;
    setMarked((m) => {
      const next = new Set(m);
      if (next.has(adaptedQ.id)) next.delete(adaptedQ.id);
      else next.add(adaptedQ.id);
      return next;
    });
  }
  function clearResponse() {
    if (!adaptedQ) return;
    setAnswers((a) => {
      const next = { ...a };
      delete next[adaptedQ.id];
      return next;
    });
  }
  function gotoIndex(i) {
    setActiveIndex(Math.max(0, Math.min(adaptedSectionList.length - 1, i)));
    setShowFeedback(false);
    setAiData(null);
    setMotivationMsg(null);
    qStartTimeRef.current = Date.now();
  }
  function gotoSection(code) {
    setActiveSection(code);
    setActiveIndex(0);
    setShowFeedback(false);
    setAiData(null);
  }
  function next() {
    if (activeIndex < adaptedSectionList.length - 1) {
      gotoIndex(activeIndex + 1);
    } else {
      const idx = sectionOrder.indexOf(activeSection);
      if (idx < sectionOrder.length - 1) gotoSection(sectionOrder[idx + 1]);
    }
  }
  function prev() {
    if (activeIndex > 0) gotoIndex(activeIndex - 1);
    else {
      const idx = sectionOrder.indexOf(activeSection);
      if (idx > 0) {
        const newSec = sectionOrder[idx - 1];
        setActiveSection(newSec);
        setActiveIndex(paper.sections[newSec].length - 1);
      }
    }
  }


  // Keyboard shortcuts
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextCb = useCallback(() => next(), [activeIndex, activeSection, adaptedSectionList.length]);
  const prevCb = useCallback(() => prev(), [activeIndex, activeSection]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') nextCb();
      if (e.key === 'ArrowLeft') prevCb();
      if (e.key === 'm' || e.key === 'M') toggleMark();
      if (['1', '2', '3', '4'].includes(e.key)) {
        if (adaptedQ) selectOption(Number(e.key) - 1);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [nextCb, prevCb, adaptedQ, showFeedback]);

  const totalAttempted = Object.keys(answers).length;
  const totalQuestions = isSmart ? sectionList.length : (limit != null ? limit : sectionOrder.reduce((s, code) => s + paper.sections[code].length, 0));
  const totalPaperMarks = isDrill 
    ? sectionList.reduce((s, q) => s + q.marks, 0)
    : sectionOrder.reduce((s, code) => s + paper.sections[code].reduce((m, q) => m + q.marks, 0), 0);
  const lowTime = remaining < 600; // last 10 min

  return (
    <div className="min-h-screen flex flex-col bg-canvas">
      {/* Top bar */}
      <header className="border-b border-hairline px-3 sm:px-4 md:px-8 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 backdrop-blur-md bg-canvas/85 sticky top-0 z-30">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <button className="btn-ghost px-2 py-1 flex-shrink-0" onClick={() => setShowExitConfirm(true)}>
            <X size={18} />
          </button>
          <div className="min-w-0">
            <div className="font-semibold tracking-tight text-sm sm:text-base truncate">
              {isSmart ? `${PLAYER_NAME}'s Flash Drill` : paper.title}
            </div>
            <div className="text-[10px] sm:text-xs text-ink-muted truncate">
              {paper.isPlaceholder ? 'Preview — full paper drops before scheduled date' : paper.difficulty + ' · ' + totalQuestions + ' Qs · ' + totalPaperMarks + ' marks'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          {/* Live score stats for drills */}
          {isDrill && (correctCount + wrongCount > 0) && (
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
              <span className="flex items-center gap-0.5 text-success font-bold">
                <CheckCircle2 size={12} /> {correctCount}
              </span>
              <span className="flex items-center gap-0.5 text-danger font-bold">
                <X size={12} /> {wrongCount}
              </span>
              {streak >= 2 && (
                <span className="flex items-center gap-0.5 text-amber-400 font-bold animate-pulse">
                  <Flame size={12} className="fill-amber-400" /> {streak}
                </span>
              )}
            </div>
          )}
          <div className={'flex items-center gap-1 sm:gap-2 font-mono font-semibold text-sm sm:text-base ' + (lowTime ? 'text-danger animate-pulse-soft' : 'text-ink')}>
            <Clock size={14} />
            <span>{fmtTime(remaining)}</span>
          </div>
          <button
            className="btn-primary px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
            onClick={() => setShowSubmitConfirm(true)}
          >
            Submit
          </button>
        </div>
      </header>

      {/* Section tabs */}
      <div className="border-b border-hairline px-3 sm:px-4 md:px-8 py-2 bg-surface/60 flex items-center gap-1 overflow-x-auto scrollbar-hide">
        {isSmart ? (
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">
            <Zap size={14} className="fill-current" />
            <span className="font-bold uppercase tracking-wider">Adaptive Flash Drill</span>
          </div>
        ) : sectionOrder.map((code) => {
          if (isDrill && code !== activeSection) return null;
          const sec = SECTIONS[code];
          const list = isDrill ? sectionList : paper.sections[code];
          const attempted = list.filter((q) => answers[q.id] != null).length;
          const isActive = code === activeSection;
          return (
            <button
              key={code}
              onClick={() => gotoSection(code)}
              className={'flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition whitespace-nowrap ' +
                (isActive
                  ? `bg-${sec.color}/15 text-${sec.color} ring-1 ring-${sec.color}/30`
                  : 'text-ink-muted hover:text-white')}
            >
              <span className={`w-1.5 h-1.5 rounded-full bg-${sec.color}`} />
              <span className="font-semibold">{sec.short}</span>
              <span className="text-[10px] sm:text-xs opacity-70">{attempted}/{list.length}</span>
            </button>
          );
        })}
        <div className="ml-auto text-[10px] sm:text-xs text-ink-dim flex items-center gap-2 whitespace-nowrap flex-shrink-0">
          Attempted: <span className="font-semibold text-white">{totalAttempted}/{totalQuestions}</span>
        </div>
      </div>

      {/* Motivational Banner */}
      <AnimatePresence>
        {motivationMsg && showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={'px-4 md:px-8 py-3 text-center font-bold text-sm ' +
              (motivationTone === 'success'
                ? 'bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-emerald-500/20 text-emerald-300 border-b border-emerald-500/30'
                : 'bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 text-amber-300 border-b border-amber-500/30')}
          >
            <div className="flex items-center justify-center gap-2">
              {motivationTone === 'success' ? <Star size={16} className="fill-emerald-400 text-emerald-400" /> : <Heart size={16} className="text-amber-400" />}
              <span>{motivationMsg}</span>
              {motivationTone === 'success' && streak >= 2 && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold flex items-center gap-1">
                  <Flame size={11} className="fill-amber-400" /> {streak} streak
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4 sm:gap-6 max-w-7xl w-full mx-auto px-3 sm:px-4 md:px-8 py-4 sm:py-6">
        {/* Question panel */}
        <main className="space-y-4">
          {passage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="card border-l-4 border-l-sectionB/60"
            >
              <div className="flex items-center gap-2 mb-2">
                <Chip tone="neutral">Reading Passage</Chip>
                <span className="text-xs text-ink-dim">{passage.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted whitespace-pre-line">{passage.text}</p>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {adaptedQ ? (
              <motion.div
                key={adaptedQ.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Chip tone="accent">Q{activeIndex + 1} of {adaptedSectionList.length}</Chip>
                    <span className="text-xs text-ink-dim">
                      {isSmart ? `Module ${adaptedQ.section}` : `Section ${activeSection}`} · {adaptedQ.marks} {adaptedQ.marks > 1 ? 'marks' : 'mark'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {answers[adaptedQ.id] != null && (
                      <button onClick={clearResponse} className="btn-ghost text-[10px] uppercase font-bold text-ink-dim hover:text-danger px-2 py-1">
                        Clear Response
                      </button>
                    )}
                    <button
                      onClick={toggleMark}
                      className={'btn-ghost text-xs px-3 py-1.5 ' + (marked.has(adaptedQ.id) ? 'text-warn' : '')}
                    >
                      <Flag size={14} className="mr-1" />
                      {marked.has(adaptedQ.id) ? 'Marked' : 'Mark for review'}
                    </button>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">{adaptedQ.text}</p>

                {adaptedQ.image && !figureFor(adaptedQ.id) && (
                  <figure className="my-4">
                    <img src={adaptedQ.image} alt="Question figure" className="rounded-xl border border-hairline max-h-72 object-contain bg-elevated" />
                  </figure>
                )}

                <Figure questionId={adaptedQ.id} />

                <div className="mt-6 grid gap-2">
                  {adaptedQ.options.map((opt, i) => {
                    const selected = answers[adaptedQ.id] === i;
                    const isCorrect = i === adaptedQ.correct;
                    let cls = 'border-hairline';
                    
                    if (showFeedback) {
                      if (isCorrect) cls = 'border-success bg-success/10 text-success';
                      else if (selected) cls = 'border-danger bg-danger/10 text-danger';
                    } else if (selected) {
                      cls = 'border-accent bg-accent/10 text-white';
                    }

                    return (
                      <button
                        key={i}
                        disabled={showFeedback}
                        onClick={() => selectOption(i)}
                        className={
                          'flex items-center gap-3 w-full text-left p-4 rounded-xl border transition ' + cls
                        }
                      >
                        <span
                          className={
                            'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ' +
                            (selected || (showFeedback && isCorrect) ? 'bg-current text-canvas' : 'bg-elevated text-ink-muted border border-hairline')
                          }
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="flex-1 text-sm">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {showFeedback && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 space-y-4 pt-6 border-t border-hairline">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold uppercase tracking-wider">Explanation</div>
                      {videoForTag(adaptedQ.tag) && (
                        <a href={videoForTag(adaptedQ.tag).url} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs text-danger">
                          <Youtube size={14} className="mr-1" /> Watch Guide
                        </a>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-ink-muted">{adaptedQ.explanation}</p>
                    
                    <div className="flex gap-2">
                      <button 
                        className="btn-secondary text-xs py-1.5" 
                        onClick={async () => {
                          setAiLoading(true);
                          const qid = adaptedQ.id;
                          const currentAttempts = (attempts[qid] || 0) + 1;
                          setAttempts(prev => ({ ...prev, [qid]: currentAttempts }));

                          const res = await askExplanation({
                            question: adaptedQ.text, 
                            options: adaptedQ.options, 
                            correctIndex: adaptedQ.correct, 
                            userIndex: answers[qid], 
                            section: activeSection,
                            tag: adaptedQ.tag,
                            difficulty: adaptedQ.difficulty,
                            attemptNumber: currentAttempts
                          });
                          if (res.ok) setAiData(res.data);
                          setAiLoading(false);
                        }}
                        disabled={aiLoading}
                      >
                        <Sparkles size={14} /> {aiLoading ? 'Tutor is thinking...' : 'AI Deep Dive'}
                      </button>
                    </div>

                    {aiData && (
                      <div className="space-y-3 mt-4">
                        <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 text-sm leading-relaxed">
                          <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase mb-2">
                            <Sparkles size={12} /> AIST Ace AI Tutor
                          </div>
                          
                          <div className="font-semibold text-white mb-2">{aiData.feedback}</div>
                          
                          {aiData.why && (
                            <div className="mb-3">
                              <span className="text-ink-dim font-medium">Logic: </span>
                              <span className="text-ink-muted">{aiData.why}</span>
                            </div>
                          )}

                          {aiData.mistake_analysis && (
                            <div className="mb-3 p-2 rounded bg-danger/5 border border-danger/10 text-xs">
                              <span className="text-danger font-bold uppercase text-[9px] block mb-1">Mistake Analysis</span>
                              <span className="text-ink-muted italic">{aiData.mistake_analysis}</span>
                            </div>
                          )}

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                            {aiData.exam_tip && (
                              <div className="p-3 rounded-lg bg-elevated border border-hairline">
                                <div className="text-[9px] font-bold text-accent uppercase mb-1">Exam Logic</div>
                                <div className="text-xs text-ink-muted">{aiData.exam_tip}</div>
                              </div>
                            )}
                            {aiData.deep_dive && (
                              <div className="p-3 rounded-lg bg-elevated border border-hairline">
                                <div className="text-[9px] font-bold text-success uppercase mb-1">Deep Dive</div>
                                <div className="text-xs text-ink-muted">{aiData.deep_dive}</div>
                              </div>
                            )}
                          </div>

                          {aiData.mini_challenge && (
                            <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/30 border-dashed">
                              <div className="text-[9px] font-bold text-accent uppercase mb-1">Mini Challenge</div>
                              <div className="text-xs text-white font-medium italic">{aiData.mini_challenge}</div>
                            </div>
                          )}

                          {aiData.status === 'retry_needed' && (
                            <div className="mt-4 flex justify-center">
                              <button 
                                className="btn-primary text-xs px-6"
                                onClick={() => {
                                  setShowFeedback(false);
                                  setAiData(null);
                                }}
                              >
                                Try Again
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <div className="card text-center p-20">
                <AlertTriangle size={48} className="mx-auto text-warn mb-4" />
                <h3 className="heading-lg">Question not found</h3>
                <p className="text-ink-muted">Something went wrong while generating this drill.</p>
                <button className="btn-primary mt-6" onClick={() => nav('/')}>Back to Dashboard</button>
              </div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between gap-2">
            <button className="btn-secondary text-xs sm:text-sm py-2 px-3 sm:px-5" onClick={prev} disabled={activeSection === 'A' && activeIndex === 0}>
              <ChevronLeft size={16} /> <span className="hidden sm:inline">Previous</span><span className="sm:hidden">Prev</span>
            </button>
            <span className="text-[10px] text-ink-dim hidden md:block">Use ← → to navigate · 1–4 to answer · M to mark</span>
            <button className="btn-primary text-xs sm:text-sm py-2 px-3 sm:px-5" onClick={next}>
              <span className="hidden sm:inline">Save & Next</span><span className="sm:hidden">Next</span> <ChevronRight size={16} />
            </button>
          </div>
        </main>

        {/* Question palette — hidden on mobile, shown on lg+ */}
        <aside className="hidden lg:block lg:sticky lg:top-28 self-start space-y-4">
          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold text-sm">Question Palette</div>
              <span className="text-xs text-ink-dim">Section {activeSection}</span>
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {adaptedSectionList.map((qq, i) => {
                const isCurrent = i === activeIndex;
                const isMarked = marked.has(qq.id);
                const isAnswered = answers[qq.id] != null;
                let cls = 'border-hairline text-ink-muted bg-elevated/40';
                if (isAnswered) cls = 'border-success/50 bg-success/15 text-success';
                if (isMarked) cls = 'border-warn/60 bg-warn/15 text-warn';
                if (isCurrent) cls = 'border-accent bg-accent text-white shadow-glow';
                return (
                  <button
                    key={qq.id}
                    onClick={() => gotoIndex(i)}
                    className={'w-9 h-9 rounded-md text-xs font-bold border transition relative ' + cls}
                    title={qq.tag}
                  >
                    {i + 1}
                    {isAnswered && isMarked && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-success rounded-full border border-canvas shadow-sm" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 text-[11px] text-ink-dim space-y-2">
              <div className="flex items-center gap-2"><span className="inline-block w-2.5 h-2.5 rounded bg-elevated border border-hairline" /> Not Answered</div>
              <div className="flex items-center gap-2"><span className="inline-block w-2.5 h-2.5 rounded bg-success/60" /> Answered</div>
              <div className="flex items-center gap-2"><span className="inline-block w-2.5 h-2.5 rounded bg-warn/60" /> Marked for Review</div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded bg-warn/60 relative">
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-success rounded-full border border-canvas" />
                </span>
                Answered & Marked
              </div>
              <div className="flex items-center gap-2"><span className="inline-block w-2.5 h-2.5 rounded bg-accent" /> Current Question</div>
            </div>
          </div>
        </aside>
      </div>

      {/* Submit confirm */}
      <AnimatePresence>
        {showSubmitConfirm && (
          <Modal onClose={() => setShowSubmitConfirm(false)}>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-warn/15 text-warn flex items-center justify-center mx-auto mb-3">
                <AlertTriangle size={22} />
              </div>
              <h3 className="heading-md">Submit your mock?</h3>
              <p className="text-ink-muted text-sm mt-2 max-w-sm mx-auto">
                You&apos;ve answered <strong>{totalAttempted}</strong> of {totalQuestions} questions. Once submitted you can review explanations.
              </p>
              <div className="mt-6 flex gap-2 justify-center">
                <button className="btn-secondary" onClick={() => setShowSubmitConfirm(false)}>Keep going</button>
                <button className="btn-primary" onClick={() => submit(false)}>
                  <CheckCircle2 size={16} /> Submit
                </button>
              </div>
            </div>
          </Modal>
        )}
        {showExitConfirm && (
          <Modal onClose={() => setShowExitConfirm(false)}>
            <h3 className="heading-md text-center">Exit without submitting?</h3>
            <p className="text-ink-muted text-sm mt-2 text-center">Your answers won&apos;t be saved if you leave now.</p>
            <div className="mt-6 flex gap-2 justify-center">
              <button className="btn-secondary" onClick={() => setShowExitConfirm(false)}>Stay</button>
              <button className="btn-primary" onClick={() => nav('/')}>Exit anyway</button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm grid place-items-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="card max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
