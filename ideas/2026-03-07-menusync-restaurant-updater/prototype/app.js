// ========================================
// MenuSync - Application Logic
// ========================================

// Sample Data
const platforms = [
  { id: 'ubereats', name: 'UberEats', icon: '🚗', connected: true, lastSync: '2 hours ago', status: 'synced', items: 24 },
  { id: 'doordash', name: 'DoorDash', icon: '🏃', connected: true, lastSync: '2 hours ago', status: 'synced', items: 24 },
  { id: 'grubhub', name: 'Grubhub', icon: '🍴', connected: true, lastSync: '3 days ago', status: 'pending', items: 22 },
  { id: 'website', name: 'Website', icon: '🌐', connected: true, lastSync: '2 hours ago', status: 'synced', items: 24 }
];

const menuItems = {
  tacos: [
    { id: 1, name: 'Street Tacos', description: 'Three corn tortillas with carne asada, onions, cilantro', price: 9.99, available: true, emoji: '🌮' },
    { id: 2, name: 'Al Pastor Tacos', description: 'Marinated pork with pineapple and guajillo salsa', price: 10.99, available: true, emoji: '🌮' },
    { id: 3, name: 'Fish Tacos', description: 'Beer-battered cod with cabbage slaw and chipotle crema', price: 12.99, available: true, emoji: '🐟' },
    { id: 4, name: 'Carnitas Tacos', description: 'Slow-braised pork shoulder with salsa verde', price: 10.99, available: false, emoji: '🐷' }
  ],
  burritos: [
    { id: 5, name: 'Classic Burrito', description: 'Rice, beans, choice of protein, pico, cheese, sour cream', price: 11.99, available: true, emoji: '🌯' },
    { id: 6, name: 'California Burrito', description: 'Carne asada, fries, guac, cheese, pico', price: 13.99, available: true, emoji: '🌯' },
    { id: 7, name: 'Veggie Burrito', description: 'Grilled veggies, black beans, rice, cheese, salsa', price: 10.99, available: true, emoji: '🥬' }
  ],
  sides: [
    { id: 8, name: 'Chips & Guac', description: 'Fresh-made guacamole with house chips', price: 6.99, available: true, emoji: '🥑' },
    { id: 9, name: 'Elote', description: 'Mexican street corn with mayo, cotija, chili', price: 4.99, available: true, emoji: '🌽' },
    { id: 10, name: 'Rice & Beans', description: 'Cilantro lime rice and black beans', price: 3.99, available: true, emoji: '🍚' }
  ],
  drinks: [
    { id: 11, name: 'Horchata', description: 'Traditional rice drink with cinnamon', price: 3.99, available: true, emoji: '🥛' },
    { id: 12, name: 'Agua Fresca', description: 'Fresh fruit water - ask for flavors', price: 3.49, available: true, emoji: '🍹' },
    { id: 13, name: 'Mexican Coke', description: 'Glass bottle, real sugar', price: 2.99, available: true, emoji: '🥤' }
  ]
};

const pendingChanges = [
  { id: 1, type: 'price', item: 'Street Tacos', from: '$8.99', to: '$9.99', time: '10 mins ago' },
  { id: 2, type: 'availability', item: 'Carnitas Tacos', status: 'marked unavailable', time: '25 mins ago' },
  { id: 3, type: 'new', item: 'Fish Tacos', status: 'added', time: '1 hour ago' }
];

const syncHistory = [
  { id: 1, action: 'Full sync completed', platforms: 'UberEats, DoorDash, Website', status: 'success', time: '2 hours ago', details: '24 items synced to 3 platforms' },
  { id: 2, action: 'Price update', platforms: 'All platforms', status: 'success', time: '1 day ago', details: 'Updated 5 item prices (+5%)' },
  { id: 3, action: 'Sync failed', platforms: 'Grubhub', status: 'warning', time: '3 days ago', details: 'Authentication expired - please reconnect' },
  { id: 4, action: 'Item availability', platforms: 'All platforms', status: 'success', time: '4 days ago', details: 'Marked "Carnitas Tacos" as unavailable' },
  { id: 5, action: 'Menu import', platforms: 'UberEats', status: 'success', time: '1 week ago', details: 'Imported 20 items from existing menu' }
];

