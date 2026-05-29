// LinkLifespan — Prototype interactions
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('addLinkModal');
  const addBtn = document.getElementById('addLinkBtn');
  const closeBtn = document.getElementById('closeModal');
  const cancelBtn = document.getElementById('cancelModal');
  const importBtn = document.getElementById('importBtn');

  function openModal() { modal.classList.add('active'); }
  function closeModal() { modal.classList.remove('active'); }

  addBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  importBtn.addEventListener('click', () => {
    alert('📥 Import Links\n\nConnect your sources:\n• Chrome Bookmarks\n• Notion\n• Obsidian\n• Pocket\n• Google Docs\n• Apple Notes\n• Raindrop.io\n• Readwise\n\nOr paste/import a list of URLs.');
  });

  // Alert action buttons
  document.querySelectorAll('.btn-archive').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.closest('.alert-item').querySelector('.alert-title').textContent;
      alert(`🏛️ Opening archived version from Wayback Machine...\n\n"${title}"\n\nSnapshot saved: Feb 14, 2026`);
    });
  });

  document.querySelectorAll('.btn-diff').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('👁️ Content Diff View\n\n--- Original (Jan 15) ---\n"CORS requires the server to send specific headers..."\n\n--- Current (May 28) ---\n"CORS requires specific headers..."\n\nChanges: Removed section "Preflight requests", simplified intro paragraph.');
    });
  });

  document.querySelectorAll('.btn-fix').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = btn.closest('.alert-item');
      row.querySelector('.alert-severity').textContent = '✅';
      row.querySelector('.alert-meta').textContent += ' · URL updated';
      btn.textContent = '✅ Updated';
      btn.disabled = true;
      btn.style.opacity = '0.5';
    });
  });

  // Nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Animate health score on load
  const scoreFill = document.querySelector('.score-fill');
  if (scoreFill) {
    const targetOffset = 327 * (1 - 0.78);
    scoreFill.style.strokeDashoffset = '327';
    setTimeout(() => {
      scoreFill.style.strokeDashoffset = targetOffset;
    }, 200);
  }
});
