// Visual figures for Section D (Design Aptitude) questions.
// Two kinds:
//   - { type: 'svg',   svg: '<svg ...>...</svg>' }   inline SVG markup
//   - { type: 'image', src: '/images/...', alt: '...' }  local images

// Local images. Drop matching PNGs into /public/images/ — alt text shows if file is missing.
const localImgs = {
  lastSupper:   '/images/last_supper.png',
  starryNight:  '/images/starry_night.png',
  monaLisa:     '/images/mona_lisa.png',
  guernica:     '/images/guernica.png',
  ladyFinger:   '/images/lady_finger.png',
  leather:      '/images/leather_texture.png',
  sabyasachi:   '/images/sabyasachi_logo.png',
  peacock:      '/images/peacock_logo.png',
  kalamkari:    '/images/kalamkari.png',
  appleCross:   '/images/apple_cross.png',
  kiwiCross:    '/images/kiwi_cross.png',
  orangeCross:  '/images/orange_cross.png',
  romanesco:    '/images/romanesco_cross.png',
  swooshLogo:   '/images/swoosh_logo.png',
  mangoCross:   '/images/mango_cross.png',
  bananaCross:  '/images/banana_cross.png',
  beetrootCross: '/images/beetroot_cross.png',
  pictorialMark: '/images/pictorial_mark.png'
};

// Inline SVG helper
const svg = (body, vb = '0 0 320 160') =>
  `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:520px;background:#0F1020;border:1px solid #23253D;border-radius:12px;padding:8px">${body}</svg>`;

// 9-figure grouping (Q11/Q26)
const nineFigureGrouping = svg(`
  <g fill="none" stroke="#F4F5FB" stroke-width="2">
    <g transform="translate(20,40)"><circle cx="10" cy="20" r="8"/><line x1="18" y1="20" x2="40" y2="20"/><line x1="34" y1="20" x2="34" y2="28"/><line x1="38" y1="20" x2="38" y2="26"/></g>
    <g transform="translate(70,40)"><line x1="0" y1="20" x2="36" y2="20"/><polyline points="28,12 36,20 28,28"/></g>
    <g transform="translate(120,40)"><polygon points="0,28 4,20 32,20 28,28"/><polygon points="0,28 -8,32 -4,24"/></g>
    <g transform="translate(170,40)"><rect x="0" y="6" width="28" height="28"/></g>
    <g transform="translate(220,40)"><circle cx="14" cy="20" r="14"/><circle cx="14" cy="20" r="9"/></g>
    <g transform="translate(264,40)"><line x1="0" y1="6" x2="0" y2="34"/><polygon points="0,6 22,12 0,18"/></g>
    <g transform="translate(34,108)"><circle cx="14" cy="14" r="14"/><line x1="14" y1="0" x2="14" y2="28"/><line x1="0" y1="14" x2="28" y2="14"/></g>
    <g transform="translate(110,104)"><polygon points="14,2 26,10 26,24 14,32 2,24 2,10"/></g>
    <g transform="translate(190,104)"><path d="M14 2 C 26 16, 26 28, 14 32 C 2 28, 2 16, 14 2 Z"/></g>
  </g>
  <g font-family="Inter,sans-serif" font-size="10" fill="#A7AAC9" text-anchor="middle">
    <text x="34" y="80">1</text><text x="84" y="80">2</text><text x="130" y="80">3</text>
    <text x="184" y="80">4</text><text x="234" y="80">5</text><text x="275" y="80">6</text>
    <text x="48" y="148">7</text><text x="124" y="148">8</text><text x="204" y="148">9</text>
  </g>
`, '0 0 320 160');

