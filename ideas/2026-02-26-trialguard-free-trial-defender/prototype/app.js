// TrialGuard - Free Trial Defense System
// Prototype JavaScript

// Sample Data
const trials = [
    {
        id: 1,
        name: 'Netflix',
        icon: '🎬',
        price: 15.49,
        startDate: new Date('2026-01-28'),
        endDate: new Date('2026-02-27'),
        difficulty: 'Medium',
        cancelUrl: 'https://netflix.com/account',
        steps: [
            'Go to <a href="#">netflix.com/account</a>',
            'Click "Cancel Membership"',
            'Confirm cancellation',
            'You can still watch until Feb 27'
        ]
    },
    {
        id: 2,
        name: 'Spotify Premium',
        icon: '🎵',
        price: 10.99,
        startDate: new Date('2026-02-10'),
        endDate: new Date('2026-03-10'),
        difficulty: 'Easy',
        cancelUrl: 'https://spotify.com/account',
        steps: [
            'Go to <a href="#">spotify.com/account</a>',
            'Scroll to "Your plan"',
            'Click "Cancel Premium"',
            'Confirm - you keep Premium until Mar 10'
        ]
    },
    {
        id: 3,
        name: 'Adobe Creative Cloud',
        icon: '🎨',
        price: 54.99,
        startDate: new Date('2026-02-20'),
        endDate: new Date('2026-02-27'),
        difficulty: 'Hard',
        cancelUrl: 'https://account.adobe.com',
        steps: [
            'Go to <a href="#">account.adobe.com</a>',
            'Click "Manage plan"',
            'Select "Cancel plan"',
            '<strong>Warning:</strong> They will offer discounts - stay firm!',
            'Confirm final cancellation'
        ]
    }
];

const history = [
    {
        name: 'Hulu',
        icon: '📺',
        endDate: new Date('2026-02-15'),
        verdict: 'cancelled',
        saved: 17.99
    },
    {
        name: 'Canva Pro',
        icon: '🖼️',
        endDate: new Date('2026-02-01'),
        verdict: 'converted',
        price: 12.99
    },
    {
        name: 'Audible',
        icon: '🎧',
        endDate: new Date('2026-01-20'),
        verdict: 'forgot',
        lost: 14.95
    },
    {
        name: 'NordVPN',
        icon: '🔐',
        endDate: new Date('2026-01-10'),
        verdict: 'cancelled',
        saved: 11.99
    }
];

