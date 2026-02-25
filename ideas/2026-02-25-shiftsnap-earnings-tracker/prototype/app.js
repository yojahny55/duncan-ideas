// ShiftSnap - App Logic

// State
const state = {
    settings: {
        hourlyRate: 18.00,
        overtimeRate: 1.5,
        otThreshold: 40,
        taxRate: 22,
        nightDiff: 0,
        weekendDiff: 0
    },
    currentShift: null,
    timerInterval: null,
    shifts: []
};

// DOM Elements
const elements = {
    todayAmount: document.getElementById('todayAmount'),
    todayDetail: document.getElementById('todayDetail'),
    clockBtn: document.getElementById('clockBtn'),
    clockIcon: document.getElementById('clockIcon'),
    clockText: document.getElementById('clockText'),
    shiftTimer: document.getElementById('shiftTimer'),
    timerDisplay: document.getElementById('timerDisplay'),
    weekBars: document.getElementById('weekBars'),
    weekTotal: document.getElementById('weekTotal'),
    hoursWorked: document.getElementById('hoursWorked'),
    avgHourly: document.getElementById('avgHourly'),
    tipsTotal: document.getElementById('tipsTotal'),
    shiftsList: document.getElementById('shiftsList'),
    clockOutModal: document.getElementById('clockOutModal'),
    settingsModal: document.getElementById('settingsModal'),
    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toastMessage')
};

// Initialize
function init() {
    loadData();
    renderWeekBars();
    renderShiftsList();
    updateStats();
    bindEvents();
}

// Load persisted data
function loadData() {
    const savedSettings = localStorage.getItem('shiftsnap_settings');
    if (savedSettings) {
        state.settings = JSON.parse(savedSettings);
    }
    
    const savedShifts = localStorage.getItem('shiftsnap_shifts');
    if (savedShifts) {
        state.shifts = JSON.parse(savedShifts);
    }
    
    const currentShift = localStorage.getItem('shiftsnap_current');
    if (currentShift) {
        state.currentShift = JSON.parse(currentShift);
        resumeShift();
    }
    
    // Populate settings fields
    document.getElementById('hourlyRate').value = state.settings.hourlyRate;
    document.getElementById('overtimeRate').value = state.settings.overtimeRate;
    document.getElementById('otThreshold').value = state.settings.otThreshold;
    document.getElementById('taxRate').value = state.settings.taxRate;
    document.getElementById('nightDiff').value = state.settings.nightDiff;
    document.getElementById('weekendDiff').value = state.settings.weekendDiff;
}

// Save data
function saveData() {
    localStorage.setItem('shiftsnap_settings', JSON.stringify(state.settings));
    localStorage.setItem('shiftsnap_shifts', JSON.stringify(state.shifts));
    if (state.currentShift) {
        localStorage.setItem('shiftsnap_current', JSON.stringify(state.currentShift));
    } else {
        localStorage.removeItem('shiftsnap_current');
    }
}

// Bind events
function bindEvents() {
    elements.clockBtn.addEventListener('click', toggleClock);
    document.getElementById('settingsBtn').addEventListener('click', () => openModal('settings'));
    document.getElementById('closeSettings').addEventListener('click', () => closeModal('settings'));
    document.getElementById('closeClockOut').addEventListener('click', () => closeModal('clockOut'));
    document.getElementById('saveSettings').addEventListener('click', saveSettings);
    document.getElementById('saveShift').addEventListener('click', saveShift);
    
    // Tip inputs update preview
    ['cashTips', 'creditTips', 'tipOut'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateEarningsPreview);
    });
    
    // Close modals on backdrop click
    [elements.clockOutModal, elements.settingsModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id.replace('Modal', ''));
            }
        });
    });
}

// Clock in/out toggle
function toggleClock() {
    if (state.currentShift) {
        // Clock out
        endShift();
    } else {
        // Clock in
        startShift();
    }
}

// Start shift
function startShift() {
    state.currentShift = {
        startTime: Date.now(),
        date: new Date().toLocaleDateString()
    };
    
    elements.clockBtn.classList.add('active');
    elements.clockIcon.textContent = '⏹';
    elements.clockText.textContent = 'Clock Out';
    elements.shiftTimer.style.display = 'block';
    
    startTimer();
    saveData();
    showToast('Shift started! 💪');
}

// Resume existing shift
function resumeShift() {
    elements.clockBtn.classList.add('active');
    elements.clockIcon.textContent = '⏹';
    elements.clockText.textContent = 'Clock Out';
    elements.shiftTimer.style.display = 'block';
    startTimer();
}

// End shift
function endShift() {
    state.currentShift.endTime = Date.now();
    
    stopTimer();
    calculateShiftEarnings();
    openModal('clockOut');
}

