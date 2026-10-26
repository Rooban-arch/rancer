export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  badge: string;
  color: string;
  features: string[];
  deliverables: string[];
  technologies: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  order: number;
  enabled: boolean;
}

export interface WorkCategory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
  stats: string;
  subcategories: string[];
  order: number;
  enabled: boolean;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  heroImage: string;
  galleryImages: string[];
  problem: string;
  solution: string;
  features: string[];
  results: { metric: string; label: string }[];
  technologies: string[];
  designProcess: { title: string; desc: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  featured: boolean;
  liveUrl?: string;
  year: string;
  order: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  projectType: string;
  enabled: boolean;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featuredImage: string;
  readingTime: string;
  publishedAt: string;
  tags: string[];
  status: 'published' | 'draft' | 'scheduled';
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Converted' | 'Closed';
  createdAt: string;
  notes?: string;
}

export interface SiteSettings {
  brandName: string;
  tagline: string;
  positioning: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  address: string;
  socialLinks: {
    linkedin: string;
    instagram: string;
    facebook: string;
    twitter: string;
    whatsapp: string;
    github?: string;
  };
  stats: {
    clients: string;
    projects: string;
    experience: string;
    satisfaction: string;
  };
  seoDefaults: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Admin' | 'Editor';
  avatar: string;
  lastLogin: string;
}

// Initial Data Seeds
export const initialSiteSettings: SiteSettings = {
  brandName: 'Rancer',
  tagline: 'Build · Automate · Grow',
  positioning: 'We Build Digital Solutions for Modern Businesses.',
  contactEmail: 'rooban@rancer.in',
  contactPhone: '+91 96006 83605',
  whatsappNumber: '+91 96006 83605',
  address: '',
  socialLinks: {
    linkedin: 'https://linkedin.com/company/rancer',
    instagram: 'https://instagram.com/rancer_tech',
    facebook: 'https://facebook.com/rancertech',
    twitter: 'https://x.com/rancer_tech',
    whatsapp: 'https://wa.me/919600683605'
  },
  stats: {
    clients: '20+',
    projects: '30+',
    experience: '1+',
    satisfaction: '99%'
  },
  seoDefaults: {
    title: 'Rancer — Build · Automate · Grow | Digital Solutions for Modern Businesses',
    description: 'Rancer is a premier digital solutions and growth partner helping modern businesses build high-performance websites, custom web & mobile apps, smart AI automation, and scalable management systems.',
    keywords: [
      'website development',
      'web development company',
      'mobile app development',
      'AI solutions',
      'business automation',
      'digital solutions',
      'branding',
      'digital marketing',
      'business management systems'
    ],
    ogImage: '/images/og-rancer.jpg'
  }
};

