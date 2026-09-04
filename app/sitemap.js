export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bouldspace.com';

  const routes = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/services/architecture', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/services/interior-design', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/services/modular-kitchen', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/services/furniture-decor', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services/home-decor', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services/renovations', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/services/pmc', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/services/turnkey', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/process', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/projects', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/sectors', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/gallery', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/pricing', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/faq', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/contact', changeFrequency: 'yearly', priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
