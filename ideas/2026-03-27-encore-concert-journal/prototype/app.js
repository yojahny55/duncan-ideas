// ── Sample Data ──
const sampleFeed = [
  {
    user: '🎸', username: 'Alex Rivera', time: '2h ago',
    artist: 'Radiohead', venue: 'Madison Square Garden, NYC',
    date: 'Mar 25, 2026', stars: 5,
    tags: ['🔥 Electric', '😢 Emotional', '🎸 Legendary'],
    highlight: 'When the entire arena went silent during "How to Disappear Completely" — 20,000 people holding their breath.',
    review: 'Third time seeing them. This was the one. Thom was possessed. The sound was immaculate. I cried during Everything In Its Right Place.',
    likes: 47, comments: 12
  },
  {
    user: '🎤', username: 'Maya Chen', time: '5h ago',
    artist: 'Billie Eilish', venue: 'Kia Forum, Los Angeles',
    date: 'Mar 24, 2026', stars: 4,
    tags: ['✨ Euphoric', '🕯️ Intimate'],
    highlight: 'She performed "What Was I Made For?" with just a single spotlight. The whole arena lit up with phone flashlights.',
    review: null,
    likes: 32, comments: 8
  },
  {
    user: '🎹', username: 'Jordan Park', time: '1d ago',
    artist: 'Khruangbin', venue: 'Red Rocks Amphitheatre, CO',
    date: 'Mar 23, 2026', stars: 5,
    tags: ['🌙 Chill', '🎸 Legendary'],
    highlight: 'That bass line during "Maria También" with the sun setting behind Red Rocks. Perfection.',
    review: 'The vibe at Red Rocks is unmatched. Khruangbin was born to play this venue. Zero words spoken between songs, just pure groove.',
    likes: 89, comments: 23
  },
  {
    user: '🥁', username: 'Sam Torres', time: '2d ago',
    artist: 'Fontaines D.C.', venue: 'Brooklyn Steel, NYC',
    date: 'Mar 22, 2026', stars: 4,
    tags: ['💀 Mosh Pit', '🔥 Electric'],
    highlight: 'Grian dove into the crowd during "Boys in the Better Land" — absolute chaos.',
    review: 'Raw energy. My shoes are somewhere in Brooklyn Steel. Worth it.',
    likes: 56, comments: 15
  },
  {
    user: '🎺', username: 'Priya Nair', time: '3d ago',
    artist: 'Norah Jones', venue: 'The Ryman Auditorium, Nashville',
    date: 'Mar 21, 2026', stars: 5,
    tags: ['🕯️ Intimate', '😢 Emotional'],
    highlight: 'Her encore of "Don\'t Know Why" — just her and the piano. You could hear a pin drop.',
    review: 'The Ryman is a church and Norah Jones is a preacher. This was a spiritual experience.',
    likes: 41, comments: 9
  }
];

const discoverData = [
  { emoji: '🎤', artist: 'Tyler, The Creator', venue: 'Tonight @ Barclays', rating: '★★★★★', logs: '2.1K logs' },
  { emoji: '🎸', artist: 'The National', venue: 'Tomorrow @ 9:30 Club', rating: '★★★★½', logs: '890 logs' },
  { emoji: '🎹', artist: 'Jamie xx', venue: 'Sat @ Warehouse Project', rating: '★★★★★', logs: '1.4K logs' },
  { emoji: '🥁', artist: 'Turnstile', venue: 'Sun @ The Anthem', rating: '★★★★½', logs: '760 logs' },
  { emoji: '🎺', artist: 'Snarky Puppy', venue: 'Mon @ Blue Note', rating: '★★★★★', logs: '1.1K logs' },
  { emoji: '🎧', artist: 'Fred again..', venue: 'Fri @ O2 Brixton', rating: '★★★★★', logs: '3.2K logs' }
];

const leaderboardData = [
  { rank: 1, artist: 'Radiohead', score: '★ 4.87', count: '14.2K ratings' },
  { rank: 2, artist: 'LCD Soundsystem', score: '★ 4.82', count: '8.9K ratings' },
  { rank: 3, artist: 'Khruangbin', score: '★ 4.79', count: '6.3K ratings' },
  { rank: 4, artist: 'Beyoncé', score: '★ 4.78', count: '22.1K ratings' },
  { rank: 5, artist: 'Bon Iver', score: '★ 4.76', count: '5.8K ratings' }
];

