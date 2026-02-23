// MoveSync - Address Update Manager
// Service database with categories and update URLs

const servicesData = {
    financial: {
        icon: '🏦',
        name: 'Financial',
        services: [
            { id: 'chase', name: 'Chase Bank', url: 'https://www.chase.com/personal/customer-service' },
            { id: 'bofa', name: 'Bank of America', url: 'https://www.bankofamerica.com' },
            { id: 'wells', name: 'Wells Fargo', url: 'https://www.wellsfargo.com' },
            { id: 'amex', name: 'American Express', url: 'https://www.americanexpress.com' },
            { id: 'discover', name: 'Discover', url: 'https://www.discover.com' },
            { id: 'fidelity', name: 'Fidelity', url: 'https://www.fidelity.com' },
            { id: 'vanguard', name: 'Vanguard', url: 'https://www.vanguard.com' }
        ]
    },
    medical: {
        icon: '🏥',
        name: 'Medical',
        services: [
            { id: 'doctor', name: 'Primary Care Doctor', url: null },
            { id: 'dentist', name: 'Dentist', url: null },
            { id: 'pharmacy', name: 'Pharmacy (CVS/Walgreens)', url: 'https://www.cvs.com' },
            { id: 'healthins', name: 'Health Insurance', url: null },
            { id: 'eye', name: 'Eye Doctor', url: null }
        ]
    },
    insurance: {
        icon: '🛡️',
        name: 'Insurance',
        services: [
            { id: 'geico', name: 'Geico (Auto)', url: 'https://www.geico.com' },
            { id: 'statefarm', name: 'State Farm', url: 'https://www.statefarm.com' },
            { id: 'progressive', name: 'Progressive', url: 'https://www.progressive.com' },
            { id: 'homeins', name: 'Homeowners/Renters Insurance', url: null },
            { id: 'lifeins', name: 'Life Insurance', url: null }
        ]
    },
    subscriptions: {
        icon: '📦',
        name: 'Subscriptions',
        services: [
            { id: 'netflix', name: 'Netflix', url: 'https://www.netflix.com/YourAccount' },
            { id: 'spotify', name: 'Spotify', url: 'https://www.spotify.com/account' },
            { id: 'amazon-prime', name: 'Amazon Prime', url: 'https://www.amazon.com/gp/css/homepage.html' },
            { id: 'disney', name: 'Disney+', url: 'https://www.disneyplus.com' },
            { id: 'hulu', name: 'Hulu', url: 'https://www.hulu.com' },
            { id: 'gym', name: 'Gym Membership', url: null }
        ]
    },
    shopping: {
        icon: '🛒',
        name: 'Shopping',
        services: [
            { id: 'amazon', name: 'Amazon', url: 'https://www.amazon.com/a/addresses' },
            { id: 'target', name: 'Target', url: 'https://www.target.com' },
            { id: 'walmart', name: 'Walmart', url: 'https://www.walmart.com' },
            { id: 'ebay', name: 'eBay', url: 'https://www.ebay.com' },
            { id: 'etsy', name: 'Etsy', url: 'https://www.etsy.com' }
        ]
    },
    government: {
        icon: '🏛️',
        name: 'Government',
        services: [
            { id: 'dmv', name: 'DMV (Driver\'s License)', url: null },
            { id: 'voter', name: 'Voter Registration', url: 'https://www.vote.gov' },
            { id: 'irs', name: 'IRS', url: 'https://www.irs.gov/faqs/irs-procedures/address-changes' },
            { id: 'ssa', name: 'Social Security', url: 'https://www.ssa.gov' },
            { id: 'passport', name: 'Passport (if needed)', url: 'https://travel.state.gov' }
        ]
    },
    utilities: {
        icon: '📡',
        name: 'Utilities',
        services: [
            { id: 'electric', name: 'Electric Company', url: null },
            { id: 'gas', name: 'Gas Company', url: null },
            { id: 'water', name: 'Water/Sewer', url: null },
            { id: 'internet', name: 'Internet Provider', url: null },
            { id: 'phone', name: 'Phone/Mobile Carrier', url: null }
        ]
    },
    other: {
        icon: '📋',
        name: 'Other',
        services: [
            { id: 'usps', name: 'USPS Mail Forwarding', url: 'https://moversguide.usps.com' },
            { id: 'employer', name: 'Employer/HR', url: null },
            { id: 'school', name: 'School/University', url: null },
            { id: 'vet', name: 'Veterinarian', url: null },
            { id: 'lawyer', name: 'Attorney', url: null }
        ]
    }
};

