// BeforeAfter App - Interactive Prototype

// Screen Management
function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Show target screen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
  
  // Update nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Map screens to nav items
  const navMapping = {
    'home-screen': 0,
    'new-project': 1,
    'after-screen': 1,
    'comparison-screen': 2
  };
  
  const navIndex = navMapping[screenId];
  if (navIndex !== undefined) {
    document.querySelectorAll('.nav-item')[navIndex]?.classList.add('active');
  }
}

// Show project demo
function showProject(projectId) {
  showScreen('comparison-screen');
}

// Demo: Capture before photo
function captureBeforeDemo() {
  showToast('📸 "Before" photo captured!');
  
  // Simulate camera capture delay
  setTimeout(() => {
    showScreen('after-screen');
    showToast('Now capture your "After" photo');
  }, 1000);
}

// Demo: Capture after photo
function captureAfterDemo() {
  showToast('📸 "After" photo captured!');
  
  // Simulate processing delay
  setTimeout(() => {
    showScreen('comparison-screen');
    showToast('Comparison ready! 🎉');
  }, 1000);
}

// Update ghost overlay opacity
function updateOpacity(value) {
  const overlay = document.getElementById('ghost-overlay');
  const valueDisplay = document.getElementById('opacity-value');
  
  if (overlay) {
    overlay.style.opacity = value / 100;
  }
  if (valueDisplay) {
    valueDisplay.textContent = value + '%';
  }
}

// Comparison mode switching
function setComparisonMode(mode) {
  // Update buttons
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Update views
  document.querySelectorAll('.comparison-view').forEach(view => {
    view.classList.remove('active');
  });
  
  const viewId = 'comparison-' + mode;
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add('active');
  }
}

// Update slider comparison
function updateSlider(value) {
  const afterPanel = document.getElementById('slider-after');
  const handle = document.getElementById('slider-handle');
  
  if (afterPanel) {
    afterPanel.style.clipPath = `inset(0 0 0 ${value}%)`;
  }
  if (handle) {
    handle.style.left = value + '%';
  }
}

// Update fade comparison
function updateFade(value) {
  const afterImage = document.getElementById('fade-after');
  if (afterImage) {
    afterImage.style.opacity = value / 100;
  }
}

// Toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  
  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }
}

// Category button handling
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// Category chip handling
document.querySelectorAll('.category-chip').forEach(chip => {
  chip.addEventListener('click', function() {
    document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
  });
});

// Initialize slider on load
document.addEventListener('DOMContentLoaded', () => {
  // Set initial slider position
  updateSlider(50);
  updateFade(50);
  
  // Add touch/drag support for slider
  const sliderInput = document.getElementById('comparison-slider-input');
  if (sliderInput) {
    sliderInput.addEventListener('input', (e) => {
      updateSlider(e.target.value);
    });
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    showScreen('home-screen');
  }
});
