import { q } from '../questionShape.js';

export default [
  q('6A01', 'A', 'If "SUN" is coded as 54, what is the code for "MOON"?', ['48', '51', '54', '57'], 4, 'S(19)+U(21)+N(14)=54. M(13)+O(15)+O(15)+N(14)=57.', { difficulty: 2, tag: 'Coding-Decoding' }),
  q('6A02', 'A', 'Complete the series: 3, 6, 12, 24, ?', ['36', '48', '60', '72'], 2, 'Multiply by 2. 24 * 2 = 48.', { difficulty: 1, tag: 'Number Series' }),
  q('6A03', 'A', 'Assertion (A): The stars twinkle in the night sky.\nReason (R): The atmosphere of the Earth causes refraction of light.', ['Both true; R explains A', 'Both true; R does not explain A', 'A true, R false', 'A false, R true'], 1, 'Atmospheric refraction causes the apparent position of stars to shift, creating the twinkling effect.', { difficulty: 2, tag: 'Assertion-Reason' }),
  q('6A04', 'A', 'Odd one out: Newton, Einstein, Shakespeare, Hawking', ['Newton', 'Einstein', 'Shakespeare', 'Hawking'], 3, 'Shakespeare was a writer/poet, others were physicists.', { difficulty: 1, tag: 'Odd One Out' }),
  q('6A05', 'A', 'A man walks 5km West, then turns left and walks 12km. How far is he from the starting point?', ['13km', '17km', '7km', '60km'], 1, '√(5² + 12²) = √(25 + 144) = √169 = 13km.', { difficulty: 2, tag: 'Direction Sense' }),
  q('6A06', 'A', 'If 3+5=16, 4+6=20, then 5+7=?', ['24', '22', '20', '26'], 1, 'Pattern: (a + b) * 2. (3+5)*2=16. (4+6)*2=20. (5+7)*2=24.', { difficulty: 2, tag: 'Coding-Decoding' }),
  q('6A07', 'A', 'Complete the series: 1, 4, 9, 16, 25, ?', ['30', '36', '49', '64'], 2, 'Squares of 1, 2, 3, 4, 5. Next is 6² = 36.', { difficulty: 1, tag: 'Number Series' }),
  q('6A08', 'A', 'Statements: All players are athletes. No athlete is lazy. Conclusions: I. No player is lazy. II. Some athletes are players.', ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], 3, 'Both follow logically from the premises.', { difficulty: 2, tag: 'Syllogism' }),
  q('6A09', 'A', 'If P is the mother of Q and R is the brother of Q, how is R related to P?', ['Son', 'Brother', 'Nephew', 'Father'], 1, 'R is the son of P.', { difficulty: 1, tag: 'Blood Relations' }),
  q('6A10', 'A', 'A clock shows 9:30. What is its mirror image time?', ['2:30', '3:30', '9:30', '12:30'], 1, '11:60 - 9:30 = 2:30.', { difficulty: 1, tag: 'Mirror Image' }),
  q('6A11', 'A', 'Find the missing number: 2, 4, 8, 16, 32, ?', ['48', '64', '128', '256'], 2, 'Multiply by 2. 32 * 2 = 64.', { difficulty: 1, tag: 'Number Series' }),
  q('6A12', 'A', 'If 5 pens cost Rs. 50, how much will 15 pens cost?', ['100', '150', '200', '250'], 2, '1 pen costs Rs. 10. 15 pens cost Rs. 150.', { difficulty: 1, tag: 'Arithmetic' }),
  q('6A13', 'A', 'Complete the pattern: A, E, I, M, ?', ['P', 'Q', 'O', 'R'], 2, 'Shift is +4: A+4=E, E+4=I, I+4=M, M+4=Q.', { difficulty: 2, tag: 'Letter Series' }),
  q('6A14', 'A', 'Odd one out: Whale, Shark, Dolphin, Seal', ['Whale', 'Shark', 'Dolphin', 'Seal'], 2, 'Shark is a fish, others are mammals.', { difficulty: 2, tag: 'Odd One Out' }),
  q('6A15', 'A', 'If "BLUE" is called "RED", "RED" is "GREEN", what is the color of the sky?', ['RED', 'BLUE', 'GREEN', 'SKY'], 1, 'Sky is Blue, and Blue is called Red.', { difficulty: 1, tag: 'Coding-Decoding' }),
  q('6A16', 'A', 'What is the angle between clock hands at 3:00?', ['90°', '180°', '0°', '45°'], 1, '90 degrees.', { difficulty: 1, tag: 'Arithmetic' }),
  q('6A17', 'A', 'A man is 3 times as old as his son. After 5 years, he will be 2.5 times his son\'s age. What is the son\'s current age?', ['10', '15', '20', '25'], 2, 'M=3S. (3S+5)=2.5(S+5) => 3S+5=2.5S+12.5 => 0.5S=7.5 => S=15.', { difficulty: 3, tag: 'Arithmetic' }),
  q('6A18', 'A', 'If tomorrow is Sunday, what day was yesterday?', ['Friday', 'Saturday', 'Monday', 'Thursday'], 1, 'Tomorrow is Sunday -> Today is Saturday -> Yesterday was Friday.', { difficulty: 1, tag: 'Arithmetic' }),
  q('6A19', 'A', 'Odd one out: 1, 8, 27, 36', ['1', '8', '27', '36'], 4, '36 is a square (6²), others are cubes (1³, 2³, 3³).', { difficulty: 1, tag: 'Odd One Out' }),
  q('6A20', 'A', 'In a row of 30 people, Amit is 15th from the left. What is his position from the right?', ['15th', '16th', '14th', '17th'], 2, '(30 - 15) + 1 = 16th.', { difficulty: 1, tag: 'Ordering' }),
  q('6A21', 'A', 'Find the missing term: 1, 2, 6, 24, ?', ['100', '120', '144', '150'], 2, 'Factorial: 1!, 2!, 3!, 4!. Next is 5! = 120.', { difficulty: 2, tag: 'Number Series' }),
  q('6A22', 'A', 'Assertion (A): We use woollen clothes in winter.\nReason (R): Wool is a bad conductor of heat.', ['Both true; R explains A', 'Both true; R does not explain A', 'A true, R false', 'A false, R true'], 1, 'Correct explanation.', { difficulty: 1, tag: 'Assertion-Reason' }),
  q('6A23', 'A', 'If "D" is "4" and "COVER" is "63", then "BASIS" is?', ['50', '55', '60', '65'], 1, 'Sum of positions: 2+1+19+9+19 = 50.', { difficulty: 2, tag: 'Coding-Decoding' }),
  q('6A24', 'A', 'How many squares are there in a 4x4 grid?', ['16', '30', '25', '20'], 2, '1²+2²+3²+4² = 1+4+9+16 = 30.', { difficulty: 2, tag: 'Geometry' }),
  q('6A25', 'A', 'A train crosses a 100m platform in 10s at 72 km/h. What is the length of the train?', ['100m', '150m', '200m', '50m'], 1, 'Speed = 20 m/s. Dist = 20 * 10 = 200. L + 100 = 200 => L = 100m.', { difficulty: 3, tag: 'Arithmetic' })
];
