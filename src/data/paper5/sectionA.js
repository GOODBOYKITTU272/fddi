import { q } from '../questionShape.js';

export default [
  q('5A01', 'A', 'If 5 workers can build a wall in 12 days, how many days will 10 workers take?', ['5', '6', '10', '12'], 2, 'Inverse proportion: 5 * 12 = 10 * x => x = 6 days.', { difficulty: 1, tag: 'Time and Work' }),
  q('5A02', 'A', 'Complete the series: 4, 9, 16, 25, ?', ['30', '36', '49', '64'], 2, 'Squares of 2, 3, 4, 5. Next is 6² = 36.', { difficulty: 1, tag: 'Number Series' }),
  q('5A03', 'A', "Assertion (A): We feel cooler under a fan even though it doesn't lower the room temperature.\nReason (R): The air from the fan increases the rate of evaporation of sweat from our skin.", ['Both true; R explains A', 'Both true; R does not explain A', 'A true, R false', 'A false, R true'], 1, 'Correct physical explanation.', { difficulty: 2, tag: 'Assertion-Reason' }),
  q('5A04', 'A', 'Odd one out: Apple, Orange, Potato, Banana', ['Apple', 'Orange', 'Potato', 'Banana'], 3, 'Potato is a tuber/vegetable, others are fruits.', { difficulty: 1, tag: 'Odd One Out' }),
  q('5A05', 'A', 'A man walks 10m East, then 10m North. What is the shortest distance from the start?', ['10m', '14.14m', '20m', '100m'], 2, '√(10² + 10²) = √200 ≈ 14.14m.', { difficulty: 2, tag: 'Direction Sense' }),
  q('5A06', 'A', 'If "DOG" is 26, what is the code for "CAT"?', ['22', '24', '26', '28'], 2, 'D(4)+O(15)+G(7)=26. C(3)+A(1)+T(20)=24.', { difficulty: 1, tag: 'Coding-Decoding' }),
  q('5A07', 'A', 'Complete the series: 2, 6, 18, 54, ?', ['108', '162', '216', '250'], 2, 'Multiply by 3. 54 * 3 = 162.', { difficulty: 1, tag: 'Number Series' }),
  q('5A08', 'A', 'Statements: All cats are animals. All animals have four legs. Conclusions: I. All cats have four legs. II. Some animals are cats.', ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], 3, 'Both follow logically from the premises.', { difficulty: 2, tag: 'Syllogism' }),
  q('5A09', 'A', "If A is B's sister and C is B's mother, how is C related to A?", ['Mother', 'Sister', 'Aunt', 'Daughter'], 1, 'C is the mother of both A and B.', { difficulty: 1, tag: 'Blood Relations' }),
  q('5A10', 'A', 'A mirror shows 6:00. What is the actual time?', ['6:00', '12:00', '3:00', '9:00'], 1, '11:60 - 6:00 = 5:60 = 6:00.', { difficulty: 1, tag: 'Mirror Image' }),
  q('5A11', 'A', 'Find the missing number: 1, 3, 6, 10, 15, ?', ['20', '21', '25', '28'], 2, 'Differences are 2, 3, 4, 5. Next difference is 6. 15 + 6 = 21.', { difficulty: 1, tag: 'Number Series' }),
  q('5A12', 'A', 'If 10 men can do a work in 20 days, how many days will 20 men take?', ['5', '10', '15', '20'], 2, 'Inverse: 10 * 20 = 20 * x => x = 10.', { difficulty: 1, tag: 'Time and Work' }),
  q('5A13', 'A', 'Complete the pattern: Z, W, T, Q, ?', ['N', 'O', 'M', 'P'], 1, 'Skip 2 backwards: Z(yx)W(vu)T(sr)Q(po)N.', { difficulty: 2, tag: 'Letter Series' }),
  q('5A14', 'A', 'Odd one out: Iron, Gold, Silver, Coal', ['Iron', 'Gold', 'Silver', 'Coal'], 4, 'Coal is a non-metal/fossil fuel, others are metals.', { difficulty: 1, tag: 'Odd One Out' }),
  q('5A15', 'A', 'If "PEN" is 35, what is the code for "NIB"?', ['25', '19', '20', '21'], 1, 'P(16)+E(5)+N(14)=35. N(14)+I(9)+B(2)=25.', { difficulty: 2, tag: 'Coding-Decoding' }),
  q('5A16', 'A', 'What is the angle between the hands of a clock at 9:00?', ['90°', '180°', '0°', '270°'], 1, '90 degrees.', { difficulty: 1, tag: 'Arithmetic' }),
  q('5A17', 'A', 'A sum of money doubles in 10 years at Simple Interest. What is the rate?', ['5%', '10%', '15%', '20%'], 2, 'Rate = 100/10 = 10%.', { difficulty: 1, tag: 'Arithmetic' }),
  q('5A18', 'A', 'If today is Monday, what day will it be after 61 days?', ['Monday', 'Tuesday', 'Wednesday', 'Saturday'], 4, '61 % 7 = 5. Monday + 5 days = Saturday.', { difficulty: 2, tag: 'Arithmetic' }),
  q('5A19', 'A', 'Odd one out: Earth, Venus, Mars, Sun', ['Earth', 'Venus', 'Mars', 'Sun'], 4, 'Sun is a star, others are planets.', { difficulty: 1, tag: 'Odd One Out' }),
  q('5A20', 'A', 'In a row of 20 students, Rahul is 10th from the left. What is his position from the right?', ['10th', '11th', '12th', '9th'], 2, '(20 - 10) + 1 = 11th.', { difficulty: 1, tag: 'Ordering' }),
  q('5A21', 'A', 'Find the missing term: 1, 4, 27, 16, 125, ?', ['36', '49', '64', '81'], 1, 'n³ for odd, n² for even: 1³, 2², 3³, 4², 5³. Next is 6² = 36.', { difficulty: 3, tag: 'Number Series' }),
  q('5A22', 'A', 'Assertion (A): Diamonds are used for cutting glass.\nReason (R): Diamonds are very hard.', ['Both true; R explains A', 'Both true; R does not explain A', 'A true, R false', 'A false, R true'], 1, 'Correct explanation.', { difficulty: 1, tag: 'Assertion-Reason' }),
  q('5A23', 'A', 'If "AIR" is called "WATER", "WATER" is "SKY", what do we drink?', ['AIR', 'WATER', 'SKY', 'SEA'], 3, 'We drink water, and Water is called Sky.', { difficulty: 1, tag: 'Coding-Decoding' }),
  q('5A24', 'A', 'How many triangles are there in a square with both diagonals drawn?', ['4', '8', '12', '16'], 2, '4 small triangles + 4 large triangles = 8.', { difficulty: 2, tag: 'Geometry' }),
  q('5A25', 'A', 'A man buys an item for 500 and sells it for 600. What is his profit percentage?', ['10%', '20%', '25%', '100%'], 2, '(100/500) * 100 = 20%.', { difficulty: 1, tag: 'Arithmetic' })
];
