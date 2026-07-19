import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Mukta } from 'next/font/google'
import { SitePreloader } from '@/components/site-preloader'
import './globals.css'

const siteUrl = 'https://groupofinfinity.art'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const mukta = Mukta({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Swift Car Rental & Wedding Photography in Rajasthan | Group of Infinity',
    template: '%s | Group of Infinity',
  },
  description: 'Jodhpur aur Rajasthan me chauffeur-driven Swift car rental, decorated wedding cars aur candid wedding photography. Group of Infinity se booking karein.',
  applicationName: 'Group of Infinity',
  authors: [{ name: 'Group of Infinity', url: siteUrl }],
  creator: 'Group of Infinity',
  publisher: 'Group of Infinity',
  category: 'Car Rental and Wedding Photography',
  keywords: [
    'Swift car rental Jodhpur',
    'Maruti Swift rental Rajasthan',
    'wedding car rental Jodhpur',
    'decorated wedding car Rajasthan',
    'Rajasthan wedding photography',
    'wedding photographer Jodhpur',
    'pre wedding photography Rajasthan',
    'Group of Infinity',
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    title: 'Swift Car Rental & Wedding Photography in Rajasthan',
    description: 'Jodhpur aur Rajasthan me Swift car rental, decorated wedding cars aur cinematic wedding photography.',
    url: siteUrl,
    siteName: 'Group of Infinity',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/swift-hero.png', width: 1796, height: 876, alt: 'Group of Infinity Swift car rental in Rajasthan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swift Car Rental & Wedding Photography in Rajasthan',
    description: 'Swift rentals and wedding photography by Group of Infinity, Jodhpur.',
    images: ['/swift-hero.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5a1a24',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#business`,
        name: 'Group of Infinity',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        image: `${siteUrl}/swift-hero.png`,
        description: 'Swift car rental and Rajasthani wedding photography service based in Jodhpur.',
        areaServed: { '@type': 'State', name: 'Rajasthan' },
        address: { '@type': 'PostalAddress', addressLocality: 'Jodhpur', addressRegion: 'Rajasthan', addressCountry: 'IN' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Group of Infinity Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Swift Car Rental' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Decorated Wedding Swift' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Photography' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Group of Infinity',
        publisher: { '@id': `${siteUrl}/#business` },
        inLanguage: 'en-IN',
      },
    ],
  }

  return (
    <html lang="en-IN" className={`light ${playfair.variable} ${mukta.variable} bg-background`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        <SitePreloader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
