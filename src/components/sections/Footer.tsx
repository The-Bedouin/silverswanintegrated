const navigation = {
  main: [
    { name: 'Programs', href: '#programs' },
    { name: 'Events', href: '#events' },
    { name: 'Support', href: '#support' },
    { name: 'Volunteering', href: '#volunteering' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-800/60">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand + Mission */}
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center text-xs font-bold text-slate-950">
                SS
              </div>
              <span className="text-base font-semibold tracking-tight text-white">
                Silverswan Integrated Hub
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Advancing digital inclusion for seniors and diverse communities across Canada through
              technology training, business support, and community connection.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {navigation.main.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-slate-100 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 max-w-xs text-right">
              Built with care to support intergenerational learning, small businesses, and newcomers
              navigating a digital-first world.
            </p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-8 flex flex-col-reverse items-center justify-between gap-3 border-t border-slate-800/60 pt-4 text-[11px] text-slate-500 md:flex-row">
          <p>
            © {year} Silverswan Integrated Hub. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            <span>Building bridges through technology.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

