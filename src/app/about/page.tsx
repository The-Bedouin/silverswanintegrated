'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Shield, Zap, Globe, Menu, ChevronDown, MapPin } from 'lucide-react'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageToggle } from '@/components/ui/LanguageToggle'

// Logo Component
const Logo = () => (
  <Link href="/" className="block">
    <Image
      src="/logos/silverswanlogo.png"
      alt="Silverswan Logo"
      width={180}
      height={50}
      className="h-auto w-auto max-h-12"
      priority
    />
  </Link>
)

// Floating Navigation
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
    <nav className="absolute top-8 right-8 z-20 hidden md:flex items-center gap-3">
      <LanguageToggle variant="light" />

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-swan-midnight flex items-center gap-2 shadow-sm hover:bg-white transition-all"
        >
          {t.nav.allPages}
          <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-xl p-2 flex flex-col gap-1 border border-swan-grey">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-swan-midnight/70 hover:bg-swan-lavender rounded-lg hover:text-swan-midnight text-left block"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link
        href="/contact"
        className="bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-swan-midnight shadow-sm hover:bg-white transition-all"
      >
        {t.nav.contact}
      </Link>

      <Link
        href="/contact"
        className="bg-swan-blue text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-swan-blue/90 transition-all"
      >
        {t.nav.joinUs}
      </Link>
    </nav>
  )
}

const ValueCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any
  title: string
  description: string
}) => (
  <div className="flex flex-col items-start p-6 bg-white rounded-3xl shadow-sm border border-swan-grey hover:shadow-md transition-shadow duration-300">
    <div className="w-10 h-10 rounded-2xl bg-swan-lavender flex items-center justify-center mb-4 text-swan-blue">
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="text-xl font-bold text-swan-midnight mb-3">{title}</h3>
    <p className="text-swan-midnight/50 leading-relaxed text-sm">{description}</p>
  </div>
)

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col bg-swan-ivory font-sans">
      <main className="flex-grow relative pb-24">
        {/* Mobile Header */}
        <div className="md:hidden p-6 flex justify-between items-center sticky top-0 bg-swan-ivory z-50 shadow-sm">
          <Logo />
          <div className="flex items-center gap-2">
            <LanguageToggle variant="light" />
            <button className="p-2 text-swan-midnight/60 hover:bg-swan-lavender rounded-full transition-colors">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Desktop Logo */}
        <div className="hidden md:block px-6 sm:px-10 lg:px-16 pt-6 pb-3">
          <Logo />
        </div>

        {/* Floating Navigation (Desktop) */}
        <FloatingNav />

        {/* 1. HERO SECTION */}
        <section className="relative pt-6 pb-12 md:pt-8 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swan-lavender text-swan-blue text-xs font-bold tracking-wide uppercase mb-6 animate-fade-in">
              {t.aboutPage.heroBadge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-swan-midnight tracking-tight mb-6 leading-[1.1]">
              {t.aboutPage.heroTitle1} <br />
              <span className="text-swan-blue">{t.aboutPage.heroTitleHighlight}</span>
            </h1>
            <p className="text-lg text-swan-midnight/50 max-w-2xl mx-auto leading-relaxed mb-8">
              {t.aboutPage.heroSubtitle}
            </p>

            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/silverswanaboutsection.jpg"
                alt="Seniors interracting in community"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-swan-midnight/20 to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-swan-lavender rounded-full blur-3xl -z-10 opacity-40 pointer-events-none" />
        </section>

        {/* 2. WHY WE STARTED */}
        <section className="py-12 bg-swan-grey">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-swan-midnight mb-6 tracking-tight">
                  {t.aboutPage.whyTitle}
                </h2>
                <div className="space-y-6 text-lg text-swan-midnight/60 leading-relaxed">
                  <p>
                    The Federation of Canadian Municipalities estimates that approximately{' '}
                    <span className="font-bold text-swan-midnight">{t.aboutPage.whyP1Bold}</span>
                    {t.aboutPage.whyP1Rest}
                  </p>
                  <p>{t.aboutPage.whyP2}</p>
                  <p>
                    <span className="font-bold text-swan-blue">{t.aboutPage.whyP3Bold}</span>
                    {t.aboutPage.whyP3Rest}
                  </p>
                </div>
              </div>

              <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden shadow-xl border border-swan-grey/80">
                <Image
                  src="/images/seniorcouple.jpg"
                  alt="Senior couple smiling together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR PILLARS */}
        <section className="py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-swan-midnight mb-4 tracking-tight">
                {t.aboutPage.pillarsTitle}
              </h2>
              <p className="text-lg text-swan-midnight/50">{t.aboutPage.pillarsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ValueCard icon={Shield} title={t.aboutPage.pillar1Title} description={t.aboutPage.pillar1Desc} />
              <ValueCard icon={Zap} title={t.aboutPage.pillar2Title} description={t.aboutPage.pillar2Desc} />
              <ValueCard icon={Globe} title={t.aboutPage.pillar3Title} description={t.aboutPage.pillar3Desc} />
            </div>
          </div>
        </section>

        {/* 4. LOCATION */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-swan-grey flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-swan-lavender flex items-center justify-center flex-shrink-0 text-swan-blue">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-swan-midnight">{t.aboutPage.locationTitle}</h3>
                <p className="text-swan-midnight/60 text-base mt-1">{t.aboutPage.locationValue}</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-swan-blue text-white rounded-full text-sm font-semibold shadow-md hover:bg-swan-blue/90 transition-all whitespace-nowrap"
            >
              {t.aboutPage.contactUs}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
