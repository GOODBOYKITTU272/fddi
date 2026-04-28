import { Calendar, BookOpen, Target, CheckCircle2 } from 'lucide-react';
import { Card, Chip } from '../components/ui.jsx';

const dayPlans = [
  { date: 'Apr 28 (Mon)', focus: 'Foundation Day', tasks: ['Review syllabus', 'Memorise idioms 1–50', 'Watch: Paper folding NIFT (8 min)'], type: 'study' },
  { date: 'Apr 29 (Tue)', focus: 'Mock 1 — Diagnostic',  tasks: ['Take Mock 1 (2.5h)', 'Review wrong answers', 'Note weak areas'], type: 'mock' },
  { date: 'Apr 30 (Wed)', focus: 'Section A drill',      tasks: ['Direction sense practice', 'Blood relations', 'Number series'], type: 'study' },
  { date: 'May 1 (Thu)',  focus: 'Mock 2 — Foundation',  tasks: ['Take Mock 2 (2.5h)', 'Compare to Mock 1', 'Review explanations'], type: 'mock' },
  { date: 'May 2 (Fri)',  focus: 'GK + Current affairs', tasks: ['Republic Day 2026 chief guest', 'ISRO 2025–2026 missions', 'Olympics + Asian Games medals'], type: 'study' },
  { date: 'May 3 (Sat)',  focus: 'Mock 3 — Build-Up',    tasks: ['Take Mock 3 (2.5h)', 'Review weakest section'], type: 'mock' },
  { date: 'May 4 (Sun)',  focus: 'Design Aptitude',      tasks: ['Famous paintings flashcards', 'Color theory primer', 'Pattern grouping practice'], type: 'study' },
  { date: 'May 5 (Mon)',  focus: 'Mock 4 — Stretch',     tasks: ['Take Mock 4 (2.5h)', 'Time management drill'], type: 'mock' },
  { date: 'May 6 (Tue)',  focus: 'English revision',     tasks: ['Top 200 vocab', 'Para-jumbles', 'RC speed-reading drill'], type: 'study' },
  { date: 'May 7 (Wed)',  focus: 'Mock 5 — Exam Sim',    tasks: ['Take Mock 5 in exam conditions', 'No phone, no breaks'], type: 'mock' },
  { date: 'May 8 (Thu)',  focus: 'Mock 6 — Final Sim',   tasks: ['Take Mock 6', 'Review all 6 mocks', 'Build confidence list'], type: 'mock' },
  { date: 'May 9 (Fri)',  focus: 'Light review only',    tasks: ['Skim flashcards', 'Sleep early', 'No new content'], type: 'study' },
  { date: 'May 10 (Sat)', focus: 'EXAM DAY',             tasks: ['Reach centre 1h early', 'Carry admit card + ID', 'Stay calm, read instructions'], type: 'exam' }
];

export default function Plan() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="heading-xl">Your 13-Day Roadmap</h2>
        <p className="text-ink-muted">Spaced practice + targeted drilling. 1 mock every 2 days, study days in between for review.</p>
      </div>

      <div className="grid gap-3">
        {dayPlans.map((d, i) => {
          const Icon = d.type === 'mock' ? Target : d.type === 'exam' ? CheckCircle2 : BookOpen;
          const tone = d.type === 'mock' ? 'accent' : d.type === 'exam' ? 'success' : 'neutral';
          return (
            <Card key={i} className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex items-center gap-3 md:w-56 flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-elevated border border-hairline flex items-center justify-center">
                  <Icon size={18} className="text-ink-muted" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{d.date}</div>
                  <div className="text-xs text-ink-dim">Day {i + 1}</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="font-semibold">{d.focus}</div>
                  <Chip tone={tone}>{d.type}</Chip>
                </div>
                <ul className="space-y-1">
                  {d.tasks.map((t, j) => (
                    <li key={j} className="text-sm text-ink-muted flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{t}</span>
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
