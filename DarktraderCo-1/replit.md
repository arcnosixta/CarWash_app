# Smart Money Academy - Trading Education Platform

## Overview

Smart Money Academy is a comprehensive web-based trading education platform focused on teaching institutional-level trading concepts. The application provides course curriculum, mentor profiles, student success stories, pricing information, community features, and contact functionality. Built as a full-stack TypeScript application, it features a dark-themed, professional UI inspired by premium trading platforms like darktrader.co.

**Primary Purpose**: Sell trading courses, mentorship programs, and provide access to a private trading community while educating users on Smart Money trading concepts including market structure, liquidity, order flow, and risk management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**:
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server
- React Router (Wouter) for client-side navigation
- Single-page application (SPA) architecture

**UI Component System**:
- Radix UI primitives for accessible, unstyled components
- Shadcn/ui component library following the "new-york" style preset
- Tailwind CSS for utility-first styling with custom design tokens
- Dark-first design approach with HSL-based color system
- Custom CSS variables for theme consistency

**State Management**:
- TanStack Query (React Query) for server state management
- React Hook Form with Zod validation for form state
- Local component state with React hooks

**Design System**:
- Typography: Inter font family for modern, professional appearance
- Spacing: Tailwind's 4/8/12/16/24 unit system
- Layout: Responsive grid and flexbox patterns
- Components: Accordion, Dialog, Form, Card, Navigation, Toast notifications

### Backend Architecture

**Server Framework**:
- Express.js as the HTTP server framework
- TypeScript for type safety across the stack
- RESTful API design pattern
- Middleware-based request processing

**API Structure**:
- `/api/register` - POST endpoint for course registrations
- `/api/registrations` - GET endpoint to retrieve all registrations
- `/api/contact` - POST endpoint for contact form submissions
- `/api/contacts` - GET endpoint to retrieve all contacts

**Data Validation**:
- Zod schemas for runtime type validation
- Drizzle-Zod integration for database schema validation
- Centralized error handling with validation error formatting

**Development Features**:
- Request/response logging middleware
- Response time tracking
- Hot module replacement via Vite in development

### Data Storage

**Database Technology**:
- PostgreSQL as the primary database
- Neon Database serverless PostgreSQL integration
- Drizzle ORM for type-safe database queries

**Schema Design**:
```
registrations table:
- id (UUID, primary key)
- name (text)
- email (text)
- format (text) - course format selection
- createdAt (timestamp)

contacts table:
- id (UUID, primary key)
- name (text)
- email (text)
- message (text)
- createdAt (timestamp)
```

**Storage Pattern**:
- Abstract storage interface (IStorage) for flexibility
- In-memory storage implementation for development/testing
- Production uses Drizzle ORM with PostgreSQL connection
- Connection pooling via @neondatabase/serverless

### Project Structure

```
client/               # Frontend application
  src/
    components/       # Reusable React components
      ui/            # Shadcn/ui component library
    pages/           # Page-level components
    hooks/           # Custom React hooks
    lib/             # Utility functions
server/              # Backend application
  index.ts           # Express server entry point
  routes.ts          # API route definitions
  storage.ts         # Data storage abstractions
  vite.ts            # Vite development server setup
shared/              # Shared code between client/server
  schema.ts          # Drizzle database schemas and Zod validators
```

### Authentication & Authorization

Currently not implemented - the application is open access. Future implementation would likely use:
- Session-based authentication
- Express session middleware
- PostgreSQL session store (connect-pg-simple package already included)

### Build & Deployment

**Development**:
- `npm run dev` - Runs Vite dev server with HMR and Express API
- TypeScript compilation in watch mode
- Environment variables via `.env` file

**Production Build**:
- `npm run build` - Vite builds frontend to `dist/public`
- esbuild bundles backend to `dist/index.js`
- `npm start` - Runs production Express server serving static files

**Type Checking**:
- `npm run check` - TypeScript compiler in noEmit mode
- Validates types without generating output

## External Dependencies

### UI Component Libraries
- **Radix UI**: Comprehensive suite of accessible component primitives (@radix-ui/react-*)
- **Shadcn/ui**: Pre-styled component collection built on Radix UI
- **Lucide React**: Icon library for UI elements
- **React Icons**: Additional icon sets (Discord, Telegram, Twitter, YouTube)

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant generation
- **clsx & tailwind-merge**: Conditional class name utilities

### Form Management
- **React Hook Form**: Performant form state management
- **@hookform/resolvers**: Validation resolver integrations
- **Zod**: Schema validation library

### Data Fetching
- **TanStack Query**: Server state management with caching
- **Custom fetch wrapper**: Abstraction over native fetch API

### Database & ORM
- **Drizzle ORM**: Type-safe SQL query builder
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-zod**: Zod schema generation from Drizzle schemas
- **drizzle-kit**: Database migration and push tooling

### Routing
- **Wouter**: Lightweight client-side router (1.5KB alternative to React Router)

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Static type checking
- **esbuild**: Fast JavaScript bundler
- **tsx**: TypeScript execution for development

### Session Management (Prepared)
- **connect-pg-simple**: PostgreSQL session store for Express
- Note: Session middleware not currently active

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit code mapping
- **@replit/vite-plugin-dev-banner**: Development environment indicator

### Image Assets
- Static images stored in `attached_assets/generated_images/`
- Imported via Vite alias `@assets`
- Used for hero backgrounds, mentor headshots

### Font Loading
- Google Fonts: Inter font family
- Preconnected for performance optimization