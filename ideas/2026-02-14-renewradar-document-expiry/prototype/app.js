// ========================================
// RenewRadar - Document Expiry Tracker
// ========================================

// Document type icons
const TYPE_ICONS = {
  passport: '🛂',
  license: '🪪',
  visa: '✈️',
  registration: '🚗',
  insurance: '🛡️',
  certification: '📜',
  other: '📄'
};

// Type labels
const TYPE_LABELS = {
  passport: 'Passport',
  license: "Driver's License",
  visa: 'Visa',
  registration: 'Car Registration',
  insurance: 'Insurance Policy',
  certification: 'Professional Certification',
  other: 'Document'
};

// Person labels
const PERSON_LABELS = {
  self: 'Myself',
  spouse: 'Spouse/Partner',
  child: 'Child',
  parent: 'Parent',
  other: 'Other'
};

// Processing time recommendations (days)
const PROCESSING_TIME = {
  passport: 60,      // 8 weeks recommended
  license: 30,
  visa: 90,          // Visas need more lead time
  registration: 14,
  insurance: 30,
  certification: 45,
  other: 30
};

// Sample data
let documents = [
  {
    id: 1,
    type: 'passport',
    name: 'US Passport',
    person: 'self',
    expiry: '2026-03-15',
    notes: 'Renewal at travel.state.gov'
  },
  {
    id: 2,
    type: 'license',
    name: 'Florida Driver License',
    person: 'self',
    expiry: '2026-08-22',
    notes: 'GoRenew.com or DMV office'
  },
  {
    id: 3,
    type: 'registration',
    name: 'Honda Civic Registration',
    person: 'self',
    expiry: '2026-02-28',
    notes: ''
  },
  {
    id: 4,
    type: 'visa',
    name: 'Work Authorization',
    person: 'spouse',
    expiry: '2027-01-10',
    notes: 'USCIS renewal needed 180 days before'
  },
  {
    id: 5,
    type: 'insurance',
    name: 'Auto Insurance - GEICO',
    person: 'self',
    expiry: '2026-05-01',
    notes: 'Policy #12345678'
  }
];

let currentFilter = 'all';
let editingId = null;

// DOM Elements
const documentsList = document.getElementById('documents-list');
const modalOverlay = document.getElementById('modal-overlay');
const detailModalOverlay = document.getElementById('detail-modal-overlay');
const form = document.getElementById('form-add-document');
const filterTabs = document.querySelectorAll('.tab');

// Calculate days until expiry
function daysUntilExpiry(expiryDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const expiry = new Date(expiryDate);
  expiry.setHours(0, 0, 0, 0);
  const diff = expiry - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Get status based on days
function getStatus(days, type) {
  const processingTime = PROCESSING_TIME[type] || 30;
  
  if (days <= 0) return 'expired';
  if (days <= 30) return 'critical';
  if (days <= processingTime + 30) return 'warning';
  return 'ok';
}

// Get status label
function getStatusLabel(days) {
  if (days <= 0) return 'Expired';
  if (days === 1) return '1 day left';
  if (days <= 30) return `${days} days left`;
  if (days <= 90) return `${Math.floor(days / 7)} weeks left`;
  return `${Math.floor(days / 30)} months left`;
}

// Format date
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

// Update stats
function updateStats() {
  let critical = 0, warning = 0, ok = 0;
  
  documents.forEach(doc => {
    const days = daysUntilExpiry(doc.expiry);
    const status = getStatus(days, doc.type);
    
    if (status === 'critical' || status === 'expired') critical++;
    else if (status === 'warning') warning++;
    else ok++;
  });
  
  document.getElementById('stat-critical').textContent = critical;
  document.getElementById('stat-warning').textContent = warning;
  document.getElementById('stat-ok').textContent = ok;
}

// Render documents
function renderDocuments() {
  // Sort by days until expiry
  const sorted = [...documents].sort((a, b) => {
    return daysUntilExpiry(a.expiry) - daysUntilExpiry(b.expiry);
  });
  
  // Filter
  const filtered = sorted.filter(doc => {
    if (currentFilter === 'all') return true;
    const days = daysUntilExpiry(doc.expiry);
    const status = getStatus(days, doc.type);
    if (currentFilter === 'critical') return status === 'critical' || status === 'expired';
    return status === currentFilter;
  });
  
  if (filtered.length === 0) {
    documentsList.innerHTML = `
      <div class="empty-state">
        <div class="icon">📋</div>
        <h3>${currentFilter === 'all' ? 'No documents yet' : 'No documents in this category'}</h3>
        <p>${currentFilter === 'all' ? 'Tap + to add your first document' : 'That\'s a good thing! 🎉'}</p>
      </div>
    `;
    return;
  }
  
  documentsList.innerHTML = filtered.map(doc => {
    const days = daysUntilExpiry(doc.expiry);
    const status = getStatus(days, doc.type);
    const statusClass = status === 'expired' ? 'critical' : status;
    
    return `
      <div class="document-card ${statusClass}" data-id="${doc.id}">
        <div class="doc-header">
          <span class="doc-icon">${TYPE_ICONS[doc.type]}</span>
          <div class="doc-title">
            <div class="doc-name">${doc.name}</div>
            <div class="doc-type">${TYPE_LABELS[doc.type]}</div>
          </div>
          <span class="doc-status ${statusClass}">
            ${days <= 0 ? 'Expired!' : getStatusLabel(days)}
          </span>
        </div>
        <div class="doc-details">
          <span class="doc-person">👤 ${PERSON_LABELS[doc.person]}</span>
          <span class="doc-expiry">📅 ${formatDate(doc.expiry)}</span>
        </div>
      </div>
    `;
  }).join('');
  
  // Add click handlers
  documentsList.querySelectorAll('.document-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      showDocumentDetail(id);
    });
  });
  
  updateStats();
}

