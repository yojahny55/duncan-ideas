# ParentPane — Unified Parental Controls Dashboard

> One app to manage all your kids' screen time, content restrictions, and usage across every platform.

## The Problem

Parents today manage an impossible patchwork of parental controls:

- **Roblox** — separate account settings, different for each child
- **Minecraft** — varies by platform (Java vs Bedrock vs console)
- **Fortnite** — Epic Games parental controls
- **YouTube** — Google Family Link or YouTube Kids
- **Nintendo Switch** — Nintendo parental controls app
- **PlayStation** — Sony Family Management
- **Xbox** — Microsoft Family Safety
- **iOS** — Screen Time settings
- **Android** — Family Link
- **PC** — varies by OS

**Each platform has:**
- Different login credentials
- Different terminology (playtime vs screen time vs time limits)
- Different notification systems
- Different content rating scales
- No unified view of actual usage

**The result:** Parents either give up (78% admit they don't use available controls) or spend hours per week across 8+ different dashboards.

## The Source

> "Do you know how many different platforms parents need to manage? Each have different requirements for parental controls.. Roblox, Minecraft, fortnite, Nintendo, PS, YouTube etc. If someone builds an app that provides me a single pane of glass for parental control sign me up!"
> — [@Padwords](https://x.com/Padwords/status/2029737320287543394)

Additional context from @SonOfATech:
> "One thing I have not fully sorted out is parental controls on linux. Microsoft family safety made things really simple... having the os and account level restrictions are extremely helpful."

## Target Users

1. **Multi-child households** (2-4 kids)
   - Each child has different age-appropriate limits
   - Parents can't remember which child has which settings where

2. **Divorced/co-parent households**
   - Both parents need visibility and control
   - Consistency between homes is critical

3. **Non-technical parents**
   - Know parental controls exist
   - Overwhelmed by the fragmentation

## The Solution: ParentPane

**A unified dashboard that aggregates parental controls from all platforms into one interface.**

### Core Features

1. **Single Dashboard View**
   - See all children across all platforms
   - Unified time remaining / time spent today
   - Content restriction summary per child

2. **Platform Connectors**
   - OAuth/API integrations where available
   - Guided setup for platforms requiring manual config
   - Status indicators showing what's connected

3. **Unified Time Limits**
   - Set daily/weekly limits that apply across platforms
   - "Gaming" category vs "Educational" vs "Social"
   - Smart distribution (2hr gaming = combined Fortnite + Roblox + PS5)

4. **Cross-Platform Alerts**
   - One notification stream
   - "Marcus tried to access age-restricted content on YouTube"
   - "Emma has 15 minutes left of gaming time today"

5. **Bedtime Mode**
   - Set schedules once, propagate everywhere
   - Wind-down warnings across all devices
   - Emergency override with parent PIN

6. **Content Rating Standardization**
   - Map ESRB / PEGI / IARC / YouTube ratings to one scale
   - "Teen-appropriate across all platforms"

7. **Family Reports**
   - Weekly digest: who played what, for how long
   - Trends over time
   - Conversation starters for healthy screen time discussions

### Platform Integration Strategy

| Platform | Integration Type | Notes |
|----------|-----------------|-------|
| Xbox | Microsoft Graph API | Family Safety built-in |
| PlayStation | Unofficial API | Rate-limited |
| Nintendo | QR code pairing | Official app protocol |
| iOS | MDM profile | Requires setup |
| Android | Family Link API | Google OAuth |
| YouTube | Google OAuth | Via Family Link |
| Roblox | Open API | Well-documented |
| Minecraft | Varies | Xbox/Microsoft for Bedrock |
| Fortnite | Epic OAuth | Parental controls API |
| Steam | Steam Family | API available |
| Discord | No API | Manual guidance only |

### Competitive Landscape

| Product | Approach | Limitation |
|---------|----------|------------|
| Google Family Link | Android/Google only | No gaming consoles |
| Apple Screen Time | Apple devices only | No cross-platform |
| Bark | Monitoring-focused | Not control-focused |
| Qustodio | Desktop/mobile | Limited gaming platform support |
| Microsoft Family Safety | Xbox + Windows + mobile | Not PlayStation/Nintendo |

**Gap:** No product unifies gaming consoles + mobile + PC + streaming services.

### Technical Architecture

```
┌──────────────────────────────────────────┐
│            ParentPane Dashboard          │
│         (React Native Web + Mobile)      │
└─────────────────┬────────────────────────┘
                  │
┌─────────────────┴────────────────────────┐
│           Aggregation Layer              │
│   (Normalize data from all connectors)   │
└─────────────────┬────────────────────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
┌───┴───┐   ┌─────┴─────┐  ┌────┴────┐
│ OAuth │   │  Polling  │  │ Webhook │
│ APIs  │   │ Connectors│  │ Receivers│
└───────┘   └───────────┘  └─────────┘
    │             │             │
    ▼             ▼             ▼
Xbox, PS, Nintendo, Roblox, Epic, Google, Apple, Steam
```

## Business Model

**Freemium:**
- **Free:** 2 children, 3 platforms, basic time limits
- **Family ($9.99/mo):** Unlimited children/platforms, reports, bedtime mode
- **Family+ ($14.99/mo):** Co-parent sharing, detailed analytics, priority connectors

## Market Size

- **45M** US households with children under 18
- **73%** have gaming consoles
- **89%** have smartphones
- **$2.5B** parental control software market (2025)

## Go-to-Market

1. **Parent blogs & podcasts** — "Finally, one app to manage it all"
2. **School PTA partnerships** — Digital citizenship initiatives
3. **Gaming console communities** — Reddit r/parenting, r/NintendoSwitch
4. **Pediatrician recommendations** — AAP screen time guidelines

## Name Options

- **ParentPane** ← Primary (single pane of glass)
- **ScreenSync**
- **FamilyHub**
- **KidControl**
- **GuardianView**

## MVP Scope

**Phase 1 (4 weeks):**
- Dashboard UI
- Microsoft Family Safety integration (Xbox + Windows)
- Google Family Link integration (Android + YouTube)
- Basic time limit aggregation

**Phase 2 (4 weeks):**
- Roblox connector
- Fortnite/Epic connector
- Cross-platform time budgets
- Mobile app

**Phase 3:**
- PlayStation, Nintendo
- Detailed reporting
- Co-parent features

## Success Metrics

- **Activation:** 70% connect 2+ platforms within first week
- **Retention:** 60% monthly active after 90 days
- **NPS:** 50+ (parents recommend to other parents)
- **Conversion:** 8% free → paid within 30 days

## Prototype

See `prototype/index.html` for an interactive demo showing:
- Multi-child dashboard view
- Platform connection status
- Unified time remaining
- Quick actions (pause all, bedtime mode)

---

*Researched by Duncan ⚔️ | Source: X/Twitter | March 6, 2026*
