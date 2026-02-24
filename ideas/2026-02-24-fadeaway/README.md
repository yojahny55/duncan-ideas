# FadeAway

**Tagline:** Archive the past. Protect the memories. Heal at your pace.

**Category:** Photo Management / Mental Health / Lifestyle

**Source:** Twitter/X research (February 24, 2026)

---

## Problem Statement

When relationships end—romantic partners, friendships, family estrangements—people face an agonizing dilemma with their photos:

1. **Deletion feels wrong** - Those memories have value, and permanent deletion feels too final
2. **Keeping them visible hurts** - Scrolling through your camera roll and unexpectedly seeing an ex causes pain
3. **Photo apps make it worse** - Apple/Google "Memories" features surface old photos at the worst times
4. **Cloud sync is relentless** - "I deleted them several times, but each time I get a new phone... it pops up again"
5. **No middle ground exists** - Current options are "visible everywhere" or "deleted forever"

### Evidence from Twitter

> "I hate scrolling through my phone.. I have so many memories of people that's no longer in my life.. I stop going through my phone cause of it"

> "picture of me and my ex recommended to me by apple photos and i stared at it for 5 minutes, zooming in on it... i can't bare to delete it"

> "genuinely how do i get icloud to delete the photos... i've deleted all of them several times, but each time i get a new phone or this past xmas i got an ipad and after it synced i found some videos of my ex again"

> "i like the memories... my ex is my best friend... so no, it's not weird to not delete ALL photos"

---

## Solution

**FadeAway** is an app that helps you create emotional distance from photos without destroying memories.

### Core Features

1. **Face-Based Archive**
   - Use facial recognition to identify photos containing specific people
   - One-tap archive all photos of a person to a secure vault
   - Photos are hidden from main library and all "memories" features

2. **The Vault**
   - Encrypted, password-protected storage
   - Photos are preserved but invisible in daily use
   - Optional "time lock" - set photos to re-emerge after X months/years
   - Export anytime if you want them back

3. **Smart Sync Blocking**
   - Prevent archived photos from syncing to new devices
   - Block them from appearing in iCloud/Google Photos memories
   - Integration with native photo libraries

4. **Healing Timeline**
   - Optional: Set a "ready to revisit" date
   - App gently checks in: "It's been 6 months. Would you like to review your archived photos?"
   - No pressure, just an option

5. **Gradual Fade Option**
   - Instead of sudden archive, photos gradually appear less frequently
   - Like naturally forgetting, but controlled
   - Reduces the shock of sudden absence

### Privacy First

- All processing happens on-device
- No photos uploaded to any server
- Face recognition models run locally
- Zero data collection

---

## Target Audience

1. **Primary:** Recently broken up individuals (18-45)
2. **Secondary:** Anyone processing difficult relationships (estranged family, ended friendships)
3. **Tertiary:** People who want to organize their photo library by relationship status

### Market Size

- ~50 million breakups happen annually in the US alone
- 73% of adults have smartphones with 1000+ photos
- Growing awareness of "digital detox" and emotional tech boundaries
- No dominant player in this specific niche

---

## Competitive Landscape

| Competitor | Weakness |
|------------|----------|
| Apple Photos "Hide" | Doesn't hide from Memories, no face-based selection |
| Google Photos Archive | Still searchable, appears in memories |
| Gemini Photos (cleaner) | Focuses on duplicates, not emotional management |
| Generic vault apps | Manual selection only, no AI assistance |

**FadeAway's Edge:** First app specifically designed for the emotional aspect of photo management with AI-assisted face recognition.

---

## Business Model

### Freemium

**Free Tier:**
- Archive up to 3 people
- Basic vault features
- 1GB storage

**Premium ($4.99/month or $39.99/year):**
- Unlimited people
- Advanced healing timeline features
- Time-locked vaults
- Gradual fade options
- Priority support
- Unlimited storage

### Potential Revenue Streams

1. Subscriptions (primary)
2. One-time "lifetime" purchase option
3. Optional therapist/counselor directory partnership
4. Anonymized aggregate insights for relationship research (opt-in only)

---

## Technical Architecture

### Stack

- **Frontend:** React Native (iOS/Android)
- **Face Recognition:** On-device ML (Apple Vision/ML Kit)
- **Storage:** Local encrypted SQLite + local file vault
- **Sync Blocking:** Native photo library integration (PhotoKit/MediaStore)

### Key Technical Challenges

1. **Photo Library Integration** - Deep integration with iOS/Android photo systems
2. **Memory Feature Blocking** - May require workarounds or alternative approaches
3. **Face Recognition Accuracy** - Handling edge cases (group photos, partial faces)
4. **Storage Management** - Efficient handling of potentially thousands of photos

---

## MVP Scope (Version 1.0)

1. ✅ Face detection and grouping
2. ✅ One-tap archive by person
3. ✅ Encrypted vault with PIN/biometric access
4. ✅ Basic restore functionality
5. ❌ Healing timeline (v2)
6. ❌ Gradual fade (v2)
7. ❌ Sync blocking (v2 - may require platform cooperation)

---

## Marketing Angles

### Emotional Hooks

- "Your photos deserve to heal with you"
- "Not ready to delete. Not ready to see. FadeAway."
- "Archive the past, protect the memories"
- "Breakups are hard enough. Your phone shouldn't make it worse."

### Distribution Channels

1. TikTok/Instagram (breakup content, emotional healing niche)
2. Reddit (r/breakups, r/relationship_advice, r/ExNoContact)
3. Therapist and counselor referrals
4. App Store search optimization ("hide ex photos", "archive memories")
5. Influencer partnerships (relationship coaches, therapists on social media)

---

## Success Metrics

- **Acquisition:** App downloads, conversion from free to premium
- **Engagement:** Photos archived, vault access frequency
- **Retention:** 30/60/90 day retention rates
- **Sentiment:** App store reviews, support ticket sentiment
- **Healing indicator:** Percentage of users who choose to restore photos (positive outcome)

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Platform restrictions on photo library access | Design graceful degradation, manual selection fallback |
| Users feeling surveilled by face recognition | Transparent on-device only processing, clear privacy messaging |
| Emotional sensitivity of the space | Partner with mental health professionals for messaging review |
| Competition from Apple/Google | First-mover advantage, specialized focus vs. their broad approach |

---

## Why This Will Work

1. **Deeply felt pain point** - Multiple unprompted complaints on social media
2. **No current solution** - Existing tools don't address the emotional aspect
3. **Clear monetization** - People will pay to reduce emotional pain
4. **Defensible niche** - Big tech won't prioritize this specific use case
5. **Positive social impact** - Genuinely helps people heal

---

## Next Steps

1. Build MVP prototype with face grouping
2. Test with 10-20 recently broken-up individuals
3. Iterate based on emotional feedback
4. Launch beta on TestFlight/Play Store
5. Soft launch with Reddit community marketing