// Visual analogy (Q12/Q27)
const dotAnalogy = svg(`
  <g font-family="Inter,sans-serif" font-size="11" fill="#A7AAC9">
    <text x="50" y="22" text-anchor="middle">A</text><text x="130" y="22" text-anchor="middle">B</text>
    <text x="220" y="22" text-anchor="middle">C</text><text x="300" y="22" text-anchor="middle">?</text>
  </g>
  <g transform="translate(20,40)" fill="none" stroke="#F4F5FB" stroke-width="2"><rect x="0" y="0" width="60" height="60"/><circle cx="10" cy="10" r="4" fill="#F4F5FB"/></g>
  <text x="115" y="76" font-size="20" fill="#A7AAC9" text-anchor="middle">→</text>
  <g transform="translate(130,40)" fill="none" stroke="#F4F5FB" stroke-width="2"><rect x="-30" y="0" width="60" height="60"/><circle cx="20" cy="10" r="4" fill="#F4F5FB"/></g>
  <text x="180" y="76" font-size="22" fill="#A7AAC9" text-anchor="middle">::</text>
  <g transform="translate(220,40)" fill="none" stroke="#F4F5FB" stroke-width="2"><polygon points="0,60 30,0 60,60" transform="translate(-30,0)"/><circle cx="0" cy="0" r="4" fill="#F4F5FB"/></g>
  <text x="270" y="76" font-size="20" fill="#A7AAC9" text-anchor="middle">→</text>
  <g transform="translate(300,40)" fill="none" stroke="#635BFF" stroke-dasharray="4 4" stroke-width="2"><polygon points="0,60 30,0 60,60" transform="translate(-30,0)"/></g>
  <text x="300" y="80" font-size="22" fill="#635BFF" text-anchor="middle">?</text>
`, '0 0 360 110');

// Pattern circles (Q28)
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
  <g><circle cx="320" cy="60" r="10" fill="none" stroke="#635BFF" stroke-width="2" stroke-dasharray="3 3"/><text x="320" y="63" font-size="14" fill="#635BFF" text-anchor="middle">?</text><text x="320" y="100" font-size="11" fill="#635BFF" text-anchor="middle">next</text></g>
`, '0 0 360 120');

// Onion cross-section (Q30)
const onionCross = svg(`
  <g transform="translate(160,80)" fill="none" stroke="#D7AB66">
    <circle r="60" stroke-width="2.5"/><circle r="50" stroke-width="2"/><circle r="40" stroke-width="2"/>
    <circle r="30" stroke-width="2"/><circle r="20" stroke-width="2"/><circle r="10" stroke-width="2"/>
    <circle r="3" fill="#A87935" stroke="none"/>
  </g>
`, '0 0 320 160');

// Cucumber cross-section (Q31)
const cucumberCross = svg(`
  <g transform="translate(160,80)">
    <ellipse rx="80" ry="46" fill="none" stroke="#7CB36A" stroke-width="2"/>
    <ellipse rx="60" ry="30" fill="#C8E0BD" stroke="#5BA85B" stroke-width="1.5"/>
    <g fill="#3F7C3F">${Array.from({length:14}, (_,i) => { const a = (i/14)*Math.PI*2; return `<ellipse cx="${Math.cos(a)*30}" cy="${Math.sin(a)*16}" rx="3" ry="2"/>`; }).join('')}</g>
  </g>
`, '0 0 320 160');

// Paper folding (Q13/Q32/Q33/Q34)
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

// Diagonal paper folding (Q33)
const diagonalFold = svg(`
  <g font-family="Inter,sans-serif" font-size="10" fill="#A7AAC9" text-anchor="middle">
    <text x="60" y="14">Step 1</text><text x="160" y="14">Step 2</text><text x="260" y="14">Cut</text>
  </g>
  <g fill="none" stroke="#F4F5FB" stroke-width="2">
    <rect x="20" y="22" width="80" height="80"/><line x1="20" y1="22" x2="100" y2="102" stroke-dasharray="4 3"/>
    <polygon points="120,22 120,102 200,102" fill="rgba(99,91,255,0.1)"/><line x1="120" y1="22" x2="200" y2="102" stroke-dasharray="4 3"/>
    <polygon points="220,22 220,102 300,102" fill="rgba(99,91,255,0.1)"/>
    <path d="M220 62 A 20 20 0 0 1 240 42" stroke="#F472B6" stroke-width="3"/>
  </g>
