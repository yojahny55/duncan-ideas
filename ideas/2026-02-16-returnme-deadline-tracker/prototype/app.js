// ReturnMe - App JavaScript

// Sample data
let returns = [
    {
        id: 1,
        storeName: "Amazon",
        itemDesc: "Wireless Bluetooth Earbuds",
        purchaseDate: "2026-02-14",
        returnDays: 30,
        amount: 49.99,
        status: "pending"
    },
    {
        id: 2,
        storeName: "Best Buy",
        itemDesc: "USB-C Hub Adapter",
        purchaseDate: "2026-02-10",
        returnDays: 15,
        amount: 34.99,
        status: "pending"
    },
    {
        id: 3,
        storeName: "Target",
        itemDesc: "Running Shoes - Size 10",
        purchaseDate: "2026-01-20",
        returnDays: 90,
        amount: 89.99,
        status: "pending"
    },
    {
        id: 4,
        storeName: "Amazon",
        itemDesc: "Phone Case",
        purchaseDate: "2026-01-15",
        returnDays: 30,
        amount: 19.99,
        status: "returned"
    },
    {
        id: 5,
        storeName: "Nike",
        itemDesc: "Training Shorts",
        purchaseDate: "2025-12-28",
        returnDays: 60,
        amount: 45.00,
        status: "returned"
    }
];

let currentFilter = "all";
let selectedItemId = null;

// DOM Elements
const returnsList = document.getElementById('returnsList');
const addBtn = document.getElementById('addBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const addReturnForm = document.getElementById('addReturnForm');
const storeSelect = document.getElementById('storeName');
const customDaysGroup = document.getElementById('customDaysGroup');
const purchaseDateInput = document.getElementById('purchaseDate');
const actionModalOverlay = document.getElementById('actionModalOverlay');
const closeActionModal = document.getElementById('closeActionModal');
const actionItemName = document.getElementById('actionItemName');
const markReturned = document.getElementById('markReturned');
const markKept = document.getElementById('markKept');
const deleteItem = document.getElementById('deleteItem');
const toast = document.getElementById('toast');
const tabs = document.querySelectorAll('.tab');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set today's date as default
    purchaseDateInput.valueAsDate = new Date();
    
    renderReturns();
    updateStats();
});

// Event Listeners
addBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    addReturnForm.reset();
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        addReturnForm.reset();
    }
});

storeSelect.addEventListener('change', (e) => {
    if (e.target.value === 'Other') {
        customDaysGroup.style.display = 'block';
    } else {
        customDaysGroup.style.display = 'none';
    }
});

addReturnForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const selectedOption = storeSelect.options[storeSelect.selectedIndex];
    let returnDays = parseInt(selectedOption.dataset.days);
    
    if (storeSelect.value === 'Other') {
        returnDays = parseInt(document.getElementById('customDays').value) || 30;
    }
    
    const newReturn = {
        id: Date.now(),
        storeName: storeSelect.value,
        itemDesc: document.getElementById('itemDesc').value,
        purchaseDate: document.getElementById('purchaseDate').value,
        returnDays: returnDays,
        amount: parseFloat(document.getElementById('amount').value),
        status: "pending"
    };
    
    returns.unshift(newReturn);
    
    modalOverlay.classList.remove('active');
    addReturnForm.reset();
    purchaseDateInput.valueAsDate = new Date();
    
    renderReturns();
    updateStats();
    showToast('Return added! We\'ll remind you before the deadline.');
});

// Action Modal
closeActionModal.addEventListener('click', () => {
    actionModalOverlay.classList.remove('active');
    selectedItemId = null;
});

actionModalOverlay.addEventListener('click', (e) => {
    if (e.target === actionModalOverlay) {
        actionModalOverlay.classList.remove('active');
        selectedItemId = null;
    }
});

markReturned.addEventListener('click', () => {
    const item = returns.find(r => r.id === selectedItemId);
    if (item) {
        item.status = 'returned';
        renderReturns();
        updateStats();
        actionModalOverlay.classList.remove('active');
        showToast(`Nice! You saved $${item.amount.toFixed(2)}`);
    }
});

markKept.addEventListener('click', () => {
    returns = returns.filter(r => r.id !== selectedItemId);
    renderReturns();
    updateStats();
    actionModalOverlay.classList.remove('active');
    showToast('Item removed from tracking');
});

deleteItem.addEventListener('click', () => {
    returns = returns.filter(r => r.id !== selectedItemId);
    renderReturns();
    updateStats();
    actionModalOverlay.classList.remove('active');
    showToast('Item deleted');
});

// Filter Tabs
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFilter = tab.dataset.filter;
        renderReturns();
    });
});

