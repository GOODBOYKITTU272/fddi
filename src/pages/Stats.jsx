import { Card, Chip, Progress } from '../components/ui.jsx';
import { useProgress } from '../state/ProgressContext.jsx';
import { SECTIONS } from '../config.js';
import { youtubeLibrary } from '../data/youtube.js';
import { ExternalLink, TrendingUp } from 'lucide-react';
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer
} from 'recharts';

export default function Stats() {
  const { sectionAccuracy, sectionRanking, mockResults, readinessPct } = useProgress();

  const radarData = Object.values(SECTIONS).map((s) => ({
    section: s.short,
    accuracy: sectionAccuracy[s.code] ?? 0
  }));

  const mockHistory = Object.entries(mockResults)
    .map(([id, r]) => ({ id: Number(id), ...r }))
    .sort((a, b) => a.id - b.id);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="heading-xl">Performance Stats</h2>
        <p className="text-ink-muted">Your trajectory over the last 11 days.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <div className="flex items-center justify-between mb-2">
            <h3 className="heading-md">Section Radar</h3>
            <Chip tone="accent">{Math.round(readinessPct)}% Ready</Chip>
          </div>
          <div className="h-64 -mx-2">
            <ResponsiveContainer>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#23253D" />
                <PolarAngleAxis dataKey="section" tick={{ fill: '#A7AAC9', fontSize: 12 }} />
                <PolarRadiusAxis stroke="#23253D" tick={{ fill: '#6E7194', fontSize: 10 }} domain={[0, 100]} />
                <Radar name="Accuracy" dataKey="accuracy" stroke="#635BFF" fill="#635BFF" fillOpacity={0.35} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h3 className="heading-md mb-4">Weak → Strong</h3>
          <div className="space-y-3">
            {sectionRanking.map((code, i) => {
              const s = SECTIONS[code];
              const acc = sectionAccuracy[code] ?? 0;
              return (
                <div key={code}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold">{i + 1}. {s.short}</span>
                    <span className={acc < 40 ? 'text-danger' : acc < 70 ? 'text-warn' : 'text-success'}>
                      {acc}%
                    </span>
                  </div>
                  <Progress value={acc} color={`bg-${s.color}`} />
                </div>
              );
            })}
          </div>
          <p className="text-xs text-ink-dim mt-4 leading-relaxed">
            <TrendingUp size={12} className="inline mr-1" />
            Spend extra time on the top of this list — it has the biggest impact on your score.
          </p>
        </Card>
      </div>

      <Card>
        <h3 className="heading-md mb-3">Mock History</h3>
        {mockHistory.length === 0 ? (
          <p className="text-sm text-ink-muted">No mocks completed yet. Start your diagnostic mock from the Home tab.</p>
        ) : (
          <div className="space-y-2">
            {mockHistory.map((m) => (
              <div key={m.id} className="flex items-center justify-between p-3 rounded-xl bg-elevated/50 border border-hairline">
                <div>
                  <div className="font-semibold">Mock {m.id}</div>
                  <div className="text-xs text-ink-dim">
                    {new Date(m.completedAt).toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{Math.round(m.score)}%</div>
                  <div className="text-xs text-ink-muted">{m.marks}/{m.total} marks</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      <section>
        <h3 className="heading-md mb-3">Curated YouTube Library</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {youtubeLibrary.map((v) => (
            <a
              key={v.url}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card hover:border-accent group transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Chip tone="neutral">Section {v.section}</Chip>
                  <div className="font-semibold mt-2 group-hover:text-accent transition">{v.title}</div>
                  <div className="text-xs text-ink-muted mt-1">{v.duration} · {v.topic}</div>
                </div>
                <ExternalLink size={14} className="text-ink-dim group-hover:text-accent" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
