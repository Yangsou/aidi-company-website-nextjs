"use client"

import { motion } from "framer-motion"
import { Brain, Heart, Users, Lightbulb, Target, Compass, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

const principles = [
  {
    icon: Brain,
    title: "Conscious Intelligence",
    description:
      "AI that enhances human awareness rather than replacing human judgment, fostering deeper self-understanding.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Heart,
    title: "Emotional Harmony",
    description:
      "Technology that respects and nurtures human emotional well-being, creating balance in digital interactions.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building connections and fostering genuine human relationships through thoughtful technology design.",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: Lightbulb,
    title: "Mindful Innovation",
    description: "Creating solutions that serve humanity's highest potential while respecting natural human rhythms.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description:
      "Every feature designed with intention and meaningful impact, avoiding technology for technology's sake.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Compass,
    title: "Ethical Foundation",
    description: "Transparent, responsible AI development and deployment with human dignity at the center.",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Rhythmic Living",
    description: "Synchronizing technology with natural human rhythms and cycles for sustainable productivity.",
    gradient: "from-cyan-500 to-teal-600",
  },
]

// Team member interface based on Strapi response
interface TeamMember {
  id: number
  documentId: string
  name: string
  job_title: string
  description: Array<{
    type: string
    children: Array<{
      text: string
      type: string
    }>
  }>
  createdAt: string
  updatedAt: string
  publishedAt: string
  avatar_url?: string
}

export default function AboutSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('/api/team-members')
        const result = await response.json()

        if (response.ok) {
          setTeamMembers(result.data.data || [])
        } else {
          console.error('Failed to fetch team members:', result.error)
          setError('Failed to load team members')
        }
      } catch (error) {
        console.error('Error fetching team members:', error)
        setError('Failed to load team members')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  // Helper function to extract text from Strapi rich text
  const extractTextFromDescription = (description: TeamMember['description']): string => {
    if (!description || !Array.isArray(description)) return ''
    return description
      .map(block => 
        block.children
          ?.map(child => child.text)
          .join('') || ''
      )
      .join(' ')
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Vision & Mission
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-cyan-400">Our Vision</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    We believe the future of intelligence lies not in replicating human abilities, but in unlocking the deeper potential within each person — where Divine Intelligence and Artificial Intelligence coexist, complement, and evolve together.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg mt-4">
                    AI+DI envisions a world where every individual is supported to become a more balanced, wise, and empowered version of themselves, by living in alignment with the natural laws. It is a future where technology does not enslave or diminish humanity, but instead serves and enlightens it.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></div>
                    <h3 className="text-2xl font-bold text-blue-400">Our Mission</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                  Our mission is to build products and platforms that combine Artificial Intelligence with Divine Intelligence, enabling people to make decisions in harmony with natural laws — fostering deep inner transformation and sustainable external development.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg mt-4">
                  We are not just creating technology; we are designing a journey — where individuals, organizations, and communities can grow stronger without losing their inner peace.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* AI+DI Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI+DI Philosophy
            </span>
          </h3>
          <p className="text-center text-gray-400 mb-12 text-lg">Seven Principles Guiding Our Work</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.slice(0, 6).map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full group overflow-hidden">
                  <CardContent className="p-6">
                    {/* Glowing bullet point */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${principle.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <principle.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {principle.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>

                    {/* Subtle glow effect on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-lg`}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Rhythmic Living - positioned next to Ethical Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 h-full group overflow-hidden">
                <CardContent className="p-6">
                  {/* Glowing bullet point */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${principles[6].gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {/* create a temporary Icon variable for clarity */}
                      {(() => {
                        const Icon = principles[6].icon
                        return <Icon className="w-5 h-5 text-white" />
                      })()}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {principles[6].title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{principles[6].description}</p>

                  {/* Subtle glow effect on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${principles[6].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-lg`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h3>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Visionary leaders dedicated to conscious AI development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 transition-all duration-300 overflow-hidden group h-full">
                    <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse"></div>
                    <CardContent className="p-6">
                      <div className="h-6 bg-slate-700 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 bg-slate-700 rounded mb-3 animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-slate-700 rounded animate-pulse"></div>
                        <div className="h-3 bg-slate-700 rounded animate-pulse"></div>
                        <div className="h-3 bg-slate-700 rounded w-3/4 animate-pulse"></div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : error ? (
              // Error state
              <div className="col-span-full text-center py-12">
                <p className="text-red-400 text-lg">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors duration-300"
                >
                  Try Again
                </button>
              </div>
            ) : teamMembers.length === 0 ? (
              // Empty state
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">No team members found.</p>
              </div>
            ) : (
              // Team members
              teamMembers.map((member: TeamMember, index: number) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 overflow-hidden group h-full">
                    {/* Photo */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                        {member.avatar_url ? (
                          <img
                            src={member.avatar_url}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <img
                            src="/placeholder.svg"
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                      </div>
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p className="text-cyan-400 font-medium mb-3 text-sm">{member.job_title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {extractTextFromDescription(member.description)}
                      </p>
                    </CardContent>

                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
