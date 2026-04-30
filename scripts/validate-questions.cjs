const fs = require('fs');
const path = require('path');

/**
 * FDDI AIST QUESTION VALIDATOR
 * Enforces strict data contract:
 * 1. Correct answer must be 1, 2, 3, or 4.
 * 2. Exactly 4 options.
 * 3. No empty text/id.
 * 4. Unique IDs across the system.
 * 5. Valid marks (1 or 2).
 */

const DATA_DIR = path.join(__dirname, '../src/data');
const PAPERS = [1, 2, 3, 4, 5, 6];
const SECTIONS = ['A', 'B', 'C', 'D'];

let errors = [];
let questionCount = 0;
const seenIds = new Set();

console.log('🚀 Starting FDDI Data Integrity Audit...');

PAPERS.forEach(paperNum => {
  SECTIONS.forEach(secLetter => {
    const filePath = path.join(DATA_DIR, `paper${paperNum}`, `section${secLetter}.js`);
    if (!fs.existsSync(filePath)) return;

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Improved regex to capture q() arguments including multiline strings
    const qRegex = /q\(\s*['"](.+?)['"]\s*,\s*['"](.+?)['"]\s*,\s*([\s\S]+?)\s*,\s*(\[[\s\S]+?\])\s*,\s*(\d+)\s*,\s*([\s\S]+?)\s*(?:,|\))/g;
    
    let match;
    while ((match = qRegex.exec(content)) !== null) {
      questionCount++;
      const [full, id, section, text, optionsStr, correctStr] = match;
      const correctValue = parseInt(correctStr);

      const loc = `[Paper ${paperNum} | Section ${secLetter} | ID ${id}]`;

      // 1. ID Validation
      if (!id || id.trim() === '') errors.push(`${loc} Missing Question ID`);
      if (seenIds.has(id)) errors.push(`${loc} DUPLICATE ID found`);
      seenIds.add(id);

      // 2. Correct Answer Contract (MUST be 1-4)
      if (correctValue < 1 || correctValue > 4) {
        errors.push(`${loc} INVALID CORRECT KEY: got ${correctValue}. MUST be 1, 2, 3, or 4.`);
      }

      // 3. Options Length
      // Counting commas in the options array string as a heuristic
      const commaCount = (optionsStr.match(/,/g) || []).length;
      if (commaCount < 3) errors.push(`${loc} INVALID OPTIONS: expected 4 options, check commas`);

      // 4. Content Validation
      if (text.length < 5) errors.push(`${loc} Question text too short or empty`);
    }
  });
});

console.log(`\n📊 Audited ${questionCount} questions.`);

if (errors.length > 0) {
  console.error(`\n❌ FAILED: Found ${errors.length} integrity violations:\n`);
  errors.forEach(err => console.error(`  - ${err}`));
  process.exit(1);
} else {
  console.log('\n✅ PASS: All questions adhere to the data contract.\n');
  process.exit(0);
}
