// Tab switching
function switchTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  
  document.getElementById('tab-' + tabName).classList.add('active');
  document.querySelector(`.tab[data-tab="${tabName}"]`)?.classList.add('active');
  
  const navMap = { home: 0, swipe: 1, health: 2 };
  document.querySelectorAll('.nav-item')[navMap[tabName]]?.classList.add('active');
}

// Tab click handlers
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => switchTab(tab.dataset.tab));
});

// Swipe animation
function swipe(direction) {
  const card = document.getElementById('photoCard');
  if (!card) return;
  
  if (direction === 'left') {
    card.classList.add('swiping-left');
  } else {
    card.classList.add('swiping-right');
  }
  
  setTimeout(() => {
    card.classList.remove('swiping-left', 'swiping-right');
    card.style.opacity = '1';
  }, 400);
}

function startSwipe(category) {
  switchTab('swipe');
}

function batchAction(action) {
  const msg = action === 'delete-all' ? 'Deleted 7 photos! 🗑️' : 'Kept best photo, deleted 7! ✨';
  const card = document.getElementById('photoCard');
  if (card) {
    card.innerHTML = `<div class="photo-placeholder"><div style="font-size:48px;margin-bottom:12px">${action === 'delete-all' ? '🗑️' : '✨'}</div><p style="color:#94a3b8;font-size:16px">${msg}</p><p style="color:#64748b;font-size:13px;margin-top:8px">Loading next group...</p></div>`;
  }
  setTimeout(() => location.reload(), 1500);
}

// Touch/swipe support
let startX = 0;
const swipeArea = document.getElementById('swipeArea');
if (swipeArea) {
  swipeArea.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
  swipeArea.addEventListener('touchend', e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 60) {
      swipe(diff < 0 ? 'left' : 'right');
    }
  });
}
