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
        url: 'https://www.aidi.world/api/og',
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
    images: ['https://www.aidi.world/api/og'],
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
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:secure_url" content="https://www.aidi.world/api/og" />
        <meta name="twitter:image:alt" content="AIDI - AI that reflects. Not replaces." />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-TileImage" content="https://www.aidi.world/api/og" />
        <meta name="application-name" content="AIDI" />
        <meta name="apple-mobile-web-app-title" content="AIDI" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="canonical" href="https://www.aidi.world" />
        <link rel="icon" type="image/x-icon" href="/aidi-logo.svg" />
        <link rel="apple-touch-icon" href="/aidi-logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
