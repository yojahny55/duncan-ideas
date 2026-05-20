# ClearVoice — Real-Time Audio Leveler for Streaming

**Date:** 2026-05-20
**Source:** Reddit trends (r/hometheater, r/sounddesign, r/NoStupidQuestions, r/marvelstudios)
**Status:** Idea

---

## Problem Statement

Everyone who watches movies or TV at home has the same maddening experience: dialogue is whispered while explosions and music blast at theater volume. Viewers constantly ride the volume remote — turn up to hear dialogue, scramble to turn down when action hits. Reddit threads complaining about this get hundreds of upvotes weekly. The root cause is cinematic dynamic range (designed for theaters) being delivered uncompressed to living rooms with basic TV speakers or soundbars.

Current "solutions" are inadequate:
- TV "night mode" compresses everything flat, killing audio quality
- Soundbar dialogue enhancement is expensive and TV-specific
- Manually adjusting volume is exhausting
- Subtitles become a crutch, not a solution

**The pain is universal.** Every streaming viewer deals with this. Every night.

## Solution

**ClearVoice** — a lightweight background app (mobile + desktop) that acts as a real-time audio compressor/leveler specifically tuned for speech intelligibility. It sits between your streaming source and your ears.

### Core Features
1. **Smart Dynamic Range Compression** — Detects speech frequencies (300Hz-3kHz) and independently levels dialogue vs. effects/music
2. **One-Tap Profiles** — "Movie Night," "Late Night," "Podcast," "Music" presets
3. **Learn Your Room** — Optional mic calibration to adjust for your specific TV/speaker setup
4. **Universal Compatibility** — Works with any audio source (Bluetooth, HDMI, headphone jack, AirPlay, Chromecast)
5. **AI Speech Boost** — Machine learning model that isolates and boosts dialogue in real-time, even in complex mixes

### How It Works
- **Mobile:** Acts as a Bluetooth audio proxy between your phone/tablet and headphones/speaker
- **Desktop:** System-wide audio filter (virtual audio device) that processes all output
- **Future:** Smart TV app, soundbar firmware integration

## Target Users

| Segment | Size | Pain Level |
|---------|------|------------|
| Casual streamers watching alone at night | ~200M (US) | 🔴 High |
| Parents watching after kids' bedtime | ~40M | 🔴 Critical |
| Hard of hearing / elderly | ~48M | 🔴 Critical |
| Home theater enthusiasts w/o premium gear | ~15M | 🟡 Medium |
| Apartment/condo dwellers (noise complaints) | ~40M | 🔴 High |

**Primary persona:** "Night Owl Nicole" — 34, watches Netflix after putting kids to bed, can't hear dialogue over the sleeping house's silence OR can't play explosions without waking kids. Currently uses subtitles as a workaround.

## Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Audio Engine** | Web Audio API + WASM (Rust) | Real-time DSP in browser; Rust for native performance |
| **ML Model** | ONNX Runtime (Web) | Speech separation model running client-side |
| **Mobile** | React Native + Expo | Cross-platform, Bluetooth audio access |
| **Desktop** | Tauri (Rust + React) | Lightweight native app, system audio hook |
| **Backend** | Supabase | Auth, profiles, subscription management |
| **Audio Processing** | RNNoise + custom compressor | Proven noise suppression + dynamic range control |
| **CI/CD** | GitHub Actions | Automated builds for all platforms |

### MVP Scope
1. **Web app** (Chrome/Edge) — browser extension that processes tab audio
2. **React Native mobile** — Bluetooth audio proxy
3. Core DSP: 3-band compressor with speech-frequency focus

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | Basic compression, 2 profiles, web only |
| **Pro** | $2.99/mo or $24.99/yr | AI Speech Boost, all profiles, mobile + desktop, room calibration |
| **Family** | $4.99/mo | Pro for 5 devices, shared profiles |
| **Lifetime** | $79.99 | One-time, forever |

### Revenue Projections (Year 1)
- Target: 50K free users → 8% conversion = 4K paid users
- Monthly recurring: ~$12K/mo at $2.99 avg
- Year 1 revenue: ~$144K

### Expansion Revenue
- **B2B licensing** to soundbar/TV manufacturers
- **White-label** for streaming platforms (Netflix mode: "Clear Dialogue")
- **Accessibility market** — partnerships with hearing aid companies

## Competition

| Competitor | Gap |
|-----------|-----|
| TV "Night Mode" | Degrades all audio quality, TV-specific |
| Soundbar dialogue boost | Requires $200+ hardware purchase |
| Audials One | Desktop only, recording-focused, not real-time |
| Boom 3D | Generic equalizer, no speech-specific processing |
| Dolby Atmos | Requires full Atmos setup ($$$), not retroactive |

**ClearVoice wins because:** Software-only, universal, speech-specific AI, works with what you already have.

## Validation Signals

- r/hometheater "dialogue clarity" posts get 70+ upvotes routinely
- r/sounddesign post: *"Dear Hollywood, make the talking louder..."* — top comment energy
- r/NoStupidQuestions: streaming audio complaints are evergreen
- r/marvelstudios: Punisher show mocked for audio mixing issues (May 2026)
- Google Trends: "dialogue too quiet" has steady high search volume

## Next Steps

1. Build browser extension MVP (Web Audio API compressor) — **2 weeks**
2. Validate with Reddit communities (r/hometheater, r/television) — **1 week**
3. Add AI speech separation model — **4 weeks**
4. React Native mobile app — **6 weeks**
5. Launch on Product Hunt + Reddit — **Week 14**

---

*Inspired by universal frustration. Everyone deserves to hear what people are saying.*
