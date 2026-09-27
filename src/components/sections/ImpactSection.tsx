'use client'

import Image from 'next/image'
import { Laptop, Building2, Users, TrendingUp } from 'lucide-react'

// --- Sub-components for cleanliness ---
const ChartBar = ({ height, label }: { height: string; label: string }) => (
  <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
    <div className="relative w-8 bg-swan-lavender/50 rounded-t-lg h-20 flex items-end overflow-hidden">
      {/* Animated Bar */}
      <div
        className="w-full bg-swan-blue rounded-t-lg transition-all duration-1000 ease-out group-hover:bg-swan-blue/80"
        style={{ height: height }}
      />
    </div>
    <span className="text-[10px] text-swan-midnight/50 font-medium">{label}</span>
  </div>
)

const StatCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  label,
  value,
}: {
  icon: any
  iconBg: string
  iconColor: string
  label: string
  value: string
}) => (
  <div className="flex flex-col gap-3 p-4 border border-swan-grey rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg} ${iconColor}`}>
      <Icon size={20} strokeWidth={2.5} />
    </div>
    <div>
      <p className="text-sm text-swan-midnight/50 font-medium mb-1">{label}</p>
      <h3 className="text-2xl font-bold text-swan-midnight tracking-tight">{value}</h3>
    </div>
  </div>
)

// --- Main Component ---
export function ImpactSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-8 lg:py-16 px-4 md:px-8 lg:px-16 bg-swan-midnight overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch w-full">
        {/* LEFT COLUMN: Image & Floating Chart */}
        <div className="relative flex flex-col">
          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden bg-swan-lavender flex-1 min-h-[300px] shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2670&auto=format&fit=crop"
              alt="White jigsaw puzzle pieces on brown marble table - representing community connection and integration"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Floating Chart Card */}
          <div className="absolute bottom-6 right-4 md:right-6 bg-white p-5 rounded-2xl shadow-xl max-w-[270px] w-full animate-fade-in-up">
            <div className="mb-5">
              <h4 className="font-bold text-swan-midnight text-base leading-tight">Program Growth</h4>
              <p className="text-xs text-swan-midnight/50 mt-0.5">Participants trained over the years</p>
            </div>

            <div className="flex items-end justify-around gap-2">
              <ChartBar height="40%" label="2024" />
              <ChartBar height="70%" label="2025" />
              <ChartBar height="100%" label="2026" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Content */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="self-start px-4 py-1.5 rounded-full border border-swan-blue/20 bg-swan-lavender text-xs font-semibold text-swan-blue tracking-wide uppercase">
            Digital Inclusion
          </div>

          {/* Heading & Text */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-swan-ivory leading-[1.15] tracking-tight">
              Social Inclusion Through Digital Literacy          </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              We&apos;ve equipped hundreds of seniors and minority community members across Canada with essential digital skills, business technology tools, and the confidence to thrive in today&apos;s digital economy.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <StatCard
              icon={Users}
              iconBg="bg-swan-blue/10"
              iconColor="text-swan-blue"
              label="Participants Trained"
              value="100+"
            />
            <StatCard
              icon={Laptop}
              iconBg="bg-swan-lavender"
              iconColor="text-swan-midnight"
              label="Tech Programs"
              value="10+"
            />
            <StatCard
              icon={Building2}
              iconBg="bg-swan-sky/20"
              iconColor="text-swan-blue"
              label="Businesses Supported"
              value="100+"
            />
            <StatCard
              icon={TrendingUp}
              iconBg="bg-swan-sage/20"
              iconColor="text-swan-sage"
              label="Success Rate"
              value="92%"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
