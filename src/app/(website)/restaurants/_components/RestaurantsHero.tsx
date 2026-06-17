"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Phone,
  PlayCircle,
  Scissors,
  Star,
  UsersRound,
} from "lucide-react";

const avatars = [
  { label: "JM", color: "#92400e" },
  { label: "DB", color: "#1d4ed8" },
  { label: "CT", color: "#7c2d12" },
  { label: "MB", color: "#0f766e" },
];

const features = [
  {
    icon: Phone,
    title: "AI Receptionist",
    description: "Never miss a call again",
  },
  {
    icon: CalendarDays,
    title: "Smart Booking",
    description: "24/7 online appointments",
  },
  {
    icon: UsersRound,
    title: "Happy Customers",
    description: "Better experience & loyalty",
  },
  {
    icon: BarChart3,
    title: "Grow Your Business",
    description: "More bookings, more revenue",
  },
];

function RestaurantsHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-blue-400/15 bg-[#020813] px-4 py-12 text-white sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_24%,rgba(126,34,206,0.30),transparent_34%),radial-gradient(circle_at_45%_52%,rgba(37,99,235,0.12),transparent_32%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-blue-400/30 shadow-[0_0_44px_12px_rgba(37,99,235,0.38)]" />

      <div className="container mx-auto flex min-h-[calc(100vh-176px)] flex-col justify-center gap-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/35 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-300 shadow-[0_0_24px_rgba(126,34,206,0.22)]">
              <Scissors className="h-3.5 w-3.5" />
              Kora AI for Barbershops
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              Fill Your Calendar.<br />Delight Every{" "}
              <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Client.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
              Kora AI handles calls,messages and bookings so you can focus on
              what you do best: making your clients feel beautiful
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-7 text-sm font-semibold text-white shadow-[0_0_34px_rgba(79,70,229,0.55)] transition-transform hover:-translate-y-0.5"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-blue-300/15 bg-[#03142d]/70 px-7 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-white"
              >
                See How It Works
                <PlayCircle className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {avatars.map((avatar) => (
                    <div
                      key={avatar.label}
                      className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#020813] text-[10px] font-bold text-white shadow-lg shadow-black/30"
                      style={{ backgroundColor: avatar.color }}
                    >
                      {avatar.label}
                    </div>
                  ))}
                </div>
                <div className="-ml-1 grid h-11 w-11 place-items-center rounded-full border border-purple-400 bg-purple-500/15 text-xs font-semibold text-purple-200">
                  +2K
                </div>
              </div>

              <div>
                <div className="flex gap-0.5 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  Trusted by 2,000+ Barbershops
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[2rem] bg-purple-600/15 blur-3xl" />
            <div className="overflow-hidden rounded-[1.4rem] border border-blue-300/15 bg-[#061126]/70 p-2 shadow-[0_0_70px_rgba(37,99,235,0.25)] backdrop-blur">
              <Image
                src="/images/buty_1.svg"
                alt="Kora AI barbershop dashboard preview"
                width={920}
                height={676}
                priority
                className="h-auto w-full rounded-[1rem]"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden rounded-xl border border-blue-300/10 bg-blue-300/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-center gap-4 bg-[#061126]/90 px-5 py-5"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-blue-600/10 text-blue-400">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white">{title}</h2>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RestaurantsHero;
