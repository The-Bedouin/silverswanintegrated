'use client'

import Image from 'next/image'
import { Laptop, Building2, Users, TrendingUp } from 'lucide-react'

// --- Sub-components for cleanliness ---
const ChartBar = ({ height, label }: { height: string; label: string }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <div className="relative w-8 bg-gray-100 rounded-t-lg h-24 flex items-end overflow-hidden">
      {/* Animated Bar */}
      <div
        className="w-full bg-blue-500 rounded-t-lg transition-all duration-1000 ease-out group-hover:bg-blue-600"
        style={{ height: height }}
      />
    </div>
    <span className="text-[10px] text-gray-500 font-medium">{label}</span>
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
  <div className="flex flex-col gap-4 p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg} ${iconColor}`}>
      <Icon size={24} strokeWidth={2.5} />
    </div>
    <div>
      <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
      <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{value}</h3>
    </div>
  </div>
)

// --- Main Component ---
export function ImpactSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT COLUMN: Image & Floating Chart */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gray-100 aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1612611741189-a9b9eb01d515?q=80&w=2000&auto=format&fit=crop"
              alt="White jigsaw puzzle pieces on brown marble table - representing community connection and integration"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Floating Chart Card */}
          <div className="absolute bottom-8 right-4 md:right-8 bg-white p-6 rounded-3xl shadow-xl max-w-[280px] w-full animate-fade-in-up">
            <div className="mb-6">
              <h4 className="font-bold text-gray-900 text-lg">Program Growth</h4>
              <p className="text-xs text-gray-500 mt-1">Participants trained over the years</p>
            </div>

            <div className="flex items-end justify-between gap-2 h-32 pb-2">
              <ChartBar height="35%" label="2020" />
              <ChartBar height="55%" label="2021" />
              <ChartBar height="75%" label="2022" />
              <ChartBar height="100%" label="2023" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Content */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <div className="self-start px-4 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-600 tracking-wide uppercase">
            Digital Inclusion
          </div>

          {/* Heading & Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-[1.15] tracking-tight">
              Empowering Communities Through Technology Access
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We&apos;ve equipped hundreds of seniors and minority community members across Canada with essential digital skills, business technology tools, and the confidence to thrive in today&apos;s digital economy.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <StatCard
              icon={Users}
              iconBg="bg-blue-100"
              iconColor="text-blue-600"
              label="Participants Trained"
              value="500+"
            />
            <StatCard
              icon={Laptop}
              iconBg="bg-purple-100"
              iconColor="text-purple-600"
              label="Tech Programs"
              value="25+"
            />
            <StatCard
              icon={Building2}
              iconBg="bg-orange-100"
              iconColor="text-orange-600"
              label="Businesses Supported"
              value="150+"
            />
            <StatCard
              icon={TrendingUp}
              iconBg="bg-green-100"
              iconColor="text-green-600"
              label="Success Rate"
              value="92%"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

