// Visual figures for Section D (Design Aptitude) questions.
// Two kinds:
//   - { type: 'svg', svg: '<svg ...>...</svg>' }   inline SVG markup
//   - { type: 'image', src: '/images/...', alt: '...' }  local images (paintings, etc.)

// Local images generated for high performance and reliability
const localImgs = {
  lastSupper:   '/images/last_supper.png',
  starryNight:  '/images/starry_night.png',
  monaLisa:     '/images/mona_lisa.png',
  guernica:     '/images/guernica.png',
  ladyFinger:   '/images/lady_finger.png'
};

// Inline SVG helpers ─────────────────────────────────────────────────────────
const svg = (body, vb = '0 0 320 160') =>
  `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:520px;background:#0F1020;border:1px solid #23253D;border-radius:12px;padding:8px">${body}</svg>`;

// Figure grouping: 9 small icons matching Section D Q26
const nineFigureGrouping = svg(`
  <g fill="none" stroke="#F4F5FB" stroke-width="2">
    <!-- 1 KEY -->
    <g transform="translate(20,40)"><circle cx="10" cy="20" r="8"/><line x1="18" y1="20" x2="40" y2="20"/><line x1="34" y1="20" x2="34" y2="28"/><line x1="38" y1="20" x2="38" y2="26"/></g>
    <!-- 2 ARROW -->
    <g transform="translate(70,40)"><line x1="0" y1="20" x2="36" y2="20"/><polyline points="28,12 36,20 28,28"/></g>
    <!-- 3 PENCIL -->
    <g transform="translate(120,40)"><polygon points="0,28 4,20 32,20 28,28" /><polygon points="0,28 -8,32 -4,24" /></g>
    <!-- 4 BOX -->
    <g transform="translate(170,40)"><rect x="0" y="6" width="28" height="28"/></g>
    <!-- 5 COIN -->
    <g transform="translate(220,40)"><circle cx="14" cy="20" r="14"/><circle cx="14" cy="20" r="9"/></g>
    <!-- 6 FLAG -->
    <g transform="translate(264,40)"><line x1="0" y1="6" x2="0" y2="34"/><polygon points="0,6 22,12 0,18"/></g>
  </g>
  <g fill="none" stroke="#F4F5FB" stroke-width="2">
    <!-- 7 WHEEL -->
    <g transform="translate(34,108)"><circle cx="14" cy="14" r="14"/><line x1="14" y1="0" x2="14" y2="28"/><line x1="0" y1="14" x2="28" y2="14"/></g>
    <!-- 8 NUT (hexagon) -->
    <g transform="translate(110,104)"><polygon points="14,2 26,10 26,24 14,32 2,24 2,10"/></g>
    <!-- 9 TEARDROP -->
    <g transform="translate(190,104)"><path d="M14 2 C 26 16, 26 28, 14 32 C 2 28, 2 16, 14 2 Z"/></g>
  </g>
  <g font-family="Inter,sans-serif" font-size="10" fill="#A7AAC9" text-anchor="middle">
    <text x="34" y="80">1</text><text x="84" y="80">2</text><text x="130" y="80">3</text>
    <text x="184" y="80">4</text><text x="234" y="80">5</text><text x="275" y="80">6</text>
    <text x="48" y="148">7</text><text x="124" y="148">8</text><text x="204" y="148">9</text>
  </g>
`, '0 0 320 160');

// Visual analogy: dot moving across vertices matching Section D Q27
const dotAnalogy = svg(`
  <g font-family="Inter,sans-serif" font-size="11" fill="#A7AAC9">
    <text x="50" y="22" text-anchor="middle">A</text>
    <text x="130" y="22" text-anchor="middle">B</text>
    <text x="220" y="22" text-anchor="middle">C</text>
    <text x="300" y="22" text-anchor="middle">?</text>
  </g>
  <!-- Square with dot top-left -->
  <g transform="translate(20,40)" fill="none" stroke="#F4F5FB" stroke-width="2"><rect x="0" y="0" width="60" height="60"/><circle cx="10" cy="10" r="4" fill="#F4F5FB"/></g>
  <text x="115" y="76" font-size="20" fill="#A7AAC9" text-anchor="middle">→</text>
  <!-- Square with dot top-right -->
  <g transform="translate(130,40)" fill="none" stroke="#F4F5FB" stroke-width="2"><rect x="-30" y="0" width="60" height="60"/><circle cx="20" cy="10" r="4" fill="#F4F5FB"/></g>
  <text x="180" y="76" font-size="22" fill="#A7AAC9" text-anchor="middle">::</text>
  <!-- Triangle with dot at top vertex -->
  <g transform="translate(220,40)" fill="none" stroke="#F4F5FB" stroke-width="2"><polygon points="0,60 30,0 60,60" transform="translate(-30,0)"/><circle cx="0" cy="0" r="4" fill="#F4F5FB"/></g>
  <text x="270" y="76" font-size="20" fill="#A7AAC9" text-anchor="middle">→</text>
  <!-- ? -->
  <g transform="translate(300,40)" fill="none" stroke="#635BFF" stroke-dasharray="4 4" stroke-width="2"><polygon points="0,60 30,0 60,60" transform="translate(-30,0)"/></g>
  <text x="300" y="80" font-size="22" fill="#635BFF" text-anchor="middle">?</text>
`, '0 0 360 110');

