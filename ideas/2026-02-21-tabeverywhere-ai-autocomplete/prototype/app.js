// TabEverywhere — Interactive Demo
// Simulates AI autocomplete with ghost text suggestions

document.addEventListener('DOMContentLoaded', () => {
  // Email demo completions (context: professional email reply)
  const emailCompletions = {
    'hi': ' John, thanks for the update on the project timeline.',
    'thank': 's for the update. I\'ve reviewed the timeline and it looks good.',
    'i': '\'ve reviewed the timeline and have a few suggestions.',
    'the': ' timeline looks good. Let\'s discuss the Q2 milestones.',
    'let': '\'s schedule a call to discuss the details.',
    'can': ' we push the deadline by a week? I need more time for testing.',
    'sounds': ' great! I\'ll get started on my part right away.',
    'per': 'fect, I\'ll send over the updated documents by EOD.',
    'look': 'ing forward to working on this together.',
    'sorry': ' for the delay. I\'ll have the deliverables ready by Friday.',
  };

  // Slack demo completions (context: casual team chat)
  const slackCompletions = {
    'sounds': ' good! I\'ll be there ',
    'sure': ', count me in!',
    'yep': ', works for me!',
    'can': ' we do 3:30 instead?',
    'i': '\'ll bring coffee ',
    'let': ' me check my calendar real quick',
    'perfect': '! See you at 3',
    'on': ' my way!',
    'running': ' 5 min late, start without me',
    'what': '\'s the agenda?',
  };

  // Setup email demo
  setupAutocomplete('email-input', 'email-ghost', emailCompletions, true);
  
  // Setup Slack demo
  setupAutocomplete('slack-input', 'slack-ghost', slackCompletions, false);

  function setupAutocomplete(inputId, ghostId, completions, isTextarea) {
    const input = document.getElementById(inputId);
    const ghost = document.getElementById(ghostId);
    
    if (!input || !ghost) return;

    let currentSuggestion = '';
    let debounceTimer = null;

    input.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      
      const text = input.value.toLowerCase().trim();
      const lastWord = text.split(/\s+/).pop();
      
      // Clear ghost if input is empty
      if (!text) {
        ghost.textContent = '';
        currentSuggestion = '';
        return;
      }

      // Debounce for realistic feel
      debounceTimer = setTimeout(() => {
        // Find matching completion
        let suggestion = '';
        
        // Check for prefix matches
        for (const [prefix, completion] of Object.entries(completions)) {
          if (lastWord && prefix.startsWith(lastWord) && lastWord !== prefix) {
            // Complete the word + add the suggestion
            suggestion = prefix.slice(lastWord.length) + completion;
            break;
          } else if (lastWord === prefix) {
            // Word matches exactly, show the completion
            suggestion = completion;
            break;
          }
        }

        currentSuggestion = suggestion;
        
        // Position ghost text after current input
        if (suggestion) {
          ghost.textContent = input.value + suggestion;
          ghost.style.opacity = '1';
        } else {
          ghost.textContent = '';
        }
      }, 150);
    });

    // Handle Tab to accept
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Tab' && currentSuggestion) {
        e.preventDefault();
        input.value = input.value + currentSuggestion;
        ghost.textContent = '';
        currentSuggestion = '';
        
        // Show success feedback
        showAcceptFeedback(input);
      }
      
      if (e.key === 'Escape') {
        ghost.textContent = '';
        currentSuggestion = '';
      }
    });

    // Clear ghost on blur
    input.addEventListener('blur', () => {
      setTimeout(() => {
        if (!currentSuggestion) {
          ghost.textContent = '';
        }
      }, 100);
    });
  }

  function showAcceptFeedback(input) {
    const originalBorder = input.style.borderColor;
    input.style.borderColor = '#34d399';
    input.style.boxShadow = '0 0 0 2px rgba(52, 211, 153, 0.2)';
    
    setTimeout(() => {
      input.style.borderColor = originalBorder;
      input.style.boxShadow = '';
    }, 300);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card, .pricing-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // Add typing indicator effect to demo windows
  const demoWindows = document.querySelectorAll('.demo-window');
  demoWindows.forEach(window => {
    window.addEventListener('focusin', () => {
      window.style.boxShadow = '0 0 0 2px var(--color-primary), 0 8px 32px rgba(0,0,0,0.5)';
    });
    
    window.addEventListener('focusout', () => {
      window.style.boxShadow = '0 8px 32px rgba(0,0,0,0.5)';
    });
  });
});
