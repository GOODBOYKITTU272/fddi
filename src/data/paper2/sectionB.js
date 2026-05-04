import { q } from '../questionShape.js';

export default [
  // RC Passage (Circular Fashion)
  q('2B01', 'B', 'What is the primary characteristic of "Circular Fashion" according to the passage?', ['High-volume exports', 'Design for end-of-life and recyclability', 'Use of synthetic fibers', 'Focus on luxury branding'], 2, 'The passage states circular fashion products are designed with end-of-life in mind.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('2B02', 'B', 'What is identified as the biggest hurdle to circular fashion in India?', ['Lack of technology', 'Consumer perception of pre-owned clothing', 'High cost of raw materials', 'International trade barriers'], 2, 'The passage explicitly mentions consumer perception as the primary hurdle.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('2B03', 'B', 'The term "Godhri" is used to exemplify:', ['Modern industrial recycling', 'Traditional Indian upcycling', 'Fast fashion trends', 'Luxury fabric design'], 2, 'The passage uses Godhri as an example of traditional upcycling.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('2B04', 'B', 'Industry recyclers find it difficult to source materials because:', ['Textile waste collection is unorganized', 'Cotton is too expensive', 'Exports are falling', 'Government bans scrap imports'], 1, 'The passage mentions unorganized textile waste collection as a difficulty.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('2B05', 'B', 'What role is PM MITRA expected to play?', ['Creating fast-fashion hubs', 'Integrating sustainable practices into manufacturing', 'Lowering labor costs', 'Banning pre-owned clothing sales'], 2, 'The passage states PM MITRA parks are expected to integrate sustainable practices.', { passageRef: 'p1', tag: 'RC Strategy' }),

  // Vocabulary - Synonyms
  q('2B06', 'B', 'Synonym of _Inundated_:', ['Empty', 'Flooded', 'Ignored', 'Dry'], 2, 'Inundated means overwhelmed or flooded.', { tag: 'Synonyms' }),
  q('2B07', 'B', 'Synonym of _Lethargic_:', ['Energetic', 'Sluggish', 'Alert', 'Happy'], 2, 'Lethargic means lacking energy or sluggish.', { tag: 'Synonyms' }),
  q('2B08', 'B', 'Synonym of _Ominous_:', ['Promising', 'Threatening', 'Joyful', 'Simple'], 2, 'Ominous means giving the impression that something bad is going to happen.', { tag: 'Synonyms' }),
  q('2B09', 'B', 'Synonym of _Pernicious_:', ['Beneficial', 'Harmful', 'Beautiful', 'Quick'], 2, 'Pernicious means having a harmful effect, especially in a gradual way.', { tag: 'Synonyms' }),
  q('2B10', 'B', 'Synonym of _Pragmatic_:', ['Idealistic', 'Practical', 'Angry', 'Confusion'], 2, 'Pragmatic means dealing with things sensibly and realistically.', { tag: 'Synonyms' }),

  // Vocabulary - Antonyms
  q('2B11', 'B', 'Antonym of _Ephemeral_:', ['Brief', 'Eternal', 'Weak', 'Frail'], 2, 'Ephemeral means lasting for a very short time; Eternal is the opposite.', { tag: 'Antonyms' }),
  q('2B12', 'B', 'Antonym of _Benevolent_:', ['Kind', 'Malevolent', 'Generous', 'Polite'], 2, 'Benevolent means well-meaning and kindly; Malevolent means the opposite.', { tag: 'Antonyms' }),
  q('2B13', 'B', 'Antonym of _Obscure_:', ['Hidden', 'Famous', 'Dark', 'Difficult'], 2, 'Obscure means not discovered or known about; Famous means the opposite.', { tag: 'Antonyms' }),
  q('2B14', 'B', 'Antonym of _Resilient_:', ['Strong', 'Fragile', 'Elastic', 'Hard'], 2, 'Resilient means able to withstand or recover quickly from difficulties; Fragile is the opposite.', { tag: 'Antonyms' }),
  q('2B15', 'B', 'Antonym of _Trivial_:', ['Minor', 'Significant', 'Useless', 'Common'], 2, 'Trivial means of little value or importance; Significant is the opposite.', { tag: 'Antonyms' }),

  // Grammar - Error Spotting
  q('2B16', 'B', 'Error: The group (1) / of students (2) / were very disciplined (3).', ['1', '2', '3', 'No error'], 3, 'Collective noun "group" is singular, so it should be "was".', { tag: 'Para-Jumbles' }),
  q('2B17', 'B', 'Error: Neither he (1) / nor I (2) / are going to the meeting (3).', ['1', '2', '3', 'No error'], 3, 'In "neither/nor", the verb agrees with the closer subject ("I"), so it should be "am".', { tag: 'Para-Jumbles' }),
  q('2B18', 'B', 'Error: I would have (1) / helped him (2) / if he asked me (3).', ['1', '2', '3', 'No error'], 3, 'Third conditional: "if he had asked me".', { tag: 'Para-Jumbles' }),
  q('2B19', 'B', 'Error: She acts (1) / as if she (2) / is the boss (3).', ['1', '2', '3', 'No error'], 3, 'Subjunctive mood: "as if she were the boss".', { tag: 'Para-Jumbles' }),
  q('2B20', 'B', 'Error: Between you (1) / and I (2) / this is a secret (3).', ['1', '2', '3', 'No error'], 2, '"Between" is a preposition, so use object pronoun "me".', { tag: 'Para-Jumbles' }),

  // Idioms
  q('2B21', 'B', 'Idiom meaning: _Under the weather_', ['Sunny day', 'Feeling ill', 'In trouble', 'Very happy'], 2, 'Under the weather means feeling slightly unwell.', { tag: 'Idioms' }),
  q('2B22', 'B', 'Idiom meaning: _Cost an arm and a leg_', ['Cheap', 'Very expensive', 'Difficult task', 'Injury'], 2, 'This idiom means something is extremely expensive.', { tag: 'Idioms' }),
  q('2B23', 'B', 'Idiom meaning: _Piece of cake_', ['Tasty', 'Very easy', 'A celebration', 'Small portion'], 2, 'Piece of cake means a very easy task.', { tag: 'Idioms' }),
  q('2B24', 'B', 'Idiom meaning: _Cry over spilled milk_', ['To be sorry', 'To complain about past losses', 'To be wasteful', 'To be loud'], 2, 'To worry about something that has already happened and cannot be fixed.', { tag: 'Idioms' }),
  q('2B25', 'B', 'Idiom meaning: _Break the ice_', ['To start a conversation', 'To create a problem', 'To be cold', 'To win a race'], 1, 'To break the ice means to relieve tension or start a conversation in a social setting.', { tag: 'Idioms' }),

  // Spelling
  q('2B26', 'B', 'Correct Spelling:', ['Commitment', 'Comittment', 'Comitment', 'Committment'], 1, 'Commitment has double "m" and single "t" in the middle.', { tag: 'Spelling' }),
  q('2B27', 'B', 'Correct Spelling:', ['Accommodation', 'Acommodation', 'Accomodation', 'Acomodation'], 1, 'Accommodation has double "c" and double "m".', { tag: 'Spelling' }),
  q('2B28', 'B', 'Correct Spelling:', ['Separate', 'Seperate', 'Seprate', 'Seperat'], 1, 'Separate (think "there is a rat in separate").', { tag: 'Spelling' }),
  q('2B29', 'B', 'Correct Spelling:', ['Maintenance', 'Maintainance', 'Maintenence', 'Maintenence'], 1, 'Maintenance.', { tag: 'Spelling' }),
  q('2B30', 'B', 'Correct Spelling:', ['Entrepreneur', 'Enterpreneur', 'Entreprenuer', 'Enterprenur'], 1, 'Entrepreneur.', { tag: 'Spelling' }),

  // Fillers
  q('2B31', 'B', 'He is proficient ___ English.', ['in', 'at', 'with', 'on'], 1, 'Proficient in something.', { tag: 'RC Strategy' }),
  q('2B32', 'B', 'The cat jumped ___ the table.', ['on', 'onto', 'at', 'in'], 2, '"Onto" indicates movement to a surface.', { tag: 'RC Strategy' }),
  q('2B33', 'B', 'She has been living here ___ 2010.', ['for', 'since', 'from', 'in'], 2, '"Since" for a specific point in time.', { tag: 'RC Strategy' }),
  q('2B34', 'B', 'He is afraid ___ dogs.', ['of', 'from', 'by', 'at'], 1, 'Afraid of.', { tag: 'RC Strategy' }),
  q('2B35', 'B', 'The meeting was put ___ due to rain.', ['off', 'on', 'down', 'out'], 1, '"Put off" means to postpone.', { tag: 'RC Strategy' }),

  // One Word Substitution
  q('2B36', 'B', 'A person who loves books:', ['Bibliophile', 'Philanthropist', 'Polyglot', 'Misogynist'], 1, 'Bibliophile.', { tag: 'One-word Sub' }),
  q('2B37', 'B', 'Study of birds:', ['Zoology', 'Ornithology', 'Entomology', 'Botany'], 2, 'Ornithology.', { tag: 'One-word Sub' }),
  q('2B38', 'B', 'One who eats everything:', ['Carnivorous', 'Omnivorous', 'Herbivorous', 'Glutton'], 2, 'Omnivorous.', { tag: 'One-word Sub' }),
  q('2B39', 'B', 'A life history written by oneself:', ['Biography', 'Autobiography', 'Journal', 'Memoir'], 2, 'Autobiography.', { tag: 'One-word Sub' }),
  q('2B40', 'B', 'Something that cannot be seen through:', ['Transparent', 'Opaque', 'Translucent', 'Clear'], 2, 'Opaque.', { tag: 'One-word Sub' }),

  // Para-jumbles
  q('2B41', 'B', 'Arrange: A. Result, B. Examination, C. Preparation, D. Hall ticket.', ['CDAB', 'CBDA', 'CDBA', 'BDCA'], 3, 'Preparation (C) -> Hall ticket (D) -> Examination (B) -> Result (A).', { tag: 'Para-Jumbles' }),
  q('2B42', 'B', 'Arrange: A. Payment, B. Selection, C. Delivery, D. Order.', ['BADC', 'BDAC', 'ADBC', 'DBAC'], 2, 'Selection (B) -> Order (D) -> Payment (A) -> Delivery (C).', { tag: 'Para-Jumbles' }),
  q('2B43', 'B', 'Arrange: A. Flight, B. Check-in, C. Destination, D. Boarding.', ['BADC', 'BDAC', 'ABDC', 'DABC'], 2, 'Check-in (B) -> Boarding (D) -> Flight (A) -> Destination (C).', { tag: 'Para-Jumbles' }),
  q('2B44', 'B', 'Arrange: A. Design, B. Market research, C. Prototype, D. Feedback.', ['BACD', 'BADC', 'ABCD', 'DBAC'], 1, 'Market research (B) -> Design (A) -> Prototype (C) -> Feedback (D).', { tag: 'Para-Jumbles' }),
  q('2B45', 'B', 'Arrange: A. Thread, B. Fabric, C. Cotton, D. Garment.', ['CABD', 'CBAD', 'ABCD', 'DBCA'], 1, 'Cotton (C) -> Thread (A) -> Fabric (B) -> Garment (D).', { tag: 'Para-Jumbles' }),

  // Sentence Improvement
  q('2B46', 'B', 'Improve: She _has seen_ the movie yesterday.', ['saw', 'had seen', 'sees', 'no improvement'], 1, 'Use past simple for specific past time.', { tag: 'RC Strategy' }),
  q('2B47', 'B', 'Improve: He is _more taller_ than his brother.', ['taller', 'tallest', 'more tall', 'no improvement'], 1, '"More taller" is a double comparative error.', { tag: 'RC Strategy' }),
  q('2B48', 'B', 'Improve: If I _was_ you, I would go.', ['were', 'am', 'had been', 'no improvement'], 1, 'Subjunctive for hypothetical.', { tag: 'RC Strategy' }),
  q('2B49', 'B', 'Improve: The climate of Delhi is hotter than _Mumbai_.', ['that of Mumbai', 'those of Mumbai', 'the one of Mumbai', 'no improvement'], 1, 'Compare climate with climate.', { tag: 'RC Strategy' }),
  q('2B50', 'B', 'Improve: He _is having_ a large house.', ['has', 'had', 'is have', 'no improvement'], 1, 'State verbs like "have" (ownership) are not usually used in continuous.', { tag: 'RC Strategy' })
];
