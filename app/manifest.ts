import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aziyusman's Portfolio",
    short_name: 'Aziyusman',
    description: 'Explore the portfolio of Aziyusman — a web developer passionate about building modern and responsive websites.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000319',
    theme_color: '#000319',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
