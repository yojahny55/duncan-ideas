/**
 * Yapper - Voice Social Network
 * Interactive Prototype
 */

// =====================================================
// Sample Data
// =====================================================

const sampleYaps = [
  {
    id: 1,
    user: {
      name: 'Maya Chen',
      handle: '@techie_maya',
      avatar: 'M',
      verified: true
    },
    duration: 45,
    topic: '#tech',
    transcript: "Okay hot take: AI is going to make developers MORE valuable, not less. Here's why...",
    likes: 2847,
    replies: 156,
    reYaps: 423,
    timestamp: '2h'
  },
  {
    id: 2,
    user: {
      name: 'Jordan Blake',
      handle: '@jordanb',
      avatar: 'J',
      verified: false
    },
    duration: 23,
    topic: '#hot-takes',
    transcript: "Everyone's sleeping on audiobooks. Reading is great but listening while doing dishes? Chef's kiss.",
    likes: 892,
    replies: 67,
    reYaps: 34,
    timestamp: '4h'
  },
  {
    id: 3,
    user: {
      name: 'Sarah Speaks',
      handle: '@sarahspeaks',
      avatar: 'S',
      verified: true
    },
    duration: 67,
    topic: '#music',
    transcript: "I found this underground artist yesterday and I literally cannot stop listening. Let me tell you about them...",
    likes: 5621,
    replies: 289,
    reYaps: 1203,
    timestamp: '6h'
  },
  {
    id: 4,
    user: {
      name: 'Alex Rivera',
      handle: '@alexr_daily',
      avatar: 'A',
      verified: false
    },
    duration: 31,
    topic: '#random',
    transcript: "Just realized I've been pronouncing 'quinoa' wrong my entire life. Someone should have told me.",
    likes: 12453,
    replies: 892,
    reYaps: 2341,
    timestamp: '8h'
  },
  {
    id: 5,
    user: {
      name: 'Code Queen',
      handle: '@codequeen',
      avatar: 'C',
      verified: true
    },
    duration: 52,
    topic: '#tech',
    transcript: "Debugging tip nobody tells you: rubber duck debugging actually works because you catch your own logic errors when explaining them out loud.",
    likes: 3421,
    replies: 145,
    reYaps: 678,
    timestamp: '12h'
  },
  {
    id: 6,
    user: {
      name: 'Podcast Pete',
      handle: '@podcastpete',
      avatar: 'P',
      verified: false
    },
    duration: 88,
    topic: '#hot-takes',
    transcript: "The best conversations happen after midnight. There's something about the darkness that makes people more honest...",
    likes: 1876,
    replies: 234,
    reYaps: 156,
    timestamp: '1d'
  }
];

const replyYaps = [
  {
    id: 101,
    user: {
      name: 'Dev Dana',
      handle: '@devdana',
      avatar: 'D',
      verified: false
    },
    duration: 18,
    transcript: "Totally agree! I use ChatGPT to help me understand code but I still have to write the architecture myself.",
    likes: 234,
    replies: 12,
    timestamp: '1h'
  },
  {
    id: 102,
    user: {
      name: 'Tom Tech',
      handle: '@tomtech',
      avatar: 'T',
      verified: true
    },
    duration: 25,
    transcript: "The AI tools are like having a really fast junior dev. Still need seniors to review and architect.",
    likes: 567,
    replies: 34,
    timestamp: '1h'
  }
];

// =====================================================
// State
// =====================================================

let state = {
  currentTab: 'feed',
  isPlaying: false,
  currentYapId: null,
  isRecording: false,
  recordingTime: 0,
  playbackSpeed: 1,
  likedYaps: new Set()
};

// =====================================================
// DOM Elements
// =====================================================

const feed = document.getElementById('feed');
const recordFab = document.getElementById('recordFab');
const recordModal = document.getElementById('recordModal');
const closeRecordModal = document.getElementById('closeRecordModal');
const startRecording = document.getElementById('startRecording');
const cancelRecording = document.getElementById('cancelRecording');
const sendRecording = document.getElementById('sendRecording');
const recordingTimer = document.getElementById('recordingTimer');
const recordingCanvas = document.getElementById('recordingCanvas');
const nowPlaying = document.getElementById('nowPlaying');
const playPauseMini = document.getElementById('playPauseMini');
const closePlayer = document.getElementById('closePlayer');
const speedBtn = document.getElementById('speedBtn');
const progressFill = document.getElementById('progressFill');
const yapDetailModal = document.getElementById('yapDetailModal');
const closeYapDetail = document.getElementById('closeYapDetail');
const yapDetailContent = document.getElementById('yapDetailContent');
const yapReplies = document.getElementById('yapReplies');
const tabBtns = document.querySelectorAll('.tab-btn');
const navBtns = document.querySelectorAll('.nav-btn');
const topicChips = document.querySelectorAll('.topic-chip');

