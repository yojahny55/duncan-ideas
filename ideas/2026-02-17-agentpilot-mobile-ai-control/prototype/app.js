// AgentPilot - Mobile AI Agent Control
document.addEventListener('DOMContentLoaded', () => {
    // Tab Navigation
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Session Card Click -> Open Modal
    const sessionCards = document.querySelectorAll('.session-card');
    const modal = document.getElementById('session-modal');
    const backBtn = document.querySelector('.back-btn');

    sessionCards.forEach(card => {
        card.addEventListener('click', () => {
            modal.classList.remove('hidden');
            setTimeout(() => modal.classList.add('visible'), 10);
            updateAgentInModal(card);
        });
    });

    backBtn.addEventListener('click', () => {
        modal.classList.remove('visible');
        setTimeout(() => modal.classList.add('hidden'), 300);
    });

    function updateAgentInModal(card) {
        const agentName = card.querySelector('.session-info h3').textContent;
        const status = card.querySelector('.session-status').textContent.trim();
        const modalTitle = modal.querySelector('.modal-header h2');
        const modalStatus = modal.querySelector('.modal-header .session-status');
        
        modalTitle.textContent = agentName;
        
        if (status.includes('Running')) {
            modalStatus.className = 'session-status running';
            modalStatus.innerHTML = '<span class="pulse"></span> Running';
        } else if (status.includes('Idle')) {
            modalStatus.className = 'session-status idle';
            modalStatus.textContent = 'Idle';
        } else {
            modalStatus.className = 'session-status waiting';
            modalStatus.textContent = '⚠️ Needs Input';
        }
    }

    // Quick Actions
    const quickBtns = document.querySelectorAll('.quick-btn');
    
    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            showToast(getActionMessage(action));
            
            if (action === 'stop' || action === 'pause') {
                updateSessionStatus(action);
            }
        });
    });

    function getActionMessage(action) {
        const messages = {
            'continue': 'Sent: Continue',
            'pause': 'Agent paused',
            'stop': 'Agent stopped'
        };
        return messages[action] || 'Action sent';
    }

    function updateSessionStatus(action) {
        const modalStatus = modal.querySelector('.modal-header .session-status');
        if (action === 'stop') {
            modalStatus.className = 'session-status idle';
            modalStatus.textContent = 'Stopped';
        } else if (action === 'pause') {
            modalStatus.className = 'session-status waiting';
            modalStatus.textContent = '⏸️ Paused';
        }
    }

    // Send Prompt
    const sendBtn = document.getElementById('send-btn');
    const promptInput = document.getElementById('prompt-text');
    const liveOutput = document.querySelector('.live-output');

    sendBtn.addEventListener('click', () => {
        const text = promptInput.value.trim();
        if (text) {
            sendPrompt(text);
            promptInput.value = '';
        }
    });

    promptInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const text = promptInput.value.trim();
            if (text) {
                sendPrompt(text);
                promptInput.value = '';
            }
        }
    });

    function sendPrompt(text) {
        // Add user message to output
        const time = new Date().toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        
        const userLine = document.createElement('div');
        userLine.className = 'output-line';
        userLine.innerHTML = `
            <span class="timestamp">${time}</span>
            <span class="content" style="color: var(--accent-light);">You: ${text}</span>
        `;
        liveOutput.appendChild(userLine);
        
        // Show toast
        showToast('Message sent!');
        
        // Simulate agent response after delay
        setTimeout(() => {
            const responseTime = new Date().toLocaleTimeString('en-US', { 
                hour12: false, 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            });
            
            const responseLine = document.createElement('div');
            responseLine.className = 'output-line thinking';
            responseLine.innerHTML = `
                <span class="timestamp">${responseTime}</span>
                <span class="content">Acknowledged. Processing your request...</span>
                <span class="typing-indicator">
                    <span></span><span></span><span></span>
                </span>
            `;
            liveOutput.appendChild(responseLine);
            liveOutput.scrollTop = liveOutput.scrollHeight;
        }, 1500);
        
        liveOutput.scrollTop = liveOutput.scrollHeight;
    }

    // Voice Input
    const voiceBtn = document.getElementById('voice-btn');
    let isListening = false;

    voiceBtn.addEventListener('click', () => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            toggleVoiceInput();
        } else {
            showToast('Voice input not supported');
        }
    });

    function toggleVoiceInput() {
        if (isListening) {
            voiceBtn.classList.remove('listening');
            isListening = false;
            showToast('Stopped listening');
        } else {
            voiceBtn.classList.add('listening');
            isListening = true;
            showToast('Listening...');
            
            // Simulate voice input after 2 seconds
            setTimeout(() => {
                if (isListening) {
                    promptInput.value = 'Continue with the next step';
                    voiceBtn.classList.remove('listening');
                    isListening = false;
                }
            }, 2000);
        }
    }

    // Approval Actions
    const approvalCards = document.querySelectorAll('.approval-card');

    approvalCards.forEach(card => {
        const approveBtn = card.querySelector('.btn-approve');
        const denyBtn = card.querySelector('.btn-deny');

        approveBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            card.style.transform = 'translateX(100%)';
            card.style.opacity = '0';
            setTimeout(() => {
                card.remove();
                updateApprovalBadge();
                checkEmptyApprovals();
            }, 300);
            showToast('Approved ✓');
        });

        denyBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            card.style.transform = 'translateX(-100%)';
            card.style.opacity = '0';
            setTimeout(() => {
                card.remove();
                updateApprovalBadge();
                checkEmptyApprovals();
            }, 300);
            showToast('Denied');
        });
    });

    function updateApprovalBadge() {
        const badge = document.querySelector('.tab-btn[data-tab="approvals"] .badge');
        const remainingCards = document.querySelectorAll('.approval-card').length;
        
        if (remainingCards === 0) {
            badge?.remove();
        } else {
            if (badge) badge.textContent = remainingCards;
        }
    }

    function checkEmptyApprovals() {
        const approvalsTab = document.getElementById('approvals');
        const cards = approvalsTab.querySelectorAll('.approval-card');
        const emptyState = approvalsTab.querySelector('.empty-state');
        
        if (cards.length === 0) {
            emptyState.classList.remove('hidden');
        }
    }

    // Toast Notification
    const toast = document.getElementById('toast');
    let toastTimeout;

    function showToast(message) {
        clearTimeout(toastTimeout);
        
        const toastMessage = toast.querySelector('.toast-message');
        toastMessage.textContent = message;
        
        toast.classList.remove('hidden');
        
        toastTimeout = setTimeout(() => {
            toast.classList.add('hidden');
        }, 2000);
    }

    // Bottom Navigation
    const navBtns = document.querySelectorAll('.nav-btn');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const view = btn.dataset.view;
            if (view === 'agents') {
                showToast('Agents management coming soon');
            } else if (view === 'settings') {
                showToast('Settings coming soon');
            }
        });
    });

    // Simulate live updates
    function simulateLiveUpdates() {
        const progressBar = document.querySelector('.session-card.active-session .progress');
        if (progressBar) {
            let width = 65;
            setInterval(() => {
                if (width < 95) {
                    width += Math.random() * 2;
                    progressBar.style.width = `${Math.min(width, 95)}%`;
                }
            }, 3000);
        }
    }

    simulateLiveUpdates();

    // Update time in status bar
    function updateTime() {
        const timeEl = document.querySelector('.time');
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        timeEl.textContent = `${hours}:${minutes}`;
    }

    updateTime();
    setInterval(updateTime, 60000);
});
