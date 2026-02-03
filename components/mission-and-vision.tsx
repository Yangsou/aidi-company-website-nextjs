'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function MissionAndVision() {
  const t = useTranslations('HomePage.MissionVisionSection')

  return (
    <section
      id="mission-and-vision"
      className="relative flex h-[860px] overflow-hidden bg-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home/mission-and-vision-bg.svg"
          alt="AI and human connection"
          fill
          className="hidden object-cover object-bottom lg:block"
          priority
        />
        <div className="flex h-full w-full flex-col justify-between md:flex-row lg:flex-row pt-[4rem]">
          {/* Mission - iPad: 1 cột cân đối, text trắng trên nền xanh đậm */}
          <div className="relative flex flex-1 flex-col justify-center gap-4 bg-[#0036AF] pb-6 pl-8 pr-8 pt-12 md:pb-16 md:pl-10 md:pr-10 md:pt-16 lg:bg-transparent lg:pb-32 lg:pl-20 lg:pr-0 lg:pt-0">
            <Image
              src="/home/mission-image-new.png"
              alt="AI and human connection"
              width={117}
              height={119}
              className="md:h-[102px] md:w-[100px] lg:h-[119px] lg:w-[117px]"
            />
            <div className="font-[Manrope] text-[32px] font-semibold leading-[110%] tracking-normal text-white md:text-[36px] lg:text-[42px] lg:text-[#FFFFFF]">
              {t('mission')}
            </div>
            <p className="min-h-[12rem] w-auto pr-[50px] align-middle font-[Manrope] text-[18px] font-normal leading-[150%] tracking-normal text-white md:text-[19px] lg:w-[486px] lg:text-[20px] lg:text-[#FFFFFF]">
              {t('mission_desc')}
            </p>
          </div>

          {/* Vision - iPad: 1 cột cân đối, text xanh đậm trên nền xanh nhạt */}
          <div className="relative flex flex-1 flex-col items-end justify-center gap-4 bg-[#C7EFF0] pb-20 pl-8 pr-8 pt-12 text-right md:pb-16 md:pl-10 md:pr-10 md:pt-16 lg:bg-transparent lg:pb-32 lg:pl-0 lg:pr-20 lg:pt-0">
            <Image
              src="/home/vision-image-new.png"
              alt="AI and human connection"
              width={117}
              height={119}
              className="md:h-[102px] md:w-[100px] lg:h-[119px] lg:w-[117px]"
            />
            <div className="font-[Manrope] text-[32px] font-semibold leading-[110%] tracking-normal text-[#0036AF] md:text-[36px] lg:text-[42px]">
              {t('vision')}
            </div>
            <p className="min-h-[12rem] w-auto align-middle font-[Manrope] text-[18px] font-normal leading-[150%] tracking-normal text-[#1a365d] md:text-[19px] md:text-[#0036AF]/90 lg:w-[420px] lg:text-[20px] lg:text-[#202222]">
              {t('vision_desc')}
            </p>
          </div>
        </div>
        {/* Dark overlay for better text readability */}
      </div>
    </section>
  )
}
