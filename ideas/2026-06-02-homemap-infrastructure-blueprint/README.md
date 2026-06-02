# HomeMap — Your Home's Infrastructure Blueprint

## The Problem

You buy or rent a home. You have **zero documentation** about where anything is:

- Where's the main water shutoff valve?
- Which breaker controls the kitchen outlets?
- Where does the main sewer cleanout sit?
- Which direction do the floor joists run?
- Where's the HVAC filter and what size is it?
- Where's the gas meter shutoff?
- What's the WiFi password again?

Previous owners leave nothing. Home inspection reports are 40-page PDFs nobody reads. When something breaks at 2am — a pipe bursts, power goes out in one room, the AC dies — you're **hunting blind** for shutoffs, breakers, and access points while water is literally pouring through your ceiling.

**67% of homeowners can't locate their main water shutoff.** When emergencies hit, every minute of confusion causes more damage.

## Target Users

- **New homeowners** (6.1M US home purchases/year) — worst documentation gap
- **Renters** (44M US renters) — landlords rarely provide infrastructure info
- **Home managers / landlords** — need to share info with tenants & contractors
- **House sitters** — "where is everything?" is the #1 text you send
- **Aging-in-place seniors' families** — need to know parents' home layout remotely

## Proposed Solution

**HomeMap** — an interactive blueprint of your home's physical infrastructure.

### Core Concept
Walk through your home with your phone. Pin items to a floor plan (or auto-generated room layout). Tag every critical system: shutoffs, breakers, filters, access panels, utility connections. Annotate with photos, notes, and maintenance history.

### Key Features

1. **Room-by-Room Scanner** — Walk through with your camera, AI auto-detects visible infrastructure (breaker panels, shutoff valves, HVAC vents, water heaters, fuse boxes) and suggests pins
2. **Interactive Floor Plan** — Drag-and-drop pin placement on a simple floor plan. Room labels, zones, levels. No CAD skills needed.
3. **Emergency Quick Access** — One-tap "EMERGENCY" button surfaces: water shutoff, gas shutoff, main breaker, HVAC emergency switch. Available offline.
4. **Breaker Panel Mapper** — Photograph your breaker panel, label each breaker, test which rooms/outlets they control. "Which breaker is the kitchen?" → answered in 2 seconds.
5. **Shutoff Locator** — GPS + photo + written directions for every shutoff. "Under the sink, behind the left cabinet door, turn clockwise"
6. **Contractor Share** — Generate a temporary share link for plumbers, electricians, HVAC techs. They see exactly where everything is. No more "where's your panel?"
7. **Maintenance Tags** — Filter sizes, last-replaced dates, model numbers, warranty info pinned to each system
8. **House Sitter Guide** — One-tap export: WiFi, shutoffs, breaker map, emergency contacts, thermostat instructions, alarm codes (encrypted)
9. **Transfer Mode** — Selling/renting? Transfer the entire home profile to the new occupiant. The documentation gift that keeps giving.
10. **Offline Mode** — Emergency info cached locally. Dead WiFi? Still works.

## Market Research

### Problem Scale
- 6.1M US home purchases/year — all start with zero documentation
- 44M US renters move yearly — same problem
- Average homeowner takes 18 months to learn their home's systems
- Insurance claims delayed 2-3 days when homeowners can't locate shutoffs/breakers
- Emergency plumber calls cost $150-400/hour — time spent locating shutoffs is billed to you

### Existing Solutions
- **HomeZada** — home inventory + maintenance scheduling. NOT infrastructure mapping.
- **Home maintenance apps** (BrightNest, HomeZada) — task reminders, not spatial documentation
- **Home inspection PDFs** — static, unsearchable, never looked at again
- **Contractor notes** — scribbled on paper, lost immediately
- **Nothing** maps your home's physical systems to an interactive, shareable blueprint

### Differentiation
HomeMap isn't a maintenance scheduler (HomeKeep), isn't a repair diary (FixLog), and isn't an insurance inventory (HomeVault). It's the **spatial documentation layer** — where things physically are in your home.

## Business Model

| Tier | Price | Features |
|------|-------|----------|
| **Free** | $0 | 1 home, 3 rooms, basic pins, emergency quick access |
| **Homeowner** | $3.99/mo | Unlimited rooms, AI scanner, breaker mapper, contractor share |
| **Household** | $7.99/mo | Everything + family sharing, sitter guides, transfer mode |
| **Landlord** | $14.99/mo | Everything + multi-property, tenant transfer, maintenance request portal |

## Technical Feasibility

- **Frontend:** PWA with offline-first (Service Worker + IndexedDB)
- **Floor plan:** Simple 2D canvas (Fabric.js or Konva.js) — no CAD needed
- **AI detection:** TensorFlow.js for on-device object detection (valves, panels, vents)
- **Sharing:** Temporary signed URLs with expiry
- **Stack:** React + TypeScript, deployable as PWA

## Why This Wins

- **Zero competition** in spatial home documentation
- **Emotional hook:** "Where's the water shutoff?" at 2am is a visceral fear
- **Built-in viral loop:** Transfer Mode means every home sale creates a new user
- **Contractor network effect:** Plumbers/electricians start recommending it because it saves THEM time
- **Insurance angle:** Documented homes = faster claims = potential partnership with insurers

---

*Every home has a story. HomeMap tells you where all the important parts are.*
