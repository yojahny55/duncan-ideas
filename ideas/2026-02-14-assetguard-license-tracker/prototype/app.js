// AssetGuard - Creative License Compliance Tracker
// Interactive Prototype

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const navItems = document.querySelectorAll('.nav-item');
    const views = {
        dashboard: document.getElementById('dashboard-view'),
        assets: document.getElementById('assets-view')
    };
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    
    const addAssetBtn = document.getElementById('addAssetBtn');
    const addAssetModal = document.getElementById('addAssetModal');
    const closeModalBtn = document.getElementById('closeModal');
    const cancelModalBtn = document.getElementById('cancelModal');
    
    const filterTabs = document.querySelectorAll('.filter-tab');
    const assetCards = document.querySelectorAll('.asset-card');
    const viewBtns = document.querySelectorAll('.view-btn');
    
    // Page titles and subtitles
    const pageTitles = {
        dashboard: {
            title: 'Dashboard',
            subtitle: 'Your creative license compliance at a glance'
        },
        assets: {
            title: 'Asset Library',
            subtitle: 'Manage all your licensed creative assets'
        },
        projects: {
            title: 'Projects',
            subtitle: 'Track assets by project'
        },
        alerts: {
            title: 'Alerts',
            subtitle: 'License expirations and compliance issues'
        }
    };
    
    // Navigation
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const view = item.dataset.view;
            
            // Update active nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Update page title
            if (pageTitles[view]) {
                pageTitle.textContent = pageTitles[view].title;
                pageSubtitle.textContent = pageTitles[view].subtitle;
            }
            
            // Show correct view
            Object.values(views).forEach(v => v?.classList.add('hidden'));
            if (views[view]) {
                views[view].classList.remove('hidden');
            }
        });
    });
    
    // Modal handling
    function openModal() {
        addAssetModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        addAssetModal.classList.add('hidden');
        document.body.style.overflow = '';
    }
    
    addAssetBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    cancelModalBtn.addEventListener('click', closeModal);
    
    addAssetModal.addEventListener('click', (e) => {
        if (e.target === addAssetModal) {
            closeModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !addAssetModal.classList.contains('hidden')) {
            closeModal();
        }
    });
    
    // Asset filtering
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.filter;
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter assets
            assetCards.forEach(card => {
                if (filter === 'all' || card.dataset.type === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // View toggle (grid/list)
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const view = btn.dataset.view;
            const grid = document.querySelector('.assets-grid');
            
            if (view === 'list') {
                grid.style.gridTemplateColumns = '1fr';
            } else {
                grid.style.gridTemplateColumns = '';
            }
        });
    });
    
    // Asset card click
    assetCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('.asset-name').textContent;
            showAssetDetails(name);
        });
    });
    
    // Show asset details (placeholder)
    function showAssetDetails(name) {
        // In a real app, this would open a detail modal/panel
        console.log(`Opening details for: ${name}`);
        
        // Create a simple toast notification
        showToast(`Viewing: ${name}`);
    }
    
    // Toast notification
    function showToast(message) {
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();
        
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: #1f2937;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1001;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        assetCards.forEach(card => {
            const name = card.querySelector('.asset-name').textContent.toLowerCase();
            const meta = card.querySelector('.asset-meta').textContent.toLowerCase();
            
            if (name.includes(query) || meta.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Compliance score animation
    const scoreRing = document.querySelector('.score-fill');
    if (scoreRing) {
        const score = 94;
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (score / 100) * circumference;
        
        // Animate on load
        scoreRing.style.transition = 'stroke-dashoffset 1s ease-out';
        setTimeout(() => {
            scoreRing.style.strokeDashoffset = offset;
        }, 100);
    }
    
    // Upload zone drag & drop
    const uploadZone = document.querySelector('.upload-zone');
    if (uploadZone) {
        uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadZone.style.borderColor = '#2563eb';
            uploadZone.style.background = '#dbeafe';
        });
        
        uploadZone.addEventListener('dragleave', () => {
            uploadZone.style.borderColor = '';
            uploadZone.style.background = '';
        });
        
        uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadZone.style.borderColor = '';
            uploadZone.style.background = '';
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                showToast(`Uploaded: ${files[0].name}`);
            }
        });
        
        uploadZone.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.pdf,.png,.jpg,.jpeg,.txt';
            input.onchange = (e) => {
                if (e.target.files.length > 0) {
                    showToast(`Selected: ${e.target.files[0].name}`);
                }
            };
            input.click();
        });
    }
    
    // Project table row actions
    const reviewBtns = document.querySelectorAll('.table-row .btn');
    reviewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const row = btn.closest('.table-row');
            const projectName = row.querySelector('.project-name').textContent;
            showToast(`Opening: ${projectName}`);
        });
    });
    
    // Initialize
    console.log('🛡️ AssetGuard initialized');
});
