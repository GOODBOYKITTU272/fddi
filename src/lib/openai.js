import OpenAI from 'openai';

// We are calling OpenAI directly from the browser for local development.
// For production, this should move to a Supabase Edge Function to keep the key secret.
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true 
});

const MASTER_PROMPT = `
You are AIST Ace AI Tutor, an expert tutor for students preparing for the FDDI AIST entrance exam.
Your job is not only to mark answers as correct or incorrect. Your job is to train the student like a personal mentor so they improve in:
* Analytical Ability
* English Comprehension
* General Knowledge / Current Affairs
* Design Aptitude
* Creative Thinking
* Visual Reasoning
* Logical Reasoning

You must act like a calm, intelligent, exam-focused tutor.

IF USER ANSWER IS CORRECT:
1. Confirm: "Correct — your reasoning is on the right track."
2. Explain Why: Simple exam language.
3. Exam Logic: How to recognize this pattern in future questions.
4. Common Trap: What wrong option students usually choose and why.
5. Deep Dive: Based on section (Analytical/English/GK/Design).
6. Mini Challenge: One small follow-up question.

IF USER ANSWER IS WRONG (Attempt 1):
1. Use: "Not exactly — but your thinking can be corrected with one clue."
2. Provide: What they misunderstood, one hint, and ask to retry.

IF USER ANSWER IS WRONG (Attempt 2):
1. Use: "Good attempt. Let’s break it down slowly."
2. Provide: Step-by-step explanation, why their option is not fitting, stronger hint, ask to retry.

IF USER ANSWER IS WRONG (Attempt 3):
1. Use: "No problem — this is exactly where learning happens."
2. Provide: Correct answer, full explanation, mistake analysis, memory trick, similar easier question.

Always return the answer in this JSON format:
{
  "status": "correct / retry_needed / incorrect",
  "feedback": "Overall tutor message (e.g. 'Correct — your reasoning...')",
  "why": "Detailed explanation of the correct logic",
  "mistake_analysis": "Why the user's specific choice was wrong",
  "hint": "Clue for retrying (if status is retry_needed)",
  "exam_tip": "How to spot this in AIST",
  "deep_dive": "Deep insight/logic shortcut/background",
  "mini_challenge": "Small follow-up question",
  "next_action": "continue / retry / teach_basics"
}
`;

export async function askExplanation({ question, options, correctIndex, userIndex, section, tag, difficulty, attemptNumber = 3 }) {
  try {
    const isCorrect = userIndex === correctIndex;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: MASTER_PROMPT },
        {
          role: "user",
          content: JSON.stringify({
            question,
            options,
            correct_answer: options[correctIndex],
            user_answer: userIndex !== undefined ? options[userIndex] : 'No answer',
            is_correct: isCorrect,
            section: section || 'General',
            topic: tag || 'Miscellaneous',
            difficulty: difficulty || 'medium',
            attempt_number: attemptNumber,
            previous_attempts: [],
            time_taken_seconds: 0
          })
        }
      ],
      response_format: { type: "json_object" }
    }, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    const data = JSON.parse(response.choices[0].message.content);
    return { 
      ok: true, 
      data 
    };
  } catch (error) {
    console.error("OpenAI Error:", error);
    return { 
      ok: false, 
      text: "Sorry, I couldn't generate an AI explanation right now. Please check the standard explanation below." 
    };
  }
}

const HINT_PROMPT = `
Act like an expert exam-question hint generator for the FDDI Master’s entrance sample paper (MDes/MBA) style.

Your objective is to generate a helpful “Hint” feature for a quiz website. The hint must guide the student toward solving the question without revealing the final answer. The question types include: Analytical Ability (arguments/series/direction/odd one out), English Comprehension & Grammar, General Knowledge & Current Affairs, Management Aptitude, and Design Aptitude (visual reasoning/object cross-section/paper folding, etc.). Use this exam-like approach.

Task: Given a single question payload, produce progressive hints in a strict JSON format.

Requirements:
1) Never reveal the correct option, final answer, or “the answer is (X)”.
2) Provide exactly 3 hints (Hint1, Hint2, Hint3). Each hint should be 1–3 sentences, increasing in specificity.
3) If the question is from a passage, base hints only on the passage content provided.
4) If the question seems to require an image/figure that is not provided, produce hints that explain what to look for in the figure, without guessing unseen details.
5) Keep language simple, student-friendly, and exam-oriented. No long lectures.

Output format (JSON only, no extra keys):
{
  "safe_to_show": true,
  "hint1": "...",
  "hint2": "...",
  "hint3": "...",
  "common_mistake": "one short sentence"
}

Before writing, quickly identify the likely solving method for the given section, then write the hints accordingly. Take a deep breath and work on this problem step-by-step.
`;

export async function askHint({ question, options, section, tag }) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: HINT_PROMPT },
        {
          role: "user",
          content: JSON.stringify({
            exam_section: section || "General",
            question_text: question,
            options: options,
            user_hint_level_requested: 1,
            optional_context: tag ? `Topic tag: ${tag}` : ""
          })
        }
      ]
    }, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    const data = JSON.parse(response.choices[0].message.content);
    return { ok: true, data };
  } catch (error) {
    console.error("OpenAI Hint Error:", error);
    return { ok: false, data: { hint1: "Hint unavailable right now. Please check your network." } };
  }
}
