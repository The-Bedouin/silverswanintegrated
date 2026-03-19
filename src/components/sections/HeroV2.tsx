'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  Play,
  ChevronDown,
  Menu,
  LayoutTemplate,
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
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&facepad=2',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&facepad=2',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop&facepad=2',
  ]

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {avatars.map((src, i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-full border-2 border-swan-ivory overflow-hidden bg-swan-lavender"
          >
            <Image
              src={src}
              alt={`Community member ${i + 1}`}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <span className="text-swan-midnight/60 text-sm font-medium">
        500+ Active participants
      </span>
    </div>
  )
}

// 3. Floating Navigation Pills (Right Side)
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
                className="px-3 py-2 text-sm text-swan-midnight/70 hover:bg-swan-lavender rounded-lg hover:text-swan-midnight text-left block"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Contact Pill */}
      <a
        href="/contact"
        className="bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-swan-midnight shadow-sm hover:bg-white transition-all"
      >
        Contact
      </a>

      {/* CTA Pill */}
      <a
        href="/contact"
        className="bg-swan-blue text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-swan-blue/90 transition-all"
      >
        Join Us
      </a>
    </nav>
  )
}

// 4. Floating Testimonial Card
const FloatingTestimonial = () => (
  <div className="absolute top-[35%] left-[10%] z-10 bg-white p-4 rounded-2xl shadow-xl max-w-xs animate-fade-in-up transform transition-all hover:-translate-y-1">
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-swan-lavender overflow-hidden flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop&facepad=2"
          alt="Elderly participant"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-medium text-swan-midnight italic leading-relaxed">
          &quot;Bienvenue à Silverswan.&quot;
        </p>
      </div>
    </div>
    {/* Little triangle pointer */}
    <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white transform rotate-45"></div>
  </div>
)

// 5. Video Trigger Pill
const VideoTrigger = () => (
  <div className="absolute top-[50%] left-[15%] z-10 flex items-center gap-4 group cursor-pointer">
    <button className="bg-white px-6 py-3 rounded-full text-sm font-bold text-swan-midnight shadow-xl group-hover:scale-105 transition-transform">
      Play endless <br /> opportunities
    </button>
    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform text-swan-blue">
      <Play size={20} fill="currentColor" />
    </button>
  </div>
)

// --- Main Hero V2 Component ---
export function HeroV2() {
  return (
    <main className="w-full bg-swan-ivory text-swan-midnight font-sans">
      {/* Mobile Navbar (Simplified) */}
      <div className="md:hidden p-6 flex justify-between items-center sticky top-0 bg-swan-ivory z-50 shadow-sm">
        <Logo />
        <button className="p-2 text-swan-midnight/60 hover:bg-swan-lavender rounded-full transition-colors">
          <Menu size={24} />
        </button>
      </div>

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT COLUMN: Content */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-8 lg:py-16 gap-6">
          {/* Desktop Logo */}
          <div className="hidden lg:block mb-4">
            <Logo />
          </div>

          {/* Social Proof */}
          <div className="animate-fade-in">
            <AvatarGroup />
          </div>

          {/* Hero Content */}
          <div className="space-y-4 max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-swan-midnight leading-[1.1]">
              Empowering BIPOC communities through digital literacy

            </h1>

            <p className="text-lg text-swan-midnight/50 leading-relaxed max-w-md">
              We equip BIPOC communities and seniors across Canada with digital skills, business tools, and technology resources to thrive in today&apos;s digital world.
            </p>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <button
              onClick={() => window.location.href = '/contact'}
              className="group relative px-6 py-3 bg-swan-blue text-white rounded-full font-medium flex items-center gap-3 hover:bg-swan-blue/90 transition-all overflow-hidden shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">Get Started</span>
              <div className="relative z-10 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Image & Interactive Elements */}
        <div className="relative h-[50vh] lg:h-auto w-full lg:sticky lg:top-0 overflow-hidden bg-swan-lavender">
          {/* Main Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/herosectionpicture.jpg"
              alt="Diverse group of seniors and communities learning technology together"
              fill
              className="object-cover object-center lg:rounded-tl-[3rem]"
              priority
            />
            {/* Overlay Gradient for text legibility if needed */}
            <div className="absolute inset-0 bg-swan-midnight/5 lg:rounded-tl-[3rem]" />
          </div>

          {/* Floating Navigation (Desktop Only) */}
          <FloatingNav />

          {/* Floating Content Elements */}
          <div className="relative h-full w-full pointer-events-none">
            {/* Re-enable pointer events for interactive children */}
            <div className="pointer-events-auto h-full w-full relative">
              <FloatingTestimonial />
              <VideoTrigger />

              {/* Bottom right info cards */}
              <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col gap-2 pointer-events-auto">
                <div
                  onClick={() => window.location.href = '/contact'}
                  className="bg-swan-blue text-white p-4 rounded-xl shadow-lg flex items-center gap-3 cursor-pointer hover:bg-swan-blue/90 transition-colors"
                >
                  <LayoutTemplate size={16} />
                  <span className="font-semibold text-sm">Custom Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
