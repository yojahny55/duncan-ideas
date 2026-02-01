/**
 * PayTrail - Payment Tracker for Freelancers
 * Interactive Prototype JavaScript
 */

// ============================================================================
// Application State
// ============================================================================

const AppState = {
  invoices: [
    { id: 'INV-2026-001', client: 'TechStart Inc', amount: 2500, status: 'sent', dueDate: '2026-02-14', healthScore: 95 },
    { id: 'INV-2026-002', client: 'Creative Labs', amount: 1800, status: 'sent', dueDate: '2026-02-15', healthScore: 82 },
    { id: 'INV-2026-003', client: 'DataFlow Corp', amount: 4200, status: 'sent', dueDate: '2026-02-20', healthScore: 91 },
    { id: 'INV-2026-004', client: 'Rapid Deploy', amount: 3150, status: 'due-soon', dueDate: '2026-02-03', healthScore: 68 },
    { id: 'INV-2026-005', client: 'Scale Systems', amount: 950, status: 'due-soon', dueDate: '2026-02-01', healthScore: 94 },
    { id: 'INV-2025-089', client: 'SlowPay LLC', amount: 2200, status: 'overdue', dueDate: '2026-01-17', healthScore: 42, daysLate: 14 },
    { id: 'INV-2025-092', client: 'Budget Builders', amount: 1000, status: 'overdue', dueDate: '2026-01-24', healthScore: 55, daysLate: 7 },
    { id: 'INV-2025-088', client: 'TechStart Inc', amount: 2800, status: 'paid', paidDate: '2026-01-28', healthScore: 95 },
    { id: 'INV-2025-087', client: 'Scale Systems', amount: 1620, status: 'paid', paidDate: '2026-01-25', healthScore: 94 },
  ],
  clients: [
    { name: 'TechStart Inc', email: 'billing@techstart.io', healthScore: 95, avgDays: 12, totalInvoices: 8, outstanding: 2500, color: '#3b82f6' },
    { name: 'Scale Systems', email: 'accounts@scalesys.com', healthScore: 94, avgDays: 14, totalInvoices: 5, outstanding: 950, color: '#8b5cf6' },
    { name: 'Creative Labs', email: 'pay@creativelabs.co', healthScore: 82, avgDays: 21, totalInvoices: 3, outstanding: 1800, color: '#22c55e' },
    { name: 'DataFlow Corp', email: 'ar@dataflow.io', healthScore: 91, avgDays: 16, totalInvoices: 2, outstanding: 4200, color: '#0ea5e9' },
    { name: 'Rapid Deploy', email: 'finance@rapiddeploy.io', healthScore: 68, avgDays: 32, totalInvoices: 4, outstanding: 3150, color: '#f59e0b' },
    { name: 'SlowPay LLC', email: 'ap@slowpay.biz', healthScore: 42, avgDays: 45, totalInvoices: 2, outstanding: 2200, color: '#ef4444' },
    { name: 'Budget Builders', email: 'payments@budgetbuilders.com', healthScore: 55, avgDays: 38, totalInvoices: 1, outstanding: 1000, color: '#f97316' },
  ],
  cashflowData: [
    { month: 'Feb', optimistic: 12500, realistic: 9800 },
    { month: 'Mar', optimistic: 14200, realistic: 11500 },
    { month: 'Apr', optimistic: 11800, realistic: 9200 },
    { month: 'May', optimistic: 15600, realistic: 12800 },
    { month: 'Jun', optimistic: 13400, realistic: 10600 },
    { month: 'Jul', optimistic: 16200, realistic: 13100 },
  ],
  currentView: 'dashboard',
};

// ============================================================================
// Utility Functions
// ============================================================================

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function getHealthClass(score) {
  if (score >= 90) return 'excellent';
  if (score >= 75) return 'good';
  if (score >= 50) return 'warning';
  return 'risk';
}

function getDaysClass(days) {
  if (days <= 15) return 'fast';
  if (days <= 25) return 'normal';
  if (days <= 35) return 'slow';
  return 'very-slow';
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ============================================================================
// Toast Notifications
// ============================================================================

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
      ${type === 'success' 
        ? '<polyline points="20 6 9 17 4 12"/>' 
        : type === 'error'
        ? '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
        : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
    </svg>
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });
  
  // Remove after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ============================================================================
// Cash Flow Chart
// ============================================================================

