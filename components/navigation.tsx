'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

const ACADEMY_BASE = process.env.NEXT_PUBLIC_ACADEMY_BASE_URL ?? '/#'
const ERP_BASE = process.env.NEXT_PUBLIC_ERP_BASE_URL ?? '/#'

export default function Navigation() {
  const t = useTranslations('HomePage')

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const solutionsCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  const openSolutions = () => {
    if (solutionsCloseTimeoutRef.current) {
      clearTimeout(solutionsCloseTimeoutRef.current)
      solutionsCloseTimeoutRef.current = null
    }
    setSolutionsOpen(true)
  }

  const closeSolutions = () => {
    solutionsCloseTimeoutRef.current = setTimeout(() => setSolutionsOpen(false), 150)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (solutionsCloseTimeoutRef.current) {
        clearTimeout(solutionsCloseTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isOpen) setMobileSolutionsOpen(false)
  }, [isOpen])

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  const solutionsSubMenus = [
    { name: t('solutions_education'), href: `${ACADEMY_BASE}`, internal: false },
    { name: t('solutions_enterprise'), href: `${ERP_BASE}`, internal: false },
  ]

  const navItems = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('solutions'), href: '/products', subMenus: solutionsSubMenus },
    ...(process.env.disableCareer === 'true' ? [] : [{ name: t('career'), href: '/career' }]),
    { name: t('blog'), href: '/blog' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-gray-200 bg-white shadow-sm shadow-gray-200/50 backdrop-blur-xl'
          : 'bg-white shadow-lg backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex h-[64px] items-center justify-between">
          <Link
            href="/"
            className="group mr-2 flex items-center space-x-2"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <motion.div className="flex items-center space-x-2">
              <div className="flex items-center justify-center">
                <img
                  src="/header/logo.svg"
                  alt="AI+DI Logo"
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden h-16 w-[756px] cursor-pointer items-center justify-end md:flex">
            {navItems.map((item) => {
              const hasSubMenus = 'subMenus' in item && item.subMenus.length > 0
              if (hasSubMenus && item.subMenus) {
                return (
                  <div
                    key={item.name}
                    className="relative h-full"
                    onMouseEnter={openSolutions}
                    onMouseLeave={closeSolutions}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        setSolutionsOpen((prev) => !prev)
                      }}
                      className="block h-full w-full text-left"
                      aria-expanded={solutionsOpen}
                      aria-haspopup="true"
                      aria-label={item.name}
                    >
                      <motion.div
                        className={cn(
                          'font-manrope group relative flex h-full cursor-pointer items-center px-6 align-middle text-[18px] font-normal leading-[64px] tracking-[0%] transition-colors duration-200',
                          'hover:bg-[#A3DDE1] hover:font-semibold hover:text-[#0036AF]',
                          solutionsOpen && 'bg-[#A0DCDD] font-semibold text-[#012F97]',
                          !solutionsOpen && 'text-[#626262]'
                        )}
                      >
                        {item.name}
                      </motion.div>
                    </button>
                    {solutionsOpen && (
                      <div
                        className="absolute left-0 top-full z-50 min-w-[200px] rounded-none border border-gray-200/80 bg-white p-0 font-normal shadow-lg"
                        role="menu"
                      >
                        {item.subMenus.map((sub) => {
                          const subItemClass = cn(
                            'font-manrope block px-4 py-3 text-[18px] font-normal last:border-b-0',
                            'bg-white font-normal text-[#626262] transition-colors duration-200',
                            'hover:bg-[#DAF3F4] hover:font-semibold hover:text-[#0036AF]'
                          )
                          return sub.internal ? (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                              role="menuitem"
                              className={subItemClass}
                            >
                              {sub.name}
                            </Link>
                          ) : (
                            <a
                              key={sub.name}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              role="menuitem"
                              className={subItemClass}
                            >
                              {sub.name}
                            </a>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="block h-full"
                >
                  <motion.div
                    className={cn(
                      'font-manrope group relative h-full px-6 align-middle text-lg font-normal leading-[64px] tracking-[0%] transition-all',
                      'hover:font-semibolds hover:bg-[#A0DCDD] hover:text-[#0036AF]',
                      {
                        'text-xl font-semibold leading-[64px] text-[#0036AF]': isActive(item.href),
                        'text-[#626262]': !isActive(item.href),
                      }
                    )}
                  >
                    <span className="group-hover:opacity-0">{item.name}</span>
                    <span className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-[#0036AF] opacity-0 group-hover:opacity-100">
                      {item.name}
                    </span>
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:text-white focus:outline-none"
              aria-label="toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="border-t border-cyan-500/20 bg-white shadow-lg shadow-cyan-500/10 backdrop-blur-xl md:hidden"
        >
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => {
              const hasSubMenus = 'subMenus' in item && item.subMenus.length > 0
              if (hasSubMenus && item.subMenus) {
                return (
                  <div
                    key={item.name}
                    className="space-y-0"
                  >
                    <div className="flex w-full items-center">
                      <button
                        type="button"
                        onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                        className={cn(
                          'font-manrope flex flex-1 items-center gap-1 rounded-md px-3 py-2 text-left text-[18px] font-semibold transition-colors',
                          'text-[#626262] hover:text-[#0036AF]'
                        )}
                        aria-expanded={mobileSolutionsOpen}
                        aria-haspopup="true"
                        aria-label={item.name}
                      >
                        {item.name}
                      </button>
                      <button
                        type="button"
                        onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                        className="rounded-md p-2"
                        aria-expanded={mobileSolutionsOpen}
                        aria-label={mobileSolutionsOpen ? 'Đóng menu' : 'Mở menu con'}
                      >
                        <ChevronDown
                          className={cn(
                            'h-5 w-5 shrink-0 transition-transform duration-200',
                            mobileSolutionsOpen ? 'rotate-180 text-[#0036AF]' : 'text-[#626262]'
                          )}
                        />
                      </button>
                    </div>
                    {mobileSolutionsOpen && (
                      <div className="space-y-0 border-l-2 border-[#0036AF]/20 pl-4">
                        {item.subMenus.map((sub) =>
                          sub.internal ? (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => {
                                setIsOpen(false)
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                              }}
                              className="font-manrope block cursor-pointer rounded-md px-2 py-2 text-[16px] font-normal text-[#626262] hover:text-[#0036AF]"
                            >
                              {sub.name}
                            </Link>
                          ) : (
                            <a
                              key={sub.name}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsOpen(false)}
                              className="font-manrope block cursor-pointer rounded-md px-2 py-2 text-[16px] font-normal text-[#626262] hover:text-[#0036AF]"
                            >
                              {sub.name}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setIsOpen(false)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  <div
                    className={`font-manrope block rounded-md px-3 py-2 align-middle text-[20px] font-semibold leading-[150%] tracking-[0%] transition-colors duration-200 ${
                      isActive(item.href) ? 'text-[#0036AF]' : 'text-[#626262] hover:text-[#0036AF]'
                    }`}
                  >
                    {item.name}
                  </div>
                </Link>
              )
            })}
            {/* <div className="px-3 py-2">
              <Button
                onClick={() => {
                  setIsOpen(false);
                  scrollToContact();
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 py-2 text-sm font-medium shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Get Started
              </Button>
            </div> */}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
