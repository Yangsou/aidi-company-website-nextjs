import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AIDI - AI that reflects. Not replaces.',
  description: 'Building AI that reflects human consciousness and enhances our potential for conscious living in the digital age.',
  openGraph: {
    title: 'AIDI - AI that reflects. Not replaces.',
    description: 'Building AI that reflects human consciousness and enhances our potential for conscious living in the digital age.',
    url: 'https://www.aidi.world',
    siteName: 'AIDI',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'AIDI - AI that reflects. Not replaces.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIDI - AI that reflects. Not replaces.',
    description: 'Building AI that reflects human consciousness and enhances our potential for conscious living in the digital age.',
    images: ['/og-image.svg'],
  },
} 