// ReplyDebt - Track Your Response Debt

// Sample data
const messages = [
    {
        id: 1,
        sender: 'Sarah Chen',
        initials: 'SC',
        color: '#6366f1',
        platform: 'gmail',
        platformIcon: '📧',
        subject: 'Q1 Budget Review - Need Your Input',
        preview: 'Hey, I need your feedback on the Q1 budget proposal before the Friday meeting. Can you take a look at the spreadsheet I shared?',
        waitTime: { days: 4, hours: 7 },
        isVip: true,
        snoozed: false
    },
    {
        id: 2,
        sender: 'Marcus Johnson',
        initials: 'MJ',
        color: '#10b981',
        platform: 'slack',
        platformIcon: '💼',
        subject: '#design-feedback',
        preview: 'What do you think about the new landing page mockups? The team is waiting for your sign-off.',
        waitTime: { days: 3, hours: 2 },
        isVip: false,
        snoozed: false
    },
    {
        id: 3,
        sender: 'Mom',
        initials: 'M',
        color: '#ec4899',
        platform: 'whatsapp',
        platformIcon: '📱',
        subject: 'WhatsApp Message',
        preview: 'Did you book the flight for Thanksgiving? Your aunt is asking about the sleeping arrangements.',
        waitTime: { days: 3, hours: 0 },
        isVip: true,
        snoozed: false
    },
    {
        id: 4,
        sender: 'David Park',
        initials: 'DP',
        color: '#f59e0b',
        platform: 'linkedin',
        platformIcon: '🔗',
        subject: 'LinkedIn Message',
        preview: 'I saw your post about the engineering role. Would love to chat about potential opportunities at my company.',
        waitTime: { days: 2, hours: 14 },
        isVip: false,
        snoozed: false
    },
    {
        id: 5,
        sender: 'Alex Rivera',
        initials: 'AR',
        color: '#8b5cf6',
        platform: 'gmail',
        platformIcon: '📧',
        subject: 'Re: Project Handoff',
        preview: 'Here are the credentials and documentation you asked for. Let me know if you have any questions about the codebase.',
        waitTime: { days: 1, hours: 8 },
        isVip: false,
        snoozed: false
    },
    {
        id: 6,
        sender: 'Newsletter Digest',
        initials: 'ND',
        color: '#6b7280',
        platform: 'gmail',
        platformIcon: '📧',
        subject: 'Your Weekly Tech Digest',
        preview: 'Top stories: AI advances, startup funding news, and the latest in cloud computing...',
        waitTime: { days: 1, hours: 0 },
        isVip: false,
        snoozed: false
    },
    {
        id: 7,
        sender: 'Jamie Wilson',
        initials: 'JW',
        color: '#14b8a6',
        platform: 'slack',
        platformIcon: '💼',
        subject: 'DM from Jamie',
        preview: 'Quick question - do you have time for a 15-min sync tomorrow about the API integration?',
        waitTime: { days: 0, hours: 6 },
        isVip: false,
        snoozed: false
    },
    {
        id: 8,
        sender: 'Client: Acme Corp',
        initials: 'AC',
        color: '#ef4444',
        platform: 'gmail',
        platformIcon: '📧',
        subject: 'Invoice #2847 - Payment Confirmation',
        preview: 'Please confirm you received our payment for the January invoice. Our accounting needs the receipt.',
        waitTime: { days: 0, hours: 2 },
        isVip: false,
        snoozed: true
    }
];

// State
let currentFilter = 'all';
let selectedMessage = null;

// DOM Elements
const messageList = document.getElementById('messageList');
const replyModal = document.getElementById('replyModal');
const modalMessageInfo = document.getElementById('modalMessageInfo');
const toast = document.getElementById('toast');
const totalDebtEl = document.getElementById('totalDebt');

// Helper functions
function formatWaitTime(waitTime) {
    if (waitTime.days > 0) {
        return `${waitTime.days}d ${waitTime.hours}h`;
    }
    return `${waitTime.hours}h`;
}

function getWaitClass(waitTime) {
    if (waitTime.days >= 3) return 'urgent';
    if (waitTime.days >= 1) return 'warning';
    return 'normal';
}

function calculateTotalDebt(msgs) {
    let totalHours = 0;
    msgs.filter(m => !m.snoozed).forEach(m => {
        totalHours += (m.waitTime.days * 24) + m.waitTime.hours;
    });
    const days = Math.floor(totalHours / 24);
    const hours = totalHours % 24;
    return `${days}d ${hours}h`;
}

