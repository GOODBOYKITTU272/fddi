import { q } from '../questionShape.js';

export default [
  // RC Passage (The Rise of AI)
  q('3B01', 'B', 'What is the "Turing Test" designed to measure?', ['A computer\'s processing speed', 'A machine\'s ability to exhibit intelligent behavior', 'The size of a database', 'The energy consumption of a CPU'], 2, 'The passage describes the Turing Test as a measure of machine intelligence.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('3B02', 'B', 'Which field is identified as having the most immediate impact from AI?', ['Agriculture', 'Healthcare', 'Space exploration', 'Deep-sea mining'], 2, 'The passage highlights healthcare (diagnostics) as a primary impact area.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('3B03', 'B', 'What is the "Black Box" problem in AI?', ['Hardware failure', 'Lack of interpretability in decision-making', 'High cost of development', 'Energy inefficiency'], 2, 'The passage explains the black box problem as the difficulty in understanding how AI reaches decisions.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('3B04', 'B', 'Ethical concerns in AI primarily revolve around:', ['Data privacy and algorithmic bias', 'Robot manufacturing costs', 'Internet speed', 'Monitor resolution'], 1, 'The passage emphasizes privacy and bias as key ethical issues.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('3B05', 'B', 'The author suggests that the future of work will involve:', ['Complete replacement of humans by robots', 'Human-AI collaboration', 'The end of digital technology', 'A return to manual labor'], 2, 'The passage argues for a collaborative future between humans and AI.', { passageRef: 'p1', tag: 'RC Strategy' }),

  // Vocabulary - Synonyms
  q('3B06', 'B', 'Synonym of _Abundant_:', ['Scarce', 'Plentiful', 'Rare', 'Limited'], 2, 'Abundant means existing in large quantities.', { tag: 'Synonyms' }),
  q('3B07', 'B', 'Synonym of _Candid_:', ['Dishonest', 'Frank', 'Secretive', 'Vague'], 2, 'Candid means truthful and straightforward.', { tag: 'Synonyms' }),
  q('3B08', 'B', 'Synonym of _Diligent_:', ['Lazy', 'Hard-working', 'Careless', 'Slow'], 2, 'Diligent means showing care and effort in one\'s work.', { tag: 'Synonyms' }),
  q('3B09', 'B', 'Synonym of _Exuberant_:', ['Depressed', 'Energetic', 'Quiet', 'Small'], 2, 'Exuberant means full of energy and excitement.', { tag: 'Synonyms' }),
  q('3B10', 'B', 'Synonym of _Frugal_:', ['Extravagant', 'Economical', 'Wasteful', 'Generous'], 2, 'Frugal means simple and plain and costing little.', { tag: 'Synonyms' }),

  // Vocabulary - Antonyms
  q('3B11', 'B', 'Antonym of _Arrogant_:', ['Proud', 'Humble', 'Confident', 'Bold'], 2, 'Arrogant means having an exaggerated sense of one\'s own importance; Humble is the opposite.', { tag: 'Antonyms' }),
  q('3B12', 'B', 'Antonym of _Compulsory_:', ['Mandatory', 'Optional', 'Necessary', 'Fixed'], 2, 'Compulsory means required by law or a rule; Optional is the opposite.', { tag: 'Antonyms' }),
  q('3B13', 'B', 'Antonym of _Despair_:', ['Sorrow', 'Hope', 'Pain', 'Grief'], 2, 'Despair means the complete loss of hope.', { tag: 'Antonyms' }),
  q('3B14', 'B', 'Antonym of _Genuine_:', ['Authentic', 'Fake', 'Real', 'True'], 2, 'Genuine means truly what something is said to be; Fake is the opposite.', { tag: 'Antonyms' }),
  q('3B15', 'B', 'Antonym of _Hostile_:', ['Aggressive', 'Friendly', 'Angry', 'Cold'], 2, 'Hostile means unfriendly or antagonist.', { tag: 'Antonyms' }),

  // Grammar - Error Spotting
  q('3B16', 'B', 'Error: Each of (1) / the players (2) / have performed well (3).', ['1', '2', '3', 'No error'], 3, '"Each" is singular, so it should be "has performed well".', { tag: 'Para-Jumbles' }),
  q('3B17', 'B', 'Error: He is (1) / more cleverer (2) / than his cousin (3).', ['1', '2', '3', 'No error'], 2, 'Double comparative error: use "cleverer".', { tag: 'Para-Jumbles' }),
  q('3B18', 'B', 'Error: I have (1) / been waiting (2) / since two hours (3).', ['1', '2', '3', 'No error'], 3, 'Use "for" with a duration (two hours).', { tag: 'Para-Jumbles' }),
  q('3B19', 'B', 'Error: Unless you (1) / do not work hard (2) / you will not pass (3).', ['1', '2', '3', 'No error'], 2, '"Unless" itself is negative; omit "do not".', { tag: 'Para-Jumbles' }),
  q('3B20', 'B', 'Error: He and I (1) / is (2) / good friends (3).', ['1', '2', '3', 'No error'], 2, 'Compound subject joined by "and" takes plural verb "are".', { tag: 'Para-Jumbles' }),

  // Idioms
  q('3B21', 'B', 'Idiom meaning: _Beat around the bush_', ['To cut trees', 'To avoid the main topic', 'To hunt', 'To be late'], 2, 'To talk about unimportant things to avoid a difficult subject.', { tag: 'Idioms' }),
  q('3B22', 'B', 'Idiom meaning: _Burn the midnight oil_', ['To use oil lamps', 'To work late into the night', 'To waste energy', 'To be an early riser'], 2, 'To work or study very late.', { tag: 'Idioms' }),
  q('3B23', 'B', 'Idiom meaning: _Hit the nail on the head_', ['To be a carpenter', 'To say something exactly right', 'To make a mistake', 'To be violent'], 2, 'To describe exactly what is causing a situation or problem.', { tag: 'Idioms' }),
  q('3B24', 'B', 'Idiom meaning: _Blessing in disguise_', ['A bad thing that turns out good', 'A secret gift', 'A religious prayer', 'A mask'], 1, 'Something that seems bad at first but results in something good happening later.', { tag: 'Idioms' }),
  q('3B25', 'B', 'Idiom meaning: _Once in a blue moon_', ['Frequently', 'Very rarely', 'Every month', 'At night'], 2, 'Something that happens very seldom.', { tag: 'Idioms' }),

  // Spelling
  q('3B26', 'B', 'Correct Spelling:', ['Occurrence', 'Occurence', 'Ocurrence', 'Ocurence'], 1, 'Occurrence has double "c" and double "r".', { tag: 'Spelling' }),
  q('3B27', 'B', 'Correct Spelling:', ['Hierarchy', 'Hierarky', 'Heirarchy', 'Heirarky'], 1, 'Hierarchy.', { tag: 'Spelling' }),
  q('3B28', 'B', 'Correct Spelling:', ['Questionnaire', 'Questionaire', 'Questionair', 'Questionar'], 1, 'Questionnaire has double "n".', { tag: 'Spelling' }),
  q('3B29', 'B', 'Correct Spelling:', ['Lieutenant', 'Leftenant', 'Lutenant', 'Lieutenent'], 1, 'Lieutenant.', { tag: 'Spelling' }),
  q('3B30', 'B', 'Correct Spelling:', ['Miscellaneous', 'Miscelaneous', 'Miscellanous', 'Miscelanous'], 1, 'Miscellaneous.', { tag: 'Spelling' }),

  // Fillers
  q('3B31', 'B', 'The plane took ___ on time.', ['off', 'up', 'out', 'away'], 1, 'Take off.', { tag: 'RC Strategy' }),
  q('3B32', 'B', 'She is married ___ a doctor.', ['to', 'with', 'by', 'at'], 1, 'Married to someone.', { tag: 'RC Strategy' }),
  q('3B33', 'B', 'The bridge was destroyed ___ the flood.', ['by', 'with', 'from', 'at'], 1, 'Passive voice with "by".', { tag: 'RC Strategy' }),
  q('3B34', 'B', 'He congratulated me ___ my success.', ['on', 'for', 'at', 'with'], 1, 'Congratulate on something.', { tag: 'RC Strategy' }),
  q('3B35', 'B', 'I prefer tea ___ coffee.', ['to', 'than', 'over', 'by'], 1, 'Prefer A to B.', { tag: 'RC Strategy' }),
  // One Word Substitution
  q('3B36', 'B', 'A place where bees are kept:', ['Apiary', 'Aviary', 'Aquarium', 'Zoo'], 1, 'Apiary.', { tag: 'One-word Sub' }),
  q('3B37', 'B', 'One who is present everywhere:', ['Omnipotent', 'Omnipresent', 'Omniscient', 'Universal'], 2, 'Omnipresent.', { tag: 'One-word Sub' }),
  q('3B38', 'B', 'A person who hates mankind:', ['Misanthrope', 'Philanthropist', 'Misogynist', 'Polyglot'], 1, 'Misanthrope.', { tag: 'One-word Sub' }),
  q('3B39', 'B', 'Handwriting that cannot be read:', ['Illegible', 'Eligible', 'Incredible', 'Invisible'], 1, 'Illegible.', { tag: 'One-word Sub' }),
  q('3B40', 'B', 'A person who does not believe in God:', ['Theist', 'Atheist', 'Agnostic', 'Spiritual'], 2, 'Atheist.', { tag: 'One-word Sub' }),

  // Para-jumbles
  q('3B41', 'B', 'Arrange: A. Harvest, B. Sowing, C. Irrigation, D. Plowing.', ['DBCA', 'DBAC', 'ABCD', 'DCBA'], 1, 'Plowing (D) -> Sowing (B) -> Irrigation (C) -> Harvest (A).', { tag: 'Para-Jumbles' }),
  q('3B42', 'B', 'Arrange: A. Printing, B. Editing, C. Writing, D. Publishing.', ['CBAD', 'CABD', 'BCAD', 'ACBD'], 1, 'Writing (C) -> Editing (B) -> Printing (A) -> Publishing (D).', { tag: 'Para-Jumbles' }),
  q('3B43', 'B', 'Arrange: A. Interview, B. Advertisement, C. Selection, D. Application.', ['BDAC', 'BADC', 'ADBC', 'DBAC'], 2, 'Advertisement (B) -> Application (D) -> Interview (A) -> Selection (C).', { tag: 'Para-Jumbles' }),
  q('3B44', 'B', 'Arrange: A. Diagnosis, B. Treatment, C. Symptoms, D. Recovery.', ['CABD', 'CBAD', 'ABCD', 'DBAC'], 1, 'Symptoms (C) -> Diagnosis (A) -> Treatment (B) -> Recovery (D).', { tag: 'Para-Jumbles' }),
  q('3B45', 'B', 'Arrange: A. Dinner, B. Cooking, C. Shopping, D. Washing dishes.', ['CBAD', 'CABD', 'BACD', 'DBAC'], 1, 'Shopping (C) -> Cooking (B) -> Dinner (A) -> Washing dishes (D).', { tag: 'Para-Jumbles' }),

  // Sentence Improvement
  q('3B46', 'B', 'Improve: No sooner _he had arrived_ than it started raining.', ['had he arrived', 'he arrived', 'was he arrived', 'no improvement'], 1, 'Inversion after negative adverbs (No sooner had he...).', { tag: 'RC Strategy' }),
  q('3B47', 'B', 'Improve: She is looking forward _to see_ you.', ['to seeing', 'seeing', 'see', 'no improvement'], 1, '"Looking forward to" takes a gerund (-ing).', { tag: 'RC Strategy' }),
  q('3B48', 'B', 'Improve: He _is_ working here for ten years.', ['has been', 'was', 'had been', 'no improvement'], 1, 'Present perfect continuous for duration starting in past.', { tag: 'RC Strategy' }),
  q('3B49', 'B', 'Improve: I _had seen_ him yesterday.', ['saw', 'have seen', 'see', 'no improvement'], 1, 'Past simple for specific past time.', { tag: 'RC Strategy' }),
  q('3B50', 'B', 'Improve: Each of the boys _have_ a pen.', ['has', 'having', 'is having', 'no improvement'], 1, '"Each" is singular.', { tag: 'RC Strategy' })
];
