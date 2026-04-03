// === DATA ===
const services = [
    { id: 'google', name: 'Google / Gmail', icon: '🔵', cat: 'email', rate: '92%' },
    { id: 'apple', name: 'Apple ID / iCloud', icon: '🍎', cat: 'email', rate: '88%' },
    { id: 'microsoft', name: 'Microsoft / Outlook', icon: '🟦', cat: 'email', rate: '85%' },
    { id: 'yahoo', name: 'Yahoo Mail', icon: '🟣', cat: 'email', rate: '78%' },
    { id: 'instagram', name: 'Instagram', icon: '📸', cat: 'social', rate: '84%' },
    { id: 'facebook', name: 'Facebook / Meta', icon: '👤', cat: 'social', rate: '79%' },
    { id: 'twitter', name: 'X / Twitter', icon: '🐦', cat: 'social', rate: '72%' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', cat: 'social', rate: '76%' },
    { id: 'snapchat', name: 'Snapchat', icon: '👻', cat: 'social', rate: '81%' },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', cat: 'work', rate: '82%' },
    { id: 'discord', name: 'Discord', icon: '🎮', cat: 'social', rate: '85%' },
    { id: 'reddit', name: 'Reddit', icon: '🤖', cat: 'social', rate: '80%' },
    { id: 'playstation', name: 'PlayStation Network', icon: '🎮', cat: 'gaming', rate: '83%' },
    { id: 'xbox', name: 'Xbox / Microsoft', icon: '🟩', cat: 'gaming', rate: '86%' },
    { id: 'nintendo', name: 'Nintendo Account', icon: '🔴', cat: 'gaming', rate: '77%' },
    { id: 'steam', name: 'Steam', icon: '♨️', cat: 'gaming', rate: '91%' },
    { id: 'epicgames', name: 'Epic Games', icon: '🎯', cat: 'gaming', rate: '84%' },
    { id: 'netflix', name: 'Netflix', icon: '🎬', cat: 'streaming', rate: '90%' },
    { id: 'spotify', name: 'Spotify', icon: '🎧', cat: 'streaming', rate: '87%' },
    { id: 'disney', name: 'Disney+', icon: '🏰', cat: 'streaming', rate: '85%' },
    { id: 'amazon', name: 'Amazon', icon: '📦', cat: 'finance', rate: '88%' },
    { id: 'paypal', name: 'PayPal', icon: '💰', cat: 'finance', rate: '82%' },
    { id: 'venmo', name: 'Venmo', icon: '💸', cat: 'finance', rate: '80%' },
    { id: 'coinbase', name: 'Coinbase', icon: '🪙', cat: 'finance', rate: '75%' },
    { id: 'slack', name: 'Slack', icon: '💬', cat: 'work', rate: '89%' },
    { id: 'github', name: 'GitHub', icon: '🐙', cat: 'work', rate: '93%' },
    { id: 'zoom', name: 'Zoom', icon: '📹', cat: 'work', rate: '87%' },
    { id: 'dropbox', name: 'Dropbox', icon: '📁', cat: 'work', rate: '86%' },
];

const lockoutTypes = [
    { id: 'lost-email', icon: '📧', name: 'Lost access to recovery email', desc: 'The email used to sign up no longer works' },
    { id: 'lost-2fa', icon: '🔑', name: 'Lost 2FA / authenticator', desc: 'Phone broke, app deleted, no backup codes' },
    { id: 'hacked', icon: '🏴‍☠️', name: 'Account was hacked', desc: 'Password changed by someone else' },
    { id: 'forgot', icon: '🧠', name: 'Forgot everything', desc: "Can't remember password, email, or username" },
    { id: 'disabled', icon: '🚫', name: 'Account disabled/suspended', desc: 'Platform locked me out without explanation' },
    { id: 'charged', icon: '💳', name: "Being charged but can't access", desc: 'Still paying for a service I cannot use' },
];

const recoveryGuides = {
    'google': {
        'lost-email': {
            title: 'Google Account Recovery — Lost Email Access',
            steps: [
                {
                    title: 'Go to Google Account Recovery',
                    desc: 'Navigate to the official Google account recovery page. Enter the email address or phone number associated with your account.',
                    link: { url: 'https://accounts.google.com/signin/recovery', text: 'Open Google Recovery' },
                },
                {
                    title: 'Try all recovery methods',
                    desc: 'Google will show available recovery options. If your recovery email is unavailable, try: recovery phone number, security questions, or identity verification.',
                    tip: 'Use the device and browser you normally sign in from — Google checks your location and device history.',
                },
                {
                    title: 'Submit identity verification',
                    desc: 'If no recovery methods work, Google will ask you to verify your identity. You may need to answer questions about your account history: when you created it, recent emails you sent, contacts, etc.',
                    tip: 'Be as specific as possible. Exact dates and email subjects help enormously.',
                },
                {
                    title: 'Add a new recovery email',
                    desc: 'Once verified, Google will allow you to add a new recovery email or phone. Enter a current, accessible email address. You\'ll receive a verification code to complete the process.',
                },
                {
                    title: 'Reset your password',
                    desc: 'After recovery is confirmed, set a new strong password. Enable 2FA with multiple backup methods to prevent future lockouts.',
                    tip: 'Save your backup codes somewhere safe — printed or in a password manager.',
                },
            ],
            docs: ['Government-issued photo ID', 'Previous passwords (any you remember)', 'Approximate account creation date', 'Contacts you recently emailed'],
            escalation: [
                { icon: '🐦', title: 'Tweet @GoogleSupport', desc: 'Public tweets often get faster responses. Describe your issue clearly and include your case number if you have one.', success: '45% response within 24h' },
                { icon: '📞', title: 'Call Google One Support', desc: 'If you have or had Google One, you get phone support. Even expired subscriptions sometimes still have access.', success: '72% resolution rate' },
                { icon: '📋', title: 'File FTC Complaint', desc: 'If you\'re being charged for Google services you can\'t access, file a complaint with the FTC. This creates a paper trail and Google does respond.', success: '38% resolution within 2 weeks' },
                { icon: '⚖️', title: 'Small Claims Court', desc: 'For accounts with significant financial impact. Filing fee is $30-75. Google has responded to small claims in the past.', success: '61% settlement before hearing' },
            ]
        },
        'hacked': {
            title: 'Google Account Recovery — Hacked Account',
            steps: [
                {
                    title: 'Go to the Hacked Account Recovery page',
                    desc: 'Google has a specific flow for hacked accounts that\'s different from normal password reset.',
                    link: { url: 'https://accounts.google.com/signin/recovery', text: 'Start Hacked Account Recovery' },
                },
                {
                    title: 'Enter your email and last known password',
                    desc: 'Even if the hacker changed your password, enter the most recent password YOU set. Google uses this to verify you\'re the original owner.',
                    tip: 'If you don\'t remember, try "Try another way" — Google has multiple verification paths.',
                },
                {
                    title: 'Complete security challenge',
                    desc: 'Answer security questions, verify via phone, or confirm account details (creation date, recovery contacts, recent activity).',
                },
                {
                    title: 'Secure the account',
                    desc: 'Once recovered: change password immediately, revoke all active sessions, review connected apps, check email forwarding rules (hackers often set these up).',
                    tip: 'Check Settings → Forwarding. Hackers add forwarding addresses to continue receiving your emails even after you change the password.',
                },
                {
                    title: 'Enable Advanced Protection',
                    desc: 'Google\'s Advanced Protection Program is the strongest security available. Requires a physical security key. Free to use.',
                    link: { url: 'https://landing.google.com/advancedprotection/', text: 'Enable Advanced Protection' },
                },
            ],
            docs: ['Any previous password', 'Phone number on the account', 'Security key if enrolled', 'Approximate creation date'],
            escalation: [
                { icon: '🚨', title: 'Report to Google directly', desc: 'Use the hacked account support form for faster handling.', success: '65% response within 48h' },
                { icon: '📝', title: 'File IC3 Report', desc: 'If financial accounts were compromised through the hacked Google account, file with the FBI\'s IC3.', success: 'Creates official record' },
            ]
        }
    },
    'playstation': {
        'lost-email': {
            title: 'PlayStation Network — Lost Email Access',
            steps: [
                {
                    title: 'Try PlayStation Account Recovery',
                    desc: 'Go to the PSN sign-in page and click "Trouble signing in?" Enter your Sign-In ID (email).',
                    link: { url: 'https://www.playstation.com/en-us/support/account/recover-playstation-account/', text: 'PSN Account Recovery' },
                },
                {
                    title: 'Contact PlayStation Support via Live Chat',
                    desc: 'PSN requires a support agent to change your email. Go to PlayStation Support → "Account & Security" → "I Can\'t Sign In" → Live Chat.',
                    link: { url: 'https://support.playstation.com/s/contact-support', text: 'Contact PlayStation Support' },
                    tip: 'Live chat is available Mon-Fri 8AM-8PM PT. Queue times are shortest on weekday mornings.',
                },
                {
                    title: 'Verify your identity to the agent',
                    desc: 'The agent will ask for: Online ID (PSN username), date of birth on the account, serial number of a console linked to the account, transaction ID from a purchase.',
                    tip: 'Check your bank/credit card statements for PlayStation Store transaction IDs. This is the strongest proof of ownership.',
                },
                {
                    title: 'Request email address change',
                    desc: 'Once verified, ask the agent to update your email to a new, accessible address. They\'ll send a verification link to your new email.',
                },
                {
                    title: 'Reset password and secure account',
                    desc: 'After email is updated, reset your password. Enable 2FA via SMS or authenticator app.',
                },
            ],
            docs: ['PSN Online ID (username)', 'Date of birth on account', 'Console serial number', 'A PlayStation Store transaction ID', 'Credit card last 4 digits on file'],
            escalation: [
                { icon: '🐦', title: 'Tweet @AskPlayStation', desc: 'PlayStation\'s official support Twitter. Public tweets with specifics get faster responses.', success: '52% response within 12h' },
                { icon: '📞', title: 'Phone Support: 1-800-345-7669', desc: 'Direct phone line. Wait times can be long but phone agents have more authority than chat.', success: '78% resolution on first call' },
                { icon: '💳', title: 'Dispute charges via bank', desc: 'If you\'re still being charged and can\'t access the account, file a dispute with your bank/credit card for unauthorized recurring charges.', success: '85% chargeback success' },
                { icon: '📋', title: 'File BBB Complaint', desc: 'Sony responds to Better Business Bureau complaints. Include account details and timeline.', success: '67% response within 10 days' },
            ]
        },
        'charged': {
            title: 'PlayStation — Being Charged But Can\'t Access',
            steps: [
                {
                    title: 'Document the charges',
                    desc: 'Gather all bank/credit card statements showing PlayStation charges. Note the dates, amounts, and transaction descriptions.',
                },
                {
                    title: 'Contact PlayStation Support',
                    desc: 'Go through the standard support flow. Clearly state: "I am being charged for a subscription I cannot access because I lost access to my account."',
                    link: { url: 'https://support.playstation.com/s/contact-support', text: 'Contact PlayStation Support' },
                    template: 'Hi, I\'m being charged $[AMOUNT]/year for PS Plus but I cannot access my account because [REASON]. My Online ID is [USERNAME]. I\'ve been charged on [DATES]. I need either: (1) access restored to my account, or (2) the subscription cancelled and recent charges refunded.'
                },
                {
                    title: 'Request refund for inaccessible period',
                    desc: 'Ask specifically for a refund for the period you couldn\'t access the service. Under most consumer protection laws, you cannot be charged for a service you cannot use.',
                    tip: 'If the agent says they can\'t refund, ask to speak with a supervisor or manager.',
                },
                {
                    title: 'If support fails: dispute with your bank',
                    desc: 'Contact your bank/credit card company. Explain you\'re being charged for a service you cannot access and the company refuses to help. Request a chargeback.',
                    tip: 'Warning: Sony may ban the PSN account after a chargeback. Only do this if you\'ve exhausted other options.',
                },
                {
                    title: 'File regulatory complaints',
                    desc: 'File complaints with the FTC (ftc.gov/complaint), your state Attorney General, and the BBB. This creates pressure and a paper trail.',
                    link: { url: 'https://www.ftc.gov/complaint', text: 'File FTC Complaint' },
                },
            ],
            docs: ['Bank statements showing charges', 'Screenshots of lockout', 'Chat/email transcripts with support', 'PSN username and account email'],
            escalation: [
                { icon: '⚖️', title: 'Small Claims Court', desc: 'File in your local small claims court. Filing fee is $30-75. Claim: being charged for service that cannot be accessed. Sony will often settle.', success: '70% settlement' },
                { icon: '📺', title: 'Contact local news consumer reporter', desc: 'Local TV stations have consumer protection segments. Companies respond fast to media attention.', success: '55% resolution' },
            ]
        }
    },
    'linkedin': {
        'disabled': {
            title: 'LinkedIn — Account Disabled/Restricted',
            steps: [
                {
                    title: 'Check your email for restriction notice',
                    desc: 'LinkedIn sends an email explaining why your account was restricted. Common reasons: suspicious activity detected, identity verification needed, policy violation.',
                },
                {
                    title: 'Submit identity verification',
                    desc: 'If asked to verify, go to the LinkedIn Identity Verification page. Upload a government-issued photo ID.',
                    link: { url: 'https://www.linkedin.com/help/linkedin/answer/a1340507', text: 'LinkedIn Identity Verification' },
                    tip: 'Use a clear, well-lit photo of your ID. Blurry uploads are the #1 reason for verification rejection.',
                },
                {
                    title: 'Submit an appeal',
                    desc: 'If your account was restricted for a policy violation you don\'t understand, submit an appeal through the LinkedIn Help Center.',
                    link: { url: 'https://www.linkedin.com/help/linkedin/ask/TS-NAFC', text: 'Appeal Account Restriction' },
                    template: 'I believe my account was restricted in error. My profile is [NAME] and my account email is [EMAIL]. I use LinkedIn professionally for [REASON]. I have not violated any policies. Please review and restore my account.'
                },
                {
                    title: 'Wait for review (5-10 business days)',
                    desc: 'LinkedIn\'s trust and safety team reviews appeals manually. This typically takes 5-10 business days. You\'ll receive an email with their decision.',
                },
                {
                    title: 'If denied: escalate',
                    desc: 'If your appeal is denied, respond to the denial email with additional context. You can also try the escalation methods below.',
                },
            ],
            docs: ['Government-issued photo ID', 'Professional email address', 'LinkedIn profile URL (if you have it saved)', 'Any correspondence from LinkedIn about the restriction'],
            escalation: [
                { icon: '🐦', title: 'Tweet @LinkedInHelp', desc: 'LinkedIn\'s support Twitter account. Public pressure often accelerates review.', success: '40% response within 24h' },
                { icon: '📧', title: 'Email LinkedIn executives', desc: 'Format: firstname.lastname@linkedin.com. CEO: Ryan Roslansky. VP Trust: Blake Lawit.', success: '35% response within 1 week' },
                { icon: '📋', title: 'File BBB Complaint', desc: 'LinkedIn/Microsoft respond to BBB complaints. Include timeline and impact on your job search.', success: '58% resolution' },
            ]
        }
    }
};

// State
let selectedService = null;
let selectedLockout = null;
let diagStep = 0;
let savedCases = [
    { id: 1, service: 'playstation', icon: '🎮', name: 'PlayStation Network', type: 'Being charged but can\'t access', status: 'active', progress: 60, date: 'Apr 1, 2026' },
    { id: 2, service: 'google', icon: '🔵', name: 'Google / Gmail', type: 'Account hacked', status: 'resolved', progress: 100, date: 'Mar 28, 2026' },
    { id: 3, service: 'linkedin', icon: '💼', name: 'LinkedIn', type: 'Account disabled', status: 'escalated', progress: 40, date: 'Mar 30, 2026' },
];

// === NAVIGATION ===
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
    if (id === 'screen-services') renderServices('all');
    if (id === 'screen-cases') renderCases();
}

