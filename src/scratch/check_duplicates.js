/**
 * Duplicate Question Checker — compares all question texts across all 6 papers.
 * Finds exact and near-duplicate questions (normalized text match).
 */

import { papers } from '../data/papers.js';

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ' ')   // strip punctuation
    .replace(/\s+/g, ' ')          // collapse whitespace
    .trim();
}

// Collect all questions with metadata
const allQuestions = [];

for (const [paperId, paper] of Object.entries(papers)) {
  for (const [sectionCode, questions] of Object.entries(paper.sections)) {
    for (const q of questions) {
      allQuestions.push({
        paperId: Number(paperId),
        section: sectionCode,
        id: q.id,
        text: q.text,
        normalizedText: normalize(q.text),
        options: q.options,
        correct: q.correct,
        tag: q.tag
      });
    }
  }
}

console.log(`\n=== FDDI AIST Question Duplicate Audit ===`);
console.log(`Total questions across all papers: ${allQuestions.length}\n`);

// ── 1. Find EXACT text duplicates ──────────────────────────────────────────
const textMap = new Map();
for (const q of allQuestions) {
  const key = q.normalizedText;
  if (!textMap.has(key)) textMap.set(key, []);
  textMap.get(key).push(q);
}

const exactDuplicates = [...textMap.entries()].filter(([, qs]) => qs.length > 1);

if (exactDuplicates.length === 0) {
  console.log('✅ No exact duplicate questions found across papers.\n');
} else {
  console.log(`🚨 EXACT DUPLICATES FOUND: ${exactDuplicates.length} groups\n`);
  for (const [normText, qs] of exactDuplicates) {
    console.log(`─── Duplicate Group ───`);
    console.log(`  Normalized: "${normText.substring(0, 100)}..."`);
    for (const q of qs) {
      console.log(`  → Paper ${q.paperId} | Section ${q.section} | ID: ${q.id} | Tag: ${q.tag}`);
      console.log(`    Full: "${q.text.substring(0, 120)}..."`);
      console.log(`    Options: ${JSON.stringify(q.options)}`);
      console.log(`    Correct: Option ${q.correct + 1}`);
    }
    console.log('');
  }
}

// ── 2. Find NEAR-DUPLICATES (first 60 chars match after normalization) ─────
const shortMap = new Map();
for (const q of allQuestions) {
  const shortKey = q.normalizedText.substring(0, 60);
  if (!shortMap.has(shortKey)) shortMap.set(shortKey, []);
  shortMap.get(shortKey).push(q);
}

const nearDuplicates = [...shortMap.entries()]
  .filter(([, qs]) => qs.length > 1)
  // exclude already found exact duplicates
  .filter(([key, qs]) => {
    const fullKeys = new Set(qs.map(q => q.normalizedText));
    return fullKeys.size > 1; // different full texts but similar starts
  });

if (nearDuplicates.length === 0) {
  console.log('✅ No near-duplicate questions found (first 60 chars match).\n');
} else {
  console.log(`⚠️  NEAR-DUPLICATES FOUND: ${nearDuplicates.length} groups\n`);
  for (const [shortKey, qs] of nearDuplicates) {
    console.log(`─── Near-Duplicate Group ───`);
    console.log(`  Shared prefix: "${shortKey}..."`);
    for (const q of qs) {
      console.log(`  → Paper ${q.paperId} | Section ${q.section} | ID: ${q.id} | Tag: ${q.tag}`);
      console.log(`    Full: "${q.text.substring(0, 150)}"`);
    }
    console.log('');
  }
}

// ── 3. Per-section summary ─────────────────────────────────────────────────
console.log(`\n=== Per-Section Question Counts ===`);
const sectionCounts = {};
for (const q of allQuestions) {
  const key = `Paper ${q.paperId} Section ${q.section}`;
  sectionCounts[key] = (sectionCounts[key] || 0) + 1;
}
for (const [key, count] of Object.entries(sectionCounts).sort()) {
  console.log(`  ${key}: ${count} questions`);
}

// ── 4. Cross-paper same-section comparison ─────────────────────────────────
console.log(`\n=== Cross-Paper Same-Section Overlap ===`);
const sectionGroups = {};
for (const q of allQuestions) {
  if (!sectionGroups[q.section]) sectionGroups[q.section] = {};
  if (!sectionGroups[q.section][q.paperId]) sectionGroups[q.section][q.paperId] = [];
  sectionGroups[q.section][q.paperId].push(q);
}

for (const [section, paperMap] of Object.entries(sectionGroups).sort()) {
  const paperIds = Object.keys(paperMap).map(Number).sort();
  for (let i = 0; i < paperIds.length; i++) {
    for (let j = i + 1; j < paperIds.length; j++) {
      const p1 = paperIds[i], p2 = paperIds[j];
      const set1 = new Set(paperMap[p1].map(q => q.normalizedText));
      const overlap = paperMap[p2].filter(q => set1.has(q.normalizedText));
      if (overlap.length > 0) {
        console.log(`\n  🚨 Section ${section}: Paper ${p1} ↔ Paper ${p2} — ${overlap.length} identical questions:`);
        for (const q of overlap) {
          const match = paperMap[p1].find(q1 => q1.normalizedText === q.normalizedText);
          console.log(`    • [${match.id}] ↔ [${q.id}]: "${q.text.substring(0, 100)}..."`);
        }
      }
    }
  }
}

// ── 5. Check if same answer + options appear across papers ─────────────────
console.log(`\n\n=== Same Options+Answer Across Papers (different question text) ===`);
const optionMap = new Map();
for (const q of allQuestions) {
  const key = JSON.stringify(q.options.map(o => normalize(o)).sort()) + '|' + q.correct;
  if (!optionMap.has(key)) optionMap.set(key, []);
  optionMap.get(key).push(q);
}

const sharedOptions = [...optionMap.entries()]
  .filter(([, qs]) => {
    const paperSet = new Set(qs.map(q => q.paperId));
    return paperSet.size > 1 && qs.length > 1;
  })
  .filter(([, qs]) => {
    // Only flag if question texts are similar (not just shared generic options)
    const texts = new Set(qs.map(q => q.normalizedText.substring(0, 40)));
    return texts.size < qs.length; // some overlap
  });

if (sharedOptions.length > 0) {
  for (const [, qs] of sharedOptions) {
    console.log(`  Shared answer set across papers:`);
    for (const q of qs) {
      console.log(`    → Paper ${q.paperId} | ${q.id} | "${q.text.substring(0, 80)}..."`);
    }
    console.log('');
  }
} else {
  console.log('  ✅ No suspicious shared option+answer patterns found.\n');
}

console.log(`\n=== Audit Complete ===\n`);
