// === Team Data ===
const team = [
  { id: 1, name: 'Maya Chen', initial: 'M', color: '#6366f1', role: 'Lead Barista', weight: 1.0, payment: 'Venmo', paymentHandle: '@maya-chen', defaultHours: 6, selected: true },
  { id: 2, name: 'Alex Rivera', initial: 'A', color: '#f59e0b', role: 'Barista', weight: 1.0, payment: 'CashApp', paymentHandle: '$alexr', defaultHours: 4, selected: true },
  { id: 3, name: 'Jordan Park', initial: 'J', color: '#10b981', role: 'Barista', weight: 1.0, payment: 'Venmo', paymentHandle: '@jpark99', defaultHours: 8, selected: true },
  { id: 4, name: 'Sam Torres', initial: 'S', color: '#ec4899', role: 'Trainee (50%)', weight: 0.5, payment: 'Zelle', paymentHandle: 'sam@email.com', defaultHours: 0, selected: false },
  { id: 5, name: 'Kim Nguyen', initial: 'K', color: '#8b5cf6', role: 'Weekend Barista', weight: 1.0, payment: 'Venmo', paymentHandle: '@kimnguyen', defaultHours: 0, selected: false },
];

let currentStep = 1;
let splitMethod = 'hours';

// === Tab Navigation ===
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
  });
});

// === Tip Calculation ===
function updateTotal() {
  const cash = parseFloat(document.getElementById('cash-tips').value) || 0;
  const card = parseFloat(document.getElementById('card-tips').value) || 0;
  const total = cash + card;
  document.getElementById('total-tips').textContent = `$${total.toFixed(2)}`;
}

document.getElementById('cash-tips').addEventListener('input', updateTotal);
document.getElementById('card-tips').addEventListener('input', updateTotal);

// === Split Method ===
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    splitMethod = pill.dataset.method;
  });
});

// === Step Navigation ===
function showStep(step) {
  currentStep = step;
  document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
  document.getElementById(`step-${step}`).classList.add('active');

  // Update step indicators
  document.querySelectorAll('.step-indicator .step').forEach(s => {
    const sNum = parseInt(s.dataset.step);
    s.classList.remove('active', 'done');
    if (sNum === step) s.classList.add('active');
    if (sNum < step) s.classList.add('done');
  });
}

// === Render Team Selection ===
function renderTeamSelect() {
  const list = document.getElementById('team-select-list');
  const showHours = splitMethod === 'hours';
  
  list.innerHTML = team.map(m => `
    <div class="team-select-item ${m.selected ? 'selected' : ''}" data-id="${m.id}">
      <div class="checkbox">${m.selected ? '✓' : ''}</div>
      <div class="select-avatar" style="background: ${m.color}">${m.initial}</div>
      <div class="select-info">
        <span class="select-name">${m.name}</span>
        <span class="select-role">${m.role}</span>
      </div>
      ${showHours ? `
        <div>
          <input class="hours-input" type="number" value="${m.selected ? m.defaultHours : ''}" 
                 min="0" max="24" step="0.5" data-id="${m.id}" placeholder="0"
                 ${!m.selected ? 'disabled' : ''}>
          <div class="hours-label">hours</div>
        </div>
      ` : ''}
    </div>
  `).join('');

  // Toggle selection
  list.querySelectorAll('.team-select-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('hours-input')) return;
      const id = parseInt(item.dataset.id);
      const member = team.find(m => m.id === id);
      member.selected = !member.selected;
      renderTeamSelect();
    });
  });

  // Hours input
  list.querySelectorAll('.hours-input').forEach(input => {
    input.addEventListener('input', (e) => {
      const id = parseInt(input.dataset.id);
      const member = team.find(m => m.id === id);
      member.defaultHours = parseFloat(e.target.value) || 0;
    });
    input.addEventListener('click', (e) => e.stopPropagation());
  });
}

