/**
 * HeartPing - Interactive Prototype
 * ==================================
 * Demo JavaScript for the relationship keeper concept
 */

// ============================================
// Modal Management
// ============================================

function showModal(modalId) {
  const modal = document.getElementById(`modal-${modalId}`);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(`modal-${modalId}`);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
});

// ============================================
// Toast Notifications
// ============================================

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icons = {
    success: '💜',
    error: '❌',
    info: '💡',
    warning: '⚠️'
  };
  
  toast.innerHTML = `${icons[type]} ${message}`;
  container.appendChild(toast);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// Interaction Logging
// ============================================

function logInteraction(type) {
  hideModal('log-interaction');
  
  const messages = {
    call: "Great job reaching out! 📞 Mom marked as contacted.",
    text: "Message logged! 💬 Keep the connection alive.",
    video: "Video call logged! 🎥 Nothing beats face-to-face.",
    person: "In-person hangout logged! ☕ Quality time matters."
  };
  
  showToast(messages[type] || "Interaction logged! 💜", 'success');
  
  // Update the UI (demo)
  updateHealthStats();
}

function updateHealthStats() {
  // In a real app, this would recalculate based on interaction data
  const overdueEl = document.querySelector('.health-stat-value.overdue');
  const healthyEl = document.querySelector('.health-stat-value.healthy');
  
  if (overdueEl && healthyEl) {
    const currentOverdue = parseInt(overdueEl.textContent);
    const currentHealthy = parseInt(healthyEl.textContent);
    
    if (currentOverdue > 0) {
      overdueEl.textContent = currentOverdue - 1;
      healthyEl.textContent = currentHealthy + 1;
      
      // Animate the change
      overdueEl.style.transform = 'scale(1.2)';
      healthyEl.style.transform = 'scale(1.2)';
      
      setTimeout(() => {
        overdueEl.style.transform = '';
        healthyEl.style.transform = '';
      }, 300);
    }
  }
  
  // Update Mom's status in the list
  const momCard = document.querySelector('.person-card');
  if (momCard) {
    const healthDot = momCard.querySelector('.health-dot');
    const statusText = momCard.querySelector('.person-status');
    
    if (healthDot) {
      healthDot.classList.remove('overdue');
      healthDot.classList.add('healthy');
    }
    
    if (statusText) {
      statusText.textContent = 'Just now ✓';
    }
  }
}

// ============================================
// Nudge Actions
// ============================================

function snoozeNudge() {
  const nudgeCard = document.querySelector('.nudge-card');
  if (nudgeCard) {
    nudgeCard.style.opacity = '0';
    nudgeCard.style.transform = 'translateX(-100%)';
    
    setTimeout(() => {
      nudgeCard.style.display = 'none';
      showToast("Reminder snoozed for 2 hours ⏰", 'info');
    }, 300);
  }
}

function skipNudge() {
  const nudgeCard = document.querySelector('.nudge-card');
  if (nudgeCard) {
    nudgeCard.style.opacity = '0';
    nudgeCard.style.transform = 'translateX(100%)';
    
    setTimeout(() => {
      nudgeCard.style.display = 'none';
      showToast("Skipped for today. We'll remind you tomorrow 💜", 'info');
    }, 300);
  }
}

// ============================================
// Add Person
// ============================================

function addPerson() {
  const nameInput = document.querySelector('#modal-add-person .form-input');
  const name = nameInput?.value || 'New Contact';
  
  hideModal('add-person');
  showToast(`${name} added to your inner circle! 💜`, 'success');
  
  // In a real app, this would add to the database and update the UI
}

// ============================================
// Person Detail View
// ============================================

function showPersonDetail(personId) {
  // In a real app, this would navigate to a detail view
  showToast("Person detail view coming soon!", 'info');
}

// ============================================
// Frequency Selector
// ============================================

document.querySelectorAll('.frequency-option').forEach(option => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.frequency-option').forEach(o => o.classList.remove('active'));
    option.classList.add('active');
  });
});

