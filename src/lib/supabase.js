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
    .insert({ device_id: deviceId(), ...payload });
  if (error) return { ok: false, reason: error.message };
  return { ok: true };
}
