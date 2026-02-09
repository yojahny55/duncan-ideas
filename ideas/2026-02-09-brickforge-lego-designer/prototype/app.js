/**
 * BrickForge - AI-Powered Custom LEGO Designer
 * Interactive Prototype
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // Tab Switching
    // ============================================
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${targetTab}-tab`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // ============================================
    // Quick Prompts
    // ============================================
    const quickPrompts = document.querySelectorAll('.quick-prompt');
    const promptInput = document.getElementById('prompt-input');

    quickPrompts.forEach(btn => {
        btn.addEventListener('click', () => {
            promptInput.value = btn.dataset.prompt;
            promptInput.focus();
        });
    });

    // ============================================
    // Option Buttons
    // ============================================
    const optionGroups = document.querySelectorAll('.option-buttons');

    optionGroups.forEach(group => {
        const buttons = group.querySelectorAll('.option-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    });

    // ============================================
    // File Upload
    // ============================================
    const uploadZone = document.getElementById('upload-zone');
    const fileInput = document.getElementById('file-input');

    uploadZone.addEventListener('click', () => {
        fileInput.click();
    });

    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('dragover');
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('dragover');
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFileUpload(e.target.files[0]);
        }
    });

    function handleFileUpload(file) {
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file');
            return;
        }

        // Show preview
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadZone.innerHTML = `
                <img src="${e.target.result}" style="max-width: 200px; max-height: 200px; border-radius: 8px;" alt="Uploaded image">
                <p class="upload-text" style="margin-top: 12px;">Image uploaded! Click Generate to continue.</p>
            `;
        };
        reader.readAsDataURL(file);
    }

    // ============================================
    // Generate Button & Modal
    // ============================================
    const generateBtn = document.getElementById('generate-btn');
    const modal = document.getElementById('results-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const modalLoading = document.getElementById('modal-loading');
    const modalResult = document.getElementById('modal-result');
    const resultTitle = document.getElementById('result-title');
    const loaderSteps = document.querySelectorAll('.loader-step');

    generateBtn.addEventListener('click', () => {
        const prompt = promptInput.value.trim();
        if (!prompt) {
            promptInput.focus();
            promptInput.placeholder = 'Please enter a description...';
            return;
        }

        // Open modal with loading state
        openModal();
        simulateGeneration(prompt);
    });

    function openModal() {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        
        // Reset to loading state
        modalLoading.style.display = 'block';
        modalResult.style.display = 'none';
        loaderSteps.forEach(step => {
            step.classList.remove('active', 'done');
        });
        loaderSteps[0].classList.add('active');
    }

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    function simulateGeneration(prompt) {
        const steps = [
            { index: 0, delay: 800 },
            { index: 1, delay: 1500 },
            { index: 2, delay: 2200 },
            { index: 3, delay: 2800 }
        ];

        steps.forEach(step => {
            setTimeout(() => {
                loaderSteps.forEach((s, i) => {
                    if (i < step.index) {
                        s.classList.remove('active');
                        s.classList.add('done');
                    } else if (i === step.index) {
                        s.classList.add('active');
                    }
                });
            }, step.delay);
        });

        // Show result after loading
        setTimeout(() => {
            modalLoading.style.display = 'none';
            modalResult.style.display = 'block';
            
            // Set title based on prompt
            resultTitle.textContent = formatTitle(prompt);
        }, 3500);
    }

    function formatTitle(prompt) {
        // Simple title formatting
        const words = prompt.split(' ').slice(0, 4);
        return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }

    // ============================================
    // Panel Tabs (Instructions/Inventory)
    // ============================================
    const panelTabs = document.querySelectorAll('.panel-tab');
    const panelContents = document.querySelectorAll('.panel-content');

    panelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetPanel = tab.dataset.panel;

            // Update active tab
            panelTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active content
            panelContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${targetPanel}-panel`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // ============================================
    // Steps Interaction
    // ============================================
    const steps = document.querySelectorAll('.step');

    steps.forEach((step, index) => {
        step.addEventListener('click', () => {
            steps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');
            
            // Could update the 3D viewer here in a real app
            console.log(`Showing step ${index + 1}`);
        });
    });

    // ============================================
    // Smooth Scrolling for Navigation
    // ============================================
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // Header Scroll Effect
    // ============================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // Button Click Feedback
    // ============================================
    const allButtons = document.querySelectorAll('.btn');

    allButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Skip if it's the generate button (has its own handler)
            if (btn.id === 'generate-btn') return;

            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                pointer-events: none;
                transform: scale(0);
                animation: ripple 0.6s linear;
            `;

            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size/2) + 'px';

            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ============================================
    // Intersection Observer for Animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe gallery items
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Observe pricing cards
    document.querySelectorAll('.pricing-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(card);
    });

    // ============================================
    // Easter Egg: Konami Code
    // ============================================
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Easter egg activated!
                document.body.style.animation = 'rainbow 2s linear';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 2000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Add rainbow animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to { transform: scale(4); opacity: 0; }
        }
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    console.log('🧱 BrickForge loaded! Try the Konami code for a surprise.');
});
