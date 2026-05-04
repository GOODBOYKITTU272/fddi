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
  const { sectionAccuracy, readinessPct, zone, mockResults, completedMocks, streak, overallAccuracy, attempts } = useProgress();
  const [isDrillOpen, setIsDrillOpen] = useState(false);
  
  const drillAttempts = [...attempts].filter(a => a.isDrill && a.status === 'completed').sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

  const nextMock = MOCK_SCHEDULE.find((m) => !mockResults[m.id]) || MOCK_SCHEDULE[MOCK_SCHEDULE.length - 1];

  return (
    <div className="space-y-6 animate-fade-in">
      <QuickDrillModal isOpen={isDrillOpen} onClose={() => setIsDrillOpen(false)} />
      
      {/* Hero / Mission */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 relative overflow-hidden bg-gradient-to-br from-emerald-900 to-slate-950 border border-emerald-500/20"
      >
        <div className="absolute inset-0 bg-accent-grad opacity-[0.08]" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 sm:gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              AIST 2026 Preparation
            </h2>
            <p className="text-emerald-100/70 mb-4 sm:mb-6 text-sm sm:text-base">
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

            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                className="btn-primary text-sm sm:text-base"
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

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-white/5 backdrop-blur-md p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10">
              <p className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider mb-1">Streak</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">{streak} Days</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10">
              <p className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider mb-1">Avg Score</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">{Math.round(overallAccuracy)}%</p>
            </div>
          </div>
        </div>

        {/* Decorative glows */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </motion.section>

      {/* Adaptive Flash Drill - THE NEW SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4 sm:gap-6">
        <div 
          onClick={() => setIsDrillOpen(true)}
          className="group cursor-pointer relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-900 to-slate-900 border border-white/5 hover:border-accent/40 transition-all p-5 sm:p-8 flex flex-col justify-between min-h-[180px] sm:min-h-[220px]"
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
          <span className="text-ink-dim text-xs sm:text-sm">6 Papers • 1,050 Total Questions</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MOCK_SCHEDULE.map((mock) => {
            const result = mockResults[mock.id];
            const isNext = nextMock.id === mock.id;
            const isLocked = mock.id > 1 && !mockResults[1]; 
            const duration = MOCK_DURATION_MIN; 
            const questions = TOTAL_QUESTIONS; 

            return (
              <motion.div
                key={mock.id}
                whileHover={!isLocked ? { y: -4 } : {}}
                className={`card relative flex flex-col group transition-all duration-300 ${isNext && !isLocked ? 'ring-accent ring-1' : ''} ${isLocked ? 'opacity-60 grayscale-[0.5]' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    result ? 'bg-success/10 text-success' : isLocked ? 'bg-white/5 text-ink-dim' : isNext ? 'bg-accent/10 text-accent' : 'bg-white/5 text-ink-dim'
                  }`}>
                    {result ? 'Completed' : isLocked ? 'Locked' : isNext ? 'Ready' : 'Upcoming'}
                  </div>
                  <div className={`${isLocked ? 'text-ink-dim' : 'text-ink-dim group-hover:text-accent'} transition-colors`}>
                    <Award size={18} />
                  </div>
                </div>

                <h4 className="text-lg font-bold mb-1 leading-tight">{mock.title}</h4>
                <div className="flex items-center gap-3 text-xs text-ink-muted mb-4">
                  <span className="flex items-center gap-1"><Clock size={12} /> {duration}m</span>
                  <span className="flex items-center gap-1"><BarChart3 size={12} /> {questions} Qs</span>
                </div>

                {result && (
                  <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-ink-dim uppercase font-bold">Your Score</span>
                      <span className="text-xs font-bold text-white">{Math.round(result.score)}%</span>
                    </div>
                    <Progress value={result.score} tone={result.score >= TARGET_SCORE_PCT ? 'success' : 'warn'} className="h-1.5 mb-2" />
                    <div className="text-[10px] text-ink-muted flex justify-between">
                      <span>{result.marks} / {result.total} Marks</span>
                      <span className="font-semibold text-accent">Review Details</span>
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-4 border-t border-hairline flex items-center justify-between">
                  <span className="text-[11px] font-medium text-ink-dim">
                    {new Date(mock.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                  <button
                    className={`flex items-center gap-1 text-sm font-bold transition-all ${
                      result || (isNext && !isLocked) ? 'text-accent hover:text-white' : 'text-ink-dim'
                    }`}
                    onClick={() => {
                       if (result) nav(`/review/${result.attemptId}`);
                       else if (!isLocked) nav(`/mock/${mock.id}`);
                    }}
                    disabled={isLocked || (!result && !isNext)}
                  >
                    {result ? 'Review' : isLocked ? 'Complete Mock 1 First' : isNext ? 'Start Test' : 'Upcoming'}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Drill History */}
      {drillAttempts.length > 0 && (
        <section className="pb-10">
          <div className="flex items-end justify-between mb-5">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Zap className="text-accent" />
              Flash Drill Report
            </h3>
            <span className="text-ink-dim text-xs sm:text-sm">Activity Log</span>
          </div>

          {/* Report Card Summary */}
          <div className="mb-6 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/10 via-indigo-500/5 to-slate-900 p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="text-[10px] text-accent font-bold uppercase tracking-[0.15em] mb-1">Cumulative Report Card</div>
              <div className="text-2xl sm:text-3xl font-black text-white">{drillAttempts.length} <span className="text-lg font-bold text-ink-muted">Drills</span></div>
            </div>
            
            <div className="flex gap-6 sm:gap-8 bg-slate-950/40 p-4 rounded-xl border border-white/5 w-full sm:w-auto justify-around sm:justify-start">
              <div className="text-center">
                <div className="text-[10px] text-ink-dim uppercase tracking-wider font-bold mb-1">Avg Score</div>
                <div className="text-xl sm:text-2xl font-black text-white">
                  {Math.round(drillAttempts.reduce((acc, a) => acc + a.score, 0) / drillAttempts.length)}%
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-[10px] text-ink-dim uppercase tracking-wider font-bold mb-1">Total Marks</div>
                <div className="text-xl sm:text-2xl font-black text-success">
                  +{drillAttempts.reduce((acc, a) => acc + a.marks, 0)}
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-[10px] text-ink-dim uppercase tracking-wider font-bold mb-1">Qs Solved</div>
                <div className="text-xl sm:text-2xl font-black text-white">
                  {drillAttempts.reduce((acc, a) => acc + (a.drillQuestions?.length || Object.keys(a.answers || {}).length), 0)}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {drillAttempts.slice(0, 6).map((attempt) => {
              const date = new Date(attempt.submittedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
              return (
                <motion.div
                  key={attempt.attemptId}
                  whileHover={{ y: -4 }}
                  className="card relative flex flex-col group transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-[10px] text-ink-dim font-medium">{date}</div>
                    <div className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent">
                      {Math.round(attempt.score)}% Score
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {attempt.drillModules && attempt.drillModules.map(m => (
                      <span key={m} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-ink-muted">
                        {SECTIONS[m]?.short || m}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-3 border-t border-hairline flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-ink-dim flex items-center gap-1">
                       <Award size={12}/> {attempt.marks} / {attempt.total} Marks
                    </span>
                    <button
                      className="flex items-center gap-1 text-xs font-bold text-accent hover:text-white transition-colors"
                      onClick={() => nav(`/review/${attempt.attemptId}`)}
                    >
                      Review <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
