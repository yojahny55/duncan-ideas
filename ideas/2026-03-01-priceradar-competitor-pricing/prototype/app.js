// PriceRadar — Prototype JavaScript

// Sample data
const alerts = [
    {
        id: 1,
        title: 'Handmade Leather Wallet - Brown',
        platform: 'Etsy',
        oldPrice: 34.99,
        newPrice: 27.99,
        change: -20,
        time: '2 hours ago'
    },
    {
        id: 2,
        title: 'Minimalist Phone Case - iPhone 15',
        platform: 'Shopify',
        oldPrice: 24.99,
        newPrice: 19.99,
        change: -20,
        time: '5 hours ago'
    },
    {
        id: 3,
        title: 'Vintage Style Watch Band',
        platform: 'Amazon',
        oldPrice: 18.50,
        newPrice: 21.99,
        change: 19,
        time: 'Yesterday'
    }
];

const products = [
    {
        id: 1,
        name: 'Handmade Leather Wallet - Brown Genuine Leather',
        platform: 'Etsy',
        price: 27.99,
        change: -20,
        alertPrice: 25.00,
        image: null
    },
    {
        id: 2,
        name: 'Minimalist Phone Case - iPhone 15 Pro Max',
        platform: 'Shopify',
        price: 19.99,
        change: -20,
        alertPercent: 15,
        image: null
    },
    {
        id: 3,
        name: 'Vintage Style Watch Band - 22mm Universal',
        platform: 'Amazon',
        price: 21.99,
        change: 0,
        alertPrice: 15.00,
        image: null
    }
];

// Render alerts
function renderAlerts() {
    const container = document.getElementById('alertsList');
    container.innerHTML = alerts.map(alert => `
        <div class="alert-item">
            <div class="alert-indicator ${alert.change < 0 ? 'drop' : 'rise'}"></div>
            <div class="alert-content">
                <div class="alert-title">${alert.title}</div>
                <div class="alert-meta">${alert.platform} • $${alert.oldPrice.toFixed(2)} → $${alert.newPrice.toFixed(2)}</div>
            </div>
            <div class="alert-change ${alert.change < 0 ? 'down' : 'up'}">
                ${alert.change > 0 ? '+' : ''}${alert.change}%
            </div>
            <div class="alert-time">${alert.time}</div>
        </div>
    `).join('');
}

// Render products
function renderProducts() {
    const container = document.getElementById('productsGrid');
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="">` : 'Product Image'}
            </div>
            <div class="product-info">
                <div class="product-platform">${product.platform}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price-row">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    ${product.change !== 0 ? `
                        <div class="product-change ${product.change < 0 ? 'down' : 'up'}">
                            ${product.change > 0 ? '+' : ''}${product.change}%
                        </div>
                    ` : `
                        <div class="product-change stable">Stable</div>
                    `}
                </div>
                <div class="product-alert">
                    Alert: <strong>${product.alertPrice ? `Below $${product.alertPrice.toFixed(2)}` : `${product.alertPercent}% drop`}</strong>
                </div>
            </div>
        </div>
    `).join('');
}

// Modal handling
const modal = document.getElementById('addModal');
const addBtn = document.getElementById('addProductBtn');
const closeBtn = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const form = document.getElementById('addProductForm');

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    form.reset();
}

addBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const url = document.getElementById('productUrl').value;
    const name = document.getElementById('productName').value;
    const alertPrice = document.getElementById('alertPrice').value;
    const alertPercent = document.getElementById('alertPercent').value;
    
    // Detect platform from URL
    let platform = 'Unknown';
    if (url.includes('etsy.com')) platform = 'Etsy';
    else if (url.includes('amazon.com')) platform = 'Amazon';
    else if (url.includes('ebay.com')) platform = 'eBay';
    else if (url.includes('shopify')) platform = 'Shopify';
    
    // Add new product (demo)
    const newProduct = {
        id: products.length + 1,
        name: name || `Product from ${platform}`,
        platform: platform,
        price: (Math.random() * 50 + 10).toFixed(2),
        change: 0,
        alertPrice: alertPrice ? parseFloat(alertPrice) : null,
        alertPercent: alertPercent ? parseInt(alertPercent) : null,
        image: null
    };
    
    products.unshift(newProduct);
    renderProducts();
    
    // Update stats
    updateStats();
    
    // Show success feedback
    closeModal();
    showToast('Product added! Tracking will begin shortly.');
});

// Refresh button
const refreshBtn = document.getElementById('refreshBtn');
refreshBtn.addEventListener('click', () => {
    refreshBtn.disabled = true;
    refreshBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
        </svg>
        Checking...
    `;
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .spin { animation: spin 1s linear infinite; }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        refreshBtn.disabled = false;
        refreshBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            Refresh Prices
        `;
        
        // Update last check time
        document.querySelector('.last-check').textContent = 'Last checked: Just now';
        
        showToast('Prices updated!');
    }, 2000);
});

// Update stats based on data
function updateStats() {
    // This would update the stat cards based on real data
    // For demo, we just increment the products count
    const productCount = document.querySelector('.stat-card:first-child .stat-value');
    productCount.textContent = products.length;
}

// Toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: #1f2937;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1001;
        animation: slideIn 0.3s ease;
    `;
    toast.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderAlerts();
    renderProducts();
});
