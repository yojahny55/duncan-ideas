/**
 * PredictPaper - Paper Trading for Prediction Markets
 * Interactive prototype demonstrating core functionality
 */

// ============================================================================
// State Management
// ============================================================================

const state = {
  portfolio: {
    cash: 10000,
    value: 10847.23,
    positions: []
  },
  markets: [],
  selectedMarket: null,
  tradeType: 'yes', // 'yes' or 'no'
  tradeAmount: 0
};

// ============================================================================
// Mock Data
// ============================================================================

const MOCK_MARKETS = [
  {
    id: 1,
    question: "Will Bitcoin reach $150,000 before July 2026?",
    category: "Crypto",
    yesPrice: 0.42,
    volume: "$2.4M",
    endDate: "Jul 1, 2026",
    trending: true
  },
  {
    id: 2,
    question: "Will the Federal Reserve cut rates in March 2026?",
    category: "Economics",
    yesPrice: 0.68,
    volume: "$1.8M",
    endDate: "Mar 31, 2026",
    trending: true
  },
  {
    id: 3,
    question: "Will GPT-5 be released before June 2026?",
    category: "AI",
    yesPrice: 0.55,
    volume: "$890K",
    endDate: "Jun 1, 2026",
    trending: false
  },
  {
    id: 4,
    question: "Will there be a government shutdown in Q1 2026?",
    category: "Politics",
    yesPrice: 0.31,
    volume: "$1.2M",
    endDate: "Mar 31, 2026",
    trending: false
  },
  {
    id: 5,
    question: "Will Apple announce AR glasses in 2026?",
    category: "Tech",
    yesPrice: 0.23,
    volume: "$560K",
    endDate: "Dec 31, 2026",
    trending: false
  },
  {
    id: 6,
    question: "Will SpaceX Starship complete an orbital flight in Feb 2026?",
    category: "Science",
    yesPrice: 0.78,
    volume: "$2.1M",
    endDate: "Feb 28, 2026",
    trending: true
  }
];

const MOCK_POSITIONS = [
  {
    id: 1,
    marketId: 1,
    question: "Will Bitcoin reach $150,000 before July 2026?",
    side: "yes",
    shares: 200,
    entryPrice: 0.35,
    currentPrice: 0.42
  },
  {
    id: 2,
    marketId: 2,
    question: "Will the Federal Reserve cut rates in March 2026?",
    side: "yes",
    shares: 150,
    entryPrice: 0.72,
    currentPrice: 0.68
  },
  {
    id: 3,
    marketId: 6,
    question: "Will SpaceX Starship complete an orbital flight in Feb 2026?",
    side: "yes",
    shares: 100,
    entryPrice: 0.65,
    currentPrice: 0.78
  },
  {
    id: 4,
    marketId: 4,
    question: "Will there be a government shutdown in Q1 2026?",
    side: "no",
    shares: 75,
    entryPrice: 0.62,
    currentPrice: 0.69
  },
  {
    id: 5,
    marketId: 3,
    question: "Will GPT-5 be released before June 2026?",
    side: "yes",
    shares: 120,
    entryPrice: 0.60,
    currentPrice: 0.55
  }
];

const MOCK_LEADERBOARD = [
  { rank: 1, name: "PredictionPro_2026", roi: 47.3, trades: 89 },
  { rank: 2, name: "CryptoOracle", roi: 42.1, trades: 156 },
  { rank: 3, name: "DataDrivenDan", roi: 38.8, trades: 67 },
  { rank: 4, name: "MarketMaven", roi: 35.2, trades: 112 },
  { rank: 5, name: "BayesianBob", roi: 31.5, trades: 45 }
];

// ============================================================================
// DOM Elements
// ============================================================================

const elements = {
  marketsContainer: document.getElementById('markets-container'),
  positionsBody: document.getElementById('positions-body'),
  leaderboardContainer: document.getElementById('leaderboard-container'),
  tradeModal: document.getElementById('trade-modal'),
  modalClose: document.getElementById('modal-close'),
  modalQuestion: document.getElementById('modal-question'),
  tabYes: document.getElementById('tab-yes'),
  tabNo: document.getElementById('tab-no'),
  tradeAmount: document.getElementById('trade-amount'),
  summaryPrice: document.getElementById('summary-price'),
  summaryShares: document.getElementById('summary-shares'),
  summaryProfit: document.getElementById('summary-profit'),
  summaryTotal: document.getElementById('summary-total'),
  confirmTrade: document.getElementById('confirm-trade'),
  toastContainer: document.getElementById('toast-container'),
  portfolioValue: document.getElementById('portfolio-value')
};

// ============================================================================
// Render Functions
// ============================================================================

