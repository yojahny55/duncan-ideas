// ========================================
// Nudge — ADHD Focus Companion
// Interactive Prototype
// ========================================

// --- Task Data ---
const tasks = [
  {
    emoji: '📧',
    category: 'Admin · Low Energy',
    name: 'Reply to Sarah\'s email',
    estimate: 10,
    energy: 1,
    microtasks: [
      { text: 'Open inbox & find Sarah\'s thread', time: '2m' },
      { text: 'Read her message carefully', time: '3m' },
      { text: 'Draft your reply (just the key points)', time: '3m' },
      { text: 'Quick proofread & hit send', time: '2m' },
    ]
  },
  {
    emoji: '🎨',
    category: 'Creative · High Energy',
    name: 'Design the landing page hero',
    estimate: 25,
    energy: 4,
    microtasks: [
      { text: 'Open Figma and find the project', time: '2m' },
      { text: 'Sketch 3 rough layout options', time: '8m' },
      { text: 'Pick the strongest and refine', time: '10m' },
      { text: 'Add copy and finalize spacing', time: '5m' },
    ]
  },
  {
    emoji: '🧹',
    category: 'Chore · Low Energy',
    name: 'Clean the kitchen counter',
    estimate: 8,
    energy: 1,
    microtasks: [
      { text: 'Clear everything off the counter', time: '2m' },
      { text: 'Wipe down the surface', time: '2m' },
      { text: 'Put items back in their spots', time: '2m' },
      { text: 'Quick sweep the floor around it', time: '2m' },
    ]
  },
  {
    emoji: '📝',
    category: 'Work · Medium Energy',
    name: 'Write the project status update',
    estimate: 15,
    energy: 2,
    microtasks: [
      { text: 'Open the doc and review last update', time: '2m' },
      { text: 'List what you accomplished this week', time: '4m' },
      { text: 'Note any blockers or risks', time: '3m' },
      { text: 'Write next week\'s goals & send', time: '6m' },
    ]
  },
  {
    emoji: '💪',
    category: 'Health · High Energy',
    name: 'Quick 15-min workout',
    estimate: 15,
    energy: 4,
    microtasks: [
      { text: 'Change into workout clothes', time: '2m' },
      { text: 'Warm-up: jumping jacks + stretches', time: '3m' },
      { text: 'Main set: bodyweight circuit', time: '8m' },
      { text: 'Cool down & stretch', time: '2m' },
    ]
  },
  {
    emoji: '📚',
    category: 'Learning · Medium Energy',
    name: 'Read 10 pages of your book',
    estimate: 12,
    energy: 2,
    microtasks: [
      { text: 'Find your book and get comfy', time: '1m' },
      { text: 'Read pages 1-5', time: '5m' },
      { text: 'Read pages 6-10', time: '5m' },
      { text: 'Jot down one takeaway', time: '1m' },
    ]
  },
  {
    emoji: '🛒',
    category: 'Errand · Low Energy',
    name: 'Order groceries for the week',
    estimate: 12,
    energy: 1,
    microtasks: [
      { text: 'Check fridge & pantry for what\'s low', time: '3m' },
      { text: 'Open delivery app and search items', time: '4m' },
      { text: 'Review cart and remove extras', time: '3m' },
      { text: 'Place the order', time: '2m' },
    ]
  }
];

// --- State ---
let state = {
  currentTaskIndex: 0,
  energy: 3,
  timerRunning: false,
  timerPaused: false,
  seconds: 0,
  timerInterval: null,
  nudgeTimeout: null,
  tasksCompleted: 3,
  focusMinutes: 47,
  completedMicrotasks: [true, true, false, false],
  streak: 3,
};

// --- Nudge Messages ---
const nudgeMessages = [
  { emoji: '👋', message: 'Hey, still working on that?', sub: 'No judgment — just checking in.' },
  { emoji: '🧠', message: 'Quick brain check!', sub: 'Are you on track, or did something shiny catch your eye?' },
  { emoji: '☕', message: 'Still in the zone?', sub: 'Just making sure you haven\'t wandered off.' },
  { emoji: '🌊', message: 'Riding the focus wave?', sub: 'You\'re doing great. Keep going if it feels right.' },
  { emoji: '🎯', message: 'Focus check-in', sub: 'Remember: you only need to finish this one small thing.' },
];

