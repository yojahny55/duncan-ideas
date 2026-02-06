/**
 * CineMatch - Movie Buddy Finder
 * Interactive prototype JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    initNavigation();
    initModal();
    initCards();
    initRadioGroups();
});

/**
 * Navigation - Handle tab switching
 */
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-view]');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const viewId = item.dataset.view;
            
            // Update nav active state
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Show corresponding view
            views.forEach(view => {
                view.classList.remove('active');
                if (view.id === `${viewId}-view`) {
                    view.classList.add('active');
                    // Scroll to top when switching views
                    document.querySelector('.app-content').scrollTo(0, 0);
                }
            });

            // Haptic feedback simulation (subtle)
            if (navigator.vibrate) {
                navigator.vibrate(10);
            }
        });
    });

    // Create button in bottom nav
    const createBtn = document.querySelector('.nav-item.create-btn');
    if (createBtn) {
        createBtn.addEventListener('click', () => {
            openModal('create-modal');
        });
    }
}

/**
 * Modal Management
 */
function initModal() {
    const modals = document.querySelectorAll('.modal-overlay');
    
    modals.forEach(modal => {
        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });

        // Close button
        const closeBtn = modal.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeModal(modal.id);
            });
        }

        // Cancel button
        const cancelBtn = modal.querySelector('.btn-secondary');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                closeModal(modal.id);
            });
        }

        // Create/Submit button
        const submitBtn = modal.querySelector('.btn-primary');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                // Simulate form submission
                showToast('Session created! Invites sent to your matches.');
                closeModal(modal.id);
            });
        }
    });

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-overlay.active');
            if (activeModal) {
                closeModal(activeModal.id);
            }
        }
    });

    // Create session button in sessions view
    const createSessionBtn = document.getElementById('create-session-btn');
    if (createSessionBtn) {
        createSessionBtn.addEventListener('click', () => {
            openModal('create-modal');
        });
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus first input
        setTimeout(() => {
            const firstInput = modal.querySelector('input, select, textarea');
            if (firstInput) {
                firstInput.focus();
            }
        }, 300);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Interactive Cards
 */
function initCards() {
    // Featured card
    const featuredCard = document.querySelector('.featured-card');
    if (featuredCard) {
        featuredCard.addEventListener('click', () => {
            showToast('Opening Dune: Part Two sessions...');
        });
    }

    // Session cards
    const sessionCards = document.querySelectorAll('.session-card');
    sessionCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h4')?.textContent || 'Session';
            showToast(`Opening ${title} details...`);
        });
    });

    // Match cards (horizontal scroll)
    const matchCards = document.querySelectorAll('.match-card');
    matchCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('.match-name')?.textContent || 'Match';
            showToast(`Viewing ${name}'s profile...`);
        });
    });

    // Match list items (invite buttons)
    const inviteButtons = document.querySelectorAll('.match-list-item .btn-primary');
    inviteButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const name = btn.closest('.match-list-item').querySelector('h4')?.textContent || 'User';
            btn.textContent = 'Invited!';
            btn.disabled = true;
            btn.style.background = 'var(--color-success)';
            showToast(`Invite sent to ${name}!`);
        });
    });

    // Club join buttons
    const joinButtons = document.querySelectorAll('.club-card .btn-secondary');
    joinButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const clubName = btn.closest('.club-card').querySelector('h4')?.textContent || 'Club';
            btn.textContent = 'Joined!';
            btn.disabled = true;
            btn.classList.remove('btn-secondary');
            btn.classList.add('btn-primary');
            showToast(`Welcome to ${clubName}!`);
        });
    });

    // Your session action buttons
    const chatButtons = document.querySelectorAll('.session-actions .btn-secondary');
    chatButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            showToast('Opening chat...');
        });
    });

    const detailsButtons = document.querySelectorAll('.session-actions .btn-ghost');
    detailsButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            showToast('Opening session details...');
        });
    });

    // Session tabs
    const sessionTabs = document.querySelectorAll('.session-tab');
    sessionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            sessionTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Notification button
    const notificationBtn = document.querySelector('.notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', () => {
            showToast('3 new notifications');
            const badge = notificationBtn.querySelector('.notification-badge');
            if (badge) {
                badge.style.display = 'none';
            }
        });
    }

    // Profile button
    const profileBtn = document.querySelector('.profile-btn');
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            showToast('Opening your profile...');
        });
    }
}

/**
 * Radio Groups
 */
function initRadioGroups() {
    const radioGroups = document.querySelectorAll('.radio-group');
    
    radioGroups.forEach(group => {
        const options = group.querySelectorAll('.radio-option');
        
        options.forEach(option => {
            option.addEventListener('click', () => {
                // Update visual state
                options.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                
                // Check the radio
                const radio = option.querySelector('input[type="radio"]');
                if (radio) {
                    radio.checked = true;
                }
            });
        });
    });
}

/**
 * Toast Notifications
 */
function showToast(message, duration = 2500) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // Style the toast
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--color-bg-elevated)',
        color: 'var(--color-text-primary)',
        padding: '12px 24px',
        borderRadius: 'var(--radius-lg)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 'var(--font-weight-medium)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '999',
        opacity: '0',
        transition: 'opacity 0.2s ease',
        maxWidth: '80%',
        textAlign: 'center'
    });

    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
    });

    // Remove after duration
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 200);
    }, duration);
}

/**
 * Movie Search (Simulated)
 */
const movieSearch = document.getElementById('movie-search');
if (movieSearch) {
    let searchTimeout;
    
    movieSearch.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        
        if (query.length > 2) {
            searchTimeout = setTimeout(() => {
                // Simulate search results (in real app, would hit TMDB API)
                console.log('Searching for:', query);
            }, 300);
        }
    });
}

/**
 * Scroll-based Header Effects (Optional Enhancement)
 */
const appContent = document.querySelector('.app-content');
const appHeader = document.querySelector('.app-header');

if (appContent && appHeader) {
    let lastScroll = 0;
    
    appContent.addEventListener('scroll', () => {
        const currentScroll = appContent.scrollTop;
        
        // Add shadow when scrolled
        if (currentScroll > 10) {
            appHeader.style.boxShadow = 'var(--shadow-md)';
        } else {
            appHeader.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

/**
 * Pull to Refresh Simulation (Touch devices)
 */
let touchStartY = 0;
let isPulling = false;

if (appContent) {
    appContent.addEventListener('touchstart', (e) => {
        if (appContent.scrollTop === 0) {
            touchStartY = e.touches[0].clientY;
            isPulling = true;
        }
    });

    appContent.addEventListener('touchmove', (e) => {
        if (!isPulling) return;
        
        const touchY = e.touches[0].clientY;
        const diff = touchY - touchStartY;
        
        if (diff > 80) {
            showToast('Refreshing...');
            isPulling = false;
        }
    });

    appContent.addEventListener('touchend', () => {
        isPulling = false;
    });
}

// Console welcome message
console.log(`
🎬 CineMatch - Movie Buddy Finder
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Interactive prototype loaded!

Features:
• Navigate between views using bottom nav
• Click cards to see interactions
• Open create session modal
• Invite matches & join clubs

Built with ❤️ for movie lovers
`);
