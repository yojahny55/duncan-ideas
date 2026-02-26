/**
 * RideRate - Transit Feedback App
 * Interactive Prototype
 */

// ============================================
// DATA
// ============================================

const routes = [
    { id: 'L', name: 'L Train', color: '#A7A9AC', stations: ['8th Ave', '14th St', '6th Ave', '1st Ave', 'Bedford Ave'] },
    { id: '1', name: '1 Train', color: '#EE352E', stations: ['Times Sq', '14th St', 'Christopher St', 'Chambers St'] },
    { id: '2', name: '2 Train', color: '#EE352E', stations: ['Times Sq', '14th St', 'Chambers St', 'Wall St'] },
    { id: '3', name: '3 Train', color: '#EE352E', stations: ['Times Sq', '14th St', 'Chambers St', 'Wall St'] },
    { id: '4', name: '4 Train', color: '#00933C', stations: ['Grand Central', '14th St', 'Brooklyn Bridge', 'Wall St'] },
    { id: '5', name: '5 Train', color: '#00933C', stations: ['Grand Central', '14th St', 'Fulton St', 'Wall St'] },
    { id: '6', name: '6 Train', color: '#00933C', stations: ['Grand Central', '14th St', 'Bleecker St', 'Brooklyn Bridge'] },
    { id: '7', name: '7 Train', color: '#B933AD', stations: ['Times Sq', 'Grand Central', 'Flushing', 'Mets-Willets'] },
    { id: 'A', name: 'A Train', color: '#0039A6', stations: ['Times Sq', '14th St', 'Canal St', 'Chambers St'] },
    { id: 'C', name: 'C Train', color: '#0039A6', stations: ['Times Sq', '14th St', 'Canal St', 'Chambers St'] },
    { id: 'E', name: 'E Train', color: '#0039A6', stations: ['Times Sq', '14th St', 'Canal St', 'World Trade'] },
    { id: 'N', name: 'N Train', color: '#FCCC0A', stations: ['Times Sq', '14th St', 'Canal St', 'City Hall'] },
    { id: 'Q', name: 'Q Train', color: '#FCCC0A', stations: ['Times Sq', '14th St', 'Canal St', 'DeKalb'] },
    { id: 'R', name: 'R Train', color: '#FCCC0A', stations: ['Times Sq', '14th St', 'Canal St', 'City Hall'] },
];

const pulseData = [
    { line: 'L', color: '#A7A9AC', score: 67, trend: '↘️' },
    { line: '1', color: '#EE352E', score: 82, trend: '↗️' },
    { line: 'A', color: '#0039A6', score: 74, trend: '→' },
    { line: '7', color: '#B933AD', score: 91, trend: '↗️' },
];

const feedData = [
    {
        id: 1,
        user: 'CommuteCat',
        avatar: '🐱',
        time: '2 min ago',
        mood: '😕',
        tags: ['Delayed', 'Crowded'],
        comment: 'Waited 15 mins for the L. Platform was packed.'
    },
    {
        id: 2,
        user: 'SubwayPro',
        avatar: '🚇',
        time: '5 min ago',
        mood: '🙂',
        tags: ['On-time'],
        comment: null
    },
    {
        id: 3,
        user: 'MorningRider',
        avatar: '☀️',
        time: '8 min ago',
        mood: '😤',
        tags: ['Delayed', 'Dirty'],
        comment: 'AC broken in my car. 85 degrees in here. Brutal.'
    },
    {
        id: 4,
        user: 'BedStuyLocal',
        avatar: '🏠',
        time: '12 min ago',
        mood: '😐',
        tags: ['Crowded'],
        comment: null
    },
];

// ============================================
// STATE
// ============================================

let state = {
    selectedMood: null,
    selectedTags: new Set(),
    comment: '',
    currentRoute: routes[0],
    showComment: false,
    xp: 1240
};

// ============================================
// DOM ELEMENTS
// ============================================

