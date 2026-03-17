// ===== KickoffClock — App Logic =====

const GAMES = [
  {
    id: 1, sport: 'nba', league: 'NBA', network: 'ESPN',
    away: { name: 'Celtics', abbr: 'BOS', record: '48-18', emoji: '☘️' },
    home: { name: 'Lakers', abbr: 'LAL', record: '38-28', emoji: '💜' },
    venue: 'Crypto.com Arena, Los Angeles',
    scheduled: '7:30 PM', predicted: '7:43 PM', delayMin: 13,
    confidence: 87, status: 'live',
    liveText: 'Ball tipped — Q1 underway',
    reports: 24,
    milestones: [
      { event: 'Pregame warmups', time: '6:45 PM', done: true },
      { event: 'Player intros begin', time: '7:22 PM', done: true },
      { event: 'National anthem', time: '7:35 PM', done: true },
      { event: 'Tip-off', time: '7:43 PM', done: true, active: false },
      { event: 'End of Q1', time: '~8:05 PM', done: false }
    ],
    history: {
      avgDelay: '12 min', lastGame: '+15 min', worstDelay: '+22 min (Opening Night)',
      networkAvg: '14 min (ESPN)'
    }
  },
  {
    id: 2, sport: 'nba', league: 'NBA', network: 'TNT',
    away: { name: 'Warriors', abbr: 'GSW', record: '36-30', emoji: '🌉' },
    home: { name: 'Bucks', abbr: 'MIL', record: '42-24', emoji: '🦌' },
    venue: 'Fiserv Forum, Milwaukee',
    scheduled: '8:00 PM', predicted: '8:11 PM', delayMin: 11,
    confidence: 82, status: 'pregame',
    liveText: 'Player intros starting',
    reports: 8,
    milestones: [
      { event: 'Pregame warmups', time: '7:15 PM', done: true },
      { event: 'Player intros begin', time: '7:52 PM', done: false, active: true },
      { event: 'National anthem', time: '~8:03 PM', done: false },
      { event: 'Tip-off', time: '~8:11 PM', done: false },
    ],
    history: {
      avgDelay: '11 min', lastGame: '+9 min', worstDelay: '+19 min (MLK Night)',
      networkAvg: '12 min (TNT)'
    }
  },
  {
    id: 3, sport: 'nhl', league: 'NHL', network: 'ESPN+',
    away: { name: 'Rangers', abbr: 'NYR', record: '44-20-6', emoji: '🗽' },
    home: { name: 'Lightning', abbr: 'TBL', record: '40-24-8', emoji: '⚡' },
    venue: 'Amalie Arena, Tampa',
    scheduled: '7:00 PM', predicted: '7:09 PM', delayMin: 9,
    confidence: 91, status: 'live',
    liveText: '1st period — 14:22 remaining',
    reports: 31,
    milestones: [
      { event: 'Pregame warmups', time: '6:30 PM', done: true },
      { event: 'National anthem', time: '6:58 PM', done: true },
      { event: 'Puck drop', time: '7:09 PM', done: true },
    ],
    history: {
      avgDelay: '8 min', lastGame: '+7 min', worstDelay: '+14 min (Military Night)',
      networkAvg: '9 min (ESPN+)'
    }
  },
  {
    id: 4, sport: 'nfl', league: 'NFL', network: 'FOX',
    away: { name: 'Eagles', abbr: 'PHI', record: '13-5', emoji: '🦅' },
    home: { name: 'Cowboys', abbr: 'DAL', record: '8-10', emoji: '⭐' },
    venue: 'AT&T Stadium, Arlington',
    scheduled: '4:25 PM', predicted: '4:41 PM', delayMin: 16,
    confidence: 94, status: 'upcoming',
    liveText: null,
    reports: 0,
    milestones: [
      { event: 'Pregame ceremony', time: '~4:10 PM', done: false },
      { event: 'Player intros', time: '~4:20 PM', done: false },
      { event: 'National anthem', time: '~4:30 PM', done: false },
      { event: 'Coin toss', time: '~4:37 PM', done: false },
      { event: 'Kickoff', time: '~4:41 PM', done: false },
    ],
    history: {
      avgDelay: '15 min', lastGame: '+14 min', worstDelay: '+28 min (Thanksgiving)',
      networkAvg: '13 min (FOX)'
    }
  },
  {
    id: 5, sport: 'ufc', league: 'UFC', network: 'ESPN+ PPV',
    away: { name: 'Adesanya', abbr: 'ADY', record: '24-4', emoji: '🇳🇬' },
    home: { name: 'Pereira', abbr: 'PER', record: '12-2', emoji: '🇧🇷' },
    venue: 'T-Mobile Arena, Las Vegas',
    scheduled: '10:00 PM', predicted: '12:15 AM', delayMin: 135,
    confidence: 72, status: 'upcoming',
    liveText: null,
    reports: 0,
    milestones: [
      { event: 'Main card begins', time: '~10:00 PM', done: false },
      { event: 'Co-main walkout', time: '~11:15 PM', done: false },
      { event: 'Main event walkouts', time: '~11:50 PM', done: false },
      { event: 'Main event bell', time: '~12:15 AM', done: false },
    ],
    history: {
      avgDelay: '2h 10min', lastGame: '+2h 25min', worstDelay: '+2h 45min (UFC 298)',
      networkAvg: 'Varies wildly'
    }
  },
  {
    id: 6, sport: 'mls', league: 'MLS', network: 'Apple TV',
    away: { name: 'Inter Miami', abbr: 'MIA', record: '5-1-2', emoji: '🦩' },
    home: { name: 'NYCFC', abbr: 'NYC', record: '3-3-2', emoji: '🗽' },
    venue: 'Yankee Stadium, Bronx',
    scheduled: '5:00 PM', predicted: '5:06 PM', delayMin: 6,
    confidence: 78, status: 'upcoming',
    liveText: null,
    reports: 0,
    milestones: [
      { event: 'Pregame warmups', time: '~4:30 PM', done: false },
      { event: 'Player walkout', time: '~4:55 PM', done: false },
      { event: 'Kickoff', time: '~5:06 PM', done: false },
    ],
    history: {
      avgDelay: '5 min', lastGame: '+4 min', worstDelay: '+12 min (Opening Day)',
      networkAvg: '5 min (Apple TV)'
    }
  }
];

