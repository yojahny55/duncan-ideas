/* === Bleed — Prototype Logic === */

// Sample subscription data
const sampleSubs = [
  { id: 1, name: 'ChatGPT Plus', category: 'ai', cost: 20, cycle: 'monthly', icon: '🤖', dormant: false, lastUsed: '2 days ago' },
  { id: 2, name: 'Claude Pro', category: 'ai', cost: 20, cycle: 'monthly', icon: '🧠', dormant: false, lastUsed: '1 day ago' },
  { id: 3, name: 'Gemini Advanced', category: 'ai', cost: 19.99, cycle: 'monthly', icon: '✨', dormant: false, lastUsed: '4 days ago' },
  { id: 4, name: 'Midjourney', category: 'ai', cost: 30, cycle: 'monthly', icon: '🎨', dormant: false, lastUsed: '12 days ago' },
  { id: 5, name: 'Runway', category: 'ai', cost: 15, cycle: 'monthly', icon: '🎬', dormant: false, lastUsed: '8 days ago' },
  { id: 6, name: 'Cursor Pro', category: 'ai', cost: 20, cycle: 'monthly', icon: '⌨️', dormant: false, lastUsed: 'today' },
  { id: 7, name: 'Perplexity', category: 'ai', cost: 20, cycle: 'monthly', icon: '🔍', dormant: true, lastUsed: '67 days ago' },
  { id: 8, name: 'Netflix', category: 'streaming', cost: 17.99, cycle: 'monthly', icon: '📺', dormant: false, lastUsed: '3 days ago' },
  { id: 9, name: 'Disney+', category: 'streaming', cost: 13.99, cycle: 'monthly', icon: '🏰', dormant: true, lastUsed: '94 days ago' },
  { id: 10, name: 'Max', category: 'streaming', cost: 15.99, cycle: 'monthly', icon: '🎬', dormant: false, lastUsed: '8 days ago' },
  { id: 11, name: 'Spotify Family', category: 'streaming', cost: 16.99, cycle: 'monthly', icon: '🎵', dormant: false, lastUsed: 'today' },
  { id: 12, name: 'Notion Plus', category: 'productivity', cost: 10, cycle: 'monthly', icon: '📝', dormant: false, lastUsed: 'today' },
  { id: 13, name: 'Adobe Creative Cloud', category: 'productivity', cost: 59.99, cycle: 'monthly', icon: '🎨', dormant: true, lastUsed: '45 days ago' },
  { id: 14, name: 'iCloud+ 2TB', category: 'productivity', cost: 9.99, cycle: 'monthly', icon: '☁️', dormant: false, lastUsed: 'today' },
  { id: 15, name: 'The New York Times', category: 'news', cost: 17, cycle: 'monthly', icon: '📰', dormant: false, lastUsed: '5 days ago' },
  { id: 16, name: 'Strava Premium', category: 'fitness', cost: 11.99, cycle: 'monthly', icon: '🏃', dormant: true, lastUsed: '38 days ago' },
];

// AI Credit data
const aiCredits = [
  { provider: 'OpenAI', name: 'GPT-4 credits', remaining: 42, total: 100, unit: '%', expiry: '12 days', burnRate: '$24/mo', wasted: 0 },
  { provider: 'Anthropic', name: 'Claude priority', remaining: 78, total: 100, unit: '%', expiry: '8 days', burnRate: '$20/mo', wasted: 0 },
  { provider: 'Midjourney', name: 'Fast GPU hours', remaining: 12, total: 20, unit: 'hrs', expiry: '3 days', burnRate: '$30/mo', wasted: 8.40, urgent: true },
  { provider: 'Runway', name: 'Gen-3 credits', remaining: 0, total: 500, unit: 'credits', expiry: 'Expired', burnRate: '$15/mo', wasted: 15.00, urgent: true },
  { provider: 'Gemini', name: 'Advanced quota', remaining: 64, total: 100, unit: '%', expiry: '18 days', burnRate: '$20/mo', wasted: 0 },
  { provider: 'Together AI', name: 'API credits', remaining: 88, total: 100, unit: '%', expiry: '24 days', burnRate: '$14/mo', wasted: 0 },
  { provider: 'Replicate', name: 'Compute credits', remaining: 5, total: 100, unit: '%', expiry: '6 days', burnRate: '$9/mo', wasted: 0, low: true },
];

const dormantSubs = sampleSubs.filter(s => s.dormant);

// ===========================================

