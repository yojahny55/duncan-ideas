// PromiseHold - Track What People Promised You

const STORAGE_KEY = 'promisehold_data';

// Category icons
const CATEGORY_ICONS = {
    work: '💼',
    money: '💵',
    social: '☕',
    favor: '🤝',
    other: '📝'
};

// State
let promises = [];
let currentFilter = 'all';
let selectedPromise = null;

// DOM Elements
const showAddFormBtn = document.getElementById('showAddForm');
const addForm = document.getElementById('addForm');
const closeFormBtn = document.getElementById('closeForm');
const promisesList = document.getElementById('promisesList');
const emptyState = document.getElementById('emptyState');
const detailModal = document.getElementById('detailModal');
const closeModalBtn = document.getElementById('closeModal');
const tabs = document.querySelectorAll('.tab');

// Stats elements
const activeCount = document.getElementById('activeCount');
const overdueCount = document.getElementById('overdueCount');
const fulfilledCount = document.getElementById('fulfilledCount');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderPromises();
    updateStats();
    setupEventListeners();
    addSampleData();
});

function setupEventListeners() {
    // Show/hide add form
    showAddFormBtn.addEventListener('click', () => {
        addForm.classList.remove('hidden');
        showAddFormBtn.classList.add('hidden');
        document.getElementById('person').focus();
    });

    closeFormBtn.addEventListener('click', () => {
        addForm.classList.add('hidden');
        showAddFormBtn.classList.remove('hidden');
        addForm.reset();
    });

    // Form submission
    addForm.addEventListener('submit', handleSubmit);

    // Tab filtering
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.dataset.filter;
            renderPromises();
        });
    });

    // Modal close
    closeModalBtn.addEventListener('click', closeModal);
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) closeModal();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            if (!addForm.classList.contains('hidden')) {
                addForm.classList.add('hidden');
                showAddFormBtn.classList.remove('hidden');
            }
        }
    });
}

function handleSubmit(e) {
    e.preventDefault();

    const newPromise = {
        id: Date.now(),
        person: document.getElementById('person').value.trim(),
        promise: document.getElementById('promise').value.trim(),
        category: document.getElementById('category').value,
        dueDate: document.getElementById('dueDate').value || null,
        context: document.getElementById('context').value.trim() || null,
        status: 'active',
        createdAt: new Date().toISOString(),
        fulfilledAt: null
    };

    promises.unshift(newPromise);
    saveData();
    renderPromises();
    updateStats();

    // Reset form
    addForm.reset();
    addForm.classList.add('hidden');
    showAddFormBtn.classList.remove('hidden');
}

function renderPromises() {
    const filtered = filterPromises(promises);
    
    if (filtered.length === 0) {
        promisesList.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    promisesList.innerHTML = filtered.map(p => createPromiseCard(p)).join('');

    // Add click listeners
    promisesList.querySelectorAll('.promise-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            openPromiseDetail(id);
        });
    });
}

function filterPromises(list) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    switch (currentFilter) {
        case 'overdue':
            return list.filter(p => {
                if (p.status === 'fulfilled') return false;
                if (!p.dueDate) return false;
                const due = new Date(p.dueDate);
                return due < now;
            });
        case 'upcoming':
            return list.filter(p => {
                if (p.status === 'fulfilled') return false;
                if (!p.dueDate) return true;
                const due = new Date(p.dueDate);
                return due >= now;
            });
        case 'fulfilled':
            return list.filter(p => p.status === 'fulfilled');
        default:
            return list;
    }
}

function createPromiseCard(p) {
    const dueInfo = getDueInfo(p);
    const statusClass = p.status === 'fulfilled' ? 'fulfilled' : dueInfo.isOverdue ? 'overdue' : '';
    
    return `
        <div class="promise-card ${statusClass}" data-id="${p.id}" data-category="${p.category}">
            <div class="promise-header">
                <span class="promise-person">
                    ${CATEGORY_ICONS[p.category]}
                    ${escapeHtml(p.person)}
                </span>
                <span class="category-badge">${p.category}</span>
            </div>
            <p class="promise-text">${escapeHtml(p.promise)}</p>
            <div class="promise-footer">
                <span class="promise-due ${dueInfo.class}">
                    ${p.status === 'fulfilled' ? '✅ Fulfilled' : dueInfo.text}
                </span>
                ${p.context ? `<span class="promise-context">${escapeHtml(p.context)}</span>` : ''}
            </div>
        </div>
    `;
}

function getDueInfo(p) {
    if (!p.dueDate) {
        return { text: 'No deadline', class: '', isOverdue: false };
    }

    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const due = new Date(p.dueDate);
    due.setHours(0, 0, 0, 0);
    
    const diffDays = Math.ceil((due - now) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
        const daysAgo = Math.abs(diffDays);
        return {
            text: `⚠️ ${daysAgo} day${daysAgo === 1 ? '' : 's'} overdue`,
            class: 'overdue',
            isOverdue: true
        };
    } else if (diffDays === 0) {
        return { text: '📅 Due today', class: 'soon', isOverdue: false };
    } else if (diffDays === 1) {
        return { text: '📅 Due tomorrow', class: 'soon', isOverdue: false };
    } else if (diffDays <= 7) {
        return { text: `📅 Due in ${diffDays} days`, class: 'soon', isOverdue: false };
    } else {
        return { text: `📅 Due ${formatDate(p.dueDate)}`, class: '', isOverdue: false };
    }
}

