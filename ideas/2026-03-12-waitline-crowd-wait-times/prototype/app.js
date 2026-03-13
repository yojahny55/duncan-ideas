// =============================================
// WaitLine — Interactive Prototype
// =============================================

const venues = [
  {
    id: 1, name: "Publix Pharmacy", cat: "health", catLabel: "🏥 Healthcare",
    address: "4210 W Gandy Blvd, Tampa",
    wait: 5, reports: 8, freshness: "2 min ago", confidence: 4,
    bestTimes: [{ time: "9:00 AM", day: "Weekdays" }, { time: "2:00 PM", day: "Saturday" }],
    history: [8, 12, 5, 18, 7, 10, 5]
  },
  {
    id: 2, name: "Tampa DMV - Dale Mabry", cat: "gov", catLabel: "🏛️ Government",
    address: "9625 N Florida Ave, Tampa",
    wait: 55, reports: 23, freshness: "5 min ago", confidence: 5,
    bestTimes: [{ time: "8:00 AM", day: "Tuesday" }, { time: "3:30 PM", day: "Wednesday" }],
    history: [45, 60, 35, 55, 70, 50, 55]
  },
  {
    id: 3, name: "Datz Restaurant", cat: "food", catLabel: "🍽️ Food & Dining",
    address: "2616 S MacDill Ave, Tampa",
    wait: 22, reports: 15, freshness: "8 min ago", confidence: 4,
    bestTimes: [{ time: "5:30 PM", day: "Weekdays" }, { time: "11:00 AM", day: "Sunday" }],
    history: [15, 25, 30, 20, 45, 22, 18]
  },
  {
    id: 4, name: "TPA Airport - TSA", cat: "travel", catLabel: "✈️ Travel",
    address: "Tampa International Airport",
    wait: 8, reports: 34, freshness: "1 min ago", confidence: 5,
    bestTimes: [{ time: "10:00 AM", day: "Midweek" }, { time: "6:00 AM", day: "Any day" }],
    history: [12, 8, 15, 10, 25, 8, 6]
  },
  {
    id: 5, name: "USPS - Westshore", cat: "gov", catLabel: "🏛️ Government",
    address: "5225 W Laurel St, Tampa",
    wait: 30, reports: 6, freshness: "22 min ago", confidence: 3,
    bestTimes: [{ time: "9:00 AM", day: "Monday" }, { time: "1:00 PM", day: "Friday" }],
    history: [25, 35, 20, 30, 40, 30, 28]
  },
  {
    id: 6, name: "Chase Bank - Bayshore", cat: "services", catLabel: "🏦 Services",
    address: "3302 W Bay to Bay Blvd, Tampa",
    wait: 12, reports: 4, freshness: "15 min ago", confidence: 3,
    bestTimes: [{ time: "9:30 AM", day: "Tuesday" }, { time: "2:00 PM", day: "Thursday" }],
    history: [10, 15, 8, 12, 20, 12, 10]
  },
  {
    id: 7, name: "AdventHealth ER - Carrollwood", cat: "health", catLabel: "🏥 Healthcare",
    address: "7171 N Dale Mabry Hwy, Tampa",
    wait: 45, reports: 12, freshness: "10 min ago", confidence: 4,
    bestTimes: [{ time: "6:00 AM", day: "Weekdays" }, { time: "10:00 AM", day: "Tuesday" }],
    history: [50, 35, 45, 60, 40, 45, 38]
  },
  {
    id: 8, name: "Busch Gardens - Gate Entry", cat: "fun", catLabel: "🎢 Entertainment",
    address: "10165 McKinley Dr, Tampa",
    wait: 18, reports: 28, freshness: "3 min ago", confidence: 5,
    bestTimes: [{ time: "9:00 AM", day: "Weekdays" }, { time: "4:00 PM", day: "Any day" }],
    history: [25, 15, 30, 18, 40, 18, 12]
  },
  {
    id: 9, name: "Columbia Restaurant", cat: "food", catLabel: "🍽️ Food & Dining",
    address: "2117 E 7th Ave, Ybor City",
    wait: 35, reports: 19, freshness: "6 min ago", confidence: 4,
    bestTimes: [{ time: "5:00 PM", day: "Mon-Thu" }, { time: "11:30 AM", day: "Saturday" }],
    history: [30, 40, 25, 35, 55, 35, 28]
  },
  {
    id: 10, name: "Supercuts - Westchase", cat: "services", catLabel: "🏦 Services",
    address: "12820 Race Track Rd, Tampa",
    wait: 15, reports: 3, freshness: "30 min ago", confidence: 2,
    bestTimes: [{ time: "10:00 AM", day: "Tuesday" }, { time: "3:00 PM", day: "Wednesday" }],
    history: [10, 20, 15, 12, 25, 15, 18]
  }
];

