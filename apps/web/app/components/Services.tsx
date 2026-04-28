"use client";

import { useState } from "react";

const categories = [
  {
    id: "growth",
    label: "Growth & Marketing",
    tag: "Acquire",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    accentColor: "emerald",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    micro: "Turn attention into revenue with data-driven growth systems that compound over time.",
    services: [
      { name: "Social Media Management", desc: "Content strategy, scheduling & community growth across all channels." },
      { name: "Digital Marketing", desc: "Full-funnel campaigns that drive qualified traffic and conversions." },
      { name: "SEO / SGO", desc: "Organic visibility for search engines and AI-powered discovery." },
      { name: "Paid Growth Campaigns", desc: "Performance media across Meta, Google, TikTok and beyond." },
      { name: "Video Marketing", desc: "Short-form and long-form video production built for conversion." },
    ],
  },
  {
    id: "creative",
    label: "Creative & Branding",
    tag: "Create",
    tagColor: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    accentColor: "pink",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    micro: "Build a brand identity that commands premium positioning and makes you impossible to ignore.",
    services: [
      { name: "Graphic Design", desc: "Visual assets that communicate your brand's authority and taste." },
      { name: "Brand Identity", desc: "Strategy, logo systems, tone of voice, and brand guidelines." },
      { name: "Content Creation", desc: "Scroll-stopping creative built for platform-native distribution." },
      { name: "AI Visual Content", desc: "Generative imagery and video production at scale, on-brand." },
    ],
  },
  {
    id: "technology",
    label: "Technology & Development",
    tag: "Build",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    accentColor: "blue",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    micro: "Ship high-performance digital products that scale — from launch to enterprise.",
    services: [
      { name: "Web Development", desc: "Next.js, React and NestJS platforms built for speed and conversion." },
      { name: "Mobile Apps", desc: "Cross-platform iOS and Android apps with native-quality UX." },
      { name: "SaaS Platforms", desc: "Full-stack SaaS products with auth, billing, and analytics built in." },
      { name: "E-Commerce Solutions", desc: "Headless commerce architectures optimised for revenue and scale." },
    ],
  },
  {
    id: "automation",
    label: "AI Automation & Cloud",
    tag: "Automate",
    tagColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
    accentColor: "violet",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
    micro: "Replace manual work with intelligent systems that operate, scale, and improve autonomously.",
    services: [
      { name: "AI Agents", desc: "Custom AI systems that handle complex workflows without human input." },
      { name: "n8n Automations", desc: "Visual workflow automation connecting your entire tool ecosystem." },
      { name: "CRM Workflows", desc: "Automated lead nurturing, follow-up, and pipeline management." },
      { name: "Process Automation", desc: "End-to-end business process automation — ops, HR, finance and beyond." },
      { name: "Cloud & CRM Systems", desc: "Infrastructure setup, cloud architecture, and CRM configuration." },
    ],
  },
] as const;

const accentMap: Record<string, { border: string; glow: string; dot: string; tag: string }> = {
  emerald: {
    border: "hover:border-emerald-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]",
    dot: "bg-emerald-400",
    tag: "text-emerald-400",
  },
  pink: {
    border: "hover:border-pink-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]",
    dot: "bg-pink-400",
    tag: "text-pink-400",
  },
  blue: {
    border: "hover:border-blue-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.1)]",
    dot: "bg-blue-400",
    tag: "text-blue-400",
  },
  violet: {
    border: "hover:border-violet-500/40",
    glow: "group-hover:shadow-[0_0_30px_rgba(167,139,250,0.1)]",
    dot: "bg-violet-400",
    tag: "text-violet-400",
  },
};

export default function Services() {
  const [active, setActive] = useState("growth");
  const current = categories.find((c) => c.id === active) ?? categories[0];
  const accent = (accentMap[current.accentColor] ?? accentMap.emerald)!;
  const serviceCount = Number(current.services.length);

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background-soft/60 via-background to-background" />
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[400px] bg-accent/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label mb-5">Services</div>
          <h2 className="section-heading mb-5">
            Built to{" "}
            <span className="gradient-text">Scale Brands</span>
          </h2>
          <p className="section-subtext">
            Growth, Creative, Technology and Automation solutions engineered for ambitious companies.
          </p>
        </div>

        {/* Methodology pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const a = (accentMap[cat.accentColor] ?? accentMap.emerald)!;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? `${cat.tagColor} border-current bg-current/10 scale-105 shadow-lg`
                    : "text-text-muted border-white/8 hover:border-white/16 hover:text-white"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? (a?.dot ?? "bg-white/30") : "bg-white/30"}`} />
                <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? (a?.tag ?? "text-text-subtle") : "text-text-subtle"}`}>
                  {cat.tag}
                </span>
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: Category overview */}
          <div className="lg:col-span-2 glass rounded-3xl border border-white/8 p-8 flex flex-col justify-between">
            <div>
              <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-6 ${current.tagColor}`}>
                {current.icon}
                {current.tag}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {current.label}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                {current.micro}
              </p>
            </div>

            {/* Decorative circle count */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {current.services.map((_, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full border-2 border-background-soft flex items-center justify-center text-xs font-bold text-white ${
                      i === 0 ? `${accent.dot}` : "bg-white/10"
                    }`}
                  >
                    {i === 0 ? current.services.length : ""}
                  </div>
                ))}
              </div>
              <span className="text-xs text-text-muted">
                {serviceCount} service{serviceCount !== 1 ? "s" : ""} in this category
              </span>
            </div>
          </div>

          {/* Right: Service list */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 content-start">
            {current.services.map((service, i) => (
              <div
                key={service.name}
                className={`group glass-subtle rounded-2xl border border-white/6 p-5 transition-all duration-300 ${accent.border} ${accent.glow} hover:-translate-y-0.5 ${
                  i === current.services.length - 1 && current.services.length % 2 !== 0
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent.dot}`} />
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">{service.name}</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom methodology row */}
        <div className="mt-12 glass-subtle rounded-2xl border border-white/6 p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {["Acquire", "Create", "Build", "Automate"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">{step}</span>
                {i < 3 && <span className="text-white/20">→</span>}
              </div>
            ))}
          </div>
          <a href="#ready" className="btn-accent text-sm px-5 py-2">
            Explore All Services
          </a>
          
        </div>
      </div>
    </section>
  );
}
