// ===== JobPulse - Job Search Command Center =====

// State
let applications = [];
let currentApp = null;

// DOM Elements
const addModal = document.getElementById('addModal');
const detailModal = document.getElementById('detailModal');
const addAppBtn = document.getElementById('addAppBtn');
const closeModal = document.getElementById('closeModal');
const closeDetail = document.getElementById('closeDetail');
const cancelAdd = document.getElementById('cancelAdd');
const addAppForm = document.getElementById('addAppForm');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSampleData();
    renderPipeline();
    renderAnalytics();
    renderReminders();
    renderInterviews();
    updateStats();
    setupEventListeners();
});

// Sample Data
function loadSampleData() {
    const sampleApps = [
        {
            id: 1,
            company: 'Stripe',
            role: 'Senior Software Engineer',
            source: 'referral',
            salary: '$180k-220k',
            resume: 'main',
            status: 'interview',
            notes: 'Referred by John from my previous team. 3rd round scheduled.',
            appliedDate: new Date('2026-02-20'),
            lastUpdate: new Date('2026-03-05'),
            timeline: [
                { date: '2026-02-20', event: 'Applied via referral' },
                { date: '2026-02-25', event: 'Phone screen with recruiter' },
                { date: '2026-03-03', event: 'Technical phone interview' },
                { date: '2026-03-05', event: 'Scheduled onsite for next week' }
            ],
            reminderDate: new Date('2026-03-08')
        },
        {
            id: 2,
            company: 'Vercel',
            role: 'Staff Engineer',
            source: 'linkedin',
            salary: '$200k-250k',
            resume: 'tech',
            status: 'screening',
            notes: 'Great company culture. Focus on DX.',
            appliedDate: new Date('2026-02-28'),
            lastUpdate: new Date('2026-03-02'),
            timeline: [
                { date: '2026-02-28', event: 'Applied via LinkedIn' },
                { date: '2026-03-02', event: 'Recruiter reached out' }
            ],
            reminderDate: new Date('2026-03-07')
        },
        {
            id: 3,
            company: 'Figma',
            role: 'Frontend Engineer',
            source: 'company',
            salary: '$160k-190k',
            resume: 'main',
            status: 'applied',
            notes: '',
            appliedDate: new Date('2026-03-04'),
            lastUpdate: new Date('2026-03-04'),
            timeline: [
                { date: '2026-03-04', event: 'Applied via company site' }
            ],
            reminderDate: new Date('2026-03-07')
        },
        {
            id: 4,
            company: 'Linear',
            role: 'Full Stack Engineer',
            source: 'linkedin',
            salary: '$170k-200k',
            resume: 'main',
            status: 'applied',
            notes: 'Love their product. Would be dream job.',
            appliedDate: new Date('2026-03-05'),
            lastUpdate: new Date('2026-03-05'),
            timeline: [
                { date: '2026-03-05', event: 'Applied via LinkedIn Easy Apply' }
            ],
            reminderDate: new Date('2026-03-08')
        },
        {
            id: 5,
            company: 'Notion',
            role: 'Software Engineer',
            source: 'recruiter',
            salary: '$180k-220k',
            resume: 'tech',
            status: 'offer',
            notes: 'Great offer! Need to decide by Friday.',
            appliedDate: new Date('2026-02-10'),
            lastUpdate: new Date('2026-03-06'),
            timeline: [
                { date: '2026-02-10', event: 'Recruiter reached out' },
                { date: '2026-02-15', event: 'Phone screen' },
                { date: '2026-02-20', event: 'Technical interview' },
                { date: '2026-02-28', event: 'Onsite interview' },
                { date: '2026-03-06', event: 'Received offer!' }
            ],
            reminderDate: new Date('2026-03-10')
        },
        {
            id: 6,
            company: 'Airbnb',
            role: 'Senior Engineer',
            source: 'linkedin',
            salary: '$190k-230k',
            resume: 'main',
            status: 'rejected',
            notes: 'Rejected after technical screen. Feedback: needed more system design experience.',
            appliedDate: new Date('2026-02-01'),
            lastUpdate: new Date('2026-02-20'),
            timeline: [
                { date: '2026-02-01', event: 'Applied via LinkedIn' },
                { date: '2026-02-08', event: 'Phone screen' },
                { date: '2026-02-15', event: 'Technical interview' },
                { date: '2026-02-20', event: 'Rejected' }
            ],
            reminderDate: null
        },
        {
            id: 7,
            company: 'Shopify',
            role: 'Backend Engineer',
            source: 'indeed',
            salary: '$150k-180k',
            resume: 'main',
            status: 'ghosted',
            notes: 'No response after 3 weeks.',
            appliedDate: new Date('2026-02-15'),
            lastUpdate: new Date('2026-02-15'),
            timeline: [
                { date: '2026-02-15', event: 'Applied via Indeed' }
            ],
            reminderDate: null
        },
        {
            id: 8,
            company: 'Datadog',
            role: 'Platform Engineer',
            source: 'company',
            salary: '$175k-210k',
            resume: 'tech',
            status: 'applied',
            notes: 'Strong match with my observability experience.',
            appliedDate: new Date('2026-03-06'),
            lastUpdate: new Date('2026-03-06'),
            timeline: [
                { date: '2026-03-06', event: 'Applied via company site' }
            ],
            reminderDate: new Date('2026-03-09')
        }
    ];
    
    applications = sampleApps;
}

