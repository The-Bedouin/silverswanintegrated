'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ChevronDown, ArrowRight, Quote } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Footer } from '@/components/sections/Footer'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageToggle } from '@/components/ui/LanguageToggle'

interface TeamMember {
  name: string
  role: string
  bio: string
  quote: string
  imageUrl: string
  imageAlt: string
  imagePosition?: string
  email?: string
  linkedin?: string
  highlights: string[]
  initials: string
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Maryam Mohammed',
    role: 'Founder & Director',
    bio: "A passionate advocate for digital inclusion and community empowerment. With over a decade of experience in social services and technology education, Maryam leads Silverswan's mission to ensure no senior or newcomer is left behind in the digital age.",
    quote: 'Technology should be a bridge, never a barrier. Every person deserves the confidence to connect, learn, and thrive.',
    imageUrl: '/images/maryam mohammed.jpeg',
    imageAlt: 'Portrait of Maryam Mohammed',
    imagePosition: 'center 15%',
    email: 'silverswanintegrated@gmail.com',
    highlights: ['Digital Inclusion', 'Community Partnerships', 'Mentorship'],
    initials: 'MM',
  },
  {
    name: 'Sophie Kanza',
    role: 'Director of Strategic Initiatives',
    bio: 'A dedicated community builder focused on creating culturally sensitive programs that celebrate diversity. Sophie brings deep expertise in bilingual programs, newcomer integration, and intergenerational programming.',
    quote: 'When we invest in our elders and welcome newcomers with dignity, we build a community that lifts everyone.',
    imageUrl: '/images/sophie kanza.jpeg',
    imageAlt: 'Portrait of Sophie Kanza',
    imagePosition: 'center 20%',
    email: 'silverswanintegrated@gmail.com',
    highlights: ['Bilingual Programs', 'Newcomer Integration', 'Cultural Programming'],
    initials: 'SK',
  },
]

const Logo = () => (
  <Link href="/" className="block">
    <Image src="/logos/silverswanlogo.png" alt="Silverswan Integrated Hub" width={160} height={44} className="h-auto w-auto max-h-10" priority />
  </Link>
)

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
        <button onClick={() => setIsOpen(!isOpen)} className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-swan-midnight flex items-center gap-2 shadow-sm hover:bg-white transition-all">
          {t.nav.allPages} <ChevronDown size={13} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute top-full mt-2 right-0 w-44 bg-white rounded-xl shadow-xl p-2 flex flex-col gap-0.5 border border-swan-grey">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="px-3 py-2 text-sm text-swan-midnight/70 hover:bg-swan-lavender rounded-lg hover:text-swan-midnight block" onClick={() => setIsOpen(false)}>{item.label}</Link>
            ))}
          </div>
        )}
      </div>
      <Link href="/contact" className="bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-swan-midnight shadow-sm hover:bg-white transition-all">{t.nav.contact}</Link>
      <Link href="/contact" className="bg-swan-blue text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-swan-blue/90 transition-all">{t.nav.joinUs}</Link>
    </nav>
  )
}

const TeamCard = ({ member, getInTouchLabel }: { member: TeamMember; getInTouchLabel: string }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden border border-swan-grey/80 hover:border-swan-blue/20 shadow-sm hover:shadow-lg hover:shadow-swan-blue/8 transition-all duration-300">
    <div className="relative h-24 w-full bg-swan-lavender/40 overflow-hidden border-b border-swan-grey/70">
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `url('/logos/patterns-light-blue.png')`,
          backgroundSize: '200px',
          backgroundPosition: 'top left',
          backgroundRepeat: 'repeat',
        }}
      />
    </div>

    <div className="absolute left-5 sm:left-6 top-14 z-20">
      <div className="w-20 h-20 rounded-full border-2 border-white shadow-md overflow-hidden bg-swan-midnight flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={member.imageAlt}
            fill
            className="object-cover"
            style={{ objectPosition: member.imagePosition || 'center top' }}
            sizes="80px"
            priority
          />
        ) : (
          <div className="w-full h-full bg-swan-midnight flex flex-col items-center justify-center text-white select-none">
            <span className="text-xl font-black text-white tracking-wider">{member.initials}</span>
          </div>
        )}
      </div>
    </div>

    <div className="pt-10 px-5 sm:px-6 pb-5">
      <div className="mb-2">
        <h2 className="text-lg font-bold text-swan-midnight leading-tight">{member.name}</h2>
        <p className="text-[11px] font-semibold text-swan-blue uppercase tracking-widest mt-0.5">{member.role}</p>
      </div>

      <div className="flex flex-wrap gap-1 mt-2">
        {member.highlights.map((h) => (
          <span key={h} className="px-2 py-0.5 text-[9px] font-semibold text-swan-blue bg-swan-blue/8 border border-swan-blue/15 rounded-full uppercase tracking-wide">
            {h}
          </span>
        ))}
      </div>

      <div className="mt-3 relative pl-3 border-l-2 border-swan-blue/30">
        <Quote size={10} className="absolute -top-0.5 -left-1 text-swan-blue/30 fill-swan-blue/15" />
        <p className="text-xs text-swan-midnight/60 italic leading-relaxed">{member.quote}</p>
      </div>

      <div className="mt-4 pt-3 border-t border-swan-grey/80 flex flex-wrap items-center gap-2">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="group/btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-swan-midnight hover:bg-swan-blue transition-colors shadow-sm"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3" />
            <span>{getInTouchLabel}</span>
            <ArrowRight size={11} className="transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        )}
      </div>
    </div>
  </div>
)

