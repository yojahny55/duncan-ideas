// QuoteCheck — Interactive Prototype

// Demo data for different service types
const demoAnalysis = {
    auto: {
        type: '🚗 Auto Repair',
        lineItems: [
            {
                name: 'Labor (3 hours)',
                desc: 'Standard labor rate for brake replacement. Average shop rate in your area is $120-150/hr.',
                price: '$450.00',
                status: 'fair'
            },
            {
                name: 'Brake Pads (Front)',
                desc: 'Ceramic brake pads. OEM quality. Aftermarket options available for ~$60.',
                price: '$120.00',
                status: 'fair'
            },
            {
                name: 'Brake Rotors (Front pair)',
                desc: 'New rotors. Could potentially be resurfaced instead for $50-80 if still within spec.',
                price: '$280.00',
                status: 'high'
            },
            {
                name: 'Diagnostic Fee',
                desc: 'Standard diagnostic charge. Many shops waive this if you proceed with repair.',
                price: '$100.00',
                status: 'fair'
            }
        ],
        redFlags: [
            'Rotors may not need replacement. Ask: "Are the rotors below minimum thickness spec?" Request measurement.',
            'No brake fluid flush included — this is often recommended with brake work and could be added later as an upsell.'
        ],
        questions: [
            '"Can you show me the rotor thickness measurement?"',
            '"What warranty do you offer on parts and labor?"',
            '"Is the diagnostic fee waived if I proceed with the repair?"',
            '"Are these OEM or aftermarket parts?"'
        ],
        tips: [
            'Request to keep your old parts — ensures work was actually done',
            'Ask if rotors can be resurfaced instead of replaced (saves ~$100-150)',
            'Get a written warranty — most shops offer 12 months/12,000 miles minimum'
        ],
        fairnessScore: 'fair',
        rangePosition: 52,
        rangeLow: 720,
        rangeAvg: 850,
        rangeHigh: 1100,
        explanation: 'This quote is within the typical range for brake pad and rotor replacement in your area. Labor rates are competitive. The rotor pricing is on the higher side — worth asking if resurfacing is an option.'
    },
    plumbing: {
        type: '🔧 Plumbing',
        lineItems: [
            {
                name: 'Service Call',
                desc: 'Standard trip charge to assess the issue. Often credited toward final bill.',
                price: '$89.00',
                status: 'fair'
            },
            {
                name: 'Water Heater Flush',
                desc: 'Draining and flushing the tank. A DIY-able task for some homeowners.',
                price: '$199.00',
                status: 'high'
            },
            {
                name: 'Anode Rod Replacement',
                desc: 'Prevents tank corrosion. Important for water heater longevity. Part cost is typically $30-50.',
                price: '$175.00',
                status: 'fair'
            },
            {
                name: 'Pressure Relief Valve',
                desc: 'Safety component. Part is ~$15-30. Labor adds most of the cost.',
                price: '$185.00',
                status: 'high'
            }
        ],
        redFlags: [
            'Water heater flush is priced high compared to industry average of $100-150.',
            'Consider bundling: multiple services should come with a package discount.'
        ],
        questions: [
            '"Do you offer a discount for bundling these services?"',
            '"What brand of parts will you use?"',
            '"Is the service call fee waived with the repair?"',
            '"How long will the work take?"'
        ],
        tips: [
            'Ask for itemized parts vs labor breakdown',
            'Request before/after photos of the work',
            'Check if your home warranty covers any of this'
        ],
        fairnessScore: 'high',
        rangePosition: 72,
        rangeLow: 450,
        rangeAvg: 550,
        rangeHigh: 700,
        explanation: 'This quote is on the higher end for water heater maintenance. The individual line items are reasonable, but there should be a bundled discount. Consider negotiating 10-15% off.'
    },
    hvac: {
        type: '❄️ HVAC',
        lineItems: [
            {
                name: 'Diagnostic Fee',
                desc: 'Standard HVAC diagnostic. Should be credited if you proceed with repair.',
                price: '$129.00',
                status: 'fair'
            },
            {
                name: 'Capacitor Replacement',
                desc: 'Common AC repair. Part costs $15-40, rest is labor.',
                price: '$285.00',
                status: 'high'
            },
            {
                name: 'Refrigerant Recharge (2 lbs)',
                desc: 'R-410A refrigerant. Current market rate is $50-150/lb installed.',
                price: '$250.00',
                status: 'fair'
            },
            {
                name: 'Coil Cleaning',
                desc: 'Cleaning condenser coils. Can be done yourself with a hose for preventive maintenance.',
                price: '$149.00',
                status: 'fair'
            }
        ],
        redFlags: [
            'Capacitor replacement is marked up significantly — part is typically under $50.',
            'Needing refrigerant suggests a leak — ask if leak detection/repair is included.'
        ],
        questions: [
            '"Did you find the source of the refrigerant leak?"',
            '"Is the capacitor OEM or aftermarket?"',
            '"What is your warranty on the repair?"',
            '"Is the diagnostic waived with the repair?"'
        ],
        tips: [
            'Ask about the refrigerant leak — just adding refrigerant is a temporary fix',
            'Request a maintenance plan quote — often saves money long-term',
            'Get a second opinion on the capacitor pricing'
        ],
        fairnessScore: 'fair',
        rangePosition: 58,
        rangeLow: 600,
        rangeAvg: 750,
        rangeHigh: 950,
        explanation: 'Overall this quote is within market range for HVAC repairs in your area. The capacitor markup is notable but common in the industry. The refrigerant pricing is fair.'
    },
    electrical: {
        type: '⚡ Electrical',
        lineItems: [
            {
                name: 'Service Call',
                desc: 'Trip charge for electrician. Standard in the industry.',
                price: '$75.00',
                status: 'fair'
            },
            {
                name: 'Panel Inspection',
                desc: 'Full electrical panel assessment. Important for safety.',
                price: '$150.00',
                status: 'fair'
            },
            {
                name: 'GFCI Outlet Install (x3)',
                desc: 'Ground fault outlets for bathrooms/kitchen. Part is ~$15 each.',
                price: '$285.00',
                status: 'fair'
            },
            {
                name: 'Breaker Replacement (x2)',
                desc: '20-amp breakers. Part cost is $10-30 each.',
                price: '$190.00',
                status: 'fair'
            }
        ],
        redFlags: [
            'No permit mentioned — electrical work often requires permits. Ask about this.'
        ],
        questions: [
            '"Is a permit required for this work? Is it included?"',
            '"Are you licensed and insured?"',
            '"What brand of components will you use?"',
            '"Will there be an inspection after the work?"'
        ],
        tips: [
            'Always verify electrical contractor is licensed',
            'Ask for permit details — unpermitted work can affect home sale',
            'Request photos of completed work for your records'
        ],
        fairnessScore: 'fair',
        rangePosition: 48,
        rangeLow: 550,
        rangeAvg: 680,
        rangeHigh: 850,
        explanation: 'This electrical work quote is fairly priced for your area. All line items are within expected ranges. Make sure to confirm permit requirements.'
    },
    contractor: {
        type: '🏠 General Contractor',
        lineItems: [
            {
                name: 'Demolition',
                desc: 'Removing existing structure. Includes debris hauling.',
                price: '$800.00',
                status: 'fair'
            },
            {
                name: 'Materials',
                desc: 'Lumber, drywall, fixtures. Ask for itemized receipt.',
                price: '$2,400.00',
                status: 'fair'
            },
            {
                name: 'Labor (40 hours)',
                desc: 'At $65/hr. Competitive rate for skilled labor in your area.',
                price: '$2,600.00',
                status: 'fair'
            },
            {
                name: 'Permits & Inspections',
                desc: 'Contractor handling permitting. Good sign of legitimacy.',
                price: '$350.00',
                status: 'low'
            }
        ],
        redFlags: [
            'No timeline specified — get start/end dates in writing',
            'Payment terms not listed — never pay more than 30% upfront'
        ],
        questions: [
            '"What is the project timeline with milestones?"',
            '"What is the payment schedule?"',
            '"What happens if the project goes over budget?"',
            '"Can I see proof of insurance and license?"'
        ],
        tips: [
            'Never pay more than 30% upfront',
            'Get everything in writing with a detailed contract',
            'Set milestone-based payments tied to completion',
            'Verify contractor license and insurance'
        ],
        fairnessScore: 'fair',
        rangePosition: 45,
        rangeLow: 5000,
        rangeAvg: 6000,
        rangeHigh: 7500,
        explanation: 'This contractor quote appears reasonable for the scope of work. Materials and labor are priced fairly. The fact they handle permits is a good sign. Focus on getting timeline and payment terms in writing.'
    }
};

