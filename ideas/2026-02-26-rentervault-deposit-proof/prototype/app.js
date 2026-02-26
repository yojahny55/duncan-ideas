// RenterVault — Protect Your Deposit
// Interactive Prototype

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
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Map screens to nav items
  const navMap = {
    'screen-home': 0,
    'screen-rooms': 1,
    'screen-capture': 2,
    'screen-export': 3
  };
  
  const navIndex = navMap[screenId];
  if (navIndex !== undefined) {
    document.querySelectorAll('.nav-item')[navIndex]?.classList.add('active');
  }
}

// Capture type selection
document.querySelectorAll('.capture-type').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.capture-type').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Category selection
document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Format selection
document.querySelectorAll('.format-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.format-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Update current time
function updateTime() {
  const now = new Date();
  const options = { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  };
  const timeStr = now.toLocaleDateString('en-US', options);
  const timeEl = document.getElementById('current-time');
  if (timeEl) {
    timeEl.textContent = timeStr;
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  setInterval(updateTime, 60000);
  
  // Capture button animation
  const captureBtn = document.querySelector('.capture-btn');
  if (captureBtn) {
    captureBtn.addEventListener('click', () => {
      captureBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        captureBtn.style.transform = '';
        alert('📸 Photo captured and saved!\n\n✓ Timestamp: ' + new Date().toLocaleString() + '\n✓ Location: 123 Main St, Apt 4B\n✓ SHA-256 hash generated');
      }, 150);
    });
  }
  
  // Export button animation
  const exportBtn = document.querySelector('.export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      exportBtn.style.transform = 'scale(0.95)';
      exportBtn.innerHTML = '⏳ Generating...';
      setTimeout(() => {
        exportBtn.style.transform = '';
        exportBtn.innerHTML = '<span>📤</span> Generate Evidence Package';
        alert('✅ Evidence Package Generated!\n\n📄 RenterVault_Evidence_123MainSt.pdf\n\nContains:\n• 47 timestamped photos\n• 15 condition notes\n• 12 rent payment proofs\n• 3 repair requests\n• Hash verification page');
      }, 1500);
    });
  }
  
  // Camera placeholder click
  const cameraPlaceholder = document.querySelector('.camera-placeholder');
  if (cameraPlaceholder) {
    cameraPlaceholder.addEventListener('click', () => {
      cameraPlaceholder.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)';
      cameraPlaceholder.innerHTML = `
        <span style="font-size: 32px; animation: pulse 1s infinite;">📷</span>
        <p>Tap the capture button below</p>
      `;
    });
  }
  
  // Room item clicks
  document.querySelectorAll('.room-item').forEach(item => {
    item.addEventListener('click', () => {
      const roomName = item.querySelector('.room-name').textContent;
      if (item.classList.contains('complete')) {
        alert(`📸 ${roomName}\n\nView ${item.querySelector('.room-count').textContent}`);
      } else {
        showScreen('screen-capture');
      }
    });
  });
});

// Add pulse animation via JS
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;
document.head.appendChild(style);
