# LinkLifespan — Dead Link Monitor & Web Content Preserver

## The Problem

The internet is rotting. The average webpage lasts ~100 days. 25% of links in academic papers are dead within 5 years. Bookmarks you saved 2 years ago? There's a good chance they're gone.

**Nobody tells you when your saved content disappears.**

You bookmark a recipe, save a tutorial link in your notes, cite a source in a document — and months later, that page is a 404. Your references are broken. Your saved wisdom is gone. You don't find out until you need it.

- **Average webpage lifespan:** ~100 days (Harvard study)
- **Academic link rot:** 25% dead within 5 years, 50%+ within 10
- **News link rot:** 13% of NYT articles from 1996-2020 are gone
- **Personal bookmarks:** The average user has 100-500 bookmarks; 20-30% are likely dead
- **Saved notes/docs:** Millions of links in Notion, Google Docs, Apple Notes lead to nowhere

**Current solutions:** There are none for consumers. Wayback Machine exists but you have to manually check each link. Enterprise tools (Perma.cc, Internet Archive subscriptions) are for institutions. Nobody monitors YOUR personal link library.

## Target Users

| Segment | Size | Pain |
|---------|------|------|
| Researchers & academics | 5M+ | Cited sources disappearing, broken bibliographies |
| Writers & bloggers | 10M+ | Reference links going dead in published content |
| Developers | 5M+ | Documentation links, Stack Overflow answers disappearing |
| Students | 20M+ | Research sources vanishing before papers are due |
| Professionals | 30M+ | Saved articles, reports, and resources turning to 404s |
| Knowledge workers | 50M+ | Notes, bookmarks, and saved content silently decaying |

**Total addressable market:** 100M+ English-speaking knowledge workers with saved web content.

## Proposed Solution

**LinkLifespan** monitors every link you care about and alerts you when content disappears — before you need it.

### How It Works

1. **Import your links** — Browser extension auto-captures bookmarks. Connect Notion, Google Docs, Apple Notes, Obsidian. Paste URLs. Import from Pocket/Instapaper/Readwise.
2. **Continuous monitoring** — LinkLifespan periodically checks every link (frequency based on importance/tier). Detects 404s, redirects, paywall changes, significant content changes, and domain expirations.
3. **Instant alerts** — Get notified when a link dies. Severity levels: 🟢 Redirect (still works), 🟡 Content changed significantly, 🟠 Paywalled (was free), 🔴 Dead (404/ gone).
4. **Auto-archive** — Before links die, LinkLifespan snapshots them via Wayback Machine. When a link dies, you instantly have the archived version. Never lose content again.
5. **Health dashboard** — See the health of your entire link library. "47 of your 312 bookmarks are dead." Link health score (0-100). Trending decay over time.
6. **Fix suggestions** — For dead links, suggest alternatives: archived version, similar content, updated URL.

### Key Features

- **Browser extension** — Auto-import bookmarks, one-click link checking while browsing
- **Integration connectors** — Notion, Google Docs, Apple Notes, Obsidian, Roam, Pocket, Readwise, Raindrop.io
- **Smart monitoring frequency** — New links checked weekly. Established links monthly. Links from aging domains more frequently
- **Content diff** — Not just "is it alive?" but "did the content change?" for critical references
- **Archive on save** — Automatically snapshot every new link to Wayback Machine when you save it
- **Link health score** — Dashboard showing your entire library's health
- **Dead link report** — Weekly/monthly email digest of what died
- **Batch import** — Upload CSV, paste list, or connect services
- **Collaborative libraries** — Team/shared link libraries for research groups
- **API** — For developers to monitor links in their apps/docs
- **Broken link finder** — Scan your website/blog for dead external links

## Market Research

### Competitors

| Tool | What it does | Gap |
|------|-------------|-----|
| Wayback Machine | Archives web pages | Manual, no monitoring, no alerts |
| Perma.cc | Archive links for courts/academics | Institutional only, $10/mo for 10 links |
| Internet Archive | Archive.org | Search-only, no personal library monitoring |
| Dead Link Checker (online tools) | One-time URL check | No continuous monitoring, no auto-archiving |
| Hexomatic | Dead link checker for websites | B2B SEO tool, not personal library |
| Bookmark managers (Raindrop, Pocket) | Save & organize bookmarks | Don't monitor link health |

**Nobody owns the "monitor your personal link library" position.** This is a completely unserved consumer need.

### Why Now

- **Internet decay accelerating** — More content moves behind paywalls, gets deleted, or sites shut down
- **Link rot recognized as crisis** — Harvard, Cornell studies documenting the problem
- **Knowledge management boom** — Notion, Obsidian, Roam users building personal libraries that depend on external links
- **AI-generated content explosion** — More content created and deleted faster than ever
- **Social media trial ($6M Meta verdict)** — Platforms may delete more content faster

## Business Model

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 100 links, weekly checks, email alerts, manual archive |
| **Monitor** | $3.99/mo | 1,000 links, daily checks, auto-archive, 1 integration |
| **Guardian** | $7.99/mo | 5,000 links, hourly checks, auto-archive, all integrations, content diff, team sharing (3 members) |
| **Archivist** | $14.99/mo | Unlimited links, API access, white-label reports, 10 team members, priority archiving |

**Revenue potential:** At 100K users averaging $5/mo = $6M ARR. Realistic with the knowledge worker market.

## Differentiation

1. **Proactive, not reactive** — Don't wait until you click a dead link. Know before you need it.
2. **Auto-archive** — Wayback Machine integration means content is saved BEFORE it disappears
3. **Content change detection** — Not just alive/dead, but "the article was edited and the key claim was removed"
4. **Integration-first** — Connects to where your links actually live (Notion, Docs, Notes)
5. **Consumer-priced** — Perma.cc charges $10/mo for 10 links. LinkLifespan gives 1,000 for $3.99.

## Technical Feasibility

- **Link checking:** Standard HTTP HEAD/GET requests, trivial to implement
- **Wayback Machine API:** Well-documented, free to use for archiving
- **Content diff:** Hash comparison + AI-powered semantic diff for significant changes
- **Integrations:** OAuth APIs for Notion, Google Docs; file parsing for Obsidian/Apple Notes
- **Browser extension:** Standard Manifest V3 Chrome/Firefox extension
- **Background monitoring:** Cron jobs / queue system for periodic checks
- **Storage:** Minimal — just URLs, metadata, and archive references

## Source

X/Twitter + Web research (Harvard link rot study, Cornell academic link decay, Wayback Machine data, Product Hunt, CNN social media trial coverage) — May 2026

---

*LinkLifespan — Your links have a lifespan. Monitor it.*
