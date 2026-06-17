"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Bell,
  Facebook,
  Instagram,
  Linkedin,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Zap,
} from "lucide-react";

const launchDate = new Date("2026-09-15T00:00:00+06:00").getTime();

function getCountdown() {
  const distance = Math.max(0, launchDate - Date.now());

  return [
    { value: Math.floor(distance / (1000 * 60 * 60 * 24)), label: "Days" },
    { value: Math.floor((distance / (1000 * 60 * 60)) % 24), label: "Hours" },
    { value: Math.floor((distance / (1000 * 60)) % 60), label: "Minutes" },
    { value: Math.floor((distance / 1000) % 60), label: "Seconds" },
  ];
}

const features = [
  {
    icon: Zap,
    title: "Built for Businesses",
    description: "Powerful tools to help you grow and scale.",
    color: "text-purple-400",
    bg: "bg-purple-600/15",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description: "Your data is safe with enterprise-grade security.",
    color: "text-blue-400",
    bg: "bg-blue-600/15",
  },
  {
    icon: Rocket,
    title: "Designed to Scale",
    description: "Built to grow with your business needs.",
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-600/15",
  },
  {
    icon: UsersRound,
    title: "Loved by Teams",
    description: "Intuitive, easy to use and made for real results.",
    color: "text-emerald-400",
    bg: "bg-emerald-600/15",
  },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
];

function ComingSoonGym() {
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="h-screen overflow-hidden bg-[#020813] px-3 py-2 text-white sm:px-4">
      <div className="relative isolate mx-auto flex h-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-blue-300/15 bg-[#030b1c]/90 px-5 py-5 shadow-2xl shadow-black/50 sm:px-7 lg:px-8 lg:py-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_36%,rgba(126,34,206,0.18),transparent_30%),radial-gradient(circle_at_62%_40%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_8%_10%,rgba(37,99,235,0.10),transparent_28%)]" />

        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-blue-600 text-lg font-black text-white shadow-[0_0_20px_rgba(37,99,235,0.35)]">
              K
            </span>
            <span className="text-lg font-bold uppercase tracking-[0.18em] text-white">
              Kora AI
            </span>
          </Link>

          <p className="text-sm text-slate-200">
            Have questions?{" "}
            <Link href="/contact" className="text-purple-300 underline">
              Contact us
            </Link>
          </p>
        </header>

        <main className="grid min-h-0 flex-1 items-center gap-8 py-6 lg:grid-cols-[0.84fr_1.16fr] lg:gap-12 lg:py-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/35 bg-blue-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-purple-300 shadow-[0_0_24px_rgba(126,34,206,0.22)]">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              Coming Soon
            </div>

            <h1 className="mt-4 max-w-lg text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              Something Amazing{" "}
              <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">
                Is On The Way.
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
              We&apos;re building something powerful to help businesses work
              smarter, save time and deliver exceptional experiences.
            </p>

            <div className="mt-5 max-w-md rounded-xl border border-blue-300/10 bg-[#06142b]/80 p-4 shadow-xl shadow-black/25">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-600/15 text-emerald-400">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    Be the First to Know
                  </h2>
                  <p className="mt-1 text-xs text-slate-300">
                    Subscribe and get notified when we launch.
                  </p>
                </div>
              </div>

              <form className="mt-4 flex overflow-hidden rounded-lg border border-blue-300/10 bg-[#020813]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-500"
                />
                <button
                  type="button"
                  className="h-10 shrink-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(79,70,229,0.45)]"
                >
                  Notify Me
                </button>
              </form>
            </div>

            <div className="mt-5">
              <p className="text-sm text-slate-300">Follow us for updates</p>
              <div className="mt-3 flex gap-2.5">
                {socials.map(({ icon: Icon, label }, index) => (
                  <Link
                    key={`${label}-${index}`}
                    href="#"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-blue-400/20 bg-blue-500/5 text-blue-400 transition-colors hover:border-blue-300/40 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-col items-center gap-7">
            <div className="relative grid aspect-square w-full max-w-[400px] place-items-center xl:max-w-[450px]">
              <div className="absolute inset-0 rounded-full border border-purple-400/20" />
              <div className="absolute inset-8 rounded-full border border-blue-500/45 shadow-[0_0_60px_rgba(37,99,235,0.35)]" />
              <div className="absolute inset-12 rounded-full border border-purple-500/70 shadow-[0_0_70px_rgba(217,70,239,0.32)]" />
              <div className="absolute left-[10%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(59,130,246,1)]" />
              <div className="absolute right-[14%] top-[58%] h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_18px_rgba(217,70,239,1)]" />

              <div className="relative z-10 text-center">
                <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-fuchsia-300">
                  Launching In
                </p>
                <div className="mt-6 grid grid-cols-4 divide-x divide-blue-300/15">
                  {countdown.map((item) => (
                    <div key={item.label} className="px-3 sm:px-5">
                      <div className="text-3xl font-semibold tracking-tight text-white">
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-[11px] font-medium uppercase text-slate-400">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {features.map(({ icon: Icon, title, description, color, bg }) => (
                <div key={title} className="text-center">
                  <div
                    className={`mx-auto grid h-11 w-11 place-items-center rounded-xl ${bg} ${color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mx-auto mt-1.5 max-w-[180px] text-[11px] leading-5 text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="border-t border-blue-300/10 pt-4 text-center text-xs text-slate-400">
          © 2024 Kora AI. All rights reserved.
        </footer>
      </div>
    </section>
  );
}

export default ComingSoonGym;
