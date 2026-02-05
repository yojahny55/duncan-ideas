# FixIt Lens 🔧🔍

> AI-powered appliance troubleshooter that diagnoses issues from photos and symptoms

## Problem Statement

When household appliances break, people face a frustrating experience:

1. **Information Overload**: Googling symptoms returns thousands of irrelevant results
2. **Video Fatigue**: 20-minute YouTube tutorials for 2-minute fixes
3. **Uncertainty**: Not knowing if it's a DIY fix or needs a professional
4. **Premature Replacement**: Many people replace appliances that could be easily repaired
5. **Cost Anxiety**: Fear of expensive repairs leads to either overpaying or ignoring issues

**Sources:**
- [DEV.to: Future-Proofing Your First App](https://dev.to/devin-rosario/future-proofing-your-first-app-15-ideas-2026-tools-26mc) - "DIY Troubleshooting Guide (AR Overlay)" concept
- [Indie Hackers: MicroSaaS Ideas 2025](https://www.indiehackers.com/post/my-top-40-microsaas-ideas-for-2025-c779bf60ae) - Home Services niche opportunities

## Target Users

### Primary
- **Homeowners (25-55)**: Own appliances, want to save money on repairs
- **Renters**: Need quick fixes before calling landlord
- **DIY Enthusiasts**: Want to learn and fix things themselves

### Secondary
- **Property Managers**: Managing multiple units with various appliances
- **Small Landlords**: Cost-conscious repair decisions
- **Appliance Technicians**: Quick reference for unfamiliar models

## Proposed Solution

**FixIt Lens** is a web/mobile app that:
1. **Identifies** appliances from photos (brand, model, type)
2. **Diagnoses** issues based on symptoms (AI-powered)
3. **Guides** users through repairs with step-by-step instructions
4. **Recommends** when to call a professional
5. **Sources** parts with direct purchase links

## Key Features

### Core Features
1. **📸 Smart Photo Recognition**
   - Upload photo of appliance
   - AI identifies brand, model, and type
   - Recognizes visible damage/issues

2. **🩺 Symptom Checker**
   - Interactive symptom selection
   - "Won't start", "Making noise", "Leaking", etc.
   - Follows decision-tree diagnosis

3. **📋 Step-by-Step Repair Guides**
   - Difficulty rating (Easy/Medium/Hard)
   - Estimated time and tools needed
   - Safety warnings prominently displayed
   - Progress tracking

4. **⚠️ Pro Threshold Indicator**
   - Clear "DIY vs Call a Pro" recommendation
   - Safety-first approach
   - Local technician referral

5. **🛒 Parts Finder**
   - Identifies replacement parts needed
   - Links to purchase (Amazon, manufacturer, etc.)
   - Price comparison

### Advanced Features
6. **📱 Appliance Inventory**
   - Save your home's appliances
   - Warranty tracking
   - Maintenance reminders

7. **📊 Repair History**
   - Track what you've fixed
   - Reference past repairs
   - Share with technicians

8. **🎥 Video Snippets**
   - Short, focused repair clips
   - Jump to exact step needed
   - Community-contributed

9. **💬 AI Chat Assistant**
   - Ask follow-up questions
   - Clarify instructions
   - Get alternative solutions

10. **🔔 Maintenance Alerts**
    - Proactive maintenance tips
    - "Clean your dryer vent" reminders
    - Seasonal maintenance schedules

## Technical Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **State**: Zustand
- **Forms**: React Hook Form + Zod

### Backend
- **Runtime**: Node.js / Bun
- **API**: tRPC or REST
- **Database**: PostgreSQL (Supabase)
- **Auth**: Clerk or Supabase Auth

### AI/ML
- **Image Recognition**: OpenAI Vision API / Google Cloud Vision
- **Diagnosis Engine**: GPT-4 with fine-tuned prompts
- **Embeddings**: For symptom matching (pgvector)

### Infrastructure
- **Hosting**: Vercel (frontend) + Railway (backend)
- **Storage**: Cloudflare R2 (images)
- **Analytics**: PostHog

## Monetization Strategy

### Freemium Model
| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 3 diagnoses/month, basic guides |
| **Pro** | $4.99/mo | Unlimited diagnoses, parts finder, inventory |
| **Family** | $9.99/mo | Pro + 5 family members, shared inventory |

### Additional Revenue
- **Affiliate**: Parts purchase commissions (5-10%)
- **Pro Referrals**: Technician directory (lead fees)
- **B2B**: Property management integrations
- **White Label**: For appliance manufacturers

## Competition Analysis

| Competitor | Strengths | Weaknesses |
|------------|-----------|------------|
| **YouTube** | Free, visual | Long videos, hard to find exact issue |
| **iFixit** | Great guides | Limited to electronics, not appliances |
| **Repair Clinic** | Parts database | Generic, not AI-powered |
| **Home Depot App** | Parts + local help | Not diagnostic focused |
| **Google Search** | Universal | Information overload, no personalization |

### Our Differentiation
- **AI-first**: Photo recognition + smart diagnosis
- **Appliance-specific**: Not just electronics
- **Safety-focused**: Clear pro thresholds
- **Speed**: Get answers in seconds, not hours
- **Personalized**: Learns your home's appliances

## Why This Will Work

### Market Opportunity
- **$5.3B** home appliance repair market (US, 2024)
- **72%** of homeowners attempt DIY repairs first
- **Rising repair costs** driving DIY interest
- **Sustainability trend**: Repair over replace

### Timing
- AI vision APIs now affordable and accurate
- Post-pandemic DIY skills retained
- Economic uncertainty → cost-conscious consumers
- "Right to Repair" movement gaining momentum

### Moat
- **Data flywheel**: More diagnoses → better AI
- **Appliance database**: Hard to replicate
- **Community guides**: User-contributed content
- **Trust**: Safety-first brand reputation

## MVP Scope (4-6 weeks)

### Week 1-2: Core Flow
- [ ] Landing page with value prop
- [ ] Photo upload + AI identification
- [ ] Basic symptom checker (top 5 appliances)

### Week 3-4: Guides
- [ ] 20 repair guides (common issues)
- [ ] Difficulty ratings
- [ ] Parts links

### Week 5-6: Polish
- [ ] User accounts
- [ ] Appliance saving
- [ ] Mobile optimization

## Success Metrics

| Metric | Target (Month 1) | Target (Month 6) |
|--------|-----------------|------------------|
| MAU | 1,000 | 25,000 |
| Diagnoses/day | 50 | 500 |
| Guide completion | 40% | 60% |
| Pro conversion | 5% | 10% |
| NPS | 40+ | 50+ |

---

**Created**: February 4, 2026
**Source**: Web Research (DEV.to, Indie Hackers)
**Status**: 💡 Idea Stage
