'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock, Send, ArrowRight, ChevronDown, Menu, LayoutTemplate } from 'lucide-react'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'
import Image from 'next/image'

// Logo Component (same as other pages)
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

// Floating Navigation (same as other pages)
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
const ContactInfoItem = ({
  icon: Icon,
  title,
  details,
  color,
}: {
  icon: any
  title: string
  details: React.ReactNode
  color: string
}) => (
  <div className="flex items-start gap-5 group bg-white/70 backdrop-blur-md rounded-2xl p-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/60">
    <div
      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${color === 'blue' ? 'bg-swan-blue text-white' : 'bg-swan-midnight/10 text-swan-midnight'
        }`}
    >
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-lg font-bold text-swan-midnight mb-1">{title}</h3>
      <div className="text-swan-midnight/70 leading-relaxed font-medium">{details}</div>
    </div>
  </div>
)

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-swan-ivory font-sans overflow-hidden">
      <main className="flex-grow relative pb-24">
        {/* Background Logo Pattern (same as home contact section) */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-10"
          style={{
            backgroundImage: `url('/logos/patterns-dark-blue.png')`,
            backgroundSize: '50%',
            backgroundPosition: 'top left',
            backgroundRepeat: 'repeat',
          }}
        />
        {/* Header (same as other pages) */}
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
        <section className="relative pt-6 pb-10 md:pt-8 md:pb-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swan-blue/10 text-swan-blue text-xs font-bold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-swan-blue animate-pulse" />
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-swan-midnight tracking-tight mb-6 leading-[1.1]">
              We&apos;re here to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-swan-blue to-swan-sky">
                help & connect.
              </span>
            </h1>
            <p className="text-lg text-swan-midnight/70 max-w-2xl leading-relaxed">
              Have a question about our programs, volunteering, or partnerships? Reach out to the
              Silverswan team directly.
            </p>
          </div>
        </section>

        {/* 2. MAIN GRID: INFO & FORM */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left Col: Contact Details */}
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-6">
                  <ContactInfoItem
                    icon={Mail}
                    title="Email Us"
                    color="blue"
                    details={
                      <a
                        href="mailto:silverswanintegrated@gmail.com"
                        className="hover:text-swan-blue transition-colors hover:underline decoration-swan-sky underline-offset-4"
                      >
                        silverswanintegrated@gmail.com
                      </a>
                    }
                  />
                  <ContactInfoItem
                    icon={MapPin}
                    title="Visit Our Hub"
                    color="slate"
                    details={
                      <p>
                        Suite 4, 6970 avenue de Monts,<br />
                        Montreal, Quebec
                      </p>
                    }
                  />
                  <ContactInfoItem
                    icon={Clock}
                    title="Office Hours"
                    color="slate"
                    details={
                      <p>
                        Mon - Fri: 9:00 AM - 5:00 PM<br />
                        Sat: 10:00 AM - 2:00 PM<br />
                        Sun: Closed
                      </p>
                    }
                  />
                </div>

                {/* Montreal Map Embed */}
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/60 group hover:-translate-y-1 transition-all duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178793.1873153543!2d-73.86477123177699!3d45.55748805315535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1710123456789!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    title="Map of Montreal"
                  />

                  <a
                    href="https://maps.google.com/maps?q=Montreal,+QC"
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-4 right-4 bg-white text-swan-midnight px-4 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-xl transition-all flex items-center gap-2 z-10"
                  >
                    Open in Maps <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Col: Form */}
              <div className="lg:col-span-7">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/60 shadow-2xl hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-swan-midnight mb-6">Send us a message</h3>
                  <form
                    className="space-y-4"
                    action="mailto:silverswanintegrated@gmail.com"
                    method="post"
                    encType="text/plain"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-swan-midnight/70 ml-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-swan-blue/20 focus:border-swan-blue focus:ring-4 focus:ring-swan-blue/10 outline-none transition-all placeholder:text-swan-midnight/30 text-swan-midnight text-sm"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-swan-midnight/70 ml-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-swan-blue/20 focus:border-swan-blue focus:ring-4 focus:ring-swan-blue/10 outline-none transition-all placeholder:text-swan-midnight/30 text-swan-midnight text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-swan-midnight/70 ml-1">
                        I&apos;m interested in...
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-3 bg-white rounded-xl border border-swan-blue/20 focus:border-swan-blue focus:ring-4 focus:ring-swan-blue/10 outline-none transition-all text-swan-midnight cursor-pointer appearance-none text-sm"
                        >
                          <option>General Inquiry</option>
                          <option>Volunteering with Seniors</option>
                          <option>Program Registration</option>
                          <option>Partnership & Sponsorship</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-swan-midnight/40 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-swan-midnight/70 ml-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-3 bg-white rounded-xl border border-swan-blue/20 focus:border-swan-blue focus:ring-4 focus:ring-swan-blue/10 outline-none transition-all placeholder:text-swan-midnight/30 text-swan-midnight resize-none text-sm"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-swan-blue hover:bg-swan-blue/90 text-white rounded-xl font-bold text-base shadow-xl shadow-swan-blue/20 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
