// PawDose - Pet Medication Tracker

// Demo Data
let appData = {
    pets: [
        {
            id: 1,
            name: 'Max',
            species: 'dog',
            breed: 'Golden Retriever',
            weight: 72,
            notes: 'Heart condition, sensitive stomach',
            emoji: '🐕',
            medications: [
                {
                    id: 1,
                    name: 'Vetmedin',
                    dosage: '5mg',
                    frequency: '2x',
                    times: ['08:00', '20:00'],
                    instructions: 'Give 30 minutes before food',
                    remaining: 24,
                    refillAt: 7
                },
                {
                    id: 2,
                    name: 'Furosemide',
                    dosage: '40mg',
                    frequency: '2x',
                    times: ['08:00', '20:00'],
                    instructions: 'Give with food',
                    remaining: 18,
                    refillAt: 7
                }
            ]
        },
        {
            id: 2,
            name: 'Whiskers',
            species: 'cat',
            breed: 'Domestic Shorthair',
            weight: 11,
            notes: 'Diabetic, needs insulin twice daily',
            emoji: '🐈',
            medications: [
                {
                    id: 3,
                    name: 'Insulin (Prozinc)',
                    dosage: '2 units',
                    frequency: '2x',
                    times: ['07:00', '19:00'],
                    instructions: 'Give with meal, refrigerate',
                    remaining: 14,
                    refillAt: 5
                },
                {
                    id: 4,
                    name: 'Gabapentin',
                    dosage: '50mg',
                    frequency: '1x',
                    times: ['20:00'],
                    instructions: 'For arthritis pain',
                    remaining: 5,
                    refillAt: 7
                }
            ]
        }
    ],
    doseLog: []
};

// Species emoji map
const speciesEmoji = {
    dog: '🐕',
    cat: '🐈',
    rabbit: '🐰',
    bird: '🦜',
    other: '🐾'
};

// Frequency labels
const frequencyLabels = {
    '1x': 'Once daily',
    '2x': 'Twice daily',
    '3x': 'Three times daily',
    'every8h': 'Every 8 hours',
    'eod': 'Every other day'
};

// Current dose for modal
let currentDose = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateTodayDate();
    renderSchedule();
    renderPets();
    renderRefills();
    initForms();
});

// Update today's date
function updateTodayDate() {
    const today = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    document.getElementById('todayDate').textContent = today.toLocaleDateString('en-US', options);
}