const hyperfocusMessages = [
  { emoji: '⏰', message: 'Whoa, 90 minutes already!', sub: 'Water? Stretch? Your body will thank you.' },
  { emoji: '🧘', message: 'Hyperfocus detected!', sub: 'You\'ve been locked in a while. Quick break?' },
  { emoji: '💧', message: 'Time reality check:', sub: 'You started 90 mins ago. Drink some water, legend.' },
];

const celebrations = [
  { emoji: '🎉', title: 'Nice work!' },
  { emoji: '⭐', title: 'Crushed it!' },
  { emoji: '🚀', title: 'Task demolished!' },
  { emoji: '✨', title: 'Look at you go!' },
  { emoji: '💪', title: 'That\'s the stuff!' },
  { emoji: '🌟', title: 'Momentum building!' },
];

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderMomentumBubbles();
  renderCurrentTask();
  initEnergyPills();
  initMicroTaskChecks();
});

// --- Energy Pills ---
function initEnergyPills() {
  document.querySelectorAll('.energy-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.energy-pill').forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-checked', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-checked', 'true');
      state.energy = parseInt(pill.dataset.energy);
    });
  });
}

// --- Momentum Bubbles ---
function renderMomentumBubbles() {
  const container = document.getElementById('momentum-bubbles');
  container.innerHTML = '';
  
  const totalTasks = 7;
  for (let i = 0; i < totalTasks; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    if (i < state.tasksCompleted) {
      bubble.classList.add('completed');
      bubble.textContent = '✓';
      bubble.setAttribute('aria-label', `Task ${i + 1}: completed`);
    } else if (i === state.tasksCompleted) {
      bubble.classList.add('current');
      bubble.textContent = '→';
      bubble.setAttribute('aria-label', `Task ${i + 1}: in progress`);
    } else {
      bubble.classList.add('upcoming');
      bubble.setAttribute('aria-label', `Task ${i + 1}: upcoming`);
    }
    
    container.appendChild(bubble);
  }
}

// --- Render Current Task ---
function renderCurrentTask() {
  const task = tasks[state.currentTaskIndex % tasks.length];
  
  document.getElementById('task-emoji').textContent = task.emoji;
  document.getElementById('task-category').textContent = task.category;
  document.getElementById('task-name').textContent = task.name;
  document.getElementById('task-estimate').innerHTML = `<span>⏱️</span><span>Est. ${task.estimate} min</span>`;
  
  // Reset timer display
  document.getElementById('timer-display').textContent = '00:00';
  document.getElementById('timer-display').classList.remove('running', 'overtime');
  
  // Reset progress ring
  const progress = document.getElementById('timer-progress');
  progress.style.strokeDashoffset = '276.46';
  progress.classList.remove('overtime');
  
  // Reset actions
  document.getElementById('task-actions').innerHTML = `
    <button class="btn btn-primary btn-lg" id="start-btn" onclick="startTask()">
      ▶️ Start Focus
    </button>
  `;
  
  // Reset card state
  const card = document.getElementById('task-card');
  card.classList.remove('active', 'completed');
  
  // Render microtasks
  renderMicroTasks(task);
  
  // Add fade-in animation
  card.classList.add('fade-in');
}

function renderMicroTasks(task) {
  const container = document.getElementById('micro-tasks');
  state.completedMicrotasks = task.microtasks.map(() => false);
  
  container.innerHTML = task.microtasks.map((mt, i) => `
    <div class="micro-task ${state.completedMicrotasks[i] ? 'done' : ''}" data-index="${i}">
      <button class="micro-task-check" aria-label="${state.completedMicrotasks[i] ? 'Completed' : 'Mark complete'}" 
              onclick="toggleMicroTask(${i})">
        ${state.completedMicrotasks[i] ? '✓' : ''}
      </button>
      <span class="micro-task-text">${mt.text}</span>
      <span class="micro-task-time">${mt.time}</span>
    </div>
  `).join('');
}

function initMicroTaskChecks() {
  // Handled via onclick in renderMicroTasks
}

