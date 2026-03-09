// LevelAudio — Prototype JavaScript

// State
const state = {
    isOn: false,
    mode: 'night',
    strength: 50,
    maxVol: -6,
    dialogEnhance: true,
    isPlaying: false
};

// Mode settings
const modeSettings = {
    night: { compression: 8, threshold: -30, release: 100, name: 'Night Mode' },
    movie: { compression: 4, threshold: -24, release: 200, name: 'Movie Mode' },
    music: { compression: 2, threshold: -18, release: 300, name: 'Music Mode' },
    game: { compression: 3, threshold: -20, release: 150, name: 'Game Mode' },
    speech: { compression: 6, threshold: -28, release: 50, name: 'Speech Mode' }
};

// DOM Elements
const powerToggle = document.getElementById('powerToggle');
const powerLabel = document.getElementById('powerLabel');
const modeButtons = document.querySelectorAll('.mode-btn');
const strengthSlider = document.getElementById('strengthSlider');
const strengthValue = document.getElementById('strengthValue');
const maxVolSlider = document.getElementById('maxVolSlider');
const maxVolValue = document.getElementById('maxVolValue');
const dialogToggle = document.getElementById('dialogToggle');
const compressionValue = document.getElementById('compressionValue');
const grBar = document.getElementById('grBar');
const grValue = document.getElementById('grValue');
const playDemoBtn = document.getElementById('playDemo');

// Initialize waveform bars
function initWaveforms() {
    const inputBars = document.getElementById('inputBars');
    const outputBars = document.getElementById('outputBars');
    
    for (let i = 0; i < 16; i++) {
        const inputBar = document.createElement('div');
        inputBar.className = 'wave-bar';
        inputBar.style.height = '10%';
        inputBars.appendChild(inputBar);
        
        const outputBar = document.createElement('div');
        outputBar.className = 'wave-bar';
        outputBar.style.height = '10%';
        outputBars.appendChild(outputBar);
    }
    
    // Demo bars
    const demoWithout = document.getElementById('demoWithout').querySelector('.demo-bars');
    const demoWith = document.getElementById('demoWith').querySelector('.demo-bars');
    
    for (let i = 0; i < 12; i++) {
        const bar1 = document.createElement('div');
        bar1.className = 'demo-bar';
        bar1.style.height = '20%';
        demoWithout.appendChild(bar1);
        
        const bar2 = document.createElement('div');
        bar2.className = 'demo-bar';
        bar2.style.height = '20%';
        demoWith.appendChild(bar2);
    }
}

// Power toggle
powerToggle.addEventListener('click', () => {
    state.isOn = !state.isOn;
    powerToggle.classList.toggle('active', state.isOn);
    powerLabel.textContent = state.isOn ? 'On' : 'Off';
    
    if (state.isOn) {
        startVisualization();
    } else {
        stopVisualization();
    }
});

// Mode selection
modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.mode = btn.dataset.mode;
        updateModeDisplay();
    });
});

// Sliders
strengthSlider.addEventListener('input', (e) => {
    state.strength = parseInt(e.target.value);
    strengthValue.textContent = `${state.strength}%`;
});

maxVolSlider.addEventListener('input', (e) => {
    state.maxVol = parseInt(e.target.value);
    maxVolValue.textContent = `${state.maxVol} dB`;
});

// Dialog toggle
dialogToggle.addEventListener('change', (e) => {
    state.dialogEnhance = e.target.checked;
});

// Update mode display
function updateModeDisplay() {
    const mode = modeSettings[state.mode];
    document.querySelector('.app-status').textContent = `Active • ${mode.name}`;
}

// Visualization
let vizInterval = null;
let inputBars = [];
let outputBars = [];

function startVisualization() {
    inputBars = Array.from(document.getElementById('inputBars').children);
    outputBars = Array.from(document.getElementById('outputBars').children);
    
    vizInterval = setInterval(updateVisualization, 100);
}

function stopVisualization() {
    if (vizInterval) {
        clearInterval(vizInterval);
        vizInterval = null;
    }
    
    // Reset bars
    inputBars.forEach(bar => bar.style.height = '10%');
    outputBars.forEach(bar => bar.style.height = '10%');
    grBar.style.width = '0';
    grValue.textContent = '0 dB';
    compressionValue.textContent = '0 dB';
}

