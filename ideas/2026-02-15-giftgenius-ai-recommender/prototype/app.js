/**
 * GiftGenius - AI Gift Intelligence App
 * Prototype JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initModal();
  initRecipientCards();
  initOccasionButtons();
});

/**
 * Navigation between views
 */
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const views = document.querySelectorAll('.view');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const viewId = item.dataset.view;

      // Update active nav
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      // Show corresponding view
      views.forEach(view => {
        view.classList.remove('active');
        if (view.id === viewId) {
          view.classList.add('active');
        }
      });
    });
  });
}

/**
 * Add Gift Modal
 */
function initModal() {
  const modal = document.getElementById('add-gift-modal');
  const addGiftBtn = document.getElementById('add-gift-btn');
  const closeBtn = modal.querySelector('.modal-close');
  const cancelBtn = modal.querySelector('.modal-cancel');
  const backdrop = modal.querySelector('.modal-backdrop');
  const form = modal.querySelector('.gift-form');

  // Open modal
  addGiftBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close modal
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    form.reset();
  };

  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate saving
    const saveBtn = form.querySelector('button[type="submit"]');
    const originalText = saveBtn.textContent;
    saveBtn.textContent = 'Saving...';
    saveBtn.disabled = true;

    setTimeout(() => {
      closeModal();
      saveBtn.textContent = originalText;
      saveBtn.disabled = false;
      showToast('Gift logged successfully! 🎁');
    }, 800);
  });
}

/**
 * Recipient card click handling
 */
function initRecipientCards() {
  const cards = document.querySelectorAll('.recipient-card[data-recipient]');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const recipientName = card.querySelector('.recipient-name').textContent;
      
      // Navigate to suggestions view with this recipient
      document.querySelector('[data-view="suggestions"]').click();
      
      // Update the AI panel header
      const aiTitle = document.querySelector('.ai-title h2');
      if (aiTitle) {
        aiTitle.textContent = `Gift Ideas for ${recipientName}`;
      }
    });
  });

  // Add new recipient card
  const addCard = document.querySelector('.recipient-card.add-new');
  if (addCard) {
    addCard.addEventListener('click', () => {
      showToast('Add recipient form coming soon!');
    });
  }
}

/**
 * Occasion "Get Ideas" buttons
 */
function initOccasionButtons() {
  const buttons = document.querySelectorAll('.occasion-item .btn');
  
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const occasionItem = btn.closest('.occasion-item');
      const recipientName = occasionItem.querySelector('.occasion-details strong').textContent;
      
      // Navigate to suggestions
      document.querySelector('[data-view="suggestions"]').click();
      
      // Update the AI panel header
      const aiTitle = document.querySelector('.ai-title h2');
      if (aiTitle) {
        aiTitle.textContent = `Gift Ideas for ${recipientName}`;
      }
    });
  });
}

/**
 * Toast notification
 */
function showToast(message) {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }

  // Create toast
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span>${message}</span>
  `;
  
  // Style the toast
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    background: '#1f2937',
    color: 'white',
    padding: '12px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: '2000',
    animation: 'slideIn 0.3s ease'
  });

  // Add animation keyframes
  if (!document.querySelector('#toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateY(0);
          opacity: 1;
        }
        to {
          transform: translateY(20px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);

  // Remove after delay
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/**
 * Simulate AI suggestion loading
 */
function loadAISuggestions(recipientId) {
  const panel = document.querySelector('.ai-suggestion-panel');
  if (!panel) return;

  // Show loading state
  panel.innerHTML = `
    <div style="text-align: center; padding: 60px;">
      <div style="font-size: 48px; margin-bottom: 16px;">🤖</div>
      <div style="font-size: 18px; color: #6b7280;">Analyzing gift history...</div>
      <div style="margin-top: 16px;">
        <div style="width: 200px; height: 4px; background: #e5e7eb; border-radius: 4px; margin: 0 auto; overflow: hidden;">
          <div style="width: 30%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 4px; animation: loading 1.5s ease-in-out infinite;"></div>
        </div>
      </div>
    </div>
    <style>
      @keyframes loading {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(400%); }
      }
    </style>
  `;

  // Simulate API call
  setTimeout(() => {
    // Restore original content (in real app, would fetch and render new data)
    location.reload();
  }, 2000);
}

/**
 * Update budget tracker
 */
function updateBudget(spent, total) {
  const fill = document.querySelector('.budget-fill');
  const stats = document.querySelector('.budget-stats');
  
  if (fill && stats) {
    const percentage = Math.min((spent / total) * 100, 100);
    fill.style.width = `${percentage}%`;
    stats.textContent = `$${spent.toLocaleString()} / $${total.toLocaleString()}`;
    
    // Change color if over budget
    if (percentage > 90) {
      fill.style.background = 'linear-gradient(90deg, #ef4444, #f87171)';
    } else if (percentage > 75) {
      fill.style.background = 'linear-gradient(90deg, #f59e0b, #fbbf24)';
    }
  }
}

/**
 * Filter gift history
 */
function filterGifts(recipientFilter, reactionFilter) {
  const items = document.querySelectorAll('.gift-history-item');
  
  items.forEach(item => {
    const recipientMatch = !recipientFilter || 
      item.querySelector('.gift-history-meta').textContent.includes(recipientFilter);
    const reactionMatch = !reactionFilter || 
      item.querySelector('.gift-reaction').classList.contains(reactionFilter);
    
    item.style.display = (recipientMatch && reactionMatch) ? '' : 'none';
  });
}

// Initialize filter selects
document.querySelectorAll('.filter-select').forEach(select => {
  select.addEventListener('change', () => {
    const [recipientSelect, reactionSelect] = document.querySelectorAll('.filter-select');
    const recipientFilter = recipientSelect.value !== 'All Recipients' ? recipientSelect.value : null;
    const reactionFilter = reactionSelect.value.includes('Hits') ? 'hit' :
                          reactionSelect.value.includes('Okay') ? 'okay' :
                          reactionSelect.value.includes('Misses') ? 'miss' : null;
    filterGifts(recipientFilter, reactionFilter);
  });
});

/**
 * Calendar event handling
 */
document.querySelectorAll('.calendar-event').forEach(event => {
  event.addEventListener('click', () => {
    const eventName = event.querySelector('.event-details strong').textContent;
    document.querySelector('[data-view="suggestions"]').click();
    
    const aiTitle = document.querySelector('.ai-title h2');
    if (aiTitle) {
      aiTitle.textContent = `Gift Ideas for ${eventName}`;
    }
  });
});

// Make calendar events look clickable
document.querySelectorAll('.calendar-event').forEach(event => {
  event.style.cursor = 'pointer';
  event.addEventListener('mouseenter', () => {
    event.style.transform = 'translateX(4px)';
    event.style.transition = 'transform 0.2s ease';
  });
  event.addEventListener('mouseleave', () => {
    event.style.transform = '';
  });
});

// Export functions for potential external use
window.GiftGenius = {
  showToast,
  updateBudget,
  filterGifts,
  loadAISuggestions
};
