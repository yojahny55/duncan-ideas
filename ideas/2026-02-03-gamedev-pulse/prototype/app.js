// GameDev Pulse - Interactive Prototype
// =====================================

// Sample Data
const newsData = [
  {
    id: 1,
    type: 'news',
    category: 'godot',
    source: 'Godot Engine',
    sourceIcon: '🤖',
    time: '2 hours ago',
    title: 'Godot 4.4 Released: Major Performance Improvements for 3D Games',
    description: 'The latest Godot release brings significant rendering optimizations, with up to 40% better performance in complex 3D scenes. New GDExtension APIs make C++ integration smoother than ever.',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800&h=400&fit=crop',
    likes: 342,
    comments: 89,
    bookmarks: 156,
    liked: false,
    bookmarked: false
  },
  {
    id: 2,
    type: 'devlog',
    category: 'art',
    author: {
      name: 'Sarah Chen',
      handle: '@pixelartist',
      avatar: 'SC',
      verified: true
    },
    time: '4 hours ago',
    title: 'Week 12: Finally nailed the water shader!',
    description: 'After countless iterations, I think I found the perfect balance between stylized and realistic water. The trick was using a simplified Gerstner wave approach with custom foam generation. Sharing the breakdown in this thread!',
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=800&h=400&fit=crop',
    likes: 567,
    comments: 123,
    bookmarks: 234,
    liked: true,
    bookmarked: false
  },
  {
    id: 3,
    type: 'news',
    category: 'unity',
    source: 'Unity Blog',
    sourceIcon: '🔷',
    time: '5 hours ago',
    title: 'Unity 6 LTS Now Available: Stability Focused Release',
    description: 'Unity 6 LTS brings long-awaited stability improvements and bug fixes. The new Input System is now the default, and the legacy system has been deprecated.',
    likes: 189,
    comments: 45,
    bookmarks: 78,
    liked: false,
    bookmarked: true
  },
  {
    id: 4,
    type: 'devlog',
    category: 'godot',
    author: {
      name: 'Marcus Webb',
      handle: '@indiedev_marcus',
      avatar: 'MW',
      verified: false
    },
    time: '6 hours ago',
    title: 'Devlog #8: Procedural dungeon generation is WORKING!',
    description: 'Finally got my BSP-based dungeon generator working in Godot! Each room connects logically, and I added a post-processing step to ensure no dead ends. The roguelike is coming together nicely.',
    likes: 234,
    comments: 56,
    bookmarks: 89,
    liked: false,
    bookmarked: false
  },
  {
    id: 5,
    type: 'news',
    category: 'career',
    source: 'GDC News',
    sourceIcon: '🎯',
    time: '8 hours ago',
    title: 'GDC 2026 Talk Submissions Now Open',
    description: 'The Game Developers Conference is accepting talk proposals for GDC 2026. New this year: dedicated tracks for AI in games and sustainable development practices.',
    likes: 145,
    comments: 23,
    bookmarks: 67,
    liked: false,
    bookmarked: false
  },
  {
    id: 6,
    type: 'news',
    category: 'unreal',
    source: 'Unreal Engine',
    sourceIcon: '⚡',
    time: '10 hours ago',
    title: 'Nanite Now Supports Foliage in UE 5.5',
    description: 'Epic Games announces that Nanite virtualized geometry now fully supports foliage assets, enabling massive forests with billions of polygons at interactive framerates.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=400&fit=crop',
    likes: 456,
    comments: 98,
    bookmarks: 201,
    liked: false,
    bookmarked: false
  },
  {
    id: 7,
    type: 'devlog',
    category: 'art',
    author: {
      name: 'Luna Park',
      handle: '@luna_pixels',
      avatar: 'LP',
      verified: true
    },
    time: '12 hours ago',
    title: 'Pixel art tileset complete! 400+ unique tiles',
    description: 'After 3 months of work, my fantasy RPG tileset is done! Includes terrain, buildings, props, and animated decorations. Releasing it on itch.io next week.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop',
    likes: 892,
    comments: 167,
    bookmarks: 445,
    liked: false,
    bookmarked: false
  }
];

// State
let currentFilter = 'all';
let currentTab = 'latest';

// DOM Elements
const feedContent = document.getElementById('feedContent');
const feedTitle = document.getElementById('feedTitle');
const toastContainer = document.getElementById('toastContainer');
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const postBtn = document.getElementById('postBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  showLoading();
  setTimeout(() => {
    renderFeed();
  }, 1000); // Simulate loading
  
  initNavigation();
  initTabs();
  initMobileMenu();
  initPostButton();
});