// Show document detail
function showDocumentDetail(id) {
  const doc = documents.find(d => d.id === id);
  if (!doc) return;
  
  const days = daysUntilExpiry(doc.expiry);
  const status = getStatus(days, doc.type);
  const statusClass = status === 'expired' ? 'critical' : status;
  const processingTime = PROCESSING_TIME[doc.type] || 30;
  
  // Generate alert schedule
  const alerts = [90, 60, 30, 14, 7, 3, 1].map(d => {
    const alertDate = new Date(doc.expiry);
    alertDate.setDate(alertDate.getDate() - d);
    const alertDays = daysUntilExpiry(alertDate.toISOString().split('T')[0]);
    
    let alertClass = '';
    if (alertDays < 0) alertClass = 'sent';
    else if (alertDays === 0) alertClass = 'next';
    
    return `
      <div class="alert-item ${alertClass}">
        <span>${d} days before</span>
        <span>${formatDate(alertDate.toISOString().split('T')[0])}</span>
      </div>
    `;
  }).join('');
  
  document.getElementById('detail-title').textContent = doc.name;
  document.getElementById('detail-content').innerHTML = `
    <div class="detail-section">
      <h3>Status</h3>
      <div class="countdown ${statusClass}">
        ${days <= 0 ? 'EXPIRED' : `${days} days remaining`}
      </div>
      <div class="detail-value">
        Expires ${formatDate(doc.expiry)}
      </div>
    </div>
    
    <div class="detail-section">
      <h3>Document Info</h3>
      <p><strong>Type:</strong> ${TYPE_ICONS[doc.type]} ${TYPE_LABELS[doc.type]}</p>
      <p><strong>For:</strong> ${PERSON_LABELS[doc.person]}</p>
      ${doc.notes ? `<p><strong>Notes:</strong> ${doc.notes}</p>` : ''}
    </div>
    
    <div class="detail-section">
      <h3>⚠️ Processing Time</h3>
      <p>Recommended lead time: <strong>${processingTime} days</strong></p>
      <p>Start renewal by: <strong>${formatDate(new Date(new Date(doc.expiry).setDate(new Date(doc.expiry).getDate() - processingTime)).toISOString().split('T')[0])}</strong></p>
    </div>
    
    <div class="detail-section">
      <h3>🔔 Alert Schedule</h3>
      <div class="alert-schedule">
        ${alerts}
      </div>
    </div>
    
    <div class="form-actions">
      <button class="btn btn-secondary" onclick="editDocument(${doc.id})">Edit</button>
      <button class="btn btn-danger" onclick="deleteDocument(${doc.id})">Delete</button>
    </div>
  `;
  
  detailModalOverlay.classList.add('active');
}

// Edit document
function editDocument(id) {
  const doc = documents.find(d => d.id === id);
  if (!doc) return;
  
  editingId = id;
  document.getElementById('modal-title').textContent = 'Edit Document';
  document.getElementById('doc-type').value = doc.type;
  document.getElementById('doc-name').value = doc.name;
  document.getElementById('doc-person').value = doc.person;
  document.getElementById('doc-expiry').value = doc.expiry;
  document.getElementById('doc-notes').value = doc.notes || '';
  
  detailModalOverlay.classList.remove('active');
  modalOverlay.classList.add('active');
}

// Delete document
function deleteDocument(id) {
  if (confirm('Delete this document?')) {
    documents = documents.filter(d => d.id !== id);
    detailModalOverlay.classList.remove('active');
    renderDocuments();
  }
}

// Open add modal
document.getElementById('btn-add').addEventListener('click', () => {
  editingId = null;
  document.getElementById('modal-title').textContent = 'Add Document';
  form.reset();
  modalOverlay.classList.add('active');
});

// Close modals
document.getElementById('btn-close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

document.getElementById('btn-cancel').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

document.getElementById('btn-close-detail').addEventListener('click', () => {
  detailModalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});

detailModalOverlay.addEventListener('click', (e) => {
  if (e.target === detailModalOverlay) {
    detailModalOverlay.classList.remove('active');
  }
});

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const doc = {
    id: editingId || Date.now(),
    type: document.getElementById('doc-type').value,
    name: document.getElementById('doc-name').value,
    person: document.getElementById('doc-person').value,
    expiry: document.getElementById('doc-expiry').value,
    notes: document.getElementById('doc-notes').value
  };
  
  if (editingId) {
    const index = documents.findIndex(d => d.id === editingId);
    documents[index] = doc;
  } else {
    documents.push(doc);
  }
  
  modalOverlay.classList.remove('active');
  renderDocuments();
});

// Filter tabs
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentFilter = tab.dataset.filter;
    renderDocuments();
  });
});

// Initial render
renderDocuments();
