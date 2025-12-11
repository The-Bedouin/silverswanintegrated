'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Shield, Zap, Globe, Menu, LayoutTemplate, ChevronDown } from 'lucide-react'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'

// Logo Component (same as HeroV2)
const Logo = () => (
  <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500">
      <LayoutTemplate size={20} />
    </div>
    Silverswan
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
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 flex items-center gap-2 shadow-sm hover:bg-white transition-all"
        >
          All Pages
          <ChevronDown
            size={14}
            className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-xl p-2 flex flex-col gap-1 border border-gray-100">
            {['Home', 'About', 'Programs', 'Resources', 'Contact'].map((item) => (
              <Link
                key={item}
                href={
                  item === 'Home'
                    ? '/'
                    : item === 'About'
                      ? '/about'
                      : item === 'Contact'
                        ? '/contact'
                        : '#'
                }
                className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg hover:text-black text-left block"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Programs Pill */}
      <Link
        href="/#support"
        className="bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-gray-800 shadow-sm hover:bg-white transition-all"
      >
        Programs
      </Link>

      {/* CTA Pill */}
      <Link
        href="#contact"
        className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-gray-900 transition-all"
      >
        Join Us
      </Link>
    </nav>
  )
}

// --- COMPONENTS ---
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-6 bg-gray-50 rounded-3xl border border-gray-100">
    <p className="text-4xl md:text-5xl font-bold text-green-500 mb-2">{value}</p>
    <p className="text-sm md:text-base text-gray-600 font-medium">{label}</p>
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
  <div className="flex flex-col items-start p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-6 text-green-600">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
  </div>
)

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-green-100 pb-24 relative">
      {/* Header (same as home page) */}
      <div className="md:hidden p-6 flex justify-between items-center sticky top-0 bg-white z-50 shadow-sm">
        <Logo />
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <Menu size={24} />
        </button>
      </div>

      {/* Desktop Logo */}
      <div className="hidden md:block px-6 sm:px-12 lg:px-24 pt-8 pb-4">
        <Logo />
      </div>

      {/* Floating Navigation (Desktop) */}
      <FloatingNav />

      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-20 md:pt-12 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wide uppercase mb-8 animate-fade-in">
            About Silverswan
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            We are building a <br />
            <span className="text-green-500">legacy of connection.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
            Silverswan Integrated Hub is a bilingual non-profit dedicated to reducing isolation and
            fostering resilience among seniors and newcomers across Canada through technology
            integration and community support.
          </p>

          <div className="relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
              alt="Community gathering"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Decorative Background Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-green-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />
      </section>

      {/* 2. THE CHALLENGE & SOLUTION (Narrative) */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Narrative Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Why we started.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  The Federation of Canadian Municipalities estimates that approximately{' '}
                  <span className="font-bold text-slate-900">8% of seniors in Canada</span> are
                  low-income and socially vulnerable. For those living alone—especially women in
                  their 80s—the risk of isolation doubles.
                </p>
                <p>
                  We recognized that as the senior population grows more diverse in age, origin, and
                  ability, the services supporting them must evolve. Traditional support systems
                  weren&apos;t enough.
                </p>
                <p>
                  <span className="font-bold text-green-600">Silverswan Integrated Hub</span> was
                  born from a desire to bridge this gap. We leverage the skills of newcomers and the
                  wisdom of seniors to create a reciprocal, integrated support network that
                  empowers communities through technology.
                </p>
              </div>
            </div>

            {/* Impact Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <StatCard value="2025" label="Project Launch" />
              <StatCard value="500+" label="Seniors Supported" />
              <StatCard value="2" label="Official Languages" />
              <StatCard value="∞" label="Connections Made" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PILLARS (Values) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Our Integrated Approach
            </h2>
            <p className="text-lg text-slate-500">
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
      <Footer />
    </main>
  )
}

