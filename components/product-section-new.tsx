'use client'
import Link from 'next/link'

// import { motion } from 'framer-motion'
// import { Heart, Zap, Shield, ArrowRight } from 'lucide-react'
// import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
// import Image from 'next/image'

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

export default function ProductSectionNew() {
  return (
    <section className="bg-white">
      <div className="gap-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <div className="grid h-full w-[88%] grid-cols-12 gap-8">
            <div className="col-span-12 flex flex-col items-start justify-center gap-4 lg:col-span-6">
              <div className="align-middle font-[Manrope] text-[42px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                Two pillars,
              </div>
              <div className="align-middle font-[Manrope] text-[42px] font-semibold leading-[110%] tracking-[0%] text-[#0036AF]">
                One human-centered ecosystem.
              </div>
              <div className="font-[Manrope] text-[16px] font-normal leading-[150%] tracking-[0%] text-[#525757]">
                Ai+Di's two core platforms — Ai+Di ERP and Ai+Di Academy — form a complete ecosystem
                that connects people and organizations, measuring and nurturing both happiness and
                performance. Together, they create Organizational and Human Intelligence — a
                powerful foundation where businesses optimize with AI, and individuals grow toward
                balance and sustainable progress.
              </div>
            </div>
            <div className="col-span-12 flex items-center justify-center lg:col-span-6">
              <img
                src="product/products-banner.svg"
                alt=""
                className="h-[363px] object-contain"
              />
            </div>
          </div>
          <div className="grid w-[88%] grid-cols-12 items-stretch gap-8">
            {/* CARD 1 */}
            <div className="col-span-12 flex h-full lg:col-span-6">
              <div className="flex h-full w-full flex-col">
                {/* Header */}
                <div
                  className="relative z-10"
                  style={{
                    background: 'linear-gradient(180deg, #0036AF 0%, #001749 100%)',
                  }}
                >
                  <img
                    src="home/bg-hero-section.png"
                    className="h-[100px] w-full object-cover opacity-20"
                    alt=""
                  />
                  <div className="absolute inset-0 flex items-center gap-4 px-8">
                    <img
                      src="product/product-logo-left.svg"
                      className="h-14 w-14"
                      alt=""
                    />
                    <div className="font-[Manrope] text-[42px] font-semibold leading-[110%] tracking-normal text-white">
                      Ai+Di ERP
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between gap-4 bg-white p-8 shadow-2xl">
                  <div>
                    <div className="font-[Manrope] text-[24px] font-semibold leading-[140%] text-[#000]">
                      Reimagine management with empathy and <br /> intelligence.
                    </div>
                    <div className="mt-2 font-[Manrope] text-[16px] leading-[150%] text-[#525757]">
                      The Ai+Di platform for AI Management not only manages but deeply understands
                      the rhythm of your business operations. We help you grow in every aspect —
                      from people to processes, from customers to resources — fostering a workplace
                      where efficiency and wellbeing go hand in hand.
                    </div>
                    <a
                      className="mt-4 text-[18px] text-[#007AFF] underline"
                      href="mailto:BDD@aidi.world"
                    >
                      Contact us: BDD@aidi.world
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <img
                      src="product/logo-aidi-product.png"
                      className="h-[38px] w-[154px]"
                      alt=""
                    />
                    <Link href="/products">
                      <Button className="bg-white text-[18px] font-semibold text-[#A0DCDD]">
                        Learn more →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-span-12 flex h-full lg:col-span-6">
              <div className="flex h-full w-full flex-col">
                {/* Header */}
                <div
                  className="relative z-10"
                  style={{
                    background: 'linear-gradient(180deg, #0036AF 0%, #001749 100%)',
                  }}
                >
                  <img
                    src="home/bg-hero-section.png"
                    className="h-[100px] w-full object-cover opacity-20"
                    alt=""
                  />
                  <div className="absolute inset-0 flex items-center gap-4 px-8">
                    <img
                      src="product/product-logo-right.svg"
                      className="h-14 w-14"
                      alt=""
                    />
                    <div className="font-[Manrope] text-[42px] font-semibold leading-[110%] tracking-normal text-white">
                      Ai+Di Academy
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between gap-4 bg-white p-8 shadow-2xl">
                  <div>
                    <div className="font-[Manrope] text-[24px] font-semibold leading-[140%] text-[#000]">
                      Empowering growth beyond borders.
                    </div>

                    <div className="mt-2 font-[Manrope] text-[16px] leading-[150%] text-[#525757]">
                      Ai+Di Academy is a global education platform empowering Vietnamese students to
                      realize their potential and pursue the right study path. We provide
                      pre-departure mentoring, visa and application support, and continuous guidance
                      until completion. By connecting parents, schools, and international partners,
                      Ai+Di Academy expands learning opportunities and builds bridges for Vietnam's
                      next generation.
                      <br />
                    </div>

                    <a
                      className="mt-4 text-[18px] text-[#007AFF] underline"
                      href="mailto:BDD@aidi.world"
                    >
                      Contact us: BDD@aidi.world
                    </a>
                  </div>

                  <div className="flex items-center justify-between">
                    <img
                      src="product/logo-aidi-product.png"
                      className="h-[38px] w-[154px]"
                      alt=""
                    />
                    <Link href="/products">
                      <Button className="bg-white text-[18px] font-semibold text-[#A0DCDD]">
                        Learn more →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
