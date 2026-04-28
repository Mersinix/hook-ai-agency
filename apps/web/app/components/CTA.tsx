export default function CTA() {
  return (
    <section id="ready" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-background to-indigo-500/10" />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="section-label mb-6 mx-auto w-fit">Ready to Scale?</div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          Start Your{" "}
          <span className="gradient-text">Growth System</span> Today
        </h2>

        <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Book a free 30-minute strategy call. No commitment — just a clear plan
          for what your business needs to scale with AI and automation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-accent px-8 py-4 text-base">
            Book Free Strategy Call
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a href="#work" className="btn-primary px-8 py-4 text-base">
            See Our Work First
          </a>
        </div>

        <p className="mt-6 text-text-subtle text-sm">
          Free consultation • No obligation • Reply within 24h
        </p>
      </div>
      {/* Scroll hint */}
        <div className="mt-10 flex flex-col items-center gap-2 text-text-subtle animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
    </section>
  );
}