// Default analysis for generic quotes
const defaultAnalysis = {
    type: '📋 Service Quote',
    lineItems: [
        {
            name: 'Service/Labor',
            desc: 'General service charge. Compare with 2-3 other providers for best pricing.',
            price: 'See quote',
            status: 'fair'
        },
        {
            name: 'Parts/Materials',
            desc: 'Cost of parts or materials. Ask for itemized breakdown.',
            price: 'See quote',
            status: 'fair'
        }
    ],
    redFlags: [
        'Consider getting 2-3 quotes to compare pricing',
        'Ask for itemized breakdown of labor vs parts/materials'
    ],
    questions: [
        '"Can you provide an itemized breakdown?"',
        '"What warranty do you offer?"',
        '"Is the estimate guaranteed or subject to change?"',
        '"When can the work be completed?"'
    ],
    tips: [
        'Always get at least 2-3 quotes for comparison',
        'Ask about warranties on parts and labor',
        'Get the final quote in writing before work begins',
        'Request references from past customers'
    ],
    fairnessScore: 'fair',
    rangePosition: 50,
    rangeLow: 0,
    rangeAvg: 0,
    rangeHigh: 0,
    explanation: 'Without specific service details, we recommend getting 2-3 quotes to compare. Ask for itemized breakdowns and warranties in writing.'
};

