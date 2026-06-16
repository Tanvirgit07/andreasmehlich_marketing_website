"use client";

import { useEffect, useMemo, useState } from "react";

const contents = [
  "Introduction",
  "Data Collection",
  "Data Usage",
  "User Rights",
  "Data Security",
  "Data Sharing",
  "Cookies",
  "Third-Party Services",
  "International Transfers",
  "Changes to Policy",
  "Contact",
];

const sections = [
  {
    title: "Introduction",
    body: "This Privacy Policy explains how KoraAI collects, uses and protects information when you use our website, applications and related services. This sample text is provided for layout purposes and should be reviewed by legal counsel before publication.",
  },
  {
    title: "Data Collection",
    body: "We may collect account details, contact information, usage data, business settings and communications submitted through our platform. We also collect technical information such as browser type, device data and interaction logs to maintain service reliability.",
  },
  {
    title: "Data Usage",
    body: "We use information to provide KoraAI services, process requests, improve product features, personalize customer experiences and communicate important updates. Data may also be used for security monitoring, analytics and support operations.",
  },
  {
    title: "User Rights",
    body: "Depending on your location, you may have the right to access, correct, export or delete personal data. You may also object to certain processing activities or request restriction of processing where applicable law provides such rights.",
  },
  {
    title: "Data Security",
    body: "We apply reasonable technical and organizational safeguards designed to protect personal information from unauthorized access, loss, misuse or alteration. These safeguards include access controls, monitoring and secure operational procedures.",
  },
  {
    title: "Data Sharing",
    body: "We do not sell personal data. We may share information with trusted service providers, payment processors, hosting partners and support tools only where needed to operate our services or meet legal obligations.",
  },
  {
    title: "Cookies",
    body: "Our website may use cookies and similar technologies to remember preferences, understand usage patterns and improve performance. You can control cookies through your browser settings, though some features may not work as expected.",
  },
  {
    title: "Third-Party Services",
    body: "KoraAI may integrate with third-party services such as calendars, payment providers, messaging platforms or analytics tools. Use of those services may be governed by their own privacy notices and terms.",
  },
  {
    title: "International Transfers",
    body: "Information may be processed in countries outside your place of residence. Where required, we use appropriate safeguards for international transfers, such as contractual protections and security measures.",
  },
  {
    title: "Changes to Policy",
    body: "We may update this Privacy Policy from time to time to reflect product changes, legal requirements or operational improvements. Updated versions will be posted on this page with a revised effective date.",
  },
  {
    title: "Contact",
    body: "If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact our team at privacy@koraai.com. We will review your request and respond within a reasonable timeframe.",
  },
];

function slugify(value: string) {
  return value.toLowerCase().replaceAll(" ", "-");
}

function ImpressumDescription() {
  const [activeSection, setActiveSection] = useState(slugify(sections[0].title));

  const activeIndex = useMemo(
    () => sections.findIndex((section) => slugify(section.title) === activeSection),
    [activeSection]
  );
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const progress =
    sections.length > 1 ? ((safeActiveIndex + 1) / sections.length) * 100 : 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(slugify(section.title));

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  function handleNavClick(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(id);
  }

  return (
    <section className="relative isolate overflow-visible bg-[#010616] px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_28%,rgba(37,99,235,0.10),transparent_30%)]" />

      <div className="container mx-auto grid items-start gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-2xl border border-blue-300/20 bg-[#061126]/75 p-5 shadow-[0_0_42px_rgba(37,99,235,0.10)] backdrop-blur-sm lg:sticky lg:top-24">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-white">Contents</h2>
              <p className="mt-1 text-xs text-slate-500">
                Jump to any section
              </p>
            </div>
            <span className="rounded-full border border-violet-300/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
              {safeActiveIndex + 1}/{sections.length}
            </span>
          </div>

          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <nav className="mt-6 max-h-[calc(100vh-230px)] space-y-1 overflow-y-auto pr-1 [scrollbar-color:rgba(139,92,246,0.35)_transparent] [scrollbar-width:thin]">
            {contents.map((item, index) => {
              const id = slugify(item);
              const isActive = activeSection === id;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className={`group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors ${
                    isActive
                      ? "bg-violet-500/14 text-white"
                      : "text-slate-400 hover:bg-blue-500/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-semibold transition-colors ${
                      isActive
                        ? "border-violet-300/40 bg-violet-500/20 text-violet-200 shadow-[0_0_18px_rgba(139,92,246,0.45)]"
                        : "border-slate-700 bg-slate-900/70 text-slate-500 group-hover:border-blue-300/30 group-hover:text-blue-300"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="min-w-0 flex-1 leading-5">{item}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <article className="rounded-xl border border-violet-400/40 bg-[#061126]/65 px-8 py-10 shadow-[0_0_48px_rgba(139,92,246,0.10)] sm:px-12">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={slugify(section.title)}
                className="scroll-mt-28 border-b border-blue-300/15 pb-10 last:border-b-0 last:pb-0"
              >
                <div className="flex items-baseline gap-5">
                  <span className="text-3xl font-semibold text-violet-400">
                    {index + 1}.
                  </span>
                  <h2 className="text-3xl font-semibold text-white">
                    {section.title}
                  </h2>
                </div>

                <p className="mt-7 max-w-4xl text-base leading-8 text-slate-300">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default ImpressumDescription;
