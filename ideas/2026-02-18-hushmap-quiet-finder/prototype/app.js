// HushMap - Quiet Workspace Finder

// Sample location data
const locations = [
    {
        id: 1,
        name: "Zen Coffee House",
        type: "cafe",
        noiseLevel: 1,
        noiseName: "Silent",
        emoji: "🔇",
        distance: "0.3 mi",
        reports: 24,
        accuracy: 92,
        updated: "5 min ago",
        amenities: { wifi: true, outlets: true, coffee: true, calls: true },
        position: { x: 25, y: 35 },
        hourlyNoise: [1, 1, 2, 2, 3, 2, 2, 1, 1, 1, 1, 1]
    },
    {
        id: 2,
        name: "Central Public Library",
        type: "library",
        noiseLevel: 1,
        noiseName: "Quiet",
        emoji: "🔈",
        distance: "0.5 mi",
        reports: 56,
        accuracy: 96,
        updated: "2 min ago",
        amenities: { wifi: true, outlets: true, coffee: false, calls: false },
        position: { x: 55, y: 25 },
        hourlyNoise: [1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1]
    },
    {
        id: 3,
        name: "The Daily Grind",
        type: "cafe",
        noiseLevel: 3,
        noiseName: "Moderate",
        emoji: "🔉",
        distance: "0.4 mi",
        reports: 18,
        accuracy: 88,
        updated: "12 min ago",
        amenities: { wifi: true, outlets: false, coffee: true, calls: false },
        position: { x: 70, y: 55 },
        hourlyNoise: [2, 2, 3, 4, 4, 3, 3, 3, 2, 2, 2, 2]
    },
    {
        id: 4,
        name: "WorkHub Coworking",
        type: "cowork",
        noiseLevel: 2,
        noiseName: "Quiet",
        emoji: "🔈",
        distance: "0.8 mi",
        reports: 31,
        accuracy: 94,
        updated: "8 min ago",
        amenities: { wifi: true, outlets: true, coffee: true, calls: true },
        position: { x: 35, y: 65 },
        hourlyNoise: [1, 2, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1]
    },
    {
        id: 5,
        name: "Corner Bookstore Cafe",
        type: "cafe",
        noiseLevel: 2,
        noiseName: "Quiet",
        emoji: "🔈",
        distance: "0.6 mi",
        reports: 15,
        accuracy: 90,
        updated: "20 min ago",
        amenities: { wifi: true, outlets: true, coffee: true, calls: true },
        position: { x: 80, y: 30 },
        hourlyNoise: [1, 1, 2, 2, 3, 2, 2, 2, 1, 1, 1, 1]
    },
    {
        id: 6,
        name: "Busy Beans Coffee",
        type: "cafe",
        noiseLevel: 4,
        noiseName: "Loud",
        emoji: "🔊",
        distance: "0.2 mi",
        reports: 42,
        accuracy: 91,
        updated: "3 min ago",
        amenities: { wifi: true, outlets: false, coffee: true, calls: false },
        position: { x: 45, y: 45 },
        hourlyNoise: [2, 3, 4, 5, 4, 4, 4, 3, 3, 2, 2, 2]
    }
];

// DOM Elements
const mapPins = document.getElementById('mapPins');
const cardsContainer = document.getElementById('cardsContainer');
const reportBtn = document.getElementById('reportBtn');
const reportModal = document.getElementById('reportModal');
const modalClose = document.getElementById('modalClose');
const detailModal = document.getElementById('detailModal');
const detailClose = document.getElementById('detailClose');
const submitReport = document.getElementById('submitReport');
const toast = document.getElementById('toast');
const filterChips = document.querySelectorAll('.chip');

let selectedNoiseLevel = null;
let currentFilter = 'all';

// Initialize
function init() {
    renderMapPins();
    renderCards();
    setupEventListeners();
    simulateLocation();
}

// Render map pins
function renderMapPins() {
    mapPins.innerHTML = locations.map(loc => {
        const noiseClass = getNoiseClass(loc.noiseLevel);
        return `
            <div class="map-pin ${noiseClass}" 
                 style="left: ${loc.position.x}%; top: ${loc.position.y}%"
                 data-id="${loc.id}"
                 title="${loc.name}">
                ${getTypeEmoji(loc.type)}
            </div>
        `;
    }).join('');

    // Add click handlers to pins
    document.querySelectorAll('.map-pin').forEach(pin => {
        pin.addEventListener('click', () => {
            const id = parseInt(pin.dataset.id);
            const location = locations.find(l => l.id === id);
            if (location) showDetailModal(location);
        });
    });
}

