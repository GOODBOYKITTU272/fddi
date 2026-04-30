import { supabase } from './supabase';

/**
 * AI EXPLANATION CLIENT
 * 
 * Secure implementation: Calls Supabase Edge Function 'explain-question'
 * instead of direct OpenAI SDK. This keeps the API Key server-side.
 */

export async function askExplanation({ question, options, correctIndex, userIndex, section, tag, difficulty, attemptNumber = 3 }) {
  try {
    const { data, error } = await supabase.functions.invoke('explain-question', {
      body: { 
        question, 
        options, 
        correctIndex, 
        userIndex, 
        section, 
        tag, 
        difficulty, 
        attemptNumber 
      }
    });

    if (error) throw error;
    
    return { 
      ok: true, 
      data 
    };
  } catch (error) {
    console.error("AI Service Error:", error);
    
    // Fallback message for UI
    return { 
      ok: false, 
      text: "AI Tutor is temporarily offline. Please use the standard explanation below." 
    };
  }
}
