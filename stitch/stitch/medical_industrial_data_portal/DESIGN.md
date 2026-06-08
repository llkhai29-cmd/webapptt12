---
name: Medical Industrial Data Portal
colors:
  surface: '#0d1515'
  surface-dim: '#0d1515'
  surface-bright: '#333b3b'
  surface-container-lowest: '#080f10'
  surface-container-low: '#151d1e'
  surface-container: '#192122'
  surface-container-high: '#232b2c'
  surface-container-highest: '#2e3637'
  on-surface: '#dce4e4'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dce4e4'
  inverse-on-surface: '#2a3232'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#ebb2ff'
  on-secondary: '#520072'
  secondary-container: '#b600f8'
  on-secondary-container: '#fff6fc'
  tertiary: '#fff6e4'
  on-tertiary: '#3b2f00'
  tertiary-container: '#fed83a'
  on-tertiary-container: '#725e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#f8d8ff'
  secondary-fixed-dim: '#ebb2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#74009f'
  tertiary-fixed: '#ffe173'
  tertiary-fixed-dim: '#e8c423'
  on-tertiary-fixed: '#221b00'
  on-tertiary-fixed-variant: '#554500'
  background: '#0d1515'
  on-background: '#dce4e4'
  surface-variant: '#2e3637'
typography:
  headline-xl:
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
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  label-caps:
    fontFamily: Outfit
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system establishes a high-integrity, futuristic environment for medical insurance data management. It targets administrative professionals and compliance officers who require a balance between high-density data visualization and cognitive ease.

The style is a synthesis of **Glassmorphism** and **Medical-Industrialism**. It utilizes deep, immersive depth through translucent layers to organize complex information hierarchies. The aesthetic evokes a sense of "clinical precision" through sharp neon accents and meticulous detailing, ensuring that the heavy regulatory nature of Circular 12/2026/TT-BTC feels modern and manageable rather than bureaucratic.

## Colors

The palette is anchored by a **Deep Midnight Navy** background to reduce eye strain during prolonged data auditing. 

- **Primary (Cyan):** Used for primary actions, system successes, and "Low Risk" status indicators. It provides a surgical, high-tech glow.
- **Secondary (Violet):** Used for data visualization highlights, specialized categorization, and brand flourishes.
- **Surface Strategy:** Surfaces are semi-transparent glass layers. This allows the deep navy background to maintain a sense of infinite depth while the active content sits on focused, elevated planes.
- **Functional Accents:** Status indicators use high-vibrancy "neon" logic to ensure visibility against dark backgrounds: Amber for high-priority items and Red for critical regulatory failures.

## Typography

This design system utilizes **Outfit** for its geometric clarity and modern professional tone. 

- **Headlines:** Use tighter letter-spacing and heavier weights to create strong visual anchors in a glass-heavy environment.
- **Body Text:** Maintains generous line heights (1.5x) to ensure that dense medical codes and patient data remain legible.
- **Labels:** The `label-caps` style is used for table headers and metadata to provide a "technical" feel reminiscent of industrial equipment readouts.
- **Data Display:** For numerical values in tables, use tabular lining figures to ensure vertical alignment across rows.

## Layout & Spacing

The layout follows a **Fluid 12-Column Grid** with high structural discipline. 

- **Vertical Rhythm:** A strict 8px base unit governs all padding and margins, ensuring a "locked-in" medical-industrial feel.
- **Generous Margins:** Desktop layouts utilize a wide 48px margin to give complex data sets room to breathe, preventing the interface from feeling claustrophobic.
- **Responsive Behavior:** On mobile devices, margins compress to 16px, and secondary dashboard widgets stack vertically, while the primary ingestion zone remains the focal point.
- **Alignment:** All glass panels must align to the grid edges to maintain the "modular" aesthetic of the system.

## Elevation & Depth

Hierarchy is established through **Backdrop Blurs** and **Tonal Layering** rather than traditional black shadows.

- **The Base:** The midnight navy background is the "Floor."
- **Level 1 (Panels):** Glass surfaces with a `20px` backdrop blur and a `12%` white border. These are used for primary content areas.
- **Level 2 (Modals/Popovers):** Higher transparency with a `40px` backdrop blur and a subtle inner glow (`0px 0px 10px rgba(0, 242, 255, 0.1)`) to indicate active focus.
- **Interactivity:** Elements being dragged or hovered should trigger a "glow" elevation, where the border color transitions from muted white to the Primary Cyan or Secondary Violet.

## Shapes

The design system uses a **Rounded** (Level 2) shape language to balance professional rigidity with user-friendliness.

- **Standard Elements:** Buttons, input fields, and small cards use a `0.5rem` (8px) radius.
- **Large Containers:** Main data glass panels and dashboard sections use `1rem` (16px) to soften the large layout blocks.
- **Interactive States:** Indicators and specific "Pill" tags for status use a fully rounded (`rounded-full`) geometry to differentiate them from functional data containers.

## Components

### Glass Cards
The foundational container. Features a 1px solid border (`rgba(255,255,255,0.1)`) and a subtle linear gradient background from top-left to bottom-right to simulate a light source reflecting on glass.

### Glowing Status Indicators
Status is conveyed through both color and light. 
- **Low:** Cyan glow (`0 0 8px rgba(0, 242, 255, 0.5)`).
- **High:** Amber glow.
- **Very High:** Red pulse effect.

### Data Tables
Professional-grade tables with fixed headers. Row hover states should use a glass highlight (`rgba(255,255,255,0.05)`) rather than a solid color. Column headers use the `label-caps` typography style.

### Drag-and-Drop Zones
A dashed border using the Primary Cyan color. When a file is hovered over the zone, the background blur should increase, and a subtle Cyan inner glow should fill the container to signal readiness.

### Buttons
- **Primary:** Solid Cyan with black text for maximum contrast.
- **Secondary:** Ghost style with Cyan border and subtle Cyan text glow.
- **Tertiary:** Violet-based for specialized actions like "Export" or "Analyze."

### Input Fields
Dark, inset backgrounds with a sharp 1px bottom border that illuminates in Cyan when focused.