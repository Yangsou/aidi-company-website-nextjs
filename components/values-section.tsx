'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'

import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

const MD_BREAKPOINT = 768
const XL_BREAKPOINT = 1280

function VideoDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="relative aspect-video w-32 lg:w-[200px]">
          <Image
            src="/home/button-play-media.png"
            alt="AI and human connection"
            fill
            className="z-10 object-contain"
            priority
          />
        </div>
      </DialogTrigger>
      <DialogContent
        className="w-full max-w-[900px] rounded-none border-none bg-transparent p-0"
        hideClose
      >
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XqpTH0bSimI?si=7Mj8WkRgH7TlHUeB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ValuesSection() {
  const t = useTranslations('HomePage.ValuesSection')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      setIsMobile(w < MD_BREAKPOINT)
      setIsTablet(w >= MD_BREAKPOINT && w < XL_BREAKPOINT)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const features = [
    {
      iconBase: '/home/ai-companion.jpg',
      title: t('learning_rhythm'),
      description: t('learning_rhythm_desc'),
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      iconBase: '/home/aidi-academy.jpg',
      title: t('working_rhythm'),
      description: t('working_rhythm_desc'),
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      iconBase: '/home/ai-educational-organizations.png',
      title: t('life_rhythm'),
      description: t('life_rhythm_desc'),
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      iconBase: '/home/ai-businesses.jpg',
      title: t('organization_rhythm'),
      description: t('organization_rhythm_desc'),
      gradient: 'from-purple-500 to-indigo-600',
    },
  ]

  const getImageSrc = (iconBase: string) => {
    // Luôn dùng cùng một ảnh, không đổi khi hover
    return `${iconBase}`
  }

  const getFlexValue = (index: number) => {
    if (isMobile || isTablet) return 1
    if (hoveredIndex === null) return 1
    return hoveredIndex === index ? 1.1 : 0.6
  }

  const springTransition = {
    type: 'spring' as const,
    stiffness: 256,
    damping: 24,
    mass: 1,
  }
  const descriptionTransition = {
    duration: 0.45,
    ease: [0.33, 0.66, 0.2, 1] as const,
  }
  return (
    <>
      <section className="container relative w-full">
        <div className="relative w-full">
          <div className="w-full bg-[#F7F9FD] shadow-[0_0_8px_rgba(0,0,0,0.1)] md:absolute md:left-1/2 md:top-[-150px] md:-translate-x-1/2 lg:top-[-150px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="container mt-12 flex h-full flex-col gap-8 p-5 md:mt-0 xl:flex-row"
            >
              <div className="relative flex aspect-[744/419.28] w-full min-w-0 max-w-[744px] shrink items-center justify-center bg-[url(/home/home-youtube-thumbnail.png)] bg-cover xl:w-[744px] xl:shrink-0">
                <VideoDialog />
              </div>
              <div className="align-center flex flex-col justify-start gap-4 px-0 md:px-[52px] md:pt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="max-w-[744px] whitespace-pre-line text-left font-[Manrope] text-[14px] font-light leading-[150%] tracking-[0%] text-[#525757] md:text-[28px]"
                >
                  <p
                    className="align-middle"
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
        </div>
      </section>
      <section>
        <div className="w-full bg-[white] pb-12 pt-12 md:pt-[520px] lg:pt-[320px] xl:pt-[320px] 2xl:pt-[320px]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 text-left"
            >
              <h2 className="py-[16px] font-[Manrope] text-[32px] font-semibold leading-[110%] tracking-[0%] text-[#0036AF] md:text-[42px]">
                {t('insight_rhythm')}
              </h2>
            </motion.div>
          </div>

          <div className="flex min-h-[380px] w-full flex-col md:grid md:min-h-[380px] md:grid-cols-2 xl:flex xl:flex-row">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => !isMobile && !isTablet && setHoveredIndex(index)}
                onMouseLeave={() => !isMobile && !isTablet && setHoveredIndex(null)}
                className="flex min-w-0 flex-1 md:cursor-pointer"
                animate={{ flex: getFlexValue(index) }}
                transition={springTransition}
              >
                <Card className="duration-[600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group h-full w-full min-w-0 overflow-hidden rounded-none border-none shadow-none transition-all">
                  <CardContent className="flex h-full flex-col p-0 shadow-none">
                    <div className="relative aspect-video min-h-[200px] w-full min-w-0 overflow-hidden md:aspect-auto md:min-h-[320px] md:flex-1">
                      <Image
                        src={getImageSrc(feature.iconBase)}
                        alt={feature.title}
                        fill
                        className="duration-[600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] object-cover object-center transition-all"
                        priority={index === 0}
                        sizes="(max-width: 660px) 100vw, 25vw"
                      />
                      {/* Lớp phủ: ảnh đang hover giữ opacity-25, các ảnh còn lại tăng lên 50 */}
                      <div
                        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                        style={{
                          backgroundColor: 'rgba(0, 76, 245, 0.5)',
                          opacity:
                            !isMobile && hoveredIndex !== null && hoveredIndex !== index ? 1 : 0.5,
                        }}
                        aria-hidden
                      />
                      {/* Gradient phía dưới để text dễ đọc - ẩn trên mobile để full hình */}
                      <div
                        className="absolute inset-0 hidden bg-gradient-to-t from-black/70 via-black/20 to-transparent md:block"
                        aria-hidden
                      />
                      {/* Title - góc trên trái, padding theo design */}
                      <div className="absolute left-0 right-0 top-0 flex w-full max-w-full px-6 py-6 md:right-auto md:w-auto md:px-[32px] md:py-[32px]">
                        <h3
                          className={`max-w-full break-words font-[Manrope] font-semibold leading-[120%] tracking-[2%] text-white drop-shadow-md transition-[font-size] duration-300 md:text-[24px] ${
                            !isMobile && hoveredIndex === index
                              ? 'text-[30px] md:text-[30px]'
                              : 'text-[24px]'
                          }`}
                        >
                          {(() => {
                            const hasParen = feature.title.includes(' (')
                            if (!hasParen) return feature.title
                            if (!isMobile && hoveredIndex === index) return feature.title
                            const [main, rest] = feature.title.split(' (')
                            return (
                              <>
                                <span className="block">{main}</span>
                                <span className="block">{rest ? `(${rest}` : ''}</span>
                              </>
                            )
                          })()}
                        </h3>
                      </div>
                      {/* Description - góc dưới, padding theo design */}
                      <div className="absolute bottom-0 left-0 right-0 flex w-full max-w-full flex-col px-6 py-6 md:px-10 md:py-8">
                        <AnimatePresence mode="wait">
                          {isMobile || hoveredIndex === index ? (
                            <motion.p
                              key={`desc-${index}`}
                              initial={!isMobile ? { opacity: 0, y: 10 } : false}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 5 }}
                              transition={descriptionTransition}
                              className="max-w-full break-words font-[Manrope] text-[20px] font-normal leading-[150%] text-white/95 md:text-[20px]"
                            >
                              {feature.description}
                            </motion.p>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
