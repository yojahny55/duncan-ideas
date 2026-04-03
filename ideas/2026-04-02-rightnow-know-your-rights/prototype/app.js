// RightNow — Know Your Rights App
// Prototype by Duncan ⚔️

const DATA = {
  police: {
    title: 'Police & Law Enforcement',
    icon: '🚔',
    situations: [
      {
        id: 'traffic-stop',
        icon: '🚗',
        title: 'Traffic Stop',
        desc: 'Pulled over by police',
        urgency: 'high',
        rights: [
          'You have the right to <strong>remain silent</strong>. You only need to provide license, registration, and insurance.',
          'You can <strong>refuse a vehicle search</strong>. Officers need probable cause or a warrant to search without consent.',
          'You have the right to <strong>record the encounter</strong>. Florida is a two-party consent state for private conversations, but police encounters in public are recordable.',
          'You can ask <strong>"Am I free to go?"</strong> If not detained, you may leave.',
          'You have the right to an <strong>attorney before answering questions</strong> beyond basic identification.'
        ],
        scripts: [
          { label: 'If asked to search', text: '"I do not consent to a search of my vehicle."' },
          { label: 'If asked where you\'re going', text: '"I prefer not to answer questions. Am I free to go?"' },
          { label: 'If being detained', text: '"I am invoking my right to remain silent. I want to speak to a lawyer."' },
          { label: 'If asked to exit vehicle', text: 'Comply calmly. Say: "I\'m complying with your request. I do not consent to a search."' }
        ],
        donts: [
          '<strong>Don\'t reach for anything</strong> without telling the officer first. Keep hands visible on the wheel.',
          '<strong>Don\'t argue or resist</strong> — even if you believe the stop is illegal. Challenge it in court, not on the road.',
          '<strong>Don\'t consent to a search</strong> thinking "I have nothing to hide." Consent waives your 4th Amendment rights.',
          '<strong>Don\'t lie</strong> — silence is legal, lying to police is not.'
        ],
        steps: [
          'Write down everything you remember immediately after the encounter (badge number, patrol car number, time, location)',
          'If you believe your rights were violated, file a complaint with the police department\'s internal affairs',
          'Contact the ACLU of Florida: (786) 363-2700',
          'If you received a ticket, consult a traffic attorney before paying (paying = guilty plea)',
          'Request dash/body cam footage within 30 days (FL public records law)'
        ]
      },
      {
        id: 'dui-checkpoint',
        icon: '🚧',
        title: 'DUI Checkpoint',
        desc: 'Sobriety checkpoint stop',
        urgency: 'high',
        rights: [
          'DUI checkpoints are <strong>legal in Florida</strong> (unlike some states). You must stop if directed.',
          'You must provide <strong>license and registration</strong> but do NOT have to answer questions about drinking.',
          'You can <strong>refuse field sobriety tests</strong> (walk-and-turn, one-leg-stand) — they are voluntary.',
          'Refusing a breathalyzer triggers <strong>implied consent law</strong>: automatic 1-year license suspension (first refusal).',
          'You still have the right to <strong>remain silent</strong> and request an attorney.'
        ],
        scripts: [
          { label: 'If asked "Have you been drinking?"', text: '"I prefer not to answer questions."' },
          { label: 'If asked to do field sobriety tests', text: '"I respectfully decline the field sobriety tests."' },
          { label: 'For the breathalyzer', text: 'Know that refusing = automatic suspension. Decide based on your situation.' }
        ],
        donts: [
          '<strong>Don\'t try to avoid the checkpoint</strong> by making illegal U-turns — that gives probable cause.',
          '<strong>Don\'t volunteer information</strong> about where you came from or what you drank.',
          '<strong>Don\'t take field sobriety tests</strong> if you have ANY physical limitations — they\'re subjective.'
        ],
        steps: [
          'If arrested, remain silent and request an attorney immediately',
          'Request an independent blood test if taken to the station',
          'Contact a DUI attorney within 10 days to challenge license suspension',
          'Document the checkpoint location and officer interactions'
        ]
      },
      {
        id: 'protest',
        icon: '✊',
        title: 'At a Protest',
        desc: 'Exercising right to protest',
        urgency: 'medium',
        rights: [
          'You have a <strong>First Amendment right to protest</strong> in public spaces (sidewalks, parks, public plazas).',
          'You can <strong>photograph and record</strong> anything visible from public spaces, including police.',
          'Police cannot <strong>order you to disperse</strong> without a lawful reason (violence, blocking traffic).',
          'You do NOT need a <strong>permit for small groups</strong> on public sidewalks. Permits are for large groups blocking streets.',
          'Counter-protesters have the <strong>same rights</strong> — police must keep groups separated.'
        ],
        scripts: [
          { label: 'If told to disperse', text: '"Is this a lawful order to disperse? What is the reason?"' },
          { label: 'If told to stop filming', text: '"I have a First Amendment right to record in public spaces."' },
          { label: 'If arrested', text: '"I am invoking my right to remain silent. I want a lawyer."' }
        ],
        donts: [
          '<strong>Don\'t bring weapons</strong> — Florida HB 1571 enhanced penalties for crimes during protests.',
          '<strong>Don\'t block roadways</strong> without a permit — FL law makes it a felony if it blocks emergency vehicles.',
          '<strong>Don\'t resist arrest</strong> — even if unlawful. Challenge it in court.',
          '<strong>Don\'t post identifying info</strong> of other protesters on social media.'
        ],
        steps: [
          'Write the National Lawyers Guild number on your arm: (212) 679-5100',
          'If arrested, give your name but invoke the right to remain silent for all other questions',
          'Contact the ACLU of Florida for protest-related legal support',
          'Document any use of force with photos, video, and witness names'
        ]
      }
    ]
  },
  tenant: {
    title: 'Housing & Tenants',
    icon: '🏠',
    situations: [
      {
        id: 'eviction',
        icon: '📋',
        title: 'Facing Eviction',
        desc: 'Landlord wants you out',
        urgency: 'high',
        rights: [
          'Your landlord <strong>cannot evict you without a court order</strong>. Self-help evictions (changing locks, shutting off utilities) are illegal in Florida.',
          'For non-payment of rent, landlord must give <strong>3-day written notice</strong> before filing eviction.',
          'For lease violations, landlord must give <strong>7-day notice to cure</strong> the violation.',
          'You have the right to <strong>contest the eviction in court</strong> and present your defense.',
          'Retaliatory evictions are <strong>illegal</strong> — your landlord cannot evict you for reporting code violations.'
        ],
        scripts: [
          { label: 'If landlord changes locks', text: '"Changing locks without a court order is an illegal self-help eviction under Florida Statute 83.67. I am calling the police."' },
          { label: 'If served 3-day notice', text: '"I acknowledge receipt. I have 3 days excluding weekends and holidays to pay in full or vacate."' },
          { label: 'If landlord shuts off utilities', text: '"Shutting off utilities to force a tenant out is illegal under FL 83.67. I am documenting this and will file a complaint."' }
        ],
        donts: [
          '<strong>Don\'t ignore court papers</strong> — if you don\'t respond within 5 days, you lose by default.',
          '<strong>Don\'t move out just because the landlord says so</strong> — only a court order can force you out.',
          '<strong>Don\'t withhold rent without following Florida\'s proper procedure</strong> (7-day notice to landlord first).',
          '<strong>Don\'t let the landlord into your unit without proper notice</strong> (12 hours in Florida).'
        ],
        steps: [
          'Read the notice carefully — is it 3-day (non-payment) or 7-day (violation)?',
          'If you can pay, pay within the notice period and get a receipt',
          'If you can\'t pay, contact Florida Legal Aid: 1-866-550-2929',
          'If served with court papers, respond within 5 business days',
          'Show up to your court date — many evictions are won simply by showing up'
        ]
      },
      {
        id: 'deposit',
        icon: '💰',
        title: 'Security Deposit',
        desc: 'Getting your deposit back',
        urgency: 'medium',
        rights: [
          'Landlord must return your deposit within <strong>15 days</strong> if no deductions, or <strong>30 days with itemized deductions</strong>.',
          'Deductions must be for <strong>actual damages beyond normal wear and tear</strong>. Faded paint, minor scuffs, and worn carpet are normal wear.',
          'If landlord misses the 30-day deadline, they <strong>forfeit the right to make any claim</strong> against the deposit.',
          'Your landlord must have stored the deposit in a <strong>separate Florida bank account</strong> or posted a surety bond.',
          'You have <strong>15 days to object</strong> in writing after receiving the landlord\'s deduction notice.'
        ],
        scripts: [
          { label: 'Demand letter', text: '"Per Florida Statute 83.49, I am requesting the return of my security deposit of $[amount]. You have 15 days from my move-out date of [date] to return the full amount or provide an itemized list of deductions."' },
          { label: 'If landlord claims damages', text: '"I dispute these deductions. The items listed constitute normal wear and tear under Florida law. I am objecting in writing within 15 days as is my right."' }
        ],
        donts: [
          '<strong>Don\'t skip the move-out walkthrough</strong> — take photos and video of every room.',
          '<strong>Don\'t accept verbal promises</strong> — get everything in writing.',
          '<strong>Don\'t wait too long to dispute</strong> — you have 15 days to object to deductions.'
        ],
        steps: [
          'Take timestamped photos/video of the unit on move-out day',
          'Send your forwarding address to the landlord in writing',
          'If no response in 15 days (no deductions) or 30 days (with deductions), send a demand letter via certified mail',
          'If landlord still refuses, file in Small Claims Court (up to $8,000 in Florida)',
          'You may be entitled to the deposit PLUS damages if landlord acted in bad faith'
        ]
      }
    ]
  },
  worker: {
    title: 'Workplace Rights',
    icon: '💼',
    situations: [
      {
        id: 'wage-theft',
        icon: '💸',
        title: 'Unpaid Wages / Overtime',
        desc: 'Employer owes you money',
        urgency: 'high',
        rights: [
          'Florida minimum wage is <strong>$14.00/hr</strong> (as of 2026). Tips cannot bring you below this.',
          'Overtime (FLSA): <strong>1.5x pay for hours over 40/week</strong>. Your employer cannot waive this, even if you "agreed."',
          'Your employer cannot <strong>deduct from your paycheck</strong> for cash register shortages, breakage, or uniforms if it puts you below minimum wage.',
          'You have the right to <strong>discuss your wages with coworkers</strong> — it\'s protected by the NLRA.',
          'The statute of limitations is <strong>2 years</strong> (3 years for willful violations) to file a wage claim.'
        ],
        scripts: [
          { label: 'To your employer', text: '"I believe I am owed $[amount] in unpaid [wages/overtime] for the period of [dates]. I\'d like to resolve this directly. Can we discuss?"' },
          { label: 'If employer refuses', text: '"I will be filing a wage complaint with the Department of Labor if this is not resolved within [X] days."' }
        ],
        donts: [
          '<strong>Don\'t sign anything waiving your right to overtime</strong> — it\'s unenforceable.',
          '<strong>Don\'t quit in anger before documenting everything</strong> — keep pay stubs, schedules, and time records.',
          '<strong>Don\'t accept "comp time" instead of overtime pay</strong> at private employers — it\'s illegal under FLSA.'
        ],
        steps: [
          'Gather documentation: pay stubs, time records, schedules, contracts',
          'Send a written request to your employer (email = paper trail)',
          'File a complaint with the U.S. Dept of Labor: 1-866-487-9243',
          'Or file with Florida\'s Attorney General for minimum wage violations',
          'Consider consulting an employment attorney — many work on contingency for wage theft'
        ]
      },
      {
        id: 'fired',
        icon: '🚪',
        title: 'Wrongful Termination',
        desc: 'Fired unfairly or illegally',
        urgency: 'medium',
        rights: [
          'Florida is an <strong>at-will employment state</strong> — employers can fire you for any reason EXCEPT illegal ones.',
          'You CANNOT be fired for <strong>discrimination</strong> based on race, color, sex, religion, national origin, age, disability, or pregnancy.',
          'You CANNOT be fired for <strong>retaliation</strong> — filing a workers\' comp claim, reporting safety violations, or whistleblowing.',
          'You CANNOT be fired for <strong>exercising legal rights</strong> — jury duty, voting, military service, FMLA leave.',
          'You may be entitled to <strong>unemployment benefits</strong> unless fired for gross misconduct.'
        ],
        scripts: [
          { label: 'When being fired', text: '"Can you provide the reason for my termination in writing? Am I eligible for severance?"' },
          { label: 'If you suspect discrimination', text: '"I believe this termination may be related to my [protected characteristic]. I am preserving my right to file a complaint."' }
        ],
        donts: [
          '<strong>Don\'t sign a severance agreement immediately</strong> — you usually have 21 days (40+ age = 21 days by law).',
          '<strong>Don\'t return all company property without copying your personal files first</strong>.',
          '<strong>Don\'t bad-mouth your employer on social media</strong> — it can hurt future claims.',
          '<strong>Don\'t delay filing for unemployment</strong> — apply within a week.'
        ],
        steps: [
          'Request your termination reason in writing',
          'File for unemployment at FloridaJobs.org immediately',
          'If discrimination suspected: file with EEOC within 300 days',
          'If retaliation suspected: file with OSHA (safety) or DOL (wage) complaint',
          'Consult an employment attorney — initial consultations are often free'
        ]
      }
    ]
  },
  consumer: {
    title: 'Consumer Rights',
    icon: '🛒',
    situations: [
      {
        id: 'debt-collector',
        icon: '📞',
        title: 'Debt Collector Calling',
        desc: 'Harassed by collectors',
        urgency: 'medium',
        rights: [
          'Debt collectors <strong>cannot call before 8am or after 9pm</strong> in your time zone.',
          'They must <strong>stop contacting you</strong> if you send a written "cease communication" request.',
          'They cannot <strong>threaten you with jail</strong>, use profanity, or misrepresent the debt amount.',
          'You have the right to <strong>request debt validation</strong> within 30 days of first contact — they must prove the debt is yours.',
          'They cannot <strong>contact your employer</strong> except to verify your address/phone (and even that has limits).',
          'After <strong>5 years</strong> in Florida, most debts are past the statute of limitations for lawsuits.'
        ],
        scripts: [
          { label: 'First call from collector', text: '"Please send me written validation of this debt within 30 days as required by the FDCPA. Do not contact me by phone until you have provided this."' },
          { label: 'To stop all contact', text: '"I am requesting that you cease all communication with me regarding this matter. I am sending this request in writing as well."' },
          { label: 'If they threaten', text: '"I am recording this call. Threatening [jail/legal action you can\'t take] violates the Fair Debt Collection Practices Act. What is your name and company?"' }
        ],
        donts: [
          '<strong>Don\'t acknowledge the debt is yours</strong> until it\'s validated — it can restart the statute of limitations.',
          '<strong>Don\'t give them your bank info or make a partial payment</strong> without a written agreement.',
          '<strong>Don\'t ignore a court summons</strong> — even if the debt is old, show up or you\'ll get a default judgment.',
          '<strong>Don\'t believe threats of arrest</strong> — you cannot go to jail for consumer debt.'
        ],
        steps: [
          'Send a debt validation letter via certified mail within 30 days',
          'Check if the debt is past the 5-year Florida statute of limitations',
          'Report FDCPA violations to the FTC: ftc.gov/complaint',
          'File a complaint with the CFPB: consumerfinance.gov/complaint',
          'Consult a consumer rights attorney — FDCPA violations can win you $1,000+ per violation'
        ]
      }
    ]
  },
  medical: {
    title: 'Medical & Billing',
    icon: '🏥',
    situations: [
      {
        id: 'surprise-bill',
        icon: '💊',
        title: 'Surprise Medical Bill',
        desc: 'Unexpected healthcare charges',
        urgency: 'medium',
        rights: [
          'The <strong>No Surprises Act</strong> (federal, 2022) protects you from most surprise out-of-network bills for emergency services.',
          'You can only be billed your <strong>in-network cost-sharing amount</strong> for emergency care, even at out-of-network facilities.',
          'You have the right to a <strong>Good Faith Estimate</strong> before any scheduled service if you\'re uninsured or self-pay.',
          'If a bill exceeds the estimate by <strong>$400+</strong>, you can dispute it through the federal process.',
          'Florida\'s <strong>balance billing protections</strong> apply to HMO plans — you cannot be balance-billed by out-of-network providers at in-network facilities.'
        ],
        scripts: [
          { label: 'When you receive the bill', text: '"I am requesting an itemized bill showing every charge, CPT code, and diagnosis code. I also need to verify which charges fall under the No Surprises Act."' },
          { label: 'To negotiate', text: '"I would like to discuss the financial assistance programs available and request a reduction based on my inability to pay the full amount."' }
        ],
        donts: [
          '<strong>Don\'t pay immediately</strong> — you have the right to dispute and negotiate.',
          '<strong>Don\'t ignore the bill</strong> — it can go to collections after 60-90 days.',
          '<strong>Don\'t give up if denied</strong> — appeal insurance denials (you have 180 days for external review).'
        ],
        steps: [
          'Request an itemized bill with CPT/diagnosis codes',
          'Check if the No Surprises Act applies to your situation',
          'If insured: file a formal appeal with your insurance within 180 days',
          'If uninsured: ask about the hospital\'s financial assistance (charity care) program — nonprofits are required to offer this',
          'Negotiate: hospitals routinely accept 40-60% of the billed amount',
          'File a complaint: CMS.gov/nosurprises or Florida AHCA'
        ]
      }
    ]
  },
  immigration: {
    title: 'Immigration',
    icon: '🛂',
    situations: [
      {
        id: 'ice-encounter',
        icon: '🛡️',
        title: 'ICE Encounter',
        desc: 'Immigration officer contact',
        urgency: 'high',
        rights: [
          'You have the right to <strong>remain silent</strong>. You do not have to answer questions about your immigration status.',
          'You do NOT have to open your door unless ICE has a <strong>judicial warrant signed by a judge</strong> (not an administrative warrant).',
          'You have the right to <strong>an attorney</strong>, though the government is not required to provide one for free in immigration cases.',
          'You can <strong>refuse to sign anything</strong> you don\'t understand or that waives your rights.',
          'Even undocumented individuals have <strong>constitutional rights</strong>: 4th Amendment (search/seizure) and 5th Amendment (due process, silence).'
        ],
        scripts: [
          { label: 'If ICE knocks on your door', text: '"Please slide a warrant under the door. I will not open the door without a judicial warrant signed by a judge."' },
          { label: 'If stopped on the street', text: '"Am I free to go? I am exercising my right to remain silent."' },
          { label: 'If detained', text: '"I am invoking my right to remain silent. I need to speak with an attorney. I do not consent to a search. I will not sign anything."' }
        ],
        donts: [
          '<strong>Don\'t open the door</strong> — speak through the door. Ask for the warrant to be slid under.',
          '<strong>Don\'t carry false documents</strong> — this is a federal crime and can bar future legal status.',
          '<strong>Don\'t sign a voluntary departure</strong> without consulting an attorney — it waives your right to a hearing.',
          '<strong>Don\'t run</strong> — it can lead to additional charges and does not improve your situation.'
        ],
        steps: [
          'Memorize an immigration attorney\'s number — write it on your arm if needed',
          'Call the National Immigration Legal Services hotline: 1-800-354-0365',
          'If detained: invoke right to remain silent, request attorney, do not sign anything',
          'Have a family emergency plan: who cares for children, who has important documents',
          'Contact local immigrant rights organizations for free legal help'
        ]
      }
    ]
  }
};