function toggleMicroTask(index) {
  state.completedMicrotasks[index] = !state.completedMicrotasks[index];
  
  const microTasks = document.querySelectorAll('.micro-task');
  const mt = microTasks[index];
  
  if (state.completedMicrotasks[index]) {
    mt.classList.add('done');
    mt.querySelector('.micro-task-check').textContent = '✓';
    mt.querySelector('.micro-task-check').setAttribute('aria-label', 'Completed');
  } else {
    mt.classList.remove('done');
    mt.querySelector('.micro-task-check').textContent = '';
    mt.querySelector('.micro-task-check').setAttribute('aria-label', 'Mark complete');
  }
  
  // Check if all microtasks are done
  if (state.completedMicrotasks.every(Boolean) && state.timerRunning) {
    completeTask();
  }
}

// --- Timer ---
function startTask() {
  state.timerRunning = true;
  state.timerPaused = false;
  state.seconds = 0;
  
  const card = document.getElementById('task-card');
  card.classList.add('active');
  
  document.getElementById('timer-display').classList.add('running');
  
  // Update action buttons
  document.getElementById('task-actions').innerHTML = `
    <button class="btn btn-ghost btn-icon" onclick="pauseTask()" aria-label="Pause" id="pause-btn">⏸️</button>
    <button class="btn btn-success btn-lg" onclick="completeTask()">✅ Done!</button>
    <button class="btn btn-ghost btn-icon" onclick="skipTask()" aria-label="Skip">⏭️</button>
  `;
  
  // Start timer
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(updateTimer, 1000);
  
  // Schedule nudge
  scheduleNudge();
}

function pauseTask() {
  if (state.timerPaused) {
    // Resume
    state.timerPaused = false;
    state.timerInterval = setInterval(updateTimer, 1000);
    document.getElementById('pause-btn').textContent = '⏸️';
    document.getElementById('timer-display').classList.add('running');
    scheduleNudge();
  } else {
    // Pause
    state.timerPaused = true;
    clearInterval(state.timerInterval);
    clearTimeout(state.nudgeTimeout);
    document.getElementById('pause-btn').textContent = '▶️';
    document.getElementById('timer-display').classList.remove('running');
  }
}

function updateTimer() {
  state.seconds++;
  
  const mins = Math.floor(state.seconds / 60);
  const secs = state.seconds % 60;
  const display = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
  document.getElementById('timer-display').textContent = display;
  
  // Update ring progress
  const task = tasks[state.currentTaskIndex % tasks.length];
  const totalSeconds = task.estimate * 60;
  const progress = Math.min(state.seconds / totalSeconds, 1);
  const circumference = 276.46;
  const offset = circumference - (progress * circumference);
  
  const ring = document.getElementById('timer-progress');
  ring.style.strokeDashoffset = Math.max(offset, 0);
  
  // Overtime visual
  if (state.seconds > totalSeconds) {
    ring.classList.add('overtime');
    document.getElementById('timer-display').classList.add('overtime');
    document.getElementById('timer-display').classList.remove('running');
  }
}

function scheduleNudge() {
  clearTimeout(state.nudgeTimeout);
  
  // Show a nudge after 30 seconds (accelerated for demo, would be 5-10 min in real app)
  state.nudgeTimeout = setTimeout(() => {
    if (state.timerRunning && !state.timerPaused) {
      showNudge();
    }
  }, 30000);
}

// --- Nudge System ---
function showNudge() {
  const messages = state.seconds > 5400 ? hyperfocusMessages : nudgeMessages;
  const nudge = messages[Math.floor(Math.random() * messages.length)];
  
  document.getElementById('nudge-alert').querySelector('.nudge-emoji').textContent = nudge.emoji;
  document.getElementById('nudge-message').textContent = nudge.message;
  document.getElementById('nudge-submessage').textContent = nudge.sub;
  document.getElementById('nudge-alert').classList.add('show');
}

function dismissNudge(action) {
  document.getElementById('nudge-alert').classList.remove('show');
  
  if (action === 'break') {
    pauseTask();
  } else {
    // Reschedule next nudge
    scheduleNudge();
  }
}

