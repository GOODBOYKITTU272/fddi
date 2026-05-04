import { q } from '../questionShape.js';

export default [
  // RC Passage (Fast Fashion)
  q('5B01', 'B', 'What is the "Ultra-Fast Fashion" model characterized by?', ['High-quality materials', 'Slow production cycles', 'Rapid production and rock-bottom prices', 'Ethical labor practices'], 3, 'The passage defines it as rapid cycles and low prices.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('5B02', 'B', 'Which industry is the second-largest consumer of water globally?', ['Automobile', 'Agriculture', 'Textile', 'Mining'], 3, 'The passage states the textile industry is the second-largest water consumer.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('5B03', 'B', 'What is the environmental impact of washing synthetic fabrics like polyester?', ['They release oxygen', 'They shed microplastics', 'They purify water', 'They decrease carbon footprint'], 2, 'The passage mentions the shedding of microplastics.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('5B04', 'B', 'What does "EPR" stand for in the context of the passage?', ['Extended Producer Responsibility', 'External Product Regulation', 'Essential Paper Recycling', 'Export Price Reform'], 1, 'Extended Producer Responsibility.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('5B05', 'B', 'What shift in consumer behavior is suggested by the passage?', ['From investment pieces to disposable fashion', 'From disposable fashion to investment pieces', 'From online to offline shopping', 'From credit to cash payments'], 2, 'Moving back to investment pieces for sustainability.', { passageRef: 'p1', tag: 'RC Strategy' }),

  // Vocabulary
  q('5B06', 'B', 'Synonym of Incinerated:', ['Recycled', 'Burned', 'Buried', 'Washed'], 2, 'Incinerate means to burn to ashes.', { tag: 'Synonyms' }),
  q('5B07', 'B', 'Synonym of Exaggerate:', ['Magnify', 'Simplify', 'Ignore', 'Correct'], 1, 'To represent as greater than it is.', { tag: 'Synonyms' }),
  q('5B08', 'B', 'Synonym of Staggering:', ['Small', 'Astonishing/Huge', 'Ordinary', 'Quick'], 2, 'Deeply shocking or astonishing.', { tag: 'Synonyms' }),
  q('5B09', 'B', 'Synonym of Disposable:', ['Reusable', 'One-time use', 'Strong', 'Expensive'], 2, 'Intended to be used once and thrown away.', { tag: 'Synonyms' }),
  q('5B10', 'B', 'Synonym of Fundamental:', ['Secondary', 'Basic/Core', 'Useless', 'Minor'], 2, 'Forming a necessary base.', { tag: 'Synonyms' }),

  // Antonyms
  q('5B11', 'B', 'Antonym of Disposable:', ['Reusable', 'One-time', 'Cheap', 'Weak'], 1, 'Reusable is the opposite.', { tag: 'Antonyms' }),
  q('5B12', 'B', 'Antonym of Niche:', ['Small', 'Mainstream/Broad', 'Hidden', 'Clean'], 2, 'Mainstream is the opposite of niche.', { tag: 'Antonyms' }),
  q('5B13', 'B', 'Antonym of Incinerated:', ['Burned', 'Preserved', 'Destroyed', 'Hot'], 2, 'Preserved is the opposite.', { tag: 'Antonyms' }),
  q('5B14', 'B', 'Antonym of Staggering:', ['Huge', 'Unimpressive/Small', 'Fast', 'Loud'], 2, 'Unimpressive.', { tag: 'Antonyms' }),
  q('5B15', 'B', 'Antonym of Fundamental:', ['Core', 'Superficial/Minor', 'Fast', 'Loud'], 2, 'Superficial.', { tag: 'Antonyms' }),

  // Grammar
  q('5B16', 'B', 'Error: The quality of (1) / the products (2) / are excellent (3).', ['1', '2', '3', 'No error'], 3, '"Quality" is singular: "is".', { tag: 'Spotting Errors' }),
  q('5B17', 'B', 'Error: He did not (1) / wrote (2) / the letter (3).', ['1', '2', '3', 'No error'], 2, 'With "did not", use base form: "write".', { tag: 'Spotting Errors' }),
  q('5B18', 'B', 'Error: Since I was (1) / a child (2) / I was liking ice-cream (3).', ['1', '2', '3', 'No error'], 3, '"Like" is a state verb; "I have liked".', { tag: 'Spotting Errors' }),
  q('5B19', 'B', 'Error: She is (1) / the most (2) / prettiest girl (3).', ['1', '2', '3', 'No error'], 2, 'Double superlative: "the prettiest".', { tag: 'Spotting Errors' }),
  q('5B20', 'B', 'Error: We reached (1) / at the station (2) / on time (3).', ['1', '2', '3', 'No error'], 2, 'Remove "at": "reached the station".', { tag: 'Spotting Errors' }),

  // Idioms
  q('5B21', 'B', 'Idiom: Hit the nail on the head', ['To build something', 'To say something exactly right', 'To be angry', 'To make a mistake'], 2, 'Being precisely correct.', { tag: 'Idioms' }),
  q('5B22', 'B', 'Idiom: Let the cat out of the bag', ['Reveal a secret', 'Lose a pet', 'Be careless', 'Start a fight'], 1, 'Reveal a secret.', { tag: 'Idioms' }),
  q('5B23', 'B', 'Idiom: On cloud nine', ['Very tall', 'Extremely happy', 'In a plane', 'Confused'], 2, 'Very happy.', { tag: 'Idioms' }),
  q('5B24', 'B', 'Idiom: Bite the bullet', ['To be brave in difficulty', 'To be angry', 'To eat something hard', 'To fail'], 1, 'Enduring difficulty.', { tag: 'Idioms' }),
  q('5B25', 'B', 'Idiom: Pull someone\'s leg', ['To help', 'To tease/joke', 'To trip someone', 'To be rude'], 2, 'Teasing.', { tag: 'Idioms' }),

  // Spelling
  q('5B26', 'B', 'Correct Spelling:', ['Necessary', 'Neccessary', 'Necesary', 'Neccesary'], 1, 'Necessary.', { tag: 'Spelling' }),
  q('5B27', 'B', 'Correct Spelling:', ['Calendar', 'Calender', 'Calendur', 'Calandur'], 1, 'Calendar.', { tag: 'Spelling' }),
  q('5B28', 'B', 'Correct Spelling:', ['Committee', 'Comittee', 'Commitee', 'Comite'], 1, 'Committee.', { tag: 'Spelling' }),
  q('5B29', 'B', 'Correct Spelling:', ['Bureaucracy', 'Burocracy', 'Bureaucrasy', 'Burocrasy'], 1, 'Bureaucracy.', { tag: 'Spelling' }),
  q('5B30', 'B', 'Correct Spelling:', ['Maintenance', 'Maintainance', 'Maintenence', 'Maintenence'], 1, 'Maintenance.', { tag: 'Spelling' }),

  // Fillers
  q('5B31', 'B', 'He is fond ___ music.', ['of', 'for', 'with', 'at'], 1, 'Fond of.', { tag: 'Fillers' }),
  q('5B32', 'B', 'The book belongs ___ me.', ['to', 'with', 'at', 'on'], 1, 'Belongs to.', { tag: 'Fillers' }),
  q('5B33', 'B', 'She was born ___ 1995.', ['in', 'on', 'at', 'into'], 1, 'In a year.', { tag: 'Fillers' }),
  q('5B34', 'B', 'He went to school ___ foot.', ['on', 'by', 'at', 'with'], 1, 'On foot.', { tag: 'Fillers' }),
  q('5B35', 'B', 'I prefer tea ___ coffee.', ['to', 'than', 'over', 'at'], 1, 'Prefer...to.', { tag: 'Fillers' }),

  // One Word
  q('5B36', 'B', 'A person who does not believe in God:', ['Atheist', 'Theist', 'Agnostic', 'Pagan'], 1, 'Atheist.', { tag: 'One-word Sub' }),
  q('5B37', 'B', 'A study of insects:', ['Entomology', 'Etymology', 'Zoology', 'Biology'], 1, 'Entomology.', { tag: 'One-word Sub' }),
  q('5B38', 'B', 'One who looks at the bright side:', ['Optimist', 'Pessimist', 'Stoic', 'Cynic'], 1, 'Optimist.', { tag: 'One-word Sub' }),
  q('5B39', 'B', 'Killing of a king:', ['Regicide', 'Homicide', 'Genocide', 'Suicide'], 1, 'Regicide.', { tag: 'One-word Sub' }),
  q('5B40', 'B', 'A period of ten years:', ['Decade', 'Century', 'Millennium', 'Fortnight'], 1, 'Decade.', { tag: 'One-word Sub' }),

  // Para-jumbles
  q('5B41', 'B', 'Arrange: A. Result, B. Exam, C. Application, D. Study.', ['CDAB', 'CDBA', 'ABCD', 'DBAC'], 2, 'Application (C) -> Study (D) -> Exam (B) -> Result (A).', { tag: 'Para-Jumbles' }),
  q('5B42', 'B', 'Arrange: A. Payment, B. Delivery, C. Order, D. Selection.', ['DABC', 'DCAB', 'DCAB', 'ABCD'], 2, 'Selection (D) -> Order (C) -> Payment (A) -> Delivery (B).', { tag: 'Para-Jumbles' }),
  q('5B43', 'B', 'Arrange: A. Idea, B. Funding, C. Launch, D. Prototype.', ['ADBC', 'ADCB', 'ABCD', 'DBAC'], 2, 'Idea (A) -> Prototype (D) -> Funding (B) -> Launch (C).', { tag: 'Para-Jumbles' }),
  q('5B44', 'B', 'Arrange: A. Thread, B. Fabric, C. Cotton, D. Shirt.', ['CABD', 'CBAD', 'ABCD', 'DBCA'], 1, 'Cotton (C) -> Thread (A) -> Fabric (B) -> Shirt (D).', { tag: 'Para-Jumbles' }),
  q('5B45', 'B', 'Arrange: A. Soil, B. Seed, C. Water, D. Tree.', ['ABCD', 'BACD', 'BACD', 'BCAD'], 2, 'Soil (A) -> Seed (B) -> Water (C) -> Tree (D).', { tag: 'Para-Jumbles' }),

  // Sentence Improvement
  q('5B46', 'B', 'Improve: He _is_ taller than me.', ['no improvement', 'was', 'am', 'be'], 1, 'Correct sentence.', { tag: 'Sentence Improvement' }),
  q('5B47', 'B', 'Improve: She _don\'t_ like apples.', ['doesn\'t', 'do not', 'don\'t', 'no improvement'], 1, 'Third person singular.', { tag: 'Sentence Improvement' }),
  q('5B48', 'B', 'Improve: I _am_ living here for ten years.', ['have been living', 'lived', 'live', 'no improvement'], 1, 'Present perfect continuous.', { tag: 'Sentence Improvement' }),
  q('5B49', 'B', 'Improve: This is the _most best_ book.', ['best', 'good', 'better', 'no improvement'], 1, 'Avoid double superlative.', { tag: 'Sentence Improvement' }),
  q('5B50', 'B', 'Improve: If I _was_ a bird, I would fly.', ['were', 'am', 'had been', 'no improvement'], 1, 'Subjunctive mood.', { tag: 'Sentence Improvement' })
];
