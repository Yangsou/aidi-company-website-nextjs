'use client'

import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
// import ProductsSection from '@/components/products-section'
// import ContactSection from '@/components/contact-section'
// import AnimatedBackground from '@/components/animated-background'
import ProductSectionNew from '@/components/product-section-new'

export default function ProductsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* <AnimatedBackground /> */}
      <Navigation />

      <main className="relative z-0 pt-16">
        <ProductSectionNew />
        {/* <ProductsSection /> */}
        {/* <ContactSection /> */}
      </main>

      <Footer />
    </div>
  )
}