// === SEARCH ===
const searchInput = document.getElementById('hero-search-input');
const dropdown = document.getElementById('search-dropdown');

searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) { dropdown.classList.add('hidden'); return; }
    const matches = services.filter(s => s.name.toLowerCase().includes(q)).slice(0, 6);
    if (!matches.length) { dropdown.classList.add('hidden'); return; }
    dropdown.innerHTML = matches.map(s => `
        <div class="search-item" onclick="selectService('${s.id}')">
            <span class="search-item-icon">${s.icon}</span>
            <div>
                <div class="search-item-name">${s.name}</div>
                <div class="search-item-cat">${s.cat}</div>
            </div>
        </div>
    `).join('');
    dropdown.classList.remove('hidden');
});

searchInput.addEventListener('blur', () => {
    setTimeout(() => dropdown.classList.add('hidden'), 200);
});

function selectService(id) {
    selectedService = services.find(s => s.id === id);
    searchInput.value = selectedService.name;
    dropdown.classList.add('hidden');
    startDiagnosis();
}

function startRecovery() {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) return;
    const match = services.find(s => s.name.toLowerCase().includes(q));
    if (match) {
        selectedService = match;
        startDiagnosis();
    }
}

// === SERVICES PAGE ===
function renderServices(cat) {
    const grid = document.getElementById('services-grid');
    const filtered = cat === 'all' ? services : services.filter(s => s.cat === cat);
    grid.innerHTML = filtered.map(s => `
        <div class="service-card" onclick="selectService('${s.id}')">
            <div class="service-card-icon">${s.icon}</div>
            <div class="service-card-info">
                <h3>${s.name}</h3>
                <p>${s.cat}</p>
            </div>
            <div class="service-card-rate">${s.rate}</div>
        </div>
    `).join('');
}

