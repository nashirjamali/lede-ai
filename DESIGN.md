---
name: Lede
description: Editorial workspace for AI content ops — ink, warm paper, and an editor's red pencil.
colors:
  ink: "#0E1320"
  ink-soft: "#2A3F5F"
  accent: "#C24E2E"
  accent-soft: "#E8A090"
  highlight: "#D4A574"
  success: "#1F6B4E"
  danger: "#A32626"
  surface: "#FAF7F2"
  surface-raised: "#F2EDE4"
  surface-inset: "#EAE4D9"
  border: "#D9D0C4"
  text-primary: "#0E1320"
  text-muted: "#6B6560"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "5px"
  lg: "6px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.white}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    height: "40px"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    height: "40px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    height: "40px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "8px 12px"
    height: "40px"
  badge:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  status-badge:
    backgroundColor: "{colors.surface-inset}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
---

# Design System: Lede

## 1. Overview

**Creative North Star: "The Editorial Desk"**

Lede looks like the working surface of a serious publication: warm paper underfoot, deep ink set in type, and a single red editor's pencil that marks only what matters. It is "Notion meets The Economist" — the calm authority of a print masthead carried into a multi-tenant SaaS workspace. The interface reads as a publication, not a control panel: hierarchy and typography do the work that chrome and color do in lesser dashboards.

The system is built on a near-black ink (`#0E1320`) as its primary, a warm cream paper (`#FAF7F2`) as its ground, and a terracotta accent (`#C24E2E`) used with deliberate rarity — the editor's red pencil. Serif display type (Newsreader) gives headings the gravity of a printed page; a humanist sans (Albert Sans) keeps the working UI quiet and legible; a mono (IBM Plex Mono) handles labels, badges, and metadata like a galley slug. Surfaces are flat at rest, lifting only on interaction.

This system explicitly rejects sterile corporate-blue B2B SaaS, single-user "AI magic" toy energy (glowing gradients, emoji marketing), and the generic dark-sidebar-plus-white-content app shell. Warmth comes from the paper ground and the terracotta accent, never from neon, glass, or gradients.

**Key Characteristics:**
- Editorial calm: typography and hierarchy carry attention, not chrome.
- Ink-on-paper foundation with a single, rare terracotta accent.
- Serif display + humanist sans + mono metadata — three voices, clear jobs.
- Flat by default; elevation is a response to state.
- Restrained corners (4–6px) and quiet borders, never glassy or over-rounded.

## 2. Colors

A warm, committed editorial palette: deep ink and cream paper carry nearly every surface, with terracotta reserved as the accent of record.

### Primary
- **Ink** (`#0E1320`): The near-black navy that anchors the system. Primary buttons, the top navigation bar, links, body headings, and the `Published` status. The dominant ink in "ink on paper."
- **Ink Soft** (`#2A3F5F`): A muted slate-navy for primary-button hover, secondary emphasis, and focus rings (`--ring`).

### Secondary
- **Terracotta** (`#C24E2E`): The editor's red pencil. Callouts, the AI badge, the `Review` status, the user avatar, dropcaps, and selection highlight. Used sparingly — its rarity is the signal.
- **Terracotta Soft** (`#E8A090`): A faded terracotta for low-emphasis accent moments (e.g. the `Published` status dot).

### Tertiary
- **Highlight** (`#D4A574`): A warm ochre/tan for the `Draft` status and warm metadata accents. Bridges paper and ink without competing with terracotta.

### Neutral
- **Surface** (`#FAF7F2`): The warm cream page ground. The default `body` background.
- **Surface Raised** (`#F2EDE4`): Slightly deeper paper for hover fills, sidebars, and alternating rows.
- **Surface Inset** (`#EAE4D9`): The deepest paper tone for recessed wells and the `Idea` status.
- **White** (`#FFFFFF`): Reserved for lifted surfaces — cards and inputs sit *above* the paper, not on it.
- **Border** (`#D9D0C4`): The single warm-gray hairline for all borders and dividers.
- **Text Primary** (`#0E1320`): Body copy and headings (shares the ink value).
- **Text Muted** (`#6B6560`): Labels, captions, placeholders, secondary copy.

