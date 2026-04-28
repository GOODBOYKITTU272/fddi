import { useEffect, useMemo, useState, useCallback } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronLeft, ChevronRight, Flag, CheckCircle2, AlertTriangle, X } from 'lucide-react';
import { getPaper } from '../data/papers.js';
import { SECTIONS, MOCK_DURATION_MIN } from '../config.js';
import { useTimer, fmtTime } from '../hooks/useTimer.js';
import { useProgress } from '../state/ProgressContext.jsx';
import { Chip } from '../components/ui.jsx';

const sectionOrder = ['A', 'B', 'C', 'D'];

export default function MockTaker() {
  const { id } = useParams();
  const nav = useNavigate();
  const paper = useMemo(() => getPaper(id), [id]);
  const { recordMockAttempt } = useProgress();

  const [searchParams] = useSearchParams();
  const startSection = searchParams.get('section') || 'A';
  const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : null;

  const [activeSection, setActiveSection] = useState(startSection);
  const [activeIndex, setActiveIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { qid: optionIndex }
  const [marked, setMarked] = useState(new Set());
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const remaining = useTimer(MOCK_DURATION_MIN * 60, {
    onExpire: () => submit(true)
  });

  const sectionList = useMemo(() => {
    const list = paper.sections[activeSection] || [];
    return limit ? list.slice(0, limit) : list;
  }, [paper, activeSection, limit]);

  const currentQ = sectionList[activeIndex];
  const passage = currentQ?.passageRef ? paper.passages?.[currentQ.passageRef] : null;

  // ---- Within-mock adaptive: track per-section running accuracy and re-pool from easier/harder pool ----
  // Implementation: when accuracy in current section drops below 50% (after >=4 attempted),
  // we sort remaining questions in that section by ascending difficulty.
  // When >75%, we sort by descending difficulty. Otherwise leave as-is.
  const adaptedSectionList = useMemo(() => {
    const attempted = sectionList.filter((q) => answers[q.id] != null);
    if (attempted.length < 4) return sectionList;
    const correct = attempted.filter((q) => answers[q.id] === q.correct).length;
    const acc = correct / attempted.length;
    if (acc < 0.5) {
      // pull easier ones forward (keep already-attempted in place)
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

  function selectOption(idx) {
    setAnswers((a) => ({ ...a, [adaptedQ.id]: idx }));
  }
  function toggleMark() {
    setMarked((m) => {
      const next = new Set(m);
      if (next.has(adaptedQ.id)) next.delete(adaptedQ.id);
      else next.add(adaptedQ.id);
      return next;
    });
  }
  function clearResponse() {
    setAnswers((a) => {
      const next = { ...a };
      delete next[adaptedQ.id];
      return next;
    });
  }
  function gotoIndex(i) {
    setActiveIndex(Math.max(0, Math.min(adaptedSectionList.length - 1, i)));
  }
  function gotoSection(code) {
    setActiveSection(code);
    setActiveIndex(0);
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

  const submit = useCallback((forced = false) => {
    let totalMarks = 0;
    let earnedMarks = 0;
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
    nav(`/review/${paper.id}`);
  }, [answers, paper, nav, recordMockAttempt]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'm' || e.key === 'M') toggleMark();
      if (['1', '2', '3', '4'].includes(e.key)) selectOption(Number(e.key) - 1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const totalAttempted = Object.keys(answers).length;
  const isDrill = limit != null;
  const totalQuestions = isDrill ? limit : sectionOrder.reduce((s, code) => s + paper.sections[code].length, 0);
  const lowTime = remaining < 600; // last 10 min

  return (
    <div className="min-h-screen flex flex-col bg-canvas">
      {/* Top bar */}
      <header className="border-b border-hairline px-4 md:px-8 py-3 flex items-center justify-between gap-4 backdrop-blur-md bg-canvas/85 sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button className="btn-ghost px-2 py-1" onClick={() => setShowExitConfirm(true)}>
            <X size={18} />
          </button>
          <div>
            <div className="font-semibold tracking-tight">{paper.title}</div>
            <div className="text-xs text-ink-muted">
              {paper.isPlaceholder ? 'Preview using Mock 1 — full paper drops before scheduled date' : paper.difficulty + ' · ' + totalQuestions + ' Qs · 200 marks'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className={'flex items-center gap-2 font-mono font-semibold ' + (lowTime ? 'text-danger animate-pulse-soft' : 'text-ink')}>
            <Clock size={16} />
            <span className="text-lg">{fmtTime(remaining)}</span>
          </div>
          <button
            className="btn-primary px-4 py-2 text-sm"
            onClick={() => setShowSubmitConfirm(true)}
          >
            Submit
          </button>
        </div>
      </header>

      {/* Section tabs */}
      <div className="border-b border-hairline px-4 md:px-8 py-2 bg-surface/60 flex items-center gap-1 overflow-x-auto">
        {sectionOrder.map((code) => {
          if (isDrill && code !== activeSection) return null; // Only show active section in drill mode
          const sec = SECTIONS[code];
          const list = isDrill ? sectionList : paper.sections[code];
          const attempted = list.filter((q) => answers[q.id] != null).length;
          const isActive = code === activeSection;
          return (
            <button
              key={code}
              onClick={() => gotoSection(code)}
              className={'flex items-center gap-2 px-4 py-2 rounded-full text-sm transition whitespace-nowrap ' +
                (isActive
                  ? `bg-${sec.color}/15 text-${sec.color} ring-1 ring-${sec.color}/30`
                  : 'text-ink-muted hover:text-white')}
            >
              <span className={`w-1.5 h-1.5 rounded-full bg-${sec.color}`} />
              <span className="font-semibold">{sec.short}</span>
              <span className="text-xs opacity-70">{attempted}/{list.length}</span>
            </button>
          );
        })}
        <div className="ml-auto text-xs text-ink-dim flex items-center gap-2">
          Attempted: <span className="font-semibold text-white">{totalAttempted}/{totalQuestions}</span>
        </div>
      </div>

      {/* Main grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 max-w-7xl w-full mx-auto px-4 md:px-8 py-6">
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
                    Section {activeSection} · {adaptedQ.marks} {adaptedQ.marks > 1 ? 'marks' : 'mark'}
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

              <div className="mt-6 grid gap-2">
                {adaptedQ.options.map((opt, i) => {
                  const selected = answers[adaptedQ.id] === i;
                  return (
                    <button
                      key={i}
                      onClick={() => selectOption(i)}
                      className={
                        'flex items-center gap-3 w-full text-left p-4 rounded-xl border transition ' +
                        (selected
                          ? 'border-accent bg-accent/10 text-white'
                          : 'border-hairline hover:border-accent/50 hover:bg-elevated/40')
                      }
                    >
                      <span
                        className={
                          'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ' +
                          (selected ? 'bg-accent text-white' : 'bg-elevated text-ink-muted border border-hairline')
                        }
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="flex-1 text-sm">{opt}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <button className="btn-secondary" onClick={prev} disabled={activeSection === 'A' && activeIndex === 0}>
              <ChevronLeft size={16} /> Previous
            </button>
            <span className="text-xs text-ink-dim">Use ← → to navigate · 1–4 to answer · M to mark</span>
            <button className="btn-primary" onClick={next}>
              Save & Next <ChevronRight size={16} />
            </button>
          </div>
        </main>

        {/* Question palette */}
        <aside className="lg:sticky lg:top-28 self-start space-y-4">
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
