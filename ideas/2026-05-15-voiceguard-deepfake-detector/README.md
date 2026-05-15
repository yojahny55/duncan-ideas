# VoiceGuard — AI Deepfake Voice Detector

**"Is this voice real or AI?"**

Record or upload any voice message, phone call, or audio clip. VoiceGuard tells you instantly if it's human or AI-generated — with confidence scoring, artifact visualization, and scam pattern matching.

---

## 🔥 The Problem

AI can now clone anyone's voice from **3 seconds of audio** scraped from social media. In 2026, voice cloning scams are industrialized:

- **$1.2B+ lost to AI voice scams** in 2025 (FTC), projected $3B+ in 2026
- **France warned (May 2026)**: "silent calls" that hang up after "Hello?" are harvesting voice samples for cloning
- **CNBC (May 9, 2026)**: AI scam calls are "more convincing and more common" — parents hearing their child's scared cry, executives receiving CEO voice calls
- **Only 20 seconds of audio** needed to create a convincing clone (Resemble AI Rapid Voice Clone 2.0)
- **Zero consumer tools** exist to detect deepfake audio in real-time

Enterprise solutions (Pindrop, Nuance) cost $50K+/year and are B2B-only. There is **no consumer app** that lets you verify if a voice is real.

## 🎯 Target Users

| Segment | Size | Pain Point |
|---------|------|------------|
| **Concerned parents** | 40M+ US | "Is this really my kid calling for help?" |
| **Seniors & families** | 55M+ US | #1 target of grandparent scams |
| **Business professionals** | 30M+ US | CEO fraud, vendor impersonation |
| **Journalists & media** | 500K+ | Verifying audio sources |
| **Legal professionals** | 1.3M+ US | Authenticating voice evidence |
| **Anyone who receives calls** | 280M+ US | "Was that voicemail really from my bank?" |

## 💡 The Solution

**VoiceGuard** — the first consumer deepfake voice detector.

### How It Works
1. **Record or upload** any audio — voicemail, phone call, voice message, video audio
2. **AI analysis** runs in seconds — spectrogram analysis, artifact detection, pattern matching against known cloning models
3. **Get a verdict**: 🟢 Human (92% confidence) / 🟡 Uncertain / 🔴 Likely AI-generated
4. **See the evidence** — visual spectrogram with flagged anomalies, artifact timeline, model fingerprint match

### Core Features

**🎙️ Real-Time Detection**
- Record directly in the app during suspicious calls (background mode)
- Upload voice memos, voicemails, or extract audio from videos
- Browser extension: right-click any voice message → "Analyze with VoiceGuard"

**🔬 Deep Analysis Engine**
- Spectral artifact detection (AI clones leave invisible frequency fingerprints)
- Prosody analysis (rhythm, stress, intonation patterns reveal synthetic speech)
- Breathing pattern analysis (AI struggles with natural breathing cadence)
- Emotional coherence scoring (synthetic emotion vs. real emotion mismatch)
- Known model fingerprinting (ElevenLabs, Resemble, Bark, Tortoise, etc.)

**🛡️ Scam Intelligence**
- Cross-reference with known scam patterns ("grandparent scam" script detection)
- Urgency/manipulation language analysis
- Phone number reputation check (spoofed? VoIP? burner?)
- Link with FCC scam database

**👨‍👩‍👧‍👦 Family Protection**
- **Voice Print Vault**: Register family members' real voices for comparison
- **Safe Word Challenge**: App prompts you to ask your safe word during suspicious calls
- **Family Alert Network**: Flag a scam call → instant warning to all family members

**📊 Evidence Builder**
- Generate timestamped analysis reports (PDF) for law enforcement
- Chain of custody for legal admissibility
- Batch analysis for multiple recordings

## 🏗️ Technical Architecture

### Detection Pipeline
```
Audio Input → Preprocessing → Multi-Model Analysis → Fusion → Verdict
     ↓              ↓                ↓                  ↓
  Noise reduction  Feature       Spectral           Confidence
  Normalization    Extraction    + Prosodic          Calibration
  Segmentation     MFCC/FFC     + Breathing          Score Fusion
                                 + Emotional
                                 + Model Fingerprint
```

