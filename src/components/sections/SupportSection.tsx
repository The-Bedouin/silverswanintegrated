'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Box, Play, Globe, Users } from 'lucide-react'

// --- Utility Components ---
const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: any
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 w-full mb-3">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="mt-1">
          <Icon className="w-6 h-6 text-swan-blue" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-swan-midnight mb-2">{title}</h3>
          <p className="text-swan-midnight/50 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

/**
 * Floating badge component
 */
const FloatingBadge = ({ text, subtext }: { text: string; subtext: string }) => (
  <div className="absolute bottom-4 right-4 md:right-10 bg-white rounded-full px-5 py-2 shadow-lg z-20 animate-fade-in-up hidden sm:block">
    <p className="text-xs md:text-sm font-semibold text-swan-midnight text-center">
      {text} <br /> <span className="text-swan-midnight/50 font-normal">{subtext}</span>
    </p>
  </div>
)


// --- Main Component ---
export function SupportSection() {

  // Background Grid Pattern
  const GridPattern = () => (
    <div
      className="absolute inset-0 pointer-events-none z-0 opacity-[0.06]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />
  )

  return (
    <section id="support" className="relative min-h-screen bg-swan-midnight overflow-hidden font-sans">
      {/* Background Grid */}
      <GridPattern />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: Header & Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-swan-ivory leading-[1.1] mb-8 tracking-tight">
              Integrated Support <br />
              for Seniors
            </h1>

            {/* Feature Cards Stack */}
            <div className="space-y-4 w-full max-w-md">
              <FeatureCard
                icon={Box}
                title="Financial & Digital Literacy"
                description="Workshops designed to prevent fraud, build self-sufficiency, and master digital tools for better communication."
              />
              <FeatureCard
                icon={Globe}
                title="Social Participation & Diversity"
                description="Preserving BIPOC cultural heritage through arts, music, and networking events to build strong community bonds."
              />
              <FeatureCard
                icon={Users}
                title="Access & Mobility Support"
                description="Assistance with transportation and navigating government benefits to ensure essential services are accessible."
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Text & Image Composition */}
          <div className="lg:col-span-7 relative mt-8 lg:mt-0">
            {/* Top Paragraph */}
            <div className="flex justify-end mb-6 lg:mb-8">
              <p className="text-swan-ivory/70 text-base md:text-lg max-w-md leading-relaxed lg:mr-8">
                <span className="font-bold text-swan-ivory">Silverswan Integrated Hub</span> presents a bilingual
                initiative for BIPOC communities to foster social connections, reduce isolation, and empower seniors and
                newcomers across Canada.
              </p>
            </div>

            {/* Image Composition Wrapper */}
            <div className="relative w-full h-[45vh] md:h-[50vh] lg:h-[60vh]">
              {/* Image — slides to right edge of viewport on lg+ via CSS class */}
              <div className="support-image-flush-right absolute bottom-0 left-0 right-0 w-full h-[90%] rounded-tl-[100px] rounded-bl-[50px] overflow-hidden bg-swan-blue">
                <Image
                  src="/images/supportsectionpicture.jpg"
                  alt="Happy elderly man with headphones using a tablet, sitting on couch at home"
                  fill
                  className="object-cover object-center pointer-events-none"
                  priority
                />
              </div>

              <FloatingBadge text="Supporting 100+ Seniors" subtext="Across Canada" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
