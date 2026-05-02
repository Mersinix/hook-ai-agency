const testimonials = [
  {
    quote:
      "Hook completely transformed our digital growth. We went from inconsistent leads to a predictable, automated acquisition system that runs 24/7.",
    author: "Sarah M.",
    role: "CEO, E-Commerce Startup",
    avatar: "SM",
    stars: 5,
  },
  {
    quote:
      "The AI automation they built replaced over 20 hours of manual work per week. ROI was clear within the first month.",
    author: "James K.",
    role: "Founder, SaaS Company",
    avatar: "JK",
    stars: 5,
  },
  {
    quote:
      "Best engineering partner we've worked with. They understood our goals deeply and shipped an exceptional product on time.",
    author: "Priya N.",
    role: "CPO, Tech Agency",
    avatar: "PN",
    stars: 5,
  },
  {
    quote:
      "Their process is methodical, transparent, and results-driven. They don't just deliver code — they deliver outcomes.",
    author: "Lucas R.",
    role: "Marketing Director",
    avatar: "LR",
    stars: 5,
  },
  {
    quote:
      "We scaled our lead generation 10x in 90 days. The system they built is a core part of our growth infrastructure now.",
    author: "Amina B.",
    role: "VP Growth, Scale-up",
    avatar: "AB",
    stars: 5,
  },
  {
    quote:
      "Hook built our entire product stack — API, front-end, integrations. Everything just works. Highly recommend.",
    author: "Tom W.",
    role: "CTO, B2B SaaS",
    avatar: "TW",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-soft to-background" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mb-5">Testimonials</div>
          <h2 className="section-heading mb-5">
            Trusted by{" "}
            <span className="gradient-text">Founders & Teams</span>
          </h2>
          <p className="section-subtext">
            Real words from real clients who scaled their businesses with our
            systems.
          </p>
        </div>

        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="break-inside-avoid glass rounded-2xl p-6 border border-yellow-300/30 hover:border-accent/20 transition-all duration-300 group hover:-translate-y-0.5"
            >
              <Stars count={t.stars} />

              <blockquote className="text-text text-sm leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-indigo-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {t.author}
                  </div>
                  <div className="text-xs text-text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 text-text-subtle text-sm">
          ⚡ Trusted by 20+ startups, agencies, and scale-ups worldwide
        </div>
      </div>
    </section>
  );
}
