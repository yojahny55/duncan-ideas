// DishPick — Know What to Order
// Prototype JavaScript

const data = {
    restaurants: [
        {
            id: 1,
            name: "Bern's Steak House",
            cuisine: "Steakhouse",
            price: "$$$",
            rating: 4.8,
            emoji: "🥩",
            topDish: "Chateaubriand for Two",
            topDishScore: 9.6,
            dishes: [
                { id: 101, name: "Chateaubriand for Two", desc: "Dry-aged 60 days, carved tableside with béarnaise", price: "$145", score: 9.6, ratings: 1247, reorder: 96, emoji: "🥩", tags: ["Melt in your mouth", "Perfect medium-rare", "Worth every penny"] },
                { id: 102, name: "French Onion Soup", desc: "House-made with gruyère crust", price: "$16", score: 9.4, ratings: 892, reorder: 94, emoji: "🍲", tags: ["Best I've had", "Cheese pull heaven", "Generous portion"] },
                { id: 103, name: "Caesar Salad", desc: "Prepared tableside with anchovy dressing", price: "$18", score: 9.2, ratings: 756, reorder: 91, emoji: "🥗", tags: ["Theatrical presentation", "Perfect garlic level"] },
                { id: 104, name: "Filet Mignon", desc: "8oz center cut, butter-poached", price: "$65", score: 9.1, ratings: 1089, reorder: 93, emoji: "🥩" },
                { id: 105, name: "Lobster Tail", desc: "Cold water, drawn butter", price: "$55", score: 8.9, ratings: 634, reorder: 88, emoji: "🦞" },
                { id: 106, name: "Creamed Spinach", desc: "Classic steakhouse style", price: "$12", score: 8.7, ratings: 445, reorder: 85, emoji: "🥬" }
            ]
        },
        {
            id: 2,
            name: "Columbia Restaurant",
            cuisine: "Spanish • Cuban",
            price: "$$",
            rating: 4.6,
            emoji: "🇪🇸",
            topDish: "1905 Salad",
            topDishScore: 9.5,
            dishes: [
                { id: 201, name: "1905 Salad", desc: "Iceberg, ham, swiss, olives, garlic dressing — made tableside", price: "$15", score: 9.5, ratings: 2134, reorder: 97, emoji: "🥗", tags: ["Iconic Tampa dish", "Best salad ever", "The garlic dressing!"] },
                { id: 202, name: "Cuban Sandwich", desc: "The original Tampa Cuban — pressed with love since 1905", price: "$16", score: 9.3, ratings: 1876, reorder: 95, emoji: "🥪", tags: ["Authentic", "Perfect bread", "Crispy perfection"] },
                { id: 203, name: "Pompano en Papillote", desc: "Fresh pompano in parchment with crab and shrimp", price: "$42", score: 9.1, ratings: 567, reorder: 89, emoji: "🐟", tags: ["Show-stopper", "Light and flavorful"] },
                { id: 204, name: "Paella Valenciana", desc: "Saffron rice with chicken, chorizo, seafood", price: "$32", score: 9.0, ratings: 789, reorder: 91, emoji: "🥘" },
                { id: 205, name: "Flan", desc: "Classic caramel custard", price: "$9", score: 8.8, ratings: 1123, reorder: 86, emoji: "🍮" }
            ]
        },
        {
            id: 3,
            name: "Ulele",
            cuisine: "Southern • Seafood",
            price: "$$",
            rating: 4.5,
            emoji: "🦐",
            topDish: "Fire-Roasted Oysters",
            topDishScore: 9.3,
            dishes: [
                { id: 301, name: "Fire-Roasted Oysters", desc: "6 gulf oysters with garlic parmesan butter", price: "$18", score: 9.3, ratings: 1456, reorder: 93, emoji: "🦪", tags: ["Addictive butter", "Perfect char", "Order 2 dozen"] },
                { id: 302, name: "Charred Okra", desc: "Smoked tomato aioli", price: "$12", score: 9.1, ratings: 892, reorder: 90, emoji: "🌶️", tags: ["Converts okra haters", "Crispy not slimy"] },
                { id: 303, name: "Ulele Burger", desc: "Short rib blend, pimento cheese, onion jam", price: "$19", score: 8.9, ratings: 678, reorder: 87, emoji: "🍔" },
                { id: 304, name: "Shrimp & Grits", desc: "Stone-ground grits, tasso ham gravy", price: "$26", score: 8.8, ratings: 934, reorder: 86, emoji: "🦐" }
            ]
        }
    ],
    forYou: [
        { name: "Chateaubriand", restaurant: "Bern's Steak House", score: 9.6, emoji: "🥩" },
        { name: "1905 Salad", restaurant: "Columbia", score: 9.5, emoji: "🥗" },
        { name: "Fire-Roasted Oysters", restaurant: "Ulele", score: 9.3, emoji: "🦪" },
        { name: "Cuban Sandwich", restaurant: "Columbia", score: 9.3, emoji: "🥪" },
        { name: "French Onion Soup", restaurant: "Bern's", score: 9.4, emoji: "🍲" }
    ],
    reviews: [
        { name: "Sarah M.", avatar: "S", rating: 5, date: "2 days ago", text: "This changed how I order at restaurants. Found the best ramen in town thanks to DishPick!" },
        { name: "Mike T.", avatar: "M", rating: 5, date: "1 week ago", text: "Finally, an app that tells me WHAT to order, not just WHERE to go. The Chateaubriand score was spot on." },
        { name: "Emma R.", avatar: "E", rating: 4, date: "2 weeks ago", text: "Great concept! Wish there were more restaurants in my area, but the ones listed are accurate." }
    ]
};

