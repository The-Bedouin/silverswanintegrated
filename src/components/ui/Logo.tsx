import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Abstract Orange Icon */}
      <div className="w-10 h-10 md:w-12 md:h-12 relative">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle cx="20" cy="20" r="18" fill="#FF6B35" opacity="0.9" />
          <circle cx="12" cy="12" r="6" fill="white" opacity="0.8" />
          <circle cx="28" cy="12" r="6" fill="white" opacity="0.8" />
          <circle cx="20" cy="28" r="6" fill="white" opacity="0.8" />
          <path
            d="M12 12 L20 20 L28 12 M12 12 L20 20 L20 28"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {/* Logo Text */}
      <span className="text-2xl md:text-3xl font-bold text-black">Kindora</span>
    </div>
  )
}

