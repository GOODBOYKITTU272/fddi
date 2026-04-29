import { q } from '../questionShape.js';

export default [
  // RC Passage (Generative AI)
  q('3B01', 'B', 'What does "Generative Design" refer to in the passage?', ['Creating logos manually', 'Iterating through form variations based on constraints', 'Writing AI code', 'Protecting copyrights'], 1, 'The passage defines generative design as iterating through variations based on constraints.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('3B02', 'B', 'What is a major concern mentioned regarding AI and creativity?', ['Aesthetic homogenization', 'Increased cost of production', 'Lack of high-speed internet', 'Excessive human intuition'], 0, 'The passage mentions the risk of designs starting to look similar (homogenization).', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('3B03', 'B', 'The term "Human-in-the-loop" suggests:', ['Humans are irrelevant', 'AI works alone', 'Human intuition guides the AI', 'AI is a loop system'], 2, 'It suggests a hybrid model where humans guide the process.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('3B04', 'B', 'According to the passage, why is the legal framework for AI output "in flux"?', ['AI is too expensive', 'Data centers are moving', 'Work was used without explicit consent for training', 'Designers are on strike'], 2, 'The passage highlights intellectual property concerns due to training data usage.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('3B05', 'B', 'The passage suggests that AI allows designers to focus on:', ['Repetitive sketching', 'Data entry', 'Ethics and emotional resonance', 'Software installation'], 2, 'AI handles variations, letting humans focus on strategy and emotion.', { passageRef: 'p1', tag: 'RC Strategy' }),

  // Vocabulary
  q('3B06', 'B', 'Synonym of _Ambiguous_:', ['Clear', 'Uncertain', 'Loud', 'Fast'], 1, 'Vague or uncertain.', { tag: 'Synonyms' }),
  q('3B07', 'B', 'Synonym of _Resilient_:', ['Fragile', 'Tough/Elastic', 'Lazy', 'Heavy'], 1, 'Able to withstand/recover.', { tag: 'Synonyms' }),
  q('3B08', 'B', 'Synonym of _Augment_:', ['Decrease', 'Increase/Enhance', 'Hide', 'Speak'], 1, 'To make something greater by adding to it.', { tag: 'Synonyms' }),
  q('3B09', 'B', 'Synonym of _Mitigate_:', ['Increase', 'Alleviate/Less severe', 'Ignore', 'Force'], 1, 'To make less severe.', { tag: 'Synonyms' }),
  q('3B10', 'B', 'Synonym of _Diligent_:', ['Lazy', 'Hardworking', 'Quick', 'Careless'], 1, 'Showing care and effort.', { tag: 'Synonyms' }),

  // Antonyms
  q('3B11', 'B', 'Antonym of _Exacerbate_:', ['Aggravate', 'Alleviate', 'Force', 'Move'], 1, 'Exacerbate means to make worse; Alleviate is the opposite.', { tag: 'Antonyms' }),
  q('3B12', 'B', 'Antonym of _Obsolete_:', ['Old', 'Contemporary/Modern', 'Broken', 'Large'], 1, 'Obsolete means outdated; Contemporary is opposite.', { tag: 'Antonyms' }),
  q('3B13', 'B', 'Antonym of _Candour_:', ['Honesty', 'Deceit', 'Loudness', 'Speed'], 1, 'Candour means openness/honesty; Deceit is opposite.', { tag: 'Antonyms' }),
  q('3B14', 'B', 'Antonym of _Hostile_:', ['Aggressive', 'Amiable', 'Distant', 'Dark'], 1, 'Amiable is friendly.', { tag: 'Antonyms' }),
  q('3B15', 'B', 'Antonym of _Proficient_:', ['Skilled', 'Incompetent', 'Fast', 'Active'], 1, 'Incompetent is the opposite of skilled/proficient.', { tag: 'Antonyms' }),

  // Grammar
  q('3B16', 'B', 'Error: I have (1) / seen him (2) / ten days ago (3).', ['1', '2', '3', 'No error'], 0, 'With a specific past time, use simple past: "I saw him".', { tag: 'Para-Jumbles' }),
  q('3B17', 'B', 'Error: One of the (1) / greatest designer (2) / in the world (3).', ['1', '2', '3', 'No error'], 1, '"One of the" requires a plural noun: "designers".', { tag: 'Para-Jumbles' }),
  q('3B18', 'B', 'Error: He prefer (1) / coffee (2) / than tea (3).', ['1', '2', '3', 'No error'], 2, '"Prefer" is followed by "to": "prefer coffee to tea".', { tag: 'Para-Jumbles' }),
  q('3B19', 'B', 'Error: Unless you (1) / do not work hard (2) / you will fail (3).', ['1', '2', '3', 'No error'], 1, '"Unless" is already negative; remove "do not".', { tag: 'Para-Jumbles' }),
  q('3B20', 'B', 'Error: The information (1) / provided to us (2) / were wrong (3).', ['1', '2', '3', 'No error'], 2, '"Information" is uncountable and singular: "was".', { tag: 'Para-Jumbles' }),

  // Idioms
  q('3B21', 'B', 'Idiom: _Burning the midnight oil_', ['Saving energy', 'Working late into the night', 'Cooking dinner', 'Sleeping early'], 1, 'To work late.', { tag: 'Idioms' }),
  q('3B22', 'B', 'Idiom: _A blessing in disguise_', ['A hidden trap', 'Good thing initially seen as bad', 'A fake gift', 'A miracle'], 1, 'Good results from a bad start.', { tag: 'Idioms' }),
  q('3B23', 'B', 'Idiom: _Jump on the bandwagon_', ['Buy a car', 'Join a popular trend', 'Start a fight', 'Quit a job'], 1, 'Following a trend.', { tag: 'Idioms' }),
  q('3B24', 'B', 'Idiom: _Spill the beans_', ['Cook food', 'Reveal a secret', 'Make a mess', 'Be honest'], 1, 'Reveal a secret.', { tag: 'Idioms' }),
  q('3B25', 'B', 'Idiom: _Under the radar_', ['Flying high', 'Not noticed/secretly', 'In a plane', 'Highly visible'], 1, 'Going unnoticed.', { tag: 'Idioms' }),

  // Spelling
  q('3B26', 'B', 'Correct:', ['Acomodation', 'Accommodation', 'Accomodation', 'Acommodation'], 1, 'Double c, double m.', { tag: 'Spelling' }),
  q('3B27', 'B', 'Correct:', ['Occurrence', 'Occurance', 'Occurence', 'Ocurrence'], 0, 'Double c, double r.', { tag: 'Spelling' }),
  q('3B28', 'B', 'Correct:', ['Manoeuvre', 'Maneuver', 'Manuevre', 'Maneuvre'], 0, 'Manoeuvre (UK) or Maneuver (US).', { tag: 'Spelling' }),
  q('3B29', 'B', 'Correct:', ['Boutique', 'Butique', 'Bootique', 'Boutiqe'], 0, 'Boutique.', { tag: 'Spelling' }),
  q('3B30', 'B', 'Correct:', ['Catalogue', 'Cataloge', 'Catalog', 'Both 1 and 3'], 3, 'Catalogue (UK) and Catalog (US) are both correct.', { tag: 'Spelling' }),

  // Fillers
  q('3B31', 'B', 'She is good ___ sketching.', ['at', 'in', 'on', 'with'], 0, 'Good at something.', { tag: 'RC Strategy' }),
  q('3B32', 'B', 'The price ___ depends on the material.', ['at', 'on', 'of', 'in'], 2, 'Price of.', { tag: 'RC Strategy' }),
  q('3B33', 'B', 'He went ___ the room.', ['into', 'in', 'on', 'at'], 0, 'Movement into.', { tag: 'RC Strategy' }),
  q('3B34', 'B', 'I have a lot of respect ___ her.', ['for', 'to', 'at', 'on'], 0, 'Respect for.', { tag: 'RC Strategy' }),
  q('3B35', 'B', 'We are looking forward ___ meeting you.', ['to', 'at', 'for', 'on'], 0, 'Looking forward to.', { tag: 'RC Strategy' }),

  // One Word
  q('3B36', 'B', 'One who is present everywhere:', ['Omniscient', 'Omnipresent', 'Omnipotent', 'Polyglot'], 1, 'Omnipresent.', { tag: 'One-word Sub' }),
  q('3B37', 'B', 'Handwriting that cannot be read:', ['Illegible', 'Ineligible', 'Corrupt', 'Vague'], 0, 'Illegible.', { tag: 'One-word Sub' }),
  q('3B38', 'B', 'A person who hates women:', ['Misogynist', 'Misandrist', 'Philanthropist', 'Misanthrope'], 0, 'Misogynist.', { tag: 'One-word Sub' }),
  q('3B39', 'B', 'The science of time measurement:', ['Horology', 'Chronology', 'Geology', 'Biology'], 0, 'Horology.', { tag: 'One-word Sub' }),
  q('3B40', 'B', 'Killing of one\'s own brother:', ['Fratricide', 'Patricide', 'Matricide', 'Regicide'], 0, 'Fratricide.', { tag: 'One-word Sub' }),

  // Para-jumbles
  q('3B41', 'B', 'Arrange: A. Login, B. OTP, C. Register, D. Dashboard.', ['CABD', 'CBAD', 'ACBD', 'BACD'], 0, 'Register (C) -> Login (A) -> OTP (B) -> Dashboard (D).', { tag: 'Para-Jumbles' }),
  q('3B42', 'B', 'Arrange: A. Sew, B. Cut, C. Measure, D. Wear.', ['CBAD', 'CABD', 'BCAD', 'ADBC'], 0, 'Measure (C) -> Cut (B) -> Sew (A) -> Wear (D).', { tag: 'Para-Jumbles' }),
  q('3B43', 'B', 'Arrange: A. Idea, B. Launch, C. Prototype, D. Funding.', ['ACDB', 'ADCB', 'CDAB', 'ABCD'], 1, 'Idea (A) -> Funding (D) -> Prototype (C) -> Launch (B).', { tag: 'Para-Jumbles' }),
  q('3B44', 'B', 'Arrange: A. Print, B. Layout, C. Type, D. Distribute.', ['CBAD', 'CABD', 'BCAD', 'ACBD'], 0, 'Type (C) -> Layout (B) -> Print (A) -> Distribute (D).', { tag: 'Para-Jumbles' }),
  q('3B45', 'B', 'Arrange: A. Soil, B. Seed, C. Water, D. Flower.', ['ABCD', 'BACD', 'B CAD', 'BCAD'], 0, 'Soil (A) -> Seed (B) -> Water (C) -> Flower (D).', { tag: 'Para-Jumbles' }),

  // Sentence Improvement
  q('3B46', 'B', 'Improve: Scarcely had he gone _than_ it started raining.', ['when', 'then', 'that', 'no improvement'], 0, 'Scarcely/Hardly is followed by "when".', { tag: 'RC Strategy' }),
  q('3B47', 'B', 'Improve: Each of the boys _have_ a book.', ['has', 'having', 'is having', 'no improvement'], 0, '"Each" is singular.', { tag: 'RC Strategy' }),
  q('3B48', 'B', 'Improve: I _had finished_ my work before he came.', ['finished', 'have finished', 'finish', 'no improvement'], 3, 'Correct usage of past perfect for the earlier action.', { tag: 'RC Strategy' }),
  q('3B49', 'B', 'Improve: Being a rainy day, I _stay_ at home.', ['stayed', 'stays', 'staying', 'no improvement'], 0, 'Past tense context.', { tag: 'RC Strategy' }),
  q('3B50', 'B', 'Improve: He is as tall as, if not _taller than_, me.', ['tall as', 'taller', 'tallest', 'no improvement'], 3, 'Correct comparative structure.', { tag: 'RC Strategy' })
];
