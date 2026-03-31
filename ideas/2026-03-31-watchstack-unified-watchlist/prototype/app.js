// WatchStack — App Logic

const PLATFORMS = {
  netflix: { name: 'Netflix', color: '#e50914' },
  hulu: { name: 'Hulu', color: '#1ce783' },
  disney: { name: 'Disney+', color: '#113ccf' },
  hbo: { name: 'HBO Max', color: '#b829e3' },
  prime: { name: 'Prime Video', color: '#00a8e1' },
  apple: { name: 'Apple TV+', color: '#a3aaae' }
};

const POSTERS = ['🎬', '📺', '🎥', '🍿', '🎭', '🎪', '🌟', '🔮', '⚡', '🌊', '🚀', '🗡️', '👽', '🦇', '🐉'];

let stack = [
  { id: 1, title: 'Severance', type: 'show', platform: 'apple', mood: 'thriller', runtime: 50, poster: '🧠', expiring: null, recommendedBy: null, partnerRank: 2 },
  { id: 2, title: 'The Brutalist', type: 'movie', platform: 'prime', mood: 'drama', runtime: 215, poster: '🏛️', expiring: null, recommendedBy: 'Alex', partnerRank: 5 },
  { id: 3, title: 'Dune: Part Two', type: 'movie', platform: 'hbo', mood: 'scifi', runtime: 166, poster: '🏜️', expiring: '4 days', recommendedBy: null, partnerRank: 1 },
  { id: 4, title: 'Shogun', type: 'show', platform: 'hulu', mood: 'drama', runtime: 62, poster: '⚔️', expiring: null, recommendedBy: 'Maya', partnerRank: 3 },
  { id: 5, title: 'Fallout', type: 'show', platform: 'prime', mood: 'scifi', runtime: 55, poster: '☢️', expiring: null, recommendedBy: null, partnerRank: 8 },
  { id: 6, title: 'Civil War', type: 'movie', platform: 'netflix', mood: 'action', runtime: 109, poster: '📸', expiring: '7 days', recommendedBy: null, partnerRank: 4 },
  { id: 7, title: 'Baby Reindeer', type: 'show', platform: 'netflix', mood: 'thriller', runtime: 30, poster: '🦌', expiring: null, recommendedBy: 'Sam', partnerRank: 6 },
  { id: 8, title: 'The Bear S3', type: 'show', platform: 'hulu', mood: 'drama', runtime: 35, poster: '🐻', expiring: null, recommendedBy: null, partnerRank: 7 },
  { id: 9, title: 'Alien: Romulus', type: 'movie', platform: 'hulu', mood: 'horror', runtime: 119, poster: '👽', expiring: '12 days', recommendedBy: null, partnerRank: 10 },
  { id: 10, title: 'Hit Man', type: 'movie', platform: 'netflix', mood: 'comedy', runtime: 113, poster: '🎯', expiring: null, recommendedBy: 'Chris', partnerRank: 9 },
  { id: 11, title: 'Ripley', type: 'show', platform: 'netflix', mood: 'thriller', runtime: 58, poster: '🖤', expiring: null, recommendedBy: null, partnerRank: 14 },
  { id: 12, title: 'The Gentlemen', type: 'show', platform: 'netflix', mood: 'comedy', runtime: 52, poster: '🎩', expiring: null, recommendedBy: null, partnerRank: 11 },
  { id: 13, title: 'Challengers', type: 'movie', platform: 'prime', mood: 'drama', runtime: 131, poster: '🎾', expiring: '3 days', recommendedBy: 'Taylor', partnerRank: 12 },
  { id: 14, title: 'Inside Out 2', type: 'movie', platform: 'disney', mood: 'comedy', runtime: 96, poster: '😊', expiring: null, recommendedBy: null, partnerRank: 13 },
  { id: 15, title: 'House of the Dragon S2', type: 'show', platform: 'hbo', mood: 'drama', runtime: 65, poster: '🐉', expiring: null, recommendedBy: null, partnerRank: 15 }
];

const searchCatalog = [
  { title: 'Oppenheimer', type: 'movie', platform: 'prime', mood: 'drama', runtime: 180, poster: '💣' },
  { title: 'Poor Things', type: 'movie', platform: 'hulu', mood: 'comedy', runtime: 141, poster: '🧪' },
  { title: 'The Last of Us S2', type: 'show', platform: 'hbo', mood: 'thriller', runtime: 55, poster: '🍄' },
  { title: 'Beef', type: 'show', platform: 'netflix', mood: 'drama', runtime: 35, poster: '🥩' },
  { title: 'Killers of the Flower Moon', type: 'movie', platform: 'apple', mood: 'thriller', runtime: 206, poster: '🌸' },
  { title: 'Past Lives', type: 'movie', platform: 'prime', mood: 'romance', runtime: 106, poster: '💫' },
  { title: 'Ahsoka', type: 'show', platform: 'disney', mood: 'scifi', runtime: 44, poster: '⚡' },
  { title: 'The Morning Show S3', type: 'show', platform: 'apple', mood: 'drama', runtime: 60, poster: '☀️' },
  { title: 'Bottoms', type: 'movie', platform: 'prime', mood: 'comedy', runtime: 91, poster: '🤜' },
  { title: 'Monarch: Legacy', type: 'show', platform: 'apple', mood: 'scifi', runtime: 50, poster: '🦎' }
];

