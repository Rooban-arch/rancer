import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SearchOverlay from '@/components/SearchOverlay';
import { SearchProvider } from '@/components/SearchContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rancer.in'),
  title: {
    default: 'Rancer — Build · Automate · Grow | Digital Solutions for Modern Businesses',
    template: '%s | Rancer Digital Solutions'
  },
  description:
    'Rancer is a premier digital solutions company that helps businesses build, automate, and grow using technology. Website development, custom web & mobile apps, AI automation, and business management systems.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Rancer',
  },
  keywords: [
    'website development',
    'web development company',
    'mobile app development',
    'AI solutions',
    'business automation',
    'digital solutions',
    'branding & design',
    'digital marketing',
    'business management systems',
    'Rancer'
  ],
  authors: [{ name: 'Rancer Digital Solutions' }],
  creator: 'Rancer',
  publisher: 'Rancer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Rancer — We Build Digital Solutions for Modern Businesses',
    description:
      'From stunning websites to smart automation, we help businesses turn ideas into powerful digital experiences. Build · Automate · Grow.',
    url: 'https://rancer.in',
    siteName: 'Rancer',
    images: [
      {
        url: '/images/rancer-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Rancer Digital Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rancer — Digital Solutions for Modern Businesses',
    description: 'Build · Automate · Grow. High-performance web apps, AI automation, and bespoke software.',
    images: ['/images/rancer-logo.jpg'],
    creator: '@rancer_tech',
  },
  icons: {
    icon: '/images/rancer-logo.jpg',
    apple: '/images/rancer-logo.jpg',
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rancer',
    alternateName: 'Rancer Digital Solutions',
    url: 'https://rancer.in',
    logo: 'https://rancer.in/images/rancer-logo.jpg',
    description: 'We Build Digital Solutions for Modern Businesses. Build · Automate · Grow.',
    email: 'rooban@rancer.in',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-96006-83605',
      contactType: 'Customer Service',
      areaServed: 'Worldwide',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://linkedin.com/company/rancer',
      'https://instagram.com/rancer_tech',
      'https://facebook.com/rancertech',
      'https://x.com/rancer_tech'
    ]
  };

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rancer',
    url: 'https://rancer.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://rancer.in/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="font-sans bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        <SearchProvider>
          <div className="flex flex-col min-h-screen min-h-[100dvh]">
            <Header />
            <SearchOverlay />
            <main className="flex-grow pt-[calc(5rem+env(safe-area-inset-top,0px))]">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </div>
        </SearchProvider>
      </body>
    </html>
  );
}