// DOM Elements
const trialsGrid = document.getElementById('trialsGrid');
const timeline = document.getElementById('timeline');
const historyList = document.getElementById('historyList');
const addTrialBtn = document.getElementById('addTrialBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const detailOverlay = document.getElementById('detailOverlay');
const closeDetail = document.getElementById('closeDetail');
const trialForm = document.getElementById('trialForm');
const quickAddChips = document.querySelectorAll('.chip');
const alertBanner = document.getElementById('alertBanner');
const dismissAlert = document.getElementById('dismissAlert');
const trialLengthSelect = document.getElementById('trialLength');
const endDateInput = document.getElementById('endDate');

// Helper Functions
function getDaysRemaining(endDate) {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end - now;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

function getUrgencyClass(daysRemaining) {
    if (daysRemaining <= 1) return 'urgent';
    if (daysRemaining <= 3) return 'warning';
    return '';
}

function getProgressPercent(startDate, endDate) {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const total = end - start;
    const elapsed = now - start;
    return Math.min(100, Math.max(0, (elapsed / total) * 100));
}

// Render Trial Cards
function renderTrials() {
    trialsGrid.innerHTML = trials.map(trial => {
        const daysRemaining = getDaysRemaining(trial.endDate);
        const urgencyClass = getUrgencyClass(daysRemaining);
        const progress = getProgressPercent(trial.startDate, trial.endDate);
        const circumference = 2 * Math.PI * 24;
        const offset = circumference - (progress / 100) * circumference;
        
        return `
            <div class="trial-card ${urgencyClass}" data-id="${trial.id}">
                <div class="trial-card-header">
                    <div class="trial-icon">${trial.icon}</div>
                    <div class="trial-info">
                        <h3>${trial.name}</h3>
                        <span class="trial-price">$${trial.price.toFixed(2)}/month after trial</span>
                    </div>
                </div>
                <div class="trial-countdown">
                    <div class="countdown-text">
                        <span class="countdown-days">${daysRemaining}</span>
                        <span class="countdown-label">${daysRemaining === 1 ? 'day left' : 'days left'}</span>
                    </div>
                    <div class="countdown-progress">
                        <svg viewBox="0 0 56 56">
                            <circle class="bg" cx="28" cy="28" r="24"/>
                            <circle class="progress" cx="28" cy="28" r="24"
                                stroke-dasharray="${circumference}"
                                stroke-dashoffset="${offset}"/>
                        </svg>
                    </div>
                </div>
                <div class="trial-actions">
                    <button class="btn btn-danger" onclick="event.stopPropagation(); showDetail(${trial.id})">Cancel Now</button>
                    <button class="btn btn-ghost" onclick="event.stopPropagation(); keepTrial(${trial.id})">Keep</button>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers for cards
    document.querySelectorAll('.trial-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            showDetail(id);
        });
    });
}

// Render Timeline
function renderTimeline() {
    const events = [];
    
    trials.forEach(trial => {
        const daysRemaining = getDaysRemaining(trial.endDate);
        
        // Add alerts for each trial
        if (daysRemaining > 7) {
            events.push({
                date: new Date(trial.endDate.getTime() - 7 * 24 * 60 * 60 * 1000),
                text: `<strong>${trial.name}</strong> trial ends in 7 days`,
                type: 'normal'
            });
        }
        if (daysRemaining > 3) {
            events.push({
                date: new Date(trial.endDate.getTime() - 3 * 24 * 60 * 60 * 1000),
                text: `<strong>${trial.name}</strong> - 3 days to decide!`,
                type: 'warning'
            });
        }
        if (daysRemaining > 0) {
            events.push({
                date: new Date(trial.endDate.getTime() - 1 * 24 * 60 * 60 * 1000),
                text: `⚠️ <strong>${trial.name}</strong> charges tomorrow!`,
                type: 'danger'
            });
        }
    });
    
    // Sort by date
    events.sort((a, b) => a.date - b.date);
    
    // Filter to upcoming events only
    const now = new Date();
    const upcomingEvents = events.filter(e => e.date >= now).slice(0, 5);
    
    timeline.innerHTML = upcomingEvents.map(event => `
        <div class="timeline-item ${event.type}">
            <div class="timeline-date">${formatDate(event.date)}</div>
            <div class="timeline-content">${event.text}</div>
        </div>
    `).join('');
}

// Render History
function renderHistory() {
    historyList.innerHTML = history.map(item => {
        let verdictClass, verdictText;
        switch (item.verdict) {
            case 'cancelled':
                verdictClass = 'verdict-cancelled';
                verdictText = `Cancelled — Saved $${item.saved.toFixed(2)}`;
                break;
            case 'converted':
                verdictClass = 'verdict-converted';
                verdictText = 'Converted to paid';
                break;
            case 'forgot':
                verdictClass = 'verdict-forgot';
                verdictText = `Forgot — Lost $${item.lost.toFixed(2)}`;
                break;
        }
        
        return `
            <div class="history-item">
                <div class="history-icon">${item.icon}</div>
                <div class="history-info">
                    <div class="history-name">${item.name}</div>
                    <div class="history-date">Ended ${formatDate(item.endDate)}</div>
                </div>
                <span class="history-verdict ${verdictClass}">${verdictText}</span>
            </div>
        `;
    }).join('');
}

// Show Trial Detail Modal
function showDetail(id) {
    const trial = trials.find(t => t.id === id);
    if (!trial) return;
    
    const daysRemaining = getDaysRemaining(trial.endDate);
    const progress = getProgressPercent(trial.startDate, trial.endDate);
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (progress / 100) * circumference;
    
    document.getElementById('detailIcon').textContent = trial.icon;
    document.getElementById('detailName').textContent = trial.name;
    document.getElementById('detailStatus').textContent = daysRemaining <= 1 ? 'URGENT - Ends Tomorrow!' : 'Active Trial';
    document.getElementById('detailStatus').style.color = daysRemaining <= 1 ? 'var(--color-danger)' : 'var(--color-warning)';
    
    document.getElementById('countdownDays').textContent = daysRemaining;
    document.getElementById('countdownDays').nextElementSibling.textContent = daysRemaining === 1 ? 'day left' : 'days left';
    document.getElementById('progressCircle').style.strokeDashoffset = offset;
    
    document.getElementById('detailEndDate').textContent = formatDate(trial.endDate);
    document.getElementById('detailPrice').textContent = `$${trial.price.toFixed(2)}/month`;
    
    const diffEl = document.getElementById('detailDifficulty');
    diffEl.textContent = trial.difficulty;
    diffEl.className = `info-value difficulty-${trial.difficulty.toLowerCase()}`;
    
    document.getElementById('cancelSteps').innerHTML = trial.steps.map(step => `<li>${step}</li>`).join('');
    
    detailOverlay.classList.add('active');
}

// Keep Trial (convert to subscription)
function keepTrial(id) {
    const trial = trials.find(t => t.id === id);
    if (!trial) return;
    
    if (confirm(`Are you sure you want to keep ${trial.name}? You'll be charged $${trial.price.toFixed(2)}/month after your trial ends.`)) {
        // Move to history as converted
        history.unshift({
            name: trial.name,
            icon: trial.icon,
            endDate: trial.endDate,
            verdict: 'converted',
            price: trial.price
        });
        
        // Remove from active trials
        const index = trials.findIndex(t => t.id === id);
        if (index > -1) trials.splice(index, 1);
        
        // Re-render
        renderTrials();
        renderTimeline();
        renderHistory();
        updateStats();
        
        alert(`${trial.name} marked as "keeping". We won't remind you about this one.`);
    }
}

// Update Stats
function updateStats() {
    document.getElementById('activeTrials').textContent = trials.length;
    
    // Calculate total saved from cancelled trials this month
    const thisMonth = new Date();
    thisMonth.setDate(1);
    const savedThisMonth = history
        .filter(h => h.verdict === 'cancelled' && new Date(h.endDate) >= thisMonth)
        .reduce((sum, h) => sum + (h.saved || 0), 0);
    document.getElementById('totalSaved').textContent = `$${savedThisMonth.toFixed(2)}`;
}

// Event Listeners
addTrialBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    
    // Set default end date to 30 days from now
    const defaultEnd = new Date();
    defaultEnd.setDate(defaultEnd.getDate() + 30);
    endDateInput.value = defaultEnd.toISOString().split('T')[0];
});

closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    trialForm.reset();
});

