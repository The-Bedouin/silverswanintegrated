import { HeroV2 } from '@/components/sections/HeroV2'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { EventsSection } from '@/components/sections/EventsSection'
import { SupportSection } from '@/components/sections/SupportSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <HeroV2 />
      <ImpactSection />
      <EventsSection />
      <SupportSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
