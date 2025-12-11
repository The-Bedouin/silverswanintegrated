'use client'

import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CTAButtonsProps {
  className?: string
}

export function CTAButtons({ className }: CTAButtonsProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row items-start sm:items-center gap-4", className)}>
      {/* Donate Now Button */}
      <button className="group bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg flex items-center gap-3 hover:bg-[#1a1a1a] transition-colors">
        Donate Now
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>
      
      {/* Learn More Link */}
      <a
        href="#learn-more"
        className="text-black font-semibold text-base md:text-lg hover:underline transition-colors"
      >
        Learn More
      </a>
    </div>
  )
}