function renderMarkets() {
  const html = MOCK_MARKETS.map(market => `
    <article class="market-card" tabindex="0" data-market-id="${market.id}" role="button" aria-label="Trade ${market.question}">
      <div class="market-header">
        <span class="market-category">${market.category}</span>
        <span class="market-volume">Vol: ${market.volume}</span>
      </div>
      
      <h3 class="market-question">${market.question}</h3>
      
      <div class="odds-bar">
        <div class="odds-fill" style="width: ${market.yesPrice * 100}%"></div>
      </div>
      
      <div class="odds-labels">
        <span class="odds-yes">YES ${(market.yesPrice * 100).toFixed(0)}¢</span>
        <span class="odds-no">NO ${((1 - market.yesPrice) * 100).toFixed(0)}¢</span>
      </div>
      
      <div class="market-actions">
        <button class="btn btn-success btn-sm" onclick="openTradeModal(${market.id}, 'yes')">
          Buy YES
        </button>
        <button class="btn btn-danger btn-sm" onclick="openTradeModal(${market.id}, 'no')">
          Buy NO
        </button>
      </div>
    </article>
  `).join('');
  
  elements.marketsContainer.innerHTML = html;
  
  // Add click handlers to cards
  document.querySelectorAll('.market-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.btn')) {
        const marketId = parseInt(card.dataset.marketId);
        openTradeModal(marketId, 'yes');
      }
    });
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const marketId = parseInt(card.dataset.marketId);
        openTradeModal(marketId, 'yes');
      }
    });
  });
}

function renderPositions() {
  const html = MOCK_POSITIONS.map(pos => {
    const pnl = (pos.currentPrice - pos.entryPrice) * pos.shares;
    const pnlPercent = ((pos.currentPrice - pos.entryPrice) / pos.entryPrice * 100).toFixed(1);
    const pnlClass = pnl >= 0 ? 'positive' : 'negative';
    const pnlSign = pnl >= 0 ? '+' : '';
    
    return `
      <tr>
        <td class="position-market">${pos.question}</td>
        <td><span class="position-side ${pos.side}">${pos.side.toUpperCase()}</span></td>
        <td style="font-family: var(--font-mono);">${pos.shares}</td>
        <td style="font-family: var(--font-mono);">${(pos.entryPrice * 100).toFixed(0)}¢</td>
        <td style="font-family: var(--font-mono);">${(pos.currentPrice * 100).toFixed(0)}¢</td>
        <td class="position-pnl ${pnlClass}" style="font-family: var(--font-mono);">
          ${pnlSign}$${Math.abs(pnl).toFixed(2)} (${pnlSign}${pnlPercent}%)
        </td>
        <td>
          <button class="btn btn-ghost btn-sm" onclick="sellPosition(${pos.id})">Sell</button>
        </td>
      </tr>
    `;
  }).join('');
  
  elements.positionsBody.innerHTML = html;
}

function renderLeaderboard() {
  const html = MOCK_LEADERBOARD.map(user => {
    let rankClass = '';
    if (user.rank === 1) rankClass = 'gold';
    else if (user.rank === 2) rankClass = 'silver';
    else if (user.rank === 3) rankClass = 'bronze';
    
    return `
      <div class="leaderboard-item">
        <div class="leaderboard-rank ${rankClass}">${user.rank}</div>
        <div class="leaderboard-user">
          <div class="leaderboard-name">${user.name}</div>
          <div class="leaderboard-stats">${user.trades} trades this week</div>
        </div>
        <div class="leaderboard-roi positive">+${user.roi}%</div>
      </div>
    `;
  }).join('');
  
  elements.leaderboardContainer.innerHTML = html;
}

// ============================================================================
// Modal Functions
// ============================================================================

function openTradeModal(marketId, type = 'yes') {
  const market = MOCK_MARKETS.find(m => m.id === marketId);
  if (!market) return;
  
  state.selectedMarket = market;
  state.tradeType = type;
  state.tradeAmount = 0;
  
  elements.modalQuestion.textContent = market.question;
  elements.tradeAmount.value = '';
  
  // Update tabs
  updateTradeTabs(type);
  updateTradeSummary();
  
  // Show modal
  elements.tradeModal.classList.add('active');
  elements.tradeAmount.focus();
}

function closeTradeModal() {
  elements.tradeModal.classList.remove('active');
  state.selectedMarket = null;
}

function updateTradeTabs(type) {
  state.tradeType = type;
  
  elements.tabYes.classList.toggle('active', type === 'yes');
  elements.tabNo.classList.toggle('active', type === 'no');
  
  elements.confirmTrade.className = type === 'yes' 
    ? 'btn btn-success btn-lg' 
    : 'btn btn-danger btn-lg';
  elements.confirmTrade.style.width = '100%';
  elements.confirmTrade.textContent = `Buy ${type.toUpperCase()} Shares`;
  
  updateTradeSummary();
}

