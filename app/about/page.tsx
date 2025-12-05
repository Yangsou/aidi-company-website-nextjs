'use client'

// import AboutSection from '@/components/about-section'
// import ContactSection from '@/components/contact-section'
// import AnimatedBackground from '@/components/animated-background'
import AboutBanner from '@/components/about-banner'
import CoreValues from '@/components/core-values'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import OurTeam from '@/components/our-team'

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* <AnimatedBackground /> */}
      <Navigation />

      <main className="relative z-10">
        <AboutBanner />
        <CoreValues />
        <OurTeam />
        {/* <AboutSection /> */}
        {/* <ContactSection /> */}
      </main>

      <Footer />
    </div>
  )
}
