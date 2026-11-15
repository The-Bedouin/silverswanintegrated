'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Quote,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageToggle } from '@/components/ui/LanguageToggle'

// 1. Logo Component
const Logo = () => (
  <a href="/" className="block">
    <Image
      src="/logos/silverswanlogo.png"
      alt="Silverswan Logo"
      width={180}
      height={50}
      className="h-auto w-auto max-h-12"
      priority
    />
  </a>
)

// 2. Floating Navigation Pills
const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.team, href: '/team' },
    { label: t.nav.contact, href: '/contact' },
  ]

  return (
    <nav className="absolute top-8 right-8 z-30 flex items-center gap-3 hidden md:flex">
      {/* Language Toggle */}
      <LanguageToggle variant="dark" />

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white flex items-center gap-2 hover:bg-white/25 transition-all"
        >
          {t.nav.allPages}
          <ChevronDown
            size={14}
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-2xl p-2 flex flex-col gap-1 border border-swan-grey">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-swan-midnight/70 hover:bg-swan-lavender rounded-lg hover:text-swan-midnight text-left block transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <a
        href="/contact"
        className="bg-white/15 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm font-medium text-white hover:bg-white/25 transition-all"
      >
        {t.nav.contact}
      </a>

      <a
        href="/contact"
        className="bg-swan-blue text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-swan-blue/90 transition-all"
      >
        {t.nav.joinUs}
      </a>
    </nav>
  )
}

// --- Main Hero V2 Component ---
export function HeroV2() {
  const { t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const mobileNavItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.team, href: '/team' },
    { label: t.nav.contact, href: '/contact' },
  ]

  return (
    <main className="w-full font-sans">
      {/* Mobile Navbar */}
      <div className="md:hidden sticky top-0 bg-swan-ivory z-50 shadow-sm">
        <div className="p-5 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-2">
            <LanguageToggle variant="light" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2 text-swan-midnight/60 hover:bg-swan-lavender rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="px-5 pb-5 pt-2 bg-swan-ivory border-t border-swan-grey flex flex-col gap-1 shadow-lg">
            {mobileNavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-swan-midnight/80 hover:bg-swan-lavender hover:text-swan-midnight rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-5 py-2.5 bg-swan-blue text-white rounded-full text-sm font-semibold text-center shadow-md hover:bg-swan-blue/90 transition-all"
            >
              {t.nav.joinUs}
            </a>
          </div>
        )}
      </div>

      {/* ── CINEMATIC FULL-BLEED HERO ── */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/herosectionpicture.jpg"
            alt="Diverse group of seniors and newcomers learning technology together"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 22%' }}
            priority
          />
        </div>

        {/* Multi-layer overlay for readability (density reduced by half) */}
        <div className="absolute inset-0 bg-gradient-to-b from-swan-midnight/30 via-swan-midnight/15 to-swan-midnight/40" />
        {/* Subtle warm-blue tint (reduced by half) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-swan-blue/10 via-transparent to-transparent" />
        {/* Subtle right-side vignette to ensure crisp readability for top-right text */}
        <div className="absolute inset-0 bg-gradient-to-l from-swan-midnight/40 via-transparent to-transparent pointer-events-none" />

        {/* Desktop Logo */}
        <div className="hidden md:block absolute top-8 left-8 lg:left-16 z-30">
          <Logo />
        </div>

        {/* Floating Pretty Quote — Top Left */}
        <div className="absolute top-6 sm:top-24 md:top-28 left-6 sm:left-8 lg:left-16 z-30">
          <div className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
            <Quote size={13} className="text-swan-sky flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity rotate-180" />
            <p className="text-xs sm:text-sm font-light italic tracking-wider text-white/95">
              Bienvenue à Silverswan.
            </p>
          </div>
        </div>

        {/* Desktop Floating Nav */}
        <FloatingNav />

        {/* ── TOP-RIGHT CONTENT ── */}
        <div className="relative z-20 min-h-screen flex flex-col justify-start pt-24 md:pt-32 lg:pt-36 px-6 sm:px-10 lg:px-16 pb-28">
          <div className="w-full flex justify-end">
            <div className="max-w-xl text-left flex flex-col items-start">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-bold tracking-[0.16em] uppercase mb-4 shadow-sm">
                <Sparkles size={11} className="text-swan-sky" />
                {t.hero.badge}
              </div>

              {/* Main headline - reduced by half in size */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight drop-shadow-md">
                {t.hero.titlePart1}{' '}
                <span className="italic font-light text-swan-sky">{t.hero.titleHighlight}</span>{' '}
                {t.hero.titlePart2}
              </h1>

              {/* Underline accent */}
              <div className="mt-2 h-0.5 w-32 sm:w-44 bg-gradient-to-r from-swan-sky via-swan-sky/60 to-transparent rounded-full" />

              {/* Sub-headline - reduced by half in size */}
              <p className="mt-4 text-xs sm:text-sm md:text-base text-white/85 leading-relaxed drop-shadow-sm max-w-lg">
                {t.hero.subtitle}
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="group px-6 py-3 bg-swan-blue text-white rounded-full font-bold text-sm flex items-center gap-2.5 hover:bg-swan-blue/90 hover:shadow-xl hover:shadow-swan-blue/30 transition-all duration-300"
                >
                  {t.hero.getStarted}
                  <div className="w-6 h-6 bg-white/15 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight size={13} />
                  </div>
                </a>
                <a
                  href="/about"
                  className="px-6 py-3 rounded-full font-semibold text-sm text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  {t.hero.learnMore}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-40 hover:opacity-70 transition-opacity">
          <ChevronDown size={20} className="text-white animate-bounce" />
        </div>
      </section>
    </main>
  )
}