let currentRestaurant = null;
let currentDish = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderTrendingRestaurants();
    renderForYouDishes();
    setupEventListeners();
});

function renderTrendingRestaurants() {
    const container = document.getElementById('trending-restaurants');
    container.innerHTML = data.restaurants.map(r => `
        <div class="restaurant-card" onclick="openRestaurant(${r.id})">
            <div class="restaurant-thumb">${r.emoji}</div>
            <div class="restaurant-card-info">
                <div class="restaurant-card-name">${r.name}</div>
                <div class="restaurant-card-cuisine">${r.cuisine} • ${r.price} • ⭐ ${r.rating}</div>
                <div class="top-dish-preview">
                    🏆 Top dish: <strong>${r.topDish}</strong> (${r.topDishScore})
                </div>
            </div>
        </div>
    `).join('');
}

function renderForYouDishes() {
    const container = document.getElementById('for-you');
    container.innerHTML = data.forYou.map(d => `
        <div class="dish-card">
            <div class="dish-card-image">${d.emoji}</div>
            <div class="dish-card-content">
                <div class="dish-card-name">${d.name}</div>
                <div class="dish-card-restaurant">${d.restaurant}</div>
                <div class="dish-card-score">⭐ ${d.score}</div>
            </div>
        </div>
    `).join('');
}

function openRestaurant(id) {
    currentRestaurant = data.restaurants.find(r => r.id === id);
    if (!currentRestaurant) return;
    
    document.getElementById('restaurant-name').textContent = currentRestaurant.name;
    
    // Update meta
    document.querySelector('.restaurant-meta').innerHTML = `
        <span class="rating">⭐ ${currentRestaurant.rating}</span>
        <span class="cuisine">${currentRestaurant.cuisine}</span>
        <span class="price">${currentRestaurant.price}</span>
    `;
    
    // Render top 3 dishes
    const topDishes = currentRestaurant.dishes.slice(0, 3);
    document.getElementById('top-dishes').innerHTML = topDishes.map((d, i) => `
        <div class="top-dish-item" onclick="openDish(${d.id})">
            <div class="top-dish-rank">${i + 1}</div>
            <div class="top-dish-info">
                <div class="top-dish-name">${d.name}</div>
                <div class="top-dish-desc">${d.desc}</div>
                <div class="top-dish-stats">
                    <span class="score-badge">${d.score}</span>
                    <span>📊 ${d.ratings} ratings</span>
                    <span>🔄 ${d.reorder}% reorder</span>
                </div>
            </div>
            <div class="top-dish-image">${d.emoji}</div>
        </div>
    `).join('');
    
    // Render full menu
    document.getElementById('menu-items').innerHTML = currentRestaurant.dishes.map(d => `
        <div class="menu-item" onclick="openDish(${d.id})">
            <div class="menu-item-info">
                <div class="menu-item-name">
                    ${d.name}
                    ${d.score >= 9.0 ? '<span class="badge badge-gold">👑 Top Pick</span>' : ''}
                </div>
                <div class="menu-item-desc">${d.desc}</div>
                <div class="menu-item-price">${d.price}</div>
            </div>
            <div class="menu-item-score">
                <span class="value">${d.score}</span>
                <span class="label">${d.ratings}</span>
            </div>
        </div>
    `).join('');
    
    showScreen('restaurant');
}

