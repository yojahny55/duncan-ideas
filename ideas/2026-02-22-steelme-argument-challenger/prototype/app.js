// SteelMe - AI Opinion Stress-Tester
// Demo Application

// ============================================
// Sample Steelman Responses
// ============================================

const steelmanResponses = {
    "remote work": {
        steelman: {
            title: "The Case for Office Work",
            points: [
                {
                    heading: "The Hidden Costs of Remote Work",
                    content: "While remote work eliminates commute time, it often extends the workday in invisible ways. Studies show remote workers average 2.5 more hours per day than office workers. The 'always-on' culture, lack of transition rituals, and difficulty disconnecting actually worsen work-life balance for many — you're not saving commute time, you're donating it to work."
                },
                {
                    heading: "Collaboration Isn't Just Meetings",
                    content: "The most valuable workplace interactions are unplanned — the hallway conversation that sparks an idea, the lunch where you learn about a problem in another department, the casual observation of how senior colleagues handle difficult situations. These serendipitous moments compound into institutional knowledge, mentorship, and innovation that Slack channels can't replicate."
                },
                {
                    heading: "Career Progression and Visibility",
                    content: "Remote workers are systematically disadvantaged for promotions, key projects, and salary increases. 'Proximity bias' is real and well-documented. Your exceptional work matters less if decision-makers don't see you working, don't build rapport with you, and don't think of you first when opportunities arise."
                },
                {
                    heading: "The Loneliness Epidemic",
                    content: "For many, the workplace is their primary social community. Remote work has contributed to skyrocketing rates of loneliness and isolation. The 'work-life balance' argument assumes life outside work is rich and fulfilling — for many, especially those new to a city or living alone, the office provided essential human connection."
                }
            ]
        },
        commonGround: [
            "Both sides want workers to be productive AND happy — they just disagree on what achieves this",
            "Flexibility and autonomy are valuable — the question is whether full remote is the only way to get them",
            "Commuting is genuinely problematic — even office advocates often support hybrid models",
            "Individual circumstances vary — what works for parents may not work for early-career singles"
        ]
    },
    
    "ai jobs": {
        steelman: {
            title: "The Case That AI WILL Replace Most White-Collar Jobs",
            points: [
                {
                    heading: "We Consistently Underestimate Exponential Progress",
                    content: "Every wave of AI advancement has surprised experts who said 'it can't do X.' In 2020, most believed AI couldn't write coherent essays. By 2023, it was writing legal briefs and passing bar exams. The 10-year timeline isn't based on current AI — it's based on AI that's 100-1000x more capable, trained on all human knowledge, and fine-tuned for specific roles."
                },
                {
                    heading: "White-Collar Work Is More Formulaic Than We Admit",
                    content: "Most knowledge work isn't creative genius — it's pattern matching, information synthesis, and applying learned procedures. The doctor following diagnostic protocols, the lawyer citing precedent, the analyst building spreadsheet models — these are exactly the tasks AI excels at. We romanticize our jobs as irreplaceable; in reality, 80% of most roles could be automated."
                },
                {
                    heading: "Economic Incentives Are Overwhelming",
                    content: "A single AI system can replace thousands of workers, work 24/7, never demands raises, and improves continuously. The economic pressure to adopt AI is irresistible. Companies that don't automate will be destroyed by competitors who do. This isn't about whether AI CAN replace workers — it's about whether businesses will let sentiment stop them from capturing 90% cost savings."
                },
                {
                    heading: "Historical Analogies May Not Apply",
                    content: "The 'new jobs will emerge' argument assumes AI creates tasks only humans can do. But AI is different — it targets cognitive labor directly. When cars replaced horses, horses didn't get new jobs. If AI can do everything humans can do intellectually, what remains? Physical labor? That's being automated too. This may be the first displacement with no obvious escape valve."
                }
            ]
        },
        commonGround: [
            "Major workforce disruption is coming — disagreement is mainly about magnitude and timeline",
            "Adaptation and retraining will be essential regardless of which view is correct",
            "Policy responses (UBI, education reform) deserve serious consideration either way",
            "Some roles (requiring physical presence, human connection) are more resistant than others"
        ]
    },
    
    "renting": {
        steelman: {
            title: "The Case That Renting Is Often the Smart Financial Choice",
            points: [
                {
                    heading: "Homeownership Costs Are Systematically Hidden",
                    content: "The 'throwing money away' narrative ignores that most of your early mortgage payments are interest (also 'thrown away'), plus property taxes (forever), insurance, maintenance (2-4% annually), HOA fees, transaction costs (6% to sell), and opportunity cost of the down payment. When you add these up, the break-even timeline is often 7-10+ years. Renting isn't waste — it's paying for flexibility and transferred risk."
                },
                {
                    heading: "The Down Payment Has Massive Opportunity Cost",
                    content: "That $80,000 down payment invested in the stock market would historically return 7-10% annually. Over 30 years, that's $600K-$1M. Home appreciation rarely beats this, especially after accounting for all ownership costs. Renters can invest the difference and often come out ahead financially — they're not 'throwing away' money, they're deploying capital differently."
                },
                {
                    heading: "Liquidity and Flexibility Have Real Value",
                    content: "Life is unpredictable. Job opportunities, relationships, family needs, neighborhood changes — homeowners are anchored in ways that can cost them dearly. The 2008 crisis showed how quickly home 'equity' evaporates. Renters can move for a better job, leave a bad neighborhood, or downsize instantly. This optionality is worth thousands annually."
                },
                {
                    heading: "The 'Forced Savings' Argument Works Both Ways",
                    content: "Yes, mortgage payments build equity (eventually). But automatic investment contributions work the same way, with better returns and liquidity. The real question is discipline — and someone disciplined enough to systematically invest the rent/buy difference will often outperform homeowners financially."
                }
            ]
        },
        commonGround: [
            "Building wealth is the real goal — homeownership is just one path",
            "Personal circumstances matter enormously (job stability, location, family situation)",
            "Both paths require discipline and long-term thinking to work well",
            "Extreme views ('always rent' or 'always buy') are probably wrong"
        ]
    },
    
    "social media": {
        steelman: {
            title: "The Case That Social Media Is Net Positive",
            points: [
                {
                    heading: "Connection for the Previously Isolated",
                    content: "For people with rare conditions, minority identities, niche interests, or living in isolated areas, social media is a lifeline to community that physically never existed. LGBTQ+ youth in hostile environments, people with rare diseases, immigrants staying connected to family — for these groups, the 'net negative' calculation ignores transformative benefits."
                },
                {
                    heading: "Democratization of Voice and Information",
                    content: "Before social media, information was gatekept by a small elite. Now, anyone can reach millions. Movements like #MeToo, Arab Spring, and countless local activism successes happened because ordinary people could organize and expose injustice. The same 'amplification' critics cite for misinformation also amplifies truth that would've been suppressed."
                },
                {
                    heading: "The Negativity Bias in Coverage",
                    content: "We hear about social media's harms precisely because they make good stories. Billions of positive daily interactions — reconnecting with old friends, finding support groups, learning new skills, small business marketing — don't make headlines. The research on harms often shows correlations, not causation, and effect sizes are typically small."
                },
                {
                    heading: "Tools, Not Determinism",
                    content: "Blaming social media is like blaming the printing press for propaganda. The technology amplifies human nature — good and bad. Many people use social media healthily and benefit enormously. The solution isn't elimination but education, design improvements, and personal responsibility. Fire cooks food and burns houses; we didn't ban fire."
                }
            ]
        },
        commonGround: [
            "Platform design matters — algorithms optimizing for engagement create real problems",
            "Children and teens likely need special protections and guardrails",
            "Individual usage patterns determine outcomes more than the technology itself",
            "Some regulation and transparency is probably necessary"
        ]
    },
    
    "default": {
        steelman: {
            title: "A Strong Counterargument",
            points: [
                {
                    heading: "Consider the Strongest Opposing View",
                    content: "The most thoughtful people who disagree with you aren't missing obvious facts — they're weighing values differently, have different experiences, or are seeing evidence you haven't fully considered. What would it take for YOU to hold the opposite position? That reasoning is worth understanding."
                },
                {
                    heading: "Hidden Assumptions May Be Wrong",
                    content: "Every position rests on assumptions we often don't examine. Maybe the future won't look like the past. Maybe the effects you expect have unintended consequences. Maybe the metric you're optimizing for isn't the right one. The strongest counterarguments often attack foundations, not conclusions."
                },
                {
                    heading: "Tradeoffs You're Underweighting",
                    content: "Most issues involve genuine tradeoffs between things we value. If your position seems costless, you may be ignoring what the other side is trying to protect. Freedom vs. security, efficiency vs. resilience, individual vs. collective — these tensions don't have easy answers."
                },
                {
                    heading: "Your Information Sources May Be Biased",
                    content: "We naturally seek out information that confirms our views. The sources you trust may systematically underrepresent the best opposing evidence. The steelmanned counterargument isn't what your opponents actually say — it's what the smartest, most thoughtful opponent WOULD say."
                }
            ]
        },
        commonGround: [
            "Complex issues rarely have obviously correct answers",
            "Reasonable people can disagree while sharing core values",
            "Understanding opposing views strengthens your own thinking",
            "Humility about our own certainty is usually warranted"
        ]
    }
};

