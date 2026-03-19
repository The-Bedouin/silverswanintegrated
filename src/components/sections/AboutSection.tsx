'use client'

import Image from 'next/image'
import { Heart, Globe, Sparkles, Users, ArrowRight } from 'lucide-react'

// --- Sub-components ---

const ValueCard = ({
    icon: Icon,
    title,
    description,
}: {
    icon: any
    title: string
    description: string
}) => (
    <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-swan-grey shadow-sm hover:shadow-md hover:border-swan-blue/20 transition-all duration-300">
        <div className="w-10 h-10 rounded-xl bg-swan-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-swan-blue/20 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-5 h-5 text-swan-blue" />
        </div>
        <div>
            <h4 className="text-base font-bold text-swan-midnight mb-1">{title}</h4>
            <p className="text-sm text-swan-midnight/50 leading-relaxed">{description}</p>
        </div>
    </div>
)

const FloatingFoundedCard = () => (
    <div className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-6 bg-white rounded-2xl p-4 shadow-xl z-20 animate-fade-in-up">
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-swan-blue to-swan-sky flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
                <p className="text-xs text-swan-midnight/50 font-medium">Community-Driven</p>
                <p className="text-lg font-bold text-swan-midnight tracking-tight">Since 2020</p>
            </div>
        </div>
    </div>
)

const FloatingMembersBadge = () => (
    <div className="absolute -top-3 -right-3 md:top-4 md:-right-6 bg-swan-midnight text-white rounded-full px-5 py-2.5 shadow-xl z-20 animate-fade-in-up hidden sm:block">
        <p className="text-sm font-bold text-center">
            500+ Lives <br />
            <span className="text-swan-sky font-normal text-xs">Impacted</span>
        </p>
    </div>
)

// --- Main Component ---
export function AboutSection() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-8 lg:py-16 px-4 md:px-8 lg:px-16 bg-swan-ivory relative overflow-hidden">
            {/* Subtle decorative blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-swan-lavender/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-swan-sky/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full relative z-10">
                {/* LEFT COLUMN: Story & Values */}
                <div className="flex flex-col gap-6 order-2 lg:order-1">
                    {/* Badge */}
                    <div className="self-start px-4 py-1.5 rounded-full border border-swan-blue/20 bg-swan-blue/10 text-xs font-semibold text-swan-blue tracking-wide uppercase">
                        Who We Are
                    </div>

                    {/* Heading & Mission */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-swan-midnight leading-[1.15] tracking-tight">
                            Building Bridges,{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-swan-blue to-swan-sky">
                                Not Barriers.
                            </span>
                        </h2>
                        <p className="text-lg text-swan-midnight/60 leading-relaxed max-w-lg"> As a proudly
                            <span className="font-bold text-swan-midnight"> Black-led and Black-serving organization,</span> we believe that digital literacy is a fundamental right. We are dedicated to dismantling systemic barriers by equipping our community with the tools to navigate today&apos;s world with confidence.
                            in the digital age.
                        </p>
                        <p className="text-base text-swan-midnight/50 leading-relaxed max-w-lg">
                            Whether that means securely accessing online health resources, navigating essential government services, or scaling a small business, we champion the socio-economic advancement of our community in an open, welcoming environment.
                        </p>
                    </div>

                    {/* Value Cards */}
                    <div className="space-y-3 mt-2">
                        <ValueCard
                            icon={Globe}
                            title="Digital Health & Connection."
                            description="Equipping individuals with the confidence to use telehealth and vital government platforms (like the CRA and Service Canada) to improve daily life."
                        />
                        <ValueCard
                            icon={Users}
                            title="Intergenerational Impact"
                            description="Bridging the gap between youth and elders through shared learning experiences and mentorship."
                        />
                        <ValueCard
                            icon={Sparkles}
                            title="Economic Empowerment."
                            description="Closing the digital gap for Black-led ventures, fostering entrepreneurship, and building long-term financial security."
                        />
                    </div>

                    {/* CTA */}
                    <a
                        href="/about"
                        className="self-start group flex items-center gap-3 mt-2 px-6 py-3 bg-swan-midnight text-white rounded-full font-medium text-sm shadow-lg hover:bg-swan-midnight/90 hover:shadow-xl transition-all duration-300"
                    >
                        <span>Learn More About Us</span>
                        <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                            <ArrowRight size={14} />
                        </div>
                    </a>
                </div>

                {/* RIGHT COLUMN: Image Composition */}
                <div className="relative order-1 lg:order-2">
                    <div className="relative rounded-3xl overflow-hidden bg-swan-lavender aspect-[4/5] md:aspect-[3/4] shadow-lg">
                        <Image
                            src="/images/whowearesectionpicture.jpg"
                            alt="Diverse group of seniors and community members collaborating at a workshop"
                            fill
                            className="object-cover"
                        />
                        {/* Gentle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-swan-midnight/20 via-transparent to-transparent" />
                    </div>

                    {/* Floating Elements */}
                    <FloatingFoundedCard />
                    <FloatingMembersBadge />
                </div>
            </div>
        </section>
    )
}
