// WasteWise ♻️ — Prototype JavaScript

const SAMPLE_RESULTS = {
  'plastic bottle #1 pet': {
    name: 'Plastic Bottle (#1 PET)',
    emoji: '🧴',
    subtitle: 'Water, soda, most clear plastic bottles',
    bin: 'recycle',
    binLabel: '♻️ Blue Bin (Curbside)',
    steps: [
      'Empty all contents',
      'Rinse lightly (no heavy washing needed)',
      'Replace cap on bottle',
      'Crush if desired (saves space)',
      'Place in blue bin - accepted on Tuesdays'
    ],
    why: 'Tampa, FL accepts #1 PET in curbside recycling. Crushed bottles reduce transport costs by 40%.',
    components: null
  },
  'pizza box': {
    name: 'Pizza Box',
    emoji: '🍕',
    subtitle: 'Depends: check each section',
    bin: 'multi',
    binLabel: '♻️ Separate by section',
    steps: null,
    why: 'Grease contaminates recycling. Clean cardboard can be recycled. Soiled cardboard must be composted.',
    components: [
      { name: 'Greasy bottom', bin: 'compost', binLabel: '🍂 Compost or Trash' },
      { name: 'Clean lid', bin: 'recycle', binLabel: '♻️ Blue Bin' },
      { name: 'Pizza saver', bin: 'trash', binLabel: '🗑️ Trash' }
    ]
  },
  'styrofoam': {
    name: 'Styrofoam (#6 PS)',
    emoji: '🧊',
    subtitle: 'Cups, packing peanuts, takeout containers',
    bin: 'special',
    binLabel: '📍 Drop-Off Only',
    steps: [
      'Clean any food residue',
      'Do not put in curbside bins',
      'Take to Publix or Walmart recycling station',
      'See Drop-Off tab for nearest location'
    ],
    why: 'Tampa does NOT accept #6 PS in curbside recycling. It clogs sorting machines and has low market value.',
    components: null
  },
  'batteries': {
    name: 'Batteries (All Types)',
    emoji: '🔋',
    subtitle: 'AA, AAA, 9V, button cell, rechargeable',
    bin: 'hazardous',
    binLabel: '⚠️ Hazardous - Drop Off Only',
    steps: [
      'Tape terminals on 9V batteries',
      'Do NOT put in trash or recycling',
      'Take to Home Depot, Lowe\'s, or public library',
      'Fire risk in trucks and facilities'
    ],
    why: 'Batteries cause fires in recycling trucks. Tampa law requires proper disposal.',
    components: null
  },
  'glass jar': {
    name: 'Glass Jar',
    emoji: '🫙',
    subtitle: 'Pickles, pasta sauce, salsa jars',
    bin: 'recycle',
    binLabel: '♻️ Blue Bin (Curbside)',
    steps: [
      'Empty contents completely',
      'Rinse jar (remove food residue)',
      'Remove lid (recycle separately as metal)',
      'Labels can stay on',
      'Place in blue bin'
    ],
    why: 'Glass is infinitely recyclable. Clean glass keeps your blue bin from contaminating other recyclables.',
    components: [
      { name: 'Glass jar', bin: 'recycle', binLabel: '♻️ Blue Bin' },
      { name: 'Metal lid', bin: 'recycle', binLabel: '♻️ Blue Bin' }
    ]
  },
  'aluminum can': {
    name: 'Aluminum Can',
    emoji: '🥫',
    subtitle: 'Soda, beer, food cans',
    bin: 'recycle',
    binLabel: '♻️ Blue Bin (Curbside)',
    steps: [
      'Empty completely',
      'Rinse lightly (no heavy washing)',
      'Crush if desired (saves space)',
      'Place in blue bin'
    ],
    why: 'Aluminum is the most valuable recyclable - one can recycled saves enough energy to run TV for 3 hours.',
    components: null
  },
  'plastic #5 pp': {
    name: 'Plastic Container (#5 PP)',
    emoji: '🧴',
    subtitle: 'Yogurt tubs, margarine containers',
    bin: 'recycle',
    binLabel: '♻️ Blue Bin (Curbside)',
    steps: [
      'Empty contents',
      'Rinse and dry',
      'Labels can stay on',
      'Place in blue bin'
    ],
    why: 'Tampa accepts #5 PP as of March 2026 - previously not accepted. Check label for triangle number.',
    components: null
  },
  'cardboard box': {
    name: 'Cardboard Box',
    emoji: '📦',
    subtitle: 'Shipping boxes, packaging',
    bin: 'recycle',
    binLabel: '♻️ Blue Bin (Curbside)',
    steps: [
      'Remove all tape and labels',
      'Flatten box',
      'Keep dry',
      'Place in or beside blue bin',
      'No wet cardboard!'
    ],
    why: 'Flattened cardboard saves 60% more truck space. Wet cardboard clogs sorting machines.',
    components: null
  },
  'coffee cup': {
    name: 'Paper Coffee Cup',
    emoji: '☕',
    subtitle: 'Most to-go cups',
    bin: 'trash',
    binLabel: '🗑️ Trash (with exceptions)',
    steps: [
      'Standard paper cups: trash (plastic lining)',
      'Clean paper sleeve: recycle',
      'Plastic lid: recycle',
      'Sip lid: trash (too small)'
    ],
    why: 'Paper cups have polyethylene lining that recycling facilities cannot separate.',
    components: [
      { name: 'Cup body', bin: 'trash', binLabel: '🗑️ Trash' },
      { name: 'Paper sleeve', bin: 'recycle', binLabel: '♻️ Blue Bin' },
      { name: 'Plastic lid', bin: 'recycle', binLabel: '♻️ Blue Bin' }
    ]
  }
};

