/**
 * ShelfLife - Smart Pantry Tracker
 * Interactive Prototype
 */

// ============================================
// Data Store (would be API/localStorage in real app)
// ============================================

const SAMPLE_ITEMS = [
  { id: 1, name: 'Milk', emoji: '🥛', qty: 1, unit: 'gal', location: 'fridge', daysLeft: 0, status: 'expired' },
  { id: 2, name: 'Yogurt', emoji: '🥛', qty: 4, unit: 'pcs', location: 'fridge', daysLeft: 0, status: 'expired' },
  { id: 3, name: 'Chicken Breast', emoji: '🍗', qty: 2, unit: 'lbs', location: 'fridge', daysLeft: 1, status: 'expiring' },
  { id: 4, name: 'Bell Peppers', emoji: '🫑', qty: 3, unit: 'pcs', location: 'fridge', daysLeft: 2, status: 'expiring' },
  { id: 5, name: 'Eggs', emoji: '🥚', qty: 12, unit: 'pcs', location: 'fridge', daysLeft: 5, status: 'fresh' },
  { id: 6, name: 'Cheddar Cheese', emoji: '🧀', qty: 1, unit: 'lbs', location: 'fridge', daysLeft: 12, status: 'fresh' },
  { id: 7, name: 'Spinach', emoji: '🥬', qty: 1, unit: 'bag', location: 'fridge', daysLeft: 3, status: 'expiring' },
  { id: 8, name: 'Carrots', emoji: '🥕', qty: 1, unit: 'lbs', location: 'fridge', daysLeft: 14, status: 'fresh' },
  { id: 9, name: 'Butter', emoji: '🧈', qty: 1, unit: 'pcs', location: 'fridge', daysLeft: 30, status: 'fresh' },
  { id: 10, name: 'Orange Juice', emoji: '🍊', qty: 1, unit: 'gal', location: 'fridge', daysLeft: 7, status: 'fresh' },
  { id: 11, name: 'Apples', emoji: '🍎', qty: 6, unit: 'pcs', location: 'fridge', daysLeft: 10, status: 'fresh' },
  { id: 12, name: 'Lettuce', emoji: '🥬', qty: 1, unit: 'head', location: 'fridge', daysLeft: 4, status: 'expiring' },
  { id: 13, name: 'Frozen Pizza', emoji: '🍕', qty: 2, unit: 'pcs', location: 'freezer', daysLeft: 60, status: 'frozen' },
  { id: 14, name: 'Ice Cream', emoji: '🍦', qty: 1, unit: 'pint', location: 'freezer', daysLeft: 90, status: 'frozen' },
  { id: 15, name: 'Frozen Berries', emoji: '🫐', qty: 1, unit: 'bag', location: 'freezer', daysLeft: 120, status: 'frozen' },
  { id: 16, name: 'Ground Beef', emoji: '🥩', qty: 1, unit: 'lbs', location: 'freezer', daysLeft: 45, status: 'frozen' },
  { id: 17, name: 'Rice', emoji: '🍚', qty: 2, unit: 'lbs', location: 'pantry', daysLeft: 365, status: 'fresh' },
  { id: 18, name: 'Pasta', emoji: '🍝', qty: 3, unit: 'boxes', location: 'pantry', daysLeft: 300, status: 'fresh' },
  { id: 19, name: 'Olive Oil', emoji: '🫒', qty: 1, unit: 'bottle', location: 'pantry', daysLeft: 180, status: 'fresh' },
  { id: 20, name: 'Canned Tomatoes', emoji: '🍅', qty: 4, unit: 'cans', location: 'pantry', daysLeft: 400, status: 'fresh' },
  { id: 21, name: 'Peanut Butter', emoji: '🥜', qty: 1, unit: 'jar', location: 'pantry', daysLeft: 90, status: 'fresh' },
  { id: 22, name: 'Honey', emoji: '🍯', qty: 1, unit: 'jar', location: 'pantry', daysLeft: 730, status: 'fresh' },
  { id: 23, name: 'Oatmeal', emoji: '🥣', qty: 1, unit: 'container', location: 'pantry', daysLeft: 200, status: 'fresh' },
  { id: 24, name: 'Bread', emoji: '🍞', qty: 1, unit: 'loaf', location: 'pantry', daysLeft: 5, status: 'fresh' },
];

let items = [...SAMPLE_ITEMS];
let currentFilter = 'all';

// ============================================
// DOM Elements
// ============================================

