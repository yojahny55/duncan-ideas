// GreenLedger - Carbon Compliance for Indie Sellers

// Navigation
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');
const pageTitle = document.getElementById('pageTitle');

const viewTitles = {
  dashboard: 'Dashboard',
  check: 'Compliance Check',
  calculator: 'Carbon Calculator',
  products: 'My Products',
  reports: 'Reports'
};

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const viewId = item.dataset.view;
    
    // Update nav
    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');
    
    // Update views
    views.forEach(view => view.classList.remove('active'));
    document.getElementById(`${viewId}View`).classList.add('active');
    
    // Update title
    pageTitle.textContent = viewTitles[viewId];
  });
});

// Carbon Calculator
const calcForm = document.getElementById('calcForm');
const calcResults = document.getElementById('calcResults');
const resultsContent = document.getElementById('resultsContent');
const resultsEmpty = document.querySelector('.results-empty');

// Carbon factors (kg CO2e per kg of material)
const materialFactors = {
  silver: 196,
  gold: 12500,
  steel: 1.85,
  aluminum: 8.14,
  ceramic: 0.5,
  glass: 0.86,
  cotton: 5.9,
  wool: 10.1,
  polyester: 5.5,
  wood: -0.9, // Carbon negative!
  plastic: 3.5,
  leather: 17
};

// Shipping factors (kg CO2e per kg per 1000km)
const shippingFactors = {
  air: 1.1,
  sea: 0.012,
  ground: 0.062
};

calcForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const material = document.getElementById('calcMaterial').value;
  const weight = parseFloat(document.getElementById('calcWeight').value) || 0;
  const packaging = parseFloat(document.getElementById('calcPackaging').value) || 0;
  const distance = parseInt(document.getElementById('calcShipping').value) || 0;
  const shippingMethod = document.querySelector('input[name="shipping"]:checked').value;
  
  if (!material || weight === 0) {
    alert('Please fill in at least the material and weight.');
    return;
  }
  
  // Calculate
  const materialCarbon = Math.abs(materialFactors[material] * weight);
  const packagingCarbon = packaging * 1.5; // Cardboard average
  const shippingCarbon = (weight + packaging) * shippingFactors[shippingMethod] * (distance / 1000);
  
  const totalCarbon = materialCarbon + packagingCarbon + shippingCarbon;
  
  // Display results
  resultsEmpty.classList.add('hidden');
  resultsContent.classList.remove('hidden');
  
  document.getElementById('totalCarbon').textContent = totalCarbon.toFixed(2);
  document.getElementById('materialCarbon').textContent = materialCarbon.toFixed(2) + ' kg';
  document.getElementById('packagingCarbon').textContent = packagingCarbon.toFixed(2) + ' kg';
  document.getElementById('shippingCarbon').textContent = shippingCarbon.toFixed(2) + ' kg';
  
  // Fun comparison
  const comparisons = [
    { threshold: 0.5, text: `🚗 Driving ${(totalCarbon * 4).toFixed(0)} km in a car` },
    { threshold: 2, text: `💡 Running a 60W bulb for ${(totalCarbon * 150).toFixed(0)} hours` },
    { threshold: 10, text: `✈️ ${(totalCarbon * 0.15).toFixed(1)}% of a London→NYC flight` },
    { threshold: 50, text: `🌳 What a tree absorbs in ${(totalCarbon / 21).toFixed(1)} years` },
    { threshold: Infinity, text: `🏠 ${(totalCarbon / 10000 * 100).toFixed(2)}% of avg annual household emissions` }
  ];
  
  const comparison = comparisons.find(c => totalCarbon <= c.threshold);
  document.getElementById('comparison').textContent = comparison.text;
});

// Compliance Check Quiz
const questions = [
  {
    id: 'products',
    text: 'What types of products do you sell?',
    type: 'checkbox',
    options: [
      { value: 'jewelry', icon: '💍', label: 'Jewelry & Accessories' },
      { value: 'ceramics', icon: '🏺', label: 'Ceramics & Pottery' },
      { value: 'textiles', icon: '🧵', label: 'Textiles & Clothing' },
      { value: 'wood', icon: '🪵', label: 'Wood Products' },
      { value: 'electronics', icon: '⚡', label: 'Electronics' },
      { value: 'other', icon: '📦', label: 'Other' }
    ]
  },
  {
    id: 'eu_sales',
    text: 'Do you currently ship products to EU customers?',
    type: 'radio',
    options: [
      { value: 'yes', icon: '✅', label: 'Yes, regularly' },
      { value: 'sometimes', icon: '🔄', label: 'Sometimes / Planning to' },
      { value: 'no', icon: '❌', label: 'No' }
    ]
  },
  {
    id: 'volume',
    text: 'Approximately how many orders do you ship to the EU per year?',
    type: 'radio',
    options: [
      { value: 'under50', icon: '📦', label: 'Under 50 orders' },
      { value: '50to200', icon: '📦📦', label: '50-200 orders' },
      { value: '200to1000', icon: '📦📦📦', label: '200-1,000 orders' },
      { value: 'over1000', icon: '🚛', label: 'Over 1,000 orders' }
    ]
  },
  {
    id: 'platforms',
    text: 'Where do you sell your products?',
    type: 'checkbox',
    options: [
      { value: 'etsy', icon: '🛍️', label: 'Etsy' },
      { value: 'shopify', icon: '🛒', label: 'Shopify' },
      { value: 'amazon', icon: '📦', label: 'Amazon Handmade' },
      { value: 'own', icon: '🌐', label: 'Own Website' },
      { value: 'other', icon: '📱', label: 'Other Marketplace' }
    ]
  },
  {
    id: 'concern',
    text: "What's your biggest concern about sustainability compliance?",
    type: 'radio',
    options: [
      { value: 'unknown', icon: '❓', label: "Don't know what applies to me" },
      { value: 'cost', icon: '💰', label: 'Worried about compliance costs' },
      { value: 'time', icon: '⏰', label: "Don't have time to figure it out" },
      { value: 'customer', icon: '👥', label: 'Want to show customers I care' }
    ]
  }
];

