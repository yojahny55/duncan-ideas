// Sample data for slots
const slotsData = [
    {
        id: 1,
        provider: "Luna's Hair Studio",
        category: "hair",
        service: "Haircut & Style",
        emoji: "💇‍♀️",
        rating: 4.9,
        reviews: 342,
        time: "2:30 PM",
        duration: "45 min",
        distance: "0.8 mi",
        originalPrice: 65,
        currentPrice: 49,
        discount: 25,
        address: "123 Main St, Tampa, FL"
    },
    {
        id: 2,
        provider: "Zen Spa Tampa",
        category: "spa",
        service: "Swedish Massage",
        emoji: "💆",
        rating: 4.8,
        reviews: 189,
        time: "3:00 PM",
        duration: "60 min",
        distance: "1.2 mi",
        originalPrice: 120,
        currentPrice: 89,
        discount: 26,
        address: "456 Wellness Blvd, Tampa, FL"
    },
    {
        id: 3,
        provider: "Pawfect Grooming",
        category: "pets",
        service: "Full Dog Grooming",
        emoji: "🐕",
        rating: 4.7,
        reviews: 256,
        time: "4:15 PM",
        duration: "90 min",
        distance: "2.1 mi",
        originalPrice: 85,
        currentPrice: 68,
        discount: 20,
        address: "789 Pet Lane, Tampa, FL"
    },
    {
        id: 4,
        provider: "FitZone Personal Training",
        category: "fitness",
        service: "Personal Training Session",
        emoji: "💪",
        rating: 4.9,
        reviews: 128,
        time: "5:00 PM",
        duration: "60 min",
        distance: "0.5 mi",
        originalPrice: 80,
        currentPrice: 55,
        discount: 31,
        address: "321 Fitness Ave, Tampa, FL"
    },
    {
        id: 5,
        provider: "Nails by Nina",
        category: "beauty",
        service: "Gel Manicure & Pedicure",
        emoji: "💅",
        rating: 4.8,
        reviews: 412,
        time: "3:45 PM",
        duration: "75 min",
        distance: "1.5 mi",
        originalPrice: 75,
        currentPrice: 59,
        discount: 21,
        address: "567 Beauty Way, Tampa, FL"
    },
    {
        id: 6,
        provider: "Tampa Dental Care",
        category: "medical",
        service: "Teeth Cleaning",
        emoji: "🦷",
        rating: 4.6,
        reviews: 98,
        time: "4:00 PM",
        duration: "45 min",
        distance: "3.2 mi",
        originalPrice: 150,
        currentPrice: 120,
        discount: 20,
        address: "890 Health Plaza, Tampa, FL"
    },
    {
        id: 7,
        provider: "Elite Auto Detail",
        category: "auto",
        service: "Interior & Exterior Detail",
        emoji: "🚗",
        rating: 4.9,
        reviews: 176,
        time: "2:00 PM",
        duration: "120 min",
        distance: "4.0 mi",
        originalPrice: 180,
        currentPrice: 139,
        discount: 23,
        address: "234 Auto Center Dr, Tampa, FL"
    }
];

// State
let currentFilter = 'all';
let currentTime = 'now';

// DOM Elements
const slotsGrid = document.getElementById('slotsGrid');
const modalOverlay = document.getElementById('modalOverlay');
const slotModal = document.getElementById('slotModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const successOverlay = document.getElementById('successOverlay');
const successClose = document.getElementById('successClose');
const successMessage = document.getElementById('successMessage');
const notificationBanner = document.getElementById('notificationBanner');
const enableNotifications = document.getElementById('enableNotifications');
const dismissNotifications = document.getElementById('dismissNotifications');
const categoryPills = document.querySelectorAll('.category-pill');
const timePills = document.querySelectorAll('.time-pill');

// Render slots
function renderSlots(filter = 'all') {
    const filtered = filter === 'all' 
        ? slotsData 
        : slotsData.filter(slot => slot.category === filter);
    
    slotsGrid.innerHTML = filtered.map(slot => `
        <div class="slot-card" data-id="${slot.id}">
            <div class="slot-header">
                <div class="slot-provider">
                    <div class="provider-avatar">${slot.emoji}</div>
                    <div class="provider-info">
                        <h3>${slot.provider}</h3>
                        <p>${slot.service}</p>
                    </div>
                </div>
                <div class="slot-discount">-${slot.discount}%</div>
            </div>
            <div class="slot-details">
                <div class="slot-detail">
                    <span class="slot-detail-icon">🕐</span>
                    <span>${slot.time} • ${slot.duration}</span>
                </div>
                <div class="slot-detail">
                    <span class="slot-detail-icon">📍</span>
                    <span>${slot.distance}</span>
                </div>
                <div class="rating">
                    <span class="rating-star">★</span>
                    <span>${slot.rating}</span>
                    <span class="rating-count">(${slot.reviews})</span>
                </div>
            </div>
            <div class="slot-footer">
                <div class="slot-price">
                    <span class="price-original">$${slot.originalPrice}</span>
                    <span class="price-current">$${slot.currentPrice}</span>
                </div>
                <button class="book-btn" onclick="event.stopPropagation(); quickBook(${slot.id})">Book Now</button>
            </div>
        </div>
    `).join('');

    // Add click listeners to cards
    document.querySelectorAll('.slot-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            openSlotModal(id);
        });
    });
}

