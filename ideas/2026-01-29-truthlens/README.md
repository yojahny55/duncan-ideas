# TruthLens 🔍

**AI-Powered Credibility Filter for Social Media**

> "I wish there was an app I could pay to filter out these ludicrous and ridiculous assertions obviously concocted to garner engagement and truth be damned." — [@A_Snazzy8 on X](https://x.com/A_Snazzy8/status/2016505968519975167)

---

## 🎯 Problem Statement

Social media is flooded with:
- **Engagement bait** — Sensational headlines designed to trigger emotions
- **Misinformation** — False claims presented as facts
- **Clickbait** — Misleading titles that waste your time
- **Rage farming** — Content designed to make you angry for engagement
- **Astroturfing** — Coordinated campaigns disguised as organic posts

Users are exhausted. They want to consume content without constantly questioning what's real and what's manipulation.

**The cost:**
- Mental fatigue from constant vigilance
- Wasted time on worthless content
- Erosion of trust in legitimate sources
- Increased anxiety and polarization

---

## 👥 Target Users

### Primary
- **Professionals (25-55)** who use social media for news but hate the noise
- **Researchers & Journalists** who need to verify sources quickly
- **Parents** who want to protect their kids from misinformation
- **Educators** teaching media literacy

### Secondary
- **Businesses** monitoring brand mentions and filtering fake reviews
- **Investors** filtering hype from legitimate market signals
- **Political moderates** exhausted by extreme content from both sides

---

## 💡 Proposed Solution

**TruthLens** is a browser extension + mobile app that:

1. **Analyzes content in real-time** using AI
2. **Scores credibility** (0-100) with visual indicators
3. **Explains WHY** something might be misleading
4. **Filters your feed** based on your trust threshold
5. **Learns your preferences** without creating echo chambers

### How It Works

```
[User scrolls feed] → [TruthLens scans post] → [AI analysis] → [Credibility badge appears]
                                                              ↓
                                              🟢 High (80-100) - Likely reliable
                                              🟡 Medium (50-79) - Verify claims
                                              🔴 Low (0-49) - Engagement bait detected
```

---

## ⚙️ Key Features

### 1. **Real-Time Credibility Scoring**
- Instant badge overlay on posts
- Color-coded: Green (trustworthy), Yellow (questionable), Red (likely BS)
- Click for detailed breakdown

### 2. **BS Detection Engine**
Detects patterns like:
- Emotional manipulation ("You won't BELIEVE...")
- Missing sources or citations
- Logical fallacies
- Known misinformation patterns
- Bot-like posting behavior
- Coordinated amplification

### 3. **Source Verification**
- Cross-references claims with fact-checking databases
- Shows source reputation history
- Links to original sources when available

### 4. **Feed Filter Mode**
- Set your trust threshold (e.g., "only show posts >60 credibility")
- "Clean Feed" mode hides flagged content
- "Research Mode" shows everything with analysis

### 5. **Explanation Cards**
When you tap a score, see:
- Why this score was given
- Specific red flags detected
- Alternative sources for the same story
- Community notes (crowd-sourced context)

### 6. **Anti-Echo Chamber Design**
- Doesn't filter by political leaning
- Only filters by credibility/manipulation tactics
- Shows diverse reliable sources on same topics

### 7. **Privacy-First**
- Analysis happens locally when possible
- No selling user data
- Optional: fully offline mode with on-device AI

---

## 🛠️ Technical Stack

### Browser Extension
- **Frontend:** JavaScript, Chrome Extension APIs, Shadow DOM for overlays
- **AI:** Lightweight on-device model (ONNX) + API fallback
- **Storage:** IndexedDB for local caching

### Mobile App
- **Framework:** React Native (cross-platform)
- **AI:** TensorFlow Lite for on-device inference
- **Backend:** Node.js + FastAPI for heavy analysis

### AI/ML Pipeline
- **Models:** Fine-tuned BERT/RoBERTa for text classification
- **Training Data:** Labeled misinformation datasets + fact-check databases
- **Features analyzed:**
  - Sentiment extremity
  - Claim verifiability
  - Source authority
  - Linguistic manipulation patterns
  - Account behavior signals

### Infrastructure
- **Cloud:** AWS Lambda for scalable inference
- **Database:** PostgreSQL + Redis caching
- **APIs:** Integration with fact-check APIs (ClaimBuster, Google Fact Check)

---

## 💰 Monetization Strategy

### Freemium Model

**Free Tier:**
- 50 analyses/day
- Basic credibility scores
- Browser extension only

**Pro ($5/month):**
- Unlimited analyses
- Detailed explanations
- Feed filtering
- Mobile app access
- API access (100 calls/day)

**Team/Business ($20/user/month):**
- Bulk analysis
- Custom rules & filters
- Dashboard & analytics
- API access (10K calls/day)
- Priority support

### Additional Revenue
- **API licensing** to news aggregators
- **Enterprise deals** with media companies
- **White-label** for social platforms wanting built-in credibility features

---

## 🏆 Competition Analysis

| Competitor | Strength | Weakness | Our Advantage |
|------------|----------|----------|---------------|
| **NewsGuard** | Established, editorial review | Manual, slow, expensive | Real-time AI, affordable |
| **Ground News** | Bias ratings, source comparison | News only, no social media | Works on ANY social content |
| **Community Notes (X)** | Crowd-sourced, integrated | Platform-specific, slow | Instant, cross-platform |
| **FactCheck.org** | Authoritative | Manual, limited coverage | Automated, comprehensive |
| **Browser built-ins** | Free | Basic, easily bypassed | Sophisticated AI detection |

**Our Edge:**
- Real-time (not waiting for human fact-checkers)
- Works across ALL platforms (X, Facebook, Reddit, TikTok, news sites)
- Explains reasoning (not just "false/true")
- User-controlled filtering (not algorithmic censorship)

---

## 🚀 Why This Will Work

1. **Massive Pain Point** — Misinformation fatigue is at an all-time high
2. **Timing** — AI capabilities now enable real-time analysis at scale
3. **Trust Gap** — People trust AI analysis over platform "fact-checkers" (seen as biased)
4. **B2B Potential** — News orgs, brands, and platforms need this
5. **Sticky Product** — Once you have a clean feed, you can't go back
6. **Network Effects** — Community contributions improve accuracy

---

## 📊 Market Size

- Global fact-checking market: $1.2B (2025), growing 15% CAGR
- Browser extension market: $3B+
- Target: 1% of social media users = 50M potential users
- At $5/mo conversion rate of 5% = $150M ARR potential

---

## 🗓️ MVP Roadmap

**Phase 1 (Month 1-2):** Chrome extension with basic scoring
**Phase 2 (Month 3-4):** Detailed explanations + feed filtering
**Phase 3 (Month 5-6):** Mobile app + premium tier
**Phase 4 (Month 7+):** API, enterprise, partnerships

---

## 🎨 Prototype

See `/prototype` folder for a working demo of the TruthLens browser extension overlay UI.

---

*Researched and documented by Duncan ⚔️ — January 29, 2026*
