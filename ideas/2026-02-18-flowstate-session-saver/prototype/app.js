// FlowState — Work Session Saver
// Interactive Prototype

// Sample session data
const sessions = [
  {
    id: 1,
    time: '3:45 PM',
    tag: 'auth-api',
    note: 'Debugging token refresh logic in auth service. Need to check expiry timestamps in the middleware.',
    isVoice: true,
    tabs: 8,
    files: ['auth.service.ts', 'middleware.ts', 'token.utils.ts'],
    apps: ['VS Code', 'Chrome', 'Postman'],
    interruption: 'meeting',
    tabDetails: [
      { title: 'Stack Overflow - JWT Refresh', favicon: '📄' },
      { title: 'GitHub - auth-api PR #234', favicon: '🐙' },
      { title: 'JWT.io Debugger', favicon: '🔐' },
      { title: 'Postman - Auth Endpoints', favicon: '📮' },
      { title: 'Slack - #dev-team', favicon: '💬' },
    ]
  },
  {
    id: 2,
    time: '1:22 PM',
    tag: 'dashboard',
    note: 'Working on the chart animations. Next: add hover states and tooltip positioning.',
    isVoice: false,
    tabs: 5,
    files: ['ChartComponent.tsx', 'animations.ts'],
    apps: ['VS Code', 'Chrome', 'Figma'],
    interruption: 'slack',
    tabDetails: [
      { title: 'Framer Motion Docs', favicon: '🎬' },
      { title: 'Recharts Examples', favicon: '📊' },
      { title: 'Figma - Dashboard Specs', favicon: '🎨' },
    ]
  },
  {
    id: 3,
    time: '10:15 AM',
    tag: 'research',
    note: 'Researching competitor pricing models. Found 3 interesting approaches to look into.',
    isVoice: false,
    tabs: 12,
    files: ['pricing-notes.md'],
    apps: ['Chrome', 'Notion'],
    interruption: 'email',
    tabDetails: [
      { title: 'Linear Pricing', favicon: '📐' },
      { title: 'Notion Pricing', favicon: '📝' },
      { title: 'Vercel Pricing', favicon: '▲' },
      { title: 'Railway Pricing', favicon: '🚂' },
    ]
  }
];

const yesterdaySessions = [
  {
    id: 4,
    time: '5:30 PM',
    tag: 'auth-api',
    note: 'Fixed the CORS issue. Deploy tomorrow after QA review.',
    isVoice: false,
    tabs: 4,
    files: ['cors.config.ts'],
    apps: ['VS Code', 'Chrome'],
    interruption: 'other',
    tabDetails: [
      { title: 'MDN - CORS', favicon: '📚' },
      { title: 'Express CORS Middleware', favicon: '📦' },
    ]
  },
  {
    id: 5,
    time: '2:00 PM',
    tag: 'dashboard',
    note: 'Prototyping new filter panel. User can now combine multiple filters.',
    isVoice: true,
    tabs: 6,
    files: ['FilterPanel.tsx', 'useFilters.ts'],
    apps: ['VS Code', 'Chrome', 'Figma'],
    interruption: 'meeting',
    tabDetails: [
      { title: 'React Multi-Select', favicon: '⚛️' },
      { title: 'Figma - Filter Designs', favicon: '🎨' },
    ]
  }
];

// DOM Elements
const captureBtn = document.getElementById('captureBtn');
const captureModal = document.getElementById('captureModal');
const closeModal = document.getElementById('closeModal');
const cancelCapture = document.getElementById('cancelCapture');
const saveCapture = document.getElementById('saveCapture');
const sessionList = document.getElementById('sessionList');
const yesterdayList = document.getElementById('yesterdayList');
const detailPanel = document.getElementById('detailPanel');
const detailContent = document.getElementById('detailContent');
const closeDetail = document.getElementById('closeDetail');
const restoreToast = document.getElementById('restoreToast');
const voiceBtn = document.getElementById('voiceBtn');
const voiceTranscript = document.getElementById('voiceTranscript');
const noteInput = document.getElementById('noteInput');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');

let selectedSession = null;
let isRecording = false;

// Render sessions
function renderSessions() {
  sessionList.innerHTML = sessions.map(session => createSessionCard(session)).join('');
  yesterdayList.innerHTML = yesterdaySessions.map(session => createSessionCard(session)).join('');
  
  // Add click handlers
  document.querySelectorAll('.session-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.restore-btn')) {
        const sessionId = parseInt(card.dataset.id);
        selectSession(sessionId);
      }
    });
  });

  // Add restore handlers
  document.querySelectorAll('.restore-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      restoreSession();
    });
  });
}

function createSessionCard(session) {
  const interruptionEmoji = {
    meeting: '📅',
    slack: '💬',
    email: '📧',
    other: '🔔'
  };

  return `
    <div class="session-card ${selectedSession?.id === session.id ? 'active' : ''}" data-id="${session.id}">
      <div class="session-header">
        <span class="session-time">${session.time}</span>
        <span class="session-tag">${session.tag}</span>
      </div>
      <p class="session-note ${session.isVoice ? 'voice' : ''}">
        ${session.note}
      </p>
      <div class="session-context">
        <span class="context-item">🌐 ${session.tabs} tabs</span>
        <span class="context-item">📁 ${session.files.length} files</span>
        <span class="context-item">${interruptionEmoji[session.interruption]} ${session.interruption}</span>
      </div>
      <div class="session-actions">
        <button class="restore-btn">
          <span>🔄</span>
          Restore Session
        </button>
      </div>
    </div>
  `;
}

