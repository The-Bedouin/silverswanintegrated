import Image from 'next/image'
import { cn } from '@/lib/utils'

interface DonorStatsProps {
  className?: string
}

export function DonorStats({ className }: DonorStatsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Profile Pictures */}
      <div className="flex -space-x-2">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden bg-[#E5E7EB]">
          <Image
            src="https://placehold.co/40x40/9CA3AF/FFFFFF?text=W"
            alt="Donor"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden bg-[#E5E7EB]">
          <Image
            src="https://placehold.co/40x40/9CA3AF/FFFFFF?text=W"
            alt="Donor"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden bg-[#E5E7EB]">
          <Image
            src="https://placehold.co/40x40/9CA3AF/FFFFFF?text=M"
            alt="Donor"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Stats Text */}
      <span className="text-sm md:text-base text-[#6B7280] font-medium">
        1000+ Donor active members
      </span>
    </div>
  )
}

