/**
 * BurnRate - Real-time Meeting Cost Calculator
 * Tracks the cost of meetings in real-time based on attendee hourly rates.
 */

// ============================================
// State Management
// ============================================

const state = {
    participants: [],
    isRunning: false,
    isPaused: false,
    startTime: null,
    pausedTime: 0,
    totalCost: 0,
    currentMeetingId: null,
    history: JSON.parse(localStorage.getItem('burnrate_history') || '[]')
};

// ============================================
// DOM Elements
// ============================================

const elements = {
    costAmount: document.getElementById('costAmount'),
    costRate: document.getElementById('costRate'),
    costMilestone: document.getElementById('costMilestone'),
    timerDisplay: document.getElementById('timerDisplay'),
    startBtn: document.getElementById('startBtn'),
    pauseBtn: document.getElementById('pauseBtn'),
    stopBtn: document.getElementById('stopBtn'),
    participantList: document.getElementById('participantList'),
    participantCount: document.getElementById('participantCount'),
    emptyState: document.getElementById('emptyState'),
    participantName: document.getElementById('participantName'),
    participantRate: document.getElementById('participantRate'),
    addParticipantBtn: document.getElementById('addParticipantBtn'),
    historyBtn: document.getElementById('historyBtn'),
    historyModal: document.getElementById('historyModal'),
    historyList: document.getElementById('historyList'),
    closeModal: document.getElementById('closeModal'),
    clearHistoryBtn: document.getElementById('clearHistoryBtn'),
    toastContainer: document.getElementById('toastContainer')
};

// ============================================
// Utility Functions
// ============================================

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatCurrency(amount) {
    return amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const mins = Math.floor(seconds / 60);
    const hours = Math.floor(mins / 60);
    
    const displayHours = String(hours).padStart(2, '0');
    const displayMins = String(mins % 60).padStart(2, '0');
    const displaySecs = String(seconds % 60).padStart(2, '0');
    
    return `${displayHours}:${displayMins}:${displaySecs}`;
}

function getInitials(name) {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function showToast(message, type = 'default') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    elements.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 200);
    }, 3000);
}

// ============================================
// Participant Management
// ============================================

function addParticipant(name, hourlyRate) {
    if (!hourlyRate || hourlyRate <= 0) {
        showToast('Please enter a valid hourly rate', 'error');
        return false;
    }

    const participant = {
        id: generateId(),
        name: name || `Person ${state.participants.length + 1}`,
        hourlyRate: parseFloat(hourlyRate)
    };

    state.participants.push(participant);
    renderParticipants();
    updateCostRate();
    showToast(`Added ${participant.name}`, 'success');
    return true;
}

function removeParticipant(id) {
    const index = state.participants.findIndex(p => p.id === id);
    if (index > -1) {
        const participant = state.participants[index];
        state.participants.splice(index, 1);
        renderParticipants();
        updateCostRate();
        showToast(`Removed ${participant.name}`);
    }
}

function renderParticipants() {
    elements.participantCount.textContent = `${state.participants.length} ${state.participants.length === 1 ? 'person' : 'people'}`;

    if (state.participants.length === 0) {
        elements.emptyState.hidden = false;
        // Remove all participant items but keep empty state
        const items = elements.participantList.querySelectorAll('.participant-item');
        items.forEach(item => item.remove());
        return;
    }

    elements.emptyState.hidden = true;

    // Clear and rebuild list
    elements.participantList.innerHTML = '';

    state.participants.forEach(participant => {
        const item = document.createElement('div');
        item.className = 'participant-item';
        item.dataset.id = participant.id;
        item.innerHTML = `
            <div class="participant-info">
                <div class="participant-avatar">${getInitials(participant.name)}</div>
                <div class="participant-details">
                    <span class="participant-name">${participant.name}</span>
                    <span class="participant-rate">$${participant.hourlyRate}/hr</span>
                </div>
            </div>
            <button class="participant-remove" aria-label="Remove ${participant.name}" data-id="${participant.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
            </button>
        `;
        elements.participantList.appendChild(item);
    });
}

