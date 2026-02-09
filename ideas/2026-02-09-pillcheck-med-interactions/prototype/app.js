/**
 * PillCheck - Medication Interaction Checker
 * Demo JavaScript for prototype
 */

// Simulated medication database
const medicationDatabase = [
  { name: 'Lisinopril', type: 'ACE Inhibitor', category: 'Blood Pressure' },
  { name: 'Metformin', type: 'Biguanide', category: 'Diabetes' },
  { name: 'Atorvastatin', type: 'Statin', category: 'Cholesterol' },
  { name: 'Amlodipine', type: 'Calcium Channel Blocker', category: 'Blood Pressure' },
  { name: 'Omeprazole', type: 'Proton Pump Inhibitor', category: 'Acid Reflux' },
  { name: 'Metoprolol', type: 'Beta Blocker', category: 'Heart/Blood Pressure' },
  { name: 'Losartan', type: 'ARB', category: 'Blood Pressure' },
  { name: 'Gabapentin', type: 'Anticonvulsant', category: 'Nerve Pain' },
  { name: 'Sertraline', type: 'SSRI', category: 'Antidepressant' },
  { name: 'Levothyroxine', type: 'Thyroid Hormone', category: 'Thyroid' },
  { name: 'Hydrochlorothiazide', type: 'Diuretic', category: 'Blood Pressure' },
  { name: 'Warfarin', type: 'Anticoagulant', category: 'Blood Thinner' },
  { name: 'Aspirin', type: 'NSAID', category: 'Pain/Blood Thinner' },
  { name: 'Ibuprofen', type: 'NSAID', category: 'Pain Relief' },
  { name: 'Prednisone', type: 'Corticosteroid', category: 'Anti-inflammatory' },
  { name: 'Tramadol', type: 'Opioid Analgesic', category: 'Pain Relief' },
  { name: 'Alprazolam', type: 'Benzodiazepine', category: 'Anxiety' },
  { name: 'Escitalopram', type: 'SSRI', category: 'Antidepressant' },
  { name: 'Fluoxetine', type: 'SSRI', category: 'Antidepressant' },
  { name: 'Pantoprazole', type: 'Proton Pump Inhibitor', category: 'Acid Reflux' },
  { name: 'Simvastatin', type: 'Statin', category: 'Cholesterol' },
  { name: 'Clopidogrel', type: 'Antiplatelet', category: 'Blood Thinner' },
  { name: 'Furosemide', type: 'Loop Diuretic', category: 'Fluid/Blood Pressure' },
  { name: 'Potassium Chloride', type: 'Electrolyte', category: 'Supplement' },
  { name: 'Vitamin D', type: 'Vitamin', category: 'Supplement' },
  { name: 'Fish Oil', type: 'Omega-3', category: 'Supplement' },
  { name: 'Magnesium', type: 'Mineral', category: 'Supplement' },
  { name: 'Duloxetine', type: 'SNRI', category: 'Antidepressant' },
  { name: 'Trazodone', type: 'Antidepressant', category: 'Sleep/Depression' },
  { name: 'Amoxicillin', type: 'Antibiotic', category: 'Infection' },
];