// AI chat responses
const CHAT_RESPONSES = {
  landlord: {
    keywords: ['landlord', 'lock', 'evict', 'rent', 'lease', 'tenant', 'apartment', 'deposit'],
    response: `<strong>🏠 Florida Tenant Rights — Locks Changed</strong><br><br>
This is an <strong>illegal self-help eviction</strong> under Florida Statute §83.67.<br><br>
<strong>Your rights:</strong><br>
• Your landlord CANNOT change locks without a court order — period<br>
• This is a criminal offense (misdemeanor)<br>
• You can call the police to regain entry<br>
• You may be entitled to damages + attorney's fees<br><br>
<strong>Say this:</strong> "Changing locks without a court order violates FL Statute 83.67. I'm calling the police."<br><br>
<strong>Next steps:</strong><br>
1. Call police non-emergency line<br>
2. Document everything (photos, timestamps)<br>
3. Florida Legal Aid: 1-866-550-2929<br><br>
<em>⚠️ Legal information, not advice. Consult an attorney.</em>`
  },
  police: {
    keywords: ['police', 'pulled over', 'cop', 'officer', 'arrest', 'search', 'stop'],
    response: `<strong>🚔 Florida — Police Encounter Rights</strong><br><br>
<strong>Your core rights:</strong><br>
• Remain silent (beyond ID/license/registration)<br>
• Refuse consent to search your vehicle<br>
• Record the encounter<br>
• Ask "Am I free to go?"<br><br>
<strong>Say this:</strong> "I do not consent to a search. Am I being detained or am I free to go?"<br><br>
<strong>Don't:</strong> Reach for anything without announcing it. Argue with the officer. Resist physically.<br><br>
<em>⚠️ Legal information, not advice.</em>`
  },
  work: {
    keywords: ['fired', 'job', 'boss', 'overtime', 'wage', 'pay', 'work', 'employer', 'hours'],
    response: `<strong>💼 Florida Workplace Rights</strong><br><br>
<strong>Key protections:</strong><br>
• FL minimum wage: $14.00/hr (2026)<br>
• Overtime: 1.5x after 40 hrs/week (FLSA)<br>
• Can't be fired for discrimination, retaliation, or exercising legal rights<br>
• You CAN discuss wages with coworkers (NLRA protected)<br><br>
<strong>If fired:</strong> Request reason in writing, file for unemployment at FloridaJobs.org immediately, don't sign severance without 21-day review.<br><br>
<strong>If owed wages:</strong> File complaint with DOL: 1-866-487-9243<br><br>
<em>⚠️ Legal information, not advice.</em>`
  },
  default: {
    response: `I can help with that. Can you tell me more about your situation?<br><br>
I cover these areas in <strong>Florida</strong>:<br>
• 🚔 Police encounters & traffic stops<br>
• 🏠 Tenant & housing rights<br>
• 💼 Workplace & wage issues<br>
• 🛒 Consumer protection & debt collectors<br>
• 🏥 Medical billing & surprise bills<br>
• 🛂 Immigration encounters<br><br>
Try describing what's happening, like:<br>
• "My landlord changed my locks"<br>
• "I got pulled over and they want to search my car"<br>
• "My employer didn't pay me overtime"`
  }
};

