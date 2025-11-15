# Smart Money Academy - Design Guidelines

## Design Approach
**Reference-Based**: Premium trading platforms (Binance, TradingView) + Modern SaaS aesthetics (Linear, Vercel) with neon-accented dark UI.

## Color Palette
- **Primary Black**: #000000 (deep backgrounds)
- **Neon Green**: #0AFF75 (CTAs, accents, glows)
- **Secondary Dark**: #0f0f0f, #121212 (cards, sections)
- **Light Mode**: White backgrounds with green accents
- **Text**: White (dark mode), Dark gray (light mode)

**Visual Treatment**: Neon glows on green elements, soft shadows, smooth gradients, premium depth

## Typography
- **Primary**: Inter (body, UI elements)
- **Accent**: Poppins (headings, hero text)
- **Hierarchy**: 
  - Hero: 4xl-6xl, bold
  - Headings: 2xl-4xl, semibold
  - Body: base-lg, regular
  - Small: sm-base, medium

## Layout System
**Spacing**: Tailwind units of 4, 8, 12, 16, 24, 32 for consistent rhythm

## Page Structures

### 1. Home Page
**Hero Section** (100vh):
- Large hero image: Trader at monitors with trading charts, candles, exchange screens
- 70% dark overlay + soft blur
- Centered headline: "Smart Money Academy"
- Subheadline: "Professional Trading Education & Mentorship"
- Two CTAs: "Join Academy" (neon green, glowing), "View Courses" (outline)
- Animated candlestick or chart graphics

**Sections** (full-width, py-24):
- Benefits grid (3 columns, animated cards with icons)
- Smart Money Concepts explainer (2-column: text + visual)
- Course topics cards (4-column grid, hover effects)
- Student testimonials (carousel, 3 visible)
- Course preview (featured courses grid)
- Final CTA (centered, neon green glow)

### 2. Courses Page
**Header**: Full-width with trading chart background (blurred, darkened)
**Catalog**: 
- Filter sidebar (left, sticky)
- Course cards grid (2-3 columns)
- Each card: Image, title, description, duration, difficulty, CTA
- Hover: scale + glow effect
**Categories**: Market Structure, Liquidity, Order Flow, Risk Management, Psychology

### 3. Mentorship Page
**Hero**: Futuristic dark background with neon lines, light glow
**Sections**:
- Program description (centered, max-width)
- Benefits grid (3 columns)
- Before/After progress sliders (student results)
- Application form (centered, card design)

### 4. About Us
**Background**: Futuristic neon lines, subtle glow
**Sections**:
- Mission statement (centered, large text)
- Team grid (photo cards with hover reveal)
- Company history timeline
- All photos: premium professional style

### 5. Contact
**Layout**: 2-column (form + info)
**Form**: Card design, neon green submit button
**Right side**: Telegram/WhatsApp buttons, contact details
**Bottom**: Interactive map integration

## Component Library

### Navigation
- Fixed header with blur background
- Logo left, nav center, language/theme switchers right
- Mobile: Hamburger menu with slide-in animation

### Cards
- Rounded corners (lg-xl)
- Subtle borders
- Hover: lift + neon glow
- Dark background (#0f0f0f)

### Buttons
- Primary: Neon green background, black text, glow effect, blur background on hero
- Secondary: Outline neon green, transparent fill
- No custom hover states (use default)

### Language Switcher
- Flag icons + language code
- Dropdown or toggle style
- Smooth fade animation

### Theme Switcher
- Animated toggle (moon/sun icons)
- Smooth color transitions
- Persist in localStorage

## Images

### Required Background Images
1. **Home Hero**: Trader at multiple monitors showing trading charts, candles, exchange screens - 70% dark overlay, soft blur
2. **About Section**: Futuristic dark background with neon green lines, subtle glow effect
3. **Courses Header**: Trading candlestick charts with liquidity zones, market structure - darkened overlay
4. **Mentorship/Community**: Team of traders working together - neutral darkening

All images: High resolution, adaptive, properly darkened for text readability

## Animations (Framer Motion)
- **On Scroll**: Fade-in + slide-up for sections
- **Parallax**: Background images move slower than content
- **Cards**: Scale 1.05 on hover, pulse glow
- **Hero Text**: Typing effect animation on load
- **Neon Elements**: Gentle glow pulse
- **Transitions**: 0.3s ease-in-out standard

## Responsive Behavior
- **Desktop**: Multi-column grids, full parallax
- **Tablet**: 2-column layouts, reduced spacing
- **Mobile**: Single column, stacked navigation, touch-friendly CTAs

## Multi-Language Content
**Supported**: English (EN), Russian (RU), Kazakh (KZ)
**Key Translations**:
- EN: "Professional Trading Education Based on Smart Money Concepts"
- RU: "Профессиональное обучение трейдингу на основе Smart Money Concepts"
- KZ: "Smart Money қағидалары бойынша кәсіби трейдинг оқыту"

## Accessibility
- High contrast (neon green on black)
- Focus states with neon outline
- ARIA labels for language/theme switchers
- Keyboard navigation support