// Show Loading State
function showLoading() {
  feedContent.innerHTML = `
    <div class="card fade-in">
      <div class="card-header">
        <div class="skeleton skeleton-avatar"></div>
        <div style="flex: 1;">
          <div class="skeleton skeleton-text" style="width: 120px;"></div>
          <div class="skeleton skeleton-text" style="width: 80px; height: 0.75em;"></div>
        </div>
      </div>
      <div class="skeleton skeleton-text title"></div>
      <div class="skeleton skeleton-text desc"></div>
      <div class="skeleton skeleton-text short"></div>
      <div class="skeleton skeleton-image" style="margin-top: 1rem;"></div>
    </div>
    <div class="card fade-in">
      <div class="card-header">
        <div class="skeleton skeleton-avatar"></div>
        <div style="flex: 1;">
          <div class="skeleton skeleton-text" style="width: 150px;"></div>
          <div class="skeleton skeleton-text" style="width: 60px; height: 0.75em;"></div>
        </div>
      </div>
      <div class="skeleton skeleton-text title"></div>
      <div class="skeleton skeleton-text desc"></div>
      <div class="skeleton skeleton-text" style="width: 70%;"></div>
    </div>
    <div class="card fade-in">
      <div class="card-header">
        <div class="skeleton skeleton-avatar"></div>
        <div style="flex: 1;">
          <div class="skeleton skeleton-text" style="width: 100px;"></div>
          <div class="skeleton skeleton-text" style="width: 90px; height: 0.75em;"></div>
        </div>
      </div>
      <div class="skeleton skeleton-text title"></div>
      <div class="skeleton skeleton-text desc"></div>
    </div>
  `;
}

// Render Feed
function renderFeed() {
  let filteredData = newsData;
  
  // Apply category filter
  if (currentFilter !== 'all' && currentFilter !== 'devlogs' && currentFilter !== 'bookmarks' && currentFilter !== 'liked') {
    filteredData = newsData.filter(item => item.category === currentFilter);
  }
  
  // Special filters
  if (currentFilter === 'devlogs') {
    filteredData = newsData.filter(item => item.type === 'devlog');
  }
  
  if (currentFilter === 'bookmarks') {
    filteredData = newsData.filter(item => item.bookmarked);
  }
  
  if (currentFilter === 'liked') {
    filteredData = newsData.filter(item => item.liked);
  }
  
  // Apply tab sorting
  if (currentTab === 'trending') {
    filteredData = [...filteredData].sort((a, b) => b.likes - a.likes);
  }
  
  // Show empty state if no results
  if (filteredData.length === 0) {
    feedContent.innerHTML = `
      <div class="empty-state fade-in">
        <div class="empty-state-icon">📭</div>
        <h3 class="empty-state-title">No posts yet</h3>
        <p class="empty-state-description">
          ${currentFilter === 'bookmarks' ? "You haven't bookmarked anything yet." : 
            currentFilter === 'liked' ? "You haven't liked anything yet." :
            "No posts match this filter. Check back later!"}
        </p>
        <button class="btn btn-primary" onclick="setFilter('all')">View All News</button>
      </div>
    `;
    return;
  }
  
  // Render cards
  feedContent.innerHTML = filteredData.map(item => 
    item.type === 'devlog' ? renderDevlogCard(item) : renderNewsCard(item)
  ).join('');
  
  // Add event listeners for actions
  initCardActions();
}

// Render News Card
function renderNewsCard(item) {
  return `
    <article class="card fade-in" data-id="${item.id}">
      <div class="card-header">
        <div class="card-source">
          <div class="source-icon ${item.category}">${item.sourceIcon}</div>
          <div class="source-info">
            <span class="source-name">${item.source}</span>
            <span class="source-meta">${item.time}</span>
          </div>
        </div>
        <span class="card-tag ${item.category}">${capitalize(item.category)}</span>
      </div>
      
      <a href="#" class="card-title">${item.title}</a>
      <p class="card-description">${item.description}</p>
      
      ${item.image ? `<img src="${item.image}" alt="" class="card-image" loading="lazy">` : ''}
      
      <div class="card-footer">
        <button class="card-action ${item.liked ? 'liked' : ''}" data-action="like" data-id="${item.id}">
          <span>${item.liked ? '❤️' : '🤍'}</span>
          <span>${item.likes}</span>
        </button>
        <button class="card-action" data-action="comment" data-id="${item.id}">
          <span>💬</span>
          <span>${item.comments}</span>
        </button>
        <button class="card-action ${item.bookmarked ? 'bookmarked' : ''}" data-action="bookmark" data-id="${item.id}">
          <span>${item.bookmarked ? '🔖' : '📑'}</span>
          <span>${item.bookmarks}</span>
        </button>
        <button class="card-action" data-action="share" data-id="${item.id}" style="margin-left: auto;">
          <span>🔗</span>
          <span>Share</span>
        </button>
      </div>
    </article>
  `;
}

