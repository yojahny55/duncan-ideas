/**
 * CEUKeeper — Interactive Prototype
 */

document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const modal = document.getElementById('addCreditModal');
    const addBtn = document.getElementById('addCreditBtn');
    const closeBtn = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelModal');
    const backdrop = modal.querySelector('.modal-backdrop');

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    addBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Alert dismissal
    document.querySelectorAll('.alert-dismiss').forEach(btn => {
        btn.addEventListener('click', () => {
            const alert = btn.closest('.alert');
            alert.style.opacity = '0';
            alert.style.transform = 'translateX(20px)';
            setTimeout(() => alert.remove(), 200);
        });
    });

    // Form submission (demo)
    const form = document.querySelector('.credit-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success feedback
        const submitBtn = form.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Saved!';
        submitBtn.style.background = '#10B981';
        
        setTimeout(() => {
            closeModal();
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            form.reset();
            
            // Show toast notification
            showToast('CE credit logged successfully!');
        }, 1000);
    });

    // Toast notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <span class="toast-icon">✅</span>
            <span class="toast-message">${message}</span>
        `;
        toast.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 20px;
            background: #1E293B;
            color: white;
            border-radius: 8px;
            box-shadow: 0 10px 15px rgba(0,0,0,0.2);
            font-size: 14px;
            font-weight: 500;
            animation: slideIn 0.3s ease;
            z-index: 2000;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
        .alert {
            transition: opacity 0.2s, transform 0.2s;
        }
    `;
    document.head.appendChild(style);

    // Animate progress bars on load
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = width;
        }, 100);
    });

    // License card hover effects
    document.querySelectorAll('.license-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
            card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });

    // Credit item click (demo details view)
    document.querySelectorAll('.credit-item').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const title = item.querySelector('h4').textContent;
            showToast(`Viewing: ${title}`);
        });
    });

    // Summary cards counter animation
    document.querySelectorAll('.summary-value').forEach(el => {
        const target = parseFloat(el.textContent);
        if (!isNaN(target)) {
            const duration = 1000;
            const start = 0;
            const startTime = performance.now();
            
            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = start + (target - start) * eased;
                
                if (target % 1 !== 0) {
                    el.textContent = current.toFixed(1);
                } else {
                    el.textContent = Math.round(current);
                }
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
            
            requestAnimationFrame(animate);
        }
    });

    console.log('🎓 CEUKeeper prototype loaded');
});
