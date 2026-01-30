'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'

const MD_BREAKPOINT = 768

export default function ValuesSection() {
  const t = useTranslations('HomePage.ValuesSection')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MD_BREAKPOINT)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const features = [
    {
      iconBase: '/home/ai-companion-x2',
      title: t('learning_rhythm'),
      description: t('learning_rhythm_desc'),
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      iconBase: '/home/aidi-academy-x2',
      title: t('working_rhythm'),
      description: t('working_rhythm_desc'),
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      iconBase: '/home/ai-educational-organizations-x2',
      title: t('life_rhythm'),
      description: t('life_rhythm_desc'),
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      iconBase: '/home/ai-businesses-x2',
      title: t('organization_rhythm'),
      description: t('organization_rhythm_desc'),
      gradient: 'from-purple-500 to-indigo-600',
    },
  ]

  const getImageSrc = (iconBase: string, index: number) => {
    // Mobile: luôn dùng 4 ảnh -hover.png, không hiệu ứng hover
    if (isMobile) return `${iconBase}-hover.png`
    // Desktop: đổi ảnh theo hover
    if (hoveredIndex === null) return `${iconBase}.png`
    if (hoveredIndex === index) return `${iconBase}-hover.png`
    return `${iconBase}-not-hover.png`
  }

  const getFlexValue = (index: number) => {
    if (isMobile) return 1
    if (hoveredIndex === null) return 1
    if (hoveredIndex === index) return 2.2
    return 0.6
  }
  return (
    <section className="container relative">
      <div className="relative">
        <div className="w-full bg-[#F7F9FD] shadow-2xl md:absolute md:left-1/2 md:top-[-150px] md:-translate-x-1/2 lg:top-[-150px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 h-full grid-cols-12 gap-8 p-4 md:mt-0 md:grid"
          >
            <div
              className="relative col-span-12 flex h-[calc(100vw_-_32px)] w-full items-center justify-center md:col-span-8 md:h-full"
              style={{
                background: '#0036AF',
                height: '420px',
              }}
            >
              <div className="relative aspect-video w-[200px]">
                <Image
                  src="/home/button-play-media.png"
                  alt="AI and human connection"
                  fill
                  className="z-10 object-contain"
                  priority
                />
              </div>
            </div>
            <div className="align-center col-span-12 flex flex-col justify-center gap-4 px-0 pt-6 md:col-span-4 md:px-4 md:pr-8">
              {/* <motion.p className="font-[Manrope] text-4xl font-semibold tracking-[0%] text-[#0036AF] md:text-[42px]">
                {t('what_we_do')}
              </motion.p> */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="whitespace-break-spaces align-middle font-[Manrope] text-[14px] font-normal leading-[150%] tracking-[0%] text-[#525757] md:text-[28px]"
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: t.markup('what_we_do_long_txt', {
                      b: (content) => `<b>${content}</b>`,
                    }),
                  }}
                />
              </motion.div>
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mb-4 flex flex-col justify-start gap-4 sm:flex-row md:mb-12"
              >
                <Link href="/products">
                  <Button
                    size="lg"
                    className="font-spaceGrotesk group h-[64px] rounded-none border-0 bg-[#DAF3F4] px-[30px] align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] tracking-[0%] text-[#0036AF] transition-all duration-300 hover:bg-[#A0DCDD] hover:shadow-cyan-500/25 [&_svg]:size-6"
                  >
                    {t('what_we_do_btn')}
                    <ArrowRight className="ml-[10px] h-5 w-5" />
                  </Button>
                </Link>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
        <div className="bg-[white] pb-12 pt-12 md:pt-[520px] lg:pt-[400px] xl:pt-[380px] 2xl:pt-[320px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 text-left"
          >
            <h2 className="pt-4 font-[Manrope] text-[32px] font-semibold leading-[110%] tracking-[0%] text-[#0036AF] md:text-[42px]">
              {t('insight_rhythm')}
            </h2>
          </motion.div>

          <div className="flex min-h-[320px] flex-col gap-4 md:min-h-[380px] md:flex-row md:gap-0">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                className="flex min-w-0 md:flex-1 md:cursor-pointer"
                animate={{ flex: getFlexValue(index) }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <Card className="group h-full w-full overflow-hidden rounded-none border-none shadow-none transition-all duration-300">
                  <CardContent className="flex h-full flex-col p-0 shadow-none">
                    <div className="relative aspect-video min-h-[200px] w-full overflow-hidden md:aspect-auto md:min-h-[320px] md:flex-1">
                      <Image
                        src={getImageSrc(feature.iconBase, index)}
                        alt={feature.title}
                        fill
                        className="object-contain object-center transition-opacity duration-300 md:object-cover"
                        priority={index === 0}
                        sizes="(max-width: 660px) 100vw, 25vw"
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" /> */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:p-5">
                        {/* <h3 className="font-[Manrope] text-[18px] font-semibold leading-[120%] tracking-[2%] md:text-[20px]">
                          {feature.title}
                        </h3> */}
                        {/* {hoveredIndex === index && (
                            <motion.p
                              initial={{ opacity: 1, height: 'auto' }}
                              // animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              // transition={{ duration: 0.25 }}
                              className="mt-2 font-[Manrope] text-[14px] font-normal leading-[150%] text-white/95 md:text-[15px]"
                            >
                              {feature.description}
                            </motion.p>
                          )} */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
