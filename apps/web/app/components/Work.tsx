"use client";

import { useState } from "react";
import SolutionsModal, { Solution } from "./SolutionsModal";

const SERVICE_BADGE: Record<string, string> = {
  Growth:   "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
  Creative: "text-pink-400   bg-pink-400/10   border-pink-400/25",
  Build:    "text-blue-400   bg-blue-400/10   border-blue-400/25",
  Automate: "text-violet-400 bg-violet-400/10 border-violet-400/25",
};

const allSolutions: Solution[] = [
  {
    id: "s1",
    title: "AI Lead Qualification Engine",
    desc: "Deployed an AI system that scored, routed, and nurtured inbound leads automatically — tripling qualified pipeline for a real estate group.",
    metric: "+3x",
    metricLabel: "Qualified leads",
    service: "Automate",
    industry: "Real Estate",
    stack: ["OpenAI", "n8n", "HubSpot", "Zapier"],
    visual: { from: "from-violet-600/30", to: "to-purple-900/20", icon: "🤖" },
  },
  {
    id: "s2",
    title: "Omnichannel Content Automation",
    desc: "Built a content system that auto-generates, schedules, and adapts brand content across 6 platforms — reducing production time by 80%.",
    metric: "+5x",
    metricLabel: "Content output",
    service: "Creative",
    industry: "Beauty & Fashion",
    stack: ["OpenAI", "Buffer", "Canva API", "Airtable"],
    visual: { from: "from-pink-600/30", to: "to-rose-900/20", icon: "✨" },
  },
  {
    id: "s3",
    title: "Hospitality Booking Growth Engine",
    desc: "Designed a full funnel combining local SEO, paid campaigns, and reputation automation — resulting in an 85% uplift in direct bookings.",
    metric: "+85%",
    metricLabel: "Direct bookings",
    service: "Growth",
    industry: "Hospitality",
    stack: ["Meta Ads", "Google Ads", "Semrush", "Mailchimp"],
    visual: { from: "from-emerald-600/30", to: "to-teal-900/20", icon: "🍽️" },
  },
  {
    id: "s4",
    title: "SaaS Growth Infrastructure",
    desc: "Architected a full B2B go-to-market system — demand gen, lead scoring, CRM sync, and product-led growth loops that accelerated pipeline 10x.",
    metric: "10x",
    metricLabel: "Pipeline velocity",
    service: "Build",
    industry: "IT & SaaS",
    stack: ["Next.js", "NestJS", "HubSpot", "Segment"],
    visual: { from: "from-blue-600/30", to: "to-indigo-900/20", icon: "⚡" },
  },
  {
    id: "s5",
    title: "CRM Automation Architecture",
    desc: "Built a fully automated CRM workflow system for a travel group — from booking enquiry to post-trip retention, reducing manual ops by 65%.",
    metric: "+60%",
    metricLabel: "Client retention",
    service: "Automate",
    industry: "Travel",
    stack: ["Salesforce", "n8n", "Twilio", "Airtable"],
    visual: { from: "from-teal-600/30", to: "to-cyan-900/20", icon: "✈️" },
  },
  {
    id: "s6",
    title: "AI Social Content Engine",
    desc: "Launched an AI-powered creative pipeline producing 50+ branded social assets per week, achieving 5x engagement lift across all channels.",
    metric: "5x",
    metricLabel: "Engagement lift",
    service: "Creative",
    industry: "Beauty & Fashion",
    stack: ["OpenAI", "Midjourney API", "Buffer", "Notion"],
    visual: { from: "from-fuchsia-600/30", to: "to-pink-900/20", icon: "🎨" },
  },
  {
    id: "s7",
    title: "E-Commerce Revenue System",
    desc: "Rebuilt a DTC brand's full funnel — from ad creative to checkout flow — compounding a 240% revenue increase over two quarters.",
    metric: "+240%",
    metricLabel: "Revenue growth",
    service: "Growth",
    industry: "Beauty & Fashion",
    stack: ["Shopify", "Klaviyo", "Meta Ads", "Google Ads"],
    visual: { from: "from-amber-600/30", to: "to-orange-900/20", icon: "🛍️" },
  },
  {
    id: "s8",
    title: "Property Marketing Platform",
    desc: "Built a Next.js platform with AI property descriptions, automated listing syndication, and virtual tour integration for a real estate group.",
    metric: "2.4x",
    metricLabel: "Booking conversions",
    service: "Build",
    industry: "Real Estate",
    stack: ["Next.js", "OpenAI", "Prisma", "AWS"],
    visual: { from: "from-orange-600/30", to: "to-red-900/20", icon: "🏢" },
  },
  {
    id: "s9",
    title: "Restaurant Reputation System",
    desc: "Deployed an automated review management and response system driving consistent 5-star ratings and a 3x increase in Google visibility.",
    metric: "5★",
    metricLabel: "Avg rating maintained",
    service: "Growth",
    industry: "Hospitality",
    stack: ["Google Business API", "n8n", "OpenAI", "Slack"],
    visual: { from: "from-red-600/30", to: "to-pink-900/20", icon: "⭐" },
  },
  {
    id: "s10",
    title: "Sports Community & Membership Funnel",
    desc: "Designed a full membership acquisition funnel combining content, community, and automation — growing paying memberships by 60% in 3 months.",
    metric: "+60%",
    metricLabel: "Memberships",
    service: "Growth",
    industry: "Sports & Education",
    stack: ["GoHighLevel", "Facebook Groups", "Kajabi", "Zapier"],
    visual: { from: "from-cyan-600/30", to: "to-blue-900/20", icon: "🏆" },
  },
  {
    id: "s11",
    title: "B2B Demand Generation System",
    desc: "Built a full outbound and inbound demand gen engine for a SaaS company — combining LinkedIn outreach, SEO, and paid acquisition into one unified pipeline.",
    metric: "10K+",
    metricLabel: "Qualified leads/mo",
    service: "Growth",
    industry: "IT & SaaS",
    stack: ["LinkedIn Ads", "Google Ads", "Apollo", "HubSpot"],
    visual: { from: "from-indigo-600/30", to: "to-violet-900/20", icon: "📈" },
  },
  {
    id: "s12",
    title: "Real-Time Payment Infrastructure",
    desc: "Engineered a secure payment backend with real-time transaction processing, fraud detection, and multi-region failover guaranteeing 99.9% uptime.",
    metric: "99.9%",
    metricLabel: "System uptime",
    service: "Build",
    industry: "IT & SaaS",
    stack: ["NestJS", "PostgreSQL", "Redis", "Stripe"],
    visual: { from: "from-yellow-600/30", to: "to-amber-900/20", icon: "💳" },
  },
];

