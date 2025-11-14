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

export default function LastBlog() {
  return (
    <section className="bg-[#F7F9FD]">
      <div className="flex justify-center">
        <div className="grid h-full w-[88%] grid-cols-12 gap-8 pb-6">
          <div className="col-span-12 mb-2 flex flex-col items-start justify-start gap-4">
            <div className="align-middle font-[Manrope] text-[28px] font-semibold leading-[130%] text-[#202222]">
              Last blog
            </div>
          </div>

          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="col-span-12 flex flex-col gap-4 bg-white md:col-span-6 lg:col-span-4"
            >
              {/* Image */}
              <div className="relative h-[285px] w-full">
                <Image
                  src="/blog/blog-banner-image.svg"
                  alt="AI and human connection"
                  fill
                  className="h-full w-full object-cover object-center"
                  priority
                />
              </div>

              {/* Text */}
              <div className="p-4">
                {/* Category */}
                <div className="font-manrope text-[18px] font-semibold uppercase leading-[140%] text-[#00C8B3]">
                  Category
                </div>

                {/* Title */}
                <div className="font-manrope text-[20px] font-bold leading-[130%] text-[#202222]">
                  *Long Title only*
                </div>

                {/* Meta info */}
                <div className="mt-4 flex items-center justify-start gap-12">
                  <div className="font-manrope text-[16px] font-normal leading-[150%] text-[#525757]">
                    dd/MMM/yy
                  </div>

                  <div className="font-manrope flex items-center gap-2 text-[16px] font-normal leading-[150%] text-[#525757]">
                    <div className="h-[13px] w-[13px] rounded-full bg-[#00C8B3]" />0 min read
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-span-12 flex justify-center pt-4">
            <button className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#0036AF]">
              View more (12)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
