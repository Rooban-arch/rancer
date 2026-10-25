# Rancer — Digital Solutions Platform (Build · Automate · Grow)

A modern agency website and standalone administration system built for **Rancer**, a digital solutions company that helps businesses build, automate, and grow using modern technology.

---

## 🚀 Live Applications & Ports

| Application | Role | URL | Description |
|---|---|---|---|
| **Public Website** | Customer-Facing Agency Site | [`http://localhost:3000`](http://localhost:3000) | High-converting marketing site, case studies, blog, services, search, contact form. |
| **Admin Console** | Standalone Management App | [`http://localhost:3001`](http://localhost:3001) | Isolated admin application with RBAC, content CRUD, leads CRM, and KPI analytics. |

> **Note on Architecture:** The admin panel is completely isolated from the public website (`rancer.in` vs `admin.rancer.in`). The public website never exposes admin routes, components, or secrets.

---

## 🛠️ Tech Stack

### Public Website (`apps/web`)
- **Framework:** Next.js 14+ (App Router, Server Components & Static Site Generation)
- **Styling:** Tailwind CSS with custom glassmorphic tokens and design system
- **Typography:** Google Fonts Outfit (Display) & Inter (Body)
- **Animations:** Framer Motion with `prefers-reduced-motion` compliance
- **Icons:** Lucide React
- **Validation & UX:** Zod, React Hook Form, Canvas Confetti
- **SEO & Performance:** JSON-LD Structured Data (`Organization`, `WebSite`, `Article`), dynamic `sitemap.xml`, `robots.txt`, OpenGraph metadata

### Admin Console (`apps/admin`)
- **Framework:** React 18 + Vite (Ultra-fast, zero-friction HMR)
- **Routing:** React Router v6 with Protected Routes & Role-Based Access Control
- **Charts & Telemetry:** Recharts (Area charts for traffic & enquiries, Bar charts for categories)
- **Search:** Global Omnisearch Modal (`Ctrl + K`) across leads, services, portfolio, blog
- **CRM:** Full Lead Pipeline management (New, Contacted, In Progress, Converted, Closed) with CSV Export

### Shared Data Layer (`packages/shared-data` & `data.json`)
- Centralized TypeScript schema and seed database
- Bidirectional API synchronization between public lead submissions and admin operations

---

## 🔑 Admin Credentials & Roles

| Role | Email | Password | Access Privileges |
|---|---|---|---|
| **Super Admin** | `admin@rancer.in` | `admin123` | Full administrative control across all settings, users, and content. |
| **Admin** | `priya@rancer.in` | `admin123` | Manage services, categories, portfolio, leads, and site settings. |
| **Editor** | `rahul@rancer.in` | `editor123` | Author and edit blog articles, case studies, and testimonials. |

> *Tip: The login screen also features quick 1-click demo login buttons for instant testing.*

---

## 📂 Project Structure

```
rancer/
├── apps/
│   ├── web/                     # Public Website (Next.js - Port 3000)
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── page.tsx                    # Premium Hero, Services, Our Work, Process, Stats
│   │   │   │   ├── services/page.tsx           # All 8 Digital Services Directory
│   │   │   │   ├── services/[slug]/page.tsx    # Individual Service Deep-Dives
│   │   │   │   ├── our-work/page.tsx           # Dedicated "What We Build" Categories
│   │   │   │   ├── portfolio/page.tsx          # Case Studies Showcase & Tag Filters
│   │   │   │   ├── portfolio/[slug]/page.tsx   # In-Depth Project Case Study Details
│   │   │   │   ├── about/page.tsx              # Story, Mission, Values, Leadership & Stats
│   │   │   │   ├── blog/page.tsx               # Tech, AI & Business Insights Directory
│   │   │   │   ├── blog/[slug]/page.tsx        # SEO Article with JSON-LD Schema
│   │   │   │   ├── contact/page.tsx            # High-Converting Lead Inquiry Form
│   │   │   │   ├── search/page.tsx             # Global Search Results Page
│   │   │   │   ├── api/leads/route.ts          # Contact Form REST Handler
│   │   │   │   ├── api/data/route.ts           # Shared Database REST Handler
│   │   │   │   ├── sitemap.ts                  # Dynamic Sitemap Generator
│   │   │   │   ├── robots.ts                   # Search Crawler Policies
│   │   │   │   └── not-found.tsx               # Custom 404 Experience
│   │   │   └── components/
│   │   │       ├── Header.tsx                  # Sticky Glass Header & Scroll Transitions
│   │   │       ├── MobileMenu.tsx              # Fullscreen Responsive Navigation Drawer
│   │   │       ├── Hero.tsx                    # Premium Workspace Mockup & Parallax
│   │   │       ├── ServiceCard.tsx             # Hover Elevations & Dynamic Glows
│   │   │       ├── ServicesSection.tsx         # 8 Core Capability Cards
│   │   │       ├── WorkCategoriesSection.tsx   # What We Build Category Cards
│   │   │       ├── PortfolioShowcase.tsx       # Filterable Case Study Grid
│   │   │       ├── ProcessSection.tsx          # 4-Step "From Idea to Impact" Dark Section
│   │   │       ├── WhyRancer.tsx               # Value Propositions & Number Counters
│   │   │       ├── TestimonialsSection.tsx     # Responsive Carousel
│   │   │       ├── BlogSection.tsx             # Featured Insights Showcase
│   │   │       ├── CTASection.tsx              # High-Conversion Callout
│   │   │       ├── SearchOverlay.tsx           # Instant Global Omnisearch (Cmd+K)
│   │   │       ├── Footer.tsx                  # Dark Premium Agency Footer
│   │   │       └── BackToTop.tsx               # Smooth Scroll Floating Action
│   │   └── public/images/                      # Brand Assets & Rancer High-Res Logo
│   │
│   └── admin/                   # Standalone Admin Portal (Vite - Port 3001)
│       └── src/
│           ├── components/
│           │   ├── AdminLayout.tsx             # Sidebar Navigation & Top Bar
│           │   └── AdminSearchModal.tsx        # Admin Global Omnisearch
│           ├── context/
│           │   ├── AuthContext.tsx             # Session Management & Role Switching
│           │   └── DataContext.tsx             # CRUD Actions & Sync Layer
│           └── pages/
│               ├── LoginPage.tsx               # Authentication & Demo Role Selectors
│               ├── DashboardPage.tsx           # 10 KPIs, Recharts Charts, Lead Telemetry
│               ├── ServicesManagementPage.tsx  # Services CRUD & Status Toggles
│               ├── WorkCategoriesPage.tsx      # Work Categories & Subcapabilities CRUD
│               ├── PortfolioManagementPage.tsx # Case Studies, Tech Tags & Featured Toggle
│               ├── TestimonialsManagementPage.tsx # Client Reviews & Star Ratings CRUD
│               ├── BlogManagementPage.tsx      # Article Publishing, Status & SEO Meta
│               ├── LeadsManagementPage.tsx     # Full CRM Pipeline & CSV Export
│               └── SettingsPage.tsx            # Global Brand, SEO & Analytics Controls
│
├── packages/
│   └── shared-data/             # Centralized Types & Database Seeds
└── data.json                    # File-Based Database Persistence
```

---

## 💻 Running the Project

From the root directory:

```bash
# Run both the Public Website (port 3000) and Admin Portal (port 3001) concurrently:
npm run dev

# Or run individually:
npm run dev:web    # Starts public website at http://localhost:3000
npm run dev:admin  # Starts admin portal at http://localhost:3001

# Production Build:
npm run build
```
