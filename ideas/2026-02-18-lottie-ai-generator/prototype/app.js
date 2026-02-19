// LottieForge Prototype - Interactive Demo

// Sample Lottie animations (embedded JSON for demo)
const sampleAnimations = {
  loadingDots: {
    v: "5.7.0",
    fr: 60,
    ip: 0,
    op: 60,
    w: 200,
    h: 200,
    nm: "Loading Dots",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Dot 1",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { t: 0, s: [60, 100, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              { t: 15, s: [60, 70, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              { t: 30, s: [60, 100, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              { t: 60, s: [60, 100, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        shapes: [
          {
            ty: "el",
            s: { a: 0, k: [20, 20] },
            p: { a: 0, k: [0, 0] },
            nm: "Circle"
          },
          {
            ty: "fl",
            c: { a: 0, k: [0.231, 0.51, 0.965, 1] },
            o: { a: 0, k: 100 },
            nm: "Fill"
          }
        ]
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Dot 2",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { t: 10, s: [100, 100, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              { t: 25, s: [100, 70, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              { t: 40, s: [100, 100, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              { t: 60, s: [100, 100, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        shapes: [
          {
            ty: "el",
            s: { a: 0, k: [20, 20] },
            p: { a: 0, k: [0, 0] },
            nm: "Circle"
          },
          {
            ty: "fl",
            c: { a: 0, k: [0.376, 0.647, 0.98, 1] },
            o: { a: 0, k: 100 },
            nm: "Fill"
          }
        ]
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Dot 3",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: {
            a: 1,
            k: [
              { t: 20, s: [140, 100, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              { t: 35, s: [140, 70, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              { t: 50, s: [140, 100, 0], i: { x: 0.5, y: 1 }, o: { x: 0.5, y: 0 } },
              { t: 60, s: [140, 100, 0] }
            ]
          },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        shapes: [
          {
            ty: "el",
            s: { a: 0, k: [20, 20] },
            p: { a: 0, k: [0, 0] },
            nm: "Circle"
          },
          {
            ty: "fl",
            c: { a: 0, k: [0.545, 0.361, 0.965, 1] },
            o: { a: 0, k: 100 },
            nm: "Fill"
          }
        ]
      }
    ]
  },
  heartPulse: {
    v: "5.7.0",
    fr: 60,
    ip: 0,
    op: 60,
    w: 200,
    h: 200,
    nm: "Heart Pulse",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Heart",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: {
            a: 1,
            k: [
              { t: 0, s: [100, 100, 100], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
              { t: 15, s: [120, 120, 100], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
              { t: 30, s: [100, 100, 100], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
              { t: 45, s: [115, 115, 100], i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] } },
              { t: 60, s: [100, 100, 100] }
            ]
          }
        },
        shapes: [
          {
            ty: "sh",
            ks: {
              a: 0,
              k: {
                c: true,
                v: [[0, -20], [-40, -40], [-40, 0], [0, 40], [40, 0], [40, -40]],
                i: [[0, 0], [-20, 0], [0, 20], [20, 0], [0, -20], [20, 0]],
                o: [[0, 0], [-20, 0], [0, 20], [20, 0], [0, -20], [20, 0]]
              }
            },
            nm: "Heart Path"
          },
          {
            ty: "fl",
            c: { a: 0, k: [0.937, 0.267, 0.267, 1] },
            o: { a: 0, k: 100 },
            nm: "Fill"
          }
        ]
      }
    ]
  },
  checkmark: {
    v: "5.7.0",
    fr: 60,
    ip: 0,
    op: 45,
    w: 200,
    h: 200,
    nm: "Checkmark",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Check",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        shapes: [
          {
            ty: "sh",
            ks: {
              a: 0,
              k: {
                c: false,
                v: [[-30, 0], [-10, 20], [30, -20]],
                i: [[0, 0], [0, 0], [0, 0]],
                o: [[0, 0], [0, 0], [0, 0]]
              }
            },
            nm: "Check Path"
          },
          {
            ty: "st",
            c: { a: 0, k: [0.063, 0.725, 0.506, 1] },
            o: { a: 0, k: 100 },
            w: { a: 0, k: 8 },
            lc: 2,
            lj: 2,
            nm: "Stroke"
          },
          {
            ty: "tm",
            s: { a: 0, k: 0 },
            e: {
              a: 1,
              k: [
                { t: 0, s: [0], i: { x: [0.3], y: [1] }, o: { x: [0.7], y: [0] } },
                { t: 30, s: [100] }
              ]
            },
            o: { a: 0, k: 0 },
            nm: "Trim"
          }
        ]
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Circle",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        shapes: [
          {
            ty: "el",
            s: { a: 0, k: [80, 80] },
            p: { a: 0, k: [0, 0] },
            nm: "Circle"
          },
          {
            ty: "st",
            c: { a: 0, k: [0.063, 0.725, 0.506, 1] },
            o: { a: 0, k: 100 },
            w: { a: 0, k: 4 },
            nm: "Stroke"
          },
          {
            ty: "tm",
            s: { a: 0, k: 0 },
            e: {
              a: 1,
              k: [
                { t: 0, s: [0], i: { x: [0.3], y: [1] }, o: { x: [0.7], y: [0] } },
                { t: 20, s: [100] }
              ]
            },
            o: { a: 0, k: 0 },
            nm: "Trim"
          }
        ]
      }
    ]
  },
  spinningGear: {
    v: "5.7.0",
    fr: 60,
    ip: 0,
    op: 60,
    w: 200,
    h: 200,
    nm: "Spinning Gear",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Gear",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { t: 0, s: [0], i: { x: [0.5], y: [0.5] }, o: { x: [0.5], y: [0.5] } },
              { t: 60, s: [360] }
            ]
          },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        shapes: [
          {
            ty: "sr",
            sy: 1,
            d: 1,
            pt: { a: 0, k: 8 },
            p: { a: 0, k: [0, 0] },
            r: { a: 0, k: 0 },
            ir: { a: 0, k: 25 },
            is: { a: 0, k: 0 },
            or: { a: 0, k: 40 },
            os: { a: 0, k: 0 },
            nm: "Gear Shape"
          },
          {
            ty: "fl",
            c: { a: 0, k: [0.545, 0.361, 0.965, 1] },
            o: { a: 0, k: 100 },
            nm: "Fill"
          },
          {
            ty: "el",
            s: { a: 0, k: [20, 20] },
            p: { a: 0, k: [0, 0] },
            nm: "Center Hole"
          },
          {
            ty: "fl",
            c: { a: 0, k: [0.059, 0.059, 0.102, 1] },
            o: { a: 0, k: 100 },
            nm: "Hole Fill"
          }
        ]
      }
    ]
  }
};

