# Design System: Lucid Academy
> Stitch-optimized design brief — semantic natural-language directives + precise values.
> Feed this file to Google Stitch when generating new screens for the Lucid Academy foundation website.

---

## 1. Visual Theme & Atmosphere

**Atmosphere scores:** Density 3 · Variance 6 · Motion 8

A cinematic dark-space foundation website built around a single narrative metaphor: *light becomes a network*. The visual experience begins in deep void-black and unfolds as a glowing line — purple, then pink — that draws itself down the page as the user scrolls, branching at each section like a living circulatory system.

The mood is a **deep-space observatory at dusk**: profound calm, breathing room between elements, precise illumination. This is not cyberpunk chaos, not sterile AI-lab minimalism, not corporate SaaS blue. It's measured technological warmth — speculative and premium, but fundamentally human and educational. Think: an expert who has made peace with the future and wants to show you around.

Every pixel of light is deliberate. Glowing accents are rare and meaningful; silence and darkness carry equal weight to the lit moments. The palette is committed-to-drenched — the dark surface *is* the brand identity, not a background choice. Sections breathe with generous vertical rhythm; copy is concise and confident.

**Registration:** Brand / landing page (design IS the product).

---

## 2. Color Palette & Roles

**Theme: Dark. Non-negotiable — no light-mode variant exists.**

### Surfaces (deep-to-elevated)
- **Void Black** (`#07040F`) — Base page background. The darkest layer. Space between stars.
- **Deep Space** (`#0B0716`) — Secondary surface. Subtle sections, footer background.
- **Nebula** (`#13072D`) — Card backgrounds, elevated containers.
- **Aurora** (`#1E1142`) — Active card states, hover surfaces.
- **Twilight** (`#2A1A57`) — Highest elevation. Prominent callout areas.
- **Navy Depth** (`#08091E`) — Navigation bar background (after scroll), deep gradients.

### Text
- **Moonlight** (`#F7F2FF`) — Primary text. H1, H2, H3 headings, CTA labels. Slightly warm-white, never pure white.
- **Starlight** (`#D8CFF0`) — Body text, lead paragraphs, card descriptions. The default prose color.
- **Mist** (`#AFA3CC`) — Meta labels, timestamps, secondary navigation. Use for text that should recede.
- **Dusk** (`#82769F`) — Disabled states, lowest-priority text. Only on large text elements — contrast-limited.

### Brand Accents
- **Lucid Violet** (`#7C4DDB`) — Primary brand color. Buttons, active nodes, primary gradients, icon fills. The "home base" accent.
- **Lilac** (`#B088F4`) — Lighter violet for active nav links, light-line strokes, secondary headings on dark surfaces. The gentle version of Violet.
- **Violet Deep** (`#4C26AD`) — Gradient depth, card interior gradients, shadow-end colors.
- **Neon Pink** (`#D85CC8`) — Emotional warmth. Mid-point of CTA gradient, section transition elements. Softer than Hot Pink.
- **Hot Pink** (`#FF4BF2`) — Maximum intensity. Use sparingly: gradient endpoint of primary CTA, critical hover states, one key network node. Appears ≤10% of any screen.

### Technical Accents
- **Cyan** (`#4BFFFF`) — Technology signal. Network connection points, data indicators, fork/branch endpoints. Chilly counterpoint to warm violet. Appears ≤10% of any screen.
- **Signal Green** (`#7AFF84`) — Status only: "active", "live", "success". Never as brand color, never as CTA, never decorative.

### Structure
- **Whisper Border** (`rgba(176, 136, 244, 0.18)`) — Card borders, structural 1px dividers. Lilac-tinted, barely visible.
- **Medium Border** (`rgba(176, 136, 244, 0.32)`) — Active/hover borders, focus rings on ghost elements.

