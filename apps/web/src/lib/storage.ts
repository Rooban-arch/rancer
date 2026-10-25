import fs from 'fs';
import path from 'path';
import {
  ServiceItem,
  WorkCategory,
  PortfolioProject,
  Testimonial,
  BlogPost,
  Lead,
  SiteSettings,
  AdminUser,
  initialSiteSettings,
  initialServices,
  initialWorkCategories,
  initialProjects,
  initialTestimonials,
  initialBlogPosts,
  initialLeads,
  initialAdminUsers
} from '@rancer/shared-data';

export interface DatabaseSchema {
  siteSettings: SiteSettings;
  services: ServiceItem[];
  workCategories: WorkCategory[];
  projects: PortfolioProject[];
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
  leads: Lead[];
  users: AdminUser[];
}

const DATA_FILE_PATH = path.resolve(process.cwd(), '../../data.json');
const LOCAL_DATA_FILE_PATH = path.resolve(process.cwd(), './data.json');
const TMP_DATA_FILE_PATH = path.resolve('/tmp/data.json');

export function getDatabasePath(): string {
  if (fs.existsSync(DATA_FILE_PATH)) return DATA_FILE_PATH;
  if (fs.existsSync(LOCAL_DATA_FILE_PATH)) return LOCAL_DATA_FILE_PATH;
  if (fs.existsSync(TMP_DATA_FILE_PATH)) return TMP_DATA_FILE_PATH;
  return LOCAL_DATA_FILE_PATH;
}

export function readDatabase(): DatabaseSchema {
  const filePath = getDatabasePath();
  try {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading database file, using fallback initial data:', err);
  }

  // Fallback initial data
  return {
    siteSettings: initialSiteSettings,
    services: initialServices,
    workCategories: initialWorkCategories,
    projects: initialProjects,
    testimonials: initialTestimonials,
    blogPosts: initialBlogPosts,
    leads: initialLeads,
    users: initialAdminUsers
  };
}

export function writeDatabase(data: DatabaseSchema): boolean {
  try {
    const filePath = process.env.VERCEL ? TMP_DATA_FILE_PATH : getDatabasePath();
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing database file:', err);
    return false;
  }
}
