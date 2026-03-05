// StormHaven - Emergency Shelter Finder
// Interactive Prototype

// Shelter Data
const shelters = {
    community: {
        name: 'Moore Community Center',
        type: 'Underground Safe Room',
        address: '234 Main Street, Moore, OK 73160',
        icon: '🏢',
        badge: 'Official Public Shelter'
    },
    church: {
        name: 'First Baptist Church',
        type: 'Basement Shelter',
        address: '456 Church Ave, Moore, OK 73160',
        icon: '⛪',
        badge: 'Community Shelter'
    },
    school: {
        name: 'Lincoln Elementary',
        type: 'FEMA Safe Room',
        address: '789 School Rd, Moore, OK 73160',
        icon: '🏫',
        badge: 'School Shelter'
    },
    walmart: {
        name: 'Walmart Supercenter',
        type: 'Interior Corridor',
        address: '1200 Commerce Way, Moore, OK 73160',
        icon: '🏪',
        badge: 'Business Shelter'
    }
};

// Show Emergency Mode
function showEmergencyMode() {
    const overlay = document.getElementById('emergencyOverlay');
    const banner = document.getElementById('alertBanner');
    
    overlay.classList.add('active');
    
    // Change alert to danger
    banner.classList.remove('warning');
    banner.classList.add('danger');
    banner.querySelector('.alert-title').textContent = 'TORNADO WARNING';
    banner.querySelector('.alert-subtitle').textContent = 'Seek shelter immediately';
    
    // Add haptic feedback simulation
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
}

// Hide Emergency Mode
function hideEmergencyMode() {
    const overlay = document.getElementById('emergencyOverlay');
    overlay.classList.remove('active');
}

// Show Shelter Detail
function showShelterDetail(shelterId) {
    const modal = document.getElementById('shelterDetailModal');
    const shelter = shelters[shelterId];
    
    if (shelter) {
        document.getElementById('detailName').textContent = shelter.name;
        document.getElementById('detailAddress').textContent = shelter.address;
        document.getElementById('detailType').textContent = shelter.type;
        document.querySelector('.detail-icon').textContent = shelter.icon;
        document.querySelector('.detail-badge').textContent = '⭐ ' + shelter.badge;
    }
    
    modal.classList.add('active');
}

// Hide Shelter Detail
function hideShelterDetail() {
    const modal = document.getElementById('shelterDetailModal');
    modal.classList.remove('active');
}

// Show Filters
function showFilters() {
    const modal = document.getElementById('filterModal');
    modal.classList.add('active');
}

// Hide Filters
function hideFilters() {
    const modal = document.getElementById('filterModal');
    modal.classList.remove('active');
}

// Reset Filters
function resetFilters() {
    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
        const checkbox = chip.querySelector('input');
        if (checkbox) {
            checkbox.checked = chip.textContent.includes('All');
        }
        chip.classList.remove('active');
        if (chip.textContent.includes('All')) {
            chip.classList.add('active');
        }
    });
    
    document.getElementById('distanceRange').value = 5;
    document.querySelector('.range-value').textContent = 'Within 5 miles';
}

// Apply Filters
function applyFilters() {
    hideFilters();
    showToast('Filters applied');
}

// Start Navigation
function startNavigation() {
    hideShelterDetail();
    hideEmergencyMode();
    showToast('🧭 Opening navigation...');
    
    // In a real app, this would open native maps
    setTimeout(() => {
        showToast('Demo: Would open Maps app');
    }, 1500);
}

// Call Shelter
function callShelter() {
    showToast('📞 Calling (405) 555-0123...');
}

// Check In
function checkIn() {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-message').textContent = 'Checked in! Stay safe.';
    toast.querySelector('.toast-icon').textContent = '✅';
    showToast();
}

// Report Issue
function reportIssue() {
    showToast('🚩 Report submitted. Thanks!');
}

// Show Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    
    if (message) {
        // Split emoji and text
        const emojiMatch = message.match(/^([\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}])/u);
        if (emojiMatch) {
            toast.querySelector('.toast-icon').textContent = emojiMatch[0];
            toast.querySelector('.toast-message').textContent = message.slice(emojiMatch[0].length).trim();
        } else {
            toast.querySelector('.toast-icon').textContent = '✓';
            toast.querySelector('.toast-message').textContent = message;
        }
    }
    
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 2500);
}

// Show Shelter List View (for demo)
function showShelterListView() {
    const list = document.getElementById('shelterList');
    const map = document.getElementById('mapContainer');
    
    // Toggle view
    if (list.style.maxHeight === '100%') {
        list.style.maxHeight = '50%';
        map.style.display = 'block';
    } else {
        list.style.maxHeight = '100%';
        map.style.display = 'none';
    }
}

// Distance Range Slider
document.getElementById('distanceRange')?.addEventListener('input', function(e) {
    document.querySelector('.range-value').textContent = `Within ${e.target.value} miles`;
});

// Filter Chip Toggle
document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', function() {
        this.classList.toggle('active');
        const checkbox = this.querySelector('input');
        if (checkbox) {
            checkbox.checked = !checkbox.checked;
        }
    });
});

// Simulate real-time updates
let stormETA = 8;
function updateStormETA() {
    const etaElement = document.querySelector('.eta-value');
    if (etaElement && document.getElementById('emergencyOverlay').classList.contains('active')) {
        stormETA = Math.max(0, stormETA - 1);
        etaElement.textContent = `${stormETA} minute${stormETA !== 1 ? 's' : ''}`;
        
        if (stormETA <= 3) {
            document.querySelector('.eta-message').textContent = 'MOVE NOW!';
            document.querySelector('.eta-message').style.background = 'rgba(255,255,255,0.4)';
        }
    }
}

// Update every minute (simulated)
setInterval(updateStormETA, 60000);

// Keyboard shortcuts for demo
document.addEventListener('keydown', (e) => {
    if (e.key === 'e' || e.key === 'E') {
        showEmergencyMode();
    }
    if (e.key === 'Escape') {
        hideEmergencyMode();
        hideShelterDetail();
        hideFilters();
    }
});

// Console welcome message
console.log('%c🌪️ StormHaven Prototype', 'font-size: 20px; font-weight: bold; color: #dc2626;');
console.log('Press E to trigger Emergency Mode');
console.log('Press ESC to close modals');