// Map prompts to animations
const promptToAnimation = {
  'loading': 'loadingDots',
  'dots': 'loadingDots',
  'spinner': 'loadingDots',
  'bouncing': 'loadingDots',
  'heart': 'heartPulse',
  'pulse': 'heartPulse',
  'love': 'heartPulse',
  'check': 'checkmark',
  'checkmark': 'checkmark',
  'success': 'checkmark',
  'done': 'checkmark',
  'gear': 'spinningGear',
  'spinning': 'spinningGear',
  'rotate': 'spinningGear',
  'cog': 'spinningGear',
  'settings': 'spinningGear'
};

// State
let credits = 7;
let currentAnimation = null;
let lottieInstance = null;
let isPlaying = true;

// DOM Elements
const elements = {
  // Tabs
  tabBtns: document.querySelectorAll('.tab-btn'),
  promptTab: document.getElementById('promptTab'),
  uploadTab: document.getElementById('uploadTab'),
  
  // Input
  promptInput: document.getElementById('promptInput'),
  suggestionChips: document.querySelectorAll('.suggestion-chip'),
  generateBtn: document.getElementById('generateBtn'),
  
  // Upload
  uploadZone: document.getElementById('uploadZone'),
  fileInput: document.getElementById('fileInput'),
  previewImage: document.getElementById('previewImage'),
  uploadPreview: document.getElementById('uploadPreview'),
  removeUpload: document.getElementById('removeUpload'),
  animationSuggestions: document.getElementById('animationSuggestions'),
  
  // Style
  styleBtns: document.querySelectorAll('.style-btn'),
  durationSlider: document.getElementById('durationSlider'),
  durationValue: document.getElementById('durationValue'),
  loopToggle: document.getElementById('loopToggle'),
  
  // Preview
  previewSection: document.getElementById('previewSection'),
  previewCanvas: document.getElementById('previewCanvas'),
  lottiePlayer: document.getElementById('lottiePlayer'),
  generationProgress: document.getElementById('generationProgress'),
  playPauseBtn: document.getElementById('playPauseBtn'),
  restartBtn: document.getElementById('restartBtn'),
  
  // Customization
  customizationPanel: document.getElementById('customizationPanel'),
  primaryColor: document.getElementById('primaryColor'),
  secondaryColor: document.getElementById('secondaryColor'),
  speedSlider: document.getElementById('speedSlider'),
  easingSelect: document.getElementById('easingSelect'),
  
  // Export
  exportOptions: document.getElementById('exportOptions'),
  downloadLottie: document.getElementById('downloadLottie'),
  downloadGif: document.getElementById('downloadGif'),
  copyCode: document.getElementById('copyCode'),
  
  // Credits
  creditsCount: document.getElementById('creditsCount'),
  buyCreditsBtn: document.querySelector('.buy-credits-btn'),
  
  // Modal
  pricingModal: document.getElementById('pricingModal'),
  closePricing: document.getElementById('closePricing'),
  
  // Toasts
  successToast: document.getElementById('successToast'),
  downloadToast: document.getElementById('downloadToast')
};