`, '0 0 320 120');

// Triple paper folding (Q34)
const tripleFold = svg(`
  <g font-family="Inter,sans-serif" font-size="10" fill="#A7AAC9" text-anchor="middle">
    <text x="60" y="14">Fold 1/3</text><text x="160" y="14">Fold 2/3</text><text x="260" y="14">Punch</text>
  </g>
  <g fill="none" stroke="#F4F5FB" stroke-width="2">
    <rect x="20" y="22" width="80" height="80"/><line x1="46" y1="22" x2="46" y2="102" stroke-dasharray="3 2"/><line x1="73" y1="22" x2="73" y2="102" stroke-dasharray="3 2"/>
    <rect x="120" y="22" width="26" height="80" fill="rgba(99,91,255,0.1)"/>
    <rect x="220" y="22" width="26" height="80" fill="rgba(99,91,255,0.2)"/>
    <rect x="228" y="52" width="10" height="20" fill="#F472B6"/>
  </g>
`, '0 0 320 120');

// Lady finger cross-section (Q29/Q30 etc.)
const ladyFingerCross = svg(`
  <g transform="translate(160,80)">
    <polygon points="0,-60 57,-19 35,48 -35,48 -57,-19" fill="none" stroke="#7CB36A" stroke-width="2.5"/>
    <polygon points="0,-45 42,-14 26,36 -26,36 -42,-14" fill="#C8E0BD" stroke="#5BA85B" stroke-width="1.5"/>
    <circle r="6" fill="#3F7C3F"/>
    <g fill="#3F7C3F">
      ${Array.from({length:5}, (_,i) => { const a = (i/5)*Math.PI*2 - Math.PI/2; return `<circle cx="${Math.cos(a)*20}" cy="${Math.sin(a)*20}" r="3.5"/>`; }).join('')}
    </g>
  </g>
`, '0 0 320 160');

// Stationery functional category (Q39)
const stationerySet = svg(`
  <g font-family="Inter,sans-serif" font-size="11" fill="#A7AAC9" text-anchor="middle">
    <text x="60" y="20">1</text><text x="160" y="20">2</text><text x="240" y="20">3</text><text x="320" y="20">4</text>
  </g>
  <g fill="none" stroke="#F4F5FB" stroke-width="2">
    <g transform="translate(40,40)"><circle cx="6" cy="38" r="8"/><circle cx="22" cy="38" r="8"/><line x1="14" y1="34" x2="38" y2="0"/><line x1="14" y1="42" x2="38" y2="0"/></g>
    <g transform="translate(130,50)"><rect x="0" y="20" width="62" height="14" rx="3"/><path d="M2 20 Q 30 0 60 20"/></g>
    <g transform="translate(220,40)"><path d="M8 4 L8 50 Q8 56 14 56 L26 56 Q32 56 32 50 L32 14 Q32 8 26 8 L20 8 Q14 8 14 14 L14 44"/></g>
    <g transform="translate(310,40)"><line x1="0" y1="0" x2="36" y2="56"/><ellipse cx="2" cy="3" rx="3" ry="5" transform="rotate(-30 2 3)"/></g>
  </g>
  <g font-family="Inter,sans-serif" font-size="9" fill="#6E7194" text-anchor="middle">
    <text x="60" y="108">scissors</text><text x="160" y="108">stapler</text><text x="240" y="108">paper-clip</text><text x="320" y="108">needle</text>
  </g>
`, '0 0 360 120');

// Shoe diagram (Q40)
const shoeDiagram = svg(`
  <g fill="none" stroke="#F4F5FB" stroke-width="1.5">
    <path d="M40 110 Q60 70 120 70 L160 70 Q170 70 175 80 L175 110 Z"/>
    <path d="M40 110 L175 110" stroke="#F472B6" stroke-width="3" stroke-dasharray="4 4"/>
    <text x="100" y="125" font-size="10" fill="#F472B6" text-anchor="middle">target component (dotted)</text>
  </g>
