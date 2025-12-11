'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className={cn("flex items-center justify-end gap-4 flex-wrap", className)}>
      {/* All Pages Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-lg font-medium text-sm md:text-base flex items-center gap-2 hover:bg-white transition-colors"
        >
          All Pages
          <ChevronDown className="w-4 h-4" />
        </button>
        {/* Dropdown menu would go here */}
      </div>
      
      {/* Programs Link */}
      <a
        href="#programs"
        className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-lg font-medium text-sm md:text-base hover:bg-white transition-colors"
      >
        Programs
      </a>
      
      {/* Blogs Link */}
      <a
        href="#blogs"
        className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-lg font-medium text-sm md:text-base hover:bg-white transition-colors"
      >
        Blogs
      </a>
      
      {/* Donate Now Button */}
      <button className="bg-black text-white px-4 py-2 rounded-lg font-bold text-sm md:text-base hover:bg-[#1a1a1a] transition-colors">
        Donate Now
      </button>
    </nav>
  )
}

