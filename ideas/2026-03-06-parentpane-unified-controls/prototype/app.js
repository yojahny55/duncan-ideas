// ParentPane — Unified Parental Controls Dashboard

// State
const state = {
    children: {
        marcus: { name: 'Marcus', paused: false, timeRemaining: 45 },
        emma: { name: 'Emma', paused: false, timeRemaining: 68 },
        jake: { name: 'Jake', paused: false, timeRemaining: 14 }
    },
    bedtimeMode: false,
    allPaused: false
};

// DOM Elements
const modalOverlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalFooter = document.getElementById('modalFooter');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Toast
function showToast(message, duration = 3000) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, duration);
}

// Modal
function openModal(title, body, onConfirm) {
    modalTitle.textContent = title;
    modalBody.innerHTML = body;
    modalOverlay.classList.add('active');
    
    const confirmBtn = document.getElementById('modalConfirm');
    confirmBtn.onclick = () => {
        onConfirm();
        closeModal();
    };
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

// Close modal on overlay click
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Child Actions
function pauseChild(childId) {
    const child = state.children[childId];
    const card = document.querySelector(`[data-child="${childId}"]`);
    
    if (!child.paused) {
        openModal(
            `Pause ${child.name}'s Devices`,
            `
                <p style="margin-bottom: 1rem;">This will pause all connected devices for ${child.name}.</p>
                <label style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                    <input type="checkbox" id="notifyChild" checked>
                    <span>Send notification to ${child.name}</span>
                </label>
                <div style="background: #f3f4f6; padding: 1rem; border-radius: 8px;">
                    <strong>Affected platforms:</strong>
                    <ul style="margin-top: 0.5rem; margin-left: 1.5rem;">
                        <li>PlayStation 5</li>
                        <li>Roblox</li>
                        <li>YouTube</li>
                    </ul>
                </div>
            `,
            () => {
                child.paused = true;
                card.style.opacity = '0.6';
                card.querySelector('.child-status').innerHTML = '<span class="status-dot"></span> Paused';
                card.querySelector('.child-status').className = 'child-status offline';
                showToast(`✓ ${child.name}'s devices have been paused`);
            }
        );
    } else {
        child.paused = false;
        card.style.opacity = '1';
        card.querySelector('.child-status').innerHTML = '<span class="status-dot"></span> Online';
        card.querySelector('.child-status').className = 'child-status online';
        showToast(`✓ ${child.name}'s devices have been resumed`);
    }
}

function addTime(childId) {
    const child = state.children[childId];
    
    openModal(
        `Add Time for ${child.name}`,
        `
            <p style="margin-bottom: 1rem;">Grant additional screen time:</p>
            <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                <button class="time-option btn btn-outline" data-minutes="15" style="flex: 1;">+15 min</button>
                <button class="time-option btn btn-outline" data-minutes="30" style="flex: 1;">+30 min</button>
                <button class="time-option btn btn-outline" data-minutes="60" style="flex: 1;">+1 hour</button>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="font-size: 0.9rem; color: #64748b;">Custom amount:</label>
                <input type="number" id="customTime" placeholder="Minutes" min="5" max="120" style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 6px; margin-top: 0.25rem;">
            </div>
            <label style="display: flex; align-items: center; gap: 0.5rem;">
                <input type="checkbox" id="notifyTimeAdd" checked>
                <span style="font-size: 0.9rem;">Notify ${child.name} about extended time</span>
            </label>
        `,
        () => {
            const customInput = document.getElementById('customTime');
            const minutes = customInput.value || 15;
            child.timeRemaining += parseInt(minutes);
            showToast(`✓ Added ${minutes} minutes for ${child.name}`);
            updateTimeDisplay(childId);
        }
    );
    
    // Add click handlers for quick select buttons
    setTimeout(() => {
        document.querySelectorAll('.time-option').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.time-option').forEach(b => b.classList.remove('btn-primary'));
                btn.classList.add('btn-primary');
                document.getElementById('customTime').value = btn.dataset.minutes;
            });
        });
    }, 100);
}