const DELAY_STATS = [
  { league: 'UFC', emoji: '🥊', avg: 135, color: '#d20a0a' },
  { league: 'NFL', emoji: '🏈', avg: 15, color: '#013369' },
  { league: 'NBA', emoji: '🏀', avg: 13, color: '#c9082a' },
  { league: 'College FB', emoji: '🏟️', avg: 18, color: '#8b5e3c' },
  { league: 'NHL', emoji: '🏒', avg: 8, color: '#555' },
  { league: 'MLS', emoji: '⚽', avg: 5, color: '#5d2e8c' },
  { league: 'MLB', emoji: '⚾', avg: 7, color: '#002d72' },
];

const NETWORK_STATS = [
  { name: 'ESPN', delay: '+14 min avg' },
  { name: 'FOX', delay: '+13 min avg' },
  { name: 'TNT', delay: '+12 min avg' },
  { name: 'NBC/Peacock', delay: '+11 min avg' },
  { name: 'CBS', delay: '+10 min avg' },
  { name: 'ESPN+ PPV', delay: 'Wildly variable' },
  { name: 'Apple TV', delay: '+5 min avg' },
];

// ===== State =====
let currentSport = 'all';
let currentView = 'today';
let selectedDay = 0;

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  renderDateTabs();
  renderGames();
  bindSportFilter();
  bindNavigation();
  bindModal();
});