### Status colors
- **Success** (`#1F6B4E`): The `Approved` status; positive confirmation only.
- **Danger** (`#A32626`): Destructive actions and errors only.

### Named Rules
**The Red Pencil Rule.** Terracotta (`#C24E2E`) is the editor's mark, not decoration. Keep it to ≤10% of any screen — AI affordances, the active accent state, one callout. If two terracotta elements compete for the eye on the same view, one of them is wrong.

**The Lifted-White Rule.** Cards and inputs are `#FFFFFF`; the page is cream (`#FAF7F2`). White is how a surface signals it sits above the paper. Never paint a card the same color as the page.

## 3. Typography

**Display Font:** Newsreader (with Georgia, serif)
**Body Font:** Albert Sans (with system-ui, sans-serif)
**Label/Mono Font:** IBM Plex Mono (monospace)

**Character:** A literary serif for gravity, a warm humanist sans for the working UI, and a mono for machine metadata. The pairing is built on a true contrast axis (serif vs. sans vs. mono), so the three voices never blur into one another. Headings feel printed; the UI feels calm; labels feel like a galley slug.

### Hierarchy
- **Display / Headline** (Newsreader, 600, `1.875rem`+, line-height ~1.15): Page H1s, hero headlines, article titles in the editor. On the landing hero, scale up via `clamp()` but keep the ceiling sane and letter-spacing ≥ -0.04em.
- **Title** (Newsreader, 600, `1.25rem`, tracking -0.01em): Card titles, section headings, editor H2s.
- **Body** (Albert Sans, 400, `0.875rem`, line-height 1.6): Navigation, labels, form inputs, body copy. Cap prose measure at 65–75ch.
- **Label** (IBM Plex Mono, 500, `0.6875rem`, tracking 0.12em, uppercase): Status badges, keyword pills, eyebrows, avatar initials, metadata.

### Named Rules
**The Serif-Heading Rule.** All `h1`–`h3` render in Newsreader via `.font-display`. Sans-serif headings break the editorial voice — never set a heading in Albert Sans.

**The Mono-Metadata Rule.** Mono is for machine facts — statuses, keywords, counts, slugs. Never set running prose or buttons in IBM Plex Mono.

## 4. Elevation

The system is flat by default. Surfaces rest directly on the paper with a quiet warm-gray border (`#D9D0C4`); depth is conveyed by the white-vs-cream tonal step (the Lifted-White Rule) far more than by shadow. Shadows are soft, low-contrast, and tinted with the ink hue (`rgba(14,19,32,...)`), never neutral black. They appear as a response to state — hover lift on cards, the sticky top nav — not as a default decoration.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px rgba(14,19,32,0.04), 0 4px 16px rgba(14,19,32,0.06)`): The resting shadow for cards, raised panels, and dropdowns.
- **Elevated** (`box-shadow: 0 8px 32px rgba(14,19,32,0.1), 0 2px 8px rgba(14,19,32,0.04)`): Hover lift on feature cards, the sticky top nav, featured pricing, and the AI command menu.

### Named Rules
**The Ink-Tinted Shadow Rule.** Every shadow uses the ink hue (`rgba(14,19,32,…)`), never pure black. A neutral-black shadow reads as generic SaaS and fights the warm paper.

## 5. Components

### Buttons
- **Shape:** Gently rounded (6px, `rounded-md`). Heights: 40px default, 32px small, 44px large.
- **Primary:** Ink fill (`#0E1320`), white text, `shadow-sm`, `8px 16px` padding. Hover shifts to Ink Soft (`#2A3F5F`); `:active` scales to 0.98.
- **Accent:** Terracotta fill (`#C24E2E`), white text — reserved for the single most important action on a view (see the Red Pencil Rule).
- **Outline:** White fill, warm border, ink text; hover deepens the border to `ink/20` and fills `surface-raised`.
- **Ghost:** No fill, muted text; hover fills `surface-raised` and darkens text to foreground.
- **Hover / Focus:** All transitions are `200ms`. Focus is a 2px ink-soft ring with a 1px offset (`focus-visible:ring-2 ring-ring ring-offset-1`).

