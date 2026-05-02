"use client";

import { useState } from "react";

const industries = [
  {
    id: "real-estate",
    icon: "🏢",
    label: "Real Estate",
    headline: "Fill your pipeline with qualified buyers and sellers — on autopilot.",
    solutions: [
      "AI lead generation systems",
      "Property marketing campaigns",
      "Automated follow-up & nurturing",
      "Virtual tour & content production",
    ],
    stat: "+3x",
    statLabel: "Lead volume",
    gradient: "from-amber-500/15 to-orange-500/5",
    border: "hover:border-amber-500/30",
    accentText: "text-amber-400",
    accentBg: "bg-amber-400",
    glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]",
  },
  {
    id: "hospitality",
    icon: "🍽️",
    label: "Hospitality & Restaurants",
    headline: "Drive bookings, build loyalty, and own your reputation online.",
    solutions: [
      "Booking growth campaigns",
      "Social content & community",
      "Reputation management",
      "Local SEO & visibility",
    ],
    stat: "5★",
    statLabel: "Avg. rating boost",
    gradient: "from-red-500/15 to-pink-500/5",
    border: "hover:border-red-500/30",
    accentText: "text-red-400",
    accentBg: "bg-red-400",
    glow: "hover:shadow-[0_0_40px_rgba(239,68,68,0.1)]",
  },
  {
    id: "beauty",
    icon: "✨",
    label: "Beauty & Fashion",
    headline: "Make your brand the one people talk about, share, and buy from.",
    solutions: [
      "Brand campaign strategy",
      "AI visual content at scale",
      "E-commerce growth systems",
      "Influencer & creator programs",
    ],
    stat: "+180%",
    statLabel: "Online revenue",
    gradient: "from-pink-500/15 to-rose-500/5",
    border: "hover:border-pink-500/30",
    accentText: "text-pink-400",
    accentBg: "bg-pink-400",
    glow: "hover:shadow-[0_0_40px_rgba(244,114,182,0.1)]",
  },
  {
    id: "sports",
    icon: "🏆",
    label: "Sports & Education",
    headline: "Build thriving communities and membership systems that retain.",
    solutions: [
      "Community growth funnels",
      "Membership & subscription systems",
      "Event & program marketing",
      "Engagement automation",
    ],
    stat: "+60%",
    statLabel: "Retention rate",
    gradient: "from-blue-500/15 to-cyan-500/5",
    border: "hover:border-blue-500/30",
    accentText: "text-blue-400",
    accentBg: "bg-blue-400",
    glow: "hover:shadow-[0_0_40px_rgba(96,165,250,0.1)]",
  },
  {
    id: "travel",
    icon: "✈️",
    label: "Travel Agencies",
    headline: "Turn destination dreams into confirmed bookings at scale.",
    solutions: [
      "Destination marketing campaigns",
      "Booking acquisition funnels",
      "Seasonal growth strategies",
      "Social content & storytelling",
    ],
    stat: "+2.4x",
    statLabel: "Booking conversions",
    gradient: "from-teal-500/15 to-emerald-500/5",
    border: "hover:border-teal-500/30",
    accentText: "text-teal-400",
    accentBg: "bg-teal-400",
    glow: "hover:shadow-[0_0_40px_rgba(45,212,191,0.1)]",
  },
  {
    id: "saas",
    icon: "⚡",
    label: "IT & SaaS",
    headline: "B2B growth infrastructure built to generate, qualify, and close.",
    solutions: [
      "B2B demand generation",
      "Product-led growth systems",
      "Lead scoring & enrichment",
      "Sales automation pipelines",
    ],
    stat: "10x",
    statLabel: "Pipeline velocity",
    gradient: "from-violet-500/15 to-purple-500/5",
    border: "hover:border-violet-500/30",
    accentText: "text-violet-400",
    accentBg: "bg-violet-400",
    glow: "hover:shadow-[0_0_40px_rgba(167,139,250,0.1)]",
  },
];

export default function Industries() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="industries" className="py-20 relative overflow-hidden bg-background-soft">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-soft" />
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mb-5">Solutions by Industry</div>
          <h2 className="section-heading mb-5">
            Built for Your{" "}
            <span className="gradient-text">Sector</span>
          </h2>
          <p className="section-subtext">
            Tailored growth systems built for sector-specific challenges. We know your market — and how to win in it.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => {
            const isHovered = hovered === ind.id;
            return (
              <div
                key={ind.id}
                onMouseEnter={() => setHovered(ind.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative rounded-3xl border border-yellow-300/30 p-7 cursor-default transition-all duration-300 ${ind.border} ${ind.glow} hover:-translate-y-1 overflow-hidden`}
                style={{ background: "rgba(13,20,36,0.7)", backdropFilter: "blur(12px)" }}
              >
                {/* Gradient bg layer */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ind.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Top row */}
                <div className="relative flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{ind.icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-subtle mb-0.5">
                        Industry
                      </p>
                      <h3 className="text-base font-bold text-white">{ind.label}</h3>
                    </div>
                  </div>
                  {/* Stat badge */}
                  <div className="text-right flex-shrink-0">
                    <div className={`text-lg font-bold ${ind.accentText}`}>{ind.stat}</div>
                    <div className="text-xs text-text-muted">{ind.statLabel}</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative w-full h-px bg-white/6 mb-5" />

                {/* Headline */}
                <p className="relative text-sm text-text-muted leading-relaxed mb-5">
                  {ind.headline}
                </p>

                {/* Solutions list */}
                <ul className="relative space-y-2.5">
                  {ind.solutions.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-xs text-text-muted">
                      <span className={`mt-1 w-1 h-1 rounded-full flex-shrink-0 ${ind.accentBg}`} />
                      {s}
                    </li>
                  ))}
                </ul>

                {/* Hover CTA */}
                <div
                  className={`relative mt-6 flex items-center gap-2 text-xs font-semibold transition-all duration-300 ${
                    isHovered ? `${ind.accentText} translate-x-1` : "text-text-subtle translate-x-0"
                  }`}
                >
                  See how we can help
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 relative rounded-3xl border border-yellow-300/30 p-10 text-center overflow-hidden"
          style={{ background: "rgba(13,20,36,0.7)", backdropFilter: "blur(12px)" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-transparent to-indigo-500/8 pointer-events-none" />
          <div className="relative">
            <p className="text-text-muted text-sm uppercase tracking-widest font-semibold mb-3">
              Ready to grow?
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Let&apos;s build your{" "}
              <span className="gradient-text">growth system</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#ready" className="btn-accent px-7 py-3">
                Get a Free Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#work" className="btn-primary px-7 py-3">
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