const timelineData = [
    {
        date: 'T-30 days',
        title: 'Start Planning',
        tasks: 'Research utilities at new address. Request quotes from moving companies. Start decluttering.',
        status: 'completed'
    },
    {
        date: 'T-14 days',
        title: 'Update Shipping Addresses',
        tasks: 'Update Amazon, online shopping accounts. Notify magazine/box subscriptions. Transfer utilities.',
        status: 'completed'
    },
    {
        date: 'T-7 days',
        title: 'USPS & Government',
        tasks: 'Set up USPS mail forwarding. Update DMV if changing states. Notify insurance companies.',
        status: 'current'
    },
    {
        date: 'Move Day',
        title: 'The Big Move',
        tasks: 'Final walk-through of old place. Set up internet at new place. Update employer/HR.',
        status: 'upcoming'
    },
    {
        date: 'T+7 days',
        title: 'First Week Check',
        tasks: 'Confirm utilities working. Update voter registration. Notify banks and financial institutions.',
        status: 'upcoming'
    },
    {
        date: 'T+30 days',
        title: 'Final Sweep',
        tasks: 'Review any missed services. Check for mail still going to old address. Update remaining accounts.',
        status: 'upcoming'
    }
];

// State
let services = {};
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderCategories();
    renderTimeline();
    updateProgress();
    setupEventListeners();
});

function loadState() {
    const saved = localStorage.getItem('movesync-services');
    if (saved) {
        services = JSON.parse(saved);
    } else {
        // Initialize all services as pending
        Object.keys(servicesData).forEach(categoryId => {
            servicesData[categoryId].services.forEach(service => {
                services[service.id] = { status: 'pending' };
            });
        });
        saveState();
    }
}

function saveState() {
    localStorage.setItem('movesync-services', JSON.stringify(services));
}

