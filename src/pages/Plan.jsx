import { useState, useEffect } from 'react';
import { Calendar, BookOpen, Target, CheckCircle2, Check } from 'lucide-react';
import { Card, Chip } from '../components/ui.jsx';

const dayPlans = [
  { id: 'd1', date: 'Apr 28 (Mon)', focus: 'Foundation Day', tasks: ['Review syllabus', 'Memorise idioms 1–50', 'Watch: Paper folding NIFT (8 min)'], type: 'study' },
  { id: 'd2', date: 'Apr 29 (Tue)', focus: 'Mock 1 — Diagnostic',  tasks: ['Take Mock 1 (2.5h)', 'Review wrong answers', 'Note weak areas'], type: 'mock' },
  { id: 'd3', date: 'Apr 30 (Wed)', focus: 'Section A drill',      tasks: ['Direction sense practice', 'Blood relations', 'Number series'], type: 'study' },
  { id: 'd4', date: 'May 1 (Thu)',  focus: 'Mock 2 — Foundation',  tasks: ['Take Mock 2 (2.5h)', 'Compare to Mock 1', 'Review explanations'], type: 'mock' },
  { id: 'd5', date: 'May 2 (Fri)',  focus: 'GK + Current affairs', tasks: ['Republic Day 2026 chief guest', 'ISRO 2025–2026 missions', 'Olympics + Asian Games medals'], type: 'study' },
  { id: 'd6', date: 'May 3 (Sat)',  focus: 'Mock 3 — Build-Up',    tasks: ['Take Mock 3 (2.5h)', 'Review weakest section'], type: 'mock' },
  { id: 'd7', date: 'May 4 (Sun)',  focus: 'Design Aptitude',      tasks: ['Famous paintings flashcards', 'Color theory primer', 'Pattern grouping practice'], type: 'study' },
  { id: 'd8', date: 'May 5 (Mon)',  focus: 'Mock 4 — Stretch',     tasks: ['Take Mock 4 (2.5h)', 'Time management drill'], type: 'mock' },
  { id: 'd9', date: 'May 6 (Tue)',  focus: 'English revision',     tasks: ['Top 200 vocab', 'Para-jumbles', 'RC speed-reading drill'], type: 'study' },
  { id: 'd10', date: 'May 7 (Wed)',  focus: 'Mock 5 — Exam Sim',    tasks: ['Take Mock 5 in exam conditions', 'No phone, no breaks'], type: 'mock' },
  { id: 'd11', date: 'May 8 (Thu)',  focus: 'Mock 6 — Final Sim',   tasks: ['Take Mock 6', 'Review all 6 mocks', 'Build confidence list'], type: 'mock' },
  { id: 'd12', date: 'May 9 (Fri)',  focus: 'Light review only',    tasks: ['Skim flashcards', 'Sleep early', 'No new content'], type: 'study' },
  { id: 'd13', date: 'May 10 (Sat)', focus: 'EXAM DAY',             tasks: ['Reach centre 1h early', 'Carry admit card + ID', 'Stay calm, read instructions'], type: 'exam' }
];

export default function Plan() {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('fddi_plan_progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('fddi_plan_progress', JSON.stringify(completed));
  }, [completed]);

  const toggleDay = (id) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const progressCount = Object.values(completed).filter(Boolean).length;
  const progressPercent = Math.round((progressCount / dayPlans.length) * 100);

  return (
    <div className="space-y-6 animate-fade-in pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="heading-xl">Your 13-Day Roadmap</h2>
          <p className="text-ink-muted max-w-lg">Spaced practice + targeted drilling. 1 mock every 2 days, study days in between for review.</p>
        </div>
        <div className="bg-elevated border border-hairline p-4 rounded-2xl md:w-64">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-ink-dim">Total Progress</span>
            <span className="text-sm font-bold text-accent">{progressPercent}%</span>
          </div>
          <div className="h-1.5 w-full bg-hairline rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-500 ease-out" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        {dayPlans.map((d, i) => {
          const isDone = completed[d.id];
          const Icon = d.type === 'mock' ? Target : d.type === 'exam' ? CheckCircle2 : BookOpen;
          const tone = d.type === 'mock' ? 'accent' : d.type === 'exam' ? 'success' : 'neutral';
          
          return (
            <Card key={d.id} className={`flex flex-col md:flex-row md:items-start gap-4 transition-all ${isDone ? 'opacity-60 grayscale-[0.5]' : ''}`}>
              <div className="flex items-center gap-3 md:w-56 flex-shrink-0">
                <button 
                  onClick={() => toggleDay(d.id)}
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${
                    isDone 
                      ? 'bg-success/20 border-success text-success' 
                      : 'bg-elevated border-hairline text-ink-muted hover:border-accent'
                  }`}
                >
                  {isDone ? <Check size={18} /> : <Icon size={18} />}
                </button>
                <div>
                  <div className={`font-semibold text-sm ${isDone ? 'line-through text-ink-dim' : ''}`}>{d.date}</div>
                  <div className="text-xs text-ink-dim">Day {i + 1}</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`font-semibold ${isDone ? 'text-ink-dim line-through' : ''}`}>{d.focus}</div>
                  <Chip tone={isDone ? 'neutral' : tone}>{d.type}</Chip>
                </div>
                <ul className="space-y-1">
                  {d.tasks.map((t, j) => (
                    <li key={j} className={`text-sm flex items-start gap-2 ${isDone ? 'text-ink-dim' : 'text-ink-muted'}`}>
                      <span className={`${isDone ? 'text-ink-dim' : 'text-accent'} mt-0.5`}>•</span>
                      <span className={isDone ? 'line-through' : ''}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