function fmt(n) {
  return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function fmtShort(n) {
  return '$' + n.toFixed(0);
}

// === Render Dashboard ===
function renderDashboard() {
  const totalMonthly = sampleSubs.reduce((sum, s) => sum + s.cost, 0);
  document.getElementById('totalMonthly').textContent = fmt(totalMonthly);
  document.getElementById('subCount').textContent = sampleSubs.length;

  const dormant = sampleSubs.filter(s => s.dormant);
  const dormantCost = dormant.reduce((sum, s) => sum + s.cost, 0);
  document.getElementById('dormantCost').textContent = fmt(dormantCost);

  const creditsAtRisk = aiCredits
    .filter(c => c.wasted > 0 || c.urgent || c.low)
    .reduce((sum, c) => sum + (c.wasted || 0), 0)
    + aiCredits.filter(c => c.urgent && !c.wasted).reduce((sum, c) => sum + parseFloat(c.burnRate.replace(/\D/g, '')) / 4, 0);
  document.getElementById('creditsAtRisk').textContent = fmt(creditsAtRisk);

  // AI Credits
  const grid = document.getElementById('creditsGrid');
  grid.innerHTML = aiCredits.map(c => {
    const pct = c.total > 0 ? (c.remaining / c.total) * 100 : 0;
    let cls = 'ok';
    if (pct < 15 || c.urgent) cls = 'low';
    else if (pct < 35) cls = 'mid';
    return `
      <div class="credit-card ${c.urgent ? 'expiring' : ''}">
        <div class="credit-card-head">
          <div class="credit-name">
            ${c.provider}
            <span class="provider">${c.name}</span>
          </div>
        </div>
        <div class="credit-bar">
          <div class="credit-bar-fill ${cls}" style="width: ${pct}%"></div>
        </div>
        <div class="credit-meta">
          <span><strong>${c.remaining}${c.unit === '%' ? '%' : ' ' + c.unit}</strong> left</span>
          <span>${c.burnRate}/mo</span>
        </div>
        ${c.wasted > 0 ? `<div class="credit-warn">💸 ${fmt(c.wasted)} wasted last cycle</div>` : ''}
        ${c.urgent && c.wasted === 0 ? `<div class="credit-warn">⚠️ Expires in ${c.expiry}</div>` : ''}
      </div>
    `;
  }).join('');

  // Dormant list
  const dormantList = document.getElementById('dormantList');
  dormantList.innerHTML = dormant.map(s => `
    <div class="dormant-item">
      <span class="dormant-icon">${s.icon}</span>
      <div class="dormant-info">
        <strong>${s.name}</strong>
        <span>Last used ${s.lastUsed}</span>
      </div>
      <div class="dormant-cost">
        <strong>${fmt(s.cost)}</strong>
        <span>/mo · ${fmt(s.cost * 12)}/yr</span>
      </div>
      <button class="btn-cancel" onclick="quickCancel(${s.id})">Cancel</button>
    </div>
  `).join('');

  // Renewals (random subset for demo)
  const renewals = [
    { name: 'Runway', cost: 15, when: 'tomorrow', urgent: true },
    { name: 'Midjourney', cost: 30, when: 'in 3 days', soon: true },
    { name: 'Netflix', cost: 17.99, when: 'in 5 days', soon: true },
    { name: 'Claude Pro', cost: 20, when: 'in 6 days', soon: true },
  ];
  document.getElementById('renewals').innerHTML = renewals.map(r => `
    <div class="renewal-item ${r.urgent ? 'urgent' : r.soon ? 'soon' : ''}">
      <span><strong>${r.name}</strong> <span class="renewal-when">— ${r.when}</span></span>
      <span class="renewal-cost"><strong>${fmt(r.cost)}</strong></span>
    </div>
  `).join('');
}

// === Render Subscriptions ===
let activeFilter = 'all';

function renderSubs() {
  const list = document.getElementById('subsList');
  const filtered = activeFilter === 'all'
    ? sampleSubs
    : sampleSubs.filter(s => s.category === activeFilter);

  list.innerHTML = filtered.map(s => `
    <div class="sub-card ${s.dormant ? 'dormant' : ''}">
      <div class="sub-icon" style="background: ${categoryColor(s.category)}">${s.icon}</div>
      <div class="sub-info">
        <strong>${s.name}</strong>
        <div class="meta">
          ${s.cycle === 'annual' ? 'Annual' : 'Monthly'} ·
          Last used ${s.lastUsed}
          ${s.dormant ? '<span class="tag">⚠️ Dormant</span>' : ''}
        </div>
      </div>
      <div class="sub-cost">
        <strong>${fmt(s.cost)}</strong>
        <div class="cycle">/${s.cycle === 'annual' ? 'yr' : 'mo'}</div>
      </div>
    </div>
  `).join('');
}

function categoryColor(cat) {
  return {
    ai: 'rgba(139, 92, 246, 0.15)',
    streaming: 'rgba(236, 72, 153, 0.15)',
    productivity: 'rgba(59, 130, 246, 0.15)',
    news: 'rgba(245, 158, 11, 0.15)',
    fitness: 'rgba(46, 213, 115, 0.15)',
  }[cat] || 'rgba(100, 116, 139, 0.15)';
}

// === Cancel Challenge ===
function renderCancel() {
  const targetSaved = 50;
  document.getElementById('challengeSaved').textContent = fmt(targetSaved);
  document.getElementById('challengeCount').textContent = `1 of 3`;

  const candidates = document.getElementById('cancelCandidates');
  candidates.innerHTML = dormantSubs.map(s => `
    <div class="candidate">
      <span class="candidate-icon">${s.icon}</span>
      <div class="candidate-info">
        <strong>${s.name}</strong>
        <span class="candidate-reason">⚠️ Last used ${s.lastUsed}</span>
      </div>
      <div class="candidate-savings">
        <strong>${fmt(s.cost * 12)}</strong>
        <span>/yr saved</span>
      </div>
      <button class="btn-primary" onclick="markCanceled(${s.id})">Mark Canceled</button>
    </div>
  `).join('');
}

function markCanceled(id) {
  const sub = sampleSubs.find(s => s.id === id);
  if (sub) {
    sub.dormant = false;
    sub.cost = 0;
    renderSubs();
    renderDashboard();
    renderCancel();
  }
}

function quickCancel(id) {
  markCanceled(id);
}

// === Trends Chart ===
function renderTrends() {
  const canvas = document.getElementById('trendChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const ai = [80, 92, 105, 110, 118, 125, 132, 140, 145, 148, 155, 162];
  const streaming = [42, 44, 48, 48, 50, 52, 52, 56, 60, 62, 62, 64];
  const other = [35, 36, 38, 41, 42, 45, 46, 48, 50, 52, 54, 55];

  const max = Math.max(...ai, ...streaming, ...other) * 1.1;
  const barW = 50;
  const gap = 14;
  const startX = 60;
  const baseY = h - 40;

  // Y axis labels
  ctx.fillStyle = '#8892a8';
  ctx.font = '11px sans-serif';
  for (let i = 0; i <= 4; i++) {
    const y = baseY - (i * (baseY - 30) / 4);
    const val = Math.round(max * i / 4);
    ctx.fillText('$' + val, 8, y + 4);
    // gridline
    ctx.strokeStyle = '#252b3d';
    ctx.beginPath();
    ctx.moveTo(40, y);
    ctx.lineTo(w - 10, y);
    ctx.stroke();
  }

  // Bars
  months.forEach((m, i) => {
    const x = startX + i * (barW + gap);
    const drawStack = (vals, colors) => {
      let y = baseY;
      vals.forEach(([val, color]) => {
        const barH = (val / max) * (baseY - 30);
        ctx.fillStyle = color;
        ctx.fillRect(x, y - barH, barW, barH);
        y -= barH;
      });
    };

    drawStack(i, [
      [other[i], '#64748b'],
      [streaming[i], '#ec4899'],
      [ai[i], '#8b5cf6'],
    ]);

    // Month label
    ctx.fillStyle = '#8892a8';
    ctx.textAlign = 'center';
    ctx.fillText(m, x + barW / 2, baseY + 18);
  });
}

// === Tabs ===
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    tab.classList.add('active');
    const view = document.getElementById('view-' + tab.dataset.view);
    view.classList.add('active');
    if (tab.dataset.view === 'trends') renderTrends();
  });
});

// === Filters ===
document.querySelectorAll('.filter').forEach(f => {
  f.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
    f.classList.add('active');
    activeFilter = f.dataset.filter;
    renderSubs();
  });
});

// === Add Modal ===
function openAddModal() {
  document.getElementById('addModal').classList.add('active');
}

function closeAddModal() {
  document.getElementById('addModal').classList.remove('active');
}

function addSubscription() {
  const name = document.getElementById('newName').value.trim();
  const category = document.getElementById('newCategory').value;
  const cost = parseFloat(document.getElementById('newCost').value);
  const cycle = document.getElementById('newCycle').value;

  if (!name || !cost) return;

  sampleSubs.push({
    id: Date.now(),
    name,
    category,
    cost,
    cycle,
    icon: '📦',
    dormant: false,
    lastUsed: 'just added',
  });

  document.getElementById('newName').value = '';
  document.getElementById('newCost').value = '';

  closeAddModal();
  renderSubs();
  renderDashboard();
}

// Init
renderDashboard();
renderSubs();
renderCancel();