// Simulated drug interactions database
const interactionsDatabase = [
  {
    drugs: ['Warfarin', 'Aspirin'],
    severity: 'critical',
    description: 'Taking Warfarin with Aspirin significantly increases your risk of serious bleeding, including internal bleeding and hemorrhagic stroke. Your doctor may need to adjust dosages or monitor you more closely.'
  },
  {
    drugs: ['Warfarin', 'Ibuprofen'],
    severity: 'critical',
    description: 'Ibuprofen can increase the blood-thinning effect of Warfarin and increase risk of bleeding. Avoid this combination unless specifically directed by your doctor.'
  },
  {
    drugs: ['Lisinopril', 'Potassium Chloride'],
    severity: 'moderate',
    description: 'ACE inhibitors like Lisinopril can increase potassium levels. Taking additional potassium supplements may lead to dangerously high potassium (hyperkalemia). Regular blood tests are recommended.'
  },
  {
    drugs: ['Sertraline', 'Tramadol'],
    severity: 'critical',
    description: 'This combination increases the risk of serotonin syndrome, a potentially life-threatening condition. Symptoms include agitation, rapid heartbeat, high blood pressure, and fever. Seek immediate medical attention if these occur.'
  },
  {
    drugs: ['Fluoxetine', 'Tramadol'],
    severity: 'critical',
    description: 'High risk of serotonin syndrome when combining these medications. Both affect serotonin levels and together can cause dangerous symptoms including confusion, rapid heart rate, and muscle rigidity.'
  },
  {
    drugs: ['Metoprolol', 'Amlodipine'],
    severity: 'moderate',
    description: 'Both medications lower blood pressure and heart rate. Together they may cause excessive drops in blood pressure, dizziness, or slow heartbeat. Monitor your blood pressure regularly.'
  },
  {
    drugs: ['Omeprazole', 'Clopidogrel'],
    severity: 'moderate',
    description: 'Omeprazole may reduce the effectiveness of Clopidogrel in preventing blood clots. Consider an alternative acid reducer like famotidine if you need both medications.'
  },
  {
    drugs: ['Simvastatin', 'Amlodipine'],
    severity: 'moderate',
    description: 'Amlodipine can increase the level of Simvastatin in your blood, raising the risk of muscle problems (myopathy). Your doctor may limit your Simvastatin dose to 20mg daily.'
  },
  {
    drugs: ['Lisinopril', 'Ibuprofen'],
    severity: 'moderate',
    description: 'NSAIDs like Ibuprofen may reduce the blood pressure-lowering effect of Lisinopril and may affect kidney function. Use the lowest dose for the shortest time possible.'
  },
  {
    drugs: ['Alprazolam', 'Sertraline'],
    severity: 'minor',
    description: 'Sertraline may slightly increase levels of Alprazolam in your blood. You may feel more sedated than expected. Avoid alcohol and be cautious when driving.'
  },
  {
    drugs: ['Levothyroxine', 'Omeprazole'],
    severity: 'minor',
    description: 'Omeprazole may reduce the absorption of Levothyroxine. Take Levothyroxine at least 4 hours before or after taking Omeprazole for best effect.'
  },
  {
    drugs: ['Metformin', 'Fish Oil'],
    severity: 'minor',
    description: 'Fish oil may help improve the effectiveness of Metformin for blood sugar control. This is generally a beneficial combination, but monitor your blood sugar as usual.'
  },
  {
    drugs: ['Gabapentin', 'Alprazolam'],
    severity: 'moderate',
    description: 'Both medications can cause drowsiness and sedation. Together they may significantly impair your ability to drive or operate machinery. Avoid alcohol.'
  },
  {
    drugs: ['Prednisone', 'Ibuprofen'],
    severity: 'moderate',
    description: 'Both medications can irritate the stomach lining. Taking them together increases your risk of stomach ulcers and bleeding. Take with food and discuss stomach protection with your doctor.'
  },
  {
    drugs: ['Warfarin', 'Fish Oil'],
    severity: 'moderate',
    description: 'High doses of fish oil may enhance the blood-thinning effect of Warfarin, increasing bleeding risk. If taking both, your doctor should monitor your INR more frequently.'
  },
  {
    drugs: ['Escitalopram', 'Trazodone'],
    severity: 'moderate',
    description: 'Both medications affect serotonin levels. Together there is an increased risk of serotonin syndrome. Watch for symptoms like agitation, confusion, rapid heartbeat, and muscle twitching.'
  },
  {
    drugs: ['Duloxetine', 'Tramadol'],
    severity: 'critical',
    description: 'High risk of serotonin syndrome. Both medications significantly affect serotonin and the combination can be dangerous. Seek alternatives or very close medical monitoring.'
  }
];

// State
let selectedMedications = [];

// DOM Elements
const searchInput = document.getElementById('med-search');
const suggestionsEl = document.getElementById('suggestions');
const medListEl = document.getElementById('med-list');
const emptyStateEl = document.getElementById('empty-state');
const medCountEl = document.getElementById('med-count');
const checkBtn = document.getElementById('check-btn');
const resultsSection = document.getElementById('results-section');
const resultsContent = document.getElementById('results-content');

// Search functionality
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  
  if (query.length < 2) {
    suggestionsEl.classList.remove('active');
    return;
  }
  
  const matches = medicationDatabase.filter(med => 
    med.name.toLowerCase().includes(query) &&
    !selectedMedications.find(m => m.name === med.name)
  ).slice(0, 5);
  
  if (matches.length === 0) {
    suggestionsEl.classList.remove('active');
    return;
  }
  
  suggestionsEl.innerHTML = matches.map(med => `
    <div class="suggestion-item" data-name="${med.name}">
      <span class="suggestion-name">${highlightMatch(med.name, query)}</span>
      <span class="suggestion-type">${med.category}</span>
    </div>
  `).join('');
  
  suggestionsEl.classList.add('active');
});

// Highlight matching text
function highlightMatch(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<strong>$1</strong>');
}

// Handle suggestion click
suggestionsEl.addEventListener('click', (e) => {
  const item = e.target.closest('.suggestion-item');
  if (!item) return;
  
  const medName = item.dataset.name;
  const med = medicationDatabase.find(m => m.name === medName);
  
  if (med) {
    addMedication(med);
  }
});

// Close suggestions on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container')) {
    suggestionsEl.classList.remove('active');
  }
});

// Add medication to list
function addMedication(med) {
  selectedMedications.push(med);
  searchInput.value = '';
  suggestionsEl.classList.remove('active');
  resultsSection.classList.remove('active');
  updateMedList();
}

// Remove medication from list
function removeMedication(name) {
  selectedMedications = selectedMedications.filter(m => m.name !== name);
  resultsSection.classList.remove('active');
  updateMedList();
}

