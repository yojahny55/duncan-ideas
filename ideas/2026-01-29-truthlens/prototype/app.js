// TruthLens Prototype - Interactive Demo

// Analysis data for each post type
const analysisData = {
    high: {
        score: 92,
        label: 'High Credibility',
        type: 'high',
        summary: 'This post appears to be from a verified, reputable news source with factual, verifiable claims.',
        signals: [
            { icon: '✅', text: 'Verified account with established history', type: 'good' },
            { icon: '✅', text: 'Links to official primary source', type: 'good' },
            { icon: '✅', text: 'Neutral, factual language', type: 'good' },
            { icon: '✅', text: 'No emotional manipulation detected', type: 'good' },
            { icon: '✅', text: 'Claims are verifiable', type: 'good' }
        ],
        recommendation: 'This content appears reliable. Always good practice to check the primary source link.'
    },
    medium: {
        score: 58,
        label: 'Medium Credibility',
        type: 'medium',
        summary: 'This post contains claims that cannot be easily verified and uses promotional language patterns.',
        signals: [
            { icon: '⚠️', text: 'Unverified claims ("my source confirmed")', type: 'warn' },
            { icon: '⚠️', text: 'Urgency language ("don\'t miss out")', type: 'warn' },
            { icon: '⚠️', text: 'Financial advice without credentials', type: 'warn' },
            { icon: '❌', text: 'Extreme predictions (1000x)', type: 'bad' },
            { icon: '✅', text: 'Account has posting history', type: 'good' }
        ],
        recommendation: 'Exercise caution. Verify claims independently before taking any action, especially financial.'
    },
    low: {
        score: 12,
        label: 'Low Credibility',
        type: 'low',
        summary: 'This post exhibits multiple patterns commonly associated with misinformation and engagement bait.',
        signals: [
            { icon: '❌', text: 'New account with no history', type: 'bad' },
            { icon: '❌', text: 'Extreme emotional language', type: 'bad' },
            { icon: '❌', text: '"Share before deleted" manipulation', type: 'bad' },
            { icon: '❌', text: 'No sources or evidence provided', type: 'bad' },
            { icon: '❌', text: 'Classic engagement bait patterns', type: 'bad' },
            { icon: '⚠️', text: 'High engagement ratio (potential bot amplification)', type: 'warn' }
        ],
        recommendation: 'This content shows strong indicators of engagement bait or misinformation. Not recommended for sharing.'
    }
};

// Post click handler - show analysis modal
document.querySelectorAll('.post').forEach(post => {
    post.addEventListener('click', () => {
        const type = post.dataset.type;
        const data = analysisData[type];
        showAnalysisModal(data);
    });
});

// Show analysis modal
function showAnalysisModal(data) {
    const modal = document.getElementById('analysisModal');
    const modalScore = document.getElementById('modalScore');
    const modalLabel = document.getElementById('modalLabel');
    const modalBody = document.getElementById('modalBody');
    
    // Update score circle
    modalScore.innerHTML = `<span class="big-score">${data.score}</span>`;
    modalScore.className = `credibility-circle ${data.type}`;
    
    // Update label
    modalLabel.textContent = data.label;
    modalLabel.className = `credibility-label ${data.type}`;
    
    // Build body content
    let signalsHTML = data.signals.map(s => `
        <li class="flag-${s.type}">
            <span>${s.icon}</span>
            <span>${s.text}</span>
        </li>
    `).join('');
    
    modalBody.innerHTML = `
        <p>${data.summary}</p>
        
        <h4>🔍 Analysis Signals</h4>
        <ul>${signalsHTML}</ul>
        
        <h4>💡 Recommendation</h4>
        <p>${data.recommendation}</p>
    `;
    
    // Show modal
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    document.getElementById('analysisModal').classList.remove('active');
}

// Close modal on backdrop click
document.getElementById('analysisModal').addEventListener('click', (e) => {
    if (e.target.id === 'analysisModal') {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Filter threshold handler
function updateThreshold(value) {
    document.getElementById('thresholdValue').textContent = value;
    
    const threshold = parseInt(value);
    const posts = document.querySelectorAll('.post');
    let visibleCount = 0;
    let hiddenCount = 0;
    
    posts.forEach(post => {
        const credibility = parseInt(post.dataset.credibility);
        if (credibility < threshold) {
            post.classList.add('filtered');
            hiddenCount++;
        } else {
            post.classList.remove('filtered');
            visibleCount++;
        }
    });
    
    // Update hint text
    const hint = document.getElementById('filterHint');
    if (threshold <= 10) {
        hint.textContent = `Currently showing: All posts`;
    } else if (hiddenCount === 0) {
        hint.textContent = `Currently showing: All ${visibleCount} posts pass the threshold`;
    } else {
        hint.textContent = `Currently showing: ${visibleCount} posts (${hiddenCount} filtered out)`;
    }
}

// Animate badges on load
document.addEventListener('DOMContentLoaded', () => {
    const badges = document.querySelectorAll('.truthlens-badge');
    badges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0)';
        setTimeout(() => {
            badge.style.transition = 'all 0.3s ease';
            badge.style.opacity = '1';
            badge.style.transform = 'scale(1)';
        }, 200 + (index * 100));
    });
});

// Simulate real-time analysis (demo effect)
function simulateAnalysis(element) {
    const badge = element.querySelector('.truthlens-badge');
    const originalContent = badge.innerHTML;
    
    badge.innerHTML = '...';
    badge.style.animation = 'pulse 0.5s infinite';
    
    setTimeout(() => {
        badge.innerHTML = originalContent;
        badge.style.animation = '';
    }, 1000);
}

// Add pulse animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

console.log('🔍 TruthLens Demo loaded! Click on posts to see credibility analysis.');
