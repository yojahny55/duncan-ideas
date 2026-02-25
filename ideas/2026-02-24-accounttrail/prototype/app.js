// AccountTrail - App Logic

// Sample data
const sampleAccounts = [
    {
        id: 1,
        name: 'Netflix',
        url: 'https://netflix.com',
        loginMethod: 'email',
        email: 'john@gmail.com',
        has2FA: 'no',
        twoFAType: '',
        category: 'entertainment',
        notes: '',
        createdAt: '2024-03-15'
    },
    {
        id: 2,
        name: 'GitHub',
        url: 'https://github.com',
        loginMethod: 'google',
        email: 'john@gmail.com',
        has2FA: 'yes',
        twoFAType: 'authenticator',
        category: 'developer',
        notes: 'Work and personal projects',
        createdAt: '2023-01-10'
    },
    {
        id: 3,
        name: 'Spotify',
        url: 'https://spotify.com',
        loginMethod: 'apple',
        email: 'john@icloud.com',
        has2FA: 'unknown',
        twoFAType: '',
        category: 'entertainment',
        notes: 'Family plan',
        createdAt: '2022-08-20'
    },
    {
        id: 4,
        name: 'Slack (Work)',
        url: 'https://mycompany.slack.com',
        loginMethod: 'sso',
        email: 'john@company.com',
        has2FA: 'yes',
        twoFAType: 'authenticator',
        category: 'work',
        notes: 'Company workspace',
        createdAt: '2024-06-01'
    },
    {
        id: 5,
        name: 'Amazon',
        url: 'https://amazon.com',
        loginMethod: 'email',
        email: 'john@gmail.com',
        has2FA: 'yes',
        twoFAType: 'sms',
        category: 'shopping',
        notes: 'Prime membership active',
        createdAt: '2020-02-14'
    },
    {
        id: 6,
        name: 'Notion',
        url: 'https://notion.so',
        loginMethod: 'google',
        email: 'john.personal@gmail.com',
        has2FA: 'no',
        twoFAType: '',
        category: 'work',
        notes: '',
        createdAt: '2023-11-05'
    },
    {
        id: 7,
        name: 'LinkedIn',
        url: 'https://linkedin.com',
        loginMethod: 'email',
        email: 'john@gmail.com',
        has2FA: 'yes',
        twoFAType: 'authenticator',
        category: 'social',
        notes: '',
        createdAt: '2019-05-22'
    },
    {
        id: 8,
        name: 'Figma',
        url: 'https://figma.com',
        loginMethod: 'google',
        email: 'john@company.com',
        has2FA: 'yes',
        twoFAType: 'authenticator',
        category: 'developer',
        notes: 'Company account',
        createdAt: '2024-02-28'
    },
    {
        id: 9,
        name: 'Discord',
        url: 'https://discord.com',
        loginMethod: 'email',
        email: 'john.personal@gmail.com',
        has2FA: 'no',
        twoFAType: '',
        category: 'social',
        notes: 'Gaming servers',
        createdAt: '2021-09-15'
    },
    {
        id: 10,
        name: 'Vercel',
        url: 'https://vercel.com',
        loginMethod: 'github',
        email: 'john@gmail.com',
        has2FA: 'yes',
        twoFAType: 'authenticator',
        category: 'developer',
        notes: 'Hobby tier',
        createdAt: '2023-07-12'
    }
];

// State
let accounts = JSON.parse(localStorage.getItem('accounttrail_accounts')) || sampleAccounts;
let currentView = 'all';
let searchQuery = '';

// DOM Elements
const accountsGrid = document.getElementById('accounts-grid');
const emptyState = document.getElementById('empty-state');
const modalOverlay = document.getElementById('modal-overlay');
const detailModal = document.getElementById('detail-modal');
const accountForm = document.getElementById('account-form');
const searchInput = document.getElementById('search-input');
const totalCount = document.getElementById('total-count');
const no2faCount = document.getElementById('no-2fa-count');
const viewTitle = document.getElementById('view-title');
const viewSubtitle = document.getElementById('view-subtitle');
const emailFilters = document.getElementById('email-filters');
const emailSuggestions = document.getElementById('email-suggestions');

