/**
 * ProgressPulse - Prototype JavaScript
 * Interactive demo for freelancer order tracking
 */

// ============================================
// State Management
// ============================================

const state = {
  currentView: 'dashboard',
  selectedOrder: null,
  orders: [
    {
      id: 1,
      name: 'Custom Wedding Dress',
      customer: 'Sarah Johnson',
      emoji: '👗',
      dueDate: 'Feb 20',
      shareUrl: 'progresspulse.app/t/a8f2k9x',
      stages: [
        { name: 'Consultation & Measurements', completed: true, date: 'Feb 5' },
        { name: 'Pattern Making', completed: true, date: 'Feb 8' },
        { name: 'Fabric Cutting', completed: true, date: 'Feb 10' },
        { name: 'Sewing & Assembly', completed: false, date: null, current: true },
        { name: 'Final Fitting', completed: false, date: null },
        { name: 'Finishing Touches', completed: false, date: null }
      ]
    },
    {
      id: 2,
      name: '3-Piece Suit Alteration',
      customer: 'Michael Chen',
      emoji: '👔',
      dueDate: 'Feb 14',
      urgent: true,
      shareUrl: 'progresspulse.app/t/b7g3m2y',
      stages: [
        { name: 'Measurements', completed: true, date: 'Feb 10' },
        { name: 'Jacket Adjustment', completed: true, date: 'Feb 11' },
        { name: 'Pants Hemming', completed: false, date: null, current: true },
        { name: 'Vest Fitting', completed: false, date: null },
        { name: 'Final Press & QC', completed: false, date: null }
      ]
    },
    {
      id: 3,
      name: 'Prom Dress - Purple',
      customer: 'Emma Williams',
      emoji: '🎀',
      dueDate: 'Mar 1',
      shareUrl: 'progresspulse.app/t/c9h1n4z',
      stages: [
        { name: 'Design Consultation', completed: true, date: 'Feb 8' },
        { name: 'Fabric Selection', completed: false, date: null, current: true },
        { name: 'Pattern & Cutting', completed: false, date: null },
        { name: 'Sewing', completed: false, date: null },
        { name: 'Embellishments', completed: false, date: null },
        { name: 'Final Fitting', completed: false, date: null }
      ]
    }
  ]
};

// ============================================
// DOM Elements
// ============================================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const elements = {
  navTabs: $$('.nav-tab'),
  views: $$('.view'),
  orderList: $('#order-list'),
  orderCards: $$('.order-card'),
  orderDetail: $('#order-detail'),
  backBtn: $('#back-btn'),
  detailTitle: $('#detail-title'),
  detailCustomer: $('#detail-customer'),
  detailPercent: $('#detail-percent'),
  detailBar: $('#detail-bar'),
  detailStages: $('#detail-stages'),
  shareUrl: $('#share-url'),
  copyBtn: $('#copy-btn'),
  fabAdd: $('#fab-add'),
  toast: $('#toast')
};

// ============================================
// Utilities
// ============================================

function calculateProgress(stages) {
  const completed = stages.filter(s => s.completed).length;
  return Math.round((completed / stages.length) * 100);
}