// Event Listeners
function setupEventListeners() {
    // Add application modal
    addAppBtn.addEventListener('click', () => addModal.classList.remove('hidden'));
    closeModal.addEventListener('click', () => addModal.classList.add('hidden'));
    cancelAdd.addEventListener('click', () => addModal.classList.add('hidden'));
    
    // Close detail modal
    closeDetail.addEventListener('click', () => detailModal.classList.remove('hidden'));
    document.getElementById('closeDetail').addEventListener('click', () => {
        detailModal.classList.add('hidden');
    });
    
    // Form submission
    addAppForm.addEventListener('submit', handleAddApplication);
    
    // Mobile menu
    menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const view = item.dataset.view;
            switchView(view);
        });
    });
    
    // Detail modal actions
    document.getElementById('updateStatus').addEventListener('click', handleStatusUpdate);
    document.getElementById('deleteApp').addEventListener('click', handleDeleteApp);
    document.getElementById('detailNotes').addEventListener('blur', handleNotesUpdate);
    
    // Close modals on overlay click
    addModal.addEventListener('click', (e) => {
        if (e.target === addModal) addModal.classList.add('hidden');
    });
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) detailModal.classList.add('hidden');
    });
}

// View Switching
function switchView(viewName) {
    // Update nav
    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewName);
    });
    
    // Update views
    views.forEach(view => {
        view.classList.add('hidden');
    });
    document.getElementById(`${viewName}View`).classList.remove('hidden');
    
    // Update title
    const titles = {
        pipeline: 'Application Pipeline',
        analytics: 'Search Analytics',
        reminders: 'Follow-up Reminders',
        interviews: 'Upcoming Interviews'
    };
    document.getElementById('viewTitle').textContent = titles[viewName];
    
    // Close mobile menu
    sidebar.classList.remove('open');
}

// Render Pipeline
function renderPipeline() {
    const statuses = ['applied', 'screening', 'interview', 'offer', 'rejected', 'ghosted'];
    
    statuses.forEach(status => {
        const container = document.getElementById(`${status}Cards`);
        const apps = applications.filter(app => app.status === status);
        
        container.innerHTML = apps.map(app => createAppCard(app)).join('');
        document.getElementById(`${status}Count`).textContent = apps.length;
        
        // Add click handlers
        container.querySelectorAll('.app-card').forEach(card => {
            card.addEventListener('click', () => openAppDetail(parseInt(card.dataset.id)));
        });
    });
}

