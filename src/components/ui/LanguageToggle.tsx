'use client'

import React from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface LanguageToggleProps {
  variant?: 'light' | 'dark'
  className?: string
  showIcon?: boolean
}

export function LanguageToggle({
  variant = 'light',
  className = '',
  showIcon = true,
}: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  const isDark = variant === 'dark'

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center rounded-full p-1 transition-all ${
        isDark
          ? 'bg-white/15 backdrop-blur-md border border-white/20 text-white'
          : 'bg-white/90 backdrop-blur-sm border border-swan-grey shadow-sm text-swan-midnight'
      } ${className}`}
    >
      {showIcon && (
        <span
          className={`pl-2 pr-1 flex items-center ${
            isDark ? 'text-white/80' : 'text-swan-midnight/60'
          }`}
          aria-hidden="true"
        >
          <Globe size={13} />
        </span>
      )}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        title="Switch to English"
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          language === 'en'
            ? isDark
              ? 'bg-white text-swan-midnight shadow-sm'
              : 'bg-swan-blue text-white shadow-sm'
            : isDark
              ? 'text-white/70 hover:text-white'
              : 'text-swan-midnight/60 hover:text-swan-midnight'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        aria-pressed={language === 'fr'}
        title="Passer au Français"
        className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
          language === 'fr'
            ? isDark
              ? 'bg-white text-swan-midnight shadow-sm'
              : 'bg-swan-blue text-white shadow-sm'
            : isDark
              ? 'text-white/70 hover:text-white'
              : 'text-swan-midnight/60 hover:text-swan-midnight'
        }`}
      >
        FR
      </button>
    </div>
  )
}