`, '0 0 320 140');

// Embedded square in starburst (Q41)
const embeddedSquare = svg(`
  <g transform="translate(160,80)">
    <g fill="none" stroke="#A7AAC9" stroke-width="1.5">
      ${Array.from({length: 12}, (_, i) => { const a = (i/12)*Math.PI*2; return `<line x1="0" y1="0" x2="${Math.cos(a)*65}" y2="${Math.sin(a)*65}"/>`; }).join('')}
      <circle r="65"/><circle r="40"/>
    </g>
    <rect x="-22" y="-22" width="44" height="44" fill="none" stroke="#635BFF" stroke-width="2.5"/>
  </g>
  <text x="160" y="155" font-size="10" fill="#A7AAC9" text-anchor="middle">Find the simple shape hidden inside</text>
`, '0 0 320 170');

// Embedded triangle in floral (Q42)
const embeddedTriangle = svg(`
  <g transform="translate(160,80)">
    <g fill="none" stroke="#A7AAC9" stroke-width="1.5">
      ${[0,60,120,180,240,300].map(deg => { const a = deg*Math.PI/180; return `<circle cx="${Math.cos(a)*30}" cy="${Math.sin(a)*30}" r="22"/>`; }).join('')}
      <circle r="50"/>
    </g>
    <polygon points="0,-44 38,22 -38,22" fill="none" stroke="#635BFF" stroke-width="2.5"/>
  </g>
  <text x="160" y="155" font-size="10" fill="#A7AAC9" text-anchor="middle">Find the simple shape hidden in the floral pattern</text>
`, '0 0 320 170');

// Stylised crown logo (Q43)
const crownLogo = svg(`
  <g transform="translate(160,80)" fill="none" stroke="#D4A24C" stroke-width="2">
    <path d="M-50 10 L-40 -20 L-25 0 L-12 -28 L0 -8 L12 -28 L25 0 L40 -20 L50 10 Z"/>
    <line x1="-50" y1="14" x2="50" y2="14"/><line x1="-50" y1="20" x2="50" y2="20"/>
    <circle cx="-40" cy="-22" r="2.5" fill="#D4A24C"/><circle cx="-12" cy="-30" r="2.5" fill="#D4A24C"/>
    <circle cx="12" cy="-30" r="2.5" fill="#D4A24C"/><circle cx="40" cy="-22" r="2.5" fill="#D4A24C"/>
    <text x="0" y="38" font-family="serif" font-size="10" fill="#D4A24C" text-anchor="middle" font-style="italic">— L U X U R Y —</text>
  </g>
`, '0 0 320 160');

// Peacock-feather logo (Q44)
const peacockFeather = svg(`
  <g transform="translate(160,80)">
    ${[-30, -15, 0, 15, 30].map(deg => `<g transform="rotate(${deg})"><path d="M0 0 Q -8 -40 0 -60 Q 8 -40 0 0 Z" fill="#0E7C8A" stroke="#054A53" stroke-width="1"/><ellipse cx="0" cy="-50" rx="4" ry="6" fill="#FFD060" stroke="#0E7C8A"/><circle cx="0" cy="-50" r="2" fill="#054A53"/></g>`).join('')}
    <circle r="6" fill="#054A53"/>
  </g>
`, '0 0 320 160');

// Color theory primaries (Q45)
const colorTheoryPrimary = svg(`
  <g transform="translate(40,40)">
    <circle cx="40" cy="40" r="40" fill="#EF4444" opacity="0.8"/>
    <circle cx="100" cy="40" r="40" fill="#F59E0B" opacity="0.8"/>
    <circle cx="70" cy="90" r="40" fill="#3B82F6" opacity="0.8"/>
    <text x="70" y="-10" fill="#F4F5FB" font-size="12" text-anchor="middle">Pigment Primaries (RYB)</text>
  </g>