let currentScreen = 'home';
let previousScreen = 'home';
let currentCategory = null;

function showScreen(id) {
  previousScreen = currentScreen;
  currentScreen = id;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(`screen-${id}`).classList.add('active');
  
  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (id === 'home') document.querySelectorAll('.nav-item')[0].classList.add('active');
  if (id === 'chat') document.querySelectorAll('.nav-item')[1].classList.add('active');
  if (id === 'incident') document.querySelectorAll('.nav-item')[2].classList.add('active');
  
  window.scrollTo(0, 0);
}

function goHome() {
  showScreen('home');
}

function goBack() {
  if (currentScreen === 'detail' && currentCategory) {
    showCategory(currentCategory);
  } else if (currentScreen === 'incident') {
    showScreen('detail');
  } else {
    showScreen('home');
  }
}

function showCategory(catId) {
  currentCategory = catId;
  const cat = DATA[catId];
  if (!cat) return;
  
  document.getElementById('category-title').textContent = cat.title;
  const container = document.getElementById('category-situations');
  container.innerHTML = cat.situations.map(s => `
    <div class="situation-item" onclick="showSituation('${s.id}')">
      <span class="sit-icon">${s.icon}</span>
      <div class="sit-info">
        <div class="sit-title">${s.title}</div>
        <div class="sit-desc">${s.desc}</div>
      </div>
      <span class="sit-arrow">›</span>
    </div>
  `).join('');
  
  showScreen('category');
}