// Service Icons (emoji fallbacks)
const serviceIcons = {
    'netflix': '🎬',
    'github': '🐙',
    'spotify': '🎵',
    'slack': '💬',
    'amazon': '📦',
    'notion': '📝',
    'linkedin': '💼',
    'figma': '🎨',
    'discord': '🎮',
    'vercel': '▲',
    'twitter': '🐦',
    'facebook': '👤',
    'instagram': '📷',
    'google': '🔍',
    'apple': '🍎',
    'microsoft': '🪟',
    'dropbox': '📂',
    'zoom': '📹',
    'stripe': '💳',
    'default': '🌐'
};

// Login Method Labels
const loginMethodLabels = {
    'google': { label: 'Google', icon: '🔷' },
    'apple': { label: 'Apple', icon: '🍎' },
    'email': { label: 'Email', icon: '✉️' },
    'github': { label: 'GitHub', icon: '🐙' },
    'microsoft': { label: 'Microsoft', icon: '🪟' },
    'sso': { label: 'SSO', icon: '🏢' },
    'phone': { label: 'Phone', icon: '📱' },
    'other': { label: 'Other', icon: '🔐' }
};

// Category Labels
const categoryLabels = {
    'social': 'Social Media',
    'entertainment': 'Entertainment',
    'finance': 'Finance',
    'work': 'Work',
    'shopping': 'Shopping',
    'developer': 'Developer',
    'travel': 'Travel',
    'health': 'Health',
    'education': 'Education',
    'other': 'Other'
};

// Email Colors
const emailColors = [
    '#7c3aed', '#ec4899', '#f59e0b', '#22c55e', '#3b82f6', '#ef4444'
];

// Initialize
function init() {
    renderAccounts();
    updateCounts();
    renderEmailFilters();
    setupEventListeners();
}

// Render Accounts
function renderAccounts() {
    const filtered = filterAccounts();
    
    if (filtered.length === 0) {
        accountsGrid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }
    
    accountsGrid.classList.remove('hidden');
    emptyState.classList.add('hidden');
    
    accountsGrid.innerHTML = filtered.map(account => createAccountCard(account)).join('');
    
    // Add click handlers
    document.querySelectorAll('.account-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            showAccountDetail(id);
        });
    });
}

// Filter Accounts
function filterAccounts() {
    let filtered = [...accounts];
    
    // Search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(a => 
            a.name.toLowerCase().includes(query) ||
            a.email.toLowerCase().includes(query) ||
            a.url?.toLowerCase().includes(query)
        );
    }
    
    // View filter
    switch (currentView) {
        case 'google':
            filtered = filtered.filter(a => a.loginMethod === 'google');
            break;
        case 'apple':
            filtered = filtered.filter(a => a.loginMethod === 'apple');
            break;
        case 'email':
            filtered = filtered.filter(a => a.loginMethod === 'email');
            break;
        case 'sso':
            filtered = filtered.filter(a => a.loginMethod === 'sso');
            break;
        case 'no-2fa':
            filtered = filtered.filter(a => a.has2FA === 'no');
            break;
        case 'has-2fa':
            filtered = filtered.filter(a => a.has2FA === 'yes');
            break;
        default:
            if (currentView.startsWith('email:')) {
                const email = currentView.substring(6);
                filtered = filtered.filter(a => a.email === email);
            }
    }
    
    return filtered;
}

// Create Account Card
function createAccountCard(account) {
    const icon = getServiceIcon(account.name);
    const loginInfo = loginMethodLabels[account.loginMethod] || loginMethodLabels.other;
    
    return `
        <div class="account-card" data-id="${account.id}">
            <div class="card-header">
                <div class="card-icon">${icon}</div>
                <div class="card-title-group">
                    <div class="card-title">${escapeHtml(account.name)}</div>
                    <div class="card-url">${account.url ? new URL(account.url).hostname : '—'}</div>
                </div>
            </div>
            <div class="card-body">
                <div class="card-row">
                    <span class="card-label">Login</span>
                    <span class="login-badge ${account.loginMethod}">
                        ${loginInfo.icon} ${loginInfo.label}
                    </span>
                </div>
                <div class="card-row">
                    <span class="card-label">Email</span>
                    <span class="card-value">${escapeHtml(account.email)}</span>
                </div>
                <div class="card-row">
                    <span class="card-label">2FA</span>
                    <span class="twofa-badge ${account.has2FA === 'yes' ? 'enabled' : 'disabled'}">
                        ${account.has2FA === 'yes' ? '🛡️ Enabled' : account.has2FA === 'unknown' ? '❓ Unknown' : '⚠️ Off'}
                    </span>
                </div>
            </div>
        </div>
    `;
}

