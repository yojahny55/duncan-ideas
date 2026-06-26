// Tab switching
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const tabName = tab.dataset.tab;
    document.getElementById('lent-tab').style.display = tabName === 'lent' ? 'block' : 'none';
    document.getElementById('borrowed-tab').style.display = tabName === 'borrowed' ? 'block' : 'none';
    document.getElementById('ious-tab').style.display = tabName === 'ious' ? 'block' : 'none';
  });
});

// Modal functions
function openModal(modalId) {
  document.getElementById(modalId).classList.add('open');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('open');
}

function openNudgeModal(itemId) {
  openModal('nudge-modal');
}

function openAddModal() {
  openModal('add-modal');
}

// Close modal when clicking overlay
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
    }
  });
});

// Tone chip selection
const toneChips = document.querySelectorAll('.tone-chip');
toneChips.forEach(chip => {
  chip.addEventListener('click', () => {
    toneChips.forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');

    // Update message based on tone
    const messageBox = document.querySelector('.message-box');
    const tone = chip.textContent.trim();
    const messages = {
      'Casual': 'Hey Jake! Just a friendly ping about the air fryer — no rush, just checking in so I remember where it is! 🪃',
      'Friendly': 'Hey Jake! Hope you\'re doing well! Following up on the air fryer — let me know when you\'re done with it. No stress! 🪃',
      'Direct': 'Hey Jake — just following up on the air fryer. When do you think you\'ll be able to return it? Thanks! 🪃',
      'Firm': 'Hi Jake — the air fryer has been out for 23 days now. Could you please return it by this weekend? I need it back. 🪃'
    };
    messageBox.value = messages[tone] || messages['Casual'];
  });
});

// Bottom nav
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});