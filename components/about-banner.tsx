'use client'

// import { motion } from 'framer-motion'
// import { Heart, Zap, Shield, ArrowRight } from 'lucide-react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import Link from 'next/link'

// const features = [
//   {
//     icon: 'home/values-1.png',
//     title: 'Learning Rhythm',
//     description:
//       'Personalized learning journeys that adapt to your natural patterns and optimal growth moments.',
//     gradient: 'from-pink-500 to-rose-600',
//   },
//   {
//     icon: 'home/values-2.png',
//     title: 'Working Rhythm',
//     description:
//       'Seamless integration of AI tools that amplify your capabilities while maintaining human creativity.',
//     gradient: 'from-cyan-500 to-blue-600',
//   },
//   {
//     icon: 'home/values-3.png',
//     title: 'Life Rhythm',
//     description:
//       'Embrace conscious living where technology enhances rather than overwhelms your daily experience.',
//     gradient: 'from-purple-500 to-indigo-600',
//   },
//   {
//     icon: 'home/values-4.png',
//     title: 'Organization Rhythm',
//     description:
//       'Foster a living system where businesses, data, and intelligence move in harmony — aligning purpose with performance.',
//     gradient: 'from-purple-500 to-indigo-600',
//   },
// ]

export default function AboutBanner() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #0036AF 0%, #001749 100%)',
      }}
    >
      <div className="gap-4 py-12">
        <div className="flex justify-center">
          <div className="grid h-full w-[88%] grid-cols-12 gap-4 py-12">
            <div className="col-span-12 flex flex-col items-start justify-center gap-4 lg:col-span-6">
              <div className="font-manrope font-[Manrope] text-[30px] font-semibold leading-[110%] tracking-[0%] text-[#FFFFFF] lg:text-[56px]">
                Rooted in Vietnam. <br /> Built for a mindful future.
              </div>
              <div className="align-middle font-[Manrope] text-[20px] font-normal leading-[150%] tracking-[0%] text-[#FFFFFF]">
                Founded in 2025, Ai+Di was born from a simple yet profound belief: we are <br /> not
                merely creating products, but igniting a shift in human consciousness — where AI
                does not replace people, but helps them understand themselves and live in harmony
                with the natural order.
              </div>
            </div>
            <div className="col-span-12 flex items-center justify-center lg:col-span-6">
              <img
                src="about/about-logo-aidi.svg"
                alt="AI+DI Logo"
                className="h-[363px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
