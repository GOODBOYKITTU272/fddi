import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Zap, CheckCircle2 } from 'lucide-react';
import { SECTIONS } from '../config.js';

export default function QuickDrillModal({ isOpen, onClose }) {
  const nav = useNavigate();
  const [time, setTime] = useState(15);
  const [selected, setSelected] = useState(['A', 'B', 'C', 'D']);

  const toggleSection = (code) => {
    setSelected(prev => 
      prev.includes(code) 
        ? prev.filter(c => c !== code) 
        : [...prev, code]
    );
  };

  const handleStart = () => {
    const mods = selected.join(',');
    nav(`/mock/1?smart=1&time=${time}&mods=${mods}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md grid place-items-center p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="card max-w-md w-full bg-slate-900 border-emerald-500/20"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-emerald-400">
            <Zap size={20} className="fill-current" />
            <h3 className="text-xl font-bold text-white">Smart Flash Drill</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-8">
          {/* Time Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-ink-dim block mb-4 flex items-center justify-between">
              How much time do you have?
              <span className="text-emerald-400 text-lg">{time} Minutes</span>
            </label>
            <input 
              type="range" 
              min="5" 
              max="60" 
              step="5" 
              value={time} 
              onChange={(e) => setTime(Number(e.target.value))}
              className="w-full accent-emerald-500 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2 text-[10px] text-ink-dim">
              <span>5m</span>
              <span>15m</span>
              <span>30m</span>
              <span>45m</span>
              <span>60m</span>
            </div>
          </div>

          {/* Module Selector */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-ink-dim block mb-4">
              Select focus modules
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Object.values(SECTIONS).map(s => {
                const isSel = selected.includes(s.code);
                return (
                  <button
                    key={s.code}
                    onClick={() => toggleSection(s.code)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                      isSel 
                        ? `bg-${s.color}/10 border-${s.color}/50 text-white` 
                        : 'bg-white/5 border-white/5 text-ink-dim opacity-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold bg-${s.color}/20 text-${s.color}`}>
                      {s.code}
                    </div>
                    <div>
                      <div className="text-sm font-bold leading-none mb-1">{s.short}</div>
                      <div className="text-[10px] opacity-60 line-clamp-1">{s.name}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4">
            <button 
              className="btn-primary w-full py-4 text-lg bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              disabled={selected.length === 0}
              onClick={handleStart}
            >
              Start Adaptive Drill
              <CheckCircle2 size={20} className="ml-2" />
            </button>
            <p className="text-[10px] text-center text-ink-dim mt-4 uppercase tracking-widest font-medium">
              The AI will balance difficulty and question counts automatically
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