function showSituation(sitId) {
  let situation = null;
  let catId = null;
  
  for (const [key, cat] of Object.entries(DATA)) {
    const found = cat.situations.find(s => s.id === sitId);
    if (found) {
      situation = found;
      catId = key;
      break;
    }
  }
  
  if (!situation) return;
  currentCategory = catId;
  
  const state = document.getElementById('state-select').value || 'FL';
  document.getElementById('detail-title').textContent = situation.title;
  document.getElementById('detail-state').textContent = state;
  
  // Urgency banner
  const banner = document.getElementById('urgency-banner');
  if (situation.urgency === 'high') {
    banner.style.display = 'flex';
    banner.querySelector('.urgency-text').textContent = 'High-stress situation — read the key points first';
  } else {
    banner.style.display = 'flex';
    banner.querySelector('.urgency-icon').textContent = '📌';
    banner.querySelector('.urgency-text').textContent = 'Know these rights before you need them';
    banner.style.background = 'rgba(59, 130, 246, 0.1)';
    banner.style.borderColor = 'rgba(59, 130, 246, 0.3)';
  }
  
  // Rights
  document.getElementById('rights-list').innerHTML = situation.rights.map(r => `
    <div class="right-item">
      <span class="right-check">✓</span>
      <div class="right-text">${r}</div>
    </div>
  `).join('');
  
  // Scripts
  document.getElementById('scripts-list').innerHTML = situation.scripts.map(s => `
    <div class="script-item">
      <div class="script-label">${s.label}</div>
      <div class="script-text">${s.text}</div>
      <button class="copy-btn" onclick="copyScript(this, '${s.text.replace(/'/g, "\\'")}')">Copy</button>
    </div>
  `).join('');
  
  // Don'ts
  document.getElementById('donts-list').innerHTML = situation.donts.map(d => `
    <div class="dont-item">
      <span class="dont-x">✕</span>
      <div class="dont-text">${d}</div>
    </div>
  `).join('');
  
  // Next Steps
  document.getElementById('next-steps').innerHTML = situation.steps.map((s, i) => `
    <div class="step-item">
      <span class="step-num">${i + 1}</span>
      <div class="step-text">${s}</div>
    </div>
  `).join('');
  
  showScreen('detail');
}

