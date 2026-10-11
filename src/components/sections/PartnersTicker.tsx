'use client'

import Image from 'next/image'

const PARTNER_LOGOS = [
  {
    name: 'Government of Canada / Gouvernement du Canada',
    src: '/images/canadagovernment.jpeg',
    className: 'h-12 md:h-16 w-auto object-contain',
  },
  {
    name: 'LaSalle Montréal',
    src: '/images/lasalle.jpeg',
    className: 'h-10 md:h-12 w-auto object-contain',
  },
]

// Repeat to ensure wide seamless loop across all resolutions
const LOGO_SET = [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS]

export function PartnersTicker() {
  return (
    <section
      aria-label="Partners and supporters"
      className="relative w-full bg-white py-8 md:py-10 border-t border-b border-gray-100 overflow-hidden font-sans"
    >
      {/* Edge gradient masks for seamless "in and out of screen" effect */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10"
      />

      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-[11px] md:text-xs uppercase tracking-widest font-semibold text-swan-midnight/40">
          Supported By &bull; Soutenu Par
        </p>
      </div>

      {/* Infinity marquee container */}
      <div className="relative flex overflow-hidden">
        <div className="animate-infinite-marquee flex items-center gap-12 md:gap-20 shrink-0 pr-12 md:pr-20">
          {LOGO_SET.map((logo, index) => (
            <div
              key={`a-${index}`}
              className="flex items-center justify-center min-w-[140px] md:min-w-[180px] px-3 py-1 transition-opacity duration-300 hover:opacity-100 opacity-90"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={240}
                height={100}
                className={logo.className}
              />
            </div>
          ))}
        </div>

        {/* Duplicate track to guarantee continuous loop */}
        <div
          aria-hidden
          className="animate-infinite-marquee flex items-center gap-12 md:gap-20 shrink-0 pr-12 md:pr-20"
        >
          {LOGO_SET.map((logo, index) => (
            <div
              key={`b-${index}`}
              className="flex items-center justify-center min-w-[140px] md:min-w-[180px] px-3 py-1 transition-opacity duration-300 hover:opacity-100 opacity-90"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={240}
                height={100}
                className={logo.className}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
