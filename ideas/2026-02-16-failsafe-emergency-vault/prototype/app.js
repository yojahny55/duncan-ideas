// FailSafe — Emergency Access Vault
// Interactive prototype

// Sample data
const vaultItems = [
  { id: 1, title: 'Bank of America', category: 'passwords', icon: '🏦', access: 'emergency', updated: '2 days ago' },
  { id: 2, title: 'Gmail - Main', category: 'passwords', icon: '📧', access: 'inner', updated: '1 week ago' },
  { id: 3, title: 'Bitcoin Wallet', category: 'crypto', icon: '₿', access: 'executor', updated: '1 month ago' },
  { id: 4, title: 'Home Insurance Policy', category: 'documents', icon: '📄', access: 'emergency', updated: '3 months ago' },
  { id: 5, title: 'Netflix', category: 'passwords', icon: '🎬', access: 'inner', updated: 'Yesterday' },
  { id: 6, title: 'If something happens...', category: 'instructions', icon: '📝', access: 'emergency', updated: '2 weeks ago' },
  { id: 7, title: 'Ethereum Recovery', category: 'crypto', icon: 'Ξ', access: 'executor', updated: '2 months ago' },
  { id: 8, title: 'Car Title', category: 'documents', icon: '🚗', access: 'executor', updated: '6 months ago' },
  { id: 9, title: 'AWS Account', category: 'passwords', icon: '☁️', access: 'executor', updated: '1 week ago' },
  { id: 10, title: 'Credit Card Logins', category: 'passwords', icon: '💳', access: 'emergency', updated: '3 days ago' },
  { id: 11, title: 'Password Manager Master', category: 'passwords', icon: '🔑', access: 'executor', updated: '1 month ago' },
  { id: 12, title: 'Life Insurance', category: 'documents', icon: '📋', access: 'emergency', updated: '4 months ago' },
];

const contacts = [
  { id: 1, name: 'Sarah Chen', email: 'sarah@example.com', tier: 'inner', status: 'active', color: '#8b5cf6' },
  { id: 2, name: 'Mike Rodriguez', email: 'mike@example.com', tier: 'emergency', status: 'active', color: '#06b6d4' },
  { id: 3, name: 'Mom', email: 'mom@example.com', tier: 'executor', status: 'active', color: '#ec4899' },
];

const messages = [
  { id: 1, recipient: 'Sarah', type: 'letter', preview: 'Thank you for everything. I want you to know...', updated: '2 weeks ago' },
  { id: 2, recipient: 'Family', type: 'video', preview: 'Video message for the whole family', updated: '1 month ago' },
];

// DOM elements
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const toast = document.getElementById('toast');
const vaultGrid = document.getElementById('vault-grid');
const contactsGrid = document.getElementById('contacts-grid');
const messagesGrid = document.getElementById('messages-grid');
const categoryBtns = document.querySelectorAll('.category-btn');
const checkinBtn = document.getElementById('checkin-now');

// Navigation
navItems.forEach(item => {
  item.addEventListener('click', () => {
    const viewName = item.dataset.view;
    
    // Update nav
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');
    
    // Update views
    views.forEach(v => v.classList.remove('active'));
    document.getElementById(`${viewName}-view`).classList.add('active');
  });
});

// Render vault items
function renderVault(category = 'all') {
  const filtered = category === 'all' 
    ? vaultItems 
    : vaultItems.filter(item => item.category === category);
  
  vaultGrid.innerHTML = filtered.map(item => `
    <div class="vault-item" data-id="${item.id}">
      <div class="vault-item-header">
        <div class="vault-item-icon">${item.icon}</div>
        <div>
          <div class="vault-item-title">${item.title}</div>
          <div class="vault-item-category">${item.category}</div>
        </div>
      </div>
      <div class="vault-item-meta">
        <span>Updated ${item.updated}</span>
        <span class="access-badge ${item.access}">${item.access}</span>
      </div>
    </div>
  `).join('');
  
  // Add click handlers
  document.querySelectorAll('.vault-item').forEach(el => {
    el.addEventListener('click', () => showVaultItemModal(el.dataset.id));
  });
}

