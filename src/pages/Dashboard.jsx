import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, ArrowRight, Brain, BookOpen, Globe, Lightbulb, Clock, BarChart3, Zap, Calendar, Award, ChevronRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, Progress, Chip } from '../components/ui.jsx';
import { useProgress } from '../state/ProgressContext.jsx';
import { SECTIONS, MOCK_SCHEDULE, TARGET_SCORE_PCT, TOTAL_QUESTIONS, MOCK_DURATION_MIN } from '../config.js';
import QuickDrillModal from '../components/QuickDrillModal.jsx';

const sectionIcons = { A: Brain, B: BookOpen, C: Globe, D: Lightbulb };

export default function Dashboard() {
  const nav = useNavigate();
  const { sectionAccuracy, readinessPct, zone, mockResults, completedMocks } = useProgress();
  const [isDrillOpen, setIsDrillOpen] = useState(false);

  const nextMock = MOCK_SCHEDULE.find((m) => !mockResults[m.id]) || MOCK_SCHEDULE[MOCK_SCHEDULE.length - 1];

  return (
    <div className="space-y-6 animate-fade-in">
      <QuickDrillModal isOpen={isDrillOpen} onClose={() => setIsDrillOpen(false)} />
      
      {/* Hero / Mission */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl p-8 md:p-10 relative overflow-hidden bg-gradient-to-br from-emerald-900 to-slate-950 border border-emerald-500/20"
      >
        <div className="absolute inset-0 bg-accent-grad opacity-[0.08]" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              AIST 2026 Preparation
            </h2>
            <p className="text-emerald-100/70 mb-6">
              Targeting FDDI Hyderabad. You need 160/200 to secure your seat.
              The countdown to May 10th is on.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs font-semibold border border-white/10">
                <Calendar size={14} className="text-emerald-400" />
                <span>Exam: May 10</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 text-amber-300 rounded-full text-xs font-semibold border border-amber-500/20">
                <Zap size={14} />
                <span>{TARGET_SCORE_PCT}% Goal (160 Marks)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                className="btn-primary"
                onClick={() => nav(`/mock/${nextMock.id}`)}
              >
                <Play size={16} />
                {completedMocks === 0 ? 'Start Diagnostic Session' : `Resume — ${nextMock.title}`}
              </button>
              <button className="btn-secondary" onClick={() => nav('/plan')}>
                Study Roadmap <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 min-w-[140px]">
              <p className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider mb-1">Streak</p>
              <p className="text-3xl font-bold text-white">3 Days</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 min-w-[140px]">
              <p className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider mb-1">Avg Score</p>
              <p className="text-3xl font-bold text-white">0%</p>
            </div>
          </div>
        </div>

        {/* Decorative glows */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </motion.section>

      {/* Adaptive Flash Drill - THE NEW SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        <div 
          onClick={() => setIsDrillOpen(true)}
          className="group cursor-pointer relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-900 border border-white/5 hover:border-accent/40 transition-all p-8 flex flex-col justify-between min-h-[220px]"
        >
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
              <Zap size={24} className="fill-current" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Adaptive Flash Drill</h3>
            <p className="text-ink-muted text-sm max-w-sm">
              Only have 10 minutes? Let AI select the best questions based on your weak areas and available time.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all">
            Launch Adaptive Session <Rocket size={18} />
          </div>
          
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all" />
        </div>

        <Card className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 rounded-full bg-success/10 text-success flex items-center justify-center">
                <BarChart3 size={20} />
             </div>
             <div>
                <div className="text-xs text-ink-dim uppercase font-bold tracking-wider">Exam Readiness</div>
                <div className="text-xl font-bold text-white">{readinessPct}%</div>
             </div>
          </div>
          <Progress value={readinessPct} tone="success" className="h-2 mb-4" />
          <p className="text-[11px] text-ink-muted leading-relaxed">
            Based on your mock performance, you are currently in the <span className="text-white font-bold">{zone} Zone</span>. Keep practicing Section {Object.entries(sectionAccuracy).sort((a,b) => a[1]-b[1])[0]?.[0] || 'D'} to improve.
          </p>
        </Card>
      </section>

      {/* Mock list */}
      <section>
        <div className="flex items-end justify-between mb-5">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="text-accent" />
            Full Mock Papers
          </h3>
          <span className="text-ink-dim text-sm">6 Papers • 1,050 Total Questions</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MOCK_SCHEDULE.map((mock) => {
            const result = mockResults[mock.id];
            const isNext = nextMock.id === mock.id;
            const duration = MOCK_DURATION_MIN; 
            const questions = TOTAL_QUESTIONS; 

            return (
              <motion.div
                key={mock.id}
                whileHover={{ y: -4 }}
                className={`card relative flex flex-col group transition-all duration-300 ${isNext ? 'ring-accent ring-1' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    result ? 'bg-success/10 text-success' : isNext ? 'bg-accent/10 text-accent' : 'bg-white/5 text-ink-dim'
                  }`}>
                    {result ? 'Completed' : isNext ? 'Ready' : 'Upcoming'}
                  </div>
                  <div className="text-ink-dim group-hover:text-accent transition-colors">
                    <Award size={18} />
                  </div>
                </div>

                <h4 className="text-lg font-bold mb-1 leading-tight">{mock.title}</h4>
                <div className="flex items-center gap-3 text-xs text-ink-muted mb-6">
                  <span className="flex items-center gap-1"><Clock size={12} /> {duration}m</span>
                  <span className="flex items-center gap-1"><BarChart3 size={12} /> {questions} Qs</span>
                </div>

                <div className="mt-auto pt-4 border-t border-hairline flex items-center justify-between">
                  <span className="text-[11px] font-medium text-ink-dim">
                    {new Date(mock.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                  <button
                    className={`flex items-center gap-1 text-sm font-bold transition-all ${
                      result || isNext ? 'text-accent hover:text-white' : 'text-ink-dim'
                    }`}
                    onClick={() => nav(result ? `/review/${mock.id}` : `/mock/${mock.id}`)}
                    disabled={!result && !isNext}
                  >
                    {result ? 'Review' : isNext ? 'Start Test' : 'Upcoming'}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