function openPromiseDetail(id) {
    selectedPromise = promises.find(p => p.id === id);
    if (!selectedPromise) return;

    const p = selectedPromise;
    const dueInfo = getDueInfo(p);
    
    document.getElementById('modalTitle').textContent = `${CATEGORY_ICONS[p.category]} Promise from ${p.person}`;
    
    document.getElementById('modalBody').innerHTML = `
        <div class="modal-detail">
            <div class="modal-detail-label">What they promised</div>
            <div class="modal-detail-value">${escapeHtml(p.promise)}</div>
        </div>
        ${p.dueDate ? `
        <div class="modal-detail">
            <div class="modal-detail-label">Due by</div>
            <div class="modal-detail-value ${dueInfo.class}">${formatDate(p.dueDate)} ${dueInfo.isOverdue ? '(OVERDUE)' : ''}</div>
        </div>
        ` : ''}
        ${p.context ? `
        <div class="modal-detail">
            <div class="modal-detail-label">Context</div>
            <div class="modal-detail-value">${escapeHtml(p.context)}</div>
        </div>
        ` : ''}
        <div class="modal-detail">
            <div class="modal-detail-label">Logged on</div>
            <div class="modal-detail-value">${formatDate(p.createdAt)}</div>
        </div>
        ${p.fulfilledAt ? `
        <div class="modal-detail">
            <div class="modal-detail-label">Fulfilled on</div>
            <div class="modal-detail-value">${formatDate(p.fulfilledAt)}</div>
        </div>
        ` : ''}
    `;

    document.getElementById('modalActions').innerHTML = p.status === 'fulfilled' ? `
        <button class="btn-delete" onclick="deletePromise(${p.id})">🗑️ Delete</button>
    ` : `
        <button class="btn-fulfill" onclick="fulfillPromise(${p.id})">✅ Mark Fulfilled</button>
        <button class="btn-remind" onclick="copyReminder(${p.id})">📋 Copy Reminder</button>
        <button class="btn-delete" onclick="deletePromise(${p.id})">🗑️</button>
    `;

    detailModal.classList.remove('hidden');
}

function closeModal() {
    detailModal.classList.add('hidden');
    selectedPromise = null;
}

function fulfillPromise(id) {
    const promise = promises.find(p => p.id === id);
    if (promise) {
        promise.status = 'fulfilled';
        promise.fulfilledAt = new Date().toISOString();
        saveData();
        renderPromises();
        updateStats();
        closeModal();
    }
}

function copyReminder(id) {
    const p = promises.find(pr => pr.id === id);
    if (!p) return;

    const reminder = `Hey ${p.person}! Just following up on this - you mentioned you'd ${p.promise.toLowerCase()}. Any update?`;
    
    navigator.clipboard.writeText(reminder).then(() => {
        const btn = document.querySelector('.btn-remind');
        btn.textContent = '✓ Copied!';
        setTimeout(() => {
            btn.textContent = '📋 Copy Reminder';
        }, 2000);
    });
}

function deletePromise(id) {
    if (confirm('Delete this promise? This cannot be undone.')) {
        promises = promises.filter(p => p.id !== id);
        saveData();
        renderPromises();
        updateStats();
        closeModal();
    }
}

function updateStats() {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const active = promises.filter(p => p.status === 'active');
    const overdue = active.filter(p => {
        if (!p.dueDate) return false;
        return new Date(p.dueDate) < now;
    });
    const fulfilled = promises.filter(p => p.status === 'fulfilled');

    activeCount.textContent = active.length;
    overdueCount.textContent = overdue.length;
    fulfilledCount.textContent = fulfilled.length;
}

// Storage
function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(promises));
}

function loadData() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        promises = JSON.parse(data);
    }
}

// Sample data for demo
function addSampleData() {
    if (promises.length > 0) return;

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);
    const lastWeek = new Date(today);
    lastWeek.setDate(lastWeek.getDate() - 5);

    promises = [
        {
            id: 1,
            person: 'Sarah',
            promise: 'Send the Q4 marketing report by end of week',
            category: 'work',
            dueDate: yesterday.toISOString().split('T')[0],
            context: 'Mentioned in Monday standup',
            status: 'active',
            createdAt: lastWeek.toISOString(),
            fulfilledAt: null
        },
        {
            id: 2,
            person: 'Mike',
            promise: 'Pay back the $75 from dinner last weekend',
            category: 'money',
            dueDate: nextWeek.toISOString().split('T')[0],
            context: 'Venmo request sent',
            status: 'active',
            createdAt: lastWeek.toISOString(),
            fulfilledAt: null
        },
        {
            id: 3,
            person: 'Manager (Lisa)',
            promise: 'Discuss promotion timeline in our next 1:1',
            category: 'work',
            dueDate: null,
            context: 'She brought it up in performance review',
            status: 'active',
            createdAt: lastWeek.toISOString(),
            fulfilledAt: null
        },
        {
            id: 4,
            person: 'Alex',
            promise: 'Grab coffee and catch up',
            category: 'social',
            dueDate: null,
            context: 'Bumped into them at the store',
            status: 'active',
            createdAt: lastWeek.toISOString(),
            fulfilledAt: null
        },
        {
            id: 5,
            person: 'John from DevOps',
            promise: 'Review the CI/CD pipeline changes',
            category: 'work',
            dueDate: lastWeek.toISOString().split('T')[0],
            context: 'Slack thread #infrastructure',
            status: 'fulfilled',
            createdAt: new Date(lastWeek.getTime() - 86400000 * 3).toISOString(),
            fulfilledAt: lastWeek.toISOString()
        }
    ];

    saveData();
    renderPromises();
    updateStats();
}

// Utilities
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make functions globally available for onclick handlers
window.fulfillPromise = fulfillPromise;
window.copyReminder = copyReminder;
window.deletePromise = deletePromise;
