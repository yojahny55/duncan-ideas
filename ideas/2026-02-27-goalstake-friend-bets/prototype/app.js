// GoalStake - Interactive Prototype
document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const viewId = item.dataset.view;
            
            // Update nav
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            
            // Update views
            views.forEach(v => v.classList.remove('active'));
            document.getElementById(`${viewId}-view`).classList.add('active');
        });
    });

    // Category picker
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Visibility options
    const visibilityBtns = document.querySelectorAll('.visibility-btn');
    visibilityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            visibilityBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Create goal form
    const goalForm = document.getElementById('goal-form');
    const stakeInput = document.getElementById('stake-amount');
    const submitBtn = document.querySelector('.submit-btn span:first-child');

    stakeInput.addEventListener('input', () => {
        submitBtn.textContent = `Stake $${stakeInput.value || 0} on This Goal`;
    });

    // Set default deadline to 30 days from now
    const deadlineInput = document.getElementById('deadline');
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 30);
    deadlineInput.value = futureDate.toISOString().split('T')[0];

    goalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Goal created! Share with friends to get challenged.');
        
        // Reset form
        goalForm.reset();
        stakeInput.value = 50;
        submitBtn.textContent = 'Stake $50 on This Goal';
        
        // Switch to my goals view
        setTimeout(() => {
            navItems.forEach(n => n.classList.remove('active'));
            document.querySelector('[data-view="my-goals"]').classList.add('active');
            views.forEach(v => v.classList.remove('active'));
            document.getElementById('my-goals-view').classList.add('active');
        }, 1500);
    });

    // Modal functionality
    const modal = document.getElementById('bet-modal');
    const modalClose = document.querySelector('.modal-close');
    const challengeBtns = document.querySelectorAll('.challenge-btn');

    challengeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            
            // Set initial bet type based on button clicked
            const betTypes = document.querySelectorAll('.bet-type');
            betTypes.forEach(t => t.classList.remove('active'));
            
            if (btn.classList.contains('support')) {
                betTypes[0].classList.add('active');
                updateBetUI('support');
            } else {
                betTypes[1].classList.add('active');
                updateBetUI('counter');
            }
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Bet type selection
    const betTypes = document.querySelectorAll('.bet-type');
    betTypes.forEach(type => {
        type.addEventListener('click', () => {
            betTypes.forEach(t => t.classList.remove('active'));
            type.classList.add('active');
            updateBetUI(type.dataset.type);
        });
    });

    // Amount selection
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.querySelector('.custom-amount input');
    const payoutAmount = document.querySelector('.payout-amount');
    const confirmBtn = document.querySelector('.confirm-bet-btn');
    let currentAmount = 50;
    let currentType = 'support';

    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            amountBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentAmount = parseInt(btn.dataset.amount);
            customAmountInput.value = '';
            updatePayoutDisplay();
        });
    });

    customAmountInput.addEventListener('input', () => {
        amountBtns.forEach(b => b.classList.remove('active'));
        currentAmount = parseInt(customAmountInput.value) || 0;
        updatePayoutDisplay();
    });

    function updateBetUI(type) {
        currentType = type;
        updatePayoutDisplay();
    }

    function updatePayoutDisplay() {
        // Assuming her stake is $75
        const herStake = 75;
        const payout = currentAmount + herStake;
        payoutAmount.textContent = `$${payout}`;
        
        const typeLabel = currentType === 'support' ? 'Support' : 'Counter';
        confirmBtn.textContent = `Confirm $${currentAmount} ${typeLabel} Bet`;
    }

    // Confirm bet
    confirmBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        showToast(`${currentType === 'support' ? '🙌' : '😏'} Bet placed! $${currentAmount} held in escrow.`);
    });

    // Tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Challenge actions
    const acceptBtns = document.querySelectorAll('.action-btn.accept');
    acceptBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.challenge-card');
            card.style.opacity = '0.5';
            showToast('✅ Challenge accepted! Game on.');
            setTimeout(() => {
                card.remove();
            }, 500);
        });
    });

    const declineBtns = document.querySelectorAll('.action-btn.decline');
    declineBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.challenge-card');
            card.style.opacity = '0.5';
            showToast('Challenge declined.');
            setTimeout(() => {
                card.remove();
            }, 500);
        });
    });

    // Toast function
    function showToast(message) {
        const toast = document.getElementById('success-toast');
        toast.querySelector('.toast-text').textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Trash talk button
    const trashTalkBtn = document.querySelector('.action-btn.secondary');
    if (trashTalkBtn) {
        trashTalkBtn.addEventListener('click', () => {
            const messages = [
                "You're going down! 💪",
                "Start saving for my payout 😎",
                "That scale gonna cry when I step on it",
                "Already planning what to do with your money 🤑"
            ];
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            showToast(`💬 "${randomMsg}" sent!`);
        });
    }

    // Progress bar animation
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        setTimeout(() => {
            progressFill.style.width = '35%';
        }, 300);
    }

    // Add some interactivity to goal items
    const goalItems = document.querySelectorAll('.goal-item');
    goalItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.98)';
            setTimeout(() => {
                item.style.transform = '';
            }, 100);
        });
    });

    console.log('🎯 GoalStake loaded! Put your money where your mouth is.');
});
