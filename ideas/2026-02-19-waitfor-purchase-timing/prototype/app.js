// WaitFor - Purchase Timing Optimizer

// Category timing database
const categoryData = {
    'mattresses': {
        name: 'Mattresses',
        icon: '🛏️',
        bestMonths: [2, 5, 9], // Feb (Presidents), May (Memorial), Sep (Labor)
        events: [
            { name: "President's Day Sales", date: "Feb 14-20", discount: "30-50%" },
            { name: "Memorial Day Sales", date: "May 22-28", discount: "40-60%" },
            { name: "Labor Day Sales", date: "Aug 30 - Sep 5", discount: "35-55%" },
            { name: "Black Friday", date: "Nov 27-30", discount: "30-50%" }
        ],
        tip: "The 'mattress holidays' (President's, Memorial, Labor Day) consistently offer the best deals. Avoid buying in March-April or October."
    },
    'tvs': {
        name: 'TVs & Electronics',
        icon: '📺',
        bestMonths: [2, 7, 11], // Super Bowl, Prime Day, Black Friday
        events: [
            { name: "Super Bowl Week", date: "Feb 1-9", discount: "20-40%" },
            { name: "Amazon Prime Day", date: "Jul 15-16 (est)", discount: "25-45%" },
            { name: "Black Friday", date: "Nov 27-30", discount: "30-50%" },
            { name: "Cyber Monday", date: "Dec 1", discount: "25-45%" }
        ],
        tip: "Super Bowl week is underrated for TV deals. Black Friday has the biggest selection but Prime Day often has better prices on premium models."
    },
    'appliances': {
        name: 'Major Appliances',
        icon: '🧊',
        bestMonths: [1, 5, 7, 9, 11], // MLK, Memorial, July 4, Labor, Black Friday
        events: [
            { name: "MLK Day Sales", date: "Jan 13-20", discount: "20-35%" },
            { name: "Memorial Day", date: "May 22-28", discount: "25-40%" },
            { name: "July 4th Sales", date: "Jun 28 - Jul 7", discount: "20-35%" },
            { name: "Labor Day", date: "Aug 30 - Sep 5", discount: "25-40%" },
            { name: "Black Friday", date: "Nov 27-30", discount: "30-50%" }
        ],
        tip: "September-October is the sweet spot: new models arrive, last year's get clearanced. Holiday weekends always have promotions."
    },
    'outdoor': {
        name: 'Outdoor/Patio',
        icon: '🌿',
        bestMonths: [8, 9], // End of season
        events: [
            { name: "End of Season Clearance", date: "Aug 15 - Sep 30", discount: "40-70%" },
            { name: "Labor Day", date: "Aug 30 - Sep 5", discount: "30-50%" },
            { name: "Early Season (limited)", date: "Mar 1-15", discount: "10-20%" }
        ],
        tip: "Buy at end of summer for next year. August-September clearance prices are 40-70% off. Stores need to clear inventory for holiday items."
    },
    'furniture': {
        name: 'Indoor Furniture',
        icon: '🛋️',
        bestMonths: [1, 2, 7, 8], // New year, Presidents, summer
        events: [
            { name: "New Year Sales", date: "Jan 1-15", discount: "20-40%" },
            { name: "President's Day", date: "Feb 14-20", discount: "25-45%" },
            { name: "Summer Clearance", date: "Jul 15 - Aug 15", discount: "30-50%" },
            { name: "Black Friday", date: "Nov 27-30", discount: "25-40%" }
        ],
        tip: "January and February are prime time as stores clear out old inventory. July-August summer clearances are excellent for sofas and bedroom sets."
    },
    'winter-gear': {
        name: 'Winter Gear',
        icon: '🧥',
        bestMonths: [1, 2, 3], // Post-season
        events: [
            { name: "Post-Holiday Clearance", date: "Jan 1-31", discount: "40-60%" },
            { name: "End of Winter", date: "Feb 15 - Mar 15", discount: "50-70%" },
            { name: "Pre-Season", date: "Sep 1-30", discount: "10-20%" }
        ],
        tip: "Buy winter gear in late winter for next year. January-March clearance prices are unbeatable. Avoid buying in October-December (peak season)."
    },
    'gym': {
        name: 'Gym Equipment',
        icon: '🏋️',
        bestMonths: [2, 3, 5, 11], // Post-resolution, Memorial, Black Friday
        events: [
            { name: "Post-Resolution Sales", date: "Feb 15 - Mar 15", discount: "20-40%" },
            { name: "Memorial Day", date: "May 22-28", discount: "15-30%" },
            { name: "Black Friday", date: "Nov 27-30", discount: "25-45%" },
            { name: "Cyber Monday", date: "Dec 1", discount: "20-40%" }
        ],
        tip: "Avoid January (resolution season = high demand, low discounts). February-March is ideal as motivation fades and retailers discount."
    },
    'school': {
        name: 'School Supplies',
        icon: '📚',
        bestMonths: [7, 8], // Back to school
        events: [
            { name: "Back to School Sales", date: "Jul 15 - Aug 31", discount: "20-40%" },
            { name: "Tax-Free Weekends", date: "Varies by state", discount: "5-10% (tax)" },
            { name: "Post-School Clearance", date: "Sep 15-30", discount: "50-70%" }
        ],
        tip: "August has the best selection. Late September has clearance prices but limited selection. Stock up on basics in September for next year."
    },
    'tools': {
        name: 'Tools & Hardware',
        icon: '🔧',
        bestMonths: [6, 9, 11], // Father's Day, Labor Day, Black Friday
        events: [
            { name: "Father's Day", date: "Jun 10-15", discount: "15-30%" },
            { name: "Labor Day", date: "Aug 30 - Sep 5", discount: "20-35%" },
            { name: "Black Friday", date: "Nov 27-30", discount: "30-50%" }
        ],
        tip: "Father's Day deals on power tools are often overlooked. Black Friday has the deepest discounts but Labor Day has solid deals without the crowds."
    },
    'luggage': {
        name: 'Luggage',
        icon: '🧳',
        bestMonths: [1, 9, 10, 11], // Post-holiday, fall
        events: [
            { name: "Post-Holiday Sales", date: "Jan 1-15", discount: "30-50%" },
            { name: "Fall Sales", date: "Sep 15 - Oct 15", discount: "20-40%" },
            { name: "Black Friday", date: "Nov 27-30", discount: "40-60%" }
        ],
        tip: "January is ideal (post-holiday travel, clearance season). Avoid buying March-June (spring/summer travel demand keeps prices high)."
    }
};

