import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIDI - AI that reflects. Not replaces.',
  description: 'Building AI that reflects human consciousness and enhances our potential for conscious living in the digital age.',
  generator: 'AIDI Company',
  icons: {
    icon: '/aidi-logo.svg',
    shortcut: '/aidi-logo.svg',
    apple: '/aidi-logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
