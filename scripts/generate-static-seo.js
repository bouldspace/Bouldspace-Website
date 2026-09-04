const fs = require('fs');
const path = require('path');

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bouldspace.com';

const routes = [
  { path: '', changeFrequency: 'weekly', priority: '1.0' },
  { path: '/about', changeFrequency: 'monthly', priority: '0.8' },
  { path: '/services', changeFrequency: 'weekly', priority: '0.9' },
  { path: '/services/architecture', changeFrequency: 'monthly', priority: '0.85' },
  { path: '/services/interior-design', changeFrequency: 'monthly', priority: '0.85' },
  { path: '/services/modular-kitchen', changeFrequency: 'monthly', priority: '0.85' },
  { path: '/services/furniture-decor', changeFrequency: 'monthly', priority: '0.8' },
  { path: '/services/home-decor', changeFrequency: 'monthly', priority: '0.8' },
  { path: '/services/renovations', changeFrequency: 'monthly', priority: '0.85' },
  { path: '/services/pmc', changeFrequency: 'monthly', priority: '0.85' },
  { path: '/services/turnkey', changeFrequency: 'monthly', priority: '0.85' },
  { path: '/process', changeFrequency: 'monthly', priority: '0.9' },
  { path: '/projects', changeFrequency: 'weekly', priority: '0.9' },
  { path: '/sectors', changeFrequency: 'monthly', priority: '0.8' },
  { path: '/gallery', changeFrequency: 'weekly', priority: '0.85' },
  { path: '/pricing', changeFrequency: 'monthly', priority: '0.8' },
  { path: '/faq', changeFrequency: 'monthly', priority: '0.75' },
  { path: '/contact', changeFrequency: 'yearly', priority: '0.7' },
];

const now = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${baseUrl}${r.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r.changeFrequency}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemapXml.trim());
console.log('public/sitemap.xml created');

const robotsTxt = `User-Agent: *
Allow: /
Disallow: /api/

# AI Search Crawlers & LLM Indexers
User-Agent: GPTBot
Allow: /

User-Agent: ChatGPT-User
Allow: /

User-Agent: ClaudeBot
Allow: /

User-Agent: Claude-Web
Allow: /

User-Agent: PerplexityBot
Allow: /

User-Agent: Google-Extended
Allow: /

User-Agent: Applebot-Extended
Allow: /

User-Agent: CCBot
Allow: /

User-Agent: Bytespider
Allow: /

User-Agent: cohere-ai
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
Host: ${baseUrl}
`;

fs.writeFileSync(path.join('public', 'robots.txt'), robotsTxt.trim());
console.log('public/robots.txt created');
