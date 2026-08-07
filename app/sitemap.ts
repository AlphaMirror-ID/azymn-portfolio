import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aziyusman.vercel.app';
  
  // Base routes - extensible for future page additions (e.g. blog, projects subpages)
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    // Example for future additions:
    // {
    //   url: `${baseUrl}/projects`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.8,
    // },
  ];

  return routes;
}
