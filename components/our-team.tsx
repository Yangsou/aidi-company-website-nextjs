'use client'

// import { motion } from 'framer-motion'
// import { Heart, Zap, Shield, ArrowRight } from 'lucide-react'
// import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
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

export default function OurTeam() {
  return (
    <section className="z-20 mt-0 bg-[#F7F9FD] lg:mt-[-240px]">
      <div className="gap-4 py-12">
        <div className="flex justify-center">
          <div className="grid h-full w-[88%] grid-cols-12 gap-8 py-12">
            <div className="col-span-12 flex flex-col items-start justify-start gap-4">
              <div className="font-[Manrope] text-[56px] font-semibold leading-[110%] tracking-[0%] text-[#0036AF]">
                Our team
              </div>
              <div className="font-regular align-middle font-[Manrope] text-[20px] leading-[150%] tracking-[0%] text-[#525757]">
                Ai+Di is led by a diverse team of visionaries, engineers, educators, and strategists
                — united by one shared belief: that Artificial Intelligence should elevate humanity,
                not replace it. From the founders who shaped the vision to the experts driving
                innovation every day, each person at Ai+Di contributes to building a conscious
                ecosystem where technology grows with people, not against them.
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="h-[180px] w-[180px]">
                <img
                  src="about/TS-BS-Vo-Xuan_son.jpg"
                  alt="AI+DI Logo"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <div className="align-middle font-[Manrope] text-[24px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                  Vo Xuan Son
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-bold uppercase leading-[150%] tracking-[0%] text-[#0036AF]">
                  Chairman of the Board
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-normal leading-[150%] tracking-[0%] text-[#626262]">
                  A leader who defines Ai+Di's humanistic <br /> direction and guides its core
                  values.
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="h-[180px] w-[180px]">
                <img
                  src="about/a_thuc.png"
                  alt="AI+DI Logo"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <div className="align-middle font-[Manrope] text-[24px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                  Tran Huynh Duy Thuc
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-bold uppercase leading-[150%] tracking-[0%] text-[#0036AF]">
                  CEO & Founder
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-normal leading-[150%] tracking-[0%] text-[#626262]">
                  The visionary behind Ai+Di's philosophy 'AI that reflects, not replaces,'
                  inspiring a movement toward conscious technology made by and for people.
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="h-[180px] w-[180px]">
                <img
                  src="about/AiDi-Mr-Hans-Profile.jpg"
                  alt="AI+DI Logo"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <div className="align-middle font-[Manrope] text-[24px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                  Hansjoerg Wagner
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-bold uppercase leading-[150%] tracking-[0%] text-[#0036AF]">
                  Co-founder
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-normal leading-[150%] tracking-[0%] text-[#626262]">
                  Over 40 years of experience in global investment and technology. He is a
                  Co-founder of AI+DI and also a Co-founder of ELG-Educational Group (Austria).
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="h-[180px] w-[180px]">
                <img
                  src="about/a_Truong.png"
                  alt="AI+DI Logo"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <div className="align-middle font-[Manrope] text-[24px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                  Le Vinh Truong
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-bold uppercase leading-[150%] tracking-[0%] text-[#0036AF]">
                  Deputy CEO
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-normal leading-[150%] tracking-[0%] text-[#626262]">
                  A strategic advisor and seasoned executive bridging enterprise leadership and
                  academia to ensure Ai+Di's sustainable growth.
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="h-[180px] w-[180px]">
                <img
                  src="about/a_cong.png"
                  alt="AI+DI Logo"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <div className="align-middle font-[Manrope] text-[24px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                  Hoang Duc Cong
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-bold uppercase leading-[150%] tracking-[0%] text-[#0036AF]">
                  Director, Ai+Di ERP
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-normal leading-[150%] tracking-[0%] text-[#626262]">
                  With over 20 years in technology and digital transformation, he leads ERP
                  initiatives that merge human-centered governance with intelligent systems.
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="h-[180px] w-[180px]">
                <img
                  src="about/a_khiem-ava.png"
                  alt="AI+DI Logo"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <div className="align-middle font-[Manrope] text-[24px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                  Vu Ba Khiem
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-bold uppercase leading-[150%] tracking-[0%] text-[#0036AF]">
                  Deputy Executive Director, Ai+Di Academy
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-normal leading-[150%] tracking-[0%] text-[#626262]">
                  Bringing a decade of experience in digital media and operations, he helps shape
                  the Academy's creative and scalable learning ecosystem.
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="h-[180px] w-[180px]">
                <img
                  src="about/c_Phuong.png"
                  alt="AI+DI Logo"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <div className="align-middle font-[Manrope] text-[24px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                  Phan Thi Lan Phuong
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-bold uppercase leading-[150%] tracking-[0%] text-[#0036AF]">
                  Chief Growth & Operations Officer, Ai+Di Academy
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-normal leading-[150%] tracking-[0%] text-[#626262]">
                  With over 20 years in communications and organizational growth, she drives Ai+Di's
                  strategic expansion and leads operations for Ai+Di Academy, fostering sustainable
                  development and meaningful learning communities.
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="h-[180px] w-[180px]">
                <img
                  src="about/a_Khai.png"
                  alt="AI+DI Logo"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <div className="align-middle font-[Manrope] text-[24px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                  Tran Hoang Quang Khai
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-bold uppercase leading-[150%] tracking-[0%] text-[#0036AF]">
                  Chief of Tech Engineering
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-normal leading-[150%] tracking-[0%] text-[#626262]">
                  A data and cloud infrastructure expert, formerly with Rackspace Technology, and
                  one of Southeast Asia's first Databricks Developer Champions.
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="h-[180px] w-[180px]">
                <img
                  src="about/a_eel.png"
                  alt="AI+DI Logo"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <div className="align-middle font-[Manrope] text-[24px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                  Eelco Ebbers
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-bold uppercase leading-[150%] tracking-[0%] text-[#0036AF]">
                  Innovation Operations Manager
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-normal leading-[150%] tracking-[0%] text-[#626262]">
                  With 15 years of global experience in digital transformation and Lean management,
                  he brings systemic insight and mindfulness-driven innovation to Ai+Di's
                  operations.
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="h-[180px] w-[180px]">
                <img
                  src="about/a_Quang.png"
                  alt="AI+DI Logo"
                  className="h-full w-full rounded-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-start justify-start gap-2">
                <div className="align-middle font-[Manrope] text-[24px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                  Nguyen Quang (PhD)
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-bold uppercase leading-[150%] tracking-[0%] text-[#0036AF]">
                  R&D Lead cum Mathematical Modeler
                </div>
                <div className="align-middle font-[Manrope] text-[16px] font-normal leading-[150%] tracking-[0%] text-[#626262]">
                  A researcher and data scientist with 15+ years in AI and complex networks,
                  ensuring academic depth and transparency in every AI model within Ai+Di's systems.
                </div>
              </div>
            </div>
            <div className="col-span-12 bg-[#DAF3F4] p-16 lg:col-span-6">
              <div className="font-[Manrope] text-[48px] font-semibold leading-[70px] tracking-[0%] text-[#0036AF]">
                And over 100 members who share the same mission.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
