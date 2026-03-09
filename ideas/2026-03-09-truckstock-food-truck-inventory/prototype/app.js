// TruckStock - Food Truck Inventory App

// Sample inventory data
const inventory = [
  { id: 1, name: 'Burger Patties', emoji: '🍔', qty: 45, unit: 'units', par: 50, category: 'protein' },
  { id: 2, name: 'Hot Dog Buns', emoji: '🌭', qty: 12, unit: 'packs', par: 30, category: 'dry' },
  { id: 3, name: 'Pulled Pork', emoji: '🥩', qty: 8, unit: 'lbs', par: 15, category: 'protein' },
  { id: 4, name: 'Coleslaw', emoji: '🥗', qty: 6, unit: 'lbs', par: 10, category: 'produce' },
  { id: 5, name: 'BBQ Sauce', emoji: '🫙', qty: 4, unit: 'bottles', par: 5, category: 'sauce' },
  { id: 6, name: 'French Fries', emoji: '🍟', qty: 25, unit: 'lbs', par: 20, category: 'produce' },
  { id: 7, name: 'Cheese Slices', emoji: '🧀', qty: 80, unit: 'slices', par: 60, category: 'dairy' },
  { id: 8, name: 'Onion Rings', emoji: '🧅', qty: 15, unit: 'portions', par: 25, category: 'produce' },
  { id: 9, name: 'Napkins', emoji: '🧻', qty: 500, unit: 'units', par: 300, category: 'other' },
  { id: 10, name: 'Soft Drinks', emoji: '🥤', qty: 48, unit: 'cans', par: 40, category: 'other' },
];

// State
let currentItem = null;
let currentCount = 0;

// DOM Elements
const inventoryList = document.getElementById('inventoryList');
const searchInput = document.getElementById('searchInput');
const navTabs = document.querySelectorAll('.nav-tab');
const tabPanels = document.querySelectorAll('.tab-panel');
const quickCountModal = document.getElementById('quickCountModal');
const addItemModal = document.getElementById('addItemModal');
const countNumber = document.getElementById('countNumber');
const parLevel = document.getElementById('parLevel');
const parStatus = document.getElementById('parStatus');
const modalItemName = document.getElementById('modalItemName');
const countUnit = document.getElementById('countUnit');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderInventory(inventory);
  setupEventListeners();
});

// Render inventory list
function renderInventory(items) {
  inventoryList.innerHTML = items.map(item => {
    const isLow = item.qty < item.par;
    const status = isLow ? 'low' : (item.qty < item.par * 1.2 ? 'warning' : 'ok');
    const statusText = isLow ? 'Below Par' : (status === 'warning' ? 'Getting Low' : 'OK');
    
    return `
      <div class="inventory-item ${isLow ? 'low-stock' : ''}" data-id="${item.id}">
        <div class="item-emoji">${item.emoji}</div>
        <div class="item-details">
          <div class="item-name">${item.name}</div>
          <div class="item-meta">Par: ${item.par} ${item.unit}</div>
        </div>
        <div class="item-qty">
          <div class="qty-value">${item.qty}</div>
          <div class="qty-unit">${item.unit}</div>
          <span class="qty-status ${status}">${statusText}</span>
        </div>
      </div>
    `;
  }).join('');

  // Add click handlers
  document.querySelectorAll('.inventory-item').forEach(el => {
    el.addEventListener('click', () => openQuickCount(parseInt(el.dataset.id)));
  });
}

// Setup event listeners
function setupEventListeners() {
  // Tab navigation
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      navTabs.forEach(t => t.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = inventory.filter(item => 
      item.name.toLowerCase().includes(query)
    );
    renderInventory(filtered);
  });

  // Quick count modal
  document.getElementById('closeModal').addEventListener('click', closeQuickCount);
  document.getElementById('countMinus').addEventListener('click', () => updateCount(-1));
  document.getElementById('countPlus').addEventListener('click', () => updateCount(1));
  document.getElementById('saveCount').addEventListener('click', saveCount);
  document.getElementById('logWaste').addEventListener('click', logWaste);

  // Add item modal
  document.getElementById('addItemBtn').addEventListener('click', openAddItem);
  document.getElementById('closeAddModal').addEventListener('click', closeAddItem);
  document.getElementById('cancelAdd').addEventListener('click', closeAddItem);
  document.getElementById('confirmAdd').addEventListener('click', addNewItem);

  // Prep calculator
  document.getElementById('calculatePrep').addEventListener('click', calculatePrep);
  document.getElementById('applyPrep').addEventListener('click', applyPrep);

  // Alert banner
  document.getElementById('viewAlerts').addEventListener('click', showLowStockItems);

  // Close modal on overlay click
  quickCountModal.addEventListener('click', (e) => {
    if (e.target === quickCountModal) closeQuickCount();
  });
  addItemModal.addEventListener('click', (e) => {
    if (e.target === addItemModal) closeAddItem();
  });
}

// Open quick count modal
function openQuickCount(itemId) {
  currentItem = inventory.find(i => i.id === itemId);
  if (!currentItem) return;

  currentCount = currentItem.qty;
  modalItemName.textContent = `${currentItem.emoji} ${currentItem.name}`;
  countUnit.textContent = currentItem.unit;
  parLevel.textContent = currentItem.par;
  updateCountDisplay();
  quickCountModal.classList.remove('hidden');
}

// Close quick count modal
function closeQuickCount() {
  quickCountModal.classList.add('hidden');
  currentItem = null;
}

