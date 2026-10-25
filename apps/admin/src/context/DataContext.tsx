import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ServiceItem,
  WorkCategory,
  PortfolioProject,
  Testimonial,
  BlogPost,
  Lead,
  SiteSettings,
  initialSiteSettings,
  initialServices,
  initialWorkCategories,
  initialProjects,
  initialTestimonials,
  initialBlogPosts,
  initialLeads
} from '@rancer/shared-data';

interface DataContextType {
  siteSettings: SiteSettings;
  services: ServiceItem[];
  workCategories: WorkCategory[];
  projects: PortfolioProject[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
  leads: Lead[];
  // Services
  addService: (item: Omit<ServiceItem, 'id'>) => void;
  updateService: (id: string, item: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;
  // Work Categories
  addWorkCategory: (cat: Omit<WorkCategory, 'id'>) => void;
  updateWorkCategory: (id: string, cat: Partial<WorkCategory>) => void;
  deleteWorkCategory: (id: string) => void;
  // Portfolio
  addProject: (proj: Omit<PortfolioProject, 'id'>) => void;
  updateProject: (id: string, proj: Partial<PortfolioProject>) => void;
  deleteProject: (id: string) => void;
  // Testimonials
  addTestimonial: (test: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: string, test: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  // Blog
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  // Leads
  updateLeadStatus: (id: string, status: Lead['status']) => void;
  addLeadNote: (id: string, note: string) => void;
  deleteLead: (id: string) => void;
  // Settings
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
  // Global search
  searchDatabase: (query: string) => any[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || (typeof window !== 'undefined' && window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://rancer.in');

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(initialSiteSettings);
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  const [workCategories, setWorkCategories] = useState<WorkCategory[]>(initialWorkCategories);
  const [projects, setProjects] = useState<PortfolioProject[]>(initialProjects);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [leads, setLeads] = useState<Lead[]>(initialLeads);

  // Initialize from LocalStorage or API
  useEffect(() => {
    const saved = localStorage.getItem('rancer_database');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.siteSettings) setSiteSettings(parsed.siteSettings);
        if (parsed.services) setServices(parsed.services);
        if (parsed.workCategories) setWorkCategories(parsed.workCategories);
        if (parsed.projects) setProjects(parsed.projects);
        if (parsed.testimonials) setTestimonials(parsed.testimonials);
        if (parsed.blogPosts) setBlogPosts(parsed.blogPosts);
        if (parsed.leads) setLeads(parsed.leads);
      } catch (e) {
        console.error('Failed to parse saved database', e);
      }
    } else {
      // Try to fetch from web API
      fetch(`${API_BASE_URL}/api/data`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data) {
            if (data.siteSettings) setSiteSettings(data.siteSettings);
            if (data.services) setServices(data.services);
            if (data.workCategories) setWorkCategories(data.workCategories);
            if (data.projects) setProjects(data.projects);
            if (data.testimonials) setTestimonials(data.testimonials);
            if (data.blogPosts) setBlogPosts(data.blogPosts);
            if (data.leads) setLeads(data.leads);
          }
        })
        .catch(() => {});
    }
  }, []);

