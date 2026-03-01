// BlindSpotSec - Security Attention Analyzer Prototype

// Sample codebase data with risk and attention scores
const codebaseData = [
    // Critical blind spots (high risk, low attention)
    { path: '/api/payments/webhook.js', risk: 0.92, attention: 0.18, changes: 12, dir: '/api/payments' },
    { path: '/auth/middleware/session.js', risk: 0.88, attention: 0.22, changes: 8, dir: '/auth' },
    { path: '/api/users/password-reset.js', risk: 0.85, attention: 0.15, changes: 5, dir: '/api/users' },
    
    // Warning areas (moderate gap)
    { path: '/api/orders/checkout.js', risk: 0.78, attention: 0.45, changes: 15, dir: '/api/orders' },
    { path: '/auth/oauth/callback.js', risk: 0.75, attention: 0.42, changes: 6, dir: '/auth' },
    { path: '/api/uploads/handler.js', risk: 0.72, attention: 0.38, changes: 9, dir: '/api/uploads' },
    { path: '/db/migrations/users.js', risk: 0.68, attention: 0.35, changes: 3, dir: '/db' },
    { path: '/api/admin/impersonate.js', risk: 0.82, attention: 0.52, changes: 2, dir: '/api/admin' },
    { path: '/auth/2fa/verify.js', risk: 0.70, attention: 0.45, changes: 4, dir: '/auth' },
    { path: '/api/webhooks/stripe.js', risk: 0.76, attention: 0.48, changes: 7, dir: '/api/webhooks' },
    { path: '/api/exports/download.js', risk: 0.65, attention: 0.40, changes: 3, dir: '/api/exports' },
    
    // Well covered (aligned)
    { path: '/api/auth/login.js', risk: 0.80, attention: 0.82, changes: 20, dir: '/api/auth' },
    { path: '/api/auth/register.js', risk: 0.75, attention: 0.78, changes: 18, dir: '/api/auth' },
    { path: '/db/models/user.js', risk: 0.60, attention: 0.58, changes: 25, dir: '/db' },
    { path: '/api/products/list.js', risk: 0.25, attention: 0.28, changes: 30, dir: '/api/products' },
    { path: '/config/security.js', risk: 0.45, attention: 0.50, changes: 5, dir: '/config' },
    { path: '/api/search/query.js', risk: 0.40, attention: 0.42, changes: 12, dir: '/api/search' },
    
    // Over-reviewed (low risk, high attention - wasted effort)
    { path: '/utils/logger.js', risk: 0.12, attention: 0.75, changes: 45, dir: '/utils' },
    { path: '/utils/helpers.js', risk: 0.08, attention: 0.68, changes: 52, dir: '/utils' },
    { path: '/constants/index.js', risk: 0.05, attention: 0.55, changes: 38, dir: '/constants' },
    { path: '/types/common.ts', risk: 0.03, attention: 0.48, changes: 60, dir: '/types' },
    { path: '/tests/fixtures.js', risk: 0.02, attention: 0.42, changes: 80, dir: '/tests' },
    { path: '/utils/formatters.js', risk: 0.10, attention: 0.65, changes: 35, dir: '/utils' },
    { path: '/styles/variables.css', risk: 0.01, attention: 0.35, changes: 25, dir: '/styles' },
    { path: '/components/Button.jsx', risk: 0.15, attention: 0.55, changes: 40, dir: '/components' },
    { path: '/utils/dates.js', risk: 0.08, attention: 0.52, changes: 28, dir: '/utils' },
    { path: '/config/constants.js', risk: 0.06, attention: 0.45, changes: 22, dir: '/config' },
    { path: '/utils/strings.js', risk: 0.07, attention: 0.50, changes: 32, dir: '/utils' },
    { path: '/tests/mocks.js', risk: 0.02, attention: 0.38, changes: 55, dir: '/tests' },
];

// Directory-level aggregation
const directoryData = [
    { path: '/api/payments', risk: 0.90, attention: 0.25 },
    { path: '/auth', risk: 0.82, attention: 0.45 },
    { path: '/api/users', risk: 0.75, attention: 0.35 },
    { path: '/api/orders', risk: 0.72, attention: 0.48 },
    { path: '/api/webhooks', risk: 0.70, attention: 0.42 },
    { path: '/api/admin', risk: 0.78, attention: 0.55 },
    { path: '/db', risk: 0.55, attention: 0.45 },
    { path: '/api/uploads', risk: 0.65, attention: 0.40 },
    { path: '/utils', risk: 0.08, attention: 0.62 },
    { path: '/tests', risk: 0.02, attention: 0.40 },
    { path: '/components', risk: 0.18, attention: 0.52 },
    { path: '/config', risk: 0.25, attention: 0.48 },
];

// Drift data (30 days of blind spot index)
const driftData = [
    0.42, 0.44, 0.45, 0.43, 0.48, 0.52, 0.50, 
    0.55, 0.58, 0.52, 0.48, 0.52, 0.55, 0.58,
    0.62, 0.60, 0.65, 0.68, 0.70, 0.65, 0.68,
    0.72, 0.75, 0.78, 0.75, 0.80, 0.78, 0.82,
    0.85, 0.82
];

