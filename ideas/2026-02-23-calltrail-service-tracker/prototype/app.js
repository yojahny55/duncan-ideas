// CallTrail - Personal Customer Service Tracker
// Demo JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const fab = document.getElementById('addCallBtn');
    const addCallModal = document.getElementById('addCallModal');
    const timelineModal = document.getElementById('timelineModal');
    const closeModalBtn = document.getElementById('closeModal');
    const closeTimelineBtn = document.getElementById('closeTimeline');
    const cancelBtn = document.getElementById('cancelBtn');
    const callForm = document.getElementById('callForm');
    const companyInput = document.getElementById('companyInput');
    const companySuggestions = document.getElementById('companySuggestions');
    const addPromiseBtn = document.getElementById('addPromiseBtn');
    const promisesList = document.getElementById('promisesList');
    const promiseText = document.getElementById('promiseText');
    const promiseDate = document.getElementById('promiseDate');
    const toast = document.getElementById('toast');
    const issueCards = document.querySelectorAll('.issue-card');
    const viewTimelineBtns = document.querySelectorAll('.issue-card .btn-outline:nth-child(2)');

    // Tab Switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show target content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${targetTab}-tab`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // FAB - Open Modal
    fab.addEventListener('click', () => {
        addCallModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close Modal Functions
    function closeAddCallModal() {
        addCallModal.classList.remove('active');
        document.body.style.overflow = '';
        callForm.reset();
        promisesList.innerHTML = '';
    }

    function closeTimelineModal() {
        timelineModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeModalBtn.addEventListener('click', closeAddCallModal);
    cancelBtn.addEventListener('click', closeAddCallModal);
    closeTimelineBtn.addEventListener('click', closeTimelineModal);

    // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', () => {
            closeAddCallModal();
            closeTimelineModal();
        });
    });

    // Company Suggestions
    companyInput.addEventListener('focus', () => {
        companySuggestions.classList.add('active');
    });

    companyInput.addEventListener('blur', () => {
        setTimeout(() => companySuggestions.classList.remove('active'), 200);
    });

    companyInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        const suggestions = companySuggestions.querySelectorAll('.suggestion');
        
        suggestions.forEach(suggestion => {
            const company = suggestion.dataset.company.toLowerCase();
            if (company.includes(value)) {
                suggestion.style.display = 'block';
            } else {
                suggestion.style.display = 'none';
            }
        });
    });

    // Select suggestion
    companySuggestions.querySelectorAll('.suggestion').forEach(suggestion => {
        suggestion.addEventListener('click', () => {
            companyInput.value = suggestion.dataset.company;
            companySuggestions.classList.remove('active');
        });
    });

    // Add Promise
    let promises = [];
    
    addPromiseBtn.addEventListener('click', () => {
        const text = promiseText.value.trim();
        const date = promiseDate.value;
        
        if (text) {
            const promise = { text, date };
            promises.push(promise);
            renderPromises();
            promiseText.value = '';
            promiseDate.value = '';
        }
    });

    function renderPromises() {
        promisesList.innerHTML = promises.map((promise, index) => `
            <div class="promise-tag">
                <span>⏳ ${promise.text}${promise.date ? ` (by ${formatDate(promise.date)})` : ''}</span>
                <button type="button" onclick="removePromise(${index})">&times;</button>
            </div>
        `).join('');
    }

    // Make removePromise globally accessible
    window.removePromise = function(index) {
        promises.splice(index, 1);
        renderPromises();
    };

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    // Form Submit
    callForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // In a real app, we'd save this data
        console.log('Call logged:', {
            company: companyInput.value,
            department: document.getElementById('departmentInput').value,
            holdTime: document.getElementById('holdTime').value,
            callDuration: document.getElementById('callDuration').value,
            agentName: document.getElementById('agentName').value,
            refNumber: document.getElementById('refNumber').value,
            notes: document.getElementById('callNotes').value,
            promises: promises,
            issue: document.getElementById('issueSelect').value
        });

        // Show toast
        showToast('Call saved successfully!');
        
        // Close modal
        closeAddCallModal();
        promises = [];

        // Update stats (demo)
        updateStats();
    });

    // Show Toast
    function showToast(message) {
        const toastMessage = toast.querySelector('.toast-message');
        toastMessage.textContent = message;
        toast.classList.add('active');
        
        setTimeout(() => {
            toast.classList.remove('active');
        }, 3000);
    }

    // Update Stats (demo)
    function updateStats() {
        const openIssues = document.getElementById('openIssues');
        const pendingPromises = document.getElementById('pendingPromises');
        
        // Just for demo effect
        const currentPending = parseInt(pendingPromises.textContent);
        pendingPromises.textContent = currentPending + promises.length || currentPending + 1;
    }

    // Issue Card Click - Open Timeline
    issueCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open if clicking a button
            if (e.target.closest('.btn')) return;
            
            // Open timeline modal
            timelineModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // View Timeline Buttons
    viewTimelineBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            timelineModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Add Call buttons on issue cards
    document.querySelectorAll('.issue-card .btn-outline:first-child').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addCallModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Pre-fill company if available
            const issueCard = btn.closest('.issue-card');
            const companyName = issueCard.querySelector('.company-name').textContent;
            companyInput.value = companyName;
            
            // Select the linked issue
            const issueId = issueCard.dataset.issue;
            document.getElementById('issueSelect').value = issueId;
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Escape to close modals
        if (e.key === 'Escape') {
            closeAddCallModal();
            closeTimelineModal();
        }
        
        // Cmd/Ctrl + N to add new call
        if ((e.metaKey || e.ctrlKey) && e.key === 'n') {
            e.preventDefault();
            addCallModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    // Company card phone click simulation
    document.querySelectorAll('.company-phone').forEach(phone => {
        phone.style.cursor = 'pointer';
        phone.addEventListener('click', (e) => {
            e.stopPropagation();
            const number = phone.textContent;
            showToast(`Ready to call ${number}`);
        });
    });

    // Timeline action buttons
    document.querySelectorAll('.timeline-actions .btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.textContent.trim();
            if (text.includes('Complaint')) {
                showToast('Generating complaint letter...');
            } else if (text.includes('Executive')) {
                showToast('Finding executive contacts...');
            } else if (text.includes('Log')) {
                closeTimelineModal();
                setTimeout(() => {
                    addCallModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    companyInput.value = 'Verizon';
                    document.getElementById('issueSelect').value = '1';
                }, 300);
            }
        });
    });

    // Settings button
    document.getElementById('settingsBtn').addEventListener('click', () => {
        showToast('Settings coming soon!');
    });

    // Initialize - set today's date as default for promise
    const today = new Date().toISOString().split('T')[0];
    promiseDate.min = today;

    // Add some interactivity to company scores
    document.querySelectorAll('.company-score').forEach(score => {
        score.style.cursor = 'help';
        score.title = 'Your personal rating based on resolution time and promises kept';
    });

    console.log('CallTrail initialized! 📞');
});
