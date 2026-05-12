# MedEffect — Medication Side Effect Journal with Community Insights

**Date:** 2026-05-11
**Source:** Web (Penn/Nature study on GLP-1 Reddit analysis, May 2026)
**Status:** ✅ Prototype Ready

---

## Problem

When you start a new medication, you're flying blind on side effects. Your doctor says "you might feel tired" — but which symptoms are normal? When do they stop? Is what you're feeling a side effect or something else entirely?

- **4.4 billion** prescriptions filled annually in the US
- **66% of Americans** take at least one prescription drug
- GLP-1 drugs alone (Ozempic, Wegovy, Mounjaro) have 15M+ users, many experiencing confusing side effects
- Clinical trials capture ~1% of real-world side effect experiences
- Penn researchers just published in *Nature Health* (April 2026) showing Reddit posts reveal side effects clinical trials miss entirely
- People turn to Reddit, WebMD, and TikTok for "is this normal?" — fragmented, unreliable, anxiety-inducing

**Nobody owns the personal side effect experience.** Pill trackers remind you to take meds. Drug interaction checkers warn about combos. But nothing helps you answer: *"Is what I'm feeling normal for this medication, and when will it stop?"*

## Target Users

- **New medication starters** (~50M Americans/year starting new prescriptions)
- **GLP-1 / weight loss drug users** (15M+, fastest-growing medication class)
- **Chronic illness patients** adjusting dosages or switching meds
- **Mental health patients** starting SSRIs, SNRIs, stimulants (anxiety about side effects is a top barrier to adherence)
- **Caregivers** tracking side effects for children or elderly parents

## Proposed Solution

**MedEffect** is a personal medication side effect journal with community-powered insights.

### Core Loop
1. **Add your medication** → Select from drug database (or scan pill)
2. **Daily check-in** → 30-second log: how do you feel? Tap body parts, select symptoms, rate severity, note time
3. **See your timeline** → Visual symptom tracker over days/weeks, correlated with medication start/dose changes
4. **Community insights** → "34% of MedEffect users on Lexapro reported insomnia in week 2. For 78% of them, it resolved by week 6." Anonymized, aggregated, real
5. **Doctor report** → One-tap PDF for your next appointment: symptom timeline, severity trends, your notes

### What Makes It Different
- **Not a pill reminder** (there are 100 of those)
- **Not a drug interaction checker** (Pillcheck, Epocrates, Drugs.com)
- **Not WebMD symptom search** (that gives you cancer)
- **This is personal experience tracking + community wisdom** — "people like you on this med reported X"

## Key Features

### 📝 Daily Symptom Logger
- 30-second check-in: mood, energy, physical symptoms, sleep quality
- Body map: tap where it hurts/feels off
- Severity scale (1-5) with emoji face scale
- Free-text notes (AI extracts structured data)
- "Skip" option for good days (tracked as "no symptoms")

### 📊 Personal Timeline
- Symptom timeline correlated with medication start/dose changes
- Trend lines: severity over time by symptom
- Milestones: "Week 2 complete!", "Your insomnia improved 40% this week"
- Compare periods (before med vs after, dose 10mg vs 20mg)

### 🧬 Community Insights
- Anonymized aggregate data from all users on the same medication
- "People on this medication commonly report:" → ranked symptom list with % reporting
- Week-by-week breakdown: "Week 1: nausea (42%), Week 4: nausea (11%)"
- Filter by age, gender, dosage, duration
- Confidence badges: "Based on 2,400 users" vs "Based on 12 users (low confidence)"

### 🏥 Doctor Report Generator
- One-tap PDF export for appointments
- Symptom timeline with severity graph
- Key stats: most frequent symptoms, worst days, improvement trajectory
- Your notes (cleaned up, organized)
- "Questions I want to ask" section (you can type these anytime)

### 🔔 Smart Nudges
- "You've been logging headaches for 5 days. Worth mentioning to your doctor."
- "Your insomnia improved this week — hang in there!"
- "Community data shows most people on this med feel better by week 6. You're on week 3."
- Never medical advice — always "consider discussing with your provider"

### 💊 Medication Switch Tracker
- Log medication changes (started, stopped, dose change)
- Compare before vs after each change
- "Since switching from Lexapro to Zoloft: energy up 30%, headaches down 60%"

## Market Research

### Competitors
| App | What It Does | Gap |
|-----|-------------|-----|
| Drugs.com | Drug info, interaction checker | No personal tracking |
| Pill Reminder apps (100+) | Remind you to take meds | No side effect tracking |
| WebMD Symptom Checker | Diagnose symptoms | Anxiety-inducing, not medication-specific |
| PatientsLikeMe | Community for chronic conditions | Healthcare-focused, complex, not for everyday "is this normal?" |
| Fig (FKA Mymee) | Symptom tracking for autoimmune | Niche condition, not medication-specific |
| Reddit r/medication | Crowdsourced anecdotes | Unstructured, no timeline, no data |

### Differentiation
MedEffect sits in a unique position: **personal journal + community data + doctor communication tool**. It's not trying to diagnose or replace your doctor. It's helping you understand your own experience and communicate it better.

### Market Size
- 66% of US adults take prescription drugs = **175M+ potential users**
- 50M start new prescriptions annually
- GLP-1 market alone: 15M users and growing 40%/yr
- Side effect non-adherence costs pharma $300B+/yr
- Digital health market: $330B by 2028

## Revenue Model

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 1 medication, basic timeline, community insights |
| **Plus** | $4.99/mo | Unlimited medications, doctor reports, trend analysis, switch tracker |
| **Family** | $9.99/mo | Up to 5 profiles, caregiver mode, shared dashboard |

**Annual discounts:** Plus $39.99/yr (33% off), Family $79.99/yr (33% off)

## Technical Feasibility

- **Drug database:** NIH RxNorm API (free, comprehensive)
- **Symptom ontology:** SNOMED CT / MeSH (standardized medical terms)
- **AI features:** LLM for note extraction, symptom matching, report generation
- **Community insights:** Aggregation pipeline with anonymization (no raw data, only statistics)
- **Privacy:** HIPAA-aware design, end-to-end encryption for personal data, anonymized community contributions

## Why This, Why Now

1. **GLP-1 explosion** — 15M+ people starting new medications, desperate for "is this normal?"
2. **Penn/Nature validation** — April 2026 study proved Reddit side effect data is more comprehensive than clinical trials
3. **No dominant player** — the "personal medication experience" space is completely empty
4. **Timing** — post-COVID health consciousness + AI maturity makes this buildable now
5. **Real impact** — better adherence (people quit meds when they can't distinguish side effects from normal), better doctor visits, better outcomes

## Naming

- **MedEffect** — clear, descriptive, professional
- Alternatives considered: SideNote, MedJournal, RxTrack, FeelLog
- Domain: medffect.app or medeffect.io

---

*"The most important question about your medication isn't 'what are the side effects?' — it's 'is what I'm feeling normal, and when will it stop?'"*
