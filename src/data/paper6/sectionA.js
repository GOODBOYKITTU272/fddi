import { q } from '../questionShape.js';

export default [
  q('6A01', 'A', 'If "SUN" is coded as 54, what is the code for "MOON"?', ['48', '51', '54', '57'], 1, 'S(19)+U(21)+N(14)=54. M(13)+O(15)+O(15)+N(14)=57. Wait, let\'s check. 13+15+15+14 = 57.', { marks: 2, difficulty: 2, tag: 'Coding-Decoding' }),
  q('6A02', 'B', 'Complete the series: 3, 6, 12, 24, ?', ['36', '48', '60', '72'], 1, 'Multiply by 2. 24 * 2 = 48.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('6A03', 'C', 'Assertion (A): The stars twinkle in the night sky.\nReason (R): The atmosphere of the Earth causes refraction of light.', ['Both true; R explains A', 'Both true; R does not explain A', 'A true, R false', 'A false, R true'\Atmospheric refraction causes the apparent position of stars to shift, creating the twinkling effect.', { marks: 2, difficulty: 2, tag: 'Assertion-Reason' }),
  q('6A04', 'D', 'Odd one out: Newton, Einstein, Shakespeare, Hawking', ['Newton', 'Einstein', 'Shakespeare', 'Hawking'], 2, 'Shakespeare was a writer/poet, others were physicists.', { marks: 2, difficulty: 1, tag: 'Odd One Out' }),
  q('6A05', 'E', 'A man walks 5km West, then turns left and walks 12km. Distance from start?', ['13km', '17km', '7km', '60km'\√(5² + 12²) = √(25 + 144) = √169 = 13km.', { marks: 2, difficulty: 2, tag: 'Direction Sense' }),
  // ... (Full set to be included)
  q('6A06', 'A', 'If 3+5=16, 4+6=20, then 5+7=?', ['24', '22', '20', '26'\Pattern: (a+b)*2. (3+5)*2=16. (4+6)*2=20. (5+7)*2=24.', { marks: 2, difficulty: 2, tag: 'Coding-Decoding' }),
  q('6A07', 'B', 'Complete the series: 1, 4, 9, 16, 25, ?', ['30', '36', '49', '64'], 1, 'Squares of 1, 2, 3, 4, 5. Next is 6² = 36.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('6A08', 'C', 'All players are athletes. No athlete is lazy. Conclusion: I. No player is lazy. II. Some athletes are players.', ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], 2, 'Both follow logically.', { marks: 2, difficulty: 2, tag: 'Syllogism' }),
  q('6A09', 'D', 'If P is the mother of Q and R is the brother of Q, how is R related to P?', ['Son', 'Brother', 'Nephew', 'Father'\R is the son of P.', { marks: 2, difficulty: 1, tag: 'Blood Relations' }),
  q('6A10', 'E', 'A clock shows 9:30. Actual time?', ['2:30', '3:30', '9:30', '12:30'\11:60 - 9:30 = 2:30.', { marks: 2, difficulty: 1, tag: 'Mirror Image' }),
  q('6A11', 'A', 'Find the missing number: 2, 4, 8, 16, 32, ?', ['48', '64', '128', '256'], 1, 'Multiply by 2. 32 * 2 = 64.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('6A12', 'B', 'If 5 pens cost Rs. 50, how much for 15 pens?', ['100', '150', '200', '250'], 1, '1 pen costs 10. 15 pens cost 150.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('6A13', 'C', 'Complete the pattern: A, E, I, M, ?', ['P', 'Q', 'O', 'R'], 1, 'Shift is +4: A+4=E, E+4=I, I+4=M, M+4=Q.', { marks: 2, difficulty: 2, tag: 'Number Series' }),
  q('6A14', 'D', 'Odd one out: Whale, Shark, Dolphin, Seal', ['Whale', 'Shark', 'Dolphin', 'Seal'], 1, 'Shark is a fish, others are mammals.', { marks: 2, difficulty: 2, tag: 'Odd One Out' }),
  q('6A15', 'E', 'If "BLUE" is "RED", "RED" is "GREEN", what is the color of the sky?', ['RED', 'BLUE', 'GREEN', 'SKY'\Sky is Blue. Blue is Red.', { marks: 2, difficulty: 1, tag: 'Coding-Decoding' }),
  q('6A16', 'A', 'Find the angle at 3:00.', ['90°', '180°', '0°', '45°'\90 degrees.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('6A17', 'B', 'A man is 3 times as old as his son. After 5 years, he will be 2.5 times. Son\'s age?', ['10', '15', '20', '25'], 1, 'M=3S. (3S+5)=2.5(S+5) => 3S+5=2.5S+12.5 => 0.5S=7.5 => S=15.', { marks: 2, difficulty: 3, tag: 'Number Series' }),
  q('6A18', 'C', 'If tomorrow is Sunday, what was yesterday?', ['Friday', 'Saturday', 'Monday', 'Thursday'\Tomorrow is Sunday -> Today is Saturday -> Yesterday was Friday.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('6A19', 'D', 'Odd one out: 1, 8, 27, 36', ['1', '8', '27', '36'], 3, '36 is a square, others are cubes.', { marks: 2, difficulty: 1, tag: 'Odd One Out' }),
  q('6A20', 'E', 'In a row of 30, Amit is 15th from left. Position from right?', ['15th', '16th', '14th', '17th'], 1, '(30 - 15) + 1 = 16th.', { marks: 2, difficulty: 1, tag: 'Number Series' }),
  q('6A21', 'A', 'Find the missing term: 1, 2, 6, 24, ?', ['100', '120', '144', '150'], 1, 'Factorial: 1!, 2!, 3!, 4!. Next is 5! = 120.', { marks: 2, difficulty: 2, tag: 'Number Series' }),
  q('6A22', 'B', 'Assertion (A): We use woollen clothes in winter.\nReason (R): Wool is a bad conductor of heat.', ['Both true; R explains A', 'Both true; R does not explain A', 'A true, R false', 'A false, R true'\Correct explanation.', { marks: 2, difficulty: 1, tag: 'Assertion-Reason' }),
  q('6A23', 'C', 'If "D" is "4", "COVER" is "63", then "BASIS" is?', ['50', '55', '60', '65'\Sum of positions: 2+1+19+9+19 = 50.', { marks: 2, difficulty: 2, tag: 'Coding-Decoding' }),
  q('6A24', 'D', 'How many squares in a 4x4 grid?', ['16', '30', '25', '20'], 1, '1²+2²+3²+4² = 1+4+9+16 = 30.', { marks: 2, difficulty: 2, tag: 'Number Series' }),
  q('6A25', 'E', 'A train crosses a 100m platform in 10s at 72 km/h. Length of train?', ['100m', '150m', '200m', '50m'\Speed = 20 m/s. Dist = 20 * 10 = 200. L + 100 = 200 => L = 100m.', { marks: 2, difficulty: 3, tag: 'Time and Work' })
];