function copyScript(btn, text) {
  navigator.clipboard.writeText(text.replace(/"/g, '"').replace(/"/g, '"')).then(() => {
    btn.textContent = '✓';
    setTimeout(() => btn.textContent = 'Copy', 1500);
  }).catch(() => {
    btn.textContent = '✓';
    setTimeout(() => btn.textContent = 'Copy', 1500);
  });
}

function handleSearch() {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  if (!query) return;
  
  // Try to match to a category/situation
  if (query.includes('landlord') || query.includes('lock') || query.includes('evict') || query.includes('rent') || query.includes('tenant')) {
    showCategory('tenant');
  } else if (query.includes('police') || query.includes('pull') || query.includes('stop') || query.includes('arrest') || query.includes('search')) {
    showCategory('police');
  } else if (query.includes('fired') || query.includes('wage') || query.includes('overtime') || query.includes('work') || query.includes('boss') || query.includes('pay')) {
    showCategory('worker');
  } else if (query.includes('debt') || query.includes('collector') || query.includes('bill') || query.includes('return') || query.includes('refund')) {
    showCategory('consumer');
  } else if (query.includes('doctor') || query.includes('hospital') || query.includes('medical') || query.includes('insurance')) {
    showCategory('medical');
  } else if (query.includes('ice') || query.includes('immigra') || query.includes('deport') || query.includes('visa')) {
    showCategory('immigration');
  } else {
    // Default to AI chat
    showChat();
    document.getElementById('chat-input').value = query;
    sendChat();
  }
}