// ============================================
// State
// ============================================

let selectedDepth = 'strong';
let confidenceBefore = 7;
let currentOpinion = '';

// ============================================
// DOM Elements
// ============================================

const elements = {
    // Navigation
    navBtns: document.querySelectorAll('.nav-btn'),
    views: document.querySelectorAll('.view'),
    
    // Input
    topicSelect: document.getElementById('topic-select'),
    opinionInput: document.getElementById('opinion-input'),
    depthBtns: document.querySelectorAll('.depth-btn'),
    confidenceSlider: document.getElementById('confidence-before'),
    confidenceDisplay: document.getElementById('confidence-display'),
    steelmanBtn: document.getElementById('steelman-btn'),
    
    // Sections
    inputSection: document.getElementById('input-section'),
    loadingSection: document.getElementById('loading-section'),
    resultsSection: document.getElementById('results-section'),
    
    // Results
    positionRecap: document.getElementById('your-position-recap'),
    steelmanContent: document.getElementById('steelman-content'),
    commonGroundContent: document.getElementById('common-ground-content'),
    confBeforeDisplay: document.getElementById('conf-before-display'),
    confBtns: document.querySelectorAll('.conf-btn'),
    reflectionMessage: document.getElementById('reflection-message'),
    
    // Actions
    saveBtn: document.getElementById('save-btn'),
    deeperBtn: document.getElementById('deeper-btn'),
    newChallengeBtn: document.getElementById('new-challenge-btn'),
    
    // Toast
    toast: document.getElementById('toast')
};