// State
let currentView = 'dashboard';
let editingItem = null;

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const syncModal = document.getElementById('syncModal');
const itemModal = document.getElementById('itemModal');
const bulkModal = document.getElementById('bulkModal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderPlatformCards();
  renderChangesList();
  renderMenuCategories();
  renderPlatformsGrid();
  renderHistoryList();
  setupEventListeners();
});

// Navigation
function setupEventListeners() {
  // Nav items
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      switchView(view);
    });
  });

  // Sync All button
  document.getElementById('syncAllBtn').addEventListener('click', startSync);
  
  // Add Item button
  document.getElementById('addItemBtn').addEventListener('click', () => openItemModal());
  
  // Bulk Edit button
  document.getElementById('bulkEditBtn').addEventListener('click', () => {
    bulkModal.classList.add('active');
  });

  // Modal close buttons
  document.getElementById('closeSyncModal').addEventListener('click', () => {
    syncModal.classList.remove('active');
  });
  
  document.getElementById('closeItemModal').addEventListener('click', () => {
    itemModal.classList.remove('active');
  });
  
  document.getElementById('cancelItemEdit').addEventListener('click', () => {
    itemModal.classList.remove('active');
  });
  
  document.getElementById('saveItemEdit').addEventListener('click', saveItemEdit);
  
  document.getElementById('closeBulkModal').addEventListener('click', () => {
    bulkModal.classList.remove('active');
  });
  
  document.getElementById('cancelBulkEdit').addEventListener('click', () => {
    bulkModal.classList.remove('active');
  });
  
  document.getElementById('applyBulkEdit').addEventListener('click', applyBulkEdit);

  // Bulk edit type change
  document.querySelectorAll('input[name="bulkType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      document.getElementById('bulkAddon').textContent = e.target.value === 'percent' ? '%' : '$';
    });
  });

  // Click outside modal to close
  [syncModal, itemModal, bulkModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
}

function switchView(view) {
  currentView = view;
  
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.view === view);
  });
  
  views.forEach(v => {
    v.classList.toggle('active', v.id === view);
  });
}

// Render Functions
function renderPlatformCards() {
  const container = document.getElementById('platformCards');
  container.innerHTML = platforms.map(platform => `
    <div class="platform-card">
      <div class="platform-info">
        <div class="platform-logo">${platform.icon}</div>
        <div class="platform-details">
          <h3>${platform.name}</h3>
          <span class="platform-meta">${platform.items} items • Last sync: ${platform.lastSync}</span>
        </div>
      </div>
      <span class="platform-status ${platform.status}">
        ${platform.status === 'synced' ? '✓ In Sync' : platform.status === 'pending' ? '⏳ Pending' : '✗ Error'}
      </span>
    </div>
  `).join('');
}

