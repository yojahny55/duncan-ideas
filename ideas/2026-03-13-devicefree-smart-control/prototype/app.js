// DeviceFree — Universal Smart Device Control

const devices = [
    {
        id: 1, name: 'Living Room Light', icon: '💡', type: 'light', room: 'living',
        brand: 'Tuya', protocol: 'LAN', on: true,
        brightness: 80, colorTemp: 65, color: null,
        ip: '192.168.1.101'
    },
    {
        id: 2, name: 'TV Backlight', icon: '🌈', type: 'rgb-light', room: 'living',
        brand: 'Govee', protocol: 'LAN', on: true,
        brightness: 60, colorTemp: 50, color: '#22d3ee',
        ip: '192.168.1.102'
    },
    {
        id: 3, name: 'Smart Plug', icon: '🔌', type: 'plug', room: 'living',
        brand: 'TP-Link Kasa', protocol: 'LAN', on: true,
        watts: 145, kwh: 3.2, cost: 0.42,
        ip: '192.168.1.103'
    },
    {
        id: 4, name: 'Bedroom Lamp', icon: '🛏️', type: 'light', room: 'bedroom',
        brand: 'LIFX', protocol: 'LAN', on: false,
        brightness: 40, colorTemp: 30, color: null,
        ip: '192.168.1.104'
    },
    {
        id: 5, name: 'Ceiling Fan', icon: '🌀', type: 'plug', room: 'bedroom',
        brand: 'Meross', protocol: 'LAN', on: true,
        watts: 52, kwh: 1.8, cost: 0.24,
        ip: '192.168.1.105'
    },
    {
        id: 6, name: 'Climate Sensor', icon: '🌡️', type: 'sensor', room: 'bedroom',
        brand: 'Aqara', protocol: 'Zigbee', on: true,
        temp: 72, humidity: 45,
        ip: '192.168.1.106'
    },
    {
        id: 7, name: 'Kitchen Strip', icon: '✨', type: 'rgb-light', room: 'kitchen',
        brand: 'Tuya', protocol: 'LAN', on: true,
        brightness: 100, colorTemp: 80, color: '#fbbf24',
        ip: '192.168.1.107'
    },
    {
        id: 8, name: 'Coffee Maker', icon: '☕', type: 'plug', room: 'kitchen',
        brand: 'TP-Link Tapo', protocol: 'LAN', on: false,
        watts: 0, kwh: 0.9, cost: 0.12,
        ip: '192.168.1.108'
    },
    {
        id: 9, name: 'Desk Lamp', icon: '🔆', type: 'light', room: 'office',
        brand: 'Philips Hue', protocol: 'Bridge', on: true,
        brightness: 90, colorTemp: 75, color: null,
        ip: '192.168.1.109'
    },
    {
        id: 10, name: 'Monitor Plug', icon: '🖥️', type: 'plug', room: 'office',
        brand: 'Shelly', protocol: 'HTTP', on: true,
        watts: 89, kwh: 5.1, cost: 0.67,
        ip: '192.168.1.110'
    },
    {
        id: 11, name: 'Motion Sensor', icon: '👁️', type: 'sensor', room: 'living',
        brand: 'Aqara', protocol: 'Zigbee', on: true,
        motion: false, lastMotion: '2 min ago',
        ip: '192.168.1.111'
    },
    {
        id: 12, name: 'Door Sensor', icon: '🚪', type: 'sensor', room: 'living',
        brand: 'Sonoff', protocol: 'Zigbee', on: true,
        doorOpen: false, lastChange: '45 min ago',
        ip: '192.168.1.112'
    }
];

let currentRoom = 'all';

// Time
function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent =
        now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}
updateTime();
setInterval(updateTime, 60000);

