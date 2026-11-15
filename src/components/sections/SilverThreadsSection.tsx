'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Users, Lightbulb, Star } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function SilverThreadsSection() {
  const { t } = useLanguage()

  const pillars = [
    {
      icon: Users,
      accent: 'bg-swan-blue/10 text-swan-blue',
      title: t.silverThreads.p1Title,
      description: t.silverThreads.p1Desc,
    },
    {
      icon: Lightbulb,
      accent: 'bg-amber-100 text-amber-600',
      title: t.silverThreads.p2Title,
      description: t.silverThreads.p2Desc,
    },
    {
      icon: Star,
      accent: 'bg-emerald-100 text-emerald-600',
      title: t.silverThreads.p3Title,
      description: t.silverThreads.p3Desc,
    },
  ]
  return (
    <section
      id="silver-threads"
      className="relative overflow-hidden bg-swan-ivory font-sans py-12 lg:py-16"
    >
      {/* Soft background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-swan-blue/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-amber-200/25 blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block px-4 py-1.5 bg-swan-blue/10 border border-swan-blue/20 text-swan-blue text-xs font-semibold tracking-wide uppercase rounded-full mb-3">
              {t.silverThreads.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-swan-midnight leading-[1.15] tracking-tight">
              {t.silverThreads.title}
            </h2>
            <p className="text-base text-swan-midnight/50 font-medium mt-1">{t.silverThreads.subtitle}</p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <p className="text-base text-swan-midnight/50 max-w-sm leading-relaxed sm:text-right hidden sm:block">
              {t.silverThreads.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-swan-blue text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-swan-blue/90 transition-all self-start sm:self-auto"
            >
              {t.silverThreads.joinUs}
            </Link>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">

          {/* Image — takes 2/5 */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-lg min-h-[280px]">
            <Image
              src="/images/silverthreadsimage.jpg"
              alt="Seniors standing together and connecting"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-swan-midnight/50 via-transparent to-transparent" />
            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md">
              <p className="text-[10px] text-swan-midnight/50 font-medium">{t.silverThreads.availableIn}</p>
              <p className="text-xs font-bold text-swan-midnight">{t.silverThreads.langBadge}</p>
            </div>
          </div>

          {/* Pillar cards — takes 3/5 */}
          <div className="lg:col-span-3 flex flex-col gap-4 justify-between">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="group flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border border-gray-100 relative"
                >
                  {/* Number */}
                  <span className="absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full bg-swan-midnight text-swan-ivory text-[10px] font-bold flex items-center justify-center shadow">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${pillar.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base font-bold text-swan-midnight mb-1">{pillar.title}</h3>
                    <p className="text-sm text-swan-midnight/50 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
