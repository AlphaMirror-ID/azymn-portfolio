import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
    default: 'Aziyusman | Frontend Developer',
    template: '%s | Aziyusman',
  },
  description:
    'Portfolio of Aziyusman, a Frontend Developer focused on Web Development, with experience building web, full-stack, and software projects.',
  applicationName: 'Aziyusman Portfolio',
  authors: [{ name: 'Aziyusman', url: baseUrl }],
  creator: 'Aziyusman',
  publisher: 'Aziyusman',
  keywords: [
    'Aziyusman',
    'Frontend Developer',
    'Web Developer',
    'Frontend Development',
    'Web Development',
    'React Developer',
    'Next.js',
    'Full Stack Developer',
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Aziyusman | Frontend Developer',
    description:
      'Portfolio of Aziyusman, a Frontend Developer focused on Web Development, with experience building web, full-stack, and software projects.',
    url: baseUrl,
    siteName: 'Aziyusman | Frontend Developer',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/profile-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aziyusman - Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aziyusman | Frontend Developer',
    description:
      'Portfolio of Aziyusman, a Frontend Developer focused on Web Development, with experience building web, full-stack, and software projects.',
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
    name: 'Aziyusman',
    url: baseUrl,
    image: `${baseUrl}/profile-photo.jpg`,
    jobTitle: 'Frontend Developer',
    description:
      'Portfolio of Aziyusman, a Frontend Developer focused on Web Development, with experience building web, full-stack, and software projects.',
    sameAs: [
      'https://github.com/AlphaMirror-ID',
      'https://www.instagram.com/azysmn.m/',
      'https://www.linkedin.com/in/aziyusman/',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aziyusman | Frontend Developer',
    url: baseUrl,
    description:
      'Portfolio of Aziyusman, a Frontend Developer focused on Web Development, with experience building web, full-stack, and software projects.',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
