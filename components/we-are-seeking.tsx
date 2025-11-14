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

export default function WeAreSeeking() {
  const jobs = [
    {
      tags: ['Manager', 'On-site', '10+ years'],
      title: 'Chief Executive Officer (CEO)',
      category: 'Executive Management',
      location: 'HCM',
      days: '0 days',
    },
    {
      tags: ['Specialist', 'Hybrid', '2 years'],
      title: 'Data Scientist',
      category: 'Data Science',
      location: 'Da Nang',
      days: '0 days',
    },
    {
      tags: ['Executive', 'On-site', '8 years'],
      title: 'Sales Executive',
      category: 'Sales',
      location: 'Ha Noi',
      days: '0 days',
    },
    {
      tags: ['Entry-level', 'Remote', '1 year'],
      title: 'Content writer',
      category: 'Comunication & Growth',
      location: 'Da Nang',
      days: '0 days',
    },
  ]

  const tagColors: Record<string, string> = {
    Manager: 'bg-blue-100 text-blue-600',
    'On-site': 'bg-indigo-100 text-indigo-600',
    '10+ years': 'bg-purple-100 text-purple-600',

    Specialist: 'bg-green-100 text-green-600',
    Hybrid: 'bg-yellow-100 text-yellow-600',
    '2 years': 'bg-blue-100 text-blue-600',

    Executive: 'bg-yellow-100 text-yellow-600',
    '8 years': 'bg-blue-100 text-blue-600',

    'Entry-level': 'bg-teal-100 text-teal-600',
    Remote: 'bg-pink-100 text-pink-600',
    '1 year': 'bg-blue-100 text-blue-600',
  }
  return (
    <section className="bg-[#EDF3FF]">
      <div className="flex justify-center">
        <div className="grid h-full w-[88%] grid-cols-12 gap-8 py-12">
          <div className="col-span-12 align-middle font-[Manrope] text-[32px] font-semibold leading-[130%] tracking-normal text-[#202222]">
            We are seeking for
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="bg-white px-[30px] py-[25px]">
              <div className="font-[Manrope] text-[28px] font-semibold leading-[130%] tracking-normal text-[#202222]">
                Location
              </div>
              <div className="mt-4 space-y-3">
                <label className="flex cursor-pointer select-none items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded-sm border border-gray-400 accent-[#0036AF]"
                  />
                  <span className="font-[Manrope] text-[18px] font-normal leading-[150%] text-[#525757]">
                    Ho Chi Minh
                  </span>
                </label>

                <label className="flex cursor-pointer select-none items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded-sm border border-gray-400 accent-[#0036AF]"
                  />
                  <span className="font-[Manrope] text-[18px] font-normal leading-[150%] text-[#525757]">
                    Ha Noi
                  </span>
                </label>

                <label className="flex cursor-pointer select-none items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded-sm border border-gray-400 accent-[#0036AF]"
                  />
                  <span className="font-[Manrope] text-[18px] font-normal leading-[150%] text-[#525757]">
                    Da Nang
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="border border-gray-200 shadow-sm"
                >
                  <div className="flex w-full flex-col items-start justify-between gap-4 bg-white p-6 px-[30px] py-[25px]">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag: string, i: number) => (
                          <span
                            key={i}
                            className={`px-3 py-1 font-[manrope] text-[16px] text-xs font-medium font-normal leading-[150%] text-[#254BC8] ${tagColors[tag] ?? ''}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div>
                        <span className="font-[Manrope] text-[16px] font-normal leading-[150%] text-[#525757]">
                          {job.days}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-full flex-col">
                      <h3 className="font-[Manrope] text-[24px] font-semibold leading-[140%] text-[#202222]">
                        {job.title}
                      </h3>

                      <p className="font-[Manrope] text-[18px] font-normal leading-[150%] text-[#525757]">
                        {job.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-between bg-[#EDF3FF] px-[30px] py-[10px]">
                    <div className="flex items-center gap-2">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.875 10.4165C21.875 17.7082 12.5 23.9582 12.5 23.9582C12.5 23.9582 3.125 17.7082 3.125 10.4165C3.125 7.9301 4.11272 5.54553 5.87087 3.78738C7.62903 2.02922 10.0136 1.0415 12.5 1.0415C14.9864 1.0415 17.371 2.02922 19.1291 3.78738C20.8873 5.54553 21.875 7.9301 21.875 10.4165Z"
                          stroke="#202222"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.5 13.5415C14.2259 13.5415 15.625 12.1424 15.625 10.4165C15.625 8.69061 14.2259 7.2915 12.5 7.2915C10.7741 7.2915 9.375 8.69061 9.375 10.4165C9.375 12.1424 10.7741 13.5415 12.5 13.5415Z"
                          stroke="#202222"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="font-[Manrope] text-[16px] font-medium leading-[150%] text-[#202222]">
                        {job.location}
                      </span>
                    </div>

                    <button className="border border-[#4162CF] px-4 py-2 align-middle font-[Manrope] text-[18px] font-normal leading-[150%] text-[#4162CF]">
                      View job
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-center pt-4">
                <button className="bg-[#DAF3F4] px-4 py-2 align-middle font-[Manrope] text-[18px] font-normal leading-[150%] text-[#4162CF]">
                  View more (12)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