// --- Task Completion ---
function completeTask() {
  clearInterval(state.timerInterval);
  clearTimeout(state.nudgeTimeout);
  state.timerRunning = false;
  
  const task = tasks[state.currentTaskIndex % tasks.length];
  const actualMinutes = Math.ceil(state.seconds / 60);
  const diff = actualMinutes - task.estimate;
  
  // Update stats
  state.tasksCompleted++;
  state.focusMinutes += actualMinutes;
  
  // Pick celebration
  const celeb = celebrations[Math.floor(Math.random() * celebrations.length)];
  
  document.getElementById('celebration').querySelector('.celebration-emoji').textContent = celeb.emoji;
  document.getElementById('celebration-title').textContent = celeb.title;
  
  let timeMessage;
  if (diff <= 0) {
    timeMessage = `You finished in ${actualMinutes} min — ${Math.abs(diff)} min under your estimate! 🎯`;
  } else if (diff <= 2) {
    timeMessage = `Done in ${actualMinutes} min — almost exactly your ${task.estimate} min estimate!`;
  } else {
    timeMessage = `Took ${actualMinutes} min (estimated ${task.estimate}). You're learning your pace! 📈`;
  }
  document.getElementById('celebration-message').textContent = timeMessage;
  
  // Show celebration
  document.getElementById('celebration').classList.add('show');
  
  // Confetti!
  spawnConfetti();
  
  // Update momentum display
  document.getElementById('tasks-done').textContent = state.tasksCompleted;
  document.getElementById('focus-time').textContent = `${state.focusMinutes}m`;
  renderMomentumBubbles();
  
  // Mark card as completed
  document.getElementById('task-card').classList.add('completed');
  document.getElementById('task-card').classList.remove('active');
}

function nextTask() {
  document.getElementById('celebration').classList.remove('show');
  state.currentTaskIndex++;
  state.seconds = 0;
  renderCurrentTask();
  renderMomentumBubbles();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Pick For Me ---
function pickForMe() {
  const card = document.getElementById('task-card');
  
  // Shuffle animation
  card.style.transition = 'transform 0.2s ease-in-out, opacity 0.2s';
  
  let shuffleCount = 0;
  const shuffleInterval = setInterval(() => {
    shuffleCount++;
    state.currentTaskIndex = Math.floor(Math.random() * tasks.length);
    
    const task = tasks[state.currentTaskIndex];
    document.getElementById('task-emoji').textContent = task.emoji;
    document.getElementById('task-name').textContent = task.name;
    document.getElementById('task-category').textContent = task.category;
    
    card.style.transform = `scale(${0.95 + Math.random() * 0.1})`;
    
    if (shuffleCount >= 8) {
      clearInterval(shuffleInterval);
      card.style.transform = 'scale(1)';
      renderCurrentTask();
    }
  }, 120);
}

function skipTask() {
  const card = document.getElementById('task-card');
  
  // Slide out animation
  card.style.transition = 'transform 0.3s ease-in, opacity 0.3s';
  card.style.transform = 'translateX(100px)';
  card.style.opacity = '0';
  
  setTimeout(() => {
    // Stop timer if running
    if (state.timerRunning) {
      clearInterval(state.timerInterval);
      clearTimeout(state.nudgeTimeout);
      state.timerRunning = false;
    }
    
    state.currentTaskIndex = (state.currentTaskIndex + 1) % tasks.length;
    state.seconds = 0;
    
    card.style.transition = 'none';
    card.style.transform = 'translateX(-100px)';
    
    renderCurrentTask();
    
    requestAnimationFrame(() => {
      card.style.transition = 'transform 0.3s ease-out, opacity 0.3s';
      card.style.transform = 'translateX(0)';
      card.style.opacity = '1';
    });
  }, 300);
}

// --- Confetti ---
function spawnConfetti() {
  const colors = ['#8B5CF6', '#C4B5FD', '#10B981', '#F59E0B', '#F43F5E', '#6EE7B7', '#FDE68A'];
  
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `-10px`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    piece.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
    piece.style.width = `${6 + Math.random() * 8}px`;
    piece.style.height = `${6 + Math.random() * 8}px`;
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    
    document.body.appendChild(piece);
    
    setTimeout(() => piece.remove(), 3000);
  }
}

// --- Demo: Show nudge after 30s of inactivity on page ---
let demoNudgeTimer;
function resetDemoNudge() {
  clearTimeout(demoNudgeTimer);
  demoNudgeTimer = setTimeout(() => {
    if (!state.timerRunning) {
      showNudge();
    }
  }, 45000);
}

document.addEventListener('click', resetDemoNudge);
resetDemoNudge();