function updateTradeSummary() {
  const market = state.selectedMarket;
  if (!market) return;
  
  const amount = parseFloat(elements.tradeAmount.value) || 0;
  const price = state.tradeType === 'yes' ? market.yesPrice : (1 - market.yesPrice);
  const shares = amount > 0 ? Math.floor(amount / price) : 0;
  const totalCost = shares * price;
  const potentialProfit = shares * (1 - price);
  
  elements.summaryPrice.textContent = `$${price.toFixed(2)}`;
  elements.summaryShares.textContent = shares.toLocaleString();
  elements.summaryProfit.textContent = `$${potentialProfit.toFixed(2)}`;
  elements.summaryTotal.textContent = `$${totalCost.toFixed(2)}`;
}

// ============================================================================
// Trade Functions
// ============================================================================

function executeTrade() {
  const market = state.selectedMarket;
  if (!market) return;
  
  const amount = parseFloat(elements.tradeAmount.value) || 0;
  if (amount <= 0) {
    showToast('Please enter an amount', 'error');
    return;
  }
  
  if (amount > state.portfolio.cash) {
    showToast('Insufficient funds', 'error');
    return;
  }
  
  const price = state.tradeType === 'yes' ? market.yesPrice : (1 - market.yesPrice);
  const shares = Math.floor(amount / price);
  
  // Add to positions (in real app, would update state properly)
  showToast(`Bought ${shares} ${state.tradeType.toUpperCase()} shares for $${(shares * price).toFixed(2)}`, 'success');
  
  closeTradeModal();
  
  // Simulate portfolio update
  animatePortfolioValue();
}

function sellPosition(positionId) {
  const position = MOCK_POSITIONS.find(p => p.id === positionId);
  if (!position) return;
  
  const value = position.shares * position.currentPrice;
  showToast(`Sold ${position.shares} shares for $${value.toFixed(2)}`, 'success');
  
  // In real app, would remove from positions and update cash
}

function animatePortfolioValue() {
  const startValue = 10847.23;
  const endValue = startValue + (Math.random() * 100 - 20);
  const duration = 1000;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const currentValue = startValue + (endValue - startValue) * easeOutCubic(progress);
    elements.portfolioValue.textContent = `$${currentValue.toFixed(2).toLocaleString()}`;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}

// ============================================================================
// Toast Notifications
// ============================================================================

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : '⚠'}</span>
    <span class="toast-message">${message}</span>
  `;
  
  elements.toastContainer.appendChild(toast);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'toast-in 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================================
// Event Listeners
// ============================================================================

function initEventListeners() {
  // Modal close
  elements.modalClose.addEventListener('click', closeTradeModal);
  elements.tradeModal.addEventListener('click', (e) => {
    if (e.target === elements.tradeModal) closeTradeModal();
  });
  
  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeTradeModal();
  });
  
  // Trade type tabs
  elements.tabYes.addEventListener('click', () => updateTradeTabs('yes'));
  elements.tabNo.addEventListener('click', () => updateTradeTabs('no'));
  
  // Trade amount input
  elements.tradeAmount.addEventListener('input', updateTradeSummary);
  
  // Quick amount buttons
  document.querySelectorAll('.quick-amount').forEach(btn => {
    btn.addEventListener('click', () => {
      elements.tradeAmount.value = btn.dataset.amount;
      updateTradeSummary();
    });
  });
  
  // Confirm trade
  elements.confirmTrade.addEventListener('click', executeTrade);
}

// ============================================================================
// Simulated Real-time Updates
// ============================================================================

function simulatePriceUpdates() {
  setInterval(() => {
    MOCK_MARKETS.forEach(market => {
      // Random price movement (-2% to +2%)
      const change = (Math.random() - 0.5) * 0.04;
      market.yesPrice = Math.max(0.01, Math.min(0.99, market.yesPrice + change));
    });
    
    MOCK_POSITIONS.forEach(pos => {
      const market = MOCK_MARKETS.find(m => m.id === pos.marketId);
      if (market) {
        pos.currentPrice = pos.side === 'yes' ? market.yesPrice : (1 - market.yesPrice);
      }
    });
    
    renderMarkets();
    renderPositions();
  }, 5000); // Update every 5 seconds
}

// ============================================================================
// Initialize
// ============================================================================

function init() {
  state.markets = MOCK_MARKETS;
  state.portfolio.positions = MOCK_POSITIONS;
  
  renderMarkets();
  renderPositions();
  renderLeaderboard();
  initEventListeners();
  simulatePriceUpdates();
  
  console.log('🚀 PredictPaper initialized');
}

// Make functions available globally for onclick handlers
window.openTradeModal = openTradeModal;
window.sellPosition = sellPosition;

// Start the app
document.addEventListener('DOMContentLoaded', init);
