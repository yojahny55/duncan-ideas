/**
 * ScreenSnap - Smart Screenshot Manager
 * Interactive Prototype
 */

// Sample screenshot data
const screenshots = [
  { id: 1, category: 'receipts', text: 'Amazon Order #123-456', expires: null, color: '#667eea' },
  { id: 2, category: 'memes', text: 'Funny cat meme', expires: null, color: '#f59e0b' },
  { id: 3, category: 'messages', text: 'Chat with John about project', expires: null, color: '#10b981' },
  { id: 4, category: 'text', text: 'Meeting notes from standup', expires: null, color: '#8b5cf6' },
  { id: 5, category: 'receipts', text: 'Uber ride $24.50', expires: '2h', color: '#667eea' },
  { id: 6, category: 'sensitive', text: 'WiFi password', expires: '1h', color: '#ef4444' },
  { id: 7, category: 'memes', text: 'Drake meme template', expires: null, color: '#f59e0b' },
  { id: 8, category: 'messages', text: 'Flight confirmation', expires: null, color: '#10b981' },
  { id: 9, category: 'text', text: 'Recipe for pasta carbonara', expires: null, color: '#8b5cf6' },
  { id: 10, category: 'receipts', text: 'Target purchase $89.99', expires: null, color: '#667eea' },
  { id: 11, category: 'memes', text: 'Galaxy brain meme', expires: '1d', color: '#f59e0b' },
  { id: 12, category: 'messages', text: 'Mom birthday reminder', expires: null, color: '#10b981' },
  { id: 13, category: 'sensitive', text: '2FA backup codes', expires: '30m', color: '#ef4444' },
  { id: 14, category: 'text', text: 'Grocery list from Sarah', expires: null, color: '#8b5cf6' },
  { id: 15, category: 'receipts', text: 'Starbucks $6.75', expires: null, color: '#667eea' },
  { id: 16, category: 'memes', text: 'This is fine dog', expires: null, color: '#f59e0b' },
  { id: 17, category: 'messages', text: 'Address for party', expires: '3h', color: '#10b981' },
  { id: 18, category: 'text', text: 'Code snippet Python', expires: null, color: '#8b5cf6' },
];

// Category emoji mapping
const categoryEmoji = {
  all: '📁',
  messages: '💬',
  receipts: '🧾',
  memes: '😂',
  text: '📝',
  sensitive: '🔐',
  expiring: '⏳'
};

// DOM Elements
const gallery = document.getElementById('gallery');
const searchToggle = document.querySelector('.search-toggle');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchClose = document.querySelector('.search-close');
const captureNotification = document.getElementById('capture-notification');
const cleanupModal = document.getElementById('cleanup-modal');
const openCleanupBtn = document.getElementById('open-cleanup');
const demoCaptureBtn = document.getElementById('demo-capture');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const tabs = document.querySelectorAll('.tab');

// Current filter
let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  setupEventListeners();
});

