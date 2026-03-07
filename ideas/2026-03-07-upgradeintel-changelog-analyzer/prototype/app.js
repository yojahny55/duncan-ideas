// UpgradeIntel - AI-Powered Dependency Changelog Analyzer
// Prototype JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const scanBtn = document.getElementById('scanBtn');
  const scanModal = document.getElementById('scanModal');
  const cancelScan = document.getElementById('cancelScan');
  const updateSafeBtn = document.getElementById('updateSafeBtn');
  const toast = document.getElementById('toast');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('searchInput');
  const packageCards = document.querySelectorAll('.package-card, .safe-package');
  const expandBtns = document.querySelectorAll('.expand-btn');
  const showMoreSafe = document.getElementById('showMoreSafe');

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      filterPackages(filter, searchInput.value);
    });
  });

  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    filterPackages(activeFilter, e.target.value);
  });

  function filterPackages(category, searchTerm) {
    const term = searchTerm.toLowerCase();
    
    // Handle section headers visibility
    const sections = {
      critical: document.querySelector('.section-critical'),
      breaking: document.querySelector('.section-breaking'),
      safe: document.querySelector('.section-safe')
    };
    const safeGrid = document.querySelector('.safe-packages-grid');

    // Reset visibility
    Object.values(sections).forEach(s => s && (s.style.display = ''));
    if (safeGrid) safeGrid.style.display = '';

    packageCards.forEach(card => {
      const name = card.dataset.package || '';
      const cardCategory = card.dataset.category || '';
      
      const matchesSearch = name.toLowerCase().includes(term);
      const matchesCategory = category === 'all' || cardCategory === category;
      
      if (matchesSearch && matchesCategory) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });

    // Hide section headers if no visible items
    if (category !== 'all') {
      Object.entries(sections).forEach(([key, section]) => {
        if (section && key !== category) {
          section.style.display = 'none';
        }
      });
      if (category !== 'safe' && safeGrid) {
        safeGrid.style.display = 'none';
      }
    }
  }

  // Expand/collapse package details
  expandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.package-card');
      card.classList.toggle('expanded');
      
      // Rotate chevron
      const svg = btn.querySelector('svg');
      if (card.classList.contains('expanded')) {
        svg.style.transform = 'rotate(180deg)';
      } else {
        svg.style.transform = '';
      }
    });
  });

  // Scan button - show modal
  scanBtn.addEventListener('click', () => {
    scanModal.classList.add('active');
    simulateScan();
  });

  // Cancel scan
  cancelScan.addEventListener('click', () => {
    scanModal.classList.remove('active');
  });

  // Close modal on overlay click
  scanModal.addEventListener('click', (e) => {
    if (e.target === scanModal) {
      scanModal.classList.remove('active');
    }
  });

  // Simulate scan progress
  function simulateScan() {
    const steps = scanModal.querySelectorAll('.scan-step');
    const currentPackage = scanModal.querySelector('.current-package');
    const packageProgress = scanModal.querySelector('.package-progress');
    
    const packages = [
      '@tanstack/react-query',
      'axios',
      'lodash',
      'next',
      'zod',
      'typescript',
      'eslint',
      'prettier'
    ];
    
    let currentStep = 2; // Start at step 3 (0-indexed)
    let packageIndex = 0;

    const interval = setInterval(() => {
      if (packageIndex < packages.length) {
        currentPackage.textContent = packages[packageIndex];
        packageProgress.textContent = `${packageIndex + 1} of 23`;
        packageIndex++;
      } else if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove('active');
        steps[currentStep].classList.add('completed');
        steps[currentStep].innerHTML = `
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="#22C55E" stroke-width="2"/>
            <path d="M6 10l2.5 2.5L14 7" stroke="#22C55E" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>${steps[currentStep].querySelector('span').textContent}</span>
        `;
        currentStep++;
        if (currentStep < steps.length) {
          steps[currentStep].classList.add('active');
          steps[currentStep].innerHTML = `
            <div class="spinner"></div>
            <span>${steps[currentStep].querySelector('span').textContent}</span>
          `;
        }
      } else {
        clearInterval(interval);
        setTimeout(() => {
          scanModal.classList.remove('active');
          showToast('Scan complete! Found 23 updates.');
        }, 500);
      }
    }, 800);
  }

  // Update All Safe button
  updateSafeBtn.addEventListener('click', () => {
    const btn = updateSafeBtn;
    const originalText = btn.innerHTML;
    
    btn.disabled = true;
    btn.innerHTML = `
      <div class="spinner" style="width: 14px; height: 14px; border-width: 2px;"></div>
      Updating...
    `;

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      showToast('18 packages updated successfully!');
      
      // Update the safe count
      const safePackages = document.querySelectorAll('.safe-package');
      safePackages.forEach(pkg => {
        const versionEl = pkg.querySelector('.version');
        const tagEl = pkg.querySelector('.tag');
        if (tagEl && !tagEl.classList.contains('tag-uptodate')) {
          const version = versionEl.textContent.split(' → ')[1];
          versionEl.textContent = version;
          tagEl.textContent = 'Up to date';
          tagEl.className = 'tag tag-uptodate';
        }
      });
    }, 2000);
  });

  // Show toast notification
  function showToast(message) {
    toast.querySelector('span').textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // Show more safe packages
  showMoreSafe.addEventListener('click', () => {
    const morePackages = [
      { name: 'postcss', version: '8.4.32 → 8.4.35', tag: 'Patch' },
      { name: 'autoprefixer', version: '10.4.16 → 10.4.17', tag: 'Patch' },
      { name: 'lucide-react', version: '0.294.0 → 0.344.0', tag: 'Minor' },
      { name: 'clsx', version: '2.0.0 → 2.1.0', tag: 'Minor' },
      { name: '@types/node', version: '20.10.5 → 20.11.19', tag: 'Patch' },
      { name: '@types/react', version: '18.2.45 → 18.2.57', tag: 'Patch' },
      { name: 'zustand', version: '4.4.7 → 4.5.1', tag: 'Minor' },
      { name: 'swr', version: '2.2.4 → 2.2.5', tag: 'Patch' },
      { name: 'recharts', version: '2.10.3 → 2.12.0', tag: 'Minor' },
      { name: 'dayjs', version: '1.11.10 → 1.11.10', tag: 'Up to date' }
    ];

    const grid = document.querySelector('.safe-packages-grid');
    
    morePackages.forEach(pkg => {
      const el = document.createElement('div');
      el.className = 'safe-package';
      el.dataset.package = pkg.name;
      el.dataset.category = 'safe';
      el.innerHTML = `
        <span class="name">${pkg.name}</span>
        <span class="version">${pkg.version}</span>
        <span class="tag ${pkg.tag === 'Up to date' ? 'tag-uptodate' : 'tag-safe'}">${pkg.tag}</span>
      `;
      grid.appendChild(el);
    });

    showMoreSafe.style.display = 'none';
  });

  // Copy button functionality
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.closest('.code-block');
      const code = codeBlock.querySelector('code').textContent;
      
      navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.color = '#22C55E';
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.color = '';
        }, 2000);
      });
    });
  });

  // Click on safe package to show mini-details
  document.querySelectorAll('.safe-package').forEach(pkg => {
    pkg.addEventListener('click', () => {
      // Could expand to show changelog summary
      const name = pkg.dataset.package;
      showToast(`${name}: Bug fixes and performance improvements`);
    });
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K for search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
    
    // Escape to close modal
    if (e.key === 'Escape') {
      scanModal.classList.remove('active');
    }
  });
});
