import sectionA from './sectionA.js';
import sectionB from './sectionB.js';
import sectionC from './sectionC.js';
import sectionD from './sectionD.js';
import { passages } from './passages.js';

export const paper1 = {
  id: 1,
  title: 'Mock 1 — M.Des Master Paper',
  difficulty: 'Balanced',
  durationMin: 150,
  sections: { A: sectionA, B: sectionB, C: sectionC, D: sectionD },
  passages,
  totalQuestions: sectionA.length + sectionB.length + sectionC.length + sectionD.length
};
