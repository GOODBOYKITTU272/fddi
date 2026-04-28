import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { LayoutGrid, CalendarDays, Target, Trophy } from 'lucide-react';
import { Header } from './Header.jsx';

const tabs = [
  { to: '/', label: 'Home', icon: LayoutGrid },
  { to: '/plan', label: 'Plan', icon: CalendarDays },
  { to: '/practice', label: 'Practice', icon: Target },
  { to: '/stats', label: 'Stats', icon: Trophy }
];

export function AppShell() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 pt-6 pb-32">
        <Outlet />
      </main>
      <BottomNav pathname={pathname} />
    </div>
  );
}

function BottomNav({ pathname }) {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="glass rounded-full px-2 py-2 flex gap-1 shadow-soft">
        {tabs.map(({ to, label, icon: Icon }) => {
          const active = to === '/' ? pathname === '/' : pathname.startsWith(to);
          return (
            <NavLink
              key={to}
              to={to}
              className={
                'flex flex-col items-center gap-0.5 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] transition ' +
                (active
                  ? 'bg-accent text-white shadow-glow'
                  : 'text-ink-muted hover:text-white')
              }
            >
              <Icon size={18} strokeWidth={2.2} />
              <span>{label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
