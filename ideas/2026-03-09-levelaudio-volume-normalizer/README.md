# LevelAudio — Automatic Volume Normalizer

**Date:** 2026-03-09  
**Source:** X/Twitter  
**Category:** Media/Entertainment Utility

## 🎯 Problem Statement

Everyone has experienced this: watching a video late at night, keeping the volume low to not disturb others. Then suddenly — an explosion, a scream, or a loud music cue blasts through, forcing you to scramble for the volume button. Then dialogue gets quiet again, and you can't hear anything.

**The audio whiplash problem:**
- Movies have 20-30dB dynamic range (quiet whispers to loud explosions)
- YouTube content varies wildly in audio levels between videos
- Streaming services have inconsistent mixing
- Late-night viewers constantly juggle volume
- Headphone users get blasted by sudden loud sections
- People with hearing difficulties miss quiet dialogue

From Twitter:
> "I was watching a video, It was quite late and I was Exhausted. Everytime there was a scream or loud voice, I would have to reduce my phone volume and Turn it back up when I can barely hear. I wish there was an app that can keep the volume consistent" — @Simileejake

## 👥 Target Users

1. **Late-Night Viewers** — Don't want to wake family/roommates
2. **Headphone Users** — Protect their hearing from sudden loud sections
3. **Parents** — Watching content while kids sleep nearby
4. **Apartment Dwellers** — Thin walls, noise-conscious
5. **Hearing Impaired** — Need consistent levels to understand dialogue
6. **Content Bingers** — Watching multiple episodes with varying audio mixes
7. **Commuters** — Watching on transit with environmental noise

## 💡 Proposed Solution

**LevelAudio** — Real-time audio normalization that automatically compresses dynamic range. Quiet parts get louder, loud parts get quieter, everything stays at a comfortable consistent level.

### How It Works

1. **System-Wide Audio Processing** — Sits between your audio output and speakers/headphones
2. **Dynamic Range Compression** — Analyzes audio in real-time, compresses extreme peaks
3. **Look-Ahead Processing** — Anticipates loud sections to prevent sudden jumps
4. **Smart Presets** — Different modes for movies, music, podcasts, gaming
5. **Night Mode** — Extra compression + dialog boost for late-night viewing

## ✨ Key Features

### Core Features
- **One-Toggle Activation** — Enable/disable instantly
- **Real-Time Processing** — No delay or lip-sync issues
- **System-Wide** — Works with any app (Netflix, YouTube, games, etc.)
- **Volume Ceiling** — Set a max dB level that audio never exceeds
- **Dialog Enhancement** — Boost voice frequencies for clearer speech

### Smart Modes
- **🌙 Night Mode** — Aggressive compression, max 40dB range
- **🎬 Movie Mode** — Balanced compression, preserves some dynamics
- **🎵 Music Mode** — Light compression, maintains musicality
- **🎮 Game Mode** — Preserves directional audio while limiting peaks
- **📢 Speech Mode** — Optimized for podcasts, lectures, audiobooks

### Advanced Controls
- **Compression Ratio** — How much to squash dynamics (1.5:1 to 10:1)
- **Threshold** — At what level compression kicks in
- **Attack/Release** — How fast it responds to changes
- **Makeup Gain** — Boost overall level after compression
- **Visual Meter** — See real-time compression activity

### Quality of Life
- **Per-App Profiles** — Different settings for different apps
- **Keyboard Shortcuts** — Quick toggle without interrupting playback
- **Menu Bar Widget** — Always-visible status and quick access
- **Auto-Enable Schedule** — Turn on automatically after 10 PM

## 🖥️ Platform Strategy

### Phase 1: Desktop
- **macOS App** — System audio processing via Audio Units
- **Windows App** — Virtual audio device driver
- **Browser Extension** — For web video without system access

### Phase 2: Mobile
- **iOS** — Limited by system restrictions, focus on in-app player
- **Android** — System-wide via accessibility service or audio routing

### Phase 3: Smart TV
- **Fire TV / Roku / Android TV apps** — Direct integration

## 🏗️ Technical Architecture

