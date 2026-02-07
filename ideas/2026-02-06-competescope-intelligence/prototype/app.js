/**
 * CompeteScope - Interactive Dashboard
 * AI-Powered Competitive Intelligence
 */

// ============================================
// Modal Controls
// ============================================

function openModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Focus first input
  setTimeout(() => {
    const firstInput = overlay.querySelector('.form-input');
    if (firstInput) firstInput.focus();
  }, 200);
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  
  // Clear form
  const inputs = overlay.querySelectorAll('.form-input');
  inputs.forEach(input => input.value = '');
}

// Close modal on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('modalOverlay');
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// ============================================
// Add Competitor
// ============================================

function addCompetitor() {
  const nameInput = document.querySelector('.modal-body .form-input');
  const name = nameInput.value.trim();
  
  if (!name) {
    nameInput.style.borderColor = 'var(--color-danger-500)';
    nameInput.focus();
    return;
  }
  
  // Simulate adding (show toast)
  showToast(`Adding ${name}...`, 'info');
  
  setTimeout(() => {
    showToast(`${name} added successfully!`, 'success');
    closeModal();
    
    // Update competitor count
    const countEl = document.querySelector('.stat-value');
    if (countEl) {
      const current = parseInt(countEl.textContent);
      countEl.textContent = current + 1;
    }
  }, 1500);
}

// ============================================
// Toast Notifications
// ============================================

function showToast(message, type = 'info') {
  // Remove existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">
      ${getToastIcon(type)}
    </div>
    <span class="toast-message">${message}</span>
  `;
  
  // Add styles
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: ${type === 'success' ? '#059669' : type === 'error' ? '#dc2626' : '#4f46e5'};
    color: white;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    font-weight: 500;
    font-size: 14px;
    z-index: 9999;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  
  // Auto remove
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function getToastIcon(type) {
  const icons = {
    success: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>`,
    error: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="15" y1="9" x2="9" y2="15"></line>
      <line x1="9" y1="9" x2="15" y2="15"></line>
    </svg>`,
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>`
  };
  return icons[type] || icons.info;
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// Navigation
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active from all
      navItems.forEach(nav => nav.classList.remove('active'));
      
      // Add active to clicked
      item.classList.add('active');
      
      // Show toast for demo
      const text = item.textContent.trim();
      if (text !== 'Dashboard') {
        showToast(`${text} page would load here`, 'info');
      }
    });
  });
});

// ============================================
// Competitor Card Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const competitorCards = document.querySelectorAll('.competitor-card');
  
  competitorCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.querySelector('.competitor-name').textContent;
      showToast(`Opening ${name} details...`, 'info');
    });
  });
});

// ============================================
// Alert Interactions
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const alertItems = document.querySelectorAll('.alert-item');
  
  alertItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.remove('unread');
      const title = item.querySelector('.alert-title').textContent;
      showToast(`Viewing: ${title}`, 'info');
      
      // Update badge count
      const badge = document.querySelector('.alerts-count');
      const current = parseInt(badge.textContent);
      if (current > 0) {
        badge.textContent = current - 1;
      }
      if (parseInt(badge.textContent) === 0) {
        badge.style.display = 'none';
      }
    });
  });
});

// ============================================
// Digest Button
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const digestBtn = document.querySelector('.btn-digest');
  if (digestBtn) {
    digestBtn.addEventListener('click', () => {
      showToast('Opening full weekly report...', 'info');
    });
  }
});

// ============================================
// Export Button
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const exportBtn = document.querySelector('.btn-secondary');
  if (exportBtn && exportBtn.textContent.includes('Export')) {
    exportBtn.addEventListener('click', () => {
      showToast('Exporting dashboard data...', 'info');
      setTimeout(() => {
        showToast('Dashboard exported to CSV!', 'success');
      }, 1500);
    });
  }
});

// ============================================
// Simulate Real-time Updates
// ============================================

// Simulate a new mention every 30 seconds (for demo)
setInterval(() => {
  const mentionsStat = document.querySelectorAll('.stat-value')[1];
  if (mentionsStat) {
    const current = parseInt(mentionsStat.textContent);
    mentionsStat.textContent = current + 1;
    
    // Flash effect
    mentionsStat.style.color = 'var(--color-success-600)';
    setTimeout(() => {
      mentionsStat.style.color = '';
    }, 500);
  }
}, 30000);

// ============================================
// Keyboard Shortcuts
// ============================================

document.addEventListener('keydown', (e) => {
  // Cmd/Ctrl + K for quick search (demo)
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    showToast('Quick search coming soon!', 'info');
  }
  
  // Cmd/Ctrl + N for new competitor
  if ((e.metaKey || e.ctrlKey) && e.key === 'n') {
    e.preventDefault();
    openModal();
  }
});

// ============================================
// Form Validation
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.form-input');
  
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.style.borderColor = '';
    });
  });
});

// ============================================
// Initialize
// ============================================

console.log('🔍 CompeteScope Dashboard Loaded');
console.log('Keyboard shortcuts:');
console.log('  Cmd/Ctrl + N: Add new competitor');
console.log('  Cmd/Ctrl + K: Quick search');
console.log('  Escape: Close modal');
