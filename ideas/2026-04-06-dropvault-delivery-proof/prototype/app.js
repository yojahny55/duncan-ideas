// DropVault — Delivery Evidence Vault
// Interactive demo prototype

const state = {
  packages: [],
  evidence: [],
  disputes: [],
  nextId: 1
};

// === Tab Navigation ===
function switchTab(tabId) {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
  document.getElementById(`tab-${tabId}`).classList.add('active');
}

// === Scroll Helpers ===
function scrollToDemo() {
  document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
}
function scrollToFeatures() {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// === Package Management ===
function showAddPackage() {
  document.getElementById('add-package-form').classList.remove('hidden');
}

function hideAddPackage() {
  document.getElementById('add-package-form').classList.add('hidden');
  clearForm();
}

function clearForm() {
  document.getElementById('tracking-input').value = '';
  document.getElementById('carrier-input').value = 'auto';
  document.getElementById('value-input').value = '';
  document.getElementById('desc-input').value = '';
}

function detectCarrier(tracking) {
  if (/^1Z/i.test(tracking)) return 'UPS';
  if (/^9[0-9]{15,21}$/.test(tracking)) return 'USPS';
  if (/^\d{12,15}$/.test(tracking)) return 'FedEx';
  if (/^TBA/i.test(tracking)) return 'Amazon';
  if (/^\d{10}$/.test(tracking)) return 'DHL';
  return 'Unknown';
}

function addPackage() {
  const tracking = document.getElementById('tracking-input').value.trim();
  const carrierSelect = document.getElementById('carrier-input').value;
  const value = document.getElementById('value-input').value;
  const desc = document.getElementById('desc-input').value.trim();

  if (!tracking) {
    alert('Please enter a tracking number');
    return;
  }

  const carrier = carrierSelect === 'auto' ? detectCarrier(tracking) : carrierSelect.toUpperCase();

  const pkg = {
    id: state.nextId++,
    tracking,
    carrier,
    description: desc || 'Package',
    value: parseFloat(value) || 0,
    status: 'In Transit',
    createdAt: new Date()
  };

  state.packages.push(pkg);
  hideAddPackage();
  renderPackages();
  updateAnalytics();
}

function renderPackages() {
  const list = document.getElementById('package-list');

  if (state.packages.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📦</div>
        <h4>No packages yet</h4>
        <p>Add your first expected delivery to start building your evidence timeline.</p>
      </div>`;
    return;
  }

  list.innerHTML = state.packages.map(pkg => `
    <div class="package-card">
      <div class="pkg-info">
        <div class="pkg-name">${escapeHtml(pkg.description)}</div>
        <div class="pkg-tracking">${escapeHtml(pkg.tracking)}</div>
        <div class="pkg-meta">
          <span class="pkg-badge badge-carrier">${pkg.carrier}</span>
          <span class="pkg-badge badge-status ${pkg.status === 'Issue' ? 'issue' : ''}">${pkg.status}</span>
          ${pkg.value ? `<span class="pkg-badge badge-carrier">$${pkg.value.toFixed(2)}</span>` : ''}
        </div>
      </div>
      <div class="pkg-actions">
        <button class="btn-evidence" onclick="captureEvidenceFor(${pkg.id})">📸 Evidence</button>
        <button class="btn-dispute" onclick="markIssue(${pkg.id})">⚠️ Issue</button>
      </div>
    </div>
  `).join('');
}

function markIssue(id) {
  const pkg = state.packages.find(p => p.id === id);
  if (pkg) {
    pkg.status = 'Issue';
    renderPackages();
    generateDisputeFor(id);
  }
}

// === Evidence Capture ===
function captureEvidence() {
  captureEvidenceType('porch');
}

function captureEvidenceType(type) {
  const labels = {
    porch: 'Porch Check Photo',
    damage: 'Damage Report Photo',
    missing: 'Not Received Confirmation'
  };
  const icons = {
    porch: '🏠',
    damage: '💔',
    missing: '🚫'
  };

  const now = new Date();
  const lat = (40.7128 + (Math.random() - 0.5) * 0.01).toFixed(6);
  const lng = (-74.006 + (Math.random() - 0.5) * 0.01).toFixed(6);

  const ev = {
    id: state.nextId++,
    type,
    label: labels[type],
    icon: icons[type],
    timestamp: now,
    lat,
    lng,
    packageId: state.packages.length > 0 ? state.packages[state.packages.length - 1].id : null
  };

  state.evidence.push(ev);
  renderEvidence();
  updateAnalytics();
}

function captureEvidenceFor(pkgId) {
  const pkg = state.packages.find(p => p.id === pkgId);
  if (!pkg) return;

  const now = new Date();
  const lat = (40.7128 + (Math.random() - 0.5) * 0.01).toFixed(6);
  const lng = (-74.006 + (Math.random() - 0.5) * 0.01).toFixed(6);

  const ev = {
    id: state.nextId++,
    type: 'porch',
    label: `Porch Check — ${pkg.description}`,
    icon: '🏠',
    timestamp: now,
    lat,
    lng,
    packageId: pkgId
  };

  state.evidence.push(ev);
  renderEvidence();
  updateAnalytics();

  // Switch to evidence tab
  switchTab('evidence');
}

function renderEvidence() {
  const timeline = document.getElementById('evidence-timeline');

  if (state.evidence.length === 0) {
    timeline.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📸</div>
        <h4>No evidence captured</h4>
        <p>Use the quick actions above or snap a photo when a delivery is expected.</p>
      </div>`;
    return;
  }

  timeline.innerHTML = state.evidence.map(ev => `
    <div class="evidence-item">
      <div class="evidence-thumb">${ev.icon}</div>
      <div class="evidence-info">
        <div class="evidence-type">${escapeHtml(ev.label)}</div>
        <div class="evidence-time">${formatTime(ev.timestamp)}</div>
        <div class="evidence-gps">📍 ${ev.lat}, ${ev.lng}</div>
      </div>
    </div>
  `).join('');
}

// === Dispute Generator ===
function generateDisputeFor(pkgId) {
  const pkg = state.packages.find(p => p.id === pkgId);
  if (!pkg) return;

  const pkgEvidence = state.evidence.filter(e => e.packageId === pkgId);

  const dispute = {
    id: state.nextId++,
    packageId: pkgId,
    package: pkg,
    evidence: pkgEvidence,
    createdAt: new Date()
  };

  state.disputes.push(dispute);
  renderDispute(dispute);
  updateAnalytics();
  switchTab('disputes');
}

function renderDispute(dispute) {
  const builder = document.getElementById('dispute-builder');
  const preview = document.getElementById('dispute-preview');
  const content = document.getElementById('preview-content');

  builder.classList.add('hidden');
  preview.classList.remove('hidden');

  content.innerHTML = `
    <h4>📦 DELIVERY DISPUTE — ${dispute.package.carrier}</h4>
    <p><strong>Date:</strong> ${formatDate(dispute.createdAt)}</p>
    <p><strong>Tracking Number:</strong> ${dispute.package.tracking}</p>
    <p><strong>Item:</strong> ${escapeHtml(dispute.package.description)}</p>
    <p><strong>Value:</strong> $${dispute.package.value.toFixed(2)}</p>

    <h4>📋 ISSUE DESCRIPTION</h4>
    <p>The above package was marked as delivered by ${dispute.package.carrier}, but was not received at the delivery address. The consumer has independently verified (via timestamped, geolocated photos) that the package was not present at the stated delivery location.</p>

    <h4>📎 EVIDENCE ATTACHED</h4>
    ${dispute.evidence.length > 0 ? `
      <ul>
        ${dispute.evidence.map(e => `<li>${e.label} — ${formatTime(e.timestamp)} — GPS: ${e.lat}, ${e.lng}</li>`).join('')}
      </ul>
    ` : '<p><em>No independent evidence captured. Recommend capturing porch photos for future deliveries.</em></p>'}

    <h4>🙏 REQUESTED RESOLUTION</h4>
    <p>Full refund or replacement of the item valued at $${dispute.package.value.toFixed(2)}. This consumer has provided independent evidence contradicting the carrier\'s delivery confirmation.</p>
  `;
}

function downloadDispute() {
  alert('In a full implementation, this would generate a PDF with all evidence, timestamps, GPS coordinates, and a pre-written cover letter for the specific carrier.');
}

// === Analytics ===
function updateAnalytics() {
  document.getElementById('total-packages').textContent = state.packages.length;
  document.getElementById('total-issues').textContent = state.packages.filter(p => p.status === 'Issue').length;
  document.getElementById('total-evidence').textContent = state.evidence.length;
  document.getElementById('total-disputes').textContent = state.disputes.length;
}

// === Utilities ===
function formatTime(date) {
  return date.toLocaleString('en-US', {
    month: 'short', day: 'numeric',
    hour: 'numeric', minute: '2-digit',
    hour12: true
  });
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// === Initialize ===
document.addEventListener('DOMContentLoaded', () => {
  updateAnalytics();
});
