'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'

export default function HeroSection() {
  const t = useTranslations('HomePage')
  return (
    <section
      id="home"
      className="relative flex h-[500px] overflow-hidden pb-6 pt-20 md:h-[810px] md:pb-20 md:pt-36"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/bg-hero-section.png"
          alt="AI and human connection"
          fill
          className="z-10 mt-16 object-cover object-center opacity-100"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0" />
      </div>

      <div className="container relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl"
          >
            <span className="mr-2 font-[Manrope] text-[40px] font-medium leading-[110%] tracking-[-2%] text-[#0036AF] md:text-[70px]">
              {t('HeroSection.title')}
            </span>
            {/* <br /> */}
            <span className="max-w-[608px] font-[Manrope] text-[40px] font-medium leading-[110%] tracking-[-2%] text-[#202222] md:text-[70px]">
              {t('HeroSection.sub_title')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-[608px] whitespace-pre-line text-left font-[Manrope] text-[20px] font-normal leading-[150%] tracking-[0%] text-[#202222]"
          >
            {t('HeroSection.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-12 flex flex-col justify-start gap-4 sm:flex-row"
          >
            <Link href="/about">
              <Button className="font-spaceGrotesk group h-16 rounded-none border-0 bg-[#FFFFFF] px-[30px] py-5 align-middle font-[Manrope] text-[20px] font-semibold leading-[150%] tracking-[0%] text-[#0036AF] shadow-lg transition-all duration-300 hover:bg-[#A0DCDD] hover:from-[#A0DCDD] hover:to-[#A0DCDD] [&_svg]:size-6">
                {t('HeroSection.button')}
                <ArrowRight
                  className="ml-[10px] text-[48px]"
                  size={48}
                />
              </Button>
            </Link>
            {/* <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 backdrop-blur-sm bg-transparent px-10 py-4 text-lg font-medium transition-all duration-300 font-spaceGrotesk"
            >
              Join Community
            </Button> */}
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                value: 'Live',
                description: 'Mindful existence in harmony with AI',
              },
              {
                value: 'Learn',
                description: 'Continuous growth at your own rhythm',
              },
              {
                value: 'Work',
                description: 'Productive collaboration with AI',
              },
              {
                value: 'Community',
                description: 'Collective consciousness and support',
              },
            ].map((item, index) => (
              <motion.div
                key={item.value}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group text-center"
              >
                <h3 className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold text-xl mb-3">
                  {item.value}
                </h3>
                <p className="text-gray-300 font-medium text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-cyan-400/30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
