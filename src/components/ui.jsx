import { motion } from 'framer-motion';

export function Card({ className = '', children, as: As = 'div', ...rest }) {
  return (
    <As className={'card ' + className} {...rest}>
      {children}
    </As>
  );
}

export function Progress({ value, max = 100, color = 'bg-accent', className = '' }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={'progress-track ' + className}>
      <motion.div
        className={'progress-fill ' + color}
        initial={{ width: 0 }}
        animate={{ width: pct + '%' }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      />
    </div>
  );
}

export function Chip({ tone = 'neutral', children }) {
  const tones = {
    neutral: 'border-hairline text-ink-muted bg-elevated/60',
    accent: 'border-accent/40 text-accent bg-accent/10',
    success: 'border-success/40 text-success bg-success/10',
    warn: 'border-warn/40 text-warn bg-warn/10',
    danger: 'border-danger/40 text-danger bg-danger/10'
  };
  return <span className={'chip ' + tones[tone]}>{children}</span>;
}

export function SectionIcon({ section, className = '' }) {
  const map = {
    A: { color: 'text-sectionA', bg: 'bg-sectionA/10', label: 'A' },
    B: { color: 'text-sectionB', bg: 'bg-sectionB/10', label: 'B' },
    C: { color: 'text-sectionC', bg: 'bg-sectionC/10', label: 'C' },
    D: { color: 'text-sectionD', bg: 'bg-sectionD/10', label: 'D' }
  };
  const cfg = map[section] || map.A;
  return (
    <div className={'w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ' + cfg.bg + ' ' + cfg.color + ' ' + className}>
      {cfg.label}
    </div>
  );
}

export function Empty({ title, subtitle, action }) {
  return (
    <div className="card text-center py-14">
      <div className="text-2xl font-bold mb-2">{title}</div>
      {subtitle && <p className="text-ink-muted max-w-md mx-auto">{subtitle}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