// Render devices
function renderDevices() {
    const grid = document.getElementById('deviceGrid');
    const filtered = currentRoom === 'all' ? devices : devices.filter(d => d.room === currentRoom);

    grid.innerHTML = filtered.map(d => `
        <div class="device-card ${d.on ? 'on' : ''}" data-id="${d.id}" onclick="openDevice(${d.id})">
            <div class="device-card-header">
                <span class="device-icon">${d.icon}</span>
                <button class="toggle ${d.on ? 'on' : ''}" onclick="event.stopPropagation(); toggleDevice(${d.id})"></button>
            </div>
            <div class="device-name">${d.name}</div>
            <div class="device-status">
                <span class="dot"></span>
                ${d.on ? getStatusText(d) : 'Off'}
            </div>
            <span class="device-protocol">${d.protocol}</span>
        </div>
    `).join('');

    // Update stats
    document.getElementById('totalDevices').textContent = devices.length;
    document.getElementById('onlineDevices').textContent = devices.filter(d => d.on).length;
}

function getStatusText(d) {
    if (d.type === 'light' || d.type === 'rgb-light') return `${d.brightness}% brightness`;
    if (d.type === 'plug') return d.watts > 0 ? `${d.watts}W` : 'Standby';
    if (d.type === 'sensor') {
        if (d.temp !== undefined) return `${d.temp}°F • ${d.humidity}%`;
        if (d.motion !== undefined) return d.motion ? 'Motion detected' : `Clear • ${d.lastMotion}`;
        if (d.doorOpen !== undefined) return d.doorOpen ? 'Open' : `Closed • ${d.lastChange}`;
    }
    return 'Online';
}

function toggleDevice(id) {
    const d = devices.find(d => d.id === id);
    d.on = !d.on;
    renderDevices();
}

// Room tabs
document.getElementById('roomTabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('room-tab')) {
        document.querySelectorAll('.room-tab').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentRoom = e.target.dataset.room;
        renderDevices();
    }
});

