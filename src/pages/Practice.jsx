import { useNavigate } from 'react-router-dom';
import { Card, Chip } from '../components/ui.jsx';
import { SECTIONS } from '../config.js';
import { ArrowRight } from 'lucide-react';

export default function Practice() {
  const nav = useNavigate();
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="heading-xl">Section Drills</h2>
        <p className="text-ink-muted">Practice one section at a time without the full-mock pressure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.values(SECTIONS).map((s) => (
          <Card key={s.code}>
            <div className="flex items-center justify-between">
              <div>
                <Chip tone="accent">Section {s.code}</Chip>
                <h3 className="heading-md mt-3">{s.name}</h3>
                <p className="text-sm text-ink-muted mt-1">
                  {s.questions} questions · {s.totalMarks} marks · {s.marksPerQ}× marks/Q
                </p>
              </div>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-${s.color}/10 text-${s.color} font-extrabold text-2xl`}>
                {s.code}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                className="btn-secondary text-sm py-2"
                onClick={() => nav(`/mock/1?section=${s.code}&limit=10`)}
              >
                10-Q Drill
              </button>
              <button
                className="btn-primary text-sm py-2"
                onClick={() => nav(`/mock/1?section=${s.code}&full=1`)}
              >
                Full Section <ArrowRight size={14} />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="heading-md">Need a quick refresher?</h3>
            <p className="text-sm text-ink-muted mt-1">
              Watch curated 5–10 minute YouTube videos covering each question type.
            </p>
          </div>
          <button className="btn-secondary" onClick={() => nav('/stats')}>
            View Library
          </button>
        </div>
      </Card>
    </div>
  );
}
