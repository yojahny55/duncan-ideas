/**
 * WakeStop - GPS Proximity Alarm
 * Interactive Prototype
 */

// State
let state = {
  alarmActive: true,
  destination: {
    name: 'Home',
    address: '1234 Oak Street, Tampa, FL',
    icon: '🏠',
    distance: 2.4,
    eta: 8
  }
};

// DOM Elements
const alarmCard = document.getElementById('alarmCard');
const alarmToggle = document.getElementById('alarmToggle');
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');
const destinationName = document.getElementById('destinationName');
const destinationAddress = document.getElementById('destinationAddress');
const distanceValue = document.getElementById('distanceValue');
const etaValue = document.getElementById('etaValue');
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const toast = document.getElementById('toast');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  startDistanceSimulation();
});

// Event Listeners
function initEventListeners() {
  alarmToggle.addEventListener('change', handleAlarmToggle);
  
  // Keyboard accessibility for search modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('visible')) {
      closeSearchModal();
    }
  });
}

// Alarm Toggle
function handleAlarmToggle() {
  state.alarmActive = alarmToggle.checked;
  
  if (state.alarmActive) {
    alarmCard.classList.add('active');
    statusIndicator.classList.add('active');
    statusText.classList.add('active');
    statusText.textContent = 'Alarm Active';
    showToast('Alarm activated! We\'ll wake you up.', 'success');
  } else {
    alarmCard.classList.remove('active');
    statusIndicator.classList.remove('active');
    statusText.classList.remove('active');
    statusText.textContent = 'Alarm Inactive';
    showToast('Alarm deactivated');
  }
}

// Select Location
function selectLocation(name, address, icon) {
  state.destination = {
    name,
    address,
    icon,
    distance: (Math.random() * 5 + 0.5).toFixed(1),
    eta: Math.floor(Math.random() * 15 + 3)
  };
  
  // Update UI
  destinationName.textContent = name;
  destinationAddress.textContent = address;
  distanceValue.textContent = state.destination.distance;
  etaValue.textContent = `~${state.destination.eta}`;
  
  // Update icon in card
  const destIcon = document.querySelector('.destination-icon');
  destIcon.innerHTML = icon;
  
  // Activate alarm
  if (!state.alarmActive) {
    alarmToggle.checked = true;
    handleAlarmToggle();
  } else {
    showToast(`Destination set: ${name}`, 'success');
  }
  
  closeSearchModal();
}

// Search Modal
function openSearchModal() {
  searchModal.classList.add('visible');
  document.body.style.overflow = 'hidden';
  
  // Focus search input after animation
  setTimeout(() => {
    searchInput.focus();
  }, 300);
}

function closeSearchModal(event) {
  if (event && event.target !== searchModal) return;
  
  searchModal.classList.remove('visible');
  document.body.style.overflow = '';
  searchInput.value = '';
}

// Toast Notification
function showToast(message, type = '') {
  toast.textContent = message;
  toast.className = 'toast';
  
  if (type) {
    toast.classList.add(type);
  }
  
  toast.classList.add('visible');
  
  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
}

// Distance Simulation (simulates movement toward destination)
let simulationInterval;

function startDistanceSimulation() {
  if (simulationInterval) clearInterval(simulationInterval);
  
  simulationInterval = setInterval(() => {
    if (!state.alarmActive) return;
    
    let distance = parseFloat(distanceValue.textContent);
    
    if (distance > 0.1) {
      // Decrease distance slowly
      distance = Math.max(0.1, distance - (Math.random() * 0.1));
      distanceValue.textContent = distance.toFixed(1);
      
      // Update ETA
      const newEta = Math.max(1, Math.ceil(distance * 3.5));
      etaValue.textContent = `~${newEta}`;
      
      // Check for proximity alerts
      if (distance <= 0.5 && distance > 0.4) {
        showToast('🔔 Approaching destination - 500m away!', 'warning');
      } else if (distance <= 0.2) {
        showToast('🚨 Almost there! Get ready!', 'danger');
        triggerProximityAlert();
      }
    }
  }, 3000);
}

// Proximity Alert Animation
function triggerProximityAlert() {
  const card = document.querySelector('.alarm-card');
  card.style.animation = 'none';
  card.offsetHeight; // Trigger reflow
  card.style.animation = 'alertPulse 0.5s ease-in-out 3';
  
  // Add keyframes dynamically
  if (!document.getElementById('alertAnimation')) {
    const style = document.createElement('style');
    style.id = 'alertAnimation';
    style.textContent = `
      @keyframes alertPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); box-shadow: 0 0 20px rgba(239, 68, 68, 0.4); }
      }
    `;
    document.head.appendChild(style);
  }
}

// Reset distance for demo
function resetDistance() {
  state.destination.distance = (Math.random() * 5 + 2).toFixed(1);
  distanceValue.textContent = state.destination.distance;
  etaValue.textContent = `~${Math.ceil(state.destination.distance * 3.5)}`;
  showToast('Distance reset for demo');
}

// Expose functions to window for onclick handlers
window.selectLocation = selectLocation;
window.openSearchModal = openSearchModal;
window.closeSearchModal = closeSearchModal;
window.showToast = showToast;
window.resetDistance = resetDistance;
