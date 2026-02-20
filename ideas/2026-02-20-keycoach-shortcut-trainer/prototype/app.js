// KeyCoach Prototype - Interactive Demo

// State
const state = {
  shortcutsLearned: 0,
  timeSaved: 0,
  tipsShown: 0,
  learnedShortcuts: [],
  pendingShortcut: null
};

// DOM Elements
const notification = document.getElementById('notification');
const shortcutKey = document.getElementById('shortcut-key');
const shortcutAction = document.getElementById('shortcut-action');
const successPopup = document.getElementById('success-popup');

// Mock buttons with shortcuts
const mockButtons = document.querySelectorAll('.mock-btn[data-shortcut]');

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
  setupButtonListeners();
  setupKeyboardListeners();
  setupIntensityButtons();
  loadState();
}

// Button click listeners
function setupButtonListeners() {
  mockButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const shortcut = btn.dataset.shortcut;
      const action = btn.dataset.action;
      
      showNotification(shortcut, action);
      state.tipsShown++;
      state.pendingShortcut = shortcut;
      updateStats();
    });
  });
}

// Keyboard listener - detect when user uses shortcut
function setupKeyboardListeners() {
  document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    
    // Check if user pressed the pending shortcut
    if (state.pendingShortcut && key === state.pendingShortcut.toUpperCase()) {
      e.preventDefault();
      hideNotification();
      showSuccess();
      markShortcutLearned(state.pendingShortcut);
      state.pendingShortcut = null;
    }
    
    // Also check if user just knows the shortcut without prompt
    mockButtons.forEach(btn => {
      if (btn.dataset.shortcut.toUpperCase() === key) {
        // Visual feedback on the button
        btn.classList.add('used');
        setTimeout(() => btn.classList.remove('used'), 200);
      }
    });
  });
}

// Intensity button selection
function setupIntensityButtons() {
  const intensityBtns = document.querySelectorAll('.intensity-btn');
  intensityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      intensityBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// Show shortcut notification
function showNotification(shortcut, action) {
  shortcutKey.textContent = shortcut;
  shortcutAction.textContent = action;
  
  // Reset animation
  notification.classList.remove('show');
  void notification.offsetWidth; // Force reflow
  notification.classList.add('show');
  
  // Auto-hide after 3 seconds
  clearTimeout(window.notifTimeout);
  window.notifTimeout = setTimeout(hideNotification, 3000);
}

function hideNotification() {
  notification.classList.remove('show');
  state.pendingShortcut = null;
}

// Show success popup when shortcut is used
function showSuccess() {
  successPopup.classList.add('show');
  setTimeout(() => {
    successPopup.classList.remove('show');
  }, 1500);
}

// Mark shortcut as learned
function markShortcutLearned(shortcut) {
  const btn = document.querySelector(`.mock-btn[data-shortcut="${shortcut}"]`);
  const action = btn ? btn.dataset.action : shortcut;
  
  // Only count if not already learned
  if (!state.learnedShortcuts.find(s => s.key === shortcut)) {
    state.shortcutsLearned++;
    state.timeSaved += 2; // Each shortcut saves ~2 seconds
    state.learnedShortcuts.unshift({
      key: shortcut,
      action: action,
      time: new Date()
    });
    
    // Keep only last 5
    if (state.learnedShortcuts.length > 5) {
      state.learnedShortcuts.pop();
    }
    
    updateLearnedList();
    updateStats();
    updateFluency();
    saveState();
  }
}

// Update stats display
function updateStats() {
  document.getElementById('shortcuts-learned').textContent = state.shortcutsLearned;
  document.getElementById('time-saved').textContent = formatTime(state.timeSaved);
  document.getElementById('tips-shown').textContent = state.tipsShown;
  document.getElementById('qs-today').textContent = state.tipsShown;
}

function formatTime(seconds) {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
}

// Update learned list
function updateLearnedList() {
  const list = document.getElementById('learned-list');
  
  if (state.learnedShortcuts.length === 0) {
    list.innerHTML = '<div class="learned-item empty">Click buttons above to start learning!</div>';
    return;
  }
  
  list.innerHTML = state.learnedShortcuts.map(s => `
    <div class="learned-item">
      <kbd>${s.key}</kbd>
      <span class="learned-action">${s.action}</span>
      <span class="learned-time">${formatTimeAgo(s.time)}</span>
    </div>
  `).join('');
}

function formatTimeAgo(date) {
  const now = new Date();
  const diff = Math.floor((now - new Date(date)) / 1000);
  
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return `${Math.floor(diff / 3600)}h ago`;
}

// Update fluency bar
function updateFluency() {
  const gmailShortcuts = ['C', 'R', 'A', 'F', '#', 'E'];
  const learned = state.learnedShortcuts.map(s => s.key.toUpperCase());
  const gmailLearned = gmailShortcuts.filter(s => learned.includes(s)).length;
  const pct = Math.round((gmailLearned / gmailShortcuts.length) * 100);
  
  document.getElementById('gmail-progress').style.width = `${pct}%`;
  document.getElementById('gmail-pct').textContent = `${pct}%`;
}

// Persist state
function saveState() {
  localStorage.setItem('keycoach-state', JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem('keycoach-state');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(state, parsed);
      updateStats();
      updateLearnedList();
      updateFluency();
    } catch (e) {
      console.error('Failed to load state:', e);
    }
  }
}

// Add some visual polish
document.querySelectorAll('.mock-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-2px)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// Easter egg: Press 'K' to see all shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'k' && e.ctrlKey) {
    e.preventDefault();
    alert('🎹 KeyCoach Shortcuts Demo:\n\n' +
      'C - Compose\n' +
      'R - Reply\n' +
      'A - Reply All\n' +
      'F - Forward\n' +
      '# - Delete\n' +
      'E - Archive\n\n' +
      'Try clicking a button, then pressing the shortcut!');
  }
});

console.log('🎹 KeyCoach Demo loaded! Click buttons to see shortcut tips, then press the shortcut key.');
