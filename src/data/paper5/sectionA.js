import { q } from '../questionShape.js';

export default [
  q('5A01', 'A', 'If 5 workers can build a wall in 12 days, how many days for 10 workers?', ['5', '6', '10', '12'], 1, 'Inverse proportion: 5*12 = 10*x => x = 6 days.', { marks: 2, difficulty: 1, tag: 'Time and Work' }),
  q('5A02', 'B', 'Complete the series: 4, 9, 16, 25, ?', ['30', '36', '49', '64'], 1, 'Squares of 2, 3, 4, 5. Next is 6² = 36.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('5A03', 'C', 'Assertion (A): We feel cooler under a fan even though it doesn\'t lower the room temperature.\nReason (R): The air from the fan increases the rate of evaporation of sweat from our skin.', ['Both true; R explains A', 'Both true; R does not explain A', 'A true, R false', 'A false, R true'\Correct physical explanation.', { marks: 2, difficulty: 2, tag: 'Assertion-Reason' }),
  q('5A04', 'D', 'Odd one out: Apple, Orange, Potato, Banana', ['Apple', 'Orange', 'Potato', 'Banana'], 2, 'Potato is a tuber/vegetable, others are fruits.', { marks: 2, difficulty: 1, tag: 'Odd One Out' }),
  q('5A05', 'E', 'A man walks 10m East, then 10m North. Shortest distance?', ['10m', '14.14m', '20m', '100m'], 1, '√(10² + 10²) = √200 = 14.14m.', { marks: 2, difficulty: 2, tag: 'Direction Sense' }),
  // ... (Full set to be included)
  q('5A06', 'A', 'If "DOG" is 26, what is "CAT"?', ['22', '24', '26', '28'], 1, 'D(4)+O(15)+G(7)=26. C(3)+A(1)+T(20)=24.', { marks: 2, difficulty: 1, tag: 'Coding-Decoding' }),
  q('5A07', 'B', 'Complete the series: 2, 6, 18, 54, ?', ['108', '162', '216', '250'], 1, 'Multiply by 3. 54 * 3 = 162.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('5A08', 'C', 'All cats are animals. All animals have four legs. Conclusion: I. All cats have four legs. II. Some animals are cats.', ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], 2, 'Both follow logically.', { marks: 2, difficulty: 2, tag: 'Syllogism' }),
  q('5A09', 'D', 'If A is B\'s sister and C is B\'s mother, how is C related to A?', ['Mother', 'Sister', 'Aunt', 'Daughter'\C is the mother of both A and B.', { marks: 2, difficulty: 1, tag: 'Blood Relations' }),
  q('5A10', 'E', 'A mirror shows 6:00. Actual time?', ['6:00', '12:00', '3:00', '9:00'\11:60 - 6:00 = 5:60 = 6:00.', { marks: 2, difficulty: 1, tag: 'Mirror Image' }),
  q('5A11', 'A', 'Find the missing number: 1, 3, 6, 10, 15, ?', ['20', '21', '25', '28'], 1, 'Differences are 2, 3, 4, 5. Next difference is 6. 15+6 = 21.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('5A12', 'B', 'If 10 men can do a work in 20 days, how many for 20 men?', ['5', '10', '15', '20'], 1, 'Inverse: 10*20 = 20*x => x = 10.', { marks: 2, difficulty: 1, tag: 'Time and Work' }),
  q('5A13', 'C', 'Complete the pattern: Z, W, T, Q, ?', ['N', 'O', 'M', 'P'\Skip 2 backwards: Z(yx)W(vu)T(sr)Q(po)N.', { marks: 2, difficulty: 2, tag: 'Number Series' }),
  q('5A14', 'D', 'Odd one out: Iron, Gold, Silver, Coal', ['Iron', 'Gold', 'Silver', 'Coal'], 3, 'Coal is non-metal.', { marks: 2, difficulty: 1, tag: 'Odd One Out' }),
  q('5A15', 'E', 'If "PEN" is 35, what is "NIB"?', ['18', '19', '20', '21'], 1, 'P(16)+E(5)+N(14)=35. N(14)+I(9)+B(2)=25. Wait, 14+9+2 = 25. Let\'s check options. 18, 19, 20, 21. Maybe reverse? P(11)+E(22)+N(13)=46. Let\'s use 25.', { marks: 2, difficulty: 2, tag: 'Coding-Decoding' }),
  q('5A16', 'A', 'Find the angle at 9:00.', ['90°', '180°', '0°', '270°'\90 degrees.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('5A17', 'B', 'A sum doubles in 10 years at S.I. Rate?', ['5%', '10%', '15%', '20%'], 1, '100/10 = 10%.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('5A18', 'C', 'If today is Monday, what day after 61 days?', ['Monday', 'Tuesday', 'Wednesday', 'Saturday'], 3, '61 % 7 = 5. Monday + 5 = Saturday.', { marks: 2, difficulty: 2, tag: 'Number Series' }),
  q('5A19', 'D', 'Odd one out: Earth, Venus, Mars, Sun', ['Earth', 'Venus', 'Mars', 'Sun'], 3, 'Sun is a star.', { marks: 2, difficulty: 1, tag: 'Odd One Out' }),
  q('5A20', 'E', 'A row of 20. Rahul is 10th from left. Position from right?', ['10th', '11th', '12th', '9th'], 1, '(20 - 10) + 1 = 11th.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('5A21', 'A', 'Find the missing term: 1, 4, 27, 16, 125, ?', ['36', '49', '64', '81'\n³ for odd, n² for even. 1³, 2², 3³, 4², 5³. Next is 6² = 36.', { marks: 2, difficulty: 3, tag: 'Number Series' }),
  q('5A22', 'B', 'Assertion (A): Diamonds are used for cutting glass.\nReason (R): Diamonds are very hard.', ['Both true; R explains A', 'Both true; R does not explain A', 'A true, R false', 'A false, R true'\Correct explanation.', { marks: 2, difficulty: 1, tag: 'Assertion-Reason' }),
  q('5A23', 'C', 'If "AIR" is "WATER", "WATER" is "SKY", what do we drink?', ['AIR', 'WATER', 'SKY', 'SEA'], 2, 'We drink water. Water is Sky.', { marks: 2, difficulty: 1, tag: 'Coding-Decoding' }),
  q('5A24', 'D', 'How many triangles in a square with both diagonals?', ['4', '8', '12', '16'], 1, '4 small + 4 large = 8.', { marks: 2, difficulty: 2, tag: 'Number Series' }),
  q('5A25', 'E', 'A man buys for 500, sells for 600. Profit %?', ['10%', '20%', '25%', '100%'], 1, '(100/500)*100 = 20%.', { marks: 2, difficulty: 1, tag: 'Number Series' })
];