`, '0 0 220 160');

// Alignment principle (Q47)
const alignmentDiagram = svg(`
  <g stroke="#F4F5FB" stroke-width="1.5">
    <line x1="40" y1="20" x2="40" y2="140" stroke="#34D399" stroke-dasharray="4 2"/>
    <rect x="40" y="30" width="60" height="20" fill="rgba(52,211,153,0.2)"/>
    <rect x="40" y="60" width="40" height="20" fill="rgba(52,211,153,0.2)"/>
    <rect x="40" y="90" width="80" height="20" fill="rgba(52,211,153,0.2)"/>
    <rect x="180" y="30" width="60" height="20" fill="rgba(239,68,68,0.2)"/>
    <rect x="210" y="60" width="40" height="20" fill="rgba(239,68,68,0.2)"/>
    <rect x="170" y="90" width="80" height="20" fill="rgba(239,68,68,0.2)"/>
  </g>
  <g font-family="Inter,sans-serif" font-size="10" fill="#A7AAC9" text-anchor="middle">
    <text x="80" y="155">Aligned</text><text x="220" y="155">Unaligned</text>
  </g>
`, '0 0 320 170');

// Texture grid (Q48)
const textureGrid = svg(`
  <defs>
    <pattern id="brick" width="20" height="10" patternUnits="userSpaceOnUse"><rect width="20" height="10" fill="#a04444"/><line x1="0" y1="5" x2="20" y2="5" stroke="#5a2828" stroke-width="0.5"/></pattern>
    <pattern id="wood" width="40" height="8" patternUnits="userSpaceOnUse"><rect width="40" height="8" fill="#9a6d3a"/><path d="M0 4 Q 10 1 20 4 T 40 4" fill="none" stroke="#5e3e1d" stroke-width="0.5"/></pattern>
    <pattern id="mesh" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#888"/><line x1="0" y1="0" x2="6" y2="6" stroke="#444" stroke-width="0.5"/></pattern>
    <pattern id="leather" width="24" height="22" patternUnits="userSpaceOnUse"><rect width="24" height="22" fill="#8b5a2b"/><ellipse cx="6" cy="6" rx="4" ry="3" fill="#6c4520" opacity="0.6"/><ellipse cx="18" cy="14" rx="5" ry="4" fill="#a26c34" opacity="0.7"/><ellipse cx="3" cy="18" rx="3" ry="2" fill="#6c4520" opacity="0.5"/></pattern>
    <pattern id="marble" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#dcd6c8"/><path d="M0 14 Q 12 6 22 16 T 40 22" fill="none" stroke="#7d7464" stroke-width="0.7"/></pattern>
    <pattern id="sand" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#e1c483"/><circle cx="2" cy="2" r="0.6" fill="#a4854a"/><circle cx="4" cy="4" r="0.4" fill="#a4854a"/></pattern>
    <pattern id="bamboo" width="14" height="40" patternUnits="userSpaceOnUse"><rect width="14" height="40" fill="#9bc36f"/><line x1="7" y1="0" x2="7" y2="40" stroke="#5d8442" stroke-width="0.7"/><line x1="0" y1="20" x2="14" y2="20" stroke="#5d8442" stroke-width="0.5"/></pattern>
    <pattern id="fabric" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#c0c8d8"/><line x1="0" y1="0" x2="6" y2="6" stroke="#7c8aa3" stroke-width="0.4"/></pattern>
  </defs>
  <g font-family="Inter,sans-serif" font-size="10" fill="#A7AAC9" text-anchor="middle">
    ${['brick','fabric','wood','mesh','leather','marble','sand','bamboo'].map((id, i) => { const x = 20 + (i%4)*84, y = 30 + Math.floor(i/4)*84; return `<g><rect x="${x}" y="${y}" width="70" height="70" fill="url(#${id})" stroke="#23253D" stroke-width="1"/><text x="${x+35}" y="${y+82}">${i+1}</text></g>`; }).join('')}
  </g>
