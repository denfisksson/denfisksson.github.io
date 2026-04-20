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
  /projects
    /[slug]
      - page.tsx      # Dynamic project detail pages

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
    - Hero.tsx        # Hero section with space background and badge-style stats
    - About.tsx       # About section
    - TechStack.tsx   # Technologies display
    - Experience.tsx  # Work experience timeline
    - Projects.tsx    # Featured projects grid with clickable cards
    - Contact.tsx     # Contact form with Web3Forms integration
  /ui                # UI primitives
    - Button.tsx
    - Badge.tsx
    - Card.tsx        # Clickable project cards with image fallback
    - StatCard.tsx    # Supports badge, horizontal, and vertical layouts
    - SectionTitle.tsx

/lib
  - constants.ts     # Site content and data
  - utils.ts        # Utility functions

/types
  - content.ts       # TypeScript type definitions
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

1. **Badge-style hero stats**: Inline badges with muted background instead of grid layout
2. **Clickable project cards**: Entire card is clickable, navigates to project detail page
3. **Project detail pages**: Dynamic routes with "Coming Soon" state for projects without full case studies
4. **Image fallback**: Projects without images show project number (_01, _02) as fallback
5. **No animation delays on CTAs**: Buttons appear immediately for better UX
6. **Inline contact form**: Modal approach was rejected in favor of inline form with Web3Forms
7. **Cursor pointers**: Added to all interactive elements
8. **Hover effects**: Tech badges move up slightly on hover
9. **Responsive design**: Mobile-first approach with breakpoints at 768px, 1024px
10. **Readability**: Dark text on yellow accent color for better contrast

## Customization

### Content

All content is centralized in `/lib/constants.ts`:
- `PERSONAL_INFO`: Name, role, bio, location, email, phone
- `HERO_STATS`: Badge-style statistics displayed in hero section
- `TECH_STACK`: Technologies organized by category
- `EXPERIENCES`: Work experience entries
- `PROJECTS`: Featured project portfolio with slug, image, and hasDetailPage fields
- `SOCIAL_LINKS`: Social media links

**Project fields:**
- `slug`: URL-friendly identifier for detail pages (e.g., "baby-map")
- `image`: Path to project image (empty string shows number fallback)
- `hasDetailPage`: Boolean - shows "Coming Soon" if false, full case study if true

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

## Deployment

### Manual Deployment to GitHub Pages

```bash
# 1. Build the static site
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 npm run build

# 2. Clean old deployment files
rm -rf _next _not-found projects 404.html index.html _not-found.html favicon.ico fonts images .nojekyll

# 3. Copy build output
cp out/index.html out/404.html out/_not-found.html out/favicon.ico out/.nojekyll .
cp -r out/_next out/projects .
[ -d out/fonts ] && cp -r out/fonts . || true
[ -d out/images ] && cp -r out/images . || true

# 4. Remove debug files
find projects -name "*.txt" -delete

# 5. Commit and push
git add -A
git commit -m "Deploy portfolio"
git push origin main
```

**Note:** GitHub Pages serves from the root of the main branch.

## Important Notes

- **Git commits**: Only commit when explicitly requested by the user
- **Yellow accent**: When using yellow backgrounds, always use dark text for readability
- **Gradient flow**: Hero and About sections have inverted gradients for visual continuity
- **No destructive actions**: Never force-push, skip hooks, or use --no-verify without explicit permission
- **File operations**: Prefer editing existing files over creating new ones
- **PostCSS Config**: Never delete `postcss.config.mjs` - required for Tailwind CSS v4

## Features

### Contact Form
- **Web3Forms Integration**: Form submissions sent via Web3Forms API
- **Environment Variable**: `NEXT_PUBLIC_WEB3FORMS_KEY` must be set in `.env.local`
- **Success/Error States**: Visual feedback for form submission status
- **Get your key**: https://web3forms.com (free)

### Project Detail Pages
- **Dynamic Routes**: `/projects/[slug]` generates static pages for each project
- **Coming Soon State**: Projects with `hasDetailPage: false` show placeholder
- **Case Study Template**: Ready for detailed project writeups when `hasDetailPage: true`

### Image Handling
- **Automatic Fallback**: Missing/broken images show project number
- **Error Handling**: `onError` event catches failed image loads
- **State Management**: React state tracks image loading status

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (requires postcss.config.mjs)
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 npm run build

# Output static files to /out directory
# Deploy /out contents to GitHub Pages or hosting service
```

### Required Files
- `postcss.config.mjs`: Required for Tailwind CSS v4 processing
- `.env.local`: Contains `NEXT_PUBLIC_WEB3FORMS_KEY` for contact form

## Browser Support

Modern browsers with ES6+ support. The portfolio uses CSS custom properties, CSS Grid, and modern JavaScript features.
