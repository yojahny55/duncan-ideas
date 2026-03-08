/**
 * CardStash - Gift Card Wallet App
 * Prototype JavaScript
 */

// Sample data
const sampleCards = [
  {
    id: 1,
    retailer: 'Target',
    balance: 50.00,
    originalBalance: 50.00,
    expiration: '2026-12-31',
    cardNumber: '4532',
    category: 'retail',
    addedDate: '2026-03-01',
    color: '#cc0000'
  },
  {
    id: 2,
    retailer: 'Starbucks',
    balance: 15.00,
    originalBalance: 25.00,
    expiration: '2026-03-15',
    cardNumber: '8821',
    category: 'food',
    addedDate: '2026-01-15',
    color: '#00704A'
  },
  {
    id: 3,
    retailer: 'Amazon',
    balance: 100.00,
    originalBalance: 100.00,
    expiration: null,
    cardNumber: '3345',
    category: 'retail',
    addedDate: '2026-02-20',
    color: '#FF9900'
  },
  {
    id: 4,
    retailer: 'Netflix',
    balance: 30.00,
    originalBalance: 30.00,
    expiration: '2027-06-30',
    cardNumber: '9912',
    category: 'entertainment',
    addedDate: '2026-02-14',
    color: '#E50914'
  },
  {
    id: 5,
    retailer: 'Chipotle',
    balance: 22.50,
    originalBalance: 50.00,
    expiration: '2026-08-15',
    cardNumber: '5567',
    category: 'food',
    addedDate: '2026-01-10',
    color: '#441500'
  },
  {
    id: 6,
    retailer: 'Best Buy',
    balance: 35.00,
    originalBalance: 50.00,
    expiration: '2026-11-30',
    cardNumber: '7789',
    category: 'retail',
    addedDate: '2025-12-25',
    color: '#0046be'
  },
  {
    id: 7,
    retailer: 'Spotify',
    balance: 20.00,
    originalBalance: 20.00,
    expiration: '2027-01-01',
    cardNumber: '1123',
    category: 'entertainment',
    addedDate: '2026-03-05',
    color: '#1DB954'
  },
  {
    id: 8,
    retailer: 'Uber',
    balance: 15.00,
    originalBalance: 25.00,
    expiration: '2026-09-30',
    cardNumber: '4456',
    category: 'travel',
    addedDate: '2026-02-01',
    color: '#000000'
  }
];

// State
let cards = [...sampleCards];
let currentFilter = 'all';
let selectedCard = null;

// DOM Elements
const cardsList = document.getElementById('cardsList');
const totalValue = document.getElementById('totalValue');
const cardCount = document.getElementById('cardCount');
const usedThisMonth = document.getElementById('usedThisMonth');
const addCardBtn = document.getElementById('addCardBtn');
const addCardModal = document.getElementById('addCardModal');
const closeModal = document.getElementById('closeModal');
const cardDetailModal = document.getElementById('cardDetailModal');
const closeDetailModal = document.getElementById('closeDetailModal');
const filterTabs = document.querySelectorAll('.tab');
const manualOption = document.getElementById('manualOption');
const manualForm = document.getElementById('manualForm');
const addOptions = document.querySelector('.add-options');
const toast = document.getElementById('toast');

// Utility Functions
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}