function updateVisualization() {
    const mode = modeSettings[state.mode];
    const compressionStrength = state.strength / 100;
    
    let totalReduction = 0;
    let peakInput = 0;
    
    inputBars.forEach((bar, i) => {
        // Generate "realistic" audio levels with occasional spikes
        let level = 20 + Math.random() * 30;
        
        // Add occasional loud peaks
        if (Math.random() < 0.1) {
            level = 70 + Math.random() * 30;
        }
        
        // Add occasional quiet sections
        if (Math.random() < 0.15) {
            level = 5 + Math.random() * 15;
        }
        
        bar.style.height = `${level}%`;
        peakInput = Math.max(peakInput, level);
        
        // Calculate compressed output
        const threshold = 50 + (mode.threshold + 30) * 2; // Normalize threshold
        let outputLevel = level;
        let reduction = 0;
        
        if (level > threshold) {
            const excess = level - threshold;
            reduction = excess * compressionStrength * (mode.compression / 10);
            outputLevel = threshold + (excess - reduction);
        }
        
        // Apply max volume ceiling
        const maxLevel = 100 + (state.maxVol * 2);
        if (outputLevel > maxLevel) {
            reduction += outputLevel - maxLevel;
            outputLevel = maxLevel;
        }
        
        // Boost quiet sections
        if (outputLevel < 25) {
            outputLevel = Math.min(25 + outputLevel * 0.5, 40);
        }
        
        outputBars[i].style.height = `${outputLevel}%`;
        totalReduction += reduction;
    });
    
    // Update gain reduction meter
    const avgReduction = totalReduction / inputBars.length;
    const grPercent = Math.min(avgReduction * 2, 100);
    grBar.style.width = `${grPercent}%`;
    
    const grDb = Math.round(avgReduction * 0.3);
    grValue.textContent = grDb > 0 ? `-${grDb} dB` : '0 dB';
    compressionValue.textContent = grDb > 0 ? `-${grDb} dB` : '0 dB';
}

// Demo playback
playDemoBtn.addEventListener('click', () => {
    if (state.isPlaying) return;
    
    state.isPlaying = true;
    playDemoBtn.textContent = '⏸ Playing...';
    playDemoBtn.style.opacity = '0.7';
    
    const demoWithoutBars = Array.from(document.getElementById('demoWithout').querySelectorAll('.demo-bar'));
    const demoWithBars = Array.from(document.getElementById('demoWith').querySelectorAll('.demo-bar'));
    
    // Simulate dramatic audio with loud/quiet sections
    const demoPattern = [
        [20, 20], [25, 25], [30, 30], // Quiet dialogue
        [20, 25], [15, 25], [25, 30], // More dialogue
        [90, 60], [95, 65], [100, 70], // EXPLOSION!
        [85, 60], [80, 55], [70, 50], // Rumble
        [15, 30], [10, 28], [20, 32], // Quiet again
        [25, 35], [30, 38], [35, 40], // Building up
        [95, 65], [100, 70], [90, 60], // Another peak
        [40, 45], [35, 40], [30, 38], // Settling
        [25, 35], [20, 32], [25, 35], // Normal
        [30, 38], [35, 40], [30, 38], // End
    ];
    
    let step = 0;
    const demoInterval = setInterval(() => {
        const patternIndex = step % demoPattern.length;
        const [withoutLevel, withLevel] = demoPattern[patternIndex];
        
        demoWithoutBars.forEach((bar, i) => {
            const variation = (Math.sin(step * 0.5 + i * 0.3) + 1) * 10;
            bar.style.height = `${Math.max(5, withoutLevel + variation - 10)}%`;
        });
        
        demoWithBars.forEach((bar, i) => {
            const variation = (Math.sin(step * 0.5 + i * 0.3) + 1) * 5;
            bar.style.height = `${Math.max(5, withLevel + variation - 5)}%`;
        });
        
        step++;
        
        if (step >= demoPattern.length * 2) {
            clearInterval(demoInterval);
            state.isPlaying = false;
            playDemoBtn.textContent = '▶ Play Demo';
            playDemoBtn.style.opacity = '1';
            
            // Reset demo bars
            demoWithoutBars.forEach(bar => bar.style.height = '20%');
            demoWithBars.forEach(bar => bar.style.height = '35%');
        }
    }, 150);
});

// Initialize
initWaveforms();
updateModeDisplay();

// Auto-start visualization for demo effect
setTimeout(() => {
    powerToggle.click();
}, 500);