function renderCashflowChart() {
  const container = document.getElementById('cashflowChart');
  if (!container) return;
  
  const maxValue = Math.max(...AppState.cashflowData.map(d => Math.max(d.optimistic, d.realistic)));
  const heightScale = 160 / maxValue;
  
  container.innerHTML = AppState.cashflowData.map(data => `
    <div class="chart-bar-group">
      <div class="bar-container">
        <div class="chart-bar optimistic" style="height: ${data.optimistic * heightScale}px;" title="${formatCurrency(data.optimistic)}"></div>
        <div class="chart-bar realistic" style="height: ${data.realistic * heightScale}px;" title="${formatCurrency(data.realistic)}"></div>
      </div>
      <span class="bar-label">${data.month}</span>
    </div>
  `).join('');
}

// ============================================================================
// Navigation
// ============================================================================

function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item[data-view]');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update active state
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
      
      // Update view
      AppState.currentView = item.dataset.view;
      
      // Show toast for demo
      showToast(`Navigated to ${item.textContent.trim()}`, 'success');
    });
  });
}

// ============================================================================
// Reminder Modal
// ============================================================================

const reminderTemplates = {
  friendly: (client, invoice, amount) => 
    `Hi there! Just a friendly reminder that invoice ${invoice} for ${formatCurrency(amount)} was due recently. If you've already sent the payment, please disregard this message. Otherwise, we'd appreciate if you could let us know when we can expect payment. Thanks!`,
  firm: (client, invoice, amount) => 
    `Hello, This is a follow-up regarding invoice ${invoice} for ${formatCurrency(amount)}, which is now past due. We kindly request that you process this payment at your earliest convenience. If there are any issues with the invoice, please contact us so we can resolve them promptly.`,
  final: (client, invoice, amount) => 
    `FINAL NOTICE: Invoice ${invoice} for ${formatCurrency(amount)} remains unpaid despite previous reminders. To avoid any service interruption or further action, please remit payment within 5 business days. If you have questions or need to discuss payment arrangements, please contact us immediately.`,
};

function initReminderModal() {
  const modal = document.getElementById('reminderModal');
  const cancelBtn = document.getElementById('cancelReminder');
  const sendBtn = document.getElementById('sendReminder');
  const toneSelect = document.getElementById('reminderTone');
  const messageInput = document.getElementById('reminderMessage');
  const previewEl = document.getElementById('reminderPreview');
  const recipientInput = document.getElementById('reminderRecipient');
  
  let currentClient = null;
  let currentInvoice = null;
  let currentAmount = 0;
  
  // Open modal
  document.querySelectorAll('.reminder-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentClient = btn.dataset.client;
      const client = AppState.clients.find(c => c.name === currentClient);
      const invoice = AppState.invoices.find(i => i.client === currentClient && i.status === 'overdue');
      
      if (client && invoice) {
        currentInvoice = invoice.id;
        currentAmount = invoice.amount;
        recipientInput.value = `${client.name} <${client.email}>`;
        updatePreview();
        modal.classList.add('active');
      }
    });
  });
  
  // Update preview based on tone
  function updatePreview() {
    const tone = toneSelect.value;
    const template = reminderTemplates[tone];
    previewEl.textContent = template(currentClient, currentInvoice, currentAmount);
  }
  
  toneSelect.addEventListener('change', updatePreview);
  
  // Close modal
  cancelBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
  
  // Send reminder
  sendBtn.addEventListener('click', () => {
    sendBtn.disabled = true;
    sendBtn.innerHTML = '<div class="loading-spinner"></div> Sending...';
    
    // Simulate API call
    setTimeout(() => {
      modal.classList.remove('active');
      showToast(`Reminder sent to ${currentClient}!`, 'success');
      sendBtn.disabled = false;
      sendBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Send Reminder
      `;
    }, 1500);
  });
  
  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

// ============================================================================
// Invoice Cards Interaction
// ============================================================================

function initInvoiceCards() {
  const cards = document.querySelectorAll('.invoice-card');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const invoiceId = card.dataset.invoice;
      const invoice = AppState.invoices.find(i => i.id === invoiceId);
      
      if (invoice) {
        showToast(`Viewing ${invoice.id} - ${invoice.client}`, 'success');
      }
    });
    
    // Keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// ============================================================================
// Client Search
// ============================================================================

function initClientSearch() {
  const searchInput = document.getElementById('clientSearch');
  const tableBody = document.getElementById('clientTableBody');
  
  if (!searchInput || !tableBody) return;
  
  const originalRows = tableBody.innerHTML;
  
  const filterClients = debounce((query) => {
    if (!query) {
      tableBody.innerHTML = originalRows;
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const filteredClients = AppState.clients.filter(client => 
      client.name.toLowerCase().includes(lowerQuery) ||
      client.email.toLowerCase().includes(lowerQuery)
    );
    
    if (filteredClients.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="6">
            <div class="empty-state">
              <div class="empty-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
              <div class="empty-title">No clients found</div>
              <div class="empty-description">Try a different search term</div>
            </div>
          </td>
        </tr>
      `;
      return;
    }
    
    tableBody.innerHTML = filteredClients.map(client => `
      <tr>
        <td>
          <div class="client-info">
            <div class="client-avatar" style="background: ${client.color};">${client.name.split(' ').map(n => n[0]).join('').slice(0,2)}</div>
            <div>
              <div class="client-name">${client.name}</div>
              <div class="client-email">${client.email}</div>
            </div>
          </div>
        </td>
        <td>
          <div class="health-score">
            <div class="score-bar">
              <div class="score-fill ${getHealthClass(client.healthScore)}" style="width: ${client.healthScore}%;"></div>
            </div>
            <span class="score-value">${client.healthScore}</span>
          </div>
        </td>
        <td><span class="days-badge ${getDaysClass(client.avgDays)}">${client.avgDays} days</span></td>
        <td>${client.totalInvoices}</td>
        <td class="font-mono">${formatCurrency(client.outstanding)}</td>
        <td class="text-right">
          <div class="action-buttons">
            <button class="btn btn-ghost btn-icon btn-sm" title="Send Reminder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              </svg>
            </button>
            <button class="btn btn-ghost btn-icon btn-sm" title="View Details">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="19" cy="12" r="1"/>
                <circle cx="5" cy="12" r="1"/>
              </svg>
            </button>
          </div>
        </td>
      </tr>
    `).join('');
  }, 200);
  
  searchInput.addEventListener('input', (e) => {
    filterClients(e.target.value.trim());
  });
}