const elements = {
    pulseGrid: document.getElementById('pulseGrid'),
    moodSelector: document.getElementById('moodSelector'),
    moodLabel: document.getElementById('moodLabel'),
    tagsGrid: document.getElementById('tagsGrid'),
    submitBtn: document.getElementById('submitBtn'),
    addCommentBtn: document.getElementById('addCommentBtn'),
    commentInput: document.getElementById('commentInput'),
    commentText: document.getElementById('commentText'),
    feedList: document.getElementById('feedList'),
    successToast: document.getElementById('successToast'),
    routeModal: document.getElementById('routeModal'),
    routeList: document.getElementById('routeList'),
    routeBadge: document.getElementById('routeBadge'),
    routeName: document.getElementById('routeName'),
    routeStation: document.getElementById('routeStation'),
    changeRouteBtn: document.getElementById('changeRouteBtn'),
    closeRouteModal: document.getElementById('closeRouteModal'),
    routeSearch: document.getElementById('routeSearch'),
};

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderPulseGrid() {
    elements.pulseGrid.innerHTML = pulseData.map(item => {
        const scoreClass = item.score >= 80 ? 'good' : item.score >= 60 ? 'okay' : 'bad';
        return `
            <div class="pulse-card">
                <div class="pulse-line" style="background: ${item.color}">${item.line}</div>
                <div class="pulse-score ${scoreClass}">${item.score}%</div>
                <div class="pulse-trend">${item.trend}</div>
            </div>
        `;
    }).join('');
}

function renderFeed() {
    elements.feedList.innerHTML = feedData.map(item => `
        <div class="feed-item">
            <div class="feed-header">
                <div class="feed-avatar">${item.avatar}</div>
                <div class="feed-meta">
                    <div class="feed-user">${item.user}</div>
                    <div class="feed-time">${item.time}</div>
                </div>
                <div class="feed-mood">${item.mood}</div>
            </div>
            <div class="feed-tags">
                ${item.tags.map(tag => `<span class="feed-tag">${tag}</span>`).join('')}
            </div>
            ${item.comment ? `<div class="feed-comment">${item.comment}</div>` : ''}
        </div>
    `).join('');
}

