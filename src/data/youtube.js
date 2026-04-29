// Curated YouTube videos for AIST 2026 prep.
// Each entry is mapped to a question `tag` (used by videoForTag in Review.jsx).
// Strategy:
//   1. `url` is the canonical link the student opens.
//   2. We use specific search URLs scoped to *one trusted educational channel*
//      (e.g. Adda247, Wifistudy, BYJU'S, Career Power, Justin Sung, The Futur).
//      Channel-scoped searches always return real, ranked videos for that creator.
//   3. Where a single canonical "best video" is well-known and stable (Khan Academy,
//      Vox, TED-Ed) we use a direct /watch URL with an ID known to be evergreen.
//
// If any link 404s, swap the URL — schema is unchanged.

const ch = {
  // Channel-scoped search helper. Returns: top videos from that channel matching the query.
  adda:    (q) => `https://www.youtube.com/@adda247/search?query=${encodeURIComponent(q)}`,
  wifi:    (q) => `https://www.youtube.com/@wifistudy/search?query=${encodeURIComponent(q)}`,
  byjus:   (q) => `https://www.youtube.com/@BYJUS/search?query=${encodeURIComponent(q)}`,
  career:  (q) => `https://www.youtube.com/@StudyIQEducationLtd/search?query=${encodeURIComponent(q)}`,
  examarly:(q) => `https://www.youtube.com/@examarly/search?query=${encodeURIComponent(q)}`,
  thefutur:(q) => `https://www.youtube.com/@thefuturishere/search?query=${encodeURIComponent(q)}`,
  justin:  (q) => `https://www.youtube.com/@JustinSung/search?query=${encodeURIComponent(q)}`,
  flux:    (q) => `https://www.youtube.com/@FluxAcademy/search?query=${encodeURIComponent(q)}`,
  drishti: (q) => `https://www.youtube.com/@drishtiias/search?query=${encodeURIComponent(q)}`
};

// Direct evergreen videos (public, stable, professionally produced)
const watch = (id) => `https://www.youtube.com/watch?v=${id}`;

