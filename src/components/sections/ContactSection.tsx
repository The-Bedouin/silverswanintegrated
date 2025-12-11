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
    <label htmlFor={id} className="text-sm font-semibold text-slate-700 ml-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-white/80 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900 hover:border-green-300/50 text-sm"
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
  color: 'green' | 'blue'
}) => {
  // Styles based on color prop
  const colorStyles = {
    green: 'bg-green-50 text-green-600 group-hover:bg-green-100 group-hover:scale-110',
    blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-100 group-hover:scale-110',
  }

  const Wrapper = href ? 'a' : 'div'

  return (
    <Wrapper
      href={href}
      className={`flex items-start gap-4 p-3 rounded-xl transition-all duration-300 ${
        href ? 'hover:bg-gray-50 group cursor-pointer' : ''
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
          className={`text-sm font-medium ${
            href ? 'text-black/90 group-hover:text-black' : 'text-black/90'
          } transition-colors`}
        >
          {value}
        </p>
      </div>
    </Wrapper>
  )
}

// --- Main Component ---
export function ContactSection() {
  // Background Grid Pattern (same as SupportSection)
  const GridPattern = () => (
    <div
      className="absolute inset-0 pointer-events-none z-0 opacity-10"
      style={{
        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />
  )

  return (
    <section className="py-12 bg-[#4ADE80] relative overflow-hidden font-sans">
      {/* Background Grid */}
      <GridPattern />
      
      {/* Decorative Background Blobs for Glass Effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-green-200/40 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column: Typography & Contact Info */}
          <div className="lg:pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/50 text-green-700 text-xs font-bold tracking-wide uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Get in Touch
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
              Let&apos;s start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
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
                color="green"
              />
              <ContactCard
                icon={MapPin}
                title="Visit Us"
                value="Montreal, Quebec, Canada"
                color="blue"
              />
            </div>
          </div>

          {/* Right Column: Modern Glass Form */}
          <div className="relative group">
            {/* Subtle animated border gradient via shadow or ring could go here */}
            <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-white/50 ring-1 ring-gray-100 relative z-10 transition-shadow duration-500 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)]">
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
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700 ml-1">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-white/80 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all text-slate-900 appearance-none cursor-pointer hover:border-green-300/50 text-sm"
                    >
                      <option>General Inquiry</option>
                      <option>Volunteering Opportunities</option>
                      <option>Program Support</option>
                      <option>Partnership Proposal</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-white/80 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all placeholder:text-slate-400 text-slate-900 resize-none hover:border-green-300/50 text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-slate-900 hover:bg-black text-white rounded-xl font-bold text-base shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/20 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>

                <p className="text-center text-[10px] text-slate-400 font-medium">
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

