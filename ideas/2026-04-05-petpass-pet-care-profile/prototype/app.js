// ===========================
// PetPass — App Logic
// ===========================

let currentStep = 1;
const totalSteps = 4;

// View Management
function showView(viewId) {
  document.querySelectorAll('.hero, .view').forEach(el => {
    el.style.display = 'none';
    el.classList.remove('active');
  });

  const target = document.getElementById(viewId);
  if (target) {
    target.style.display = 'block';
    target.classList.add('active');
    window.scrollTo(0, 0);
  }

  // Reset onboarding when showing it
  if (viewId === 'onboarding') {
    currentStep = 1;
    updateStep();
  }
}

// Initialize — show hero
document.addEventListener('DOMContentLoaded', () => {
  showView('hero');
  initTraitButtons();
});

// Step Navigation
function nextStep(step) {
  currentStep = step;
  updateStep();
}

function updateStep() {
  for (let i = 1; i <= totalSteps; i++) {
    const stepEl = document.getElementById(`step${i}`);
    if (stepEl) {
      stepEl.classList.toggle('hidden', i !== currentStep);
    }
  }

  const fill = document.getElementById('progressFill');
  const label = document.getElementById('progressLabel');
  if (fill) fill.style.width = `${(currentStep / totalSteps) * 100}%`;
  if (label) label.textContent = `Step ${currentStep} of ${totalSteps}`;
}

// Trait Buttons
function initTraitButtons() {
  document.querySelectorAll('.trait-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('selected');
    });
  });
}

// Add Schedule Item
function addScheduleItem() {
  const builder = document.getElementById('scheduleBuilder');
  if (!builder) return;

  const item = document.createElement('div');
  item.className = 'schedule-item';
  item.innerHTML = `
    <div class="schedule-time">
      <input type="time" style="border:none;background:none;font-weight:700;color:var(--primary);width:70px;font-size:0.8rem;">
    </div>
    <div class="schedule-icon">📝</div>
    <div class="schedule-details">
      <input type="text" placeholder="Activity name" style="border:none;font-weight:700;font-size:0.9rem;width:100%;">
      <input type="text" placeholder="Details..." style="border:none;font-size:0.8rem;color:var(--text-secondary);width:100%;margin-top:2px;">
    </div>
    <button class="schedule-delete" onclick="this.closest('.schedule-item').remove()">×</button>
  `;
  builder.appendChild(item);
  item.querySelector('input').focus();
}

// Create Profile — transition to dashboard
function createProfile() {
  // Celebration animation
  const btn = event.target;
  btn.textContent = '✅ Profile Created!';
  btn.style.background = 'var(--success)';
  btn.disabled = true;

  setTimeout(() => {
    showView('dashboard');
    btn.textContent = '✨ Create PetPass Profile';
    btn.style.background = '';
    btn.disabled = false;
  }, 1500);
}

// Share Modal
function showShareModal() {
  document.getElementById('shareModal').classList.add('active');
}

function hideShareModal() {
  document.getElementById('shareModal').classList.remove('active');
}

// Copy Link
function copyLink() {
  const input = document.getElementById('shareLink');
  if (input) {
    input.select();
    navigator.clipboard.writeText(input.value).catch(() => {});

    const btn = input.nextElementSibling;
    btn.textContent = 'Copied!';
    btn.style.background = 'var(--success)';
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.style.background = '';
    }, 2000);
  }
}

// Check/Log Care Item
function toggleCheck(btn) {
  const item = btn.closest('.timeline-item');
  const isChecked = btn.classList.toggle('done');
  item.classList.toggle('checked', isChecked);

  if (isChecked) {
    const taskName = item.querySelector('.timeline-content strong').textContent;
    const time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    addLogEntry(`✅ ${taskName} — completed`, time);
  }
}

// Add Log Entry
function addLogEntry(text, time) {
  const container = document.getElementById('logEntries');
  if (!container) return;

  // Remove empty state
  const empty = container.querySelector('.log-empty');
  if (empty) empty.remove();

  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.innerHTML = `
    <div class="log-entry-time">${time}</div>
    <div>${text}</div>
  `;

  container.insertBefore(entry, container.firstChild);
}

// Add Note
function addLogNote() {
  const input = document.getElementById('logNote');
  if (!input || !input.value.trim()) return;

  const time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  addLogEntry(`📝 ${input.value.trim()}`, time);
  input.value = '';
}

// Enter key for note input
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.id === 'logNote') {
    addLogNote();
  }
});

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});