// Get Service Icon
function getServiceIcon(name) {
    const key = name.toLowerCase().split(' ')[0].split('(')[0].trim();
    return serviceIcons[key] || serviceIcons.default;
}

// Update Counts
function updateCounts() {
    totalCount.textContent = accounts.length;
    no2faCount.textContent = accounts.filter(a => a.has2FA === 'no').length;
}

// Render Email Filters
function renderEmailFilters() {
    const emails = [...new Set(accounts.map(a => a.email))];
    
    emailFilters.innerHTML = emails.map((email, i) => `
        <div class="email-filter" data-email="${escapeHtml(email)}">
            <span class="email-dot" style="background: ${emailColors[i % emailColors.length]}"></span>
            <span>${escapeHtml(email)}</span>
        </div>
    `).join('');
    
    // Add click handlers
    document.querySelectorAll('.email-filter').forEach(filter => {
        filter.addEventListener('click', () => {
            currentView = `email:${filter.dataset.email}`;
            updateViewTitle();
            renderAccounts();
            updateNavActive();
        });
    });
    
    // Update email suggestions in form
    updateEmailSuggestions();
}

// Update Email Suggestions
function updateEmailSuggestions() {
    const emails = [...new Set(accounts.map(a => a.email))];
    
    emailSuggestions.innerHTML = emails.map(email => `
        <span class="email-suggestion" data-email="${escapeHtml(email)}">${escapeHtml(email)}</span>
    `).join('');
    
    document.querySelectorAll('.email-suggestion').forEach(suggestion => {
        suggestion.addEventListener('click', () => {
            document.getElementById('email-used').value = suggestion.dataset.email;
        });
    });
}

// Update View Title
function updateViewTitle() {
    const titles = {
        'all': { title: 'All Accounts', subtitle: 'Your complete account registry' },
        'google': { title: 'Google Sign-In', subtitle: 'Accounts using Google authentication' },
        'apple': { title: 'Sign in with Apple', subtitle: 'Accounts using Apple authentication' },
        'email': { title: 'Email & Password', subtitle: 'Traditional login accounts' },
        'sso': { title: 'SSO / Work', subtitle: 'Single sign-on accounts' },
        'no-2fa': { title: 'Missing 2FA', subtitle: 'Accounts without two-factor authentication' },
        'has-2fa': { title: '2FA Enabled', subtitle: 'Secured accounts with two-factor authentication' }
    };
    
    if (currentView.startsWith('email:')) {
        const email = currentView.substring(6);
        viewTitle.textContent = email;
        viewSubtitle.textContent = `All accounts using this email`;
    } else {
        const info = titles[currentView] || titles.all;
        viewTitle.textContent = info.title;
        viewSubtitle.textContent = info.subtitle;
    }
}

// Update Nav Active State
function updateNavActive() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.view === currentView) {
            item.classList.add('active');
        }
    });
}

