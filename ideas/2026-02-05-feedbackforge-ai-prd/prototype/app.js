/**
 * FeedbackForge Interactive Demo
 * Simulates AI-powered feedback clustering and PRD generation
 */

// Sample feedback data
const sampleFeedback = [
  {
    id: 1,
    source: 'Intercom',
    text: 'We really need a way to export our reports to PDF. Our compliance team requires printed copies.',
    type: 'feature',
    sentiment: 'neutral',
    cluster: 'pdf-export'
  },
  {
    id: 2,
    source: 'Twitter',
    text: '@YourApp PDF export would be a game changer! Currently copying to Word manually 😩',
    type: 'feature',
    sentiment: 'negative',
    cluster: 'pdf-export'
  },
  {
    id: 3,
    source: 'App Store',
    text: 'Great app but please add PDF export. 4 stars until then.',
    type: 'feature',
    sentiment: 'positive',
    cluster: 'pdf-export'
  },
  {
    id: 4,
    source: 'Zendesk',
    text: 'The dashboard takes forever to load when I have more than 100 items. Please fix!',
    type: 'bug',
    sentiment: 'negative',
    cluster: 'performance'
  },
  {
    id: 5,
    source: 'Discord',
    text: 'Anyone else experiencing slow performance? My dashboard is crawling...',
    type: 'bug',
    sentiment: 'negative',
    cluster: 'performance'
  },
  {
    id: 6,
    source: 'G2 Review',
    text: 'Love the product but the mobile experience needs work. Hard to use on my phone.',
    type: 'feature',
    sentiment: 'mixed',
    cluster: 'mobile'
  },
  {
    id: 7,
    source: 'Intercom',
    text: 'Is there a mobile app planned? Would love to check dashboards on the go.',
    type: 'feature',
    sentiment: 'positive',
    cluster: 'mobile'
  },
  {
    id: 8,
    source: 'Slack',
    text: 'Team is asking about Slack integration. Would save us so much time!',
    type: 'feature',
    sentiment: 'positive',
    cluster: 'integrations'
  },
  {
    id: 9,
    source: 'Support Email',
    text: 'Can we get our reports as PDFs? We need to share with clients who dont have accounts.',
    type: 'feature',
    sentiment: 'neutral',
    cluster: 'pdf-export'
  },
  {
    id: 10,
    source: 'Twitter',
    text: '@YourApp the loading times have gotten worse lately. What happened?',
    type: 'bug',
    sentiment: 'negative',
    cluster: 'performance'
  }
];

// Cluster definitions
const clusters = {
  'pdf-export': {
    name: 'PDF Export Feature',
    description: 'Users want the ability to export reports and dashboards as PDF files',
    count: 0,
    sentiment: 'Mixed',
    impact: 'High'
  },
  'performance': {
    name: 'Performance Issues',
    description: 'Users experiencing slow load times, especially with large datasets',
    count: 0,
    sentiment: 'Negative',
    impact: 'Critical'
  },
  'mobile': {
    name: 'Mobile Experience',
    description: 'Requests for better mobile support or dedicated mobile app',
    count: 0,
    sentiment: 'Positive',
    impact: 'Medium'
  },
  'integrations': {
    name: 'Third-Party Integrations',
    description: 'Requests for integrations with tools like Slack, Teams, etc.',
    count: 0,
    sentiment: 'Positive',
    impact: 'Medium'
  }
};

