// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// Modal
const modal = document.getElementById('addModal');
document.getElementById('addItemBtn').addEventListener('click', () => modal.classList.add('active'));
document.querySelectorAll('#closeModal, #cancelModal').forEach(btn => {
  btn.addEventListener('click', () => modal.classList.remove('active'));
});
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });

document.getElementById('saveItem').addEventListener('click', () => {
  modal.classList.remove('active');
  // Simulate adding
});

// Animate harmony bars on load
setTimeout(() => {
  document.querySelectorAll('.detail-fill').forEach(bar => {
    const w = bar.style.width;
    bar.style.width = '0';
    requestAnimationFrame(() => { bar.style.width = w; });
  });
}, 300);
