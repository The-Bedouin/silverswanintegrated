'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ChevronDown, Mail, ArrowRight, Quote, Linkedin } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Footer } from '@/components/sections/Footer'

interface TeamMember {
  name: string
  role: string
  bio: string
  quote: string
  imageUrl: string
  imageAlt: string
  email?: string
  linkedin?: string
  highlights: string[]
  initials: string
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Maryam Mohammed',
    role: 'Founder & Director',
    bio: 'A passionate advocate for digital inclusion and community empowerment. With over a decade of experience in social services and technology education, Maryam leads Silverswan\'s mission to ensure no senior or newcomer is left behind in the digital age.',
    quote: 'Technology should be a bridge, never a barrier. Every person deserves the confidence to connect, learn, and thrive.',
    imageUrl: '',
    imageAlt: 'Portrait of Maryam Mohammed',
    email: 'silverswanintegrated@gmail.com',
    linkedin: 'https://www.linkedin.com',
    highlights: ['Digital Inclusion', 'Community Partnerships', 'Bilingual Programs'],
    initials: 'MM',
  },
  {
    name: 'Ghaffar Abdul-Azeez',
    role: 'Director',
    bio: 'A dedicated community builder focused on creating culturally sensitive programs that celebrate diversity. Ghaffar brings deep expertise in elder care, newcomer integration, and intergenerational programming.',
    quote: 'When we invest in our elders and welcome newcomers with dignity, we build a community that lifts everyone.',
    imageUrl: '',
    imageAlt: 'Portrait of Ghaffar Abdul-Azeez',
    email: 'silverswanintegrated@gmail.com',
    linkedin: 'https://www.linkedin.com',
    highlights: ['Elder Care', 'Newcomer Integration', 'Cultural Programming'],
    initials: 'GA',
  },
]

