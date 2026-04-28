import { useMemo } from 'react';
import { useProgress } from '../state/ProgressContext.jsx';
import { EXAM_DATE } from '../config.js';

function fmtDate(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function daysUntil(target) {
  const ms = new Date(target).getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export function Header() {
  const { readinessPct } = useProgress();
  const today = useMemo(() => new Date(), []);
  const countdown = daysUntil(EXAM_DATE);

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-canvas/70 border-b border-hairline">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              ApplyWizz<span className="text-accent">AIST</span>
            </h1>
            <span className="text-ink-dim font-semibold text-sm">// Preparation Portal</span>
          </div>
          <p className="text-xs text-ink-muted mt-0.5">
            M.Des Entrance · Exam Date: {fmtDate(new Date(EXAM_DATE))}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Pill label="Today" value={fmtDate(today)} tone="default" />
          <Pill label="Countdown" value={`${countdown} Days`} tone="accent" />
        </div>
      </div>
    </header>
  );
}

function Pill({ label, value, tone }) {
  const tones = {
    default: 'bg-elevated border-hairline text-ink',
    accent: 'bg-accent text-white border-accent shadow-glow',
    success: 'bg-elevated border-hairline text-success'
  };
  return (
    <div className={'rounded-xl border px-3 py-1.5 text-xs ' + tones[tone]}>
      <div className="text-[10px] font-semibold uppercase tracking-[0.12em] opacity-80">{label}</div>
      <div className="font-bold">{value}</div>
    </div>
  );
}
