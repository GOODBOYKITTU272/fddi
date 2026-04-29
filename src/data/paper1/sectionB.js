import { q } from '../questionShape.js';

export default [
  // RC Passage 1
  q('1B01', 'B', 'India\'s footwear industry is the world\'s second-largest in terms of:', ['Value of exports', 'Volume of production', 'Brand recognition', 'Number of designers'], 2, 'The passage states India is the world\'s second-largest by volume.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('1B02', 'B', 'The PLI scheme mentioned in the passage is targeted at:', ['Leather footwear only', 'Non-leather footwear', 'Footwear retail outlets', 'Footwear advertising'], 2, 'The passage explicitly mentions the PLI scheme for non-leather footwear.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('1B03', 'B', 'Which of the following is NOT mentioned as a footwear manufacturing hub?', ['Agra', 'Kanpur', 'Chennai', 'Kolkata'], 4, 'Agra, Kanpur, and Chennai are mentioned; Kolkata is not.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('1B04', 'B', 'What concern do industry observers raise?', ['Lack of automation', 'Limited investment in design education and skills', 'Falling export volumes', 'Excess government interference'], 2, 'The passage notes the risk of remaining a contract manufacturer without investment in design education.', { passageRef: 'p1', tag: 'RC Strategy' }),
  q('1B05', 'B', 'Which statement about Indian tier-2 city consumers is true per the passage?', ['They prefer only domestic styles', 'They demand international styling at affordable prices', 'They reject branded products', 'None of these'], 2, 'The passage states they demand international styling at affordable price points.', { passageRef: 'p1', tag: 'RC Strategy' }),

  // Synonyms
  q('1B06', 'B', 'Choose the synonym: The minister gave a _terse_ reply.', ['Lengthy', 'Curt', 'Friendly', 'Confused'], 2, 'Terse means sparing in the use of words; abrupt or curt.', { tag: 'Synonyms' }),
  q('1B07', 'B', 'Choose the synonym: Her _meticulous_ attention to detail.', ['Casual', 'Precise', 'Slow', 'Reluctant'], 2, 'Meticulous means showing great attention to detail; very careful and precise.', { tag: 'Synonyms' }),
  q('1B08', 'B', 'Choose the synonym: The committee\'s decision was _unanimous_.', ['Divided', 'Postponed', 'Universally agreed', 'Highly debated'], 3, 'Unanimous means (of two or more people) fully in agreement.', { tag: 'Synonyms' }),
  q('1B09', 'B', 'Choose the synonym: The new policy was _contentious_.', ['Calming', 'Controversial', 'Practical', 'Outdated'], 2, 'Contentious means causing or likely to cause an argument; controversial.', { tag: 'Synonyms' }),
  q('1B10', 'B', 'Choose the synonym: The judge admonished the witness for being _evasive_.', ['Direct', 'Loud', 'Unclear/elusive', 'Helpful'], 3, 'Evasive means tending to avoid commitment or self-revelation, especially by responding only indirectly.', { tag: 'Synonyms' }),
  q('1B11', 'B', 'Choose the synonym: The diplomat is known for his _suave_ manner.', ['Rude', 'Smooth and polished', 'Aggressive', 'Awkward'], 2, 'Suave means charming, confident, and elegant (typically used of a man).', { tag: 'Synonyms' }),
  q('1B12', 'B', 'Choose the synonym: His _vociferous_ protest was hard to ignore.', ['Quiet', 'Loud and forceful', 'Diplomatic', 'Slow'], 2, 'Vociferous means (especially of a person or speech) vehement or clamorous.', { tag: 'Synonyms' }),
  q('1B13', 'B', 'Choose the synonym: The artist is praised for her _innovative_ designs.', ['Conventional', 'Inventive', 'Outdated', 'Imitative'], 2, 'Innovative means (of a product, idea, etc.) featuring new methods; advanced and original.', { tag: 'Synonyms' }),

  // Antonyms
  q('1B14', 'B', 'Choose the antonym: Her _humble_ attitude.', ['Modest', 'Arrogant', 'Quiet', 'Polite'], 2, 'Humble means having or showing a modest or low estimate of one\'s importance; Arrogant is the opposite.', { tag: 'Antonyms' }),
  q('1B15', 'B', 'Choose the antonym: The decision was _prudent_.', ['Wise', 'Reckless', 'Slow', 'Detailed'], 2, 'Prudent means acting with or showing care and thought for the future; Reckless means the opposite.', { tag: 'Antonyms' }),
  q('1B16', 'B', 'Choose the antonym: His response was _candid_.', ['Frank', 'Reserved', 'Public', 'Lengthy'], 2, 'Candid means truthful and straightforward; Frank. Reserved means slow to reveal emotions or opinions.', { tag: 'Antonyms' }),
  q('1B17', 'B', 'Choose the antonym: The instructions were _ambiguous_.', ['Long', 'Clear', 'Verbal', 'Recent'], 2, 'Ambiguous means open to more than one interpretation; not having one obvious meaning. Clear is the opposite.', { tag: 'Antonyms' }),
  q('1B18', 'B', 'Choose the antonym: The new manager is _amiable_.', ['Friendly', 'Hostile', 'Quiet', 'Talkative'], 2, 'Amiable means having or displaying a friendly and pleasant manner. Hostile is the opposite.', { tag: 'Antonyms' }),
  q('1B19', 'B', 'Choose the antonym: She gave a _succinct_ summary.', ['Brief', 'Lengthy', 'Clear', 'Loud'], 2, 'Succinct means (especially of something written or spoken) briefly and clearly expressed. Lengthy is the opposite.', { tag: 'Antonyms' }),
  q('1B20', 'B', 'Choose the antonym: His _frugal_ lifestyle.', ['Thrifty', 'Extravagant', 'Boring', 'Quiet'], 2, 'Frugal means sparing or economical with regard to money or food. Extravagant is the opposite.', { tag: 'Antonyms' }),
  q('1B21', 'B', 'Choose the antonym: The fabric had a _coarse_ texture.', ['Rough', 'Smooth', 'Thick', 'Bright'], 2, 'Coarse means rough or loose in texture or grain. Smooth is the opposite.', { tag: 'Antonyms' }),

  // Idioms
  q('1B22', 'B', 'Idiom meaning: _Bite the bullet_', ['Refuse firmly', 'Endure something difficult bravely', 'Argue back', 'Quit immediately'], 2, 'To bite the bullet means to accept something difficult or unpleasant.', { tag: 'Idioms' }),
  q('1B23', 'B', 'Idiom meaning: _In a nutshell_', ['In great detail', 'In summary', 'After delay', 'Without debate'], 2, 'In a nutshell means in the fewest possible words.', { tag: 'Idioms' }),
  q('1B24', 'B', 'Idiom meaning: _Let the cat out of the bag_', ['Reveal a secret', 'Make a mistake', 'Cancel the event', 'Buy a pet'], 1, 'To let the cat out of the bag means to reveal a secret unintentionally.', { tag: 'Idioms' }),
  q('1B25', 'B', 'Idiom meaning: _Blessing in disguise_', ['An obvious gift', 'Something bad that turns out good', 'A dangerous trap', 'A silent threat'], 2, 'A blessing in disguise is an apparent misfortune that eventually has good results.', { tag: 'Idioms' }),
  q('1B26', 'B', 'Idiom meaning: _At loggerheads_', ['Working together', 'In strong disagreement', 'Sharing duties', 'Totally indifferent'], 2, 'To be at loggerheads means to be in a strong disagreement or dispute.', { tag: 'Idioms' }),
  q('1B27', 'B', 'Idiom meaning: _Finger in every pie_', ['She is greedy', 'She is involved in many things', 'She avoids responsibility', 'She is messy'], 2, 'To have a finger in every pie means to be involved in many different activities or enterprises.', { tag: 'Idioms' }),

  // Spelling
  q('1B28', 'B', 'Choose the correctly spelt word:', ['Recieve', 'Receive', 'Receeve', 'Receeive'], 2, 'The correct spelling is Receive (i before e except after c).', { tag: 'Spelling' }),
  q('1B29', 'B', 'Choose the correctly spelt word:', ['Concious', 'Conscious', 'Conscius', 'Concsious'], 2, 'The correct spelling is Conscious.', { tag: 'Spelling' }),
  q('1B30', 'B', 'Choose the correctly spelt word:', ['Necessary', 'Neccessary', 'Necesary', 'Neccesary'], 1, 'The correct spelling is Necessary (one c, two s).', { tag: 'Spelling' }),
  q('1B31', 'B', 'Choose the correctly spelt word:', ['Occurence', 'Occurance', 'Occurrence', 'Ocurrence'], 3, 'The correct spelling is Occurrence (double c, double r).', { tag: 'Spelling' }),

  // Para-jumbles
  q('1B32', 'B', 'Arrange: A. Evaluation, B. Submissions, C. Contest announced, D. Winners announced.', ['CBAD', 'BCAD', 'CABD', 'BDAC'], 1, 'Announcement (C) -> Submissions (B) -> Evaluation (A) -> Winners (D).', { tag: 'Para-Jumbles' }),
  q('1B33', 'B', 'Arrange: A. Plant polymers, B. Industry emissions, C. Pilot programs, D. Pressure for alternatives.', ['BDAC', 'BADC', 'DBAC', 'DABC'], 1, 'Emission problem (B) -> Pressure (D) -> Solution (A) -> Pilots (C).', { tag: 'Para-Jumbles' }),
  q('1B34', 'B', 'Arrange: A. Teaching, B. Grandmother watching, C. Decision to revive, D. Set up workshop.', ['BCDA', 'BDCA', 'BDAC', 'BADC'], 3, 'Watching (B) -> Returning home (D) -> Evaluation/Decision (A) -> Teaching/Expanding (C). Wait, logic: B (childhood) -> D (after college) -> A (teaching) -> C (commercial revive). No, B-D-C-A or B-D-A-C. Option 3 is BDAC.', { tag: 'Para-Jumbles' }),
  q('1B35', 'B', 'Arrange: A. Machine archives, B. Bata museum, C. Design lab popularity, D. Document transformation.', ['BADC', 'BDAC', 'BACD', 'BCAD'], 1, 'Museum (B) -> Archives (A) -> Exhibits (D) -> Design Lab (C).', { tag: 'Para-Jumbles' }),
  q('1B36', 'B', 'Arrange: A. Postpone, B. Quality issues, C. Redesign, D. Relaunch performance.', ['BACD', 'BCAD', 'ABCD', 'BACD'], 1, 'Quality issues (B) -> Postpone (A) -> Redesign (C) -> Relaunch (D).', { tag: 'Para-Jumbles' }),

  // Substitutions
  q('1B37', 'B', 'Substitution: Government run by a small group of people.', ['Democracy', 'Oligarchy', 'Monarchy', 'Theocracy'], 2, 'Oligarchy is a small group of people having control of a country or organization.', { tag: 'One-word Sub' }),
  q('1B38', 'B', 'Substitution: A speech delivered without any preparation.', ['Soliloquy', 'Eulogy', 'Extempore', 'Tirade'], 3, 'Extempore is spoken or done without preparation.', { tag: 'One-word Sub' }),
  q('1B39', 'B', 'Substitution: A place where coins or notes are manufactured.', ['Bank', 'Mint', 'Treasury', 'Vault'], 2, 'A mint is a primary producer of a country\'s coin currency.', { tag: 'One-word Sub' }),
  q('1B40', 'B', 'Substitution: One who collects coins as a hobby.', ['Numismatist', 'Philatelist', 'Archaeologist', 'Cartographer'], 1, 'A numismatist is a person who collects or studies coins or medals.', { tag: 'One-word Sub' }),
  q('1B41', 'B', 'Substitution: Words inscribed on a tomb.', ['Epilogue', 'Epitaph', 'Epigram', 'Epithet'], 2, 'An epitaph is a phrase or form of words written in memory of a person who has died, especially as an inscription on a tombstone.', { tag: 'One-word Sub' }),

  // Errors
  q('1B42', 'B', 'Error: Each of the candidates (1) / have submitted (2) / their portfolios (3).', ['1', '2', '3', '4'], 2, '"Each" is singular and requires a singular verb: "has submitted".', { tag: 'Para-Jumbles' }),
  q('1B43', 'B', 'Error: The number of applicants (1) / for the M.Des programme (2) / have grown sharply (3).', ['1', '2', '3', '4'], 3, '"The number of" is a singular subject and takes a singular verb: "has grown".', { tag: 'Para-Jumbles' }),
  q('1B44', 'B', 'Error: Neither the manager (1) / nor his assistants (2) / was available for comment (3).', ['1', '2', '3', '4'], 3, 'In "neither...nor", the verb agrees with the closer subject ("assistants"), which is plural. Should be "were".', { tag: 'Para-Jumbles' }),
  q('1B45', 'B', 'Error: She is one of those students (1) / who always submits (2) / her work (3).', ['1', '2', '3', '4'], 2, 'The relative pronoun "who" refers to "students" (plural), so the verb should be "submit".', { tag: 'Para-Jumbles' }),

  // Fillers
  q('1B46', 'B', 'Filler: The new policy will come ___ effect.', ['into', 'in', 'on', 'at'], 1, 'The phrase is "come into effect".', { tag: 'RC Strategy' }),
  q('1B47', 'B', 'Filler: She has been working ___ six months.', ['since', 'for', 'from', 'during'], 2, '"For" is used for a duration of time.', { tag: 'RC Strategy' }),
  q('1B48', 'B', 'Filler: The decision is entirely ___ the board.', ['up to', 'about', 'on to', 'for'], 1, '"Up to" means it is the responsibility or choice of someone.', { tag: 'RC Strategy' }),
  q('1B49', 'B', 'Filler: He insisted ___ paying the bill.', ['at', 'on', 'for', 'of'], 2, 'The correct preposition after "insisted" is "on".', { tag: 'RC Strategy' }),
  q('1B50', 'B', 'Filler: Her painting is different ___ his.', ['than', 'from', 'to', 'over'], 2, 'The correct preposition after "different" is "from".', { tag: 'RC Strategy' })
];