let currentQuestion = 0;
const answers = {};

const checkProgress = document.getElementById('checkProgress');
const checkProgressText = document.getElementById('checkProgressText');
const questionText = document.getElementById('questionText');
const checkOptions = document.getElementById('checkOptions');
const checkBack = document.getElementById('checkBack');
const checkNext = document.getElementById('checkNext');
const checkCard = document.querySelector('.check-card');
const checkResult = document.getElementById('checkResult');
const resultItems = document.getElementById('resultItems');

function renderQuestion() {
  const q = questions[currentQuestion];
  
  // Update progress
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  checkProgress.style.width = `${progress}%`;
  checkProgressText.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  
  // Update question
  questionText.textContent = q.text;
  
  // Render options
  checkOptions.innerHTML = q.options.map(opt => `
    <label class="check-option">
      <input type="${q.type}" name="${q.id}" value="${opt.value}">
      <span class="option-content">
        <span class="option-icon">${opt.icon}</span>
        ${opt.label}
      </span>
    </label>
  `).join('');
  
  // Restore previous answers
  if (answers[q.id]) {
    const values = Array.isArray(answers[q.id]) ? answers[q.id] : [answers[q.id]];
    values.forEach(v => {
      const input = document.querySelector(`input[name="${q.id}"][value="${v}"]`);
      if (input) input.checked = true;
    });
  }
  
  // Update buttons
  checkBack.disabled = currentQuestion === 0;
  checkNext.textContent = currentQuestion === questions.length - 1 ? 'See Results' : 'Next →';
}

function saveAnswer() {
  const q = questions[currentQuestion];
  const inputs = document.querySelectorAll(`input[name="${q.id}"]:checked`);
  
  if (q.type === 'checkbox') {
    answers[q.id] = Array.from(inputs).map(i => i.value);
  } else {
    answers[q.id] = inputs[0]?.value;
  }
}

checkNext.addEventListener('click', () => {
  saveAnswer();
  
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
});

checkBack.addEventListener('click', () => {
  if (currentQuestion > 0) {
    saveAnswer();
    currentQuestion--;
    renderQuestion();
  }
});

function showResults() {
  checkCard.classList.add('hidden');
  checkResult.classList.remove('hidden');
  
  // Generate compliance results based on answers
  const results = [];
  
  if (answers.eu_sales === 'yes' || answers.eu_sales === 'sometimes') {
    if (answers.volume === 'over1000' || answers.volume === '200to1000') {
      results.push({
        type: 'required',
        icon: '⚠️',
        title: 'CBAM Quarterly Reporting',
        desc: 'Your volume requires quarterly carbon border reports for EU customs.'
      });
    }
    
    if (answers.products?.includes('electronics')) {
      results.push({
        type: 'required',
        icon: '🔌',
        title: 'EU Ecodesign Compliance',
        desc: 'Electronics must meet EU energy efficiency and repairability standards.'
      });
    }
    
    if (answers.products?.includes('textiles')) {
      results.push({
        type: 'required',
        icon: '🏷️',
        title: 'Textile Labeling Requirements',
        desc: 'EU requires specific sustainability labeling for textile products.'
      });
    }
    
    results.push({
      type: 'optional',
      icon: '🌿',
      title: 'Voluntary Carbon Disclosure',
      desc: 'Recommended: Display carbon footprint on product listings to build trust.'
    });
  }
  
  if (answers.concern === 'customer') {
    results.push({
      type: 'optional',
      icon: '🏆',
      title: 'Climate Transparency Badge',
      desc: 'Add verified carbon footprint badges to your listings.'
    });
  }
  
  if (results.length === 0) {
    results.push({
      type: 'optional',
      icon: '✅',
      title: "You're in good shape!",
      desc: "No immediate compliance requirements, but tracking carbon now prepares you for future regulations."
    });
  }
  
  resultItems.innerHTML = results.map(r => `
    <div class="result-item ${r.type}">
      <div class="result-item-icon">${r.icon}</div>
      <div class="result-item-content">
        <h4>${r.title}</h4>
        <p>${r.desc}</p>
      </div>
    </div>
  `).join('');
}

// Initialize
renderQuestion();

// Animate stats on load
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});
