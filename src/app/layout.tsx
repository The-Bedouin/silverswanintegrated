import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Silverswan Integrated Hub',
    default: 'Silverswan Integrated Hub — Where Innovation Meets Inclusion',
  },
  description: 'Silverswan Integrated Hub bridges the generational gap between seniors and youth through intergenerational care, digital inclusion, and community support across Canada.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(
        inter.variable,
        bricolage.variable,
        "font-sans antialiased bg-swan-ivory"
      )}>
        {children}
      </body>
    </html>
  )
}