// Start timer
function startTimer() {
    updateTimerDisplay();
    state.timerInterval = setInterval(updateTimerDisplay, 1000);
}

// Stop timer
function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

// Update timer display
function updateTimerDisplay() {
    if (!state.currentShift) return;
    
    const elapsed = Date.now() - state.currentShift.startTime;
    const hours = Math.floor(elapsed / 3600000);
    const minutes = Math.floor((elapsed % 3600000) / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    
    elements.timerDisplay.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Calculate shift earnings for preview
function calculateShiftEarnings() {
    const duration = state.currentShift.endTime - state.currentShift.startTime;
    const hours = duration / 3600000;
    state.currentShift.hours = hours;
    
    // Calculate hourly pay (simplified - not accounting for weekly OT in demo)
    const hourlyPay = hours * state.settings.hourlyRate;
    state.currentShift.hourlyPay = hourlyPay;
    
    // Display shift time
    const h = Math.floor(hours);
    const m = Math.round((hours % 1) * 60);
    document.getElementById('shiftTimeDisplay').textContent = `${h}h ${m}m`;
    document.getElementById('shiftHoursDetail').textContent = `Regular: ${hours.toFixed(1)}h`;
    
    // Update preview
    updateEarningsPreview();
}

// Update earnings preview in modal
function updateEarningsPreview() {
    if (!state.currentShift) return;
    
    const cashTips = parseFloat(document.getElementById('cashTips').value) || 0;
    const creditTips = parseFloat(document.getElementById('creditTips').value) || 0;
    const tipOut = parseFloat(document.getElementById('tipOut').value) || 0;
    
    const hourlyPay = state.currentShift.hourlyPay || 0;
    const netTips = cashTips + creditTips - tipOut;
    const gross = hourlyPay + netTips;
    const net = gross * (1 - state.settings.taxRate / 100);
    
    document.getElementById('hourlyPayPreview').textContent = formatCurrency(hourlyPay);
    document.getElementById('tipsPreview').textContent = formatCurrency(netTips);
    document.getElementById('grossTotal').textContent = formatCurrency(gross);
    document.getElementById('netTotal').textContent = `~${formatCurrency(net)}`;
}

// Save completed shift
function saveShift() {
    const cashTips = parseFloat(document.getElementById('cashTips').value) || 0;
    const creditTips = parseFloat(document.getElementById('creditTips').value) || 0;
    const tipOut = parseFloat(document.getElementById('tipOut').value) || 0;
    
    const shift = {
        id: Date.now(),
        date: state.currentShift.date,
        startTime: state.currentShift.startTime,
        endTime: state.currentShift.endTime,
        hours: state.currentShift.hours,
        hourlyPay: state.currentShift.hourlyPay,
        cashTips,
        creditTips,
        tipOut,
        netTips: cashTips + creditTips - tipOut,
        gross: state.currentShift.hourlyPay + (cashTips + creditTips - tipOut)
    };
    
    state.shifts.unshift(shift);
    state.currentShift = null;
    
    // Reset UI
    elements.clockBtn.classList.remove('active');
    elements.clockIcon.textContent = '▶';
    elements.clockText.textContent = 'Clock In';
    elements.shiftTimer.style.display = 'none';
    elements.timerDisplay.textContent = '00:00:00';
    
    // Clear tip inputs
    document.getElementById('cashTips').value = '';
    document.getElementById('creditTips').value = '';
    document.getElementById('tipOut').value = '';
    
    closeModal('clockOut');
    saveData();
    updateStats();
    renderWeekBars();
    renderShiftsList();
    showToast(`Shift saved! You earned ${formatCurrency(shift.gross)} 💰`);
}

// Save settings
function saveSettings() {
    state.settings = {
        hourlyRate: parseFloat(document.getElementById('hourlyRate').value) || 15,
        overtimeRate: parseFloat(document.getElementById('overtimeRate').value) || 1.5,
        otThreshold: parseFloat(document.getElementById('otThreshold').value) || 40,
        taxRate: parseFloat(document.getElementById('taxRate').value) || 22,
        nightDiff: parseFloat(document.getElementById('nightDiff').value) || 0,
        weekendDiff: parseFloat(document.getElementById('weekendDiff').value) || 0
    };
    
    saveData();
    closeModal('settings');
    showToast('Settings saved! ⚙️');
}

// Update stats display
function updateStats() {
    const today = new Date().toLocaleDateString();
    const todayShifts = state.shifts.filter(s => s.date === today);
    const todayTotal = todayShifts.reduce((sum, s) => sum + s.gross, 0);
    
    elements.todayAmount.textContent = formatCurrency(todayTotal);
    
    if (todayShifts.length > 0) {
        const hours = todayShifts.reduce((sum, s) => sum + s.hours, 0);
        elements.todayDetail.textContent = `${todayShifts.length} shift${todayShifts.length > 1 ? 's' : ''} • ${hours.toFixed(1)}h`;
    } else if (state.currentShift) {
        elements.todayDetail.textContent = 'Shift in progress...';
    } else {
        elements.todayDetail.textContent = 'Start your first shift →';
    }
    
    // Week stats
    const weekShifts = getWeekShifts();
    const weekTotal = weekShifts.reduce((sum, s) => sum + s.gross, 0);
    const weekHours = weekShifts.reduce((sum, s) => sum + s.hours, 0);
    const weekTips = weekShifts.reduce((sum, s) => sum + s.netTips, 0);
    const avgHourly = weekHours > 0 ? weekTotal / weekHours : 0;
    
    elements.weekTotal.textContent = formatCurrency(weekTotal);
    elements.hoursWorked.textContent = `${weekHours.toFixed(1)}h`;
    elements.avgHourly.textContent = formatCurrency(avgHourly);
    elements.tipsTotal.textContent = formatCurrency(weekTips);
}

// Get this week's shifts
function getWeekShifts() {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    
    return state.shifts.filter(s => new Date(s.date) >= startOfWeek);
}

// Render week bars chart
function renderWeekBars() {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const today = new Date().getDay();
    
    // Get daily totals for this week
    const dailyTotals = Array(7).fill(0);
    const weekShifts = getWeekShifts();
    
    weekShifts.forEach(shift => {
        const day = new Date(shift.date).getDay();
        dailyTotals[day] += shift.gross;
    });
    
    const maxTotal = Math.max(...dailyTotals, 1);
    
    elements.weekBars.innerHTML = days.map((day, i) => {
        const height = (dailyTotals[i] / maxTotal) * 80;
        const isToday = i === today;
        return `
            <div class="week-bar">
                <div class="bar-fill ${isToday ? 'today' : ''}" style="height: ${Math.max(height, 4)}px"></div>
                <span class="bar-label">${day}</span>
            </div>
        `;
    }).join('');
}

// Render shifts list
function renderShiftsList() {
    const recentShifts = state.shifts.slice(0, 5);
    
    if (recentShifts.length === 0) {
        elements.shiftsList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <p>No shifts yet. Clock in to get started!</p>
            </div>
        `;
        return;
    }
    
    elements.shiftsList.innerHTML = recentShifts.map(shift => {
        const date = new Date(shift.date);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        return `
            <div class="shift-item">
                <div class="shift-info">
                    <span class="shift-date">${dayName}, ${dateStr}</span>
                    <span class="shift-hours">${shift.hours.toFixed(1)}h worked</span>
                </div>
                <div class="shift-earnings">
                    <span class="shift-gross">${formatCurrency(shift.gross)}</span>
                    ${shift.netTips > 0 ? `<span class="shift-tips">+${formatCurrency(shift.netTips)} tips</span>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// Modal helpers
function openModal(name) {
    document.getElementById(`${name}Modal`).classList.add('active');
}

function closeModal(name) {
    document.getElementById(`${name}Modal`).classList.remove('active');
}

// Toast notification
function showToast(message) {
    elements.toastMessage.textContent = message;
    elements.toast.classList.add('active');
    
    setTimeout(() => {
        elements.toast.classList.remove('active');
    }, 3000);
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(amount);
}

// Add some demo data for visual appeal
function addDemoData() {
    if (state.shifts.length > 0) return;
    
    const now = Date.now();
    const day = 86400000;
    
    state.shifts = [
        {
            id: 1,
            date: new Date(now - day).toLocaleDateString(),
            hours: 6.5,
            hourlyPay: 117,
            cashTips: 45,
            creditTips: 62,
            tipOut: 12,
            netTips: 95,
            gross: 212
        },
        {
            id: 2,
            date: new Date(now - 2 * day).toLocaleDateString(),
            hours: 8,
            hourlyPay: 144,
            cashTips: 28,
            creditTips: 89,
            tipOut: 15,
            netTips: 102,
            gross: 246
        },
        {
            id: 3,
            date: new Date(now - 4 * day).toLocaleDateString(),
            hours: 5,
            hourlyPay: 90,
            cashTips: 35,
            creditTips: 42,
            tipOut: 8,
            netTips: 69,
            gross: 159
        },
        {
            id: 4,
            date: new Date(now - 5 * day).toLocaleDateString(),
            hours: 7.5,
            hourlyPay: 135,
            cashTips: 52,
            creditTips: 78,
            tipOut: 18,
            netTips: 112,
            gross: 247
        }
    ];
    
    saveData();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    addDemoData();
    init();
});