// Pattern series matching Section D Q28
const patternCircles = svg(`
  ${[2,4,6,8].map((n,i) => {
    const cx = 40 + i*70, cy = 60;
    const lines = Array.from({length:n}, (_,j) => {
      const a = (j/n) * Math.PI*2;
      const x1 = cx + Math.cos(a)*8, y1 = cy + Math.sin(a)*8;
      const x2 = cx + Math.cos(a)*22, y2 = cy + Math.sin(a)*22;
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#F4F5FB" stroke-width="2"/>`;
    }).join('');
    return `<g><circle cx="${cx}" cy="${cy}" r="10" fill="none" stroke="#F4F5FB" stroke-width="2"/>${lines}<text x="${cx}" y="100" font-size="11" fill="#A7AAC9" text-anchor="middle">${n} lines</text></g>`;
  }).join('')}
  <g><circle cx="320" cy="60" r="10" fill="none" stroke="#635BFF" stroke-width="2" stroke-dasharray="3 3"/>
    <text x="320" y="63" font-size="14" fill="#635BFF" text-anchor="middle">?</text>
    <text x="320" y="100" font-size="11" fill="#635BFF" text-anchor="middle">next</text></g>
`, '0 0 360 120');

// Paper folding matching Section D Q32-34
const paperFoldQuestion = svg(`
  <g font-family="Inter,sans-serif" font-size="10" fill="#A7AAC9" text-anchor="middle">
    <text x="60" y="14">Step 1</text><text x="160" y="14">Step 2</text><text x="260" y="14">Cut</text>
  </g>
  <g fill="none" stroke="#F4F5FB" stroke-width="2">
    <rect x="20" y="22" width="80" height="80"/><line x1="60" y1="22" x2="60" y2="102" stroke-dasharray="4 3"/>
    <rect x="120" y="22" width="80" height="80"/><line x1="120" y1="62" x2="200" y2="62" stroke-dasharray="4 3"/>
    <rect x="220" y="22" width="80" height="80"/><polygon points="220,22 240,22 220,42" fill="#0F1020"/>
  </g>
`, '0 0 320 120');

// Onion cross-section (concentric rings) — Section D Q30
const onionCross = svg(`
  <g transform="translate(160,80)" fill="none" stroke="#D7AB66">
    <circle r="60" stroke-width="2.5"/>
    <circle r="50" stroke-width="2"/>
    <circle r="40" stroke-width="2"/>
    <circle r="30" stroke-width="2"/>
    <circle r="20" stroke-width="2"/>
    <circle r="10" stroke-width="2"/>
    <circle r="3" fill="#A87935" stroke="none"/>
  </g>
`, '0 0 320 160');

// Cucumber cross-section (oval with seeds) — Section D Q31
const cucumberCross = svg(`
  <g transform="translate(160,80)">
    <ellipse rx="80" ry="46" fill="none" stroke="#7CB36A" stroke-width="2"/>
    <ellipse rx="60" ry="30" fill="#C8E0BD" stroke="#5BA85B" stroke-width="1.5"/>
    <g fill="#3F7C3F">
      ${Array.from({length:14}, (_,i) => {
        const a = (i/14) * Math.PI*2;
        return `<ellipse cx="${Math.cos(a)*30}" cy="${Math.sin(a)*16}" rx="3" ry="2"/>`;
      }).join('')}
    </g>
  </g>