function sendMessage(childId) {
    const child = state.children[childId];
    
    openModal(
        `Message ${child.name}`,
        `
            <p style="margin-bottom: 1rem;">Send a message to ${child.name}'s devices:</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                <button class="quick-msg btn btn-outline" data-msg="Time for dinner!">🍽️ Dinner time</button>
                <button class="quick-msg btn btn-outline" data-msg="Homework time!">📚 Homework</button>
                <button class="quick-msg btn btn-outline" data-msg="Come downstairs please">👋 Come here</button>
                <button class="quick-msg btn btn-outline" data-msg="5 minutes left!">⏰ 5 min warning</button>
            </div>
            <textarea id="customMessage" placeholder="Or write a custom message..." style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; min-height: 80px; resize: none;"></textarea>
        `,
        () => {
            const msg = document.getElementById('customMessage').value || 'Time to wrap up!';
            showToast(`✓ Message sent to ${child.name}'s devices`);
        }
    );
    
    // Add click handlers for quick messages
    setTimeout(() => {
        document.querySelectorAll('.quick-msg').forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('customMessage').value = btn.dataset.msg;
            });
        });
    }, 100);
}

function updateTimeDisplay(childId) {
    const child = state.children[childId];
    const card = document.querySelector(`[data-child="${childId}"]`);
    const limitRemaining = card.querySelector('.limit-remaining');
    const progressFill = card.querySelector('.progress-fill');
    
    // Format time
    const hours = Math.floor(child.timeRemaining / 60);
    const minutes = child.timeRemaining % 60;
    const timeStr = hours > 0 ? `${hours}h ${minutes}m left` : `${minutes}m left`;
    
    limitRemaining.textContent = timeStr;
    
    // Calculate percentage (assuming 2hr daily limit)
    const used = 120 - child.timeRemaining;
    const percentage = Math.min((used / 120) * 100, 100);
    progressFill.style.width = `${percentage}%`;
    
    // Update colors based on remaining time
    if (child.timeRemaining <= 15) {
        limitRemaining.className = 'limit-remaining danger';
        progressFill.className = 'progress-fill danger';
    } else if (child.timeRemaining <= 45) {
        limitRemaining.className = 'limit-remaining warning';
        progressFill.className = 'progress-fill warning';
    } else {
        limitRemaining.className = 'limit-remaining good';
        progressFill.className = 'progress-fill good';
    }
}

// Request Actions
function approveRequest() {
    showToast('✓ Approved +30 minutes for Emma on Roblox');
    
    // Update Emma's time
    state.children.emma.timeRemaining += 30;
    updateTimeDisplay('emma');
    
    // Remove the activity item
    const requestItem = document.querySelector('.activity-icon.request').closest('.activity-item');
    requestItem.style.transition = 'all 0.3s ease';
    requestItem.style.opacity = '0';
    requestItem.style.transform = 'translateX(20px)';
    setTimeout(() => {
        requestItem.innerHTML = `
            <div class="activity-icon success">✓</div>
            <div class="activity-content">
                <div class="activity-title"><strong>Emma</strong>'s request was approved</div>
                <div class="activity-meta">Just now • +30 min Roblox</div>
            </div>
        `;
        requestItem.style.opacity = '1';
        requestItem.style.transform = 'translateX(0)';
    }, 300);
}

function denyRequest() {
    openModal(
        'Deny Request',
        `
            <p style="margin-bottom: 1rem;">Send a message with your response?</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                <button class="deny-reason btn btn-outline" data-msg="Not right now, maybe later">Later</button>
                <button class="deny-reason btn btn-outline" data-msg="You've had enough screen time today">Enough for today</button>
                <button class="deny-reason btn btn-outline" data-msg="Finish homework first">Homework first</button>
            </div>
            <textarea id="denyMessage" placeholder="Custom message (optional)..." style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; min-height: 60px; resize: none;"></textarea>
        `,
        () => {
            const msg = document.getElementById('denyMessage').value;
            showToast('✓ Request denied' + (msg ? ' with message' : ''));
            
            // Update the activity item
            const requestItem = document.querySelector('.activity-icon.request').closest('.activity-item');
            requestItem.innerHTML = `
                <div class="activity-icon alert">✗</div>
                <div class="activity-content">
                    <div class="activity-title"><strong>Emma</strong>'s request was denied</div>
                    <div class="activity-meta">Just now</div>
                </div>
            `;
        }
    );
    
    // Add click handlers
    setTimeout(() => {
        document.querySelectorAll('.deny-reason').forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('denyMessage').value = btn.dataset.msg;
            });
        });
    }, 100);
}