  // Save changes locally and attempt sync with API
  const persist = (data: {
    siteSettings?: SiteSettings;
    services?: ServiceItem[];
    workCategories?: WorkCategory[];
    projects?: PortfolioProject[];
    testimonials?: Testimonial[];
    blogPosts?: BlogPost[];
    leads?: Lead[];
  }) => {
    const current = {
      siteSettings: data.siteSettings || siteSettings,
      services: data.services || services,
      workCategories: data.workCategories || workCategories,
      projects: data.projects || projects,
      testimonials: data.testimonials || testimonials,
      blogPosts: data.blogPosts || blogPosts,
      leads: data.leads || leads
    };
    localStorage.setItem('rancer_database', JSON.stringify(current));

    // Async attempt sync to API server
    fetch(`${API_BASE_URL}/api/data`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(current)
    }).catch(() => {});
  };

  // SERVICES CRUD
  const addService = (item: Omit<ServiceItem, 'id'>) => {
    const newItem: ServiceItem = { ...item, id: `srv-${Date.now()}` };
    const updated = [...services, newItem];
    setServices(updated);
    persist({ services: updated });
  };

  const updateService = (id: string, updates: Partial<ServiceItem>) => {
    const updated = services.map((s) => (s.id === id ? { ...s, ...updates } : s));
    setServices(updated);
    persist({ services: updated });
  };

  const deleteService = (id: string) => {
    const updated = services.filter((s) => s.id !== id);
    setServices(updated);
    persist({ services: updated });
  };

  // WORK CATEGORIES CRUD
  const addWorkCategory = (cat: Omit<WorkCategory, 'id'>) => {
    const newCat: WorkCategory = { ...cat, id: `cat-${Date.now()}` };
    const updated = [...workCategories, newCat];
    setWorkCategories(updated);
    persist({ workCategories: updated });
  };

  const updateWorkCategory = (id: string, updates: Partial<WorkCategory>) => {
    const updated = workCategories.map((c) => (c.id === id ? { ...c, ...updates } : c));
    setWorkCategories(updated);
    persist({ workCategories: updated });
  };

  const deleteWorkCategory = (id: string) => {
    const updated = workCategories.filter((c) => c.id !== id);
    setWorkCategories(updated);
    persist({ workCategories: updated });
  };

  // PORTFOLIO CRUD
  const addProject = (proj: Omit<PortfolioProject, 'id'>) => {
    const newProj: PortfolioProject = { ...proj, id: `proj-${Date.now()}` };
    const updated = [newProj, ...projects];
    setProjects(updated);
    persist({ projects: updated });
  };

  const updateProject = (id: string, updates: Partial<PortfolioProject>) => {
    const updated = projects.map((p) => (p.id === id ? { ...p, ...updates } : p));
    setProjects(updated);
    persist({ projects: updated });
  };

  const deleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    persist({ projects: updated });
  };

  // TESTIMONIALS CRUD
  const addTestimonial = (test: Omit<Testimonial, 'id'>) => {
    const newTest: Testimonial = { ...test, id: `test-${Date.now()}` };
    const updated = [newTest, ...testimonials];
    setTestimonials(updated);
    persist({ testimonials: updated });
  };

  const updateTestimonial = (id: string, updates: Partial<Testimonial>) => {
    const updated = testimonials.map((t) => (t.id === id ? { ...t, ...updates } : t));
    setTestimonials(updated);
    persist({ testimonials: updated });
  };

  const deleteTestimonial = (id: string) => {
    const updated = testimonials.filter((t) => t.id !== id);
    setTestimonials(updated);
    persist({ testimonials: updated });
  };

  // BLOG CRUD
  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = { ...post, id: `blog-${Date.now()}` };
    const updated = [newPost, ...blogPosts];
    setBlogPosts(updated);
    persist({ blogPosts: updated });
  };

  const updateBlogPost = (id: string, updates: Partial<BlogPost>) => {
    const updated = blogPosts.map((b) => (b.id === id ? { ...b, ...updates } : b));
    setBlogPosts(updated);
    persist({ blogPosts: updated });
  };

  const deleteBlogPost = (id: string) => {
    const updated = blogPosts.filter((b) => b.id !== id);
    setBlogPosts(updated);
    persist({ blogPosts: updated });
  };

  // LEADS MANAGEMENT
  const updateLeadStatus = (id: string, status: Lead['status']) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    setLeads(updated);
    persist({ leads: updated });
  };

  const addLeadNote = (id: string, notes: string) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, notes } : l));
    setLeads(updated);
    persist({ leads: updated });
  };

  const deleteLead = (id: string) => {
    const updated = leads.filter((l) => l.id !== id);
    setLeads(updated);
    persist({ leads: updated });
  };

  // SETTINGS
  const updateSiteSettings = (settings: Partial<SiteSettings>) => {
    const updated = { ...siteSettings, ...settings };
    setSiteSettings(updated);
    persist({ siteSettings: updated });
  };

  // GLOBAL SEARCH
  const searchDatabase = (query: string) => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const results: any[] = [];

    services.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.shortDescription.toLowerCase().includes(q)) {
        results.push({ type: 'Service', title: s.title, subtitle: s.shortDescription, id: s.id, link: '/services' });
      }
    });

    projects.forEach((p) => {
      if (p.title.toLowerCase().includes(q) || p.client.toLowerCase().includes(q)) {
        results.push({ type: 'Project', title: p.title, subtitle: `Client: ${p.client}`, id: p.id, link: '/portfolio' });
      }
    });

    blogPosts.forEach((b) => {
      if (b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q)) {
        results.push({ type: 'Blog', title: b.title, subtitle: b.category, id: b.id, link: '/blog' });
      }
    });

    leads.forEach((l) => {
      if (l.name.toLowerCase().includes(q) || l.email.toLowerCase().includes(q) || (l.company && l.company.toLowerCase().includes(q))) {
        results.push({ type: 'Lead', title: l.name, subtitle: `${l.email} • ${l.status}`, id: l.id, link: '/leads' });
      }
    });

    return results.slice(0, 8);
  };

  return (
    <DataContext.Provider
      value={{
        siteSettings,
        services,
        workCategories,
        projects,
        testimonials,
        blogPosts,
        leads,
        addService,
        updateService,
        deleteService,
        addWorkCategory,
        updateWorkCategory,
        deleteWorkCategory,
        addProject,
        updateProject,
        deleteProject,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        updateLeadStatus,
        addLeadNote,
        deleteLead,
        updateSiteSettings,
        searchDatabase
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