// Classify blind spot severity
function getBlindSpotClass(risk, attention) {
    const gap = risk - attention;
    if (gap > 0.5) return 'critical';
    if (gap > 0.25) return 'warning';
    if (gap < -0.3) return 'over';
    return 'good';
}

// Render heatmap
function renderHeatmap() {
    const container = document.getElementById('heatmap');
    container.innerHTML = '';
    
    // Sort by blind spot severity
    const sorted = [...codebaseData].sort((a, b) => 
        (b.risk - b.attention) - (a.risk - a.attention)
    );
    
    sorted.forEach(file => {
        const cell = document.createElement('div');
        const className = getBlindSpotClass(file.risk, file.attention);
        cell.className = `heatmap-cell ${className}`;
        
        // Extract filename
        const filename = file.path.split('/').pop();
        cell.innerHTML = `<span class="cell-label">${filename}</span>`;
        cell.title = `${file.path}\nRisk: ${(file.risk * 100).toFixed(0)}%\nAttention: ${(file.attention * 100).toFixed(0)}%`;
        
        cell.addEventListener('click', () => showFileModal(file));
        
        container.appendChild(cell);
    });
}

// Render blind spots list
function renderBlindSpots() {
    const container = document.getElementById('blindspotList');
    container.innerHTML = '';
    
    // Get critical and warning files
    const blindSpots = codebaseData
        .filter(f => f.risk - f.attention > 0.3)
        .sort((a, b) => (b.risk - b.attention) - (a.risk - a.attention))
        .slice(0, 8);
    
    blindSpots.forEach(file => {
        const item = document.createElement('div');
        item.className = 'blindspot-item';
        item.innerHTML = `
            <div class="blindspot-path">${file.path}</div>
            <div class="blindspot-stats">
                <span class="blindspot-stat risk">🔴 Risk: ${(file.risk * 100).toFixed(0)}%</span>
                <span class="blindspot-stat attention">👁️ Attention: ${(file.attention * 100).toFixed(0)}%</span>
                <span class="blindspot-stat changes">✏️ ${file.changes} changes</span>
            </div>
        `;
        item.addEventListener('click', () => showFileModal(file));
        container.appendChild(item);
    });
}

// Render comparison chart
function renderComparisonChart() {
    const container = document.getElementById('comparisonChart');
    
    // Keep header row
    const header = container.querySelector('.chart-row.header');
    container.innerHTML = '';
    if (header) container.appendChild(header);
    
    directoryData.forEach(dir => {
        const gap = dir.risk - dir.attention;
        let gapClass = 'good';
        if (gap > 0.3) gapClass = 'critical';
        else if (gap > 0.15) gapClass = 'warning';
        
        const row = document.createElement('div');
        row.className = 'chart-row';
        row.innerHTML = `
            <div class="chart-label">${dir.path}</div>
            <div class="chart-bars">
                <div class="chart-bar risk" style="width: ${dir.risk * 100}%"></div>
                <div class="chart-bar attention" style="width: ${dir.attention * 100}%"></div>
            </div>
            <div class="chart-gap ${gapClass}">${gap > 0 ? '+' : ''}${(gap * 100).toFixed(0)}%</div>
        `;
        container.appendChild(row);
    });
}

// Render drift chart
function renderDriftChart() {
    const container = document.getElementById('driftChart');
    container.innerHTML = '';
    
    const max = Math.max(...driftData);
    
    driftData.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'drift-bar';
        const height = (value / max) * 100;
        bar.style.height = `${height}%`;
        
        // Color based on value
        if (value > 0.7) {
            bar.style.background = 'var(--critical)';
        } else if (value > 0.5) {
            bar.style.background = 'var(--warning)';
        } else {
            bar.style.background = 'var(--good)';
        }
        
        bar.title = `Day ${index + 1}: Blind Spot Index ${(value * 100).toFixed(0)}%`;
        container.appendChild(bar);
    });
}

// Show file detail modal
function showFileModal(file) {
    const modal = document.getElementById('fileModal');
    document.getElementById('modalFilePath').textContent = file.path;
    
    // Update stats
    const gap = file.risk - file.attention;
    modal.querySelector('.modal-stat-value.high').textContent = file.risk.toFixed(2);
    modal.querySelector('.modal-stat-value.low').textContent = file.attention.toFixed(2);
    modal.querySelector('.modal-stat-value.critical').textContent = 
        `${gap > 0 ? '+' : ''}${gap.toFixed(2)}`;
    
    modal.classList.add('active');
}

// Close modal
document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('fileModal').classList.remove('active');
});

document.getElementById('fileModal').addEventListener('click', (e) => {
    if (e.target.id === 'fileModal') {
        document.getElementById('fileModal').classList.remove('active');
    }
});

// View toggle
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderHeatmap();
    renderBlindSpots();
    renderComparisonChart();
    renderDriftChart();
});

// Simulate real-time updates
setInterval(() => {
    // Randomly adjust some values slightly for demo effect
    codebaseData.forEach(file => {
        file.attention += (Math.random() - 0.5) * 0.02;
        file.attention = Math.max(0, Math.min(1, file.attention));
    });
}, 30000);
