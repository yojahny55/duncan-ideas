# ScreenSnap - Smart Screenshot Manager

> "An app that identifies when you take a screenshot and sends an automatic push notification with options to 'Keep' or 'Delete in __ minutes'."

## Problem Statement

Screenshots have become a digital dumping ground. People take them constantly—receipts, addresses, memes, conversations, error messages—and they pile up with no organization. Most are never looked at again, yet they clog storage and make finding important captures nearly impossible.

**The pain points:**
- Screenshot folders become chaotic graveyards of forgotten images
- No easy way to find that one screenshot from weeks ago
- Important screenshots (receipts, confirmations) get lost among memes
- Manual cleanup is tedious and easily postponed
- Many screenshots are only needed temporarily but live forever

### Reddit Sources

- [r/fossdroid - "An app that identifies when you take a screenshot..."](https://www.reddit.com/r/fossdroid/comments/1jbw76f/comment/mi1c29t/) - Users explicitly requesting smart screenshot management
- [r/SomebodyMakeThis - Everyday problems discussion](https://www.reddit.com/r/SomebodyMakeThis/comments/1hm4j2m/) - File organization and screenshot management frequently mentioned

## Target Users

1. **Heavy Phone Users** (18-45) - Take 20+ screenshots/week, phone storage constantly full
2. **Professionals** - Need to capture work info, receipts, confirmations
3. **Content Collectors** - Save memes, recipes, inspiration but lose track
4. **Students** - Screenshot lecture slides, assignments, schedules
5. **Privacy-Conscious Users** - Want to auto-delete sensitive screenshots

## Proposed Solution

**ScreenSnap** - An intelligent screenshot manager that catches screenshots at capture time and helps you decide their fate immediately.

### Core Concept
When you take a screenshot, ScreenSnap intercepts it and presents a quick-action notification:
- **Keep Forever** - Important, archive it
- **Keep 1 Hour** - Temporary reference
- **Keep 1 Day** - Short-term need
- **Keep 1 Week** - Medium-term storage
- **Delete Now** - Instant cleanup

The app also auto-categorizes and provides OCR search across all screenshots.

## Key Features

### 1. Instant Capture Actions
- Pop-up notification on every screenshot with quick actions
- Swipe gestures for fastest decisions
- Auto-expire options (1hr, 1day, 1week, custom)
- "Snooze" option to decide later

### 2. Smart Auto-Categorization
AI-powered categorization into:
- 📧 **Messages** - Chat screenshots
- 🧾 **Receipts** - Purchases, confirmations
- 📝 **Text/Notes** - Written content
- 😂 **Memes** - Funny images
- 🎨 **Inspiration** - Design, ideas
- 📱 **UI/Apps** - App screenshots
- 🔐 **Sensitive** - Passwords, codes (flagged for quick delete)
- 📍 **Maps/Locations** - Directions, addresses

### 3. Full-Text Search (OCR)
- Automatic text extraction from all screenshots
- Search by any word visible in the image
- "Find the screenshot with the address" → instant results

### 4. Smart Cleanup Assistant
- Weekly digest: "You have 47 screenshots older than 30 days"
- Duplicate detection
- Bulk operations by category
- Storage impact visualization

### 5. Privacy Features
- Auto-detect sensitive content (passwords, banking)
- Secure folder with biometric lock
- Auto-shred after viewing option
- No cloud upload (local-first)

### 6. Gallery Organization
- Category-based browsing
- Timeline view with smart grouping
- Favorites and manual tags
- Quick share to apps

## Technical Stack

### Mobile App (Primary)
- **Platform:** React Native (iOS + Android)
- **Storage:** SQLite for metadata, native photo library integration
- **OCR:** Google ML Kit (on-device) / Tesseract
- **AI Categorization:** TensorFlow Lite models
- **Background Processing:** WorkManager (Android) / Background Tasks (iOS)

### Web Prototype
- **Frontend:** HTML5, CSS3, JavaScript
- **UI Framework:** Vanilla with custom components
- **Icons:** Lucide or Heroicons
- **Animations:** CSS transitions

### Future Backend (Optional)
- Cross-device sync via encrypted cloud
- Web dashboard for desktop access

## Monetization Strategy

### Freemium Model

**Free Tier:**
- Basic capture actions
- 5 categories
- Search last 100 screenshots
- Manual cleanup

**Pro ($2.99/month or $24.99/year):**
- Unlimited categories + custom categories
- Full OCR search (all screenshots)
- Smart cleanup assistant
- Auto-categorization AI
- Scheduled auto-delete rules
- Widgets
- No ads

**One-Time Purchase Option:** $9.99 lifetime

## Competition Analysis

| App | Strengths | Weaknesses |
|-----|-----------|------------|
| **Native Gallery** | Built-in, free | No smart features, manual only |
| **Google Photos** | Good search, cloud backup | Privacy concerns, no capture-time actions |
| **Screenshot Path** | Screenshot notification | Limited features, outdated |
| **Screener** | Good organization | No OCR, no auto-delete |

### ScreenSnap Advantage
The key differentiator is **capture-time decision making**. No other app prompts you at the moment you take a screenshot to decide its lifespan. This prevents accumulation rather than treating it after the fact.

## Why This Will Work

1. **Universal Problem** - Everyone with a smartphone takes screenshots; everyone's gallery is a mess
2. **Immediate Value** - Users see benefit from the first screenshot
3. **Low Friction** - Notification actions take <1 second
4. **Privacy-First** - On-device processing appeals to security-conscious users
5. **Clear Upgrade Path** - Free version is useful; Pro is compelling for power users
6. **Sticky Retention** - Once organized, users won't want to go back to chaos
7. **Word of Mouth** - "How do you keep your screenshots organized?" is a common question

## MVP Scope

### Phase 1 (4 weeks)
- Screenshot detection + notification
- Keep/Delete quick actions
- Basic timed auto-delete
- Simple gallery view

### Phase 2 (4 weeks)
- Auto-categorization
- OCR text extraction
- Search functionality
- Cleanup suggestions

### Phase 3 (4 weeks)
- Polish & refinements
- Widgets
- Pro features
- App store launch

## Prototype

See `/prototype` folder for interactive web demo showcasing:
- Screenshot capture notification UI
- Category gallery view
- Search interface
- Cleanup assistant

---

*Idea sourced from Reddit r/fossdroid and r/SomebodyMakeThis discussions on screenshot management pain points.*