// ============================================================================
// Buttons
// ============================================================================

function initButtons() {
  const newInvoiceBtn = document.getElementById('newInvoiceBtn');
  const importBtn = document.getElementById('importBtn');
  
  if (newInvoiceBtn) {
    newInvoiceBtn.addEventListener('click', () => {
      showToast('New Invoice dialog would open here', 'success');
    });
  }
  
  if (importBtn) {
    importBtn.addEventListener('click', () => {
      showToast('Import from Stripe, PayPal, QuickBooks...', 'success');
    });
  }
}

// ============================================================================
// Stat Card Animations
// ============================================================================

function animateStats() {
  const statValues = document.querySelectorAll('.stat-value');
  
  statValues.forEach(stat => {
    const text = stat.textContent;
    const isNumber = /^\$?[\d,]+/.test(text);
    
    if (isNumber) {
      // Extract number
      const match = text.match(/([\d,]+)/);
      if (match) {
        const target = parseInt(match[1].replace(/,/g, ''), 10);
        const prefix = text.startsWith('$') ? '$' : '';
        const suffix = text.includes('days') ? ' days' : '';
        
        let current = 0;
        const duration = 1000;
        const steps = 30;
        const increment = target / steps;
        const stepDuration = duration / steps;
        
        const animate = () => {
          current += increment;
          if (current >= target) {
            stat.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
          } else {
            stat.textContent = `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
            setTimeout(animate, stepDuration);
          }
        };
        
        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            animate();
            observer.disconnect();
          }
        });
        observer.observe(stat);
      }
    }
  });
}

// ============================================================================
// Initialize Application
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('PayTrail initialized');
  
  // Initialize all components
  initNavigation();
  initReminderModal();
  initInvoiceCards();
  initClientSearch();
  initButtons();
  renderCashflowChart();
  animateStats();
  
  // Welcome toast
  setTimeout(() => {
    showToast('Welcome to PayTrail! Track your payments effortlessly.', 'success');
  }, 500);
});

// ============================================================================
// Keyboard Shortcuts
// ============================================================================

document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + N = New Invoice
  if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
    e.preventDefault();
    document.getElementById('newInvoiceBtn')?.click();
  }
  
  // Ctrl/Cmd + I = Import
  if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
    e.preventDefault();
    document.getElementById('importBtn')?.click();
  }
  
  // Ctrl/Cmd + / = Search focus
  if ((e.ctrlKey || e.metaKey) && e.key === '/') {
    e.preventDefault();
    document.getElementById('clientSearch')?.focus();
  }
});