// ============================================
// Event Listeners
// ============================================

// Navigation
elements.navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        switchView(view);
    });
});

// Depth selection
elements.depthBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        elements.depthBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedDepth = btn.dataset.depth;
    });
});

// Confidence slider
elements.confidenceSlider.addEventListener('input', (e) => {
    confidenceBefore = parseInt(e.target.value);
    elements.confidenceDisplay.textContent = `${confidenceBefore}/10`;
});

// Steelman button
elements.steelmanBtn.addEventListener('click', generateSteelman);

// Confidence change buttons
elements.confBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        elements.confBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        
        const change = parseInt(btn.dataset.change);
        showReflectionMessage(change);
    });
});

// Action buttons
elements.saveBtn.addEventListener('click', saveToJournal);
elements.deeperBtn.addEventListener('click', goDeeper);
elements.newChallengeBtn.addEventListener('click', startNewChallenge);

// ============================================
// Functions
// ============================================

function switchView(viewName) {
    elements.navBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewName);
    });
    
    elements.views.forEach(view => {
        view.classList.toggle('active', view.id === `${viewName}-view`);
    });
}

function generateSteelman() {
    currentOpinion = elements.opinionInput.value.trim();
    
    if (!currentOpinion) {
        elements.opinionInput.focus();
        elements.opinionInput.style.borderColor = '#ef4444';
        setTimeout(() => {
            elements.opinionInput.style.borderColor = '';
        }, 2000);
        return;
    }
    
    // Show loading
    elements.inputSection.style.display = 'none';
    elements.loadingSection.style.display = 'block';
    elements.resultsSection.style.display = 'none';
    
    // Simulate AI processing
    setTimeout(() => {
        displayResults();
    }, 2000 + Math.random() * 1000);
}