function selectSession(sessionId) {
  selectedSession = [...sessions, ...yesterdaySessions].find(s => s.id === sessionId);
  
  if (selectedSession) {
    detailPanel.classList.add('open');
    renderDetailPanel();
    renderSessions(); // Re-render to update active state
  }
}

function renderDetailPanel() {
  if (!selectedSession) return;

  detailContent.innerHTML = `
    <div class="detail-section">
      <h4>📝 Your Note</h4>
      <div class="detail-note">
        ${selectedSession.isVoice ? '🎤 ' : ''}${selectedSession.note}
      </div>
    </div>

    <div class="detail-section">
      <h4>🌐 Browser Tabs (${selectedSession.tabs})</h4>
      <div class="tab-list">
        ${selectedSession.tabDetails.map(tab => `
          <div class="tab-item">
            <span class="tab-favicon">${tab.favicon}</span>
            <span class="tab-title">${tab.title}</span>
          </div>
        `).join('')}
        ${selectedSession.tabs > selectedSession.tabDetails.length ? 
          `<div class="tab-item" style="color: var(--text-muted);">
            + ${selectedSession.tabs - selectedSession.tabDetails.length} more tabs
          </div>` : ''}
      </div>
    </div>

    <div class="detail-section">
      <h4>📁 Open Files</h4>
      <div class="tab-list">
        ${selectedSession.files.map(file => `
          <div class="tab-item">
            <span class="tab-favicon">📄</span>
            <span class="tab-title">${file}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="detail-section">
      <h4>🖥️ Active Apps</h4>
      <div class="tab-list">
        ${selectedSession.apps.map(app => `
          <div class="tab-item">
            <span class="tab-favicon">${getAppEmoji(app)}</span>
            <span class="tab-title">${app}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <button class="btn btn-primary" style="width: 100%; margin-top: var(--space-lg);" onclick="restoreSession()">
      🔄 Restore This Session
    </button>
  `;
}

function getAppEmoji(app) {
  const emojis = {
    'VS Code': '💻',
    'Chrome': '🌐',
    'Postman': '📮',
    'Slack': '💬',
    'Figma': '🎨',
    'Notion': '📝'
  };
  return emojis[app] || '📱';
}

function restoreSession() {
  restoreToast.classList.add('show');
  setTimeout(() => {
    restoreToast.classList.remove('show');
  }, 3000);
}

// Modal handlers
captureBtn.addEventListener('click', () => {
  captureModal.classList.add('open');
});

closeModal.addEventListener('click', () => {
  captureModal.classList.remove('open');
});

cancelCapture.addEventListener('click', () => {
  captureModal.classList.remove('open');
});

saveCapture.addEventListener('click', () => {
  const newSession = {
    id: sessions.length + yesterdaySessions.length + 1,
    time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    tag: document.querySelector('.tag.active')?.dataset.tag || 'untagged',
    note: noteInput.value || voiceTranscript.textContent || 'Quick session save',
    isVoice: !!voiceTranscript.textContent,
    tabs: Math.floor(Math.random() * 10) + 3,
    files: ['current-file.ts'],
    apps: ['VS Code', 'Chrome'],
    interruption: document.querySelector('.interruption-btn.active')?.dataset.type || 'other',
    tabDetails: [
      { title: 'Current Work', favicon: '📄' },
    ]
  };
  
  sessions.unshift(newSession);
  renderSessions();
  
  captureModal.classList.remove('open');
  noteInput.value = '';
  voiceTranscript.textContent = '';
});

// Detail panel close
closeDetail.addEventListener('click', () => {
  detailPanel.classList.remove('open');
  selectedSession = null;
  renderSessions();
});

// Voice recording simulation
voiceBtn.addEventListener('mousedown', () => {
  isRecording = true;
  voiceBtn.classList.add('recording');
  voiceBtn.querySelector('.voice-text').textContent = 'Recording...';
});

voiceBtn.addEventListener('mouseup', () => {
  if (isRecording) {
    isRecording = false;
    voiceBtn.classList.remove('recording');
    voiceBtn.querySelector('.voice-text').textContent = 'Hold to record';
    
    // Simulate transcription
    const sampleNotes = [
      'Working on the API integration, need to finish the error handling',
      'Debugging the login flow, check the token validation next',
      'Reviewing the design specs, almost done with the header component'
    ];
    voiceTranscript.textContent = `"${sampleNotes[Math.floor(Math.random() * sampleNotes.length)]}"`;
  }
});

// Tag selection
document.querySelectorAll('.tag:not(.add-tag)').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelectorAll('.tag:not(.add-tag)').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
  });
});

// Interruption selection
document.querySelectorAll('.interruption-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.interruption-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Keyboard shortcut
document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 's') {
    e.preventDefault();
    captureModal.classList.add('open');
  }
  if (e.key === 'Escape') {
    captureModal.classList.remove('open');
  }
});

// Search functionality
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll('.session-card').forEach(card => {
    const note = card.querySelector('.session-note').textContent.toLowerCase();
    const tag = card.querySelector('.session-tag').textContent.toLowerCase();
    const matches = note.includes(query) || tag.includes(query);
    card.style.display = matches || !query ? 'block' : 'none';
  });
});

// Filter functionality
filterSelect.addEventListener('change', (e) => {
  const filter = e.target.value;
  document.querySelectorAll('.session-card').forEach(card => {
    const tag = card.querySelector('.session-tag').textContent;
    const matches = filter === 'all' || tag === filter;
    card.style.display = matches ? 'block' : 'none';
  });
});

// Initialize
renderSessions();

// Add subtle animation to capture button
setInterval(() => {
  captureBtn.style.boxShadow = '0 4px 20px rgba(124, 92, 255, 0.3)';
  setTimeout(() => {
    captureBtn.style.boxShadow = '';
  }, 1000);
}, 5000);
