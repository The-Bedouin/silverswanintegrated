'use client'

import { Play } from 'lucide-react'

export function VideoPlayer() {
  return (
    <button className="bg-white/90 backdrop-blur-sm text-black px-6 py-4 rounded-xl font-semibold text-base md:text-lg flex items-center gap-4 hover:bg-white transition-colors shadow-lg">
      Watch our story reel
      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
        <Play className="w-5 h-5 text-white fill-white" />
      </div>
    </button>
  )
}