// DOM Elements
const uploadSection = document.getElementById('upload-section');
const analysisSection = document.getElementById('analysis-section');
const uploadZone = document.getElementById('upload-zone');
const fileInput = document.getElementById('file-input');
const analyzeBtn = document.getElementById('analyze-btn');
const backBtn = document.getElementById('back-btn');
const newQuoteBtn = document.getElementById('new-quote-btn');
const exportBtn = document.getElementById('export-btn');

// Form inputs
const serviceTypeSelect = document.getElementById('service-type');
const locationInput = document.getElementById('location');
const descriptionInput = document.getElementById('quote-description');
const amountInput = document.getElementById('total-amount');

// Results elements
const resultType = document.getElementById('result-type');
const resultLocation = document.getElementById('result-location');
const resultAmount = document.getElementById('result-amount');
const scoreBadge = document.getElementById('score-badge');
const rangeMarker = document.getElementById('range-marker');
const rangeLow = document.getElementById('range-low');
const rangeAvg = document.getElementById('range-avg');
const rangeHigh = document.getElementById('range-high');
const fairnessExplanation = document.getElementById('fairness-explanation');
const lineItemsContainer = document.getElementById('line-items');
const redFlagsCard = document.getElementById('red-flags-card');
const redFlagsContainer = document.getElementById('red-flags');
const questionsContainer = document.getElementById('questions');
const tipsContainer = document.getElementById('tips');

// Upload zone interactions
uploadZone.addEventListener('click', () => fileInput.click());

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
    
    const file = e.dataTransfer.files[0];
    if (file) {
        handleFileUpload(file);
    }
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleFileUpload(file);
    }
});

function handleFileUpload(file) {
    // In a real app, this would OCR the document
    // For demo, we'll simulate processing
    uploadZone.innerHTML = `
        <div class="upload-icon">✅</div>
        <p><strong>${file.name}</strong></p>
        <p class="upload-formats">File uploaded! Fill in details below.</p>
    `;
    
    // Auto-scroll to form
    setTimeout(() => {
        serviceTypeSelect.focus();
    }, 300);
}