// PRD templates
const prdTemplates = {
  'pdf-export': {
    title: 'PRD: PDF Export Feature',
    problem: 'Users need to share reports with stakeholders who don\'t have product access. Currently, they resort to manual copy-paste or screenshots, which is time-consuming and error-prone.',
    quotes: [
      '"Our compliance team requires printed copies." - Enterprise User',
      '"Currently copying to Word manually 😩" - @TwitterUser',
      '"Need to share with clients who don\'t have accounts" - Support Ticket'
    ],
    solution: 'Add native PDF export functionality for all report types with customizable formatting options.',
    requirements: [
      'Export any dashboard or report as PDF',
      'Maintain visual fidelity of charts and tables',
      'Include company branding/logo option',
      'Support batch export for multiple reports',
      'Add scheduling for automated PDF delivery'
    ],
    metrics: [
      'Adoption: 30% of users export at least one PDF within 30 days',
      'Satisfaction: CSAT score of 4.5+ for export feature',
      'Efficiency: Reduce manual export workarounds by 80%'
    ]
  },
  'performance': {
    title: 'PRD: Performance Optimization',
    problem: 'Users with large datasets (100+ items) are experiencing significant slowdowns in dashboard loading. This impacts daily workflows and user satisfaction.',
    quotes: [
      '"Dashboard takes forever to load with more than 100 items" - Support Ticket',
      '"My dashboard is crawling..." - Discord User',
      '"Loading times have gotten worse lately" - @TwitterUser'
    ],
    solution: 'Implement performance optimizations including lazy loading, pagination, and query optimization.',
    requirements: [
      'Dashboard load time under 2s for up to 1000 items',
      'Implement virtual scrolling for large lists',
      'Add loading skeletons for perceived performance',
      'Optimize database queries for common operations',
      'Add performance monitoring and alerts'
    ],
    metrics: [
      'P95 load time: Under 2 seconds',
      'Support tickets about performance: -70%',
      'User-reported performance satisfaction: 4+/5'
    ]
  },
  'mobile': {
    title: 'PRD: Mobile Experience Improvement',
    problem: 'Users want to access dashboards on mobile devices but the current responsive design is insufficient for productive mobile use.',
    quotes: [
      '"The mobile experience needs work. Hard to use on my phone." - G2 Review',
      '"Would love to check dashboards on the go." - Support Ticket'
    ],
    solution: 'Develop a mobile-first responsive redesign with optional native mobile app for power users.',
    requirements: [
      'Responsive redesign of core dashboard views',
      'Touch-optimized navigation and controls',
      'Offline mode for viewing cached data',
      'Push notifications for important alerts',
      'Native app for iOS and Android (Phase 2)'
    ],
    metrics: [
      'Mobile traffic: 25% of total sessions',
      'Mobile task completion rate: 80%+',
      'App Store rating: 4.5+ stars'
    ]
  },
  'integrations': {
    title: 'PRD: Slack Integration',
    problem: 'Teams use Slack as their primary communication tool and want to receive product updates and alerts without switching contexts.',
    quotes: [
      '"Would save us so much time!" - Slack User'
    ],
    solution: 'Build a native Slack integration for notifications, quick actions, and report sharing.',
    requirements: [
      'Connect workspace via OAuth',
      'Send alert notifications to chosen channels',
      'Share reports directly to Slack',
      'Slash commands for quick lookups',
      'Interactive messages for approvals'
    ],
    metrics: [
      'Integration adoption: 40% of teams',
      'Time saved: 2+ hours/week per team',
      'Slack interaction rate: 60%+ response rate'
    ]
  }
};

// State
let addedFeedback = [];
let currentFeedbackIndex = 0;
let selectedCluster = null;

// DOM Elements
const feedbackList = document.getElementById('feedbackList');
const addFeedbackBtn = document.getElementById('addFeedbackBtn');
const clusterList = document.getElementById('clusterList');
const prdOutput = document.getElementById('prdOutput');
const demoTabs = document.querySelectorAll('.demo-tab');
const demoPanels = document.querySelectorAll('.demo-panel');

// Analytics elements
const totalFeedbackEl = document.getElementById('totalFeedback');
const totalClustersEl = document.getElementById('totalClusters');
const avgSentimentEl = document.getElementById('avgSentiment');
const topSourceEl = document.getElementById('topSource');

// Initialize
function init() {
  addFeedbackBtn.addEventListener('click', addNextFeedback);
  
  demoTabs.forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
  
  // Add initial feedback items
  for (let i = 0; i < 3; i++) {
    addNextFeedback();
  }
}

// Add next feedback item
function addNextFeedback() {
  if (currentFeedbackIndex >= sampleFeedback.length) {
    addFeedbackBtn.disabled = true;
    addFeedbackBtn.textContent = 'All samples added';
    return;
  }
  
  const feedback = sampleFeedback[currentFeedbackIndex];
  addedFeedback.push(feedback);
  currentFeedbackIndex++;
  
  renderFeedbackList();
  updateClusters();
  updateAnalytics();
  
  // Animate new item
  const items = feedbackList.querySelectorAll('.demo-feedback-item');
  const newItem = items[items.length - 1];
  newItem.style.opacity = '0';
  newItem.style.transform = 'translateY(-10px)';
  requestAnimationFrame(() => {
    newItem.style.transition = 'all 0.3s ease';
    newItem.style.opacity = '1';
    newItem.style.transform = 'translateY(0)';
  });
}

// Render feedback list
function renderFeedbackList() {
  feedbackList.innerHTML = addedFeedback.map(feedback => `
    <div class="demo-feedback-item ${feedback.cluster ? 'clustered' : ''}" data-id="${feedback.id}">
      <div class="demo-feedback-source">${feedback.source}</div>
      <div class="demo-feedback-text">${feedback.text}</div>
    </div>
  `).join('');
}

