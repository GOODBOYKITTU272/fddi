// Supabase Edge Function: "explain"
// Proxies a request to OpenAI so the API key never leaves the server.
// Deploy with:
//   supabase functions deploy explain --project-ref <YOUR_PROJECT_REF>
//   supabase secrets set OPENAI_API_KEY=sk-...   # NEW key, never the one you pasted in chat
//
// The function expects a JSON body with: { question, options, correctIndex, userIndex, tag }
// and returns: { text: string }

import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const { question, options, correctIndex, userIndex, tag } = await req.json();
    const key = Deno.env.get('OPENAI_API_KEY');
    if (!key) {
      return json({ text: 'OpenAI key not configured on server.' }, 500);
    }

    const correctText = options?.[correctIndex] ?? '(unknown)';
    const userText = userIndex == null ? '(skipped)' : (options?.[userIndex] ?? '(invalid)');

    const prompt = `You are a patient AIST entrance-exam tutor. The student is preparing for the M.Des exam at FDDI Hyderabad. Be encouraging and concise.

Question type: ${tag || 'general'}
Question: ${question}
Options: ${options?.map((o: string, i: number) => `${String.fromCharCode(65 + i)}) ${o}`).join('  |  ')}
Correct answer: ${correctText}
Student's answer: ${userText}

Explain in 4-6 short sentences:
1. Why the correct answer is correct (use a memory hook).
2. Why the student's answer (if different) is a common trap.
3. One tip to recognise this pattern next time.`;

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 400,
        temperature: 0.4
      })
    });
    if (!r.ok) {
      const err = await r.text();
      return json({ text: `OpenAI error: ${err.slice(0, 300)}` }, 500);
    }
    const data = await r.json();
    const text = data?.choices?.[0]?.message?.content?.trim() || 'No answer returned.';
    return json({ text }, 200);
  } catch (e) {
    return json({ text: 'Server error: ' + (e as Error).message }, 500);
  }
});

function json(obj: unknown, status: number) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
  });
}