let activeFilter = 'all';
let activePlatform = 'all';
let activeMood = 'all';
let activeTime = 'all';
let dragItem = null;

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderStack();
  updateQuickPick();
  setupEventListeners();
  setTimeout(showExpiringToast, 2000);
});

function setupEventListeners() {
  // Filter chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      renderStack();
    });
  });

  // Select filters
  document.getElementById('platformFilter').addEventListener('change', e => {
    activePlatform = e.target.value;
    renderStack();
  });
  document.getElementById('moodFilter').addEventListener('change', e => {
    activeMood = e.target.value;
    renderStack();
  });
  document.getElementById('timeFilter').addEventListener('change', e => {
    activeTime = e.target.value;
    renderStack();
  });

  // Modals
  document.getElementById('coupleToggle').addEventListener('click', () => showModal('coupleModal'));
  document.getElementById('coupleClose').addEventListener('click', () => hideModal('coupleModal'));
  document.getElementById('statsToggle').addEventListener('click', () => showModal('statsModal'));
  document.getElementById('statsClose').addEventListener('click', () => hideModal('statsModal'));
  document.getElementById('addBtn').addEventListener('click', () => showModal('addModal'));
  document.getElementById('addClose').addEventListener('click', () => hideModal('addModal'));

  // Search
  document.getElementById('searchInput').addEventListener('input', handleSearch);

  // Toast dismiss
  document.getElementById('toastDismiss').addEventListener('click', () => {
    document.getElementById('expiringToast').classList.remove('show');
  });

  // Modal overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.classList.remove('show');
    });
  });

  // Bottom nav
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function getFilteredStack() {
  return stack.filter(item => {
    if (activeFilter === 'movie' && item.type !== 'movie') return false;
    if (activeFilter === 'show' && item.type !== 'show') return false;
    if (activeFilter === 'expiring' && !item.expiring) return false;
    if (activePlatform !== 'all' && item.platform !== activePlatform) return false;
    if (activeMood !== 'all' && item.mood !== activeMood) return false;
    if (activeTime !== 'all') {
      if (activeTime === 'short' && item.runtime >= 30) return false;
      if (activeTime === 'medium' && (item.runtime < 30 || item.runtime > 60)) return false;
      if (activeTime === 'long' && (item.runtime < 60 || item.runtime > 120)) return false;
      if (activeTime === 'epic' && item.runtime <= 120) return false;
    }
    return true;
  });
}

