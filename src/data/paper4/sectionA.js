import { q } from '../questionShape.js';

export default [
  q('4A01', 'A', 'If "LIGHT" is coded as 56, what is the code for "DARK"?', ['32', '34', '36', '38'], 2, 'Sum of positions: D(4)+A(1)+R(18)+K(11) = 34.', { difficulty: 1, tag: 'Coding-Decoding' }),
  q('4A02', 'A', 'Complete the series: 8, 27, 64, 125, ?', ['150', '216', '225', '250'], 2, 'Cubes of 2, 3, 4, 5. Next is 6³ = 216.', { difficulty: 1, tag: 'Number Series' }),
  q('4A03', 'A', 'Statement: All chairs are tables. Some tables are windows. Conclusion: I. Some chairs are windows. II. Some windows are tables.', ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], 2, 'II follows directly from "Some tables are windows". I does not necessarily follow.', { difficulty: 2, tag: 'Syllogism' }),
  q('4A04', 'A', 'A is the father of B. C is the daughter of B. D is the brother of C. How is A related to D?', ['Grandfather', 'Father', 'Uncle', 'Son'], 1, 'A is the father of B, and D is the son of B. So A is the grandfather of D.', { difficulty: 1, tag: 'Blood Relations' }),
  q('4A05', 'A', 'A clock shows 4:30. If the minute hand points East, in which direction does the hour hand point?', ['North-East', 'South-East', 'South', 'North'], 1, 'At 4:30, minute hand is at 6 (South). If 6 is East, then 3 is North. 4:30 hour hand is between 4 and 5. This is North-East.', { difficulty: 3, tag: 'Direction Sense' }),
  q('4A06', 'A', 'Find the missing number: 7, 12, 19, 28, 39, ?', ['50', '51', '52', '53'], 3, 'Differences are 5, 7, 9, 11. Next difference is 13. 39+13 = 52.', { difficulty: 1, tag: 'Number Series' }),
  q('4A07', 'A', 'If 1st January 2024 was Monday, what day was 1st January 2025?', ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], 2, '2024 is a leap year. So 2 odd days. Monday + 2 = Wednesday.', { difficulty: 2, tag: 'Number Series' }),
  q('4A08', 'A', 'Odd one out: Square, Circle, Triangle, Sphere', ['Square', 'Circle', 'Triangle', 'Sphere'], 4, 'Sphere is 3D, others are 2D.', { difficulty: 1, tag: 'Odd One Out' }),
  q('4A09', 'A', 'A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price?', ['Rs. 1190', 'Rs. 1200', 'Rs. 1100', 'Rs. 1160'], 1, 'Loss = 15% of 1400 = 210. SP = 1400 - 210 = 1190.', { difficulty: 2, tag: 'Profit and Loss' }),
  q('4A10', 'A', 'Complete the pattern: A, C, F, J, O, ?', ['S', 'T', 'U', 'V'], 3, 'Skips: A(b)C(de)F(ghi)J(klmn)O. Skips increase by 1. Next skip 5: O(pqrst)U.', { difficulty: 2, tag: 'Number Series' }),
  q('4A11', 'A', 'If 6x9 = 54, 3x4 = 12, then 7x8 = ?', ['56', '54', '48', '60'], 1, 'Standard multiplication.', { difficulty: 1, tag: 'Arithmetic' }),
  q('4A12', 'A', 'A train 150m long is running at 54 km/h. How much time will it take to cross a pole?', ['10s', '15s', '20s', '25s'], 1, 'Speed = 54 * 5/18 = 15 m/s. Time = 150/15 = 10s.', { difficulty: 2, tag: 'Time and Distance' }),
  q('4A13', 'A', 'If P is the brother of Q, Q is the son of R, S is the father of R, how is P related to S?', ['Grandson', 'Son', 'Brother', 'Grandfather'], 1, 'S is the grandfather of Q and P.', { difficulty: 1, tag: 'Blood Relations' }),
  q('4A14', 'A', 'Find the missing number in the series: 2, 6, 12, 20, 30, ?', ['40', '42', '44', '46'], 2, 'n(n+1): 1x2, 2x3, 3x4, 4x5, 5x6. Next is 6x7 = 42.', { difficulty: 1, tag: 'Number Series' }),
  q('4A15', 'A', 'Assertion (A): It is difficult to breathe on high mountains.\nReason (R): The concentration of oxygen decreases as altitude increases.', ['Both A and R true; R explains A', 'Both true; R does not explain A', 'A true, R false', 'A false, R true'], 1, 'Correct scientific explanation.', { difficulty: 1, tag: 'Assertion-Reason' }),
  q('4A16', 'A', 'A mirror shows 3:15. Actual time?', ['8:45', '9:45', '3:15', '12:15'], 1, '11:60 - 3:15 = 8:45.', { difficulty: 2, tag: 'Mirror Image' }),
  q('4A17', 'A', 'Find the odd one out: 64, 81, 100, 125', ['64', '81', '100', '125'], 4, '125 is a cube (5³), others are squares.', { difficulty: 1, tag: 'Odd One Out' }),
  q('4A18', 'A', 'If 20% of x = 80, what is x?', ['200', '400', '600', '800'], 2, '0.2x = 80 => x = 400.', { difficulty: 1, tag: 'Arithmetic' }),
  q('4A19', 'A', 'Complete the series: 1, 1, 2, 3, 5, 8, 13, ?', ['18', '21', '24', '26'], 2, 'Fibonacci series: each number is the sum of two previous ones.', { difficulty: 1, tag: 'Number Series' }),
  q('4A20', 'A', 'A and B can do a work in 10 days and 15 days respectively. How many days together?', ['5', '6', '7', '8'], 2, '(1/10 + 1/15) = (3+2)/30 = 5/30 = 1/6. So 6 days.', { difficulty: 2, tag: 'Time and Work' }),
  q('4A21', 'A', 'If North becomes East, what does South-East become?', ['South-West', 'North-West', 'North-East', 'South'], 1, '90 deg clockwise shift. SE + 90 = SW.', { difficulty: 2, tag: 'Direction Sense' }),
  q('4A22', 'A', 'Odd one out: Keyboard, Mouse, Monitor, Joypad', ['Keyboard', 'Mouse', 'Monitor', 'Joypad'], 3, 'Monitor is output, others are input.', { difficulty: 1, tag: 'Odd One Out' }),
  q('4A23', 'A', 'Statement: All birds have wings. No animal with wings is a fish. Conclusion: I. No bird is a fish. II. All fish are birds.', ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], 1, 'I follows logically.', { difficulty: 2, tag: 'Syllogism' }),
  q('4A24', 'A', 'Find the next term: 2, 3, 5, 7, 11, ?', ['12', '13', '14', '15'], 2, 'Prime numbers.', { difficulty: 1, tag: 'Number Series' }),
  q('4A25', 'A', 'If a square side increases by 10%, area increases by:', ['10%', '20%', '21%', '100%'], 3, '1.1 * 1.1 = 1.21. Increase = 21%.', { difficulty: 2, tag: 'Arithmetic' })
];
