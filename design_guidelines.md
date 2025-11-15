# Design Guidelines: Smart Money Trading Education Platform

## Design Approach
Reference-based approach inspired by darktrader.co - a premium dark-themed trading education platform with high-tech aesthetic, minimal but impactful visual design targeting professional traders.

## Core Design Principles
1. **Dark-First Design**: Establish credibility and focus through sophisticated dark UI
2. **Trading Professional**: High-tech, data-driven aesthetic without gaming elements
3. **Clear Hierarchy**: Guide users through educational journey with strong visual structure
4. **Trust & Authority**: Design conveys expertise, success, and professional mentorship

## Typography System

**Font Families:**
- Primary: Inter or similar modern sans-serif (headings, UI)
- Secondary: System fonts for body content (readability)

**Type Scale:**
- Hero Headlines: text-5xl to text-7xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Subheadings: text-xl to text-2xl, font-medium
- Body: text-base to text-lg, font-normal
- Small Text: text-sm, font-normal

## Layout System

**Spacing Primitives:** Tailwind units 4, 8, 12, 16, 24
- Component padding: p-8, p-12
- Section spacing: py-16, py-24
- Element gaps: gap-4, gap-8

**Container Strategy:**
- Full-width hero sections with max-w-7xl inner containers
- Content sections: max-w-6xl
- Text-heavy content: max-w-4xl

## Page-Specific Layouts

### Homepage
- Full-width hero with background image/video showing trading charts/workspace
- Mission statement section (centered, max-w-4xl)
- Benefits grid (3 columns desktop, 1 mobile)
- Course modules preview (stacked cards with icons)
- CTA section with enrollment form

### Course Curriculum Page
- Module cards with expandable sections
- Each module: icon, title, description, learning outcomes
- Progressive disclosure pattern for detailed content
- Sidebar navigation for module sections

### Mentors Page
- Card grid (2-3 columns)
- Each mentor: photo, name, role, bio, achievements
- Statistics badges (years experience, students taught)

### Case Studies Page
- Testimonial cards with student photos
- Before/after stats prominently displayed
- Quote-focused layout with profit figures highlighted
- Video testimonials embedded where applicable

### Pricing Page
- Comparison table or card layout (3 tiers)
- Feature checkmarks, pricing, CTA buttons
- Highlight "most popular" tier
- Payment form integration

### Community Page
- Discord/Telegram preview with member count
- Channel descriptions in grid format
- Benefits list with icons
- Join CTA with prominent button

## Component Library

**Navigation:**
- Sticky dark header with logo left, menu center/right
- Mobile hamburger menu
- CTA button in header (ghost style on dark)

**Cards:**
- Dark background with subtle border
- Hover state: slight elevation, border accent
- Consistent padding: p-8
- Icons at top, title, description, optional CTA

**Forms:**
- Dark input fields with light borders
- Floating labels or placeholder text
- Primary button for submit
- Inline validation feedback

**Buttons:**
- Primary: Bright accent (blue/green), bold text
- Secondary: Outlined style
- Sizes: Large for CTAs, medium for forms
- Blurred background when overlaying images

**Data Display:**
- Stats counters: Large numbers, descriptive labels
- Progress indicators for course completion
- Module completion checkmarks

## Visual Elements

**Images:**
- Hero section: Full-width background showing trading setup, charts, or professional workspace
- Mentor photos: Professional headshots, circular or rounded-square crop
- Student success: Real photos with testimonial cards
- Course modules: Icon illustrations or small graphics

**Image Descriptions:**
- Hero: Professional trading workspace with multiple monitors showing charts, dark ambient lighting
- Mentors: Professional headshots with neutral backgrounds
- Community: Screenshots of Discord/Telegram channels (blurred for privacy)

**Icons:**
- Use Heroicons via CDN for consistency
- Module icons: Chart, target, shield, growth symbols
- Feature benefits: Checkmarks, arrows, metrics

## Animations & Interactions

**Scroll Effects:**
- Fade-in sections on scroll (subtle, professional)
- Counter animations for statistics (odometer effect)
- Parallax on hero background (minimal movement)

**Interactive Elements:**
- Course timer countdown (if enrollment deadline)
- Live student counter
- Module hover states with slight lift
- Smooth scroll to anchor links

## Accessibility
- High contrast text on dark backgrounds
- Minimum 4.5:1 contrast ratio
- Focus states on all interactive elements
- Semantic HTML structure
- Form labels and ARIA attributes

## Mobile Responsiveness
- Single column layouts on mobile
- Collapsible navigation menu
- Touch-friendly button sizes (min 44px)
- Optimized images for mobile bandwidth
- Stacked pricing cards instead of side-by-side

## SEO Optimization
- Semantic heading hierarchy (h1 → h6)
- Meta tags: title, description, Open Graph
- Alt text for all images
- Structured data for courses/pricing
- Keywords: "Smart Money trading," "trading education," "mentorship"