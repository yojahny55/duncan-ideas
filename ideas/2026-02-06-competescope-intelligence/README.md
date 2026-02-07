# CompeteScope - AI Competitive Intelligence Dashboard

> *Monitor competitors. Synthesize insights. Stay ahead.*

## 📅 Created
February 6, 2026

## 🔗 Source
- [YC Spring 2026 RFS - Cursor for Product Management](https://superframeworks.com/articles/yc-rfs-startup-ideas-indie-hackers-2026)
- Indie Hackers / Web Research

---

## 🎯 Problem Statement

Product teams, founders, and marketers spend **5-10 hours per week** manually tracking competitors:
- Visiting competitor websites and changelogs
- Monitoring social media for mentions and sentiment
- Reading reviews on G2, Capterra, and app stores
- Checking job postings to infer strategy and expansion
- Compiling findings into reports for stakeholders

This is tedious, error-prone, and often deprioritized—leading to **strategic blind spots** when competitors ship major features or pivot.

**The gap:** There's no simple, affordable tool that automatically monitors multiple competitors across all channels and synthesizes actionable intelligence.

---

## 👥 Target Users

### Primary
- **Product Managers** at startups and mid-size companies
- **Founders/CEOs** who need to stay informed on market dynamics
- **Marketing Teams** tracking competitor positioning and messaging

### Secondary
- **Sales Teams** needing battle cards and competitive positioning
- **Investors** monitoring portfolio company competitors
- **Analysts** researching market landscapes

### User Characteristics
- Time-constrained, need automated monitoring
- Willing to pay $49-199/mo for time savings
- Already using tools like Notion, Slack, Linear
- Value actionable insights over raw data

---

## 💡 Proposed Solution

**CompeteScope** is an AI-powered competitive intelligence dashboard that:

1. **Monitors automatically** - Tracks competitor websites, changelogs, social media, reviews, job postings
2. **Synthesizes with AI** - Uses LLMs to extract key insights, not just raw mentions
3. **Delivers actionable briefs** - Weekly digests with prioritized insights and strategic implications
4. **Integrates seamlessly** - Slack alerts, email digests, export to Notion

### Core Value Proposition
*"Your AI research analyst that never sleeps, tracking competitors 24/7 and delivering actionable intelligence weekly."*

---

## ✨ Key Features

### MVP (v1.0)
1. **Competitor Setup Wizard** - Add competitors by name/URL, AI auto-discovers channels
2. **Changelog Monitoring** - Track product updates via changelog pages, release notes
3. **Social Listening** - Monitor Twitter/X mentions, Reddit threads, Hacker News
4. **Review Aggregation** - Pull reviews from G2, Capterra, App Store, Play Store
5. **Weekly AI Digest** - Synthesized brief with key updates, sentiment shifts, strategic insights
6. **Slack Integration** - Real-time alerts for major competitor announcements
7. **Dashboard Overview** - Visual summary of all tracked competitors

### v1.5
8. **Job Posting Analysis** - Track hiring trends to infer expansion/focus areas
9. **Pricing Page Monitoring** - Detect pricing changes instantly
10. **Battle Card Generator** - AI-generated competitive positioning docs

### v2.0
11. **Custom Alert Rules** - "Alert me when X mentions feature Y"
12. **Trend Analysis** - Historical patterns and trajectory predictions
13. **Team Collaboration** - Share insights, comment, assign follow-ups

---

## 🛠 Technical Stack

### Frontend
- **React 18** + TypeScript
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **Lucide Icons** for clean iconography

### Backend
- **Node.js** + Express
- **PostgreSQL** for structured data
- **Redis** for caching and job queues
- **BullMQ** for background jobs

### AI/ML
- **OpenAI GPT-4o** for summarization and insight extraction
- **Anthropic Claude** for nuanced analysis
- **Brave Search API** for web monitoring

### Infrastructure
- **Vercel** for frontend hosting
- **Railway** for backend and DB
- **Cloudflare** for CDN and DDoS protection

### Integrations
- Slack (webhooks)
- Email (Resend/SendGrid)
- Notion API (export)

---

## 💰 Monetization Strategy

### Pricing Tiers

| Plan | Price | Competitors | Features |
|------|-------|-------------|----------|
| **Starter** | $49/mo | 3 | Weekly digests, basic monitoring, email |
| **Pro** | $99/mo | 10 | Daily updates, Slack, all sources, battle cards |
| **Team** | $199/mo | 25 | Unlimited users, custom alerts, API access |
| **Enterprise** | Custom | Unlimited | SSO, dedicated support, custom integrations |

### Revenue Projections
- 100 Starter users = $4,900/mo
- 50 Pro users = $4,950/mo
- 20 Team users = $3,980/mo
- **Target MRR at month 12:** $15,000+

### Acquisition Channels
1. Content marketing (SEO articles on competitive analysis)
2. Product Hunt launch
3. Indie Hackers community
4. LinkedIn thought leadership
5. Partnerships with product management communities

---

## 🏆 Competition Analysis

### Direct Competitors

| Tool | Pricing | Strengths | Weaknesses |
|------|---------|-----------|------------|
| **Crayon** | $$$$ (Enterprise) | Comprehensive, established | Expensive, complex, not indie-friendly |
| **Klue** | $$$$ (Enterprise) | Battle cards, sales focus | Overkill for startups, high cost |
| **Kompyte** | $$$ | Real-time alerts | Dated UI, limited AI |
| **Owletter** | $$ | Email monitoring | Narrow focus, no AI synthesis |

### Indirect Competitors
- Google Alerts (free, but noisy and no synthesis)
- Mention.com (social monitoring, but no competitive focus)
- Manual spreadsheets + Notion (common but time-consuming)

### Our Differentiation
1. **AI-first synthesis** - Not just data, but actionable insights
2. **Indie-friendly pricing** - Starts at $49/mo vs. $10K+/year
3. **Modern UX** - Clean, fast, delightful to use
4. **Focus on small teams** - Built for startups, not enterprises

---

## 🚀 Why This Will Work

### Market Timing
- YC's Spring 2026 RFS explicitly calls for "Cursor for Product Management"
- AI tools for PM are nascent—competitive intelligence is underserved
- Small teams need enterprise-grade intelligence at indie prices

### Defensibility
- Network effects from shared competitive data
- AI models fine-tuned on competitive analysis
- Integration depth (Slack, Notion, CRM)

### Founder-Market Fit
- Every product team needs competitive intelligence
- The problem is universal and well-understood
- Willingness to pay is proven at enterprise level

### Execution Advantage
- Can ship MVP in 4-6 weeks with AI coding tools
- Low infrastructure costs with serverless architecture
- SEO + content marketing has compounding returns

---

## 📊 Success Metrics

### Phase 1 (0-3 months)
- Ship MVP with core monitoring features
- 100 beta signups
- 20 paying customers
- $1,000 MRR

### Phase 2 (3-6 months)
- Full feature set (Slack, battle cards)
- Product Hunt launch
- 200 paying customers
- $10,000 MRR

### Phase 3 (6-12 months)
- Team plan adoption
- API and integrations
- 500 paying customers
- $25,000 MRR

---

## 🎨 Prototype
See `prototype/` folder for the interactive demo.