// Create Application Card
function createAppCard(app) {
    const daysAgo = Math.floor((new Date() - app.lastUpdate) / (1000 * 60 * 60 * 24));
    let daysClass = '';
    let daysIcon = '📅';
    
    if (daysAgo > 7 && ['applied', 'screening'].includes(app.status)) {
        daysClass = 'overdue';
        daysIcon = '⚠️';
    } else if (daysAgo > 3 && ['applied', 'screening'].includes(app.status)) {
        daysClass = 'urgent';
        daysIcon = '⏰';
    }
    
    return `
        <div class="app-card" data-id="${app.id}">
            <div class="app-card-company">${app.company}</div>
            <div class="app-card-role">${app.role}</div>
            <div class="app-card-meta">
                <span class="app-card-source">${capitalizeFirst(app.source)}</span>
                <span class="app-card-days ${daysClass}">
                    ${daysIcon} ${daysAgo}d ago
                </span>
            </div>
        </div>
    `;
}

// Open Application Detail
function openAppDetail(id) {
    currentApp = applications.find(app => app.id === id);
    if (!currentApp) return;
    
    document.getElementById('detailTitle').textContent = currentApp.company;
    document.getElementById('detailRole').textContent = currentApp.role;
    document.getElementById('detailStatus').textContent = currentApp.status;
    document.getElementById('detailStatus').className = `detail-status ${currentApp.status}`;
    document.getElementById('detailDate').textContent = formatDate(currentApp.appliedDate);
    document.getElementById('detailSource').textContent = capitalizeFirst(currentApp.source);
    document.getElementById('detailSalary').textContent = currentApp.salary || 'Not specified';
    document.getElementById('detailResume').textContent = capitalizeFirst(currentApp.resume) + ' Resume';
    document.getElementById('detailNotes').value = currentApp.notes;
    document.getElementById('statusChange').value = currentApp.status;
    
    // Timeline
    const timelineHtml = currentApp.timeline.map(item => `
        <div class="timeline-item">
            <span class="timeline-date">${formatDate(new Date(item.date))}</span>
            <span class="timeline-event">${item.event}</span>
        </div>
    `).join('');
    document.getElementById('detailTimeline').innerHTML = timelineHtml;
    
    detailModal.classList.remove('hidden');
}

// Handle Add Application
function handleAddApplication(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newApp = {
        id: Date.now(),
        company: formData.get('company'),
        role: formData.get('role'),
        source: formData.get('source'),
        salary: formData.get('salary'),
        resume: formData.get('resume'),
        status: 'applied',
        notes: formData.get('notes'),
        appliedDate: new Date(),
        lastUpdate: new Date(),
        timeline: [
            { date: formatDateISO(new Date()), event: `Applied via ${formData.get('source')}` }
        ],
        reminderDate: formData.get('setReminder') ? addDays(new Date(), 3) : null
    };
    
    applications.unshift(newApp);
    
    renderPipeline();
    renderAnalytics();
    renderReminders();
    updateStats();
    
    e.target.reset();
    addModal.classList.add('hidden');
    
    showToast(`Added ${newApp.company} to your pipeline!`);
}

// Handle Status Update
function handleStatusUpdate() {
    if (!currentApp) return;
    
    const newStatus = document.getElementById('statusChange').value;
    const oldStatus = currentApp.status;
    
    if (newStatus !== oldStatus) {
        currentApp.status = newStatus;
        currentApp.lastUpdate = new Date();
        currentApp.timeline.push({
            date: formatDateISO(new Date()),
            event: `Status changed to ${newStatus}`
        });
        
        // Update reminder based on status
        if (['rejected', 'ghosted', 'offer'].includes(newStatus)) {
            currentApp.reminderDate = null;
        } else {
            currentApp.reminderDate = addDays(new Date(), 3);
        }
        
        renderPipeline();
        renderAnalytics();
        renderReminders();
        updateStats();
        
        // Update detail view
        document.getElementById('detailStatus').textContent = newStatus;
        document.getElementById('detailStatus').className = `detail-status ${newStatus}`;
        
        showToast(`Updated ${currentApp.company} to ${newStatus}`);
    }
}