// Initialize
function init() {
  setupTabs();
  setupPromptInput();
  setupUpload();
  setupStyleOptions();
  setupGenerate();
  setupPreviewControls();
  setupExport();
  setupPricing();
}

// Tab Switching
function setupTabs() {
  elements.tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const tab = btn.dataset.tab;
      elements.promptTab.classList.toggle('active', tab === 'prompt');
      elements.uploadTab.classList.toggle('active', tab === 'upload');
    });
  });
}

// Prompt Input
function setupPromptInput() {
  elements.suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      elements.promptInput.value = chip.dataset.prompt;
      elements.promptInput.focus();
    });
  });
}

// File Upload
function setupUpload() {
  elements.uploadZone.addEventListener('click', () => {
    elements.fileInput.click();
  });
  
  elements.uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    elements.uploadZone.classList.add('drag-over');
  });
  
  elements.uploadZone.addEventListener('dragleave', () => {
    elements.uploadZone.classList.remove('drag-over');
  });
  
  elements.uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    elements.uploadZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  });
  
  elements.fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  });
  
  elements.removeUpload.addEventListener('click', (e) => {
    e.stopPropagation();
    clearUpload();
  });
}

function handleFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    elements.previewImage.src = e.target.result;
    elements.uploadZone.classList.add('has-file');
    elements.animationSuggestions.classList.add('visible');
  };
  reader.readAsDataURL(file);
}

function clearUpload() {
  elements.fileInput.value = '';
  elements.previewImage.src = '';
  elements.uploadZone.classList.remove('has-file');
  elements.animationSuggestions.classList.remove('visible');
}

// Style Options
function setupStyleOptions() {
  elements.styleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.styleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  
  elements.durationSlider.addEventListener('input', () => {
    elements.durationValue.textContent = `${elements.durationSlider.value}s`;
  });
  
  elements.loopToggle.addEventListener('click', () => {
    elements.loopToggle.classList.toggle('active');
    if (lottieInstance) {
      lottieInstance.loop = elements.loopToggle.classList.contains('active');
    }
  });
}

// Generate Animation
function setupGenerate() {
  elements.generateBtn.addEventListener('click', generate);
  
  // Animation suggestion buttons
  document.querySelectorAll('.anim-suggestion').forEach(btn => {
    btn.addEventListener('click', () => {
      generate();
    });
  });
}

function generate() {
  if (credits <= 0) {
    elements.pricingModal.classList.add('visible');
    return;
  }
  
  // Get prompt or use default for upload
  const prompt = elements.promptInput.value.toLowerCase() || 'loading';
  
  // Show progress
  elements.generationProgress.classList.add('visible');
  elements.lottiePlayer.classList.remove('visible');
  
  // Simulate generation steps
  const steps = elements.generationProgress.querySelectorAll('.progress-step');
  let currentStep = 0;
  
  const stepInterval = setInterval(() => {
    if (currentStep > 0) {
      steps[currentStep - 1].classList.remove('active');
      steps[currentStep - 1].classList.add('complete');
      steps[currentStep - 1].querySelector('.step-check').textContent = '✓';
    }
    
    if (currentStep < steps.length) {
      steps[currentStep].classList.add('active');
      currentStep++;
    } else {
      clearInterval(stepInterval);
      completeGeneration(prompt);
    }
  }, 600);
}