// ============================================
// Timer & Cost Calculation
// ============================================

let timerInterval = null;

function getTotalHourlyRate() {
    return state.participants.reduce((sum, p) => sum + p.hourlyRate, 0);
}

function updateCostRate() {
    const totalRate = getTotalHourlyRate();
    const ratePerMinute = totalRate / 60;
    elements.costRate.textContent = `$${formatCurrency(ratePerMinute)}/min with ${state.participants.length} ${state.participants.length === 1 ? 'person' : 'people'}`;
}

function getElapsedTime() {
    if (!state.startTime) return 0;
    const now = state.isPaused ? state.pausedAt : Date.now();
    return now - state.startTime - state.pausedTime;
}

function calculateCost() {
    const elapsedMs = getElapsedTime();
    const elapsedHours = elapsedMs / (1000 * 60 * 60);
    return getTotalHourlyRate() * elapsedHours;
}

function updateDisplay() {
    const elapsed = getElapsedTime();
    const cost = calculateCost();

    // Update timer
    elements.timerDisplay.textContent = formatTime(elapsed);

    // Update cost
    elements.costAmount.textContent = formatCurrency(cost);
    state.totalCost = cost;

    // Update cost styling based on amount
    elements.costAmount.classList.remove('burning', 'hot');
    if (cost >= 500) {
        elements.costAmount.classList.add('hot');
    } else if (cost >= 100) {
        elements.costAmount.classList.add('burning');
    }

    // Check milestones
    checkMilestones(cost);
}

const milestones = [100, 250, 500, 1000, 2500, 5000];
let lastMilestone = 0;

function checkMilestones(cost) {
    for (const milestone of milestones) {
        if (cost >= milestone && lastMilestone < milestone) {
            lastMilestone = milestone;
            elements.costMilestone.hidden = false;
            elements.costMilestone.querySelector('.milestone-text').textContent = 
                `🔥 $${milestone} burned!`;
            showToast(`💸 Meeting just hit $${milestone}!`, 'warning');
            
            // Hide milestone after 5 seconds
            setTimeout(() => {
                elements.costMilestone.hidden = true;
            }, 5000);
            break;
        }
    }
}

function startMeeting() {
    if (state.participants.length === 0) {
        showToast('Add at least one participant first', 'error');
        return;
    }

    state.isRunning = true;
    state.isPaused = false;
    state.startTime = Date.now();
    state.pausedTime = 0;
    state.currentMeetingId = generateId();
    lastMilestone = 0;

    elements.startBtn.hidden = true;
    elements.pauseBtn.hidden = false;
    elements.stopBtn.hidden = false;

    timerInterval = setInterval(updateDisplay, 100);
    showToast('Meeting started! 🔥');
}

function pauseMeeting() {
    if (state.isPaused) {
        // Resume
        state.isPaused = false;
        state.pausedTime += Date.now() - state.pausedAt;
        elements.pauseBtn.querySelector('span').textContent = 'Pause';
        elements.pauseBtn.querySelector('svg').innerHTML = `
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
        `;
        timerInterval = setInterval(updateDisplay, 100);
        showToast('Meeting resumed');
    } else {
        // Pause
        state.isPaused = true;
        state.pausedAt = Date.now();
        clearInterval(timerInterval);
        elements.pauseBtn.querySelector('span').textContent = 'Resume';
        elements.pauseBtn.querySelector('svg').innerHTML = `
            <polygon points="5 3 19 12 5 21 5 3"/>
        `;
        showToast('Meeting paused');
    }
}

