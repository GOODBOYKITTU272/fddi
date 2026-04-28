import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { MOCK_SCHEDULE, TARGET_SCORE_PCT } from '../config.js';

const STORAGE_KEY = 'aist-ace-progress-v1';

const ProgressContext = createContext(null);

const defaultState = {
  // sectionAccuracy: 0-100 per section
  sectionAccuracy: { A: 28, B: 42, C: 22, D: 31 },
  // mockResults: { [mockId]: { score, marks, total, sectionScores, completedAt } }
  mockResults: {},
  streak: 1,
  lastActiveDate: new Date().toISOString().slice(0, 10)
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return defaultState;
  }
}

export function ProgressProvider({ children }) {
  const [state, setState] = useState(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const recordMockAttempt = useCallback((mockId, payload) => {
    setState((s) => {
      const sectionScores = payload.sectionScores || s.sectionAccuracy;
      const sectionAccuracy = { ...s.sectionAccuracy };
      // Blend old + new accuracy 50/50 to track gradual improvement
      Object.entries(sectionScores).forEach(([k, v]) => {
        const prev = sectionAccuracy[k] ?? 0;
        sectionAccuracy[k] = Math.round(prev * 0.4 + v * 0.6);
      });
      return {
        ...s,
        mockResults: { ...s.mockResults, [mockId]: { ...payload, completedAt: new Date().toISOString() } },
        sectionAccuracy
      };
    });
  }, []);

  const resetProgress = useCallback(() => {
    setState(defaultState);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const completedMocks = Object.keys(state.mockResults).length;
  const overallAccuracy = avg(Object.values(state.sectionAccuracy));
  const readinessPct = Math.min(
    100,
    Math.round(overallAccuracy * 0.7 + (completedMocks / MOCK_SCHEDULE.length) * 100 * 0.3)
  );

  // Weakest → strongest section ranking
  const sectionRanking = Object.entries(state.sectionAccuracy)
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