function renderCategories() {
    const container = document.getElementById('categories-container');
    container.innerHTML = '';

    Object.entries(servicesData).forEach(([categoryId, category]) => {
        const filteredServices = category.services.filter(service => {
            const status = services[service.id]?.status || 'pending';
            if (currentFilter === 'all') return true;
            return status === currentFilter;
        });

        if (filteredServices.length === 0) return;

        const categoryEl = document.createElement('div');
        categoryEl.className = 'category';
        categoryEl.innerHTML = `
            <div class="category-header">
                <span class="category-title">${category.icon} ${category.name}</span>
                <span class="category-count">${filteredServices.length}</span>
            </div>
            <div class="category-items">
                ${filteredServices.map(service => renderServiceItem(service)).join('')}
            </div>
        `;
        container.appendChild(categoryEl);
    });

    if (container.children.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="emoji">✨</div>
                <p>No services in this category</p>
            </div>
        `;
    }
}

function renderServiceItem(service) {
    const status = services[service.id]?.status || 'pending';
    const checkIcon = status === 'done' ? '✓' : status === 'skipped' ? '—' : '';
    const checkClass = status === 'done' ? 'checked' : status === 'skipped' ? 'skipped' : '';

    return `
        <div class="service-item ${status}" data-id="${service.id}">
            <div class="service-checkbox ${checkClass}" data-action="toggle">
                ${checkIcon}
            </div>
            <div class="service-info">
                <div class="service-name">${service.name}</div>
                <div class="service-status">${getStatusText(status)}</div>
            </div>
            <div class="service-actions">
                ${service.url ? `
                    <button class="action-btn link-btn" data-action="link" data-url="${service.url}" title="Go to update page">
                        🔗
                    </button>
                ` : ''}
                <button class="action-btn skip-btn" data-action="skip" title="${status === 'skipped' ? 'Unskip' : 'Skip'}">
                    ${status === 'skipped' ? '↩️' : '⏭️'}
                </button>
            </div>
        </div>
    `;
}

function getStatusText(status) {
    switch(status) {
        case 'done': return 'Updated ✓';
        case 'skipped': return 'Skipped';
        default: return 'Pending';
    }
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = timelineData.map(item => `
        <div class="timeline-item ${item.status}">
            <div class="timeline-marker"></div>
            <div class="timeline-date">${item.date}</div>
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-tasks">${item.tasks}</div>
        </div>
    `).join('');
}

function updateProgress() {
    const allServices = Object.keys(services);
    const total = allServices.length;
    const done = allServices.filter(id => services[id].status === 'done').length;
    const skipped = allServices.filter(id => services[id].status === 'skipped').length;
    const pending = total - done - skipped;

    document.getElementById('completed-count').textContent = done;
    document.getElementById('total-count').textContent = total;
    document.getElementById('pending-count').textContent = pending;
    document.getElementById('done-count').textContent = done;
    document.getElementById('skipped-count').textContent = skipped;

    const percentage = total > 0 ? (done / total) * 100 : 0;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
}

function setupEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabId = tab.dataset.tab;
            document.getElementById('checklist-view').classList.toggle('hidden', tabId !== 'checklist');
            document.getElementById('timeline-view').classList.toggle('hidden', tabId !== 'timeline');
        });
    });

    // Filter pills
    document.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentFilter = pill.dataset.filter;
            renderCategories();
        });
    });

    // Service actions (delegated)
    document.getElementById('categories-container').addEventListener('click', (e) => {
        const action = e.target.closest('[data-action]');
        if (!action) return;

        const serviceItem = e.target.closest('.service-item');
        const serviceId = serviceItem?.dataset.id;

        switch(action.dataset.action) {
            case 'toggle':
                toggleService(serviceId);
                break;
            case 'link':
                window.open(action.dataset.url, '_blank');
                break;
            case 'skip':
                skipService(serviceId);
                break;
        }
    });

    // Add custom modal
    document.getElementById('add-custom-btn').addEventListener('click', () => {
        document.getElementById('modal-overlay').classList.remove('hidden');
    });

    document.getElementById('modal-cancel').addEventListener('click', () => {
        document.getElementById('modal-overlay').classList.add('hidden');
    });

    document.getElementById('modal-save').addEventListener('click', () => {
        const name = document.getElementById('custom-name').value.trim();
        const category = document.getElementById('custom-category').value;
        const url = document.getElementById('custom-url').value.trim() || null;

        if (name) {
            addCustomService(name, category, url);
            document.getElementById('modal-overlay').classList.add('hidden');
            document.getElementById('custom-name').value = '';
            document.getElementById('custom-url').value = '';
        }
    });

    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            e.currentTarget.classList.add('hidden');
        }
    });
}

function toggleService(serviceId) {
    const current = services[serviceId]?.status || 'pending';
    services[serviceId] = {
        status: current === 'done' ? 'pending' : 'done'
    };
    saveState();
    renderCategories();
    updateProgress();
}

function skipService(serviceId) {
    const current = services[serviceId]?.status || 'pending';
    services[serviceId] = {
        status: current === 'skipped' ? 'pending' : 'skipped'
    };
    saveState();
    renderCategories();
    updateProgress();
}

function addCustomService(name, categoryId, url) {
    const id = 'custom-' + Date.now();
    
    // Add to services data
    if (!servicesData[categoryId]) {
        servicesData[categoryId] = { icon: '📋', name: 'Other', services: [] };
    }
    servicesData[categoryId].services.push({ id, name, url });
    
    // Add to state
    services[id] = { status: 'pending' };
    saveState();
    
    renderCategories();
    updateProgress();
}
