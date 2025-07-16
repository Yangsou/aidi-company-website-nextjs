import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIDI - AI that reflects. Not replaces.',
  description: 'Building AI that reflects human consciousness and enhances our potential for conscious living in the digital age.',
  generator: 'AIDI Company',
  keywords: ['AI', 'Artificial Intelligence', 'Divine Intelligence', 'Consciousness', 'Technology', 'Innovation'],
  authors: [{ name: 'AIDI Team' }],
  creator: 'AIDI',
  publisher: 'AIDI',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.aidi.world',
    siteName: 'AIDI',
    title: 'AIDI - AI that reflects. Not replaces.',
    description: 'Building AI that reflects human consciousness and enhances our potential for conscious living in the digital age.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'AIDI - AI that reflects. Not replaces.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aidi_world',
    creator: '@aidi_world',
    title: 'AIDI - AI that reflects. Not replaces.',
    description: 'Building AI that reflects human consciousness and enhances our potential for conscious living in the digital age.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/aidi-logo.svg',
    shortcut: '/aidi-logo.svg',
    apple: '/aidi-logo.svg',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better social sharing */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta name="twitter:image:alt" content="AIDI - AI that reflects. Not replaces." />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <link rel="canonical" href="https://www.aidi.world" />
      </head>
      <body>{children}</body>
    </html>
  )
}
