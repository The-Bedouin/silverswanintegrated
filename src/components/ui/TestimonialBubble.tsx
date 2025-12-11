import Image from 'next/image'

export function TestimonialBubble() {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl max-w-md mx-auto">
      <div className="flex items-start gap-4">
        {/* Profile Picture */}
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-[#E5E7EB] flex-shrink-0">
          <Image
            src="https://placehold.co/56x56/9CA3AF/FFFFFF?text=W"
            alt="Testimonial author"
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Quote */}
        <div className="flex-1">
          <p className="text-sm md:text-base text-[#1a1a1a] leading-relaxed italic">
            &quot;Because of this organization, I was given hope and a second chance.&quot;
          </p>
        </div>
      </div>
    </div>
  )
}

