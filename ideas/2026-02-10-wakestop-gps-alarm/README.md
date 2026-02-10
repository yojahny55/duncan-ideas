# WakeStop - GPS Proximity Alarm

**Date:** February 10, 2026  
**Source:** Reddit (r/fossdroid, r/SomebodyMakeThis)  
**Category:** Transportation / Commute Utility

## Problem Statement

Millions of public transit commuters face the same daily struggle: **missing their stop** because they fell asleep, got distracted by their phone, or simply zoned out during a long commute.

From Reddit user feedback:
> "An alarm that rings when I'm within some distance of a GPS coordinate" - [r/fossdroid](https://www.reddit.com/r/fossdroid/comments/1jbw76f/comment/mi1iee9/)

Current solutions are inadequate:
- **Standard alarms**: Time-based, not location-based. Traffic delays make them unreliable.
- **Google Maps alerts**: Require active navigation, drain battery, and aren't optimized for public transit.
- **Transit apps**: Focus on schedules, not personal proximity alerts.

## Target Users

1. **Daily Commuters** - Take the same bus/train/subway multiple times per week
2. **Tired Workers** - Night shift workers, early morning commuters who nap during transit
3. **Tourists/Newcomers** - Unfamiliar with routes, afraid of missing stops
4. **Students** - Long campus commutes, often distracted or studying
5. **Elderly Riders** - May need gentle reminders before their stop

## Proposed Solution

**WakeStop** is a minimalist GPS proximity alarm app that:
1. Lets users set a destination (address, saved location, or pin on map)
2. Alerts them with increasing intensity as they approach
3. Works in the background with minimal battery drain
4. Requires zero active navigation or constant screen attention

### Core Value Proposition
*"Set it and forget it. We'll wake you up."*

## Key Features

### MVP Features
1. **One-Tap Destination Setting** - Type address, pick from recents, or drop a pin
2. **Adjustable Alert Radius** - 500m, 1km, 2km before destination
3. **Escalating Alerts** - Vibrate → Sound → Louder Sound as you get closer
4. **Background Operation** - Works with screen off, minimal battery usage
5. **Saved Locations** - "Home", "Work", frequent stops
6. **Quick Toggle** - Activate/deactivate alarm from notification shade

### Enhanced Features
7. **Smart Transit Detection** - Auto-suggest alarm when entering a vehicle
8. **Vibration Patterns** - Different patterns for "1km away" vs "500m away"
9. **Do Not Disturb Override** - Optional override for critical alerts
10. **Alarm History** - Track when alerts triggered for debugging

### Future Features
- Integration with transit APIs for smarter arrival predictions
- Widget for home screen quick-access
- Wear OS / watchOS companion for wrist alerts
- Shared locations ("Wake me when near John's house")

## Technical Stack

### Mobile App (Cross-Platform)
- **Framework**: React Native with Expo
- **Location**: Expo Location with geofencing
- **Notifications**: Expo Notifications + background tasks
- **Storage**: AsyncStorage for saved locations
- **Maps**: React Native Maps (Google Maps / Apple Maps)

### Architecture
```
┌─────────────────────────────────────────┐
│              UI Layer                    │
│  (React Native + React Navigation)       │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│           State Management               │
│     (Context API + AsyncStorage)         │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│         Background Services              │
│  - Geofencing (Expo Location)            │
│  - Background Tasks (expo-task-manager)  │
│  - Local Notifications                   │
└─────────────────────────────────────────┘
```

### Battery Optimization Strategy
- Use native geofencing (not continuous GPS polling)
- Significant location changes only when alarm active
- Adaptive precision based on distance to target

## Monetization Strategy

### Freemium Model
**Free Tier:**
- 1 active alarm at a time
- 3 saved locations
- Standard alert sounds

**Pro Tier ($2.99/month or $19.99/year):**
- Unlimited active alarms
- Unlimited saved locations
- Custom alert sounds/vibrations
- Transit detection auto-trigger
- No ads

### Alternative Revenue
- **One-time purchase**: $4.99 lifetime access
- **Non-intrusive ads**: Banner on main screen (free tier)

## Competition Analysis

| App | Pros | Cons |
|-----|------|------|
| **Google Maps** | Free, accurate | Battery hog, requires active nav |
| **Naplarm** | Simple, purpose-built | Outdated UI, Android only |
| **Sleep on Bus** | Transit-focused | Limited locations, old |
| **Custom timer alarms** | Free | Time-based, not location-based |

### WakeStop Differentiators
1. **Modern, clean UI** - Not stuck in 2015
2. **Cross-platform** - iOS and Android from day one
3. **Battery-efficient** - Native geofencing, not GPS polling
4. **Escalating alerts** - Multiple warning levels
5. **Quick setup** - Under 5 seconds to set alarm

## Why This Will Work

### Market Validation
- **Reddit feedback**: Multiple threads requesting this exact feature
- **App Store gaps**: Existing solutions are outdated or poorly designed
- **Universal need**: Anyone who uses public transit has this pain point
- **Simple value prop**: Easy to explain, instant understanding

### Execution Advantages
- **Minimal API dependencies**: Works offline once destination is set
- **Small scope**: Can ship MVP in 2-3 weeks
- **Clear differentiation**: UX-first approach vs legacy competitors
- **Retention driver**: Daily commuters use it every day

### Growth Strategy
1. **Reddit marketing**: Post in r/publictransit, r/commuting, city-specific subs
2. **App Store optimization**: "don't miss your stop", "bus alarm", "train wake up"
3. **Referral**: "Share your stop with a friend" feature
4. **Press**: "Finally, an app that solves a universal commuter problem"

## Prototype

See `/prototype` folder for a working HTML/CSS/JS mockup demonstrating:
- Main dashboard with active alarm
- Destination search interface
- Settings configuration
- Alert notification states

---

*Built with ☕ by Duncan | Source: Reddit community feedback*
