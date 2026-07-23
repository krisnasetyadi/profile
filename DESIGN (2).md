---
name: Godly Portfolio System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 180px
    fontWeight: '800'
    lineHeight: '0.9'
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 96px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  luxury-margin: 8vw
  section-gap: 12rem
  gutter: 2rem
  container-max: 1800px
---

## Brand & Style

This design system is engineered for high-impact personal branding, merging the raw energy of **Brutalist Minimalism** with the sophisticated execution of award-winning digital portfolios. The personality is unapologetically bold, designed to evoke a sense of "jaw-drop" awe through scale and contrast.

The audience consists of high-tier recruiters, creative directors, and tech visionaries who value both technical precision and avant-garde aesthetic choices. By utilizing oversized typography and generous "luxury" whitespace, the system commands attention while maintaining an air of exclusive, gallery-like refinement. It prioritizes a "developer-centric" precision through monospaced accents, balanced against the expressive, wide-set forms of the primary display typeface.

## Colors

The palette is rooted in an **Obsidian Dark** theme to maximize contrast and depth. 

- **Primary White (#FFFFFF):** Reserved exclusively for high-impact hero headings and primary navigation to ensure maximum legibility against the obsidian base.
- **Electric Blue (#3B82F6):** A high-vibrancy accent used sparingly for interactive states, call-to-action highlights, and subtle glows.
- **Deepest Obsidian (#080808):** The foundational canvas color, creating a "void" effect that allows content to float.
- **Subtle Grays:** Used for 1px structural borders and secondary metadata to maintain a clean, organized hierarchy without distracting from the primary content.

## Typography

Typography is the primary visual driver of this design system. 

- **Syne (Display):** Used for oversized headlines. Its ultra-bold, wide-set nature creates the "jaw-drop" impact. Letter spacing should be tightened for large scales to create a cohesive visual block.
- **Geist (Body):** A highly legible, modern sans-serif that balances the eccentricity of the display type with functional clarity.
- **JetBrains Mono (Metadata):** Used for technical details, skill tags, and small labels. It injects a sense of engineering rigor and developer-centric precision into the artistic layout.

**Rule:** Headings are encouraged to "break" the grid—overlap images or extend beyond standard margins to enhance the brutalist aesthetic.

## Layout & Spacing

This design system employs a **Fluid Grid** with "Luxury Margins." 

The layout relies on extreme whitespace to emphasize individual elements. Standard sections are separated by massive vertical gaps (12rem+) to allow the eye to rest. 

- **Desktop:** A 12-column grid with 8vw side margins. Elements often span unusual column counts (e.g., a 7-column image offset by 1 column) to create asymmetrical tension.
- **Mobile:** Margins shrink to 24px, and typography scales aggressively. 
- **Sectioning:** Thin 1px borders in low-opacity grey (#FFFFFF at 10% opacity) are used to vertically or horizontally divide content blocks, mimicking technical blueprints or architectural schematics.

## Elevation & Depth

Despite its flat brutalist roots, this design system uses depth to highlight interactive elements and "floating" artifacts.

- **Deep Shadows:** Cards and featured project images use soft, ultra-wide shadows (e.g., `0 50px 100px -20px rgba(0,0,0,0.5)`) to pull elements forward from the obsidian background.
- **Electric Glows:** Accent elements and active buttons feature a subtle outer glow using the primary electric blue, creating a "neon-on-black" luminescence.
- **Layering:** High-z-index typography often scrolls *over* images, utilizing `mix-blend-mode: difference` for a sophisticated, award-winning editorial feel.

## Shapes

The shape language is a study in contrasts: **perfectly sharp containers** paired with **organic pill-shaped interactive elements.**

- **Structural Elements:** Section containers, image frames, and grid dividers use a `0` roundedness (sharp) to maintain a brutalist, architectural feel.
- **Interactive Elements:** Buttons, chips, and tags utilize a `pill-shaped` (3) roundedness. This provides a clear affordance that these elements are "touchable" and distinct from the rigid structure of the page.

## Components

### Buttons
Primary buttons are pill-shaped with a solid Electric Blue background. On hover, they emit a subtle glow and the text scales slightly. Secondary buttons use a 1px white border with a transparent center.

### Cards
Project cards utilize the "Deep Shadow" elevation. They are borderless, relying on the contrast between the image and the obsidian background. Metadata is always displayed in monospaced font at the bottom right of the card.

### Marquee
A signature component for skills or keywords. Large-scale Syne text scrolls horizontally at a slow, hypnotic pace. The text is often outlined (transparent fill, 1px white stroke) to minimize visual weight while maintaining scale.

### Input Fields
Minimalist 1px bottom-border only. Labels use monospaced text. On focus, the bottom border transitions to Electric Blue with a faint glow.

### Chips & Tags
Small pill-shaped containers with monospaced text. Used for "Tech Stacks" or "Year" metadata. Backgrounds are low-opacity grey (#FFFFFF at 5%) to stay secondary to the main content.