function openDish(id) {
    if (!currentRestaurant) return;
    currentDish = currentRestaurant.dishes.find(d => d.id === id);
    if (!currentDish) return;
    
    document.getElementById('dish-name').textContent = currentDish.name;
    document.getElementById('dish-score').textContent = currentDish.score;
    document.getElementById('dish-ratings').textContent = currentDish.ratings.toLocaleString();
    document.getElementById('dish-reorder').textContent = currentDish.reorder + '%';
    document.getElementById('dish-description').textContent = currentDish.desc;
    
    // Gallery
    document.getElementById('dish-gallery').innerHTML = `
        <div class="main-photo">${currentDish.emoji}</div>
        <div class="side-photos">
            <div class="side-photo">📸</div>
            <div class="side-photo">📸</div>
        </div>
    `;
    
    // Tags
    const tags = currentDish.tags || ["Highly rated", "Worth the price"];
    document.getElementById('highlight-tags').innerHTML = tags.map(t => `
        <span class="highlight-tag">${t}</span>
    `).join('');
    
    // Reviews
    document.getElementById('recent-reviews').innerHTML = data.reviews.map(r => `
        <div class="review-item">
            <div class="review-header">
                <div class="review-avatar">${r.avatar}</div>
                <div class="review-meta">
                    <div class="review-name">${r.name}</div>
                    <div class="review-date">${r.date}</div>
                </div>
                <div class="review-rating">${'★'.repeat(r.rating)}</div>
            </div>
            <div class="review-text">${r.text}</div>
        </div>
    `).join('');
    
    showScreen('dish');
}

function showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`screen-${name}`).classList.add('active');
    
    // Hide rate CTA on non-dish screens
    const rateCta = document.querySelector('.rate-cta');
    if (rateCta) {
        rateCta.style.display = name === 'dish' ? 'flex' : 'none';
    }
}

function showRatingModal() {
    document.getElementById('rating-modal').classList.add('active');
}

function hideRatingModal() {
    document.getElementById('rating-modal').classList.remove('active');
}

function setupEventListeners() {
    // Star rating
    document.querySelectorAll('.rating-stars .star').forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            document.querySelectorAll('.rating-stars .star').forEach((s, i) => {
                s.classList.toggle('active', i < rating);
            });
        });
    });
    
    // Quick tags
    document.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });
    
    // Submit rating
    document.querySelector('.submit-rating')?.addEventListener('click', () => {
        hideRatingModal();
        alert('Thanks for your rating! 🎉');
    });
    
    // Search
    const searchInput = document.getElementById('search-input');
    searchInput?.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase();
            const found = data.restaurants.find(r => 
                r.name.toLowerCase().includes(query) || 
                r.cuisine.toLowerCase().includes(query)
            );
            if (found) {
                openRestaurant(found.id);
            }
        }
    });
    
    // Filter pills
    document.querySelectorAll('.filter-pills .pill').forEach(pill => {
        pill.addEventListener('click', function() {
            document.querySelectorAll('.filter-pills .pill').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            showScreen('search');
        });
    });
}

// Close modal on backdrop click
document.getElementById('rating-modal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        hideRatingModal();
    }
});
