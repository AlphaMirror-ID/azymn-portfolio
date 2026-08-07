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
    default: "Aziyusman's Portfolio | Full Stack Developer & Software Engineer",
    template: "%s | Aziyusman's Portfolio",
  },
  description:
    'Explore the portfolio of Aziyusman — a Full Stack Developer and Software Engineer passionate about building modern, fast, and responsive web applications.',
  applicationName: "Aziyusman's Portfolio",
  authors: [{ name: 'Aziyusman', url: baseUrl }],
  creator: 'Aziyusman',
  publisher: 'Aziyusman',
  keywords: [
    'Aziyusman',
    'Portfolio',
    'Full Stack Developer',
    'Software Engineer',
    'Next.js',
    'Web Developer',
    'Bandung',
    'Indonesia',
    'Frontend Developer',
    'React Developer',
    'Laravel Developer',
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
    title: "Aziyusman's Portfolio | Full Stack Developer & Software Engineer",
    description:
      'Explore the portfolio of Aziyusman — a Full Stack Developer and Software Engineer passionate about building modern, fast, and responsive web applications.',
    url: baseUrl,
    siteName: "Aziyusman's Portfolio",
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/profile-photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Aziyusman - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aziyusman's Portfolio | Full Stack Developer & Software Engineer",
    description:
      'Explore the portfolio of Aziyusman — a Full Stack Developer and Software Engineer passionate about building modern, fast, and responsive web applications.',
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
    jobTitle: 'Full Stack Developer',
    description:
      'Explore the portfolio of Aziyusman — a Full Stack Developer and Software Engineer passionate about building modern, fast, and responsive websites.',
    sameAs: [
      'https://github.com/mcnemy001/',
      'https://www.instagram.com/azysmn.m/',
      'https://www.linkedin.com/in/aziyusman/',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Aziyusman's Portfolio",
    url: baseUrl,
    description:
      'Explore the portfolio of Aziyusman — a Full Stack Developer and Software Engineer passionate about building modern, fast, and responsive websites.',
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
