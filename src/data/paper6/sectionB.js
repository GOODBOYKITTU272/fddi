import { q } from '../questionShape.js';

export default [
  // RC Passage (Smart Cities)
  q('6B01', 'B', 'What is the primary goal of a "Smart City" according to the passage?', ['Technocratic dominance', 'Improving quality of life using data/tech', 'Increasing car usage', 'Eliminating nature'], 1, 'The passage states the goal is to improve life quality while reducing footprint.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('6B02', 'B', 'Which pillar of smart design prioritizes pedestrians and cyclists?', ['Active mobility', 'Biophilic design', 'Command centers', 'Digital divide'\The passage defines active mobility as prioritizing pedestrians and cyclists.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('6B03', 'B', '"Biophilic design" refers to:', ['Using biology in computers', 'Integrating nature into the built environment', 'Building high-speed trains', 'Creating digital maps'], 1, 'The passage mentions integrating nature to improve air quality and well-being.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('6B04', 'B', 'What is identified as a potential downside of the "smart" label?', ['Lack of data', 'The digital divide', 'Too many solar streetlights', 'Too much active mobility'], 1, 'The passage mentions the risk of overlooking the digital divide.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('6B05', 'B', 'The future of urban design should ensure that:', ['Technology serves the people', 'Algorithms make all decisions', 'Cities become monochromatic', 'Nature is replaced by tech'\The passage concludes that technology must serve people.', { passageRef: 'p1', tag: 'RC Strategy' }),

  // Vocabulary
  q('6B06', 'B', 'Synonym of _Inclusive_:', ['Exclusive', 'All-encompassing/Broad', 'Narrow', 'Small'], 1, 'Including much or everything.', { tag: 'Synonyms' }),
  q('6B07', 'B', 'Synonym of _Vital_:', ['Minor', 'Essential/Crucial', 'Useless', 'Old'], 1, 'Absolutely necessary.', { tag: 'Synonyms' }),
  q('6B08', 'B', 'Synonym of _Catalyzed_:', ['Stopped', 'Accelerated/Stimulated', 'Hid', 'Finished'], 1, 'To cause or accelerate a reaction.', { tag: 'Synonyms' }),
  q('6B09', 'B', 'Synonym of _Biophilic_:', ['Nature-loving', 'Anti-nature', 'Machine-like', 'Fast'\Relating to a love of living things and nature.', { tag: 'Synonyms' }),
  q('6B10', 'B', 'Synonym of _Technocratic_:', ['Democratic', 'Related to technical experts', 'Artistic', 'Ancient'], 1, 'Relating to government by technical experts.', { tag: 'Synonyms' }),

  // Antonyms
  q('6B11', 'B', 'Antonym of _Inclusive_:', ['Broad', 'Exclusive', 'Fast', 'Loud'], 1, 'Exclusive is the opposite.', { tag: 'Antonyms' }),
  q('6B12', 'B', 'Antonym of _Vital_:', ['Crucial', 'Trivial/Unimportant', 'Fast', 'Loud'], 1, 'Trivial.', { tag: 'Antonyms' }),
  q('6B13', 'B', 'Antonym of _Seamless_:', ['Smooth', 'Fragmented', 'Fast', 'Loud'], 1, 'Fragmented/Disjointed.', { tag: 'Antonyms' }),
  q('6B14', 'B', 'Antonym of _Accessibility_:', ['Availability', 'Inaccessibility', 'Fast', 'Loud'], 1, 'Inaccessibility.', { tag: 'Antonyms' }),
  q('6B15', 'B', 'Antonym of _Diversity_:', ['Variety', 'Uniformity', 'Fast', 'Loud'], 1, 'Uniformity is the opposite.', { tag: 'Antonyms' }),

  // Grammar
  q('6B16', 'B', 'Error: The furniture (1) / in this room (2) / are very old (3).', ['1', '2', '3', 'No error'], 2, '"Furniture" is uncountable and singular: "is".', { tag: 'Para-Jumbles' }),
  q('6B17', 'B', 'Error: He is (1) / more smarter (2) / than me (3).', ['1', '2', '3', 'No error'], 1, 'Double comparative error: "smarter".', { tag: 'Para-Jumbles' }),
  q('6B18', 'B', 'Error: I have (1) / a important (2) / meeting (3).', ['1', '2', '3', 'No error'], 1, 'Use "an" before a vowel sound: "an important".', { tag: 'Para-Jumbles' }),
  q('6B19', 'B', 'Error: They have (1) / left (2) / since two hours (3).', ['1', '2', '3', 'No error'], 2, 'Use "for" with a duration: "for two hours".', { tag: 'Para-Jumbles' }),
  q('6B20', 'B', 'Error: Each of (1) / the students (2) / have a book (3).', ['1', '2', '3', 'No error'], 2, '"Each" is singular: "has".', { tag: 'Para-Jumbles' }),

  // Idioms
  q('6B21', 'B', 'Idiom: _Blessing in disguise_', ['A fake gift', 'A good thing initially seen as bad', 'A hidden trap', 'A lucky charm'], 1, 'Good result from a bad start.', { tag: 'Idioms' }),
  q('6B22', 'B', 'Idiom: _Break the ice_', ['To chill something', 'To start a conversation', 'To be cold', 'To create a problem'], 1, 'Starting a conversation.', { tag: 'Idioms' }),
  q('6B23', 'B', 'Idiom: _Burn the midnight oil_', ['Saving energy', 'Working late into the night', 'Cooking', 'Sleeping early'], 1, 'Working late.', { tag: 'Idioms' }),
  q('6B24', 'B', 'Idiom: _Call it a day_', ['To start a job', 'To stop working on something', 'To celebrate', 'To be tired'], 1, 'To end a task.', { tag: 'Idioms' }),
  q('6B25', 'B', 'Idiom: _Cost an arm and a leg_', ['Cheap', 'Very expensive', 'In trouble', 'Difficult'], 1, 'Very expensive.', { tag: 'Idioms' }),

  // Spelling
  q('6B26', 'B', 'Correct:', ['Pronunciation', 'Pronounciation', 'Prononciation', 'Pronunciacion'\Pronunciation.', { tag: 'Spelling' }),
  q('6B27', 'B', 'Correct:', ['Hierarchy', 'Heirarchy', 'Hierachy', 'Heirachy'\Hierarchy.', { tag: 'Spelling' }),
  q('6B28', 'B', 'Correct:', ['Millennium', 'Millenium', 'Milennium', 'Milenium'\Millennium.', { tag: 'Spelling' }),
  q('6B29', 'B', 'Correct:', ['Sovereignty', 'Soverignty', 'Soveriegnty', 'Sovereigntie'\Sovereignty.', { tag: 'Spelling' }),
  q('6B30', 'B', 'Correct:', ['Entrepreneur', 'Enterpreneur', 'Entreprenuer', 'Enterprenuer'\Entrepreneur.', { tag: 'Spelling' }),

  // Fillers
  q('6B31', 'B', 'He is addicted ___ coffee.', ['to', 'with', 'for', 'at'\Addicted to.', { tag: 'RC Strategy' }),
  q('6B32', 'B', 'She is good ___ dancing.', ['at', 'in', 'on', 'with'\Good at.', { tag: 'RC Strategy' }),
  q('6B33', 'B', 'The plane took ___ on time.', ['off', 'on', 'up', 'down'\Take off.', { tag: 'RC Strategy' }),
  q('6B34', 'B', 'He is consistent ___ his efforts.', ['in', 'with', 'at', 'on'\Consistent in.', { tag: 'RC Strategy' }),
  q('6B35', 'B', 'We agree ___ this point.', ['on', 'to', 'with', 'at'\Agree on.', { tag: 'RC Strategy' }),

  // One Word
  q('6B36', 'B', 'A person who collects stamps:', ['Philatelist', 'Numismatist', 'Bibliophile', 'Optimist'\Philatelist.', { tag: 'One-word Sub' }),
  q('6B37', 'B', 'The science of growing plants without soil:', ['Hydroponics', 'Botany', 'Agriculture', 'Geology'\Hydroponics.', { tag: 'One-word Sub' }),
  q('6B38', 'B', 'One who is all-powerful:', ['Omnipotent', 'Omniscient', 'Omnipresent', 'Polygamist'\Omnipotent.', { tag: 'One-word Sub' }),
  q('6B39', 'B', 'Killing of an infant:', ['Infanticide', 'Homicide', 'Fratricide', 'Patricide'\Infanticide.', { tag: 'One-word Sub' }),
  q('6B40', 'B', 'A person who is skilled in many fields:', ['Polymath', 'Linguist', 'Expert', 'Specialist'\Polymath.', { tag: 'One-word Sub' }),

  // Para-jumbles
  q('6B41', 'B', 'Arrange: A. Print, B. Layout, C. Type, D. Distribute.', ['CBAD', 'CABD', 'BCAD', 'ACBD'\Type (C) -> Layout (B) -> Print (A) -> Distribute (D).', { tag: 'Para-Jumbles' }),
  q('6B42', 'B', 'Arrange: A. Login, B. OTP, C. Register, D. Dashboard.', ['CABD', 'CBAD', 'ACBD', 'BACD'\Register (C) -> Login (A) -> OTP (B) -> Dashboard (D).', { tag: 'Para-Jumbles' }),
  q('6B43', 'B', 'Arrange: A. Interview, B. Selection, C. Ad, D. Application.', ['CADB', 'CBDA', 'CDAB', 'ABCD'\Ad (C) -> Application (D) -> Interview (A) -> Selection (B).', { tag: 'Para-Jumbles' }),
  q('6B44', 'B', 'Arrange: A. Harvest, B. Sow, C. Plough, D. Market.', ['CBAD', 'BCAD', 'CABD', 'DBAC'\Plough (C) -> Sow (B) -> Harvest (A) -> Market (D).', { tag: 'Para-Jumbles' }),
  q('6B45', 'B', 'Arrange: A. Idea, B. Funding, C. Launch, D. Prototype.', ['ADBC', 'ADCB', 'ABCD', 'DBAC'\Idea (A) -> Funding (D) -> Prototype (B) -> Launch (C).', { tag: 'Para-Jumbles' }),

  // Sentence Improvement
  q('6B46', 'B', 'Improve: She _is_ more taller than her sister.', ['is taller', 'is more tall', 'is tall', 'no improvement'\Avoid double comparative.', { tag: 'RC Strategy' }),
  q('6B47', 'B', 'Improve: Neither he nor I _are_ going.', ['am', 'is', 'was', 'no improvement'\Verb agrees with "I": "am".', { tag: 'RC Strategy' }),
  q('6B48', 'B', 'Improve: I _had finished_ the work yesterday.', ['finished', 'have finished', 'finish', 'no improvement'\Use simple past for specific past time.', { tag: 'RC Strategy' }),
  q('6B49', 'B', 'Improve: This is the _most best_ result.', ['the best', 'better', 'good', 'no improvement'\Avoid double superlative.', { tag: 'RC Strategy' }),
  q('6B50', 'B', 'Improve: If I _was_ a millionaire, I would help everyone.', ['were', 'am', 'had been', 'no improvement'\Subjunctive mood.', { tag: 'RC Strategy' })
];
