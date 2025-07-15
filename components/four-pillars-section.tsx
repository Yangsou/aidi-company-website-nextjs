"use client"

import { motion } from "framer-motion"
import { Heart, Brain, Zap, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const pillars = [
  {
    icon: Heart,
    title: "Live",
    subtitle: "Mindful existence in harmony with AI",
    description: "Embrace conscious living where technology enhances rather than overwhelms your daily experience.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Brain,
    title: "Learn",
    subtitle: "Continuous growth at your own rhythm",
    description: "Personalized learning journeys that adapt to your natural patterns and optimal growth moments.",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: Zap,
    title: "Work",
    subtitle: "Productive collaboration with AI",
    description: "Seamless integration of AI tools that amplify your capabilities while maintaining human creativity.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Community",
    subtitle: "Collective consciousness and support",
    description: "Connect with like-minded individuals on a shared journey of conscious AI integration.",
    gradient: "from-blue-500 to-purple-600",
  },
]

export default function FourPillarsSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Four Pillars of </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Conscious AI
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Our approach to integrating artificial intelligence into human life with intention and awareness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 h-full group overflow-hidden">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    <pillar.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-purple-400 font-medium mb-4 text-sm">{pillar.subtitle}</p>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-sm">{pillar.description}</p>
                </CardContent>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