export const initialServices: ServiceItem[] = [
  {
    id: 'srv-1',
    slug: 'website-development',
    title: 'Website Development',
    shortDescription: 'Modern, fast and responsive websites that turn visitors into customers.',
    fullDescription: 'We craft high-converting, lightning-fast digital storefronts and marketing websites tailored to modern businesses. From corporate portals to dynamic web apps, we blend aesthetic excellence with surgical technical performance.',
    icon: 'Globe',
    badge: 'Core Solution',
    color: 'from-slate-900 to-blue-900',
    order: 1,
    enabled: true,
    features: [
      'Next.js & React Ultra-Fast Architecture',
      'Mobile-First Responsive Layouts',
      'Core Web Vitals 95+ Score Guarantee',
      'Automated SEO Schema & Semantic HTML',
      'CMS Integration (Sanity, Strapi, Custom)'
    ],
    deliverables: [
      'Custom Design System & Figma Prototype',
      'Production-Ready Source Code',
      'Speed & SEO Audit Reports',
      'Content Management Training'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    process: [
      { step: '01', title: 'Discovery & Wireframing', desc: 'Analyzing user journeys, conversion funnels, and brand identity.' },
      { step: '02', title: 'UI/UX Interactive Design', desc: 'Crafting responsive prototypes with smooth micro-interactions.' },
      { step: '03', title: 'Engineering & Integration', desc: 'Writing modular code with state-of-the-art frameworks.' },
      { step: '04', title: 'Performance Audit & Launch', desc: 'Conducting lighthouse audits, CDN caching, and domain rollout.' }
    ],
    faqs: [
      { question: 'How long does a custom website build take?', answer: 'Typically 2 to 4 weeks depending on feature scope, custom animations, and integrations.' },
      { question: 'Will my website be search engine friendly?', answer: 'Yes! We embed automated JSON-LD schemas, OpenGraph tags, sitemaps, and optimized semantic typography.' }
    ]
  },
  {
    id: 'srv-2',
    slug: 'web-mobile-applications',
    title: 'Web & Mobile Applications',
    shortDescription: 'Custom apps for web and mobile that solve real problems and deliver great user experiences.',
    fullDescription: 'Full-stack cross-platform and native engineering designed for rapid scalability. We engineer high-load web applications and intuitive iOS/Android mobile apps that keep users engaged.',
    icon: 'Smartphone',
    badge: 'Scalable Systems',
    color: 'from-slate-900 to-slate-800',
    order: 2,
    enabled: true,
    features: [
      'iOS & Android Cross-Platform via Flutter / React Native',
      'Enterprise Backend APIs & GraphQL',
      'Real-Time WebSockets & Push Notifications',
      'Offline-First Data Synchronization',
      'Bank-Grade Encryption & Authentication'
    ],
    deliverables: [
      'Mobile App Store Submissions (App Store & Play Store)',
      'Web Dashboard & Admin Portal',
      'REST / GraphQL API Documentation',
      'Comprehensive QA Test Suites'
    ],
    technologies: ['React Native', 'Flutter', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    process: [
      { step: '01', title: 'System Architecture', desc: 'Designing data schemas, API contracts, and user security models.' },
      { step: '02', title: 'Interactive UX Prototyping', desc: 'Validating usability through high-fidelity design systems.' },
      { step: '03', title: 'Agile Development Sprints', desc: 'Bi-weekly deliverables with continuous integration pipelines.' },
      { step: '04', title: 'Store Deployment & Support', desc: 'Publishing to Apple App Store and Google Play with zero downtime.' }
    ],
    faqs: [
      { question: 'Do you build native or cross-platform apps?', answer: 'We specialize in cross-platform (Flutter & React Native) for cost efficiency, and native Swift/Kotlin when extreme hardware access is required.' },
      { question: 'Can you handle store compliance and approvals?', answer: 'Yes, we manage end-to-end App Store and Google Play submissions, privacy manifests, and guidelines compliance.' }
    ]
  },
  {
    id: 'srv-3',
    slug: 'ai-solutions',
    title: 'AI Solutions',
    shortDescription: 'Intelligent solutions to automate tasks, analyse data and create new opportunities.',
    fullDescription: 'Integrate artificial intelligence seamlessly into your everyday operations. From custom LLM autonomous agents and intelligent document processing to predictive business analytics.',
    icon: 'BrainCircuit',
    badge: 'Next-Gen',
    color: 'from-slate-900 to-blue-900',
    order: 3,
    enabled: true,
    features: [
      'Custom LLM Agents & Retrieval-Augmented Generation (RAG)',
      'Intelligent 24/7 AI Customer Support Assistants',
      'Automated Document OCR & Data Extraction',
      'Predictive Churn & Sales Forecasting Models',
      'Private AI Deployment on Secure Infrastructure'
    ],
    deliverables: [
      'Fine-Tuned or RAG-Engineered Agent APIs',
      'Admin Monitoring & Analytics Console',
      'Enterprise Guardrails & Safety Filters',
      'Training & Operational Playbooks'
    ],
    technologies: ['OpenAI', 'Gemini', 'LangChain', 'Python', 'Pinecone', 'FastAPI'],
    process: [
      { step: '01', title: 'AI Feasibility & Data Audit', desc: 'Assessing your internal data pipelines and ROI potential.' },
      { step: '02', title: 'RAG Pipeline & Prompt Engineering', desc: 'Indexing company knowledge bases securely with vector search.' },
      { step: '03', title: 'Safety Guardrails & Integration', desc: 'Hardening responses and connecting to internal CRM/ERP endpoints.' },
      { step: '04', title: 'Monitoring & Continuous Tuning', desc: 'Tracking accuracy, token usage, and user satisfaction metrics.' }
    ],
    faqs: [
      { question: 'Will our proprietary data be kept private?', answer: 'Absolutely. We enforce zero-data-retention agreements and can deploy models into private VPCs.' },
      { question: 'What ROI can we expect from AI automation?', answer: 'Most of our clients observe 60-80% reduction in customer response times and thousands of hours saved per month.' }
    ]
  },
  {
    id: 'srv-5',
    slug: 'branding-design',
    title: 'Branding & Design',
    shortDescription: 'Build a strong identity with creative designs that connect with your audience.',
    fullDescription: 'We give businesses an unforgettable visual voice. From logo design and comprehensive brand books to digital UI/UX design systems and marketing collaterals.',
    icon: 'Palette',
    badge: 'Visual Identity',
    color: 'from-blue-900 to-slate-900',
    order: 4,
    enabled: true,
    features: [
      'Distinctive Logo & Mark Creation',
      'Complete Brand Guidelines & Typography Rules',
      'High-Fidelity UI/UX Design in Figma',
      'Custom Iconography & Micro-Illustrations',
      'Social Media Templates & Presentation Decks'
    ],
    deliverables: [
      'Vector Logo Suite (SVG, EPS, PNG, PDF)',
      'Brand Identity Guidebook (Colors, Fonts, Spacing)',
      'Figma Component Library & Token System',
      'Print & Digital Ready Asset Packs'
    ],
    technologies: ['Figma', 'Adobe Creative Suite', 'Tokens Studio', 'Spline 3D', 'After Effects'],
    process: [
      { step: '01', title: 'Brand Discovery & Moodboards', desc: 'Uncovering brand personality, competitors, and target demographics.' },
      { step: '02', title: 'Concept Ideation', desc: 'Exploring 3 distinct visual directions with logo iterations.' },
      { step: '03', title: 'Systematization', desc: 'Refining typography scales, color palettes, and component styles.' },
      { step: '04', title: 'Asset Handover', desc: 'Delivering full vectors, design tokens, and guideline manuals.' }
    ],
    faqs: [
      { question: 'Do we get full copyright and vector source files?', answer: 'Yes, 100% full commercial ownership and all original vector assets are handed over upon completion.' }
    ]
  },
  {
    id: 'srv-6',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Grow your reach, generate leads and boost your brand online.',
    fullDescription: 'Data-driven growth strategies that convert eyeballs into loyal revenue. We coordinate search engine optimization (SEO), hyper-targeted PPC ad campaigns, content marketing, and email funnels.',
    icon: 'TrendingUp',
    badge: 'Growth Engine',
    color: 'from-slate-900 to-blue-950',
    order: 5,
    enabled: true,
    features: [
      'Technical & On-Page SEO Architecture',
      'Google Ads & Meta Paid Advertising Funnels',
      'High-Converting Landing Page Optimization',
      'Lifecycle Email Marketing & Retention Campaigns',
      'Real-Time Attribution & ROI Dashboards'
    ],
    deliverables: [
      'SEO Keyword & Opportunity Roadmap',
      'Ad Creative Copy & Visual Assets',
      'Live Performance Analytics Dashboard',
      'Monthly ROI & Growth Review Reports'
    ],
    technologies: ['Google Ads', 'Meta Business', 'SEMrush', 'GA4', 'Klaviyo', 'HubSpot'],
    process: [
      { step: '01', title: 'Market & Competitor Audit', desc: 'Identifying highest-leverage keywords and audience gaps.' },
      { step: '02', title: 'Funnel & Creative Setup', desc: 'Building landing pages, writing ad copies, and configuring tracking.' },
      { step: '03', title: 'Campaign Execution & A/B Testing', desc: 'Launching ads with multi-variant testing on hooks and audiences.' },
      { step: '04', title: 'Scaling & Margin Optimization', desc: 'Allocating ad spend to top-performing segments for maximum ROAS.' }
    ],
    faqs: [
      { question: 'How quickly can we see results?', answer: 'Paid ads generate leads within days; organic SEO compound growth typically flourishes over 3 to 6 months.' }
    ]
  },
  {
    id: 'srv-7',
    slug: 'business-management-systems',
    title: 'Business Management Systems',
    shortDescription: 'Custom systems to manage your operations, team and customers efficiently.',
    fullDescription: 'Tailor-made internal software engineered precisely around your operations. We build bespoke ERP, CRM, inventory tracking, role-based portals, and billing platforms.',
    icon: 'LayoutDashboard',
    badge: 'Enterprise Operations',
    color: 'from-slate-800 to-slate-900',
    order: 6,
    enabled: true,
    features: [
      'Custom ERP & Resource Planning Portals',
      'Role-Based Access Control (RBAC) & Audit Trails',
      'Real-Time Warehouse & Inventory Management',
      'Automated Invoicing & Multi-Currency Billing',
      'Custom KPI Dashboards & Executive Reporting'
    ],
    deliverables: [
      'Tailored Cloud Web Application',
      'Database Backup & Recovery Protocols',
      'Employee Role Onboarding Guides',
      'SLA-Backed Technical Support'
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'AWS', 'Docker'],
    process: [
      { step: '01', title: 'Operational Deep-Dive', desc: 'Interviewing department heads and mapping current operational workflows.' },
      { step: '02', title: 'Custom Database Architecture', desc: 'Structuring relational schemas with high integrity and query speed.' },
      { step: '03', title: 'Modular Feature Rollout', desc: 'Deploying modules incrementally to ensure zero disruption to operations.' },
      { step: '04', title: 'Team Training & Migration', desc: 'Migrating historical data safely and training team members.' }
    ],
    faqs: [
      { question: 'Why choose custom software over generic off-the-shelf SaaS?', answer: 'Custom systems eliminate monthly per-seat licensing fees, perfectly match your unique workflow, and scale without software limits.' }
    ]
  }
];


export const initialWorkCategories: WorkCategory[] = [
  {
    id: 'cat-1',
    slug: 'websites',
    title: 'Websites',
    subtitle: 'High-Impact Web Experiences',
    description: 'Business websites, landing pages and e-commerce websites designed for speed, brand authority, and maximum conversion rates.',
    icon: 'Globe',
    badge: 'High Conversion',
    stats: '50+ Delivered',
    subcategories: ['Corporate Websites', 'SaaS Landing Pages', 'E-Commerce Portals', 'Microsites'],
    order: 1,
    enabled: true
  },
  {
    id: 'cat-2',
    slug: 'web-mobile-apps',
    title: 'Web & Mobile Apps',
    subtitle: 'Cross-Platform Digital Products',
    description: 'Android, iOS and cross-platform applications with fluid gestures, responsive layouts, and robust offline capabilities.',
    icon: 'Smartphone',
    badge: 'Cross-Platform',
    stats: '35+ Launched',
    subcategories: ['iOS & Android Apps', 'Cloud Web Apps', 'Customer Portals', 'PWA Solutions'],
    order: 2,
    enabled: true
  },
  {
    id: 'cat-3',
    slug: 'ai-solutions',
    title: 'AI Solutions',
    subtitle: 'Autonomous Systems & Intelligence',
    description: 'AI chatbots, automated document parsers, ML analytics systems and intelligent integrations that work 24/7.',
    icon: 'BrainCircuit',
    badge: 'Intelligent Tech',
    stats: '20+ Models Deployed',
    subcategories: ['AI Customer Support', 'RAG Knowledge Bases', 'Predictive Analytics', 'Computer Vision'],
    order: 3,
    enabled: true
  },
  {
    id: 'cat-4',
    slug: 'business-automation',
    title: 'Business Automation',
    subtitle: 'Zero Manual Friction',
    description: 'Workflow tools, CRM, ERP and custom automation systems that save hundreds of operational hours every month.',
    icon: 'Cpu',
    badge: 'High Efficiency',
    stats: '25k+ Hours Saved',
    subcategories: ['Webhook Pipelines', 'Accounting Automation', 'CRM Integrations', 'Inventory Sync'],
    order: 4,
    enabled: true
  },
  {
    id: 'cat-5',
    slug: 'branding-design',
    title: 'Branding & Design',
    subtitle: 'Creative Brand Identities',
    description: 'Logos, UI/UX, social media assets, design systems, and visual identity guides that elevate market presence.',
    icon: 'Palette',
    badge: 'Award-Winning',
    stats: '40+ Identities',
    subcategories: ['Brand Strategy', 'Logo & Identity Design', 'UI/UX Design Systems', 'Marketing Collateral'],
    order: 5,
    enabled: true
  },
  {
    id: 'cat-6',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'ROI-Driven Growth Campaigns',
    description: 'SEO, social media, advertising campaigns, and content strategies that reliably expand your market reach and generate leads.',
    icon: 'TrendingUp',
    badge: 'High ROI',
    stats: '3.8x Avg ROAS',
    subcategories: ['Technical SEO', 'Performance Ads (PPC)', 'Content Marketing', 'Conversion Optimization'],
    order: 6,
    enabled: true
  }
];


export const initialProjects: PortfolioProject[] = [
  {
    id: 'proj-1',
    slug: 'aurora-ecommerce-store',
    title: 'Aurora E-Commerce Store',
    client: 'Aurora Luxe Living',
    category: 'Websites',
    categorySlug: 'websites',
    shortDescription: 'Ultra-fast Next.js modern e-commerce storefront with headless Shopify integration and 3D product visualization.',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
    ],
    problem: 'Aurora Luxe had an outdated legacy storefront experiencing 6.5s load times, 68% cart abandonment on mobile, and zero modern filtering capabilities.',
    solution: 'Engineered a headless Next.js App Router storefront with edge caching, sub-second product search, dynamic variant switching, and a 1-click checkout flow.',
    features: [
      'Sub-second page transitions with Next.js edge caching',
      'Headless Shopify GraphQL backend',
      'Algolia instant fuzzy search & multi-facet filters',
      'Integrated Apple Pay & Google Pay express checkouts'
    ],
    results: [
      { metric: '+210%', label: 'Mobile Conversion Rate' },
      { metric: '0.8s', label: 'LCP Page Load Time' },
      { metric: '99.9%', label: 'Uptime During Flash Sales' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API', 'Algolia', 'Stripe'],
    designProcess: [
      { title: 'User Journey Mapping', desc: 'Eliminated 4 unnecessary checkout steps to streamline mobile purchases.' },
      { title: 'Design System in Figma', desc: 'Crafted clean minimalist product cards with subtle glassmorphic elements.' },
      { title: 'Performance Engineering', desc: 'Optimized WebP images and dynamic imports to achieve a 98/100 Lighthouse score.' }
    ],
    testimonial: {
      quote: 'Rancer transformed our e-commerce platform into an aesthetic powerhouse. Our conversion rate more than doubled in the first month post-launch!',
      author: 'Marcus Vance',
      role: 'Head of Digital, Aurora Luxe',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    featured: true,
    year: '2026',
    order: 1
  },
  {
    id: 'proj-2',
    slug: 'pulse-fitness-tracking-app',
    title: 'Pulse Fitness Tracking App',
    client: 'PulseFit Technologies',
    category: 'Web & Mobile Apps',
    categorySlug: 'web-mobile-apps',
    shortDescription: 'Cross-platform mobile workout companion with live biometric tracking, workout builders, and audio coaching.',
    heroImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510519138161-58444cbfdb73?auto=format&fit=crop&w=800&q=80'
    ],
    problem: 'PulseFit needed a unified mobile application for iOS and Android that could read Bluetooth heart rate monitors in real-time with zero audio interruption.',
    solution: 'Built a sleek Flutter mobile application with native Bluetooth low-energy bridges, offline workout logging, and cloud synchronization.',
    features: [
      'Real-time Bluetooth Low Energy (BLE) sensor pairing',
      'Dynamic calorie and VO2 max estimation algorithms',
      'Haptic feedback and custom audio cue synthesizers',
      'Social challenges and community leaderboards'
    ],
    results: [
      { metric: '150k+', label: 'Active Monthly Athletes' },
      { metric: '4.9 ★', label: 'Average App Store Rating' },
      { metric: '42%', label: 'Increase in 30-Day Retention' }
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'PostgreSQL', 'WebSockets'],
    designProcess: [
      { title: 'Dark Mode First UI', desc: 'Engineered high-contrast typography specifically for dimly lit gym environments.' },
      { title: 'Gesture-Driven Logging', desc: 'Large tap targets and swipe controls for rapid rep recording between sets.' }
    ],
    testimonial: {
      quote: 'The polish and responsiveness of the Pulse app blew our expectations away. Rancer delivered ahead of schedule and with zero bugs.',
      author: 'Elena Rostova',
      role: 'Co-Founder & CEO, PulseFit',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    featured: true,
    year: '2026',
    order: 2
  },
  {
    id: 'proj-3',
    slug: 'nexus-inventory-management-system',
    title: 'Nexus Inventory Management System',
    client: 'Nexus Supply Global',
    category: 'Business Management Systems',
    categorySlug: 'business-management-systems',
    shortDescription: 'Enterprise warehouse inventory management platform handling multi-location stock, automated replenishment, and barcodes.',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80'
    ],
    problem: 'Manual spreadsheets across 8 distribution centers caused stockouts, shipping delays, and an estimated $300k yearly in lost merchandise.',
    solution: 'Designed and deployed a tailored cloud ERP system with instant barcode scanner support, automated re-order thresholds, and courier integration.',
    features: [
      'Multi-warehouse real-time SKU tracking',
      'Automated purchase order generation via vendor APIs',
      'Handheld Bluetooth barcode scanning web app',
      'Comprehensive audit trails with staff attribution'
    ],
    results: [
      { metric: '99.8%', label: 'Inventory Record Accuracy' },
      { metric: '-85%', label: 'Reduction in Out-of-Stock Events' },
      { metric: '$320k', label: 'Annual Cost Savings' }
    ],
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Docker', 'AWS'],
    designProcess: [
      { title: 'Warehouse On-Site Audit', desc: 'Observed staff picking orders to design a high-speed one-thumb interface.' },
      { title: 'Fail-Safe Architecture', desc: 'Implemented offline local queueing for spotty warehouse Wi-Fi zones.' }
    ],
    testimonial: {
      quote: 'Nexus transformed our supply chain overnight. Our pickers fulfill orders 3 times faster and inventory errors are practically zero.',
      author: 'David Thorne',
      role: 'COO, Nexus Supply Global',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    featured: true,
    year: '2025',
    order: 3
  },
  {
    id: 'proj-4',
    slug: 'solis-cafe-brand-identity',
    title: 'Solis Artisan Cafe Brand Identity',
    client: 'Solis Roasters',
    category: 'Branding & Design',
    categorySlug: 'branding-design',
    shortDescription: 'Full visual identity, packaging design system, bespoke typography, and cafe interior signage for an artisan roastery.',
    heroImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
    ],
    problem: 'Solis was opening flagship branches in competitive metropolitan markets and needed a cohesive, upscale visual identity that felt artisanal yet modern.',
    solution: 'Crafted an elegant brand ecosystem with embossed earth-tone coffee packaging, gold foil coffee cards, responsive logo variations, and cafe signage.',
    features: [
      'Geometric custom logomark and wordmark',
      'Biodegradable bag packaging mockups and die-lines',
      'Staff uniforms, menu boards, and loyalty pass designs',
      'Complete brand book and vector asset suite'
    ],
    results: [
      { metric: '4x', label: 'Retail Bag Sales in Month 1' },
      { metric: '12k+', label: 'Organic Instagram Mentions' },
      { metric: '3 Awards', label: 'Packaging Design Recognitions' }
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Photoshop', '3D Blender Mockups'],
    designProcess: [
      { title: 'Organic Minimalist Direction', desc: 'Blended warm terracotta and charcoal palettes reflecting roasted coffee notes.' }
    ],
    testimonial: {
      quote: 'Customers constantly photograph our coffee bags and cups for social media. Rancer created a brand that customers genuinely fall in love with.',
      author: 'Maya Lin',
      role: 'Founder, Solis Roasters',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    featured: true,
    year: '2025',
    order: 4
  },
  {
    id: 'proj-5',
    slug: 'strata-business-analytics-dashboard',
    title: 'Strata Executive Business Dashboard',
    client: 'Strata Capital Partners',
    category: 'Web Apps',
    categorySlug: 'web-mobile-apps',
    shortDescription: 'Real-time financial analytics portal aggregating private equity metrics, valuation models, and automated reporting.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    problem: 'Partners spent hours consolidating messy Excel sheets across 24 portfolio companies every Friday before board meetings.',
    solution: 'Constructed an executive command dashboard with dynamic data visualizations, automated PDF board deck generation, and real-time cash run rates.',
    features: [
      'Interactive financial charting with custom date comparisons',
      'Automated one-click PDF board summary export',
      'Multi-tenant permissions for portfolio CFOs',
      'Instant IRR and DCF automated valuation calculations'
    ],
    results: [
      { metric: '10 hrs/wk', label: 'Saved Per Partner' },
      { metric: 'Real-Time', label: 'Portfolio Financial Visibility' },
      { metric: '100%', label: 'Adoption Rate Across 24 Companies' }
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'FastAPI', 'PostgreSQL'],
    designProcess: [
      { title: 'Data Density vs Clarity', desc: 'Crafted clean glassmorphic summary cards allowing instant macro scanning without visual clutter.' }
    ],
    testimonial: {
      quote: 'Strata has become our central nervous system. We can analyze portfolio health in 30 seconds rather than waiting days for reports.',
      author: 'Jonathan Sterling',
      role: 'Managing Partner, Strata Capital',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    featured: true,
    year: '2026',
    order: 5
  },
  {
    id: 'proj-6',
    slug: 'synapse-ai-customer-support-system',
    title: 'Synapse AI Customer Support Agent',
    client: 'Synapse Telecom Services',
    category: 'AI Solutions',
    categorySlug: 'ai-solutions',
    shortDescription: 'Autonomous 24/7 AI support agent resolving technical troubleshooting queries with seamless human escalation.',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    ],
    problem: 'Synapse faced 45-minute customer wait times during peak support hours, resulting in negative NPS scores and burned-out support agents.',
    solution: 'Engineered an intelligent RAG-powered support agent trained on technical documentation, billing APIs, and network status feeds.',
    features: [
      'Sub-2 second conversational answers across Web, WhatsApp & Email',
      'Live account lookup and billing dispute verification',
      'Smart sentiment analysis with instant VIP human escalation',
      'Multilingual support across 14 global languages'
    ],
    results: [
      { metric: '74%', label: 'First-Contact Autonomous Resolution' },
      { metric: '< 5 sec', label: 'Average Response Time' },
      { metric: '+38 pts', label: 'Net Promoter Score (NPS) Jump' }
    ],
    technologies: ['OpenAI GPT-4o', 'LangChain', 'Pinecone Vector DB', 'Python', 'WebSockets', 'Next.js'],
    designProcess: [
      { title: 'Empathy-Driven Dialogues', desc: 'Engineered conversational safety guardrails to ensure warm, patient, and precise tone.' }
    ],
    testimonial: {
      quote: 'Synapse AI transformed our customer support from a bottleneck into a competitive advantage. It handles 50,000 queries a week flawlessly.',
      author: 'Priya Sharma',
      role: 'VP of Customer Experience, Synapse',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    featured: true,
    year: '2026',
    order: 6
  }
];


export const initialTestimonials: Testimonial[] = [];


export const initialBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'future-of-business-automation-2026',
    title: 'The Future of Business Automation in 2026: From Static Scripts to Agentic Workflows',
    excerpt: 'Discover how modern enterprises are transitioning from basic trigger-action scripts to autonomous AI agent workflows that think, adapt, and self-heal.',
    content: `
### The Great Shift: Autonomous Workflows

In previous years, business automation meant static triggers: "When an email arrives, append a row to a spreadsheet." While useful, these rigid workflows broke whenever an unexpected format or edge case appeared.

In 2026, automation has transformed into **agentic orchestration**. Autonomous digital workers can interpret unstructured contracts, converse with suppliers, resolve billing ambiguities, and execute end-to-end tasks with human-in-the-loop oversight.

### Why Modern Businesses Are Upgrading

1. **Self-Healing Integrations**: Modern API connectors detect schema changes and adapt without breaking production queues.
2. **Context-Aware Processing**: AI systems read email tone and prioritize high-value customer inquiries instantly.
3. **Massive Operational Leverage**: Lean teams of 10 people can achieve output that historically required 100 specialists.

### Practical Steps to Automate Your Business Today

- **Audit Repetitive Tasks**: Document any task done more than 5 times a week by any team member.
- **Connect Disconnected Silos**: Integrate your CRM, accounting software, and customer support via secure webhooks.
- **Deploy Incremental Agents**: Begin with low-risk tasks such as receipt reconciliation before moving to mission-critical operations.
    `,
    category: 'Automation',
    author: {
      name: 'Arjun Mehta',
      role: 'Chief Technology Architect',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    readingTime: '5 min read',
    publishedAt: 'October 20, 2026',
    tags: ['AI', 'Automation', 'Operations', 'Productivity'],
    status: 'published',
    seo: {
      title: 'The Future of Business Automation in 2026 | Rancer Insights',
      description: 'Explore how autonomous AI agents and self-healing workflows are revolutionizing enterprise business automation in 2026.',
      keywords: ['business automation', 'AI workflows', 'enterprise automation', 'digital solutions']
    }
  },
  {
    id: 'blog-2',
    slug: 'nextjs-15-enterprise-web-architecture',
    title: 'Architecting Enterprise Web Applications for Sub-Second Speeds and 99+ Core Web Vitals',
    excerpt: 'A comprehensive technical blueprint on leveraging Next.js server components, edge caching, and modern bundling for lightning-fast digital experiences.',
    content: `
### Speed as a Revenue Multiplier

Google research shows that every 100ms improvement in page load speed boosts conversion rates by up to 8%. Yet, many corporate websites remain bogged down with bulky legacy scripts and unoptimized assets.

### Modern Architecture Principles

- **Server-Driven Rendering**: Moving computation to the edge minimizes client JavaScript payloads.
- **Intelligent Asset Streaming**: Prioritizing Largest Contentful Paint (LCP) elements ensures instantaneous visual feedback.
- **Zero-Layout Shift Typography**: Preloading variable web fonts eliminates jarring reflows during page load.

### Building for Scale

When building for global audiences, caching content at edge locations across the globe reduces latency to single-digit milliseconds. At Rancer, this engineering philosophy is baked into every website and application we construct.
    `,
    category: 'Web Development',
    author: {
      name: 'Sarah Chen',
      role: 'Lead Frontend Engineer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    readingTime: '6 min read',
    publishedAt: 'October 15, 2026',
    tags: ['Next.js', 'Performance', 'Web Development', 'React'],
    status: 'published',
    seo: {
      title: 'Architecting Enterprise Web Applications | Rancer Insights',
      description: 'Learn how to build sub-second web applications with Next.js, server components, and modern edge performance practices.',
      keywords: ['Next.js architecture', 'web performance', 'Core Web Vitals', 'frontend development']
    }
  },
  {
    id: 'blog-3',
    slug: 'why-custom-software-beats-generic-saas',
    title: 'Why Growing Businesses Are Replacing Generic SaaS with Tailored Internal Systems',
    excerpt: 'The hidden costs of "SaaS sprawl" and how bespoke business management systems deliver 10x operational efficiency and long-term cost savings.',
    content: `
### The Trap of SaaS Sprawl

The average mid-sized business pays for 40 to 60 distinct software subscriptions. Aside from astronomical monthly licensing bills, teams waste valuable hours copying data between incompatible platforms.

### The Power of Custom Management Systems

1. **Exact Operational Fit**: Software designed around how *your* company wins, not a generic compromise.
2. **Zero Per-Seat Fees**: Scale your workforce from 20 to 200 without doubling your software bill.
3. **Data Sovereignty**: Keep proprietary customer records and financial ledgers strictly in your own private cloud database.

By investing in custom management software, forward-thinking founders gain a proprietary asset that increases enterprise valuation.
    `,
    category: 'Business',
    author: {
      name: 'Vikram Sengupta',
      role: 'Managing Director & Strategist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    readingTime: '4 min read',
    publishedAt: 'October 08, 2026',
    tags: ['Business Management', 'Custom Software', 'SaaS', 'ROI'],
    status: 'published',
    seo: {
      title: 'Why Custom Software Beats Generic SaaS | Rancer Insights',
      description: 'Analyze why leading businesses are replacing fragmented SaaS tools with cohesive custom business management systems.',
      keywords: ['custom software', 'business management systems', 'ERP', 'SaaS comparison']
    }
  },
  {
    id: 'blog-4',
    slug: 'ai-customer-service-implementation-guide',
    title: 'Deploying Enterprise AI Customer Support: A Step-by-Step Implementation Guide',
    excerpt: 'How to build, guardrail, and deploy an AI customer support agent that resolves 70%+ of customer tickets with zero hallucinations.',
    content: `
### Beyond the Simple Chatbot

First-generation chatbots frustrated users with rigid question trees. Modern AI support utilizes Retrieval-Augmented Generation (RAG) to understand complex natural language, query internal databases, and take action securely.

### Essential Guardrails

- **Strict Source Grounding**: Forcing the model to cite specific company policy documents before replying.
- **Sentiment Triggers**: Instantly routing frustrated or high-value accounts to senior human representatives.
- **Action Verification**: Requiring secondary confirmation before changing account status or issuing refunds.
    `,
    category: 'AI',
    author: {
      name: 'Arjun Mehta',
      role: 'Chief Technology Architect',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    },
    featuredImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    readingTime: '7 min read',
    publishedAt: 'October 01, 2026',
    tags: ['AI', 'Customer Support', 'LLM', 'RAG'],
    status: 'published',
    seo: {
      title: 'Enterprise AI Customer Support Implementation | Rancer Insights',
      description: 'Step-by-step roadmap for implementing accurate, helpful, and safe AI customer service agents in modern enterprises.',
      keywords: ['AI customer support', 'RAG chatbots', 'customer experience automation']
    }
  }
];


export const initialLeads: Lead[] = [
  {
    id: 'lead-1',
    name: 'Alexander Wright',
    email: 'alexander@wrightlogistics.com',
    phone: '+91 98451 22345',
    company: 'Wright Logistics',
    service: 'Business Management Systems',
    budget: '$15k - $30k',
    message: 'We operate 4 regional fulfillment centers and require a unified warehouse tracking and dispatch dashboard to replace our legacy desktop system.',
    status: 'In Progress',
    createdAt: '2026-10-23T14:30:00Z',
    notes: 'Initial discovery call scheduled for Monday. Client has provided sample warehouse spreadsheets.'
  },
  {
    id: 'lead-2',
    name: 'Sophia Patel',
    email: 'sophia@luminahealth.io',
    phone: '+91 97312 88491',
    company: 'Lumina Health Care',
    service: 'Web & Mobile Applications',
    budget: '$30k+',
    message: 'Looking to build an iOS and Android telemedicine app for patient appointment booking, video consultations, and digital prescription tracking.',
    status: 'New',
    createdAt: '2026-10-24T09:15:00Z',
    notes: 'High-value enterprise opportunity. Compliance with HIPAA / data privacy guidelines required.'
  },
  {
    id: 'lead-3',
    name: 'Karthik Raman',
    email: 'karthik@craftbrews.in',
    phone: '+91 99002 44102',
    company: 'Apex Craft Beverages',
    service: 'Website Development',
    budget: '$5k - $15k',
    message: 'We need a bold, visually captivating e-commerce website for our new artisanal beverage line, complete with subscription coffee orders.',
    status: 'Contacted',
    createdAt: '2026-10-22T11:45:00Z',
    notes: 'Sent proposal and portfolio samples. Awaiting feedback from their marketing committee.'
  },
  {
    id: 'lead-4',
    name: 'Emily Watson',
    email: 'emily@vertexai.co',
    phone: '+1 415 555 0192',
    company: 'Vertex AI Labs',
    service: 'Branding & Design',
    budget: '$5k - $15k',
    message: 'We are coming out of stealth mode and need a comprehensive visual identity, brand guidelines, and high-converting marketing landing page.',
    status: 'Converted',
    createdAt: '2026-10-18T16:20:00Z',
    notes: 'Contract signed! Kickoff scheduled for next Wednesday.'
  }
];


export const initialAdminUsers: AdminUser[] = [
  {
    id: 'user-1',
    name: 'Rooban Rancer',
    email: 'rooban@rancer.in',
    role: 'Super Admin',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    lastLogin: 'Just now'
  },
  {
    id: 'user-2',
    name: 'Priya Sharma',
    email: 'priya@rancer.in',
    role: 'Admin',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    lastLogin: '2 hours ago'
  },
  {
    id: 'user-3',
    name: 'Rahul Varma',
    email: 'rahul@rancer.in',
    role: 'Editor',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    lastLogin: 'Yesterday'
  }
];

