import Image from 'next/image'

import { Toaster } from '../ui/sonner'

import AcademyContatctForm from './pdt-academt-contact-form'

export default function AcademyContactView() {
  return (
    <div className="relative w-full overflow-hidden pt-16">
      <div className="absolute left-0 top-0 h-full w-full bg-[#DAF3F4] bg-[url('/about/footer-bg.png')] bg-cover bg-bottom bg-no-repeat lg:bg-cover" />

      <div className="container relative pb-32 pt-16">
        <div className="relative z-10">
          <p className="text-3xl font-semibold text-[#525757] lg:text-[42px] lg:leading-[1.3]">
            Đăng ký <span className="text-blue-400">TƯ VẤN</span> cùng Ai+Di Academy
          </p>
          <p className="mt-2 text-lg text-[#525757] lg:text-[22px] lg:leading-normal">
            Hãy để Ai+Di Academy cùng bạn đi tới hành trình du học nhé
          </p>
        </div>
        <div className="relative z-10 mt-6 w-full lg:mt-6 lg:max-w-[656px]">
          <AcademyContatctForm />
        </div>

        <div className="absolute right-0 top-[126px] hidden h-[892px] w-[574px] lg:block">
          <Image
            src="/product/pdt-academy-contact-hero.png"
            fill
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
      <Toaster />
    </div>
  )
}
