'use client'

// import { motion } from 'framer-motion'
// import { Heart, Zap, Shield, ArrowRight } from 'lucide-react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
import Image from 'next/image'
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

export default function CoreValues() {
  return (
    <section className="bg-white">
      <div className="gap-4 py-12">
        <div className="flex justify-center">
          <div className="grid h-full w-[88%] grid-cols-12 gap-4 py-12">
            <div className="col-span-12 flex flex-col items-start justify-start gap-4">
              <div className="font-[Manrope] text-[56px] font-semibold leading-[110%] tracking-[0%] text-[#0036AF]">
                Core Values
              </div>
              <div className="align-middle font-[Manrope] text-[20px] font-normal leading-[150%] tracking-[0%] text-[#525757]">
                "Trust is the life energy of human beings, and it is also the foundation of all
                creativity." <br /> Trust lies at the heart of AI+DI’s culture — the trust between
                people, between humans and technology, and <br /> between individuals and
                themselves. From this trust, five core values were born to nurture and protect it.
              </div>
            </div>
            <div className="relative col-span-12 flex justify-center">
              <div className="relative flex h-[300px] w-full flex-col items-center justify-center md:h-[1146px]">
                {/* Background Image */}
                <Image
                  src="/about/core-value-images.png"
                  alt="Core Values"
                  fill
                  className="pointer-events-none z-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