// Render today's schedule
function renderSchedule() {
    const container = document.getElementById('scheduleCards');
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    let schedule = [];
    
    // Build schedule from all pets and medications
    appData.pets.forEach(pet => {
        pet.medications.forEach(med => {
            med.times.forEach(time => {
                const [hours, mins] = time.split(':').map(Number);
                const timeInMinutes = hours * 60 + mins;
                
                // Check if dose was logged today
                const today = new Date().toDateString();
                const logged = appData.doseLog.find(log => 
                    log.petId === pet.id && 
                    log.medId === med.id && 
                    log.time === time &&
                    new Date(log.date).toDateString() === today
                );
                
                schedule.push({
                    pet,
                    med,
                    time,
                    timeInMinutes,
                    status: logged ? logged.status : (timeInMinutes < currentTime - 30 ? 'overdue' : 'pending')
                });
            });
        });
    });
    
    // Sort by time
    schedule.sort((a, b) => a.timeInMinutes - b.timeInMinutes);
    
    if (schedule.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📋</div>
                <p>No medications scheduled.<br>Add a pet and their meds to get started!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = schedule.map(item => {
        const time12 = formatTime12(item.time);
        const statusClass = item.status === 'given' ? 'completed' : (item.status === 'overdue' ? 'overdue' : '');
        const statusIcon = item.status === 'given' ? '✓' : (item.status === 'skipped' ? '✕' : '○');
        
        return `
            <div class="schedule-card ${statusClass}" onclick="openDoseModal(${item.pet.id}, ${item.med.id}, '${item.time}')">
                <div class="schedule-time">
                    <div class="time">${time12.time}</div>
                    <div class="period">${time12.period}</div>
                </div>
                <div class="schedule-info">
                    <div class="schedule-pet">
                        <span class="pet-emoji">${item.pet.emoji}</span>
                        ${item.pet.name}
                    </div>
                    <div class="schedule-med">${item.med.name}</div>
                    <div class="schedule-dosage">${item.med.dosage} • ${item.med.instructions}</div>
                </div>
                <div class="schedule-status">${statusIcon}</div>
            </div>
        `;
    }).join('');
}

// Format time to 12-hour
function formatTime12(time24) {
    const [hours, mins] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return {
        time: `${hours12}:${mins.toString().padStart(2, '0')}`,
        period
    };
}

// Render pets grid
function renderPets() {
    const container = document.getElementById('petsGrid');
    
    const petCards = appData.pets.map(pet => `
        <div class="pet-card" onclick="openPetDetail(${pet.id})">
            <div class="pet-avatar">${pet.emoji}</div>
            <div class="pet-name">${pet.name}</div>
            <div class="pet-meds-count">${pet.medications.length} medication${pet.medications.length !== 1 ? 's' : ''}</div>
        </div>
    `).join('');
    
    container.innerHTML = petCards + `
        <div class="pet-card add-pet-card" onclick="openModal('addPetModal')">
            <div class="add-icon">+</div>
            <span>Add Pet</span>
        </div>
    `;
}

// Render refill alerts
function renderRefills() {
    const container = document.getElementById('refillList');
    
    let refills = [];
    
    appData.pets.forEach(pet => {
        pet.medications.forEach(med => {
            if (med.remaining <= med.refillAt) {
                refills.push({
                    pet,
                    med,
                    urgent: med.remaining <= 3
                });
            }
        });
    });
    
    // Sort by urgency and remaining
    refills.sort((a, b) => {
        if (a.urgent !== b.urgent) return a.urgent ? -1 : 1;
        return a.med.remaining - b.med.remaining;
    });
    
    if (refills.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">✨</div>
                <p>All medications well-stocked!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = refills.map(item => `
        <div class="refill-card ${item.urgent ? 'urgent' : 'warning'}">
            <div class="refill-icon">${item.urgent ? '⚠️' : '📦'}</div>
            <div class="refill-info">
                <div class="refill-med">${item.med.name}</div>
                <div class="refill-pet">for ${item.pet.name}</div>
            </div>
            <div class="refill-count">${item.med.remaining} left</div>
        </div>
    `).join('');
}

// Open dose modal
function openDoseModal(petId, medId, time) {
    const pet = appData.pets.find(p => p.id === petId);
    const med = pet.medications.find(m => m.id === medId);
    
    currentDose = { petId, medId, time };
    
    document.getElementById('doseHeader').innerHTML = `
        <div class="dose-pet">${pet.emoji}</div>
        <div class="dose-med-name">${med.name}</div>
        <div class="dose-med-info">${med.dosage} for ${pet.name}</div>
    `;
    
    openModal('doseModal');
}

// Log dose
function logDose(status) {
    if (!currentDose) return;
    
    appData.doseLog.push({
        ...currentDose,
        status,
        date: new Date().toISOString()
    });
    
    // Decrement remaining if given
    if (status === 'given') {
        const pet = appData.pets.find(p => p.id === currentDose.petId);
        const med = pet.medications.find(m => m.id === currentDose.medId);
        if (med.remaining > 0) med.remaining--;
    }
    
    closeModal('doseModal');
    renderSchedule();
    renderRefills();
    
    const messages = {
        given: 'Dose logged! Great job! 🎉',
        skipped: 'Dose marked as skipped',
        reschedule: 'Reminder set for later ⏰'
    };
    
    showToast(messages[status], status === 'given' ? 'success' : '');
}

// Open pet detail modal
function openPetDetail(petId) {
    const pet = appData.pets.find(p => p.id === petId);
    
    document.getElementById('petDetailName').textContent = pet.name;
    
    const medsHtml = pet.medications.length > 0 
        ? pet.medications.map(med => `
            <div class="med-item">
                <div class="med-item-info">
                    <div class="med-name">${med.name}</div>
                    <div class="med-schedule">${frequencyLabels[med.frequency]} at ${med.times.map(t => formatTime12(t).time + ' ' + formatTime12(t).period).join(', ')}</div>
                </div>
                <div class="med-item-dosage">${med.dosage}</div>
            </div>
        `).join('')
        : '<p style="text-align:center; color: var(--text-muted); padding: 20px;">No medications yet</p>';
    
    document.getElementById('petDetailContent').innerHTML = `
        <div class="pet-detail-header">
            <div class="pet-detail-avatar">${pet.emoji}</div>
            <div class="pet-detail-info">
                <h4>${pet.name}</h4>
                <p>${pet.breed} • ${pet.weight} lbs</p>
                ${pet.notes ? `<p style="margin-top:4px; font-size:13px;">${pet.notes}</p>` : ''}
            </div>
        </div>
        <div class="pet-meds-list">
            <h5>Medications</h5>
            ${medsHtml}
            <button class="add-med-btn" onclick="openAddMedModal(${pet.id})">
                + Add Medication
            </button>
        </div>
    `;
    
    openModal('petDetailModal');
}

// Open add medication modal
function openAddMedModal(petId) {
    document.getElementById('medPetId').value = petId;
    closeModal('petDetailModal');
    setTimeout(() => openModal('addMedModal'), 200);
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modal on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});

// Initialize forms
function initForms() {
    // Add Pet Form
    document.getElementById('addPetForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        const newPet = {
            id: Date.now(),
            name: formData.get('petName'),
            species: formData.get('species'),
            breed: formData.get('breed') || '',
            weight: Number(formData.get('weight')) || 0,
            notes: formData.get('notes') || '',
            emoji: speciesEmoji[formData.get('species')] || '🐾',
            medications: []
        };
        
        appData.pets.push(newPet);
        form.reset();
        closeModal('addPetModal');
        renderPets();
        renderSchedule();
        showToast(`${newPet.name} added! 🎉`, 'success');
    });
    
    // Add Medication Form
    document.getElementById('addMedForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        const petId = Number(formData.get('petId'));
        const pet = appData.pets.find(p => p.id === petId);
        
        if (!pet) return;
        
        const frequency = formData.get('frequency');
        const times = [formData.get('time1')];
        if (frequency === '2x' || frequency === 'every8h') {
            times.push(document.querySelector('input[name="time2"]')?.value || '20:00');
        }
        if (frequency === '3x') {
            times.push(document.querySelector('input[name="time2"]')?.value || '14:00');
            times.push(document.querySelector('input[name="time3"]')?.value || '20:00');
        }
        
        const newMed = {
            id: Date.now(),
            name: formData.get('medName'),
            dosage: formData.get('dosage'),
            frequency: frequency,
            times: times,
            instructions: formData.get('instructions') || '',
            remaining: Number(formData.get('remaining')) || 30,
            refillAt: Number(formData.get('refillAt')) || 7
        };
        
        pet.medications.push(newMed);
        form.reset();
        closeModal('addMedModal');
        renderSchedule();
        renderPets();
        renderRefills();
        showToast(`${newMed.name} added for ${pet.name}! 💊`, 'success');
    });
    
    // Dynamic time inputs based on frequency
    document.querySelector('select[name="frequency"]').addEventListener('change', (e) => {
        const container = document.getElementById('timeInputs');
        const freq = e.target.value;
        
        let inputs = '<input type="time" name="time1" value="08:00">';
        if (freq === '2x' || freq === 'every8h') {
            inputs += '<input type="time" name="time2" value="20:00">';
        }
        if (freq === '3x') {
            inputs += '<input type="time" name="time2" value="14:00">';
            inputs += '<input type="time" name="time3" value="20:00">';
        }
        
        container.innerHTML = inputs;
    });
}

// Toast notification
function showToast(message, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show' + (type ? ` ${type}` : '');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Nav buttons (demo - would navigate in real app)
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const view = btn.dataset.view;
        if (view !== 'home') {
            showToast(`${view.charAt(0).toUpperCase() + view.slice(1)} view coming soon!`);
        }
    });
});
