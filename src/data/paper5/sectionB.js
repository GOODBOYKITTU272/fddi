import { q } from '../questionShape.js';

export default [
  // RC Passage (Fast Fashion)
  q('5B01', 'B', 'What is the "Ultra-Fast Fashion" model characterized by?', ['High-quality materials', 'Slow production cycles', 'Rapid production and rock-bottom prices', 'Ethical labor practices'], 2, 'The passage defines it as rapid cycles and low prices.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('5B02', 'B', 'Which industry is the second-largest consumer of water globally?', ['Automobile', 'Agriculture', 'Textile', 'Mining'], 2, 'The passage states the textile industry is the second-largest water consumer.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('5B03', 'B', 'What is the environmental impact of washing synthetic fabrics like polyester?', ['They release oxygen', 'They shed microplastics', 'They purify water', 'They decrease carbon footprint'], 1, 'The passage mentions the shedding of microplastics.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('5B04', 'B', 'What does "EPR" stand for in the context of the passage?', ['Extended Producer Responsibility', 'External Product Regulation', 'Essential Paper Recycling', 'Export Price Reform'\Extended Producer Responsibility.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('5B05', 'B', 'What shift in consumer behavior is suggested by the passage?', ['From investment pieces to disposable fashion', 'From disposable fashion to investment pieces', 'From online to offline shopping', 'From credit to cash payments'], 1, 'Moving to investment pieces.', { passageRef: 'p1', tag: 'RC Strategy' }),

  // Vocabulary
  q('5B06', 'B', 'Synonym of _Incinerated_:', ['Recycled', 'Burned', 'Buried', 'Washed'], 1, 'Incinerate means to burn to ashes.', { tag: 'Synonyms' }),
  q('5B07', 'B', 'Synonym of _Exaggerate_:', ['Magnify', 'Simplify', 'Ignore', 'Correct'\To represent as greater than it is.', { tag: 'Synonyms' }),
  q('5B08', 'B', 'Synonym of _Staggering_:', ['Small', 'Astonishing/Huge', 'Ordinary', 'Quick'], 1, 'Deeply shocking or astonishing.', { tag: 'Synonyms' }),
  q('5B09', 'B', 'Synonym of _Disposable_:', ['Reusable', 'One-time use', 'Strong', 'Expensive'], 1, 'Intended to be used once and thrown away.', { tag: 'Synonyms' }),
  q('5B10', 'B', 'Synonym of _Fundamental_:', ['Secondary', 'Basic/Core', 'Useless', 'Minor'], 1, 'Forming a necessary base.', { tag: 'Synonyms' }),

  // Antonyms
  q('5B11', 'B', 'Antonym of _Disposable_:', ['Reusable', 'One-time', 'Cheap', 'Weak'\Reusable is the opposite.', { tag: 'Antonyms' }),
  q('5B12', 'B', 'Antonym of _Niche_:', ['Small', 'Mainstream/Broad', 'Hidden', 'Clean'], 1, 'Mainstream is the opposite of niche.', { tag: 'Antonyms' }),
  q('5B13', 'B', 'Antonym of _Incinerated_:', ['Burned', 'Preserved', 'Destroyed', 'Hot'], 1, 'Preserved is the opposite.', { tag: 'Antonyms' }),
  q('5B14', 'B', 'Antonym of _Staggering_:', ['Huge', 'Unimpressive/Small', 'Fast', 'Loud'], 1, 'Unimpressive.', { tag: 'Antonyms' }),
  q('5B15', 'B', 'Antonym of _Fundamental_:', ['Core', 'Superficial/Minor', 'Fast', 'Loud'], 1, 'Superficial.', { tag: 'Antonyms' }),

  // Grammar
  q('5B16', 'B', 'Error: The quality of (1) / the products (2) / are excellent (3).', ['1', '2', '3', 'No error'], 2, '"Quality" is singular: "is".', { tag: 'Para-Jumbles' }),
  q('5B17', 'B', 'Error: He did not (1) / wrote (2) / the letter (3).', ['1', '2', '3', 'No error'], 1, 'With "did not", use base form: "write".', { tag: 'Para-Jumbles' }),
  q('5B18', 'B', 'Error: Since I was (1) / a child (2) / I was liking ice-cream (3).', ['1', '2', '3', 'No error'], 2, '"Like" is a state verb; "I have liked".', { tag: 'Para-Jumbles' }),
  q('5B19', 'B', 'Error: She is (1) / the most (2) / prettiest girl (3).', ['1', '2', '3', 'No error'], 1, 'Double superlative: "the prettiest".', { tag: 'Para-Jumbles' }),
  q('5B20', 'B', 'Error: We reached (1) / at the station (2) / on time (3).', ['1', '2', '3', 'No error'], 1, 'Remove "at": "reached the station".', { tag: 'Para-Jumbles' }),

  // Idioms
  q('5B21', 'B', 'Idiom: _Hit the nail on the head_', ['To build something', 'To say something exactly right', 'To be angry', 'To make a mistake'], 1, 'Being precisely correct.', { tag: 'Idioms' }),
  q('5B22', 'B', 'Idiom: _Let the cat out of the bag_', ['Reveal a secret', 'Lose a pet', 'Be careless', 'Start a fight'\Reveal a secret.', { tag: 'Idioms' }),
  q('5B23', 'B', 'Idiom: _On cloud nine_', ['Very tall', 'Extremely happy', 'In a plane', 'Confused'], 1, 'Very happy.', { tag: 'Idioms' }),
  q('5B24', 'B', 'Idiom: _Bite the bullet_', ['To be brave in difficulty', 'To be angry', 'To eat something hard', 'To fail'\Enduring difficulty.', { tag: 'Idioms' }),
  q('5B25', 'B', 'Idiom: _Pull someone\'s leg_', ['To help', 'To tease/joke', 'To trip someone', 'To be rude'], 1, 'Teasing.', { tag: 'Idioms' }),

  // Spelling
  q('5B26', 'B', 'Correct:', ['Necessary', 'Neccessary', 'Necesary', 'Neccesary'\Necessary.', { tag: 'Spelling' }),
  q('5B27', 'B', 'Correct:', ['Calendar', 'Calender', 'Calendur', 'Calandur'\Calendar.', { tag: 'Spelling' }),
  q('5B28', 'B', 'Correct:', ['Committee', 'Comittee', 'Commitee', 'Comite'\Committee.', { tag: 'Spelling' }),
  q('5B29', 'B', 'Correct:', ['Bureaucracy', 'Burocracy', 'Bureaucrasy', 'Burocrasy'\Bureaucracy.', { tag: 'Spelling' }),
  q('5B30', 'B', 'Correct:', ['Maintenance', 'Maintainance', 'Maintenence', 'Maintenence'\Maintenance.', { tag: 'Spelling' }),

  // Fillers
  q('5B31', 'B', 'He is fond ___ music.', ['of', 'for', 'with', 'at'\Fond of.', { tag: 'RC Strategy' }),
  q('5B32', 'B', 'The book belongs ___ me.', ['to', 'with', 'at', 'on'\Belongs to.', { tag: 'RC Strategy' }),
  q('5B33', 'B', 'She was born ___ 1995.', ['in', 'on', 'at', 'into'\In a year.', { tag: 'RC Strategy' }),
  q('5B34', 'B', 'He went to school ___ foot.', ['on', 'by', 'at', 'with'\On foot.', { tag: 'RC Strategy' }),
  q('5B35', 'B', 'I prefer tea ___ coffee.', ['to', 'than', 'over', 'at'\Prefer...to.', { tag: 'RC Strategy' }),

  // One Word
  q('5B36', 'B', 'A person who does not believe in God:', ['Atheist', 'Theist', 'Agnostic', 'Pagan'\Atheist.', { tag: 'One-word Sub' }),
  q('5B37', 'B', 'A study of insects:', ['Entomology', 'Etymology', 'Zoology', 'Biology'\Entomology.', { tag: 'One-word Sub' }),
  q('5B38', 'B', 'One who looks at the bright side:', ['Optimist', 'Pessimist', 'Stoic', 'Cynic'\Optimist.', { tag: 'One-word Sub' }),
  q('5B39', 'B', 'Killing of a king:', ['Regicide', 'Homicide', 'Genocide', 'Suicide'\Regicide.', { tag: 'One-word Sub' }),
  q('5B40', 'B', 'A period of ten years:', ['Decade', 'Century', 'Millennium', 'Fortnight'\Decade.', { tag: 'One-word Sub' }),

  // Para-jumbles
  q('5B41', 'B', 'Arrange: A. Result, B. Exam, C. Application, D. Study.', ['CDAB', 'CDBA', 'ABCD', 'DBAC'\Application (C) -> Study (D) -> Exam (B) -> Result (A).', { tag: 'Para-Jumbles' }),
  q('5B42', 'B', 'Arrange: A. Payment, B. Delivery, C. Order, D. Selection.', ['DABC', 'DCAB', 'DACB', 'ABCD'], 1, 'Selection (D) -> Order (C) -> Payment (A) -> Delivery (B).', { tag: 'Para-Jumbles' }),
  q('5B43', 'B', 'Arrange: A. Idea, B. Funding, C. Launch, D. Prototype.', ['ADBC', 'ADCB', 'ABCD', 'DBAC'\Idea (A) -> Funding (D) -> Prototype (B) -> Launch (C).', { tag: 'Para-Jumbles' }),
  q('5B44', 'B', 'Arrange: A. Thread, B. Fabric, C. Cotton, D. Shirt.', ['CABD', 'CBAD', 'ABCD', 'DBCA'\Cotton (C) -> Thread (A) -> Fabric (B) -> Shirt (D).', { tag: 'Para-Jumbles' }),
  q('5B45', 'B', 'Arrange: A. Soil, B. Seed, C. Water, D. Tree.', ['ABCD', 'BACD', 'B CAD', 'BCAD'\Soil (A) -> Seed (B) -> Water (C) -> Tree (D).', { tag: 'Para-Jumbles' }),

  // Sentence Improvement
  q('5B46', 'B', 'Improve: He _is_ taller than me.', ['no improvement', 'was', 'am', 'be'\Correct sentence.', { tag: 'RC Strategy' }),
  q('5B47', 'B', 'Improve: She _don\'t_ like apples.', ['doesn\'t', 'do not', 'don\'t', 'no improvement'\Third person singular.', { tag: 'RC Strategy' }),
  q('5B48', 'B', 'Improve: I _am_ living here for ten years.', ['have been living', 'lived', 'live', 'no improvement'\Present perfect continuous.', { tag: 'RC Strategy' }),
  q('5B49', 'B', 'Improve: This is the _most best_ book.', ['best', 'good', 'better', 'no improvement'\Avoid double superlative.', { tag: 'RC Strategy' }),
  q('5B50', 'B', 'Improve: If I _was_ a bird, I would fly.', ['were', 'am', 'had been', 'no improvement'\Subjunctive mood.', { tag: 'RC Strategy' })
];
