import { q } from '../questionShape.js';
export { passages } from './passages.js';

// SECTION B — English Comprehension & Grammar · 50 questions × 1 mark = 50 marks
export default [
  // ----- RC Passage P1 (5 Qs)
  q('1B01', 'B', 'According to the passage, what percentage does the textile industry contribute to India\'s industrial production?',
    ['5%', '7%', '10%', '12%'], 2,
    'Passage states approximately 7%.', { tag: 'RC Strategy', passageRef: 'P1' }),
  q('1B02', 'B', 'India is the ___ largest textile producer in the world.',
    ['First', 'Second', 'Third', 'Fourth'], 2,
    'Passage: second-largest producer after China.', { tag: 'RC Strategy', passageRef: 'P1' }),
  q('1B03', 'B', 'Which government scheme is mentioned to modernise the industry?',
    ['MGNREGA', 'Make in India', 'PLI Scheme', 'Digital India'], 3,
    'The Production Linked Incentive (PLI) scheme.', { tag: 'RC Strategy', passageRef: 'P1' }),
  q('1B04', 'B', 'A new opportunity for Indian exporters arises from:',
    ['Chinese competition', 'Demand for sustainable fabrics', 'Lower wages', 'Cheaper machinery'], 2,
    'Demand for sustainable fabrics opens new opportunities.', { tag: 'RC Strategy', passageRef: 'P1' }),
  q('1B05', 'B', 'The word "evolved" in the passage most closely means:',
    ['Disappeared', 'Declined', 'Developed gradually', 'Stayed the same'], 3,
    '"Evolved" means developed or changed gradually.', { tag: 'RC Strategy', passageRef: 'P1' }),

  // ----- RC Passage P2 (5 Qs)
  q('1B06', 'B', 'India ranks ___ globally in startup ecosystems.',
    ['First', 'Second', 'Third', 'Fourth'], 3,
    'Passage: third-largest, behind US and China.', { tag: 'RC Strategy', passageRef: 'P2' }),
  q('1B07', 'B', 'When was the Startup India initiative launched?',
    ['2014', '2015', '2016', '2018'], 3,
    'Launched in 2016 per the passage.', { tag: 'RC Strategy', passageRef: 'P2' }),
  q('1B08', 'B', 'Which sector is NOT mentioned as a growth driver?',
    ['Fintech', 'Edtech', 'Aerospace', 'Healthtech'], 3,
    'Passage lists fintech, edtech, healthtech, e-commerce — not aerospace.', { tag: 'RC Strategy', passageRef: 'P2' }),
  q('1B09', 'B', 'In the context of the passage, "unicorn" means:',
    ['A mythical creature', 'A startup valued over $1 billion', 'A 100% foreign-owned firm', 'A publicly-listed company'], 2,
    'Defined in passage as startup valued > $1B.', { tag: 'RC Strategy', passageRef: 'P2' }),
  q('1B10', 'B', 'IPO stands for:',
    ['Initial Public Order', 'International Portfolio Offering', 'Initial Public Offering', 'Internal Product Operation'], 3,
    'Initial Public Offering.', { tag: 'RC Strategy', passageRef: 'P2' }),

  // ----- RC Passage P3 (5 Qs)
  q('1B11', 'B', 'The global fashion industry is valued at approximately:',
    ['$500 billion', '$1 trillion', '$1.7 trillion', '$2.5 trillion'], 3,
    'Passage: roughly $1.7 trillion.', { tag: 'RC Strategy', passageRef: 'P3' }),
  q('1B12', 'B', 'What percentage of global carbon emissions does fashion produce?',
    ['3%', '7%', '10%', '15%'], 3,
    'Passage: 10%.', { tag: 'RC Strategy', passageRef: 'P3' }),
  q('1B13', 'B', 'Fast fashion is characterised by:',
    ['Slow production', 'Rapid production of trendy low-cost garments', 'Custom couture', 'Luxury embroidery'], 2,
    'Defined in passage.', { tag: 'RC Strategy', passageRef: 'P3' }),
  q('1B14', 'B', 'The circular economy in fashion does NOT focus on:',
    ['Garment longevity', 'Repair', 'Recycling', 'Disposable clothing'], 4,
    'Disposable is the antithesis of circular.', { tag: 'RC Strategy', passageRef: 'P3' }),
  q('1B15', 'B', 'Who is demanding more ethical fashion practices?',
    ['Boomers', 'Millennials and Gen Z', 'Seniors', 'Children'], 2,
    'Passage names Millennials and Gen Z.', { tag: 'RC Strategy', passageRef: 'P3' }),

  // ----- Synonyms (5)
  q('1B16', 'B', 'Synonym of DILIGENT:', ['Lazy', 'Hardworking', 'Wealthy', 'Clever'], 2, 'Diligent = hardworking.', { tag: 'Synonyms' }),
  q('1B17', 'B', 'Synonym of AMBIGUOUS:', ['Clear', 'Precise', 'Vague', 'Decisive'], 3, 'Ambiguous = vague/unclear.', { tag: 'Synonyms' }),
  q('1B18', 'B', 'Synonym of TENACIOUS:', ['Weak', 'Persistent', 'Careless', 'Shy'], 2, 'Tenacious = persistent.', { tag: 'Synonyms' }),
  q('1B19', 'B', 'Synonym of SCRUTINY:', ['Approval', 'Inspection', 'Neglect', 'Suggestion'], 2, 'Scrutiny = detailed inspection.', { tag: 'Synonyms' }),
  q('1B20', 'B', 'Synonym of ELOQUENT:', ['Silent', 'Articulate', 'Boring', 'Crude'], 2, 'Eloquent = articulate, fluent.', { tag: 'Synonyms' }),

  // ----- Antonyms (5)
  q('1B21', 'B', 'Antonym of TRANSPARENT:', ['Clear', 'Visible', 'Opaque', 'Bright'], 3, 'Transparent vs opaque.', { tag: 'Antonyms' }),
  q('1B22', 'B', 'Antonym of VERBOSE:', ['Talkative', 'Concise', 'Loud', 'Eloquent'], 2, 'Verbose (wordy) vs concise (brief).', { tag: 'Antonyms' }),
  q('1B23', 'B', 'Antonym of PROFOUND:', ['Deep', 'Meaningful', 'Shallow', 'Significant'], 3, 'Profound vs shallow.', { tag: 'Antonyms' }),
  q('1B24', 'B', 'Antonym of LAUDATORY:', ['Praising', 'Flattering', 'Condemnatory', 'Approving'], 3, 'Laudatory (praising) vs condemnatory.', { tag: 'Antonyms' }),
  q('1B25', 'B', 'Antonym of FRUGAL:', ['Thrifty', 'Extravagant', 'Cheap', 'Poor'], 2, 'Frugal (saving) vs extravagant (wasteful).', { tag: 'Antonyms' }),

  // ----- Idioms (5)
  q('1B26', 'B', '"Break the ice" means:',
    ['Shatter a relationship', 'Initiate conversation to ease tension', 'End a meeting abruptly', 'Arrive late'], 2,
    'Break the ice = start conversation in awkward setting.', { tag: 'Idioms' }),
  q('1B27', 'B', '"Hit the nail on the head" means:',
    ['Make a mistake', 'Say exactly the right thing', 'Become very angry', 'Finish quickly'], 2,
    'To describe exactly what is causing a problem.', { tag: 'Idioms' }),
  q('1B28', 'B', '"Bite the bullet" means:',
    ['Refuse to do something', 'Endure a difficult situation bravely', 'Argue stubbornly', 'Eat very fast'], 2,
    'To accept something difficult or unpleasant.', { tag: 'Idioms' }),
  q('1B29', 'B', '"Once in a blue moon" means:',
    ['Frequently', 'Very rarely', 'Never', 'During monsoon'], 2,
    'Very rarely.', { tag: 'Idioms' }),
  q('1B30', 'B', '"Cost an arm and a leg" means:',
    ['Be very cheap', 'Be very expensive', 'Cause injury', 'Be priceless'], 2,
    'Extremely expensive.', { tag: 'Idioms' }),

  // ----- One-word substitution (5)
  q('1B31', 'B', 'A person who cannot be corrected or reformed:',
    ['Insolent', 'Incorrigible', 'Invincible', 'Incoherent'], 2,
    'Incorrigible.', { tag: 'One-word Sub' }),
  q('1B32', 'B', 'Fear of open or public spaces:',
    ['Claustrophobia', 'Agoraphobia', 'Hydrophobia', 'Xenophobia'], 2,
    'Agoraphobia.', { tag: 'One-word Sub' }),
  q('1B33', 'B', 'A person indifferent to pleasure or pain:',
    ['Epicurean', 'Hedonist', 'Stoic', 'Ascetic'], 3,
    'Stoic.', { tag: 'One-word Sub' }),
  q('1B34', 'B', 'A person who pretends virtues they lack:',
    ['Misanthrope', 'Hypocrite', 'Narcissist', 'Nihilist'], 2,
    'Hypocrite.', { tag: 'One-word Sub' }),
  q('1B35', 'B', 'A government run by religious leaders:',
    ['Oligarchy', 'Theocracy', 'Aristocracy', 'Plutocracy'], 2,
    'Theocracy.', { tag: 'One-word Sub' }),

  // ----- Spelling (3)
  q('1B36', 'B', 'Choose the correctly spelt word:',
    ['Entrepreneurship', 'Entreprenuership', 'Enterprenership', 'Entrepreneuriship'], 1,
    'E-N-T-R-E-P-R-E-N-E-U-R-S-H-I-P.', { tag: 'Spelling' }),
  q('1B37', 'B', 'Choose the correctly spelt word:',
    ['Accomodation', 'Accomadation', 'Accommodation', 'Acomodation'], 3,
    'Double-c, double-m: Accommodation.', { tag: 'Spelling' }),
  q('1B38', 'B', 'Choose the correctly spelt word:',
    ['Mischievious', 'Mischievous', 'Mischeivous', 'Mischeivious'], 2,
    'Mischievous (no extra "i").', { tag: 'Spelling' }),

  // ----- Grammar / Error spotting (4)
  q('1B39', 'B', 'Identify the error: "The committee have decided to postpone the meeting."',
    ['committee', 'have', 'postpone', 'No error'], 2,
    'Collective noun "committee" takes a singular verb → "has decided".', { tag: 'Grammar' }),
  q('1B40', 'B', 'Choose the correct sentence:',
    ['Neither Ram nor Shyam are present', 'Neither Ram nor Shyam is present', 'Neither Ram nor Shyam were present', 'Neither Ram or Shyam is present'], 2,
    'With "neither/nor", verb agrees with the nearest subject (Shyam — singular).', { tag: 'Grammar' }),
  q('1B41', 'B', 'Fill the blank: "The news ___ spread panic in the city."',
    ['have', 'are', 'has', 'were'], 3,
    '"News" is uncountable singular → has.', { tag: 'Grammar' }),
  q('1B42', 'B', 'Identify the error: "He is one of the boys who is going."',
    ['He is', 'one of the', 'who is', 'No error'], 3,
    '"Who" refers to "boys" (plural) → "who are going".', { tag: 'Grammar' }),

  // ----- Para-jumble (2)
  q('1B43', 'B', 'Arrange logically:\nA. Carbon reduction is the goal.\nB. Renewable energy is essential.\nC. Climate change is real.\nD. Solutions must be cost-competitive.',
    ['CBDA', 'CDBA', 'ABDC', 'DCBA'], 1,
    'Problem (C) → solution (B) → reason for support (D) → outcome (A).', { tag: 'Para-Jumbles' }),
  q('1B44', 'B', 'Arrange:\nA. The student studied hard.\nB. He was confident.\nC. Exam day arrived.\nD. He cleared with distinction.',
    ['ABCD', 'ACBD', 'CABD', 'BACD'], 1,
    'A (cause) → B (state) → C (event) → D (result).', { tag: 'Para-Jumbles' }),

  // ----- Vocabulary in context (3)
  q('1B45', 'B', 'Choose the word closest in meaning to "TENUOUS" in: "The connection between the two events was tenuous at best."',
    ['Strong', 'Weak/Flimsy', 'Obvious', 'Hidden'], 2,
    'Tenuous = weak, slender, flimsy.', { tag: 'Synonyms' }),
  q('1B46', 'B', 'Closest meaning to "UBIQUITOUS":',
    ['Rare', 'Hidden', 'Present everywhere', 'Old'], 3,
    'Ubiquitous = present everywhere.', { tag: 'Synonyms' }),
  q('1B47', 'B', '"Pragmatic" approach is one that is:',
    ['Idealistic', 'Practical', 'Theoretical', 'Aggressive'], 2,
    'Pragmatic = practical/realistic.', { tag: 'Synonyms' }),

  // ----- Active/Passive (1)
  q('1B48', 'B', 'Convert to passive: "The chef prepared the meal."',
    ['The meal prepared the chef', 'The meal was prepared by the chef', 'The meal is prepared by the chef', 'The meal had prepared by the chef'], 2,
    'Past simple passive: was + V3 + by.', { tag: 'Grammar' }),

  // ----- Direct/Indirect speech (1)
  q('1B49', 'B', 'Convert to indirect: He said, "I am tired."',
    ['He said that he is tired', 'He said that he was tired', 'He said that he had been tired', 'He told he is tired'], 2,
    'Reported speech in past → present becomes past.', { tag: 'Grammar' }),

  // ----- Article / Preposition (1)
  q('1B50', 'B', 'Fill the blank: "She is good ___ mathematics."',
    ['in', 'on', 'at', 'with'], 3,
    'Idiomatic: good AT a subject.', { tag: 'Grammar' })
];