// ===== Date Tabs =====
function renderDateTabs() {
  const container = document.getElementById('date-tabs');
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  container.innerHTML = '';

  for (let i = -1; i <= 5; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    const btn = document.createElement('button');
    btn.className = `date-tab${i === 0 ? ' active' : ''}`;
    btn.dataset.offset = i;
    btn.innerHTML = `
      <span class="day-name">${i === 0 ? 'Today' : days[d.getDay()]}</span>
      <span class="day-num">${d.getDate()}</span>
    `;
    btn.onclick = () => {
      document.querySelectorAll('.date-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      selectedDay = i;
      renderGames();
    };
    container.appendChild(btn);
  }
}

// ===== Games =====
function renderGames() {
  const container = document.getElementById('games-list');
  const filtered = currentSport === 'all'
    ? GAMES
    : GAMES.filter(g => g.sport === currentSport);

  if (selectedDay !== 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="emoji">📅</div>
        <div class="title">No predictions yet</div>
        <div class="desc">Check back closer to game day for predicted start times</div>
      </div>
    `;
    return;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="emoji">🏟️</div>
        <div class="title">No games today</div>
        <div class="desc">No ${currentSport.toUpperCase()} games scheduled for today</div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(game => renderGameCard(game)).join('');

  // Bind click
  container.querySelectorAll('.game-card').forEach(card => {
    card.onclick = () => openGameModal(parseInt(card.dataset.id));
  });
}

function renderGameCard(game) {
  const isLive = game.status === 'live';
  const isPregame = game.status === 'pregame';
  const confLevel = game.confidence >= 85 ? 'high' : game.confidence >= 70 ? 'med' : 'low';

  return `
    <div class="game-card ${isLive ? 'live' : ''}" data-id="${game.id}">
      <div class="game-card-header">
        <span class="game-league ${game.sport}">${game.league}</span>
        <span class="game-network">${game.network}</span>
      </div>
      <div class="game-matchup">
        <div class="team away">
          <div class="team-logo">${game.away.emoji}</div>
          <div class="team-info">
            <span class="team-name">${game.away.name}</span>
            <span class="team-record">${game.away.record}</span>
          </div>
        </div>
        <span class="game-vs">@</span>
        <div class="team home">
          <div class="team-logo">${game.home.emoji}</div>
          <div class="team-info">
            <span class="team-name">${game.home.name}</span>
            <span class="team-record">${game.home.record}</span>
          </div>
        </div>
      </div>
      <div class="time-block">
        <div class="time-scheduled">
          <div class="time-label">Listed</div>
          <div class="time-value">${game.scheduled}</div>
        </div>
        <div class="time-predicted">
          <div class="time-label">Actual</div>
          <div class="time-value">${game.predicted}</div>
        </div>
        <div class="time-diff">
          <span class="time-diff-value">+${game.delayMin}m</span>
        </div>
      </div>
      ${isLive || isPregame ? `
        <div class="live-indicator">
          <div class="live-dot"></div>
          <span class="live-text">${isLive ? 'LIVE' : 'PREGAME'}</span>
          <span class="crowd-reports">${game.reports} reports</span>
        </div>
      ` : ''}
      <div class="confidence">
        <span class="confidence-label">Confidence</span>
        <div class="confidence-bar">
          <div class="confidence-fill ${confLevel}" style="width: ${game.confidence}%"></div>
        </div>
        <span class="confidence-pct">${game.confidence}%</span>
      </div>
    </div>
  `;
}

// ===== Sport Filter =====
function bindSportFilter() {
  document.querySelectorAll('.sport-chip').forEach(chip => {
    chip.onclick = () => {
      document.querySelectorAll('.sport-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSport = chip.dataset.sport;
      renderGames();
    };
  });
}

// ===== Navigation =====
function bindNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.onclick = () => {
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
      currentView = item.dataset.view;
      renderView();
    };
  });
}

function renderView() {
  const container = document.getElementById('games-list');

  if (currentView === 'today') {
    // Show date nav and sport filter
    document.querySelector('.date-nav').style.display = '';
    document.querySelector('.sport-filter').style.display = '';
    renderGames();
    return;
  }

  // Hide date/sport nav for other views
  document.querySelector('.date-nav').style.display = 'none';
  document.querySelector('.sport-filter').style.display = 'none';

  if (currentView === 'stats') {
    renderStatsView(container);
  } else if (currentView === 'report') {
    renderReportView(container);
  } else if (currentView === 'my-teams') {
    container.innerHTML = `
      <div class="empty-state">
        <div class="emoji">❤️</div>
        <div class="title">Track your teams</div>
        <div class="desc">Add favorite teams to get personalized delay predictions and alerts</div>
      </div>
    `;
  }
}

function renderStatsView(container) {
  const maxDelay = 20; // Cap bar at 20 for non-UFC

  container.innerHTML = `
    <div class="stats-view">
      <h2 class="section-title">⏱️ Average Delay by League</h2>
      <p class="section-subtitle">How late do games actually start?</p>
      <div id="delay-chart">
        ${DELAY_STATS.filter(s => s.league !== 'UFC').map(s => `
          <div class="delay-bar-row">
            <div class="delay-bar-label">${s.emoji} ${s.league}</div>
            <div class="delay-bar-track">
              <div class="delay-bar-fill" style="width: ${Math.min(s.avg / maxDelay * 100, 100)}%; background: ${s.color};">
                +${s.avg}m
              </div>
            </div>
          </div>
        `).join('')}
        <div class="delay-bar-row" style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.06);">
          <div class="delay-bar-label">🥊 UFC</div>
          <div class="delay-bar-track">
            <div class="delay-bar-fill" style="width: 100%; background: #d20a0a;">
              +2h 15m (main event)
            </div>
          </div>
        </div>
      </div>
      <h2 class="section-title" style="margin-top: 28px;">📺 Network Delay Rankings</h2>
      <p class="section-subtitle">Some networks are worse than others</p>
      <div id="network-delays">
        ${NETWORK_STATS.map(n => `
          <div class="network-card">
            <span class="network-name">${n.name}</span>
            <span class="network-delay">${n.delay}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderReportView(container) {
  const liveGames = GAMES.filter(g => g.status === 'live' || g.status === 'pregame');

  container.innerHTML = `
    <div class="report-view">
      <h2 class="section-title">📡 Live Report</h2>
      <p class="section-subtitle">Help everyone know when the action starts</p>
      ${liveGames.length === 0
        ? '<div class="empty-state"><div class="emoji">📡</div><div class="title">No live games right now</div><div class="desc">Come back during game time to submit crowd reports</div></div>'
        : liveGames.map(g => `
          <div class="report-game-card" data-id="${g.id}">
            <div class="report-game-name">${g.away.emoji} ${g.away.name} @ ${g.home.emoji} ${g.home.name}</div>
            <div class="report-game-time">${g.league} • ${g.scheduled} on ${g.network}</div>
          </div>
        `).join('') +
        `<div style="margin-top: 16px;">
          <p class="section-subtitle">Quick-tap what's happening:</p>
          ${['🎤 National anthem playing', '🏀 Player intros started', '📺 Commercial break', '🎯 Game action started!', '⏰ Still waiting...'].map((m, i) => `
            <button class="milestone-btn" data-milestone="${i}">
              <span class="milestone-icon">${m.split(' ')[0]}</span>
              <span>${m.substring(m.indexOf(' ') + 1)}</span>
              <span class="milestone-count">${Math.floor(Math.random() * 15)} reports</span>
            </button>
          `).join('')}
        </div>`
      }
    </div>
  `;

  // Bind milestone buttons
  container.querySelectorAll('.milestone-btn').forEach(btn => {
    btn.onclick = () => {
      btn.classList.add('reported');
      const count = btn.querySelector('.milestone-count');
      const current = parseInt(count.textContent);
      count.textContent = `${current + 1} reports`;
      showToast('✅ Report submitted — thanks!');
    };
  });
}

// ===== Modal =====
function bindModal() {
  document.getElementById('modal-close').onclick = closeModal;
  document.getElementById('modal-overlay').onclick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };
}

function openGameModal(gameId) {
  const game = GAMES.find(g => g.id === gameId);
  if (!game) return;

  const modal = document.getElementById('modal-content');
  const confLevel = game.confidence >= 85 ? 'high' : game.confidence >= 70 ? 'med' : 'low';

  modal.innerHTML = `
    <div class="modal-header">
      <div class="modal-league" style="color: var(--${game.sport === 'nhl' ? 'text' : game.sport})">${game.league} • ${game.network}</div>
      <div class="modal-teams">${game.away.emoji} ${game.away.name} @ ${game.home.emoji} ${game.home.name}</div>
      <div class="modal-venue">${game.venue}</div>
    </div>

    <div class="modal-time-comparison">
      <div class="modal-time-box scheduled">
        <div class="label">Listed Time</div>
        <div class="value">${game.scheduled}</div>
      </div>
      <div class="modal-arrow">→</div>
      <div class="modal-time-box predicted">
        <div class="label">Actual Start</div>
        <div class="value">${game.predicted}</div>
      </div>
    </div>
    <div style="text-align: center; margin-bottom: 20px;">
      <span class="modal-delay-badge">⚠️ +${game.delayMin} min predicted delay</span>
    </div>

    <div class="confidence" style="margin-bottom: 20px;">
      <span class="confidence-label">Prediction confidence</span>
      <div class="confidence-bar">
        <div class="confidence-fill ${confLevel}" style="width: ${game.confidence}%"></div>
      </div>
      <span class="confidence-pct">${game.confidence}%</span>
    </div>

    <div class="timeline">
      <div class="timeline-title">📋 Game Timeline</div>
      ${game.milestones.map(m => `
        <div class="timeline-item">
          <div class="timeline-dot ${m.done ? 'done' : m.active ? 'active' : 'pending'}">
            ${m.done ? '✓' : m.active ? '•' : ''}
          </div>
          <div class="timeline-content">
            <div class="timeline-event">${m.event}</div>
            <div class="timeline-time">${m.time}${m.done ? ' ✅' : ''}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="historical">
      <div class="historical-title">📊 Historical Data</div>
      <div class="historical-stat">
        <span class="stat-label">Average delay</span>
        <span class="stat-value">${game.history.avgDelay}</span>
      </div>
      <div class="historical-stat">
        <span class="stat-label">Last game</span>
        <span class="stat-value">${game.history.lastGame}</span>
      </div>
      <div class="historical-stat">
        <span class="stat-label">Worst delay</span>
        <span class="stat-value" style="color: var(--danger)">${game.history.worstDelay}</span>
      </div>
      <div class="historical-stat">
        <span class="stat-label">Network avg</span>
        <span class="stat-value">${game.history.networkAvg}</span>
      </div>
    </div>

    <button class="notify-btn" id="notify-game-btn">
      🔔 Notify me when game starts
    </button>
  `;

  // Bind notify button
  const notifyBtn = document.getElementById('notify-game-btn');
  notifyBtn.onclick = () => {
    notifyBtn.classList.toggle('active');
    if (notifyBtn.classList.contains('active')) {
      notifyBtn.innerHTML = '🔔 Notification set — we\'ll ping you!';
      showToast('🔔 You\'ll be alerted at ~' + game.predicted);
    } else {
      notifyBtn.innerHTML = '🔔 Notify me when game starts';
    }
  };

  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ===== Toast =====
function showToast(text) {
  const toast = document.getElementById('toast');
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