function showChat() {
  showScreen('chat');
}

function sendChat() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;
  
  const container = document.getElementById('chat-messages');
  
  // User message
  container.innerHTML += `<div class="chat-msg user"><div class="msg-content">${escapeHtml(msg)}</div></div>`;
  input.value = '';
  
  // Find matching response
  let response = CHAT_RESPONSES.default.response;
  for (const [key, data] of Object.entries(CHAT_RESPONSES)) {
    if (key === 'default') continue;
    if (data.keywords.some(kw => msg.toLowerCase().includes(kw))) {
      response = data.response;
      break;
    }
  }
  
  // Typing indicator
  container.innerHTML += `<div class="chat-msg bot typing" id="typing"><div class="msg-content">Analyzing your situation...</div></div>`;
  container.scrollTop = container.scrollHeight;
  
  setTimeout(() => {
    const typing = document.getElementById('typing');
    if (typing) typing.remove();
    container.innerHTML += `<div class="chat-msg bot"><div class="msg-content">${response}</div></div>`;
    container.scrollTop = container.scrollHeight;
  }, 1200);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function startRecording() {
  showToast('🔴 Recording started — your encounter is being documented');
}

function showIncidentLog() {
  const now = new Date();
  document.getElementById('incident-time').value = now.toISOString().slice(0, 16);
  showScreen('incident');
}

function showHelp() {
  showToast('📞 ACLU Florida: (786) 363-2700 | Legal Aid: 1-866-550-2929');
}

function showJournal() {
  showToast('📋 Incident journal — coming soon in full app');
}

function showSaved() {
  showToast('⭐ Saved rights — coming soon in full app');
}

function getLocation() {
  document.getElementById('incident-location').value = 'Tampa, FL (GPS detected)';
  showToast('📍 Location captured');
}

function saveIncident() {
  showToast('✅ Incident report saved with timestamp');
  setTimeout(() => goBack(), 1500);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  // Set current time for incident form
  const now = new Date();
  const timeInput = document.getElementById('incident-time');
  if (timeInput) {
    timeInput.value = now.toISOString().slice(0, 16);
  }
});
