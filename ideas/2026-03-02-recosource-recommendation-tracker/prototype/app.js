// ========================================
// RecoSource App
// ========================================

(function() {
  'use strict';

  // ========================================
  // Data Store
  // ========================================
  
  const STORAGE_KEY = 'recosource_data';
  
  const categoryIcons = {
    movie: '🎬',
    book: '📚',
    tv: '📺',
    restaurant: '🍽️',
    podcast: '🎙️',
    product: '📦'
  };
  
  const sourceTypeIcons = {
    person: '👤',
    podcast: '🎙️',
    article: '📰',
    social: '📱'
  };
  
  // Sample data for demo
  const defaultData = {
    recommendations: [
      {
        id: '1',
        title: 'Severance',
        category: 'tv',
        sourceType: 'person',
        sourceName: 'Sarah',
        context: 'Dinner last week',
        receivedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'queued'
      },
      {
        id: '2',
        title: 'Atomic Habits',
        category: 'book',
        sourceType: 'podcast',
        sourceName: 'Tim Ferriss Show',
        context: 'Episode #542',
        receivedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'queued'
      },
      {
        id: '3',
        title: 'Noma 2.0 (Copenhagen)',
        category: 'restaurant',
        sourceType: 'person',
        sourceName: 'Mike',
        context: 'He visited last month',
        receivedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'queued'
      },
      {
        id: '4',
        title: 'Arc Browser',
        category: 'product',
        sourceType: 'social',
        sourceName: '@levelsio',
        context: 'Twitter thread',
        receivedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'queued'
      },
      {
        id: '5',
        title: 'Huberman Lab',
        category: 'podcast',
        sourceType: 'person',
        sourceName: 'Alex',
        context: '',
        receivedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'queued'
      },
      {
        id: '6',
        title: 'Oppenheimer',
        category: 'movie',
        sourceType: 'person',
        sourceName: 'Sarah',
        context: 'IMAX recommendation',
        receivedAt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'tried',
        rating: 5,
        thanked: true
      },
      {
        id: '7',
        title: 'Project Hail Mary',
        category: 'book',
        sourceType: 'person',
        sourceName: 'Mom',
        context: 'Christmas gift',
        receivedAt: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'tried',
        rating: 5,
        thanked: true
      },
      {
        id: '8',
        title: 'The Bear',
        category: 'tv',
        sourceType: 'article',
        sourceName: 'The Verge',
        context: 'Best TV of 2024 list',
        receivedAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'tried',
        rating: 4,
        thanked: false
      },
      {
        id: '9',
        title: 'Notion',
        category: 'product',
        sourceType: 'person',
        sourceName: 'Alex',
        context: 'Workflow discussion',
        receivedAt: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'tried',
        rating: 5,
        thanked: true
      },
      {
        id: '10',
        title: 'Dune (2021)',
        category: 'movie',
        sourceType: 'person',
        sourceName: 'Sarah',
        context: '',
        receivedAt: new Date(Date.now() - 180 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'tried',
        rating: 5,
        thanked: true
      },
      {
        id: '11',
        title: 'Four Thousand Weeks',
        category: 'book',
        sourceType: 'podcast',
        sourceName: 'Cal Newport Podcast',
        context: '',
        receivedAt: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'tried',
        rating: 4,
        thanked: false
      },
      {
        id: '12',
        title: 'Blank Street Coffee',
        category: 'restaurant',
        sourceType: 'person',
        sourceName: 'Mike',
        context: 'NYC trip',
        receivedAt: new Date(Date.now() - 100 * 24 * 60 * 60 * 1000).toISOString(),
        status: 'tried',
        rating: 3,
        thanked: false
      }
    ]
  };
  
  let appData = loadData();
  
  function loadData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : { ...defaultData };
    } catch (e) {
      return { ...defaultData };
    }
  }
  
  function saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (e) {
      console.error('Failed to save data', e);
    }
  }

  // ========================================
  // DOM Elements
  // ========================================
  
  const els = {
    tabs: document.querySelectorAll('.tab'),
    tabContents: document.querySelectorAll('.tab-content'),
    queueCount: document.getElementById('queueCount'),
    recoList: document.getElementById('recoList'),
    triedList: document.getElementById('triedList'),
    sourceLeaderboard: document.getElementById('sourceLeaderboard'),
    emptyQueue: document.getElementById('emptyQueue'),
    categoryFilter: document.getElementById('categoryFilter'),
    sourceFilter: document.getElementById('sourceFilter'),
    addBtn: document.getElementById('addBtn'),
    addModal: document.getElementById('addModal'),
    addForm: document.getElementById('addForm'),
    formSteps: document.querySelectorAll('.form-step'),
    categoryBtns: document.querySelectorAll('.category-btn'),
    sourceTypeBtns: document.querySelectorAll('.source-type-btn'),
    rateModal: document.getElementById('rateModal'),
    thanksModal: document.getElementById('thanksModal'),
    toast: document.getElementById('toast'),
    triedCount: document.getElementById('triedCount'),
    hitRate: document.getElementById('hitRate'),
    thanksSent: document.getElementById('thanksSent')
  };
  
  // Form state
  let formState = {
    step: 1,
    title: '',
    category: '',
    sourceType: 'person',
    sourceName: '',
    context: ''
  };
  
  let currentRatingItem = null;
  let currentRating = 0;

  // ========================================
  // Utility Functions
  // ========================================
  
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  }
  
  function getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  }
  
  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  
  function showToast(message) {
    els.toast.querySelector('.toast-message').textContent = message;
    els.toast.classList.remove('hidden');
    setTimeout(() => els.toast.classList.add('hidden'), 3000);
  }

  // ========================================
  // Render Functions
  // ========================================
  
  function renderQueue() {
    const queued = appData.recommendations.filter(r => r.status === 'queued');
    const categoryValue = els.categoryFilter.value;
    const sourceValue = els.sourceFilter.value;
    
    const filtered = queued.filter(r => {
      if (categoryValue !== 'all' && r.category !== categoryValue) return false;
      if (sourceValue !== 'all' && r.sourceType !== sourceValue) return false;
      return true;
    });
    
    els.queueCount.textContent = queued.length;
    
    if (filtered.length === 0) {
      els.recoList.innerHTML = '';
      els.emptyQueue.classList.remove('hidden');
      return;
    }
    
    els.emptyQueue.classList.add('hidden');
    
    els.recoList.innerHTML = filtered.map(reco => `
      <div class="reco-card" data-id="${reco.id}">
        <div class="reco-card-header">
          <div class="reco-category-icon">${categoryIcons[reco.category]}</div>
          <div class="reco-info">
            <div class="reco-title">${reco.title}</div>
            <div class="reco-meta">${formatDate(reco.receivedAt)}</div>
          </div>
        </div>
        <div class="reco-source">
          <span class="reco-source-avatar">${sourceTypeIcons[reco.sourceType]}</span>
          <span class="reco-source-name">${reco.sourceName}</span>
          ${reco.context ? `<span class="reco-source-context">· ${reco.context}</span>` : ''}
        </div>
        <div class="reco-actions">
          <button class="reco-action-btn secondary" data-action="remove" data-id="${reco.id}">Remove</button>
          <button class="reco-action-btn primary" data-action="tried" data-id="${reco.id}">I tried this!</button>
        </div>
      </div>
    `).join('');
    
    // Add event listeners
    els.recoList.querySelectorAll('[data-action="tried"]').forEach(btn => {
      btn.addEventListener('click', () => openRateModal(btn.dataset.id));
    });
    
    els.recoList.querySelectorAll('[data-action="remove"]').forEach(btn => {
      btn.addEventListener('click', () => removeRecommendation(btn.dataset.id));
    });
  }
  
  function renderTried() {
    const tried = appData.recommendations.filter(r => r.status === 'tried');
    const thanked = tried.filter(r => r.thanked).length;
    const avgRating = tried.reduce((sum, r) => sum + (r.rating || 0), 0) / tried.length;
    const hits = tried.filter(r => r.rating >= 4).length;
    
    els.triedCount.textContent = tried.length;
    els.hitRate.textContent = tried.length > 0 ? Math.round((hits / tried.length) * 100) + '%' : '—';
    els.thanksSent.textContent = thanked;
    
    els.triedList.innerHTML = tried.map(reco => `
      <div class="reco-card tried" data-id="${reco.id}">
        <div class="reco-card-header">
          <div class="reco-category-icon">${categoryIcons[reco.category]}</div>
          <div class="reco-info">
            <div class="reco-title">${reco.title}</div>
            <div class="reco-rating">
              ${[1,2,3,4,5].map(i => `<span class="star ${i <= reco.rating ? '' : 'empty'}">★</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="reco-source">
          <span class="reco-source-avatar">${sourceTypeIcons[reco.sourceType]}</span>
          <span class="reco-source-name">${reco.sourceName}</span>
          ${reco.thanked ? '<span style="margin-left: auto; color: var(--color-success);">✓ Thanked</span>' : ''}
        </div>
      </div>
    `).join('');
  }
  
  function renderSources() {
    const tried = appData.recommendations.filter(r => r.status === 'tried');
    const sourceStats = {};
    
    tried.forEach(r => {
      if (!sourceStats[r.sourceName]) {
        sourceStats[r.sourceName] = {
          name: r.sourceName,
          type: r.sourceType,
          total: 0,
          hits: 0,
          totalRating: 0
        };
      }
      sourceStats[r.sourceName].total++;
      sourceStats[r.sourceName].totalRating += r.rating || 0;
      if (r.rating >= 4) sourceStats[r.sourceName].hits++;
    });
    
    const sorted = Object.values(sourceStats)
      .map(s => ({
        ...s,
        hitRate: Math.round((s.hits / s.total) * 100),
        avgRating: (s.totalRating / s.total).toFixed(1)
      }))
      .sort((a, b) => b.hitRate - a.hitRate || b.total - a.total);
    
    els.sourceLeaderboard.innerHTML = sorted.map((source, i) => {
      let rankClass = 'default';
      if (i === 0) rankClass = 'gold';
      else if (i === 1) rankClass = 'silver';
      else if (i === 2) rankClass = 'bronze';
      
      return `
        <div class="source-card">
          <div class="source-rank ${rankClass}">${i + 1}</div>
          <div class="source-info">
            <div class="source-name">${sourceTypeIcons[source.type]} ${source.name}</div>
            <div class="source-stats">${source.total} recommendations · ${source.avgRating}★ avg</div>
          </div>
          <div class="source-hit-rate">
            <span class="source-hit-value">${source.hitRate}%</span>
            <span class="source-hit-label">hit rate</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // ========================================
  // Modal Functions
  // ========================================
  
  function openAddModal() {
    els.addModal.classList.remove('hidden');
    formState = { step: 1, title: '', category: '', sourceType: 'person', sourceName: '', context: '' };
    updateFormStep(1);
    document.getElementById('recoTitle').value = '';
    document.getElementById('sourceName').value = '';
    document.getElementById('recoContext').value = '';
    els.categoryBtns.forEach(btn => btn.classList.remove('active'));
  }
  
  function closeAddModal() {
    els.addModal.classList.add('hidden');
  }
  
  function updateFormStep(step) {
    formState.step = step;
    els.formSteps.forEach(s => {
      s.classList.toggle('active', parseInt(s.dataset.step) === step);
    });
  }
  
  function openRateModal(id) {
    const reco = appData.recommendations.find(r => r.id === id);
    if (!reco) return;
    
    currentRatingItem = reco;
    currentRating = 0;
    
    document.getElementById('rateItemTitle').textContent = reco.title;
    document.getElementById('rateSourceName').textContent = reco.sourceName;
    document.querySelectorAll('#ratingStars .star').forEach(s => s.classList.remove('active'));
    document.getElementById('saveRating').disabled = true;
    
    els.rateModal.classList.remove('hidden');
  }
  
  function closeRateModal() {
    els.rateModal.classList.add('hidden');
    currentRatingItem = null;
    currentRating = 0;
  }
  
  function openThanksModal(reco) {
    document.getElementById('thanksItem').textContent = reco.title;
    document.getElementById('thanksSource').textContent = reco.sourceName;
    els.thanksModal.classList.remove('hidden');
  }
  
  function closeThanksModal() {
    els.thanksModal.classList.add('hidden');
  }

  // ========================================
  // Data Functions
  // ========================================
  
  function addRecommendation() {
    const reco = {
      id: generateId(),
      title: formState.title,
      category: formState.category,
      sourceType: formState.sourceType,
      sourceName: formState.sourceName,
      context: formState.context,
      receivedAt: new Date().toISOString(),
      status: 'queued'
    };
    
    appData.recommendations.unshift(reco);
    saveData();
    renderQueue();
    closeAddModal();
    showToast('Recommendation saved!');
  }
  
  function removeRecommendation(id) {
    appData.recommendations = appData.recommendations.filter(r => r.id !== id);
    saveData();
    renderQueue();
    showToast('Removed');
  }
  
  function rateRecommendation(rating) {
    if (!currentRatingItem) return;
    
    currentRatingItem.status = 'tried';
    currentRatingItem.rating = rating;
    currentRatingItem.triedAt = new Date().toISOString();
    
    saveData();
    renderQueue();
    renderTried();
    renderSources();
    closeRateModal();
    
    // Show thanks prompt for 4+ stars
    if (rating >= 4) {
      openThanksModal(currentRatingItem);
    } else {
      showToast('Rated!');
    }
  }
  
  function sendThanks() {
    if (!currentRatingItem) return;
    currentRatingItem.thanked = true;
    saveData();
    renderTried();
    closeThanksModal();
    showToast(`Thanks sent to ${currentRatingItem.sourceName}! 💌`);
    currentRatingItem = null;
  }

  // ========================================
  // Event Listeners
  // ========================================
  
  // Tab switching
  els.tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      
      els.tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === targetTab));
      els.tabContents.forEach(c => c.classList.toggle('active', c.id === targetTab));
      
      if (targetTab === 'tried') renderTried();
      if (targetTab === 'sources') renderSources();
    });
  });
  
  // Filters
  els.categoryFilter.addEventListener('change', renderQueue);
  els.sourceFilter.addEventListener('change', renderQueue);
  
  // Add button
  els.addBtn.addEventListener('click', openAddModal);
  
  // Modal close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('.modal-overlay').classList.add('hidden');
    });
  });
  
  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.add('hidden');
    });
  });
  
  // Category selection
  els.categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      els.categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      formState.category = btn.dataset.category;
    });
  });
  
  // Source type selection
  els.sourceTypeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      els.sourceTypeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      formState.sourceType = btn.dataset.sourceType;
    });
  });
  
  // Form navigation
  document.querySelector('.btn-next').addEventListener('click', () => {
    formState.title = document.getElementById('recoTitle').value.trim();
    
    if (!formState.title) {
      showToast('Please enter what was recommended');
      return;
    }
    if (!formState.category) {
      showToast('Please select a category');
      return;
    }
    
    updateFormStep(2);
  });
  
  document.querySelector('.btn-back').addEventListener('click', () => {
    updateFormStep(1);
  });
  
  // Form submission
  els.addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    formState.sourceName = document.getElementById('sourceName').value.trim();
    formState.context = document.getElementById('recoContext').value.trim();
    
    if (!formState.sourceName) {
      showToast('Please enter who recommended this');
      return;
    }
    
    addRecommendation();
  });
  
  // Rating stars
  document.querySelectorAll('#ratingStars .star').forEach(star => {
    star.addEventListener('click', () => {
      currentRating = parseInt(star.dataset.rating);
      document.querySelectorAll('#ratingStars .star').forEach((s, i) => {
        s.classList.toggle('active', i < currentRating);
      });
      document.getElementById('saveRating').disabled = false;
    });
  });
  
  document.getElementById('saveRating').addEventListener('click', () => {
    if (currentRating > 0) {
      rateRecommendation(currentRating);
    }
  });
  
  document.getElementById('skipRating').addEventListener('click', () => {
    if (currentRatingItem) {
      currentRatingItem.status = 'tried';
      currentRatingItem.rating = 0;
      saveData();
      renderQueue();
      renderTried();
      closeRateModal();
      showToast('Marked as tried');
    }
  });
  
  // Thanks modal
  document.getElementById('sendThanks').addEventListener('click', sendThanks);
  document.getElementById('skipThanks').addEventListener('click', () => {
    closeThanksModal();
    showToast('Rated!');
    currentRatingItem = null;
  });

  // ========================================
  // Initialize
  // ========================================
  
  renderQueue();
  
})();
