// ============================================
// BlackoutReady — Interactive Prototype
// ============================================

// --- State ---
let currentTab = 'dashboard';
let outageActive = false;
let fridgeItems = [
  { name: 'Whole Milk', icon: '🥛', hoursLeft: 4, value: 4.50, status: 'danger' },
  { name: 'Chicken Breast', icon: '🍗', hoursLeft: 4, value: 12.00, status: 'danger' },
  { name: 'Sliced Cheese', icon: '🧀', hoursLeft: 8, value: 6.00, status: 'warning' },
  { name: 'Frozen Vegetables', icon: '🥦', hoursLeft: 48, value: 5.00, status: 'safe' },
  { name: 'Ice Cream', icon: '🍦', hoursLeft: 6, value: 7.00, status: 'warning' },
  { name: 'Eggs', icon: '🥚', hoursLeft: 36, value: 8.00, status: 'safe' },
];

// --- Navigation ---
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.tab === tab);
  });
  document.querySelectorAll('[data-section]').forEach(section => {
    section.style.display = section.dataset.section === tab ? 'block' : 'none';
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Grid Gauge Animation ---
function animateGauge() {
  const gauge = document.getElementById('gauge-fill');
  if (!gauge) return;
  const circumference = 2 * Math.PI * 60;
  const percentage = 0.78; // 78% grid capacity
  const offset = circumference * (1 - percentage);
  gauge.style.strokeDasharray = circumference;
  gauge.style.strokeDashoffset = offset;
}

// --- Fridge Item Management ---
function renderFridge() {
  const container = document.getElementById('fridge-items');
  if (!container) return;

  container.innerHTML = fridgeItems.map(item => `
    <div class="fridge-item ${item.status}">
      <div class="fridge-item-icon">${item.icon}</div>
      <div class="fridge-item-info">
        <div class="fridge-item-name">${item.name}</div>
        <div class="fridge-item-status ${item.status}">
          ${item.status === 'danger' ? '⚠️ Toss now' : item.status === 'warning' ? '⏰ Eat soon' : '✅ Still safe'}
        </div>
      </div>
      <div class="fridge-item-value">$${item.value.toFixed(2)}</div>
    </div>
  `).join('');

  // Update total at risk
  const atRisk = fridgeItems
    .filter(i => i.status === 'danger' || i.status === 'warning')
    .reduce((sum, i) => sum + i.value, 0);
  const atRiskEl = document.getElementById('fridge-at-risk');
  if (atRiskEl) atRiskEl.textContent = `$${atRisk.toFixed(2)}`;
}

// --- Simulate Outage Toggle ---
function toggleOutage() {
  outageActive = !outageActive;
  const badge = document.getElementById('outage-badge');
  const btn = document.getElementById('outage-toggle');
  const gaugeValue = document.getElementById('gauge-value');
  const gaugeFill = document.getElementById('gauge-fill');
  const gaugeStatus = document.getElementById('gauge-status');

  if (outageActive) {
    badge.style.display = 'inline-flex';
    badge.innerHTML = '<span class="hero-badge-pulse"></span> OUTAGE ACTIVE — Grid down for 2h 14m';
    btn.textContent = 'Simulate Power Restore';
    gaugeValue.textContent = '0%';
    gaugeValue.style.color = 'var(--color-signal-red)';
    gaugeFill.style.stroke = 'var(--color-signal-red)';
    gaugeFill.style.strokeDashoffset = gaugeFill.style.strokeDasharray;
    gaugeStatus.textContent = 'GRID DOWN';
    gaugeStatus.style.color = 'var(--color-signal-red)';
    gaugeStatus.style.borderColor = 'rgba(230, 57, 70, 0.4)';
    gaugeStatus.style.background = 'rgba(230, 57, 70, 0.12)';
  } else {
    badge.style.display = 'none';
    btn.textContent = 'Simulate Power Outage';
    gaugeValue.textContent = '78%';
    gaugeValue.style.color = 'var(--risk-high)';
    gaugeFill.style.stroke = 'var(--risk-high)';
    animateGauge();
    gaugeStatus.textContent = 'HIGH DEMAND';
    gaugeStatus.style.color = 'var(--risk-high)';
    gaugeStatus.style.borderColor = 'rgba(232, 119, 45, 0.4)';
    gaugeStatus.style.background = 'rgba(232, 119, 45, 0.15)';
  }
}

// --- Checklists ---
const prepChecklist = [
  { id: 'water', label: 'Water supply (1 gal/person/day × 3 days)', checked: true, expiresIn: '45 days' },
  { id: 'batteries', label: 'Flashlight batteries (AA + AAA)', checked: true, expiresIn: 'Expired' },
  { id: 'firstaid', label: 'First aid kit', checked: true, expiresIn: 'OK' },
  { id: 'radio', label: 'Battery/hand-crank radio', checked: false, expiresIn: '—' },
  { id: 'food', label: 'Non-perishable food (3-day supply)', checked: true, expiresIn: '120 days' },
  { id: 'cash', label: 'Emergency cash ($200+ in small bills)', checked: false, expiresIn: '—' },
  { id: 'meds', label: 'Prescription medications (7-day extra)', checked: true, expiresIn: '12 days' },
  { id: 'generator', label: 'Backup generator / power bank', checked: false, expiresIn: '—' },
  { id: 'documents', label: 'Important documents (waterproof bag)', checked: true, expiresIn: 'OK' },
  { id: 'pet', label: 'Pet supplies (food, water, carrier)', checked: false, expiresIn: '—' },
];

function renderChecklist() {
  const container = document.getElementById('checklist-items');
  if (!container) return;

  container.innerHTML = prepChecklist.map(item => `
    <label class="checklist-item ${!item.checked ? 'unchecked' : ''}">
      <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleChecklistItem('${item.id}')">
      <span class="checklist-checkbox"></span>
      <span class="checklist-label">${item.label}</span>
      ${item.expiresIn && item.expiresIn !== '—'
        ? `<span class="checklist-expiry ${item.expiresIn === 'Expired' ? 'danger' : item.expiresIn === 'OK' ? 'safe' : 'warning'}">${item.expiresIn}</span>`
        : ''}
    </label>
  `).join('');

  const completed = prepChecklist.filter(i => i.checked).length;
  const total = prepChecklist.length;
  const progress = document.getElementById('checklist-progress');
  if (progress) progress.textContent = `${completed}/${total}`;
  const progressBar = document.getElementById('checklist-progress-bar');
  if (progressBar) progressBar.style.width = `${(completed / total) * 100}%`;
}

function toggleChecklistItem(id) {
  const item = prepChecklist.find(i => i.id === id);
  if (item) {
    item.checked = !item.checked;
    renderChecklist();
  }
}

// --- Medical Devices ---
const devices = [
  { name: 'CPAP Machine', icon: '😴', battery: 72, critical: true, hoursLeft: 6 },
  { name: 'Phone (Primary)', icon: '📱', battery: 45, critical: false, hoursLeft: 8 },
  { name: 'Insulin Cooler', icon: '💉', battery: 88, critical: true, hoursLeft: 14 },
  { name: 'Power Bank', icon: '🔋', battery: 100, critical: false, hoursLeft: 24 },
];

function renderDevices() {
  const container = document.getElementById('device-list');
  if (!container) return;

  container.innerHTML = devices.map(d => `
    <div class="device-card ${d.battery < 50 ? 'low' : ''}">
      <div class="device-icon">${d.icon}</div>
      <div class="device-info">
        <div class="device-name">${d.name} ${d.critical ? '<span class="device-critical">CRITICAL</span>' : ''}</div>
        <div class="device-meta">${d.hoursLeft}h remaining</div>
      </div>
      <div class="device-battery-ring" style="--battery: ${d.battery}">
        <svg width="44" height="44" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="18" fill="none" stroke="var(--color-border)" stroke-width="4"/>
          <circle cx="22" cy="22" r="18" fill="none"
            stroke="${d.battery < 30 ? 'var(--color-signal-red)' : d.battery < 60 ? 'var(--color-amber)' : 'var(--color-forest-light)'}"
            stroke-width="4" stroke-linecap="round"
            stroke-dasharray="${2 * Math.PI * 18}"
            stroke-dashoffset="${2 * Math.PI * 18 * (1 - d.battery / 100)}"
            transform="rotate(-90 22 22)"
          />
        </svg>
        <span class="device-battery-text">${d.battery}%</span>
      </div>
    </div>
  `).join('');
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  animateGauge();
  renderFridge();
  renderChecklist();
  renderDevices();

  // Navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(link.dataset.tab);
    });
  });

  // CTA buttons
  document.querySelectorAll('[data-cta]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.dataset.cta;
      if (target === 'features') {
        document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
      } else if (target === 'pricing') {
        document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