// Render gallery based on current filter
function renderGallery(filter = 'all', searchQuery = '') {
  let filtered = [...screenshots];

  // Apply category filter
  if (filter === 'expiring') {
    filtered = filtered.filter(s => s.expires);
  } else if (filter !== 'all') {
    filtered = filtered.filter(s => s.category === filter);
  }

  // Apply search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(s => s.text.toLowerCase().includes(query));
  }

  if (filtered.length === 0) {
    gallery.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
        <h3>No screenshots found</h3>
        <p>${searchQuery ? 'Try a different search term' : 'Take a screenshot to get started'}</p>
      </div>
    `;
    return;
  }

  gallery.innerHTML = filtered.map(screenshot => `
    <div class="gallery-item" data-id="${screenshot.id}">
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='${encodeURIComponent(screenshot.color)}' width='200' height='200'/%3E%3Ctext fill='white' x='100' y='100' text-anchor='middle' dy='.3em' font-family='system-ui' font-size='12'%3E${encodeURIComponent(screenshot.category.toUpperCase())}%3C/text%3E%3C/svg%3E" alt="${screenshot.text}">
      ${screenshot.expires ? `
        <div class="item-expiry">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          ${screenshot.expires}
        </div>
      ` : ''}
      <div class="item-overlay">
        <span class="item-category">${categoryEmoji[screenshot.category]} ${screenshot.category}</span>
      </div>
    </div>
  `).join('');
}

// Setup event listeners
function setupEventListeners() {
  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderGallery(currentCategory);
    });
  });

  // Search toggle
  searchToggle.addEventListener('click', () => {
    searchContainer.classList.remove('hidden');
    searchInput.focus();
  });

  // Search close
  searchClose.addEventListener('click', () => {
    searchContainer.classList.add('hidden');
    searchInput.value = '';
    renderGallery(currentCategory);
  });

  // Search input
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    if (query.length >= 2) {
      renderGallery(currentCategory, query);
      renderSearchResults(query);
    } else {
      searchResults.innerHTML = '';
      renderGallery(currentCategory);
    }
  });

  // Demo capture button
  demoCaptureBtn.addEventListener('click', showCaptureNotification);

  // Capture notification actions
  captureNotification.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', () => handleCaptureAction(btn.dataset.action));
  });

  captureNotification.querySelector('.notification-dismiss').addEventListener('click', () => {
    captureNotification.classList.add('hidden');
  });

  captureNotification.querySelector('.notification-backdrop').addEventListener('click', () => {
    captureNotification.classList.add('hidden');
  });

  // Cleanup modal
  openCleanupBtn.addEventListener('click', () => {
    cleanupModal.classList.remove('hidden');
  });

  cleanupModal.querySelector('.modal-close').addEventListener('click', () => {
    cleanupModal.classList.add('hidden');
  });

  cleanupModal.querySelector('.modal-backdrop').addEventListener('click', () => {
    cleanupModal.classList.add('hidden');
  });

  cleanupModal.querySelector('.btn-primary').addEventListener('click', () => {
    cleanupModal.classList.add('hidden');
    showToast('41 items moved to trash');
  });

  // Gallery item click
  gallery.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) {
      const id = parseInt(item.dataset.id);
      const screenshot = screenshots.find(s => s.id === id);
      if (screenshot) {
        showToast(`"${screenshot.text}"`);
      }
    }
  });
}

// Render search results
function renderSearchResults(query) {
  const results = screenshots.filter(s => 
    s.text.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 5);

  if (results.length === 0) {
    searchResults.innerHTML = '<p style="color: var(--color-gray-500); font-size: var(--font-size-sm);">No matches found</p>';
    return;
  }

  searchResults.innerHTML = results.map(s => `
    <div class="search-result-item">
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect fill='${encodeURIComponent(s.color)}' width='48' height='48'/%3E%3C/svg%3E" alt="">
      <div class="search-result-text">
        <strong>${highlightMatch(s.text, query)}</strong>
        <span>${categoryEmoji[s.category]} ${s.category}</span>
      </div>
    </div>
  `).join('');
}

// Highlight search matches
function highlightMatch(text, query) {
  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  return text.replace(regex, '<mark style="background: var(--color-warning-light); padding: 0 2px;">$1</mark>');
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Show capture notification
function showCaptureNotification() {
  captureNotification.classList.remove('hidden');
  
  // Vibration feedback (if supported)
  if ('vibrate' in navigator) {
    navigator.vibrate(50);
  }
}

// Handle capture action
function handleCaptureAction(action) {
  captureNotification.classList.add('hidden');
  
  const messages = {
    keep: 'Screenshot saved permanently',
    timer: 'Screenshot will auto-delete in 1 hour',
    day: 'Screenshot will auto-delete tomorrow',
    delete: 'Screenshot deleted'
  };

  showToast(messages[action] || 'Action completed');

  // Add to gallery if kept
  if (action !== 'delete') {
    const newScreenshot = {
      id: screenshots.length + 1,
      category: 'receipts',
      text: 'New screenshot captured',
      expires: action === 'timer' ? '1h' : action === 'day' ? '1d' : null,
      color: '#667eea'
    };
    screenshots.unshift(newScreenshot);
    renderGallery(currentCategory);
    updateCounts();
  }
}

// Show toast notification
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.remove('hidden');
  
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// Update tab counts
function updateCounts() {
  const counts = {
    all: screenshots.length,
    messages: screenshots.filter(s => s.category === 'messages').length,
    receipts: screenshots.filter(s => s.category === 'receipts').length,
    memes: screenshots.filter(s => s.category === 'memes').length,
    text: screenshots.filter(s => s.category === 'text').length,
    sensitive: screenshots.filter(s => s.category === 'sensitive').length,
    expiring: screenshots.filter(s => s.expires).length
  };

  tabs.forEach(tab => {
    const category = tab.dataset.category;
    const countEl = tab.querySelector('.tab-count');
    if (countEl && counts[category] !== undefined) {
      countEl.textContent = counts[category];
    }
  });

  // Update storage banner
  const storageCount = document.querySelector('.storage-count');
  if (storageCount) {
    storageCount.textContent = `${screenshots.length} screenshots`;
  }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Escape to close modals
  if (e.key === 'Escape') {
    captureNotification.classList.add('hidden');
    cleanupModal.classList.add('hidden');
    searchContainer.classList.add('hidden');
    searchInput.value = '';
    renderGallery(currentCategory);
  }
  
  // Cmd/Ctrl + K for search
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    searchContainer.classList.remove('hidden');
    searchInput.focus();
  }
});

// Service Worker registration (for PWA capability)
if ('serviceWorker' in navigator) {
  // In production, register SW here
  console.log('ScreenSnap: Service Worker ready for production');
}

console.log('ScreenSnap prototype loaded. Click "Simulate Screenshot" to see the capture notification.');