const featured = allSolutions.slice(0, 6);

const STATS_RIBBON = [
  { value: "$$0.5M+", label: "Revenue Generated" },
  { value: "2K+", label: "Leads Driven" },
  { value: "80+", label: "Automations Deployed" },
  { value: "40+", label: "Solutions Delivered" },
];

function FeaturedCard({ s, index }: { s: Solution; index: number }) {
  const [hovered, setHovered] = useState(false);
  const isLarge = index === 0 || index === 3;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-3xl border border-white/8 overflow-hidden transition-all duration-300 hover:border-white/18 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${
        isLarge ? "md:row-span-1" : ""
      }`}
      style={{ background: "rgba(13,20,36,0.8)", backdropFilter: "blur(12px)" }}
    >
      {/* Visual header */}
      <div
        className={`relative h-44 w-full flex items-center justify-center bg-gradient-to-br ${s.visual.from} ${s.visual.to} overflow-hidden`}
      >
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <span
          className={`text-6xl transition-all duration-500 ${hovered ? "scale-110" : "scale-100"}`}
        >
          {s.visual.icon}
        </span>

        {/* Metric overlay */}
        <div className="absolute bottom-4 right-4 text-right">
          <div className="text-3xl font-bold text-white drop-shadow-lg">{s.metric}</div>
          <div className="text-xs text-white/60">{s.metricLabel}</div>
        </div>

        {/* Service badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${SERVICE_BADGE[s.service]}`}
          >
            {s.service}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-text-subtle uppercase tracking-widest">
            {s.industry}
          </span>
        </div>

        <h3 className="text-base font-bold text-white mb-2 leading-snug">
          {s.title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-5 line-clamp-3">
          {s.desc}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {s.stack.map((t) => (
            <span
              key={t}
              className="text-xs text-text-subtle bg-white/4 border border-white/6 rounded-full px-2.5 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Hover reveal CTA */}
        <div
          className={`mt-4 flex items-center gap-2 text-xs font-semibold transition-all duration-300 ${
            hovered ? "text-accent translate-x-1 opacity-100" : "text-transparent opacity-0 -translate-x-1"
          }`}
        >
          View solution details
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="work" className="py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background-soft via-background to-background" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-label mb-5">Featured Growth Systems</div>
            <h2 className="section-heading mb-5">
              Solutions &{" "}
              <span className="gradient-text">Impact</span>
            </h2>
            <p className="section-subtext">
              Real examples of growth systems, automation infrastructure, creative execution, and digital transformation delivered by HOOK.
            </p>
          </div>

          {/* Stats ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            {STATS_RIBBON.map((stat) => (
              <div
                key={stat.label}
                className="glass-subtle rounded-2xl border border-white/6 px-5 py-4 text-center"
              >
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* 6 featured cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((s, i) => (
              <FeaturedCard key={s.id} s={s} index={i} />
            ))}
          </div>

          {/* Load more */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-text-subtle text-sm">
              Showing 6 of {allSolutions.length} solutions
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-3 glass-subtle border border-white/10 hover:border-accent/40 px-8 py-4 rounded-2xl text-sm font-semibold text-white hover:text-accent transition-all duration-300 hover:shadow-glow-sm"
            >
              <span>View All Solutions</span>
              <span className="w-7 h-7 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <span className="text-xs text-text-muted font-normal">
                {allSolutions.length} total
              </span>
            </button>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl border border-white/8 overflow-hidden relative"
            style={{ background: "rgba(13,20,36,0.7)", backdropFilter: "blur(12px)" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-transparent to-indigo-500/8" />
            <div className="relative p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Let&apos;s build your{" "}
                <span className="gradient-text">growth system</span>
              </h3>
              <p className="text-text-muted text-sm mb-6 max-w-lg mx-auto">
                Ready to join the list? Book a free strategy call and get a bespoke growth plan for your business.
              </p>
              <a href="#ready" className="btn-accent px-8 py-3.5 inline-flex">
                Start Your Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SolutionsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        solutions={allSolutions}
      />
    </>
  );
}
