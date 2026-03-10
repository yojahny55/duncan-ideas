// Episodic — Letterboxd for TV Shows
// Interactive prototype

// Sample Data
const shows = [
    {
        id: 1,
        title: "Severance",
        year: 2022,
        genre: "Sci-Fi Thriller",
        poster: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=225&fit=crop",
        seasons: 2,
        totalEpisodes: 19,
        watchedEpisodes: 9,
        nextEpisode: { season: 1, episode: 10, title: "The We We Are" },
        episodes: generateEpisodes(2, [9, 10])
    },
    {
        id: 2,
        title: "The Bear",
        year: 2022,
        genre: "Drama",
        poster: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=225&fit=crop",
        seasons: 3,
        totalEpisodes: 28,
        watchedEpisodes: 18,
        nextEpisode: { season: 3, episode: 1, title: "Tomorrow" },
        episodes: generateEpisodes(3, [8, 10, 10])
    },
    {
        id: 3,
        title: "Shogun",
        year: 2024,
        genre: "Historical Drama",
        poster: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=225&fit=crop",
        seasons: 1,
        totalEpisodes: 10,
        watchedEpisodes: 4,
        nextEpisode: { season: 1, episode: 5, title: "Broken to the Fist" },
        episodes: generateEpisodes(1, [10])
    }
];

const recentActivity = [
    {
        show: "Severance",
        episode: "S1E9 · The Grim Barbarity of Optics and Design",
        poster: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=100&h=56&fit=crop",
        rating: 5,
        review: "That finale... I need to lie down. The corridor run scene will live in my head forever.",
        tags: ["peak-tv", "plot-twist"],
        time: "2 hours ago"
    },
    {
        show: "The Bear",
        episode: "S2E7 · Forks",
        poster: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=56&fit=crop",
        rating: 5,
        review: "A single-take masterpiece. The chaos, the pressure, Richie's arc. Perfect television.",
        tags: ["peak-tv", "rewatchable"],
        time: "Yesterday"
    },
    {
        show: "Shogun",
        episode: "S1E4 · The Eightfold Fence",
        poster: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=100&h=56&fit=crop",
        rating: 4,
        review: null,
        tags: [],
        time: "2 days ago"
    }
];

const friendsActivity = [
    {
        name: "Sarah",
        initials: "SM",
        action: "watched and reviewed",
        show: "True Detective S4E6",
        rating: 4,
        time: "1 hour ago"
    },
    {
        name: "Marcus",
        initials: "MJ",
        action: "started watching",
        show: "3 Body Problem",
        rating: null,
        time: "3 hours ago"
    },
    {
        name: "Alex",
        initials: "AK",
        action: "rated",
        show: "Fallout S1E8",
        rating: 5,
        time: "Yesterday"
    }
];

// Generate episode data
function generateEpisodes(numSeasons, episodesPerSeason) {
    const episodes = [];
    const episodeTitles = [
        "Good News About Hell", "Half Loop", "In Perpetuity", "The You You Are",
        "Defiant Jazz", "Hide and Seek", "The Grim Barbarity of Optics and Design",
        "What's for Dinner?", "The We We Are", "Hello Ms. Cobel",
        "System", "Fishes", "Sundae", "Honeydew", "Pop", "Napkins", "Review",
        "Bolognese", "Forks", "The Bear", "Tomorrow", "Next", "Doors", "Violet"
    ];
    
    let episodeIndex = 0;
    for (let s = 1; s <= numSeasons; s++) {
        for (let e = 1; e <= episodesPerSeason[s - 1]; e++) {
            const isWatched = Math.random() > 0.4;
            episodes.push({
                season: s,
                episode: e,
                title: episodeTitles[episodeIndex % episodeTitles.length],
                runtime: Math.floor(Math.random() * 25) + 35,
                watched: isWatched,
                rating: isWatched ? (Math.random() > 0.3 ? Math.floor(Math.random() * 2) + 4 : null) : null
            });
            episodeIndex++;
        }
    }
    return episodes;
}

// State
let currentShow = null;
let currentEpisode = null;
let selectedRating = 0;
let selectedTags = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCurrentlyWatching();
    renderActivityFeed();
    renderFriendsFeed();
    setupStarRating();
    setupTagSelection();
    setTodayDate();
});

