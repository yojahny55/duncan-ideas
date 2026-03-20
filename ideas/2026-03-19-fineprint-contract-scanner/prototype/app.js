// FinePrint — AI Contract Scanner Prototype

const DEMO_CONTRACTS = {
    lease: {
        type: "Apartment Lease Agreement",
        grade: "B-",
        gradeClass: "grade-b",
        summary: [
            "This is a <strong>12-month residential lease</strong> for a 2-bedroom apartment at $1,850/month. Rent is due on the 1st with a 5-day grace period.",
            "The lease <strong>auto-renews for another 12 months</strong> unless you give 90 days written notice — that's stricter than the typical 30-60 day requirement.",
            "Your security deposit is $2,775 (1.5x rent). The landlord has <strong>45 days to return it</strong>, which is legal but on the slow side. Many states require 14-30 days.",
            "You're agreeing to <strong>mandatory arbitration</strong> for disputes, which means you can't take the landlord to small claims court. This is unusual for residential leases."
        ],
        scoreSummary: "Generally fair with a few concerning clauses",
        categories: [
            { label: "Financial Risk", width: 35, level: "low", value: "Low" },
            { label: "Rights Given Up", width: 60, level: "medium", value: "Medium" },
            { label: "Exit Difficulty", width: 75, level: "high", value: "High" },
            { label: "Privacy Exposure", width: 20, level: "low", value: "Low" }
        ],
        flags: [
            {
                title: "🚩 Auto-Renewal Trap — 90-Day Notice Required",
                clause: "Section 3.2: This lease shall automatically renew for successive twelve (12) month periods unless either party provides written notice of termination no fewer than ninety (90) days prior to the expiration of the current term.",
                explain: "If you forget to send a letter 3 months before your lease ends, you're locked in for another full year. Most leases require 30-60 days notice.",
                benchmark: "📊 Benchmark: 78% of standard leases require only 30-day notice"
            },
            {
                title: "🚩 Mandatory Arbitration — No Court Access",
                clause: "Section 14.1: Any dispute arising under this Agreement shall be resolved exclusively through binding arbitration administered by the American Arbitration Association.",
                explain: "You're giving up your right to go to court — including small claims court, which is free and tenant-friendly. Arbitration can cost $1,500+ and tends to favor landlords.",
                benchmark: "📊 Benchmark: Only 12% of residential leases include mandatory arbitration"
            },
            {
                title: "🚩 Excessive Late Fee Structure",
                clause: "Section 5.3: A late fee of $150 shall be assessed for each day rent remains unpaid after the grace period, up to a maximum of 25% of monthly rent.",
                explain: "Daily late fees of $150 add up fast — if you're 3 days late, that's $450. Most leases charge a one-time flat fee of $50-100 or 5% of rent.",
                benchmark: "📊 Benchmark: Typical late fee is $50-100 one-time or 5% of rent"
            }
        ],
        clauses: [
            { title: "Lease Term", severity: "ok", icon: "✅", plain: "12-month lease starting April 1, 2026 through March 31, 2027. Standard duration.", original: "The term of this Lease shall commence on April 1, 2026 and terminate on March 31, 2027.", benchmark: null },
            { title: "Monthly Rent", severity: "ok", icon: "✅", plain: "Rent is $1,850/month due on the 1st with a 5-day grace period. Standard.", original: "Tenant shall pay Landlord monthly rent in the amount of $1,850.00, due on the first day of each month. A grace period of five (5) days shall apply.", benchmark: null },
            { title: "Security Deposit", severity: "watch", icon: "⚠️", plain: "Deposit is $2,775 (1.5x rent). Legal but on the higher side. Return timeline is 45 days — longer than many states require.", original: "Tenant shall deposit $2,775.00 as security. Landlord shall return the deposit, less lawful deductions, within forty-five (45) days.", benchmark: "📊 Most states cap at 1-2x rent. 45-day return is legal but slower than the 14-30 day norm." },
            { title: "Auto-Renewal", severity: "red", icon: "🚩", plain: "Lease auto-renews for 12 months unless you give 90 days written notice. This is aggressive — you could accidentally lock yourself in.", original: "This lease shall automatically renew for successive twelve (12) month periods unless either party provides written notice of termination no fewer than ninety (90) days prior.", benchmark: "📊 78% of leases require only 30-day notice" },
            { title: "Maintenance & Repairs", severity: "ok", icon: "✅", plain: "Landlord handles structural and major appliance repairs. You handle minor maintenance under $100. Standard split.", original: "Landlord shall maintain structural elements, HVAC, plumbing, and appliances. Tenant responsible for maintenance and repairs under $100.", benchmark: null },
            { title: "Late Fees", severity: "red", icon: "🚩", plain: "Daily late fee of $150 after grace period, up to 25% of rent. This is punitive — most places charge a one-time fee.", original: "A late fee of $150 shall be assessed for each day rent remains unpaid after the grace period, up to a maximum of 25% of monthly rent.", benchmark: "📊 Standard is $50-100 flat or 5% of monthly rent" },
            { title: "Subletting", severity: "watch", icon: "⚠️", plain: "No subletting without landlord's written consent. They can deny for 'any reason,' which is broad.", original: "Tenant shall not sublet the Premises or assign this Lease without Landlord's prior written consent, which may be withheld for any reason.", benchmark: "📊 Many jurisdictions require landlords to not unreasonably withhold consent" },
            { title: "Pet Policy", severity: "ok", icon: "✅", plain: "Pets allowed with $500 deposit and $50/month pet rent. One pet max, under 50 lbs.", original: "Pets permitted with a $500 non-refundable pet deposit and $50/month pet rent. Maximum one (1) pet under 50 lbs.", benchmark: null },
            { title: "Arbitration Clause", severity: "red", icon: "🚩", plain: "All disputes go to binding arbitration — no small claims court, no jury trial. This favors the landlord.", original: "Any dispute arising under this Agreement shall be resolved exclusively through binding arbitration administered by the American Arbitration Association.", benchmark: "📊 Only 12% of residential leases include mandatory arbitration" },
            { title: "Entry Rights", severity: "ok", icon: "✅", plain: "Landlord must give 24-hour notice before entering, except emergencies. Standard and legal.", original: "Landlord may enter the Premises with twenty-four (24) hours advance notice for inspections, repairs, or showings. Emergency entry requires no notice.", benchmark: null }
        ],
        tips: [
            {
                title: "Reduce Auto-Renewal Notice to 30 Days",
                text: "90 days is unusually long. Ask to change to 30 days, which is industry standard.",
                suggestion: "Proposed language: \"Either party may terminate by providing written notice no fewer than thirty (30) days prior to the expiration of the current term.\""
            },
            {
                title: "Remove Mandatory Arbitration",
                text: "This clause removes your access to small claims court. Push back — it's unusual for residential leases.",
                suggestion: "Proposed language: \"Disputes shall first be addressed through mediation. Either party retains the right to pursue remedies in a court of competent jurisdiction.\""
            },
            {
                title: "Replace Daily Late Fee with Flat Fee",
                text: "Daily compounding fees are punitive. A flat fee is standard and more reasonable.",
                suggestion: "Proposed language: \"A one-time late fee of $75 shall be assessed if rent is not received within five (5) days of the due date.\""
            }
        ],
        chatAnswers: {
            "break": "Based on Section 11, early termination requires 60 days notice + forfeiture of the security deposit ($2,775) + 2 months rent penalty ($3,700). Total cost to break early: ~$6,475. I'd recommend negotiating a buyout clause — ask for a flat 1-month penalty instead.",
            "miss": "If you miss a payment, Section 5.3 kicks in: $150/day late fee after a 5-day grace period (capped at $462.50). After 15 days, the landlord can begin eviction proceedings per Section 11.2. My recommendation: set up autopay and negotiate the late fee down to a flat rate.",
            "raise": "Good news — Section 4.1 locks your rent at $1,850 for the full 12-month term. However, upon auto-renewal, Section 4.2 allows increases up to 8% with 30 days notice. If you're in a rent-controlled area, this may exceed the legal cap — worth checking your local laws.",
            "default": "I can answer questions about any clause in this contract. Try asking about early termination, payment terms, maintenance responsibilities, pet policies, or your rights as a tenant."
        }
    },
    gym: {
        type: "Gym Membership Agreement",
        grade: "C+",
        gradeClass: "grade-c",
        summary: [
            "This is a <strong>24-month gym membership</strong> at $59.99/month with a $99 enrollment fee. That's a 2-year commitment — longer than most gym contracts.",
            "Cancellation requires <strong>30 days written notice via certified mail only</strong> — no email, no in-person, no phone. This is designed to make cancellation hard.",
            "There's a <strong>$250 early termination fee</strong> if you cancel before 24 months, PLUS you owe the remaining months at a discounted rate. Double penalty.",
            "The gym can <strong>raise your rate by up to 15% annually</strong> with just 15 days email notice. That $59.99 could be $79.34 by year two."
        ],
        scoreSummary: "Several concerning clauses — negotiate before signing",
        categories: [
            { label: "Financial Risk", width: 70, level: "high", value: "High" },
            { label: "Rights Given Up", width: 55, level: "medium", value: "Medium" },
            { label: "Exit Difficulty", width: 85, level: "high", value: "Very High" },
            { label: "Privacy Exposure", width: 40, level: "medium", value: "Medium" }
        ],
        flags: [
            {
                title: "🚩 24-Month Lock-in with Double Penalty",
                clause: "Section 2.1: Membership term is twenty-four (24) months. Early termination incurs a fee of $250 plus the remaining balance at the discounted rate of $29.99/month.",
                explain: "Two-year gym contracts are aggressive. If you cancel at month 6, you'd owe $250 + (18 × $29.99) = $789.82. That's a lot for a gym you don't use.",
                benchmark: "📊 Benchmark: 65% of gym contracts are month-to-month or 12-month max"
            },
            {
                title: "🚩 Certified Mail Cancellation Only",
                clause: "Section 8.1: Cancellation requests must be submitted in writing via USPS Certified Mail to the gym's corporate headquarters. No other method of cancellation is accepted.",
                explain: "Making you mail a physical letter is a friction tactic. Many members give up or forget. Most modern businesses accept email or in-app cancellation.",
                benchmark: "📊 FTC's 'Click to Cancel' rule (2025) may make this unenforceable"
            },
            {
                title: "🚩 15% Annual Rate Increase Allowed",
                clause: "Section 4.3: The gym reserves the right to increase monthly dues by up to 15% per annum with fifteen (15) days written notice via email.",
                explain: "A 15% increase turns $59.99 into $68.99 year 2, then $79.34 year 3. You're locked in but your rate isn't.",
                benchmark: "📊 Benchmark: Fair contracts cap increases at 3-5% or CPI"
            }
        ],
        clauses: [
            { title: "Membership Term", severity: "red", icon: "🚩", plain: "24-month commitment — twice the industry standard. You're locked in for 2 full years.", original: "Membership term is twenty-four (24) months commencing on the date of enrollment.", benchmark: "📊 65% of gyms offer 12-month or month-to-month options" },
            { title: "Monthly Dues", severity: "watch", icon: "⚠️", plain: "$59.99/month + $99 enrollment fee. The enrollment fee is non-refundable even during the cooling-off period.", original: "Monthly dues of $59.99 plus a one-time non-refundable enrollment fee of $99.00.", benchmark: "📊 Average gym membership: $40-60/mo. Enrollment fees average $50." },
            { title: "Rate Increases", severity: "red", icon: "🚩", plain: "They can raise your rate 15% per year with just 15 days notice. Your $60 membership could be $80 by next year.", original: "Gym reserves the right to increase monthly dues by up to 15% per annum with fifteen (15) days written notice.", benchmark: "📊 Fair cap is 3-5% or tied to CPI" },
            { title: "Cancellation Process", severity: "red", icon: "🚩", plain: "Must cancel via certified mail to corporate HQ. No email, no phone, no in-person. 30-day notice required.", original: "Cancellation must be via USPS Certified Mail to corporate headquarters. 30 days advance notice required.", benchmark: "📊 FTC Click-to-Cancel rule may override this" },
            { title: "Freeze Policy", severity: "ok", icon: "✅", plain: "You can freeze for up to 3 months per year at $10/month. Requires medical documentation for longer freezes.", original: "Members may freeze membership for up to 3 months per 12-month period at a maintenance fee of $10/month.", benchmark: null },
            { title: "Guest Policy", severity: "ok", icon: "✅", plain: "3 free guest passes per month. Guests must sign a waiver. Standard.", original: "Members receive three (3) complimentary guest passes per month. Guests must complete a liability waiver.", benchmark: null }
        ],
        tips: [
            {
                title: "Negotiate Down to 12 Months",
                text: "24 months is aggressive. Most gyms will accept 12 if you push.",
                suggestion: "\"I'd like to sign up but need a 12-month option. Can we adjust the term?\""
            },
            {
                title: "Cap Rate Increases at 5%",
                text: "15% annual increases with no cap is unreasonable for a locked contract.",
                suggestion: "\"I'd like to cap annual increases at 5% or CPI, whichever is lower.\""
            },
            {
                title: "Add Email Cancellation",
                text: "Certified mail only is designed to create friction. Ask for email as an option.",
                suggestion: "\"Can we add email cancellation as an accepted method? I'll confirm receipt.\""
            }
        ],
        chatAnswers: {
            "cancel": "To cancel, you need to send a certified letter to their corporate HQ (Section 8.1) with 30 days notice. If you're within the 24-month term, you'll owe $250 + remaining months at $29.99. After the term ends, it's just the 30-day notice period. Pro tip: the FTC's Click-to-Cancel rule (2025) may give you leverage to cancel online instead.",
            "freeze": "You can freeze up to 3 months per year for $10/month (Section 6.1). Longer freezes need medical documentation. The freeze period doesn't extend your contract term — those months still count toward your 24.",
            "default": "I can answer questions about cancellation, freezing, guest policies, rate increases, or your rights under this gym contract."
        }
    },
    employment: {
        type: "Employment Offer Letter",
        grade: "B+",
        gradeClass: "grade-b",
        summary: [
            "This is a <strong>full-time senior software engineer offer</strong> at $145,000/year with standard benefits (health, dental, vision, 401k with 4% match).",
            "The <strong>non-compete is 12 months</strong> within a 50-mile radius, covering 'any competing business.' That's broad — could prevent you from working at most tech companies in your metro area for a year.",
            "Your <strong>IP assignment clause covers work done 'on company time or using company resources'</strong> — standard, but make sure personal projects on your own time and equipment are excluded.",
            "Stock options: <strong>10,000 shares with a 4-year vest, 1-year cliff</strong>. If you leave before 12 months, you get nothing. Standard for startups."
        ],
        scoreSummary: "Strong offer with one major concern — the non-compete",
        categories: [
            { label: "Financial Risk", width: 15, level: "low", value: "Very Low" },
            { label: "Rights Given Up", width: 55, level: "medium", value: "Medium" },
            { label: "Exit Difficulty", width: 45, level: "medium", value: "Medium" },
            { label: "Privacy Exposure", width: 30, level: "low", value: "Low" }
        ],
        flags: [
            {
                title: "🚩 Broad Non-Compete — 12 Months, 50 Miles",
                clause: "Section 7.1: For twelve (12) months following termination, Employee shall not engage in any capacity with any business that competes with the Company within a fifty (50) mile radius.",
                explain: "This could prevent you from working at ANY tech company near you for a full year after leaving. The definition of 'competes' is dangerously broad. In many states (CA, CO, MN, OK), non-competes are unenforceable.",
                benchmark: "📊 FTC proposed banning most non-competes in 2024. Many states have already limited or banned them."
            },
            {
                title: "⚠️ Invention Assignment Scope",
                clause: "Section 9.2: Employee assigns to Company all inventions, developments, and intellectual property conceived during employment or using Company resources.",
                explain: "The phrase 'during employment' is broad. If you build a side project on a Saturday on your own laptop, is it theirs? The language is ambiguous. Many states (CA, WA, IL, MN) have laws protecting employee side projects.",
                benchmark: "📊 Best practice: explicitly carve out personal projects on personal time/equipment"
            }
        ],
        clauses: [
            { title: "Base Salary", severity: "ok", icon: "✅", plain: "$145,000/year, paid semi-monthly. Competitive for a senior SWE role.", original: "Annual base salary of $145,000.00, paid semi-monthly.", benchmark: null },
            { title: "Benefits", severity: "ok", icon: "✅", plain: "Health/dental/vision starting day 1. 401k with 4% match after 90 days. 20 days PTO + holidays. Standard package.", original: "Full benefits package including health, dental, vision insurance effective from start date. 401(k) with 4% match after 90-day probation. 20 days PTO.", benchmark: null },
            { title: "Stock Options", severity: "ok", icon: "✅", plain: "10,000 options at $2.50 strike, 4-year vest with 1-year cliff. Standard startup equity.", original: "10,000 stock options at $2.50 strike price, vesting over 4 years with a 1-year cliff.", benchmark: "📊 Standard 4-year/1-year cliff is industry norm" },
            { title: "At-Will Employment", severity: "ok", icon: "✅", plain: "Either side can end the relationship at any time. Standard in the US.", original: "Employment is at-will. Either party may terminate the relationship at any time with or without cause.", benchmark: null },
            { title: "Non-Compete", severity: "red", icon: "🚩", plain: "Can't work for any 'competing business' within 50 miles for 12 months after leaving. Extremely broad.", original: "For twelve (12) months following termination, Employee shall not engage with any competing business within fifty (50) miles.", benchmark: "📊 Many states ban non-competes. FTC has proposed a federal ban." },
            { title: "IP Assignment", severity: "watch", icon: "⚠️", plain: "Company owns anything you invent 'during employment or using company resources.' Ambiguous about personal projects.", original: "Employee assigns all inventions conceived during employment or using Company resources.", benchmark: "📊 CA, WA, IL, MN protect employee side projects by law" },
            { title: "Confidentiality", severity: "ok", icon: "✅", plain: "Standard NDA — don't share company secrets. Survives employment. Reasonable.", original: "Employee shall not disclose confidential information during or after employment.", benchmark: null },
            { title: "Severance", severity: "watch", icon: "⚠️", plain: "No severance mentioned. If laid off, you get nothing beyond accrued PTO. Worth negotiating.", original: "No severance provision included in offer letter.", benchmark: "📊 Common to negotiate 2-4 weeks per year of service" }
        ],
        tips: [
            {
                title: "Narrow or Remove the Non-Compete",
                text: "12 months / 50 miles / 'any competing business' is way too broad. Many states don't enforce these.",
                suggestion: "\"I'd like to narrow the non-compete to direct competitors only, reduce to 6 months, and limit to clients I personally worked with.\""
            },
            {
                title: "Add a Side Project Carve-Out",
                text: "The IP assignment is ambiguous about personal projects. Get explicit protection.",
                suggestion: "\"Can we add: 'This does not apply to inventions developed entirely on Employee's own time using personal resources, unrelated to Company business.'\""
            },
            {
                title: "Negotiate Severance",
                text: "No severance in the offer. For a senior role, 2-4 weeks per year of service is reasonable.",
                suggestion: "\"I'd like to add a severance clause: 4 weeks base salary per year of employment in the event of termination without cause.\""
            }
        ],
        chatAnswers: {
            "non-compete": "The non-compete (Section 7.1) bars you from working for 'any competing business' within 50 miles for 12 months. However: if you're in CA, CO, MN, ND, or OK, this is likely unenforceable. Even in other states, courts often narrow overly broad non-competes. I'd still push to narrow it — it's your strongest negotiation point.",
            "equity": "You're getting 10,000 options at $2.50 strike with 4-year vesting and a 1-year cliff. That means: if you leave before 12 months, you get zero. After the cliff, you vest ~208 shares/month. The key question: what's the current 409A valuation? Ask for the latest — it determines your upside.",
            "side": "The IP clause (Section 9.2) says the company owns inventions created 'during employment or using Company resources.' If you build a side project on your own laptop, on your own time, unrelated to their business — it should be yours, but the language is ambiguous. Several states (CA, WA, IL, MN, DE) have laws protecting this. Still, get a written carve-out to be safe.",
            "default": "I can answer about salary, benefits, equity/stock options, non-compete enforceability, IP/side projects, or severance. What would you like to know?"
        }
    }
};