// Analyze button
analyzeBtn.addEventListener('click', () => {
    const serviceType = serviceTypeSelect.value;
    const location = locationInput.value || 'Unknown Location';
    const amount = amountInput.value ? parseFloat(amountInput.value) : 0;
    
    if (!serviceType) {
        alert('Please select a service type');
        return;
    }
    
    showAnalysis(serviceType, location, amount);
});

// Navigation
backBtn.addEventListener('click', showUpload);
newQuoteBtn.addEventListener('click', () => {
    resetForm();
    showUpload();
});

// Export
exportBtn.addEventListener('click', () => {
    alert('Summary exported! (In production, this would generate a PDF or shareable link)');
});

function showUpload() {
    uploadSection.classList.add('active');
    analysisSection.classList.remove('active');
}

function showAnalysis(serviceType, location, amount) {
    // Get analysis data
    const analysis = demoAnalysis[serviceType] || defaultAnalysis;
    
    // Populate results
    resultType.textContent = analysis.type;
    resultLocation.textContent = location;
    resultAmount.textContent = amount ? `$${amount.toFixed(2)}` : '$--';
    
    // Score badge
    scoreBadge.className = `score-badge ${analysis.fairnessScore}`;
    const scoreText = {
        'low': '✓ Great Price',
        'fair': '✓ Fair',
        'high': '⚠ High',
        'very-high': '⚠ Very High'
    };
    scoreBadge.innerHTML = `<span class="score-icon">${analysis.fairnessScore === 'low' || analysis.fairnessScore === 'fair' ? '✓' : '⚠'}</span><span class="score-text">${scoreText[analysis.fairnessScore]}</span>`;
    
    // Range
    rangeMarker.style.left = `${analysis.rangePosition}%`;
    rangeLow.textContent = analysis.rangeLow.toLocaleString();
    rangeAvg.textContent = analysis.rangeAvg.toLocaleString();
    rangeHigh.textContent = analysis.rangeHigh.toLocaleString();
    fairnessExplanation.textContent = analysis.explanation;
    
    // Line items
    lineItemsContainer.innerHTML = analysis.lineItems.map(item => `
        <div class="line-item">
            <div class="line-item-info">
                <div class="line-item-name">${item.name}</div>
                <div class="line-item-desc">${item.desc}</div>
                <div class="line-item-status ${item.status}">
                    ${item.status === 'fair' ? '✓ Fair price' : item.status === 'low' ? '✓ Good deal' : '⚠ Higher than average'}
                </div>
            </div>
            <div class="line-item-price">${item.price}</div>
        </div>
    `).join('');
    
    // Red flags
    if (analysis.redFlags.length > 0) {
        redFlagsCard.style.display = 'block';
        redFlagsContainer.innerHTML = analysis.redFlags.map(flag => `<li>${flag}</li>`).join('');
    } else {
        redFlagsCard.style.display = 'none';
    }
    
    // Questions
    questionsContainer.innerHTML = analysis.questions.map(q => `<li>${q}</li>`).join('');
    
    // Tips
    tipsContainer.innerHTML = analysis.tips.map(t => `<li>${t}</li>`).join('');
    
    // Show analysis section
    uploadSection.classList.remove('active');
    analysisSection.classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function resetForm() {
    serviceTypeSelect.value = '';
    locationInput.value = '';
    descriptionInput.value = '';
    amountInput.value = '';
    fileInput.value = '';
    
    uploadZone.innerHTML = `
        <div class="upload-icon">📄</div>
        <p>Drop your quote here or <span class="upload-link">browse</span></p>
        <p class="upload-formats">Supports: JPG, PNG, PDF</p>
    `;
}

// Demo auto-fill for testing
if (window.location.search.includes('demo')) {
    serviceTypeSelect.value = 'auto';
    locationInput.value = 'Tampa, FL';
    descriptionInput.value = 'Brake pad replacement\nLabor: $450\nBrake pads (front): $120\nRotors (front pair): $280\nDiagnostic fee: $100';
    amountInput.value = '950';
}