// Render Currently Watching
function renderCurrentlyWatching() {
    const container = document.getElementById('currentlyWatching');
    container.innerHTML = shows.map(show => `
        <div class="show-card" onclick="openEpisodeModal(${show.id})">
            <div class="show-card-poster">
                <img src="${show.poster}" alt="${show.title}">
                <div class="show-card-overlay">
                    <div class="show-card-title">${show.title}</div>
                    <div class="show-card-meta">${show.year} · ${show.genre}</div>
                </div>
            </div>
            <div class="show-card-body">
                <div class="next-episode">
                    <span class="next-episode-label">Next Up</span>
                    <span class="next-episode-title">S${show.nextEpisode.season}E${show.nextEpisode.episode}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(show.watchedEpisodes / show.totalEpisodes) * 100}%"></div>
                </div>
                <div class="show-card-actions">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); openLogModal(${show.id}, ${show.nextEpisode.season}, ${show.nextEpisode.episode})">
                        <span class="btn-icon">▶</span> Log Next
                    </button>
                    <button class="btn btn-secondary">
                        <span class="btn-icon">📋</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Activity Feed
function renderActivityFeed() {
    const container = document.getElementById('activityFeed');
    container.innerHTML = recentActivity.map(activity => `
        <div class="activity-item">
            <img src="${activity.poster}" alt="" class="activity-poster">
            <div class="activity-content">
                <div class="activity-header">
                    <span class="activity-show">${activity.show}</span>
                    <span class="activity-episode">${activity.episode}</span>
                    <span class="activity-rating">${'★'.repeat(activity.rating)}</span>
                </div>
                ${activity.review ? `<p class="activity-review">${activity.review}</p>` : ''}
                ${activity.tags.length > 0 ? `
                    <div class="activity-tags">
                        ${activity.tags.map(tag => `<span class="activity-tag">${getTagEmoji(tag)}</span>`).join('')}
                    </div>
                ` : ''}
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `).join('');
}

// Render Friends Feed
function renderFriendsFeed() {
    const container = document.getElementById('friendsFeed');
    container.innerHTML = friendsActivity.map(activity => `
        <div class="friend-activity">
            <div class="friend-avatar">${activity.initials}</div>
            <div class="friend-content">
                <span class="friend-name">${activity.name}</span>
                <span class="friend-action"> ${activity.action} </span>
                <span class="friend-show">${activity.show}</span>
                ${activity.rating ? `<span class="friend-rating"> ${'★'.repeat(activity.rating)}</span>` : ''}
                <div class="friend-time">${activity.time}</div>
            </div>
        </div>
    `).join('');
}

// Get tag emoji
function getTagEmoji(tag) {
    const emojis = {
        'made-me-cry': '😢 Made me cry',
        'peak-tv': '🔥 Peak TV',
        'plot-twist': '😱 Plot twist',
        'filler': '😴 Filler',
        'funny': '😂 Hilarious',
        'rewatchable': '🔄 Rewatchable'
    };
    return emojis[tag] || tag;
}

// Open Log Modal
function openLogModal(showId, season, episode) {
    const show = shows.find(s => s.id === showId);
    if (!show) return;
    
    currentShow = show;
    currentEpisode = show.episodes.find(e => e.season === season && e.episode === episode);
    
    document.getElementById('modalPoster').src = show.poster;
    document.getElementById('modalShowTitle').textContent = show.title;
    document.getElementById('modalEpisodeTitle').textContent = 
        `S${season}E${episode} · ${currentEpisode ? currentEpisode.title : 'Episode'}`;
    
    // Reset form
    selectedRating = 0;
    selectedTags = [];
    updateStarDisplay();
    document.querySelectorAll('.tag').forEach(t => t.classList.remove('selected'));
    document.getElementById('reviewText').value = '';
    
    document.getElementById('logModal').classList.add('active');
}

// Close Modal
function closeModal() {
    document.getElementById('logModal').classList.remove('active');
    currentShow = null;
    currentEpisode = null;
}

// Open Episode Modal
function openEpisodeModal(showId) {
    const show = shows.find(s => s.id === showId);
    if (!show) return;
    
    currentShow = show;
    
    document.getElementById('episodeModalPoster').src = show.poster;
    document.getElementById('episodeModalTitle').textContent = show.title;
    document.getElementById('episodeModalMeta').textContent = 
        `${show.year} · ${show.genre} · ${show.seasons} Season${show.seasons > 1 ? 's' : ''}`;
    document.getElementById('showProgress').style.width = 
        `${(show.watchedEpisodes / show.totalEpisodes) * 100}%`;
    document.getElementById('progressText').textContent = 
        `${show.watchedEpisodes} of ${show.totalEpisodes} episodes watched`;
    
    // Render season tabs
    const tabsContainer = document.getElementById('seasonTabs');
    tabsContainer.innerHTML = '';
    for (let s = 1; s <= show.seasons; s++) {
        const tab = document.createElement('button');
        tab.className = `season-tab ${s === 1 ? 'active' : ''}`;
        tab.textContent = `Season ${s}`;
        tab.onclick = () => {
            document.querySelectorAll('.season-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderEpisodeList(show, s);
        };
        tabsContainer.appendChild(tab);
    }
    
    // Render first season
    renderEpisodeList(show, 1);
    
    document.getElementById('episodeModal').classList.add('active');
}

// Render Episode List
function renderEpisodeList(show, season) {
    const container = document.getElementById('episodeList');
    const seasonEpisodes = show.episodes.filter(e => e.season === season);
    
    container.innerHTML = seasonEpisodes.map(ep => `
        <div class="episode-row">
            <span class="episode-number">${ep.episode}</span>
            <img src="${show.poster}" alt="" class="episode-thumb">
            <div class="episode-info">
                <div class="episode-title">${ep.title}</div>
                <div class="episode-runtime">${ep.runtime} min</div>
            </div>
            <div class="episode-status">
                ${ep.rating ? `<span class="episode-user-rating">${'★'.repeat(ep.rating)}</span>` : ''}
                <div class="episode-watched ${ep.watched ? 'checked' : ''}" 
                     onclick="toggleEpisodeWatched(${show.id}, ${ep.season}, ${ep.episode}, this)">
                    ✓
                </div>
            </div>
        </div>
    `).join('');
}

// Close Episode Modal
function closeEpisodeModal() {
    document.getElementById('episodeModal').classList.remove('active');
    currentShow = null;
}

// Toggle Episode Watched
function toggleEpisodeWatched(showId, season, episode, element) {
    const show = shows.find(s => s.id === showId);
    if (!show) return;
    
    const ep = show.episodes.find(e => e.season === season && e.episode === episode);
    if (!ep) return;
    
    ep.watched = !ep.watched;
    element.classList.toggle('checked');
    
    if (ep.watched) {
        showToast('Episode logged!');
        show.watchedEpisodes++;
    } else {
        show.watchedEpisodes--;
    }
    
    // Update progress
    document.getElementById('showProgress').style.width = 
        `${(show.watchedEpisodes / show.totalEpisodes) * 100}%`;
    document.getElementById('progressText').textContent = 
        `${show.watchedEpisodes} of ${show.totalEpisodes} episodes watched`;
}

// Setup Star Rating
function setupStarRating() {
    const stars = document.querySelectorAll('#starRating .star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.dataset.rating);
            updateStarDisplay();
        });
        
        star.addEventListener('mouseenter', () => {
            const rating = parseInt(star.dataset.rating);
            stars.forEach((s, i) => {
                s.style.color = i < rating ? 'var(--star)' : 'var(--star-empty)';
            });
        });
    });
    
    document.getElementById('starRating').addEventListener('mouseleave', () => {
        updateStarDisplay();
    });
}

function updateStarDisplay() {
    const stars = document.querySelectorAll('#starRating .star');
    stars.forEach((star, i) => {
        star.classList.toggle('active', i < selectedRating);
        star.style.color = i < selectedRating ? 'var(--star)' : 'var(--star-empty)';
    });
}

// Setup Tag Selection
function setupTagSelection() {
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const tagValue = tag.dataset.tag;
            if (selectedTags.includes(tagValue)) {
                selectedTags = selectedTags.filter(t => t !== tagValue);
                tag.classList.remove('selected');
            } else {
                selectedTags.push(tagValue);
                tag.classList.add('selected');
            }
        });
    });
}

// Set Today's Date
function setTodayDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('watchDate').value = today;
}

// Save Log
function saveLog() {
    if (!currentShow || !currentEpisode) return;
    
    currentEpisode.watched = true;
    currentEpisode.rating = selectedRating || null;
    
    const review = document.getElementById('reviewText').value.trim();
    
    // Add to recent activity
    recentActivity.unshift({
        show: currentShow.title,
        episode: `S${currentEpisode.season}E${currentEpisode.episode} · ${currentEpisode.title}`,
        poster: currentShow.poster,
        rating: selectedRating,
        review: review || null,
        tags: [...selectedTags],
        time: "Just now"
    });
    
    currentShow.watchedEpisodes++;
    
    // Update UI
    renderCurrentlyWatching();
    renderActivityFeed();
    closeModal();
    showToast('Episode logged!');
    
    // Update stats
    const episodesEl = document.getElementById('episodesWatched');
    episodesEl.textContent = parseInt(episodesEl.textContent) + 1;
    
    if (review) {
        const reviewsEl = document.getElementById('reviewsWritten');
        reviewsEl.textContent = parseInt(reviewsEl.textContent) + 1;
    }
}

// Show Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-message').textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Close modals on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeEpisodeModal();
    }
});

// Close modals on backdrop click
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
            closeEpisodeModal();
        }
    });
});
