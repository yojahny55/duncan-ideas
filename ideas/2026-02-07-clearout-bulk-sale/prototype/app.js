/**
 * ClearOut - Prototype JavaScript
 * Handles UI interactions, modal states, and demo functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // ===== DOM Elements =====
  const modal = document.getElementById('createModal');
  const closeModalBtn = document.getElementById('closeModal');
  const createSaleForm = document.getElementById('createSaleForm');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  // Buttons that open modal
  const modalTriggers = [
    document.getElementById('startSaleBtn'),
    document.getElementById('createSaleBtn'),
    document.getElementById('getStartedBtn')
  ];

  // ===== Modal Functions =====
  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Focus first input
    setTimeout(() => {
      document.getElementById('saleName').focus();
    }, 200);
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Modal triggers
  modalTriggers.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', openModal);
    }
  });

  closeModalBtn.addEventListener('click', closeModal);
  
  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // ===== Toast Functions =====
  function showToast(message, type = 'default') {
    toast.className = 'toast';
    if (type === 'success') toast.classList.add('toast--success');
    if (type === 'error') toast.classList.add('toast--error');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // ===== Form Handling =====
  createSaleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const saleName = document.getElementById('saleName').value;
    const address = document.getElementById('address').value;
    const moveDate = document.getElementById('moveDate').value;
    const reason = document.getElementById('reason').value;

    // Basic validation
    if (!saleName || !address) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    // Demo success
    closeModal();
    showToast(`Sale "${saleName}" created! Let's add photos.`, 'success');
    
    // Reset form
    createSaleForm.reset();
  });

  // ===== Tab Switching =====
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all
      tabs.forEach(t => t.classList.remove('tab--active'));
      // Add active to clicked
      tab.classList.add('tab--active');
      
      // In a real app, this would filter the sales grid
      showToast(`Showing ${tab.textContent} sales`, 'default');
    });
  });

  // ===== Favorite Toggle =====
  const favoriteButtons = document.querySelectorAll('.sale-card__favorite');
  favoriteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent card click
      
      const isActive = btn.classList.toggle('sale-card__favorite--active');
      btn.innerHTML = isActive ? '❤️' : '🤍';
      
      showToast(
        isActive ? 'Added to favorites' : 'Removed from favorites',
        'success'
      );
    });
  });

  // ===== Sale Card Click =====
  const saleCards = document.querySelectorAll('.sale-card');
  saleCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.sale-card__title').textContent;
      showToast(`Opening: ${title}`, 'default');
      // In a real app, this would navigate to the sale detail page
    });
  });

  // ===== Browse Sales Button =====
  const browseSalesBtn = document.getElementById('browseSalesBtn');
  if (browseSalesBtn) {
    browseSalesBtn.addEventListener('click', () => {
      // Smooth scroll to sales section
      document.getElementById('sales').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  // ===== Login Button =====
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      showToast('Login functionality coming soon!', 'default');
    });
  }

  // ===== Intersection Observer for Animations =====
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

  // Observe feature cards and steps
  document.querySelectorAll('.feature, .step, .sale-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ===== Mobile Menu (placeholder) =====
  // In a real app, this would toggle a mobile navigation menu
  
  // ===== Demo: Simulate real-time activity =====
  const floatValues = document.querySelectorAll('.hero__float-value');
  
  function updateDemoStats() {
    const soldValue = floatValues[0];
    const viewersValue = floatValues[1];
    
    if (soldValue) {
      const currentSold = parseInt(soldValue.textContent.replace(/[$,]/g, ''));
      const newSold = currentSold + Math.floor(Math.random() * 50);
      soldValue.textContent = '$' + newSold.toLocaleString();
    }
    
    if (viewersValue) {
      const newViewers = Math.floor(Math.random() * 20) + 5;
      viewersValue.textContent = newViewers;
    }
  }

  // Update stats every 5 seconds for demo effect
  setInterval(updateDemoStats, 5000);

  // ===== Countdown Timer Demo =====
  const countdowns = document.querySelectorAll('.sale-card__countdown');
  
  function updateCountdowns() {
    countdowns.forEach(el => {
      const text = el.textContent;
      if (text.includes('h left')) {
        const hours = parseInt(text);
        if (hours > 0) {
          // In a real app, this would be actual time-based
          el.innerHTML = `⏰ ${hours}h left`;
        }
      }
    });
  }

  // ===== Accessibility: Skip to main content =====
  // Add skip link functionality if needed
  
  // ===== Console welcome message =====
  console.log('%c🏠 ClearOut Prototype', 'font-size: 24px; font-weight: bold;');
  console.log('The smart way to sell everything when you move.');
  console.log('---');
  console.log('This is a prototype demonstrating the core UX flow.');
  console.log('Built with vanilla HTML/CSS/JS. No frameworks required.');
});

// ===== Service Worker Registration (for future PWA) =====
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js');
//   });
// }