// Global Actions
document.getElementById('bedtimeBtn').addEventListener('click', () => {
    if (!state.bedtimeMode) {
        openModal(
            '🌙 Activate Bedtime Mode',
            `
                <p style="margin-bottom: 1rem;">Bedtime mode will:</p>
                <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
                    <li>Send wind-down warnings (5 minutes)</li>
                    <li>Gradually dim screens</li>
                    <li>Block new sessions on all platforms</li>
                    <li>Allow only bedtime exceptions</li>
                </ul>
                <div style="background: #ede9fe; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <strong>Scheduled bedtimes:</strong>
                    <div style="display: flex; flex-direction: column; gap: 0.25rem; margin-top: 0.5rem;">
                        <span>Marcus: 10:00 PM</span>
                        <span>Emma: 9:00 PM</span>
                        <span>Jake: 8:00 PM</span>
                    </div>
                </div>
                <label style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="checkbox" id="immediateBtn" checked>
                    <span>Activate immediately (override schedules)</span>
                </label>
            `,
            () => {
                state.bedtimeMode = true;
                document.getElementById('bedtimeBtn').innerHTML = '<span>☀️</span> End Bedtime';
                document.getElementById('bedtimeBtn').classList.add('btn-primary');
                document.getElementById('bedtimeBtn').classList.remove('btn-outline');
                showToast('🌙 Bedtime mode activated for all children');
            }
        );
    } else {
        state.bedtimeMode = false;
        document.getElementById('bedtimeBtn').innerHTML = '<span>🌙</span> Bedtime Mode';
        document.getElementById('bedtimeBtn').classList.remove('btn-primary');
        document.getElementById('bedtimeBtn').classList.add('btn-outline');
        showToast('☀️ Bedtime mode deactivated');
    }
});

document.getElementById('pauseAllBtn').addEventListener('click', () => {
    if (!state.allPaused) {
        openModal(
            '⏸️ Pause All Devices',
            `
                <p style="margin-bottom: 1rem; color: #ef4444;"><strong>This will immediately pause all devices for all children.</strong></p>
                <div style="background: #fee2e2; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <strong>Affected:</strong>
                    <ul style="margin-top: 0.5rem; margin-left: 1.5rem;">
                        <li>Marcus — PlayStation, Xbox, Roblox, YouTube</li>
                        <li>Emma — Nintendo Switch, Roblox, YouTube, Minecraft</li>
                        <li>Jake — Nintendo Switch, YouTube Kids, PBS Kids</li>
                    </ul>
                </div>
                <label style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="checkbox" id="notifyPause" checked>
                    <span>Send "Pause" notification to all devices</span>
                </label>
            `,
            () => {
                state.allPaused = true;
                Object.keys(state.children).forEach(id => {
                    state.children[id].paused = true;
                    const card = document.querySelector(`[data-child="${id}"]`);
                    card.style.opacity = '0.6';
                    card.querySelector('.child-status').innerHTML = '<span class="status-dot"></span> Paused';
                    card.querySelector('.child-status').className = 'child-status offline';
                });
                document.getElementById('pauseAllBtn').innerHTML = '<span>▶️</span> Resume All';
                document.getElementById('pauseAllBtn').classList.remove('btn-danger');
                document.getElementById('pauseAllBtn').classList.add('btn-success');
                showToast('⏸️ All devices have been paused');
            }
        );
    } else {
        state.allPaused = false;
        Object.keys(state.children).forEach(id => {
            state.children[id].paused = false;
            const card = document.querySelector(`[data-child="${id}"]`);
            card.style.opacity = '1';
            card.querySelector('.child-status').innerHTML = '<span class="status-dot"></span> Online';
            card.querySelector('.child-status').className = 'child-status online';
        });
        document.getElementById('pauseAllBtn').innerHTML = '<span>⏸️</span> Pause All';
        document.getElementById('pauseAllBtn').classList.add('btn-danger');
        document.getElementById('pauseAllBtn').classList.remove('btn-success');
        showToast('▶️ All devices have been resumed');
    }
});

// Simulate real-time countdown
setInterval(() => {
    Object.keys(state.children).forEach(id => {
        if (!state.children[id].paused && state.children[id].timeRemaining > 0) {
            // Simulate 1 minute passing every 30 seconds for demo
            // In real app this would be actual time tracking
            state.children[id].timeRemaining = Math.max(0, state.children[id].timeRemaining - 0.5);
            updateTimeDisplay(id);
        }
    });
}, 30000);

// Initialize
console.log('ParentPane Dashboard Loaded');
console.log('---');
console.log('Try these actions:');
console.log('- Click "Pause" on any child card');
console.log('- Click "+15 min" to extend time');
console.log('- Click "Message" to send notifications');
console.log('- Click "Approve" or "Deny" on Emma\'s request');
console.log('- Click "Bedtime Mode" or "Pause All"');
