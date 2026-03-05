// NoiseCase — App Logic

// Sample incident data
const incidents = [
    {
        id: 1,
        type: 'music',
        icon: '🎵',
        title: 'Loud Music',
        date: 'Today, 11:47 PM',
        duration: '15 min',
        peakDb: 72,
        avgDb: 65,
        violation: true,
        hasAudio: true
    },
    {
        id: 2,
        type: 'voices',
        icon: '🗣️',
        title: 'Loud Voices/Party',
        date: 'Yesterday, 1:23 AM',
        duration: '45 min',
        peakDb: 68,
        avgDb: 62,
        violation: true,
        hasAudio: true
    },
    {
        id: 3,
        type: 'music',
        icon: '🎵',
        title: 'Bass Music',
        date: 'Mar 1, 10:15 PM',
        duration: '30 min',
        peakDb: 78,
        avgDb: 70,
        violation: true,
        hasAudio: true
    },
    {
        id: 4,
        type: 'footsteps',
        icon: '👣',
        title: 'Heavy Footsteps',
        date: 'Feb 28, 11:00 PM',
        duration: '10 min',
        peakDb: 52,
        avgDb: 48,
        violation: false,
        hasAudio: false
    },
    {
        id: 5,
        type: 'pets',
        icon: '🐕',
        title: 'Dog Barking',
        date: 'Feb 27, 6:30 AM',
        duration: '20 min',
        peakDb: 58,
        avgDb: 54,
        violation: false,
        hasAudio: true
    }
];

// DOM Elements
const incidentsList = document.getElementById('incidentsList');
const recordBtn = document.getElementById('recordBtn');
const recordModal = document.getElementById('recordModal');
const closeRecordModal = document.getElementById('closeRecordModal');
const cancelRecording = document.getElementById('cancelRecording');
const saveIncident = document.getElementById('saveIncident');
const exportBtn = document.getElementById('exportBtn');
const exportModal = document.getElementById('exportModal');
const closeExportModal = document.getElementById('closeExportModal');
const cancelExport = document.getElementById('cancelExport');
const downloadPdf = document.getElementById('downloadPdf');
const toast = document.getElementById('toast');
const dbValue = document.getElementById('dbValue');
const dbCircle = document.getElementById('dbCircle');
const dbBars = document.getElementById('dbBars');
const thresholdFill = document.getElementById('thresholdFill');
const monitorStatus = document.getElementById('monitorStatus');
const recordingDb = document.getElementById('recordingDb');
const recordingTime = document.getElementById('recordingTime');
const recPeak = document.getElementById('recPeak');
const recAvg = document.getElementById('recAvg');
const recStatus = document.getElementById('recStatus');

// Render incidents list
function renderIncidents() {
    incidentsList.innerHTML = incidents.slice(0, 4).map(incident => {
        const dbClass = incident.violation ? 'violation' : (incident.peakDb > 50 ? 'warning' : 'safe');
        return `
            <div class="incident-item">
                <div class="incident-icon ${incident.violation ? 'violation' : ''}">
                    ${incident.icon}
                </div>
                <div class="incident-info">
                    <div class="incident-title">${incident.title}</div>
                    <div class="incident-meta">${incident.date} • ${incident.duration}</div>
                </div>
                <div class="incident-db">
                    <span class="incident-db-value ${dbClass}">${incident.peakDb}</span>
                    <span class="incident-db-label">dB peak</span>
                </div>
            </div>
        `;
    }).join('');
}

// Live dB monitor simulation
let monitorInterval;
let currentDb = 42;

function updateDbDisplay(db) {
    dbValue.textContent = db;
    
    // Update circle color based on level
    dbCircle.classList.remove('warning', 'violation');
    if (db >= 55) {
        dbCircle.classList.add('violation');
    } else if (db >= 45) {
        dbCircle.classList.add('warning');
    }
    
    // Update threshold fill
    const fillPercent = Math.min((db / 100) * 100, 100);
    thresholdFill.style.width = `${fillPercent}%`;
    
    // Update bars
    const bars = dbBars.querySelectorAll('.db-bar');
    const activeBars = Math.floor((db / 100) * bars.length);
    bars.forEach((bar, i) => {
        const height = Math.random() * 30 + 10;
        bar.style.height = `${height}px`;
        bar.classList.toggle('active', i < activeBars);
    });
}

function startMonitor() {
    monitorStatus.textContent = 'Listening';
    monitorStatus.classList.add('active');
    
    monitorInterval = setInterval(() => {
        // Simulate fluctuating dB levels
        const change = (Math.random() - 0.5) * 8;
        currentDb = Math.max(30, Math.min(85, currentDb + change));
        updateDbDisplay(Math.round(currentDb));
    }, 200);
}

// Recording functionality
let recordingInterval;
let recordingSeconds = 0;
let peakReading = 0;
let readings = [];

function startRecording() {
    recordingSeconds = 0;
    peakReading = 0;
    readings = [];
    
    recordingInterval = setInterval(() => {
        recordingSeconds++;
        const minutes = Math.floor(recordingSeconds / 60);
        const seconds = recordingSeconds % 60;
        recordingTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Simulate dB reading
        const db = Math.round(55 + Math.random() * 25);
        readings.push(db);
        recordingDb.textContent = db;
        
        if (db > peakReading) {
            peakReading = db;
            recPeak.textContent = `${peakReading} dB`;
        }
        
        const avg = Math.round(readings.reduce((a, b) => a + b, 0) / readings.length);
        recAvg.textContent = `${avg} dB`;
        
        // Update violation status
        if (peakReading >= 55) {
            recStatus.textContent = 'Violation';
            recStatus.classList.add('violation');
        } else {
            recStatus.textContent = 'Normal';
            recStatus.classList.remove('violation');
        }
    }, 1000);
}

function stopRecording() {
    clearInterval(recordingInterval);
}

// Show toast notification
function showToast(message) {
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Event listeners
recordBtn.addEventListener('click', () => {
    recordModal.classList.add('active');
    startRecording();
});

closeRecordModal.addEventListener('click', () => {
    recordModal.classList.remove('active');
    stopRecording();
});

cancelRecording.addEventListener('click', () => {
    recordModal.classList.remove('active');
    stopRecording();
});

saveIncident.addEventListener('click', () => {
    recordModal.classList.remove('active');
    stopRecording();
    
    // Update stats
    const totalIncidents = document.getElementById('totalIncidents');
    totalIncidents.textContent = parseInt(totalIncidents.textContent) + 1;
    
    // Add new incident to list (simulated)
    const newIncident = {
        id: incidents.length + 1,
        type: 'music',
        icon: '🎵',
        title: 'Loud Music',
        date: 'Just now',
        duration: `${recordingSeconds} sec`,
        peakDb: peakReading,
        avgDb: Math.round(readings.reduce((a, b) => a + b, 0) / readings.length),
        violation: peakReading >= 55,
        hasAudio: true
    };
    incidents.unshift(newIncident);
    renderIncidents();
    
    showToast('Incident saved successfully');
});

exportBtn.addEventListener('click', () => {
    exportModal.classList.add('active');
});

closeExportModal.addEventListener('click', () => {
    exportModal.classList.remove('active');
});

cancelExport.addEventListener('click', () => {
    exportModal.classList.remove('active');
});

downloadPdf.addEventListener('click', () => {
    exportModal.classList.remove('active');
    showToast('Evidence package downloaded');
});

// Noise type selection
const typeButtons = document.querySelectorAll('.type-btn');
typeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        typeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Bottom nav
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === 'exportBtn') return; // Export has special handling
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Initialize
renderIncidents();
startMonitor();
updateDbDisplay(42);
