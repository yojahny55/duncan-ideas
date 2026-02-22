// CancelScore - Interactive Prototype

// Sample company data
const companies = [
    {
        id: 1,
        name: "Planet Fitness",
        category: "Gyms",
        grade: "D",
        method: "In-Person or Mail",
        avgSteps: 8,
        avgTime: "45 min",
        reports: 2847,
        tags: ["Certified mail required", "30-day notice", "Retention calls"],
        breakdown: {
            method: "Must visit in-person OR send certified mail",
            steps: "8 steps including confirmation calls",
            waitTime: "30-60 min average hold time",
            pressure: "Heavy - multiple retention offers"
        },
        tips: [
            { user: "frustrated_member", date: "2 days ago", text: "Go in person and record everything. They'll try to claim they never received your cancellation. Bring ID and keep the confirmation receipt." }
        ]
    },
    {
        id: 2,
        name: "Netflix",
        category: "Streaming",
        grade: "A",
        method: "Online",
        avgSteps: 2,
        avgTime: "< 1 min",
        reports: 5621,
        tags: ["Self-service", "No calls needed", "Instant"],
        breakdown: {
            method: "Fully online self-service",
            steps: "2 clicks: Account → Cancel Membership",
            waitTime: "Instant, no waiting",
            pressure: "None - just shows what you'll miss"
        },
        tips: [
            { user: "cord_cutter", date: "1 week ago", text: "Super easy. Settings > Cancel. They show what you'll lose access to but no hard sell. You can even re-subscribe instantly if you change your mind." }
        ]
    },
    {
        id: 3,
        name: "LA Fitness",
        category: "Gyms",
        grade: "F",
        method: "Certified Mail Only",
        avgSteps: 12,
        avgTime: "2+ hours",
        reports: 3156,
        tags: ["Certified mail ONLY", "Keep billing after cancel", "Nightmare"],
        breakdown: {
            method: "Certified mail to corporate HQ ONLY",
            steps: "12+ steps including follow-ups",
            waitTime: "Takes weeks, often ignored",
            pressure: "Extreme - will keep charging you"
        },
        tips: [
            { user: "legal_battle_won", date: "3 days ago", text: "Document EVERYTHING. Send certified mail with return receipt. They'll keep charging you. I had to dispute with my bank. Screenshot your mailed letter and tracking number." }
        ]
    },
    {
        id: 4,
        name: "Spotify",
        category: "Streaming",
        grade: "A",
        method: "Online",
        avgSteps: 3,
        avgTime: "2 min",
        reports: 4892,
        tags: ["Self-service", "Clear process", "Downgrade option"],
        breakdown: {
            method: "Online through account settings",
            steps: "3 steps with clear confirmation",
            waitTime: "Instant",
            pressure: "Light - offers free tier instead"
        },
        tips: [
            { user: "music_lover", date: "5 days ago", text: "Easy process. They offer to pause instead of cancel which is actually a decent option if you're unsure. Can switch to free tier with ads too." }
        ]
    },
    {
        id: 5,
        name: "New York Times",
        category: "News",
        grade: "C",
        method: "Chat Required",
        avgSteps: 6,
        avgTime: "15-25 min",
        reports: 1843,
        tags: ["Live chat only", "Retention offers", "Wait times"],
        breakdown: {
            method: "Must use live chat - no self-service",
            steps: "6 steps through chat agent",
            waitTime: "15-30 minute wait + chat time",
            pressure: "Moderate - multiple discount offers"
        },
        tips: [
            { user: "news_reader", date: "1 week ago", text: "Use the chat during off-hours (early morning). They'll offer you 50%, then 75% off. If you really want to cancel, just keep saying no. Takes about 20 mins total." }
        ]
    },
    {
        id: 6,
        name: "Adobe Creative Cloud",
        category: "Software",
        grade: "D",
        method: "Phone Required",
        avgSteps: 7,
        avgTime: "30-45 min",
        reports: 2234,
        tags: ["Early termination fee", "Annual commitment", "Retention maze"],
        breakdown: {
            method: "Phone call required for annual plans",
            steps: "7 steps including fee negotiation",
            waitTime: "20-40 min hold time",
            pressure: "Heavy - fee unless you negotiate"
        },
        tips: [
            { user: "designer_escape", date: "4 days ago", text: "If you have an annual plan and cancel early, they charge 50% of remaining months. BUT if you threaten to dispute with credit card, they often waive it. Be firm." }
        ]
    },
    {
        id: 7,
        name: "Amazon Prime",
        category: "Memberships",
        grade: "B",
        method: "Online",
        avgSteps: 5,
        avgTime: "5 min",
        reports: 7823,
        tags: ["Multiple confirmations", "Refund option", "Dark patterns"],
        breakdown: {
            method: "Online but confusing navigation",
            steps: "5 steps with multiple 'are you sure' screens",
            waitTime: "No waiting, but many clicks",
            pressure: "Moderate - shows what you'll lose"
        },
        tips: [
            { user: "prime_former", date: "2 days ago", text: "Account > Prime Membership > End Membership. They make you click through 4-5 screens showing what you'll lose. You can get a partial refund if you haven't used benefits recently." }
        ]
    },
    {
        id: 8,
        name: "Comcast Xfinity",
        category: "Internet/Cable",
        grade: "F",
        method: "Phone + In-Person",
        avgSteps: 15,
        avgTime: "90+ min",
        reports: 4567,
        tags: ["Equipment return", "Transfer department hell", "Hidden fees"],
        breakdown: {
            method: "Phone call + equipment return in-person",
            steps: "15+ steps across multiple departments",
            waitTime: "60-120 min total",
            pressure: "Extreme - transferred repeatedly"
        },
        tips: [
            { user: "cord_cut_finally", date: "1 day ago", text: "Call and immediately say you're moving out of country. They have less retention offers for that. Get everything in writing. Return equipment to a store and GET A RECEIPT or they'll charge you $300." }
        ]
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCompanyCards(companies);
    setupSearch();
});

