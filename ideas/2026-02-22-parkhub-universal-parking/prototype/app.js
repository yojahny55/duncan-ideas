// ParkHub — Universal Parking App
// Interactive Prototype

// State
let currentScreen = 'home-screen';
let selectedDuration = 2;
let selectedPrice = 8;
let activeSession = false;
let timerInterval = null;
let remainingSeconds = 6332; // ~1:45:32

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
    
    // Update nav
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    if (screenId === 'home-screen') {
        document.querySelector('.nav-btn:nth-child(1)').classList.add('active');
    } else if (screenId === 'scanner-screen') {
        document.querySelector('.nav-btn:nth-child(2)').classList.add('active');
    } else if (screenId === 'history-screen') {
        document.querySelector('.nav-btn:nth-child(3)').classList.add('active');
    }
}

function goHome() {
    showScreen('home-screen');
}

function showScanner() {
    showScreen('scanner-screen');
}

function showHistory() {
    showScreen('history-screen');
}

function showSettings() {
    alert('Account settings would open here:\n\n• Profile\n• Payment Methods\n• Vehicles\n• Notifications\n• Senior Mode\n• Support');
}

function showZoneInput() {
    const zone = prompt('Enter parking zone number:', '4521');
    if (zone) {
        simulateScan();
    }
}

function showNearby() {
    alert('📍 Find Parking Near You\n\nThis would show a map with:\n• Available lots nearby\n• Real-time availability\n• Price comparison\n• Reserve in advance');
}

// Vehicle Selection
function selectVehicle(element) {
    document.querySelectorAll('.vehicle-card').forEach(card => {
        card.classList.remove('selected');
    });
    element.classList.add('selected');
}

function addVehicle() {
    alert('Add New Vehicle\n\n• License Plate: ____\n• Nickname: ____\n• Vehicle Type: Car/Truck/Motorcycle');
}

// Quick Park
function quickPark(location, provider) {
    document.getElementById('detected-location').textContent = location;
    document.getElementById('detected-provider').textContent = provider;
    showScreen('payment-screen');
}

// Scanner
function simulateScan() {
    // Simulate QR code detection
    const providers = ['ParkMobile', 'PayByPhone', 'SpotHero', 'Flowbird'];
    const locations = [
        'Downtown Tampa - Lot B',
        'Channelside Garage',
        'Hyde Park Village',
        'Tampa Convention Center'
    ];
    
    const provider = providers[Math.floor(Math.random() * providers.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    
    document.getElementById('detected-location').textContent = location;
    document.getElementById('detected-provider').textContent = provider;
    
    // Visual feedback
    const scanBtn = document.querySelector('.scanner-frame');
    scanBtn.style.borderColor = '#00C853';
    
    setTimeout(() => {
        showScreen('payment-screen');
    }, 500);
}

// Duration Selection
function selectDuration(hours, price) {
    selectedDuration = hours;
    selectedPrice = price;
    
    document.querySelectorAll('.duration-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.duration-btn').classList.add('active');
    
    document.getElementById('total-amount').textContent = '$' + price.toFixed(2);
}

// Payment
function confirmPayment() {
    const location = document.getElementById('detected-location').textContent;
    
    // Update success screen
    document.getElementById('success-location').textContent = location;
    document.getElementById('success-duration').textContent = selectedDuration + ' hours';
    document.getElementById('success-paid').textContent = '$' + selectedPrice.toFixed(2);
    
    // Calculate expiry time
    const now = new Date();
    const expiry = new Date(now.getTime() + selectedDuration * 60 * 60 * 1000);
    const expiryStr = expiry.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    document.getElementById('success-expires').textContent = expiryStr;
    
    // Store session data
    activeSession = true;
    remainingSeconds = selectedDuration * 60 * 60;
    
    showScreen('success-screen');
}

function goHomeWithSession() {
    // Show active session card
    document.getElementById('active-session').style.display = 'block';
    document.getElementById('session-location-text').textContent = 
        document.getElementById('success-location').textContent;
    
    // Start timer
    startTimer();
    
    showScreen('home-screen');
}

// Timer
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        remainingSeconds--;
        
        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer-value').textContent = '0:00:00';
            alert('⚠️ Parking Expired!\n\nExtend now to avoid a ticket.');
            return;
        }
        
        // Format time
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;
        
        const timeStr = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timer-value').textContent = timeStr;
        
        // Update progress bar
        const totalSeconds = selectedDuration * 60 * 60;
        const percentage = (remainingSeconds / totalSeconds) * 100;
        document.getElementById('timer-bar').style.width = percentage + '%';
        
        // Color changes based on time remaining
        const timerValue = document.getElementById('timer-value');
        const timerBar = document.getElementById('timer-bar');
        
        if (remainingSeconds < 900) { // < 15 min
            timerValue.style.color = '#FF3B30';
            timerBar.style.background = '#FF3B30';
        } else if (remainingSeconds < 1800) { // < 30 min
            timerValue.style.color = '#FF9500';
            timerBar.style.background = '#FF9500';
        }
    }, 1000);
}

function extendTime() {
    const options = ['+ 30 min ($2)', '+ 1 hour ($4)', '+ 2 hours ($8)', 'Max time ($15)'];
    const choice = prompt('Extend Parking:\n\n1. + 30 min ($2)\n2. + 1 hour ($4)\n3. + 2 hours ($8)\n4. Max time ($15)\n\nEnter 1-4:');
    
    if (choice) {
        const extensions = [1800, 3600, 7200, 14400];
        const idx = parseInt(choice) - 1;
        if (idx >= 0 && idx < 4) {
            remainingSeconds += extensions[idx];
            alert('✅ Time extended!\n\nYour parking has been extended.');
        }
    }
}

function findCar() {
    showScreen('findcar-screen');
}

function addParkingPhoto() {
    alert('📷 Camera would open here\n\nTake a photo of:\n• Your parking spot\n• The level/section sign\n• Nearby landmarks');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check if there's an active session
    if (activeSession) {
        document.getElementById('active-session').style.display = 'block';
        startTimer();
    }
});

// Keyboard shortcuts for demo
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case '1':
            goHome();
            break;
        case '2':
            showScanner();
            break;
        case '3':
            showHistory();
            break;
        case 's':
            simulateScan();
            break;
        case 'p':
            confirmPayment();
            break;
    }
});

console.log('🅿️ ParkHub Prototype');
console.log('Keyboard shortcuts: 1=Home, 2=Scan, 3=History, s=SimulateScan, p=Pay');