// Show Account Detail
function showAccountDetail(id) {
    const account = accounts.find(a => a.id === id);
    if (!account) return;
    
    const loginInfo = loginMethodLabels[account.loginMethod] || loginMethodLabels.other;
    
    document.getElementById('detail-title').textContent = account.name;
    document.getElementById('detail-content').innerHTML = `
        <div class="detail-section">
            <h3>Account Information</h3>
            <div class="detail-row">
                <span class="detail-label">Service</span>
                <span class="detail-value">${escapeHtml(account.name)}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Website</span>
                <span class="detail-value">${account.url ? `<a href="${account.url}" target="_blank" style="color: var(--accent)">${account.url}</a>` : '—'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Category</span>
                <span class="detail-value">${categoryLabels[account.category] || account.category}</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Login Details</h3>
            <div class="detail-row">
                <span class="detail-label">Method</span>
                <span class="detail-value">
                    <span class="login-badge ${account.loginMethod}">
                        ${loginInfo.icon} ${loginInfo.label}
                    </span>
                </span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Email</span>
                <span class="detail-value">${escapeHtml(account.email)}</span>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>Security</h3>
            <div class="detail-row">
                <span class="detail-label">2FA Status</span>
                <span class="detail-value">
                    <span class="twofa-badge ${account.has2FA === 'yes' ? 'enabled' : 'disabled'}">
                        ${account.has2FA === 'yes' ? '🛡️ Enabled' : account.has2FA === 'unknown' ? '❓ Unknown' : '⚠️ Off'}
                    </span>
                </span>
            </div>
            ${account.twoFAType ? `
            <div class="detail-row">
                <span class="detail-label">2FA Type</span>
                <span class="detail-value">${account.twoFAType}</span>
            </div>
            ` : ''}
        </div>
        
        ${account.notes ? `
        <div class="detail-section">
            <h3>Notes</h3>
            <p style="color: var(--text-secondary); font-size: 14px;">${escapeHtml(account.notes)}</p>
        </div>
        ` : ''}
        
        <div class="detail-section">
            <h3>Metadata</h3>
            <div class="detail-row">
                <span class="detail-label">Added</span>
                <span class="detail-value">${account.createdAt}</span>
            </div>
        </div>
        
        <div class="detail-actions">
            <button class="btn btn-secondary" onclick="closeDetailModal()">Close</button>
            <button class="btn btn-danger" onclick="deleteAccount(${account.id})">Delete</button>
        </div>
    `;
    
    detailModal.classList.remove('hidden');
}

// Close Detail Modal
function closeDetailModal() {
    detailModal.classList.add('hidden');
}

// Delete Account
function deleteAccount(id) {
    if (confirm('Are you sure you want to delete this account?')) {
        accounts = accounts.filter(a => a.id !== id);
        saveAccounts();
        closeDetailModal();
        renderAccounts();
        updateCounts();
        renderEmailFilters();
    }
}

// Save Accounts to LocalStorage
function saveAccounts() {
    localStorage.setItem('accounttrail_accounts', JSON.stringify(accounts));
}

// Setup Event Listeners
function setupEventListeners() {
    // Add Account Button
    document.getElementById('add-account-btn').addEventListener('click', () => {
        modalOverlay.classList.remove('hidden');
    });
    
    // Modal Close
    document.getElementById('modal-close').addEventListener('click', () => {
        modalOverlay.classList.add('hidden');
        accountForm.reset();
    });
    
    document.getElementById('cancel-btn').addEventListener('click', () => {
        modalOverlay.classList.add('hidden');
        accountForm.reset();
    });
    
    // Detail Modal Close
    document.getElementById('detail-close').addEventListener('click', closeDetailModal);
    
    // Close modals on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.add('hidden');
            accountForm.reset();
        }
    });
    
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            closeDetailModal();
        }
    });
    
    // Form Submit
    accountForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newAccount = {
            id: Date.now(),
            name: document.getElementById('service-name').value,
            url: document.getElementById('service-url').value,
            loginMethod: document.getElementById('login-method').value,
            email: document.getElementById('email-used').value,
            has2FA: document.getElementById('has-2fa').value,
            twoFAType: document.getElementById('two-fa-type').value,
            category: document.getElementById('category').value,
            notes: document.getElementById('notes').value,
            createdAt: new Date().toISOString().split('T')[0]
        };
        
        accounts.unshift(newAccount);
        saveAccounts();
        
        modalOverlay.classList.add('hidden');
        accountForm.reset();
        
        renderAccounts();
        updateCounts();
        renderEmailFilters();
    });
    
    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderAccounts();
    });
    
    // Nav Items
    document.querySelectorAll('.nav-item[data-view]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            currentView = item.dataset.view;
            updateViewTitle();
            renderAccounts();
            updateNavActive();
        });
    });
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize app
init();
