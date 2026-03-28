// ChoreScore — Fair Housework Distribution

// Chore data
const chores = [
  { emoji: '🍽️', name: 'Wash dishes', points: 8, cat: 'kitchen' },
  { emoji: '🍳', name: 'Cook dinner', points: 15, cat: 'kitchen' },
  { emoji: '🧹', name: 'Sweep kitchen', points: 6, cat: 'kitchen' },
  { emoji: '🧽', name: 'Wipe counters', points: 5, cat: 'kitchen' },
  { emoji: '🚿', name: 'Clean bathroom', points: 20, cat: 'bathroom' },
  { emoji: '🪥', name: 'Scrub toilet', points: 12, cat: 'bathroom' },
  { emoji: '🪞', name: 'Clean mirrors', points: 5, cat: 'bathroom' },
  { emoji: '🧺', name: 'Do laundry', points: 12, cat: 'general' },
  { emoji: '👕', name: 'Fold & put away', points: 10, cat: 'general' },
  { emoji: '🗑️', name: 'Take out trash', points: 5, cat: 'general' },
  { emoji: '♻️', name: 'Recycling', points: 4, cat: 'general' },
  { emoji: '🧹', name: 'Vacuum', points: 10, cat: 'living' },
  { emoji: '🧼', name: 'Mop floors', points: 12, cat: 'living' },
  { emoji: '🛋️', name: 'Tidy living room', points: 6, cat: 'living' },
  { emoji: '🛏️', name: 'Make bed', points: 3, cat: 'living' },
  { emoji: '📋', name: 'Meal planning', points: 10, cat: 'mental' },
  { emoji: '🛒', name: 'Grocery shopping', points: 15, cat: 'general' },
  { emoji: '📝', name: 'Grocery list', points: 6, cat: 'mental' },
  { emoji: '📅', name: 'Schedule repair', points: 8, cat: 'mental' },
  { emoji: '💡', name: 'Notice supplies low', points: 4, cat: 'mental' },
  { emoji: '📦', name: 'Order household items', points: 6, cat: 'mental' },
  { emoji: '🐕', name: 'Walk the dog', points: 8, cat: 'general' },
  { emoji: '🌿', name: 'Water plants', points: 3, cat: 'living' },
  { emoji: '🪟', name: 'Clean windows', points: 10, cat: 'living' },
];

// History data
const historyData = [
  { who: 'alex', task: 'Clean bathroom', points: 20, time: 'Today, 8:15 AM', emoji: '🚿' },
  { who: 'jordan', task: 'Cook dinner', points: 15, time: 'Yesterday, 7:30 PM', emoji: '🍳' },
  { who: 'alex', task: 'Meal planning', points: 10, time: 'Yesterday, 6:00 PM', emoji: '📋' },
  { who: 'alex', task: 'Vacuum', points: 10, time: 'Yesterday, 3:00 PM', emoji: '🧹' },
  { who: 'jordan', task: 'Wash dishes', points: 8, time: 'Yesterday, 9:15 PM', emoji: '🍽️' },
  { who: 'alex', task: 'Take out trash', points: 5, time: 'Yesterday, 8:00 AM', emoji: '🗑️' },
  { who: 'jordan', task: 'Do laundry', points: 12, time: 'Wed, 4:30 PM', emoji: '🧺' },
  { who: 'alex', task: 'Cook dinner', points: 15, time: 'Wed, 7:00 PM', emoji: '🍳' },
  { who: 'alex', task: 'Grocery list', points: 6, time: 'Wed, 10:00 AM', emoji: '📝' },
  { who: 'jordan', task: 'Tidy living room', points: 6, time: 'Tue, 6:00 PM', emoji: '🛋️' },
  { who: 'alex', task: 'Wipe counters', points: 5, time: 'Tue, 9:00 PM', emoji: '🧽' },
  { who: 'jordan', task: 'Walk the dog', points: 8, time: 'Tue, 7:00 AM', emoji: '🐕' },
  { who: 'alex', task: 'Wash dishes', points: 8, time: 'Mon, 9:30 PM', emoji: '🍽️' },
  { who: 'jordan', task: 'Cook dinner', points: 15, time: 'Mon, 7:15 PM', emoji: '🍳' },
  { who: 'alex', task: 'Notice supplies low', points: 4, time: 'Mon, 2:00 PM', emoji: '💡' },
];

// State
let activeTab = 'dashboard';
let activeWho = 'alex';
let activeCat = 'all';
let activeFilter = 'all';

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    document.getElementById(target).classList.add('active');
    activeTab = target;
  });
});

// Who selection
document.querySelectorAll('.who-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.who-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeWho = btn.dataset.who;
  });
});

// Category filter
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCat = btn.dataset.cat;
    renderChores();
  });
});

// History filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderHistory();
  });
});

// Render chores
function renderChores() {
  const grid = document.getElementById('choreGrid');
  const filtered = activeCat === 'all' ? chores : chores.filter(c => c.cat === activeCat);

  grid.innerHTML = filtered.map(chore => `
    <div class="chore-tile ${chore.cat === 'mental' ? 'mental' : ''}" data-name="${chore.name}" data-points="${chore.points}">
      <span class="chore-emoji">${chore.emoji}</span>
      <span class="chore-name">${chore.name}</span>
      <span class="chore-points">${chore.points} pts</span>
    </div>
  `).join('');

  // Add click handlers
  grid.querySelectorAll('.chore-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      const name = tile.dataset.name;
      const points = tile.dataset.points;
      showToast(`${name} logged for ${activeWho === 'alex' ? 'Alex' : 'Jordan'} (+${points} pts)`);

      // Quick animation
      tile.style.background = activeWho === 'alex' ? 'var(--alex-light)' : 'var(--jordan-light)';
      setTimeout(() => { tile.style.background = ''; }, 400);
    });
  });
}

// Render history
function renderHistory() {
  const list = document.getElementById('historyList');
  const filtered = activeFilter === 'all'
    ? historyData
    : historyData.filter(h => h.who === activeFilter);

  list.innerHTML = filtered.map(item => `
    <div class="history-item">
      <div class="history-dot ${item.who}"></div>
      <div class="history-info">
        <div class="history-task">${item.emoji} ${item.task}</div>
        <div class="history-meta">${item.who === 'alex' ? 'Alex' : 'Jordan'} · ${item.time}</div>
      </div>
      <div class="history-pts">+${item.points}</div>
    </div>
  `).join('');
}

// Toast
function showToast(text) {
  const toast = document.getElementById('logToast');
  toast.querySelector('.toast-text').textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// Init
renderChores();
renderHistory();