### Banned colors
- Pure black (`#000000`) — use Void Black or Navy Depth instead.
- Pure white (`#FFFFFF`) — use Moonlight (`#F7F2FF`).
- Warm beige, sand, cream, paper — no warm-tinted neutrals anywhere.
- Generic teal (#00B4D8 class) — Cyan only, never generic teal.
- Any neon green other than Signal Green.

---

## 3. Typography Rules

**Single font family across entire site. No mixing.**

- **Display Font:** `Sora` (Google Fonts, weights 300/400/600/700). Geometric humanist sans-serif — technological without being cold, modern without being a startup cliché.
- **Fallback stack:** `"Sora", "Manrope", system-ui, sans-serif`
- **Mono:** Not used in v0.1. If needed for code/data: `JetBrains Mono` or `Geist Mono`.
- **Banned fonts:** Inter (too generic), any serif (wrong register for this brand), any script/display font that breaks the single-family system.

### Scale Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Color |
|------|------|--------|-------------|----------------|-------|
| Display / H1 | `clamp(3rem, 6vw, 6rem)` | 700 | 0.95 | −0.04em | Moonlight |
| Headline / H2 | `clamp(2rem, 4vw, 3.4rem)` | 700 | 1.02 | −0.04em | Moonlight |
| Title / H3 | `clamp(1.35rem, 2vw, 2rem)` | 600 | 1.15 | −0.03em | Moonlight |
| Lead | `clamp(1.05rem, 1.35vw, 1.3rem)` | 400 | 1.65 | −0.015em | Starlight |
| Body | `1rem` | 400 | 1.72 | −0.01em | Starlight |
| Label / Eyebrow | `0.76rem` | 600 | 1.2 | +0.22em | Lilac or Cyan |
| Meta | `0.72rem` | 600 | 1.2 | +0.20em | Mist |

### Typography Rules
- **`text-wrap: balance`** on all H1–H3. **`text-wrap: pretty`** on all body paragraphs.
- Max prose width: `65ch` (approximately `680px` at body size). Never let long paragraphs span the full viewport.
- Heading `letter-spacing` floor: `−0.04em`. Never tighter — letters will visually collide.
- Display ceiling: `6rem` max. If copy feels small at that size, shorten the copy.
- Eyebrow discipline: **do NOT place an uppercase tracked label above every section**. That is the AI-scaffold tell. Eyebrows appear only where they genuinely distinguish a type/category (e.g., the hero "FUNDACJA LUCID ACADEMY" label). Section headings stand alone.

---

## 4. Component Stylings

### Buttons
- **Primary Button:** Gradient background `linear-gradient(135deg, #7C4DDB 0%, #D85CC8 60%, #FF4BF2 100%)`. White text (`#FFFFFF`). Corner radius `0.75rem`. Padding `0.9rem 1.75rem`. Font: Label scale, weight 600.
  - Resting shadow: `0 0 28px rgba(124,77,219,0.32), 0 12px 34px rgba(0,0,0,0.32)`.
  - Hover: float up `translateY(−2px)`, shadow intensifies to Glow Pink `0 0 36px rgba(255,75,242,0.36)`.
  - Active: push down `translateY(+1px)`, shadow reduces.
  - **One Primary CTA per section maximum.**

- **Secondary / Ghost Button:** Semi-transparent background `rgba(255,255,255,0.045)`. Moonlight text. Border `1px solid rgba(176,136,244,0.32)`. `backdrop-filter: blur(14px)`. Same radius/padding as primary.
  - Hover: background shifts to `rgba(124,77,219,0.20)`, border to Lilac.

- **No neon outer glows on buttons.** The gradient IS the energy.

### Cards / Glassmorphism Containers
- **Background:** `rgba(19, 7, 45, 0.72)` — deep Nebula with transparency.
- **Border:** `1px solid rgba(176, 136, 244, 0.18)`. Inner inset highlight: `inset 0 0 0 1px rgba(176,136,244,0.06)`.
- **Radius:** `1.5rem` (standard cards), `2rem` (large feature panels).
- **Blur:** `backdrop-filter: blur(20px)`. Apply only to cards that sit over complex backgrounds.
- **Shadow:** `0 24px 60px rgba(0,0,0,0.35)`.
- **Reveal animation:** entry `opacity: 0 → 1` + `translateY(28px → 0)`, easing `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out), duration 0.8s.
- **Card hover:** `translateY(−4px)` + Glow Violet appears. Subtle, not dramatic.
- **NEVER nest cards inside cards.** Never more than one glassmorphism layer in a single viewport zone.

### Navigation Bar
- **Height:** `80px` fixed sticky.
- **Initial state (over Hero):** fully transparent — the nav floats over the city/sky imagery.
- **Scrolled state:** glassmorphism — `background: rgba(7,4,15,0.72)`, `backdrop-filter: blur(18px)`, `border-bottom: 1px solid rgba(176,136,244,0.16)`.
- **Logo:** left-aligned, text-based. "Lucid" in Moonlight weight 700, "Academy" in Lilac weight 700. Click scrolls to top.
- **Nav links:** Starlight color, weight 600, `0.12em` tracking, 6 items. Active link: Lilac + thin glowing underline (no background highlight).
- **Mobile:** hamburger (3 horizontal bars → X cross) toggles vertical dropdown. No heavy animation on the menu itself.

### Timeline Light-Line (Signature Element)
- A 2px vertical line runs down the horizontal center of the content area. The line is the page's spine.
- **Unlit:** dark base track `rgba(176,136,244,0.18)`.
- **Lit progress (scroll-driven):** gradient fill `Lilac → Violet → Neon Pink → Hot Pink` grows from top to bottom as user scrolls, controlled by GSAP ScrollTrigger scrub.
- **Head / comet:** a 12px pulsing dot with Glow Pink sits at the leading edge of the drawn line.
- **Section nodes:** 16px circles on the line at each section entry. Unlit: dark fill, medium-border ring. Lit: Lilac fill, Hot Pink border, Glow Pink shadow, `scale(1.15)`.
- **Fork (in #misja section):** the line splits into two rectangular branches that frame the two pillar cards, then rejoins. SVG with right-angle paths (L commands, not bezier). Cyan endpoint nodes at branch corners.

### Glassmorphism Pillar Cards (in #misja)
- Two side-by-side cards inside the SVG fork zone.
- Background: `rgba(11, 7, 22, 0.72)` — slightly darker than standard cards.
- `inset 0 0 0 1px rgba(176,136,244,0.06)` inner ring.
- Small label inside at top-left: uppercase, 0.68rem, weight 600, `+0.18em` tracking, Lilac color. ("Filar 1" / "Filar 2" — these are deliberate named categories, not generic eyebrows.)
- Entry animation: `opacity 0→1` + `translateY(24px→0)`, staggered by 0.18s.

### Scroll Cue (Hero)
- Thin animated vertical line below the hero content, ~42px tall.
- Gradient `Lilac → transparent`. Cycles: draw, hold, fade-translate-down, restart. Period 2.2s infinite.
- Hidden at `prefers-reduced-motion: reduce`.

### Focus States
- All interactive elements: `outline: 2px solid var(--lilac); outline-offset: 3px; border-radius: 2px`.
- No `outline: none` anywhere without a visible replacement.

---

## 5. Layout Principles

**Grid-first, Central-Spine architecture.**

- **Page container:** `max-width: 1280px`, centered, horizontal padding `clamp(1.5rem, 4vw, 4rem)`.
- **Timeline sections:** Sections alternate left/right around the central 2px spine. Odd sections: card floats left (width ~50% minus gutter). Even sections: card floats right.
- **Section min-height:** `70vh` (placeholder state) to `100vh` (#misja full treatment).
- **Vertical rhythm:** section inner padding `clamp(2rem, 7vh, 5rem)`.
- **Two-column grids** (pillar cards, team, offer): `grid-template-columns: 1fr 1fr`, gap `clamp(1.25rem, 2.5vw, 2.5rem)`.
- **No 3-equal-column grids.** If 3 items: use 2+1 split, horizontal scroll, or staggered rows.
- **CSS Grid over flexbox percentage math.** No `calc(33.33% - 1rem)` patterns.
- **min-height: 100dvh** for full-height sections (not `100vh` — iOS Safari jump).
- **No overlapping elements.** Every element has its own spatial zone. Absolute-positioned elements (SVG forks, node dots) are decorative only and use `pointer-events: none`.

### Section Anatomy
Each timeline section has:
1. A timeline node (absolute, on the spine)
2. A content card (floating left or right of spine)
3. Optional decorative SVG (within the card zone, `z-index: 0`)
4. Content: eyebrow (only if necessary), H2, lead paragraph, optional CTA

### Hero Layout
- Left-aligned content block (max-width `600px`) over layered parallax imagery.
- No centered hero (variance > 4 rule).
- One H1, one lead, one CTA group (primary + secondary). No hero metrics.
- Layered: city image, back-sun glow, front-sun flare, text, scroll cue.

---

## 6. Motion & Interaction

**Engine: GSAP + ScrollTrigger. CSS transitions for micro-interactions.**

### Scroll-Driven Animation
- **Light-line draw:** One ScrollTrigger spanning the entire `.timeline` div. `start: 'top center'`, `end: 'bottom bottom'`, `scrub: 0.6`. Sets `--line-progress` (0→1) on the container; CSS `scaleY(var(--line-progress))` draws the fill.
- **Section reveals:** IntersectionObserver at `rootMargin: '0px 0px -35% 0px'`, `threshold: 0.15`. One-shot: once lit, nodes and cards stay revealed (narrative of traversed path).
- **Fork draw in #misja:** Separate ScrollTrigger on the section. `scrub: 0.5`. Sets `--misja-progress` on the section. SVG `stroke-dashoffset: calc(1 - var(--misja-progress))` draws both branch paths. CSS node dots and card reveals triggered at progress thresholds (35% = branch lit, 85% = merge node lit).
- **Hero sun brightening:** GSAP timeline on `#hero` ScrollTrigger, `scrub: 0.8`. `sunBack` opacity/position + `sunFront` opacity + city brightness all tween together.

### Timing & Easing
- **Standard reveal:** `0.8s cubic-bezier(0.16, 1, 0.3, 1)` — expo-out feel, responsive and premium.
- **Node lighting:** `0.5–0.6s cubic-bezier(0.16, 1, 0.3, 1)`.
- **Hover transitions:** `0.3s ease` or `0.3s cubic-bezier(0.16, 1, 0.3, 1)`.
- **No linear easing anywhere.** No bounce. No elastic.
- **No spring physics library needed** — expo-out cubic-bezier achieves the same weighted feel.

### Perpetual Micro-Loops
- **Head/comet pulse:** 2.4s ease-in-out infinite. Glow Pink expands and contracts.
- **Scroll cue line:** 2.2s cubic-bezier infinite. Draws → holds → fades-translates.
- **Lit nodes:** no additional loop (they are already visually activated; additional pulse would distract).

### Staggered Reveals
- Timeline sections: nodes + cards stagger naturally because IntersectionObserver fires as each section enters viewport.
- Pillar cards (misja): explicit `transition-delay: 0.18s` on second card.
- Hero text lines: CSS `animation-delay` stagger for eyebrow, H1, lead, CTAs. Duration 0.7s, delay increments 0.12s.

### `prefers-reduced-motion: reduce`
- Light line: `--line-progress: 1` set in CSS → fully drawn, no animation.
- All `animation` and non-essential `transition` durations set to `0.001ms`.
- Head/comet: hidden (`display: none`).
- Fork SVG: `stroke-dashoffset: 0` → fully drawn.
- All nodes: lit state applied via CSS (no JS trigger needed).
- Cards: `opacity: 1; transform: none` in CSS.
- Hero parallax (GSAP): `gsap.matchMedia` guard — only runs under `(prefers-reduced-motion: no-preference)`.

---

## 7. Anti-Patterns (Banned)

These are hard bans — if you are about to generate any of the following, rewrite the element.

**Color & Visual**
- No cream / sand / beige / warm-tinted backgrounds. Dark purple is the brand surface.
- No pure black (`#000000`) or pure white (`#FFFFFF`). Use Void Black / Moonlight.
- No gradient text (`background-clip: text` with gradient fill). Use solid Lilac or Cyan for text accents.
- No glassmorphism used decoratively — only where blur communicates material depth (nav post-scroll, content cards).
- No neon outer glow on buttons. The gradient and the subtle card shadow are sufficient.
- No warm "startup orange" or corporate blue anywhere.

**Typography**
- No `Inter` as the chosen font. Sora is the system font.
- No serif fonts anywhere — wrong register for this foundation.
- No uppercase tracked eyebrow above every section. Maximum one per screen; only where it genuinely adds categorical information.
- No numbered section markers (`01 · About / 02 · Process`) as default scaffolding. Numbers are only used if the section IS a numbered sequence.

**Layout**
- No 3-equal-card horizontal grids. Use 2-column, zig-zag, or horizontal scroll.
- No overlapping text over images or other text.
- No centered hero layout (variance > 4 project).
- No `h-screen` / `100vh` for full-height sections. Use `100dvh` or `min-height: 100dvh`.
- No flexbox `calc()` percentage hacks. Use CSS Grid.
- No card-inside-card nesting.

**Motion**
- No scroll-jacking or scroll-speed manipulation.
- No linear easing (`ease: 'linear'` or `transition: all 0.3s linear`).
- No bounce / elastic spring physics.
- No parallax that obscures readable content.
- No animations on `top`, `left`, `width`, `height` — transform and opacity only.
- No heavy animation on mobile (motion budget significantly lower on small screens).

**Content & Copy**
- No emojis anywhere in UI.
- No placeholder copy ("Lorem ipsum", "Acme Corp", "John Doe").
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionary", "Transform your workflow".
- No fake-precision numbers ("99.9% uptime", "10,000+ users") unless verified and real.
- No filler navigation prompts: "Scroll to explore", bouncing chevron, "Swipe down" text.
- No broken image placeholders or generic Unsplash rectangles — use `picsum.photos` seeds or SVG placeholders.
- No `mailto:` forms replaced with real server-side forms. Contact is email-only.

**Accessibility**
- No `outline: none` without a visible focus alternative.
- No color-only state communication (must have shape/text supplement for color-blind users).
- No interactive touch targets smaller than 44px.
- No animations without `prefers-reduced-motion: reduce` fallback.

---

## Stitch Prompting Notes

When generating a **new section** for this site, describe it as:
> "Dark deep-space foundation page section. Background #07040F. [Section name] heading in Sora 700, Moonlight #F7F2FF, clamp(2rem,4vw,3.4rem), letter-spacing -0.04em. Body text in Starlight #D8CFF0, Sora 400, line-height 1.72. Glassmorphism card: background rgba(19,7,45,0.72), border 1px solid rgba(176,136,244,0.18), radius 1.5rem, blur 20px. Primary CTA: gradient #7C4DDB → #D85CC8 → #FF4BF2, white text, radius 0.75rem. No white backgrounds. No warm tones. No generic 3-card grids."

When generating a **hero variation**, add:
> "Left-aligned layout, max-width 600px content block. Layered dark city imagery in background. Small uppercase label 'FUNDACJA LUCID ACADEMY' in Lilac #B088F4, 0.76rem, letter-spacing 0.22em. No centered layout. One primary CTA only."

When generating **motion/animation specs**, reference:
> "GSAP ScrollTrigger scrub-based reveal. Expo-out easing cubic-bezier(0.16,1,0.3,1). Duration 0.8s. Opacity 0→1 + translateY(28px→0). No bounce. No linear. prefers-reduced-motion: all transitions 0.001ms, animations none."
