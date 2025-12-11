'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'

// --- Types ---
interface EventItem {
  id: number
  month: string
  day: string
  category: string
  title: string
  location: string
  excerpt: string
  imageUrl: string
}

// --- Data ---
const EVENTS: EventItem[] = [
  {
    id: 1,
    month: 'Date',
    day: 'TBA',
    category: 'Digital Workshop',
    title: 'Tech Connect: Digital Literacy for Seniors',
    location: 'Silverswan Hub, Toronto',
    excerpt: 'Bridging the digital divide. Join us for a hands-on workshop designed to help elders master smartphones, tablets, and essential apps for daily connection.',
    imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    month: 'Date',
    day: 'TBA',
    category: 'Panel Discussion',
    title: 'Inclusion in Tech: Voices from the Margins',
    location: 'Virtual Event',
    excerpt: 'A candid conversation on how we can better integrate minority voices into the Canadian technology sector, featuring industry leaders and community advocates.',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    month: 'Date',
    day: 'TBA',
    category: 'Community Mixer',
    title: 'Intergenerational Innovation Gala',
    location: 'Grand Hall, Vancouver',
    excerpt: 'Celebrating the power of unity. An evening where youth and elders collaborate on ideas to solve community challenges using modern technology.',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
  },
]

// --- Components ---
const EventCard = ({ item }: { item: EventItem }) => (
  <div className="group relative flex flex-col bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 h-full overflow-hidden">
    {/* Image Section */}
    <div className="relative h-56 w-full overflow-hidden">
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Category Badge */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-teal-700 shadow-sm">
        {item.category}
      </div>
    </div>

    {/* Content Section */}
    <div className="flex p-6 gap-5 flex-grow bg-white relative z-10">
      {/* Date Column */}
      <div className="flex flex-col items-center flex-shrink-0 w-14">
        <div className="flex flex-col items-center bg-slate-50 rounded-xl p-2 w-full border border-slate-100">
          <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
            {item.month}
          </span>
          <span className="text-xl font-bold text-slate-900 leading-none mt-1">
            {item.day}
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-teal-600 transition-colors">
          {item.title}
        </h3>

        {/* Location Row */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
          <MapPin size={12} className="text-teal-500" />
          {item.location}
        </div>

        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
          {item.excerpt}
        </p>
      </div>
    </div>
  </div>
)

export function EventsSection() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-50 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-700 uppercase bg-teal-100 rounded-full">
              Silverswan Events
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Connecting Generations Through <span className="text-teal-600">Technology</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl leading-relaxed">
              Join our workshops, panels, and mixers dedicated to integrating minorities and elders into the digital society.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS.map((event) => (
            <EventCard key={event.id} item={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