// Update clusters based on added feedback
function updateClusters() {
  // Reset counts
  Object.keys(clusters).forEach(key => clusters[key].count = 0);
  
  // Count feedback per cluster
  addedFeedback.forEach(feedback => {
    if (feedback.cluster && clusters[feedback.cluster]) {
      clusters[feedback.cluster].count++;
    }
  });
  
  // Get active clusters (with feedback)
  const activeClusters = Object.entries(clusters)
    .filter(([_, cluster]) => cluster.count > 0)
    .sort((a, b) => b[1].count - a[1].count);
  
  if (activeClusters.length === 0) {
    clusterList.innerHTML = `
      <div class="empty-state">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="24" cy="24" r="20"/>
          <path d="M24 16v8M24 28v2"/>
        </svg>
        <p>Add feedback to see AI clustering in action</p>
      </div>
    `;
    return;
  }
  
  clusterList.innerHTML = activeClusters.map(([key, cluster]) => `
    <div class="cluster-item ${selectedCluster === key ? 'selected' : ''}" data-cluster="${key}">
      <div class="cluster-header">
        <span class="cluster-name">${cluster.name}</span>
        <span class="cluster-count">${cluster.count} items</span>
      </div>
      <div class="cluster-description">${cluster.description}</div>
    </div>
  `).join('');
  
  // Add click handlers
  clusterList.querySelectorAll('.cluster-item').forEach(item => {
    item.addEventListener('click', () => selectCluster(item.dataset.cluster));
  });
}

// Select a cluster
function selectCluster(clusterKey) {
  selectedCluster = clusterKey;
  updateClusters();
  generatePRD(clusterKey);
  switchTab('prd');
}

// Generate PRD for cluster
function generatePRD(clusterKey) {
  const prd = prdTemplates[clusterKey];
  if (!prd) {
    prdOutput.innerHTML = `
      <div class="empty-state">
        <p>PRD template not available for this cluster</p>
      </div>
    `;
    return;
  }
  
  // Simulate typing effect
  prdOutput.innerHTML = `
    <div class="generating-badge" style="justify-content: center; padding: 40px;">
      <span class="spinner"></span>
      Generating PRD...
    </div>
  `;
  
  setTimeout(() => {
    prdOutput.innerHTML = `
      <div class="prd-content">
        <h4>${prd.title}</h4>
        
        <h5>Problem Statement</h5>
        <p>${prd.problem}</p>
        
        <h5>User Quotes</h5>
        ${prd.quotes.map(q => `<div class="prd-quote">${q}</div>`).join('')}
        
        <h5>Proposed Solution</h5>
        <p>${prd.solution}</p>
        
        <h5>Requirements</h5>
        <ul>
          ${prd.requirements.map(r => `<li>${r}</li>`).join('')}
        </ul>
        
        <h5>Success Metrics</h5>
        <ul>
          ${prd.metrics.map(m => `<li>${m}</li>`).join('')}
        </ul>
      </div>
    `;
  }, 1500);
}

// Switch demo tab
function switchTab(tabName) {
  demoTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === tabName);
  });
  
  demoPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === `${tabName}-panel`);
  });
}

// Update analytics
function updateAnalytics() {
  const total = addedFeedback.length;
  const activeClusters = Object.values(clusters).filter(c => c.count > 0).length;
  
  // Calculate sentiment
  const sentiments = { positive: 0, negative: 0, neutral: 0, mixed: 0 };
  addedFeedback.forEach(f => sentiments[f.sentiment]++);
  const avgSentiment = sentiments.negative > sentiments.positive ? 'Negative' : 
                       sentiments.positive > sentiments.negative ? 'Positive' : 'Mixed';
  
  // Calculate top source
  const sources = {};
  addedFeedback.forEach(f => sources[f.source] = (sources[f.source] || 0) + 1);
  const topSource = Object.entries(sources).sort((a, b) => b[1] - a[1])[0];
  
  // Update DOM
  totalFeedbackEl.textContent = total;
  totalClustersEl.textContent = activeClusters;
  avgSentimentEl.textContent = total > 0 ? avgSentiment : '--';
  topSourceEl.textContent = topSource ? topSource[0] : '--';
  
  // Update chart bars
  const chartBars = document.querySelectorAll('.chart-bar');
  const maxCount = Math.max(...Object.values(clusters).map(c => c.count), 1);
  const clusterKeys = Object.keys(clusters);
  chartBars.forEach((bar, i) => {
    const count = clusters[clusterKeys[i]]?.count || 0;
    bar.style.height = `${Math.max((count / maxCount) * 100, 10)}%`;
  });
}

// Waitlist form handler
const waitlistForm = document.getElementById('waitlistForm');
if (waitlistForm) {
  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = waitlistForm.querySelector('input').value;
    
    // Simulate submission
    const btn = waitlistForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Joining...';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.textContent = '✓ Joined!';
      waitlistForm.querySelector('input').value = '';
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      }, 2000);
    }, 1000);
  });
}

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', () => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('mobile-open');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
