/**
 * GroceryScout - Interactive Prototype
 * =====================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initPriceChart();
  initProductCards();
  initToggleButtons();
  initOptimizationToggle();
  initReportForm();
  initSearch();
});

// --- Tab Navigation ---
function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = `tab-${tab.dataset.tab}`;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show target content
      contents.forEach(content => {
        content.classList.toggle('active', content.id === targetId);
      });
    });
  });
}

// --- Price Chart (Simple bar chart) ---
function initPriceChart() {
  const chartContainer = document.getElementById('priceChart');
  if (!chartContainer) return;

  // Sample 30-day price data for eggs
  const priceData = [
    4.29, 4.49, 4.49, 4.29, 3.99, 4.19, 4.49, 4.79, 4.99, 5.29,
    5.49, 5.29, 4.99, 4.79, 4.99, 5.29, 5.49, 5.99, 6.29, 5.99,
    5.49, 4.99, 4.49, 3.99, 3.49, 3.69, 3.99, 4.29, 4.49, 3.49
  ];

  const maxPrice = Math.max(...priceData);
  const minPrice = Math.min(...priceData);

  chartContainer.innerHTML = priceData.map((price, index) => {
    const heightPercent = ((price - minPrice) / (maxPrice - minPrice)) * 80 + 20;
    const isLowest = price === minPrice;
    const isToday = index === priceData.length - 1;
    
    return `
      <div 
        class="chart-bar" 
        style="height: ${heightPercent}%; ${isLowest ? 'background: #10b981;' : ''} ${isToday ? 'background: #3b82f6;' : ''}"
        title="Day ${index + 1}: $${price.toFixed(2)}"
      ></div>
    `;
  }).join('');
}

// --- Product Card Selection ---
function initProductCards() {
  const cards = document.querySelectorAll('.product-card');
  const detailSection = document.getElementById('product-detail');

  // Product data
  const products = {
    eggs: {
      name: '🥚 Large Eggs (12ct)',
      stores: [
        { name: 'ALDI', logo: 'A', color: 'aldi', distance: '2.3 mi', price: 3.49, best: true, updated: '2h ago', reporter: '@FrugalMom' },
        { name: 'Walmart', logo: 'W', color: 'walmart', distance: '1.1 mi', price: 4.78, updated: '5h ago', reporter: '@DealHunter99' },
        { name: 'Publix', logo: 'P', color: 'publix', distance: '0.8 mi', price: 6.29, updated: '1d ago', reporter: '@TampaShop' },
        { name: 'Target', logo: 'T', color: 'target', distance: '3.5 mi', price: 5.99, updated: '3h ago', reporter: '@BudgetKing' }
      ]
    },
    milk: {
      name: '🥛 Whole Milk (1 gal)',
      stores: [
        { name: 'Walmart', logo: 'W', color: 'walmart', distance: '1.1 mi', price: 3.29, best: true, updated: '3h ago', reporter: '@DealHunter99' },
        { name: 'ALDI', logo: 'A', color: 'aldi', distance: '2.3 mi', price: 3.49, updated: '4h ago', reporter: '@FrugalMom' },
        { name: 'Publix', logo: 'P', color: 'publix', distance: '0.8 mi', price: 4.29, updated: '6h ago', reporter: '@TampaShop' },
        { name: 'Target', logo: 'T', color: 'target', distance: '3.5 mi', price: 3.99, updated: '2h ago', reporter: '@BudgetKing' }
      ]
    },
    bread: {
      name: '🍞 White Bread',
      stores: [
        { name: 'ALDI', logo: 'A', color: 'aldi', distance: '2.3 mi', price: 2.49, best: true, updated: '1h ago', reporter: '@FrugalMom' },
        { name: 'Walmart', logo: 'W', color: 'walmart', distance: '1.1 mi', price: 2.99, updated: '4h ago', reporter: '@DealHunter99' },
        { name: 'Publix', logo: 'P', color: 'publix', distance: '0.8 mi', price: 4.29, updated: '8h ago', reporter: '@TampaShop' }
      ]
    },
    butter: {
      name: '🧈 Butter (1 lb)',
      stores: [
        { name: 'Walmart', logo: 'W', color: 'walmart', distance: '1.1 mi', price: 4.99, best: true, updated: '2h ago', reporter: '@DealHunter99' },
        { name: 'ALDI', logo: 'A', color: 'aldi', distance: '2.3 mi', price: 5.29, updated: '5h ago', reporter: '@FrugalMom' },
        { name: 'Target', logo: 'T', color: 'target', distance: '3.5 mi', price: 5.99, updated: '3h ago', reporter: '@BudgetKing' },
        { name: 'Publix', logo: 'P', color: 'publix', distance: '0.8 mi', price: 7.49, updated: '1d ago', reporter: '@TampaShop' }
      ]
    }
  };

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const productKey = card.dataset.product;
      const product = products[productKey];
      if (!product) return;

      // Update section header
      const header = detailSection.querySelector('.section-header h2');
      header.textContent = product.name;

      // Update store list
      const storeList = detailSection.querySelector('.store-list');
      storeList.innerHTML = product.stores.map(store => `
        <div class="store-card ${store.best ? 'best-price' : ''}">
          <div class="store-info">
            <span class="store-logo ${store.color}">${store.logo}</span>
            <div class="store-details">
              <span class="store-name">${store.name}</span>
              <span class="store-distance">${store.distance} away</span>
            </div>
          </div>
          <div class="store-price">
            <span class="price">$${store.price.toFixed(2)}</span>
            ${store.best ? '<span class="price-badge best">LOWEST</span>' : ''}
          </div>
          <div class="store-meta">
            <span class="updated">Updated ${store.updated}</span>
            <span class="reporter">by ${store.reporter}</span>
          </div>
        </div>
      `).join('');

      // Highlight selected card
      cards.forEach(c => c.style.outline = 'none');
      card.style.outline = '2px solid var(--color-primary)';

      // Smooth scroll to detail
      detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// --- Toggle Buttons (Report Form) ---
function initToggleButtons() {
  const toggleGroups = document.querySelectorAll('.toggle-group');

  toggleGroups.forEach(group => {
    const buttons = group.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });
}

// --- Optimization Toggle (Shopping List) ---
function initOptimizationToggle() {
  const optBtns = document.querySelectorAll('.opt-btn');
  const resultContainer = document.querySelector('.optimized-result');

  const strategies = {
    'one-store': {
      store: 'Walmart',
      logo: 'W',
      color: 'walmart',
      total: '$24.56'
    },
    'multi-stop': {
      store: 'ALDI + Walmart',
      logo: 'A+W',
      color: 'aldi',
      total: '$18.84',
      savings: '$5.72'
    }
  };

  optBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      optBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const strategy = index === 0 ? strategies['one-store'] : strategies['multi-stop'];
      
      resultContainer.innerHTML = `
        <div class="best-store">
          <span class="store-logo ${strategy.color}">${strategy.logo}</span>
          <div>
            <span class="store-name">${strategy.store}</span>
            <span class="store-total">Best total: ${strategy.total}${strategy.savings ? ` (save ${strategy.savings}!)` : ''}</span>
          </div>
        </div>
      `;
    });
  });
}

// --- Report Form ---
function initReportForm() {
  const form = document.getElementById('reportForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const product = document.getElementById('productInput').value;
    const store = document.getElementById('storeSelect').value;
    const price = document.getElementById('priceInput').value;

    if (!product || !store || !price) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    // Simulate submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '✓ Submitted! +10 XP';
    submitBtn.style.background = '#10b981';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      form.reset();

      // Update XP in header
      const xpBadge = document.querySelector('.xp-badge');
      if (xpBadge) {
        const currentXP = parseInt(xpBadge.textContent.replace(/\D/g, ''));
        xpBadge.textContent = `⭐ ${currentXP + 10} XP`;
      }

      showToast('Price reported! +10 XP earned', 'success');
    }, 2000);
  });
}

// --- Search ---
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const suggestions = ['eggs', 'milk', 'bread', 'butter', 'cheese', 'chicken', 'beef', 'bananas', 'apples', 'orange juice'];

  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    if (value.length < 2) return;

    const matches = suggestions.filter(s => s.includes(value));
    console.log('Search suggestions:', matches);
    // In a real app, show dropdown with suggestions
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const value = searchInput.value.toLowerCase();
      
      // Simulate product selection
      const productCard = document.querySelector(`[data-product="${value}"]`);
      if (productCard) {
        productCard.click();
      } else {
        showToast(`Searching for "${value}"...`, 'info');
      }
    }
  });
}

// --- Toast Notification ---
function showToast(message, type = 'info') {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 12px 24px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    animation: slideUp 0.3s ease;
  `;

  // Add animation keyframes
  if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      @keyframes slideUp {
        from { opacity: 0; transform: translateX(-50%) translateY(20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideUp 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- Scan Button (Demo) ---
document.querySelectorAll('.btn-scan, .btn-icon-sm').forEach(btn => {
  btn.addEventListener('click', () => {
    showToast('📷 Camera would open for barcode scanning', 'info');
  });
});

// --- Alert Button (Demo) ---
document.querySelectorAll('.btn-alert').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.innerHTML = '✓ Alert Set';
    btn.style.background = 'var(--color-primary-bg)';
    btn.style.color = 'var(--color-primary)';
    btn.style.borderColor = 'var(--color-primary)';
    showToast('🔔 Price alert set! We\'ll notify you when it drops.', 'success');
  });
});
