import { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Check, X, Sparkles, Youtube, ArrowLeft, Filter, Zap, Trophy, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { getPaper } from '../data/papers.js';
import { useProgress } from '../state/ProgressContext.jsx';
import { Card, Chip, Progress } from '../components/ui.jsx';
import { Figure } from '../components/Figure.jsx';
import { SECTIONS } from '../config.js';
import { videoForTag } from '../data/youtube.js';
import { askExplanation } from '../lib/openai.js';
import { PLAYER_NAME } from '../lib/supabase.js';

const filterModes = [
  { id: 'all', label: 'All' },
  { id: 'wrong', label: 'Wrong only' },
  { id: 'unattempted', label: 'Skipped' }
];

export default function Review() {
  const { id } = useParams();
  const nav = useNavigate();
  const { attempts, mockResults } = useProgress();

  // 1. Try to find the specific attempt by ID
  // 2. Fallback to the latest mock result for a paper (for direct navigation to /review/1)
  const result = useMemo(() => {
    const byId = attempts.find(a => a.attemptId === id);
    if (byId) return byId;
    return mockResults[Number(id)];
  }, [attempts, id, mockResults]);

  const isDrillResult = result?.isDrill;

  // Load the paper from the result's mockId, or from the URL id as fallback
  const paperId = result?.mockId || (isNaN(Number(id)) ? 1 : Number(id));
  const paper = useMemo(() => getPaper(paperId), [paperId]);

  // For drills: find the actual questions from the paper that were part of the drill
  const drillQuestionIds = useMemo(() => new Set(result?.drillQuestions || []), [result]);
  const drillModules = result?.drillModules || [];

  // Build the drill question list from the paper data
  const drillQuestionList = useMemo(() => {
    if (!isDrillResult || !drillQuestionIds.size) return [];
    const allQs = [];
    Object.values(paper.sections).forEach(sectionQs => {
      sectionQs.forEach(q => {
        if (drillQuestionIds.has(q.id)) allQs.push(q);
      });
    });
    return allQs;
  }, [isDrillResult, drillQuestionIds, paper]);

  const [activeSection, setActiveSection] = useState(
    isDrillResult && drillModules.length ? drillModules[0] : 'A'
  );
  const [filter, setFilter] = useState('all');

  if (!result) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h2 className="heading-lg">No attempt found</h2>
        <p className="text-ink-muted mt-2">Could not find attempt ID: {id}</p>
        <div className="text-xs text-ink-dim mt-4 max-h-40 overflow-auto">
          Available attempts: {attempts.map(a => a.attemptId).join(', ') || 'None'}
        </div>
        <p className="text-ink-muted mt-4">Take Mock {paper.id} first to see the review.</p>
        <button className="btn-primary mt-6" onClick={() => nav(`/mock/${paper.id}`)}>Start Mock</button>
      </div>
    );
  }

  // ── Drill Review Mode ─────────────────────────────────────────────────────
  if (isDrillResult) {
    const drillCorrect = drillQuestionList.filter(q => result.answers?.[q.id] === q.correct).length;
    const drillWrong = drillQuestionList.filter(q => result.answers?.[q.id] != null && result.answers?.[q.id] !== q.correct).length;
    const drillSkipped = drillQuestionList.filter(q => result.answers?.[q.id] == null).length;
    const drillPct = drillQuestionList.length ? Math.round((drillCorrect / drillQuestionList.length) * 100) : 0;

    // Per-module stats for the drill
    const modStats = {};
    drillModules.forEach(code => {
      const modQs = drillQuestionList.filter(q => (q.section || code) === code);
      const correct = modQs.filter(q => result.answers?.[q.id] === q.correct).length;
      const wrong = modQs.filter(q => result.answers?.[q.id] != null && result.answers?.[q.id] !== q.correct).length;
      modStats[code] = { correct, wrong, skipped: modQs.length - correct - wrong, total: modQs.length };
    });

    // Filter drill questions by active module and filter mode
    const activeModQs = drillQuestionList.filter(q => (q.section || drillModules[0]) === activeSection);
    const filteredDrillQs = activeModQs.filter(q => {
      const a = result.answers?.[q.id];
      if (filter === 'wrong') return a != null && a !== q.correct;
      if (filter === 'unattempted') return a == null;
      return true;
    });

    const emoji = drillPct >= 80 ? '🏆' : drillPct >= 50 ? '💪' : '🌱';
    const verdict = drillPct >= 80
      ? `Outstanding, ${PLAYER_NAME}! You crushed this drill!`
      : drillPct >= 50
      ? `Great effort, ${PLAYER_NAME}! You're getting stronger!`
      : `Keep going, ${PLAYER_NAME}! Every drill makes you better!`;

    return (
      <div className="min-h-screen bg-canvas">
        {/* Header */}
        <header className="border-b border-hairline bg-canvas/85 backdrop-blur-md sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-3">
            <Link to="/" className="btn-ghost text-xs sm:text-sm px-2 sm:px-4 flex-shrink-0"><ArrowLeft size={14} /> <span className="hidden sm:inline">Dashboard</span></Link>
            <div className="text-center min-w-0">
              <div className="text-[10px] sm:text-xs text-emerald-400 uppercase tracking-[0.12em] flex items-center justify-center gap-1">
                <Zap size={11} className="fill-current" /> Drill Review
              </div>
              <div className="font-bold text-sm sm:text-base truncate">{PLAYER_NAME}&apos;s Flash Drill</div>
            </div>
            <div className="text-right flex-shrink-0 flex flex-col items-end">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">{drillPct}%</div>
              <div className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[9px] sm:text-[10px] font-bold text-emerald-300 uppercase">
                {result.marks} / {result.total} Marks
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8 py-4 sm:py-6 space-y-4 sm:space-y-5">
          {/* Motivational verdict */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={'p-4 sm:p-5 rounded-xl sm:rounded-2xl border text-center ' +
              (drillPct >= 80
                ? 'bg-gradient-to-r from-emerald-500/10 via-emerald-400/5 to-emerald-500/10 border-emerald-500/30'
                : drillPct >= 50
                ? 'bg-gradient-to-r from-blue-500/10 via-blue-400/5 to-blue-500/10 border-blue-500/30'
                : 'bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border-amber-500/30')}
          >
            <div className="text-2xl sm:text-3xl mb-2">{emoji}</div>
            <div className="font-bold text-base sm:text-lg text-white">{verdict}</div>
            <div className="mt-2 sm:mt-3 flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <span className="flex items-center gap-1 text-success font-bold">
                <Check size={14} /> {drillCorrect} correct
              </span>
              <span className="flex items-center gap-1 text-danger font-bold">
                <X size={14} /> {drillWrong} wrong
              </span>
              {drillSkipped > 0 && (
                <span className="text-ink-dim">{drillSkipped} skipped</span>
              )}
            </div>
          </motion.div>

          {/* Per-module score cards (only the drilled modules) */}
          <Card>
            <div className={'grid gap-3 sm:gap-4 grid-cols-2'}>
              {drillModules.map(code => {
                const s = SECTIONS[code];
                const stat = modStats[code] || { correct: 0, wrong: 0, skipped: 0, total: 0 };
                const pct = stat.total ? Math.round((stat.correct / stat.total) * 100) : 0;
                return (
                  <div key={code}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold">{s.short}</span>
                      <span className="text-lg font-bold">{pct}%</span>
                    </div>
                    <Progress value={pct} color={`bg-${s.color}`} className="mt-2" />
                    <div className="mt-2 text-[11px] text-ink-dim flex gap-3">
                      <span><Check size={11} className="inline text-success" /> {stat.correct}</span>
                      <span><X size={11} className="inline text-danger" /> {stat.wrong}</span>
                      {stat.skipped > 0 && <span>· skip {stat.skipped}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Module selector + filter — only show drilled modules */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 sm:justify-between">
            <div className="flex gap-1 p-1 rounded-full bg-elevated/60 border border-hairline overflow-x-auto scrollbar-hide">
              {drillModules.map(code => {
                const s = SECTIONS[code];
                return (
                  <button
                    key={code}
                    onClick={() => setActiveSection(code)}
                    className={'px-3 py-1.5 rounded-full text-xs font-semibold transition ' +
                      (activeSection === code ? `bg-${s.color}/15 text-${s.color}` : 'text-ink-muted hover:text-white')}
                  >
                    {s.short}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-1 p-1 rounded-full bg-elevated/60 border border-hairline">
              {filterModes.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setFilter(m.id)}
                  className={'px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition ' +
                    (filter === m.id ? 'bg-accent text-white' : 'text-ink-muted hover:text-white')}
                >
                  <Filter size={12} /> {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question list — only drill questions */}
          <div className="space-y-3">
            {filteredDrillQs.length === 0 && (
              <div className="text-center py-10 text-ink-muted text-sm">
                Nothing here. Try a different filter.
              </div>
            )}
            {filteredDrillQs.map((q, i) => (
              <ReviewItem
                key={q.id}
                index={activeModQs.indexOf(q) + 1}
                q={q}
                userAnswer={result.answers?.[q.id]}
                passage={q.passageRef ? paper.passages?.[q.passageRef] : null}
              />
            ))}
          </div>

          {/* Back to practice */}
          <div className="text-center py-6">
            <Link to="/practice" className="btn-primary px-8">
              <Zap size={14} /> Start Another Drill
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // ── Full Mock Review Mode (unchanged) ─────────────────────────────────────

  const list = paper.sections[activeSection];
  const filtered = list.filter((q) => {
    const a = result.answers?.[q.id];
    if (filter === 'wrong')        return a != null && a !== q.correct;
    if (filter === 'unattempted')  return a == null;
    return true;
  });

  const sectionStats = Object.fromEntries(
    Object.keys(SECTIONS).map((code) => {
      const items = paper.sections[code];
      let correct = 0, wrong = 0, skipped = 0;
      items.forEach((q) => {
        const a = result.answers?.[q.id];
        if (a == null) skipped++;
        else if (a === q.correct) correct++;
        else wrong++;
      });
      return [code, { correct, wrong, skipped, total: items.length }];
    })
  );

  return (
    <div className="min-h-screen bg-canvas">
      {/* Header */}
      <header className="border-b border-hairline bg-canvas/85 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-3">
          <Link to="/" className="btn-ghost text-xs sm:text-sm px-2 sm:px-4 flex-shrink-0"><ArrowLeft size={14} /> <span className="hidden sm:inline">Dashboard</span></Link>
          <div className="text-center min-w-0">
            <div className="text-[10px] sm:text-xs text-ink-dim uppercase tracking-[0.12em]">Review</div>
            <div className="font-bold text-sm sm:text-base truncate">{paper.title}</div>
          </div>
          <div className="text-right flex-shrink-0 flex flex-col items-end">
            <div className="text-xl sm:text-2xl font-black text-accent">{Math.round(result.score)}%</div>
            <div className="px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-[9px] sm:text-[10px] font-bold text-accent-light uppercase">
              {result.marks} / {result.total} Marks
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8 py-4 sm:py-6 space-y-4 sm:space-y-5">
        {/* Score summary */}
        <Card>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.values(SECTIONS).map((s) => {
              const stat = sectionStats[s.code];
              const pct = stat.total ? Math.round((stat.correct / stat.total) * 100) : 0;
              return (
                <div key={s.code}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-semibold">{s.short}</span>
                    <span className="text-lg font-bold">{pct}%</span>
                  </div>
                  <Progress value={pct} color={`bg-${s.color}`} className="mt-2" />
                  <div className="mt-2 text-[11px] text-ink-dim flex gap-3">
                    <span><Check size={11} className="inline text-success" /> {stat.correct}</span>
                    <span><X size={11} className="inline text-danger" /> {stat.wrong}</span>
                    <span>· skip {stat.skipped}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Section selector + filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 sm:justify-between">
          <div className="flex gap-1 p-1 rounded-full bg-elevated/60 border border-hairline overflow-x-auto scrollbar-hide">
            {Object.values(SECTIONS).map((s) => (
              <button
                key={s.code}
                onClick={() => setActiveSection(s.code)}
                className={'px-3 py-1.5 rounded-full text-xs font-semibold transition ' +
                  (activeSection === s.code ? `bg-${s.color}/15 text-${s.color}` : 'text-ink-muted hover:text-white')}
              >
                {s.short}
              </button>
            ))}
          </div>
          <div className="flex gap-1 p-1 rounded-full bg-elevated/60 border border-hairline">
            {filterModes.map((m) => (
              <button
                key={m.id}
                onClick={() => setFilter(m.id)}
                className={'px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 transition ' +
                  (filter === m.id ? 'bg-accent text-white' : 'text-ink-muted hover:text-white')}
              >
                <Filter size={12} /> {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question list */}
        <div className="space-y-3">
          {filtered.length === 0 && (
            <div className="text-center py-10 text-ink-muted text-sm">
              Nothing here. Try a different filter.
            </div>
          )}
          {filtered.map((q, i) => (
            <ReviewItem
              key={q.id}
              index={list.indexOf(q) + 1}
              q={q}
              userAnswer={result.answers?.[q.id]}
              passage={q.passageRef ? paper.passages?.[q.passageRef] : null}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function ReviewItem({ q, index, userAnswer, passage }) {
  const isCorrect = userAnswer != null && userAnswer === q.correct;
  const isSkipped = userAnswer == null;
  const video = videoForTag(q.tag);

  const [aiData, setAiData] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);

  async function fetchAI() {
    setAiLoading(true);
    setAiData(null);
    const res = await askExplanation({
      question: q.text, 
      options: q.options, 
      correctIndex: q.correct, 
      userIndex: userAnswer, 
      section: q.section, // Pass section
      tag: q.tag,
      difficulty: q.difficulty,
      attemptNumber: 3 // Review mode always shows full explanation
    });
    if (res.ok) setAiData(res.data);
    setAiLoading(false);
  }

  return (
    <Card>
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <Chip tone={isCorrect ? 'success' : isSkipped ? 'neutral' : 'danger'}>
            {isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Wrong'}
          </Chip>
          <span className="text-xs text-ink-dim">Q{index} · {q.tag} · {q.marks} {q.marks > 1 ? 'marks' : 'mark'}</span>
        </div>
        {video && (
          <a href={video.url} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
            <Youtube size={14} className="text-danger" /> {video.duration} · {video.topic}
          </a>
        )}
      </div>

      {passage && (
        <div className="mb-3 text-xs text-ink-muted bg-elevated/40 border border-hairline rounded-xl p-3 max-h-32 overflow-auto">
          <div className="font-semibold text-ink mb-1">{passage.title}</div>
          {passage.text}
        </div>
      )}

      <p className="text-sm md:text-base leading-relaxed whitespace-pre-line">{q.text}</p>

      <Figure questionId={q.id} />

      <div className="mt-4 grid gap-2">
        {q.options.map((opt, i) => {
          const isAnswerCorrect = i === q.correct;
          const isUserChoice = i === userAnswer;
          let cls = 'border-hairline';
          if (isAnswerCorrect) cls = 'border-success/60 bg-success/10 text-success';
          else if (isUserChoice) cls = 'border-danger/60 bg-danger/10 text-danger';
          return (
            <div key={i} className={'flex items-center gap-3 p-3 rounded-xl border text-sm ' + cls}>
              <span className="w-6 h-6 rounded-full bg-elevated border border-hairline text-xs font-bold flex items-center justify-center">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt}</span>
              {isAnswerCorrect && <Check size={14} className="text-success" />}
              {isUserChoice && !isAnswerCorrect && <X size={14} className="text-danger" />}
            </div>
          );
        })}
      </div>

      <motion.div className="mt-4 p-3 bg-elevated/40 rounded-xl border border-hairline">
        <div className="text-xs text-ink-dim font-semibold uppercase tracking-[0.12em] mb-1">Explanation</div>
        <p className="text-sm leading-relaxed text-ink">{q.explanation}</p>
      </motion.div>

      <div className="mt-3 flex items-center gap-2">
        <button className="btn-secondary text-xs py-1.5" onClick={fetchAI} disabled={aiLoading}>
          <Sparkles size={14} /> {aiLoading ? 'Thinking…' : 'Ask AI for deeper explanation'}
        </button>
      </div>

      {aiData && (
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          className="mt-3 p-4 rounded-xl border border-accent/30 bg-accent/5 space-y-3"
        >
          <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-1">
            <Sparkles size={12} /> AIST Ace AI Tutor
          </div>
          
          <div className="font-semibold text-white">{aiData.feedback}</div>
          
          {aiData.why && (
            <div className="text-sm">
              <span className="text-ink-dim font-medium">Logic: </span>
              <span className="text-ink-muted">{aiData.why}</span>
            </div>
          )}

          {aiData.mistake_analysis && (
            <div className="p-2 rounded bg-danger/5 border border-danger/10 text-xs">
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
            <div className="mt-2 p-3 rounded-lg bg-accent/10 border border-accent/30 border-dashed">
              <div className="text-[9px] font-bold text-accent uppercase mb-1">Mini Challenge</div>
              <div className="text-xs text-white font-medium italic">{aiData.mini_challenge}</div>
            </div>
          )}
        </motion.div>
      )}
    </Card>
  );
}