// =====================================================
// Waveform Generator
// =====================================================

function generateWaveformData(length = 50) {
  const data = [];
  for (let i = 0; i < length; i++) {
    // Create natural-looking audio waveform
    const base = Math.sin(i * 0.3) * 0.3 + 0.5;
    const noise = Math.random() * 0.4;
    data.push(Math.min(1, Math.max(0.1, base + noise)));
  }
  return data;
}

function drawWaveform(canvas, data, playedPercent = 0, options = {}) {
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const barWidth = options.barWidth || 3;
  const gap = options.gap || 2;
  const activeColor = options.activeColor || '#7C3AED';
  const inactiveColor = options.inactiveColor || '#3D3D4D';
  const playedColor = options.playedColor || '#A78BFA';
  
  ctx.clearRect(0, 0, width, height);
  
  const totalBars = Math.floor(width / (barWidth + gap));
  const step = Math.floor(data.length / totalBars);
  
  for (let i = 0; i < totalBars; i++) {
    const dataIndex = Math.min(i * step, data.length - 1);
    const value = data[dataIndex];
    const barHeight = value * (height * 0.8);
    const x = i * (barWidth + gap);
    const y = (height - barHeight) / 2;
    
    const percent = i / totalBars;
    if (percent < playedPercent) {
      ctx.fillStyle = playedColor;
    } else {
      ctx.fillStyle = inactiveColor;
    }
    
    ctx.beginPath();
    ctx.roundRect(x, y, barWidth, barHeight, 1);
    ctx.fill();
  }
}

// =====================================================
// Render Functions
// =====================================================

function renderYapCard(yap, isReply = false) {
  const waveformData = generateWaveformData();
  const isLiked = state.likedYaps.has(yap.id);
  
  const card = document.createElement('div');
  card.className = 'yap-card';
  card.dataset.yapId = yap.id;
  
  card.innerHTML = `
    <div class="yap-header">
      <div class="yap-avatar" style="background: linear-gradient(135deg, hsl(${yap.id * 50}, 70%, 50%), hsl(${yap.id * 50 + 60}, 70%, 50%))">
        ${yap.user.avatar}
      </div>
      <div class="yap-user-info">
        <div class="yap-username">
          ${yap.user.name}
          ${yap.user.verified ? '<span class="verified-badge">✓</span>' : ''}
        </div>
        <div class="yap-handle">${yap.user.handle}</div>
      </div>
      <span class="yap-time">${yap.timestamp}</span>
      <button class="yap-more">⋮</button>
    </div>
    
    <div class="yap-player" data-yap-id="${yap.id}">
      <button class="play-btn" data-yap-id="${yap.id}">
        <svg class="play-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </button>
      <div class="waveform-container">
        <canvas class="waveform" width="200" height="40" data-yap-id="${yap.id}"></canvas>
      </div>
      <span class="yap-duration">${formatDuration(yap.duration)}</span>
    </div>
    
    ${yap.topic ? `<span class="yap-topic">${yap.topic}</span>` : ''}
    
    <p class="yap-transcript">${yap.transcript}</p>
    
    ${!isReply ? `
    <div class="yap-actions">
      <button class="action-btn reply-action" data-yap-id="${yap.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        ${formatNumber(yap.replies)}
      </button>
      <button class="action-btn reyap-action" data-yap-id="${yap.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="17 1 21 5 17 9"></polyline>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
          <polyline points="7 23 3 19 7 15"></polyline>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
        </svg>
        ${formatNumber(yap.reYaps || 0)}
      </button>
      <button class="action-btn like-action ${isLiked ? 'liked' : ''}" data-yap-id="${yap.id}">
        <svg viewBox="0 0 24 24" fill="${isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        ${formatNumber(isLiked ? yap.likes + 1 : yap.likes)}
      </button>
      <button class="action-btn share-action" data-yap-id="${yap.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
          <polyline points="16 6 12 2 8 6"></polyline>
          <line x1="12" y1="2" x2="12" y2="15"></line>
        </svg>
      </button>
    </div>
    ` : ''}
  `;
  
  // Draw waveform after adding to DOM
  setTimeout(() => {
    const canvas = card.querySelector('.waveform');
    if (canvas) {
      drawWaveform(canvas, waveformData);
    }
  }, 10);
  
  return card;
}

function renderFeed() {
  feed.innerHTML = '';
  sampleYaps.forEach(yap => {
    const card = renderYapCard(yap);
    feed.appendChild(card);
  });
  
  // Add click handlers
  addYapEventListeners();
}