function getCurrentDate() {
  const now = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[now.getMonth()]} ${now.getDate()}`;
}

function showToast(message, duration = 2500) {
  elements.toast.textContent = message;
  elements.toast.classList.add('show');
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, duration);
}

// ============================================
// View Management
// ============================================

function switchView(viewId) {
  state.currentView = viewId;
  
  // Update nav tabs
  elements.navTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.view === viewId);
  });
  
  // Update views
  elements.views.forEach(view => {
    view.classList.toggle('active', view.id === viewId);
  });
  
  // Reset order detail when switching views
  if (viewId === 'dashboard') {
    showOrderList();
  }
}

function showOrderList() {
  elements.orderList.classList.remove('hidden');
  elements.orderDetail.classList.add('hidden');
  elements.fabAdd.classList.remove('hidden');
  state.selectedOrder = null;
}

function showOrderDetail(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;
  
  state.selectedOrder = order;
  
  // Hide list, show detail
  elements.orderList.classList.add('hidden');
  elements.orderDetail.classList.remove('hidden');
  elements.fabAdd.classList.add('hidden');
  
  // Update header
  elements.detailTitle.textContent = order.name;
  elements.detailCustomer.textContent = `For ${order.customer}`;
  
  // Update progress
  const progress = calculateProgress(order.stages);
  elements.detailPercent.textContent = `${progress}%`;
  elements.detailBar.style.width = `${progress}%`;
  
  // Update share URL
  elements.shareUrl.value = order.shareUrl;
  
  // Render stages
  renderStages(order);
}

function renderStages(order) {
  elements.detailStages.innerHTML = order.stages.map((stage, index) => {
    const classes = [
      'stage',
      stage.completed ? 'completed' : '',
      stage.current ? 'current' : ''
    ].filter(Boolean).join(' ');
    
    return `
      <div class="${classes}" data-stage-index="${index}">
        <div class="stage-check">${stage.completed ? '✓' : ''}</div>
        <div class="stage-info">
          <div class="stage-name">${stage.name}</div>
          <div class="stage-date">${stage.completed ? `Completed ${stage.date}` : (stage.current ? 'In progress...' : '')}</div>
        </div>
      </div>
    `;
  }).join('');
  
  // Re-attach click handlers
  elements.detailStages.querySelectorAll('.stage').forEach(stageEl => {
    stageEl.addEventListener('click', () => handleStageClick(stageEl));
  });
}

// ============================================
// Event Handlers
// ============================================

function handleStageClick(stageEl) {
  const index = parseInt(stageEl.dataset.stageIndex);
  const order = state.selectedOrder;
  
  if (!order) return;
  
  const stage = order.stages[index];
  
  // Toggle completion
  if (!stage.completed) {
    // Mark as complete
    stage.completed = true;
    stage.date = getCurrentDate();
    stage.current = false;
    
    // Find next incomplete and mark as current
    const nextIncomplete = order.stages.find(s => !s.completed);
    if (nextIncomplete) {
      nextIncomplete.current = true;
    }
    
    showToast(`✓ "${stage.name}" marked complete!`);
  } else {
    // Unmark (revert)
    stage.completed = false;
    stage.date = null;
    
    // Reset current markers
    order.stages.forEach(s => s.current = false);
    
    // First incomplete becomes current
    const firstIncomplete = order.stages.find(s => !s.completed);
    if (firstIncomplete) {
      firstIncomplete.current = true;
    }
    
    showToast(`Reverted "${stage.name}"`);
  }
  
  // Re-render
  const progress = calculateProgress(order.stages);
  elements.detailPercent.textContent = `${progress}%`;
  elements.detailBar.style.width = `${progress}%`;
  renderStages(order);
  
  // Update the card in the list too
  updateOrderCard(order.id, progress);
}

function updateOrderCard(orderId, progress) {
  const card = document.querySelector(`.order-card[data-order="${orderId}"]`);
  if (card) {
    card.querySelector('.order-progress-mini').textContent = `${progress}%`;
  }
}

function handleCopyLink() {
  const url = elements.shareUrl.value;
  
  // Modern clipboard API
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast('📋 Link copied! Send it to your customer.');
    }).catch(() => {
      fallbackCopy(url);
    });
  } else {
    fallbackCopy(url);
  }
}

function fallbackCopy(text) {
  elements.shareUrl.select();
  document.execCommand('copy');
  showToast('📋 Link copied!');
}

function handleFabClick() {
  showToast('✨ Create order feature coming soon!');
}

// ============================================
// Initialize
// ============================================

function init() {
  // Nav tab clicks
  elements.navTabs.forEach(tab => {
    tab.addEventListener('click', () => switchView(tab.dataset.view));
  });
  
  // Order card clicks
  elements.orderCards.forEach(card => {
    card.addEventListener('click', () => {
      const orderId = parseInt(card.dataset.order);
      showOrderDetail(orderId);
    });
  });
  
  // Back button
  elements.backBtn.addEventListener('click', showOrderList);
  
  // Copy button
  elements.copyBtn.addEventListener('click', handleCopyLink);
  
  // FAB
  elements.fabAdd.addEventListener('click', handleFabClick);
  
  console.log('ProgressPulse initialized ✨');
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', init);
