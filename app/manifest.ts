import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aziyusman | Frontend Developer',
    short_name: 'Aziyusman',
    description:
      'Portfolio of Aziyusman, a Frontend Developer focused on Web Development, with experience building web, full-stack, and software projects.',
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
