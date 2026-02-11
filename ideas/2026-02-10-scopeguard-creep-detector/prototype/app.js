/**
 * ScopeGuard - Interactive Prototype
 * AI Scope Creep Detector for Freelancers
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const newRequestBtn = document.getElementById('newRequestBtn');
  const requestModal = document.getElementById('requestModal');
  const analysisModal = document.getElementById('analysisModal');
  const closeModal = document.getElementById('closeModal');
  const cancelModal = document.getElementById('cancelModal');
  const closeAnalysis = document.getElementById('closeAnalysis');
  const requestForm = document.getElementById('requestForm');
  const analysisLoading = document.getElementById('analysisLoading');
  const analysisContent = document.getElementById('analysisContent');
  const analysisExplanation = document.getElementById('analysisExplanation');
  
  // Sample AI analysis responses
  const analysisResponses = [
    {
      verdict: 'out-of-scope',
      title: 'Out of Scope',
      description: 'This request is not covered by the original project agreement.',
      explanation: 'The client is requesting functionality that was not included in the original scope. Based on your project agreement, this would constitute additional work that should be billed separately.',
      suggestedFee: '$400 - $800'
    },
    {
      verdict: 'gray-area',
      title: 'Gray Area',
      description: 'This request may or may not fall within the original scope.',
      explanation: 'This request is in a gray area. While related to the project, it extends beyond what was explicitly agreed upon. Consider discussing with the client whether this falls within "reasonable revisions."',
      suggestedFee: '$150 - $300'
    },
    {
      verdict: 'in-scope',
      title: 'In Scope',
      description: 'This request is covered by your original agreement.',
      explanation: 'This request falls within the original project scope. No additional billing is necessary, but make sure to track the time spent for future project estimations.',
      suggestedFee: 'N/A (included)'
    }
  ];
  
  // Open request modal
  newRequestBtn.addEventListener('click', () => {
    requestModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  // Close request modal
  const closeRequestModal = () => {
    requestModal.classList.remove('active');
    document.body.style.overflow = '';
    requestForm.reset();
  };
  
  closeModal.addEventListener('click', closeRequestModal);
  cancelModal.addEventListener('click', closeRequestModal);
  
  // Close analysis modal
  closeAnalysis.addEventListener('click', () => {
    analysisModal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset for next use
    analysisLoading.style.display = 'flex';
    analysisContent.style.display = 'none';
  });
  
  // Close modals on overlay click
  [requestModal, analysisModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (modal === requestModal) requestForm.reset();
        if (modal === analysisModal) {
          analysisLoading.style.display = 'flex';
          analysisContent.style.display = 'none';
        }
      }
    });
  });
  
  // Handle form submission
  requestForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const requestText = document.getElementById('requestText').value.toLowerCase();
    
    // Close request modal
    closeRequestModal();
    
    // Open analysis modal
    analysisModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Simulate AI analysis
    setTimeout(() => {
      // Determine verdict based on keywords (simplified demo logic)
      let response;
      if (requestText.includes('new') || requestText.includes('add') || 
          requestText.includes('extra') || requestText.includes('another') ||
          requestText.includes('also') || requestText.includes('shop') ||
          requestText.includes('e-commerce') || requestText.includes('feature')) {
        response = analysisResponses[0]; // Out of scope
      } else if (requestText.includes('revision') || requestText.includes('tweak') ||
                 requestText.includes('change') || requestText.includes('adjust') ||
                 requestText.includes('modify')) {
        response = analysisResponses[1]; // Gray area
      } else {
        response = analysisResponses[2]; // In scope
      }
      
      // Update analysis content
      const verdictEl = document.querySelector('.analysis-verdict');
      verdictEl.className = `analysis-verdict ${response.verdict}`;
      
      const iconColors = {
        'out-of-scope': { bg: 'var(--color-danger-100)', color: 'var(--color-danger-600)' },
        'gray-area': { bg: 'var(--color-warning-100)', color: 'var(--color-warning-600)' },
        'in-scope': { bg: 'var(--color-success-100)', color: 'var(--color-success-600)' }
      };
      
      const textColors = {
        'out-of-scope': { h3: 'var(--color-danger-700)', p: 'var(--color-danger-600)' },
        'gray-area': { h3: 'var(--color-warning-700)', p: 'var(--color-warning-600)' },
        'in-scope': { h3: 'var(--color-success-700)', p: 'var(--color-success-600)' }
      };
      
      const icons = {
        'out-of-scope': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>`,
        'gray-area': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>`,
        'in-scope': `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>`
      };
      
      const verdictIcon = verdictEl.querySelector('.verdict-icon');
      const verdictText = verdictEl.querySelector('.verdict-text');
      
      verdictIcon.innerHTML = icons[response.verdict];
      verdictIcon.style.background = iconColors[response.verdict].bg;
      verdictIcon.style.color = iconColors[response.verdict].color;
      
      verdictText.querySelector('h3').textContent = response.title;
      verdictText.querySelector('h3').style.color = textColors[response.verdict].h3;
      verdictText.querySelector('p').textContent = response.description;
      verdictText.querySelector('p').style.color = textColors[response.verdict].p;
      
      // Update border color
      if (response.verdict === 'out-of-scope') {
        verdictEl.style.background = 'var(--color-danger-50)';
        verdictEl.style.borderColor = 'var(--color-danger-100)';
      } else if (response.verdict === 'gray-area') {
        verdictEl.style.background = 'var(--color-warning-50)';
        verdictEl.style.borderColor = 'var(--color-warning-100)';
      } else {
        verdictEl.style.background = 'var(--color-success-50)';
        verdictEl.style.borderColor = 'var(--color-success-100)';
      }
      
      analysisExplanation.textContent = response.explanation;
      
      const suggestedValue = document.querySelector('.suggested-value strong');
      suggestedValue.textContent = response.suggestedFee;
      suggestedValue.style.color = response.verdict === 'in-scope' 
        ? 'var(--color-gray-500)' 
        : 'var(--color-success-600)';
      
      // Show content
      analysisLoading.style.display = 'none';
      analysisContent.style.display = 'block';
    }, 1500);
  });
  
  // Handle change request buttons
  document.querySelectorAll('[data-action="change-request"]').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('🎉 Change Request Generated!\n\nIn the full app, this would create a professional PDF document to send to your client outlining the scope change and additional costs.');
    });
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (requestModal.classList.contains('active')) {
        closeRequestModal();
      }
      if (analysisModal.classList.contains('active')) {
        analysisModal.classList.remove('active');
        document.body.style.overflow = '';
        analysisLoading.style.display = 'flex';
        analysisContent.style.display = 'none';
      }
    }
  });
  
  // Animate stats on load
  const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      element.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };
  
  // Animate stat values on load
  document.querySelectorAll('.stat-value').forEach(stat => {
    const value = parseInt(stat.textContent, 10);
    stat.textContent = '0';
    setTimeout(() => {
      animateValue(stat, 0, value, 800);
    }, 200);
  });
  
  // Add hover effect to nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
  
  console.log('🛡️ ScopeGuard Prototype Loaded');
  console.log('Click "Log Request" to test the AI scope analysis!');
});
