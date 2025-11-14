'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

// import { Heart, Zap, Shield, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'

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

export default function OurActivitys() {
  return (
    <section className="bg-[#DAF3F4]">
      <div className="gap-4 py-12">
        <div className="text-center font-[Manrope] text-[56px] font-bold leading-[110%] tracking-[0%] text-[#202222]">
          Our Activitys
        </div>
        <div className="font-regular text-center align-middle font-[Manrope] text-[20px] leading-[150%] tracking-[0%] text-[#525757]">
          To create an AI grounded in trust and humanity — one that blends Artificial and <br />{' '}
          Natural Intelligence to enhance human awareness, happiness, and growth.
        </div>

        <div className="flex justify-center">
          <div className="grid h-full w-[88%] grid-cols-12 gap-8 py-12">
            <div className="col-span-12 h-full lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="h-full bg-[#F7F9FD]"
              >
                <Card className="group h-full overflow-hidden rounded-none border-none shadow-none">
                  <CardContent className="p-0 text-center shadow-none">
                    {/* Icon */}
                    <motion.div
                      // whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative mx-auto flex h-[489px] items-center justify-start"
                    >
                      <Image
                        src="/home/bod-team.jpg"
                        alt="AI and human connection"
                        fill
                        className="z-10 object-cover object-center"
                        priority
                      />
                    </motion.div>

                    <div className="h-[206px] p-[20px] text-left">
                      {/* Title */}
                      <h3 className="align-middle font-[Manrope] text-[42px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                        Lorem Ipsum
                      </h3>

                      {/* Description */}
                      <p className="align-middle font-[Manrope] text-[18px] font-normal leading-[150%] tracking-[0%] text-[#626262x]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s,
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="group h-full overflow-hidden rounded-none border-none shadow-none">
                      <CardContent className="p-0 text-center shadow-none">
                        {/* Icon */}
                        <motion.div
                          // whileHover={{ scale: 1.1, rotate: 5 }}
                          className="relative mx-auto flex h-[160px] items-center justify-start"
                        >
                          <Image
                            src="/home/bod-team.jpg"
                            alt="AI and human connection"
                            fill
                            className="z-10 object-cover object-center"
                            priority
                          />
                        </motion.div>

                        <div className="h-[206px] bg-[#F7F9FD] p-[20px] text-left">
                          {/* Title */}
                          <h3 className="align-middle font-[Manrope] text-[42px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                            Lorem Ipsum
                          </h3>

                          {/* Description */}
                          <p className="align-middle font-[Manrope] text-[18px] font-normal leading-[150%] tracking-[0%] text-[#626262x]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s,
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="group h-full overflow-hidden rounded-none border-none shadow-none">
                      <CardContent className="p-0 text-center shadow-none">
                        {/* Icon */}
                        <motion.div
                          // whileHover={{ scale: 1.1, rotate: 5 }}
                          className="relative mx-auto flex h-[160px] items-center justify-start"
                        >
                          <Image
                            src="/home/girl-team.jpg"
                            alt="AI and human connection"
                            fill
                            className="z-10 object-cover object-center"
                            priority
                          />
                        </motion.div>

                        <div className="h-[206px] bg-[#F7F9FD] p-[20px] text-left">
                          {/* Title */}
                          <h3 className="align-middle font-[Manrope] text-[42px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                            Lorem Ipsum
                          </h3>

                          {/* Description */}
                          <p className="align-middle font-[Manrope] text-[18px] font-normal leading-[150%] tracking-[0%] text-[#626262x]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s,
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="group h-full overflow-hidden rounded-none border-none shadow-none">
                      <CardContent className="p-0 text-center shadow-none">
                        {/* Icon */}
                        <motion.div
                          // whileHover={{ scale: 1.1, rotate: 5 }}
                          className="relative mx-auto flex h-[160px] items-center justify-start bg-[#0036AF]"
                        >
                          {/* <Image
                            src="home/bod-team.jpg"
                            alt="AI and human connection"
                            fill
                            className="object-cover object-center z-10"
                            priority
                          /> */}
                        </motion.div>

                        <div className="h-[206px] bg-[#F7F9FD] p-[20px] text-left">
                          {/* Title */}
                          <h3 className="align-middle font-[Manrope] text-[42px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                            Lorem Ipsum
                          </h3>

                          {/* Description */}
                          <p className="align-middle font-[Manrope] text-[18px] font-normal leading-[150%] tracking-[0%] text-[#626262x]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s,
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <Card className="group h-full overflow-hidden rounded-none border-none shadow-none">
                      <CardContent className="p-0 text-center shadow-none">
                        {/* Icon */}
                        <motion.div
                          className="relative mx-auto flex h-[160px] items-center justify-start bg-[#0036AF]"
                         />

                        <div className="h-[206px] bg-[#F7F9FD] p-[20px] text-left">
                          {/* Title */}
                          <h3 className="align-middle font-[Manrope] text-[42px] font-semibold leading-[110%] tracking-[0%] text-[#202222]">
                            Lorem Ipsum
                          </h3>

                          {/* Description */}
                          <p className="align-middle font-[Manrope] text-[18px] font-normal leading-[150%] tracking-[0%] text-[#626262x]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s,
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