// ---- Helpers ----
function getWaitColor(wait) {
  if (wait < 15) return 'green';
  if (wait <= 30) return 'yellow';
  return 'red';
}

function renderConfidence(level) {
  return Array.from({ length: 5 }, (_, i) =>
    `<div class="conf-dot ${i < level ? 'filled' : ''}"></div>`
  ).join('');
}

function historyBarColor(val) {
  if (val < 15) return 'green';
  if (val <= 30) return 'yellow';
  return 'red';
}

// ---- Render Venue List ----
function renderVenues(filter = 'all', search = '') {
  const list = document.getElementById('venueList');
  let filtered = venues;

  if (filter !== 'all') filtered = filtered.filter(v => v.cat === filter);
  if (search) filtered = filtered.filter(v => v.name.toLowerCase().includes(search.toLowerCase()));

  filtered.sort((a, b) => a.wait - b.wait);

  list.innerHTML = filtered.map(v => {
    const color = getWaitColor(v.wait);
    const freshClass = v.freshness.includes('min') && parseInt(v.freshness) <= 10 ? '' : 'stale';
    return `
      <div class="venue-card" data-id="${v.id}">
        <div class="venue-wait-badge ${color}">
          <span class="wait-number">${v.wait}</span>
          <span class="wait-unit">min</span>
        </div>
        <div class="venue-info">
          <div class="venue-name">${v.name}</div>
          <div class="venue-category">${v.catLabel}</div>
          <div class="venue-meta">
            <span class="freshness ${freshClass}">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${v.freshness}
            </span>
            <span class="venue-meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              ${v.reports} reports
            </span>
            <span class="confidence-bar">${renderConfidence(v.confidence)}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (filtered.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-dim)">No venues found</div>';
  }
}

// ---- Venue Detail Modal ----
function openVenueDetail(id) {
  const v = venues.find(x => x.id === id);
  if (!v) return;

  const color = getWaitColor(v.wait);
  const maxH = Math.max(...v.history);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  document.getElementById('modalContent').innerHTML = `
    <div class="detail-header">
      <div class="detail-cat">${v.catLabel}</div>
      <div class="detail-name">${v.name}</div>
      <div class="detail-address">${v.address}</div>
    </div>
    <div class="detail-wait-hero">
      <div class="detail-wait-big ${color}">${v.wait}</div>
      <div class="detail-wait-info">
        <div class="detail-wait-label">min estimated wait</div>
        <div class="detail-reports">${v.reports} reports · ${v.freshness}</div>
        <div style="margin-top:4px">${renderConfidence(v.confidence)}</div>
      </div>
    </div>
    <div class="detail-section">
      <h3>This Week's Pattern</h3>
      <div class="history-bars">
        ${v.history.map((h, i) => `
          <div class="history-bar ${historyBarColor(h)}" style="height:${Math.max((h / maxH) * 100, 5)}%" title="${days[i]}: ${h} min avg"></div>
        `).join('')}
      </div>
      <div class="history-labels">
        ${days.map(d => `<span>${d}</span>`).join('')}
      </div>
    </div>
    <div class="detail-section">
      <h3>Best Times to Go</h3>
      <div class="best-times">
        ${v.bestTimes.map(bt => `
          <div class="best-time-card">
            <div class="time">${bt.time}</div>
            <div class="day">${bt.day}</div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="detail-actions">
      <button class="detail-btn primary" onclick="openReportModal(${v.id})">Report Wait</button>
      <button class="detail-btn secondary" onclick="setAlert(${v.id})">🔔 Set Alert</button>
    </div>
  `;

  document.getElementById('venueModal').classList.add('active');
}

// ---- Report Modal ----
let currentReportVenue = null;
let timerInterval = null;
let timerSeconds = 0;

function openReportModal(venueId) {
  const v = venues.find(x => x.id === venueId);
  currentReportVenue = v;
  document.getElementById('reportVenueName').textContent = v ? v.name : 'Select a venue';
  document.getElementById('venueModal').classList.remove('active');
  document.getElementById('reportModal').classList.add('active');
  resetTimer();
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  document.getElementById('timerDisplay').textContent = '00:00';
  document.getElementById('timerStart').classList.remove('hidden');
  document.getElementById('timerStop').classList.add('hidden');
}

// ---- Alerts ----
function setAlert(venueId) {
  const v = venues.find(x => x.id === venueId);
  showToast(`🔔 Alert set for ${v.name} — we'll notify you when wait drops!`);
  document.getElementById('venueModal').classList.remove('active');
}

// ---- Toast ----
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- Event Listeners ----
document.addEventListener('DOMContentLoaded', () => {
  renderVenues();

  // Category pills
  document.querySelectorAll('.cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderVenues(pill.dataset.cat, document.getElementById('searchInput').value);
    });
  });

  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    const activeCat = document.querySelector('.cat-pill.active').dataset.cat;
    renderVenues(activeCat, e.target.value);
  });

  // Venue card click
  document.getElementById('venueList').addEventListener('click', (e) => {
    const card = e.target.closest('.venue-card');
    if (card) openVenueDetail(parseInt(card.dataset.id));
  });

  // Close modals
  document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('venueModal').classList.remove('active');
  });
  document.getElementById('reportClose').addEventListener('click', () => {
    document.getElementById('reportModal').classList.remove('active');
    resetTimer();
  });

  // Click overlay to close
  ['venueModal', 'reportModal'].forEach(id => {
    document.getElementById(id).addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        e.currentTarget.classList.remove('active');
        resetTimer();
      }
    });
  });

  // Report FAB
  document.getElementById('reportNavBtn').addEventListener('click', () => {
    if (!currentReportVenue) currentReportVenue = venues[0];
    openReportModal(currentReportVenue.id);
  });

  // Wait slider
  const slider = document.getElementById('waitSlider');
  const sliderVal = document.getElementById('waitSliderValue');
  slider.addEventListener('input', () => {
    const val = parseInt(slider.value);
    if (val >= 120) sliderVal.textContent = '2+ hr';
    else if (val >= 60) sliderVal.textContent = `${Math.floor(val/60)} hr ${val%60} min`;
    else sliderVal.textContent = `${val} min`;

    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
  });

  // Preset buttons
  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const min = parseInt(btn.dataset.min);
      slider.value = min;
      slider.dispatchEvent(new Event('input'));
      document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Report method tabs
  document.querySelectorAll('.report-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.report-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const method = tab.dataset.method;
      document.getElementById('reportQuick').classList.toggle('hidden', method !== 'quick');
      document.getElementById('reportTimer').classList.toggle('hidden', method !== 'timer');
    });
  });

  // Timer
  document.getElementById('timerStart').addEventListener('click', () => {
    document.getElementById('timerStart').classList.add('hidden');
    document.getElementById('timerStop').classList.remove('hidden');
    timerSeconds = 0;
    timerInterval = setInterval(() => {
      timerSeconds++;
      const m = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
      const s = String(timerSeconds % 60).padStart(2, '0');
      document.getElementById('timerDisplay').textContent = `${m}:${s}`;
    }, 1000);
  });

  document.getElementById('timerStop').addEventListener('click', () => {
    clearInterval(timerInterval);
    const min = Math.ceil(timerSeconds / 60);
    document.getElementById('reportModal').classList.remove('active');
    showToast(`⏱️ ${min} min wait reported! +15 XP`);
    resetTimer();
  });

  // Submit quick report
  document.getElementById('submitReport').addEventListener('click', () => {
    const min = parseInt(slider.value);
    document.getElementById('reportModal').classList.remove('active');
    showToast(`✅ ${min} min wait reported! +10 XP`);
  });

  // Bottom nav (visual only)
  document.querySelectorAll('.nav-item:not(.report-nav)').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
});
