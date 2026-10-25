-- ==============================================================================
-- RANCER SUPABASE DATABASE SCHEMA (Build · Automate · Grow)
-- Run this in the Supabase Dashboard -> SQL Editor
-- ==============================================================================

-- 1. LEADS TABLE (Customer inquiries submitted via rancer.in)
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT DEFAULT '',
  service TEXT NOT NULL,
  budget TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'In Progress', 'Converted', 'Closed')),
  notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Row-Level Security (RLS) for Leads
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow public website visitors (anon) to submit inquiry forms
CREATE POLICY "Allow public insert to leads" 
  ON public.leads FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);

-- Allow authenticated admins to view, update, and manage leads
CREATE POLICY "Allow admin full access to leads" 
  ON public.leads FOR ALL 
  TO authenticated 
  USING (true) 
  WITH CHECK (true);


-- 2. SERVICES TABLE (8 Digital Capabilities)
CREATE TABLE IF NOT EXISTS public.services (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  icon TEXT NOT NULL,
  badge TEXT NOT NULL,
  color TEXT NOT NULL,
  "order" INTEGER DEFAULT 1,
  enabled BOOLEAN DEFAULT true,
  features JSONB DEFAULT '[]'::jsonb,
  deliverables JSONB DEFAULT '[]'::jsonb,
  technologies JSONB DEFAULT '[]'::jsonb,
  process JSONB DEFAULT '[]'::jsonb,
  faqs JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read services" ON public.services FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Allow admin write services" ON public.services FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- 3. WORK CATEGORIES (What We Build)
CREATE TABLE IF NOT EXISTS public.work_categories (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  badge TEXT NOT NULL,
  stats TEXT NOT NULL,
  subcategories JSONB DEFAULT '[]'::jsonb,
  "order" INTEGER DEFAULT 1,
  enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.work_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read categories" ON public.work_categories FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Allow admin write categories" ON public.work_categories FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- 4. PORTFOLIO CASE STUDIES
CREATE TABLE IF NOT EXISTS public.projects (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  client TEXT NOT NULL,
  category TEXT NOT NULL,
  category_slug TEXT NOT NULL,
  short_description TEXT NOT NULL,
  hero_image TEXT NOT NULL,
  gallery_images JSONB DEFAULT '[]'::jsonb,
  problem TEXT NOT NULL,
  solution TEXT NOT NULL,
  features JSONB DEFAULT '[]'::jsonb,
  results JSONB DEFAULT '[]'::jsonb,
  technologies JSONB DEFAULT '[]'::jsonb,
  design_process JSONB DEFAULT '[]'::jsonb,
  testimonial JSONB DEFAULT '{}'::jsonb,
  featured BOOLEAN DEFAULT false,
  live_url TEXT DEFAULT '',
  year TEXT DEFAULT '2026',
  "order" INTEGER DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read projects" ON public.projects FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Allow admin write projects" ON public.projects FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- 5. BLOG ARTICLES
CREATE TABLE IF NOT EXISTS public.blogs (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  author JSONB DEFAULT '{}'::jsonb,
  featured_image TEXT NOT NULL,
  reading_time TEXT DEFAULT '5 min read',
  published_at TEXT NOT NULL,
  tags JSONB DEFAULT '[]'::jsonb,
  status TEXT DEFAULT 'published' CHECK (status IN ('published', 'draft', 'scheduled')),
  seo JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read blogs" ON public.blogs FOR SELECT TO anon, authenticated USING (status = 'published');
CREATE POLICY "Allow admin write blogs" ON public.blogs FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- 6. TESTIMONIALS
CREATE TABLE IF NOT EXISTS public.testimonials (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  avatar TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  content TEXT NOT NULL,
  project_type TEXT NOT NULL,
  enabled BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read testimonials" ON public.testimonials FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Allow admin write testimonials" ON public.testimonials FOR ALL TO authenticated USING (true) WITH CHECK (true);


-- 7. SITE SETTINGS (Brand, Contact info, SEO)
CREATE TABLE IF NOT EXISTS public.site_settings (
  id INTEGER PRIMARY KEY DEFAULT 1,
  brand_name TEXT DEFAULT 'Rancer',
  tagline TEXT DEFAULT 'Build · Automate · Grow',
  positioning TEXT DEFAULT 'We Build Digital Solutions for Modern Businesses.',
  contact_email TEXT DEFAULT 'rooban@rancer.in',
  contact_phone TEXT DEFAULT '+91 96006 83605',
  whatsapp_number TEXT DEFAULT '+91 96006 83605',
  social_links JSONB DEFAULT '{}'::jsonb,
  stats JSONB DEFAULT '{}'::jsonb,
  seo_defaults JSONB DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read site_settings" ON public.site_settings FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Allow admin write site_settings" ON public.site_settings FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Insert initial row if not exists
INSERT INTO public.site_settings (id, brand_name, tagline, positioning, contact_email, contact_phone, whatsapp_number, social_links, stats, seo_defaults)
VALUES (
  1,
  'Rancer',
  'Build · Automate · Grow',
  'We Build Digital Solutions for Modern Businesses.',
  'rooban@rancer.in',
  '+91 96006 83605',
  '+91 96006 83605',
  '{"linkedin": "https://linkedin.com/company/rancer", "instagram": "https://instagram.com/rancer_tech", "facebook": "https://facebook.com/rancertech", "twitter": "https://x.com/rancer_tech", "whatsapp": "https://wa.me/919600683605"}'::jsonb,
  '{"clients": "100+", "projects": "150+", "experience": "8+", "satisfaction": "99%"}'::jsonb,
  '{"title": "Rancer — Build · Automate · Grow | Digital Solutions for Modern Businesses", "description": "We Build Digital Solutions for Modern Businesses."}'::jsonb
) ON CONFLICT (id) DO NOTHING;
