# Smart Money Academy - Trading Education Platform

## Overview

Smart Money Academy is a modern web application for professional trading education and mentorship. The platform provides courses on Smart Money Concepts, institutional trading strategies, and offers direct mentorship programs. Built with a premium dark theme featuring neon green accents (#0AFF75), it delivers a professional, trading-platform-inspired user experience with smooth animations and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing instead of React Router

**UI & Styling**
- Shadcn/ui component library with Radix UI primitives for accessible, customizable components
- TailwindCSS for utility-first styling with custom design tokens
- Theme system supporting dark/light modes via React Context (`ThemeProvider`)
- Custom color palette defined in CSS variables (HSL-based) for consistent theming
- Framer Motion for declarative animations and transitions
- Premium design system with neon green (#0AFF75) accents on deep black (#000000) backgrounds

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management, caching, and API interactions
- React Hook Form with Zod validation for type-safe form handling
- Context API for global theme and UI state

**Internationalization**
- i18next with react-i18next for multi-language support (English, Russian, Kazakh)
- Browser language detection and localStorage persistence
- JSON-based translation files organized by locale

**Design Patterns**
- Component composition with proper separation of UI components (`/components/ui/`) and page-level components
- Custom hooks for reusable logic (mobile detection, toast notifications)
- Path aliases (@/, @shared/, @assets/) for clean imports

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server with TypeScript
- ESM (ES Modules) architecture throughout the codebase
- Custom Vite middleware integration for development HMR and production static serving

**API Design**
- RESTful endpoints under `/api/*` prefix
- JSON request/response format with validation
- Request logging middleware for API route monitoring
- Error handling with structured error responses

**Storage Layer**
- In-memory storage implementation (`MemStorage`) for development/demo purposes
- Interface-based storage abstraction (`IStorage`) allowing easy swapping to database backends
- Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`
- Schema versioning via Drizzle Kit migrations

**Data Models**
- Users table with username/password authentication structure
- Contact messages table for inquiry submissions
- Zod schemas for runtime validation matching database schema
- Type inference from Drizzle for end-to-end type safety

### Project Structure

**Monorepo Layout**
- `/client` - Frontend React application
  - `/src/pages` - Route-level components
  - `/src/components` - Reusable UI components
  - `/src/i18n` - Translation configuration and locale files
  - `/src/lib` - Utility functions and shared logic
- `/server` - Express backend
- `/shared` - Code shared between client and server (schemas, types)
- `/attached_assets` - Static assets and generated images

**Build & Deployment**
- Development: Concurrent Vite dev server + Express API server
- Production: Vite builds client to `/dist/public`, esbuild bundles server to `/dist`
- Single-command deployment with static serving from Express

### Design System

**Typography**
- Primary: Inter for body text and UI elements
- Accent: Poppins for headings and hero text
- Hierarchy with consistent sizing (4xl-6xl heroes, 2xl-4xl headings, base-lg body)

**Spacing & Layout**
- Tailwind spacing scale (4, 8, 12, 16, 24, 32) for rhythm
- Responsive breakpoints for mobile, tablet, desktop
- Full-width sections with contained content areas

**Visual Effects**
- Neon glows on primary (green) elements via box-shadow
- Smooth transitions and hover states
- Card elevation system with subtle shadows
- Parallax scrolling effects on hero sections
- Animated page transitions with Framer Motion

**Component Patterns**
- Shadcn/ui components customized with project design tokens
- Consistent border radius (sm: 3px, md: 6px, lg: 9px)
- Hover and active state elevations for interactive elements
- Accessible focus states with ring utilities

## External Dependencies

### Frontend Libraries
- **@radix-ui/*** - Headless UI components (accordion, dialog, dropdown, etc.)
- **@tanstack/react-query** - Async state management and data fetching
- **framer-motion** - Animation library for complex interactions
- **i18next** - Internationalization framework
- **react-hook-form** - Form state management with performance optimization
- **zod** - TypeScript-first schema validation
- **lucide-react** - Icon library with tree-shakable imports
- **embla-carousel-react** - Carousel/slider functionality
- **date-fns** - Date manipulation and formatting

### Backend Libraries
- **express** - Web server framework
- **drizzle-orm** - TypeScript ORM for SQL databases
- **@neondatabase/serverless** - Neon PostgreSQL client for serverless environments
- **drizzle-zod** - Zod schema generation from Drizzle tables
- **connect-pg-simple** - PostgreSQL session store (configured but not actively used)

### Build Tools
- **vite** - Frontend build tool and dev server
- **esbuild** - Fast JavaScript bundler for server code
- **typescript** - Type checking and compilation
- **tailwindcss** - CSS framework with JIT compilation
- **postcss** - CSS processing with autoprefixer

### Development Tools
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling
- **@replit/vite-plugin-runtime-error-modal** - Enhanced error display in dev mode
- **tsx** - TypeScript execution for development server

### Database
- **PostgreSQL** via Neon Database (configured)
- Connection via `DATABASE_URL` environment variable
- Drizzle Kit for schema migrations (`/migrations` directory)
- Current implementation uses in-memory storage as fallback

### Asset Management
- Local image assets stored in `/attached_assets/generated_images/`
- No external CDN or image optimization service currently configured
- Vite handles asset bundling and optimization

### Deployment Environment
- Designed for Replit deployment (evidenced by Replit-specific plugins)
- Environment variables: `DATABASE_URL`, `NODE_ENV`, `REPL_ID`
- Production build outputs to `/dist` directory