function renderRouteList(filter = '') {
    const filtered = routes.filter(r => 
        r.name.toLowerCase().includes(filter.toLowerCase()) ||
        r.id.toLowerCase().includes(filter.toLowerCase())
    );
    
    elements.routeList.innerHTML = filtered.map(route => `
        <div class="route-option" data-route-id="${route.id}">
            <div class="route-option-badge" style="background: ${route.color}">${route.id}</div>
            <div class="route-option-info">
                <div class="route-option-name">${route.name}</div>
                <div class="route-option-desc">${route.stations.slice(0, 3).join(' → ')}...</div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    elements.routeList.querySelectorAll('.route-option').forEach(option => {
        option.addEventListener('click', () => {
            const routeId = option.dataset.routeId;
            const route = routes.find(r => r.id === routeId);
            if (route) {
                selectRoute(route);
                closeRouteModal();
            }
        });
    });
}

function updateRouteDisplay() {
    elements.routeBadge.textContent = state.currentRoute.id;
    elements.routeBadge.style.background = state.currentRoute.color;
    elements.routeName.textContent = state.currentRoute.name;
    const randomStation = state.currentRoute.stations[Math.floor(Math.random() * state.currentRoute.stations.length)];
    elements.routeStation.textContent = `→ ${randomStation}`;
}

function updateSubmitButton() {
    elements.submitBtn.disabled = state.selectedMood === null;
}

// ============================================
// EVENT HANDLERS
// ============================================

function setupMoodSelector() {
    elements.moodSelector.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove selected from all
            elements.moodSelector.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
            
            // Add selected to clicked
            btn.classList.add('selected');
            
            // Update state
            state.selectedMood = parseInt(btn.dataset.mood);
            elements.moodLabel.textContent = btn.dataset.label;
            
            updateSubmitButton();
        });
    });
}

function setupTags() {
    elements.tagsGrid.querySelectorAll('.tag-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tag = btn.dataset.tag;
            
            if (state.selectedTags.has(tag)) {
                state.selectedTags.delete(tag);
                btn.classList.remove('selected');
            } else {
                state.selectedTags.add(tag);
                btn.classList.add('selected');
            }
        });
    });
}

function setupCommentSection() {
    elements.addCommentBtn.addEventListener('click', () => {
        elements.addCommentBtn.classList.add('hidden');
        elements.commentInput.classList.remove('hidden');
        elements.commentText.focus();
    });
    
    elements.commentText.addEventListener('input', (e) => {
        state.comment = e.target.value;
    });
}

function setupSubmit() {
    elements.submitBtn.addEventListener('click', () => {
        if (state.selectedMood === null) return;
        
        // Show success toast
        showToast();
        
        // Reset form
        resetForm();
        
        // Add to feed
        addToFeed();
    });
}

function setupRouteModal() {
    elements.changeRouteBtn.addEventListener('click', openRouteModal);
    elements.closeRouteModal.addEventListener('click', closeRouteModal);
    elements.routeModal.addEventListener('click', (e) => {
        if (e.target === elements.routeModal) {
            closeRouteModal();
        }
    });
    
    elements.routeSearch.addEventListener('input', (e) => {
        renderRouteList(e.target.value);
    });
}

function openRouteModal() {
    elements.routeModal.classList.remove('hidden');
    renderRouteList();
}

function closeRouteModal() {
    elements.routeModal.classList.add('hidden');
    elements.routeSearch.value = '';
}

function selectRoute(route) {
    state.currentRoute = route;
    updateRouteDisplay();
}

function showToast() {
    elements.successToast.classList.remove('hidden');
    elements.successToast.classList.add('show');
    
    setTimeout(() => {
        elements.successToast.classList.remove('show');
        setTimeout(() => {
            elements.successToast.classList.add('hidden');
        }, 300);
    }, 3000);
}

function resetForm() {
    state.selectedMood = null;
    state.selectedTags.clear();
    state.comment = '';
    
    elements.moodSelector.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
    elements.tagsGrid.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('selected'));
    elements.moodLabel.textContent = 'Tap to rate';
    elements.commentText.value = '';
    elements.commentInput.classList.add('hidden');
    elements.addCommentBtn.classList.remove('hidden');
    
    updateSubmitButton();
}

function addToFeed() {
    const moodEmojis = { 1: '😤', 2: '😕', 3: '😐', 4: '🙂', 5: '😊' };
    const tagLabels = {
        crowded: 'Crowded',
        delayed: 'Delayed',
        ontime: 'On-time',
        clean: 'Clean',
        dirty: 'Dirty',
        helpful: 'Helpful staff'
    };
    
    const newFeedItem = {
        id: Date.now(),
        user: 'You',
        avatar: '👤',
        time: 'Just now',
        mood: moodEmojis[state.selectedMood],
        tags: Array.from(state.selectedTags).map(t => tagLabels[t]),
        comment: state.comment || null
    };
    
    feedData.unshift(newFeedItem);
    renderFeed();
    
    // Update XP
    state.xp += 15;
    document.querySelector('.xp-badge').textContent = `⚡ ${state.xp.toLocaleString()} XP`;
}

// ============================================
// NAVIGATION
// ============================================

function setupNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Scroll to rate section if rate button clicked
            if (btn.dataset.tab === 'rate') {
                document.getElementById('rateSection').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// LIVE UPDATES (SIMULATION)
// ============================================

function simulateLiveUpdates() {
    setInterval(() => {
        // Randomly update a pulse score
        const randomIndex = Math.floor(Math.random() * pulseData.length);
        const change = Math.random() > 0.5 ? 1 : -1;
        pulseData[randomIndex].score = Math.max(30, Math.min(100, pulseData[randomIndex].score + change));
        
        // Update trend
        if (change > 0) {
            pulseData[randomIndex].trend = '↗️';
        } else {
            pulseData[randomIndex].trend = '↘️';
        }
        
        renderPulseGrid();
    }, 5000);
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    renderPulseGrid();
    renderFeed();
    updateRouteDisplay();
    
    setupMoodSelector();
    setupTags();
    setupCommentSection();
    setupSubmit();
    setupRouteModal();
    setupNavigation();
    
    simulateLiveUpdates();
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
