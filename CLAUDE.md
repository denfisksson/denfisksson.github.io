# Frontend Portfolio

A modern, animated portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, featuring a space-themed design with dynamic animations.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**:
  - GSAP for timeline animations
  - Framer Motion for entrance animations and hover effects
- **Fonts**:
  - Inter (body text)
  - Anton (display/headings)

## Project Structure

```
/app
  - layout.tsx         # Root layout with fonts
  - page.tsx          # Main page composition
  - globals.css       # Global styles and animations

/components
  /animations         # Animation wrapper components
    - FadeIn.tsx
    - SlideIn.tsx
    - ScrollReveal.tsx
  /layout            # Layout components
    - Header.tsx      # Fixed navigation header
    - Footer.tsx      # Site footer
    - VerticalEmail.tsx
  /sections          # Page sections
    - Hero.tsx        # Hero section with space background
    - About.tsx       # About section
    - TechStack.tsx   # Technologies display
    - Experience.tsx  # Work experience timeline
    - Projects.tsx    # Featured projects grid
    - Contact.tsx     # Contact form
  /ui                # UI primitives
    - Button.tsx
    - Badge.tsx
    - Card.tsx
    - StatCard.tsx
    - SectionTitle.tsx

/lib
  - constants.ts     # Site content and data
  - utils.ts        # Utility functions
  - types/content.ts # TypeScript type definitions
```

## Design System

### Color Palette

The portfolio uses a cohesive dark blue space theme:

- **Blacks**: `#0a0a0a` (pure black backgrounds)
- **Dark Blues**:
  - `#0a0f1e` (section backgrounds)
  - `#0d1220` (card backgrounds - muted)
  - `#1a2438` (borders)
- **Blue-Grays**: `#8b9bb0` (secondary text - muted-foreground)
- **Whites**: `#ffffff` (primary text)
- **Accent Yellow**: `#FFE667` (CTAs, highlights)

### Space Theme

The Hero section features an animated space background with:
- **Twinkling stars**: Two layers with different sizes and speeds (4s and 5s cycles)
- **Floating particles**: Space dust effect with varied animation speeds
- **Orbital glows**: Subtle pulsing background elements
- **Gradient flow**: Black to dark blue in Hero, inverted in About section

### Animation Strategy

- **GSAP**: Used for Hero section timeline animations (greeting, title, stats)
- **Framer Motion**: Used for scroll-triggered animations and hover effects
- **CSS Animations**: Used for space effects (twinkle, float, pulse)
- **No Lenis**: Smooth scroll library was removed - using native browser scrolling

### Key Design Decisions

1. **No animation delays on CTAs**: Buttons appear immediately for better UX
2. **Inline contact form**: Modal approach was rejected in favor of inline form
3. **Cursor pointers**: Added to all interactive elements
4. **Hover effects**: Tech badges move up slightly on hover
5. **Responsive design**: Mobile-first approach with breakpoints at 768px, 1024px
6. **Readability**: Dark text on yellow accent color for better contrast

## Customization

### Content

All content is centralized in `/lib/constants.ts`:
- `PERSONAL_INFO`: Name, role, bio, location, email, phone
- `HERO_STATS`: Statistics displayed in hero section
- `TECH_STACK`: Technologies organized by category
- `EXPERIENCES`: Work experience entries
- `PROJECTS`: Featured project portfolio
- `SOCIAL_LINKS`: Social media links

### Color Scheme

Update CSS variables in `/app/globals.css`:
```css
:root {
  --accent: #FFE667;        /* Change accent color */
  --accent-hover: #dfc95a;  /* Change accent hover state */
  --muted-foreground: #8b9bb0; /* Change secondary text color */
}
```

### Animations

Animation speeds can be adjusted:
- Stars: Line 66 and 87 in `Hero.tsx` (currently 4s and 5s)
- Floating particles: Lines 136-144 in `globals.css` (20s, 15s, 10s)
- Pulse glows: Line 148 in `globals.css` (8s)

## Important Notes

- **Git commits**: Only commit when explicitly requested by the user
- **Yellow accent**: When using yellow backgrounds, always use dark text for readability
- **Gradient flow**: Hero and About sections have inverted gradients for visual continuity
- **No destructive actions**: Never force-push, skip hooks, or use --no-verify without explicit permission
- **File operations**: Prefer editing existing files over creating new ones

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Browser Support

Modern browsers with ES6+ support. The portfolio uses CSS custom properties, CSS Grid, and modern JavaScript features.