// DOM elements
const uploadView = document.getElementById('upload-view');
const analyzingView = document.getElementById('analyzing-view');
const resultsView = document.getElementById('results-view');
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const contractText = document.getElementById('contract-text');
const analyzeBtn = document.getElementById('analyze-btn');
const backBtn = document.getElementById('back-btn');
const progressFill = document.getElementById('progress-fill');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');

let currentContract = null;

// Upload area interactions
uploadArea.addEventListener('click', () => fileInput.click());
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});
uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    handleFile(e.dataTransfer.files[0]);
});

fileInput.addEventListener('change', () => {
    if (fileInput.files[0]) handleFile(fileInput.files[0]);
});

function handleFile(file) {
    contractText.value = `[Uploaded: ${file.name}]\n\nFile processing would extract text via OCR/parser in production.`;
    analyzeBtn.disabled = false;
}

contractText.addEventListener('input', () => {
    analyzeBtn.disabled = contractText.value.trim().length < 10;
});

// Demo contracts
document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const demo = chip.dataset.demo;
        currentContract = DEMO_CONTRACTS[demo];
        startAnalysis();
    });
});

analyzeBtn.addEventListener('click', () => {
    currentContract = DEMO_CONTRACTS.lease; // Default to lease for pasted text
    startAnalysis();
});

