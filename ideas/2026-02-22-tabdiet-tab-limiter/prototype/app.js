/* ============================================
   TabDiet - Interactive Demo
   ============================================ */

// Demo state
let currentTabCount = 23;
let tabs = [];

// Initialize demo
document.addEventListener('DOMContentLoaded', () => {
  initializeTabs();
  updateBadge();
  renderTabList();
  
  // Badge click handler
  document.getElementById('ext-badge').addEventListener('click', cycleBadgeCount);
});

// Sample tabs for demo
function initializeTabs() {
  tabs = [
    // Fresh tabs (today)
    { title: 'GitHub Pull Request #127', favicon: '🐙', domain: 'github.com', age: 2, unit: 'hours', status: 'fresh' },
    { title: 'Claude AI Chat', favicon: '🤖', domain: 'claude.ai', age: 1, unit: 'hour', status: 'fresh' },
    { title: 'Stack Overflow - React Hooks', favicon: '📚', domain: 'stackoverflow.com', age: 3, unit: 'hours', status: 'fresh' },
    { title: 'Figma - Dashboard Design', favicon: '🎨', domain: 'figma.com', age: 4, unit: 'hours', status: 'fresh' },
    { title: 'VS Code Web', favicon: '💻', domain: 'vscode.dev', age: 30, unit: 'mins', status: 'fresh' },
    { title: 'Twitter / X - Home', favicon: '🐦', domain: 'twitter.com', age: 1, unit: 'hour', status: 'fresh' },
    { title: 'Gmail - Inbox', favicon: '📧', domain: 'gmail.com', age: 2, unit: 'hours', status: 'fresh' },
    { title: 'Notion - Project Board', favicon: '📝', domain: 'notion.so', age: 5, unit: 'hours', status: 'fresh' },
    
    // Stale tabs (this week)
    { title: 'Amazon - Shopping Cart', favicon: '🛒', domain: 'amazon.com', age: 2, unit: 'days', status: 'stale' },
    { title: 'YouTube - Watch Later', favicon: '🎬', domain: 'youtube.com', age: 3, unit: 'days', status: 'stale' },
    { title: 'Medium - Article', favicon: '📰', domain: 'medium.com', age: 4, unit: 'days', status: 'stale' },
    { title: 'Hacker News', favicon: '🟠', domain: 'news.ycombinator.com', age: 3, unit: 'days', status: 'stale' },
    { title: 'Google Docs - Meeting Notes', favicon: '📄', domain: 'docs.google.com', age: 5, unit: 'days', status: 'stale' },
    { title: 'LinkedIn - Notifications', favicon: '💼', domain: 'linkedin.com', age: 4, unit: 'days', status: 'stale' },
    { title: 'Spotify Web Player', favicon: '🎵', domain: 'open.spotify.com', age: 2, unit: 'days', status: 'stale' },
    { title: 'Netflix - Continue Watching', favicon: '🎬', domain: 'netflix.com', age: 5, unit: 'days', status: 'stale' },
    { title: 'Twitter - Thread', favicon: '🐦', domain: 'twitter.com', age: 6, unit: 'days', status: 'stale' },
    { title: 'Google Search Results', favicon: '🔍', domain: 'google.com', age: 4, unit: 'days', status: 'stale' },
    
    // Rotten tabs (7+ days)
    { title: 'r/productivity - Reddit', favicon: '🔶', domain: 'reddit.com', age: 14, unit: 'days', status: 'rotten' },
    { title: 'Old Article You Meant to Read', favicon: '📖', domain: 'blog.example.com', age: 12, unit: 'days', status: 'rotten' },
    { title: 'Twitter - Saved Tweet', favicon: '🐦', domain: 'twitter.com', age: 10, unit: 'days', status: 'rotten' },
    { title: 'Amazon - Comparison Tab', favicon: '🛒', domain: 'amazon.com', age: 8, unit: 'days', status: 'rotten' },
    { title: 'YouTube Video - Never Watched', favicon: '🎬', domain: 'youtube.com', age: 21, unit: 'days', status: 'rotten' },
  ];
}

// Get zone based on tab count
function getZone(count) {
  if (count <= 10) return { name: 'green', emoji: '🟢', class: 'green' };
  if (count <= 20) return { name: 'yellow', emoji: '🟡', class: 'yellow' };
  if (count <= 30) return { name: 'orange', emoji: '🟠', class: 'orange' };
  return { name: 'red', emoji: '🔴', class: 'red' };
}

