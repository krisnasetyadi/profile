# 🏆 Hero Profile Redesign Plan
### *Jhey Tompkins wrote the code. Awwwards judged it. Godly featured it.*

> This plan merges two worlds:
> - **Jhey Tompkins** — interactive CSS wizardry, personality-driven micro-interactions, the web as a playground
> - **Awwwards / CSS Design Awards / Godly** — cinematic restraint, editorial scale, motion with purpose, sites that win trophies
>
> The result: a portfolio that is technically impressive **and** aesthetically undeniable. Not just a dev flex — a *statement*.

---

## 📋 Current State Audit

| Section | Current State | Verdict |
|---|---|---|
| **Hero** | Big name + circular photo + CV button | Static. Generic. Forgettable. |
| **Work** | 2-col image grid + captions | Looks like every Bootstrap portfolio from 2019 |
| **About** | Two paragraphs + cartoon image | Disconnected. Wasted potential. |
| **Experience** | Single entry, border-bottom | Timeline that tells no story |
| **Navbar** | Glassmorphism sticky bar | Functional. Invisible to judges. |
| **Footer** | Contact info + links | The page just… stops |

### What is missing from both lenses:

| Jhey Would Ask | Awwwards Judges Would Ask |
|---|---|
| Where is the cursor interactivity? | Where is the cinematic page load? |
| Why is the page not alive on scroll? | Where is the editorial scale in typography? |
| Where is the personality? | Where is the visual hierarchy and restraint? |
| What is the one trick people screenshot? | What is the concept that holds it all together? |
| Why does nothing react to my mouse? | Why does everything look like a template? |

---

## 🎯 Unified Design Philosophy

> *Jhey makes you smile. Awwwards makes you stare. We are doing both.*

### The Concept: **Precision in Motion**
A developer’s portfolio should feel like the code itself — structured, intentional, no wasted lines. Every animation has a reason. Every interaction has a payoff. The site reads like a well-written function: clean entry, clear logic, satisfying return.

### The 6 Laws:
1. **One concept, total commitment** — the Precision in Motion idea runs through every section
2. **Motion earns its place** — nothing moves unless movement adds meaning
3. **Typography IS the design** — no decorative graphics; letterforms carry the visual weight
4. **Dark-first, light by choice** — dark canvas = premium; light mode is the relaxed variant
5. **The cursor is always talking** — every hover tells the user something new
6. **The end is a beginning** — the footer is a call-to-action, not a goodbye

---

## 🌐 Inspiration Sources (The Benchmark)

