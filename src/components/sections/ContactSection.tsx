'use client'

import { Mail, MapPin, Send, ArrowRight } from 'lucide-react'

// --- Helper Components ---
const InputField = ({
  label,
  id,
  type = 'text',
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder: string
}) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="text-sm font-semibold text-swan-midnight/70 ml-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-white/80 rounded-xl border border-swan-blue/20 focus:border-swan-blue focus:ring-4 focus:ring-swan-blue/10 outline-none transition-all placeholder:text-swan-midnight/30 text-swan-midnight hover:border-swan-blue/40 text-sm"
      required
    />
  </div>
)

const ContactCard = ({
  icon: Icon,
  title,
  value,
  href,
  color,
}: {
  icon: any
  title: string
  value: string
  href?: string
  color: 'blue' | 'sky'
}) => {
  // Styles based on color prop
  const colorStyles = {
    blue: 'bg-swan-blue/10 text-swan-blue group-hover:bg-swan-blue/20 group-hover:scale-110',
    sky: 'bg-swan-sky/20 text-swan-blue group-hover:bg-swan-sky/30 group-hover:scale-110',
  }

  const Wrapper = href ? 'a' : 'div'

  return (
    <Wrapper
      href={href}
      className={`flex items-start gap-4 p-3 rounded-xl transition-all duration-300 ${href ? 'hover:bg-white/50 group cursor-pointer' : ''
        }`}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 ${colorStyles[color]}`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="pt-1">
        <h4 className="text-base font-bold text-black mb-0.5">{title}</h4>
        <p
          className={`text-sm font-medium text-black transition-colors`}
        >
          {value}
        </p>
      </div>
    </Wrapper>
  )
}

// --- Main Component ---
export function ContactSection() {
  // Background Pattern
  const BackgroundPattern = () => (
    <div
      className="absolute inset-0 pointer-events-none z-0 opacity-10"
      style={{
        backgroundImage: `url('/logos/patterns-dark-blue.png')`,
        backgroundSize: '50%',
        backgroundPosition: 'top left',
        backgroundRepeat: 'repeat',
      }}
    />
  )

  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-8 lg:py-16 bg-swan-grey relative overflow-hidden font-sans">
      {/* Background Image Pattern */}
      <BackgroundPattern />

      {/* Decorative Background Blobs for Glass Effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-swan-sky/20 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-swan-blue/10 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Typography & Contact Info */}
          <div className="lg:pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-swan-blue/10 text-swan-blue text-xs font-bold tracking-wide uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-swan-blue animate-pulse" />
              Get in Touch
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-swan-midnight tracking-tight mb-4 leading-tight">
              Let&apos;s start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-swan-blue to-swan-sky">
                conversation.
              </span>
            </h2>

            <p className="text-base md:text-lg text-black mb-8 leading-relaxed max-w-lg">
              Whether you&apos;re looking to volunteer, seeking support, or interested in partnering
              with us, our team is ready to connect.
            </p>

            <div className="space-y-4">
              <ContactCard
                icon={Mail}
                title="Email Us"
                value="silverswanintegrated@gmail.com"
                href="mailto:silverswanintegrated@gmail.com"
                color="blue"
              />
              <ContactCard
                icon={MapPin}
                title="Visit Us"
                value="Montreal, Quebec, Canada"
                color="sky"
              />
            </div>
          </div>

          {/* Right Column: Modern Glass Form */}
          <div className="relative group">
            {/* Subtle animated border gradient via shadow or ring could go here */}
            <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-white/50 ring-1 ring-swan-blue/10 relative z-10 transition-shadow duration-500 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)]">
              <form
                className="space-y-4"
                action="mailto:silverswanintegrated@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="Full Name" id="name" placeholder="Jane Doe" />
                  <InputField
                    label="Email Address"
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-semibold text-swan-midnight/70 ml-1">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white/80 rounded-xl border border-swan-blue/20 focus:border-swan-blue focus:ring-4 focus:ring-swan-blue/10 outline-none transition-all text-swan-midnight appearance-none cursor-pointer hover:border-swan-blue/40 text-sm"
                    >
                      <option>General Inquiry</option>
                      <option>Volunteering Opportunities</option>
                      <option>Program Support</option>
                      <option>Partnership Proposal</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-swan-midnight/40">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-swan-midnight/70 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-white/80 rounded-xl border border-swan-blue/20 focus:border-swan-blue focus:ring-4 focus:ring-swan-blue/10 outline-none transition-all placeholder:text-swan-midnight/30 text-swan-midnight resize-none hover:border-swan-blue/40 text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-swan-blue hover:bg-swan-blue/90 text-white rounded-xl font-bold text-base shadow-xl shadow-swan-blue/20 hover:shadow-2xl hover:shadow-swan-blue/30 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>

                <p className="text-center text-[10px] text-swan-midnight/40 font-medium">
                  We typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