// Update badge display
function updateBadge() {
  const badge = document.getElementById('ext-badge');
  const countEl = document.getElementById('badge-count');
  const zoneEl = document.getElementById('badge-zone');
  
  const zone = getZone(currentTabCount);
  
  badge.className = 'extension-badge ' + zone.class;
  countEl.textContent = currentTabCount;
  zoneEl.textContent = zone.emoji;
  
  // Update stats
  document.getElementById('stat-tabs').textContent = currentTabCount;
  document.getElementById('stat-calories').textContent = Math.round(currentTabCount * 8.1);
  document.getElementById('stat-rotten').textContent = tabs.filter(t => t.status === 'rotten').length;
}

// Cycle badge count for demo
function cycleBadgeCount() {
  const counts = [5, 12, 23, 35, 8, 18, 27, 42];
  const currentIndex = counts.indexOf(currentTabCount);
  currentTabCount = counts[(currentIndex + 1) % counts.length];
  updateBadge();
  
  const zone = getZone(currentTabCount);
  showToast(`Tab count: ${currentTabCount} (${zone.name.toUpperCase()} zone)`, zone.name === 'green' ? 'success' : (zone.name === 'red' ? 'error' : 'warning'));
}

// Render tab list
function renderTabList() {
  const list = document.getElementById('tab-list');
  list.innerHTML = '';
  
  tabs.forEach((tab, index) => {
    const item = document.createElement('div');
    item.className = `tab-item ${tab.status}`;
    item.innerHTML = `
      <span class="tab-favicon">${tab.favicon}</span>
      <span class="tab-title">${tab.title}</span>
      <span class="tab-age">${tab.age} ${tab.unit} ago</span>
      <button class="tab-close" onclick="removeTab(${index})">×</button>
    `;
    list.appendChild(item);
  });
}

// Remove a tab
function removeTab(index) {
  const tab = tabs[index];
  tabs.splice(index, 1);
  currentTabCount = Math.max(1, currentTabCount - 1);
  updateBadge();
  renderTabList();
  showToast(`Closed: ${tab.title}`, 'success');
}

// Close all rotten tabs
function closeRotten() {
  const rottenCount = tabs.filter(t => t.status === 'rotten').length;
  tabs = tabs.filter(t => t.status !== 'rotten');
  currentTabCount = Math.max(1, currentTabCount - rottenCount);
  updateBadge();
  renderTabList();
  showToast(`Closed ${rottenCount} rotten tabs! 🎉`, 'success');
}

// Tab bankruptcy
function declareTabBankruptcy() {
  const closedCount = tabs.length;
  tabs = [tabs[0]]; // Keep just one tab
  currentTabCount = 1;
  updateBadge();
  renderTabList();
  closeLimitModal();
  showToast(`💣 Tab Bankruptcy declared! Closed ${closedCount - 1} tabs. Fresh start!`, 'warning');
}

// Scroll to demo section
function openDemo() {
  document.getElementById('demo-section').scrollIntoView({ behavior: 'smooth' });
}

// Modal controls
function showLimitModal() {
  document.getElementById('limit-modal').classList.add('active');
}

function closeLimitModal() {
  document.getElementById('limit-modal').classList.remove('active');
}

// Close oldest tab from modal
function closeOldest() {
  const rottenTabs = document.querySelectorAll('.modal-tab.rotten');
  if (rottenTabs.length > 0) {
    rottenTabs[0].remove();
    showToast('Closed oldest tab!', 'success');
    
    // Update modal count
    const countEl = document.querySelector('.modal-count');
    const currentCount = parseInt(countEl.textContent.split('/')[0]);
    countEl.textContent = `${currentCount - 1}/25`;
    
    if (currentCount - 1 < 25) {
      closeLimitModal();
      showToast('Tab limit cleared! You can open a new tab now.', 'success');
    }
  }
}

// Close tab from modal
function closeTab(element) {
  element.remove();
  showToast('Tab closed!', 'success');
  
  const countEl = document.querySelector('.modal-count');
  const currentCount = parseInt(countEl.textContent.split('/')[0]);
  countEl.textContent = `${currentCount - 1}/25`;
  
  if (currentCount - 1 < 25) {
    setTimeout(() => {
      closeLimitModal();
      showToast('Tab limit cleared! You can open a new tab now.', 'success');
    }, 300);
  }
}

// Toast notification
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icons = {
    success: '✅',
    warning: '⚠️',
    error: '❌'
  };
  
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Close modal on escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLimitModal();
  }
});

// Close modal on overlay click
document.getElementById('limit-modal').addEventListener('click', (e) => {
  if (e.target.id === 'limit-modal') {
    closeLimitModal();
  }
});