backBtn.addEventListener('click', () => {
    showView('upload');
    contractText.value = '';
    analyzeBtn.disabled = true;
});

function showView(name) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`${name}-view`).classList.add('active');
    window.scrollTo(0, 0);
}

function startAnalysis() {
    showView('analyzing');
    progressFill.style.width = '0%';

    const steps = document.querySelectorAll('.step');
    steps.forEach(s => { s.classList.remove('done', 'active'); s.querySelector('.step-icon').textContent = '⏳'; });

    const timings = [400, 900, 1600, 2400, 3200];
    const progress = [15, 35, 60, 85, 100];

    timings.forEach((time, i) => {
        setTimeout(() => {
            progressFill.style.width = progress[i] + '%';
            if (i > 0) {
                steps[i - 1].classList.remove('active');
                steps[i - 1].classList.add('done');
                steps[i - 1].querySelector('.step-icon').textContent = '✅';
            }
            steps[i].classList.add('active');
            steps[i].querySelector('.step-icon').textContent = '🔄';
        }, time);
    });

    setTimeout(() => {
        steps[4].classList.remove('active');
        steps[4].classList.add('done');
        steps[4].querySelector('.step-icon').textContent = '✅';
        renderResults();
        showView('results');
    }, 3800);
}

function renderResults() {
    const c = currentContract;

    // Grade
    const gradeCircle = document.getElementById('grade-circle');
    gradeCircle.className = 'grade-circle ' + c.gradeClass;
    document.getElementById('grade').textContent = c.grade;
    document.getElementById('contract-type').textContent = c.type;
    document.getElementById('score-summary').textContent = c.scoreSummary;

    // Categories
    const catContainer = document.querySelector('.score-categories');
    catContainer.innerHTML = c.categories.map(cat => `
        <div class="category">
            <span class="cat-label">${cat.label}</span>
            <div class="cat-bar"><div class="cat-fill" style="width:${cat.width}%" data-level="${cat.level}"></div></div>
            <span class="cat-value">${cat.value}</span>
        </div>
    `).join('');

    // Summary
    document.getElementById('summary-card').innerHTML = c.summary.map(s => `<p>${s}</p>`).join('');

    // Flags
    document.getElementById('flag-count').textContent = c.flags.length;
    document.getElementById('flags-list').innerHTML = c.flags.map(f => `
        <div class="flag-card">
            <div class="flag-title">${f.title}</div>
            <div class="flag-clause">"${f.clause}"</div>
            <div class="flag-explain">${f.explain}</div>
            <div class="flag-benchmark">${f.benchmark}</div>
        </div>
    `).join('');

    // Clauses
    renderClauses('all');

    // Tips
    document.getElementById('tips-list').innerHTML = c.tips.map(t => `
        <div class="tip-card">
            <div class="tip-title">💡 ${t.title}</div>
            <div class="tip-text">${t.text}</div>
            <div class="tip-suggestion">${t.suggestion}</div>
        </div>
    `).join('');

    // Reset chat
    chatMessages.innerHTML = `
        <div class="chat-msg bot">
            <p>I've analyzed your ${c.type.toLowerCase()}. Ask me anything — try "Can I cancel early?" or "What are my biggest risks?"</p>
        </div>
    `;

    // Filters
    document.querySelectorAll('.filter').forEach(f => {
        f.classList.remove('active');
        if (f.dataset.filter === 'all') f.classList.add('active');
        f.onclick = () => {
            document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
            f.classList.add('active');
            renderClauses(f.dataset.filter);
        };
    });
}