closeDetail.addEventListener('click', () => {
    detailOverlay.classList.remove('active');
});

document.getElementById('cancelTrialBtn').addEventListener('click', () => {
    alert('Opening cancellation page...\n\nIn the full app, this would:\n1. Open the direct cancel link\n2. Show step-by-step instructions\n3. Track when you confirm cancellation');
    detailOverlay.classList.remove('active');
});

document.getElementById('keepTrialBtn').addEventListener('click', () => {
    detailOverlay.classList.remove('active');
});

dismissAlert.addEventListener('click', () => {
    alertBanner.classList.add('hidden');
});

// Quick add chips
quickAddChips.forEach(chip => {
    chip.addEventListener('click', () => {
        const service = chip.dataset.service;
        const days = parseInt(chip.dataset.days);
        
        document.getElementById('serviceName').value = service;
        trialLengthSelect.value = days.toString();
        
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + days);
        endDateInput.value = endDate.toISOString().split('T')[0];
    });
});

// Trial length change
trialLengthSelect.addEventListener('change', () => {
    const days = parseInt(trialLengthSelect.value);
    if (!isNaN(days)) {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + days);
        endDateInput.value = endDate.toISOString().split('T')[0];
    }
});

// Form submission
trialForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const serviceName = document.getElementById('serviceName').value;
    const endDate = new Date(endDateInput.value);
    const price = parseFloat(document.getElementById('monthlyPrice').value) || 9.99;
    
    // Add new trial
    const newTrial = {
        id: Date.now(),
        name: serviceName,
        icon: '📱',
        price: price,
        startDate: new Date(),
        endDate: endDate,
        difficulty: 'Unknown',
        cancelUrl: '#',
        steps: [
            'Go to the service\'s account settings',
            'Look for "Cancel" or "Subscription" section',
            'Follow the cancellation flow',
            'Confirm cancellation'
        ]
    };
    
    trials.push(newTrial);
    
    // Re-render
    renderTrials();
    renderTimeline();
    updateStats();
    
    // Close modal
    modalOverlay.classList.remove('active');
    trialForm.reset();
    
    // Show confirmation
    alert(`🛡️ ${serviceName} is now protected!\n\nYou'll receive reminders at:\n• 7 days before\n• 3 days before\n• 1 day before\n• Day of expiration`);
});

// Close modals on overlay click
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

detailOverlay.addEventListener('click', (e) => {
    if (e.target === detailOverlay) {
        detailOverlay.classList.remove('active');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTrials();
    renderTimeline();
    renderHistory();
    updateStats();
    
    // Check for urgent trials and show/hide banner
    const urgentTrials = trials.filter(t => getDaysRemaining(t.endDate) <= 1);
    if (urgentTrials.length === 0) {
        alertBanner.classList.add('hidden');
    }
});
