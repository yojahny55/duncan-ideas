/**
 * WakeMate — Social Accountability Alarm
 * Interactive Prototype
 */

// Screen Navigation
function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Show target screen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
  
  // Update nav
  updateNav(screenId);
  
  // Start animations for specific screens
  if (screenId === 'screen-connected') {
    startCallTimer();
  }
}

// Update bottom navigation
function updateNav(screenId) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  if (screenId === 'screen-home') {
    document.querySelector('.nav-item:first-child').classList.add('active');
  } else if (screenId === 'screen-onboarding') {
    document.querySelector('.nav-item:nth-child(2)').classList.add('active');
  }
}

// Call Timer
let callTimerInterval;
let callSeconds = 0;

function startCallTimer() {
  callSeconds = 0;
  clearInterval(callTimerInterval);
  
  callTimerInterval = setInterval(() => {
    callSeconds++;
    const minutes = Math.floor(callSeconds / 60);
    const seconds = callSeconds % 60;
    const timerEl = document.querySelector('.call-timer');
    if (timerEl) {
      timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }, 1000);
}

function stopCallTimer() {
  clearInterval(callTimerInterval);
}

// Confirm Awake
function confirmAwake() {
  const btn = document.querySelector('.response-btn');
  if (btn) {
    btn.textContent = '✓ Confirmed!';
    btn.style.background = '#2ECC71';
    btn.disabled = true;
    
    // Show confetti effect
    createConfetti();
    
    setTimeout(() => {
      stopCallTimer();
      showScreen('screen-success');
    }, 1500);
  }
}

// Save Alarm
function saveAlarm() {
  // Show toast
  showToast('Alarm saved! Matching will begin soon.');
  
  // Update home screen status
  setTimeout(() => {
    showScreen('screen-home');
    updateMatchingStatus();
  }, 1000);
}

// Update Matching Status
function updateMatchingStatus() {
  const statusEl = document.querySelector('.alarm-status');
  if (statusEl) {
    // Simulate matching process
    setTimeout(() => {
      statusEl.textContent = 'Buddy found! Ready for tomorrow.';
      statusEl.style.color = '#2ECC71';
      
      // Update animation
      const userIcon = document.querySelector('.user-icon');
      if (userIcon) {
        userIcon.innerHTML = '👥';
      }
    }, 2000);
  }
}

// Toast Notification
function showToast(message) {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: #2D3436;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 1000;
    animation: slideUp 0.3s ease-out;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideDown 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Confetti Effect
function createConfetti() {
  const colors = ['#FF6B35', '#4ECDC4', '#FFE66D', '#2ECC71'];
  const container = document.querySelector('.call-connected');
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.cssText = `
      position: absolute;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}%;
      top: -10px;
      opacity: ${Math.random() * 0.8 + 0.2};
      animation: confetti-fall ${Math.random() * 2 + 1}s linear forwards;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      transform: rotate(${Math.random() * 360}deg);
    `;
    container.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
  }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideUp {
    from { transform: translate(-50%, 100%); opacity: 0; }
    to { transform: translate(-50%, 0); opacity: 1; }
  }
  
  @keyframes slideDown {
    from { transform: translate(-50%, 0); opacity: 1; }
    to { transform: translate(-50%, 100%); opacity: 0; }
  }
  
  @keyframes confetti-fall {
    0% { top: -10px; transform: rotate(0deg); }
    100% { top: 100%; transform: rotate(720deg); }
  }
`;
document.head.appendChild(style);

// Day button toggle
document.querySelectorAll('.day-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

// Time picker interaction
document.querySelectorAll('.scroll-item').forEach(item => {
  item.addEventListener('click', function() {
    const column = this.parentElement;
    column.querySelectorAll('.scroll-item').forEach(i => i.classList.remove('selected'));
    this.classList.add('selected');
  });
});

// Initialize with some interactivity hints
document.addEventListener('DOMContentLoaded', () => {
  // Subtle pulse on the demo button
  const demoBtn = document.querySelector('.btn-secondary');
  if (demoBtn) {
    setInterval(() => {
      demoBtn.style.borderColor = demoBtn.style.borderColor === 'rgb(255, 107, 53)' ? '#DFE6E9' : '#FF6B35';
    }, 2000);
  }
});

// Sound simulation (visual feedback only in prototype)
function playAlarmSound() {
  // In real app: play actual alarm sound
  console.log('🔔 Alarm ringing!');
}

function playSuccessSound() {
  // In real app: play success chime
  console.log('✨ Success!');
}
