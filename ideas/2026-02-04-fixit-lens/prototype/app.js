/**
 * FixIt Lens - Interactive Prototype
 * AI-powered appliance troubleshooter
 */

// State management
const state = {
  selectedAppliance: null,
  uploadedImage: null,
  selectedSymptoms: [],
  currentStep: 'upload'
};

// Symptom data by appliance type
const symptoms = {
  refrigerator: [
    { id: 'not-cooling', icon: '🌡️', text: 'Not cooling properly' },
    { id: 'ice-maker', icon: '🧊', text: 'Ice maker not working' },
    { id: 'leaking', icon: '💧', text: 'Leaking water' },
    { id: 'loud-noise', icon: '🔊', text: 'Making loud noises' },
    { id: 'frost-buildup', icon: '❄️', text: 'Frost buildup in freezer' },
    { id: 'not-running', icon: '⚡', text: "Won't turn on" },
    { id: 'light-out', icon: '💡', text: 'Interior light not working' },
    { id: 'door-seal', icon: '🚪', text: 'Door not sealing properly' }
  ],
  washer: [
    { id: 'not-spinning', icon: '🔄', text: 'Not spinning' },
    { id: 'not-draining', icon: '💧', text: 'Not draining' },
    { id: 'leaking', icon: '🌊', text: 'Leaking water' },
    { id: 'loud-noise', icon: '🔊', text: 'Making loud noises' },
    { id: 'not-filling', icon: '🚿', text: 'Not filling with water' },
    { id: 'error-code', icon: '⚠️', text: 'Displaying error code' },
    { id: 'smell', icon: '👃', text: 'Bad smell inside' },
    { id: 'not-starting', icon: '⚡', text: "Won't start" }
  ],
  dryer: [
    { id: 'not-heating', icon: '🔥', text: 'Not heating' },
    { id: 'not-tumbling', icon: '🔄', text: 'Not tumbling' },
    { id: 'takes-long', icon: '⏱️', text: 'Takes too long to dry' },
    { id: 'loud-noise', icon: '🔊', text: 'Making loud noises' },
    { id: 'not-starting', icon: '⚡', text: "Won't turn on" },
    { id: 'hot-outside', icon: '🌡️', text: 'Gets very hot outside' },
    { id: 'burning-smell', icon: '💨', text: 'Burning smell' },
    { id: 'error-code', icon: '⚠️', text: 'Displaying error code' }
  ],
  dishwasher: [
    { id: 'not-cleaning', icon: '🍽️', text: 'Dishes not coming out clean' },
    { id: 'not-draining', icon: '💧', text: 'Not draining' },
    { id: 'not-filling', icon: '🚿', text: 'Not filling with water' },
    { id: 'leaking', icon: '🌊', text: 'Leaking water' },
    { id: 'not-starting', icon: '⚡', text: "Won't start" },
    { id: 'bad-smell', icon: '👃', text: 'Bad smell' },
    { id: 'not-drying', icon: '💨', text: 'Dishes not drying' },
    { id: 'loud-noise', icon: '🔊', text: 'Making unusual noises' }
  ],
  oven: [
    { id: 'not-heating', icon: '🔥', text: 'Not heating up' },
    { id: 'uneven-heat', icon: '🌡️', text: 'Uneven heating' },
    { id: 'not-igniting', icon: '💥', text: 'Gas burner not igniting' },
    { id: 'self-clean-fail', icon: '🧹', text: 'Self-clean not working' },
    { id: 'display-issue', icon: '📺', text: 'Display not working' },
    { id: 'door-not-closing', icon: '🚪', text: 'Door not closing properly' },
    { id: 'fan-issue', icon: '🌀', text: 'Convection fan not working' },
    { id: 'error-code', icon: '⚠️', text: 'Displaying error code' }
  ],
  microwave: [
    { id: 'not-heating', icon: '🔥', text: 'Not heating food' },
    { id: 'sparking', icon: '⚡', text: 'Sparking inside' },
    { id: 'turntable', icon: '🔄', text: 'Turntable not spinning' },
    { id: 'display-issue', icon: '📺', text: 'Display not working' },
    { id: 'door-issue', icon: '🚪', text: "Door won't close/open" },
    { id: 'buttons', icon: '🔘', text: 'Buttons not responding' },
    { id: 'loud-noise', icon: '🔊', text: 'Making unusual noises' },
    { id: 'light-out', icon: '💡', text: 'Interior light not working' }
  ]
};

// Appliance display names
const applianceNames = {
  refrigerator: '🧊 Refrigerator',
  washer: '🧺 Washing Machine',
  dryer: '🌀 Dryer',
  dishwasher: '🍽️ Dishwasher',
  oven: '🔥 Oven/Range',
  microwave: '📻 Microwave'
};

// DOM Elements
const modal = document.getElementById('diagnosis-modal');
const uploadZone = document.getElementById('upload-zone');
const fileInput = document.getElementById('file-input');
const previewZone = document.getElementById('preview-zone');
const previewImage = document.getElementById('preview-image');
const nextBtn = document.getElementById('next-to-symptoms');
const analyzeBtn = document.getElementById('analyze-btn');
const symptomsGrid = document.getElementById('symptoms-grid');
const applianceContext = document.getElementById('appliance-context');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setupUploadZone();
  setupChipButtons();
});