// Render functions
function renderMessages(filter = 'all') {
    let filtered = messages;
    
    switch (filter) {
        case 'urgent':
            filtered = messages.filter(m => m.waitTime.days >= 3 && !m.snoozed);
            break;
        case 'vip':
            filtered = messages.filter(m => m.isVip && !m.snoozed);
            break;
        case 'snoozed':
            filtered = messages.filter(m => m.snoozed);
            break;
        default:
            filtered = messages.filter(m => !m.snoozed);
    }
    
    // Sort by wait time (longest first)
    filtered.sort((a, b) => {
        const aHours = (a.waitTime.days * 24) + a.waitTime.hours;
        const bHours = (b.waitTime.days * 24) + b.waitTime.hours;
        return bHours - aHours;
    });
    
    messageList.innerHTML = filtered.map(msg => `
        <div class="message-card ${getWaitClass(msg.waitTime)}" data-id="${msg.id}">
            <div class="message-header">
                <div class="sender-avatar" style="background: ${msg.color}">${msg.initials}</div>
                <div class="message-meta">
                    <div class="sender-row">
                        <span class="sender-name">${msg.sender}</span>
                        ${msg.isVip ? '<span class="vip-badge">⭐ VIP</span>' : ''}
                        <span class="platform-badge">${msg.platformIcon}</span>
                    </div>
                    <div class="message-subject">${msg.subject}</div>
                </div>
            </div>
            <div class="message-preview">${msg.preview}</div>
            <div class="message-footer">
                <div class="wait-time ${getWaitClass(msg.waitTime)}">
                    ⏱️ Waiting ${formatWaitTime(msg.waitTime)}
                </div>
                <div class="quick-actions">
                    <button class="quick-action" title="Snooze" data-action="snooze">💤</button>
                    <button class="quick-action" title="Mark replied" data-action="replied">✅</button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update counts
    updateCounts();
}

function updateCounts() {
    document.getElementById('allCount').textContent = messages.filter(m => !m.snoozed).length;
    document.getElementById('urgentCount').textContent = messages.filter(m => m.waitTime.days >= 3 && !m.snoozed).length;
    document.getElementById('vipCount').textContent = messages.filter(m => m.isVip && !m.snoozed).length;
    document.getElementById('snoozedCount').textContent = messages.filter(m => m.snoozed).length;
    totalDebtEl.textContent = calculateTotalDebt(messages);
}

function showModal(messageId) {
    const msg = messages.find(m => m.id === messageId);
    if (!msg) return;
    
    selectedMessage = msg;
    
    modalMessageInfo.innerHTML = `
        <div class="modal-sender">${msg.sender}</div>
        <div class="modal-platform">${msg.platformIcon} ${msg.platform.charAt(0).toUpperCase() + msg.platform.slice(1)} · ${msg.subject}</div>
        <div class="modal-wait">⏱️ Waiting ${formatWaitTime(msg.waitTime)}</div>
    `;
    
    replyModal.classList.add('active');
}

function hideModal() {
    replyModal.classList.remove('active');
    selectedMessage = null;
}

function showToast(message) {
    const toastEl = document.getElementById('toast');
    toastEl.querySelector('.toast-message').textContent = message;
    toastEl.classList.add('active');
    
    setTimeout(() => {
        toastEl.classList.remove('active');
    }, 3000);
}

function handleAction(action) {
    if (!selectedMessage) return;
    
    const idx = messages.findIndex(m => m.id === selectedMessage.id);
    
    switch (action) {
        case 'open':
            showToast(`Opening ${selectedMessage.platform}...`);
            hideModal();
            break;
        case 'snooze':
            messages[idx].snoozed = true;
            showToast(`Snoozed until tomorrow`);
            hideModal();
            renderMessages(currentFilter);
            break;
        case 'replied':
            messages.splice(idx, 1);
            showToast(`Marked as replied! 🎉`);
            hideModal();
            renderMessages(currentFilter);
            break;
        case 'archive':
            messages.splice(idx, 1);
            showToast(`Archived - no reply needed`);
            hideModal();
            renderMessages(currentFilter);
            break;
    }
}

// Event Listeners
messageList.addEventListener('click', (e) => {
    const card = e.target.closest('.message-card');
    const quickAction = e.target.closest('.quick-action');
    
    if (quickAction) {
        e.stopPropagation();
        const messageId = parseInt(card.dataset.id);
        const action = quickAction.dataset.action;
        const msg = messages.find(m => m.id === messageId);
        const idx = messages.findIndex(m => m.id === messageId);
        
        if (action === 'snooze') {
            messages[idx].snoozed = !messages[idx].snoozed;
            showToast(messages[idx].snoozed ? 'Snoozed until tomorrow' : 'Unsnoozed');
            renderMessages(currentFilter);
        } else if (action === 'replied') {
            messages.splice(idx, 1);
            showToast('Marked as replied! 🎉');
            renderMessages(currentFilter);
        }
        return;
    }
    
    if (card) {
        const messageId = parseInt(card.dataset.id);
        showModal(messageId);
    }
});

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        currentFilter = item.dataset.filter;
        renderMessages(currentFilter);
    });
});

document.getElementById('closeModal').addEventListener('click', hideModal);
document.querySelector('.modal-backdrop').addEventListener('click', hideModal);

document.getElementById('openAppBtn').addEventListener('click', () => handleAction('open'));
document.getElementById('snoozeBtn').addEventListener('click', () => handleAction('snooze'));
document.getElementById('markRepliedBtn').addEventListener('click', () => handleAction('replied'));
document.getElementById('archiveBtn').addEventListener('click', () => handleAction('archive'));

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && replyModal.classList.contains('active')) {
        hideModal();
    }
});

// Initial render
renderMessages();
