'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, ChevronDown, Mail, Linkedin, Heart } from 'lucide-react'
import { Footer } from '@/components/sections/Footer'

// --- Types ---
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
}

// --- Data ---
const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Maryam Mohammed',
        role: 'Founder/Director',
        bio: 'A passionate advocate for digital inclusion and community empowerment. With over a decade of experience in social services and technology education, they lead Silverswan\'s mission to ensure no senior or newcomer is left behind in the digital age.',
        quote: 'Technology should be a bridge, never a barrier. Every person deserves the confidence to connect, learn, and thrive.',
        imageUrl: '',
        imageAlt: 'Portrait of Maryam Mohammed — Founder and Director of Silverswan Integrated Hub',
        email: 'silverswanintegrated@gmail.com',
        highlights: [
            'Digital Inclusion Strategy',
            'Community Partnerships',
            'Bilingual Program Design',
        ],
    },
    {
        name: 'Ghaffar Abdul-Azeez',
        role: 'Director',
        bio: 'A dedicated community builder focused on creating culturally sensitive programs that celebrate diversity. They bring deep expertise in elder care, newcomer integration, and intergenerational programming to every initiative Silverswan delivers.',
        quote: 'When we invest in our elders and welcome newcomers with dignity, we build a community that lifts everyone.',
        imageUrl: '',
        imageAlt: 'Portrait of Ghaffar Abdul-Azeez — Director of Silverswan Integrated Hub',
        email: 'silverswanintegrated@gmail.com',
        highlights: [
            'Elder Care Innovation',
            'Newcomer Integration',
            'Cultural Programming',
        ],
    },
]

// --- Shared Components (matching site-wide nav) ---
const Logo = () => (
    <Link href="/" className="block">
        <Image
            src="/logos/logo-lockup-primary-2.png"
            alt="Silverswan Integrated Hub — Return to homepage"
            width={180}
            height={50}
            className="h-auto w-auto max-h-12"
            priority
        />
    </Link>
)

const FloatingNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav
            className="absolute top-8 right-8 z-20 items-center gap-3 hidden md:flex"
            aria-label="Main navigation"
        >
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-swan-midnight flex items-center gap-2 shadow-sm hover:bg-white transition-all"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                    All Pages
                    <ChevronDown
                        size={14}
                        className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                    />
                </button>

                {isOpen && (
                    <div
                        className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-xl p-2 flex flex-col gap-1 border border-swan-grey"
                        role="menu"
                    >
                        {[
                            { label: 'Home', href: '/' },
                            { label: 'About', href: '/about' },
                            { label: 'Team', href: '/team' },
                            { label: 'Contact', href: '/contact' },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="px-3 py-2 text-sm text-swan-midnight/70 hover:bg-swan-lavender rounded-lg hover:text-swan-midnight text-left block"
                                role="menuitem"
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
                Contact
            </Link>

            <Link
                href="/contact"
                className="bg-swan-blue text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-swan-blue/90 transition-all"
            >
                Join Us
            </Link>
        </nav>
    )
}

// --- Team Member Card ---
const TeamMemberCard = ({ member }: { member: TeamMember }) => (
    <article
        className="flex flex-col gap-4"
        aria-label={`Profile of ${member.name}, ${member.role}`}
    >
        {/* Portrait Card — vertical rectangle, floating */}
        <div className="bg-white rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.10)] overflow-hidden">
            <div className="relative w-full aspect-[4/5] bg-swan-lavender overflow-hidden flex items-center justify-center">
                {member.imageUrl ? (
                    <Image
                        src={member.imageUrl}
                        alt={member.imageAlt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                ) : (
                    <svg
                        className="w-2/3 h-2/3 text-swan-blue/30"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                )}
            </div>
        </div>

        {/* Content Card — floating beneath the portrait */}
        <div className="bg-white rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.10)] p-5 md:p-6 space-y-4">
            {/* Name & Role */}
            <div>
                <h2 className="text-xl md:text-2xl font-bold text-swan-midnight leading-tight">
                    {member.name}
                </h2>
                <p className="text-sm md:text-base text-swan-blue font-medium mt-0.5">
                    {member.role}
                </p>
            </div>

            {/* Bio */}
            <p className="text-sm md:text-base text-swan-midnight/80 leading-relaxed">
                {member.bio}
            </p>

            {/* Quote */}
            <blockquote className="relative bg-swan-lavender/40 rounded-xl p-4 md:p-5 border-l-4 border-swan-blue">
                <p className="text-sm md:text-base text-swan-midnight font-medium italic leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                </p>
            </blockquote>

            {/* Specialties */}
            <div>
                <h3 className="text-xs font-bold text-swan-midnight/50 uppercase tracking-wider mb-2">
                    Areas of Focus
                </h3>
                <div className="flex flex-wrap gap-1.5">
                    {member.highlights.map((highlight) => (
                        <span
                            key={highlight}
                            className="inline-block px-3 py-1.5 bg-swan-blue/10 text-swan-blue text-xs font-semibold rounded-full border border-swan-blue/20"
                        >
                            {highlight}
                        </span>
                    ))}
                </div>
            </div>

            {/* Contact links */}
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
                {member.email && (
                    <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-swan-blue text-white rounded-lg font-semibold text-sm shadow-sm hover:bg-swan-blue/90 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-swan-blue/30"
                        aria-label={`Send an email to ${member.name}`}
                    >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <span>Send Email</span>
                    </a>
                )}
                {member.linkedin && (
                    <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-swan-midnight text-white rounded-lg font-semibold text-sm shadow-sm hover:bg-swan-midnight/90 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-swan-midnight/30"
                        aria-label={`View ${member.name}'s LinkedIn profile (opens in a new tab)`}
                    >
                        <Linkedin className="w-4 h-4" aria-hidden="true" />
                        <span>LinkedIn Profile</span>
                    </a>
                )}
            </div>
        </div>
    </article>
)

// --- Main Page ---
export default function TeamPage() {
    return (
        <div className="min-h-screen flex flex-col bg-swan-ivory font-sans">
            <main className="flex-grow relative">
                {/* Mobile Header */}
                <div className="md:hidden p-6 flex justify-between items-center sticky top-0 bg-swan-ivory z-50 shadow-sm">
                    <Logo />
                    <button
                        className="p-2 text-swan-midnight/60 hover:bg-swan-lavender rounded-full transition-colors"
                        aria-label="Open navigation menu"
                    >
                        <Menu size={24} aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop Logo */}
                <div className="hidden md:block px-6 sm:px-10 lg:px-16 pt-6 pb-3">
                    <Logo />
                </div>

                {/* Desktop Navigation */}
                <FloatingNav />

                {/* Page Header — clear, high-contrast, generous sizing */}
                <header className="pt-6 pb-8 md:pt-8 md:pb-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                    {/* Decorative blob */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-swan-lavender rounded-full blur-3xl -z-10 opacity-40 pointer-events-none" />

                    <div className="max-w-3xl mx-auto relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swan-blue/10 text-swan-blue text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in">
                            <Heart className="w-3.5 h-3.5" aria-hidden="true" />
                            Our Leadership
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-swan-midnight tracking-tight mb-4 leading-[1.1]">
                            Meet the People{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-swan-blue to-swan-sky">
                                Behind the Mission.
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-swan-midnight/50 leading-relaxed max-w-2xl mx-auto">
                            Silverswan is led by people who believe that empowering seniors and newcomers
                            through technology and community is not just a program — it&apos;s a responsibility.
                        </p>
                    </div>
                </header>

                {/* Team Member Cards — two-column grid on desktop, stacked on mobile */}
                <section
                    className="px-4 sm:px-6 lg:px-8 pb-12 md:pb-20"
                    aria-label="Team members"
                >
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {TEAM_MEMBERS.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </section>

                {/* Closing Statement — warm, accessible call to action */}
                <section className="bg-swan-midnight py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                    {/* Grid pattern */}
                    <div
                        className="absolute inset-0 pointer-events-none z-0 opacity-[0.06]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                        }}
                    />

                    <div className="max-w-3xl mx-auto relative z-10">
                        <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
                            Want to Join Our Mission?
                        </h2>
                        <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6 max-w-xl mx-auto">
                            Whether you want to volunteer, partner, or simply learn more, we would love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-swan-blue text-white rounded-full font-bold text-sm shadow-xl hover:bg-swan-blue/90 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-swan-blue/40"
                            >
                                Get in Touch
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full font-bold text-sm hover:bg-white/20 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                            >
                                Learn About Us
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}