function formatDate(dateStr) {
  if (!dateStr) return 'No expiration';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function daysUntilExpiration(dateStr) {
  if (!dateStr) return Infinity;
  const now = new Date();
  const exp = new Date(dateStr);
  const diff = exp - now;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function getExpiryClass(days) {
  if (days <= 7) return 'danger';
  if (days <= 30) return 'warning';
  return '';
}

function getRetailerInitial(name) {
  return name.charAt(0).toUpperCase();
}

function showToast(message) {
  const toastEl = document.getElementById('toast');
  toastEl.querySelector('.toast-message').textContent = message;
  toastEl.classList.remove('hidden');
  setTimeout(() => {
    toastEl.classList.add('hidden');
  }, 3000);
}

// Render Functions
function updateStats() {
  const total = cards.reduce((sum, card) => sum + card.balance, 0);
  totalValue.textContent = formatCurrency(total);
  cardCount.textContent = cards.length;
  
  // Calculate "used this month" (mock data)
  const monthlyUsed = sampleCards.reduce((sum, card) => 
    sum + (card.originalBalance - card.balance), 0
  );
  usedThisMonth.textContent = formatCurrency(monthlyUsed);
}

function renderCards() {
  const filteredCards = currentFilter === 'all' 
    ? cards 
    : cards.filter(card => card.category === currentFilter);
  
  if (filteredCards.length === 0) {
    cardsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">💳</div>
        <div class="empty-state-title">No cards yet</div>
        <div class="empty-state-desc">Tap + to add your first gift card</div>
      </div>
    `;
    return;
  }
  
  cardsList.innerHTML = filteredCards.map(card => {
    const daysLeft = daysUntilExpiration(card.expiration);
    const expiryClass = getExpiryClass(daysLeft);
    
    let expiryText = '';
    if (card.expiration) {
      if (daysLeft < 0) {
        expiryText = 'Expired';
      } else if (daysLeft === 0) {
        expiryText = 'Expires today';
      } else if (daysLeft <= 30) {
        expiryText = `${daysLeft} days left`;
      } else {
        expiryText = `Exp ${formatDate(card.expiration)}`;
      }
    } else {
      expiryText = 'No expiration';
    }
    
    return `
      <div class="gift-card" data-id="${card.id}">
        <div class="card-logo ${card.category}" style="background: ${card.color}">
          ${getRetailerInitial(card.retailer)}
        </div>
        <div class="card-info">
          <div class="card-retailer">${card.retailer}</div>
          <div class="card-meta">
            <span class="card-expiry ${expiryClass}">
              ${expiryClass ? '⚠️' : '📅'} ${expiryText}
            </span>
          </div>
        </div>
        <div class="card-balance">
          <div class="card-balance-amount">${formatCurrency(card.balance)}</div>
          <div class="card-balance-label">balance</div>
        </div>
      </div>
    `;
  }).join('');
  
  // Add click handlers
  document.querySelectorAll('.gift-card').forEach(el => {
    el.addEventListener('click', () => {
      const cardId = parseInt(el.dataset.id);
      openCardDetail(cardId);
    });
  });
}

function openCardDetail(cardId) {
  selectedCard = cards.find(c => c.id === cardId);
  if (!selectedCard) return;
  
  document.getElementById('detailRetailer').textContent = selectedCard.retailer;
  document.getElementById('detailBalance').textContent = formatCurrency(selectedCard.balance);
  document.getElementById('detailCardNumber').textContent = `**** ${selectedCard.cardNumber}`;
  document.getElementById('detailExpiration').textContent = formatDate(selectedCard.expiration);
  document.getElementById('detailCategory').textContent = 
    selectedCard.category.charAt(0).toUpperCase() + selectedCard.category.slice(1);
  document.getElementById('detailAdded').textContent = formatDate(selectedCard.addedDate);
  
  // Update visual card color
  document.getElementById('detailVisual').style.background = 
    `linear-gradient(135deg, ${selectedCard.color} 0%, ${selectedCard.color}dd 100%)`;
  
  cardDetailModal.classList.add('open');
}

// Event Handlers
function openAddModal() {
  addCardModal.classList.add('open');
  addOptions.classList.remove('hidden');
  manualForm.classList.add('hidden');
}

function closeAddModal() {
  addCardModal.classList.remove('open');
  addOptions.classList.remove('hidden');
  manualForm.classList.add('hidden');
  manualForm.reset();
}

function showManualForm() {
  addOptions.classList.add('hidden');
  manualForm.classList.remove('hidden');
}

function handleFilterClick(e) {
  const filter = e.target.dataset.filter;
  if (!filter) return;
  
  filterTabs.forEach(tab => tab.classList.remove('active'));
  e.target.classList.add('active');
  currentFilter = filter;
  renderCards();
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const retailer = document.getElementById('retailer').value;
  const balance = parseFloat(document.getElementById('balance').value);
  const expiration = document.getElementById('expiration').value || null;
  const cardNumber = document.getElementById('cardNumber').value || '0000';
  const category = document.getElementById('category').value;
  
  const newCard = {
    id: Date.now(),
    retailer,
    balance,
    originalBalance: balance,
    expiration,
    cardNumber: cardNumber.slice(-4).padStart(4, '0'),
    category,
    addedDate: new Date().toISOString().split('T')[0],
    color: getCategoryColor(category)
  };
  
  cards.unshift(newCard);
  updateStats();
  renderCards();
  closeAddModal();
  showToast(`${retailer} card added!`);
}

function getCategoryColor(category) {
  const colors = {
    retail: '#8b5cf6',
    food: '#f97316',
    entertainment: '#ec4899',
    travel: '#06b6d4',
    other: '#6b7280'
  };
  return colors[category] || colors.other;
}

// Initialize
function init() {
  updateStats();
  renderCards();
  
  // Event listeners
  addCardBtn.addEventListener('click', openAddModal);
  closeModal.addEventListener('click', closeAddModal);
  document.querySelector('#addCardModal .modal-backdrop').addEventListener('click', closeAddModal);
  
  closeDetailModal.addEventListener('click', () => cardDetailModal.classList.remove('open'));
  document.querySelector('#cardDetailModal .modal-backdrop').addEventListener('click', () => {
    cardDetailModal.classList.remove('open');
  });
  
  filterTabs.forEach(tab => {
    tab.addEventListener('click', handleFilterClick);
  });
  
  manualOption.addEventListener('click', showManualForm);
  manualForm.addEventListener('submit', handleFormSubmit);
  
  // Scan and email options (mock)
  document.getElementById('scanOption').addEventListener('click', () => {
    showToast('Camera scan coming soon!');
  });
  
  document.getElementById('emailOption').addEventListener('click', () => {
    showToast('Email import coming soon!');
  });
  
  // Detail modal actions
  document.getElementById('updateBalanceBtn').addEventListener('click', () => {
    const newBalance = prompt('Enter new balance:', selectedCard.balance);
    if (newBalance !== null) {
      const balance = parseFloat(newBalance);
      if (!isNaN(balance) && balance >= 0) {
        selectedCard.balance = balance;
        updateStats();
        renderCards();
        cardDetailModal.classList.remove('open');
        showToast('Balance updated!');
      }
    }
  });
  
  document.getElementById('checkBalanceBtn').addEventListener('click', () => {
    showToast(`Opening ${selectedCard.retailer} website...`);
  });
  
  document.getElementById('deleteCardBtn').addEventListener('click', () => {
    if (confirm(`Remove ${selectedCard.retailer} card?`)) {
      cards = cards.filter(c => c.id !== selectedCard.id);
      updateStats();
      renderCards();
      cardDetailModal.classList.remove('open');
      showToast('Card removed');
    }
  });
  
  // Nav items (mock)
  document.querySelectorAll('.nav-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      if (index === 1) showToast('Nearby feature coming soon!');
      if (index === 2) showToast('Insights feature coming soon!');
    });
  });
  
  // Alert actions (mock)
  document.querySelectorAll('.alert-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const alertText = e.target.closest('.alert').querySelector('.alert-subtitle').textContent;
      if (alertText.includes('Starbucks')) {
        openCardDetail(2);
      } else if (alertText.includes('Target')) {
        openCardDetail(1);
      }
    });
  });
}

// Run
document.addEventListener('DOMContentLoaded', init);
