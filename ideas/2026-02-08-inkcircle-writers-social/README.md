# InkCircle — Social Network for Creative Writers

> "I don't think AO3 should change itself to become more like social media but I do wish that there was an app primarily for writers that allowed for more social interaction."
> — [@Marrissacookie](https://x.com/Marrissacookie/status/2020191716096221419)

## 🎯 Problem Statement

Creative and fanfiction writers are stuck between two extremes:

1. **Archives like AO3** — Great for hosting work, zero social features. Writers post into the void and hope for comments.
2. **Social media like Twitter/Tumblr** — Great for interaction, terrible for organizing/showcasing writing work.
3. **Wattpad** — Reader-focused, algorithm-driven, not writer-community focused.

**The gap**: Writers want to connect with other writers, share progress, get beta readers, discuss craft, and build community — without their work getting buried in a social media feed or having to manage multiple platforms.

### Source Tweets

- [@Marrissacookie](https://x.com/Marrissacookie/status/2020191716096221419): "I wish there was an app primarily for writers that allowed for more social interaction"
- [@stellanurheart](https://x.com/stellanurheart/status/2019956787122946371): Discusses why AO3 can't become social and Wattpad's issues
- [@alienated_cola](https://x.com/alienated_cola/status/2019337159589732576): "I wish there was an app to discuss this"

## 👥 Target Users

### Primary
- **Fanfiction writers** (AO3, FFN, Wattpad users) — 10M+ globally
- **Original fiction writers** — Indie authors, hobbyists
- **Writing hobbyists** — NaNoWriMo participants, writing challenge enthusiasts

### Secondary
- **Beta readers** — Want to help writers improve
- **Writing groups** — Critique circles, genre communities
- **Aspiring authors** — Looking for craft advice and community

## 💡 Proposed Solution

**InkCircle** — A social network built specifically for writers, not readers. Focus on:
- **Writer-to-writer connection** (not reader consumption)
- **Progress sharing** (word counts, milestones, not full chapters)
- **Craft discussion** (techniques, struggles, wins)
- **Beta reader matching** (find people in your genre/style)
- **Writing sprints & accountability** (real-time co-writing sessions)

### Core Philosophy
- You DON'T host your full stories here (link to AO3/FFN/etc)
- You DO share your writing journey, find community, get feedback
- Think "LinkedIn for writers" meets "Discord for writing communities"

## ✨ Key Features

### 1. **Writer Profiles**
- Writing stats (total words, genres, current WIPs)
- Links to external platforms (AO3, Wattpad, personal site)
- "Currently writing" status with progress bars
- Badges: NaNoWriMo winner, fandom achievements, streak counts

### 2. **Circles (Communities)**
- Genre-based circles (Fantasy, Romance, Sci-Fi, Fanfic by fandom)
- Skill-based circles (Plotting, Dialogue, Worldbuilding)
- Challenge circles (NaNoWriMo, weekly prompts)
- Private circles for writing groups/critique partners

### 3. **Progress Posts**
- Share word count milestones with context
- "First draft done!" celebrations
- Snippet sharing (short excerpts for feedback)
- Struggle posts (writer's block, plot holes — get community support)

### 4. **Beta Reader Matching**
- "Looking for beta" posts with genre/length/timeline
- "Available to beta" profiles with preferences
- Built-in beta request system with structure
- Private messaging for ongoing beta relationships

### 5. **Writing Sprints**
- Real-time sprint rooms (15/30/60 minute sessions)
- Join public sprints or create private ones
- Word count tracking during sprint
- Leaderboards (friendly competition)

### 6. **Craft Corner**
- Long-form posts about writing techniques
- Q&A threads ("How do you handle...")
- Resource sharing (tools, references)
- Mentor matching (experienced writers helping newbies)

### 7. **Accountability Buddies**
- Match with writers with similar goals
- Weekly check-ins
- Streak tracking together
- Gentle nudges when someone goes quiet

### 8. **Events & Challenges**
- Monthly writing prompts
- Community events (genre months, themed challenges)
- NaNoWriMo integration
- Personal goal setting with community visibility

## 🛠 Technical Stack

### Frontend
- **Next.js 14** — React with SSR for SEO and performance
- **Tailwind CSS** — Rapid UI development
- **Framer Motion** — Smooth animations
- **TipTap** — Rich text editor for posts

### Backend
- **Node.js + Express** or **Next.js API Routes**
- **PostgreSQL** — Relational data (users, posts, circles)
- **Redis** — Real-time features (sprints, presence)
- **Socket.io** — Live sprint rooms, notifications

### Infrastructure
- **Vercel** — Hosting and edge functions
- **Supabase** — Auth, database, real-time subscriptions
- **Cloudflare R2** — Media storage (profile pics, snippet images)
- **Upstash** — Serverless Redis for sprints

### Integrations
- **OAuth** — Google, Discord, Twitter login
- **AO3 API** (unofficial) — Import work stats
- **Goodreads API** — For original fiction authors
- **Discord webhooks** — Community notifications

## 💰 Monetization Strategy

### Freemium Model

**Free Tier:**
- Full profile and basic features
- Join up to 5 circles
- 3 writing sprints per day
- Basic beta matching

**Pro ($5/month):**
- Unlimited circles
- Unlimited sprints
- Advanced analytics (writing patterns, productivity)
- Priority beta matching
- Custom profile themes
- Private circles (create your own)

**Teams ($15/month):**
- For writing groups and critique circles
- Shared workspace
- Group analytics
- Admin tools
- Custom branding

### Additional Revenue
- **Sponsored writing challenges** (publishers, writing tools)
- **Affiliate partnerships** (Scrivener, ProWritingAid, writing courses)
- **Virtual events** (paid workshops, author Q&As)

## 🏆 Competition Analysis

| Platform | Focus | Weakness |
|----------|-------|----------|
| **AO3** | Archive, reading | Zero social features, intentionally so |
| **Wattpad** | Reader consumption | Algorithm-driven, writer community secondary |
| **Tumblr** | General social | Writing gets lost, no organization |
| **Discord** | Chat communities | Ephemeral, hard to build profile/presence |
| **NaNoWriMo** | Annual event | Only active 1-2 months/year |
| **Scribophile** | Critique exchange | Transactional, not social |

### InkCircle's Edge
- **Writer-first** (not reader consumption)
- **Profile + community hybrid** (not just chat or just archive)
- **Progress-focused** (celebrate the journey, not just finished work)
- **Beta matching at core** (built-in, not an afterthought)

## 🚀 Why This Will Work

### 1. **Validated Pain Point**
The tweet that inspired this got significant engagement. Writers consistently complain about platform fragmentation.

### 2. **No True Competitor**
Nothing combines social networking + writing progress + beta matching + real-time sprints in one cohesive platform.

### 3. **Built-in Virality**
- Sprint results shared to Twitter/Tumblr
- "Join my circle" invites
- Challenge participation badges
- Writing streak flexes

### 4. **Strong Retention Mechanics**
- Daily streaks
- Accountability buddies
- Ongoing WIP progress tracking
- Community belonging

### 5. **Clear Monetization Path**
Writers already pay for tools (Scrivener, ProWritingAid). $5/month for community + productivity is reasonable.

### 6. **Extensible Platform**
Start with creative writing, expand to:
- Technical writers
- Journalists
- Content creators
- Bloggers

## 📁 Prototype

See the `/prototype` folder for a functional HTML/CSS/JS demo of the core experience.

---

*Idea discovered: February 8, 2026*
*Source: Twitter/X*
