"use client";

const footerLinks = {
  Services: [
    { label: "AI Automation", href: "#services" },
    { label: "Growth Systems", href: "#services" },
    { label: "Creative & Branding", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Strategy Consulting", href: "#contact" },
  ],
  Company: [
    { label: "Featured Solutions", href: "#work" },
    { label: "Our Process", href: "#process" },
    { label: "Client Testimonials", href: "#testimonials" },
    { label: "Industries We Serve", href: "#industries" },
    { label: "FAQ", href: "#faq" },
  ],
  Contact: [
    { label: "Book a Strategy Call", href: "#ready" },
    { label: "Send a Message", href: "#contact" },
    { label: "hello@hook.agency", href: "mailto:hello@hook.agency" },
  ],
};

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    hoverColor: "hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)]",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    hoverColor: "hover:border-white/30 hover:text-white hover:bg-white/8 hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.857l4.256 5.632 4.881-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    hoverColor: "hover:border-pink-500/40 hover:text-pink-400 hover:bg-pink-500/10 hover:shadow-[0_0_12px_rgba(236,72,153,0.2)]",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    hoverColor: "hover:border-blue-600/40 hover:text-blue-500 hover:bg-blue-600/10 hover:shadow-[0_0_12px_rgba(37,99,235,0.2)]",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    hoverColor: "hover:border-white/30 hover:text-white hover:bg-white/6 hover:shadow-[0_0_14px_rgba(255,255,255,0.1)]",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    hoverColor: "hover:border-red-500/40 hover:text-red-400 hover:bg-red-500/10 hover:shadow-[0_0_12px_rgba(239,68,68,0.2)]",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29.12 29.12 0 001 12a29.12 29.12 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29.12 29.12 0 0023 12a29.12 29.12 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[900px] h-[350px] bg-accent/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-[400px] h-[300px] bg-indigo-600/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Top gradient divider */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-sm" />
      </div>

      <div
        className="relative"
        style={{
          background: "rgba(8,13,26,0.75)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Mini CTA strip */}
        <div
          className="border-b border-white/5"
          style={{ background: "rgba(124,58,237,0.05)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}
              >
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white leading-none">Ready to scale your business?</p>
                <p className="text-[11px] text-text-muted mt-0.5 leading-none">Book a free 30-min strategy call with our team.</p>
              </div>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 flex items-center gap-2 text-xs font-semibold text-white bg-accent/15 border border-accent/30 hover:bg-accent/25 hover:border-accent/50 rounded-xl px-4 py-2.5 transition-all duration-200 group"
            >
              Book a Strategy Call
              <svg className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">

            {/* Brand column — spans 4 cols */}
            <div className="col-span-2 md:col-span-4">
              {/* Logo */}
              <div className="flex items-baseline gap-0.5 mb-5">
                <span className="text-4xl font-bold tracking-tight text-white">HOOK</span>
                <span className="text-4xl font-bold text-accent">.</span>
                <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-subtle self-center">AI Agency</span>
              </div>

              <p className="text-sm text-text-muted leading-relaxed max-w-xs mb-6">
                AI-powered growth systems, automation infrastructure, and creative execution — engineered for ambitious companies that want to scale without limits.
              </p>

              {/* Social row */}
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className={`w-9 h-9 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center text-text-muted transition-all duration-200 ${s.hoverColor}`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Availability badge */}
              <div className="mt-6 inline-flex items-center gap-2 bg-emerald-500/8 border border-emerald-500/18 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-medium text-emerald-400">Accepting new clients</span>
              </div>
            </div>

            {/* Links columns — spans 8 cols across 3 groups */}
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 md:col-start-auto">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-subtle mb-5 flex items-center gap-2">
                  <span className="w-3 h-px bg-accent/50 block" />
                  {group}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-1.5 text-sm text-text-muted hover:text-white transition-colors duration-150"
                      >
                        <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-200 overflow-hidden" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Stats mini column */}
            <div className="col-span-2 md:col-span-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-text-subtle mb-5 flex items-center gap-2">
                <span className="w-3 h-px bg-accent/50 block" />
                Impact
              </h4>
              <div className="space-y-3.5">
                {[
                  { v: "$0.5M+", l: "Revenue Generated" },
                  { v: "2K+", l: "Leads Driven" },
                  { v: "80+",  l: "Automations Built" },
                  { v: "40+",   l: "Solutions Shipped" },
                ].map((stat) => (
                  <div key={stat.l} className="flex flex-col">
                    <span className="text-base font-bold text-white leading-none">{stat.v}</span>
                    <span className="text-[10px] text-text-subtle mt-0.5">{stat.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative">
          {/* Divider with gradient */}
          <div className="h-px mx-6 bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          <div
            className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ background: "rgba(0,0,0,0.15)" }}
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] text-text-subtle">
                © {new Date().getFullYear()} Hook Agency. All rights reserved.
              </span>
              <span className="hidden sm:block w-px h-3 bg-white/10" />
              <span className="hidden sm:block text-[10px] text-text-subtle/60 italic">
                Built with AI + Strategy by HOOK
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[11px] text-text-subtle hover:text-white transition-colors duration-150"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
