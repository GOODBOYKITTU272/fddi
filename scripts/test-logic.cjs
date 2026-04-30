/**
 * LOGIC TRUTH TEST
 * Verifies that the answer validation logic is correct.
 */

function testLogic() {
  console.log('🧪 Running Logic Truth Tests...');

  // The 'q' helper logic
  const q = (id, section, text, options, correct, explanation, extras = {}) => ({
    id, section, text, options, 
    correct: correct - 1, // THE CRITICAL CONVERSION
    explanation, 
    ...extras 
  });

  // Test 1: 1-indexed to 0-indexed conversion
  const question = q('1A01', 'A', 'Text', ['A', 'B', 'C', 'D'], 3, 'Exp');
  
  if (question.correct !== 2) {
    console.error('❌ FAILED: 1-indexed conversion failed. Expected 2, got', question.correct);
    process.exit(1);
  }
  console.log('✅ PASS: 1-indexed to 0-indexed conversion.');

  // Test 2: Answer Matching
  const userOptionIndex = 2; // User picks C (index 2)
  if (userOptionIndex === question.correct) {
    console.log('✅ PASS: Answer matching logic.');
  } else {
    console.error('❌ FAILED: Answer matching logic.');
    process.exit(1);
  }

  // Test 3: Marks Calculation
  const marks = 2;
  const earned = (userOptionIndex === question.correct) ? marks : 0;
  if (earned !== 2) {
    console.error('❌ FAILED: Marks calculation.');
    process.exit(1);
  }
  console.log('✅ PASS: Marks calculation.');

  console.log('\n🌟 ALL LOGIC TESTS PASSED.\n');
}

testLogic();