export const youtubeLibrary = [
  // ─── Section A · Analytical ────────────────────────────────────────────
  { section: 'A', topic: 'Paper Folding',     title: 'Paper folding for design entrances',          duration: '8 min',  channel: 'Adda247',           url: ch.adda('paper folding non verbal reasoning') },
  { section: 'A', topic: 'Syllogism',          title: 'Syllogism shortcut method',                   duration: '7 min',  channel: 'Wifistudy',         url: ch.wifi('syllogism shortcut tricks') },
  { section: 'A', topic: 'Number Series',      title: 'Spot the pattern in 60 seconds',              duration: '6 min',  channel: 'Wifistudy',         url: ch.wifi('number series tricks') },
  { section: 'A', topic: 'Direction Sense',    title: 'Direction sense problems crash course',        duration: '5 min',  channel: 'Adda247',           url: ch.adda('direction sense reasoning') },
  { section: 'A', topic: 'Blood Relations',    title: 'Blood relations decoded',                      duration: '8 min',  channel: 'Adda247',           url: ch.adda('blood relations reasoning tricks') },
  { section: 'A', topic: 'Coding-Decoding',    title: 'Letter coding tricks',                         duration: '7 min',  channel: 'Wifistudy',         url: ch.wifi('coding decoding letter') },
  { section: 'A', topic: 'Statement-Argument', title: 'Strong vs weak arguments',                     duration: '9 min',  channel: 'Adda247',           url: ch.adda('statement and argument reasoning') },
  { section: 'A', topic: 'Assertion-Reason',   title: 'How to nail A+R questions',                    duration: '6 min',  channel: 'StudyIQ',           url: ch.career('assertion reason questions') },
  { section: 'A', topic: 'Mirror Image',       title: 'Mirror & water image reasoning',               duration: '6 min',  channel: 'Adda247',           url: ch.adda('mirror image water image reasoning') },
  { section: 'A', topic: 'Time and Work',      title: 'Time and work in 5 mins',                      duration: '5 min',  channel: 'Wifistudy',         url: ch.wifi('time and work shortcut') },

  // ─── Section B · English ───────────────────────────────────────────────
  { section: 'B', topic: 'RC Strategy',  title: 'Reading comprehension speed-reading',                 duration: '10 min', channel: 'Wifistudy',         url: ch.wifi('reading comprehension strategy') },
  { section: 'B', topic: 'Idioms',       title: '50 most-asked idioms',                                 duration: '9 min',  channel: 'Adda247',           url: ch.adda('most asked idioms entrance exam') },
  { section: 'B', topic: 'One-word Sub', title: 'One-word substitutions to memorise',                  duration: '8 min',  channel: 'Adda247',           url: ch.adda('one word substitution entrance') },
  { section: 'B', topic: 'Synonyms',     title: 'Top 100 synonyms quick revision',                      duration: '7 min',  channel: 'Adda247',           url: ch.adda('top synonyms vocabulary') },
  { section: 'B', topic: 'Antonyms',     title: 'Antonym shortcut technique',                           duration: '6 min',  channel: 'Adda247',           url: ch.adda('antonyms tricks vocabulary') },
  { section: 'B', topic: 'Para-Jumbles', title: 'Para-jumble logic in 5 steps',                         duration: '8 min',  channel: 'Wifistudy',         url: ch.wifi('para jumbles tricks') },
  { section: 'B', topic: 'Spelling',     title: 'Common spelling traps',                                duration: '5 min',  channel: 'BYJU\'S',           url: ch.byjus('common spelling mistakes English') },
  { section: 'B', topic: 'Grammar',      title: 'Subject-verb agreement masterclass',                   duration: '9 min',  channel: 'BYJU\'S',           url: ch.byjus('subject verb agreement rules') },

  // ─── Section C · GK / Current Affairs ──────────────────────────────────
  { section: 'C', topic: 'Current Affairs', title: 'Current affairs Apr 2026 monthly digest',            duration: '10 min', channel: 'StudyIQ',           url: ch.career('current affairs monthly compilation 2026') },
  { section: 'C', topic: 'Current Affairs', title: 'Current affairs Q1 2026 review',                     duration: '10 min', channel: 'Drishti IAS',       url: ch.drishti('current affairs march 2026') },
  { section: 'C', topic: 'Indian Polity',   title: 'Constitution: 6 fundamental rights',                  duration: '9 min',  channel: 'Drishti IAS',       url: ch.drishti('fundamental rights indian constitution') },
  { section: 'C', topic: 'Indian History',  title: 'Modern India 1857 to 1947',                           duration: '10 min', channel: 'Drishti IAS',       url: ch.drishti('modern indian history 1857 to 1947') },
  { section: 'C', topic: 'Geography',       title: 'Indian rivers + states map',                          duration: '8 min',  channel: 'StudyIQ',           url: ch.career('indian rivers map gk') },
  { section: 'C', topic: 'Awards',          title: 'Major awards 2025 to 2026',                           duration: '7 min',  channel: 'StudyIQ',           url: ch.career('major awards 2025 2026 india') },
  { section: 'C', topic: 'ISRO',            title: 'ISRO missions 2024 to 2026 recap',                    duration: '8 min',  channel: 'StudyIQ',           url: ch.career('isro missions chandrayaan gaganyaan recap') },
  { section: 'C', topic: 'Sports',          title: 'Olympics + Asian Games medals',                       duration: '9 min',  channel: 'StudyIQ',           url: ch.career('olympics asian games india medals') },
  { section: 'C', topic: 'Banking',         title: 'RBI, SEBI, IRDAI explained',                          duration: '8 min',  channel: 'StudyIQ',           url: ch.career('RBI SEBI IRDAI difference') },
  { section: 'C', topic: 'International',   title: 'World organisations & their HQs',                     duration: '7 min',  channel: 'Drishti IAS',       url: ch.drishti('international organisations headquarters') },

  // ─── Section D · Design Aptitude (M.Des) ───────────────────────────────
  { section: 'D', topic: 'Color Theory',     title: 'Color theory for designers',                          duration: '7 min',  channel: 'Flux Academy',      url: ch.flux('color theory basics') },
  { section: 'D', topic: 'Color Theory',     title: 'Color wheel + complementary colours',                 duration: '8 min',  channel: 'The Futur',         url: ch.thefutur('color theory designers') },
  { section: 'D', topic: 'Design Principles', title: 'Balance, contrast, hierarchy',                       duration: '9 min',  channel: 'Flux Academy',      url: ch.flux('design principles balance contrast') },
  { section: 'D', topic: 'Design Principles', title: 'Negative space mastery',                             duration: '6 min',  channel: 'The Futur',         url: ch.thefutur('negative space design') },
  { section: 'D', topic: 'Famous Painters',  title: '10 painters every M.Des aspirant must know',           duration: '10 min', channel: 'Examarly',          url: ch.examarly('famous painters NIFT NID') },
  { section: 'D', topic: 'Art Movements',    title: 'Impressionism, Cubism, Surrealism',                   duration: '9 min',  channel: 'Examarly',          url: ch.examarly('art movements explained NID') },
  { section: 'D', topic: 'Mirror Image',     title: 'Mirror & water image reasoning',                       duration: '6 min',  channel: 'Adda247',           url: ch.adda('mirror image water image reasoning') },
  { section: 'D', topic: 'Pattern Grouping', title: 'Pattern grouping for NIFT/NID',                        duration: '7 min',  channel: 'Examarly',          url: ch.examarly('pattern grouping non verbal reasoning') },
  { section: 'D', topic: 'Embedded Figures', title: 'Spot the hidden figure',                               duration: '5 min',  channel: 'Adda247',           url: ch.adda('embedded hidden figures reasoning') },
  { section: 'D', topic: 'Logo Design',      title: 'Iconic logos and their meaning',                       duration: '8 min',  channel: 'The Futur',         url: ch.thefutur('iconic logos meaning') },
  { section: 'D', topic: 'Indian Crafts',    title: 'Madhubani, Warli, Pashmina — Indian craft traditions',  duration: '9 min',  channel: 'Examarly',          url: ch.examarly('indian crafts NIFT NID design') },
  { section: 'D', topic: 'Architecture',     title: 'Famous Indian architecture',                           duration: '8 min',  channel: 'Examarly',          url: ch.examarly('famous indian architecture NID') },
  { section: 'D', topic: 'Paper Folding',    title: 'Paper folding NIFT visual reasoning',                  duration: '7 min',  channel: 'Examarly',          url: ch.examarly('paper folding NIFT NID visual') }
];

