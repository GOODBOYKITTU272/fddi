// Curated YouTube videos — each 5–10 min covering one question type.
// Built using YouTube search-link fallback so they remain valid even if specific videos go down.
// Format: search URLs render the top result for the topic instantly.

const search = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

export const youtubeLibrary = [
  // SECTION A
  { section: 'A', topic: 'Paper Folding', title: 'Paper folding tricks for design entrance', duration: '8 min', url: search('paper folding tricks NIFT NID 8 minutes') },
  { section: 'A', topic: 'Syllogism',     title: 'Syllogism shortcut method',                 duration: '7 min', url: search('syllogism shortcut tricks 7 minutes') },
  { section: 'A', topic: 'Number Series', title: 'Spot the pattern in 60 seconds',             duration: '6 min', url: search('number series patterns shortcut') },
  { section: 'A', topic: 'Direction Sense', title: 'Direction sense problems — 5 min crash', duration: '5 min', url: search('direction sense reasoning shortcut 5 minutes') },
  { section: 'A', topic: 'Blood Relations', title: 'Blood relations decoded',                  duration: '8 min', url: search('blood relations reasoning 8 minutes') },
  { section: 'A', topic: 'Coding-Decoding', title: 'Letter coding tricks',                      duration: '7 min', url: search('letter coding decoding tricks aptitude') },
  { section: 'A', topic: 'Statement-Argument', title: 'Strong vs weak arguments',              duration: '9 min', url: search('statement and argument reasoning explained') },
  { section: 'A', topic: 'Assertion-Reason',   title: 'How to nail A+R questions',              duration: '6 min', url: search('assertion reason questions tricks') },

  // SECTION B
  { section: 'B', topic: 'RC Strategy',  title: 'Reading comprehension speed reading',         duration: '10 min', url: search('reading comprehension strategy entrance exam') },
  { section: 'B', topic: 'Idioms',       title: '50 most-asked idioms',                         duration: '9 min',  url: search('top 50 idioms phrases entrance exam') },
  { section: 'B', topic: 'One-word Sub', title: 'One-word substitutions you must know',        duration: '8 min',  url: search('one word substitution entrance exam') },
  { section: 'B', topic: 'Synonyms',     title: 'Top 100 synonyms quick revision',             duration: '7 min',  url: search('top 100 synonyms vocabulary entrance') },
  { section: 'B', topic: 'Antonyms',     title: 'Antonym shortcut technique',                   duration: '6 min',  url: search('antonyms tricks entrance exam vocabulary') },
  { section: 'B', topic: 'Para-Jumbles', title: 'Para-jumble logic in 5 steps',                 duration: '8 min',  url: search('para jumbles tricks reasoning') },
  { section: 'B', topic: 'Spelling',     title: 'Common spelling traps',                        duration: '5 min',  url: search('common spelling mistakes English exam') },

  // SECTION C
  { section: 'C', topic: 'Current Affairs', title: 'April 2026 current affairs digest',         duration: '10 min', url: search('current affairs april 2026 india') },
  { section: 'C', topic: 'Current Affairs', title: 'Current affairs Jan–Mar 2026',              duration: '10 min', url: search('current affairs january february march 2026') },
  { section: 'C', topic: 'Indian Polity',   title: 'Constitution: 6 fundamental rights',         duration: '9 min',  url: search('fundamental rights indian constitution explained') },
  { section: 'C', topic: 'Indian History',  title: 'Modern India 1857 to 1947 in 10 min',        duration: '10 min', url: search('modern indian history 1857 to 1947 quick revision') },
  { section: 'C', topic: 'Geography',       title: 'Indian rivers + states map',                 duration: '8 min',  url: search('indian rivers states map gk') },
  { section: 'C', topic: 'Awards',          title: 'Major awards 2025–2026',                     duration: '7 min',  url: search('major awards 2025 2026 india gk') },
  { section: 'C', topic: 'ISRO',            title: 'ISRO missions 2024–2026 quick recap',         duration: '8 min',  url: search('isro missions 2024 2025 2026 chandrayaan gaganyaan') },
  { section: 'C', topic: 'Sports',          title: 'Olympics + Asian Games medals',              duration: '9 min',  url: search('olympics asian games india medals 2024 2025') },

  // SECTION D — M.Des focused
  { section: 'D', topic: 'Color Theory',    title: 'Color theory 101 for designers',             duration: '7 min', url: search('color theory basics primary secondary complementary') },
  { section: 'D', topic: 'Design Principles', title: 'Balance, contrast, hierarchy explained',    duration: '9 min', url: search('design principles balance contrast hierarchy') },
  { section: 'D', topic: 'Famous Painters', title: '10 painters every M.Des aspirant must know', duration: '10 min', url: search('famous painters da vinci picasso van gogh entrance exam') },
  { section: 'D', topic: 'Art Movements',   title: 'Impressionism, Cubism, Surrealism',           duration: '9 min', url: search('art movements impressionism cubism surrealism explained') },
  { section: 'D', topic: 'Mirror Image',    title: 'Mirror & water image reasoning',              duration: '6 min', url: search('mirror image water image reasoning shortcut') },
  { section: 'D', topic: 'Pattern Grouping', title: 'Pattern grouping for NIFT/NID',              duration: '7 min', url: search('pattern grouping non verbal reasoning NIFT NID') },
  { section: 'D', topic: 'Embedded Figures', title: 'Spot the hidden figure',                     duration: '5 min', url: search('embedded hidden figures reasoning') },
  { section: 'D', topic: 'Logo Design',     title: 'Iconic logos and their meaning',              duration: '8 min', url: search('iconic logos design meaning nike adidas apple') }
];

// Map question tag to recommended video
export function videoForTag(tag) {
  const t = tag?.toLowerCase() || '';
  return (
    youtubeLibrary.find((v) => t.includes(v.topic.toLowerCase())) ||
    youtubeLibrary.find((v) => v.topic.toLowerCase().split(' ').some((w) => t.includes(w))) ||
    null
  );
}
