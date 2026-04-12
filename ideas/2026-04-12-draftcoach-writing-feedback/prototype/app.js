// DraftCoach Prototype JavaScript

// State
let isAnalyzing = false;
let currentGoal = 'general';

// Elements
const inputText = document.getElementById('input-text');
const analyzeBtn = document.querySelector('.btn-analyze');
const btnText = document.querySelector('.btn-text');
const btnLoader = document.querySelector('.btn-loader');
const emptyState = document.getElementById('empty-state');
const analysisResults = document.getElementById('analysis-results');
const wordCount = document.querySelector('.word-count');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateWordCount();
});

// Update word count on input
function updateWordCount() {
    const text = inputText.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    wordCount.textContent = `${words} word${words !== 1 ? 's' : ''}`;
}

// Auto-analyze on input (debounced)
let debounceTimer;
function autoAnalyze() {
    updateWordCount();

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        if (inputText.value.trim().length > 50) {
            analyzeText();
        }
    }, 1000);
}

// Analyze text
async function analyzeText() {
    if (isAnalyzing) return;

    const text = inputText.value.trim();
    if (!text) {
        alert('Please enter some text to analyze');
        return;
    }

    isAnalyzing = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';

    // Simulate API call
    await simulateAnalysis();

    // Show results
    emptyState.style.display = 'none';
    analysisResults.style.display = 'block';

    // Reset button
    isAnalyzing = false;
    btnText.style.display = 'inline';
    btnLoader.style.display = 'none';
}

// Simulate AI analysis (in real app, this would be an API call)
async function simulateAnalysis() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });
}

// Update goal
function updateGoal() {
    const goalSelect = document.getElementById('goal');
    currentGoal = goalSelect.value;
    console.log('Goal updated:', currentGoal);
}

// Clear editor
function clearEditor() {
    if (inputText.value.trim() && confirm('Clear all text?')) {
        inputText.value = '';
        updateWordCount();
        emptyState.style.display = 'flex';
        analysisResults.style.display = 'none';
    }
}

// Copy rewrite to clipboard
function copyRewrite(elementId) {
    const rewriteText = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(rewriteText).then(() => {
        alert('Copied to clipboard!');
    }).catch((err) => {
        console.error('Failed to copy:', err);
        alert('Failed to copy. Please try again.');
    });
}

// Sample templates
const templates = {
    request: `Hi [Name],

I'm writing to request [what you need].

I need this because [reason/context], and it would help with [specific benefit].

Would you be available to discuss this [specific time/day]?

Thanks,
[Your Name]`,

    negotiate: `Hi [Name],

I'm writing to discuss [what you're negotiating for — salary, project timeline, etc].

Based on [data/research/market value], I'm requesting [specific ask]. This reflects [justification: market rates, performance, added value].

I'm confident this is fair because [strongest reason].

Looking forward to discussing this further.

Best,
[Your Name]`,

    apologize: `Hi [Name],

I want to apologize for [specific mistake].

I understand this impacted [how it affected them], and I take full responsibility.

To make this right, I'm [specific action you're taking to fix it].

Thank you for your understanding.

Best,
[Your Name]`,

    'follow-up': `Hi [Name],

I'm following up on [previous conversation/meeting/email from X days ago].

Just wanted to check if [specific thing you're waiting on]?

I'm happy to provide more context or adjust [anything] if needed.

Best,
[Your Name]`,

    introduce: `Hi [Name],

My name is [Your Name], and I'm [your role].

I'm reaching out because [reason — mutual connection, saw their work, etc].

I'd love to connect because [specific value you can offer or what you hope to learn].

Best,
[Your Name]`
};

// Apply template
function applyTemplate(templateName) {
    if (templates[templateName]) {
        if (inputText.value.trim() && !confirm('This will replace your current text. Continue?')) {
            return;
        }
        inputText.value = templates[templateName];
        updateWordCount();
    }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to analyze
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        analyzeText();
    }

    // Escape to clear
    if (e.key === 'Escape' && document.activeElement === inputText) {
        clearEditor();
    }
});

// Click feedback items for more details
document.querySelectorAll('.feedback-item').forEach((item) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        const feedbackText = item.querySelector('.feedback-text').textContent;
        alert(feedbackText);
    });
});

// Apply quick fixes
document.querySelectorAll('.btn-apply').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const quickFix = e.target.closest('.quick-fix');
        const fixText = quickFix.querySelector('.fix-text').textContent;

        // In real app, this would actually modify the text
        alert(`Applying: ${fixText}\n\n(This would modify your text in the full version)`);
    });
});

// Dimension score hover effects
document.querySelectorAll('.dimension-score').forEach((score) => {
    score.addEventListener('mouseenter', () => {
        score.style.transform = 'scale(1.02)';
        score.style.transition = 'transform 200ms ease';
    });

    score.addEventListener('mouseleave', () => {
        score.style.transform = 'scale(1)';
    });
});

// Smooth scroll to feedback on analyze
function analyzeText() {
    if (isAnalyzing) return;

    const text = inputText.value.trim();
    if (!text) {
        alert('Please enter some text to analyze');
        return;
    }

    isAnalyzing = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';

    simulateAnalysis().then(() => {
        emptyState.style.display = 'none';
        analysisResults.style.display = 'block';

        // Smooth scroll to results on mobile
        if (window.innerWidth <= 768) {
            analysisResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        isAnalyzing = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
    });
}

// Console welcome message
console.log('%c✨ DraftCoach Prototype', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cAI writing feedback that tells you what readers will actually think', 'color: #94a3b8;');
console.log('');
console.log('Keyboard shortcuts:');
console.log('  Ctrl/Cmd + Enter → Analyze text');
console.log('  Escape → Clear editor');