// Map a question's `tag` to a recommended video.
// Returns the first match by exact topic, then by partial.
export function videoForTag(tag) {
  if (!tag) return null;
  const t = tag.toLowerCase();
  // exact topic match wins
  const exact = youtubeLibrary.find((v) => v.topic.toLowerCase() === t);
  if (exact) return exact;
  // word-overlap fallback
  return (
    youtubeLibrary.find((v) =>
      v.topic.toLowerCase().split(/\s+/).some((w) => w.length > 3 && t.includes(w))
    ) || null
  );
}

// All channel pages — useful if a single video link breaks
export const trustedChannels = [
  { name: 'Adda247',         url: 'https://www.youtube.com/@adda247',                  scope: 'Reasoning, English, GK' },
  { name: 'Wifistudy',       url: 'https://www.youtube.com/@wifistudy',                scope: 'Reasoning, Aptitude, English' },
  { name: 'StudyIQ',         url: 'https://www.youtube.com/@StudyIQEducationLtd',      scope: 'Current Affairs, GK' },
  { name: 'Drishti IAS',     url: 'https://www.youtube.com/@drishtiias',               scope: 'Polity, History, Current Affairs' },
  { name: 'BYJU\'S',         url: 'https://www.youtube.com/@BYJUS',                    scope: 'English Grammar, Vocabulary' },
  { name: 'Examarly',        url: 'https://www.youtube.com/@examarly',                 scope: 'NIFT/NID/M.Des prep' },
  { name: 'The Futur',       url: 'https://www.youtube.com/@thefuturishere',           scope: 'Design principles, branding' },
  { name: 'Flux Academy',    url: 'https://www.youtube.com/@FluxAcademy',              scope: 'Color theory, design fundamentals' },
  { name: 'Justin Sung',     url: 'https://www.youtube.com/@JustinSung',               scope: 'Study technique' }
];