// Upload zone functionality
function setupUploadZone() {
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
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file);
    }
  });
  
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  });
}

function handleImageUpload(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    state.uploadedImage = e.target.result;
    previewImage.src = e.target.result;
    uploadZone.classList.add('hidden');
    previewZone.classList.remove('hidden');
    updateNextButton();
  };
  reader.readAsDataURL(file);
}

function clearUpload() {
  state.uploadedImage = null;
  fileInput.value = '';
  uploadZone.classList.remove('hidden');
  previewZone.classList.add('hidden');
  updateNextButton();
}

// Appliance chip buttons
function setupChipButtons() {
  document.querySelectorAll('.appliance-chips .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const appliance = chip.getAttribute('onclick').match(/'(\w+)'/)[1];
      selectAppliance(appliance);
    });
  });
}

function selectAppliance(appliance) {
  state.selectedAppliance = appliance;
  
  // Update chip styles
  document.querySelectorAll('.appliance-chips .chip').forEach(chip => {
    chip.classList.remove('selected');
    if (chip.textContent.toLowerCase().includes(appliance.substring(0, 4))) {
      chip.classList.add('selected');
    }
  });
  
  updateNextButton();
}

function updateNextButton() {
  const canProceed = state.uploadedImage || state.selectedAppliance;
  nextBtn.disabled = !canProceed;
}

// Modal functions
function openDiagnosis() {
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDiagnosis() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  startOver();
}

// Navigation between steps
function goToSymptoms() {
  // Set default appliance if only image was uploaded
  if (!state.selectedAppliance && state.uploadedImage) {
    state.selectedAppliance = 'refrigerator'; // Default for demo
  }
  
  // Populate symptoms grid
  populateSymptoms();
  
  // Switch steps
  document.getElementById('step-upload').classList.remove('active');
  document.getElementById('step-symptoms').classList.add('active');
  state.currentStep = 'symptoms';
}

function goToUpload() {
  document.getElementById('step-symptoms').classList.remove('active');
  document.getElementById('step-upload').classList.add('active');
  state.currentStep = 'upload';
}

function populateSymptoms() {
  const applianceSymptoms = symptoms[state.selectedAppliance] || symptoms.refrigerator;
  applianceContext.textContent = `Select symptoms for your ${applianceNames[state.selectedAppliance] || 'appliance'}`;
  
  symptomsGrid.innerHTML = applianceSymptoms.map(symptom => `
    <button class="symptom-btn" data-id="${symptom.id}" onclick="toggleSymptom('${symptom.id}')">
      <span class="symptom-icon">${symptom.icon}</span>
      <span class="symptom-text">${symptom.text}</span>
    </button>
  `).join('');
}

function toggleSymptom(symptomId) {
  const btn = document.querySelector(`[data-id="${symptomId}"]`);
  const index = state.selectedSymptoms.indexOf(symptomId);
  
  if (index === -1) {
    state.selectedSymptoms.push(symptomId);
    btn.classList.add('selected');
  } else {
    state.selectedSymptoms.splice(index, 1);
    btn.classList.remove('selected');
  }
  
  analyzeBtn.disabled = state.selectedSymptoms.length === 0;
}

function runDiagnosis() {
  // Show loading state
  document.getElementById('step-symptoms').classList.remove('active');
  document.getElementById('step-loading').classList.add('active');
  
  // Simulate API call
  const loadingStatuses = [
    'Identifying model and symptoms',
    'Analyzing common issues',
    'Generating repair guide',
    'Finding replacement parts'
  ];
  
  let statusIndex = 0;
  const statusEl = document.querySelector('.loading-status');
  
  const statusInterval = setInterval(() => {
    statusIndex++;
    if (statusIndex < loadingStatuses.length) {
      statusEl.textContent = loadingStatuses[statusIndex];
    }
  }, 600);
  
  // Show results after "analysis"
  setTimeout(() => {
    clearInterval(statusInterval);
    document.getElementById('step-loading').classList.remove('active');
    document.getElementById('step-results').classList.add('active');
    state.currentStep = 'results';
    setupStepCheckboxes();
  }, 2500);
}

function setupStepCheckboxes() {
  document.querySelectorAll('.step-item').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('completed');
    });
  });
}

function startOver() {
  // Reset state
  state.selectedAppliance = null;
  state.uploadedImage = null;
  state.selectedSymptoms = [];
  state.currentStep = 'upload';
  
  // Reset UI
  clearUpload();
  document.querySelectorAll('.appliance-chips .chip').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.diagnosis-step').forEach(s => s.classList.remove('active'));
  document.getElementById('step-upload').classList.add('active');
  nextBtn.disabled = true;
  analyzeBtn.disabled = true;
  
  // Clear textarea
  const textarea = document.getElementById('extra-details');
  if (textarea) textarea.value = '';
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    closeDiagnosis();
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Expose functions to global scope for onclick handlers
window.openDiagnosis = openDiagnosis;
window.closeDiagnosis = closeDiagnosis;
window.selectAppliance = selectAppliance;
window.clearUpload = clearUpload;
window.goToSymptoms = goToSymptoms;
window.goToUpload = goToUpload;
window.toggleSymptom = toggleSymptom;
window.runDiagnosis = runDiagnosis;
window.startOver = startOver;
