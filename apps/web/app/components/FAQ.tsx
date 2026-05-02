"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What types of businesses do you work with?",
    a: "We work with startups, scale-ups, and growth-stage companies — primarily in SaaS, e-commerce, and professional services. If you need AI systems, automation, or high-performance web products, we're likely a great fit.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects take 2–8 weeks depending on scope. MVPs and automation projects tend to move fastest. We provide a clear timeline in the discovery phase before any commitment.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We offer retainer-based support for monitoring, optimisation, and iteration. Most clients stay with us long-term as their systems evolve.",
  },
  {
    q: "What technologies do you use?",
    a: "Our core stack is Next.js, NestJS, PostgreSQL, and modern AI APIs (OpenAI, Anthropic). We also integrate with tools like Salesforce, HubSpot, Stripe, Zapier, and more depending on your stack.",
  },
  {
    q: "How do you price your work?",
    a: "We offer project-based pricing and monthly retainers. Pricing depends on scope, complexity, and timeline. Book a strategy call and we'll give you a transparent estimate — no hidden fees.",
  },
  {
    q: "Can you integrate with our existing tools and systems?",
    a: "Absolutely. Integration is one of our core strengths. We connect AI and automation to your CRM, analytics tools, databases, and third-party APIs — whatever your stack looks like.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background-soft" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-5">FAQ</div>
          <h2 className="section-heading mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-text-muted">
            Everything you need to know before we start working together.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-accent/30 bg-accent/5"
                    : "border-yellow-300/30 glass-subtle hover:border-white/12"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                >
                  <span
                    className={`font-semibold text-sm md:text-base transition-colors ${
                      isOpen ? "text-white" : "text-text group-hover:text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "border-accent bg-accent text-white rotate-180"
                        : "border-white/20 text-text-muted"
                    }`}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-64" : "max-h-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-text-muted text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
