import { q } from '../questionShape.js';

export default [
  // RC Passage (Phygital Retail)
  q('4B01', 'B', 'The term "Phygital" refers to:', ['Physics in digital design', 'Blending physical and digital retail', 'A new type of fabric', 'High-end photography'], 1, 'The passage defines it as blending physical stores with digital commerce.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('4B02', 'B', 'What technology allows customers to "try on" clothes virtually?', ['IoT sensors', 'Augmented Reality (AR)', 'QR codes', 'Smart treadmills'], 1, 'The passage mentions AR mirrors for virtual try-on.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('4B03', 'B', 'Experience centers mentioned in the passage help footwear brands to:', ['Reduce price', 'Analyze gait for custom fitting', 'Hire more staff', 'Shut down online stores'], 1, 'The passage mentions gait analysis for custom fits.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('4B04', 'B', 'What is the main advantage of physical stores over e-commerce per the passage?', ['Efficiency', 'Lower cost', 'Trust and emotional connection', 'Global reach'], 2, 'The passage states physical stores offer trust and emotional connection.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('4B05', 'B', 'Success of the Phygital model depends on:', ['Massive advertisement', 'Seamlessness across all touchpoints', 'Lowering taxes', 'Banning competitors'], 1, 'The passage emphasizes frictionless transitions and seamlessness.', { passageRef: 'p1', tag: 'RC Strategy' }),

  // Vocabulary
  q('4B06', 'B', 'Synonym of _Frictionless_:', ['Rough', 'Smooth/Easy', 'Expensive', 'Slow'], 1, 'Without resistance.', { tag: 'Synonyms' }),
  q('4B07', 'B', 'Synonym of _Convergence_:', ['Splitting', 'Meeting/Joining', 'Darkness', 'Speed'], 1, 'Coming together.', { tag: 'Synonyms' }),
  q('4B08', 'B', 'Synonym of _Personalization_:', ['Customization', 'Generalization', 'Abstraction', 'Deletion'], 0, 'Tailoring to individual needs.', { tag: 'Synonyms' }),
  q('4B09', 'B', 'Synonym of _Personalized_:', ['General', 'Customized', 'Cheap', 'Fast'], 1, 'Tailored to the individual.', { tag: 'Synonyms' }),
  q('4B10', 'B', 'Synonym of _Mandatory_:', ['Optional', 'Compulsory', 'Free', 'Difficult'], 1, 'Required by law or rules.', { tag: 'Synonyms' }),

  // Antonyms
  q('4B11', 'B', 'Antonym of _Personalized_:', ['General', 'Customized', 'Private', 'Fast'], 0, 'General is the opposite of tailored.', { tag: 'Antonyms' }),
  q('4B12', 'B', 'Antonym of _Frictionless_:', ['Easy', 'Resistant/Rough', 'Fast', 'Silent'], 1, 'Resistant is the opposite.', { tag: 'Antonyms' }),
  q('4B13', 'B', 'Antonym of _Personalization_:', ['Generalization', 'Customization', 'Private', 'Fast'], 0, 'Generalization is opposite.', { tag: 'Antonyms' }),
  q('4B14', 'B', 'Antonym of _Seamless_:', ['Smooth', 'Disjointed', 'Fast', 'Silent'], 1, 'Disjointed or broken.', { tag: 'Antonyms' }),
  q('4B15', 'B', 'Antonym of _Mandatory_:', ['Compulsory', 'Optional', 'Fast', 'Silent'], 1, 'Optional is opposite.', { tag: 'Antonyms' }),

  // Grammar
  q('4B16', 'B', 'Error: Neither of (1) / the books (2) / were interesting (3).', ['1', '2', '3', 'No error'], 2, '"Neither" is singular: "was".', { tag: 'Para-Jumbles' }),
  q('4B17', 'B', 'Error: He as well as (1) / his friends (2) / are coming (3).', ['1', '2', '3', 'No error'], 2, 'Verb agrees with the first subject ("He"): "is".', { tag: 'Para-Jumbles' }),
  q('4B18', 'B', 'Error: If I would have (1) / known (2) / I would have stayed (3).', ['1', '2', '3', 'No error'], 0, 'Third conditional: "If I had known".', { tag: 'Para-Jumbles' }),
  q('4B19', 'B', 'Error: The jury (1) / were unanimous (2) / in its decision (3).', ['1', '2', '3', 'No error'], 1, 'Unanimous jury acts as a single unit: "was".', { tag: 'Para-Jumbles' }),
  q('4B20', 'B', 'Error: She is (1) / more cleverer (2) / than me (3).', ['1', '2', '3', 'No error'], 1, 'Double comparative error: "cleverer".', { tag: 'Para-Jumbles' }),

  // Idioms
  q('4B21', 'B', 'Idiom: _Piece of cake_', ['Tasty', 'Very easy', 'A snack', 'A small part'], 1, 'Very easy.', { tag: 'Idioms' }),
  q('4B22', 'B', 'Idiom: _In the same boat_', ['Traveling', 'In the same difficult situation', 'In a race', 'Sharing a secret'], 1, 'Sharing the same plight.', { tag: 'Idioms' }),
  q('4B23', 'B', 'Idiom: _Once in a blue moon_', ['Frequently', 'Very rarely', 'At night', 'Every month'], 1, 'Very rarely.', { tag: 'Idioms' }),
  q('4B24', 'B', 'Idiom: _Beat around the bush_', ['Avoid the main topic', 'Cut plants', 'Be honest', 'Wait patiently'], 0, 'Avoiding the point.', { tag: 'Idioms' }),
  q('4B25', 'B', 'Idiom: _Under the weather_', ['In rain', 'Feeling unwell', 'In sunshine', 'Traveling'], 1, 'Unwell.', { tag: 'Idioms' }),

  // Spelling
  q('4B26', 'B', 'Correct:', ['Receive', 'Recieve', 'Receeve', 'Receeive'], 0, 'Receive.', { tag: 'Spelling' }),
  q('4B27', 'B', 'Correct:', ['Beginning', 'Begining', 'Begining', 'Beginin'], 0, 'Beginning.', { tag: 'Spelling' }),
  q('4B28', 'B', 'Correct:', ['Definitely', 'Definitly', 'Definatly', 'Defenitely'], 0, 'Definitely.', { tag: 'Spelling' }),
  q('4B29', 'B', 'Correct:', ['Argument', 'Arguement', 'Argumant', 'Arguemant'], 0, 'Argument.', { tag: 'Spelling' }),
  q('4B30', 'B', 'Correct:', ['Business', 'Buisness', 'Busyness', 'Buisiness'], 0, 'Business.', { tag: 'Spelling' }),

  // Fillers
  q('4B31', 'B', 'I am tired ___ waiting.', ['of', 'from', 'with', 'by'], 0, 'Tired of.', { tag: 'RC Strategy' }),
  q('4B32', 'B', 'He is married ___ a doctor.', ['to', 'with', 'at', 'by'], 0, 'Married to.', { tag: 'RC Strategy' }),
  q('4B33', 'B', 'She depends ___ her parents.', ['on', 'to', 'for', 'at'], 0, 'Depends on.', { tag: 'RC Strategy' }),
  q('4B34', 'B', 'The book is ___ the shelf.', ['on', 'in', 'at', 'into'], 0, 'On the shelf.', { tag: 'RC Strategy' }),
  q('4B35', 'B', 'He was exempt ___ the rule.', ['from', 'to', 'by', 'at'], 0, 'Exempt from.', { tag: 'RC Strategy' }),

  // One Word
  q('4B36', 'B', 'One who speaks many languages:', ['Polyglot', 'Linguist', 'Translator', 'Bilingual'], 0, 'Polyglot.', { tag: 'One-word Sub' }),
  q('4B37', 'B', 'A study of population:', ['Demography', 'Geography', 'Anthropology', 'Sociology'], 0, 'Demography.', { tag: 'One-word Sub' }),
  q('4B38', 'B', 'Impossible to satisfy:', ['Insatiable', 'Incredible', 'Invisible', 'Invincible'], 0, 'Insatiable.', { tag: 'One-word Sub' }),
  q('4B39', 'B', 'Words written on a tomb:', ['Epitaph', 'Epilogue', 'Epithet', 'Epistle'], 0, 'Epitaph.', { tag: 'One-word Sub' }),
  q('4B40', 'B', 'One who is indifferent to pleasure or pain:', ['Stoic', 'Epicurean', 'Cynic', 'Ascetic'], 0, 'Stoic.', { tag: 'One-word Sub' }),

  // Para-jumbles
  q('4B41', 'B', 'Arrange: A. Harvest, B. Sow, C. Plough, D. Market.', ['CBAD', 'CB DA', 'BCAD', 'ADBC'], 0, 'Plough (C) -> Sow (B) -> Harvest (A) -> Market (D).', { tag: 'Para-Jumbles' }),
  q('4B42', 'B', 'Arrange: A. Dinner, B. Cooking, C. Shopping, D. Washing dishes.', ['CBAD', 'BCAD', 'CABD', 'DBAC'], 0, 'Shopping (C) -> Cooking (B) -> Dinner (A) -> Washing (D).', { tag: 'Para-Jumbles' }),
  q('4B43', 'B', 'Arrange: A. Interview, B. Ad, C. Selection, D. Application.', ['BDAC', 'BADC', 'DBAC', 'ABCD'], 0, 'Ad (B) -> Application (D) -> Interview (A) -> Selection (C).', { tag: 'Para-Jumbles' }),
  q('4B44', 'B', 'Arrange: A. Title, B. Plot, C. Review, D. Publication.', ['ABDC', 'BADC', 'ABCD', 'DBAC'], 0, 'Title (A) -> Plot (B) -> Publication (D) -> Review (C).', { tag: 'Para-Jumbles' }),
  q('4B45', 'B', 'Arrange: A. First aid, B. Accident, C. Recovery, D. Hospital.', ['BADC', 'BACD', 'ABCD', 'DBAC'], 0, 'Accident (B) -> First aid (A) -> Hospital (D) -> Recovery (C).', { tag: 'Para-Jumbles' }),

  // Sentence Improvement
  q('4B46', 'B', 'Improve: No sooner had he left _when_ it rained.', ['than', 'then', 'that', 'no improvement'], 0, 'No sooner...than.', { tag: 'RC Strategy' }),
  q('4B47', 'B', 'Improve: Neither he nor his friends _is_ coming.', ['are', 'was', 'am', 'no improvement'], 0, 'Closer subject "friends" is plural.', { tag: 'RC Strategy' }),
  q('4B48', 'B', 'Improve: I _am used to_ waking up early.', ['was used to', 'am use to', 'used to', 'no improvement'], 3, 'Correct usage for a habit.', { tag: 'RC Strategy' }),
  q('4B49', 'B', 'Improve: This is the _best_ of the two books.', ['better', 'good', 'bestest', 'no improvement'], 0, 'Use comparative for two items.', { tag: 'RC Strategy' }),
  q('4B50', 'B', 'Improve: He _is sleeping_ since morning.', ['has been sleeping', 'has slept', 'slept', 'no improvement'], 0, 'Use present perfect continuous for duration.', { tag: 'RC Strategy' })
];