// Sample wishlist items
let wishlistItems = [
    { id: 1, name: "Queen Mattress", category: "mattresses", addedDate: "2026-01-15" },
    { id: 2, name: "65\" Samsung TV", category: "tvs", addedDate: "2026-02-01" },
    { id: 3, name: "Patio Dining Set", category: "outdoor", addedDate: "2026-02-10" },
    { id: 4, name: "Stand Mixer", category: "appliances", addedDate: "2026-02-18" }
];

// Calculate wait score (0-100, higher = wait longer)
function calculateWaitScore(category) {
    const data = categoryData[category];
    if (!data) return 50;
    
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // 1-12
    const currentDay = now.getDate();
    
    // Find distance to nearest best month
    let minDistance = 12;
    for (const bestMonth of data.bestMonths) {
        let distance = bestMonth - currentMonth;
        if (distance < 0) distance += 12;
        if (distance === 0) {
            // We're in a good month
            return Math.floor(Math.random() * 20) + 10; // 10-30 (buy now range)
        }
        minDistance = Math.min(minDistance, distance);
    }
    
    // Convert distance to score
    // 1 month away = 70-80
    // 2-3 months = 50-70
    // 4+ months = 30-50
    if (minDistance === 1) {
        return Math.floor(Math.random() * 15) + 75; // 75-90 (wait, deal coming soon!)
    } else if (minDistance <= 3) {
        return Math.floor(Math.random() * 20) + 55; // 55-75 (consider waiting)
    } else {
        return Math.floor(Math.random() * 20) + 35; // 35-55 (neutral, no great deal soon)
    }
}

