import { paper1 } from './paper1/index.js';

// Papers 2–6 will be added in subsequent sessions before each scheduled mock date.
// For now Mock 1 is the diagnostic — the engine reads the same shape for all papers.
export const papers = {
  1: paper1
  // 2: paper2,  // delivered before May 1
  // 3: paper3,  // delivered before May 3
  // 4: paper4,
  // 5: paper5,
  // 6: paper6,
};

export function getPaper(id) {
  const p = papers[Number(id)];
  if (p) return p;
  // Fallback: clone Mock 1 with new id so the app remains usable for the 5 placeholder mocks
  return { ...paper1, id: Number(id), title: `Mock ${id} — Coming Soon`, isPlaceholder: true };
}