const elements = {
  // Stats
  totalItems: document.getElementById('totalItems'),
  expiringSoon: document.getElementById('expiringSoon'),
  savedMoney: document.getElementById('savedMoney'),
  
  // Content areas
  expiringItems: document.getElementById('expiringItems'),
  allItems: document.getElementById('allItems'),
  emptyState: document.getElementById('emptyState'),
  alertBanner: document.getElementById('alertBanner'),
  
  // Modal
  addModal: document.getElementById('addModal'),
  addItemForm: document.getElementById('addItemForm'),
  modalClose: document.getElementById('modalClose'),
  
  // Buttons
  fabAdd: document.getElementById('fabAdd'),
  useItUpBtn: document.getElementById('useItUpBtn'),
  emptyAddBtn: document.getElementById('emptyAddBtn'),
  
  // Toast
  toast: document.getElementById('toast'),
  
  // Filter tabs
  filterTabs: document.querySelectorAll('.filter-tab'),
  
  // Nav items
  navItems: document.querySelectorAll('.nav-item'),
};

// ============================================
// Rendering Functions
// ============================================

function renderItemCard(item) {
  const statusClass = {
    'fresh': 'item-card--fresh',
    'expiring': 'item-card--expiring',
    'expired': 'item-card--expired',
    'frozen': 'item-card--frozen'
  }[item.status] || '';
  
  const daysClass = {
    'fresh': 'item-card__days--fresh',
    'expiring': 'item-card__days--expiring',
    'expired': 'item-card__days--expired',
    'frozen': 'item-card__days--fresh'
  }[item.status] || '';
  
  const locationIcons = {
    'fridge': '🧊',
    'freezer': '❄️',
    'pantry': '🏠',
    'spices': '🧂'
  };
  
  let daysText = '';
  if (item.status === 'expired') {
    daysText = 'Expired';
  } else if (item.daysLeft === 0) {
    daysText = 'Today';
  } else if (item.daysLeft === 1) {
    daysText = '1 day';
  } else if (item.daysLeft > 30) {
    daysText = `${Math.floor(item.daysLeft / 30)}mo`;
  } else {
    daysText = `${item.daysLeft} days`;
  }
  
  return `
    <article class="item-card ${statusClass}" tabindex="0" data-id="${item.id}">
      <div class="item-card__emoji">${item.emoji}</div>
      <div class="item-card__content">
        <h3 class="item-card__name">${item.name}</h3>
        <div class="item-card__meta">
          <span>${item.qty} ${item.unit}</span>
          <span class="item-card__location">${locationIcons[item.location] || '📍'} ${capitalize(item.location)}</span>
        </div>
      </div>
      <div class="item-card__status">
        <span class="item-card__days ${daysClass}">${daysText}</span>
        <span class="item-card__days-label">${item.status === 'expired' ? '⚠️' : 'left'}</span>
      </div>
    </article>
  `;
}

function renderExpiringItems() {
  const expiring = items
    .filter(item => item.daysLeft <= 3 && item.status !== 'frozen')
    .sort((a, b) => a.daysLeft - b.daysLeft);
  
  if (expiring.length === 0) {
    elements.expiringItems.innerHTML = `
      <div class="empty-state" style="padding: 2rem;">
        <div class="empty-state__icon">✨</div>
        <h3 class="empty-state__title">Nothing expiring soon!</h3>
        <p class="empty-state__text">Great job keeping on top of your groceries.</p>
      </div>
    `;
    elements.alertBanner.style.display = 'none';
    return;
  }
  
  elements.expiringItems.innerHTML = expiring.map(renderItemCard).join('');
  
  // Update alert banner
  const expiringToday = expiring.filter(i => i.daysLeft === 0);
  if (expiringToday.length > 0) {
    const names = expiringToday.map(i => i.name).join(', ');
    elements.alertBanner.querySelector('.alert-banner__title').textContent = 
      `${expiringToday.length} item${expiringToday.length > 1 ? 's' : ''} expiring today!`;
    elements.alertBanner.querySelector('.alert-banner__text').textContent = 
      `${names} need${expiringToday.length === 1 ? 's' : ''} to be used.`;
    elements.alertBanner.style.display = 'flex';
  } else {
    elements.alertBanner.style.display = 'none';
  }
}