| Site | What to Steal |
|---|---|
| **[jhey.dev](https://jhey.dev)** | Custom cursor, magnetic elements, text scramble, personality |
| **[basement.studio](https://basement.studio)** | Stacked work rows, full-bleed hover image reveals, brutal type |
| **[linear.app](https://linear.app)** | Grain overlay, dark polish, motion precision |
| **[ped.ro](https://ped.ro)** | Editorial minimalism, spacing as design, restraint |
| **[bruno-simon.com](https://bruno-simon.com)** | Interaction as concept — the gold standard of signature moments |
| **[lusion.co](https://lusion.co)** | WebGL creativity, dark atmosphere |
| **[rauno.me](https://rauno.me)** | Micro-interaction precision, Framer Motion mastery |
| **[godly.website](https://godly.website)** | Browse featured sites for visual calibration |

---

## 🗺️ Full Redesign Plan — Section by Section

---

### 1. 🌑 GLOBAL FOUNDATION
**Awwwards:** Innovation, Design, Usability | **Jhey:** Cursor, motion layer, personality

#### A. Color System — Dark-First Editorial Palette
- **Background:** Near-black `#0a0a0a` — not pure black, which is too harsh
- **Foreground:** Off-white `#f0ede8` — warm, not clinical
- **Accent (one color only):** Electric Lime `#c8ff00`
  - Lime is rarer, punchier, and pops on dark without feeling cyberpunk
  - Used sparingly: hover states, active dots, highlight underlines, blinking cursor
- **Muted:** `#3a3a3a` for borders and secondary text
- **Light mode:** inverted — `#f5f2ed` bg, `#111111` fg, same lime accent
- `::selection` → accent background with dark text

#### B. Typography — Variable Font as Animation Engine
- Add **Syne** (Google Fonts, free) as the display face — variable axis, editorial feel
- Keep **Switzer** for body — excellent pairing
- Hero heading size: `clamp(80px, 12vw, 180px)` — fills the viewport
- Body: `clamp(16px, 1.2vw, 20px)` — comfortable reading at all breakpoints
- **Variable font trick:** on scroll, heading `font-weight` animates `900 → 200` — same letters, different energy

#### C. Custom Cursor (Jhey move #1)
- Default: `8px` filled dot in accent color
- Trailing ring: `32px` circle with `200ms` lerp delay — the gap creates depth
- On `<a>` hover: ring expands to `64px`, fills accent, dot disappears — eat effect
- On `<button>` hover: cursor transforms to crosshair `+`
- On project rows: cursor becomes `VIEW →` text label
- Implementation: `use-mouse-position.ts` + `cursor.tsx` with `requestAnimationFrame`

#### D. Grain Noise Overlay (Godly / Linear secret weapon)
- `position: fixed` full-page SVG `feTurbulence` noise layer at `4% opacity`
- Makes flat colors feel physical and premium
- Implementation: `<GrainOverlay />` — pure CSS, zero JS overhead

#### E. Smooth Scrolling with Lenis
- Replaces native scroll — the difference is felt immediately
- `lerp: 0.08` — smooth but not floaty
- This alone lifts the site into Awwwards territory

#### F. Page Enter — Cinematic Curtain Lift
- Full-viewport `#0a0a0a` overlay on first load
- Slides up with `cubic-bezier(0.76, 0, 0.24, 1)` — the Awwwards curtain
- Duration: `1.2s`. No spinner. No progress bar. Just commitment.
- Implementation: `framer-motion AnimatePresence` on layout-level overlay

#### G. Accessibility — `prefers-reduced-motion` Strategy *(Usability +1.5)*
- All `framer-motion` variants check a shared `useMotionSafe()` hook at the component level
- When `prefers-reduced-motion: reduce` is set:
  - All `translateY / translateX / scale` transitions collapse to `opacity` only
  - Scramble text skips the glitch — resolves immediately to final text
  - Marquee stops scrolling, displays as a static text row
  - Blob clip-path freezes on a clean organic shape — no morph
  - Cursor ring disappears — only the dot remains, no lerp trail
  - Curtain page-enter fades `200ms` instead of sliding
- Zero functionality lost — only motion is removed. The design still reads correctly.
- Implementation: `hooks/use-motion-safe.ts` wrapping `framer-motion`'s `useReducedMotion`

#### New files:
```
components/cursor.tsx
components/grain-overlay.tsx
components/page-transition.tsx
hooks/use-mouse-position.ts
hooks/use-scroll-progress.ts
hooks/use-lenis.ts
```

---

### 2. 🚀 HERO SECTION — `overview-introduction.tsx`
**Awwwards:** First impression, Originality | **Jhey:** Scramble, magnetic, cursor tracking

**3-second test:** Within 3 seconds, the visitor must feel — *I do not know what is about to happen, and I want to find out.*

#### A. Layout — Asymmetric, Full-Viewport
- Name occupies full left 70% in massive type
- A small metadata block (location, role, year) sits bottom-right, tiny and precise
- The tension between huge and tiny IS the design — pure Awwwards language
- `overflow: hidden` on container — text reveals clip-in from below

#### B. Name — Kinetic Typography (Jhey + Awwwards merged)
- Each letter of `KRISNA` and `SETYA ADI` is its own `<span>` — three words, two lines, natural breathing room
- **On page load:** Letters clip-reveal upward from below hidden container, staggered `80ms` per letter — cinematic (Awwwards move)
- **Every 8 seconds idle:** `useScrambleText` glitch — cycles random chars for `600ms`, resolves back (Jhey move)
- **On scroll:** Name scales down and opacity-fades as user leaves hero

#### C. Photo — Morphing Blob Clip-Path (the Godly visual)
- No more circle. Headshot gets SVG `clip-path` with 8 organic anchor points
- Shape morphs continuously via `@keyframes` — slowly breathing
- On `mousemove` near image: blob distorts toward cursor
- Faint dashed SVG orbit ring rotates infinitely around the blob at `0.3rpm`

#### D. CV Button — Magnetic + Label Scramble
- Button is magnetic: shifts toward cursor within `80px`
- On hover: label scrambles `DOWNLOAD CV → GET IT → GRAB IT` → settles
- Style: pill with diagonal gradient border
- Implementation: `magnetic-button.tsx` wrapping existing `ButtonCvDownload`

#### E. Bio — Staggered Word Reveal
- Paragraph split word-by-word, each word `overflow: hidden` + `translateY(100%)` default
- IntersectionObserver fires → words cascade in at `20ms` stagger with spring easing
- Key words `Jakarta`, `web`, `developer` styled with accent color

#### F. Ambient Background Orb
- Radial gradient orb (accent at `8% opacity`) follows cursor with `lerp(0.05)`
- Mobile: static centered orb, no JS tracking needed

#### G. Mobile Interaction Strategy *(Usability +1)*
Desktop-only effects are explicitly disabled on touch devices — not broken, just adapted:

| Effect | Desktop | Mobile |
|---|---|---|
| Custom cursor | Dot + trailing ring | Hidden — system cursor only |
| Magnetic buttons | Pulls toward cursor | Normal tap, larger hit area |
| Blob mousemove distortion | Tracks cursor | Static organic shape, still breathes via `@keyframes` |
| Work hover image reveal | Fixed image tracks cursor Y | Tap row → image expands inline below the row |
| Tilt card | 3D follows cursor | Tap triggers a single tilt-and-return animation |
| Scramble on hover | Every hover | Tap triggers one scramble cycle |

- Detection: `window.matchMedia('(pointer: coarse)')` — more reliable than viewport width
- Implementation: `hooks/use-is-touch.ts` used in each affected component

#### New files:
```
components/scramble-text.tsx
components/magnetic-button.tsx
components/ambient-cursor-bg.tsx
components/blob-photo.tsx
hooks/use-scramble-text.ts  ✅ (created)
```

---

### 3. 💼 WORK SECTION — `work.tsx`
**Awwwards:** Content, Creativity, UX | **Jhey:** The signature hover reveal

**This is the make-or-break section for Awwwards judges.**

#### A. Layout — Full-Width Stacked Rows (Godly / Basement Studio style)
- Replace 2-col image grid with a stacked list
- Each project row:
  ```
  01   VOVELIA ----------------   Digital Invitation   2024   →
  02   CASHNOMY ---------------   Finance App          2024   →
  03   ANGULAR GRID -----------   Dev Tool             2023   →
  04   LAW FIRM ---------------   Corporate Site       2023   →
  ```
- Project name size: `clamp(40px, 6vw, 96px)`
- `01–04` numbers as faint background elements at `10% opacity`
- Row separator: `1px` line that draws itself left-to-right on scroll (`scaleX: 0 → 1`)

#### B. The Hover Image Reveal — THE Signature Moment
- On `mouseenter` of any row:
  - `512×384px` preview image appears, `position: fixed`
  - Tracks cursor `Y` position only (not X — just vertical drift)
  - Image appears with clip-path wipe: left to right in `300ms`
  - Cursor on row becomes `VIEW →` text
- On `mouseleave`: image wipes out right to left in `200ms`
- **This effect alone will get the site submitted to Godly**

#### C. SVG Arrow on Row End
- `→` is an SVG — on hover the line extends, arrowhead slides right, pulses once
- Pure CSS `stroke-dashoffset` animation

#### D. Section Label with Count
- Heading becomes `work. (04)` — tiny superscript count, very editorial

#### New files:
```
components/work-hover-preview.tsx
components/animated-row-border.tsx
```

---

### 4. 🧠 ABOUT SECTION — `about.tsx`
**Awwwards:** Personality, Content | **Jhey:** Marquee, tilt card, playfulness

**This section needs to feel like meeting Krisna in person — not reading his LinkedIn.**

#### A. Dual Marquee Divider
- Full-width infinite marquee between sections, `40px/s`
- `REACT · NEXT.JS · TYPESCRIPT · NODE.JS · TAILWIND · JAKARTA · CLEAN CODE · UI/UX · OPEN SOURCE · COFFEE ☕ ·`
- Top tier runs right, bottom tier runs left — mirror effect
- On hover: marquee reverses direction — friction, playful, human (pure Jhey)

#### B. Giant Statement Typography (Awwwards editorial move)
- One massive centered statement that mirrors the site concept:
  ```
  PRECISE.
  INTENTIONAL.
  SHIPPED.
  ```
- Three words. Three lines. Each one is a value, not a boast. `SHIPPED.` lands hardest — it separates builders from talkers.
- Weight `900`, fills screen edge-to-edge with `clamp`
- On scroll: each word stagger-fades bottom-up, leaving only the final period `.` on screen for a beat — a breath before the next section

#### C. Stats Row (Jhey personality layer)
- Three animated stats on scroll-in with `useCountUp`:
  ```
  4+          10+          Jakarta
  Years       Projects     Based In
  ```
- `Jakarta` never counts — it types itself out letter-by-letter like a terminal typewriter, then blinks once. Geographic identity as a stat: rare, personal, impossible to fake.
- Each number stat scrambles briefly on hover

#### D. Cartoon → 3D Tilt Card
- `krisna-cartoon.png` wrapped in perspective tilt card
- `transform: perspective(800px) rotateX() rotateY()` driven by `mousemove`
- Gloss pseudo-element sweeps diagonally on hover
- Floating skill badge pills drift away from card on hover — `framer-motion` spring physics

#### E. Highlighted Phrases (Awwwards editorial annotation)
- Key words get `background: linear-gradient(accent, accent)` underline
- `background-size: 0% 3px → 100% 3px` draws in on scroll
- Applied to: `modern web`, `Jakarta`, `real problems`

#### New files:
```
components/marquee-ticker.tsx
components/count-up.tsx
components/tilt-card.tsx
hooks/use-count-up.ts
```

---

### 5. 📅 EXPERIENCE SECTION — `experience.tsx`
**Awwwards:** Content structure, UX clarity | **Jhey:** Draw-in timeline, pulsing presence

#### A. Vertical Draw-In Timeline
- `2px` vertical line on the left
- On scroll: grows `height: 0 → 100%` via `scaleY` — IntersectionObserver threshold steps
- Experience entries pop in from `translateX(-20px)` as line reaches them

#### B. Now — Live Pulsing Dot
- Replace `CURRENT` with a `10px` green circle with `box-shadow` pulse animation
- Label reads `Now` in small caps — cleaner, more refined

#### C. Tech Tags — Staggered Pill Entry
- `React · Next.js · Node.js · TypeScript · REST API · Figma`
- Tags appear one-by-one, `60ms` stagger, `scale(0.8) → scale(1)` spring bounce
- On hover: expands slightly, background fills with accent color

#### D. Role Title — Spring Badge
- `Software Developer` as an accent-background pill badge
- On scroll-in: `scale(0.5) → scale(1)` with spring overshoot — subtle but satisfying

#### New files:
```
components/availability-dot.tsx
components/tech-tag.tsx
components/timeline.tsx
```

---

### 6. 🧭 NAVBAR — `navbar-component.tsx`
**Awwwards:** Navigation UX | **Jhey:** Scroll behavior, per-letter hover

#### A. Smart Scroll Behavior
- Scroll down → navbar slides up (`translateY(-100%)`)
- Scroll up → navbar reappears (`translateY(0)`)
- Threshold: `50px` before triggering — prevents flicker
- Transition: `framer-motion` with `cubic-bezier(0.76, 0, 0.24, 1)`

#### B. Logo Per-Letter Wobble
- `KRSN` on hover: each letter staggers `translateY(-4px → 0)` with spring
- The blue dot grows to `20px` on hover and snaps back

#### C. Sliding Active Indicator
- Remove `border-bottom` active state
- Replace with `4px` dot that slides horizontally between nav items via `framer-motion layoutId`

#### D. Availability Badge in Nav
- Right side: `Available ●` in green — always visible
- On hover: expands to `Available for work`
- Clicking scrolls to footer contact section

---

### 7. 🦶 FOOTER — `footer.tsx`
**Awwwards:** Closing impact | **Jhey:** Big type, letter hover, blinking cursor

#### A. Giant CTA Typography (Basement Studio / Godly staple)
- Full-viewport-width headline:
  ```
  LETS
  BUILD
  SOMETHING.
  ```
- `clamp(80px, 14vw, 200px)`, weight `900`
- On hover per word: letters independently shake with staggered `sin(index)` wave
- On scroll-in: words reveal from clip-path mask, bottom-up, staggered `200ms`

#### B. Blinking Terminal Cursor
- After the `.` in `SOMETHING.` — a `|` cursor blinks via `@keyframes`
- Tiny detail that says a developer made this — judges notice

#### C. Magnetic Social Links
- `LinkedIn` and `GitHub` links become magnetic within `60px`
- On hover: text scrambles to `LI→` and `GH→` then resolves

#### D. Footer Meta Row
- `Developed by Krisna · Jakarta · 2026 ©` in `11px` small-caps
- Right: `KRSN` wordmark
- Dividing `1px` line draws from center outward on scroll

---

## 🛠️ Technology Stack

| Tool | Role |
|---|---|
| **Framer Motion** | Curtain load, section reveals, navbar, layout animations |
| **Lenis** ✅ | Smooth scrolling — makes everything feel 3x more premium |
| **CSS Custom Properties** | `--x --y` cursor vars piped to gradient orb, grain overlay |
| **IntersectionObserver** | Scroll-trigger for timeline, tags, text reveals — native, no library |
| **`requestAnimationFrame`** | Cursor lerp, magnetic buttons, blob morphing |
| **CSS `@keyframes`** | Marquee, pulsing dot, shimmer, blink cursor, blob breathing |
| **SVG clip-path** | Blob photo, work image reveals, text masked entry |

> **No Three.js. No GSAP.** Doing jaw-dropping things with minimal tools is itself the Awwwards story.

---

## 🗂️ Complete New File Structure

```
components/
  ├── cursor.tsx                  # Custom dot + trailing ring cursor
  ├── grain-overlay.tsx           # SVG feTurbulence noise layer
  ├── page-transition.tsx         # Cinematic curtain lift on load
  ├── scramble-text.tsx           # Char-scramble animation component
  ├── magnetic-button.tsx         # Magnetic hover wrapper (RAF-based)
  ├── ambient-cursor-bg.tsx       # Lerped gradient orb behind hero
  ├── blob-photo.tsx              # Morphing SVG clip-path headshot
  ├── work-hover-preview.tsx      # Fixed floating project image on hover
  ├── animated-row-border.tsx     # Draw-in scaleX border line
  ├── marquee-ticker.tsx          # Dual infinite horizontal marquee
  ├── count-up.tsx                # Animated number counter component
  ├── tilt-card.tsx               # 3D CSS perspective mouse-tracking card
  ├── timeline.tsx                # Scroll-drawn vertical timeline
  ├── tech-tag.tsx                # Spring-entry pill tag
  ├── availability-dot.tsx        # Pulsing green live dot
hooks/
  ├── use-mouse-position.ts       # Global cursor x/y tracking
  ├── use-scroll-progress.ts      # 0-1 scroll progress per section
  ├── use-count-up.ts             # Eased count-up logic
  ├── use-scramble-text.ts        # Text scramble engine     ✅ created
  ├── use-lenis.ts                # Lenis smooth scroll init
  ├── use-motion-safe.ts          # prefers-reduced-motion wrapper
  ├── use-is-touch.ts             # pointer: coarse detection for mobile
```

---

## 🚦 Build Order — Each Phase is Independently Shippable

| Phase | What Gets Built | Awwwards ⭐ | Jhey ⭐ |
|---|---|---|---|
| **1 — Foundation** | Lenis + grain + dark palette + CSS vars + curtain load | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| **2 — Cursor** | Custom cursor + mouse tracking + ambient orb | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **3 — Hero** | Scramble name + blob photo + magnetic button + word reveal | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **4 — Work** | Stacked rows + hover reveal + draw-in borders + SVG arrow | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **5 — About** | Dual marquee + giant statement + counters + tilt card | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **6 — Experience** | Timeline + pulsing dot + tech tags + spring badge | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **7 — Nav + Footer** | Smart navbar + footer big type + blinking cursor | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 🎭 Award Submission Checklist

### Awwwards (scored on Design / Usability / Creativity / Content):
- [ ] **Design** — Consistent, intentional, original visual language → lime accent + dark palette + Syne font
- [ ] **Usability** — Clear navigation, readable type, section IDs → smart navbar, semantic HTML, `prefers-reduced-motion` fallbacks, mobile touch strategy
- [ ] **Creativity** — Something we have not seen before → blob photo + hover image reveal + scramble idle loop
- [ ] **Content** — Work and story are compelling → stacked rows, stat counters, clear experience

### CSS Design Awards (Extra weight on technical craft):
- [ ] Clean semantic HTML → current structure already good, keep it
- [ ] CSS innovation → grain overlay, variable font animation, clip-path reveals, dual marquee
- [ ] Motion sophistication → curtain load, per-letter stagger, scroll-driven timeline

### Godly (Curated by feel — does it deserve to be here?):
- [ ] Dark, editorial, moody → dark palette ✓
- [ ] Has a moment → hover image reveal ✓
- [ ] Typography at scale → `clamp(80px, 12vw, 180px)` name ✓
- [ ] Feels intentional, not random → Precision in Motion concept ✓

---

## 🎭 The Three Signature Moments
*(The things people screenshot, share, and remember)*

### Moment 1 — The Name Glitch (Hero)
The name idles in huge type. Then, every 8 seconds, it briefly scrambles into gibberish and reassembles. You wait for it to happen again. **That is Jhey.**

### Moment 2 — The Work Hover Reveal
You hover a project name in the stacked list. A massive preview image appears from nowhere, tracking your vertical cursor position. You drag your mouse up and down just to watch it move. **That is the Awwwards moment.**

### Moment 3 — The Footer Big Type
You scroll to the bottom and LETS BUILD SOMETHING. fills the entire screen. You hover a word — it wobbles. There is a blinking cursor after the period. You feel like you have reached a destination, not an end. **That is Godly.**

---

*The web is a canvas. Stop making brochures.* — Jhey Tompkins
*Innovation is the distance between what exists and what is possible.* — Awwwards
*If it is on Godly, someone stayed up until 3am making it perfect.* — also true