const BUSTER_MYTHS = [
  { q: 'Can I recycle coffee cups?', a: 'Most paper coffee cups have a plastic lining and are NOT recyclable in curbside. Compost if your city accepts, otherwise trash.' },
  { q: 'Can I recycle pizza boxes?', a: 'Only CLEAN cardboard! Greasy or food-soiled cardboard goes in compost or trash. Remove any plastic or metal parts first.' },
  { q: 'Can I recycle plastic bags?', a: 'Curbside programs DO NOT take plastic bags. They jam sorting machines. Return to grocery store drop-off bins.' },
  { q: 'Can I recycle broken glass?', a: 'Clean broken glass can be recycled if contained. Wrap in paper and label "broken glass" for safety.' },
  { q: 'Can I recycle batteries in curbside?', a: 'NEVER! Batteries cause fires in trucks. Take to Home Depot, Lowe\'s, or library drop-off.' }
];

// State
let currentLocation = 'Tampa, FL 33601';
let currentScreen = 'onboarding';
let impactLookups = 3;

// DOM Elements
const app = {
  onboarding: document.getElementById('screen-onboarding'),
  main: document.getElementById('screen-main'),
  impact: document.getElementById('screen-impact'),
  zipInput: document.getElementById('zip-input'),
  setLocationBtn: document.getElementById('btn-set-location'),
  useGpsBtn: document.getElementById('btn-use-gps'),
  searchInput: document.getElementById('search-input'),
  scanBtn: document.getElementById('btn-scan'),
  resultArea: document.getElementById('result-area'),
  recentList: document.getElementById('recent-list'),
  locationBadge: document.getElementById('location-badge'),
  impactBtn: document.getElementById('btn-impact'),
  closeImpactBtn: document.getElementById('btn-close-impact'),
  impactLookupsEl: document.getElementById('impact-lookups'),
  busterQuestion: document.getElementById('buster-question'),
  busterAnswer: document.getElementById('buster-answer'),
  nextBusterBtn: document.getElementById('btn-next-buster'),
  catPills: document.querySelectorAll('.cat-pill'),
  recentItems: document.querySelectorAll('.recent-item'),
  navBtns: document.querySelectorAll('.nav-btn')
};

let busterIndex = 0;

// Navigation
function showScreen(screenId) {
  Object.values(app).forEach(el => {
    if (el && el.classList.contains('screen')) {
      el.classList.remove('active');
    }
  });
  if (screenId === 'onboarding') {
    app.onboarding.classList.add('active');
  } else if (screenId === 'main') {
    app.main.classList.add('active');
  }
}

// Onboarding
app.setLocationBtn.addEventListener('click', () => {
  const zip = app.zipInput.value.trim();
  if (zip.length === 5) {
    showScreen('main');
  } else {
    app.zipInput.style.borderColor = 'var(--red-600)';
    setTimeout(() => {
      app.zipInput.style.borderColor = 'var(--green-100)';
    }, 2000);
  }
});

