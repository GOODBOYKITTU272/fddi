import { q } from '../questionShape.js';

// SECTION A — Analytical Ability · 25 questions × 2 marks = 50 marks
export default [
  q('1A01', 'A',
    'Statement: Should the voting age in India be reduced to 16 years?\nArgument I: Yes, today\'s youth are socially aware and deserve a voice in governance.\nArgument II: No, most 16-year-olds lack the maturity for responsible voting decisions.',
    ['Only Argument I is strong', 'Only Argument II is strong', 'Both arguments are strong', 'Neither argument is strong'], 3,
    'Both arguments present logically valid perspectives from opposing sides — both are strong.',
    { difficulty: 1, marks: 2, tag: 'Statement-Argument' }),

  q('1A02', 'A',
    'Assertion (A): India became a Republic on January 26, 1950.\nReason (R): The Constitution of India came into force on that date.',
    ['Both A and R are true and R correctly explains A', 'Both A and R are true but R does NOT explain A', 'A is true but R is false', 'A is false, but R is true'], 1,
    'India became a Republic because its Constitution came into force on 26 Jan 1950 — R correctly explains A.',
    { difficulty: 1, marks: 2, tag: 'Assertion-Reason' }),

  q('1A03', 'A',
    'Find the odd one out: 1, 4, 9, 16, 25, 35, 49',
    ['4', '16', '35', '49'], 3,
    'All others are perfect squares (1²,2²,3²,4²,5²,7²). 35 is not.',
    { difficulty: 1, marks: 2, tag: 'Number Series' }),

  q('1A04', 'A',
    'Complete the series: 2, 5, 10, 17, 26, ___',
    ['35', '36', '37', '38'], 3,
    'Differences are +3,+5,+7,+9,+11. Next = 26 + 11 = 37.',
    { difficulty: 1, marks: 2, tag: 'Number Series' }),

  q('1A05', 'A',
    'Radha walks 3 km North, then turns right and walks 4 km. How far is she from her starting point?',
    ['3 km', '5 km', '7 km', '4 km'], 2,
    'North 3 + East 4 → distance √(3²+4²) = 5 km (3-4-5 Pythagorean triplet).',
    { difficulty: 1, marks: 2, tag: 'Direction Sense' }),

  q('1A06', 'A',
    'If CHAIR is coded as DIBJS, how is TABLE coded?',
    ['UBDMG', 'UBCMF', 'UCBMF', 'UCBNG'], 2,
    'Each letter +1: T→U, A→B, B→C, L→M, E→F → UBCMF.',
    { difficulty: 1, marks: 2, tag: 'Coding-Decoding' }),

  q('1A07', 'A',
    'All students are scholars. All scholars are humble.\nWhich conclusion is definitely true?',
    ['All students are humble', 'All humble persons are students', 'Some scholars are not students', 'No student is humble'], 1,
    'Students ⊂ Scholars ⊂ Humble — therefore all students are humble.',
    { difficulty: 1, marks: 2, tag: 'Syllogism' }),

  q('1A08', 'A',
    'Complete the series: 3, 9, 27, 81, ___',
    ['162', '243', '324', '300'], 2,
    'Each term × 3 → 81 × 3 = 243.',
    { difficulty: 1, marks: 2, tag: 'Number Series' }),

  q('1A09', 'A',
    'Ramesh points to Priya and says: "Her father is the only son of my grandfather." How is Priya related to Ramesh?',
    ['Sister', 'Mother', 'Aunt', 'Cousin'], 1,
    'Grandfather\'s only son = Ramesh\'s father. So Priya\'s father = Ramesh\'s father → Priya is Ramesh\'s sister.',
    { difficulty: 2, marks: 2, tag: 'Blood Relations' }),

  q('1A10', 'A',
    'Find the odd one out: Mango, Apple, Banana, Carrot, Orange',
    ['Mango', 'Banana', 'Carrot', 'Orange'], 3,
    'Carrot is a vegetable; the rest are fruits.',
    { difficulty: 1, marks: 2, tag: 'Classification' }),

  q('1A11', 'A',
    'Find the odd one out: 2, 3, 5, 7, 9, 11, 13',
    ['3', '7', '9', '13'], 3,
    'All except 9 are prime; 9 = 3×3 is composite.',
    { difficulty: 1, marks: 2, tag: 'Number Series' }),

  q('1A12', 'A',
    'Complete the Fibonacci series: 1, 1, 2, 3, 5, 8, 13, ___',
    ['18', '19', '20', '21'], 4,
    'Each term is the sum of the previous two: 8 + 13 = 21.',
    { difficulty: 1, marks: 2, tag: 'Number Series' }),

  q('1A13', 'A',
    'Arun walks 6 km East, then 8 km North. How far from his starting point?',
    ['8 km', '14 km', '10 km', '12 km'], 3,
    '6-8-10 Pythagorean triplet.',
    { difficulty: 1, marks: 2, tag: 'Direction Sense' }),

  q('1A14', 'A',
    'If DELHI is coded as EFMIJ, how is MUMBAI coded?',
    ['NVNCBJ', 'NVNCBH', 'NUMCBJ', 'NVMBAI'], 1,
    'Each letter +1: M→N, U→V, M→N, B→C, A→B, I→J → NVNCBJ.',
    { difficulty: 2, marks: 2, tag: 'Coding-Decoding' }),

  q('1A15', 'A',
    'No fish can walk on land. All sharks are fish.\nWhich conclusion follows?',
    ['Some sharks can walk on land', 'No sharks can walk on land', 'All animals that walk are not fish', 'Sharks live only in water'], 2,
    'All sharks ⊂ fish AND no fish walks on land → no shark walks on land.',
    { difficulty: 2, marks: 2, tag: 'Syllogism' }),

  q('1A16', 'A',
    'Complete the descending squares: 144, 121, 100, 81, 64, ___',
    ['49', '47', '55', '36'], 1,
    '12², 11², 10², 9², 8², 7² = 49.',
    { difficulty: 1, marks: 2, tag: 'Number Series' }),

  q('1A17', 'A',
    'A is the sister of B. B is the brother of C. C is the daughter of D. How is A related to D?',
    ['Son', 'Niece', 'Daughter', 'Granddaughter'], 3,
    'A, B, C are siblings; all are children of D. A is female → daughter.',
    { difficulty: 2, marks: 2, tag: 'Blood Relations' }),

  q('1A18', 'A',
    'Doctor : Stethoscope :: Carpenter : ___',
    ['Wood', 'Furniture', 'Saw', 'Workshop'], 3,
    'Tool of trade → carpenter\'s primary tool is the saw.',
    { difficulty: 1, marks: 2, tag: 'Analogy' }),

  q('1A19', 'A',
    'A man walks 4 km South, 3 km East, 4 km North, 1 km West. How far from start?',
    ['1 km', '2 km', '3 km', '4 km'], 2,
    'N-S cancels (4-4=0). E-W net = 3-1 = 2 km East.',
    { difficulty: 2, marks: 2, tag: 'Direction Sense' }),

  q('1A20', 'A',
    'If SMART is coded as TRAMS, how is BRAIN coded?',
    ['NIARB', 'NBIAR', 'NIRBA', 'NARIB'], 1,
    'The letters are reversed: BRAIN → NIARB.',
    { difficulty: 2, marks: 2, tag: 'Coding-Decoding' }),

  q('1A21', 'A',
    'Complete: 2, 6, 12, 20, 30, 42, ___',
    ['54', '56', '58', '52'], 2,
    'n(n+1) sequence: 1·2, 2·3, 3·4, 4·5, 5·6, 6·7, 7·8 = 56.',
    { difficulty: 2, marks: 2, tag: 'Number Series' }),

  q('1A22', 'A',
    'Which figure completes the pattern? Square → Circle → Triangle → ___',
    ['Pentagon', 'Square', 'Hexagon', 'Circle'], 2,
    'Cyclic 3-shape pattern repeats — next is Square.',
    { difficulty: 1, marks: 2, tag: 'Pattern Grouping' }),

  q('1A23', 'A',
    'Mirror image of "REASON" when held in front of a vertical mirror is:',
    ['NOSAER', 'ИОƧA3Я', 'ИΟƧΑ∃Я', 'NOZA∃Я'], 3,
    'Each letter individually mirrored AND order reversed — choice 3 shows correct mirrored letterforms.',
    { difficulty: 3, marks: 2, tag: 'Mirror Image' }),

  q('1A24', 'A',
    'A piece of paper folded twice (once horizontally, once vertically) and a circle punched in the centre. When unfolded, how many holes?',
    ['1', '2', '3', '4'], 4,
    'Each fold doubles the holes: 1 → 2 → 4.',
    { difficulty: 2, marks: 2, tag: 'Paper Folding' }),

  q('1A25', 'A',
    '8 workers complete a job in 12 days. How many workers are needed to finish the same job in 6 days?',
    ['12', '14', '16', '18'], 3,
    'Inverse proportion: 8 × 12 = X × 6 → X = 16.',
    { difficulty: 2, marks: 2, tag: 'Time and Work' })
];
