// ================================================
// ScamBait AI - App Logic
// ================================================

// Sample Data
const sampleConversations = [
    {
        id: 1,
        scammerId: '+1 (555) 123-4567',
        persona: '👵',
        personaName: 'Confused Grandma',
        scamType: 'tech-support',
        preview: 'Scammer: "Your computer has virus!" | AI: "Oh dear, which computer? I have three..."',
        duration: '2h 34m',
        durationMs: 9240000,
        messages: 47,
        status: 'active',
        chat: [
            { sender: 'scammer', text: 'Hello, this is Microsoft Technical Support. We have detected a virus on your computer.' },
            { sender: 'ai', text: 'Oh my goodness! A virus? Like the flu? Should I take my computer to the doctor?' },
            { sender: 'scammer', text: 'No ma\'am, a computer virus. We need to fix it remotely.' },
            { sender: 'ai', text: 'Remotely? Is that near the pharmacy? I can drive there but I need my grandson to help me with the GPS.' },
            { sender: 'scammer', text: 'No, I mean we fix it from here. Can you turn on your computer?' },
            { sender: 'ai', text: 'Which one dear? I have the one in the kitchen that my daughter gave me, the laptop thing, and there\'s one in the basement but I don\'t go down there since my hip surgery.' },
            { sender: 'scammer', text: 'The one you use for internet.' },
            { sender: 'ai', text: 'Oh! Let me find my glasses first. Now where did I put them... hold on sweetie, I need to check the living room.' },
        ]
    },
    {
        id: 2,
        scammerId: 'prince_abdul_2026@mail.ng',
        persona: '🤑',
        personaName: 'Eager Victim',
        scamType: 'nigerian-prince',
        preview: 'Scammer: "Send $500 for fees" | AI: "OMG YES! But my bank is being weird..."',
        duration: '4h 12m',
        durationMs: 15120000,
        messages: 89,
        status: 'active',
        chat: [
            { sender: 'scammer', text: 'Dearest friend, I am Prince Abdul and I have $4.5 million USD to share with you.' },
            { sender: 'ai', text: 'OH MY GOD!!! This is the best day of my life! I always knew I was destined for greatness!' },
            { sender: 'scammer', text: 'Yes, you only need to send $500 for the processing fee.' },
            { sender: 'ai', text: 'I would send it RIGHT NOW but my bank account is being weird. They said something about "suspicious activity" which is SO rude.' },
            { sender: 'scammer', text: 'You can send via Western Union or Bitcoin.' },
            { sender: 'ai', text: 'Ooh Bitcoin! My nephew told me about that. He said I should buy some because it\'s going "to the moon" 🚀 Can I send you Dogecoin instead?' },
        ]
    },
    {
        id: 3,
        scammerId: '+44 7700 900123',
        persona: '🤔',
        personaName: 'Suspicious Steve',
        scamType: 'lottery',
        preview: 'Scammer: "You won lottery!" | AI: "Hmm, which lottery exactly? I enter several..."',
        duration: '1h 45m',
        durationMs: 6300000,
        messages: 34,
        status: 'waiting',
        chat: [
            { sender: 'scammer', text: 'Congratulations! You have won the UK National Lottery!' },
            { sender: 'ai', text: 'Hmm, which lottery exactly? I enter several different ones. The PowerBall, Mega Millions, and I think there was one from a website.' },
            { sender: 'scammer', text: 'The UK National Lottery! You won 2 million pounds!' },
            { sender: 'ai', text: 'But I don\'t remember entering the UK lottery. Can you send me proof of my entry? Also, why is this text from a different number than the official lottery?' },
        ]
    },
    {
        id: 4,
        scammerId: 'amazon_security@suspiciousmail.com',
        persona: '🗣️',
        personaName: 'Chatty Cathy',
        scamType: 'phishing',
        preview: 'Scammer: "Verify your account" | AI: "Oh that reminds me of when my aunt..."',
        duration: '3h 08m',
        durationMs: 11280000,
        messages: 156,
        status: 'active',
        chat: [
            { sender: 'scammer', text: 'Your Amazon account has been compromised. Click here to verify.' },
            { sender: 'ai', text: 'Oh no! That reminds me of when my aunt Mildred had her Facebook hacked. She accidentally sent messages to everyone about weight loss pills. It was so embarrassing at the family reunion!' },
            { sender: 'scammer', text: 'Please verify your account immediately.' },
            { sender: 'ai', text: 'Speaking of my aunt, did I tell you about her cat? Mr. Whiskers is 14 years old and just learned a new trick! He can open the fridge now which is both impressive and concerning.' },
            { sender: 'scammer', text: 'Ma\'am, this is urgent.' },
            { sender: 'ai', text: 'Urgent like the time I forgot to pick up my prescription? The pharmacist was so nice about it. Her name is Linda. Do you know any Lindas? It\'s such a lovely name.' },
        ]
    },
];

