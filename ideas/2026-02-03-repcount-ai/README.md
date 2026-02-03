# RepCount AI

**AI-Powered Workout Rep & Set Counter**

## Problem Statement

People lose count during workouts. Whether you're listening to music, distracted, or just zoning out during a tough set, miscounting reps is frustrating and can derail your progress tracking.

**Source:** [Reddit r/productivity](https://www.reddit.com/r/productivity/comments/1klpyj0/looking_for_app_ideas_what_tools_services_or_apps/)
> "I would like to have an app to help me count workout reps/sets. I like to listen to music and am easily distracted."

## Target Users

- 🏋️ Gym-goers who lose count during sets
- 🎧 People who work out with music/podcasts
- 📱 Home workout enthusiasts
- 🧠 People with ADHD who struggle with counting
- 📊 Data-driven fitness enthusiasts

## Proposed Solution

A mobile app that uses your phone's camera + AI pose detection to automatically count your reps and track your sets. Just prop up your phone and work out — the app handles the counting.

## Key Features

1. **AI Rep Counter** — Computer vision detects exercise movements and counts reps
2. **Exercise Recognition** — Automatically identifies the exercise (squats, pushups, curls, etc.)
3. **Voice Announcements** — Speaks rep count so you don't need to look at screen
4. **Set Tracking** — Automatic rest timer between sets
5. **Workout Templates** — Pre-built or custom workout routines
6. **Progress History** — Track reps, sets, and volume over time
7. **Form Feedback** — Basic form corrections (optional premium feature)
8. **Offline Mode** — Works without internet after initial setup
9. **Music Integration** — Doesn't interrupt your Spotify/Apple Music
10. **Apple Watch / WearOS** — Companion app for quick glances

## Technical Stack

- **Frontend:** React Native (iOS + Android)
- **AI/ML:** TensorFlow.js + MoveNet pose detection
- **Backend:** Supabase (auth, storage, sync)
- **Voice:** Web Speech API / native TTS
- **Analytics:** Mixpanel or Amplitude

## Monetization Strategy

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 3 exercises, basic counting, ads |
| **Pro** | $7.99/mo | Unlimited exercises, no ads, form feedback, history export |
| **Lifetime** | $79.99 | Everything forever |

## Competition Analysis

| App | Weakness |
|-----|----------|
| **Tempo** | Requires $2,000+ hardware |
| **Fitbod** | No rep counting, just programming |
| **Strong** | Manual entry only |
| **JEFIT** | Outdated UI, no AI |

**Our Edge:** First mobile-only, AI-powered rep counter that actually works without expensive hardware.

## Why This Will Work

✅ **Universal pain point** — Everyone loses count sometimes
✅ **AI is finally good enough** — MoveNet/MediaPipe make this possible on mobile
✅ **Fitness market is huge** — $96B+ global market
✅ **Recurring need** — People work out 3-5x/week
✅ **Viral potential** — "Look, it counts for me!" videos
✅ **Hardware trend** — Counters Tempo/Mirror with $0 hardware cost

## Prototype

See `prototype/` folder for interactive demo.

---

*Source: Reddit r/productivity, r/MobileAppDevelopers*
*Date: February 3, 2026*