function completeGeneration(prompt) {
  // Find matching animation
  let animationKey = 'loadingDots'; // default
  for (const [keyword, key] of Object.entries(promptToAnimation)) {
    if (prompt.includes(keyword)) {
      animationKey = key;
      break;
    }
  }
  
  currentAnimation = sampleAnimations[animationKey];
  
  // Hide progress, show animation
  elements.generationProgress.classList.remove('visible');
  elements.generationProgress.querySelectorAll('.progress-step').forEach(step => {
    step.classList.remove('active', 'complete');
    step.querySelector('.step-check').textContent = '○';
  });
  
  // Play animation
  playAnimation(currentAnimation);
  
  // Show UI elements
  elements.customizationPanel.classList.add('visible');
  elements.exportOptions.classList.add('visible');
  elements.lottiePlayer.classList.add('visible');
  
  // Update credits
  credits--;
  elements.creditsCount.textContent = credits;
  
  // Show success toast
  showToast(elements.successToast);
}

function playAnimation(animData) {
  if (lottieInstance) {
    lottieInstance.destroy();
  }
  
  elements.lottiePlayer.innerHTML = '';
  
  lottieInstance = lottie.loadAnimation({
    container: elements.lottiePlayer,
    renderer: 'svg',
    loop: elements.loopToggle.classList.contains('active'),
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animData))
  });
  
  isPlaying = true;
  elements.playPauseBtn.textContent = '⏸️';
}

// Preview Controls
function setupPreviewControls() {
  elements.playPauseBtn.addEventListener('click', () => {
    if (!lottieInstance) return;
    
    if (isPlaying) {
      lottieInstance.pause();
      elements.playPauseBtn.textContent = '▶️';
    } else {
      lottieInstance.play();
      elements.playPauseBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
  });
  
  elements.restartBtn.addEventListener('click', () => {
    if (!lottieInstance) return;
    lottieInstance.goToAndPlay(0);
    isPlaying = true;
    elements.playPauseBtn.textContent = '⏸️';
  });
  
  // Speed slider
  elements.speedSlider.addEventListener('input', () => {
    if (lottieInstance) {
      lottieInstance.setSpeed(parseFloat(elements.speedSlider.value));
    }
  });
}

// Export
function setupExport() {
  elements.downloadLottie.addEventListener('click', () => {
    if (!currentAnimation) return;
    
    const blob = new Blob([JSON.stringify(currentAnimation, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'animation.json';
    a.click();
    URL.revokeObjectURL(url);
    
    showToast(elements.downloadToast);
  });
  
  elements.downloadGif.addEventListener('click', () => {
    alert('GIF export would be implemented with gif.js or similar library');
  });
  
  elements.copyCode.addEventListener('click', () => {
    const code = `<script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"></script>
<div id="lottie"></div>
<script>
  lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation.json'
  });
</script>`;
    
    navigator.clipboard.writeText(code).then(() => {
      const originalText = elements.copyCode.innerHTML;
      elements.copyCode.innerHTML = '<span class="export-icon">✅</span>Copied!';
      setTimeout(() => {
        elements.copyCode.innerHTML = originalText;
      }, 2000);
    });
  });
}

// Pricing Modal
function setupPricing() {
  elements.buyCreditsBtn.addEventListener('click', () => {
    elements.pricingModal.classList.add('visible');
  });
  
  elements.closePricing.addEventListener('click', () => {
    elements.pricingModal.classList.remove('visible');
  });
  
  elements.pricingModal.addEventListener('click', (e) => {
    if (e.target === elements.pricingModal) {
      elements.pricingModal.classList.remove('visible');
    }
  });
  
  // Handle pricing button clicks
  document.querySelectorAll('.pricing-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Simulate purchase
      const card = btn.closest('.pricing-card');
      const amount = card.querySelector('.credits-amount').textContent;
      const match = amount.match(/(\d+)/);
      if (match) {
        credits += parseInt(match[1]);
        elements.creditsCount.textContent = credits;
      }
      elements.pricingModal.classList.remove('visible');
      
      // Show confirmation
      elements.successToast.querySelector('.toast-text').textContent = `Credits added! You now have ${credits} credits.`;
      showToast(elements.successToast);
      
      // Reset toast text
      setTimeout(() => {
        elements.successToast.querySelector('.toast-text').textContent = 'Animation generated! 1 credit used.';
      }, 3000);
    });
  });
}

// Toast Helper
function showToast(toast) {
  toast.classList.add('visible');
  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
