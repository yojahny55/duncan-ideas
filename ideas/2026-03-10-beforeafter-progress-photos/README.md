# BeforeAfter 📸

**Universal before/after photo comparison app — take "before" photos, get guided "after" shots from the same angle, generate stunning comparisons automatically.**

## Problem Statement

People take "before" photos all the time:
- **Auto detailers** photograph car interiors before an 8-hour detail, then struggle to remember which "before" matches which area
- **Home renovators** take pictures before starting a project, but weeks later can't find or match the original angle
- **Fitness enthusiasts** want consistent progress photos but lighting, pose, and angle vary wildly
- **Cleaners/organizers** need proof-of-work documentation for clients
- **Gardeners** track growth over seasons but photos are scattered in camera roll
- **Pet groomers** need before/after proof for clients
- **Healthcare** (wound healing, dermatology progress) requires consistent documentation

The universal pain point from Reddit: *"I take photos, and then six-eight hours later when I'm done... I can't remember what original photos I took as the 'before' to retake and compare."*

### Why Existing Solutions Fail

| Solution | Problem |
|----------|---------|
| Camera roll | Photos get buried, no linkage between before/after |
| MyFitnessPal | Fitness-only, basic comparison, no angle guidance |
| Generic photo apps | No ghost overlay for matching angles |
| Manual collages | Time-consuming, inconsistent results |
| Notes/folders | Still requires manual matching |

## Target Users

1. **Service providers** (auto detailers, cleaners, contractors, groomers)
2. **DIYers** (home renovation, furniture restoration, car restoration)
3. **Fitness enthusiasts** (body recomp, strength gains)
4. **Gardeners & farmers** (growth tracking, seasonal changes)
5. **Healthcare** (wound care, dermatology, physical therapy)
6. **Content creators** (transformation content for social media)

## Proposed Solution: BeforeAfter

A dedicated app that makes before/after photography effortless:

### Core Features

#### 1. Smart "Before" Capture
- Take a "before" photo with project context (name, category, notes)
- **Angle Lock**: Records camera orientation, zoom level, and approximate framing
- Auto-tags with date, time, location
- Supports multiple "before" shots per project (different angles, areas)

#### 2. Ghost Overlay for "After" Shots
- When taking "after" photo, shows semi-transparent overlay of the "before"
- **Alignment guides** help match exact framing
- Works even weeks/months later
- Adjustable opacity (20-80%)

#### 3. Automatic Comparison Generation
- Side-by-side slider comparison
- Split view (diagonal, vertical, horizontal)
- Fade transition animation
- Grid view for multiple angles
- One-tap export to social media formats

#### 4. Project Organization
- Projects group related before/afters
- Categories: Home, Auto, Fitness, Garden, Pet, Medical, Other
- Timeline view showing all progress
- Search by date, project name, or notes

#### 5. Professional Features
- **Client mode**: Generate branded PDF reports
- **Watermarking** for service providers
- **Privacy mode**: Face blur for fitness photos
- Export in various aspect ratios (1:1, 4:5, 16:9, Stories)

### Key Differentiators

1. **Ghost overlay** — No other app helps you match the exact angle
2. **Domain-agnostic** — Not locked to fitness or any single category
3. **Automatic pairing** — AI suggests which "before" matches your new photo
4. **Professional output** — Service providers can create client deliverables
5. **Privacy-first** — All processing local, no cloud upload required

