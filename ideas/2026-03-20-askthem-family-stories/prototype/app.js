// AskThem — Family Story Preservation App

// Screen navigation
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
  }

  // Update bottom nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  // Reset recording if leaving session
  if (id !== 'screen-session' && isRecording) {
    stopRecording();
  }

  // Init waveform for session screen
  if (id === 'screen-session') {
    initLiveWaveform();
    startTimer();
  } else {
    stopTimer();
  }
}

// Recording state
let isRecording = false;
let timerInterval = null;
let seconds = 0;
let waveformInterval = null;

function toggleRecording() {
  if (isRecording) {
    stopRecording();
  } else {
    startRecording();
  }
}

function startRecording() {
  isRecording = true;
  const circle = document.getElementById('recCircle');
  const label = document.getElementById('recLabel');
  circle.classList.add('recording');
  label.textContent = 'Recording...';

  // Animate waveform
  document.querySelectorAll('.live-bar').forEach(bar => bar.classList.add('active'));
  waveformInterval = setInterval(animateWaveform, 150);

  // Show AI suggestion after 5 seconds (demo)
  setTimeout(() => {
    if (isRecording) {
      const suggestions = document.getElementById('aiSuggestions');
      if (suggestions) suggestions.style.display = 'block';
    }
  }, 5000);
}

function stopRecording() {
  isRecording = false;
  const circle = document.getElementById('recCircle');
  const label = document.getElementById('recLabel');
  circle.classList.remove('recording');
  label.textContent = 'Tap to Record';

  document.querySelectorAll('.live-bar').forEach(bar => {
    bar.classList.remove('active');
    bar.style.height = '8px';
  });

  if (waveformInterval) {
    clearInterval(waveformInterval);
    waveformInterval = null;
  }
}

function initLiveWaveform() {
  const container = document.getElementById('liveWaveform');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 40; i++) {
    const bar = document.createElement('div');
    bar.className = 'live-bar';
    bar.style.height = '8px';
    container.appendChild(bar);
  }
}

function animateWaveform() {
  document.querySelectorAll('.live-bar.active').forEach(bar => {
    const height = Math.random() * 50 + 5;
    bar.style.height = height + 'px';
  });
}

// Timer
function startTimer() {
  seconds = 0;
  updateTimer();
  timerInterval = setInterval(() => {
    seconds++;
    updateTimer();
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimer() {
  const el = document.getElementById('sessionTimer');
  if (!el) return;
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  el.textContent = `${m}:${s}`;
}

function skipQuestion() {
  // Demo: just show a visual flash
  const qMain = document.querySelector('.q-main');
  if (qMain) {
    const questions = [
      '"What did your neighborhood look like?"',
      '"Who was your favorite teacher?"',
      '"What was your first pet?"',
      '"What scared you as a child?"',
      '"What holidays do you remember most?"'
    ];
    qMain.style.opacity = '0';
    setTimeout(() => {
      qMain.textContent = questions[Math.floor(Math.random() * questions.length)];
      qMain.style.opacity = '1';
    }, 200);
  }
}

function nextQuestion() {
  skipQuestion();
}

function showAiQuestion() {
  const qMain = document.querySelector('.q-main');
  if (qMain) {
    qMain.style.opacity = '0';
    setTimeout(() => {
      qMain.textContent = '"Tell me about Abuela Rosa — what was she like?"';
      qMain.style.opacity = '1';
    }, 200);
  }
  const suggestions = document.getElementById('aiSuggestions');
  if (suggestions) suggestions.style.display = 'none';
}

// Audio player toggle
function togglePlay() {
  const btn = document.getElementById('playBtn');
  if (!btn) return;
  if (btn.textContent === '▶') {
    btn.textContent = '⏸';
    // Simulate progress
    simulateAudioProgress();
  } else {
    btn.textContent = '▶';
  }
}

let audioProgressInterval = null;
function simulateAudioProgress() {
  const progress = document.querySelector('.audio-progress');
  const time = document.querySelector('.audio-time');
  if (!progress) return;
  let pct = 0;
  audioProgressInterval = setInterval(() => {
    pct += 0.5;
    if (pct > 100) {
      clearInterval(audioProgressInterval);
      document.getElementById('playBtn').textContent = '▶';
      pct = 0;
    }
    progress.style.width = pct + '%';
    const totalSec = Math.round(pct / 100 * 754); // 12:34 = 754 sec
    const m = Math.floor(totalSec / 60);
    const s = (totalSec % 60).toString().padStart(2, '0');
    if (time) time.textContent = `${m}:${s} / 12:34`;
  }, 100);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  // Add transition styles to question text
  const qMain = document.querySelector('.q-main');
  if (qMain) qMain.style.transition = 'opacity 0.2s ease';

  // Animate wave bars on hover for story cards
  document.querySelectorAll('.story-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelectorAll('.wave-bar').forEach(bar => {
        const h = Math.random() * 60 + 20;
        bar.style.height = h + '%';
      });
    });
  });
});
