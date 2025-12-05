'use client'

import CareerBanner from '@/components/career-banner'
import { ErrorBoundary } from '@/components/error-boundary'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import WeAreSeeking from '@/components/we-are-seeking'

export default function ProductsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* <AnimatedBackground /> */}
      <Navigation />

      <main className="relative z-0 pt-16">
        <ErrorBoundary>
          <CareerBanner />
          <WeAreSeeking />
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  )
}