// ============================================
// Bottom Navigation
// ============================================

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    e.currentTarget.classList.add('active');
    
    const label = e.currentTarget.querySelector('.nav-label')?.textContent;
    
    if (label && label !== 'Home') {
      showToast(`${label} view coming soon!`, 'info');
    }
  });
});

// ============================================
// Person Card Interactions
// ============================================

document.querySelectorAll('.person-card').forEach(card => {
  const actionBtn = card.querySelector('.person-action');
  
  // Prevent action button from triggering card click
  actionBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const emoji = actionBtn.textContent;
    
    const actions = {
      '📞': 'Opening phone...',
      '💬': 'Opening messages...',
      '🎮': 'Opening Discord...',
      '📅': 'Opening calendar...',
      '💼': 'Opening LinkedIn...',
      '🎁': 'Gift ideas coming soon!',
      '💐': 'Florist suggestions coming soon!'
    };
    
    showToast(actions[emoji] || 'Action triggered!', 'info');
  });
});

// ============================================
// Relationship Type Selector
// ============================================

document.querySelectorAll('#modal-add-person .btn-secondary').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#modal-add-person .btn-secondary').forEach(b => {
      b.classList.remove('btn-primary');
      b.classList.add('btn-secondary');
    });
    btn.classList.remove('btn-secondary');
    btn.classList.add('btn-primary');
  });
});

// ============================================
// Greeting Time-Based Update
// ============================================

function updateGreeting() {
  const greetingEl = document.querySelector('.greeting-text');
  if (!greetingEl) return;
  
  const hour = new Date().getHours();
  let greeting = 'Good morning';
  
  if (hour >= 12 && hour < 17) {
    greeting = 'Good afternoon';
  } else if (hour >= 17 && hour < 21) {
    greeting = 'Good evening';
  } else if (hour >= 21 || hour < 5) {
    greeting = 'Good night';
  }
  
  greetingEl.textContent = greeting + ',';
}

// ============================================
// Keyboard Shortcuts
// ============================================

document.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT') return;
  
  switch(e.key) {
    case 'a':
    case 'A':
      showModal('add-person');
      break;
    case 'l':
    case 'L':
      showModal('log-interaction');
      break;
  }
});

// ============================================
// Demo Data
// ============================================

const demoPeople = [
  { id: 'mom', name: 'Mom', type: 'family', frequency: 'weekly', lastContact: 21, emoji: '👩' },
  { id: 'dad', name: 'Dad', type: 'family', frequency: 'biweekly', lastContact: 10, emoji: '👨' },
  { id: 'ana', name: 'Sister Ana', type: 'family', frequency: 'weekly', lastContact: 1, emoji: '👧' },
  { id: 'miguel', name: 'Miguel', type: 'friends', frequency: 'biweekly', lastContact: 5, emoji: '🧑' },
  { id: 'carlos', name: 'Carlos', type: 'friends', frequency: 'monthly', lastContact: 35, emoji: '👨' },
  { id: 'sofia', name: 'Sofia', type: 'friends', frequency: 'weekly', lastContact: 2, emoji: '👩' },
  { id: 'david', name: 'David (Mentor)', type: 'professional', frequency: 'monthly', lastContact: 25, emoji: '👨‍💼' },
  { id: 'lisa', name: 'Lisa (Ex-colleague)', type: 'professional', frequency: 'quarterly', lastContact: 45, emoji: '👩‍💻' },
];

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('💜 HeartPing Prototype Loaded');
  console.log('Keyboard shortcuts: A=Add Person, L=Log Interaction, Esc=Close Modal');
  
  // Update greeting based on time
  updateGreeting();
  
  // Add subtle entrance animations
  document.querySelectorAll('.card, .health-stat, .quick-action, .person-card, .event-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 40);
  });
  
  // Add nudge card special animation
  const nudgeCard = document.querySelector('.nudge-card');
  if (nudgeCard) {
    nudgeCard.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  }
});

// ============================================
// Toast CSS Animation (injected)
// ============================================

const toastStyles = document.createElement('style');
toastStyles.textContent = `
  @keyframes toast-out {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
  
  .health-stat-value {
    transition: transform 0.3s ease;
  }
`;
document.head.appendChild(toastStyles);
