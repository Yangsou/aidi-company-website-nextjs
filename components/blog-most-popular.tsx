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

export default function BlogMostPopular() {
  return (
    <section className="bg-[#F7F9FD]">
      <div className="flex justify-center">
        <div className="grid h-full w-[88%] grid-cols-12 gap-8 py-8">
          <div className="col-span-12 mb-2 flex flex-col items-start justify-start gap-4">
            <div className="align-middle font-[Manrope] text-[28px] font-semibold leading-[110%] text-[#202222]">
              Most popular
            </div>
          </div>
          <div className="col-span-12 flex flex-col gap-4 lg:col-span-8">
            <div className="grid h-full w-full grid-cols-12">
              <div className="relative col-span-12 h-[300px] w-full lg:col-span-8 lg:h-full">
                <Image
                  src="/blog/blog-banner-image.svg"
                  alt="AI and human connection"
                  fill
                  className="h-full w-full object-cover object-center"
                  priority
                />
              </div>
              <div className="col-span-12 flex flex-col gap-4 bg-[#FFFFFF] lg:col-span-4">
                <div className="p-8">
                  <div className="font-[Manrope] text-[18px] font-semibold uppercase leading-[140%] text-[#00C8B3]">
                    *Catagory*
                  </div>
                  <p className="font-[Manrope] text-[28px] font-semibold leading-[130%] text-[#202222]">
                    *Long Title only* Lorem Ipsum is simply dummy text
                  </p>
                  <div className="mt-4 flex items-center justify-start gap-12">
                    <div className="font-[Manrope] text-[16px] font-normal leading-[150%] text-[#525757]">
                      dd/MMM/yy
                    </div>
                    <div className="flex items-center gap-2 font-[Manrope] text-[16px] font-normal leading-[150%] text-[#525757]">
                      <div className="h-[13px] w-[13px] rounded-full bg-[#00C8B3]" /> 0 min read
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#A0DCDD]">
                      Read more<span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid h-full w-full grid-cols-12">
              <div className="relative col-span-12 h-[300px] w-full lg:col-span-8 lg:h-full">
                <Image
                  src="/blog/blog-banner-image.svg"
                  alt="AI and human connection"
                  fill
                  className="h-full w-full object-cover object-center"
                  priority
                />
              </div>
              <div className="col-span-12 flex flex-col gap-4 bg-[#FFFFFF] lg:col-span-4">
                <div className="p-8">
                  <div className="font-[Manrope] text-[18px] font-semibold uppercase leading-[140%] text-[#00C8B3]">
                    *Catagory*
                  </div>
                  <p className="font-[Manrope] text-[28px] font-semibold leading-[130%] text-[#202222]">
                    *Long Title only* Lorem Ipsum is simply dummy text
                  </p>
                  <div className="mt-4 flex items-center justify-start gap-12">
                    <div className="font-[Manrope] text-[16px] font-normal leading-[150%] text-[#525757]">
                      dd/MMM/yy
                    </div>
                    <div className="flex items-center gap-2 font-[Manrope] text-[16px] font-normal leading-[150%] text-[#525757]">
                      <div className="h-[13px] w-[13px] rounded-full bg-[#00C8B3]" /> 0 min read
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#A0DCDD]">
                      Read more<span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid h-full w-full grid-cols-12">
              <div className="relative col-span-12 h-[300px] w-full lg:col-span-8 lg:h-full">
                <Image
                  src="/blog/blog-banner-image.svg"
                  alt="AI and human connection"
                  fill
                  className="h-full w-full object-cover object-center"
                  priority
                />
              </div>
              <div className="col-span-12 flex flex-col gap-4 bg-[#FFFFFF] lg:col-span-4">
                <div className="p-8">
                  <div className="font-[Manrope] text-[18px] font-semibold uppercase leading-[140%] text-[#00C8B3]">
                    *Catagory*
                  </div>
                  <p className="font-[Manrope] text-[28px] font-semibold leading-[130%] text-[#202222]">
                    *Long Title only* Lorem Ipsum is simply dummy text
                  </p>
                  <div className="mt-4 flex items-center justify-start gap-12">
                    <div className="font-[Manrope] text-[16px] font-normal leading-[150%] text-[#525757]">
                      dd/MMM/yy
                    </div>
                    <div className="flex items-center gap-2 font-[Manrope] text-[16px] font-normal leading-[150%] text-[#525757]">
                      <div className="h-[13px] w-[13px] rounded-full bg-[#00C8B3]" /> 0 min read
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#A0DCDD]">
                      Read more<span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 h-[100px] bg-[#DAF3F4] lg:col-span-4 lg:h-full" />

          <div className="col-span-12 mb-2 flex flex-col items-start justify-start gap-4">
            <div className="align-middle font-[Manrope] text-[28px] font-semibold leading-[110%] text-[#202222]">
              Explore more topic{' '}
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="pt-4">
                <button className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#A0DCDD]">
                  Ai & Human
                </button>
              </div>
              <div className="pt-4">
                <button className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#A0DCDD]">
                  Deep insights
                </button>
              </div>
              <div className="pt-4">
                <button className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#A0DCDD]">
                  Inner balance
                </button>
              </div>
              <div className="pt-4">
                <button className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#A0DCDD]">
                  Case study
                </button>
              </div>
              <div className="pt-4">
                <button className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#A0DCDD]">
                  Chaotic world
                </button>
              </div>
              <div className="pt-4">
                <button className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#A0DCDD]">
                  Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
