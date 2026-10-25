import { MetadataRoute } from 'next';
import { initialServices, initialProjects, initialBlogPosts } from '@rancer/shared-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rancer.in';

  // Static routes
  const staticRoutes = [
    '',
    '/services',
    '/our-work',
    '/portfolio',
    '/about',
    '/blog',
    '/contact',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Service routes
  const serviceRoutes = initialServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic Portfolio routes
  const projectRoutes = initialProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Dynamic Blog routes
  const blogRoutes = initialBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