// Update count
function updateCount(delta) {
  currentCount = Math.max(0, currentCount + delta);
  updateCountDisplay();
  
  // Haptic feedback simulation
  if (navigator.vibrate) {
    navigator.vibrate(10);
  }
}

// Update count display
function updateCountDisplay() {
  countNumber.textContent = currentCount;
  
  if (currentCount < currentItem.par) {
    parStatus.textContent = 'Below Par';
    parStatus.className = 'par-status low';
  } else {
    parStatus.textContent = 'OK';
    parStatus.className = 'par-status ok';
  }
}

// Save count
function saveCount() {
  if (!currentItem) return;
  
  const item = inventory.find(i => i.id === currentItem.id);
  if (item) {
    item.qty = currentCount;
    renderInventory(inventory);
    updateAlertBanner();
  }
  
  closeQuickCount();
  
  // Show toast
  showToast(`${currentItem.name} updated to ${currentCount}`);
}

// Log waste
function logWaste() {
  if (!currentItem) return;
  
  const wasteAmount = prompt(`How many ${currentItem.unit} of ${currentItem.name} were wasted?`);
  if (wasteAmount && !isNaN(wasteAmount)) {
    currentCount = Math.max(0, currentCount - parseInt(wasteAmount));
    updateCountDisplay();
    showToast(`Logged ${wasteAmount} ${currentItem.unit} as waste`);
  }
}

// Open add item modal
function openAddItem() {
  addItemModal.classList.remove('hidden');
}

// Close add item modal
function closeAddItem() {
  addItemModal.classList.add('hidden');
  // Reset form
  document.getElementById('newItemName').value = '';
  document.getElementById('newItemQty').value = '';
  document.getElementById('newItemPar').value = '';
}

// Add new item
function addNewItem() {
  const name = document.getElementById('newItemName').value.trim();
  const qty = parseInt(document.getElementById('newItemQty').value) || 0;
  const unit = document.getElementById('newItemUnit').value;
  const par = parseInt(document.getElementById('newItemPar').value) || 10;
  const category = document.getElementById('newItemCategory').value;
  
  if (!name) {
    showToast('Please enter an item name');
    return;
  }
  
  const categoryEmojis = {
    protein: '🥩',
    produce: '🥬',
    dairy: '🧀',
    dry: '🌾',
    sauce: '🫙',
    other: '📦'
  };
  
  const newItem = {
    id: Date.now(),
    name,
    emoji: categoryEmojis[category],
    qty,
    unit,
    par,
    category
  };
  
  inventory.push(newItem);
  renderInventory(inventory);
  updateAlertBanner();
  closeAddItem();
  showToast(`${name} added to inventory`);
}

// Calculate prep amounts
function calculatePrep() {
  const eventType = document.getElementById('eventType').value;
  const attendees = parseInt(document.getElementById('attendees').value) || 500;
  const duration = parseInt(document.getElementById('duration').value) || 4;
  
  // Simple prep calculation logic
  const multipliers = {
    'farmers-market': 0.15,
    'food-truck-rally': 0.25,
    'festival': 0.3,
    'corporate': 0.4,
    'private': 0.5
  };
  
  const baseMultiplier = multipliers[eventType] || 0.2;
  const durationMultiplier = duration / 4;
  const weatherMultiplier = 1.2; // Sunny day bonus
  
  const prepList = document.getElementById('prepList');
  prepList.innerHTML = inventory.slice(0, 5).map(item => {
    const prepQty = Math.ceil(attendees * baseMultiplier * durationMultiplier * weatherMultiplier / 10);
    const needed = Math.max(0, prepQty - item.qty);
    
    return `
      <div class="prep-item">
        <div>
          <div class="prep-item-name">${item.emoji} ${item.name}</div>
          <div class="prep-item-current">Current: ${item.qty} ${item.unit}</div>
        </div>
        <div class="prep-item-qty">
          ${needed > 0 ? `+${needed}` : '✓'} ${item.unit}
        </div>
      </div>
    `;
  }).join('');
  
  document.getElementById('prepResults').classList.remove('hidden');
  document.querySelector('.prep-form').style.display = 'none';
}

// Apply prep to shopping list
function applyPrep() {
  showToast('Added to shopping list!');
  document.getElementById('prepResults').classList.add('hidden');
  document.querySelector('.prep-form').style.display = 'block';
}

// Update alert banner
function updateAlertBanner() {
  const lowStockCount = inventory.filter(i => i.qty < i.par).length;
  const alertBanner = document.getElementById('alertBanner');
  
  if (lowStockCount > 0) {
    alertBanner.classList.remove('hidden');
    alertBanner.querySelector('.alert-text').innerHTML = 
      `<strong>${lowStockCount} item${lowStockCount > 1 ? 's' : ''}</strong> below par level`;
  } else {
    alertBanner.classList.add('hidden');
  }
}

// Show low stock items
function showLowStockItems() {
  const lowStock = inventory.filter(i => i.qty < i.par);
  renderInventory(lowStock);
  searchInput.value = '';
  showToast(`Showing ${lowStock.length} low stock items`);
}

// Toast notification
function showToast(message) {
  // Create toast element
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: #1F2937;
    color: white;
    padding: 12px 24px;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 500;
    z-index: 1000;
    animation: slideUp 0.3s ease;
  `;
  toast.textContent = message;
  
  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideUp {
      from { opacity: 0; transform: translateX(-50%) translateY(20px); }
      to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(toast);
  
  // Remove after 2 seconds
  setTimeout(() => {
    toast.style.animation = 'slideUp 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// Initialize alert banner
updateAlertBanner();