const topArtists = [
  { name: 'Radiohead', count: 7 },
  { name: 'Khruangbin', count: 5 },
  { name: 'Japanese Breakfast', count: 4 },
  { name: 'The National', count: 4 },
  { name: 'Bon Iver', count: 3 }
];

const artists = [
  'Radiohead', 'Billie Eilish', 'Khruangbin', 'Tyler, The Creator', 'Fontaines D.C.',
  'Norah Jones', 'The National', 'LCD Soundsystem', 'Bon Iver', 'Japanese Breakfast',
  'Fred again..', 'Turnstile', 'Snarky Puppy', 'Jamie xx', 'Beyoncé',
  'Tame Impala', 'SZA', 'Kendrick Lamar', 'Arctic Monkeys', 'Phoebe Bridgers'
];

// ── Render Feed ──
function renderFeed(containerId, items) {
  const grid = document.getElementById(containerId);
  grid.innerHTML = items.map(c => `
    <div class="concert-card">
      <div class="card-header">
        <div class="card-user">
          <div class="card-avatar">${c.user}</div>
          <div>
            <div class="card-username">${c.username}</div>
            <div class="card-time">${c.time}</div>
          </div>
        </div>
        <div class="card-stars">${'★'.repeat(c.stars)}${'☆'.repeat(5 - c.stars)}</div>
      </div>
      <div class="card-body">
        <div class="card-artist">${c.artist}</div>
        <div class="card-venue">📍 ${c.venue} · ${c.date}</div>
        ${c.highlight ? `<div class="card-highlight">"${c.highlight}"</div>` : ''}
        ${c.review ? `<div class="card-review">${c.review}</div>` : ''}
      </div>
      <div class="card-tags">${c.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
      <div class="card-footer">
        <button class="card-action" onclick="this.querySelector('span').textContent = parseInt(this.querySelector('span').textContent) + 1">❤️ <span>${c.likes}</span></button>
        <button class="card-action">💬 <span>${c.comments}</span></button>
        <button class="card-action">🔗 Share</button>
      </div>
    </div>
  `).join('');
}

// ── Render Discover ──
function renderDiscover() {
  const grid = document.getElementById('discover-grid');
  grid.innerHTML = discoverData.map(d => `
    <div class="discover-card">
      <div class="discover-emoji">${d.emoji}</div>
      <div class="discover-artist">${d.artist}</div>
      <div class="discover-venue">${d.venue}</div>
      <div class="discover-rating">${d.rating}</div>
      <div class="discover-logs">${d.logs}</div>
    </div>
  `).join('');

  const lb = document.getElementById('leaderboard');
  lb.innerHTML = leaderboardData.map(l => `
    <div class="lb-row">
      <div class="lb-rank">${l.rank}</div>
      <div class="lb-artist">${l.artist}</div>
      <div class="lb-score">${l.score}</div>
      <div class="lb-count">${l.count}</div>
    </div>
  `).join('');
}

// ── Render Profile ──
function renderProfile() {
  // Heatmap
  const heatmap = document.getElementById('heatmap');
  const cells = [];
  for (let w = 0; w < 52; w++) {
    const level = Math.random() < 0.15 ? (Math.random() < 0.3 ? 3 : Math.random() < 0.5 ? 2 : 1) : 0;
    cells.push(`<div class="heatmap-cell level-${level}"></div>`);
  }
  heatmap.innerHTML = cells.join('');

  // Top Artists
  const ta = document.getElementById('top-artists');
  ta.innerHTML = topArtists.map(a => `
    <div class="top-artist">
      <div class="top-artist-count">${a.count}×</div>
      <div class="top-artist-name">${a.name}</div>
    </div>
  `).join('');

  // Profile feed (last 3 from main feed)
  renderFeed('profile-feed', sampleFeed.slice(0, 3));
}