// === Calculate Split ===
function calculateSplit() {
  const cash = parseFloat(document.getElementById('cash-tips').value) || 0;
  const card = parseFloat(document.getElementById('card-tips').value) || 0;
  const total = cash + card;
  const selected = team.filter(m => m.selected);

  let results = [];

  if (splitMethod === 'hours') {
    const totalWeightedHours = selected.reduce((sum, m) => sum + (m.defaultHours * m.weight), 0);
    results = selected.map(m => ({
      ...m,
      amount: totalWeightedHours > 0 ? (total * (m.defaultHours * m.weight) / totalWeightedHours) : 0,
      detail: `${m.defaultHours}h worked${m.weight < 1 ? ` · ${m.weight * 100}% rate` : ''}`
    }));
  } else if (splitMethod === 'equal') {
    const totalWeight = selected.reduce((sum, m) => sum + m.weight, 0);
    results = selected.map(m => ({
      ...m,
      amount: totalWeight > 0 ? (total * m.weight / totalWeight) : 0,
      detail: `Equal split${m.weight < 1 ? ` · ${m.weight * 100}% rate` : ''}`
    }));
  } else if (splitMethod === 'role') {
    const totalWeight = selected.reduce((sum, m) => sum + m.weight, 0);
    results = selected.map(m => ({
      ...m,
      amount: totalWeight > 0 ? (total * m.weight / totalWeight) : 0,
      detail: `${m.role} · ${m.weight * 100}% share`
    }));
  }

  return results;
}

function renderSplitResults() {
  const results = calculateSplit();
  const container = document.getElementById('split-results');
  const totalDistributed = results.reduce((sum, r) => sum + r.amount, 0);

  container.innerHTML = results.map(r => `
    <div class="split-row">
      <div class="split-avatar" style="background: ${r.color}">${r.initial}</div>
      <div class="split-info">
        <span class="split-name">${r.name}</span>
        <span class="split-detail">${r.detail} · ${r.payment}</span>
      </div>
      <span class="split-amount">$${r.amount.toFixed(2)}</span>
    </div>
  `).join('');

  document.getElementById('total-distributed').textContent = `$${totalDistributed.toFixed(2)}`;
  
  const methodNames = { hours: 'By Hours Worked', equal: 'Equal Split', role: 'By Role Weight' };
  document.getElementById('method-display').textContent = methodNames[splitMethod];
}

function renderSentList() {
  const results = calculateSplit();
  const container = document.getElementById('sent-list');

  container.innerHTML = results.map(r => `
    <div class="sent-item">
      <div>
        <span class="sent-name">${r.name}</span>
        <span class="sent-via">${r.payment}: ${r.paymentHandle}</span>
      </div>
      <span class="sent-amount">$${r.amount.toFixed(2)}</span>
    </div>
  `).join('');
}

// === Step Navigation Events ===
document.getElementById('to-step-2').addEventListener('click', () => {
  renderTeamSelect();
  showStep(2);
});

document.getElementById('back-to-1').addEventListener('click', () => showStep(1));

document.getElementById('to-step-3').addEventListener('click', () => {
  const selected = team.filter(m => m.selected);
  if (selected.length === 0) {
    alert('Select at least one team member!');
    return;
  }
  renderSplitResults();
  showStep(3);
});

document.getElementById('back-to-2').addEventListener('click', () => {
  renderTeamSelect();
  showStep(2);
});

document.getElementById('send-tips').addEventListener('click', () => {
  renderSentList();
  document.querySelectorAll('.step-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('step-success').classList.add('active');
  
  // Update step indicators to all done
  document.querySelectorAll('.step-indicator .step').forEach(s => s.classList.add('done'));
});

document.getElementById('new-split').addEventListener('click', () => {
  // Reset
  document.getElementById('cash-tips').value = '';
  document.getElementById('card-tips').value = '';
  updateTotal();
  team.forEach(m => { m.selected = false; m.defaultHours = 0; });
  showStep(1);
});

// === Copy Link ===
document.getElementById('copy-link').addEventListener('click', function() {
  this.textContent = '✅ Copied!';
  setTimeout(() => { this.textContent = '📋 Copy'; }, 2000);
});

// === Initialize ===
updateTotal();