// Render location cards
function renderCards() {
    const filteredLocations = filterLocations();
    const sortedLocations = [...filteredLocations].sort((a, b) => a.noiseLevel - b.noiseLevel);

    cardsContainer.innerHTML = sortedLocations.map(loc => {
        const noiseClass = getNoiseClass(loc.noiseLevel);
        return `
            <div class="location-card" data-id="${loc.id}">
                <div class="card-header">
                    <div class="card-info">
                        <h3>${loc.name}</h3>
                        <div class="card-meta">
                            <span class="card-type">${getTypeName(loc.type)}</span>
                            <span>${loc.distance}</span>
                        </div>
                    </div>
                    <div class="noise-badge ${noiseClass}">
                        <span>${loc.emoji}</span>
                        <span>${loc.noiseName}</span>
                    </div>
                </div>
                <div class="card-amenities">
                    ${loc.amenities.wifi ? '<span class="amenity">📶 WiFi</span>' : ''}
                    ${loc.amenities.outlets ? '<span class="amenity">🔌 Outlets</span>' : ''}
                    ${loc.amenities.coffee ? '<span class="amenity">☕ Coffee</span>' : ''}
                    ${loc.amenities.calls ? '<span class="amenity">📞 Call-friendly</span>' : ''}
                </div>
                <div class="card-footer">
                    <span class="report-count">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        ${loc.reports} reports today
                    </span>
                    <span>Updated ${loc.updated}</span>
                </div>
            </div>
        `;
    }).join('');

    // Add click handlers to cards
    document.querySelectorAll('.location-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            const location = locations.find(l => l.id === id);
            if (location) showDetailModal(location);
        });
    });
}

// Filter locations
function filterLocations() {
    if (currentFilter === 'all') return locations;
    if (currentFilter === 'quiet') return locations.filter(l => l.noiseLevel <= 2);
    return locations.filter(l => l.type === currentFilter);
}

// Get noise class
function getNoiseClass(level) {
    if (level <= 2) return 'quiet';
    if (level <= 3) return 'moderate';
    return 'loud';
}

// Get type emoji
function getTypeEmoji(type) {
    const emojis = { cafe: '☕', library: '📚', cowork: '💼' };
    return emojis[type] || '📍';
}

// Get type name
function getTypeName(type) {
    const names = { cafe: 'Cafe', library: 'Library', cowork: 'Coworking' };
    return names[type] || 'Workspace';
}

// Show detail modal
function showDetailModal(location) {
    document.getElementById('detailName').textContent = location.name;
    document.getElementById('detailReports').textContent = location.reports;
    document.getElementById('detailAccuracy').textContent = location.accuracy + '%';

    const noiseDisplay = document.getElementById('detailNoiseDisplay');
    noiseDisplay.innerHTML = `
        <span class="noise-emoji-large">${location.emoji}</span>
        <div class="noise-info">
            <span class="noise-level-text">${location.noiseName}</span>
            <span class="noise-updated">Updated ${location.updated}</span>
        </div>
    `;

    // Render noise chart
    const chartContainer = document.getElementById('noiseChart');
    chartContainer.innerHTML = location.hourlyNoise.map(level => {
        const height = (level / 5) * 100;
        const noiseClass = getNoiseClass(level);
        return `<div class="chart-bar ${noiseClass}" style="height: ${height}%"></div>`;
    }).join('');

    // Render amenities
    const amenitiesContainer = document.getElementById('detailAmenities');
    amenitiesContainer.innerHTML = `
        <div class="amenity-item ${location.amenities.wifi ? 'available' : 'unavailable'}">
            📶 ${location.amenities.wifi ? 'Free WiFi' : 'No WiFi'}
        </div>
        <div class="amenity-item ${location.amenities.outlets ? 'available' : 'unavailable'}">
            🔌 ${location.amenities.outlets ? 'Power outlets' : 'No outlets'}
        </div>
        <div class="amenity-item ${location.amenities.coffee ? 'available' : 'unavailable'}">
            ☕ ${location.amenities.coffee ? 'Serves coffee' : 'No drinks'}
        </div>
        <div class="amenity-item ${location.amenities.calls ? 'available' : 'unavailable'}">
            📞 ${location.amenities.calls ? 'Call-friendly' : 'Not for calls'}
        </div>
    `;

    detailModal.classList.add('active');
}

// Setup event listeners
function setupEventListeners() {
    // Report button
    reportBtn.addEventListener('click', () => {
        reportModal.classList.add('active');
    });

    // Close modals
    modalClose.addEventListener('click', () => {
        reportModal.classList.remove('active');
        resetReportModal();
    });

    detailClose.addEventListener('click', () => {
        detailModal.classList.remove('active');
    });

    // Close on overlay click
    [reportModal, detailModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                if (modal === reportModal) resetReportModal();
            }
        });
    });

    // Noise level buttons
    document.querySelectorAll('.noise-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.noise-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedNoiseLevel = parseInt(btn.dataset.level);
            submitReport.disabled = false;
        });
    });

    // Submit report
    submitReport.addEventListener('click', () => {
        if (selectedNoiseLevel) {
            reportModal.classList.remove('active');
            showToast();
            resetReportModal();
        }
    });

    // Filter chips
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentFilter = chip.dataset.filter;
            renderCards();
        });
    });
}

// Simulate location detection
function simulateLocation() {
    const locationEl = document.getElementById('currentLocation');
    setTimeout(() => {
        locationEl.textContent = 'Zen Coffee House';
    }, 1500);
}

// Reset report modal
function resetReportModal() {
    document.querySelectorAll('.noise-btn').forEach(b => b.classList.remove('selected'));
    selectedNoiseLevel = null;
    submitReport.disabled = true;
    document.getElementById('goodForCalls').checked = false;
    document.getElementById('hasOutlets').checked = false;
}

// Show toast notification
function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize app
init();