// Get wait score class
function getWaitScoreClass(score) {
    if (score <= 30) return 'buy-now';
    if (score <= 50) return 'neutral';
    if (score <= 75) return 'wait';
    return 'wait-long';
}

// Get wait score label
function getWaitScoreLabel(score) {
    if (score <= 30) return 'Buy Now';
    if (score <= 50) return 'Okay';
    if (score <= 75) return 'Wait';
    return 'Wait!';
}

// Get next deal event for category
function getNextDeal(category) {
    const data = categoryData[category];
    if (!data || !data.events.length) return null;
    
    // For demo, just return first future event
    return data.events[0];
}

// Get days until next deal
function getDaysUntilDeal(category) {
    const data = categoryData[category];
    if (!data) return null;
    
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    
    let minDays = 365;
    for (const bestMonth of data.bestMonths) {
        let monthsAway = bestMonth - currentMonth;
        if (monthsAway <= 0) monthsAway += 12;
        const daysAway = monthsAway * 30; // Approximation
        minDays = Math.min(minDays, daysAway);
    }
    
    return minDays;
}

// Render wishlist
function renderWishlist() {
    const container = document.getElementById('wishlistItems');
    
    if (wishlistItems.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <div class="empty-state-text">No items in your wishlist yet. Add something you want to buy!</div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = wishlistItems.map(item => {
        const data = categoryData[item.category] || { name: 'Other', icon: '📦' };
        const score = calculateWaitScore(item.category);
        const scoreClass = getWaitScoreClass(score);
        const scoreLabel = getWaitScoreLabel(score);
        const nextDeal = getNextDeal(item.category);
        const daysUntil = getDaysUntilDeal(item.category);
        
        return `
            <div class="wishlist-item" onclick="showItemDetail(${item.id})">
                <div class="wishlist-item-header">
                    <div class="wishlist-item-info">
                        <div class="wishlist-item-name">${data.icon} ${item.name}</div>
                        <div class="wishlist-item-category">${data.name}</div>
                    </div>
                    <div class="wait-score ${scoreClass}">
                        <span class="wait-score-value">${score}</span>
                        <span class="wait-score-label">${scoreLabel}</span>
                    </div>
                </div>
                <div class="wishlist-item-timing">
                    ${nextDeal ? `
                        <div class="timing-detail">
                            <span class="timing-detail-icon">🎯</span>
                            <span>Next: ${nextDeal.name} (${nextDeal.date})</span>
                        </div>
                    ` : ''}
                    ${daysUntil ? `
                        <div class="timing-detail">
                            <span class="timing-detail-icon">⏱️</span>
                            <span>~${daysUntil} days until deal window</span>
                        </div>
                    ` : ''}
                </div>
                <div class="wishlist-item-actions" onclick="event.stopPropagation()">
                    <button class="action-btn" onclick="showItemDetail(${item.id})">View Details</button>
                    <button class="action-btn" onclick="setAlert(${item.id})">Set Alert</button>
                    <button class="action-btn delete" onclick="removeItem(${item.id})">Remove</button>
                </div>
            </div>
        `;
    }).join('');
}

// Show item detail modal
function showItemDetail(itemId) {
    const item = wishlistItems.find(i => i.id === itemId);
    if (!item) return;
    
    const data = categoryData[item.category] || { name: 'Other', icon: '📦', events: [], tip: '' };
    const score = calculateWaitScore(item.category);
    const scoreClass = getWaitScoreClass(score);
    
    let explanation = '';
    if (score <= 30) {
        explanation = "Great time to buy! You're in or near a typical discount window for this category.";
    } else if (score <= 50) {
        explanation = "Okay to buy if you need it now. No major sales imminent, but prices are average.";
    } else if (score <= 75) {
        explanation = "Consider waiting. A better deal window is coming within the next few months.";
    } else {
        explanation = "Wait if you can! Major sales are coming soon. Buying now means leaving money on the table.";
    }
    
    const modal = document.getElementById('itemModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${data.icon} ${item.name}</h2>
            <p class="modal-category">${data.name}</p>
        </div>
        <div class="modal-body">
            <div class="modal-score-section" style="background: var(--${scoreClass === 'buy-now' ? 'success' : scoreClass === 'wait-long' ? 'danger' : scoreClass === 'wait' ? 'warning' : 'info'}-bg); color: var(--${scoreClass === 'buy-now' ? 'success' : scoreClass === 'wait-long' ? 'danger' : scoreClass === 'wait' ? 'warning' : 'info'});">
                <div class="modal-score-value">${score}</div>
                <div class="modal-score-label">Wait Score</div>
                <div class="modal-score-explanation">${explanation}</div>
            </div>
            
            <h3 style="margin-bottom: 12px; font-size: 1rem;">Upcoming Deal Events</h3>
            <div class="modal-timing-list">
                ${data.events.map(event => `
                    <div class="modal-timing-item">
                        <span class="modal-timing-event">${event.name}</span>
                        <span class="modal-timing-date">${event.date} (${event.discount} off)</span>
                    </div>
                `).join('')}
            </div>
            
            ${data.tip ? `
                <div style="margin-top: 20px; padding: 16px; background: var(--bg-card); border-radius: 10px;">
                    <strong style="display: block; margin-bottom: 8px;">💡 Pro Tip</strong>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5;">${data.tip}</p>
                </div>
            ` : ''}
        </div>
        <div class="modal-actions">
            <button class="modal-btn modal-btn-secondary" onclick="closeModal()">Close</button>
            <button class="modal-btn modal-btn-primary" onclick="setAlert(${item.id}); closeModal();">🔔 Set Alert</button>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('itemModal').classList.remove('active');
}

// Add item
function addItem() {
    const nameInput = document.getElementById('itemInput');
    const categorySelect = document.getElementById('categorySelect');
    
    const name = nameInput.value.trim();
    const category = categorySelect.value;
    
    if (!name || !category) {
        alert('Please enter an item name and select a category.');
        return;
    }
    
    const newItem = {
        id: Date.now(),
        name: name,
        category: category,
        addedDate: new Date().toISOString().split('T')[0]
    };
    
    wishlistItems.unshift(newItem);
    renderWishlist();
    updateStats();
    
    nameInput.value = '';
    categorySelect.value = '';
}

// Remove item
function removeItem(itemId) {
    wishlistItems = wishlistItems.filter(i => i.id !== itemId);
    renderWishlist();
    updateStats();
}

// Set alert (placeholder)
function setAlert(itemId) {
    const item = wishlistItems.find(i => i.id === itemId);
    if (item) {
        alert(`Alert set! We'll notify you when ${item.name} enters a prime buying window.`);
    }
}

// Update stats
function updateStats() {
    // Calculate potential savings (rough estimate)
    const savings = wishlistItems.reduce((total, item) => {
        const data = categoryData[item.category];
        if (!data) return total;
        // Estimate average price and savings
        const avgPrice = 500; // Placeholder
        const avgDiscount = 0.35;
        return total + (avgPrice * avgDiscount);
    }, 0);
    
    document.querySelector('.stat-value').textContent = `$${Math.round(savings)}`;
    document.querySelectorAll('.stat-value')[1].textContent = wishlistItems.length;
    
    // Count items with high wait scores
    const dealscoming = wishlistItems.filter(item => calculateWaitScore(item.category) >= 70).length;
    document.querySelectorAll('.stat-value')[2].textContent = dealscoming;
}

// Event listeners
document.getElementById('addBtn').addEventListener('click', addItem);
document.getElementById('itemInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('itemModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('itemModal')) closeModal();
});

// Initialize
renderWishlist();
updateStats();