export default function TeamPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col bg-swan-ivory font-sans">
      <main className="flex-grow relative overflow-x-hidden">

        {/* Mobile header */}
        <div className="md:hidden p-5 flex justify-between items-center sticky top-0 bg-swan-ivory/95 backdrop-blur-sm z-50 border-b border-swan-grey/60">
          <Logo />
          <div className="flex items-center gap-2">
            <LanguageToggle variant="light" />
            <button className="p-2 text-swan-midnight/50 hover:bg-swan-lavender rounded-full" aria-label="Open menu"><Menu size={22} /></button>
          </div>
        </div>

        {/* Desktop logo */}
        <div className="hidden md:block px-8 lg:px-16 pt-6 pb-3 relative z-10"><Logo /></div>
        <FloatingNav />

        {/* HERO */}
        <header className="relative px-4 sm:px-8 lg:px-16 pt-8 pb-20 overflow-hidden bg-swan-midnight">
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-swan-sky/60" />
                <span className="text-swan-sky/80 text-xs font-bold tracking-[0.2em] uppercase">{t.teamPage.eyebrow}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] tracking-tight">
                {t.teamPage.heroTitle1} <br />
                <span className="italic font-light text-swan-sky">{t.teamPage.heroTitleHighlight}</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
                {t.teamPage.heroSubtitle}
              </p>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { n: '2024', l: t.teamPage.statEst },
                  { n: '2', l: t.teamPage.statLangs },
                  { n: 'Montreal, Quebec', l: t.teamPage.statCity },
                ].map((s) => (
                  <div key={s.l} className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-white tabular-nums">{s.n}</span>
                    <span className="text-xs text-white/40 uppercase tracking-wide">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote strip */}
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 max-w-[280px]">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <Quote size={18} className="text-swan-sky/50 fill-swan-sky/20 mb-3" />
                <p className="text-white/70 text-sm italic leading-relaxed">{t.teamPage.sideQuote}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden relative border border-white/30 flex-shrink-0 shadow-sm">
                    <Image
                      src="/images/maryam mohammed.jpeg"
                      alt="Maryam Mohammed"
                      fill
                      className="object-cover"
                      style={{ objectPosition: 'center 15%' }}
                      sizes="36px"
                    />
                  </div>
                  <span className="text-white/70 text-xs font-medium">{t.teamPage.sideQuoteAuthor}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* TEAM CARDS */}
        <section className="px-4 sm:px-8 lg:px-16 py-10 md:py-14" aria-label="Team members">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-swan-midnight/40 uppercase tracking-widest">{t.teamPage.sectionLabel}</span>
              <div className="flex-1 h-px bg-swan-grey" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TEAM_MEMBERS.map((member) => (
                <TeamCard key={member.name} member={member} getInTouchLabel={t.teamPage.getInTouch} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-8 lg:px-16 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-swan-ivory via-swan-lavender/30 to-swan-ivory" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-swan-blue/8 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-xs text-swan-midnight/40 font-bold uppercase tracking-widest mb-4">{t.teamPage.ctaEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-black text-swan-midnight leading-tight mb-4">
              {t.teamPage.ctaTitle1} <span className="text-swan-blue">{t.teamPage.ctaTitleHighlight}</span>.
            </h2>
            <p className="text-base text-swan-midnight/50 leading-relaxed mb-8 max-w-lg mx-auto">
              {t.teamPage.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-swan-blue text-white rounded-full font-bold text-sm shadow-lg hover:bg-swan-blue/90 hover:shadow-xl hover:shadow-swan-blue/25 transition-all duration-300">
                <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
                {t.teamPage.ctaContact}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 border border-swan-midnight/15 text-swan-midnight rounded-full font-semibold text-sm hover:border-swan-midnight/30 hover:bg-white transition-all duration-300">
                {t.teamPage.ctaAbout}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