// Open slot modal
function openSlotModal(id) {
    const slot = slotsData.find(s => s.id === id);
    if (!slot) return;

    const savings = slot.originalPrice - slot.currentPrice;

    modalContent.innerHTML = `
        <div class="modal-provider">
            <div class="modal-avatar">${slot.emoji}</div>
            <div class="modal-provider-info">
                <h2>${slot.provider}</h2>
                <p>${slot.service}</p>
                <div class="rating">
                    <span class="rating-star">★</span>
                    <span>${slot.rating}</span>
                    <span class="rating-count">(${slot.reviews} reviews)</span>
                </div>
            </div>
        </div>
        
        <div class="modal-details">
            <div class="modal-detail-row">
                <span class="modal-detail-label">📍 Location</span>
                <span class="modal-detail-value">${slot.address}</span>
            </div>
            <div class="modal-detail-row">
                <span class="modal-detail-label">🕐 Time</span>
                <span class="modal-detail-value">${slot.time} (${slot.duration})</span>
            </div>
            <div class="modal-detail-row">
                <span class="modal-detail-label">📏 Distance</span>
                <span class="modal-detail-value">${slot.distance} away</span>
            </div>
        </div>

        <div class="modal-pricing">
            <div class="modal-price-info">
                <span class="modal-original">Was $${slot.originalPrice}</span>
                <span class="modal-current">$${slot.currentPrice}</span>
                <span class="modal-savings">You save $${savings} (${slot.discount}% off)</span>
            </div>
        </div>

        <button class="modal-book-btn" onclick="confirmBooking(${slot.id})">
            Confirm Booking - $${slot.currentPrice}
        </button>
    `;

    modalOverlay.classList.add('active');
}

// Close modal
function closeModal() {
    modalOverlay.classList.remove('active');
}

// Quick book (from card button)
function quickBook(id) {
    confirmBooking(id);
}

// Confirm booking
function confirmBooking(id) {
    const slot = slotsData.find(s => s.id === id);
    if (!slot) return;

    closeModal();
    
    successMessage.textContent = `${slot.service} at ${slot.provider} booked for ${slot.time} today!`;
    successOverlay.classList.add('active');
}

// Close success modal
function closeSuccess() {
    successOverlay.classList.remove('active');
}

// Category filter
categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentFilter = pill.dataset.category;
        renderSlots(currentFilter);
    });
});

// Time filter
timePills.forEach(pill => {
    pill.addEventListener('click', () => {
        timePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentTime = pill.dataset.time;
        // In a real app, this would filter by time
    });
});

// Modal close handlers
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

// Success close handler
successClose.addEventListener('click', closeSuccess);
successOverlay.addEventListener('click', (e) => {
    if (e.target === successOverlay) closeSuccess();
});

// Notification banner handlers
enableNotifications.addEventListener('click', () => {
    notificationBanner.classList.remove('active');
    // In a real app, this would request notification permissions
    alert('🔔 Notifications enabled! You\'ll get alerts when matching slots appear.');
});

dismissNotifications.addEventListener('click', () => {
    notificationBanner.classList.remove('active');
});

// Show notification banner after delay
setTimeout(() => {
    notificationBanner.classList.add('active');
}, 3000);

// Keyboard handlers
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeSuccess();
    }
});

// Simulate new slot notification
function simulateNewSlot() {
    const newSlot = {
        id: Date.now(),
        provider: "Flash Deal Salon",
        category: "hair",
        service: "Express Blowout",
        emoji: "💇‍♀️",
        rating: 4.7,
        reviews: 89,
        time: "NOW!",
        duration: "30 min",
        distance: "0.3 mi",
        originalPrice: 45,
        currentPrice: 25,
        discount: 44,
        address: "Quick Cut Plaza, Tampa, FL"
    };
    
    slotsData.unshift(newSlot);
    renderSlots(currentFilter);
    
    // Flash effect on new card
    const firstCard = document.querySelector('.slot-card');
    if (firstCard) {
        firstCard.style.boxShadow = '0 0 20px rgba(244, 63, 94, 0.5)';
        setTimeout(() => {
            firstCard.style.boxShadow = '';
        }, 2000);
    }
}

// Demo: Add a new slot after 10 seconds
setTimeout(simulateNewSlot, 10000);

// Initial render
renderSlots();

// Console welcome message
console.log(`
🕐 LastMinute Slots - Prototype
================================
This is a functional prototype demonstrating:
• Real-time slot discovery
• Category & time filtering
• Slot detail modals
• One-tap booking flow
• Push notification prompts

Created: January 30, 2026
Idea source: @RachaelRad on X/Twitter
`);
