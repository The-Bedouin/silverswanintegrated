'use client'

import Image from 'next/image'
import { Box, Globe, Users } from 'lucide-react'

const SUPPORT_PILLARS = [
  {
    icon: Box,
    accent: 'bg-swan-blue/10 text-swan-blue',
    title: 'Financial & Digital Literacy',
    description:
      'Workshops designed to prevent fraud, build self-sufficiency, and master digital tools for everyday confidence and communication.',
  },
  {
    icon: Globe,
    accent: 'bg-amber-100 text-amber-600',
    title: 'Social Participation & Diversity',
    description:
      'Preserving BIPOC cultural heritage through arts, music, and networking events to build strong, inclusive community bonds.',
  },
  {
    icon: Users,
    accent: 'bg-emerald-100 text-emerald-600',
    title: 'Access & Mobility Support',
    description:
      'Assistance with transportation and navigating government benefits to ensure essential services are accessible to everyone.',
  },
]

export function SupportSection() {
  return (
    <section
      id="support"
      className="relative overflow-hidden bg-swan-midnight text-swan-ivory font-sans py-12 lg:py-16"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
          <div>
            <span className="inline-block px-3 py-1 bg-swan-blue/20 text-swan-sky border border-swan-sky/20 text-[10px] font-semibold tracking-widest uppercase rounded-full mb-2">
              Community Initiative
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-swan-ivory leading-tight">
              Integrated Support
            </h2>
            <p className="text-swan-sky font-medium mt-1">For Seniors</p>
          </div>
          <p className="text-sm text-swan-ivory/70 max-w-sm leading-relaxed hidden sm:block">
            Silverswan Integrated Hub presents a bilingual initiative for BIPOC communities to foster social connections, reduce isolation, and empower seniors across Canada.
          </p>
        </div>

        {/* Content grid - fits compact single viewport */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          {/* Image — takes 2/5 */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl min-h-[280px]">
            <Image
              src="/images/supportsectionpicture.jpg"
              alt="Senior using a tablet and smiling"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-swan-midnight/60 via-transparent to-transparent" />
            {/* Floating Badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3.5 py-2 shadow-lg">
              <p className="text-[10px] text-swan-midnight/60 font-medium">Supporting</p>
              <p className="text-xs font-bold text-swan-midnight">100+ Seniors Across Canada</p>
            </div>
          </div>

          {/* Feature Cards — takes 3/5 */}
          <div className="lg:col-span-3 flex flex-col gap-4 justify-between">
            {SUPPORT_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="group flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border border-white/10 relative"
                >
                  {/* Number badge */}
                  <span className="absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full bg-swan-blue text-white text-[10px] font-bold flex items-center justify-center shadow">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${pillar.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-sm font-bold text-swan-midnight mb-1">{pillar.title}</h3>
                    <p className="text-xs text-swan-midnight/60 leading-relaxed">{pillar.description}</p>
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
