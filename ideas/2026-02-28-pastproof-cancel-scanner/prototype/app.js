/**
 * PastProof — Cancel-Proof Your Digital History
 * Interactive Prototype
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScanSimulation();
    initReviewActions();
    initBulkActions();
    initFilterButtons();
    initSettingsInteractions();
});

// ============================================
// Navigation
// ============================================

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');
    const viewAllLinks = document.querySelectorAll('.view-all');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = item.dataset.view;
            switchView(targetView, navItems, views);
        });
    });
    
    viewAllLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = link.dataset.view;
            switchView(targetView, navItems, views);
        });
    });
}

function switchView(targetView, navItems, views) {
    // Update nav
    navItems.forEach(nav => nav.classList.remove('active'));
    document.querySelector(`[data-view="${targetView}"]`).classList.add('active');
    
    // Update views
    views.forEach(view => view.classList.remove('active'));
    document.getElementById(targetView).classList.add('active');
}

// ============================================
// Scan Simulation
// ============================================

function initScanSimulation() {
    const uploadInput = document.getElementById('twitter-upload');
    const progressSection = document.querySelector('.scan-progress');
    
    if (uploadInput) {
        uploadInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                simulateScan(progressSection);
            }
        });
    }
    
    // Also trigger on button click (for demo)
    const uploadBtn = document.querySelector('.scan-card .btn-primary');
    if (uploadBtn) {
        uploadBtn.addEventListener('click', (e) => {
            // For demo purposes, simulate without actual file
            setTimeout(() => {
                simulateScan(progressSection);
            }, 500);
        });
    }
}

function simulateScan(progressSection) {
    progressSection.classList.remove('hidden');
    
    const progressFill = progressSection.querySelector('.progress-fill');
    const postsScanned = progressSection.querySelector('.posts-scanned');
    const flagsFound = progressSection.querySelector('.flags-found');
    const progressStatus = progressSection.querySelector('.progress-status');
    
    const totalPosts = 8432;
    let currentPost = 0;
    let currentFlags = 0;
    
    const statuses = [
        'Initializing AI analysis...',
        'Loading language models...',
        'Scanning for offensive content...',
        'Analyzing cultural context...',
        'Checking dated references...',
        'Evaluating political statements...',
        'Cross-referencing controversial figures...',
        'Calculating risk scores...',
        'Generating report...',
        'Scan complete!'
    ];
    
    let statusIndex = 0;
    
    const interval = setInterval(() => {
        currentPost += Math.floor(Math.random() * 200) + 100;
        if (currentPost > totalPosts) currentPost = totalPosts;
        
        const percent = (currentPost / totalPosts) * 100;
        progressFill.style.width = `${percent}%`;
        postsScanned.textContent = `${currentPost.toLocaleString()} / ${totalPosts.toLocaleString()} posts`;
        
        // Random flags found
        if (Math.random() > 0.7 && currentFlags < 12) {
            currentFlags++;
            flagsFound.textContent = `${currentFlags} potential flags`;
        }
        
        // Update status
        const newStatusIndex = Math.floor((currentPost / totalPosts) * statuses.length);
        if (newStatusIndex !== statusIndex && newStatusIndex < statuses.length) {
            statusIndex = newStatusIndex;
            progressStatus.textContent = statuses[statusIndex];
        }
        
        if (currentPost >= totalPosts) {
            clearInterval(interval);
            progressStatus.textContent = '✅ Scan complete! Found 12 posts that need review.';
            showToast('Scan complete! 12 posts flagged for review.', 'success');
            
            // Update badge
            setTimeout(() => {
                const badge = document.querySelector('.nav-item[data-view="review"] .badge');
                if (badge) badge.textContent = '12';
            }, 500);
        }
    }, 100);
}

// ============================================
// Review Actions
// ============================================

function initReviewActions() {
    const reviewItems = document.querySelectorAll('.review-item');
    
    reviewItems.forEach(item => {
        const deleteBtn = item.querySelector('.btn-danger');
        const archiveBtn = item.querySelector('.btn-secondary');
        const keepBtn = item.querySelector('.btn-ghost');
        
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                handleDelete(item);
            });
        }
        
        if (archiveBtn) {
            archiveBtn.addEventListener('click', () => {
                handleArchive(item);
            });
        }
        
        if (keepBtn) {
            keepBtn.addEventListener('click', () => {
                handleKeep(item);
            });
        }
    });
}

function handleDelete(item) {
    item.style.transition = 'all 0.3s ease';
    item.style.transform = 'translateX(100%)';
    item.style.opacity = '0';
    
    setTimeout(() => {
        item.remove();
        updateReviewCount();
        showToast('Post deleted from Twitter', 'success');
    }, 300);
}

function handleArchive(item) {
    item.style.transition = 'all 0.3s ease';
    item.style.transform = 'translateX(-100%)';
    item.style.opacity = '0';
    
    setTimeout(() => {
        item.remove();
        updateReviewCount();
        showToast('Post archived and deleted', 'success');
        
        // Update archive view
        const archiveEmpty = document.querySelector('.archive-empty');
        if (archiveEmpty) {
            archiveEmpty.innerHTML = `
                <div class="empty-icon">📦</div>
                <h3>1 post archived</h3>
                <p>Your archived posts are stored locally and can be reviewed anytime.</p>
            `;
        }
    }, 300);
}

function handleKeep(item) {
    item.style.transition = 'all 0.3s ease';
    item.style.opacity = '0.5';
    
    setTimeout(() => {
        item.remove();
        updateReviewCount();
        showToast('Post marked as safe', 'success');
    }, 300);
}

function updateReviewCount() {
    const remaining = document.querySelectorAll('.review-item').length;
    const badge = document.querySelector('.nav-item[data-view="review"] .badge');
    const subtitle = document.querySelector('#review .subtitle');
    
    if (badge) badge.textContent = remaining;
    if (subtitle) subtitle.textContent = `${remaining} posts need your attention`;
    
    if (remaining === 0) {
        const reviewList = document.querySelector('.review-list');
        if (reviewList) {
            reviewList.innerHTML = `
                <div class="archive-empty">
                    <div class="empty-icon">🎉</div>
                    <h3>All clear!</h3>
                    <p>You've reviewed all flagged posts. Your digital history is looking good.</p>
                </div>
            `;
        }
    }
}

// ============================================
// Bulk Actions
// ============================================

function initBulkActions() {
    const selectAll = document.getElementById('select-all');
    const checkboxes = document.querySelectorAll('.item-select');
    const bulkButtons = document.querySelectorAll('.bulk-actions button');
    
    if (selectAll) {
        selectAll.addEventListener('change', () => {
            checkboxes.forEach(cb => cb.checked = selectAll.checked);
            updateBulkButtons(bulkButtons);
        });
    }
    
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            updateBulkButtons(bulkButtons);
        });
    });
}

function updateBulkButtons(buttons) {
    const checked = document.querySelectorAll('.item-select:checked').length;
    buttons.forEach(btn => {
        btn.disabled = checked === 0;
    });
}

// ============================================
// Filter Buttons
// ============================================

function initFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const reviewItems = document.querySelectorAll('.review-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter items
            const severity = getSeverityFromButton(btn);
            
            reviewItems.forEach(item => {
                if (severity === 'all' || item.dataset.severity === severity) {
                    item.style.display = 'grid';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function getSeverityFromButton(btn) {
    if (btn.classList.contains('critical')) return 'critical';
    if (btn.classList.contains('high')) return 'high';
    if (btn.classList.contains('medium')) return 'medium';
    if (btn.classList.contains('low')) return 'low';
    return 'all';
}

// ============================================
// Settings Interactions
// ============================================

function initSettingsInteractions() {
    const sensitivitySlider = document.getElementById('sensitivity');
    const sliderDescription = document.querySelector('.slider-description');
    
    const descriptions = {
        1: '<strong>Relaxed:</strong> Only flag clearly problematic content that could cause immediate issues.',
        2: '<strong>Cautious:</strong> Flag problematic content and obviously dated takes.',
        3: '<strong>Balanced:</strong> Flag clearly problematic content and potential risks.',
        4: '<strong>Vigilant:</strong> Flag anything that could potentially be misinterpreted.',
        5: '<strong>Paranoid:</strong> Flag everything that might raise any eyebrows at all.'
    };
    
    if (sensitivitySlider && sliderDescription) {
        sensitivitySlider.addEventListener('input', () => {
            const value = sensitivitySlider.value;
            sliderDescription.innerHTML = descriptions[value];
        });
    }
    
    // Delete data button
    const deleteDataBtn = document.querySelector('.settings-card .btn-danger');
    if (deleteDataBtn) {
        deleteDataBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete all your data? This cannot be undone.')) {
                showToast('All data deleted', 'success');
            }
        });
    }
}

// ============================================
// Toast Notifications
// ============================================

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// Utility
// ============================================

// Simulated data for the heatmap bars
document.querySelectorAll('.heatmap-bar').forEach(bar => {
    const risk = parseFloat(bar.style.getPropertyValue('--risk')) || 10;
    const gradient = `linear-gradient(90deg, 
        hsl(${120 - risk * 1.2}, 70%, 45%) 0%,
        hsl(${120 - risk * 2.4}, 70%, 45%) 100%)`;
    bar.style.background = gradient;
});
