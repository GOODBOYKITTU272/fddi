import { paper1 } from './paper1/index.js';
import { paper2 } from './paper2/index.js';
import { paper3 } from './paper3/index.js';
import { paper4 } from './paper4/index.js';
import { paper5 } from './paper5/index.js';
import { paper6 } from './paper6/index.js';

// Fully populated 175-question mocks for the FDDI AIST M.Des/MBA program.
export const papers = {
  1: paper1,
  2: paper2,
  3: paper3,
  4: paper4,
  5: paper5,
  6: paper6
};

export function getPaper(id) {
  const p = papers[Number(id)];
  if (p) return p;
  // Fallback: if paper doesn't exist, return a placeholder
  return { ...paper1, id: Number(id), title: `Mock ${id} — Coming Soon`, isPlaceholder: true };
}