const sampleActivity = [
    { icon: '🎯', text: '<strong>TechScammer#4521</strong> gave up after 3 hours!', time: '5 min ago' },
    { icon: '🏆', text: 'You unlocked the <strong>100 Hours</strong> badge!', time: '1 hour ago' },
    { icon: '📱', text: 'New scam submitted: <strong>IRS Phone Scam</strong>', time: '2 hours ago' },
    { icon: '💬', text: 'AI sent 50 messages to <strong>+1 (555) 987-6543</strong>', time: '3 hours ago' },
    { icon: '🎉', text: 'Community milestone: <strong>1 million hours wasted!</strong>', time: '6 hours ago' },
];

const leaderboardData = [
    { rank: 4, name: 'ScamSlayer420', avatar: '🦸', scams: 89, time: '76h', streak: '14 days' },
    { rank: 5, name: 'DigitalVigilante', avatar: '🕵️', scams: 72, time: '68h', streak: '7 days' },
    { rank: 6, name: 'PhishPhighter', avatar: '🐟', scams: 65, time: '54h', streak: '21 days' },
    { rank: 7, name: 'NanasRevenge', avatar: '👵', scams: 58, time: '49h', streak: '5 days' },
    { rank: 8, name: 'ScamBuster2026', avatar: '💪', scams: 51, time: '42h', streak: '3 days' },
    { rank: 9, name: 'TrollMaster', avatar: '🧌', scams: 45, time: '38h', streak: '9 days' },
    { rank: 10, name: 'JusticeLeague', avatar: '⚖️', scams: 41, time: '35h', streak: '12 days' },
];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const tabContents = document.querySelectorAll('.tab-content');
const conversationsList = document.getElementById('conversations-list');
const activityFeed = document.getElementById('activity-feed');
const leaderboardBody = document.getElementById('leaderboard-body');
const submitForm = document.getElementById('submit-form');
const scamTypeBtns = document.querySelectorAll('.scam-type-btn');
const personaCards = document.querySelectorAll('.persona-card');
const modal = document.getElementById('conversation-modal');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = document.querySelector('.modal-backdrop');
const chatContainer = document.getElementById('chat-container');
const lbTabs = document.querySelectorAll('.lb-tab');
const toastContainer = document.getElementById('toast-container');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderConversations();
    renderActivity();
    renderLeaderboard();
    setupEventListeners();
    startRealtimeUpdates();
});

