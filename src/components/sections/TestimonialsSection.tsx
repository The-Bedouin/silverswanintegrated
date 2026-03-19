'use client'

import { Star, Quote, CheckCircle2 } from 'lucide-react'

// --- Types ---
interface Review {
  id: number
  name: string
  role: string
  text: string
  rating: number
  tag: string
}

// --- MOCK DATA ---
const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Elena M.',
    role: 'Program Participant',
    text: 'Silverswan gave me a second family. The digital workshops helped me connect with my grandkids online for the first time.',
    rating: 5,
    tag: 'Senior Member',
  },
  {
    id: 2,
    name: 'Jacques T.',
    role: 'Volunteer Mentor',
    text: 'A truly vital resource for communities across Canada. Seeing the confidence grow in the seniors we help is the most rewarding experience of my life.',
    rating: 5,
    tag: 'Volunteer',
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Community Partner',
    text: 'The "Integrated Support" initiative is a game-changer. It\'s not just about aid; it\'s about dignity and community building.',
    rating: 5,
    tag: 'Partner',
  },
  {
    id: 4,
    name: 'Amara O.',
    role: 'Newcomer Member',
    text: 'I felt so isolated when I moved here. This hub welcomed me with open arms and helped me navigate a new city.',
    rating: 5,
    tag: 'Newcomer',
  },
  {
    id: 5,
    name: 'David Chen',
    role: 'Senior Member',
    text: 'The financial literacy sessions saved me from a potential scam. I feel safer and more empowered now.',
    rating: 5,
    tag: 'Member',
  },
  {
    id: 6,
    name: 'Maria Rodriguez',
    role: 'Caregiver',
    text: 'The respite and resources provided here have been a lifeline for our family. Truly exceptional care.',
    rating: 5,
    tag: 'Family Support',
  },
]

// --- COMPONENTS ---
const ReviewCard = ({ review }: { review: Review }) => (
  <div className="w-[280px] md:w-[340px] p-5 mx-3 bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-swan-grey flex-shrink-0 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-default group">
    {/* Header: Rating & Tag */}
    <div className="flex justify-between items-start mb-4">
      <div className="flex gap-1">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 text-swan-blue fill-swan-blue" />
        ))}
      </div>
      <span className="px-2.5 py-1 bg-swan-lavender/30 text-[10px] font-semibold text-swan-midnight/60 rounded-full border border-swan-lavender group-hover:bg-swan-lavender group-hover:text-swan-blue transition-colors">
        {review.tag}
      </span>
    </div>

    {/* Content */}
    <div className="mb-4 relative">
      <Quote className="absolute -top-1 -left-1 w-6 h-6 text-swan-lavender -z-10 fill-current" />
      <p className="text-base font-medium text-swan-midnight leading-relaxed tracking-tight">
        &quot;{review.text}&quot;
      </p>
    </div>

    {/* Footer: Author Info */}
    <div className="flex items-center gap-3 pt-4 border-t border-swan-grey">
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-swan-lavender to-swan-sky/30 flex items-center justify-center text-xs font-bold text-swan-midnight">
        {review.name.charAt(0)}
      </div>
      <div>
        <div className="flex items-center gap-1">
          <h4 className="font-bold text-xs text-swan-midnight">{review.name}</h4>
          <CheckCircle2 className="w-3 h-3 text-swan-blue fill-swan-blue/10" />
        </div>
        <p className="text-[10px] text-swan-midnight/50">{review.role}</p>
      </div>
    </div>
  </div>
)

// --- MAIN COMPONENT ---
export function TestimonialsSection() {
  return (
    <div className="bg-swan-grey overflow-x-hidden">
      <section className="w-full min-h-[80vh] flex flex-col justify-center py-8 md:py-14 relative">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
          <h2 className="text-xs font-semibold text-swan-blue tracking-wider uppercase mb-2">
            What People Are Saying
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-swan-midnight tracking-tighter mb-4">
            Stories of Impact <br className="hidden md:block" />
            <span className="text-swan-midnight/40">From Our Whole Community.</span>
          </h3>
          <p className="text-base md:text-lg text-swan-midnight/50 max-w-2xl mx-auto leading-relaxed">
            Real experiences from the seniors, families, partners, and newcomers building a stronger
            future with Silverswan.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full space-y-6">
          {/* Edge Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-swan-grey to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-swan-grey to-transparent z-10 pointer-events-none" />

          {/* Row 1: Left Scroll */}
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
            {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, idx) => (
              <ReviewCard key={`row1-${idx}`} review={review} />
            ))}
          </div>

          {/* Row 2: Right Scroll (Optional - Adds dynamic feel) */}
          <div className="hidden md:flex w-max animate-scroll-right hover:[animation-play-state:paused]">
            {[...[...REVIEWS].reverse(), ...REVIEWS, ...REVIEWS].map((review, idx) => (
              <ReviewCard key={`row2-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