### Model Stack
- **Primary**: Fine-tuned wav2vec 2.0 on deepfake audio (AASIST architecture)
- **Secondary**: Custom spectrogram CNN for artifact detection
- **Tertiary**: Prosodic feature analysis (XGBoost on timing features)
- **Fusion**: Weighted ensemble with calibration layer
- **On-device**: Lightweight TFLite model for instant results
- **Cloud**: Full pipeline for detailed analysis

### Privacy
- Audio processed on-device by default (TFLite)
- Cloud analysis is opt-in and encrypted
- Voice prints stored locally with biometric encryption
- No audio stored after analysis (unless user saves)
- SOC 2 Type II compliant infrastructure

## 💰 Business Model

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 5 analyses/month, basic verdict, on-device only |
| **Guardian** | $4.99/mo | Unlimited analyses, detailed evidence, scam intelligence, voice prints for 5 family members |
| **Family Shield** | $9.99/mo | Everything in Guardian + 20 family members, alert network, priority analysis, legal report generation |
| **Professional** | $29.99/mo | API access, batch processing, court-admissible reports, custom model training, white-glove support |

**Revenue potential**: 5M free users × 8% conversion × $6.66 avg = **$2.66M MRR** at scale

## 📊 Market Research

### Competitive Landscape

| Solution | Type | Price | Consumer? |
|----------|------|-------|-----------|
| Pindrop | Enterprise fraud | $50K+/yr | ❌ |
| Nuance/Gatekeeper | Enterprise biometrics | Custom | ❌ |
| Resemble AI Detect | Developer API | $0.006/sec | ❌ |
| AI Voice Detector (PlayStore) | Basic | Free | ✅ but unreliable |
| **VoiceGuard** | **Consumer + Pro** | **$0-30/mo** | **✅** |

### Why Now?
1. **Voice cloning costs dropped 99%** since 2023 (ElevenLabs: $5/mo)
2. **France warned about silent calls** harvesting voice samples (May 2026)
3. **FTC reports 350% increase** in AI voice scams YoY
4. **DEEPFAKES Accountability Act** (pending) would require watermarking — but cloned voices won't have watermarks
5. **Zero consumer solutions** exist — massive blue ocean

### TAM
- US voice scam losses: $3B+ (2026 projected)
- Global voice cloning market: $4.6B by 2027
- Consumer security app market: $12B
- **Serviceable market**: 50M+ US adults concerned about voice scams × $6/mo = **$300M+ ARR opportunity**

## 🗺️ Roadmap

### Phase 1 — MVP (Weeks 1-6)
- [ ] Core detection engine (wav2vec + spectrogram CNN)
- [ ] iOS/Android app with record + upload
- [ ] Basic verdict (Human/Likely AI/Uncertain + confidence %)
- [ ] Spectrogram visualization
- [ ] Free tier (5/month) + Guardian tier

### Phase 2 — Family Protection (Weeks 7-10)
- [ ] Voice Print Vault (register family voices)
- [ ] Family Alert Network
- [ ] Safe Word Challenge flow
- [ ] Phone number reputation check
- [ ] Browser extension (WhatsApp/Telegram/voicemail)

### Phase 3 — Intelligence (Weeks 11-14)
- [ ] Scam pattern database
- [ ] Model fingerprinting (identify which AI tool was used)
- [ ] Urgency/manipulation language analysis
- [ ] Evidence PDF generation
- [ ] Legal report builder

### Phase 4 — Platform (Weeks 15-20)
- [ ] API for developers
- [ ] Batch processing
- [ ] Professional tier with court-admissible reports
- [ ] Partnership with banks/insurance
- [ ] Real-time call screening (Android)

## 🧪 Validation Signals

- **r/scams** (200K+): Multiple daily posts about AI voice scams, zero tools recommended
- **CNBC May 9**: "AI-powered scam calls are getting more convincing" — mainstream awareness
- **France government warning** (May 10): Official alert about silent call harvesting
- **Marketplace (NPR) episode** (May 14): "Why audio deepfakes are so hard to spot" — cultural moment
- **KinCheck** (our own idea): Validates demand but different approach (verification vs. detection)

## 🏷️ Positioning

**"Shazam for fake voices."**

Not a family code word system (KinCheck). Not a scam baiter (ScamBait AI). VoiceGuard is a **detection tool** — analyze any audio, know if it's real. Consumer-first, enterprise-grade accuracy.

---

*Source: X/Twitter + CNBC + NPR Marketplace + France government alert (May 2026)*
*Date: 2026-05-15*
*Built by Duncan ⚔️*