// Calculate deadline and days remaining
function getDeadlineInfo(purchaseDate, returnDays) {
    const purchase = new Date(purchaseDate);
    const deadline = new Date(purchase);
    deadline.setDate(deadline.getDate() + returnDays);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const daysRemaining = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
    const totalDays = returnDays;
    const daysUsed = totalDays - daysRemaining;
    const progressPercent = Math.min(100, Math.max(0, (daysUsed / totalDays) * 100));
    
    let urgency = 'safe';
    if (daysRemaining <= 3) urgency = 'urgent';
    else if (daysRemaining <= 7) urgency = 'warning';
    
    return {
        deadline: deadline,
        daysRemaining: daysRemaining,
        progressPercent: progressPercent,
        urgency: urgency
    };
}

// Format date
function formatDate(date) {
    const options = { month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

// Render returns list
function renderReturns() {
    let filteredReturns = returns;
    
    if (currentFilter === 'urgent') {
        filteredReturns = returns.filter(r => {
            if (r.status !== 'pending') return false;
            const info = getDeadlineInfo(r.purchaseDate, r.returnDays);
            return info.daysRemaining <= 7;
        });
    } else if (currentFilter === 'returned') {
        filteredReturns = returns.filter(r => r.status === 'returned');
    }
    
    if (filteredReturns.length === 0) {
        returnsList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📦</div>
                <h3>${currentFilter === 'returned' ? 'No returned items yet' : 'No items to return'}</h3>
                <p>${currentFilter === 'returned' ? 'Your returned items will appear here' : 'Add items you might want to return'}</p>
            </div>
        `;
        return;
    }
    
    // Sort by urgency for pending items
    filteredReturns.sort((a, b) => {
        if (a.status === 'returned' && b.status !== 'returned') return 1;
        if (a.status !== 'returned' && b.status === 'returned') return -1;
        
        const infoA = getDeadlineInfo(a.purchaseDate, a.returnDays);
        const infoB = getDeadlineInfo(b.purchaseDate, b.returnDays);
        return infoA.daysRemaining - infoB.daysRemaining;
    });
    
    returnsList.innerHTML = filteredReturns.map((item, index) => {
        const info = getDeadlineInfo(item.purchaseDate, item.returnDays);
        const isReturned = item.status === 'returned';
        
        let deadlineText = '';
        let badgeClass = info.urgency;
        let badgeText = '';
        
        if (isReturned) {
            badgeClass = 'returned';
            badgeText = 'Returned';
            deadlineText = 'Refund saved';
        } else if (info.daysRemaining < 0) {
            badgeClass = 'urgent';
            badgeText = 'Expired';
            deadlineText = 'Window closed';
        } else if (info.daysRemaining === 0) {
            badgeText = 'TODAY!';
            deadlineText = 'Last day to return';
        } else if (info.daysRemaining === 1) {
            badgeText = 'TOMORROW';
            deadlineText = `Due ${formatDate(info.deadline)}`;
        } else if (info.daysRemaining <= 3) {
            badgeText = `${info.daysRemaining} days`;
            deadlineText = `Due ${formatDate(info.deadline)}`;
        } else if (info.daysRemaining <= 7) {
            badgeText = `${info.daysRemaining} days`;
            deadlineText = `Due ${formatDate(info.deadline)}`;
        } else {
            badgeText = `${info.daysRemaining} days`;
            deadlineText = `Due ${formatDate(info.deadline)}`;
        }
        
        return `
            <div class="return-card ${isReturned ? 'returned' : info.urgency}" 
                 data-id="${item.id}"
                 style="animation-delay: ${index * 0.05}s">
                <div class="card-header">
                    <span class="store-name">${item.storeName}</span>
                    <span class="deadline-badge ${badgeClass}">${badgeText}</span>
                </div>
                <div class="item-desc">${item.itemDesc}</div>
                <div class="card-footer">
                    <span class="amount">$${item.amount.toFixed(2)}</span>
                    <span class="deadline-text">${deadlineText}</span>
                </div>
                ${!isReturned && info.daysRemaining >= 0 ? `
                    <div class="progress-bar">
                        <div class="progress-fill ${info.urgency}" style="width: ${info.progressPercent}%"></div>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
    
    // Add click handlers
    document.querySelectorAll('.return-card').forEach(card => {
        card.addEventListener('click', () => {
            selectedItemId = parseInt(card.dataset.id);
            const item = returns.find(r => r.id === selectedItemId);
            if (item) {
                actionItemName.textContent = item.itemDesc;
                actionModalOverlay.classList.add('active');
            }
        });
    });
}

// Update stats
function updateStats() {
    const pending = returns.filter(r => r.status === 'pending');
    const urgent = pending.filter(r => {
        const info = getDeadlineInfo(r.purchaseDate, r.returnDays);
        return info.daysRemaining <= 7;
    });
    const saved = returns.filter(r => r.status === 'returned')
        .reduce((sum, r) => sum + r.amount, 0);
    
    document.getElementById('activeCount').textContent = pending.length;
    document.getElementById('urgentCount').textContent = urgent.length;
    document.getElementById('savedAmount').textContent = `$${saved.toFixed(0)}`;
}

// Show toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
