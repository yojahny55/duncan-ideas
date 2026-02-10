/**
 * AccessHub - Interactive Prototype
 * Crowdsourced Venue Accessibility Mapper
 */

(function() {
  'use strict';

  // ===================
  // DOM Elements
  // ===================
  const elements = {
    searchInput: document.getElementById('venue-search'),
    venuesGrid: document.getElementById('venues-grid'),
    resultsCount: document.getElementById('results-count'),
    clearFiltersBtn: document.getElementById('clear-filters'),
    addVenueBtn: document.getElementById('add-venue-btn'),
    signInBtn: document.getElementById('sign-in-btn'),
    toast: document.getElementById('toast'),
    modal: document.getElementById('add-venue-modal'),
    modalClose: document.querySelector('.modal-close'),
    modalCancel: document.getElementById('modal-cancel'),
    modalSubmit: document.getElementById('modal-submit'),
    viewButtons: document.querySelectorAll('.view-btn'),
    filterCheckboxes: document.querySelectorAll('.filter-checkbox'),
    saveButtons: document.querySelectorAll('.venue-save'),
    locationBtn: document.querySelector('.location-btn')
  };

  // ===================
  // State
  // ===================
  const state = {
    savedVenues: new Set(['berns']), // Pre-saved for demo
    activeFilters: {
      accessibility: ['mobility'],
      features: [],
      venueTypes: [],
      minRating: 'any'
    },
    currentView: 'grid',
    searchQuery: '',
    userLocation: 'Tampa, FL'
  };

  // ===================
  // Toast Notifications
  // ===================
  function showToast(message, type = 'success') {
    const toast = elements.toast;
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');
    
    toastMessage.textContent = message;
    toastIcon.textContent = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    
    toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
    toast.classList.add('show');
    
    // Announce to screen readers
    toast.setAttribute('aria-live', 'assertive');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // ===================
  // Modal Handling
  // ===================
  function openModal() {
    elements.modal.classList.add('show');
    elements.modal.querySelector('input').focus();
    document.body.style.overflow = 'hidden';
    
    // Trap focus in modal
    elements.modal.addEventListener('keydown', trapFocus);
  }

  function closeModal() {
    elements.modal.classList.remove('show');
    document.body.style.overflow = '';
    elements.modal.removeEventListener('keydown', trapFocus);
    elements.addVenueBtn.focus();
  }

  function trapFocus(e) {
    const focusableElements = elements.modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
    
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  // ===================
  // Save/Unsave Venues
  // ===================
  function handleSaveVenue(button) {
    const card = button.closest('.venue-card');
    const venueName = card.querySelector('.venue-name a').textContent.trim();
    const venueId = venueName.toLowerCase().replace(/\s+/g, '-');
    
    if (button.classList.contains('saved')) {
      button.classList.remove('saved');
      button.querySelector('span').textContent = '♡';
      button.setAttribute('aria-label', `Save ${venueName} to favorites`);
      state.savedVenues.delete(venueId);
      showToast(`${venueName} removed from favorites`);
    } else {
      button.classList.add('saved');
      button.querySelector('span').textContent = '♥';
      button.setAttribute('aria-label', `Remove ${venueName} from favorites`);
      state.savedVenues.add(venueId);
      showToast(`${venueName} saved to favorites!`);
    }
  }

  // ===================
  // View Toggle
  // ===================
  function handleViewChange(selectedButton) {
    elements.viewButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    
    selectedButton.classList.add('active');
    selectedButton.setAttribute('aria-selected', 'true');
    
    // Update view state
    const viewIndex = Array.from(elements.viewButtons).indexOf(selectedButton);
    const views = ['grid', 'list', 'map'];
    state.currentView = views[viewIndex];
    
    // Show toast for demo
    if (state.currentView === 'map') {
      showToast('Map view coming soon!', 'info');
    }
  }

  // ===================
  // Filter Handling
  // ===================
  function handleFilterChange() {
    // Count active filters
    const activeFilters = Array.from(elements.filterCheckboxes).filter(cb => cb.checked);
    
    // Simulate filtering (in real app, would filter venues)
    const venueCards = elements.venuesGrid.querySelectorAll('.venue-card');
    let visibleCount = venueCards.length;
    
    // Update results count
    elements.resultsCount.textContent = visibleCount;
    
    // Visual feedback
    venueCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 50}ms`;
    });
  }

  function clearAllFilters() {
    elements.filterCheckboxes.forEach(checkbox => {
      if (checkbox.type === 'checkbox') {
        checkbox.checked = false;
      } else if (checkbox.type === 'radio' && checkbox.value === 'any') {
        checkbox.checked = true;
      }
    });
    
    handleFilterChange();
    showToast('Filters cleared');
  }

  // ===================
  // Search Handling
  // ===================
  function handleSearch(query) {
    state.searchQuery = query.toLowerCase();
    
    const venueCards = elements.venuesGrid.querySelectorAll('.venue-card');
    let visibleCount = 0;
    
    venueCards.forEach(card => {
      const venueName = card.querySelector('.venue-name').textContent.toLowerCase();
      const venueCategory = card.querySelector('.venue-category').textContent.toLowerCase();
      const venueAddress = card.querySelector('.venue-address').textContent.toLowerCase();
      
      const matches = venueName.includes(state.searchQuery) || 
                      venueCategory.includes(state.searchQuery) ||
                      venueAddress.includes(state.searchQuery);
      
      if (matches || state.searchQuery === '') {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    elements.resultsCount.textContent = visibleCount;
    
    // Show empty state if no results
    if (visibleCount === 0 && state.searchQuery !== '') {
      showNoResultsState();
    } else {
      removeNoResultsState();
    }
  }

  function showNoResultsState() {
    // Check if empty state already exists
    if (document.querySelector('.empty-state')) return;
    
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = `
      <div class="empty-icon" aria-hidden="true">🔍</div>
      <h3 class="empty-title">No venues found</h3>
      <p class="empty-description">
        We couldn't find any accessible venues matching "${state.searchQuery}". 
        Try adjusting your search or filters.
      </p>
      <button class="btn btn-primary" onclick="document.getElementById('venue-search').value=''; document.getElementById('venue-search').dispatchEvent(new Event('input'));">
        Clear Search
      </button>
    `;
    
    elements.venuesGrid.appendChild(emptyState);
  }

  function removeNoResultsState() {
    const emptyState = document.querySelector('.empty-state');
    if (emptyState) {
      emptyState.remove();
    }
  }

  // ===================
  // Location Handling
  // ===================
  function handleLocationClick() {
    if ('geolocation' in navigator) {
      showToast('Getting your location...', 'info');
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In real app, would reverse geocode to get city name
          state.userLocation = 'Your Location';
          elements.locationBtn.querySelector('span:last-child').textContent = 'Your Location';
          showToast('Location updated!');
        },
        (error) => {
          showToast('Could not get location. Please enable location access.', 'error');
        }
      );
    } else {
      showToast('Geolocation not supported in this browser', 'error');
    }
  }

  // ===================
  // Accessibility Score Animation
  // ===================
  function animateScores() {
    const scoreBars = document.querySelectorAll('.score-fill');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const width = fill.style.width;
          fill.style.width = '0%';
          
          requestAnimationFrame(() => {
            setTimeout(() => {
              fill.style.width = width;
            }, 100);
          });
          
          observer.unobserve(fill);
        }
      });
    }, { threshold: 0.5 });
    
    scoreBars.forEach(bar => observer.observe(bar));
  }

  // ===================
  // Keyboard Navigation
  // ===================
  function setupKeyboardNavigation() {
    // Venue card navigation
    elements.venuesGrid.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const cards = Array.from(elements.venuesGrid.querySelectorAll('.venue-card'));
        const focusedCard = document.activeElement.closest('.venue-card');
        const currentIndex = cards.indexOf(focusedCard);
        
        let nextIndex;
        if (e.key === 'ArrowRight') {
          nextIndex = Math.min(currentIndex + 1, cards.length - 1);
        } else {
          nextIndex = Math.max(currentIndex - 1, 0);
        }
        
        const nextCard = cards[nextIndex];
        if (nextCard) {
          nextCard.querySelector('a, button').focus();
          e.preventDefault();
        }
      }
    });
  }

  // ===================
  // Initialize
  // ===================
  function init() {
    // Save buttons
    elements.saveButtons.forEach(button => {
      button.addEventListener('click', () => handleSaveVenue(button));
    });
    
    // View toggle
    elements.viewButtons.forEach(button => {
      button.addEventListener('click', () => handleViewChange(button));
    });
    
    // Filter changes
    elements.filterCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', handleFilterChange);
    });
    
    // Clear filters
    elements.clearFiltersBtn.addEventListener('click', clearAllFilters);
    
    // Search input
    let searchTimeout;
    elements.searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        handleSearch(e.target.value);
      }, 300);
    });
    
    // Location button
    elements.locationBtn.addEventListener('click', handleLocationClick);
    
    // Modal
    elements.addVenueBtn.addEventListener('click', openModal);
    elements.modalClose.addEventListener('click', closeModal);
    elements.modalCancel.addEventListener('click', closeModal);
    elements.modal.addEventListener('click', (e) => {
      if (e.target === elements.modal) {
        closeModal();
      }
    });
    
    elements.modalSubmit.addEventListener('click', () => {
      const venueName = document.getElementById('venue-name-input').value;
      if (venueName) {
        closeModal();
        showToast(`Thanks! We'll guide you through reviewing ${venueName}.`);
      } else {
        showToast('Please enter a venue name', 'error');
      }
    });
    
    // Sign in button demo
    elements.signInBtn.addEventListener('click', () => {
      showToast('Sign in coming soon! Join the waitlist.', 'info');
    });
    
    // CTA button
    const ctaButton = document.querySelector('.btn-cta');
    if (ctaButton) {
      ctaButton.addEventListener('click', openModal);
    }
    
    // Animate scores on load
    animateScores();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    
    // Log ready state
    console.log('AccessHub prototype initialized ✓');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