function filterCategory(cat, el) {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    renderServices(cat);
}

// === DIAGNOSIS ===
function startDiagnosis() {
    diagStep = 0;
    showScreen('screen-diagnosis');
    document.getElementById('diag-service-icon').textContent = selectedService.icon;
    document.getElementById('diag-title').textContent = `Recovering your ${selectedService.name} account`;
    renderDiagStep();
}

function renderDiagStep() {
    const content = document.getElementById('diag-content');
    const fill = document.getElementById('diag-progress-fill');
    const text = document.getElementById('diag-progress-text');

    fill.style.width = `${((diagStep + 1) / 2) * 100}%`;
    text.textContent = `Question ${diagStep + 1} of 2`;

    if (diagStep === 0) {
        content.innerHTML = `
            <div class="diag-question">What happened to your account?</div>
            <div class="diag-options">
                ${lockoutTypes.map(t => `
                    <button class="diag-option" onclick="selectLockout('${t.id}')">
                        <span class="diag-option-icon">${t.icon}</span>
                        <div class="diag-option-text">
                            <span>${t.name}</span>
                            <small>${t.desc}</small>
                        </div>
                    </button>
                `).join('')}
            </div>
        `;
    } else if (diagStep === 1) {
        content.innerHTML = `
            <div class="diag-question">Do you have access to any of these?</div>
            <div class="diag-options">
                <button class="diag-option" onclick="finishDiagnosis()">
                    <span class="diag-option-icon">📱</span>
                    <div class="diag-option-text">
                        <span>Phone number on the account</span>
                        <small>The phone used for verification or 2FA</small>
                    </div>
                </button>
                <button class="diag-option" onclick="finishDiagnosis()">
                    <span class="diag-option-icon">💻</span>
                    <div class="diag-option-text">
                        <span>A device still logged in</span>
                        <small>Computer, phone, or tablet with an active session</small>
                    </div>
                </button>
                <button class="diag-option" onclick="finishDiagnosis()">
                    <span class="diag-option-icon">🔐</span>
                    <div class="diag-option-text">
                        <span>Backup codes or recovery key</span>
                        <small>Codes provided when you set up the account</small>
                    </div>
                </button>
                <button class="diag-option" onclick="finishDiagnosis()">
                    <span class="diag-option-icon">❌</span>
                    <div class="diag-option-text">
                        <span>None of the above</span>
                        <small>I have no other way to verify</small>
                    </div>
                </button>
            </div>
        `;
    }
}