function displayResults() {
    // Hide loading, show results
    elements.loadingSection.style.display = 'none';
    elements.resultsSection.style.display = 'block';
    
    // Recap user's position
    elements.positionRecap.textContent = `"${currentOpinion}"`;
    
    // Get appropriate steelman response
    const response = getSteelmanResponse(currentOpinion);
    
    // Render steelman content
    let steelmanHTML = `<h3>${response.steelman.title}</h3>`;
    response.steelman.points.forEach(point => {
        steelmanHTML += `
            <h3>${point.heading}</h3>
            <p>${point.content}</p>
        `;
    });
    elements.steelmanContent.innerHTML = steelmanHTML;
    
    // Render common ground
    let commonGroundHTML = '';
    response.commonGround.forEach(point => {
        commonGroundHTML += `<div class="common-point">${point}</div>`;
    });
    elements.commonGroundContent.innerHTML = commonGroundHTML;
    
    // Set confidence before display
    elements.confBeforeDisplay.textContent = `${confidenceBefore}/10`;
    
    // Reset reflection state
    elements.confBtns.forEach(b => b.classList.remove('selected'));
    elements.reflectionMessage.style.display = 'none';
    
    // Scroll to top of results
    elements.resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function getSteelmanResponse(opinion) {
    const opinionLower = opinion.toLowerCase();
    
    if (opinionLower.includes('remote') || opinionLower.includes('work from home') || opinionLower.includes('office')) {
        return steelmanResponses['remote work'];
    }
    if (opinionLower.includes('ai') && (opinionLower.includes('job') || opinionLower.includes('replace') || opinionLower.includes('work'))) {
        return steelmanResponses['ai jobs'];
    }
    if (opinionLower.includes('rent') || opinionLower.includes('buy') || opinionLower.includes('home') || opinionLower.includes('mortgage')) {
        return steelmanResponses['renting'];
    }
    if (opinionLower.includes('social media') || opinionLower.includes('twitter') || opinionLower.includes('instagram') || opinionLower.includes('tiktok')) {
        return steelmanResponses['social media'];
    }
    
    return steelmanResponses['default'];
}

function showReflectionMessage(change) {
    const newConf = Math.max(1, Math.min(10, confidenceBefore + change));
    elements.reflectionMessage.style.display = 'block';
    
    if (change < 0) {
        elements.reflectionMessage.className = 'reflection-message updated';
        elements.reflectionMessage.innerHTML = `
            <strong>📉 Confidence updated: ${confidenceBefore}/10 → ${newConf}/10</strong><br>
            Great! Updating your views when presented with strong arguments is a sign of intellectual maturity. 
            You're now ${Math.abs(change * 10)}% less certain, which means you're thinking more carefully.
        `;
    } else if (change > 0) {
        elements.reflectionMessage.className = 'reflection-message updated';
        elements.reflectionMessage.innerHTML = `
            <strong>📈 Confidence increased: ${confidenceBefore}/10 → ${newConf}/10</strong><br>
            Interesting! Seeing the best counterargument and still feeling confident suggests your position is well-founded.
            Consider whether you've fully engaged with the steelmanned points.
        `;
    } else {
        elements.reflectionMessage.className = 'reflection-message unchanged';
        elements.reflectionMessage.innerHTML = `
            <strong>➡️ Confidence unchanged: ${confidenceBefore}/10</strong><br>
            You've considered the strongest counterargument and your view remains stable.
            This could mean your position is robust — or that the counterargument deserves deeper reflection.
        `;
    }
}

function saveToJournal() {
    showToast('Saved to journal!');
}

function goDeeper() {
    showToast('Generating deeper analysis...');
    // In real app, would generate more detailed steelman
}

function startNewChallenge() {
    // Reset everything
    elements.inputSection.style.display = 'block';
    elements.loadingSection.style.display = 'none';
    elements.resultsSection.style.display = 'none';
    
    elements.opinionInput.value = '';
    elements.topicSelect.value = '';
    elements.confidenceSlider.value = 7;
    confidenceBefore = 7;
    elements.confidenceDisplay.textContent = '7/10';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message) {
    elements.toast.querySelector('.toast-message').textContent = message;
    elements.toast.classList.add('show');
    
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

// ============================================
// Initialize
// ============================================

// Focus on opinion input when page loads
elements.opinionInput.focus();
