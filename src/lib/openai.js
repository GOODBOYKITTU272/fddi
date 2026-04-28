// Calls the Supabase Edge Function "explain" which proxies to OpenAI.
// The OpenAI API key NEVER lives in the browser — it sits as a Supabase secret on the Edge Function.
// See supabase/functions/explain/index.ts for the server-side proxy.
import { supabase } from './supabase.js';

export async function askExplanation({ question, options, correctIndex, userIndex, tag }) {
  if (!supabase) {
    return {
      ok: false,
      text:
        'AI explanations are disabled because the Supabase edge function is not configured yet.\n\n' +
        'See README → "Enable AI explanations" to set this up.'
    };
  }
  try {
    const { data, error } = await supabase.functions.invoke('explain', {
      body: { question, options, correctIndex, userIndex, tag }
    });
    if (error) return { ok: false, text: 'Edge function error: ' + error.message };
    return { ok: true, text: data?.text || 'No explanation returned.' };
  } catch (e) {
    return { ok: false, text: 'Network error: ' + e.message };
  }
}