function renderAllItems() {
  let filteredItems = items;
  
  if (currentFilter !== 'all') {
    filteredItems = items.filter(item => item.location === currentFilter);
  }
  
  // Sort by expiration (soonest first, but frozen at end)
  filteredItems.sort((a, b) => {
    if (a.status === 'frozen' && b.status !== 'frozen') return 1;
    if (a.status !== 'frozen' && b.status === 'frozen') return -1;
    return a.daysLeft - b.daysLeft;
  });
  
  if (filteredItems.length === 0) {
    elements.allItems.innerHTML = `
      <div class="empty-state" style="padding: 2rem;">
        <div class="empty-state__icon">📭</div>
        <h3 class="empty-state__title">No items here</h3>
        <p class="empty-state__text">Add items to this location to start tracking.</p>
      </div>
    `;
    return;
  }
  
  elements.allItems.innerHTML = filteredItems.map(renderItemCard).join('');
}

function updateStats() {
  const total = items.length;
  const expiring = items.filter(i => i.daysLeft <= 3 && i.status !== 'frozen').length;
  
  // Animate stat changes
  animateNumber(elements.totalItems, parseInt(elements.totalItems.textContent) || 0, total);
  animateNumber(elements.expiringSoon, parseInt(elements.expiringSoon.textContent) || 0, expiring);
  
  // Update filter counts
  const counts = {
    all: items.length,
    fridge: items.filter(i => i.location === 'fridge').length,
    freezer: items.filter(i => i.location === 'freezer').length,
    pantry: items.filter(i => i.location === 'pantry').length
  };
  
  elements.filterTabs.forEach(tab => {
    const filter = tab.dataset.filter;
    const countEl = tab.querySelector('.filter-tab__count');
    if (countEl && counts[filter] !== undefined) {
      countEl.textContent = counts[filter];
    }
  });
}

function render() {
  updateStats();
  renderExpiringItems();
  renderAllItems();
  
  // Show empty state if no items
  if (items.length === 0) {
    elements.emptyState.style.display = 'block';
    document.getElementById('expiringSection').style.display = 'none';
    document.getElementById('recipeSection').style.display = 'none';
    document.getElementById('allItemsSection').style.display = 'none';
    elements.alertBanner.style.display = 'none';
  } else {
    elements.emptyState.style.display = 'none';
    document.getElementById('expiringSection').style.display = 'block';
    document.getElementById('recipeSection').style.display = 'block';
    document.getElementById('allItemsSection').style.display = 'block';
  }
}

// ============================================
// Modal Functions
// ============================================

function openModal() {
  elements.addModal.classList.add('modal-overlay--visible');
  document.body.style.overflow = 'hidden';
  
  // Focus first input
  setTimeout(() => {
    document.getElementById('itemName').focus();
  }, 300);
  
  // Set default date to 7 days from now
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 7);
  document.getElementById('itemExpiry').value = defaultDate.toISOString().split('T')[0];
}

function closeModal() {
  elements.addModal.classList.remove('modal-overlay--visible');
  document.body.style.overflow = '';
  elements.addItemForm.reset();
}

// ============================================
// Item Actions
// ============================================

function addItem(formData) {
  const name = formData.get('itemName') || document.getElementById('itemName').value;
  const qty = parseInt(document.getElementById('itemQty').value) || 1;
  const unit = document.getElementById('itemUnit').value;
  const location = document.getElementById('itemLocation').value;
  const expiry = document.getElementById('itemExpiry').value;
  
  // Calculate days left
  const expiryDate = new Date(expiry);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysLeft = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
  
  // Determine status
  let status = 'fresh';
  if (location === 'freezer') {
    status = 'frozen';
  } else if (daysLeft <= 0) {
    status = 'expired';
  } else if (daysLeft <= 3) {
    status = 'expiring';
  }
  
  // Pick emoji based on name
  const emoji = getEmojiForItem(name);
  
  const newItem = {
    id: Date.now(),
    name,
    emoji,
    qty,
    unit,
    location,
    daysLeft: Math.max(0, daysLeft),
    status
  };
  
  items.unshift(newItem);
  render();
  closeModal();
  showToast(`${name} added to your ${location}!`, 'success');
}

function markAsUsed(itemId) {
  const item = items.find(i => i.id === itemId);
  if (item) {
    items = items.filter(i => i.id !== itemId);
    render();
    showToast(`${item.name} marked as used! 🎉`, 'success');
    
    // Update saved money
    const currentSaved = parseInt(elements.savedMoney.textContent.replace('$', '')) || 0;
    elements.savedMoney.textContent = `$${currentSaved + Math.floor(Math.random() * 5) + 2}`;
  }
}