const Logo = () => (
  <Link href="/" className="block">
    <Image src="/logos/logo-lockup-primary-2.png" alt="Silverswan Integrated Hub" width={160} height={44} className="h-auto w-auto max-h-10" priority />
  </Link>
)

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="absolute top-8 right-8 z-20 items-center gap-3 hidden md:flex">
      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-swan-midnight flex items-center gap-2 shadow-sm hover:bg-white transition-all">
          All Pages <ChevronDown size={13} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute top-full mt-2 right-0 w-44 bg-white rounded-xl shadow-xl p-2 flex flex-col gap-0.5 border border-swan-grey">
            {[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Team', href: '/team' }, { label: 'Contact', href: '/contact' }].map((item) => (
              <Link key={item.label} href={item.href} className="px-3 py-2 text-sm text-swan-midnight/70 hover:bg-swan-lavender rounded-lg hover:text-swan-midnight block" onClick={() => setIsOpen(false)}>{item.label}</Link>
            ))}
          </div>
        )}
      </div>
      <Link href="/contact" className="bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium text-swan-midnight shadow-sm hover:bg-white transition-all">Contact</Link>
      <Link href="/contact" className="bg-swan-blue text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-swan-blue/90 transition-all">Join Us</Link>
    </nav>
  )
}

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden border border-swan-grey/80 hover:border-swan-blue/20 shadow-sm hover:shadow-xl hover:shadow-swan-blue/8 transition-all duration-400">
    {/* Header with Light Pattern Design */}
    <div className="relative h-44 w-full bg-swan-lavender/40 overflow-hidden border-b border-swan-grey/70">
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `url('/logos/patterns-light-blue.png')`,
          backgroundSize: '240px',
          backgroundPosition: 'top left',
          backgroundRepeat: 'repeat',
        }}
      />
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-swan-grey/80 flex items-center justify-center text-swan-midnight hover:text-[#0A66C2] hover:bg-white hover:shadow-md transition-all"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      )}
    </div>

    {/* Floating avatar circle (twice as big: w-32 h-32 / 128px) */}
    <div className="absolute left-6 sm:left-8 top-28 z-20">
      <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-swan-midnight flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
        {member.imageUrl ? (
          <Image
            src={member.imageUrl}
            alt={member.imageAlt}
            fill
            className="object-cover object-top"
            sizes="128px"
          />
        ) : (
          <div className="w-full h-full bg-swan-midnight flex flex-col items-center justify-center text-white select-none">
            <span className="text-3xl font-black text-white tracking-wider">
              {member.initials}
            </span>
          </div>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="pt-20 px-6 sm:px-8 pb-7">
      <div className="mb-2">
        <h2 className="text-xl font-bold text-swan-midnight leading-tight">{member.name}</h2>
        <p className="text-xs font-semibold text-swan-blue uppercase tracking-widest mt-1">{member.role}</p>
      </div>

      {/* Highlight tags */}
      <div className="flex flex-wrap gap-1.5 mt-3.5">
        {member.highlights.map((h) => (
          <span key={h} className="px-2.5 py-1 text-[10px] font-semibold text-swan-blue bg-swan-blue/8 border border-swan-blue/15 rounded-full uppercase tracking-wide">
            {h}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-swan-midnight/70 leading-relaxed">{member.bio}</p>

      {/* Quote */}
      <div className="mt-4 relative pl-3.5 border-l-2 border-swan-blue/30">
        <Quote size={12} className="absolute -top-0.5 -left-1 text-swan-blue/30 fill-swan-blue/15" />
        <p className="text-xs text-swan-midnight/60 italic leading-relaxed">{member.quote}</p>
      </div>

      {/* Action Links */}
      <div className="mt-6 pt-4 border-t border-swan-grey/80 flex flex-wrap items-center gap-3">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="group/btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-swan-midnight hover:bg-swan-blue transition-colors shadow-sm"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
            <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-0.5" />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-swan-midnight bg-swan-lavender hover:bg-[#0A66C2] hover:text-white transition-all border border-swan-grey/80 shadow-sm"
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2] group-hover:text-white transition-colors" />
            <span>LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  </div>
)

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-swan-ivory font-sans">
      <main className="flex-grow relative overflow-x-hidden">

        {/* Mobile header */}
        <div className="md:hidden p-5 flex justify-between items-center sticky top-0 bg-swan-ivory/95 backdrop-blur-sm z-50 border-b border-swan-grey/60">
          <Logo />
          <button className="p-2 text-swan-midnight/50 hover:bg-swan-lavender rounded-full" aria-label="Open menu"><Menu size={22} /></button>
        </div>

        {/* Desktop logo */}
        <div className="hidden md:block px-8 lg:px-16 pt-6 pb-3 relative z-10"><Logo /></div>
        <FloatingNav />

        {/* ── HERO ── */}
        <header className="relative px-4 sm:px-8 lg:px-16 pt-8 pb-20 overflow-hidden bg-swan-midnight">
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-swan-sky/60" />
                <span className="text-swan-sky/80 text-xs font-bold tracking-[0.2em] uppercase">Silverswan Leadership</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] tracking-tight">
                Built by people <br />
                <span className="italic font-light text-swan-sky">who genuinely care.</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed max-w-xl">
                Our leadership team brings lived experience, community roots, and a shared belief that every senior and newcomer deserves a real seat at the digital table.
              </p>

              {/* Compact stat row */}
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { n: '2024', l: 'Est.' },
                  { n: '100+', l: 'Members served' },
                  { n: '2', l: 'Languages' },
                  { n: 'MTL', l: 'Montreal QC' },
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
                <p className="text-white/70 text-sm italic leading-relaxed">
                  &ldquo;We don&apos;t just provide services; we build capacity and connection.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-swan-blue flex items-center justify-center text-white text-[10px] font-bold">MM</div>
                  <span className="text-white/50 text-xs">Maryam Mohammed, Founder</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── TEAM CARDS ── */}
        <section className="px-4 sm:px-8 lg:px-16 py-16 md:py-20" aria-label="Team members">
          <div className="max-w-5xl mx-auto">

            {/* Section label */}
            <div className="flex items-center gap-4 mb-10">
              <span className="text-xs font-bold text-swan-midnight/40 uppercase tracking-widest">Our Team</span>
              <div className="flex-1 h-px bg-swan-grey" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TEAM_MEMBERS.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>


        {/* ── CTA ── */}
        <section className="px-4 sm:px-8 lg:px-16 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-swan-ivory via-swan-lavender/30 to-swan-ivory" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-swan-blue/8 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-xs text-swan-midnight/40 font-bold uppercase tracking-widest mb-4">Ready to connect?</p>
            <h2 className="text-3xl md:text-4xl font-black text-swan-midnight leading-tight mb-4">
              Become part of the <span className="text-swan-blue">Silverswan</span> family.
            </h2>
            <p className="text-base text-swan-midnight/50 leading-relaxed mb-8 max-w-lg mx-auto">
              Whether you want to volunteer, partner, or just say hello &mdash; our doors are open and our team is here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-swan-blue text-white rounded-full font-bold text-sm shadow-lg hover:bg-swan-blue/90 hover:shadow-xl hover:shadow-swan-blue/25 transition-all duration-300">
                <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
                Get in Touch
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 border border-swan-midnight/15 text-swan-midnight rounded-full font-semibold text-sm hover:border-swan-midnight/30 hover:bg-white transition-all duration-300">
                About Silverswan
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