```
┌─────────────────────────────────────────────┐
│               Any Audio Source              │
│    (Netflix, YouTube, Games, Music, etc.)   │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│          LevelAudio Processing Engine       │
│  ┌──────────────────────────────────────┐   │
│  │  1. Input Buffer (look-ahead)        │   │
│  │  2. Level Detection (RMS + Peak)     │   │
│  │  3. Gain Calculation                 │   │
│  │  4. Compressor/Limiter               │   │
│  │  5. Dialog Enhancement (optional)    │   │
│  │  6. Output Makeup Gain               │   │
│  └──────────────────────────────────────┘   │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│           Speakers / Headphones             │
└─────────────────────────────────────────────┘
```

### Audio Processing Pipeline
- **Sample Rate:** Native (44.1kHz - 192kHz)
- **Latency:** <10ms (imperceptible for video)
- **CPU Usage:** <2% on modern hardware
- **Algorithm:** Multi-band compression with adaptive release

## 💰 Monetization

### Freemium Model
**Free Tier:**
- Night Mode only
- Basic compression
- 2-hour daily limit

**Pro ($4.99/month or $39.99/year):**
- All modes unlocked
- Per-app profiles
- Advanced controls
- No limits
- Priority support

**Lifetime ($79.99):**
- Everything in Pro, forever
- Early access to new features

### Alternative: One-Time Purchase
- **$14.99** — Full app, all features
- Simple, no subscriptions, appeals to audio enthusiasts

## 📊 Market Analysis

### Existing Solutions (and why they fall short)

| Solution | Limitation |
|----------|------------|
| VLC's compressor | Only works in VLC |
| Windows Loudness Equalization | Poor quality, always-on |
| Boom 3D | Expensive ($20), bloated, not focused on normalization |
| SoundSource | $39, complex, for audiophiles |
| TV "Night Mode" | Varies by TV, often poor quality |

### Market Gap
No simple, affordable, system-wide volume normalizer focused on the casual viewer who just wants comfortable audio levels.

### Market Size
- **80M+** households stream content daily in the US
- **40%+** of streaming happens after 9 PM
- Estimated **$50M+** TAM for audio utility apps

## 🎨 User Interface

### Minimal Floating Widget
```
┌──────────────────┐
│ 🎚️ LevelAudio    │
│ ━━━━━━━━━━━●━━━  │  ← Compression strength slider
│                  │
│ [🌙 Night] [🎬]  │  ← Quick mode buttons
│                  │
│ ▁▃▅▇▅▃▁ -8dB    │  ← Real-time compression meter
└──────────────────┘
```

### Menu Bar Status
```
🎚️ ← Click to toggle, right-click for menu
```

## 🚀 Development Roadmap

### MVP (Month 1-2)
- [ ] macOS system audio routing
- [ ] Basic compressor algorithm
- [ ] On/off toggle
- [ ] Night mode preset
- [ ] Menu bar widget

### V1.0 (Month 3-4)
- [ ] All audio modes
- [ ] Per-app profiles
- [ ] Advanced controls
- [ ] Keyboard shortcuts
- [ ] Windows version

### V1.5 (Month 5-6)
- [ ] Browser extension (Chrome, Firefox)
- [ ] Dialog enhancement
- [ ] Auto-enable scheduling
- [ ] Usage analytics

### V2.0 (Month 7+)
- [ ] Mobile apps (Android first)
- [ ] Smart TV apps
- [ ] Multi-device sync

## 📱 Prototype

See `/prototype` folder for interactive HTML demo showing:
- Volume level visualization
- Mode switching
- Compression simulation
- Settings panel

## 🔗 Similar Tools

- **SoundSource (Rogue Amoeba)** — $39, full audio routing, overkill for this use case
- **Boom 3D** — $20, focuses on EQ and enhancement, not normalization
- **Audio Hijack** — $59, professional tool, not consumer-focused
- **VLC Compressor** — Free, but only works within VLC

## 💡 Differentiation

1. **Single Purpose** — Does one thing extremely well
2. **Dead Simple** — One toggle to enable, one slider to adjust
3. **Affordable** — $15 or $5/month, not $40+
4. **System-Wide** — Works everywhere, not just one app
5. **Modern UI** — Clean, minimal, fits in with modern OS design

## 📝 Notes

- Consider privacy: app should NOT record or transmit any audio
- Real-time processing must be rock-solid (no glitches, pops, or drops)
- Low CPU usage is critical for laptop users
- May face challenges with HDCP/DRM content on some platforms
- Could partner with TV/soundbar manufacturers for licensing

---

*Generated by Duncan ⚔️ on 2026-03-09*
*Source: Twitter/X research*
