---
name: Clinical Precision Light
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3e494a'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6e797b'
  outline-variant: '#bdc9ca'
  surface-tint: '#006973'
  primary: '#00656f'
  on-primary: '#ffffff'
  primary-container: '#00808c'
  on-primary-container: '#f2fdff'
  inverse-primary: '#77d4e1'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#585c5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#717476'
  on-tertiary-container: '#f9fbfd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#93f1fe'
  primary-fixed-dim: '#77d4e1'
  on-primary-fixed: '#001f23'
  on-primary-fixed-variant: '#004f57'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Outfit
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: Courier Prime
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system transitions the "Medical Industrial Data Portal" from a dark-themed monitoring environment to a high-clarity, premium professional workspace. The brand personality is rooted in clinical accuracy, transparency, and high-performance data visualization. 

The aesthetic follows a **Modern Corporate** direction with **Minimalist** influences. It prioritizes information density without visual fatigue, utilizing significant white space and a crisp "laboratory-clean" atmosphere. By moving to a light mode, the focus shifts from "emergency monitoring" to "analytical deep-dives," evoking a sense of trust, institutional reliability, and surgical precision. 

The UI should feel lightweight and responsive, using subtle depth rather than heavy ornamentation to guide the user's eye across complex industrial and medical datasets.

## Colors

The palette is anchored by a refined teal-cyan (`#00808C`), adapted from the original brand color to ensure WCAG AA contrast against white surfaces. This primary color is used for key actions and active states. 

Surface colors utilize a tiered white-to-slate system. The base background is pure white for maximum luminosity, while secondary containers use a very soft off-white to create subtle structural separation. 

Status colors have been reimagined as "Tonal Chips." Instead of high-energy glows, they use soft, desaturated backgrounds with high-contrast dark text. This ensures that while "Very High" alerts are still prominent, they do not cause visual vibration or distract from the surrounding data metrics.

## Typography

This design system exclusively uses **Outfit** for its geometric clarity and modern technical feel. For data-heavy industrial readouts (like serial numbers or sensor logs), **Courier Prime** is introduced as a secondary monospaced font to differentiate raw data from UI labels.

Text colors follow a strict hierarchy: 
- **Primary Text:** Dark Slate (`#0F172A`) for all headlines and primary body copy.
- **Secondary Text:** Slate Gray (`#475569`) for descriptions and supporting info.
- **Tertiary Text:** Light Slate (`#94A3B8`) for disabled states and placeholder text.

On mobile devices, `display-lg` should scale down to `headline-lg` to maintain readability without excessive scrolling.

## Layout & Spacing

The layout is built on a **Fluid 12-Column Grid** for desktop, transitioning to a 4-column grid for mobile devices. It utilizes a base 4px spacing unit to ensure technical precision in component alignment.

Data density is a priority. Grid gutters are fixed at 24px to provide enough breathing room between complex charts and data tables. Margins are generous on desktop (40px) to frame the content, creating a premium "dashboard" feel rather than an edge-to-edge spreadsheet.

In "Deep Analysis" views, the grid can be collapsed into a narrow-gutter mode (12px) to allow for side-by-side comparison of industrial telemetry.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

1. **Floor (Level 0):** Pure White (`#FFFFFF`). Used for the main canvas.
2. **Surface (Level 1):** Off-White (`#F8FAFC`). Used for cards and secondary content areas. These containers use a very fine 1px border in `#E2E8F0` instead of heavy shadows.
3. **Elevated (Level 2):** Applied to active components, modals, or hovering states. Uses a highly diffused, low-opacity shadow (Color: `#0F172A`, Alpha: 4%, Blur: 12px, Y-Offset: 4px).

This approach replaces the high-intensity glows of the previous dark mode with a tactile, paper-like stacking order that feels grounded and professional.

## Shapes

The design system uses a **Rounded** shape language (`0.5rem` base) to soften the industrial nature of the data. 

- **Standard Components:** 8px (0.5rem) radius for buttons, input fields, and small cards.
- **Large Containers:** 16px (1rem) radius for primary dashboard panels.
- **Tags/Status Chips:** Fully rounded (pill-shaped) to distinguish them as discrete metadata units.

The rounding should be consistent across all interactive elements to reinforce the approachable, modern medical-tech identity.

## Components

### Buttons
- **Primary:** Solid Teal (`#00808C`) with White text. No gradients.
- **Secondary:** White background with a 1px Slate border and Teal text.
- **Tertiary:** Ghost style; Slate text that turns Teal on hover.

### Input Fields
Inputs use a white background with a light slate border (`#CBD5E1`). On focus, the border transitions to Primary Teal with a subtle 3px outer halo (20% opacity teal). Labels are always `label-md` and positioned above the field.

### Data Cards
Cards are the primary container. They use the Level 1 surface (`#F8FAFC`) with a 1px border. Headers within cards should have a subtle bottom divider to separate titles from the telemetry data.

### Status Chips
Status chips (Low, High, Very High) must use the semantic palettes defined in the Colors section. They are pill-shaped with `label-md` bold text for immediate categorization.

### Monitoring Lists
Lists should use zebra-striping with `#F1F5F9` for alternating rows. Hovering over a row should trigger a 2px Primary Teal left-border accent to indicate selection/focus.