// Render contacts
function renderContacts() {
  contactsGrid.innerHTML = contacts.map(contact => `
    <div class="contact-card" data-id="${contact.id}">
      <div class="contact-header">
        <div class="contact-avatar" style="background: ${contact.color}">${contact.name.split(' ').map(n => n[0]).join('')}</div>
        <div class="contact-info">
          <h3>${contact.name}</h3>
          <p>${contact.email}</p>
        </div>
      </div>
      <div class="contact-tier">
        <span>${getTierIcon(contact.tier)}</span>
        <span>${formatTier(contact.tier)} Access</span>
      </div>
      <div class="contact-status">
        <span class="status-dot ${contact.status}"></span>
        <span>${contact.status === 'active' ? 'Accepted invite' : 'Pending invite'}</span>
      </div>
    </div>
  `).join('');
}

// Render messages
function renderMessages() {
  messagesGrid.innerHTML = messages.map(msg => `
    <div class="message-card" data-id="${msg.id}">
      <div class="message-header">
        <div class="message-recipient">
          <span>💌</span>
          <strong>To: ${msg.recipient}</strong>
        </div>
        <span class="message-type">${msg.type}</span>
      </div>
      <p class="message-preview">${msg.preview}</p>
      <div class="message-meta">Last edited ${msg.updated}</div>
    </div>
  `).join('');
}

// Helper functions
function getTierIcon(tier) {
  const icons = { emergency: '🚨', inner: '💜', executor: '⚖️' };
  return icons[tier] || '👤';
}

function formatTier(tier) {
  const names = { emergency: 'Emergency', inner: 'Inner Circle', executor: 'Executor' };
  return names[tier] || tier;
}

// Category filtering
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderVault(btn.dataset.category);
  });
});

// Modal functions
function openModal(content) {
  modalContent.innerHTML = content;
  modalOverlay.classList.add('active');
}