// Scene pills
document.querySelectorAll('.scene-pill').forEach(pill => {
    pill.addEventListener('click', () => {
        document.querySelectorAll('.scene-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        applyScene(pill.dataset.scene);
    });
});

function applyScene(scene) {
    switch (scene) {
        case 'movie':
            devices.forEach(d => {
                if (d.type === 'light') { d.on = false; }
                if (d.id === 2) { d.on = true; d.brightness = 30; d.color = '#6366f1'; } // TV backlight dim purple
            });
            break;
        case 'sleep':
            devices.forEach(d => {
                if (d.type === 'light' || d.type === 'rgb-light') { d.on = false; }
                if (d.type === 'plug' && d.id !== 5) { d.on = false; } // Keep fan
            });
            break;
        case 'away':
            devices.forEach(d => {
                if (d.type !== 'sensor') { d.on = false; }
            });
            break;
        case 'home':
            devices[0].on = true; devices[0].brightness = 80;
            devices[1].on = true; devices[1].brightness = 60;
            devices[2].on = true;
            devices[6].on = true;
            devices[8].on = true;
            break;
    }
    renderDevices();
}

// Device modal
function openDevice(id) {
    const d = devices.find(d => d.id === id);
    const modal = document.getElementById('deviceModal');
    const overlay = document.getElementById('modalOverlay');

    document.getElementById('modalIcon').textContent = d.icon;
    document.getElementById('modalName').textContent = d.name;
    document.getElementById('modalBrand').textContent = `${d.brand} • ${d.protocol} • ${d.ip}`;
    document.getElementById('modalLatency').textContent = `${Math.floor(Math.random() * 5) + 1}ms`;

    const body = document.getElementById('modalBody');

    if (d.type === 'light') {
        body.innerHTML = `
            <div class="power-row">
                <span class="power-label">${d.on ? 'On' : 'Off'}</span>
                <button class="toggle power-toggle ${d.on ? 'on' : ''}" onclick="toggleModalPower(${d.id})"></button>
            </div>
            <div class="control-group">
                <div class="control-label">
                    Brightness
                    <span class="control-value">${d.brightness}%</span>
                </div>
                <div class="slider-track" onclick="setBrightness(event, ${d.id})">
                    <div class="slider-fill" style="width: ${d.brightness}%"></div>
                </div>
            </div>
            <div class="control-group">
                <div class="control-label">
                    Color Temperature
                    <span class="control-value">${d.colorTemp < 40 ? 'Warm' : d.colorTemp > 70 ? 'Cool' : 'Neutral'}</span>
                </div>
                <div class="color-temp-track" onclick="setColorTemp(event, ${d.id})">
                    <div class="color-temp-thumb" style="left: ${d.colorTemp}%"></div>
                </div>
            </div>
        `;
    } else if (d.type === 'rgb-light') {
        const colors = ['#ef4444', '#f97316', '#fbbf24', '#22c55e', '#22d3ee', '#3b82f6', '#8b5cf6', '#ec4899',
                        '#f43f5e', '#fb923c', '#facc15', '#4ade80', '#67e8f9', '#60a5fa', '#a78bfa', '#f472b6'];
        body.innerHTML = `
            <div class="power-row">
                <span class="power-label">${d.on ? 'On' : 'Off'}</span>
                <button class="toggle power-toggle ${d.on ? 'on' : ''}" onclick="toggleModalPower(${d.id})"></button>
            </div>
            <div class="control-group">
                <div class="control-label">
                    Brightness
                    <span class="control-value">${d.brightness}%</span>
                </div>
                <div class="slider-track" onclick="setBrightness(event, ${d.id})">
                    <div class="slider-fill" style="width: ${d.brightness}%"></div>
                </div>
            </div>
            <div class="control-group">
                <div class="control-label">Color</div>
                <div class="color-grid">
                    ${colors.map(c => `
                        <div class="color-dot ${d.color === c ? 'selected' : ''}"
                             style="background: ${c}"
                             onclick="setColor('${c}', ${d.id})"></div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (d.type === 'plug') {
        body.innerHTML = `
            <div class="power-row">
                <span class="power-label">${d.on ? 'On' : 'Off'}</span>
                <button class="toggle power-toggle ${d.on ? 'on' : ''}" onclick="toggleModalPower(${d.id})"></button>
            </div>
            <div class="control-group">
                <div class="control-label">Power Monitoring</div>
                <div class="plug-stats">
                    <div class="plug-stat">
                        <div class="plug-stat-value" style="color: var(--amber)">${d.watts}W</div>
                        <div class="plug-stat-label">Current</div>
                    </div>
                    <div class="plug-stat">
                        <div class="plug-stat-value" style="color: var(--accent)">${d.kwh} kWh</div>
                        <div class="plug-stat-label">Today</div>
                    </div>
                    <div class="plug-stat">
                        <div class="plug-stat-value" style="color: var(--green)">$${d.cost}</div>
                        <div class="plug-stat-label">Cost</div>
                    </div>
                </div>
            </div>
        `;
    } else if (d.type === 'sensor') {
        let sensorHTML = `<div class="sensor-grid">`;
        if (d.temp !== undefined) {
            sensorHTML += `
                <div class="sensor-value-card">
                    <div class="sensor-big-number">${d.temp}<span class="sensor-unit">°F</span></div>
                    <div class="sensor-type">Temperature</div>
                </div>
                <div class="sensor-value-card">
                    <div class="sensor-big-number">${d.humidity}<span class="sensor-unit">%</span></div>
                    <div class="sensor-type">Humidity</div>
                </div>
            `;
        }
        if (d.motion !== undefined) {
            sensorHTML += `
                <div class="sensor-value-card">
                    <div class="sensor-big-number" style="font-size: 24px; color: ${d.motion ? 'var(--amber)' : 'var(--green)'}">
                        ${d.motion ? '🚶 Motion' : '✓ Clear'}
                    </div>
                    <div class="sensor-type">Status</div>
                </div>
                <div class="sensor-value-card">
                    <div class="sensor-big-number" style="font-size: 18px">${d.lastMotion}</div>
                    <div class="sensor-type">Last Motion</div>
                </div>
            `;
        }
        if (d.doorOpen !== undefined) {
            sensorHTML += `
                <div class="sensor-value-card">
                    <div class="sensor-big-number" style="font-size: 24px; color: ${d.doorOpen ? 'var(--red)' : 'var(--green)'}">
                        ${d.doorOpen ? '🔓 Open' : '🔒 Closed'}
                    </div>
                    <div class="sensor-type">Status</div>
                </div>
                <div class="sensor-value-card">
                    <div class="sensor-big-number" style="font-size: 18px">${d.lastChange}</div>
                    <div class="sensor-type">Last Change</div>
                </div>
            `;
        }
        sensorHTML += `</div>`;
        body.innerHTML = sensorHTML;
    }

    overlay.classList.add('active');
}

function toggleModalPower(id) {
    toggleDevice(id);
    openDevice(id); // re-render modal
}

function setBrightness(event, id) {
    const d = devices.find(d => d.id === id);
    const rect = event.currentTarget.getBoundingClientRect();
    d.brightness = Math.round(((event.clientX - rect.left) / rect.width) * 100);
    d.brightness = Math.max(5, Math.min(100, d.brightness));
    openDevice(id);
    renderDevices();
}

function setColorTemp(event, id) {
    const d = devices.find(d => d.id === id);
    const rect = event.currentTarget.getBoundingClientRect();
    d.colorTemp = Math.round(((event.clientX - rect.left) / rect.width) * 100);
    d.colorTemp = Math.max(0, Math.min(100, d.colorTemp));
    openDevice(id);
}

function setColor(color, id) {
    const d = devices.find(d => d.id === id);
    d.color = color;
    openDevice(id);
}

// Close modal
document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('modalOverlay').classList.remove('active');
});