app.useGpsBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        app.zipInput.value = '33601';
        currentLocation = 'Tampa, FL 33601';
        showScreen('main');
      },
      (err) => {
        app.zipInput.value = '';
        app.zipInput.placeholder = 'Please enter manually';
      }
    );
  }
});

// Search
app.searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchItem(app.searchInput.value.trim());
  }
});

function searchItem(query) {
  const normalized = query.toLowerCase();
  let result = null;

  // Find exact or partial match
  for (const [key, value] of Object.entries(SAMPLE_RESULTS)) {
    if (key.includes(normalized) || normalized.includes(key)) {
      result = value;
      break;
    }
  }

  if (result) {
    showResult(result);
  } else {
    app.resultArea.innerHTML = `
      <div class="result-card">
        <div class="result-header">
          <span class="result-emoji">❓</span>
          <div>
            <div class="result-title">"${query}" not found</div>
            <div class="result-subtitle">Try: plastic bottle, pizza box, batteries, styrofoam</div>
          </div>
        </div>
      </div>
    `;
    app.resultArea.classList.remove('hidden');
  }
}

function showResult(item) {
  let html = `
    <div class="result-card">
      <div class="result-header">
        <span class="result-emoji">${item.emoji}</span>
        <div>
          <div class="result-title">${item.name}</div>
          <div class="result-subtitle">${item.subtitle}</div>
        </div>
      </div>
      <div class="result-bin bin-${item.bin}">
        <span class="bin-icon">${getBinIcon(item.bin)}</span>
        <span>${item.binLabel}</span>
      </div>
  `;

  if (item.steps) {
    html += `
      <div class="result-steps">
        <h4>How to Prepare</h4>
        <ol class="step-list">
          ${item.steps.map((step, i) => `
            <li><span class="step-num">${i + 1}</span>${step}</li>
          `).join('')}
        </ol>
      </div>
    `;
  }

  html += `
    <div class="result-why">
      <h4>Why</h4>
      <p>${item.why}</p>
    </div>
  `;

  if (item.components) {
    html += `
      <div class="result-components">
        <h4>Separate These Parts</h4>
        ${item.components.map(comp => `
          <div class="component-row">
            <span class="component-name">${comp.name}</span>
            <span class="component-bin cb-${comp.bin}">${comp.binLabel}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  html += '</div>';
  app.resultArea.innerHTML = html;
  app.resultArea.classList.remove('hidden');
}

function getBinIcon(bin) {
  const icons = {
    recycle: '♻️',
    compost: '🍂',
    trash: '🗑️',
    hazardous: '⚠️',
    special: '📍'
  };
  return icons[bin] || '♻️';
}

// Quick Categories
app.catPills.forEach(pill => {
  pill.addEventListener('click', () => {
    const query = pill.getAttribute('data-query');
    app.searchInput.value = query;
    searchItem(query);
    app.searchInput.focus();
  });
});

// Recent Items
app.recentItems.forEach(item => {
  item.addEventListener('click', () => {
    const query = item.getAttribute('data-query');
    app.searchInput.value = query;
    searchItem(query);
  });
});

// Impact Overlay
app.impactBtn.addEventListener('click', () => {
  app.impact.classList.add('active');
});

app.closeImpactBtn.addEventListener('click', () => {
  app.impact.classList.remove('active');
});

app.impact.addEventListener('click', (e) => {
  if (e.target === app.impact) {
    app.impact.classList.remove('active');
  }
});

// Confusion Buster
function showBuster() {
  const myth = BUSTER_MYTHS[busterIndex];
  app.busterQuestion.textContent = myth.q;
  app.busterAnswer.textContent = myth.a;
}

app.nextBusterBtn.addEventListener('click', () => {
  busterIndex = (busterIndex + 1) % BUSTER_MYTHS.length;
  showBuster();
});

// Bottom Nav
app.navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    app.navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Scan (placeholder)
app.scanBtn.addEventListener('click', () => {
  app.searchInput.placeholder = 'Scanning... (demo)';
  setTimeout(() => {
    app.searchInput.placeholder = 'Search any item... (pizza box, batteries, #5 plastic)';
    app.searchInput.focus();
  }, 1500);
});

// Initialize
showBuster();