### Cards / Containers
- **Corner Style:** 6px (`rounded-md`).
- **Background:** White (`#FFFFFF`) above the cream page.
- **Border:** 1px warm-gray (`#D9D0C4`).
- **Shadow Strategy:** Resting `Card` shadow; feature/landing cards lift to `Elevated` on hover with a `-translate-y-0.5` nudge.
- **Internal Padding:** 24px (`p-6`); headers use `p-6 pb-4`.
- **Accent variant:** `.lede-card-raised` adds a 2px top gradient rule (terracotta → highlight) for emphasis cards only.

### Inputs / Fields
- **Style:** White fill, 1px warm border, 6px radius, 40px height, `8px 12px` padding (`.lede-input`).
- **Placeholder:** Muted (`#6B6560`) — must still clear 4.5:1 contrast.
- **Focus:** 2px ink-soft ring with 1px offset; no glow.
- **Select:** `.lede-select` adds a custom ink chevron; native appearance removed.

### Badges & Status
- **Badge:** Mono, uppercase, 11px, `rounded-sm`, 1px border, tinted fill keyed to role (default / brand / accent / success / highlight).
- **Status Badge:** Full-pill (`rounded-full`), mono, with a leading colored dot. Each pipeline stage has a dedicated tint + dot — `Idea` (inset/gray), `Brief` (ink-soft), `Draft` (highlight), `Review` (terracotta), `Approved` (success), `Scheduled` (ink), `Published` (solid ink, terracotta-soft dot). Status is always conveyed by **label + dot**, never color alone.

### Navigation
- **Top nav:** Sticky, ink (`#0E1320`) background, `Elevated` shadow, 56px tall, with a light logo. Links are `white/60`, hovering to `white/90` with a subtle `white/5` fill; the active link is solid white on a `white/10` chip. The app uses **top navigation**; a persistent left panel is reserved for article-level pages (editor, review) only.

### Signature Component — AI Command Menu
The product's defining moment: typing `/` in the Tiptap editor opens a floating, categorised command palette (Write / Rewrite / Analyse / Repurpose). Each command shows a one-line description and a token-cost estimate. It rides the `Elevated` shadow and uses the terracotta accent for the active row — fast, smart, effortless, and unmistakably the personality of the product.

### Motion
- **Page enter:** `page-enter 0.6s cubic-bezier(0.22, 1, 0.36, 1)` — a 12px rise + fade for page regions.
- **Stagger:** `.stagger-1` … `.stagger-7` add 60ms increments for sequenced list/section reveals.
- **Easing:** Exponential ease-out only. No bounce, no elastic. Honor `prefers-reduced-motion` with an instant/crossfade alternative.

## 6. Do's and Don'ts

### Do:
- **Do** keep terracotta (`#C24E2E`) to ≤10% of any screen — it's the editor's red pencil (the Red Pencil Rule).
- **Do** set cards and inputs in white (`#FFFFFF`) above the cream page so they read as lifted (the Lifted-White Rule).
- **Do** set every `h1`–`h3` in Newsreader serif via `.font-display`.
- **Do** reserve IBM Plex Mono for statuses, keywords, counts, and metadata only.
- **Do** tint all shadows with the ink hue (`rgba(14,19,32,…)`), never pure black.
- **Do** convey article status with label + dot together, for WCAG 2.1 AA and color-blind users.
- **Do** keep corners restrained (4–6px on cards/inputs; full-pill only on status badges).
- **Do** provide a `prefers-reduced-motion` alternative for `page-enter` and stagger animations.

### Don't:
- **Don't** drift toward sterile corporate-blue B2B SaaS; the identity is warm ink-on-paper, not enterprise navy/cyan.
- **Don't** add single-user "AI magic" toy energy — no glowing gradients, neon accents, glassmorphism, or emoji marketing.
- **Don't** use the generic dark-sidebar + white-content app shell; the app is top-nav-led, with a left panel only on editor/review pages.
- **Don't** write hype-y growth-hacker copy ("10x your content!"); claims are specific and earned.
- **Don't** set headings in Albert Sans or body/buttons in IBM Plex Mono.
- **Don't** paint a card the same cream as the page, or use a pure-black shadow.
- **Don't** over-round (no 24px+ radii on cards) or pair a 1px border with a wide soft drop shadow as decoration.
- **Don't** add gradient text or colored side-stripe borders.