function closeModal() {
  modalOverlay.classList.remove('active');
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Show vault item details
function showVaultItemModal(id) {
  const item = vaultItems.find(i => i.id === parseInt(id));
  if (!item) return;
  
  openModal(`
    <h2>${item.icon} ${item.title}</h2>
    <div class="form-group">
      <label>Category</label>
      <input type="text" value="${item.category}" readonly>
    </div>
    <div class="form-group">
      <label>Access Tier</label>
      <select>
        <option ${item.access === 'emergency' ? 'selected' : ''}>Emergency</option>
        <option ${item.access === 'inner' ? 'selected' : ''}>Inner Circle</option>
        <option ${item.access === 'executor' ? 'selected' : ''}>Executor</option>
      </select>
    </div>
    <div class="form-group">
      <label>Encrypted Content</label>
      <textarea placeholder="Username, password, notes...">••••••••••••</textarea>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="showToast('Item saved!'); closeModal()">Save</button>
    </div>
  `);
}

// Add item modal
document.getElementById('add-item-btn').addEventListener('click', () => {
  openModal(`
    <h2>Add Vault Item</h2>
    <div class="form-group">
      <label>Title</label>
      <input type="text" placeholder="e.g., Bank Account, Email Login...">
    </div>
    <div class="form-group">
      <label>Category</label>
      <select>
        <option>Passwords</option>
        <option>Documents</option>
        <option>Crypto</option>
        <option>Instructions</option>
      </select>
    </div>
    <div class="form-group">
      <label>Who can access this?</label>
      <select>
        <option>Emergency contacts only</option>
        <option>Inner circle</option>
        <option>Executor only</option>
      </select>
    </div>
    <div class="form-group">
      <label>Content</label>
      <textarea placeholder="Enter the sensitive information you want to store..."></textarea>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addVaultItem()">Add Item</button>
    </div>
  `);
});

function addVaultItem() {
  showToast('Item added to vault!');
  closeModal();
}

// Add contact modal
document.getElementById('add-contact-btn').addEventListener('click', () => {
  openModal(`
    <h2>Invite Trusted Contact</h2>
    <p style="margin-bottom: 1.5rem; color: #6b7280;">This person will be notified if you miss multiple check-ins and may gain access to your vault in an emergency.</p>
    <div class="form-group">
      <label>Full Name</label>
      <input type="text" placeholder="e.g., John Smith">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" placeholder="john@example.com">
    </div>
    <div class="form-group">
      <label>Access Tier</label>
      <select>
        <option value="emergency">🚨 Emergency — Critical info only (banks, utilities)</option>
        <option value="inner">💜 Inner Circle — Full access including messages</option>
        <option value="executor">⚖️ Executor — Legal docs, all passwords, complete access</option>
      </select>
    </div>
    <div class="form-group">
      <label>Personal message (optional)</label>
      <textarea placeholder="Add a note explaining why you're adding them..."></textarea>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addContact()">Send Invite</button>
    </div>
  `);
});

function addContact() {
  showToast('Invite sent!');
  closeModal();
}

// Add message modal
document.getElementById('add-message-btn').addEventListener('click', () => {
  openModal(`
    <h2>💌 New Time Capsule</h2>
    <p style="margin-bottom: 1.5rem; color: #6b7280;">Write a letter or leave a message for someone special. It will only be delivered if something happens to you.</p>
    <div class="form-group">
      <label>Recipient</label>
      <input type="text" placeholder="e.g., Sarah, Mom, My Family">
    </div>
    <div class="form-group">
      <label>Type</label>
      <select>
        <option>📝 Written letter</option>
        <option>🎥 Video message</option>
        <option>🎵 Voice note</option>
      </select>
    </div>
    <div class="form-group">
      <label>Your message</label>
      <textarea placeholder="Write from the heart..."></textarea>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="addMessage()">Save Capsule</button>
    </div>
  `);
});

function addMessage() {
  showToast('Time capsule saved!');
  closeModal();
}

// Check-in
checkinBtn.addEventListener('click', () => {
  openModal(`
    <div style="text-align: center; padding: 2rem 0;">
      <div style="font-size: 4rem; margin-bottom: 1rem;">🛡️</div>
      <h2 style="margin-bottom: 0.5rem;">Ready to check in?</h2>
      <p style="color: #6b7280; margin-bottom: 2rem;">This confirms you're okay and resets your check-in timer.</p>
      <button class="btn btn-primary" style="width: 100%; padding: 1rem; font-size: 1.125rem;" onclick="confirmCheckin()">
        ✓ I'm OK — Check In
      </button>
      <p style="margin-top: 1rem; font-size: 0.875rem; color: #9ca3af;">
        Your trusted contacts will not be notified.
      </p>
    </div>
  `);
});

function confirmCheckin() {
  closeModal();
  showToast('Checked in successfully! Next check-in in 7 days.');
  
  // Update UI
  const banner = document.querySelector('.checkin-banner');
  banner.innerHTML = `
    <div class="checkin-status">
      <div class="status-icon success">✓</div>
      <div class="status-info">
        <h3>You're all checked in!</h3>
        <p>Next check-in due in <strong>7 days</strong></p>
      </div>
    </div>
    <button class="btn btn-secondary" id="checkin-now">Check In Now</button>
  `;
  
  // Re-attach event listener
  document.getElementById('checkin-now').addEventListener('click', () => {
    document.querySelector('[data-view="dashboard"]').click();
    setTimeout(() => checkinBtn.click(), 100);
  });
}

// Toast notification
function showToast(message) {
  const toastMsg = toast.querySelector('.toast-message');
  toastMsg.textContent = message;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3000);
}

// Make showToast global
window.showToast = showToast;
window.closeModal = closeModal;

// Search functionality
document.getElementById('vault-search').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = vaultItems.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.category.toLowerCase().includes(query)
  );
  
  vaultGrid.innerHTML = filtered.map(item => `
    <div class="vault-item" data-id="${item.id}">
      <div class="vault-item-header">
        <div class="vault-item-icon">${item.icon}</div>
        <div>
          <div class="vault-item-title">${item.title}</div>
          <div class="vault-item-category">${item.category}</div>
        </div>
      </div>
      <div class="vault-item-meta">
        <span>Updated ${item.updated}</span>
        <span class="access-badge ${item.access}">${item.access}</span>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.vault-item').forEach(el => {
    el.addEventListener('click', () => showVaultItemModal(el.dataset.id));
  });
});

// Initialize
renderVault();
renderContacts();
renderMessages();
