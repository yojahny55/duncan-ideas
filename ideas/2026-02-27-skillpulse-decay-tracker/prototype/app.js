// SkillPulse - Personal Skill Health Tracker
// Interactive Prototype

// Practice suggestions data
const practiceSuggestions = {
    rust: [
        {
            title: "Rustlings Exercise Set",
            description: "Complete 5 small exercises to refresh your Rust fundamentals",
            duration: "15 min",
            difficulty: "Easy",
            link: "https://github.com/rust-lang/rustlings"
        },
        {
            title: "Build a CLI Tool",
            description: "Create a simple command-line utility to practice ownership and borrowing",
            duration: "45 min",
            difficulty: "Medium",
            link: "https://rust-cli.github.io/book/"
        },
        {
            title: "Review Ownership Concepts",
            description: "Quick refresher on Rust's ownership, borrowing, and lifetimes",
            duration: "10 min",
            difficulty: "Easy",
            link: "https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html"
        }
    ],
    kubernetes: [
        {
            title: "Deploy a Sample App",
            description: "Create a deployment, service, and ingress from scratch",
            duration: "20 min",
            difficulty: "Medium",
            link: "https://kubernetes.io/docs/tutorials/"
        },
        {
            title: "kubectl Drills",
            description: "Practice common kubectl commands and resource management",
            duration: "15 min",
            difficulty: "Easy",
            link: "https://kubernetes.io/docs/reference/kubectl/"
        },
        {
            title: "Debug a Failing Pod",
            description: "Interactive scenario: find and fix why a pod won't start",
            duration: "30 min",
            difficulty: "Medium",
            link: "https://learnk8s.io/troubleshooting-deployments"
        }
    ],
    graphql: [
        {
            title: "Schema Design Exercise",
            description: "Design a GraphQL schema for a simple e-commerce app",
            duration: "20 min",
            difficulty: "Medium",
            link: "https://graphql.org/learn/"
        },
        {
            title: "Query & Mutation Practice",
            description: "Write queries and mutations against a practice API",
            duration: "15 min",
            difficulty: "Easy",
            link: "https://www.howtographql.com/"
        },
        {
            title: "Resolver Refresher",
            description: "Review how resolvers work with a hands-on example",
            duration: "25 min",
            difficulty: "Medium",
            link: "https://graphql.org/learn/execution/"
        }
    ]
};

// Skill metadata
const skillMeta = {
    rust: { name: "Rust", icon: "🦀" },
    kubernetes: { name: "Kubernetes", icon: "☸️" },
    graphql: { name: "GraphQL", icon: "◈" }
};

// Show practice suggestions modal
function showPractice(skillId) {
    const modal = document.getElementById('practiceModal');
    const content = document.getElementById('practiceContent');
    const suggestions = practiceSuggestions[skillId] || [];
    const skill = skillMeta[skillId] || { name: skillId, icon: "📚" };
    
    let html = `
        <p style="color: var(--text-secondary); margin-bottom: var(--space-lg);">
            ${skill.icon} Quick ways to refresh your <strong>${skill.name}</strong> skills:
        </p>
    `;
    
    suggestions.forEach(suggestion => {
        html += `
            <div class="practice-suggestion" onclick="startPractice('${skillId}', '${suggestion.title}')">
                <h4>${suggestion.title}</h4>
                <p>${suggestion.description}</p>
                <div class="practice-meta">
                    <span>⏱️ ${suggestion.duration}</span>
                    <span>📊 ${suggestion.difficulty}</span>
                </div>
            </div>
        `;
    });
    
    html += `
        <button class="btn-primary full-width" onclick="logPractice('${skillId}')" style="margin-top: var(--space-md);">
            I just practiced — Log it now
        </button>
    `;
    
    content.innerHTML = html;
    modal.classList.add('active');
}

// Start a practice session
function startPractice(skillId, title) {
    closeModal('practiceModal');
    showToast(`Starting: ${title}`);
    
    // In a real app, this would open the practice resource
    // and start a timer to track the session
}

