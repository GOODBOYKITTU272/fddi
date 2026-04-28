import OpenAI from 'openai';

// We are calling OpenAI directly from the browser for local development.
// For production, this should move to a Supabase Edge Function to keep the key secret.
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true 
});

export async function askExplanation({ question, options, correctIndex, userIndex, tag }) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a professional AIST (Footwear Design & Development Institute) exam lecturer. Your goal is to help a student who is preparing for the M.Des entrance exam. Provide clear, concise explanations in under 100 words. Use a motivating tone."
        },
        {
          role: "user",
          content: `Question: ${question}\nOptions: ${options.join(', ')}\nCorrect Answer: ${options[correctIndex]}\nStudent Answer: ${userIndex !== undefined ? options[userIndex] : 'No answer'}\n\nPlease explain why the correct answer is right and where the student might have gone wrong.`
        }
      ]
    });
    
    return { 
      ok: true, 
      text: response.choices[0].message.content 
    };
  } catch (error) {
    console.error("OpenAI Error:", error);
    return { 
      ok: false, 
      text: "Sorry, I couldn't generate an AI explanation right now. Please check the standard explanation below." 
    };
  }
}
