"use client";

import { useEffect, useRef, useState} from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
 // NEW: dropdown state
  const [open, setOpen] = useState<"service" | "industry" | null>(null);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const serviceOptions = [
    "Other",
    "Growth & Marketing",
    "Creative & Branding",
    "Technology & Development",
    "AI Automation & Cloud",
  ];

  const industryOptions = [
    "Other",
    "Real Estate",
    "Hospitality & Restaurants",
    "Beauty & Fashion",
    "Sports & Education",
    "Travel Agencies",
    "IT & SaaS",
  ];

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleMulti = (
    value: string,
    list: string[],
    setList: (v: string[]) => void
  ) => {
    if (list.includes(value)) {
      setList(list.filter((v) => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL ??
        (process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3001");

      const res = await fetch(`${apiUrl}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          service: selectedServices,
          industry: selectedIndustries,
          source: "landing_page",
        }),
      });

      if (!res.ok) throw new Error("Submission failed. Please try again.");

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      setSelectedServices([]);
      setSelectedIndustries([]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-soft to-background" />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-top py-1">
          {/* Left: Copy */}
          <div>
            <div className="section-label mb-6">Get in Touch</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Great Together</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Tell us about your project and goals. We&apos;ll get back to you
              within 24 hours with an honest assessment and a clear path
              forward.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                {
                  icon: "✓",
                  text: "Free 30-minute strategy call",
                },
                {
                  icon: "✓",
                  text: "No obligation quote & roadmap",
                },
                {
                  icon: "✓",
                  text: "Response within 24 hours",
                },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {b.icon}
                  </span>
                  <span className="text-text-muted text-sm">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass rounded-3xl p-8 border border-yellow-300/30">
            {success ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Message Received!
                </h3>
                <p className="text-text-muted text-sm">
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-text-subtle focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-text-subtle focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-text-subtle focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-text-subtle focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all"
                    />
                  </div>
                </div>

                  {/* SERVICE + INDUSTRY SAME LINE */}
                <div className="grid sm:grid-cols-2 gap-4" ref={wrapperRef}>

                  {/* SERVICE */}
                  <div className="relative">
                    <div
                      onClick={() =>
                        setOpen(open === "service" ? null : "service")
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-text-muted cursor-pointer"
                    >
                      {selectedServices.length === 0
                        ? "Service"
                        : `Services (${selectedServices.length})`}
                    </div>

                    {open === "service" && (
                      <div className="absolute z-10 mt-2 w-full bg-background-soft border-b border-white/5 rounded-xl p-2">
                        {serviceOptions.map((s) => (
                          <div
                            key={s}
                            onClick={() =>
                              toggleMulti(
                                s,
                                selectedServices,
                                setSelectedServices
                              )
                            }
                            className={`px-3 py-2 rounded-lg cursor-pointer text-sm ${
                              selectedServices.includes(s)
                                ? "bg-white/5 text-white"
                                : "text-text-muted"
                            }`}
                          >
                            {s}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* INDUSTRY */}
                  <div className="relative">
                    <div
                      onClick={() =>
                        setOpen(open === "industry" ? null : "industry")
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-text-muted cursor-pointer"
                    >
                      {selectedIndustries.length === 0
                        ? "Industry"
                        : `Industry (${selectedIndustries.length})`}
                    </div>

                    {open === "industry" && (
                      <div className="absolute z-10 mt-2 w-full bg-background-soft border-b border-white/5 rounded-xl p-2">
                        {industryOptions.map((i) => (
                          <div
                            key={i}
                            onClick={() =>
                              toggleMulti(
                                i,
                                selectedIndustries,
                                setSelectedIndustries
                              )
                            }
                            className={`px-3 py-2 rounded-lg cursor-pointer text-sm ${
                              selectedIndustries.includes(i)
                                ? "bg-white/5 text-white"
                                : "text-text-muted"
                            }`}
                          >
                            {i}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you trying to build or automate? What's the business goal?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-text-subtle focus:outline-none focus:border-accent/50 focus:bg-accent/5 transition-all resize-none"
                  />
                </div>

                {error && (
                  <p className="text-danger text-sm bg-danger/10 border border-danger/20 rounded-lg px-4 py-2.5">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-accent w-full py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
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
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-text-subtle">
                  By submitting you agree to our privacy policy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
