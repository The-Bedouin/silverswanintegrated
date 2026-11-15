'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageToggle } from '@/components/ui/LanguageToggle'

const Logo = () => (
  <Link href="/" className="block">
    <Image
      src="/logos/silverswanlogo.png"
      alt="Silverswan Logo"
      width={160}
      height={44}
      className="h-auto w-auto max-h-10"
      priority
    />
  </Link>
)

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.team, href: '/team' },
    { label: t.nav.contact, href: '/contact' },
  ]

  return (
    <>
      {/* Sticky top bar — visible on mobile only */}
      <div className="md:hidden p-5 flex justify-between items-center sticky top-0 bg-swan-ivory/95 backdrop-blur-sm z-50 shadow-sm border-b border-swan-grey/40">
        <Logo />
        <div className="flex items-center gap-2">
          <LanguageToggle variant="light" />
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-swan-midnight/60 hover:bg-swan-lavender rounded-full transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Full-screen overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-swan-midnight/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-in panel */}
          <div className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col animate-slide-in-right">
            {/* Panel header */}
            <div className="flex items-center justify-between p-5 border-b border-swan-grey/40">
              <span className="text-sm font-bold text-swan-midnight/40 uppercase tracking-widest">
                {t.nav.menu}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-swan-midnight/50 hover:bg-swan-lavender rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-swan-midnight/80 hover:bg-swan-lavender hover:text-swan-midnight transition-colors"
                    >
                      {item.label}
                      <ArrowRight size={16} className="text-swan-midnight/25" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bottom section */}
            <div className="px-4 pb-8 space-y-4 border-t border-swan-grey/40 pt-4">
              {/* Language toggle */}
              <div className="flex items-center justify-center">
                <LanguageToggle variant="light" />
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-swan-blue text-white rounded-xl font-bold text-sm shadow-lg hover:bg-swan-blue/90 transition-all"
              >
                {t.nav.joinUs}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

