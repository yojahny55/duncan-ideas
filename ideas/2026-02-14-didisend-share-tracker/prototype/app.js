/**
 * DidISend - Share Memory Tracker
 * Track what you've shared with whom
 */

// Demo Data
const demoContacts = [
  { id: '1', name: 'Sarah', initials: 'S' },
  { id: '2', name: 'Mom', initials: 'M' },
  { id: '3', name: 'David', initials: 'D' },
  { id: '4', name: 'Work Group', initials: 'W' },
  { id: '5', name: 'Alex', initials: 'A' },
  { id: '6', name: 'Family Chat', initials: 'F' },
];

const demoShares = [
  {
    id: '1',
    url: 'https://nytimes.com/2026/02/13/technology/ai-breakthrough.html',
    title: 'AI Achieves Major Breakthrough in Scientific Research',
    thumbnail: '📰',
    shares: [
      { contactId: '1', date: new Date('2026-02-13T14:30:00') },
      { contactId: '4', date: new Date('2026-02-13T15:00:00') },
    ]
  },
  {
    id: '2',
    url: 'https://youtube.com/watch?v=abc123',
    title: 'Hilarious Cat Compilation 2026',
    thumbnail: '🎬',
    shares: [
      { contactId: '2', date: new Date('2026-02-12T10:00:00') },
      { contactId: '6', date: new Date('2026-02-12T11:30:00') },
    ]
  },
  {
    id: '3',
    url: 'https://reddit.com/r/todayilearned/xyz',
    title: 'TIL: The ocean has more historic artifacts than all museums combined',
    thumbnail: '💡',
    shares: [
      { contactId: '3', date: new Date('2026-02-11T09:15:00') },
    ]
  },
  {
    id: '4',
    url: 'https://cooking.nytimes.com/recipes/best-chocolate-cake',
    title: 'The Best Chocolate Cake Recipe',
    thumbnail: '🍰',
    shares: [
      { contactId: '2', date: new Date('2026-02-10T16:00:00') },
      { contactId: '5', date: new Date('2026-02-10T16:05:00') },
    ]
  },
  {
    id: '5',
    url: 'https://twitter.com/elonmusk/status/123456',
    title: 'Elon Musk announces new feature',
    thumbnail: '🐦',
    shares: [
      { contactId: '4', date: new Date('2026-02-09T11:00:00') },
    ]
  },
];

// State
let selectedContacts = new Set();
let duplicatesCaught = 3; // Demo counter

// DOM Elements
const urlInput = document.getElementById('urlInput');
const checkBtn = document.getElementById('checkBtn');
const resultsSection = document.getElementById('resultsSection');
const shareModal = document.getElementById('shareModal');
const closeModal = document.getElementById('closeModal');
const newShareBtn = document.getElementById('newShareBtn');
const shareUrl = document.getElementById('shareUrl');
const contactChips = document.getElementById('contactChips');
const saveShareBtn = document.getElementById('saveShareBtn');
const recentList = document.getElementById('recentList');
const alreadySentAlert = document.getElementById('alreadySentAlert');
const closeAlert = document.getElementById('closeAlert');
const alertDetails = document.getElementById('alertDetails');

// Stats elements
const totalSharesEl = document.getElementById('totalShares');
const duplicatesSavedEl = document.getElementById('duplicatesSaved');
const contactsCountEl = document.getElementById('contactsCount');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderRecentShares();
  updateStats();
  renderContactChips();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  checkBtn.addEventListener('click', checkUrl);
  urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkUrl();
  });
  
  newShareBtn.addEventListener('click', openShareModal);
  closeModal.addEventListener('click', closeShareModal);
  saveShareBtn.addEventListener('click', saveShare);
  closeAlert.addEventListener('click', hideAlert);
  
  // Close modal on backdrop click
  shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) closeShareModal();
  });
  
  // Auto-hide alert after 5 seconds
  let alertTimeout;
  const observer = new MutationObserver(() => {
    if (alreadySentAlert.classList.contains('visible')) {
      clearTimeout(alertTimeout);
      alertTimeout = setTimeout(hideAlert, 5000);
    }
  });
  observer.observe(alreadySentAlert, { attributes: true, attributeFilter: ['class'] });
}

// Check URL
function checkUrl() {
  const url = urlInput.value.trim();
  if (!url) {
    urlInput.focus();
    return;
  }
  
  const normalizedUrl = normalizeUrl(url);
  const existingShare = findShareByUrl(normalizedUrl);
  
  if (existingShare) {
    showFoundResult(existingShare);
    duplicatesCaught++;
    updateStats();
  } else {
    showNotFoundResult(url);
  }
  
  resultsSection.classList.add('visible');
}

// Normalize URL for comparison
function normalizeUrl(url) {
  try {
    const parsed = new URL(url);
    // Remove tracking params
    const trackingParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid', 'ref'];
    trackingParams.forEach(param => parsed.searchParams.delete(param));
    // Remove trailing slash
    let path = parsed.pathname.replace(/\/$/, '');
    return `${parsed.host}${path}${parsed.search}`.toLowerCase();
  } catch {
    return url.toLowerCase();
  }
}

// Find share by URL
function findShareByUrl(normalizedUrl) {
  return demoShares.find(share => {
    const shareNorm = normalizeUrl(share.url);
    return shareNorm === normalizedUrl || shareNorm.includes(normalizedUrl) || normalizedUrl.includes(shareNorm);
  });
}

