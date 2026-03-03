// TapSpot - Interactive Prototype

document.addEventListener('DOMContentLoaded', () => {
    // Sample water source data
    const waterSources = [
        { id: 1, type: 'fountain', name: 'Central Park Fountain', lat: 40, lng: 35, emoji: '💧' },
        { id: 2, type: 'filler', name: 'Bryant Park', lat: 55, lng: 60, emoji: '🍼' },
        { id: 3, type: 'fountain', name: 'Grand Central', lat: 30, lng: 70, emoji: '💧' },
        { id: 4, type: 'business', name: 'Whole Foods', lat: 70, lng: 25, emoji: '🏪' },
        { id: 5, type: 'tap', name: 'Times Square Station', lat: 45, lng: 80, emoji: '🚰' },
        { id: 6, type: 'fountain', name: 'NYC Library', lat: 65, lng: 50, emoji: '💧' },
        { id: 7, type: 'filler', name: 'Union Square', lat: 25, lng: 55, emoji: '🍼' },
        { id: 8, type: 'fountain', name: 'Madison Square Park', lat: 80, lng: 40, emoji: '💧' },
    ];

    // Elements
    const mapCanvas = document.getElementById('mapCanvas');
    const sourceDetail = document.getElementById('sourceDetail');
    const filterModal = document.getElementById('filterModal');
    const addModal = document.getElementById('addModal');
    const toast = document.getElementById('successToast');
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');
    
    // Initialize map markers
    function initMap() {
        // Add user location marker
        const userMarker = document.createElement('div');
        userMarker.className = 'map-marker user-location';
        userMarker.style.left = '50%';
        userMarker.style.top = '50%';
        mapCanvas.appendChild(userMarker);
        
        // Add water source markers
        waterSources.forEach(source => {
            const marker = document.createElement('div');
            marker.className = 'map-marker';
            marker.innerHTML = source.emoji;
            marker.style.left = `${source.lat}%`;
            marker.style.top = `${source.lng}%`;
            marker.dataset.id = source.id;
            
            marker.addEventListener('click', () => {
                // Remove active from all markers
                document.querySelectorAll('.map-marker').forEach(m => m.classList.remove('active'));
                // Add active to clicked marker
                marker.classList.add('active');
                // Show detail sheet
                showSourceDetail(source);
            });
            
            mapCanvas.appendChild(marker);
        });
    }
    
    // Show source detail
    function showSourceDetail(source) {
        sourceDetail.classList.add('active');
    }
    
    // Hide source detail
    function hideSourceDetail() {
        sourceDetail.classList.remove('active');
        document.querySelectorAll('.map-marker').forEach(m => m.classList.remove('active'));
    }
    
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const viewId = item.dataset.view;
            
            // Update nav
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            
            // Update views
            views.forEach(v => v.classList.remove('active'));
            document.getElementById(`${viewId}-view`).classList.add('active');
            
            // Hide detail sheet when switching views
            hideSourceDetail();
        });
    });
    
    // Filter button
    document.getElementById('filterBtn').addEventListener('click', () => {
        filterModal.classList.add('active');
    });
    
    document.getElementById('closeFilter').addEventListener('click', () => {
        filterModal.classList.remove('active');
    });
    
    document.getElementById('applyFilters').addEventListener('click', () => {
        filterModal.classList.remove('active');
    });
    
    // Add source button
    document.getElementById('addSourceBtn').addEventListener('click', () => {
        addModal.classList.add('active');
    });
    
    document.getElementById('closeAdd').addEventListener('click', () => {
        addModal.classList.remove('active');
    });
    
    document.getElementById('cancelAdd').addEventListener('click', () => {
        addModal.classList.remove('active');
    });
    
    document.getElementById('submitSource').addEventListener('click', () => {
        addModal.classList.remove('active');
        showToast();
    });
    
    // Type selector in add modal
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Filter chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            chip.classList.toggle('active');
        });
    });
    
    // Locate button
    document.getElementById('locateBtn').addEventListener('click', () => {
        const userMarker = document.querySelector('.user-location');
        userMarker.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            userMarker.style.animation = '';
        }, 500);
    });
    
    // Show toast
    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    // Click outside to close detail sheet
    mapCanvas.addEventListener('click', (e) => {
        if (e.target === mapCanvas) {
            hideSourceDetail();
        }
    });
    
    // Source cards in list view
    document.querySelectorAll('.source-card').forEach(card => {
        card.addEventListener('click', () => {
            // Switch to map view
            navItems.forEach(n => n.classList.remove('active'));
            document.querySelector('[data-view="map"]').classList.add('active');
            views.forEach(v => v.classList.remove('active'));
            document.getElementById('map-view').classList.add('active');
            
            // Show detail sheet
            sourceDetail.classList.add('active');
        });
    });
    
    // Close modals when clicking overlay
    [filterModal, addModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Swipe to close detail sheet
    let touchStartY = 0;
    sourceDetail.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });
    
    sourceDetail.addEventListener('touchmove', (e) => {
        const touchY = e.touches[0].clientY;
        const diff = touchY - touchStartY;
        
        if (diff > 50) {
            hideSourceDetail();
        }
    });
    
    // Initialize
    initMap();
    
    // Demo: Show detail sheet after 1 second
    setTimeout(() => {
        const firstMarker = document.querySelector('.map-marker:not(.user-location)');
        if (firstMarker) {
            firstMarker.click();
        }
    }, 1000);
});