`, '0 0 320 160');

// Capsicum cross-section (3-chamber star with seeds) — Section D
const capsicumCross = svg(`
  <g transform="translate(160,80)">
    <circle r="60" fill="none" stroke="#C44141" stroke-width="2.5"/>
    <circle r="48" fill="#F4C7C7" stroke="#A33636" stroke-width="1"/>
    <g fill="none" stroke="#A33636" stroke-width="2">
      <line x1="0" y1="0" x2="0" y2="-44"/>
      <line x1="0" y1="0" x2="38" y2="22"/>
      <line x1="0" y1="0" x2="-38" y2="22"/>
      <path d="M0,-30 Q14,-22 14,-10 Q14,2 0,2 Q-14,2 -14,-10 Q-14,-22 0,-30 Z" fill="#FFF1E0" stroke="#A33636"/>
    </g>
    <g fill="#E5C97A">
      <ellipse cx="-2" cy="-14" rx="2" ry="3"/>
      <ellipse cx="4" cy="-10" rx="2" ry="3"/>
      <ellipse cx="-6" cy="-6" rx="2" ry="3"/>
    </g>
  </g>
`, '0 0 320 160');

// Tomato cross-section (locules with seeds) — alternative
const tomatoCross = svg(`
  <g transform="translate(160,80)">
    <circle r="62" fill="#E84545" stroke="#A82828" stroke-width="2.5"/>
    <circle r="55" fill="#F09090" stroke="#A82828" stroke-width="1"/>
    <g fill="#FFF6BB" stroke="#C8A040" stroke-width="1.5">
      <ellipse cx="-22" cy="-22" rx="14" ry="11"/>
      <ellipse cx="22" cy="-22" rx="14" ry="11"/>
      <ellipse cx="-22" cy="22" rx="14" ry="11"/>
      <ellipse cx="22" cy="22" rx="14" ry="11"/>
      <ellipse cx="0" cy="0" rx="10" ry="9"/>
    </g>
    <g fill="#A8723E">
      ${[[-22,-22],[22,-22],[-22,22],[22,22],[0,0]].flatMap(([cx,cy]) =>
        [-4,0,4].map(dx => `<ellipse cx="${cx+dx}" cy="${cy}" rx="1.5" ry="2.5"/>`)
      ).join('')}
    </g>
  </g>
`, '0 0 320 160');

// Sneaker wireframe matching Section D Q40
const shoeDiagram = svg(`
  <g fill="none" stroke="#F4F5FB" stroke-width="1.5">
    <path d="M40 110 Q60 70 120 70 L160 70 Q170 70 175 80 L175 110 Z" />
    <path d="M40 110 L175 110" stroke="#F472B6" stroke-width="3" stroke-dasharray="4 4" />
    <text x="100" y="125" font-size="10" fill="#F472B6" text-anchor="middle">Target Component</text>
  </g>
`, '0 0 320 140');

// ─── Map question id → figure ────────────────────────────────────────────
const figures = {
  // Section A
  '1A11': { type: 'svg', svg: nineFigureGrouping, caption: 'Group these 9 figures into 3 classes' },
  '1A12': { type: 'svg', svg: dotAnalogy,         caption: 'A : B :: C : ?' },
  '1A13': { type: 'svg', svg: paperFoldQuestion,  caption: 'Paper folding logic' },

  // Section D
  '1D26': { type: 'svg', svg: nineFigureGrouping, caption: 'Group these 9 figures into 3 classes' },
  '1D27': { type: 'svg', svg: dotAnalogy,         caption: 'Visual analogy' },
  '1D28': { type: 'svg', svg: patternCircles,     caption: 'Pattern series' },
  '1D29': { type: 'image', src: localImgs.ladyFinger, alt: 'Lady Finger Cross-section' },
  '1D30': { type: 'svg', svg: onionCross,         caption: 'Vegetable cross-section — concentric rings' },
  '1D31': { type: 'svg', svg: cucumberCross,      caption: 'Vegetable cross-section — oval with seeds' },
  '1D32': { type: 'svg', svg: paperFoldQuestion,  caption: 'Paper folding logic' },
  '1D33': { type: 'svg', svg: paperFoldQuestion,  caption: 'Diagonal fold logic' },
  '1D34': { type: 'svg', svg: paperFoldQuestion,  caption: 'Triple fold logic' },
  '1D35': { type: 'image', src: localImgs.lastSupper, alt: 'The Last Supper' },
  '1D36': { type: 'image', src: localImgs.starryNight, alt: 'Starry Night' },
  '1D37': { type: 'image', src: localImgs.monaLisa,    alt: 'Mona Lisa' },
  '1D38': { type: 'image', src: localImgs.guernica,    alt: 'Guernica' },
  '1D40': { type: 'svg', svg: shoeDiagram,        caption: 'Shoe components' }
};

export function figureFor(qid) {
  return figures[qid] || null;
}
export default figures;
