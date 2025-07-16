"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Send, MapPin, Globe, Phone, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { InstagramIcon, TikTokIcon, FacebookIcon, YouTubeIcon, LinkedInIcon } from "./social-icons"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "contact@aidi.world",
    description: "",
    href: "mailto:contact@aidi.world",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    content: "2 Ton Duc Thang, Saigon Ward, Ho Chi Minh City",
    description: "",
    href: "#",
  },
  {
    icon: MapPin,
    title: "Business Office",
    content: "1st and 4th Floors, 46 Bach Dang, Tan Son Hoa Ward, Ho Chi Minh City",
    description: "",
    href: "#",
  },
]

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/aidi",
    icon: FacebookIcon,
    color: "from-blue-600 to-blue-700",
    hoverColor: "hover:from-blue-500 hover:to-blue-600",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/ai+di_world",
    icon: InstagramIcon,
    color: "from-pink-600 to-purple-600",
    hoverColor: "hover:from-pink-500 hover:to-purple-500",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@ai+di_world",
    icon: YouTubeIcon,
    color: "from-red-600 to-red-700",
    hoverColor: "hover:from-red-500 hover:to-red-600",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@aidiworld",
    icon: TikTokIcon,
    color: "from-slate-800 to-black",
    hoverColor: "hover:from-slate-700 hover:to-slate-900",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aidiworld",
    icon: LinkedInIcon,
    color: "from-blue-600 to-blue-700",
    hoverColor: "hover:from-blue-500 hover:to-blue-600",
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const scrollToContactForm = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone_number: "",
          subject: "",
          message: ""
        })
      } else {
        console.error('Contact form error:', result.error)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Floating background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Contact Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to join the conscious AI revolution? We'd love to hear from you and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Send us a message</h3>
                    <p className="text-gray-400">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstname" className="text-sm font-medium text-gray-300">
                        First Name *
                      </label>
                      <Input
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                        className="bg-slate-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-12 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastname" className="text-sm font-medium text-gray-300">
                        Last Name *
                      </label>
                      <Input
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                        className="bg-slate-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-12 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                      className="bg-slate-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-12 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone_number" className="text-sm font-medium text-gray-300">
                      Phone Number *
                    </label>
                    <Input
                      id="phone_number"
                      name="phone_number"
                      type="tel"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      required
                      className="bg-slate-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-12 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      required
                      className="bg-slate-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 h-12 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your project, questions, or how we can collaborate..."
                      required
                      className="bg-slate-800/50 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 min-h-[140px] resize-none transition-all duration-300"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <p className="text-green-400 text-sm">Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-sm">Sorry, there was an error sending your message. Please try again.</p>
                    </div>
                  )}

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white border-0 py-4 text-lg font-medium shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Send className="mr-2 w-5 h-5 relative z-10" />
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Whether you're interested in our products, want to join our community, or explore partnership
                opportunities, we're here to help you on your journey toward conscious living with AI.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800 to-slate-700 backdrop-blur-sm border border-cyan-500/20 rounded-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">
                      {info.title}
                    </h4>
                    <p className="text-cyan-400 font-medium mb-1">{info.content}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="pt-8 border-t border-cyan-500/20">
              <h4 className="text-white font-semibold mb-6 text-lg">Follow Our Journey</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`flex flex-col items-center p-4 bg-gradient-to-br ${social.color} ${social.hoverColor} backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl`}
                  >
                    <social.icon className="text-white w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Schedule a Call CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-800 to-slate-700 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center"
            >
              <h4 className="text-white font-semibold mb-2">Prefer to schedule a call?</h4>
              <p className="text-gray-400 text-sm mb-4">Book a 30-minute discovery call to discuss your needs</p>
              <Button
                onClick={scrollToContactForm}
                variant="outline"
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 backdrop-blur-sm bg-transparent"
              >
                Schedule a Call
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