function renderStack() {
  const list = document.getElementById('stackList');
  const filtered = getFilteredStack();
  document.getElementById('stackCount').textContent = `(${filtered.length} of ${stack.length})`;

  list.innerHTML = filtered.map((item, i) => {
    const globalRank = stack.indexOf(item) + 1;
    const isTop3 = globalRank <= 3;
    const runtimeStr = item.runtime >= 60
      ? `${Math.floor(item.runtime / 60)}h ${item.runtime % 60}m`
      : `${item.runtime}m`;

    return `
      <li class="stack-item" draggable="true" data-id="${item.id}">
        <div class="stack-rank ${isTop3 ? 'top-3' : ''}">#${globalRank}</div>
        <div class="stack-poster">${item.poster}</div>
        <div class="stack-info">
          <div class="stack-title">${item.title}</div>
          <div class="stack-meta">
            <span class="platform-dot ${item.platform}"></span>
            ${PLATFORMS[item.platform].name} · ${runtimeStr}
            ${item.expiring ? `<span class="expiring-badge">⏰ ${item.expiring}</span>` : ''}
          </div>
          ${item.recommendedBy ? `<div class="recommended-by">💬 Rec'd by ${item.recommendedBy}</div>` : ''}
        </div>
        <div class="stack-actions">
          <button onclick="moveUp(${item.id})" title="Move up">⬆️</button>
          <button onclick="moveDown(${item.id})" title="Move down">⬇️</button>
          <button onclick="markWatched(${item.id})" title="Mark watched">✅</button>
        </div>
      </li>
    `;
  }).join('');

  // Drag and drop
  list.querySelectorAll('.stack-item').forEach(el => {
    el.addEventListener('dragstart', handleDragStart);
    el.addEventListener('dragover', handleDragOver);
    el.addEventListener('dragleave', handleDragLeave);
    el.addEventListener('drop', handleDrop);
    el.addEventListener('dragend', handleDragEnd);
  });
}

function handleDragStart(e) {
  dragItem = e.currentTarget;
  e.currentTarget.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}
function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}
function handleDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}
function handleDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  if (dragItem && dragItem !== e.currentTarget) {
    const fromId = parseInt(dragItem.dataset.id);
    const toId = parseInt(e.currentTarget.dataset.id);
    const fromIdx = stack.findIndex(i => i.id === fromId);
    const toIdx = stack.findIndex(i => i.id === toId);
    const [moved] = stack.splice(fromIdx, 1);
    stack.splice(toIdx, 0, moved);
    renderStack();
    updateQuickPick();
  }
}
function handleDragEnd(e) {
  e.currentTarget.classList.remove('dragging');
  dragItem = null;
}

function moveUp(id) {
  const idx = stack.findIndex(i => i.id === id);
  if (idx > 0) {
    [stack[idx - 1], stack[idx]] = [stack[idx], stack[idx - 1]];
    renderStack();
    updateQuickPick();
  }
}

function moveDown(id) {
  const idx = stack.findIndex(i => i.id === id);
  if (idx < stack.length - 1) {
    [stack[idx], stack[idx + 1]] = [stack[idx + 1], stack[idx]];
    renderStack();
    updateQuickPick();
  }
}

function markWatched(id) {
  const item = stack.find(i => i.id === id);
  if (item) {
    const el = document.querySelector(`[data-id="${id}"]`);
    el.style.transform = 'translateX(100%)';
    el.style.opacity = '0';
    setTimeout(() => {
      stack = stack.filter(i => i.id !== id);
      renderStack();
      updateQuickPick();
    }, 300);
  }
}

function updateQuickPick() {
  if (stack.length === 0) {
    document.getElementById('quickPickTitle').textContent = 'Stack empty!';
    document.getElementById('quickPickMeta').textContent = 'Add something to watch';
    return;
  }
  const top = stack[0];
  const runtimeStr = top.runtime >= 60
    ? `${Math.floor(top.runtime / 60)}h ${top.runtime % 60}m`
    : `${top.runtime}m`;
  document.getElementById('quickPickTitle').textContent = `${top.poster} ${top.title}`;
  document.getElementById('quickPickMeta').textContent = `${PLATFORMS[top.platform].name} · ${runtimeStr} · ${top.mood}`;
}

function showModal(id) {
  if (id === 'coupleModal') renderCoupleOverlap();
  if (id === 'statsModal') renderStats();
  document.getElementById(id).classList.add('show');
}

function hideModal(id) {
  document.getElementById(id).classList.remove('show');
}

function renderCoupleOverlap() {
  const overlap = [...stack]
    .map(item => ({
      ...item,
      combinedScore: (stack.indexOf(item) + 1) + item.partnerRank,
    }))
    .sort((a, b) => a.combinedScore - b.combinedScore)
    .slice(0, 8);

  document.getElementById('coupleBody').innerHTML = `
    <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 16px;">
      Titles you both want to watch, ranked by combined interest:
    </p>
    ${overlap.map(item => {
      const myRank = stack.indexOf(item) + 1;
      return `
        <div class="overlap-item">
          <div class="stack-poster">${item.poster}</div>
          <div class="overlap-info">
            <div class="overlap-title">${item.title}</div>
            <div class="overlap-ranks">You: #${myRank} · Partner: #${item.partnerRank}</div>
          </div>
          <div class="overlap-score">Match ${Math.max(100 - item.combinedScore * 3, 40)}%</div>
        </div>
      `;
    }).join('')}
  `;
}

function renderStats() {
  const platformCounts = {};
  stack.forEach(item => {
    platformCounts[item.platform] = (platformCounts[item.platform] || 0) + 1;
  });

  const totalRuntime = stack.reduce((sum, i) => sum + i.runtime, 0);
  const movies = stack.filter(i => i.type === 'movie').length;
  const shows = stack.filter(i => i.type === 'show').length;
  const expiring = stack.filter(i => i.expiring).length;

  const platformStats = Object.entries(platformCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([p, count]) => {
      const pct = (count / stack.length * 100).toFixed(0);
      return `
        <div class="stat-row">
          <div class="stat-label"><span class="platform-dot ${p}"></span> ${PLATFORMS[p].name}</div>
          <div class="stat-value">${count} titles</div>
        </div>
        <div class="stat-bar-bg">
          <div class="stat-bar" style="width: ${pct}%; background: ${PLATFORMS[p].color};"></div>
        </div>
      `;
    }).join('');

  // Simulated cost analysis
  const costData = [
    { platform: 'netflix', cost: 15.49, hours: 12 },
    { platform: 'hulu', cost: 17.99, hours: 8 },
    { platform: 'hbo', cost: 15.99, hours: 6 },
    { platform: 'prime', cost: 14.99, hours: 10 },
    { platform: 'disney', cost: 13.99, hours: 3 },
    { platform: 'apple', cost: 9.99, hours: 5 },
  ];

  const costRows = costData.map(d => {
    const cph = (d.cost / d.hours).toFixed(2);
    const isGood = d.hours >= 8;
    return `
      <div class="stat-row">
        <div class="stat-label"><span class="platform-dot ${d.platform}"></span> ${PLATFORMS[d.platform].name}</div>
        <div class="stat-value" style="color: ${isGood ? 'var(--success)' : 'var(--warning)'}">$${cph}/hr</div>
      </div>
    `;
  }).join('');

  document.getElementById('statsBody').innerHTML = `
    <div class="stat-card" style="text-align: center;">
      <div class="stat-big">${stack.length}</div>
      <div class="stat-big-label">items in your stack</div>
      <div style="display: flex; justify-content: center; gap: 24px; margin-top: 12px;">
        <div><span style="font-weight: 700;">${movies}</span> <span style="color: var(--text-secondary); font-size: 0.8rem;">movies</span></div>
        <div><span style="font-weight: 700;">${shows}</span> <span style="color: var(--text-secondary); font-size: 0.8rem;">shows</span></div>
        <div><span style="font-weight: 700; color: var(--warning);">${expiring}</span> <span style="color: var(--text-secondary); font-size: 0.8rem;">expiring</span></div>
      </div>
    </div>
    <div class="stat-card">
      <h3>⏱️ Total Watch Time in Stack</h3>
      <div class="stat-big">${Math.floor(totalRuntime / 60)}h ${totalRuntime % 60}m</div>
      <div class="stat-big-label">to clear your entire stack</div>
    </div>
    <div class="stat-card">
      <h3>📡 By Platform</h3>
      ${platformStats}
    </div>
    <div class="stat-card">
      <h3>💸 Cost Per Hour (This Month)</h3>
      ${costRows}
      <div style="margin-top: 12px; font-size: 0.75rem; color: var(--text-muted);">
        Based on subscription cost ÷ hours watched. Lower = better ROI.
      </div>
    </div>
  `;
}

function handleSearch(e) {
  const q = e.target.value.toLowerCase().trim();
  const results = document.getElementById('searchResults');

  if (q.length < 2) {
    results.innerHTML = '';
    return;
  }

  const matches = searchCatalog.filter(item =>
    item.title.toLowerCase().includes(q) &&
    !stack.find(s => s.title === item.title)
  );

  results.innerHTML = matches.map(item => {
    const runtimeStr = item.runtime >= 60
      ? `${Math.floor(item.runtime / 60)}h ${item.runtime % 60}m`
      : `${item.runtime}m`;
    return `
      <div class="search-result">
        <div class="search-result-poster">${item.poster}</div>
        <div class="search-result-info">
          <div class="search-result-title">${item.title}</div>
          <div class="search-result-meta">${item.type === 'movie' ? '🎬' : '📺'} ${PLATFORMS[item.platform].name} · ${runtimeStr}</div>
        </div>
        <button class="search-result-add" onclick="addToStack('${item.title}')">+ Add</button>
      </div>
    `;
  }).join('') || '<p style="color: var(--text-muted); padding: 16px; text-align: center;">No results found</p>';
}

function addToStack(title) {
  const item = searchCatalog.find(i => i.title === title);
  if (item && !stack.find(s => s.title === title)) {
    stack.push({
      ...item,
      id: Date.now(),
      expiring: null,
      recommendedBy: null,
      partnerRank: Math.floor(Math.random() * 15) + 5
    });
    renderStack();
    updateQuickPick();
    hideModal('addModal');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
  }
}

function showExpiringToast() {
  const expiring = stack.filter(i => i.expiring);
  if (expiring.length > 0) {
    const soon = expiring.sort((a, b) => parseInt(a.expiring) - parseInt(b.expiring))[0];
    document.getElementById('toastText').textContent =
      `${soon.title} leaves ${PLATFORMS[soon.platform].name} in ${soon.expiring}!`;
    document.getElementById('expiringToast').classList.add('show');
    setTimeout(() => {
      document.getElementById('expiringToast').classList.remove('show');
    }, 6000);
  }
}
