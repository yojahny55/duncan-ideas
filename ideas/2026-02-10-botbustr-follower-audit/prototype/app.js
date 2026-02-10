/**
 * BotBustr - Follower Audit Tool
 * Interactive prototype JavaScript
 */

// State
const state = {
  currentFilter: 'all',
  isScanning: false,
  score: 70,
  followers: {
    total: 5234,
    real: 3664,
    suspicious: 942,
    bots: 628
  }
};

// DOM Elements
const elements = {
  filterBtns: document.querySelectorAll('.filter-btn'),
  followerItems: document.querySelectorAll('.follower-item'),
  scanBtn: document.getElementById('scanBtn'),
  bulkRemoveBtn: document.getElementById('bulkRemoveBtn'),
  loadMoreBtn: document.getElementById('loadMoreBtn'),
  scoreProgress: document.getElementById('scoreProgress'),
  scoreNumber: document.getElementById('scoreNumber'),
  scoreStatus: document.getElementById('scoreStatus'),
  scoreText: document.getElementById('scoreText')
};

// Filter functionality
function initFilters() {
  elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      elements.filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      state.currentFilter = filter;
      
      // Filter followers
      elements.followerItems.forEach(item => {
        const risk = item.dataset.risk;
        if (filter === 'all') {
          item.style.display = 'flex';
        } else if (filter === 'high' && risk === 'high') {
          item.style.display = 'flex';
        } else if (filter === 'medium' && risk === 'medium') {
          item.style.display = 'flex';
        } else if (filter === 'low' && risk === 'low') {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Scan animation
function initScan() {
  elements.scanBtn.addEventListener('click', async () => {
    if (state.isScanning) return;
    
    state.isScanning = true;
    const originalText = elements.scanBtn.innerHTML;
    
    // Show scanning state
    elements.scanBtn.innerHTML = `
      <div class="loading-spinner"></div>
      Scanning...
    `;
    elements.scanBtn.disabled = true;
    
    // Simulate scan with progress
    for (let i = 0; i <= 100; i += 5) {
      await sleep(100);
      updateScore(Math.min(70, i * 0.7));
    }
    
    // Complete
    await sleep(500);
    elements.scanBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <path d="M22 4L12 14.01l-3-3"/>
      </svg>
      Scan Complete!
    `;
    
    // Reset after delay
    await sleep(2000);
    elements.scanBtn.innerHTML = originalText;
    elements.scanBtn.disabled = false;
    state.isScanning = false;
    
    // Update last scan time
    document.querySelector('.last-scan').textContent = 'Last scan: Just now';
  });
}

// Update score display
function updateScore(score) {
  const circumference = 2 * Math.PI * 88;
  const offset = circumference - (score / 100) * circumference;
  
  elements.scoreProgress.style.strokeDashoffset = offset;
  elements.scoreNumber.textContent = Math.round(score);
  
  // Update class based on score
  elements.scoreProgress.classList.remove('healthy', 'moderate', 'poor');
  elements.scoreStatus.classList.remove('healthy', 'moderate', 'poor');
  
  if (score >= 80) {
    elements.scoreProgress.classList.add('healthy');
    elements.scoreStatus.classList.add('healthy');
    elements.scoreStatus.textContent = 'Healthy';
    elements.scoreText.textContent = 'Your follower base is clean with minimal bot activity.';
  } else if (score >= 50) {
    elements.scoreProgress.classList.add('moderate');
    elements.scoreStatus.classList.add('moderate');
    elements.scoreStatus.textContent = 'Moderate Quality';
    elements.scoreText.textContent = 'Your follower base has some bot activity. Consider cleaning up suspicious accounts.';
  } else {
    elements.scoreProgress.classList.add('poor');
    elements.scoreStatus.classList.add('poor');
    elements.scoreStatus.textContent = 'Needs Attention';
    elements.scoreText.textContent = 'High bot activity detected. We recommend removing suspicious followers.';
  }
}

// Block button handlers
function initBlockButtons() {
  document.querySelectorAll('.follower-item .btn-danger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.closest('.follower-item');
      const name = item.querySelector('.follower-name').textContent;
      
      // Confirm block
      if (confirm(`Block @${item.querySelector('.follower-handle').textContent.replace('@', '')}?`)) {
        // Animate removal
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
          item.remove();
          showToast(`Blocked ${name}`);
          updateStats(-1);
        }, 300);
      }
    });
  });
}

// Bulk remove
function initBulkRemove() {
  elements.bulkRemoveBtn.addEventListener('click', () => {
    const count = state.followers.bots;
    if (confirm(`This will block ${count} accounts flagged as likely bots. Continue?`)) {
      // Remove all high risk items
      document.querySelectorAll('.follower-item[data-risk="high"]').forEach(item => {
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '0';
        setTimeout(() => item.remove(), 300);
      });
      
      // Update stats
      state.followers.bots = 0;
      state.followers.total -= count;
      updateStatsDisplay();
      
      // Update score
      updateScore(92);
      
      showToast(`Blocked ${count} bot accounts`);
      elements.bulkRemoveBtn.textContent = 'All Bots Removed';
      elements.bulkRemoveBtn.disabled = true;
    }
  });
}

// Update stats after removal
function updateStats(delta) {
  state.followers.bots += delta;
  state.followers.total += delta;
  updateStatsDisplay();
}

function updateStatsDisplay() {
  // This would update the stat cards in a real app
  const realPercent = Math.round((state.followers.real / state.followers.total) * 100);
  const suspPercent = Math.round((state.followers.suspicious / state.followers.total) * 100);
  const botPercent = Math.round((state.followers.bots / state.followers.total) * 100);
  
  // Recalculate score
  const newScore = Math.min(100, 100 - (botPercent * 2) - (suspPercent * 0.5));
  updateScore(newScore);
}

// Load more simulation
function initLoadMore() {
  elements.loadMoreBtn.addEventListener('click', () => {
    elements.loadMoreBtn.innerHTML = '<div class="loading-spinner"></div> Loading...';
    elements.loadMoreBtn.disabled = true;
    
    setTimeout(() => {
      // Simulate loading more
      const list = document.getElementById('followerList');
      
      // Add a few more sample items
      const newItems = [
        { name: 'Alex Thompson', handle: '@alexthompson', risk: 'low', percent: 4 },
        { name: 'Bot_Farm_2024', handle: '@botfarm_2024', risk: 'high', percent: 97 },
        { name: 'Digital Marketing Hub', handle: '@dm_hub', risk: 'medium', percent: 55 },
      ];
      
      newItems.forEach(item => {
        const html = createFollowerHTML(item);
        list.insertAdjacentHTML('beforeend', html);
      });
      
      // Re-init handlers
      initBlockButtons();
      
      elements.loadMoreBtn.innerHTML = 'Load More (5,223 remaining)';
      elements.loadMoreBtn.disabled = false;
    }, 1000);
  });
}

// Create follower HTML
function createFollowerHTML(data) {
  const riskClass = data.risk;
  const badgeClass = data.risk === 'high' ? 'danger' : data.risk === 'medium' ? 'warning' : 'success';
  const icon = data.risk === 'low' 
    ? '<path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>'
    : '<path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>';
  
  return `
    <div class="follower-item" data-risk="${riskClass}">
      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${data.handle}" alt="Avatar" class="follower-avatar">
      <div class="follower-info">
        <div class="follower-name">${data.name}</div>
        <div class="follower-handle">${data.handle}</div>
        <div class="follower-meta">
          <span>Loading...</span>
        </div>
      </div>
      <div class="follower-score">
        <span class="bot-probability ${riskClass}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${icon}
          </svg>
          ${data.percent}% Bot
        </span>
      </div>
      <div class="follower-actions">
        <button class="btn btn-${data.risk === 'high' ? 'danger' : 'secondary'} btn-sm">
          ${data.risk === 'high' ? 'Block' : data.risk === 'medium' ? 'Review' : 'Real'}
        </button>
      </div>
    </div>
  `;
}

// Toast notifications
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-gray-900);
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 1000;
    animation: slideUp 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Add toast animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideUp {
    from { transform: translateX(-50%) translateY(20px); opacity: 0; }
    to { transform: translateX(-50%) translateY(0); opacity: 1; }
  }
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
`;
document.head.appendChild(style);

// Utility
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Follower item click for details
function initFollowerClick() {
  elements.followerItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.follower-actions')) return;
      
      const name = item.querySelector('.follower-name').textContent;
      const handle = item.querySelector('.follower-handle').textContent;
      const probability = item.querySelector('.bot-probability').textContent.trim();
      const signals = item.querySelector('.bot-signals').textContent;
      
      alert(`
${name} (${handle})
━━━━━━━━━━━━━━━━━━━━━━━━━━
Bot Probability: ${probability}

Detection Signals:
• ${signals}

Account Analysis:
• Profile completeness: ${Math.random() > 0.5 ? 'Complete' : 'Incomplete'}
• Engagement rate: ${(Math.random() * 5).toFixed(1)}%
• Network connections: ${Math.floor(Math.random() * 100)} mutual followers
      `.trim());
    });
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  initScan();
  initBlockButtons();
  initBulkRemove();
  initLoadMore();
  initFollowerClick();
  
  // Set initial score display
  updateScore(state.score);
  
  console.log('BotBustr initialized');
});
