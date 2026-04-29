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
    });
    
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