function addYapEventListeners() {
  // Play buttons
  document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const yapId = parseInt(btn.dataset.yapId);
      togglePlay(yapId, btn);
    });
  });
  
  // Like buttons
  document.querySelectorAll('.like-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const yapId = parseInt(btn.dataset.yapId);
      toggleLike(yapId, btn);
    });
  });
  
  // Reply buttons
  document.querySelectorAll('.reply-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const yapId = parseInt(btn.dataset.yapId);
      openYapDetail(yapId);
    });
  });
  
  // Card click (open detail)
  document.querySelectorAll('.yap-card').forEach(card => {
    card.addEventListener('click', () => {
      const yapId = parseInt(card.dataset.yapId);
      openYapDetail(yapId);
    });
  });
}

// =====================================================
// Playback Functions
// =====================================================

let playbackInterval;
let currentPlayTime = 0;

function togglePlay(yapId, btn) {
  const yap = sampleYaps.find(y => y.id === yapId);
  if (!yap) return;
  
  // Stop any current playback
  if (state.isPlaying && state.currentYapId !== yapId) {
    stopPlayback();
  }
  
  if (state.isPlaying && state.currentYapId === yapId) {
    // Pause
    pausePlayback();
    btn.innerHTML = `
      <svg class="play-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    `;
    btn.classList.remove('playing');
  } else {
    // Play
    startPlayback(yap, btn);
    btn.innerHTML = `
      <svg class="pause-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
      </svg>
    `;
    btn.classList.add('playing');
    
    // Show now playing bar
    showNowPlaying(yap);
  }
}

