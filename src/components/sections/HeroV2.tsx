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
  <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500">
      <LayoutTemplate size={20} />
    </div>
    Silverswan
  </div>
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
            className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
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
      <span className="text-gray-600 text-sm font-medium">
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
              <a
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
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Programs Pill */}
      <a
        href="/#support"
        className="bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-gray-800 shadow-sm hover:bg-white transition-all"
      >
        Programs
      </a>

      {/* CTA Pill */}
      <a
        href="#"
        className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-gray-900 transition-all"
      >
        Join Us
      </a>
    </nav>
  )
}

// 4. Floating Testimonial Card
const FloatingTestimonial = () => (
  <div className="absolute top-[25%] left-[10%] z-10 bg-white p-4 rounded-2xl shadow-xl max-w-xs animate-fade-in-up transform transition-all hover:-translate-y-1">
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop&facepad=2"
          alt="Elderly participant"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-800 italic leading-relaxed">
          &quot;At 72, I learned to run my business online. This program changed my life.&quot;
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
    <button className="bg-white px-6 py-3 rounded-full text-sm font-bold text-gray-900 shadow-xl group-hover:scale-105 transition-transform">
      Watch our <br /> story reel
    </button>
    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform text-black">
      <Play size={20} fill="currentColor" />
    </button>
  </div>
)

// --- Main Hero V2 Component ---
export function HeroV2() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900 font-sans selection:bg-orange-100">
      {/* Mobile Navbar (Simplified) */}
      <div className="md:hidden p-6 flex justify-between items-center sticky top-0 bg-white z-50 shadow-sm">
        <Logo />
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <Menu size={24} />
        </button>
      </div>

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT COLUMN: Content */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-12 lg:py-20 gap-10">
          {/* Desktop Logo */}
          <div className="hidden lg:block mb-8">
            <Logo />
          </div>

          {/* Social Proof */}
          <div className="animate-fade-in">
            <AvatarGroup />
          </div>

          {/* Hero Content */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-950 leading-[1.1]">
              Empowering minorities and elders through technology
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-md">
              We equip diverse communities and seniors across Canada with digital skills, business tools, and technology resources to thrive in today&apos;s digital world.
            </p>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <button className="group relative px-8 py-4 bg-black text-white rounded-full font-medium flex items-center gap-3 hover:bg-gray-800 transition-all overflow-hidden shadow-lg hover:shadow-xl">
              <span className="relative z-10">Get Started</span>
              <div className="relative z-10 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </div>
            </button>

            <button className="px-6 py-4 text-gray-900 font-medium hover:text-gray-600 transition-colors flex items-center gap-2">
              Our Programs
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Image & Interactive Elements */}
        <div className="relative h-[600px] lg:h-auto w-full lg:sticky lg:top-0 overflow-hidden bg-blue-50">
          {/* Main Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop"
              alt="Diverse group of seniors and minorities learning technology together"
              fill
              className="object-cover object-center lg:rounded-tl-[3rem]"
              priority
            />
            {/* Overlay Gradient for text legibility if needed */}
            <div className="absolute inset-0 bg-black/5 lg:rounded-tl-[3rem]" />
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
                <div className="bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
                  <ArrowRight size={16} className="text-gray-400" />
                  <span className="font-semibold text-sm">Free Tech Training</span>
                </div>
                <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg flex items-center gap-3 cursor-pointer hover:bg-blue-700 transition-colors">
                  <LayoutTemplate size={16} />
                  <span className="font-semibold text-sm">Business Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

