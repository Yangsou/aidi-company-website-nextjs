'use client'

import CareerBanner from '@/components/career-banner'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
// import ProductsSection from '@/components/products-section'
// import ContactSection from '@/components/contact-section'
// import AnimatedBackground from '@/components/animated-background'
// import ProductSectionNew from '@/components/product-section-new'
// import AboutBanner from '@/components/about-banner'
import WeAreSeeking from '@/components/we-are-seeking'

export default function ProductsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* <AnimatedBackground /> */}
      <Navigation />

      <main className="relative z-0 pt-16">
        <CareerBanner />
        <WeAreSeeking />

        {/* <ProductsSection /> */}
        {/* <ContactSection /> */}
      </main>

      <Footer />
    </div>
  )
}