// Handle Delete Application
function handleDeleteApp() {
    if (!currentApp) return;
    
    if (confirm(`Delete ${currentApp.company} from your pipeline?`)) {
        applications = applications.filter(app => app.id !== currentApp.id);
        
        renderPipeline();
        renderAnalytics();
        renderReminders();
        updateStats();
        
        detailModal.classList.add('hidden');
        currentApp = null;
        
        showToast('Application deleted');
    }
}

// Handle Notes Update
function handleNotesUpdate(e) {
    if (!currentApp) return;
    currentApp.notes = e.target.value;
}

// Render Analytics
function renderAnalytics() {
    // Weekly applications
    const weekAgo = addDays(new Date(), -7);
    const weeklyApps = applications.filter(app => app.appliedDate >= weekAgo);
    document.getElementById('weeklyApps').textContent = weeklyApps.length;
    
    // Weekly chart
    const chartContainer = document.getElementById('weeklyChart');
    const dailyCounts = [];
    for (let i = 6; i >= 0; i--) {
        const day = addDays(new Date(), -i);
        const count = applications.filter(app => 
            formatDateISO(app.appliedDate) === formatDateISO(day)
        ).length;
        dailyCounts.push(count);
    }
    const maxCount = Math.max(...dailyCounts, 1);
    chartContainer.innerHTML = dailyCounts.map(count => 
        `<div class="chart-bar" style="height: ${(count / maxCount) * 100}%"></div>`
    ).join('');
    
    // Source breakdown
    const sources = ['linkedin', 'indeed', 'company', 'referral', 'recruiter'];
    const sourceBars = document.getElementById('sourceBars');
    
    const sourceStats = sources.map(source => {
        const sourceApps = applications.filter(app => app.source === source);
        const responded = sourceApps.filter(app => 
            !['applied', 'ghosted'].includes(app.status)
        ).length;
        const rate = sourceApps.length > 0 ? Math.round((responded / sourceApps.length) * 100) : 0;
        return { source, count: sourceApps.length, rate };
    }).filter(s => s.count > 0);
    
    sourceBars.innerHTML = sourceStats.map(s => `
        <div class="source-bar-item">
            <span class="source-bar-label">${capitalizeFirst(s.source)}</span>
            <div class="source-bar-track">
                <div class="source-bar-fill" style="width: ${s.rate}%"></div>
            </div>
            <span class="source-bar-value">${s.rate}%</span>
        </div>
    `).join('');
    
    // Average response time
    const respondedApps = applications.filter(app => 
        !['applied', 'ghosted'].includes(app.status) && app.timeline.length > 1
    );
    if (respondedApps.length > 0) {
        const totalDays = respondedApps.reduce((sum, app) => {
            const firstResponse = new Date(app.timeline[1].date);
            const applied = new Date(app.timeline[0].date);
            return sum + Math.floor((firstResponse - applied) / (1000 * 60 * 60 * 24));
        }, 0);
        const avgDays = Math.round(totalDays / respondedApps.length);
        document.getElementById('avgResponse').textContent = `${avgDays} days`;
    }
    
    // Interview conversion
    const totalApps = applications.length;
    const interviewApps = applications.filter(app => 
        ['interview', 'offer'].includes(app.status)
    ).length;
    const conversion = totalApps > 0 ? Math.round((interviewApps / totalApps) * 100) : 0;
    document.getElementById('interviewConversion').textContent = `${conversion}%`;
}

