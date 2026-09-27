'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Shield, Zap, Globe, Menu, LayoutTemplate, ChevronDown, MapPin } from 'lucide-react'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'

// Logo Component (same as HeroV2)
const Logo = () => (
  <Link href="/" className="block">
    <Image
      src="/logos/logo-lockup-primary-2.png"
      alt="Silverswan Logo"
      width={180}
      height={50}
      className="h-auto w-auto max-h-12"
      priority
    />
  </Link>
)

// Floating Navigation (same as HeroV2)
const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-8 right-8 z-20 flex items-center gap-3 hidden md:flex">
      {/* Dropdown Pill */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-swan-midnight flex items-center gap-2 shadow-sm hover:bg-white transition-all"
        >
          All Pages
          <ChevronDown
            size={14}
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-xl p-2 flex flex-col gap-1 border border-swan-grey">
            {['Home', 'About', 'Team', 'Contact'].map((item) => (
              <Link
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
                className="px-3 py-2 text-sm text-swan-midnight/70 hover:bg-swan-lavender rounded-lg hover:text-swan-midnight text-left block"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Contact Pill */}
      <Link
        href="/contact"
        className="bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-swan-midnight shadow-sm hover:bg-white transition-all"
      >
        Contact
      </Link>

      {/* CTA Pill */}
      <Link
        href="/contact"
        className="bg-swan-blue text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-swan-blue/90 transition-all"
      >
        Join Us
      </Link>
    </nav>
  )
}

// --- COMPONENTS ---
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-4 bg-swan-lavender/30 rounded-3xl border border-swan-lavender">
    <p className="text-3xl md:text-4xl font-bold text-swan-blue mb-2">{value}</p>
    <p className="text-sm md:text-base text-swan-midnight/60 font-medium">{label}</p>
  </div>
)

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
  return (
    <div className="min-h-screen flex flex-col bg-swan-ivory font-sans">
      <main className="flex-grow relative pb-24">
        {/* Header (same as home page) */}
        <div className="md:hidden p-6 flex justify-between items-center sticky top-0 bg-swan-ivory z-50 shadow-sm">
          <Logo />
          <button className="p-2 text-swan-midnight/60 hover:bg-swan-lavender rounded-full transition-colors">
            <Menu size={24} />
          </button>
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
              About Silverswan
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-swan-midnight tracking-tight mb-6 leading-[1.1]">
              We are building a <br />
              <span className="text-swan-blue">legacy of connection.</span>
            </h1>
            <p className="text-lg text-swan-midnight/50 max-w-2xl mx-auto leading-relaxed mb-8">
              Silverswan Integrated Hub is a bilingual non-profit dedicated to reducing isolation and
              fostering resilience among seniors and newcomers across Canada through technology
              integration and community support.
            </p>

            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=2000&auto=format&fit=crop"
                alt="Smiling Black woman enjoying time with her community"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-swan-midnight/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Decorative Background Blob */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-swan-lavender rounded-full blur-3xl -z-10 opacity-40 pointer-events-none" />
        </section>

        {/* 2. THE CHALLENGE & SOLUTION (Narrative) */}
        <section className="py-12 bg-swan-grey">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Narrative Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-swan-midnight mb-6 tracking-tight">
                  Why we started.
                </h2>
                <div className="space-y-6 text-lg text-swan-midnight/60 leading-relaxed">
                  <p>
                    The Federation of Canadian Municipalities estimates that approximately{' '}
                    <span className="font-bold text-swan-midnight">8% of seniors in Canada</span> are
                    low-income and socially vulnerable. For those living alone—especially women in
                    their 80s—the risk of isolation doubles.
                  </p>
                  <p>
                    We recognized that as the senior population grows more diverse in age, origin, and
                    ability, the services supporting them must evolve. Traditional support systems
                    weren&apos;t enough.
                  </p>
                  <p>
                    <span className="font-bold text-swan-blue">Silverswan Integrated Hub</span> was
                    born from a desire to bridge this gap. We leverage the skills of newcomers and the
                    wisdom of seniors to create a reciprocal, integrated support network that
                    empowers communities through technology.
                  </p>
                </div>
              </div>

              {/* Impact Stats Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <StatCard value="2024" label="Project Launch" />
                <StatCard value="100+" label="Seniors Supported" />
                <StatCard value="2" label="Official Languages" />
                <StatCard value="∞" label="Connections Made" />
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR PILLARS (Values) */}
        <section className="py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-swan-midnight mb-4 tracking-tight">
                Our Integrated Approach
              </h2>
              <p className="text-lg text-swan-midnight/50">
                We don&apos;t just provide services; we build capacity. Our program focuses on three
                core pillars to ensure holistic well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ValueCard
                icon={Shield}
                title="Financial Security"
                description="Educating seniors on fraud prevention and financial literacy to foster self-sufficiency and peace of mind."
              />
              <ValueCard
                icon={Zap}
                title="Digital Inclusion"
                description="Bridging the digital divide by training seniors to use modern tools for communication, health, and networking."
              />
              <ValueCard
                icon={Globe}
                title="Cultural Harmony"
                description="Celebrating diversity through bilingual events (English & French) that connect newcomers with established residents."
              />
            </div>
          </div>
        </section>

        {/* 4. LOCATION & HUB INFO */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-swan-grey flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-swan-lavender flex items-center justify-center flex-shrink-0 text-swan-blue">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-swan-midnight">Visit Our Hub</h3>
                <p className="text-swan-midnight/60 text-base mt-1">
                  Suite 4, 6970 avenue de Monts, Montreal Quebec
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-swan-blue text-white rounded-full text-sm font-semibold shadow-md hover:bg-swan-blue/90 transition-all whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
