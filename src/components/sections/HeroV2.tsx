'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Users,
  MapPin,
  Sparkles,
  Quote,
} from 'lucide-react'

// 1. Logo Component
const Logo = () => (
  <a href="/" className="block">
    <Image
      src="/logos/logo-lockup-primary-2.png"
      alt="Silverswan Logo"
      width={180}
      height={50}
      className="h-auto w-auto max-h-12"
      priority
    />
  </a>
)

// 2. Avatar Group Component
const AvatarGroup = () => {
  const avatars = [
    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=200&auto=format&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop&crop=faces',
  ]

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {avatars.map((src, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-swan-lavender"
          >
            <Image
              src={src}
              alt={`Community member ${i + 1}`}
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <span className="text-white/80 text-sm font-medium">
        100+ Active participants
      </span>
    </div>
  )
}

// 3. Floating Navigation Pills
const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-8 right-8 z-30 flex items-center gap-3 hidden md:flex">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white flex items-center gap-2 hover:bg-white/25 transition-all"
        >
          All Pages
          <ChevronDown
            size={14}
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-2xl p-2 flex flex-col gap-1 border border-swan-grey">
            {['Home', 'About', 'Team', 'Contact'].map((item) => (
              <a
                key={item}
                href={
                  item === 'Home'
                    ? '/'
                    : item === 'About'
                      ? '/about'
                      : item === 'Team'
                        ? '/team'
                        : item === 'Contact'
                          ? '/contact'
                          : '#'
                }
                className="px-3 py-2 text-sm text-swan-midnight/70 hover:bg-swan-lavender rounded-lg hover:text-swan-midnight text-left block transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>

      <a
        href="/contact"
        className="bg-white/15 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-sm font-medium text-white hover:bg-white/25 transition-all"
      >
        Contact
      </a>

      <a
        href="/contact"
        className="bg-swan-blue text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-swan-blue/90 transition-all"
      >
        Join Us
      </a>
    </nav>
  )
}

// 4. Floating stat pill
const StatPill = ({
  icon: Icon,
  value,
  label,
}: {
  icon: any
  value: string
  label: string
}) => (
  <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full shadow-lg">
    <div className="w-7 h-7 rounded-full bg-swan-blue/70 flex items-center justify-center flex-shrink-0">
      <Icon size={13} className="text-white" />
    </div>
    <div>
      <p className="text-white font-bold text-sm leading-none">{value}</p>
      <p className="text-white/60 text-[10px] leading-none mt-0.5">{label}</p>
    </div>
  </div>
)

// --- Main Hero V2 Component ---
export function HeroV2() {
  return (
    <main className="w-full font-sans">
      {/* Mobile Navbar */}
      <div className="md:hidden p-5 flex justify-between items-center sticky top-0 bg-swan-ivory z-50 shadow-sm">
        <Logo />
        <button className="p-2 text-swan-midnight/60 hover:bg-swan-lavender rounded-full transition-colors">
          <Menu size={24} />
        </button>
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
                Black-owned · Black-led · Black-serving
              </div>

              {/* Main headline - reduced by half in size */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight drop-shadow-md">
                Building{' '}
                <span className="italic font-light text-swan-sky">inclusive</span>{' '}
                communities
                <br />
                through digital literacy
              </h1>

              {/* Underline accent */}
              <div className="mt-2 h-0.5 w-32 sm:w-44 bg-gradient-to-r from-swan-sky via-swan-sky/60 to-transparent rounded-full" />

              {/* Sub-headline - reduced by half in size */}
              <p className="mt-4 text-xs sm:text-sm md:text-base text-white/85 leading-relaxed drop-shadow-sm max-w-lg">
                We equip BIPOC communities and seniors across Canada with the digital skills,
                business tools, and technology resources to navigate today&apos;s world with confidence.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="group px-6 py-3 bg-swan-blue text-white rounded-full font-bold text-sm flex items-center gap-2.5 hover:bg-swan-blue/90 hover:shadow-xl hover:shadow-swan-blue/30 transition-all duration-300"
                >
                  Get Started
                  <div className="w-6 h-6 bg-white/15 rounded-full flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight size={13} />
                  </div>
                </a>
                <a
                  href="/about"
                  className="px-6 py-3 rounded-full font-semibold text-sm text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Learn more
                </a>
              </div>

              {/* Social proof */}
              <div className="mt-6">
                <AvatarGroup />
              </div>
            </div>
          </div>
        </div>

        {/* ── STAT PILLS — anchored to bottom ── */}
        <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-3 px-4">
            <StatPill icon={Users} value="100+" label="Members served" />
            <StatPill icon={MapPin} value="Montreal QC" label="Hub Location" />
            <StatPill icon={Sparkles} value="Since 2024" label="Community driven" />
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