// Update medication list display
function updateMedList() {
  const count = selectedMedications.length;
  medCountEl.textContent = count;
  checkBtn.disabled = count < 2;
  
  if (count === 0) {
    emptyStateEl.style.display = 'block';
    medListEl.querySelectorAll('.med-item').forEach(el => el.remove());
    return;
  }
  
  emptyStateEl.style.display = 'none';
  
  // Clear existing items except empty state
  medListEl.querySelectorAll('.med-item').forEach(el => el.remove());
  
  // Add medication items
  selectedMedications.forEach(med => {
    const item = document.createElement('div');
    item.className = 'med-item';
    item.innerHTML = `
      <div class="med-info">
        <div class="med-icon">💊</div>
        <div class="med-details">
          <h4>${med.name}</h4>
          <p>${med.type} • ${med.category}</p>
        </div>
      </div>
      <button class="remove-btn" onclick="removeMedication('${med.name}')" aria-label="Remove ${med.name}">
        ✕
      </button>
    `;
    medListEl.appendChild(item);
  });
}

// Check for interactions
checkBtn.addEventListener('click', () => {
  // Show loading state
  resultsSection.classList.add('active');
  resultsContent.innerHTML = `
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Checking for interactions...</p>
    </div>
  `;
  
  // Simulate API delay
  setTimeout(() => {
    const interactions = findInteractions();
    displayResults(interactions);
  }, 1200);
});

// Find interactions between selected medications
function findInteractions() {
  const found = [];
  const medNames = selectedMedications.map(m => m.name);
  
  interactionsDatabase.forEach(interaction => {
    const [drug1, drug2] = interaction.drugs;
    if (medNames.includes(drug1) && medNames.includes(drug2)) {
      found.push(interaction);
    }
  });
  
  // Sort by severity
  const severityOrder = { critical: 0, moderate: 1, minor: 2 };
  found.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);
  
  return found;
}

// Display interaction results
function displayResults(interactions) {
  if (interactions.length === 0) {
    resultsContent.innerHTML = `
      <div class="safe-result">
        <div class="safe-icon">✅</div>
        <h3>No Known Interactions Found</h3>
        <p>Based on our database, your medications appear to be safe to take together. However, always consult your doctor or pharmacist for personalized advice.</p>
      </div>
    `;
    return;
  }
  
  const criticalCount = interactions.filter(i => i.severity === 'critical').length;
  const moderateCount = interactions.filter(i => i.severity === 'moderate').length;
  const minorCount = interactions.filter(i => i.severity === 'minor').length;
  
  let summary = '<div style="margin-bottom: var(--space-4);">';
  if (criticalCount > 0) {
    summary += `<span style="color: var(--color-critical); font-weight: 600;">⚠️ ${criticalCount} Critical</span> `;
  }
  if (moderateCount > 0) {
    summary += `<span style="color: var(--color-moderate); font-weight: 600;">⚡ ${moderateCount} Moderate</span> `;
  }
  if (minorCount > 0) {
    summary += `<span style="color: var(--color-minor); font-weight: 600;">💡 ${minorCount} Minor</span>`;
  }
  summary += '</div>';
  
  const cards = interactions.map(interaction => `
    <div class="interaction-card ${interaction.severity}">
      <div class="interaction-header">
        <span class="severity-badge ${interaction.severity}">${getSeverityLabel(interaction.severity)}</span>
        <span class="interaction-drugs">${interaction.drugs.join(' + ')}</span>
      </div>
      <p class="interaction-description">${interaction.description}</p>
    </div>
  `).join('');
  
  resultsContent.innerHTML = summary + '<div class="interactions-grid">' + cards + '</div>';
}

// Get severity label with emoji
function getSeverityLabel(severity) {
  switch (severity) {
    case 'critical': return '🔴 Critical';
    case 'moderate': return '🟠 Moderate';
    case 'minor': return '🟡 Minor';
    default: return severity;
  }
}

// Keyboard navigation for suggestions
searchInput.addEventListener('keydown', (e) => {
  const items = suggestionsEl.querySelectorAll('.suggestion-item');
  const active = suggestionsEl.querySelector('.suggestion-item:hover, .suggestion-item:focus');
  
  if (e.key === 'Escape') {
    suggestionsEl.classList.remove('active');
    searchInput.blur();
  }
  
  if (e.key === 'Enter' && items.length > 0) {
    e.preventDefault();
    const first = items[0];
    const medName = first.dataset.name;
    const med = medicationDatabase.find(m => m.name === medName);
    if (med) addMedication(med);
  }
});

// Make removeMedication available globally
window.removeMedication = removeMedication;

// Initialize
updateMedList();

// Add demo medications for showcase
function loadDemo() {
  const demoMeds = [
    medicationDatabase.find(m => m.name === 'Warfarin'),
    medicationDatabase.find(m => m.name === 'Aspirin'),
    medicationDatabase.find(m => m.name === 'Lisinopril'),
  ].filter(Boolean);
  
  demoMeds.forEach(med => {
    if (!selectedMedications.find(m => m.name === med.name)) {
      selectedMedications.push(med);
    }
  });
  
  updateMedList();
}

// Uncomment to auto-load demo:
// loadDemo();