function startPlayback(yap, btn) {
  state.isPlaying = true;
  state.currentYapId = yap.id;
  currentPlayTime = 0;
  
  const canvas = document.querySelector(`.waveform[data-yap-id="${yap.id}"]`);
  const waveformData = generateWaveformData();
  
  playbackInterval = setInterval(() => {
    currentPlayTime += 100 * state.playbackSpeed;
    const percent = currentPlayTime / (yap.duration * 1000);
    
    if (percent >= 1) {
      stopPlayback();
      btn.innerHTML = `
        <svg class="play-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
      btn.classList.remove('playing');
      hideNowPlaying();
      return;
    }
    
    // Update waveform
    if (canvas) {
      drawWaveform(canvas, waveformData, percent);
    }
    
    // Update progress bar
    progressFill.style.width = `${percent * 100}%`;
    
    // Update now playing duration
    const nowPlayingDuration = document.querySelector('.now-playing-duration');
    if (nowPlayingDuration) {
      nowPlayingDuration.textContent = `${formatDuration(Math.floor(currentPlayTime / 1000))} / ${formatDuration(yap.duration)}`;
    }
  }, 100);
}

function pausePlayback() {
  state.isPlaying = false;
  if (playbackInterval) {
    clearInterval(playbackInterval);
  }
}

function stopPlayback() {
  state.isPlaying = false;
  state.currentYapId = null;
  currentPlayTime = 0;
  if (playbackInterval) {
    clearInterval(playbackInterval);
  }
  
  // Reset all waveforms
  document.querySelectorAll('.waveform').forEach(canvas => {
    drawWaveform(canvas, generateWaveformData());
  });
}

function showNowPlaying(yap) {
  nowPlaying.classList.add('active');
  document.querySelector('.now-playing-user').textContent = yap.user.handle;
  document.querySelector('.now-playing-duration').textContent = `0:00 / ${formatDuration(yap.duration)}`;
  
  // Draw mini waveform
  const miniCanvas = document.getElementById('miniWaveform');
  drawWaveform(miniCanvas, generateWaveformData(), 0, { barWidth: 2, gap: 1 });
}

function hideNowPlaying() {
  nowPlaying.classList.remove('active');
}

// =====================================================
// Recording Functions
// =====================================================

let recordingInterval;
let recordingCtx;

function openRecordModal() {
  recordModal.classList.add('active');
  recordingCtx = recordingCanvas.getContext('2d');
  drawRecordingVisualizer();
}

function closeRecordModalFn() {
  recordModal.classList.remove('active');
  stopRecording();
}

function toggleRecording() {
  if (state.isRecording) {
    stopRecording();
  } else {
    startRecordingFn();
  }
}

function startRecordingFn() {
  state.isRecording = true;
  state.recordingTime = 0;
  startRecording.classList.add('recording');
  sendRecording.disabled = false;
  
  recordingInterval = setInterval(() => {
    state.recordingTime++;
    recordingTimer.textContent = formatDuration(state.recordingTime);
    drawRecordingVisualizer();
    
    if (state.recordingTime >= 90) {
      stopRecording();
    }
  }, 1000);
}

function stopRecording() {
  state.isRecording = false;
  startRecording.classList.remove('recording');
  if (recordingInterval) {
    clearInterval(recordingInterval);
  }
}

function drawRecordingVisualizer() {
  const width = recordingCanvas.width;
  const height = recordingCanvas.height;
  
  recordingCtx.fillStyle = '#252532';
  recordingCtx.fillRect(0, 0, width, height);
  
  const barCount = 40;
  const barWidth = 4;
  const gap = (width - barCount * barWidth) / (barCount - 1);
  
  for (let i = 0; i < barCount; i++) {
    const amplitude = state.isRecording ? 
      Math.random() * 0.8 + 0.2 : 
      0.1;
    const barHeight = amplitude * (height * 0.8);
    const x = i * (barWidth + gap);
    const y = (height - barHeight) / 2;
    
    recordingCtx.fillStyle = state.isRecording ? '#F97316' : '#3D3D4D';
    recordingCtx.beginPath();
    recordingCtx.roundRect(x, y, barWidth, barHeight, 2);
    recordingCtx.fill();
  }
}

function sendYap() {
  // Simulate sending
  const newYap = {
    id: Date.now(),
    user: {
      name: 'You',
      handle: '@you',
      avatar: 'Y',
      verified: false
    },
    duration: state.recordingTime,
    topic: document.querySelector('.topic-chip.active')?.textContent || '#random',
    transcript: "Your voice yap would be transcribed here...",
    likes: 0,
    replies: 0,
    reYaps: 0,
    timestamp: 'now'
  };
  
  sampleYaps.unshift(newYap);
  renderFeed();
  closeRecordModalFn();
  
  // Show toast
  showToast('Yap posted! 🎙️');
}

// =====================================================
// Yap Detail
// =====================================================

function openYapDetail(yapId) {
  const yap = sampleYaps.find(y => y.id === yapId);
  if (!yap) return;
  
  yapDetailContent.innerHTML = '';
  yapDetailContent.appendChild(renderYapCard(yap));
  
  // Render replies
  yapReplies.innerHTML = '<h3>Replies</h3>';
  replyYaps.forEach(reply => {
    yapReplies.appendChild(renderYapCard(reply, true));
  });
  
  yapDetailModal.classList.add('active');
  
  // Re-add event listeners
  addYapEventListeners();
}

function closeYapDetailFn() {
  yapDetailModal.classList.remove('active');
}

// =====================================================
// Utility Functions
// =====================================================

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function toggleLike(yapId, btn) {
  if (state.likedYaps.has(yapId)) {
    state.likedYaps.delete(yapId);
    btn.classList.remove('liked');
  } else {
    state.likedYaps.add(yapId);
    btn.classList.add('liked');
    // Animate
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 200);
  }
  
  const yap = sampleYaps.find(y => y.id === yapId);
  const count = state.likedYaps.has(yapId) ? yap.likes + 1 : yap.likes;
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="${state.likedYaps.has(yapId) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
    ${formatNumber(count)}
  `;
}

function cycleSpeed() {
  const speeds = [1, 1.5, 2];
  const currentIndex = speeds.indexOf(state.playbackSpeed);
  state.playbackSpeed = speeds[(currentIndex + 1) % speeds.length];
  speedBtn.textContent = state.playbackSpeed + 'x';
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 160px;
    left: 50%;
    transform: translateX(-50%);
    background: #1E1E2A;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 200;
    box-shadow: 0 4px 16px rgba(0,0,0,0.4);
    animation: fadeIn 0.3s ease;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// =====================================================
// Event Listeners
// =====================================================

// Record FAB
recordFab.addEventListener('click', openRecordModal);

// Record Modal
closeRecordModal.addEventListener('click', closeRecordModalFn);
startRecording.addEventListener('click', toggleRecording);
cancelRecording.addEventListener('click', closeRecordModalFn);
sendRecording.addEventListener('click', sendYap);
recordModal.querySelector('.modal-backdrop').addEventListener('click', closeRecordModalFn);

// Now Playing
closePlayer.addEventListener('click', () => {
  stopPlayback();
  hideNowPlaying();
});
speedBtn.addEventListener('click', cycleSpeed);
playPauseMini.addEventListener('click', () => {
  if (state.currentYapId) {
    const btn = document.querySelector(`.play-btn[data-yap-id="${state.currentYapId}"]`);
    if (btn) togglePlay(state.currentYapId, btn);
  }
});

// Yap Detail Modal
closeYapDetail.addEventListener('click', closeYapDetailFn);
yapDetailModal.querySelector('.modal-backdrop').addEventListener('click', closeYapDetailFn);

// Tabs
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.currentTab = btn.dataset.tab;
  });
});

// Bottom Nav
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    if (btn.dataset.view === 'profile') {
      showToast('Profile coming soon!');
    } else if (btn.dataset.view === 'discover') {
      showToast('Discover coming soon!');
    } else if (btn.dataset.view === 'activity') {
      showToast('Activity coming soon!');
    }
  });
});

// Topic chips
topicChips.forEach(chip => {
  chip.addEventListener('click', () => {
    topicChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

// =====================================================
// Initialize
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  renderFeed();
});