document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.remove('active');
    }
});

// Scan
document.getElementById('scanBtn').addEventListener('click', () => {
    const overlay = document.getElementById('scanOverlay');
    const status = document.getElementById('scanStatus');
    const found = document.getElementById('scanFound');
    const doneBtn = document.getElementById('scanDone');

    overlay.classList.add('active');
    found.innerHTML = '';
    doneBtn.style.display = 'none';

    const scanDevices = [
        { icon: '💡', name: 'Tuya Bulb', protocol: 'LAN', delay: 1200 },
        { icon: '🔌', name: 'TP-Link Kasa HS103', protocol: 'LAN', delay: 2000 },
        { icon: '🌈', name: 'Govee LED Strip', protocol: 'LAN', delay: 3000 },
        { icon: '🌡️', name: 'Aqara Temp Sensor', protocol: 'Zigbee', delay: 4200 },
        { icon: '🚪', name: 'Sonoff Door Sensor', protocol: 'Zigbee', delay: 5000 },
    ];

    const msgs = [
        'Discovering devices on 192.168.1.0/24',
        'Scanning mDNS services...',
        'Probing SSDP/UPnP...',
        'Checking Tuya local keys...',
        'Querying Hue bridge...',
        'Scan complete!'
    ];

    let msgIdx = 0;
    const msgInterval = setInterval(() => {
        msgIdx++;
        if (msgIdx < msgs.length) {
            status.textContent = msgs[msgIdx];
        }
    }, 1000);

    scanDevices.forEach(sd => {
        setTimeout(() => {
            const dot = document.getElementById(`dot${Math.ceil(Math.random() * 3)}`);
            if (dot) dot.classList.add('found');

            found.innerHTML += `
                <div class="scan-found-item">
                    <span class="scan-found-icon">${sd.icon}</span>
                    <span class="scan-found-name">${sd.name}</span>
                    <span class="scan-found-protocol">${sd.protocol}</span>
                </div>
            `;
        }, sd.delay);
    });

    setTimeout(() => {
        clearInterval(msgInterval);
        status.textContent = 'Scan complete! Found 5 devices.';
        doneBtn.style.display = 'block';
    }, 5500);
});

document.getElementById('scanDone').addEventListener('click', () => {
    document.getElementById('scanOverlay').classList.remove('active');
    document.querySelectorAll('.radar-dot').forEach(d => d.classList.remove('found'));
});

document.getElementById('scanOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.classList.remove('active');
        document.querySelectorAll('.radar-dot').forEach(d => d.classList.remove('found'));
    }
});

// Init
renderDevices();