// ── Section Navigation ──
function showSection(section) {
  document.getElementById('feed-section').classList.toggle('hidden', section !== 'feed');
  document.getElementById('discover-section').classList.toggle('hidden', section !== 'discover');
  document.getElementById('profile-section').classList.toggle('hidden', section !== 'profile');
  document.querySelector('.hero').classList.toggle('hidden', section !== 'feed');

  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const links = document.querySelectorAll('.nav-links a');
  if (section === 'feed') links[0].classList.add('active');
  if (section === 'discover') links[1].classList.add('active');
  if (section === 'profile') links[2].classList.add('active');

  if (section === 'discover') renderDiscover();
  if (section === 'profile') renderProfile();
}

// ── Log Modal ──
let selectedRating = 0;
let selectedTags = new Set();

function openLogModal() {
  document.getElementById('log-modal').classList.remove('hidden');
  selectedRating = 0;
  selectedTags.clear();
  updateStars();
  document.querySelectorAll('.vibe-tag').forEach(t => t.classList.remove('selected'));
}

function closeLogModal() {
  document.getElementById('log-modal').classList.add('hidden');
}

// Stars
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.dataset.val);
    updateStars();
  });
  star.addEventListener('mouseenter', () => {
    const val = parseInt(star.dataset.val);
    document.querySelectorAll('.star').forEach(s => {
      s.classList.toggle('active', parseInt(s.dataset.val) <= val);
    });
  });
});

document.getElementById('star-rating').addEventListener('mouseleave', updateStars);

function updateStars() {
  document.querySelectorAll('.star').forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.val) <= selectedRating);
  });
}

// Vibe Tags
document.querySelectorAll('.vibe-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    const t = tag.dataset.tag;
    if (selectedTags.has(t)) { selectedTags.delete(t); tag.classList.remove('selected'); }
    else { selectedTags.add(t); tag.classList.add('selected'); }
  });
});

// Artist Suggestions
const artistInput = document.getElementById('log-artist');
const suggestionsEl = document.getElementById('artist-suggestions');

artistInput.addEventListener('input', () => {
  const q = artistInput.value.toLowerCase();
  if (q.length < 2) { suggestionsEl.classList.add('hidden'); return; }
  const matches = artists.filter(a => a.toLowerCase().includes(q));
  if (matches.length === 0) { suggestionsEl.classList.add('hidden'); return; }
  suggestionsEl.innerHTML = matches.map(m => `<div class="suggestion" onclick="selectArtist('${m}')">${m}</div>`).join('');
  suggestionsEl.classList.remove('hidden');
});

function selectArtist(name) {
  artistInput.value = name;
  suggestionsEl.classList.add('hidden');
}

// Submit
function submitLog() {
  const artist = document.getElementById('log-artist').value;
  const venue = document.getElementById('log-venue').value;
  const highlight = document.getElementById('log-highlight').value;
  const review = document.getElementById('log-review').value;

  if (!artist) { artistInput.focus(); return; }

  const tagMap = {
    electric: '🔥 Electric', emotional: '😢 Emotional', legendary: '🎸 Legendary',
    mosh: '💀 Mosh Pit', intimate: '🕯️ Intimate', euphoric: '✨ Euphoric',
    chill: '🌙 Chill', festival: '🎪 Festival'
  };

  const newEntry = {
    user: '🎸', username: 'Alex Rivera', time: 'Just now',
    artist, venue: venue ? `📍 ${venue}` : 'Unknown venue',
    date: 'Today', stars: selectedRating || 4,
    tags: [...selectedTags].map(t => tagMap[t] || t),
    highlight: highlight || null,
    review: review || null,
    likes: 0, comments: 0
  };

  sampleFeed.unshift(newEntry);
  renderFeed('feed-grid', sampleFeed);
  closeLogModal();

  // Reset form
  document.getElementById('log-artist').value = '';
  document.getElementById('log-venue').value = '';
  document.getElementById('log-highlight').value = '';
  document.getElementById('log-review').value = '';

  // Toast
  const toast = document.getElementById('toast');
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 2500);
}

// Close modal on overlay click
document.getElementById('log-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('log-modal')) closeLogModal();
});

// ── Init ──
renderFeed('feed-grid', sampleFeed);
