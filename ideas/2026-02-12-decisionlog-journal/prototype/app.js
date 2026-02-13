// DecisionLog — Decision Journal App

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initForm();
    initPills();
    initSlider();
});

// Tab Navigation
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;

            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update panels
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === tabId) {
                    panel.classList.add('active');
                }
            });
        });
    });
}

// Form Submission
function initForm() {
    const saveBtn = document.getElementById('save-decision');
    
    saveBtn.addEventListener('click', () => {
        const title = document.getElementById('decision-title').value;
        
        if (!title.trim()) {
            alert('Please enter a decision title');
            return;
        }

        // Get form data
        const decision = {
            title,
            category: document.querySelector('.pill.active')?.dataset.category || 'other',
            options: document.getElementById('options').value,
            reasoning: document.getElementById('reasoning').value,
            confidence: document.getElementById('confidence').value,
            risks: document.getElementById('risks').value,
            reversal: document.getElementById('reversal').value,
            state: document.querySelector('.state-pill.active')?.dataset.state || 'neutral',
            reviewTime: document.getElementById('review-time').value,
            createdAt: new Date().toISOString()
        };

        console.log('Saving decision:', decision);

        // Show success toast
        showToast();

        // Reset form
        document.getElementById('decision-title').value = '';
        document.getElementById('options').value = '';
        document.getElementById('reasoning').value = '';
        document.getElementById('risks').value = '';
        document.getElementById('reversal').value = '';
        document.getElementById('confidence').value = 7;
        document.getElementById('confidence-value').textContent = '7';
    });
}

// Category and State Pills
function initPills() {
    // Category pills
    const categoryPills = document.querySelectorAll('.category-pills .pill');
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });

    // State pills
    const statePills = document.querySelectorAll('.state-pills .state-pill');
    statePills.forEach(pill => {
        pill.addEventListener('click', () => {
            statePills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });

    // Outcome pills in modal
    const outcomePills = document.querySelectorAll('.outcome-pills .outcome-pill');
    outcomePills.forEach(pill => {
        pill.addEventListener('click', () => {
            const parent = pill.parentElement;
            parent.querySelectorAll('.outcome-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });
}

// Confidence Slider
function initSlider() {
    const slider = document.getElementById('confidence');
    const valueDisplay = document.getElementById('confidence-value');

    slider.addEventListener('input', () => {
        valueDisplay.textContent = slider.value;
    });
}

// Open Review Modal
function openReview(card) {
    const modal = document.getElementById('review-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Review Modal
function closeReview() {
    const modal = document.getElementById('review-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Show success message
    showToast('Review saved! Your calibration score has been updated.');
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = toast.querySelector('.toast-message');
    
    if (message) {
        toastMsg.textContent = message;
    } else {
        // Default message based on review time
        const reviewTime = document.getElementById('review-time').value;
        const reviewLabels = {
            '1w': '1 week',
            '1m': '1 month',
            '3m': '3 months',
            '6m': '6 months',
            '1y': '1 year'
        };
        const reviewLabel = reviewLabels[reviewTime] || reviewTime;
        toastMsg.textContent = `Decision saved! We'll remind you to review in ${reviewLabel}.`;
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Click outside modal to close
document.getElementById('review-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'review-modal') {
        closeReview();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeReview();
    }
});

// Demo: Animate stats on insights tab
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent) || 0;
        let current = 0;
        const increment = target / 20;
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + (stat.textContent.includes('%') ? '%' : '');
                clearInterval(interval);
            } else {
                stat.textContent = Math.floor(current) + (stat.textContent.includes('%') ? '%' : '');
            }
        }, 30);
    });
}

// Trigger animation when insights tab is shown
document.querySelector('[data-tab="insights"]')?.addEventListener('click', () => {
    setTimeout(animateStats, 100);
});
