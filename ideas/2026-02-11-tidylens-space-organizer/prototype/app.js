/**
 * TidyLens - AI Space Organization Assistant
 * Interactive Prototype
 */

// State
const state = {
  currentView: 'home',
  completedTasks: new Set(),
  totalTasks: 6,
  timerRunning: false,
  timerSeconds: 15 * 60,
  timerInterval: null,
  currentTaskIndex: 0
};

// DOM Elements
const elements = {
  views: document.querySelectorAll('.view'),
  navBtns: document.querySelectorAll('.nav-btn'),
  uploadZone: document.getElementById('upload-zone'),
  fileInput: document.getElementById('file-input'),
  uploadBtn: document.getElementById('upload-btn'),
  analysisLoading: document.getElementById('analysis-loading'),
  analysisResults: document.getElementById('analysis-results'),
  previewImage: document.getElementById('preview-image'),
  backBtn: document.getElementById('back-btn'),
  tasksList: document.getElementById('tasks-list'),
  progressFill: document.querySelector('.progress-fill'),
  progressText: document.querySelector('.progress-text'),
  startSessionBtn: document.getElementById('start-session-btn'),
  timerModal: document.getElementById('timer-modal'),
  closeTimer: document.getElementById('close-timer'),
  timerDisplay: document.getElementById('timer-display'),
  timerStart: document.getElementById('timer-start'),
  timerPause: document.getElementById('timer-pause'),
  timerSkip: document.getElementById('timer-skip'),
  currentTaskName: document.getElementById('current-task-name'),
  upgradeBtn: document.getElementById('upgrade-btn'),
  upgradeModal: document.getElementById('upgrade-modal'),
  closeUpgrade: document.getElementById('close-upgrade'),
  emptyRecent: document.getElementById('empty-recent'),
  analysesGrid: document.getElementById('analyses-grid')
};

// Initialize
function init() {
  setupNavigation();
  setupUpload();
  setupTasks();
  setupTimer();
  setupModals();
}

// Navigation
function setupNavigation() {
  elements.navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      switchView(view);
    });
  });

  elements.backBtn?.addEventListener('click', () => {
    switchView('home');
    elements.analysisLoading.style.display = 'block';
    elements.analysisResults.style.display = 'none';
  });
}

function switchView(viewName) {
  state.currentView = viewName;
  
  elements.views.forEach(view => {
    view.classList.remove('active');
  });
  
  const targetView = document.getElementById(`${viewName}-view`);
  if (targetView) {
    targetView.classList.add('active');
  }
  
  elements.navBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });
}

// Upload
function setupUpload() {
  // Click to upload
  elements.uploadBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    elements.fileInput.click();
  });

  elements.uploadZone?.addEventListener('click', () => {
    elements.fileInput.click();
  });

  // File input change
  elements.fileInput?.addEventListener('change', handleFileSelect);

  // Drag and drop
  elements.uploadZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    elements.uploadZone.classList.add('dragover');
  });

  elements.uploadZone?.addEventListener('dragleave', () => {
    elements.uploadZone.classList.remove('dragover');
  });

  elements.uploadZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    elements.uploadZone.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      processImage(files[0]);
    }
  });
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file && file.type.startsWith('image/')) {
    processImage(file);
  }
}

function processImage(file) {
  // Create preview
  const reader = new FileReader();
  reader.onload = (e) => {
    elements.previewImage.src = e.target.result;
  };
  reader.readAsDataURL(file);

  // Switch to analysis view
  switchView('analysis');
  
  // Simulate loading
  simulateAnalysis();
}

function simulateAnalysis() {
  elements.analysisLoading.style.display = 'block';
  elements.analysisResults.style.display = 'none';
  
  const steps = elements.analysisLoading.querySelectorAll('.loading-step');
  
  // Step 1: Processing image
  setTimeout(() => {
    steps[0].classList.add('complete');
    steps[0].querySelector('.step-check').textContent = '✓';
    steps[1].classList.add('active');
  }, 1000);

  // Step 2: Identifying categories
  setTimeout(() => {
    steps[1].classList.add('complete');
    steps[1].querySelector('.step-check').textContent = '✓';
    steps[2].classList.add('active');
  }, 2200);

  // Step 3: Generating plan
  setTimeout(() => {
    steps[2].classList.add('complete');
    steps[2].querySelector('.step-check').textContent = '✓';
  }, 3500);

  // Show results
  setTimeout(() => {
    elements.analysisLoading.style.display = 'none';
    elements.analysisResults.style.display = 'block';
    
    // Reset loading steps for next time
    steps.forEach(step => {
      step.classList.remove('active', 'complete');
      step.querySelector('.step-check').textContent = '○';
    });
    steps[0].classList.add('active');
    
    // Update recent analyses
    updateRecentAnalyses();
  }, 4000);
}

function updateRecentAnalyses() {
  if (elements.emptyRecent && elements.analysesGrid) {
    elements.emptyRecent.style.display = 'none';
    elements.analysesGrid.style.display = 'grid';
    
    // Add a sample analysis card
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    elements.analysesGrid.innerHTML = `
      <div class="analysis-card" style="background: white; border-radius: var(--radius-xl); box-shadow: var(--shadow-md); overflow: hidden;">
        <div style="aspect-ratio: 16/9; background: linear-gradient(135deg, var(--color-gray-200), var(--color-gray-300)); display: flex; align-items: center; justify-content: center;">
          <span style="font-size: 2rem;">🖼️</span>
        </div>
        <div style="padding: var(--space-4);">
          <h4 style="font-weight: 600; margin-bottom: var(--space-1);">Room Analysis</h4>
          <p style="font-size: var(--font-size-sm); color: var(--color-gray-500);">Today at ${timeStr}</p>
          <div style="margin-top: var(--space-2); font-size: var(--font-size-xs); color: var(--color-primary-600);">0 of 6 tasks completed</div>
        </div>
      </div>
    `;
  }
}

