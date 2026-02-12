/**
 * VoiceMine - Interactive Prototype
 * Customer Interview Intelligence Dashboard
 */

// DOM Elements
const uploadBtn = document.getElementById('uploadBtn');
const uploadModal = document.getElementById('uploadModal');
const closeModal = document.getElementById('closeModal');
const cancelUpload = document.getElementById('cancelUpload');
const uploadZone = document.getElementById('uploadZone');

// Modal Controls
function openModal() {
  uploadModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModalFn() {
  uploadModal.classList.remove('active');
  document.body.style.overflow = '';
}

uploadBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFn);
cancelUpload.addEventListener('click', closeModalFn);

// Close modal on overlay click
uploadModal.addEventListener('click', (e) => {
  if (e.target === uploadModal) {
    closeModalFn();
  }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && uploadModal.classList.contains('active')) {
    closeModalFn();
  }
});

// Upload Zone Interactions
uploadZone.addEventListener('click', () => {
  // Create hidden file input
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'audio/*,video/*,.mp3,.mp4,.wav,.m4a,.webm';
  input.onchange = handleFileSelect;
  input.click();
});

// Drag and drop
uploadZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadZone.style.borderColor = 'var(--purple-500)';
  uploadZone.style.background = 'var(--purple-50)';
});

uploadZone.addEventListener('dragleave', (e) => {
  e.preventDefault();
  uploadZone.style.borderColor = '';
  uploadZone.style.background = '';
});

uploadZone.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadZone.style.borderColor = '';
  uploadZone.style.background = '';
  
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    handleFileSelect({ target: { files } });
  }
});

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    // Update upload zone to show selected file
    uploadZone.innerHTML = `
      <div class="upload-icon" style="background: var(--green-100)">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--green-600)" stroke-width="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <p class="upload-text">${file.name}</p>
      <p class="upload-subtext">${formatFileSize(file.size)}</p>
      <p class="upload-formats" style="color: var(--green-600)">Ready to process</p>
    `;
  }
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Animate stats on load
function animateStats() {
  const statValues = document.querySelectorAll('.stat-value');
  
  statValues.forEach(stat => {
    const target = stat.textContent;
    const isNumber = !isNaN(parseFloat(target));
    
    if (isNumber) {
      const numTarget = parseFloat(target);
      const suffix = target.replace(/[\d.]/g, '');
      let current = 0;
      const increment = numTarget / 30;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numTarget) {
          current = numTarget;
          clearInterval(timer);
        }
        stat.textContent = Math.floor(current) + suffix;
      }, 30);
    }
  });
}

// Animate theme bars on load
function animateThemeBars() {
  const themeFills = document.querySelectorAll('.theme-fill');
  
  themeFills.forEach(fill => {
    const targetWidth = fill.style.width;
    fill.style.width = '0%';
    
    setTimeout(() => {
      fill.style.width = targetWidth;
    }, 300);
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Delay animations slightly for smoother load
  setTimeout(animateStats, 200);
  setTimeout(animateThemeBars, 400);
});

// Simulate processing completion for demo
const processingItem = document.querySelector('.interview-item.processing');
if (processingItem) {
  setTimeout(() => {
    const indicator = processingItem.querySelector('.processing-indicator');
    const insightsSpan = processingItem.querySelector('.interview-insights');
    
    indicator.innerHTML = `
      <span class="tag">Enterprise</span>
      <span class="tag">Security</span>
    `;
    insightsSpan.textContent = '7 insights';
    processingItem.classList.remove('processing');
  }, 5000);
}

// Action button click handlers
const actionBtns = document.querySelectorAll('.action-btn');
actionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.querySelector('span').textContent;
    
    // Show a simple feedback animation
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 150);
    
    // Log action (in real app, would trigger actual functionality)
    console.log(`Action triggered: ${action}`);
    
    // Show toast notification
    showToast(`${action} feature coming soon!`);
  });
});

// Simple toast notification
function showToast(message) {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: var(--gray-900);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 1001;
    animation: slideIn 0.3s ease;
  `;
  
  // Add animation keyframes
  if (!document.querySelector('#toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(toast);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Navigation active state
const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');
    
    const pageName = item.querySelector('span').textContent;
    document.querySelector('.page-title').textContent = pageName;
    
    showToast(`Navigating to ${pageName}...`);
  });
});

// Interview item click handler
const interviewItems = document.querySelectorAll('.interview-item:not(.processing)');
interviewItems.forEach(item => {
  item.style.cursor = 'pointer';
  item.addEventListener('click', () => {
    const name = item.querySelector('.interview-name').textContent;
    showToast(`Opening interview with ${name}...`);
  });
});

// Insight item click handler
const insightItems = document.querySelectorAll('.insight-item');
insightItems.forEach(item => {
  item.style.cursor = 'pointer';
  item.addEventListener('click', () => {
    const text = item.querySelector('.insight-text').textContent;
    showToast('Viewing insight details...');
    console.log('Selected insight:', text);
  });
});

// Keyboard navigation for modal
uploadModal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    const focusableElements = uploadModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
});

// Log initialization
console.log('VoiceMine prototype initialized');
console.log('Features:', [
  'Dashboard with stats',
  'Insights list with categories',
  'Interview list with processing states',
  'Theme breakdown visualization',
  'Upload modal with drag-and-drop',
  'Navigation active states',
  'Toast notifications'
]);