## User Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        HOME SCREEN                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │  + New       │  │  Projects    │  │  Gallery     │       │
│  │  Project     │  │  (12)        │  │  View        │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  Recent Projects                                             │
│  ┌─────────────────────────────────────────────────┐        │
│  │ 🚗 Tesla Detail        2 days ago    4 pairs    │        │
│  │ 🏠 Kitchen Reno        1 week ago    12 pairs   │        │
│  │ 💪 March Progress      Today         1 pair     │        │
│  └─────────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    NEW PROJECT / BEFORE                     │
│                                                              │
│  Project Name: [Kitchen Backsplash Tile           ]         │
│                                                              │
│  Category: [🏠 Home ▼]                                       │
│                                                              │
│  ┌─────────────────────────────────────────────────┐        │
│  │                                                  │        │
│  │              📷 CAMERA VIEWFINDER               │        │
│  │                                                  │        │
│  │         [Grid overlay for alignment]            │        │
│  │                                                  │        │
│  └─────────────────────────────────────────────────┘        │
│                                                              │
│  Notes: [Old 80s tile, replacing with subway      ]         │
│                                                              │
│           [  📸 Capture Before  ]                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    TAKE "AFTER" PHOTO                       │
│                                                              │
│  ┌─────────────────────────────────────────────────┐        │
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │        │
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │        │
│  │ ░░░░  GHOST OVERLAY OF "BEFORE" IMAGE   ░░░░░░ │        │
│  │ ░░░░░  (40% opacity, adjustable)        ░░░░░░ │        │
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │        │
│  │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │        │
│  └─────────────────────────────────────────────────┘        │
│                                                              │
│  Opacity: ████████░░░░░░░░░░  40%                           │
│                                                              │
│  ✓ Angle matched    ✓ Distance OK    ⚠ Lighting differs    │
│                                                              │
│           [  📸 Capture After  ]                            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   COMPARISON VIEW                           │
│                                                              │
│  ┌────────────────────┬────────────────────┐                │
│  │                    │                    │                │
│  │      BEFORE        │       AFTER        │                │
│  │                    │                    │                │
│  │    Jan 15, 2026    │    Mar 10, 2026    │                │
│  │                    │                    │                │
│  └────────────────────┴────────────────────┘                │
│                                                              │
│  View: [Side-by-Side] [Slider] [Fade] [Split]               │
│                                                              │
│  [💾 Save] [📤 Share] [📄 Report] [🔄 Retake After]         │
└─────────────────────────────────────────────────────────────┘
```

## Technical Architecture

### Mobile App (React Native / Flutter)
- Camera API with orientation sensors
- Local SQLite for project storage
- Image processing for ghost overlay
- Export to various formats

### Key Technical Features
- **Gyroscope data** stored with "before" photos for angle matching
- **Edge detection** to help align structural elements
- **Local-first**: No server required for core functionality
- **Cloud sync** (optional): For backup and cross-device access

## Monetization

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 3 projects, basic comparisons, watermarked exports |
| **Pro** | $4.99/mo | Unlimited projects, all comparison styles, no watermark |
| **Business** | $14.99/mo | Client reports, team sharing, branded exports, API access |

## Market Analysis

### Competition
- **Progress** (iOS): Fitness-focused, $4.99/mo, no ghost overlay
- **Pixaloop**: Video effects, not comparison-focused
- **Diptic/Layout**: Generic collage apps, no smart pairing
- **PhotoRoom**: Background editing, not progress tracking

### Differentiation
BeforeAfter is the **only** app that:
1. Provides ghost overlay for angle matching
2. Works across ALL domains (not just fitness)
3. Auto-pairs before/after shots
4. Generates professional comparison outputs

### Market Size
- 50M+ people do home improvement projects annually (US)
- 100K+ auto detailers in the US alone
- 64M Americans have gym memberships
- $500B+ home services market

## Development Phases

### Phase 1: MVP (4 weeks)
- Project creation with categories
- Basic before/after capture
- Simple ghost overlay
- Side-by-side comparison export

### Phase 2: Polish (4 weeks)
- Slider comparison view
- Angle matching indicators
- Multiple comparison styles
- Social sharing presets

### Phase 3: Pro Features (4 weeks)
- PDF report generation
- Custom branding
- Cloud sync
- Team features

## Success Metrics

- **Activation**: User creates first project within 24 hours
- **Retention**: 40%+ weekly active users at day 30
- **Conversion**: 5%+ free-to-Pro conversion
- **Virality**: 20%+ of exports shared to social media

---

## Source

Reddit thread: *"Looking for an app to help compare before and after photos for an auto detailer"* — highlighting the specific pain point of matching before/after photos hours apart.

Additional validation from fitness, home improvement, and gardening communities discussing the same frustration with existing photo organization.

---

*Generated by Duncan ⚔️ — March 10, 2026*
