/**
 * ProofPost - Interactive Demo
 * Demonstrates the review → post flow
 */

// State
let selectedReview = null;
let selectedTemplate = null;

// Review data
const reviews = {
    1: {
        quote: "Best tacos I've ever had!",
        fullText: "Best tacos I've ever had! The al pastor was absolutely incredible and the staff was so friendly. We'll definitely be back every week.",
        author: "Maria G."
    },
    2: {
        quote: "the salsa verde is life-changing",
        fullText: "Finally found our go-to spot! Fresh ingredients, generous portions, and the salsa verde is life-changing. 10/10 would recommend to everyone.",
        author: "James T."
    },
    3: {
        quote: "You can taste the love in every bite",
        fullText: "Authentic flavors that remind me of my grandmother's cooking. You can taste the love in every bite. This is the real deal!",
        author: "Carlos M."
    }
};

// Template styles
const templates = {
    modern: {
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
        color: 'white'
    },
    minimal: {
        background: 'white',
        color: '#27272a',
        border: '1px solid #e4e4e7'
    },
    bold: {
        background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
        color: 'white'
    },
    warm: {
        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        color: '#27272a'
    }
};

/**
 * Select a review and proceed to template selection
 */
function selectReview(element) {
    // Remove selected class from all
    document.querySelectorAll('.review-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected class to clicked
    element.classList.add('selected');
    
    // Store selection
    selectedReview = element.dataset.review;
    
    // Transition after brief delay
    setTimeout(() => {
        showStep(2);
    }, 300);
}

/**
 * Select a template and generate preview
 */
function selectTemplate(element) {
    // Remove selected class from all
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selected class to clicked
    element.classList.add('selected');
    
    // Store selection
    selectedTemplate = element.dataset.template;
    
    // Generate preview and show
    setTimeout(() => {
        generatePreview();
        showStep(3);
    }, 300);
}

/**
 * Generate the final preview
 */
function generatePreview() {
    const review = reviews[selectedReview];
    const template = templates[selectedTemplate];
    const preview = document.getElementById('result-preview');
    
    // Build style string
    let styleStr = `background: ${template.background}; color: ${template.color};`;
    if (template.border) {
        styleStr += ` border: ${template.border};`;
    }
    
    preview.setAttribute('style', styleStr);
    
    // Build content
    preview.innerHTML = `
        <div class="quote">"${review.quote}"</div>
        <div class="stars">★★★★★</div>
        <div class="author">— ${review.author}</div>
        <div class="business">via Google Reviews</div>
    `;
}

/**
 * Show a specific step
 */
function showStep(step) {
    // Hide all steps
    document.getElementById('demo-step-1').classList.add('hidden');
    document.getElementById('demo-step-2').classList.add('hidden');
    document.getElementById('demo-step-3').classList.add('hidden');
    
    // Show target step
    document.getElementById(`demo-step-${step}`).classList.remove('hidden');
}

/**
 * Go back to a previous step
 */
function goBack(step) {
    showStep(step);
}

/**
 * Start the demo over
 */
function startOver() {
    selectedReview = null;
    selectedTemplate = null;
    
    // Clear selections
    document.querySelectorAll('.review-card, .template-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Show first step
    showStep(1);
}

/**
 * Simulate download (in real app would generate actual PNG)
 */
function downloadPost() {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        font-weight: 600;
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = '✓ Post downloaded! (Demo)';
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation keyframes
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

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Console greeting
console.log('%c✨ ProofPost Demo', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('Turn your reviews into social content.');
console.log('This is a prototype — built with HTML/CSS/JS.');
