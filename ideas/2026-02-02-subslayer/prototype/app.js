/**
 * SubSlayer - Interactive Prototype
 * Kill forgotten subscriptions before they kill your wallet
 */

// ================== Navigation ==================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
  animateCounters();
});

function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item[data-page]');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const pageName = item.getAttribute('data-page');
      navigateToPage(pageName);
      
      // Update active state
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function navigateToPage(pageName) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });
  
  // Show target page
  const targetPage = document.getElementById(`page-${pageName}`);
  if (targetPage) {
    targetPage.classList.remove('hidden');
    
    // Re-trigger animations for the new page
    setTimeout(() => {
      animatePageElements(targetPage);
    }, 50);
  }
}

// ================== Modal Functions ==================
function showCancelModal(serviceName) {
  const modal = document.getElementById('cancel-modal');
  const serviceNameEl = document.getElementById('cancel-service-name');
  
  serviceNameEl.textContent = serviceName;
  modal.classList.add('active');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('cancel-modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function confirmCancel() {
  const serviceName = document.getElementById('cancel-service-name').textContent;
  closeModal();
  
  showToast({
    icon: '🗡️',
    title: 'Cancellation Started!',
    message: `We're preparing your ${serviceName} cancel assist guide.`
  });
  
  // Navigate to cancel assist page after short delay
  setTimeout(() => {
    document.querySelector('.nav-item[data-page="cancel"]').click();
  }, 1500);
}

// Close modal on overlay click
document.getElementById('cancel-modal')?.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeModal();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// ================== Toast Notifications ==================
function showToast({ icon, title, message, duration = 4000 }) {
  const container = document.getElementById('toast-container');
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
  `;
  
  container.appendChild(toast);
  
  // Auto-remove after duration
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

// ================== Animations ==================
function initAnimations() {
  // Animate stat cards on load
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
  
  // Animate subscription cards
  const subCards = document.querySelectorAll('.subscription-card');
  subCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateX(0)';
    }, 300 + (index * 100));
  });
}

function animatePageElements(page) {
  const cards = page.querySelectorAll('.stat-card, .subscription-card, .savings-banner, .health-score-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 80);
  });
}

// ================== Counter Animations ==================
function animateCounters() {
  const counters = document.querySelectorAll('.stat-value');
  
  counters.forEach(counter => {
    const text = counter.textContent;
    const hasPrefix = text.startsWith('$');
    const numValue = parseFloat(text.replace(/[^0-9.]/g, ''));
    
    if (!isNaN(numValue)) {
      animateValue(counter, 0, numValue, 1500, hasPrefix ? '$' : '');
    }
  });
  
  // Animate savings banner
  const savingsAmount = document.querySelector('.savings-amount');
  if (savingsAmount) {
    animateValue(savingsAmount, 0, 2340, 2000, '$', true);
  }
}

function animateValue(element, start, end, duration, prefix = '', large = false) {
  const startTime = performance.now();
  const originalText = element.textContent;
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out-expo)
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    
    const current = start + (end - start) * easeProgress;
    
    // Format the number
    let formatted;
    if (large) {
      formatted = prefix + current.toLocaleString('en-US', { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0 
      });
    } else if (end >= 1000) {
      formatted = prefix + current.toLocaleString('en-US', { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0 
      });
    } else if (end >= 100) {
      formatted = prefix + Math.round(current);
    } else {
      formatted = prefix + current.toFixed(end % 1 !== 0 ? 2 : 0);
    }
    
    element.textContent = formatted;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// ================== Health Score Animation ==================
function animateHealthScore() {
  const circle = document.querySelector('.health-score-circle');
  if (!circle) return;
  
  let score = 0;
  const targetScore = 65;
  const duration = 1500;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    
    score = Math.round(easeProgress * targetScore);
    circle.style.setProperty('--score', score);
    
    const valueEl = circle.querySelector('.health-score-value');
    if (valueEl) {
      valueEl.textContent = score;
    }
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

// Trigger health score animation when visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateHealthScore();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const healthCard = document.querySelector('.health-score-card');
if (healthCard) {
  observer.observe(healthCard);
}

// ================== Interactive Demo Features ==================

// Simulate email scan
function simulateEmailScan() {
  showToast({
    icon: '📧',
    title: 'Scanning your inbox...',
    message: 'Looking for subscription receipts and confirmations.'
  });
  
  setTimeout(() => {
    showToast({
      icon: '🎉',
      title: 'Scan Complete!',
      message: 'Found 3 new subscriptions you might have forgotten.'
    });
  }, 3000);
}

// Renewal countdown updater (simulated)
function updateRenewalCountdowns() {
  const badges = document.querySelectorAll('.renewal-badge');
  badges.forEach(badge => {
    // Add pulsing effect to critical badges
    if (badge.classList.contains('critical')) {
      badge.style.animation = 'pulse 2s infinite';
    }
  });
}

// Initialize countdown updates
updateRenewalCountdowns();

// ================== Keyboard Shortcuts ==================
document.addEventListener('keydown', (e) => {
  // Quick navigation with number keys
  if (!e.ctrlKey && !e.metaKey && !e.altKey) {
    switch(e.key) {
      case '1':
        document.querySelector('.nav-item[data-page="dashboard"]')?.click();
        break;
      case '2':
        document.querySelector('.nav-item[data-page="subscriptions"]')?.click();
        break;
      case '3':
        document.querySelector('.nav-item[data-page="alerts"]')?.click();
        break;
      case '4':
        document.querySelector('.nav-item[data-page="savings"]')?.click();
        break;
    }
  }
});

// ================== Hover Effects ==================
document.querySelectorAll('.subscription-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const slayBtn = card.querySelector('.btn-danger');
    if (slayBtn) {
      slayBtn.style.transform = 'scale(1.05)';
    }
  });
  
  card.addEventListener('mouseleave', () => {
    const slayBtn = card.querySelector('.btn-danger');
    if (slayBtn) {
      slayBtn.style.transform = 'scale(1)';
    }
  });
});

// ================== Console Easter Egg ==================
console.log(`
🗡️ SubSlayer - Kill Forgotten Subscriptions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is a prototype created by Duncan (AI Assistant)
for the Duncan Ideas project.

Keyboard shortcuts:
  1 - Dashboard
  2 - Subscriptions  
  3 - Alerts
  4 - Savings
  Esc - Close modals

Made with 💀 to help you stop bleeding money.
`);

// ================== Demo Data ==================
const DEMO_SUBSCRIPTIONS = [
  { name: 'Netflix Premium', price: 22.99, category: 'Streaming', daysUntilRenewal: 1, lastUsed: '3 days ago' },
  { name: 'Adobe Creative Cloud', price: 59.99, category: 'Productivity', daysUntilRenewal: 3, lastUsed: '2 weeks ago' },
  { name: 'Spotify Family', price: 16.99, category: 'Music', daysUntilRenewal: 7, lastUsed: 'today' },
  { name: 'Amazon Prime', price: 14.99, category: 'Shopping', daysUntilRenewal: 41, lastUsed: 'today' },
  { name: 'Discord Nitro', price: 9.99, category: 'Social', daysUntilRenewal: 18, lastUsed: 'yesterday' },
  { name: 'Headspace', price: 12.99, category: 'Wellness', daysUntilRenewal: 22, lastUsed: '67 days ago' },
  { name: 'Microsoft 365', price: 9.99, category: 'Productivity', daysUntilRenewal: 30, lastUsed: '45 days ago' },
];

// Calculate totals
const monthlyBurn = DEMO_SUBSCRIPTIONS.reduce((sum, sub) => sum + sub.price, 0);
const annualCost = monthlyBurn * 12;

console.log(`Demo Stats:
  Monthly Burn: $${monthlyBurn.toFixed(2)}
  Annual Cost: $${annualCost.toFixed(2)}
  Subscriptions: ${DEMO_SUBSCRIPTIONS.length}
`);
