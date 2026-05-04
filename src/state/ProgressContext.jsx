import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { MOCK_SCHEDULE, TARGET_SCORE_PCT } from '../config.js';
import { persistAttempt } from '../lib/supabase.js';

const STORAGE_KEY = 'aist-ace-progress-v2'; // Bump version for new schema

const ProgressContext = createContext(null);

const defaultState = {
  // Array of all test attempts (full mocks + drills)
  // Each attempt: { attemptId, mockId, startedAt, submittedAt, score, marks, total, sectionScores, answers, isDrill, drillModules, drillQuestions }
  attempts: [],
  streak: 1,
  lastActiveDate: new Date().toISOString().slice(0, 10)
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    
    // Migration from v1 to v2 if needed
    if (!parsed.attempts && parsed.mockResults) {
       const legacyAttempts = Object.entries(parsed.mockResults).map(([id, data]) => ({
         attemptId: `legacy-${id}`,
         mockId: Number(id),
         ...data,
         startedAt: data.completedAt,
         submittedAt: data.completedAt
       }));
       return { ...defaultState, ...parsed, attempts: legacyAttempts };
    }
    
    return { ...defaultState, ...parsed };
  } catch {
    return defaultState;
  }
}

export function ProgressProvider({ children }) {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const startMockAttempt = useCallback(async (payload) => {
    const attemptId = payload.attemptId || crypto.randomUUID();
    const newAttempt = {
      ...payload,
      attemptId,
      status: 'in_progress',
      startedAt: new Date().toISOString(),
      score: 0, marks: 0, total: 0, sectionScores: {}, answers: {}
    };
    
    setState((s) => ({
      ...s,
      attempts: [...s.attempts, newAttempt]
    }));

    await persistAttempt(newAttempt).catch(() => {});
    return attemptId;
  }, []);

  const recordMockAttempt = useCallback(async (payload) => {
    const attemptId = payload.attemptId || crypto.randomUUID();
    const newAttempt = {
      ...payload,
      attemptId,
      status: 'completed',
      submittedAt: new Date().toISOString()
    };

    const res = await persistAttempt(newAttempt);
    if (!res.ok) {
      console.warn('Supabase sync failed:', res.reason);
      throw new Error(res.reason);
    }

    setState((s) => ({
      ...s,
      attempts: [...s.attempts.filter(a => a.attemptId !== attemptId), newAttempt]
    }));
    
    return attemptId;
  }, []);

  const resetProgress = useCallback(() => {
    setState(defaultState);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  // --- Derived Analytics (Single Source of Truth) ---

  // 1. Section Accuracy (Weighted average of latest 3 attempts per module)
  const sectionAccuracy = useMemo(() => {
    const accuracy = { A: 0, B: 0, C: 0, D: 0 };
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    
    // Process attempts in reverse to get latest first
    [...state.attempts].reverse().forEach(att => {
      if (!att.sectionScores) return;
      Object.entries(att.sectionScores).forEach(([sec, score]) => {
        if (counts[sec] < 3) { // Only take latest 3 for trends
          accuracy[sec] += score;
          counts[sec]++;
        }
      });
    });

    Object.keys(accuracy).forEach(sec => {
      if (counts[sec] > 0) accuracy[sec] = Math.round(accuracy[sec] / counts[sec]);
    });
    
    return accuracy;
  }, [state.attempts]);

  // 2. Latest Mock Results (for UI display cards)
  const mockResults = useMemo(() => {
    const results = {};
    state.attempts.forEach(att => {
      if (att.isDrill) return;
      results[att.mockId] = att; // Latest one wins for the "Dashboard Card"
    });
    return results;
  }, [state.attempts]);

  const completedMocks = Object.keys(mockResults).length;
  const overallAccuracy = avg(Object.values(sectionAccuracy));
  
  const readinessPct = Math.min(
    100,
    Math.round(overallAccuracy * 0.7 + (completedMocks / MOCK_SCHEDULE.length) * 100 * 0.3)
  );

  const sectionRanking = Object.entries(sectionAccuracy)
    .sort((a, b) => a[1] - b[1])
    .map(([code]) => code);

  const zone = readinessPct < 50 ? 'Foundation Zone'
    : readinessPct < 80 ? 'Growth Zone'
    : readinessPct < 95 ? 'Target Zone'
    : 'Mastery Zone';

  const targetPct = TARGET_SCORE_PCT;

  return (
    <ProgressContext.Provider
      value={{
        ...state,
        sectionAccuracy,
        mockResults,
        startMockAttempt,
        recordMockAttempt,
        resetProgress,
        readinessPct,
        overallAccuracy,
        sectionRanking,
        zone,
        targetPct,
        completedMocks
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}

function avg(arr) {
  if (!arr.length) return 0;
  return arr.reduce((s, v) => s + v, 0) / arr.length;
}