function stopMeeting() {
    clearInterval(timerInterval);

    // Save to history
    const meeting = {
        id: state.currentMeetingId,
        date: new Date().toISOString(),
        duration: getElapsedTime(),
        cost: state.totalCost,
        participants: state.participants.length,
        participantNames: state.participants.map(p => p.name)
    };

    state.history.unshift(meeting);
    if (state.history.length > 50) state.history.pop(); // Keep last 50
    localStorage.setItem('burnrate_history', JSON.stringify(state.history));

    // Reset state
    state.isRunning = false;
    state.isPaused = false;
    state.startTime = null;
    state.pausedTime = 0;
    state.currentMeetingId = null;

    // Reset UI
    elements.startBtn.hidden = false;
    elements.pauseBtn.hidden = true;
    elements.stopBtn.hidden = true;
    elements.pauseBtn.querySelector('span').textContent = 'Pause';
    elements.costMilestone.hidden = true;

    showToast(`Meeting ended! Total cost: $${formatCurrency(meeting.cost)}`, 'success');
}

// ============================================
// History Modal
// ============================================

function openHistoryModal() {
    renderHistory();
    elements.historyModal.hidden = false;
    document.body.style.overflow = 'hidden';
}

function closeHistoryModal() {
    elements.historyModal.hidden = true;
    document.body.style.overflow = '';
}

function renderHistory() {
    if (state.history.length === 0) {
        elements.historyList.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📋</div>
                <p class="empty-text">No meetings recorded yet</p>
                <p class="empty-hint">Completed meetings will appear here</p>
            </div>
        `;
        return;
    }

    elements.historyList.innerHTML = state.history.map(meeting => {
        const date = new Date(meeting.date);
        const dateStr = date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        });

        return `
            <div class="history-item">
                <div class="history-date">${dateStr}</div>
                <div class="history-cost">$${formatCurrency(meeting.cost)}</div>
                <div class="history-details">
                    ${formatTime(meeting.duration)} • ${meeting.participants} ${meeting.participants === 1 ? 'person' : 'people'}
                </div>
            </div>
        `;
    }).join('');
}

function clearHistory() {
    if (confirm('Clear all meeting history?')) {
        state.history = [];
        localStorage.removeItem('burnrate_history');
        renderHistory();
        showToast('History cleared');
    }
}

// ============================================
// Event Listeners
// ============================================

// Timer controls
elements.startBtn.addEventListener('click', startMeeting);
elements.pauseBtn.addEventListener('click', pauseMeeting);
elements.stopBtn.addEventListener('click', stopMeeting);

// Preset buttons
document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const role = btn.dataset.role;
        const rate = parseFloat(btn.dataset.rate);
        const roleName = role.charAt(0).toUpperCase() + role.slice(1);
        addParticipant(roleName, rate);
    });
});

// Add custom participant
elements.addParticipantBtn.addEventListener('click', () => {
    const name = elements.participantName.value.trim();
    const rate = elements.participantRate.value;
    
    if (addParticipant(name, rate)) {
        elements.participantName.value = '';
        elements.participantRate.value = '';
    }
});

// Enter key to add participant
elements.participantRate.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        elements.addParticipantBtn.click();
    }
});

elements.participantName.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        elements.participantRate.focus();
    }
});

// Remove participant (event delegation)
elements.participantList.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.participant-remove');
    if (removeBtn) {
        removeParticipant(removeBtn.dataset.id);
    }
});

// History modal
elements.historyBtn.addEventListener('click', openHistoryModal);
elements.closeModal.addEventListener('click', closeHistoryModal);
elements.clearHistoryBtn.addEventListener('click', clearHistory);

elements.historyModal.addEventListener('click', (e) => {
    if (e.target === elements.historyModal) {
        closeHistoryModal();
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !elements.historyModal.hidden) {
        closeHistoryModal();
    }
});

// Warn before leaving during active meeting
window.addEventListener('beforeunload', (e) => {
    if (state.isRunning) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// ============================================
// Initialization
// ============================================

function init() {
    renderParticipants();
    updateCostRate();
    
    // Add some demo participants for showcase
    // Uncomment for demo mode:
    // addParticipant('Alice (Engineer)', 80);
    // addParticipant('Bob (Manager)', 100);
    // addParticipant('Carol (Designer)', 70);
}

init();