`, '0 0 360 220');

// One-point perspective (Q49)
const onePointPerspective = svg(`
  <g fill="none" stroke="#F4F5FB" stroke-width="1.5">
    <line x1="0" y1="80" x2="360" y2="80" stroke="#A7AAC9" stroke-dasharray="3 3"/>
    <circle cx="280" cy="80" r="3.5" fill="#635BFF" stroke="none"/>
    <text x="280" y="100" font-size="10" fill="#635BFF" text-anchor="middle">vanishing point</text>
    <line x1="280" y1="80" x2="40" y2="20" stroke="#635BFF" stroke-dasharray="3 3"/>
    <line x1="280" y1="80" x2="40" y2="140" stroke="#635BFF" stroke-dasharray="3 3"/>
    <line x1="280" y1="80" x2="180" y2="20" stroke="#635BFF" stroke-dasharray="3 3"/>
    <line x1="280" y1="80" x2="180" y2="140" stroke="#635BFF" stroke-dasharray="3 3"/>
    <rect x="40" y="40" width="100" height="80"/>
    <rect x="80" y="50" width="80" height="60"/>
    <line x1="40" y1="40" x2="80" y2="50"/><line x1="140" y1="40" x2="160" y2="50"/>
    <line x1="40" y1="120" x2="80" y2="110"/><line x1="140" y1="120" x2="160" y2="110"/>
  </g>
`, '0 0 360 160');

// Eames Lounge Chair silhouette (Q2D35)
const eamesChair = svg(`
  <g transform="translate(160,80)" fill="none" stroke="#F4F5FB" stroke-width="2">
    <path d="M-40 20 Q-40 -20 0 -20 Q40 -20 40 20 L40 40 L-40 40 Z" fill="#23253D"/>
    <path d="M-30 -20 Q-30 -50 0 -50 Q30 -50 30 -20" stroke-width="1.5"/>
    <rect x="-50" y="40" width="100" height="10" rx="2"/>
    <line x1="-30" y1="50" x2="-40" y2="70"/><line x1="30" y1="50" x2="40" y2="70"/>
    <line x1="0" y1="50" x2="0" y2="75"/>
  </g>
`, '0 0 320 160');

// Taj Mahal silhouette (Q2D32)
const tajMahal = svg(`
  <g transform="translate(160,100)" fill="#F4F5FB" stroke="none">
    <rect x="-60" y="-10" width="120" height="30"/>
    <path d="M-30 -10 Q-30 -50 0 -50 Q30 -50 30 -10 Z"/>
    <circle cx="0" cy="-55" r="3"/>
    <rect x="-70" y="-60" width="4" height="80"/><rect x="66" y="-60" width="4" height="80"/>
    <circle cx="-68" cy="-62" r="3"/><circle cx="68" cy="-62" r="3"/>
  </g>
`, '0 0 320 160');

// Strawberry cross-section (Q6D29)
const strawberryCross = svg(`
  <g transform="translate(160,80)" fill="none" stroke="#EF4444" stroke-width="2">
    <path d="M0 -50 Q 40 -40 40 0 Q 40 40 0 60 Q -40 40 -40 0 Q -40 -40 0 -50 Z" fill="#EF4444" fill-opacity="0.1"/>
    <g fill="#F59E0B">
      ${Array.from({length: 12}, (_, i) => { const a = (i/12)*Math.PI*2; return `<circle cx="${Math.cos(a)*35}" cy="${Math.sin(a)*40}" r="1.5"/>`; }).join('')}
      ${Array.from({length: 8}, (_, i) => { const a = (i/8)*Math.PI*2; return `<circle cx="${Math.cos(a)*20}" cy="${Math.sin(a)*25}" r="1"/>`; }).join('')}
    </g>
    <path d="M-15 -55 Q 0 -45 15 -55" stroke="#10B981" stroke-width="3"/>
  </g>