function selectLockout(id) {
    selectedLockout = lockoutTypes.find(t => t.id === id);
    diagStep = 1;
    renderDiagStep();
}

function finishDiagnosis() {
    showRecoveryGuide();
}

// === RECOVERY GUIDE ===
function showRecoveryGuide() {
    showScreen('screen-guide');

    // Find the best matching guide
    const serviceGuides = recoveryGuides[selectedService.id];
    let guide;
    if (serviceGuides && serviceGuides[selectedLockout.id]) {
        guide = serviceGuides[selectedLockout.id];
    } else if (serviceGuides) {
        guide = Object.values(serviceGuides)[0];
    } else {
        // Generate a generic guide
        guide = generateGenericGuide();
    }

    document.getElementById('guide-service-icon').textContent = selectedService.icon;
    document.getElementById('guide-service-name').textContent = selectedService.name;
    document.getElementById('guide-lockout-type').textContent = selectedLockout.name;
    document.getElementById('guide-title').textContent = guide.title;

    // Docs
    const docsEl = document.getElementById('guide-docs');
    docsEl.innerHTML = guide.docs.map(d => `<li>${d}</li>`).join('');

    // Steps
    const stepsEl = document.getElementById('guide-steps');
    stepsEl.innerHTML = guide.steps.map((s, i) => `
        <div class="guide-step">
            <div class="step-marker" onclick="toggleStep(this)" title="Click to mark complete">${i + 1}</div>
            <div class="step-body">
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
                ${s.link ? `<a href="${s.link.url}" target="_blank" class="step-link">🔗 ${s.link.text}</a>` : ''}
                ${s.tip ? `<div class="step-tip">💡 ${s.tip}</div>` : ''}
                ${s.template ? `
                    <div class="step-template">
                        <button class="copy-btn" onclick="copyTemplate(this)">📋 Copy</button>
                        ${s.template}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');

    // Escalation
    const escEl = document.getElementById('escalation-options');
    const escContainer = document.getElementById('guide-escalation');
    escContainer.classList.add('hidden');
    if (guide.escalation) {
        escEl.innerHTML = guide.escalation.map(e => `
            <div class="esc-option">
                <span class="esc-icon">${e.icon}</span>
                <div class="esc-content">
                    <h3>${e.title}</h3>
                    <p>${e.desc}</p>
                    <div class="esc-success">✅ ${e.success}</div>
                </div>
            </div>
        `).join('');
    }
}

function generateGenericGuide() {
    return {
        title: `${selectedService.name} — ${selectedLockout.name}`,
        steps: [
            {
                title: `Go to ${selectedService.name} Account Recovery`,
                desc: `Visit the official ${selectedService.name} help or support page. Look for "Can't sign in" or "Account recovery" options.`,
                tip: 'Always use the official website — never click recovery links from emails unless you initiated the request.',
            },
            {
                title: 'Verify your identity',
                desc: 'You\'ll typically need to prove you own the account through: previous passwords, phone verification, email verification, security questions, or uploading a photo ID.',
            },
            {
                title: 'Contact support directly',
                desc: `If self-service recovery doesn't work, contact ${selectedService.name} support. Look for live chat, email support, or phone support options on their help page.`,
                template: `Hi, I need help recovering my ${selectedService.name} account. My username is [USERNAME]. I lost access because ${selectedLockout.desc.toLowerCase()}. I can verify my identity with [WHAT YOU HAVE]. Please help me regain access.`,
            },
            {
                title: 'Follow up if no response',
                desc: 'If you don\'t hear back within the expected timeframe (usually 3-5 business days), follow up. Try a different support channel (Twitter, phone, etc.).',
            },
            {
                title: 'Secure your account after recovery',
                desc: 'Once you regain access: change your password, enable 2FA with multiple methods, save backup codes, and update recovery contact info.',
            },
        ],
        docs: ['Government-issued photo ID', 'Previous passwords (any you remember)', 'Account username or email', 'Purchase receipts or transaction IDs'],
        escalation: [
            { icon: '🐦', title: 'Try social media support', desc: `Look for ${selectedService.name}'s official support account on X/Twitter. Public tweets often get faster responses.`, success: '40-50% response rate' },
            { icon: '📋', title: 'File BBB Complaint', desc: 'The Better Business Bureau complaint process creates accountability. Most companies respond within 10 days.', success: '50-65% resolution' },
            { icon: '📧', title: 'Executive email', desc: 'Find executive contact info. Format is usually firstname.lastname@company.com or first@company.com.', success: '30-40% response' },
        ]
    };
}

function toggleStep(el) {
    el.classList.toggle('done');
    if (el.classList.contains('done')) {
        el.textContent = '✓';
    } else {
        el.textContent = el.textContent === '✓' ? Array.from(el.parentElement.parentElement.children).indexOf(el.parentElement) + 1 : el.textContent;
        // Recalculate step number
        const steps = el.closest('.guide-steps').querySelectorAll('.step-marker');
        steps.forEach((s, i) => {
            if (!s.classList.contains('done')) s.textContent = i + 1;
        });
    }
}

function showEscalation() {
    document.getElementById('guide-escalation').classList.remove('hidden');
    document.getElementById('guide-escalation').scrollIntoView({ behavior: 'smooth' });
}

function copyTemplate(btn) {
    const text = btn.parentElement.textContent.replace('📋 Copy', '').trim();
    navigator.clipboard.writeText(text).then(() => {
        btn.textContent = '✅ Copied!';
        setTimeout(() => btn.textContent = '📋 Copy', 2000);
    });
}

function saveCase() {
    showToast('💾 Case saved! Track it in "My Cases"');
    savedCases.unshift({
        id: Date.now(),
        service: selectedService.id,
        icon: selectedService.icon,
        name: selectedService.name,
        type: selectedLockout.name,
        status: 'active',
        progress: 20,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
}

function setReminder() {
    showToast('⏰ Reminder set! We\'ll notify you in 3 days to follow up.');
}

// === CASES ===
function renderCases() {
    const list = document.getElementById('cases-list');
    if (!savedCases.length) {
        list.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📂</div>
                <h3>No recovery cases yet</h3>
                <p>Start a recovery to track your progress here.</p>
            </div>
        `;
        return;
    }
    list.innerHTML = savedCases.map(c => `
        <div class="case-card">
            <span class="case-icon">${c.icon}</span>
            <div class="case-info">
                <h3>${c.name}</h3>
                <p>${c.type} · Started ${c.date}</p>
                <div class="case-progress">
                    <span class="case-progress-text">${c.progress}% complete</span>
                    <div class="case-progress-bar">
                        <div class="case-progress-fill" style="width: ${c.progress}%"></div>
                    </div>
                </div>
            </div>
            <span class="case-status ${c.status}">${c.status}</span>
        </div>
    `).join('');
}

// === TOAST ===
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
    renderServices('all');
});