// Log practice for a skill
function logPractice(skillId) {
    const skill = skillMeta[skillId] || { name: skillId };
    
    // Close any open modals first
    closeModal('practiceModal');
    
    // Update the skill card UI
    const skillCard = document.querySelector(`[data-skill="${skillId}"]`);
    if (skillCard) {
        // Animate health bar fill
        const healthFill = skillCard.querySelector('.health-fill');
        const healthLabel = skillCard.querySelector('.health-label');
        
        if (healthFill) {
            healthFill.style.width = '95%';
            healthFill.classList.remove('critical', 'warning');
            healthFill.classList.add('healthy');
        }
        if (healthLabel) {
            healthLabel.textContent = '95%';
        }
        
        // Update card styling
        skillCard.classList.remove('critical', 'warning');
        skillCard.classList.add('healthy');
        
        // Update meta text
        const meta = skillCard.querySelector('.skill-meta');
        if (meta) {
            meta.textContent = 'Last practiced: Just now';
        }
    }
    
    // Show log modal
    const logModal = document.getElementById('logModal');
    const skillName = document.getElementById('logSkillName');
    skillName.textContent = skill.name;
    logModal.classList.add('active');
    
    // Update stats
    updateStats();
    
    // Auto-close after delay
    setTimeout(() => {
        closeModal('logModal');
        showToast(`${skill.name} practice logged!`);
    }, 2500);
}

// Update quick stats
function updateStats() {
    const healthyCount = document.querySelectorAll('.skill-card.healthy').length;
    const warningCount = document.querySelectorAll('.skill-card.warning').length;
    const criticalCount = document.querySelectorAll('.skill-card.critical').length;
    
    // Update stat values with animation
    const stats = document.querySelectorAll('.stat-card');
    if (stats[0]) {
        animateValue(stats[0].querySelector('.stat-value'), parseInt(stats[0].querySelector('.stat-value').textContent), healthyCount, 300);
    }
    if (stats[1]) {
        animateValue(stats[1].querySelector('.stat-value'), parseInt(stats[1].querySelector('.stat-value').textContent), warningCount, 300);
    }
    if (stats[2]) {
        animateValue(stats[2].querySelector('.stat-value'), parseInt(stats[2].querySelector('.stat-value').textContent), criticalCount, 300);
    }
}

// Animate number change
function animateValue(element, start, end, duration) {
    if (start === end) return;
    
    const range = end - start;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.round(start + range * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Show add skill modal
function showAddSkill() {
    const modal = document.getElementById('addSkillModal');
    modal.classList.add('active');
}

// Add new skill
function addSkill(event) {
    event.preventDefault();
    
    const form = event.target;
    const skillName = form.querySelector('input[type="text"]').value;
    
    closeModal('addSkillModal');
    showToast(`${skillName} added to your skills!`);
    
    // Reset form
    form.reset();
}

// Close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Priority button selection
document.addEventListener('DOMContentLoaded', () => {
    const priorityBtns = document.querySelectorAll('.priority-btn');
    
    priorityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            priorityBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
    
    // Close modal on backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
    
    // Simulate real-time updates
    simulateDecay();
});

// Simulate skill decay over time (for demo)
function simulateDecay() {
    // This would normally be calculated server-side
    // For the demo, we just show the static state
    
    // Add subtle pulse animation to critical skills
    const criticalCards = document.querySelectorAll('.skill-card.critical');
    criticalCards.forEach(card => {
        card.style.animation = 'pulse 2s infinite';
    });
}

// Add pulse animation for critical skills
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        50% { box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1); }
    }
`;
document.head.appendChild(style);

// Service Worker registration (for PWA)
if ('serviceWorker' in navigator) {
    // In production, register a service worker for offline support
    // navigator.serviceWorker.register('/sw.js');
}

console.log('⚡ SkillPulse loaded — Keep your skills sharp!');
