import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-block", className)}>
      <Image
        src="/logos/silverswanlogo.png"
        alt="Silverswan Integrated Hub Logo"
        width={180}
        height={50}
        className="h-auto w-auto max-h-12"
        priority
      />
    </Link>
  )
}
