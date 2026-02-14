# DidISend - Share Memory Tracker 📤🧠

> Track what you've shared with whom — never send the same link twice again.

## Source

**Platform:** X/Twitter  
**Date Found:** February 14, 2026  
**Original Tweet:** [@karen_r57](https://x.com/karen_r57/status/2022428182314648033)

> "There should be an app for postmenopausal women that tells you if you've already sent an article or meme to a specific person so you don't send it again like a moron."

Additional validation from [@Harmless_xd](https://x.com/Harmless_xd/status/2022546408746963120):
> "while I probably already sent this to you, here's another for good measure"

## Problem Statement

**Universal pain point:** You find a great article, meme, or link. You want to share it with a friend. But wait... did you already send this to them last week? Last month? You can't remember.

**Current workarounds:**
- Scroll through months of chat history (tedious, unreliable)
- Search message apps for URLs (doesn't work well)
- Just send it anyway and feel embarrassed when they respond "you sent this already"
- Don't share at all to avoid the awkwardness

**Who experiences this:**
- Everyone who shares content regularly
- People with multiple group chats and friends
- Those who consume a lot of content (articles, memes, videos)
- Anyone with a "bad memory" (hint: everyone)

## Target Users

1. **Active Sharers** — People who regularly send articles, videos, memes to friends/family
2. **Content Curators** — Those who maintain different "sharing audiences" (tech stuff to tech friends, memes to meme group, etc.)
3. **Group Chat Admins** — Managing what's been shared to multiple groups
4. **Professionals** — Sharing industry articles with colleagues without duplicating

## Proposed Solution

**DidISend** — A share memory layer that tracks what you've sent to whom.

### Core Concept

When you're about to share something:
1. Open DidISend share extension
2. Paste or share the URL/content
3. See instantly: "Already sent to: Sarah (3 days ago), Work Group (1 week ago)"
4. Choose to send anyway or pick different recipients

### How It Works

**Option A: Share Extension (iOS/Android)**
- Use native share sheet to "Check with DidISend"
- Shows share history before you commit
- Then share through your preferred app

**Option B: Browser Extension**
- Click extension on any page
- See who you've shared this URL with
- Quick share buttons with memory tracking

**Option C: Clipboard Monitor (Desktop)**
- Watches clipboard for URLs
- Shows notification if you've shared it before
- Non-intrusive background tracking

## Key Features

### MVP (Version 1.0)

1. **Share History Database**
   - Track URL + recipient + timestamp
   - Fuzzy URL matching (ignore tracking params, trailing slashes)
   - Content fingerprinting for memes/images

2. **Quick Check**
   - Paste URL → instant lookup
   - Shows all recipients with dates
   - Confidence score (exact match vs similar)

3. **Contact/Group Management**
   - Import contacts
   - Create groups (Family, Work, Close Friends)
   - Track per-person and per-group

4. **Share Extension**
   - iOS: Share sheet integration
   - Android: Share intent handler
   - Chrome/Firefox extension

### Future Features (v2.0+)

1. **Smart Suggestions**
   - "You haven't shared this topic with Sarah in a while"
   - "David might like this based on past shares"

2. **Content Categories**
   - Auto-tag: Tech, News, Memes, Videos
   - Filter share history by category

3. **Analytics Dashboard**
   - Most active share relationships
   - Content type breakdown
   - Share frequency trends

4. **Cross-Platform Sync**
   - iCloud/Google sync
   - Web dashboard

## Technical Architecture

### Data Model

```
Share {
  id: uuid
  url: string (normalized)
  urlHash: string (for quick lookup)
  title?: string
  thumbnail?: string
  recipients: [{
    contactId: uuid
    sharedAt: timestamp
    platform?: "imessage" | "whatsapp" | "telegram" | "email" | "other"
  }]
  contentFingerprint?: string (for images)
}

Contact {
  id: uuid
  name: string
  groups: string[]
  importedFrom?: "contacts" | "manual"
}
```

### URL Normalization

- Strip tracking params (utm_*, fbclid, etc.)
- Remove trailing slashes
- Normalize protocol (http → https)
- Handle URL shorteners (expand and cache)

### Privacy Considerations

- **Local-first storage** — No cloud required for MVP
- Optional encrypted sync
- No reading of actual messages
- Only tracks what user explicitly shares through the app

## Competitive Analysis

### Existing Solutions

| Solution | Approach | Gap |
|----------|----------|-----|
| Chat search | Search message history | Tedious, doesn't work across apps |
| Pocket/Instapaper | Save for later | No sharing memory |
| Link aggregators | Bookmark managers | No recipient tracking |
| Nothing exists | — | This is the gap |

### Why This Doesn't Exist

1. Cross-app sharing is fragmented
2. Privacy concerns around message monitoring
3. Seems "small" but affects millions daily
4. Hard to monetize (though there are paths)

## Business Model

### Freemium

**Free Tier:**
- Track last 100 shares
- 5 contacts/groups
- Single platform

**Pro ($2.99/month):**
- Unlimited shares
- Unlimited contacts
- Cross-platform sync
- Analytics dashboard
- Browser extension

### Alternative: One-Time Purchase
- $4.99 iOS app
- $4.99 Android app
- $2.99 browser extension

## Go-To-Market

1. **Launch on Product Hunt** — "Never embarrass yourself sending the same link twice"
2. **Reddit** — r/lifehacks, r/productivity, r/iPhone
3. **Meme marketing** — Create relatable memes about duplicate sharing
4. **Influencer seeding** — Give to content curators/newsletter writers

## Success Metrics

- **DAU/MAU ratio** — Daily habit potential
- **Shares tracked per user** — Engagement depth
- **"Already sent" catches** — Core value delivered
- **NPS** — Recommendation likelihood

## Technical Stack (Prototype)

- **Frontend:** HTML/CSS/JS (demo)
- **Production:** React Native (mobile), React (web)
- **Storage:** SQLite (local), optional Supabase (sync)
- **Browser:** Chrome Extension Manifest V3

## Prototype

See `prototype/` directory for interactive demo.

---

*Idea researched and documented by Duncan ⚔️ — February 14, 2026*
