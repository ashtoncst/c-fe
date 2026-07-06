# Converge Global — Frontend

B2B telecom marketing website for **Converge ICT Solutions** (Philippines), serving enterprise clients seeking fiber internet, data centers, cloud, managed services, and submarine cable infrastructure.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Environment Variables](#environment-variables)
- [Build and Deployment](#build-and-deployment)
- [Project Structure](#project-structure)
- [Pages and Routes](#pages-and-routes)
- [Modules](#modules)
- [Shared Components](#shared-components)
- [State Management](#state-management)
- [API Layer](#api-layer)
- [Chat System Architecture](#chat-system-architecture)
- [SEO Infrastructure](#seo-infrastructure)
- [Security](#security)
- [Design System](#design-system)
- [Static Assets](#static-assets)
- [Configuration Files](#configuration-files)
- [License](#license)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, standalone output) |
| Language | TypeScript 5 (strict mode) |
| UI Library | React 19 |
| Styling | Tailwind CSS 3 + DaisyUI (light theme) |
| Fonts | Funnel Display (headings), DM Sans (body) via Google Fonts |
| Server State | TanStack React Query 5 |
| Client State | Zustand 5 (with localStorage persistence) |
| HTTP Client | Axios (custom instance with interceptors) |
| Real-time | Socket.IO Client (WebSocket for AI chatbot) |
| Email Service | Proxied to backend (`converge-global-be` → Mailgun SMTP) |
| Icons | Lucide React (SVG only) |
| Carousel | Embla Carousel + React Slick |
| Markdown | Marked (for AI chat responses) |
| Notifications | React Hot Toast |
| Deployment | Vercel |

---

## Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn**
- **Backend API** (`converge-global-be`) running on port 3000 (required for cart and AI chat features)

---

## Quick Start

1. Install dependencies with `npm install`
2. Start the development server with `npm run dev`
3. Open **http://localhost:3001** in your browser

The frontend automatically connects to `http://localhost:3000` (backend) with no extra configuration needed for local development.

---

## Environment Variables

No `.env.local` is required for local development. Sensible defaults are provided.

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `http://localhost:3000` | Backend REST API base URL |
| `NEXT_PUBLIC_SOCKET_URL` | `ws://localhost:3000` | WebSocket URL for AI chatbot |
| `NEXT_PUBLIC_SITE_URL` | `https://convergeglobal.com` | Public site URL (used for SEO, sitemaps, canonical URLs) |
| `EMAIL_BACKEND_URL` | (falls back to `NEXT_PUBLIC_API_URL` minus `/api`) | Server-only backend URL the `/api/contact` proxy forwards to. Do NOT prefix with `NEXT_PUBLIC_`. |

Email configuration (recipient inbox, Mailgun credentials, Resend fallback) lives entirely on the backend. See `converge-global-be/docs/email-setup.md`.

For staging or production, create `.env.local` and override the values above. The app auto-corrects WebSocket protocol (`ws://` to `wss://`) based on page protocol to prevent mixed content errors.

---

## Build and Deployment

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server on port 3001 |
| `npm run build` | Create production build (standalone output) |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type-check without emitting files |

The project is deployed to **Vercel**. Environment variables are injected via Vercel project settings. The `next.config.ts` uses `output: "standalone"` for optimized production builds.

---

## Project Structure

| Directory | Purpose |
|---|---|
| `app/` | Next.js App Router — pages, layouts, API routes, error boundaries |
| `modules/` | Feature modules — page-level business logic and UI (34 modules) |
| `components/` | Shared reusable components — layouts, cards, banners, UI elements |
| `constants/` | Site-wide static data — navigation menus, product catalogs, FAQ content |
| `config/` | Application configuration — API defaults, SEO settings, brochure URLs |
| `hooks/` | Custom React hooks — useInView, useCart, useIsClient |
| `libs/` | Utility libraries — Axios instance, localStorage wrapper |
| `lib/` | Next.js utilities — metadata generation |
| `public/` | Static assets — images, icons, brochures, favicons (526+ files) |
| `docs/` | Project documentation |

---

## Pages and Routes

The application serves **60+ pages** across several route groups.

### Core Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero carousel, service showcase, partner logos, testimonials |
| `/about-us` | About Us | Company vision, mission, leadership team, services carousel |
| `/contact-us` | Contact Us | Contact form with validation, Google Maps embed (BGC Taguig) |
| `/data-center` | Data Centers | Carrier-neutral data center services |
| `/our-partner` | Partner Program | Partner ecosystem, logos, testimonials |
| `/ai-assistant` | AI Assistant | Full-page WebSocket-based real-time AI chatbot |
| `/cart` | Shopping Cart | Add/remove items, convert to pricing request (noindex) |
| `/coming-soon` | Coming Soon | Placeholder with email subscription form |

### Our Services (`/our-services/*`)

| Route | Service |
|---|---|
| `/our-services/cable-system` | Subsea and fiber cable solutions for carriers and enterprises |
| `/our-services/dedicated-internet-access` | Exclusive unshared fiber with 100% committed symmetrical speeds |
| `/our-services/content-plus` | High-performance digital ecosystems for hospitality and guest experience |
| `/our-services/data` | High-capacity data connectivity for maximum performance and security |
| `/our-services/secure-internet` | Satellite internet for remote areas with enterprise security |
| `/our-services/fiber-broadband` | High-speed 100% fiber for consistent business-grade performance |
| `/our-services/security` | Cybersecurity services with AI-ready, regulatory-compliant solutions |

### Our Solutions (`/our-solution/*`)

| Route | Solution |
|---|---|
| `/our-solution/digital-infrastructure` | National fiber networks, data centers, cloud-ready platforms |
| `/our-solution/hospitality` | WiFi, IPTV, digital infrastructure for hotels and resorts |
| `/our-solution/distributed-setup` | Multi-site distributed network with unified management |

### Connectivity Solutions (`/cloud-data-centers-and-cyber-security/*`)

These routes use a dynamic `[id]` segment. The only valid ID is `cloud-data-centers-and-cyber-security`.

#### Internet Services

| Route | Product |
|---|---|
| `/{id}/internet` | Internet services hub |
| `/{id}/internet/fiber-broadband` | Cost-efficient, scalable fiber broadband |
| `/{id}/internet/fiber-dedicated` | Exclusive unshared fiber with 100% committed speeds |
| `/{id}/internet/fiber-board` | Fiber broadband for homes and businesses |
| `/{id}/internet/ipt-express` | IP transit for ISPs with full BGP support |
| `/{id}/internet/ix-express` | Private direct IXP access with full IPL capacity ownership |

#### Transport and Backbone Services

| Route | Product |
|---|---|
| `/{id}/transport/metro-ethernet` | Layer 2 connectivity across metro areas with flexible bandwidth |
| `/{id}/transport/optical-transport-network` | Ultra-high capacity, low-latency backbone for carriers and enterprises |
| `/{id}/transport/dc-express` | Dedicated high-speed fiber links to Converge data centers |
| `/{id}/transport/cloud-direct-connect` | Private, high-performance connections to cloud providers |
| `/{id}/transport/cls-express` | Cable landing station connectivity for international traffic |
| `/{id}/transport/ip-vpn` | Secure, scalable multi-site WAN with guaranteed SLAs |
| `/{id}/transport/ethernet-international-private-line` | Dedicated cross-border connectivity for multinational enterprises |
| `/{id}/transport/faster` | FASTER cable system — trans-Pacific high-capacity connectivity |

#### Managed Services

| Route | Product |
|---|---|
| `/{id}/managed-services` | Managed services overview hub |
| `/{id}/managed-services/sd-wan` | SD-WAN with centralized management and intelligent routing |
| `/{id}/managed-services/draas` | Disaster Recovery as a Service with automated failover |
| `/{id}/managed-services/managed-wifi` | Enterprise WiFi with 24/7 monitoring and fast deployment |
| `/{id}/managed-services/managed-surveillance` | AI-powered video monitoring with real-time alerts |

#### Other Services

| Route | Product |
|---|---|
| `/{id}/satellite` | Satellite internet up to 220Mbps via Starlink for Business |
| `/{id}/content` | Content delivery — fast digital distribution with low latency |
| `/{id}/colocation` | Carrier-neutral colocation with redundant power, cooling, and connectivity |
| `/{id}/security` | Managed threat detection, firewall, and compliance frameworks |

### Resources

| Route | Page | Status |
|---|---|---|
| `/resources` | Resources Hub | Redirects to Coming Soon |
| `/resources/faq` | FAQ | Live — searchable, categorized accordion with JSON-LD schema |
| `/resources/press-release` | Press Releases | Redirects to Coming Soon |
| `/resources/event` | Events | Redirects to Coming Soon |

### Special Files

| File | Purpose |
|---|---|
| `app/layout.tsx` | Root layout — HTML wrapper, fonts, metadata, providers, StickyChat, JSON-LD |
| `app/error.tsx` | 500 error boundary with retry and homepage CTAs |
| `app/global-error.tsx` | Global error boundary with contact email fallback |
| `app/not-found.tsx` | 404 page with homepage and contact CTAs |
| `app/robots.ts` | Robots.txt — disallows `/cart`, `/api/`, `/_next/` |
| `app/sitemap.ts` | XML sitemap with 60+ static routes, change frequencies, and priorities |
| `app/providers.tsx` | React Query provider setup |

---

## Modules

The `modules/` directory contains **34 feature modules**, each responsible for a specific page or feature. Modules encapsulate their own components, constants, hooks, and services.

### Page Modules

| Module | Main Export | Powers Route |
|---|---|---|
| `landing-page` | `LandingPage` | `/` |
| `about-us-module` | `AboutUsModule` | `/about-us` |
| `contact-us` | `ContactUsModule` | `/contact-us` |
| `data-center-module` | `DataCenterPage` | `/data-center` |
| `our-partner` | `OutPartnerModule` | `/our-partner` |
| `coming-soon-module` | `ComingSoonModule` | `/coming-soon` |
| `ai-assistant-module` | `AIAssistantModule` | `/ai-assistant` |
| `online-selling-portal-module` | `OnlineSellingPortalModule` | `/cart` |
| `resources-module` | `ResourcesModule`, `FAQPageModule`, `ResourcesEventModule`, `ResourcesPressReleaseModule` | `/resources/*` |

### Service and Solution Modules

| Module | Exports | Category |
|---|---|---|
| `internet` | `InternetPage` | Internet services landing |
| `internet-module` | `FiberDedicatedModule`, `IPTExpressModule`, `IXExpressModule` | Specific internet products |
| `fiber-broadband` | `FiberBroadbandPage` | Fiber broadband service |
| `transport-module` | `IPVPNModule`, `MetroEthernetModule`, `CloudDirectConnectModule`, `CLSExpressModule`, `DCExpressModule`, `FasterModule`, `OpticalTransportNetworkModule`, `EthernetIntenationalPrivateLineModule` | Transport and backbone |
| `manage-service-module` | `ManagedWifiModule`, `SDWanModule`, `DraasModule`, `ManagedSurveillanceModule` | Managed services |
| `managed-services` | `ManagedServicesPage` | Managed services overview |
| `satellite-module` | `SatelliteModule` | Satellite internet |
| `security-module` | `SecurityModule` | Security services detail |
| `security-page` | `SecurityPageRedesign` | Security page redesign |
| `content-module` | `ContentModule` | Content Plus platform |
| `colocation-data-module` | `ColocationDataCenter` | Colocation services |
| `digital-infrastructure` | `DigitalInfrastructurePage` | Digital infrastructure solutions |
| `hospitality` | `HospitalityPage` | Hospitality industry solutions |
| `distributed-setup` | `DistributedSetupPage` | Distributed network setup |
| `service-categories-module` | `ServiceCategories` | All service categories with filtering |

### Our Services Modules

| Module | Main Export | Route |
|---|---|---|
| `our-services-data` | `OurServicesDataPage` | `/our-services/data` |
| `our-services-dia` | `OurServicesDIAPage` | `/our-services/dedicated-internet-access` |
| `our-services-secure-internet` | `OurServicesSecureInternetPage` | `/our-services/secure-internet` |
| `our-services-security` | `OurServicesSecurityPage` | `/our-services/security` |
| `our-services-cable-system` | `OurServicesCableSystemPage` | `/our-services/cable-system` |
| `our-services-content-plus` | `OurServicesContentPlusPage` | `/our-services/content-plus` |

### Common Module Structure

Each module typically contains:
- A main page component that composes the layout (StickyHeader, hero, content sections, footer)
- A `components/` subfolder with module-specific UI components
- A `constants/` subfolder with static data (product info, features, FAQ items)
- Optional `hooks/` and `services/` subfolders for data fetching and business logic

---

## Shared Components

The `components/` directory contains **57+ reusable components** organized by category.

### Layout Components

| Component | Purpose |
|---|---|
| `MainLayout` | App wrapper with scroll direction detection |
| `StickyHeader` | Sticky navigation with glass morphism support, dark logo override |
| `Header` | Main header with logo, navigation menu, and mobile drawer |
| `LightHeader` | Light variant of the header |
| `Footer` | Standard footer with links |
| `FooterDark` | Dark footer variant (used on most pages) |

### Banner Components

| Component | Purpose |
|---|---|
| `BannerBase` | Basic banner with background image |
| `BannerWithText` | Banner with text overlay |
| `BannerWithOverlay` | Banner with color overlay effect |
| `CustomBanner` | Custom banner variant |
| `OurBanner` | Partner and company banner |
| `ResourcesBanner` | Resources section banner |

### Card Components

| Component | Purpose |
|---|---|
| `CardBase` | Basic reusable card |
| `ContentCard` | Blog and content card with image, title, description |
| `InformationCard` | Info card with icon, title, and text |
| `IconInfoCard` | Card with icon on top and info below |
| `CardHightLightWithImage` | Highlighted card with image |
| `CardSlider` | Card carousel component |
| `CardSliderWithCardBase` | Carousel of CardBase components |
| `PromoCard` | Promotional card |
| `PromoCardRelease` | Release and announcement promo |

### UI Components

| Component | Purpose |
|---|---|
| `Button` | Primary button component |
| `ChevronButton` | Button with chevron icon |
| `Tabs` | Tab navigation and switching |
| `AnimateOnScroll` | Scroll-triggered animation wrapper (uses IntersectionObserver) |
| `DotsPagination` | Dot-style pagination |
| `PillPagination` | Pill-style pagination |
| `ServiceCard` | Service and solution card |
| `SolutionCard` | Solution showcase card |
| `TestimonialSection` | Testimonials carousel |
| `TypeWriter` | Streaming text animation effect for AI responses |

### Hero and Section Components

| Component | Purpose |
|---|---|
| `PageHeroWithMobileCard` | Page hero section with mobile card variant |
| `ProductsSection` | Featured products section layout |
| `FAQSection` | Accordion FAQ component |
| `SearchableFAQSection` | FAQ with search and filtering |
| `HelpSection` | Help and support CTA section |
| `HelpCTA` | Call-to-action for help and support |
| `RelatedServicesSection` | Related services carousel |

### Chat Components

| Component | Purpose |
|---|---|
| `StickyChat` | Floating chat button and modal wrapper (global) |
| `ChatWithUsHeader` | Chat widget header with reset and close buttons |
| `ChatWithUsMessage` | Chat message display, input, and suggested topics |

### Modal Components

| Component | Purpose |
|---|---|
| `Modal` | Generic modal wrapper |
| `DownloadModal` | Two-step brochure download modal (form then thank you) |

### Other Components

| Category | Components |
|---|---|
| Buttons | `ButtonBase`, `ButtonSelect` |
| Carousels | `CardManage`, `SecurityCarousel`, `SimpleDot`, `CustomSlider`, `CustomSliderForTransport`, `CustomSliderWithDot` |
| Headers | `HeaderBase` (breadcrumb), `HeaderBaseResponsive`, `MobileDrawer` |
| Icons | `MainLogoIcon`, `MenuIcon`, `CheckIcon`, `UnCheckIcon`, `RemoveIcon` |
| Typography | `BodyText`, `Caption`, `LinkTypography` |
| Providers | `SectionProvider` (session and cart initialization), `withSectionProvider` (HOC wrapper) |

---

## State Management

### Zustand Store — Chat State

The application uses a single Zustand store (`useChatStore`) with localStorage persistence for the chat system. It manages:
- Chat messages (user and bot)
- Current text input
- Active session ID
- Typewriter animation state

Session isolation is enforced — changing the session ID automatically clears old messages to prevent data leakage.

### React Query — Server State

TanStack React Query handles all server-side data fetching and caching:
- **Chat history** — fetched per session ID
- **Cart data** — online selling portal items
- **Mutations** — cart add/remove/clear/convert operations with automatic cache invalidation and toast notifications

### Local Storage

A custom `localStorageUtil` wrapper provides SSR-safe localStorage access for:
- Session ID (`converge_section`)
- Chat message persistence (via Zustand persist middleware)

### Recoil

Recoil is listed as a dependency but is **not actively used** in the current codebase.

---

## API Layer

### Axios Configuration

A centralized Axios instance is configured with:
- **Base URL**: Backend API with `/api` prefix
- **Timeout**: 15 seconds
- **Request interceptor**: Ready for auth token injection (currently disabled)
- **Response interceptor**: Comprehensive error handling with toast notifications for timeouts, 401, 429, 5xx, and network errors

Typed API helper methods are exported: `get`, `post`, `put`, `patch`, and `delete`.

### API Endpoints

**Internal (Next.js API Route):**

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/contact` | POST | Thin proxy that forwards all form submissions (contact, download, newsletter, pricing, inquiry) to the backend's `/api/email` endpoint. No email logic runs here. |

**External (Backend API at localhost:3000):**

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/cart/add` | POST | Add item to cart |
| `/api/cart/{sessionId}` | GET | Get cart items |
| `/api/cart/remove` | DELETE | Remove item from cart |
| `/api/cart/convert` | POST | Convert cart to sales request |
| `/api/cart/clear` | DELETE | Clear entire cart |
| `/api/chat/history/{sessionId}` | GET | Fetch chat history |

---

## Chat System Architecture

The AI chatbot operates through two interfaces:

1. **StickyChat** — A floating chat bubble available globally on every page, opening a compact chat modal
2. **AI Assistant page** (`/ai-assistant`) — A full-page dedicated chat interface

### Data Flow

1. User enters a message in the chat input
2. The message is added to the Zustand store and emitted via Socket.IO (`chat_message` event)
3. The backend streams the response back as individual tokens via `token` events
4. Tokens are accumulated in the `useChatSocket` hook and rendered with a typewriter animation
5. On completion, the `end` event fires and the message is finalized
6. Product recommendations may arrive via a separate `recommendations` event

### WebSocket Configuration

- **Transports**: WebSocket with polling fallback
- **Reconnection**: Enabled with up to 10 attempts and exponential backoff (1s to 5s)
- **Timeout**: 20 seconds
- **Protocol auto-correction**: Automatically switches between `ws://` and `wss://` based on page protocol

### Features

- Suggested topics (Internet Plans, Data Center, Security, Global Solutions)
- Quick reply options
- Typing indicator during AI response
- Markdown bold syntax support
- XSS protection via HTML escaping in the TypeWriter component
- Session-scoped message history with localStorage persistence

---

## SEO Infrastructure

Every page has complete metadata including title, description, Open Graph tags, Twitter Cards, and canonical URLs.

### Components

| Component | Purpose |
|---|---|
| `config/seo.ts` | Site-wide SEO defaults — site name, base URL, default OG image, Twitter handle |
| `lib/metadata.ts` | `generatePageMetadata()` utility — standardized metadata generator for all pages |
| `components/JsonLd.tsx` | Reusable JSON-LD structured data component |
| `app/sitemap.ts` | XML sitemap with 60+ routes, change frequencies, and priority scores |
| `app/robots.ts` | Robots.txt — allows all pages, disallows `/cart`, `/api/`, `/_next/` |

### Structured Data

- **Organization** and **WebSite** JSON-LD schemas in the root layout
- **FAQPage** JSON-LD schema on the FAQ page
- All pages generate canonical URLs and Open Graph metadata automatically

### Search Engine Exclusions

- `/cart` — `noindex, nofollow` via layout metadata
- `/contact-us` — `noindex, nofollow` via layout metadata
- `/api/*` and `/_next/*` — blocked in robots.txt

---

## Security

### HTTP Security Headers

The `next.config.ts` enforces the following headers on all routes:

| Header | Value |
|---|---|
| X-Frame-Options | `SAMEORIGIN` (prevents clickjacking) |
| X-Content-Type-Options | `nosniff` (prevents MIME-sniffing) |
| Referrer-Policy | `strict-origin-when-cross-origin` |
| Strict-Transport-Security | `max-age=31536000; includeSubDomains` (HSTS for 1 year) |
| Permissions-Policy | Disables camera, microphone, geolocation, payment, USB, interest-cohort |

### Content Security Policy

- Scripts restricted to `self` and `unsafe-inline` (plus Google static assets)
- Images allow `self`, `data:`, `blob:`, and `https:`
- Fonts restricted to `self` and Google Fonts
- Connections allow `self`, `https:`, and `wss:` (WebSocket)
- Frames allow Google Maps embeds only
- Development mode additionally allows `unsafe-eval` for Turbopack compatibility

### Application Security

- **Input sanitization**: All contact form inputs are sanitized to escape `&`, `<`, `>`, `"`, `'`
- **Validation**: Server-side re-validation of all form fields with regex patterns and character limits
- **XSS protection**: TypeWriter component escapes HTML in AI responses before rendering
- **Session isolation**: Changing chat sessions clears old messages
- **No sensitive data logging**: All console.log statements exposing URLs or session IDs have been removed

---

## Design System

### Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `con-custom-green` | `#038F8D` | Primary brand color — CTAs, links, borders, accents |
| `con-custom-green-bold` | `#024645` | Dark teal — headings, emphasis |
| `con-custom-green-light` | `#1C404E` | Light teal variant |
| `con-custom-teal` | `#49D7D1` | Accent teal |
| `con-custom-purple` | `#8638E5` | Accent purple |
| `con-custom-gray` | `#EFEFEF` | Light gray backgrounds |
| `con-custom-text-black` | `#444444` | Body text |
| `con-custom-text-gray` | `#9F9FA9` | Muted text |
| `con-custom-gray-input` | `#F5F5F5` | Input backgrounds |
| `con-custom-gray-border` | `#9F9FA9` | Borders |
| `con-custom-gray-background-chat` | `#EBEDF0` | Chat background |

### Typography Scale

**Body sizes**: 12px (xs), 14px (sm), 15px (base), 16px (md), 18px (lg) — all weight 300

**Display sizes**: 24px (xs), 30px (sm), 40px (md), 48px (lg) — all weight 400

**Caption**: 11px, weight 400

### Custom Shadows

- `con-custom-shadow` — Subtle card shadow
- `con-custom-shadow-image` — Image card shadow
- `con-custom-shadow-menu` — Navigation menu shadow
- `con-custom-shadow-menu-hover` — Menu hover state shadow

### Responsive Breakpoints

| Breakpoint | Width | Usage |
|---|---|---|
| `xs` | 320px | Small mobile (custom) |
| `sm` | 640px | Large mobile |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Ultra-wide |

Container max width: `max-w-[1920px]` with centered padding.

### Icons

Lucide React is the primary icon library (SVG only). Additional custom SVG icons are stored in `public/icons/` and `assets/icons/`.

---

## Static Assets

The `public/` directory contains **526+ files** organized as follows:

| Directory | Contents |
|---|---|
| `public/icons/` | 73 files — brand logos, UI icons, partner logos (Bitdefender, Fortinet, Huawei, Cisco, Microsoft, Dell, HPE, Avaya, TP-Link, Zoom, Arista, ZTE, and more), favicon, OG image |
| `public/images/` | 75+ subdirectories — organized by module and service (about-us, ai-assistant, cablesystems, clouddirectconnect, colocation, connectivity, contact-us, datacenter, draas, fiberdedicated, internet, landing, managedsurveillance, managedwifi, metroethernet, ourpartner, resources, satellite, sdwan, security, selling, and more) |
| `public/brochures/` | Placeholder PDF — actual brochure URLs are configured in `config/brochures.ts` pointing to 52 product PDFs |

---

## Configuration Files

| File | Purpose |
|---|---|
| `next.config.ts` | Next.js configuration — standalone output, security headers, CSP, HSTS |
| `tailwind.config.ts` | Tailwind CSS — custom colors, shadows, typography scale, DaisyUI plugin |
| `tsconfig.json` | TypeScript — strict mode, ES2017 target, `@/*` path alias |
| `eslint.config.js` | ESLint — Next.js core web vitals + TypeScript rules |
| `postcss.config.mjs` | PostCSS — Tailwind CSS processing |
| `audit-ci.json` | Security audit — checks moderate, high, and critical vulnerabilities |
| `config/defaults.ts` | API and WebSocket URL defaults with helper functions |
| `config/seo.ts` | SEO defaults — site name, base URL, OG image, Twitter handle |
| `config/brochures.ts` | Centralized brochure download URLs — 52 PDFs across all product categories |

---

## License

Proprietary — Converge ICT Solutions