function renderClauses(filter) {
    const c = currentContract;
    const filtered = filter === 'all' ? c.clauses : c.clauses.filter(cl => cl.severity === filter);

    document.getElementById('clauses-list').innerHTML = filtered.map((cl, i) => `
        <div class="clause-card" data-severity="${cl.severity}" onclick="toggleClause(this)">
            <div class="clause-header">
                <span class="clause-title">${cl.icon} ${cl.title}</span>
                <span class="clause-severity">${cl.severity === 'red' ? '🚩 Red Flag' : cl.severity === 'watch' ? '⚠️ Watch' : '✅ Standard'}</span>
            </div>
            <div class="clause-plain">${cl.plain}</div>
            <div class="clause-detail">
                <div class="clause-original">"${cl.original}"</div>
                ${cl.benchmark ? `<div class="clause-benchmark">${cl.benchmark}</div>` : ''}
            </div>
        </div>
    `).join('');
}

window.toggleClause = function(el) {
    el.querySelector('.clause-detail').classList.toggle('open');
};

// Chat
function handleChat() {
    const msg = chatInput.value.trim();
    if (!msg) return;

    chatMessages.innerHTML += `<div class="chat-msg user"><p>${msg}</p></div>`;
    chatInput.value = '';

    const answers = currentContract.chatAnswers;
    const lower = msg.toLowerCase();
    let response = answers.default;

    for (const [key, val] of Object.entries(answers)) {
        if (key !== 'default' && lower.includes(key)) {
            response = val;
            break;
        }
    }

    setTimeout(() => {
        chatMessages.innerHTML += `<div class="chat-msg bot"><p>${response}</p></div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 600);
}

chatSend.addEventListener('click', handleChat);
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleChat();
});

document.getElementById('browse-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.click();
});