`, '0 0 320 160');

// Vernier Caliper (Q6D47)
const vernierCaliper = svg(`
  <g transform="translate(40,80)" fill="none" stroke="#A7AAC9" stroke-width="1.5">
    <rect x="0" y="0" width="240" height="20" rx="1"/>
    ${Array.from({length: 25}, (_, i) => `<line x1="${i*10}" y1="0" x2="${i*10}" y2="${i%5===0 ? 8 : 4}"/>`).join('')}
    <g transform="translate(60,-10)">
      <rect x="0" y="0" width="40" height="40" stroke="#F4F5FB" fill="#23253D" fill-opacity="0.5"/>
      <line x1="10" y1="30" x2="10" y2="40"/><line x1="20" y1="30" x2="20" y2="40"/><line x1="30" y1="30" x2="30" y2="40"/>
    </g>
  </g>
`, '0 0 320 160');

// ─── Map question id → figure ──────────────────────────────────────────────
const figures = {
  // Section A
  '1A11': { type: 'svg', svg: nineFigureGrouping, caption: 'Group these 9 figures into 3 classes' },
  '1A12': { type: 'svg', svg: dotAnalogy,         caption: 'A : B :: C : ?' },
  '1A13': { type: 'svg', svg: paperFoldQuestion,  caption: 'Paper folding logic' },

  // Section D — Design Aptitude
  '1D26': { type: 'svg',   svg: nineFigureGrouping, caption: 'Group these 9 figures into 3 classes' },
  '1D27': { type: 'svg',   svg: dotAnalogy,         caption: 'Visual analogy' },
  '1D28': { type: 'svg',   svg: patternCircles,     caption: 'Pattern series' },
  '1D29': { type: 'image', src: localImgs.ladyFinger, alt: 'Lady-finger cross-section' },
  '1D30': { type: 'svg',   svg: onionCross,         caption: 'Vegetable cross-section — concentric rings' },
  '1D31': { type: 'svg',   svg: cucumberCross,      caption: 'Vegetable cross-section — oval with seeds' },
  '1D32': { type: 'svg',   svg: paperFoldQuestion,  caption: 'Paper folding logic' },
  '1D33': { type: 'svg',   svg: diagonalFold,       caption: 'Diagonal fold logic' },
  '1D34': { type: 'svg',   svg: tripleFold,         caption: 'Triple fold logic' },
  '1D35': { type: 'image', src: localImgs.lastSupper,  alt: 'The Last Supper — Da Vinci' },
  '1D36': { type: 'image', src: localImgs.starryNight, alt: 'Starry Night — Van Gogh' },
  '1D37': { type: 'image', src: localImgs.monaLisa,    alt: 'Mona Lisa — Da Vinci' },
  '1D38': { type: 'image', src: localImgs.guernica,    alt: 'Guernica — Picasso' },
  '1D39': { type: 'svg',   svg: stationerySet,      caption: 'Which item does NOT belong to the same functional category?' },
  '1D40': { type: 'svg',   svg: shoeDiagram,        caption: 'Shoe components — identify the dotted part' },
  '1D41': { type: 'svg',   svg: embeddedSquare,     caption: 'Find the simple shape hidden inside' },
  '1D42': { type: 'svg',   svg: embeddedTriangle,   caption: 'Find the simple shape hidden in the floral pattern' },
  '1D43': { type: 'svg',   svg: crownLogo,          caption: 'Stylised crown logo' },
  '1D44': { type: 'svg',   svg: peacockFeather,     caption: 'Peacock-feather logo' },
  '1D45': { type: 'svg',   svg: colorTheoryPrimary, caption: 'Pigment primaries (RYB)' },
  '1D47': { type: 'svg',   svg: alignmentDiagram,   caption: 'Aligned vs unaligned layout' },
  '1D48': { type: 'svg',   svg: textureGrid,        caption: 'Eight textures — pick the leather grain' },
  '1D49': { type: 'svg',   svg: onePointPerspective, caption: 'One-point perspective drawing' },

  // Mock 2 mappings
  '2D26': { type: 'image', src: localImgs.pictorialMark, alt: 'Pictorial Mark Logo' },
  '2D29': { type: 'image', src: localImgs.appleCross, alt: 'Apple Cross-section' },
  '2D30': { type: 'image', src: localImgs.kiwiCross,  alt: 'Kiwi Cross-section' },
  '2D32': { type: 'svg',   svg: tajMahal,           caption: 'Famous Architecture' },
  '2D33': { type: 'image', src: localImgs.monaLisa,    alt: 'Mona Lisa' },
  '2D35': { type: 'svg',   svg: eamesChair,         caption: 'Design Icon' },
  '2D40': { type: 'svg',   svg: shoeDiagram,        caption: 'Shoe Anatomy' },
  '2D45': { type: 'image', src: localImgs.swooshLogo,  alt: 'Swoosh Logo' },
  '2D48': { type: 'svg',   svg: colorTheoryPrimary, caption: 'Complementary Colors' },
  '2D50': { type: 'image', src: localImgs.kalamkari,   alt: 'Indian Craft' },

  // Mock 3 mappings
  '3D29': { type: 'svg',   svg: ladyFingerCross,    caption: 'Vegetable Cross-section (Okra)' },
  '3D30': { type: 'image', src: localImgs.mangoCross, alt: 'Mango Cross-section' },
  '3D34': { type: 'image', src: localImgs.lastSupper,  alt: 'The Last Supper' },
  '3D36': { type: 'svg',   svg: shoeDiagram,        caption: 'Shoe Parts' },
  '3D41': { type: 'image', src: localImgs.leather,     alt: 'Indian Craft' },
  '3D46': { type: 'image', src: localImgs.monaLisa,    alt: 'Famous Painting' },

  // Mock 4 mappings
  '4D29': { type: 'image', src: localImgs.orangeCross, alt: 'Citrus Cross-section' },
  '4D30': { type: 'svg',   svg: ladyFingerCross,    caption: 'Vegetable Cross-section' },
  '4D34': { type: 'image', src: localImgs.starryNight, alt: 'The Starry Night' },
  '4D36': { type: 'svg',   svg: shoeDiagram,        caption: 'Shoe Insole' },
  '4D41': { type: 'image', src: localImgs.kalamkari,   alt: 'Blue Pottery' },
  '4D46': { type: 'image', src: localImgs.starryNight, alt: 'Famous Painting' },

  // Mock 5 mappings
  '5D29': { type: 'image', src: localImgs.bananaCross,   alt: 'Banana Cross-section' },
  '5D30': { type: 'image', src: localImgs.beetrootCross, alt: 'Beetroot Cross-section' },
  '5D33': { type: 'image', src: localImgs.monaLisa,    alt: 'The Louvre' },
  '5D34': { type: 'image', src: localImgs.guernica,    alt: 'The Scream (Placeholder)' },
  '5D36': { type: 'svg',   svg: shoeDiagram,        caption: 'Shoe Outsole' },
  '5D41': { type: 'image', src: localImgs.kalamkari,   alt: 'Scroll Painting' },
  '5D46': { type: 'image', src: localImgs.lastSupper,  alt: 'The Night Watch (Placeholder)' },

  // Mock 6 mappings
  '6D29': { type: 'svg',   svg: strawberryCross,    caption: 'Strawberry Structure' },
  '6D30': { type: 'image', src: localImgs.romanesco,    alt: 'Fractal Pattern (Romanesco)' },
  '6D33': { type: 'image', src: localImgs.starryNight, alt: 'The Starry Night' },
  '6D34': { type: 'image', src: localImgs.lastSupper,  alt: 'The Last Supper' },
  '6D36': { type: 'svg',   svg: shoeDiagram,        caption: 'Shoe Upper' },
  '6D41': { type: 'image', src: localImgs.leather,     alt: 'Terracotta' },
  '6D46': { type: 'image', src: localImgs.guernica,    alt: 'Guernica' },
  '6D47': { type: 'svg',   svg: vernierCaliper,     caption: 'Measurement Tool' }
};

export function figureFor(qid) {
  return figures[qid] || null;
}
export default figures;
