'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaptopCode,
  faComments,
  faChampagneGlasses,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

// --- Types ---
interface EventItem {
  id: number
  category: string
  title: string
  location: string
  excerpt: string
  imageUrl: string
  icon: IconDefinition
}

// --- Data ---
const EVENTS: EventItem[] = [
  {
    id: 1,
    category: 'Digital Workshop',
    title: 'Tech for a Better Life: Digital Literacy for Seniors',
    location: 'Montreal QC',
    excerpt: 'Bridging the digital divide. Join us for a hands-on workshop designed to help elders master smartphones, tablets, and essential apps for daily connection.',
    imageUrl: '/images/techforabetterlifecardpicture.jpg',
    icon: faLaptopCode,
  },
  {
    id: 2,
    category: 'Panel Discussion',
    title: 'Inclusion in Tech: Voices from the Margins',
    location: 'Virtual Event',
    excerpt: 'A candid conversation on how we can better integrate minority voices into the Canadian technology sector, featuring industry leaders and community advocates.',
    imageUrl: '/images/inclusionintechcardpicture.jpg',
    icon: faComments,
  },
  {
    id: 3,
    category: 'Community Mixer',
    title: 'Intergenerational Innovation Gala',
    location: 'Montreal QC',
    excerpt: 'Celebrating the power of unity. An evening where youth and elders collaborate on ideas to solve community challenges using modern technology.',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
    icon: faChampagneGlasses,
  },
]

// --- Components ---
const EventCard = ({ item }: { item: EventItem }) => (
  <div className="group relative flex flex-col bg-white border border-swan-grey rounded-2xl shadow-sm hover:shadow-xl hover:shadow-swan-blue/5 transition-all duration-300 h-full overflow-hidden">
    {/* Image Section */}
    <div className="relative h-44 w-full overflow-hidden">
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Category Badge */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-swan-blue shadow-sm">
        {item.category}
      </div>
    </div>

    {/* Content Section */}
    <div className="flex p-4 gap-4 flex-grow bg-white relative z-10">
      {/* Icon Badge Column */}
      <div className="flex flex-col items-center flex-shrink-0 w-14">
        <div className="flex items-center justify-center bg-swan-lavender/50 rounded-xl w-14 h-14 border border-swan-lavender text-swan-blue group-hover:bg-swan-blue group-hover:text-white transition-all duration-300 shadow-sm">
          <FontAwesomeIcon icon={item.icon} className="text-xl" />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-swan-midnight leading-tight group-hover:text-swan-blue transition-colors">
          {item.title}
        </h3>

        {/* Location Row */}
        <div className="flex items-center gap-1.5 text-xs text-swan-midnight/50 font-medium mb-1">
          <MapPin size={12} className="text-swan-blue" />
          {item.location}
        </div>

        <p className="text-sm text-swan-midnight/50 leading-relaxed line-clamp-3">
          {item.excerpt}
        </p>
      </div>
    </div>
  </div>
)

export function EventsSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-8 lg:py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-swan-ivory to-swan-grey relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-swan-lavender rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto space-y-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-swan-blue uppercase bg-swan-blue/10 rounded-full">
              Silverswan Events
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-swan-midnight tracking-tight leading-[1.1]">
              Connecting Generations Through <span className="text-swan-blue">Technology</span>
            </h2>
            <p className="mt-4 text-lg text-swan-midnight/60 max-w-xl leading-relaxed">
              Join our workshops, panels, and mixers dedicated to integrating minorities and elders into the digital society.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <EventCard key={event.id} item={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
