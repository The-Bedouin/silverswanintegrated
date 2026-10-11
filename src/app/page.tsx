import { HeroV2 } from '@/components/sections/HeroV2'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { EventsSection } from '@/components/sections/EventsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SupportSection } from '@/components/sections/SupportSection'
import { SilverThreadsSection } from '@/components/sections/SilverThreadsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { PartnersTicker } from '@/components/sections/PartnersTicker'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <HeroV2 />
      <ImpactSection />
      <EventsSection />
      <AboutSection />
      <SupportSection />
      <SilverThreadsSection />
      <TestimonialsSection />
      <ContactSection />
      <PartnersTicker />
      <Footer />
    </main>
  )
}