// Render Reminders
function renderReminders() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const overdue = [];
    const todayReminders = [];
    const upcoming = [];
    
    applications.forEach(app => {
        if (!app.reminderDate || ['rejected', 'ghosted', 'offer'].includes(app.status)) return;
        
        const reminderDate = new Date(app.reminderDate);
        reminderDate.setHours(0, 0, 0, 0);
        
        if (reminderDate < today) {
            overdue.push(app);
        } else if (reminderDate.getTime() === today.getTime()) {
            todayReminders.push(app);
        } else if (reminderDate <= addDays(today, 7)) {
            upcoming.push(app);
        }
    });
    
    document.getElementById('overdueReminders').innerHTML = 
        overdue.length ? overdue.map(createReminderItem).join('') : '<p class="empty-state">No overdue follow-ups 🎉</p>';
    
    document.getElementById('todayReminders').innerHTML = 
        todayReminders.length ? todayReminders.map(createReminderItem).join('') : '<p class="empty-state">Nothing scheduled for today</p>';
    
    document.getElementById('upcomingReminders').innerHTML = 
        upcoming.length ? upcoming.map(createReminderItem).join('') : '<p class="empty-state">No upcoming reminders</p>';
}

function createReminderItem(app) {
    return `
        <div class="reminder-item">
            <div class="reminder-info">
                <span class="reminder-company">${app.company}</span>
                <span class="reminder-role">${app.role}</span>
            </div>
            <div class="reminder-action">
                <button class="btn btn-secondary" onclick="snoozeReminder(${app.id})">Snooze</button>
                <button class="btn btn-primary" onclick="markFollowedUp(${app.id})">Done</button>
            </div>
        </div>
    `;
}

// Render Interviews
function renderInterviews() {
    const interviewApps = applications.filter(app => app.status === 'interview');
    const container = document.getElementById('interviewsList');
    
    if (interviewApps.length === 0) {
        container.innerHTML = '<p class="empty-state">No upcoming interviews scheduled</p>';
        return;
    }
    
    container.innerHTML = interviewApps.map(app => {
        const date = new Date(app.lastUpdate);
        date.setDate(date.getDate() + 3); // Mock interview date
        
        return `
            <div class="interview-card">
                <div class="interview-date">
                    <div class="interview-date-day">${date.getDate()}</div>
                    <div class="interview-date-month">${date.toLocaleString('en', { month: 'short' })}</div>
                </div>
                <div class="interview-details">
                    <div class="interview-company">${app.company}</div>
                    <div class="interview-role">${app.role}</div>
                    <span class="interview-type">🎯 Technical Interview</span>
                </div>
            </div>
        `;
    }).join('');
}

// Update Stats
function updateStats() {
    document.getElementById('totalApps').textContent = applications.length;
    
    const responded = applications.filter(app => 
        !['applied', 'ghosted'].includes(app.status)
    ).length;
    const rate = applications.length > 0 
        ? Math.round((responded / applications.length) * 100) 
        : 0;
    document.getElementById('responseRate').textContent = `${rate}%`;
}

// Reminder Actions
window.snoozeReminder = function(id) {
    const app = applications.find(a => a.id === id);
    if (app) {
        app.reminderDate = addDays(new Date(), 2);
        renderReminders();
        showToast(`Snoozed reminder for ${app.company}`);
    }
};

window.markFollowedUp = function(id) {
    const app = applications.find(a => a.id === id);
    if (app) {
        app.reminderDate = addDays(new Date(), 3);
        app.lastUpdate = new Date();
        app.timeline.push({
            date: formatDateISO(new Date()),
            event: 'Followed up'
        });
        renderReminders();
        renderPipeline();
        showToast(`Marked follow-up complete for ${app.company}`);
    }
};

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

function formatDateISO(date) {
    return new Date(date).toISOString().split('T')[0];
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function showToast(message) {
    // Simple toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: var(--color-surface);
        color: var(--color-text);
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
