import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  url && anonKey
    ? createClient(url, anonKey, {
        auth: { persistSession: false } // no auth — single-user mode
      })
    : null;

// Single-device "user" identifier (no auth)
const DEVICE_KEY = 'aist-ace-device-id';
export function deviceId() {
  let id = localStorage.getItem(DEVICE_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(DEVICE_KEY, id);
  }
  return id;
}

// Persist mock attempt to Supabase (no-op if not configured)
export async function persistAttempt(payload) {
  if (!supabase) return { ok: false, reason: 'no-config' };
  const { error } = await supabase
    .from('mock_attempts')
    .upsert({ 
      id: payload.attemptId,
      device_id: deviceId(), 
      mock_id: payload.mockId,
      score: payload.score || 0,
      marks: payload.marks || 0,
      total: payload.total || 0,
      section_scores: payload.sectionScores || {},
      answers: payload.answers || {},
      forced: payload.forced || false
    });
  if (error) return { ok: false, reason: error.message };
  return { ok: true };
}

// ── Drill Session Tracking ──────────────────────────────────────────────────

const PLAYER_NAME = 'Pranavi';

/** Create a new drill session in Supabase, returns session id */
export async function createDrillSession({ mockId, modules, timeMinutes, totalQs }) {
  if (!supabase) return { ok: false, reason: 'no-config' };
  const { data, error } = await supabase
    .from('drill_sessions')
    .insert({
      device_id: deviceId(),
      player_name: PLAYER_NAME,
      mock_id: mockId,
      modules,
      time_minutes: timeMinutes,
      total_qs: totalQs
    })
    .select('id')
    .single();
  if (error) { console.warn('createDrillSession failed:', error.message); return { ok: false }; }
  return { ok: true, sessionId: data.id };
}

/** Log a single question response inside a drill session */
export async function logDrillResponse({ sessionId, questionId, section, tag, selected, correctIdx, isCorrect, timeMs }) {
  if (!supabase || !sessionId) return;
  const { error } = await supabase
    .from('drill_responses')
    .insert({
      session_id: sessionId,
      question_id: questionId,
      section,
      tag,
      selected,
      correct_idx: correctIdx,
      is_correct: isCorrect,
      time_ms: timeMs
    });
  if (error) console.warn('logDrillResponse failed:', error.message);
}

/** Update the drill session summary when it finishes */
export async function finishDrillSession({ sessionId, correct, wrong, scorePct, streakBest }) {
  if (!supabase || !sessionId) return;
  const { error } = await supabase
    .from('drill_sessions')
    .update({
      correct,
      wrong,
      score_pct: scorePct,
      streak_best: streakBest,
      finished: true,
      finished_at: new Date().toISOString()
    })
    .eq('id', sessionId);
  if (error) console.warn('finishDrillSession failed:', error.message);
}

/** Get Pranavi's recent drill history for motivation context */
export async function getDrillHistory(limit = 10) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from('drill_sessions')
    .select('*')
    .eq('device_id', deviceId())
    .eq('finished', true)
    .order('created_at', { ascending: false })
    .limit(limit);
  if (error) { console.warn('getDrillHistory failed:', error.message); return []; }
  return data || [];
}

export { PLAYER_NAME };