function renderChangesList() {
  const container = document.getElementById('changesList');
  
  if (pendingChanges.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">✅</div>
        <p>No pending changes. All platforms are in sync!</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = pendingChanges.map(change => `
    <div class="change-item">
      <div class="change-info">
        <div class="change-icon">
          ${change.type === 'price' ? '💰' : change.type === 'availability' ? '🚫' : '➕'}
        </div>
        <div class="change-details">
          <h4>${change.item}</h4>
          <span class="change-meta">
            ${change.type === 'price' ? `Price: ${change.from} → ${change.to}` : change.status} • ${change.time}
          </span>
        </div>
      </div>
      <span class="change-badge">Not synced</span>
    </div>
  `).join('');
}

function renderMenuCategories() {
  const container = document.getElementById('menuCategories');
  const categories = [
    { key: 'tacos', name: 'Tacos', icon: '🌮' },
    { key: 'burritos', name: 'Burritos', icon: '🌯' },
    { key: 'sides', name: 'Sides', icon: '🥑' },
    { key: 'drinks', name: 'Drinks', icon: '🥤' }
  ];
  
  container.innerHTML = categories.map(cat => `
    <div class="menu-category">
      <div class="category-header">
        <h3>${cat.icon} ${cat.name} <span class="category-count">(${menuItems[cat.key].length})</span></h3>
        <button class="btn btn-small btn-secondary" onclick="addItemToCategory('${cat.key}')">+ Add</button>
      </div>
      <div class="menu-items">
        ${menuItems[cat.key].map(item => `
          <div class="menu-item" onclick="openItemModal(${item.id})">
            <span class="item-drag">⋮⋮</span>
            <div class="item-image">${item.emoji}</div>
            <div class="item-info">
              <h4>${item.name}</h4>
              <p class="item-description">${item.description}</p>
            </div>
            <span class="item-price">$${item.price.toFixed(2)}</span>
            <div class="item-toggle">
              <label class="toggle" onclick="event.stopPropagation()">
                <input type="checkbox" ${item.available ? 'checked' : ''} onchange="toggleAvailability(${item.id})">
                <span class="toggle-slider"></span>
              </label>
            </div>
            <div class="item-actions">
              <button class="btn btn-small btn-secondary" onclick="event.stopPropagation(); openItemModal(${item.id})">Edit</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderPlatformsGrid() {
  const container = document.getElementById('platformsGrid');
  const allPlatforms = [
    ...platforms,
    { id: 'square', name: 'Square Online', icon: '◼️', connected: false },
    { id: 'toast', name: 'Toast', icon: '🍞', connected: false }
  ];
  
  container.innerHTML = allPlatforms.map(platform => `
    <div class="platform-connection">
      <div class="platform-connection-header">
        <div class="platform-connection-logo">${platform.icon}</div>
        <div class="platform-connection-info">
          <h3>${platform.name}</h3>
          <p>${platform.connected ? `${platform.items || 0} items synced` : 'Not connected'}</p>
        </div>
      </div>
      <div class="platform-connection-status ${platform.connected ? '' : 'disconnected'}">
        <span class="status-dot"></span>
        <span>${platform.connected ? `Connected • Last sync: ${platform.lastSync}` : 'Disconnected'}</span>
      </div>
      <div class="platform-connection-actions">
        ${platform.connected ? `
          <button class="btn btn-secondary" onclick="syncPlatform('${platform.id}')">Sync Now</button>
          <button class="btn btn-secondary" onclick="disconnectPlatform('${platform.id}')">Disconnect</button>
        ` : `
          <button class="btn btn-primary" onclick="connectPlatform('${platform.id}')">Connect</button>
        `}
      </div>
    </div>
  `).join('');
}

function renderHistoryList() {
  const container = document.getElementById('historyList');
  container.innerHTML = syncHistory.map(item => `
    <div class="history-item">
      <div class="history-icon ${item.status}">
        ${item.status === 'success' ? '✓' : '⚠️'}
      </div>
      <div class="history-content">
        <h4>${item.action}</h4>
        <p>${item.details}</p>
      </div>
      <span class="history-time">${item.time}</span>
    </div>
  `).join('');
}

// Sync Functions
function startSync() {
  syncModal.classList.add('active');
  document.getElementById('closeSyncModal').style.display = 'none';
  
  const progressContainer = document.getElementById('syncProgress');
  progressContainer.innerHTML = platforms.filter(p => p.connected).map(platform => `
    <div class="sync-item" id="sync-${platform.id}">
      <div class="sync-item-icon">${platform.icon}</div>
      <div class="sync-item-info">
        <h4>${platform.name}</h4>
        <span class="sync-item-status">Waiting...</span>
      </div>
      <span class="sync-item-result"></span>
    </div>
  `).join('');
  
  // Simulate sync process
  let index = 0;
  const connectedPlatforms = platforms.filter(p => p.connected);
  
  function syncNext() {
    if (index >= connectedPlatforms.length) {
      document.getElementById('closeSyncModal').style.display = 'block';
      return;
    }
    
    const platform = connectedPlatforms[index];
    const item = document.getElementById(`sync-${platform.id}`);
    const status = item.querySelector('.sync-item-status');
    const result = item.querySelector('.sync-item-result');
    
    status.textContent = 'Syncing...';
    status.className = 'sync-item-status syncing';
    
    setTimeout(() => {
      const success = Math.random() > 0.1; // 90% success rate
      status.textContent = success ? 'Complete' : 'Failed - Retry?';
      status.className = `sync-item-status ${success ? 'done' : 'error'}`;
      result.textContent = success ? '✓' : '✗';
      
      index++;
      setTimeout(syncNext, 300);
    }, 1000 + Math.random() * 1000);
  }
  
  syncNext();
}

function syncPlatform(platformId) {
  const platform = platforms.find(p => p.id === platformId);
  if (platform) {
    alert(`Syncing ${platform.name}...`);
    // In real app, trigger actual sync
  }
}

function connectPlatform(platformId) {
  alert(`Opening ${platformId} connection wizard...`);
  // In real app, open OAuth flow or credential form
}

function disconnectPlatform(platformId) {
  if (confirm('Are you sure you want to disconnect this platform?')) {
    const platform = platforms.find(p => p.id === platformId);
    if (platform) {
      platform.connected = false;
      renderPlatformsGrid();
    }
  }
}

// Item Edit Functions
function openItemModal(itemId = null) {
  editingItem = itemId;
  
  if (itemId) {
    // Find item across all categories
    let item = null;
    for (const category of Object.values(menuItems)) {
      item = category.find(i => i.id === itemId);
      if (item) break;
    }
    
    if (item) {
      document.getElementById('itemModalTitle').textContent = 'Edit Item';
      document.getElementById('itemName').value = item.name;
      document.getElementById('itemPrice').value = item.price;
      document.getElementById('itemDescription').value = item.description;
      document.getElementById('itemAvailable').checked = item.available;
    }
  } else {
    document.getElementById('itemModalTitle').textContent = 'Add New Item';
    document.getElementById('itemForm').reset();
    document.getElementById('itemAvailable').checked = true;
  }
  
  itemModal.classList.add('active');
}

function saveItemEdit() {
  const name = document.getElementById('itemName').value;
  const price = parseFloat(document.getElementById('itemPrice').value);
  const description = document.getElementById('itemDescription').value;
  const available = document.getElementById('itemAvailable').checked;
  
  if (!name || isNaN(price)) {
    alert('Please fill in all required fields');
    return;
  }
  
  if (editingItem) {
    // Update existing item
    for (const category of Object.values(menuItems)) {
      const item = category.find(i => i.id === editingItem);
      if (item) {
        item.name = name;
        item.price = price;
        item.description = description;
        item.available = available;
        break;
      }
    }
  } else {
    // Add new item
    const category = document.getElementById('itemCategory').value;
    menuItems[category].push({
      id: Date.now(),
      name,
      price,
      description,
      available,
      emoji: '🍽️'
    });
  }
  
  renderMenuCategories();
  itemModal.classList.remove('active');
  
  // Show success feedback
  showToast(editingItem ? 'Item updated successfully!' : 'Item added successfully!');
}

function toggleAvailability(itemId) {
  for (const category of Object.values(menuItems)) {
    const item = category.find(i => i.id === itemId);
    if (item) {
      item.available = !item.available;
      showToast(`${item.name} marked as ${item.available ? 'available' : 'unavailable'}`);
      break;
    }
  }
}

function addItemToCategory(categoryKey) {
  document.getElementById('itemCategory').value = categoryKey;
  openItemModal();
}

// Bulk Edit Functions
function applyBulkEdit() {
  const type = document.querySelector('input[name="bulkType"]:checked').value;
  const amount = parseFloat(document.getElementById('bulkAmount').value);
  const category = document.getElementById('bulkCategory').value;
  
  if (isNaN(amount) || amount === 0) {
    alert('Please enter a valid amount');
    return;
  }
  
  let itemCount = 0;
  const categories = category === 'all' ? Object.keys(menuItems) : [category];
  
  categories.forEach(cat => {
    menuItems[cat].forEach(item => {
      if (type === 'percent') {
        item.price = item.price * (1 + amount / 100);
      } else {
        item.price = item.price + amount;
      }
      item.price = Math.round(item.price * 100) / 100;
      itemCount++;
    });
  });
  
  renderMenuCategories();
  bulkModal.classList.remove('active');
  showToast(`Updated prices for ${itemCount} items!`);
}

// Toast Notification
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: #18181b;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 1001;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Add CSS animation for toast
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);
