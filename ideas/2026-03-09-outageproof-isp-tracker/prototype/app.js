// OutageProof - Interactive Prototype
document.addEventListener('DOMContentLoaded', () => {
    // Initialize chart gradient
    initChartGradient();
    
    // Modal handling
    initModal();
    
    // Navigation
    initNavigation();
    
    // Time filter buttons
    initTimeFilters();
    
    // Simulate connection monitoring
    initConnectionMonitor();
});

function initChartGradient() {
    const svg = document.querySelector('.chart-svg');
    if (!svg) return;
    
    // Create gradient definition
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.id = 'gradient';
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '0%');
    gradient.setAttribute('y2', '100%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('stop-color', '#6366f1');
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', '#6366f1');
    stop2.setAttribute('stop-opacity', '0');
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
    svg.insertBefore(defs, svg.firstChild);
}

function initModal() {
    const modal = document.getElementById('reportModal');
    const generateBtn = document.getElementById('generateReport');
    const closeBtn = modal?.querySelector('.modal-close');
    const cancelBtn = modal?.querySelector('.modal-cancel');
    const backdrop = modal?.querySelector('.modal-backdrop');
    
    if (!modal || !generateBtn) return;
    
    generateBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });
    
    const closeModal = () => {
        modal.classList.remove('active');
    };
    
    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);
    
    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Download button
    const downloadBtn = modal.querySelector('.btn-primary');
    downloadBtn?.addEventListener('click', () => {
        // Simulate download
        downloadBtn.innerHTML = '✓ Downloaded';
        downloadBtn.style.background = '#22c55e';
        
        setTimeout(() => {
            closeModal();
            downloadBtn.innerHTML = 'Download PDF';
            downloadBtn.style.background = '';
            
            // Show success notification
            showNotification('Report downloaded successfully!', 'success');
        }, 1000);
    });
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active from all
            navItems.forEach(n => n.classList.remove('active'));
            
            // Add active to clicked
            item.classList.add('active');
            
            // Update header based on view
            const view = item.dataset.view;
            const header = document.querySelector('.header h1');
            
            const titles = {
                dashboard: 'Connection Dashboard',
                timeline: 'Outage Timeline',
                reports: 'Evidence Reports',
                settings: 'Settings'
            };
            
            if (header && titles[view]) {
                header.textContent = titles[view];
            }
        });
    });
}

function initTimeFilters() {
    const timeButtons = document.querySelectorAll('.time-btn');
    
    timeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            timeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Animate chart update
            const chartLine = document.querySelector('.chart-line');
            const chartFill = document.querySelector('.chart-fill');
            
            if (chartLine && chartFill) {
                chartLine.style.opacity = '0.3';
                chartFill.style.opacity = '0.1';
                
                setTimeout(() => {
                    // Generate new random path
                    const newPath = generateRandomPath();
                    chartLine.setAttribute('d', newPath);
                    chartFill.setAttribute('d', newPath + ' L100,100 L0,100 Z');
                    
                    chartLine.style.opacity = '1';
                    chartFill.style.opacity = '0.3';
                }, 200);
            }
        });
    });
}

function generateRandomPath() {
    let path = 'M0,';
    let y = 10 + Math.random() * 10;
    path += y;
    
    for (let x = 5; x <= 100; x += 5) {
        // Occasional outage (spike down)
        if (Math.random() < 0.1) {
            y = 70 + Math.random() * 20;
        } else {
            y = 5 + Math.random() * 20;
        }
        path += ` L${x},${y}`;
    }
    
    return path;
}

function initConnectionMonitor() {
    const statusBadge = document.querySelector('.status-badge');
    const statusDot = document.querySelector('.status-dot');
    
    if (!statusBadge) return;
    
    // Simulate occasional connection blips
    setInterval(() => {
        // Small chance of showing "Checking..." state
        if (Math.random() < 0.05) {
            statusBadge.classList.remove('online');
            statusBadge.classList.add('checking');
            statusBadge.innerHTML = '<span class="status-dot"></span> Checking...';
            
            setTimeout(() => {
                statusBadge.classList.remove('checking');
                statusBadge.classList.add('online');
                statusBadge.innerHTML = '<span class="status-dot"></span> Online';
            }, 1500);
        }
    }, 5000);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
        <span class="notification-message">${message}</span>
    `;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        padding: '12px 20px',
        background: type === 'success' ? 'rgba(34, 197, 94, 0.9)' : 'rgba(99, 102, 241, 0.9)',
        color: 'white',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        transform: 'translateY(100px)',
        opacity: '0',
        transition: 'all 0.3s ease',
        zIndex: '2000'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    });
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add click handler for outage items
document.querySelectorAll('.outage-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        // Could show detailed outage modal
        const time = item.querySelector('.outage-time')?.textContent;
        const duration = item.querySelector('.outage-duration')?.textContent;
        showNotification(`Outage details: ${time} - ${duration}`, 'info');
    });
});

// Add click handler for SLA alert button
document.querySelector('.alert .btn-outline')?.addEventListener('click', () => {
    showNotification('Opening credit request form...', 'info');
});

// Simulate real-time speed update
setInterval(() => {
    const speedValue = document.querySelector('.stat-card:first-child .stat-value');
    if (speedValue && speedValue.textContent.includes('%')) {
        // Slightly fluctuate uptime percentage
        const current = parseFloat(speedValue.textContent);
        const delta = (Math.random() - 0.5) * 0.1;
        const newValue = Math.max(95, Math.min(99.9, current + delta));
        speedValue.textContent = newValue.toFixed(1) + '%';
    }
}, 10000);