// Render company cards
function renderCompanyCards(data) {
    const grid = document.getElementById('resultsGrid');
    grid.innerHTML = data.map(company => `
        <div class="company-card" onclick="showCompanyDetail(${company.id})">
            <div class="card-header">
                <div class="company-info">
                    <h3>${company.name}</h3>
                    <span class="company-category">${company.category}</span>
                </div>
                <div class="grade-badge grade-${company.grade.toLowerCase()}">${company.grade}</div>
            </div>
            <div class="card-metrics">
                <div class="metric">
                    <span class="metric-value">${company.method}</span>
                    <span class="metric-label">Method</span>
                </div>
                <div class="metric">
                    <span class="metric-value">${company.avgSteps} steps</span>
                    <span class="metric-label">Process</span>
                </div>
                <div class="metric">
                    <span class="metric-value">${company.avgTime}</span>
                    <span class="metric-label">Avg Time</span>
                </div>
            </div>
            <div class="card-tags">
                ${company.tags.map(tag => `
                    <span class="tag ${getTagClass(tag)}">${tag}</span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Tag classification
function getTagClass(tag) {
    const negatives = ['mail', 'phone', 'person', 'notice', 'fee', 'nightmare', 'billing', 'maze', 'hell', 'hidden'];
    const positives = ['self-service', 'instant', 'clear', 'no calls', 'online'];
    
    const tagLower = tag.toLowerCase();
    if (negatives.some(n => tagLower.includes(n))) return 'negative';
    if (positives.some(p => tagLower.includes(p))) return 'positive';
    return '';
}

// Search functionality
function setupSearch() {
    const input = document.getElementById('searchInput');
    const suggestions = document.getElementById('searchSuggestions');
    
    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            suggestions.classList.remove('active');
            return;
        }
        
        const matches = companies.filter(c => 
            c.name.toLowerCase().includes(query) ||
            c.category.toLowerCase().includes(query)
        );
        
        if (matches.length > 0) {
            suggestions.innerHTML = matches.map(c => `
                <div class="suggestion-item" onclick="selectCompany(${c.id})">
                    <span>${c.name} <span class="company-category">${c.category}</span></span>
                    <span class="grade-badge grade-${c.grade.toLowerCase()}" style="width:32px;height:32px;font-size:0.875rem;">${c.grade}</span>
                </div>
            `).join('');
            suggestions.classList.add('active');
        } else {
            suggestions.classList.remove('active');
        }
    });
    
    // Close suggestions on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            suggestions.classList.remove('active');
        }
    });
}

