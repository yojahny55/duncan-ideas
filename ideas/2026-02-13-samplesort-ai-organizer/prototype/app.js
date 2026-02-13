// SampleSort - Interactive Prototype
document.addEventListener('DOMContentLoaded', () => {
    // Sample data generator
    const sampleTypes = ['Kick', 'Snare', 'Hi-Hat', 'Clap', '808', 'FX', 'Vocal', 'Loop'];
    const genres = ['Trap', 'House', 'Lo-Fi', 'Cinematic', 'Drill', 'Future Bass'];
    const keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C#', 'D#', 'F#', 'G#', 'A#'];
    const packs = [
        'Cymatics - Savage 808s',
        'Splice Sounds - Trap Pack',
        'KSHMR Essentials Vol.3',
        'Nick Mira Drum Kit',
        'Metro Boomin Pack',
        'Virtual Riot Bass House',
        'Deadmau5 Sample Collection'
    ];

    const typeColors = {
        'Kick': '#ef4444',
        'Snare': '#f59e0b',
        'Hi-Hat': '#3b82f6',
        'Clap': '#a855f7',
        '808': '#f97316',
        'FX': '#22c55e',
        'Vocal': '#ec4899',
        'Loop': '#14b8a6'
    };

    // Generate random samples
    function generateSamples(count) {
        const samples = [];
        for (let i = 0; i < count; i++) {
            const type = sampleTypes[Math.floor(Math.random() * sampleTypes.length)];
            const genre = genres[Math.floor(Math.random() * genres.length)];
            const key = keys[Math.floor(Math.random() * keys.length)];
            const bpm = Math.floor(Math.random() * 60) + 100;
            const pack = packs[Math.floor(Math.random() * packs.length)];
            const num = Math.floor(Math.random() * 30) + 1;
            
            samples.push({
                id: i,
                name: `${type}_${genre.replace(' ', '')}_${num.toString().padStart(2, '0')}.wav`,
                type,
                genre,
                key,
                bpm,
                pack,
                duration: (Math.random() * 4 + 0.5).toFixed(1),
                favorite: Math.random() > 0.9
            });
        }
        return samples;
    }

    // Generate waveform bars
    function generateWaveformBars() {
        const bars = [];
        const barCount = 24;
        for (let i = 0; i < barCount; i++) {
            const height = Math.floor(Math.random() * 40) + 10;
            bars.push(height);
        }
        return bars;
    }

    // Render sample card
    function renderSampleCard(sample) {
        const waveformBars = generateWaveformBars();
        const barsHTML = waveformBars.map(h => `<div class="waveform-bar" style="height: ${h}px"></div>`).join('');
        
        return `
            <div class="sample-card" data-id="${sample.id}">
                <div class="sample-waveform">
                    <div class="waveform-bars">${barsHTML}</div>
                </div>
                <div class="sample-info">
                    <h4>${sample.name}</h4>
                    <div class="sample-meta">
                        <span class="sample-tag type" style="color: ${typeColors[sample.type]}">${sample.type}</span>
                        <span class="sample-tag bpm">${sample.bpm}</span>
                        <span class="sample-favorite ${sample.favorite ? 'active' : ''}">⭐</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Initialize sample grid
    const sampleGrid = document.getElementById('sampleGrid');
    const samples = generateSamples(48);
    sampleGrid.innerHTML = samples.map(renderSampleCard).join('');

    // Preview panel
    const previewPanel = document.getElementById('previewPanel');
    const closePreview = document.getElementById('closePreview');
    let selectedSample = null;

    // Draw waveform on canvas
    function drawWaveform(canvas) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = '#8b5cf6';
        
        const bars = 80;
        const barWidth = width / bars - 1;
        
        for (let i = 0; i < bars; i++) {
            const barHeight = Math.random() * (height - 20) + 10;
            const y = (height - barHeight) / 2;
            ctx.fillRect(i * (barWidth + 1), y, barWidth, barHeight);
        }
    }

    // Handle sample card click
    sampleGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.sample-card');
        if (!card) return;

        // Remove previous selection
        document.querySelectorAll('.sample-card.selected').forEach(c => c.classList.remove('selected'));
        
        // Select new card
        card.classList.add('selected');
        selectedSample = samples.find(s => s.id === parseInt(card.dataset.id));
        
        // Update preview panel
        if (selectedSample) {
            document.getElementById('sampleName').textContent = selectedSample.name;
            document.getElementById('samplePath').textContent = selectedSample.pack + '/';
            document.getElementById('duration').textContent = selectedSample.duration + 's';
            document.getElementById('totalTime').textContent = `0:0${Math.floor(parseFloat(selectedSample.duration))}`;
            
            // Update tags
            const tagsContainer = document.querySelector('.preview-tags');
            tagsContainer.innerHTML = `
                <span class="tag tag-type">${selectedSample.type}</span>
                <span class="tag tag-genre">${selectedSample.genre}</span>
                <span class="tag tag-key">${selectedSample.key}</span>
                <span class="tag tag-bpm">${selectedSample.bpm} BPM</span>
            `;
            
            // Draw waveform
            const canvas = document.getElementById('waveformCanvas');
            drawWaveform(canvas);
            
            // Update favorite button
            const favBtn = document.getElementById('favoriteBtn');
            favBtn.classList.toggle('active', selectedSample.favorite);
            favBtn.innerHTML = selectedSample.favorite ? '<span>★</span> Favorited' : '<span>☆</span> Favorite';
            
            // Show preview panel
            previewPanel.classList.add('active');
        }
    });

    // Close preview panel
    closePreview.addEventListener('click', () => {
        previewPanel.classList.remove('active');
        document.querySelectorAll('.sample-card.selected').forEach(c => c.classList.remove('selected'));
        selectedSample = null;
    });

    // Favorite button
    document.getElementById('favoriteBtn').addEventListener('click', function() {
        if (selectedSample) {
            selectedSample.favorite = !selectedSample.favorite;
            this.classList.toggle('active');
            this.innerHTML = selectedSample.favorite ? '<span>★</span> Favorited' : '<span>☆</span> Favorite';
            
            // Update card
            const card = document.querySelector(`.sample-card[data-id="${selectedSample.id}"]`);
            if (card) {
                card.querySelector('.sample-favorite').classList.toggle('active', selectedSample.favorite);
            }
        }
    });

    // Play button
    let isPlaying = false;
    const playBtn = document.getElementById('playBtn');
    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playBtn.textContent = isPlaying ? '⏸' : '▶';
        
        if (isPlaying) {
            // Simulate playback
            let time = 0;
            const duration = parseFloat(selectedSample?.duration || 2);
            const interval = setInterval(() => {
                time += 0.1;
                document.getElementById('currentTime').textContent = `0:0${Math.floor(time)}`;
                
                if (time >= duration) {
                    clearInterval(interval);
                    isPlaying = false;
                    playBtn.textContent = '▶';
                    document.getElementById('currentTime').textContent = '0:00';
                }
            }, 100);
        }
    });

    // Scan modal
    const scanBtn = document.getElementById('scanBtn');
    const scanModal = document.getElementById('scanModal');
    const closeScanModal = document.getElementById('closeScanModal');
    const cancelScan = document.getElementById('cancelScan');
    const startScan = document.getElementById('startScan');
    const scanBanner = document.getElementById('scanBanner');

    scanBtn.addEventListener('click', () => {
        scanModal.classList.add('active');
    });

    closeScanModal.addEventListener('click', () => {
        scanModal.classList.remove('active');
    });

    cancelScan.addEventListener('click', () => {
        scanModal.classList.remove('active');
    });

    // Start scan simulation
    startScan.addEventListener('click', () => {
        scanModal.classList.remove('active');
        scanBanner.classList.add('active');
        
        let progress = 0;
        const scanFiles = [
            'Cymatics - Savage 808s/808_01.wav',
            'Cymatics - Savage 808s/808_Heavy_C.wav',
            'Splice Sounds/Trap/Snare_Punchy_01.wav',
            'Nick Mira/Loops/Melody_140BPM_Am.wav',
            'Metro Boomin Pack/HiHat_Triplet_01.wav',
            'KSHMR Essentials/FX/Riser_8Bar.wav',
            'Virtual Riot/Bass/Growl_E.wav',
            'Deadmau5 Collection/Synth/Pluck_F#m.wav',
            'Analyzing audio signatures...',
            'Detecting duplicates...',
            'Generating genre tags...',
            'Extracting BPM and key...',
            'Building search index...',
            'Finalizing organization...'
        ];

        const interval = setInterval(() => {
            progress += Math.random() * 3 + 1;
            if (progress > 100) progress = 100;
            
            document.getElementById('progressFill').style.width = `${progress}%`;
            document.getElementById('scanPercent').textContent = `${Math.floor(progress)}%`;
            
            const fileIndex = Math.floor((progress / 100) * (scanFiles.length - 1));
            document.getElementById('scanDetail').textContent = `Processing: ${scanFiles[fileIndex]}`;
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    scanBanner.classList.remove('active');
                    
                    // Show success notification (simple alert for prototype)
                    alert('✅ Scan complete!\n\n• 12,847 samples organized\n• 147 duplicates found\n• 8 genres detected\n• BPM range: 80-175');
                }, 500);
            }
        }, 200);
    });

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            // Only handle category clicks
            const category = this.dataset.category || this.dataset.view;
            if (!category) return;
            
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Update title
            const titleMap = {
                'all': 'All Samples',
                'recent': 'Recently Added',
                'favorites': 'Favorites',
                'duplicates': 'Duplicate Samples',
                'kicks': 'Kicks',
                'snares': 'Snares',
                'hihats': 'Hi-Hats',
                'claps': 'Claps',
                '808s': '808s',
                'fx': 'FX & Risers',
                'vocals': 'Vocals',
                'loops': 'Loops',
                'bangers': 'Bangers Collection',
                'chill': 'Chill Vibes Collection'
            };
            
            document.querySelector('.grid-title h2').textContent = titleMap[category] || 'All Samples';
            
            // Close preview panel
            previewPanel.classList.remove('active');
        });
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        document.querySelectorAll('.sample-card').forEach(card => {
            const name = card.querySelector('h4').textContent.toLowerCase();
            card.style.display = name.includes(query) ? '' : 'none';
        });
    });

    // Filter chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', function() {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Cmd/Ctrl + K to focus search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
        
        // Escape to close preview
        if (e.key === 'Escape') {
            previewPanel.classList.remove('active');
            scanModal.classList.remove('active');
        }
        
        // Space to play/pause
        if (e.key === ' ' && selectedSample && document.activeElement !== searchInput) {
            e.preventDefault();
            playBtn.click();
        }
    });
});
