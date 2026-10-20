import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';
import SmoothScroll from '@/components/SmoothScroll';
import { CustomCursor } from '@/components/CustomCursor';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aziyusman.vercel.app';

export const viewport = {
  themeColor: '#000319',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Aziyusman Maulana | Frontend Developer',
    template: '%s | Aziyusman Maulana',
  },
  description:
    'Portfolio of Aziyusman Maulana (Aziyusman), a Frontend Developer focused on Web Development, with experience building web, full-stack, and software projects.',
  applicationName: 'Aziyusman Maulana Portfolio',
  authors: [{ name: 'Aziyusman Maulana', url: baseUrl }],
  creator: 'Aziyusman Maulana',
  publisher: 'Aziyusman Maulana',
  keywords: [
    'Aziyusman Maulana',
    'Aziyusman',
    'Aziyusman Maulana Portfolio',
    'Aziyusman Portfolio',
    'Aziyusman M',
    'Frontend Developer',
    'Web Developer',
    'Frontend Development',
    'Web Development',
    'React Developer',
    'Next.js',
    'Full Stack Developer',
    'Software Engineer',
    'Software Development',
    'Portfolio',
    'Informatics Engineering',
    'Bandung',
    'Indonesia',
  ],
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Aziyusman Maulana | Frontend Developer',
    description:
      'Portfolio of Aziyusman Maulana (Aziyusman), a Frontend Developer focused on Web Development, with experience building web, full-stack, and software projects.',
    url: baseUrl,
    siteName: 'Aziyusman Maulana | Frontend Developer',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/profile-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aziyusman Maulana - Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aziyusman Maulana | Frontend Developer',
    description:
      'Portfolio of Aziyusman Maulana (Aziyusman), a Frontend Developer focused on Web Development, with experience building web, full-stack, and software projects.',
    creator: '@aziyusman',
    images: ['/profile-photo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aziyusman Maulana',
    alternateName: ['Aziyusman', 'Aziyusman M.', 'Aziyusman Maulana Portfolio'],
    givenName: 'Aziyusman',
    familyName: 'Maulana',
    url: baseUrl,
    image: `${baseUrl}/profile-photo.jpg`,
    jobTitle: 'Frontend Developer',
    description:
      'Portfolio of Aziyusman Maulana (Aziyusman), a Frontend Developer focused on Web Development, with experience building web, full-stack, and software projects.',
    sameAs: [
      'https://github.com/AlphaMirror-ID',
      'https://www.instagram.com/azysmn.m/',
      'https://www.linkedin.com/in/aziyusman/',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aziyusman Maulana | Frontend Developer',
    alternateName: ['Aziyusman', 'Aziyusman Portfolio', 'Aziyusman Maulana Portfolio'],
    url: baseUrl,
    description:
      'Portfolio of Aziyusman Maulana (Aziyusman), a Frontend Developer focused on Web Development, with experience building web, full-stack, and software projects.',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-black-100 text-white-100`}
      >
        <SmoothScroll>
          <CustomCursor />
          <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