function selectCompany(id) {
    document.getElementById('searchSuggestions').classList.remove('active');
    document.getElementById('searchInput').value = '';
    showCompanyDetail(id);
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) {
        renderCompanyCards(companies);
        document.getElementById('resultsTitle').textContent = 'Recently Rated Companies';
        return;
    }
    
    const results = companies.filter(c => 
        c.name.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query)
    );
    
    renderCompanyCards(results);
    document.getElementById('resultsTitle').textContent = `Results for "${query}"`;
    document.getElementById('resultsMeta').textContent = `${results.length} companies found`;
}

function searchCategory(category) {
    const categoryMap = {
        'gyms': 'Gyms',
        'streaming': 'Streaming',
        'insurance': 'Insurance',
        'subscriptions': 'Software'
    };
    
    const results = companies.filter(c => 
        c.category === categoryMap[category]
    );
    
    renderCompanyCards(results.length ? results : companies);
    document.getElementById('resultsTitle').textContent = `${categoryMap[category]} Companies`;
    document.getElementById('resultsMeta').textContent = `${results.length} companies found`;
}

// Company detail modal
function showCompanyDetail(id) {
    const company = companies.find(c => c.id === id);
    if (!company) return;
    
    const content = document.getElementById('companyDetailContent');
    content.innerHTML = `
        <div class="detail-header">
            <div class="detail-grade grade-${company.grade.toLowerCase()}">${company.grade}</div>
            <div class="detail-info">
                <h2>${company.name}</h2>
                <span class="company-category">${company.category}</span>
                <div class="detail-stats">
                    <span>📊 ${company.reports.toLocaleString()} reports</span>
                    <span>⏱️ Avg ${company.avgTime}</span>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>📋 Cancellation Breakdown</h3>
            <div class="breakdown-grid">
                <div class="breakdown-item">
                    <div class="breakdown-label">Method Required</div>
                    <div class="breakdown-value">${company.breakdown.method}</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Steps to Cancel</div>
                    <div class="breakdown-value">${company.breakdown.steps}</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Wait Time</div>
                    <div class="breakdown-value">${company.breakdown.waitTime}</div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-label">Retention Pressure</div>
                    <div class="breakdown-value">${company.breakdown.pressure}</div>
                </div>
            </div>
        </div>
        
        <div class="detail-section">
            <h3>💡 Tips from Users</h3>
            ${company.tips.map(tip => `
                <div class="user-tip">
                    <div class="tip-header">
                        <span class="tip-user">@${tip.user}</span>
                        <span class="tip-date">${tip.date}</span>
                    </div>
                    <p class="tip-text">${tip.text}</p>
                </div>
            `).join('')}
        </div>
        
        <div class="card-tags" style="margin-top: var(--space-lg);">
            ${company.tags.map(tag => `
                <span class="tag ${getTagClass(tag)}">${tag}</span>
            `).join('')}
        </div>
    `;
    
    document.getElementById('companyModal').classList.add('active');
}

function closeCompanyModal() {
    document.getElementById('companyModal').classList.remove('active');
}

// Report modal
function showReportModal() {
    document.getElementById('reportModal').classList.add('active');
}

function closeReportModal() {
    document.getElementById('reportModal').classList.remove('active');
    document.getElementById('reportForm').reset();
}

function submitReport(e) {
    e.preventDefault();
    
    // Show success message
    const modalContent = document.querySelector('#reportModal .modal-content');
    modalContent.innerHTML = `
        <div class="success-message">
            <div class="success-icon">✅</div>
            <h3>Report Submitted!</h3>
            <p>Thank you for helping others know before they sign up.</p>
            <p style="margin-top: var(--space-lg); color: var(--color-text-muted);">Your report will be reviewed and added within 24 hours.</p>
            <button class="btn btn-primary" style="margin-top: var(--space-xl);" onclick="closeAndResetReport()">Close</button>
        </div>
    `;
}

function closeAndResetReport() {
    closeReportModal();
    // Reset the form content after modal closes
    setTimeout(() => {
        location.reload();
    }, 300);
}

// Close modals on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCompanyModal();
        closeReportModal();
    }
});

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeCompanyModal();
            closeReportModal();
        }
    });
});
