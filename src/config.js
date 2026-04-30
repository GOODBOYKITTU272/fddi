// Central app config
export const EXAM_DATE = '2026-05-10T09:30:00+05:30';
export const TARGET_SCORE_PCT = 80;
export const PLAYER_NAME = 'Pranavi';
export const PASSING_SCORE = 50;

// Section metadata
export const SECTIONS = {
  A: {
    code: 'A',
    name: 'Analytical Ability',
    short: 'Analytical',
    color: 'sectionA',
    questions: 25,
    marksPerQ: 2,
    totalMarks: 50,
    lecturerTip:
      'Section A is worth DOUBLE marks. Master direction sense, blood relations, syllogisms, paper folding, and number series — these alone can add 40+ marks.',
    youtubeTopics: ['paper folding tricks', 'syllogism shortcuts', 'number series patterns', 'direction sense problems', 'blood relations puzzles']
  },
  B: {
    code: 'B',
    name: 'English Comprehension & Grammar',
    short: 'English',
    color: 'sectionB',
    questions: 50,
    marksPerQ: 1,
    totalMarks: 50,
    lecturerTip:
      'Read the RC questions BEFORE the passage to spot keywords. Memorise common idioms, one-word substitutions, and the top 200 synonym/antonym pairs.',
    youtubeTopics: ['reading comprehension tricks', 'idioms and phrases', 'one word substitution', 'synonyms antonyms vocab']
  },
  C: {
    code: 'C',
    name: 'General Knowledge & Current Affairs',
    short: 'GK & Current Affairs',
    color: 'sectionC',
    questions: 50,
    marksPerQ: 1,
    totalMarks: 50,
    lecturerTip:
      'Focus the last 11 days on current affairs from Jan 2025 to Apr 2026 — Republic Day chief guests, ISRO missions, Olympic medals, awards, and economic survey highlights.',
    youtubeTopics: ['current affairs 2025 2026', 'Indian polity revision', 'Indian history quick revision', 'science gk for entrance']
  },
  D: {
    code: 'D',
    name: 'Design Aptitude (M.Des)',
    short: 'Design Aptitude',
    color: 'sectionD',
    questions: 50,
    marksPerQ: 1,
    totalMarks: 50,
    lecturerTip:
      'M.Des Section D rewards visual thinkers. Drill paper folding, mirror image, embedded figures, and famous painters/movements. Memorise the design principles and color theory basics.',
    youtubeTopics: ['paper folding NIFT', 'mirror image reasoning', 'famous paintings identification', 'color theory basics', 'design principles balance contrast']
  }
};

// Mock paper schedule
export const MOCK_SCHEDULE = [
  { id: 1, title: 'Mock 1 — Diagnostic',           difficulty: 'Easy',          date: '2026-04-29' },
  { id: 2, title: 'Mock 2 — Foundation',           difficulty: 'Easy-Medium',   date: '2026-05-01' },
  { id: 3, title: 'Mock 3 — Build-Up',             difficulty: 'Medium',        date: '2026-05-03' },
  { id: 4, title: 'Mock 4 — Stretch',              difficulty: 'Medium-Hard',   date: '2026-05-05' },
  { id: 5, title: 'Mock 5 — Exam Sim',             difficulty: 'Hard',          date: '2026-05-07' },
  { id: 6, title: 'Mock 6 — Final Sim',            difficulty: 'Exam Replica',  date: '2026-05-08' }
];

// Total questions per mock paper
export const TOTAL_QUESTIONS = 175;
export const TOTAL_MARKS = 200;
export const MOCK_DURATION_MIN = 150; // 2h 30m
