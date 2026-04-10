// RedlineAI Prototype - Interactive Demo

function switchView(view) {
  // Hide all views
  document.getElementById('split-view').style.display = 'none';
  document.getElementById('unified-view').style.display = 'none';
  document.getElementById('summary-view').style.display = 'none';

  // Show selected view
  document.getElementById(view + '-view').style.display = view === 'split' ? 'grid' : 'block';

  // Update tab styles
  document.querySelectorAll('.demo-tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.textContent.toLowerCase().includes(view)) {
      tab.classList.add('active');
    }
  });
}

// CTA button scroll
document.getElementById('cta-upload')?.addEventListener('click', function() {
  document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple ask input handler
document.querySelector('.ask-field')?.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const question = this.value.trim();
    if (!question) return;

    // Simulate AI response
    const summaryText = document.querySelector('.summary-text');
    const response = document.createElement('div');
    response.style.cssText = 'margin-top: 16px; padding: 16px; background: var(--bg); border-radius: var(--radius-sm); border-left: 3px solid var(--purple);';
    response.innerHTML = `
      <p style="color: var(--text); font-weight: 600; margin-bottom: 8px;">🤖 Your question: "${question}"</p>
      <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6;">
        In most US states, late fees must be "reasonable" and courts generally cap them at 3-5% of monthly rent.
        For a $1,500/month apartment, a $75 late fee is 5% — at the legal ceiling.
        <strong>If you're in Florida, the late fee must be reasonable and disclosed upfront.</strong>
        This change could be challenged if you didn't agree to it specifically.
      </p>
    `;
    summaryText.appendChild(response);
    this.value = '';
  }
});

// Add hover effect to change items
document.querySelectorAll('.change-item').forEach(item => {
  item.style.cursor = 'default';
  item.addEventListener('mouseenter', function() {
    this.style.background = 'rgba(255,255,255,0.03)';
  });
  item.addEventListener('mouseleave', function() {
    this.style.background = '';
  });
});

// Intersection observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pain-card, .step, .feature-card, .price-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
