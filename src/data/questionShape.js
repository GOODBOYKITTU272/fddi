/**
 * Question shape used across all mock papers.
 *  - id        unique within paper, e.g. "1A07" = mock 1, section A, q7
 *  - section   'A' | 'B' | 'C' | 'D'
 *  - text      question stem (markdown-lite — \n becomes <br/>)
 *  - options   array of 4 strings (display labels include numbering)
 *  - correct   0-indexed correct option
 *  - marks     1 or 2
 *  - difficulty 1 (easy) | 2 (medium) | 3 (hard)
 *  - tag       canonical question type — used for YouTube video lookup
 *  - explanation  short textual rationale
 *  - passageRef   optional: id of an RC passage to show with this question
 */
export const q = (id, section, text, options, correct, explanation, { difficulty = 1, marks, tag = '', passageRef = null, image = null } = {}) => {
  // Default marks: Section A = 2, others = 1
  const finalMarks = marks ?? (section === 'A' ? 2 : 1);
  
  return {
    id, 
    section, 
    text, 
    options, 
    correct: correct - 1, 
    explanation, 
    difficulty, 
    marks: finalMarks, 
    tag, 
    passageRef, 
    image
  };
};
