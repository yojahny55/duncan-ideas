// ContextPort - AI Memory Migration Tool
// Interactive Prototype

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // State
  let currentStep = 1;
  let selectedSource = null;
  
  // Elements
  const steps = document.querySelectorAll('.step');
  const stepPanels = {
    1: document.getElementById('step1'),
    2: document.getElementById('step2'),
    3: document.getElementById('step3')
  };
  const sourceCards = document.querySelectorAll('.source-card');
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('fileInput');
  const exportCards = document.querySelectorAll('.export-card');
  
  // Source selection
  sourceCards.forEach(card => {
    card.addEventListener('click', () => {
      sourceCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedSource = card.dataset.source;
    });
  });
  
  // File upload
  uploadArea.addEventListener('click', () => fileInput.click());
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
  });
  uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
  });
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    handleFile(e.dataTransfer.files[0]);
  });
  fileInput.addEventListener('change', (e) => {
    if (e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  });
  
  // Export cards
  exportCards.forEach(card => {
    card.addEventListener('click', () => {
      showSuccessModal(card.dataset.target);
    });
  });
  
  // Handle file upload
  function handleFile(file) {
    if (!file) return;
    
    // Show analysis step
    goToStep(2);
    runAnalysis();
  }
  
  // Go to step
  function goToStep(step) {
    currentStep = step;
    
    // Update step indicators
    steps.forEach((s, i) => {
      const stepNum = i + 1;
      s.classList.remove('active', 'completed');
      if (stepNum < step) {
        s.classList.add('completed');
      } else if (stepNum === step) {
        s.classList.add('active');
      }
    });
    
    // Show correct panel
    Object.values(stepPanels).forEach(p => p.classList.add('hidden'));
    stepPanels[step].classList.remove('hidden');
  }
  
  // Run analysis animation
  function runAnalysis() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressLabel = document.getElementById('progressLabel');
    const extractedItems = document.getElementById('extractedItems');
    
    const phases = [
      { label: 'Parsing conversations...', items: ['Name: Alex Chen', 'Role: Software Engineer'] },
      { label: 'Extracting preferences...', items: ['Prefers concise responses', 'Code examples'] },
      { label: 'Analyzing tech stack...', items: ['TypeScript', 'React', 'Node.js'] },
      { label: 'Building profile...', items: ['847 conversations', '234 code reviews'] }
    ];
    
    let progress = 0;
    let phaseIndex = 0;
    
    extractedItems.innerHTML = '';
    
    const interval = setInterval(() => {
      progress += 2;
      
      // Update progress ring
      const offset = 283 - (283 * progress / 100);
      progressBar.style.strokeDashoffset = offset;
      progressText.textContent = `${Math.min(progress, 100)}%`;
      
      // Update phase
      const targetPhase = Math.floor(progress / 25);
      if (targetPhase !== phaseIndex && targetPhase < phases.length) {
        phaseIndex = targetPhase;
        progressLabel.textContent = phases[phaseIndex].label;
        
        // Add extracted items
        phases[phaseIndex].items.forEach((item, i) => {
          setTimeout(() => {
            const div = document.createElement('div');
            div.className = 'extracted-item';
            div.innerHTML = `
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              <span>${item}</span>
            `;
            extractedItems.appendChild(div);
          }, i * 200);
        });
      }
      
      if (progress >= 100) {
        clearInterval(interval);
        progressLabel.textContent = 'Analysis complete!';
        
        // Go to export step after delay
        setTimeout(() => goToStep(3), 1000);
      }
    }, 50);
  }
  
  // Show success modal
  window.showSuccessModal = function(target) {
    const modal = document.getElementById('successModal');
    const onboardingPrompt = document.getElementById('onboardingPrompt');
    
    // Customize prompt based on target
    const prompts = {
      claude: `I'm Alex, a Senior Software Engineer in San Francisco. I prefer concise, technical responses with code examples. My stack: TypeScript, React, Node.js, PostgreSQL, AWS. I value step-by-step explanations and direct answers without fluff. Please maintain context from our conversations.`,
      chatgpt: `Profile: Alex Chen, Senior Software Engineer (SF)
Tech Stack: TypeScript, React, Node.js, PostgreSQL, AWS, Docker
Preferences: Concise, technical, code examples, no fluff
Communication: Direct, step-by-step when explaining concepts`,
      markdown: `# My AI Profile

## About Me
- Name: Alex Chen
- Role: Senior Software Engineer
- Location: San Francisco, CA

## Preferences
- Concise, technical responses
- Include code examples
- Step-by-step explanations

## Tech Stack
TypeScript, React, Node.js, PostgreSQL, AWS, Docker, GraphQL`,
      json: `{
  "name": "Alex Chen",
  "role": "Senior Software Engineer",
  "preferences": ["concise", "technical", "code_examples"],
  "tech_stack": ["TypeScript", "React", "Node.js"]
}`
    };
    
    onboardingPrompt.textContent = prompts[target] || prompts.claude;
    modal.classList.remove('hidden');
  };
  
  // Close modal
  window.closeModal = function() {
    document.getElementById('successModal').classList.add('hidden');
  };
  
  // Copy prompt
  window.copyPrompt = function() {
    const prompt = document.getElementById('onboardingPrompt').textContent;
    navigator.clipboard.writeText(prompt).then(() => {
      const btn = document.querySelector('.modal-actions .btn-primary');
      const original = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = original, 2000);
    });
  };
  
  // Demo: Auto-select ChatGPT and simulate file upload on logo click
  document.querySelector('.logo').addEventListener('dblclick', () => {
    const chatgptCard = document.querySelector('[data-source="chatgpt"]');
    chatgptCard.classList.add('selected');
    selectedSource = 'chatgpt';
    
    setTimeout(() => {
      goToStep(2);
      runAnalysis();
    }, 500);
  });
}

// Close modal on outside click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('successModal');
  if (e.target === modal) {
    closeModal();
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
