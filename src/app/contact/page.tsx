'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock, Send, ArrowRight, ChevronDown, Menu, LayoutTemplate } from 'lucide-react'
import { Footer } from '@/components/sections/Footer'
import Link from 'next/link'

// Logo Component (same as other pages)
const Logo = () => (
  <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500">
      <LayoutTemplate size={20} />
    </div>
    Silverswan
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
        href="/contact"
        className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-gray-900 transition-all"
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
  <div className="flex items-start gap-5 group">
    <div
      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
        color === 'green' ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-600'
      }`}
    >
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
      <div className="text-slate-500 leading-relaxed font-medium">{details}</div>
    </div>
  </div>
)

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-green-100 pb-24 relative">
      {/* Header (same as other pages) */}
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
      <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-wide uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Contact Us
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            We&apos;re here to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              help & connect.
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Have a question about our programs, volunteering, or partnerships? Reach out to the
            Silverswan team directly.
          </p>
        </div>
      </section>

      {/* 2. MAIN GRID: INFO & FORM */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            {/* Left Col: Contact Details */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <ContactInfoItem
                  icon={Mail}
                  title="Email Us"
                  color="green"
                  details={
                    <a
                      href="mailto:silverswanintegrated@gmail.com"
                      className="hover:text-green-600 transition-colors hover:underline decoration-green-300 underline-offset-4"
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
                      123 Community Lane,<br />
                      Montreal, Quebec, H3Z 2Y7<br />
                      Canada
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
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
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
                  className="absolute bottom-4 right-4 bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-xl transition-all flex items-center gap-2 z-10"
                >
                  Open in Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-7">
              <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)]">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                <form
                  className="space-y-6"
                  action="mailto:silverswanintegrated@gmail.com"
                  method="post"
                  encType="text/plain"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Jane Doe"
                        className="w-full px-5 py-4 bg-white rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all placeholder:text-gray-400 text-slate-900"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="jane@example.com"
                        className="w-full px-5 py-4 bg-white rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all placeholder:text-gray-400 text-slate-900"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">
                      I&apos;m interested in...
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-5 py-4 bg-white rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all text-slate-900 cursor-pointer appearance-none"
                      >
                        <option>General Inquiry</option>
                        <option>Volunteering with Seniors</option>
                        <option>Program Registration</option>
                        <option>Partnership & Sponsorship</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="How can we help you?"
                      className="w-full px-5 py-4 bg-white rounded-2xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all placeholder:text-gray-400 text-slate-900 resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-slate-900 hover:bg-black text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
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

      <Footer />
    </main>
  )
}

