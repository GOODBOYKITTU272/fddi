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
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
              ApplyWizz<span className="text-accent">AIST</span>
            </h1>
            <span className="text-ink-dim font-semibold text-[10px] sm:text-sm hidden xs:inline">// Preparation Portal</span>
          </div>
          <p className="text-[10px] sm:text-xs text-ink-muted mt-0.5 truncate">
            M.Des Entrance · Exam Date: {fmtDate(new Date(EXAM_DATE))}
          </p>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <Pill label="Today" value={fmtDate(today)} tone="default" className="hidden sm:block" />
          <Pill label="Countdown" value={`${countdown} Days`} tone="accent" />
        </div>
      </div>
    </header>
  );
}

function Pill({ label, value, tone, className = '' }) {
  const tones = {
    default: 'bg-elevated border-hairline text-ink',
    accent: 'bg-accent text-white border-accent shadow-glow',
    success: 'bg-elevated border-hairline text-success'
  };
  return (
    <div className={'rounded-xl border px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs ' + tones[tone] + ' ' + className}>
      <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] opacity-80">{label}</div>
      <div className="font-bold whitespace-nowrap">{value}</div>
    </div>
  );
}