// Tasks
function setupTasks() {
  const taskItems = elements.tasksList?.querySelectorAll('.task-item');
  
  taskItems?.forEach((item, index) => {
    const checkbox = item.querySelector('.task-check');
    checkbox?.addEventListener('click', () => {
      toggleTask(index + 1, item);
    });
  });
}

function toggleTask(taskNum, taskElement) {
  if (state.completedTasks.has(taskNum)) {
    state.completedTasks.delete(taskNum);
    taskElement.classList.remove('completed');
  } else {
    state.completedTasks.add(taskNum);
    taskElement.classList.add('completed');
    
    // Celebration for task completion
    celebrate(taskElement);
  }
  
  updateProgress();
}

function updateProgress() {
  const completed = state.completedTasks.size;
  const percentage = (completed / state.totalTasks) * 100;
  
  if (elements.progressFill) {
    elements.progressFill.style.width = `${percentage}%`;
  }
  
  if (elements.progressText) {
    elements.progressText.textContent = `${completed} of ${state.totalTasks} completed`;
  }
  
  // Check if all complete
  if (completed === state.totalTasks) {
    setTimeout(() => {
      alert('🎉 Congratulations! You\'ve completed all tasks! Time to take your "After" photo!');
    }, 500);
  }
}

function celebrate(element) {
  // Simple celebration animation
  element.style.transform = 'scale(1.02)';
  setTimeout(() => {
    element.style.transform = '';
  }, 200);
}

// Timer
function setupTimer() {
  elements.startSessionBtn?.addEventListener('click', () => {
    openModal(elements.timerModal);
    updateTimerDisplay();
  });

  elements.closeTimer?.addEventListener('click', () => {
    closeModal(elements.timerModal);
    stopTimer();
  });

  elements.timerModal?.querySelector('.modal-backdrop')?.addEventListener('click', () => {
    closeModal(elements.timerModal);
    stopTimer();
  });

  elements.timerStart?.addEventListener('click', startTimer);
  elements.timerPause?.addEventListener('click', pauseTimer);
  elements.timerSkip?.addEventListener('click', skipToNextTask);
}

function startTimer() {
  state.timerRunning = true;
  elements.timerStart.style.display = 'none';
  elements.timerPause.style.display = 'inline-flex';
  
  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    updateTimerDisplay();
    
    if (state.timerSeconds <= 0) {
      stopTimer();
      alert('⏰ Time\'s up! Great work on this task!');
      skipToNextTask();
    }
  }, 1000);
}

function pauseTimer() {
  state.timerRunning = false;
  elements.timerStart.style.display = 'inline-flex';
  elements.timerPause.style.display = 'none';
  clearInterval(state.timerInterval);
}

function stopTimer() {
  state.timerRunning = false;
  elements.timerStart.style.display = 'inline-flex';
  elements.timerPause.style.display = 'none';
  clearInterval(state.timerInterval);
  state.timerSeconds = 15 * 60;
}

function updateTimerDisplay() {
  const minutes = Math.floor(state.timerSeconds / 60);
  const seconds = state.timerSeconds % 60;
  elements.timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function skipToNextTask() {
  const tasks = [
    'Clear the surface area',
    'Sort clothing items',
    'Organize books & papers',
    'Tackle electronics & cables',
    'Remove trash & recycling',
    'Final placement & wipe down'
  ];
  
  state.currentTaskIndex = (state.currentTaskIndex + 1) % tasks.length;
  elements.currentTaskName.textContent = tasks[state.currentTaskIndex];
  
  // Reset timer for new task
  stopTimer();
  
  // Set task-specific time
  const taskTimes = [5, 10, 8, 7, 3, 12];
  state.timerSeconds = taskTimes[state.currentTaskIndex] * 60;
  updateTimerDisplay();
}

// Modals
function setupModals() {
  elements.upgradeBtn?.addEventListener('click', () => {
    openModal(elements.upgradeModal);
  });

  elements.closeUpgrade?.addEventListener('click', () => {
    closeModal(elements.upgradeModal);
  });

  elements.upgradeModal?.querySelector('.modal-backdrop')?.addEventListener('click', () => {
    closeModal(elements.upgradeModal);
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(elements.timerModal);
      closeModal(elements.upgradeModal);
      stopTimer();
    }
  });
}

function openModal(modal) {
  modal?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal?.classList.remove('open');
  document.body.style.overflow = '';
}

// Start app
document.addEventListener('DOMContentLoaded', init);

// Demo: Auto-show sample image for prototype
setTimeout(() => {
  // Set a placeholder gradient as "preview image" for demo
  const placeholder = document.createElement('div');
  placeholder.style.cssText = 'width:100%;height:100%;background:linear-gradient(135deg,#e5e7eb,#d1d5db);display:flex;align-items:center;justify-content:center;font-size:3rem;';
  placeholder.textContent = '🏠';
  
  const imageContainer = elements.previewImage?.parentElement;
  if (imageContainer && !elements.previewImage.src) {
    elements.previewImage.style.display = 'none';
    imageContainer.appendChild(placeholder);
  }
}, 100);
