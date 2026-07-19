import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Mukta } from 'next/font/google'
import { SitePreloader } from '@/components/site-preloader'
import './globals.css'

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
  title: 'Group of Infinity — Royal Car Rentals & Rajasthani Wedding Photography',
  description:
    'Group of Infinity (groupofinfinity.art) — Rajasthan me Swift car rentals aur heritage Rajasthani wedding photography. City ride, wedding aur outstation booking ke liye sampark karein.',
  generator: 'v0.app',
  keywords: [
    'Rajasthan wedding photography',
    'car rental Rajasthan',
    'Swift wedding car',
    'Rajput wedding photographer',
    'Group of Infinity',
    'Swift car rental',
  ],
  openGraph: {
    title: 'Group of Infinity — Royal Car Rentals & Wedding Photography',
    description:
      'Swift car rentals aur heritage Rajasthani wedding photography, ek hi chhat ke neeche.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5a1a24',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${playfair.variable} ${mukta.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SitePreloader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