// ============================================
// Utility Functions
// ============================================

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function animateNumber(element, from, to) {
  const duration = 300;
  const start = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    
    const current = Math.round(from + (to - from) * easeOutQuad(progress));
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

function easeOutQuad(t) {
  return t * (2 - t);
}

function showToast(message, type = 'default') {
  elements.toast.textContent = message;
  elements.toast.className = `toast toast--${type} toast--visible`;
  
  setTimeout(() => {
    elements.toast.classList.remove('toast--visible');
  }, 3000);
}

function getEmojiForItem(name) {
  const emojiMap = {
    'milk': '🥛',
    'egg': '🥚',
    'chicken': '🍗',
    'beef': '🥩',
    'pork': '🥓',
    'fish': '🐟',
    'salmon': '🐟',
    'shrimp': '🦐',
    'bread': '🍞',
    'cheese': '🧀',
    'butter': '🧈',
    'yogurt': '🥛',
    'apple': '🍎',
    'banana': '🍌',
    'orange': '🍊',
    'lemon': '🍋',
    'grape': '🍇',
    'strawberry': '🍓',
    'blueberry': '🫐',
    'avocado': '🥑',
    'carrot': '🥕',
    'broccoli': '🥦',
    'lettuce': '🥬',
    'spinach': '🥬',
    'tomato': '🍅',
    'potato': '🥔',
    'onion': '🧅',
    'garlic': '🧄',
    'pepper': '🫑',
    'corn': '🌽',
    'rice': '🍚',
    'pasta': '🍝',
    'pizza': '🍕',
    'ice cream': '🍦',
    'juice': '🧃',
    'water': '💧',
    'coffee': '☕',
    'tea': '🍵',
    'honey': '🍯',
    'peanut': '🥜',
    'almond': '🌰',
    'olive': '🫒',
    'oil': '🫒'
  };
  
  const lowerName = name.toLowerCase();
  for (const [key, emoji] of Object.entries(emojiMap)) {
    if (lowerName.includes(key)) {
      return emoji;
    }
  }
  
  return '🍽️'; // Default food emoji
}

// ============================================
// Event Listeners
// ============================================

// FAB and modal
elements.fabAdd.addEventListener('click', openModal);
elements.emptyAddBtn?.addEventListener('click', openModal);
elements.modalClose.addEventListener('click', closeModal);

// Close modal on overlay click
elements.addModal.addEventListener('click', (e) => {
  if (e.target === elements.addModal) {
    closeModal();
  }
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && elements.addModal.classList.contains('modal-overlay--visible')) {
    closeModal();
  }
});

// Form submission
elements.addItemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addItem(new FormData(e.target));
});

// Filter tabs
elements.filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    elements.filterTabs.forEach(t => {
      t.classList.remove('filter-tab--active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('filter-tab--active');
    tab.setAttribute('aria-selected', 'true');
    currentFilter = tab.dataset.filter;
    renderAllItems();
  });
});

// Nav items
elements.navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    elements.navItems.forEach(n => n.classList.remove('nav-item--active'));
    navItem.classList.add('nav-item--active');
    
    // For demo, just show toast
    const section = navItem.dataset.nav;
    if (section !== 'home') {
      showToast(`${capitalize(section)} section coming soon!`);
    }
  });
});

// Quick add buttons (demo only)
document.getElementById('scanBarcode')?.addEventListener('click', () => {
  showToast('📷 Barcode scanner would open here');
});

document.getElementById('scanReceipt')?.addEventListener('click', () => {
  showToast('🧾 Receipt scanner would open here');
});

// Use it up button
elements.useItUpBtn?.addEventListener('click', () => {
  showToast('📖 Showing recipes for expiring items...');
});

// Item card clicks (mark as used)
document.addEventListener('click', (e) => {
  const card = e.target.closest('.item-card');
  if (card && card.dataset.id) {
    const itemId = parseInt(card.dataset.id);
    
    // Create simple confirm prompt
    if (confirm('Mark this item as used?')) {
      markAsUsed(itemId);
    }
  }
});

// Search button
document.getElementById('searchBtn')?.addEventListener('click', () => {
  showToast('🔍 Search feature coming soon!');
});

// Settings button
document.getElementById('settingsBtn')?.addEventListener('click', () => {
  showToast('⚙️ Settings coming soon!');
});

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  render();
  
  // Welcome message after short delay
  setTimeout(() => {
    showToast('Welcome to ShelfLife! 🥬', 'success');
  }, 500);
});
