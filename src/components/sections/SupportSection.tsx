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
    <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 w-full mb-4">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="mt-1">
          <Icon className="w-6 h-6 text-black fill-current" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

/**
 * Floating badge component
 */
const FloatingBadge = ({ text, subtext }: { text: string; subtext: string }) => (
  <div className="absolute top-10 right-4 md:right-10 bg-white rounded-full px-5 py-2 shadow-lg z-20 animate-fade-in-up hidden sm:block">
    <p className="text-xs md:text-sm font-semibold text-gray-800 text-center">
      {text} <br /> <span className="text-gray-500 font-normal">{subtext}</span>
    </p>
  </div>
)

/**
 * Circular Play Button with text bubble
 */
const PlayTrigger = ({ onClick }: { onClick: () => void }) => (
  <div
    className="absolute top-10 left-4 md:-left-12 flex items-center gap-3 z-20 cursor-pointer group"
    onClick={onClick}
  >
    <div className="bg-white rounded-2xl px-4 py-3 shadow-lg transform transition-transform group-hover:scale-105">
      <p className="text-sm font-bold text-black leading-tight">
        Learn about <br /> our mission
      </p>
    </div>
    <div className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-50 transition-colors">
      <Play className="w-5 h-5 text-black fill-black ml-1" />
    </div>
  </div>
)

// --- Main Component ---
export function SupportSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  // Background Grid Pattern
  const GridPattern = () => (
    <div
      className="absolute inset-0 pointer-events-none z-0 opacity-10"
      style={{
        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />
  )

  return (
    <section id="support" className="relative min-h-screen bg-[#4ADE80] overflow-hidden font-sans">
      {/* Background Grid */}
      <GridPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: Header & Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-12 tracking-tight">
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
                description="Celebrating cultural heritage through arts, music, and networking events to build strong community bonds."
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
            <div className="flex justify-end mb-8 lg:mb-12">
              <p className="text-slate-800 text-base md:text-lg max-w-md leading-relaxed lg:mr-8">
                <span className="font-bold">Silverswan Integrated Hub</span> presents a bilingual
                initiative to foster social connections, reduce isolation, and empower seniors and
                newcomers across Canada.
              </p>
            </div>

            {/* Image Composition Wrapper */}
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
              {/* Darker Green Blob Background Shape with Image */}
              <div className="absolute bottom-0 right-0 w-[120%] h-[90%] bg-[#3BC270] rounded-tl-[100px] rounded-bl-[50px] transform translate-x-20 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1758691030962-8140801d2fcc?q=80&w=2000&auto=format&fit=crop"
                  alt="Happy elderly man with headphones using a tablet, sitting on couch at home"
                  fill
                  className="object-cover object-center pointer-events-none"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <PlayTrigger onClick={() => setIsVideoOpen(!isVideoOpen)} />
              <FloatingBadge text="Supporting 500+ Seniors" subtext="Across Canada" />

              {/* Interactive Video Modal Placeholder */}
              {isVideoOpen && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/50 rounded-3xl backdrop-blur-sm transition-all">
                  <div className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-md mx-4">
                    <p className="font-bold text-lg mb-4">Program Overview Video</p>
                    <p className="text-sm text-gray-600 mb-4">
                      Watch our mission video to learn more about how we empower seniors and
                      minorities through technology.
                    </p>
                    <button
                      onClick={() => setIsVideoOpen(false)}
                      className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

