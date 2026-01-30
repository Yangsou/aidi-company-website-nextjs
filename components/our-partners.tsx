import { useTranslations } from 'next-intl'

function Items() {
  return (
    <>
      <img
        src="/home/logo-nbcs.png"
        alt="AI+DI Logo"
        className="h-[69px] w-[131px] object-contain"
      />
      <img
        src="/home/logo-auhs.png"
        alt="AI+DI Logo"
        className="h-[113px] w-[152px] object-contain"
      />
      <img
        src="/home/logo-uni-brid.png"
        alt="AI+DI Logo"
        className="h-[68px] w-[380px] object-contain"
      />
      <img
        src="/home/logo-mcp-hs.png"
        alt="AI+DI Logo"
        className="h-[73px] w-[225px] object-contain"
      />
      <img
        src="/home/logo-antioch-uni.png"
        alt="AI+DI Logo"
        className="h-[48px] w-[385px] object-contain"
      />
    </>
  )
}

export default function OurPartners() {
  const t = useTranslations('HomePage.PartnerSection')

  return (
    <section className="bg-white">
      <div className="gap-4 pt-12">
        <div className="text-center font-[Manrope] text-[56px] font-bold leading-[110%] tracking-[0%] text-[#0036AF]">
          {t('our_partners')}
        </div>
        {/* <div className="mx-auto mt-3 max-w-[730px] text-center align-middle font-[Manrope] text-xl font-normal leading-[150%] tracking-[0%] text-[#525757]">
          {t('our_partners_desc')}
        </div> */}
      </div>
      <div className="container relative my-6 h-[160px] w-full overflow-x-hidden">
        <div className="absolute left-0 flex h-full w-max animate-marquee-infinite items-center gap-[20px] md:gap-[40px]">
          <Items />
          <Items />
          <Items />
        </div>
      </div>
    </section>
  )
}
