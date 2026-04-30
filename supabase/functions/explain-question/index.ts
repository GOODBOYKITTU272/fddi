import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { OpenAI } from "https://deno.land/x/openai@v4.24.1/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { question, options, correctIndex, userIndex, section, tag, difficulty, attemptNumber } = await req.json()
    const apiKey = Deno.env.get('OPENAI_API_KEY')
    
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set')
    }

    const openai = new OpenAI({ apiKey })

    const systemPrompt = `You are AIST Ace, a senior design tutor for FDDI AIST M.Des entrance exam.
Your goal is to explain concepts clearly, identify logical traps, and provide "Deep Dives" for student Pranavi.
Output ONLY a JSON object.`

    const userPrompt = `
Question: ${question}
Options: ${JSON.stringify(options)}
Correct Answer: ${options[correctIndex]}
Student's Answer: ${userIndex !== null ? options[userIndex] : 'Skipped'}
Section: ${section}
Tag: ${tag}
Difficulty: ${difficulty}/3
Attempt: ${attemptNumber}

Provide structured feedback in JSON format:
{
  "feedback": "...", 
  "why": "Detailed logical explanation",
  "mistake_analysis": "Identify why the student might have picked the wrong option (if applicable)",
  "exam_tip": "One short tip for this specific type of question",
  "deep_dive": "A 1-2 sentence concept explanation related to the tag",
  "mini_challenge": "A follow-up question or logic puzzle"
}`

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      response_format: { type: "json_object" }
    })

    const response = chatCompletion.choices[0].message.content

    return new Response(response, {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