// Show found result
function showFoundResult(share) {
  const contacts = share.shares.map(s => {
    const contact = demoContacts.find(c => c.id === s.contactId);
    return { ...contact, date: s.date };
  });
  
  resultsSection.innerHTML = `
    <div class="result-card found">
      <div class="result-header">
        <span class="result-icon">⚠️</span>
        <span class="result-title">Already Shared!</span>
      </div>
      <div class="result-url">${truncateUrl(share.url)}</div>
      <div class="share-history">
        ${contacts.map(c => `
          <div class="share-item">
            <div class="share-contact">
              <div class="contact-avatar">${c.initials}</div>
              <span class="contact-name">${c.name}</span>
            </div>
            <span class="share-date">${formatRelativeDate(c.date)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  // Also show alert
  alertDetails.textContent = `You shared this with ${contacts.map(c => c.name).join(', ')} ${formatRelativeDate(contacts[0].date)}`;
  showAlert();
}

// Show not found result
function showNotFoundResult(url) {
  resultsSection.innerHTML = `
    <div class="result-card not-found">
      <div class="result-header">
        <span class="result-icon">✅</span>
        <span class="result-title">Not Shared Yet</span>
      </div>
      <div class="result-url">${truncateUrl(url)}</div>
      <p style="color: var(--text-secondary); font-size: 0.875rem;">
        This link hasn't been shared with anyone. You're good to go!
      </p>
    </div>
  `;
}

// Render recent shares
function renderRecentShares() {
  if (demoShares.length === 0) {
    recentList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📤</div>
        <p>No shares yet. Start tracking!</p>
      </div>
    `;
    return;
  }
  
  recentList.innerHTML = demoShares.slice(0, 5).map(share => {
    const shareContacts = share.shares.map(s => demoContacts.find(c => c.id === s.contactId));
    const latestDate = new Date(Math.max(...share.shares.map(s => s.date.getTime())));
    
    return `
      <div class="recent-item" onclick="checkExistingShare('${share.id}')">
        <div class="recent-thumbnail">${share.thumbnail}</div>
        <div class="recent-info">
          <div class="recent-title">${share.title}</div>
          <div class="recent-meta">
            <div class="recent-contacts">
              ${shareContacts.slice(0, 3).map(c => `
                <div class="contact-avatar">${c.initials}</div>
              `).join('')}
            </div>
            <span>•</span>
            <span>${formatRelativeDate(latestDate)}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Check existing share
function checkExistingShare(shareId) {
  const share = demoShares.find(s => s.id === shareId);
  if (share) {
    urlInput.value = share.url;
    showFoundResult(share);
    resultsSection.classList.add('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Render contact chips in modal
function renderContactChips() {
  contactChips.innerHTML = demoContacts.map(contact => `
    <div class="chip ${selectedContacts.has(contact.id) ? 'selected' : ''}" 
         onclick="toggleContact('${contact.id}')">
      <div class="chip-avatar">${contact.initials}</div>
      <span>${contact.name}</span>
    </div>
  `).join('');
}

// Toggle contact selection
function toggleContact(contactId) {
  if (selectedContacts.has(contactId)) {
    selectedContacts.delete(contactId);
  } else {
    selectedContacts.add(contactId);
  }
  renderContactChips();
}

// Open share modal
function openShareModal() {
  shareUrl.value = urlInput.value || '';
  selectedContacts.clear();
  renderContactChips();
  shareModal.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

// Close share modal
function closeShareModal() {
  shareModal.classList.remove('visible');
  document.body.style.overflow = '';
}

// Save share
function saveShare() {
  const url = shareUrl.value.trim();
  if (!url) {
    shareUrl.focus();
    return;
  }
  
  if (selectedContacts.size === 0) {
    alert('Please select at least one contact');
    return;
  }
  
  // Check if already shared
  const existing = findShareByUrl(normalizeUrl(url));
  if (existing) {
    const newContacts = [...selectedContacts].filter(id => 
      !existing.shares.some(s => s.contactId === id)
    );
    
    if (newContacts.length < selectedContacts.size) {
      const dupeContacts = [...selectedContacts]
        .filter(id => !newContacts.includes(id))
        .map(id => demoContacts.find(c => c.id === id).name);
      
      if (!confirm(`You already shared this with ${dupeContacts.join(', ')}. Continue anyway?`)) {
        return;
      }
    }
  }
  
  // Add new share (demo)
  const newShare = {
    id: String(demoShares.length + 1),
    url: url,
    title: 'New shared link',
    thumbnail: '🔗',
    shares: [...selectedContacts].map(contactId => ({
      contactId,
      date: new Date()
    }))
  };
  
  demoShares.unshift(newShare);
  renderRecentShares();
  updateStats();
  closeShareModal();
  
  // Show success feedback
  showSuccessToast(`Logged share with ${selectedContacts.size} contact${selectedContacts.size > 1 ? 's' : ''}`);
  
  // Clear inputs
  urlInput.value = '';
  shareUrl.value = '';
  selectedContacts.clear();
  resultsSection.classList.remove('visible');
}

// Update stats
function updateStats() {
  totalSharesEl.textContent = demoShares.reduce((sum, s) => sum + s.shares.length, 0);
  duplicatesSavedEl.textContent = duplicatesCaught;
  contactsCountEl.textContent = demoContacts.length;
}

// Show alert
function showAlert() {
  alreadySentAlert.classList.add('visible');
}

// Hide alert
function hideAlert() {
  alreadySentAlert.classList.remove('visible');
}

// Show success toast
function showSuccessToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: #22c55e;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 500;
    z-index: 1100;
    animation: slideUp 0.3s ease-out;
  `;
  toast.textContent = '✓ ' + message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Utility: Format relative date
function formatRelativeDate(date) {
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Utility: Truncate URL for display
function truncateUrl(url) {
  if (url.length > 60) {
    return url.substring(0, 57) + '...';
  }
  return url;
}

// Make functions available globally for onclick handlers
window.checkExistingShare = checkExistingShare;
window.toggleContact = toggleContact;