// Render Devlog Card
function renderDevlogCard(item) {
  return `
    <article class="card devlog fade-in" data-id="${item.id}">
      <div class="card-header">
        <div class="devlog-author">
          <div class="author-avatar">${item.author.avatar}</div>
          <div class="author-info">
            <span class="author-name">
              ${item.author.name}
              ${item.author.verified ? '<span class="verified-badge">✓</span>' : ''}
            </span>
            <span class="author-handle">${item.author.handle} · ${item.time}</span>
          </div>
        </div>
        <span class="card-tag ${item.category}">${capitalize(item.category)}</span>
      </div>
      
      <a href="#" class="card-title">${item.title}</a>
      <p class="card-description">${item.description}</p>
      
      ${item.image ? `<img src="${item.image}" alt="" class="card-image" loading="lazy">` : ''}
      
      <div class="card-footer">
        <button class="card-action ${item.liked ? 'liked' : ''}" data-action="like" data-id="${item.id}">
          <span>${item.liked ? '❤️' : '🤍'}</span>
          <span>${item.likes}</span>
        </button>
        <button class="card-action" data-action="comment" data-id="${item.id}">
          <span>💬</span>
          <span>${item.comments}</span>
        </button>
        <button class="card-action ${item.bookmarked ? 'bookmarked' : ''}" data-action="bookmark" data-id="${item.id}">
          <span>${item.bookmarked ? '🔖' : '📑'}</span>
          <span>${item.bookmarks}</span>
        </button>
        <button class="card-action" data-action="share" data-id="${item.id}" style="margin-left: auto;">
          <span>🔗</span>
          <span>Share</span>
        </button>
      </div>
    </article>
  `;
}

// Initialize Navigation
function initNavigation() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update active state
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      
      // Update filter
      const filter = item.dataset.filter;
      setFilter(filter);
      
      // Close mobile menu
      sidebar.classList.remove('open');
    });
  });
}

// Set Filter
function setFilter(filter) {
  currentFilter = filter;
  
  // Update title
  const titles = {
    'all': 'All News',
    'devlogs': 'Devlogs',
    'jobs': 'Job Board',
    'events': 'Events',
    'unity': 'Unity',
    'godot': 'Godot',
    'unreal': 'Unreal Engine',
    'art': 'Art & Animation',
    'audio': 'Audio',
    'design': 'Game Design',
    'career': 'Career',
    'bookmarks': 'Bookmarks',
    'liked': 'Liked'
  };
  
  feedTitle.textContent = titles[filter] || 'All News';
  
  // Show loading then render
  showLoading();
  setTimeout(renderFeed, 500);
}

// Initialize Tabs
function initTabs() {
  document.querySelectorAll('.feed-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.feed-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      currentTab = tab.dataset.tab;
      showLoading();
      setTimeout(renderFeed, 500);
    });
  });
}

// Initialize Card Actions
function initCardActions() {
  document.querySelectorAll('.card-action').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const action = btn.dataset.action;
      const id = parseInt(btn.dataset.id);
      const item = newsData.find(i => i.id === id);
      
      if (!item) return;
      
      switch (action) {
        case 'like':
          item.liked = !item.liked;
          item.likes += item.liked ? 1 : -1;
          showToast(item.liked ? 'Added to liked!' : 'Removed from liked', 'success');
          break;
          
        case 'bookmark':
          item.bookmarked = !item.bookmarked;
          item.bookmarks += item.bookmarked ? 1 : -1;
          showToast(item.bookmarked ? 'Bookmarked!' : 'Removed from bookmarks', 'success');
          break;
          
        case 'comment':
          showToast('Comments coming soon!', 'info');
          return;
          
        case 'share':
          navigator.clipboard?.writeText(window.location.href);
          showToast('Link copied to clipboard!', 'success');
          return;
      }
      
      renderFeed();
    });
  });
}

// Initialize Mobile Menu
function initMobileMenu() {
  menuBtn?.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
  
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

// Initialize Post Button
function initPostButton() {
  postBtn?.addEventListener('click', () => {
    showToast('Devlog editor coming soon!', 'info');
  });
}

// Show Toast Notification
function showToast(message, type = 'info') {
  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️'
  };
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type]}</span>
    <div class="toast-content">
      <span class="toast-message">${message}</span>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">×</button>
  `;
  
  toastContainer.appendChild(toast);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Utility: Capitalize
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
  // Escape closes mobile menu
  if (e.key === 'Escape') {
    sidebar.classList.remove('open');
  }
  
  // Cmd/Ctrl + K focuses search
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    document.querySelector('.search-input')?.focus();
  }
});

// Search functionality (basic filter)
document.querySelector('.search-input')?.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  
  if (!query) {
    renderFeed();
    return;
  }
  
  const filtered = newsData.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.description.toLowerCase().includes(query)
  );
  
  if (filtered.length === 0) {
    feedContent.innerHTML = `
      <div class="empty-state fade-in">
        <div class="empty-state-icon">🔍</div>
        <h3 class="empty-state-title">No results found</h3>
        <p class="empty-state-description">Try different keywords or browse categories.</p>
      </div>
    `;
    return;
  }
  
  feedContent.innerHTML = filtered.map(item => 
    item.type === 'devlog' ? renderDevlogCard(item) : renderNewsCard(item)
  ).join('');
  
  initCardActions();
});
