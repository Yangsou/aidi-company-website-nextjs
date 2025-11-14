'use client'

// import FourPillarsSection from '@/components/four-pillars-section'
// import JoinMovementSection from '@/components/join-movement-section'
// import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
// import AnimatedBackground from '@/components/animated-background'
// import WhatWeDoSection from '@/components/what-we-do-section'
import MissionAndVision from '@/components/mission-and-vision'
import Navigation from '@/components/navigation'
import OurActivitys from '@/components/our-activitys'
import OurPartners from '@/components/our-partners'
import ValuesSection from '@/components/values-section'

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* <AnimatedBackground /> */}
      <Navigation />

      <main className="relative z-10">
        <HeroSection />

        <ValuesSection />
        <MissionAndVision />
        <OurPartners />
        <OurActivitys />

        {/* <FourPillarsSection /> */}
        {/* <JoinMovementSection /> */}
        {/* <ContactSection /> */}
      </main>

      <Footer />
    </div>
  )
}