// Render Functions
function renderConversations() {
    conversationsList.innerHTML = sampleConversations.map(conv => `
        <div class="conversation-card" data-id="${conv.id}">
            <div class="conversation-left">
                <div class="conversation-avatar">${conv.persona}</div>
                <div class="conversation-info">
                    <h3>${conv.scammerId}</h3>
                    <p class="conversation-preview">${conv.preview}</p>
                </div>
            </div>
            <div class="conversation-right">
                <div class="conversation-meta">
                    <div class="conversation-time">${conv.duration}</div>
                    <div class="conversation-messages">${conv.messages} messages</div>
                </div>
                <span class="conversation-status ${conv.status}">${conv.status === 'active' ? '🟢 Active' : '⏳ Waiting'}</span>
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.conversation-card').forEach(card => {
        card.addEventListener('click', () => openConversation(card.dataset.id));
    });
}

function renderActivity() {
    activityFeed.innerHTML = sampleActivity.map(item => `
        <div class="activity-item">
            <div class="activity-icon">${item.icon}</div>
            <div class="activity-content">
                <p class="activity-text">${item.text}</p>
            </div>
            <span class="activity-time">${item.time}</span>
        </div>
    `).join('');
}

function renderLeaderboard() {
    leaderboardBody.innerHTML = leaderboardData.map(user => `
        <div class="table-row">
            <span class="col-rank">#${user.rank}</span>
            <span class="col-user">
                <span style="font-size: 1.5rem">${user.avatar}</span>
                <span class="user-name">${user.name}</span>
            </span>
            <span class="col-scams">${user.scams}</span>
            <span class="col-time">${user.time}</span>
            <span class="col-streak">🔥 ${user.streak}</span>
        </div>
    `).join('');
}

// Event Listeners
function setupEventListeners() {
    // Tab Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.dataset.tab;
            switchTab(tabId);
        });
    });

    // Scam Type Selection
    scamTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            scamTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Persona Selection
    personaCards.forEach(card => {
        card.addEventListener('click', () => {
            personaCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // Form Submission
    submitForm.addEventListener('submit', handleSubmit);

    // Modal Close
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    // Leaderboard Tabs
    lbTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            lbTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // In real app, would fetch different data
            showToast('🔄', 'Loading...', `Fetching ${tab.dataset.period} leaderboard`);
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function switchTab(tabId) {
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.tab === tabId);
    });
    tabContents.forEach(content => {
        content.classList.toggle('active', content.id === tabId);
    });
}

function handleSubmit(e) {
    e.preventDefault();
    
    const btn = document.getElementById('submit-btn');
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    btn.disabled = true;

    // Simulate submission
    setTimeout(() => {
        btnText.style.display = 'flex';
        btnLoading.style.display = 'none';
        btn.disabled = false;
        
        // Show success toast
        showToast('🎣', 'Scam Submitted!', 'AI is now engaging the scammer');
        
        // Switch to dashboard
        switchTab('dashboard');
        
        // Reset form
        submitForm.reset();
        scamTypeBtns.forEach(b => b.classList.remove('active'));
        scamTypeBtns[0].classList.add('active');
        personaCards.forEach(c => c.classList.remove('active'));
        personaCards[0].classList.add('active');
    }, 2000);
}

function openConversation(id) {
    const conv = sampleConversations.find(c => c.id === parseInt(id));
    if (!conv) return;

    // Update modal content
    document.getElementById('modal-scammer-id').textContent = conv.scammerId;
    document.getElementById('modal-duration').textContent = conv.duration;
    document.getElementById('modal-messages').textContent = conv.messages;
    document.getElementById('modal-persona').textContent = conv.persona;

    // Render chat
    chatContainer.innerHTML = conv.chat.map(msg => `
        <div class="chat-message ${msg.sender}">
            <span class="chat-message-label">${msg.sender === 'scammer' ? '🚨 Scammer' : '🤖 AI (' + conv.personaName + ')'}</span>
            ${msg.text}
        </div>
    `).join('');

    // Scroll to bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function showToast(icon, title, message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    toastContainer.appendChild(toast);

    // Remove after 4 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Real-time Updates (Simulated)
function startRealtimeUpdates() {
    // Update time wasted every second
    setInterval(() => {
        const totalTimeEl = document.getElementById('total-time');
        if (totalTimeEl) {
            // Parse current time and add 1 second
            const parts = totalTimeEl.textContent.match(/(\d+)h (\d+)m/);
            if (parts) {
                let hours = parseInt(parts[1]);
                let mins = parseInt(parts[2]);
                mins++;
                if (mins >= 60) {
                    mins = 0;
                    hours++;
                }
                totalTimeEl.textContent = `${hours}h ${mins.toString().padStart(2, '0')}m`;
            }
        }
    }, 60000); // Update every minute for realism

    // Simulate random updates
    setInterval(() => {
        const randomConv = sampleConversations[Math.floor(Math.random() * sampleConversations.length)];
        if (Math.random() > 0.7) {
            showToast('💬', 'New Message!', `AI replied to ${randomConv.scammerId}`);
        }
    }, 30000);

    // Simulate new activity
    setInterval(() => {
        if (Math.random() > 0.8) {
            const newActivity = {
                icon: ['🎯', '💬', '📱', '🏆'][Math.floor(Math.random() * 4)],
                text: 'New activity from the community!',
                time: 'Just now'
            };
            sampleActivity.unshift(newActivity);
            sampleActivity.pop();
            renderActivity();
        }
    }, 45000);
}

// Utility: Format time
function formatDuration(ms) {
    const hours = Math.floor(ms / 3600000);
    const mins = Math.floor((ms % 3600000) / 60000);
    return `${hours}h ${mins.toString().padStart(2, '0')}m`;
}

// Empty/Loading/Error States (for production)
function showEmptyState(container, icon, title, description) {
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">${icon}</div>
            <h3 class="empty-title">${title}</h3>
            <p class="empty-description">${description}</p>
        </div>
    `;
}

function showLoadingState(container) {
    container.innerHTML = `
        <div class="loading-state">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
    `;
}

function showErrorState(container, message, retryFn) {
    container.innerHTML = `
        <div class="error-state">
            <div class="error-icon">⚠️</div>
            <p class="error-message">${message}</p>
            <button class="retry-btn" onclick="${retryFn}">Try Again</button>
        </div>
    `;
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sampleConversations,
        formatDuration,
        showToast
    };
}
