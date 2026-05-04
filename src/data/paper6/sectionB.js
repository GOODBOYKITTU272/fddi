import { q } from '../questionShape.js';

export default [
  // RC Passage (Smart Cities)
  q('6B01', 'B', 'What is the primary goal of a "Smart City" according to the passage?', ['Technocratic dominance', 'Improving quality of life using data/tech', 'Increasing car usage', 'Eliminating nature'], 2, 'The passage states the goal is to improve life quality while reducing footprint.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('6B02', 'B', 'Which pillar of smart design prioritizes pedestrians and cyclists?', ['Active mobility', 'Biophilic design', 'Command centers', 'Digital divide'], 1, 'The passage defines active mobility as prioritizing pedestrians and cyclists.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('6B03', 'B', '"Biophilic design" refers to:', ['Using biology in computers', 'Integrating nature into the built environment', 'Building high-speed trains', 'Creating digital maps'], 2, 'The passage mentions integrating nature to improve air quality and well-being.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('6B04', 'B', 'What is identified as a potential downside of the "smart" label?', ['Lack of data', 'The digital divide', 'Too many solar streetlights', 'Too much active mobility'], 2, 'The passage mentions the risk of overlooking the digital divide.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('6B05', 'B', 'The future of urban design should ensure that:', ['Technology serves the people', 'Algorithms make all decisions', 'Cities become monochromatic', 'Nature is replaced by tech'], 1, 'The passage concludes that technology must serve people.', { passageRef: 'p1', tag: 'RC Strategy' }),

  // Vocabulary
  q('6B06', 'B', 'Synonym of Inclusive:', ['Exclusive', 'All-encompassing/Broad', 'Narrow', 'Small'], 2, 'Including much or everything.', { tag: 'Synonyms' }),
  q('6B07', 'B', 'Synonym of Vital:', ['Minor', 'Essential/Crucial', 'Useless', 'Old'], 2, 'Absolutely necessary.', { tag: 'Synonyms' }),
  q('6B08', 'B', 'Synonym of Catalyzed:', ['Stopped', 'Accelerated/Stimulated', 'Hid', 'Finished'], 2, 'To cause or accelerate a reaction.', { tag: 'Synonyms' }),
  q('6B09', 'B', 'Synonym of Biophilic:', ['Nature-loving', 'Anti-nature', 'Machine-like', 'Fast'], 1, 'Relating to a love of living things and nature.', { tag: 'Synonyms' }),
  q('6B10', 'B', 'Synonym of Technocratic:', ['Democratic', 'Related to technical experts', 'Artistic', 'Ancient'], 2, 'Relating to government by technical experts.', { tag: 'Synonyms' }),

  // Antonyms
  q('6B11', 'B', 'Antonym of Inclusive:', ['Broad', 'Exclusive', 'Fast', 'Loud'], 2, 'Exclusive is the opposite.', { tag: 'Antonyms' }),
  q('6B12', 'B', 'Antonym of Vital:', ['Crucial', 'Trivial/Unimportant', 'Fast', 'Loud'], 2, 'Trivial.', { tag: 'Antonyms' }),
  q('6B13', 'B', 'Antonym of Seamless:', ['Smooth', 'Fragmented', 'Fast', 'Loud'], 2, 'Fragmented/Disjointed.', { tag: 'Antonyms' }),
  q('6B14', 'B', 'Antonym of Accessibility:', ['Availability', 'Inaccessibility', 'Fast', 'Loud'], 2, 'Inaccessibility.', { tag: 'Antonyms' }),
  q('6B15', 'B', 'Antonym of Diversity:', ['Variety', 'Uniformity', 'Fast', 'Loud'], 2, 'Uniformity is the opposite.', { tag: 'Antonyms' }),

  // Grammar
  q('6B16', 'B', 'Error: The furniture (1) / in this room (2) / are very old (3).', ['1', '2', '3', 'No error'], 3, '"Furniture" is uncountable and singular: "is".', { tag: 'Spotting Errors' }),
  q('6B17', 'B', 'Error: He is (1) / more smarter (2) / than me (3).', ['1', '2', '3', 'No error'], 2, 'Double comparative error: "smarter".', { tag: 'Spotting Errors' }),
  q('6B18', 'B', 'Error: I have (1) / a important (2) / meeting (3).', ['1', '2', '3', 'No error'], 2, 'Use "an" before a vowel sound: "an important".', { tag: 'Spotting Errors' }),
  q('6B19', 'B', 'Error: They have (1) / left (2) / since two hours (3).', ['1', '2', '3', 'No error'], 3, 'Use "for" with a duration: "for two hours".', { tag: 'Spotting Errors' }),
  q('6B20', 'B', 'Error: Each of (1) / the students (2) / have a book (3).', ['1', '2', '3', 'No error'], 3, '"Each" is singular: "has".', { tag: 'Spotting Errors' }),

  // Idioms
  q('6B21', 'B', 'Idiom: Blessing in disguise', ['A fake gift', 'A good thing initially seen as bad', 'A hidden trap', 'A lucky charm'], 2, 'Good result from a bad start.', { tag: 'Idioms' }),
  q('6B22', 'B', 'Idiom: Break the ice', ['To chill something', 'To start a conversation', 'To be cold', 'To create a problem'], 2, 'Starting a conversation.', { tag: 'Idioms' }),
  q('6B23', 'B', 'Idiom: Burn the midnight oil', ['Saving energy', 'Working late into the night', 'Cooking', 'Sleeping early'], 2, 'Working late.', { tag: 'Idioms' }),
  q('6B24', 'B', 'Idiom: Call it a day', ['To start a job', 'To stop working on something', 'To celebrate', 'To be tired'], 2, 'To end a task.', { tag: 'Idioms' }),
  q('6B25', 'B', 'Idiom: Cost an arm and a leg', ['Cheap', 'Very expensive', 'In trouble', 'Difficult'], 2, 'Very expensive.', { tag: 'Idioms' }),

  // Spelling
  q('6B26', 'B', 'Correct Spelling:', ['Pronunciation', 'Pronounciation', 'Prononciation', 'Pronunciacion'], 1, 'Pronunciation.', { tag: 'Spelling' }),
  q('6B27', 'B', 'Correct Spelling:', ['Hierarchy', 'Heirarchy', 'Hierachy', 'Heirachy'], 1, 'Hierarchy.', { tag: 'Spelling' }),
  q('6B28', 'B', 'Correct Spelling:', ['Millennium', 'Millenium', 'Milennium', 'Milenium'], 1, 'Millennium.', { tag: 'Spelling' }),
  q('6B29', 'B', 'Correct Spelling:', ['Sovereignty', 'Soverignty', 'Soveriegnty', 'Sovereigntie'], 1, 'Sovereignty.', { tag: 'Spelling' }),
  q('6B30', 'B', 'Correct Spelling:', ['Entrepreneur', 'Enterpreneur', 'Entreprenuer', 'Enterprenuer'], 1, 'Entrepreneur.', { tag: 'Spelling' }),

  // Fillers
  q('6B31', 'B', 'He is addicted ___ coffee.', ['to', 'with', 'for', 'at'], 1, 'Addicted to.', { tag: 'Fillers' }),
  q('6B32', 'B', 'She is good ___ dancing.', ['at', 'in', 'on', 'with'], 1, 'Good at.', { tag: 'Fillers' }),
  q('6B33', 'B', 'The plane took ___ on time.', ['off', 'on', 'up', 'down'], 1, 'Take off.', { tag: 'Fillers' }),
  q('6B34', 'B', 'He is consistent ___ his efforts.', ['in', 'with', 'at', 'on'], 1, 'Consistent in.', { tag: 'Fillers' }),
  q('6B35', 'B', 'We agree ___ this point.', ['on', 'to', 'with', 'at'], 1, 'Agree on.', { tag: 'Fillers' }),

  // One Word
  q('6B36', 'B', 'A person who collects stamps:', ['Philatelist', 'Numismatist', 'Bibliophile', 'Optimist'], 1, 'Philatelist.', { tag: 'One-word Sub' }),
  q('6B37', 'B', 'The science of growing plants without soil:', ['Hydroponics', 'Botany', 'Agriculture', 'Geology'], 1, 'Hydroponics.', { tag: 'One-word Sub' }),
  q('6B38', 'B', 'One who is all-powerful:', ['Omnipotent', 'Omniscient', 'Omnipresent', 'Polygamist'], 1, 'Omnipotent.', { tag: 'One-word Sub' }),
  q('6B39', 'B', 'Killing of an infant:', ['Infanticide', 'Homicide', 'Fratricide', 'Patricide'], 1, 'Infanticide.', { tag: 'One-word Sub' }),
  q('6B40', 'B', 'A person who is skilled in many fields:', ['Polymath', 'Linguist', 'Expert', 'Specialist'], 1, 'Polymath.', { tag: 'One-word Sub' }),

  // Para-jumbles
  q('6B41', 'B', 'Arrange: A. Print, B. Layout, C. Type, D. Distribute.', ['CBAD', 'CABD', 'BCAD', 'ACBD'], 1, 'Type (C) -> Layout (B) -> Print (A) -> Distribute (D).', { tag: 'Para-Jumbles' }),
  q('6B42', 'B', 'Arrange: A. Login, B. OTP, C. Register, D. Dashboard.', ['CABD', 'CBAD', 'ACBD', 'BACD'], 1, 'Register (C) -> Login (A) -> OTP (B) -> Dashboard (D).', { tag: 'Para-Jumbles' }),
  q('6B43', 'B', 'Arrange: A. Interview, B. Selection, C. Ad, D. Application.', ['CADB', 'CBDA', 'CDAB', 'ABCD'], 3, 'Ad (C) -> Application (D) -> Interview (A) -> Selection (B).', { tag: 'Para-Jumbles' }),
  q('6B44', 'B', 'Arrange: A. Harvest, B. Sow, C. Plough, D. Market.', ['CBAD', 'BCAD', 'CABD', 'DBAC'], 1, 'Plough (C) -> Sow (B) -> Harvest (A) -> Market (D).', { tag: 'Para-Jumbles' }),
  q('6B45', 'B', 'Arrange: A. Idea, B. Funding, C. Launch, D. Prototype.', ['ADBC', 'ADCB', 'ABCD', 'DBAC'], 2, 'Idea (A) -> Prototype (D) -> Funding (B) -> Launch (C).', { tag: 'Para-Jumbles' }),

  // Sentence Improvement
  q('6B46', 'B', 'Improve: She _is_ more taller than her sister.', ['is taller', 'is more tall', 'is tall', 'no improvement'], 1, 'Avoid double comparative.', { tag: 'Sentence Improvement' }),
  q('6B47', 'B', 'Improve: Neither he nor I _are_ going.', ['am', 'is', 'was', 'no improvement'], 1, 'Verb agrees with "I": "am".', { tag: 'Sentence Improvement' }),
  q('6B48', 'B', 'Improve: I _had finished_ the work yesterday.', ['finished', 'have finished', 'finish', 'no improvement'], 1, 'Use simple past for specific past time.', { tag: 'Sentence Improvement' }),
  q('6B49', 'B', 'Improve: This is the _most best_ result.', ['the best', 'better', 'good', 'no improvement'], 1, 'Avoid double superlative.', { tag: 'Sentence Improvement' }),
  q('6B50', 'B', 'Improve: If I _was_ a millionaire, I would help everyone.', ['were', 'am', 'had been', 'no improvement'], 1, 'Subjunctive mood.', { tag: 'Sentence Improvement' })
];
