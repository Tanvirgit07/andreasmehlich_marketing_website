"use client";

import Image from "next/image";
import {
  CalendarDays,
  Check,
  PhoneCall,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

const storySteps = [
  {
    icon: PhoneCall,
    title: "The Problem",
    description:
      "Missed calls, manual booking and no-shows were costing them customers every day.",
    color: "text-blue-400",
    bg: "bg-blue-600/15",
  },
  {
    icon: Sparkles,
    title: "The Solution",
    description:
      "Kora AI answered every call, booked appointments 24/7 and automated reminders.",
    color: "text-purple-400",
    bg: "bg-purple-600/15",
  },
  {
    icon: TrendingUp,
    title: "The Results",
    description: "38% more bookings, 26% revenue increase and 70% fewer missed calls.",
    color: "text-emerald-400",
    bg: "bg-emerald-600/15",
  },
];

const stats = [
  {
    icon: CalendarDays,
    value: "+38%",
    label: "More Bookings",
    description: "More appointments booked, every week",
    color: "text-blue-400",
    bg: "bg-blue-600/15",
  },
  {
    icon: Star,
    value: "+26%",
    label: "Revenue Increase",
    description: "Higher revenue with less manual work",
    color: "text-purple-400",
    bg: "bg-purple-600/15",
  },
  {
    icon: PhoneCall,
    value: "-70%",
    label: "Missed Calls",
    description: "Every call answered. Every opportunity saved.",
    color: "text-emerald-400",
    bg: "bg-emerald-600/15",
  },
];

const results = ["38% More bookings", "26% Revenue increase", "70% Missed calls"];

function RestaurantFullBooked() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      {/* <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_86%_42%,rgba(126,34,206,0.16),transparent_32%)]" /> */}

      <div className="container mx-auto overflow-hidden px-5 py-8 shadow-2xl shadow-black/40 backdrop-blur sm:px-8 lg:px-10 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-indigo-400 lg:text-left">
              Success Story
            </p>

            <h2 className="mt-5 max-w-xl text-center text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-left lg:text-[46px]">
              From Empty Slots to{" "}
              <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Fully Booked.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-center text-sm leading-6 text-slate-300 sm:text-base lg:mx-0 lg:text-left">
              See how Bella Beauty Studio transformed their business with kora AI.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-[0.78fr_1fr] md:items-center">
              <div className="relative mx-auto w-full max-w-[330px] md:mx-0">
                <div className="absolute inset-x-8 bottom-3 h-20 rounded-full bg-blue-500/10 blur-3xl" />
                <Image
                  src="/images/restu_1.svg"
                  alt="Fresh Cuts Barbershop owner"
                  width={482}
                  height={493}
                  className="relative z-10 h-auto w-full drop-shadow-[0_22px_45px_rgba(0,0,0,0.45)]"
                />
              </div>

              <div className="relative space-y-6">
                <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-blue-300/15 md:block" />
                {storySteps.map(({ icon: Icon, title, description, color, bg }) => (
                  <div key={title} className="relative flex gap-4">
                    <div
                      className={`z-10 grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-white/5 ${bg} ${color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-semibold ${color}`}>{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {description}
                      </p>
                      {title === "The Results" && (
                        <div className="mt-3 space-y-1">
                          {results.map((result) => (
                            <p
                              key={result}
                              className="flex items-center gap-2 text-xs text-slate-300"
                            >
                              <Check className="h-3.5 w-3.5 text-emerald-400" />
                              {result}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {stats.map(({ icon: Icon, value, label, description, color, bg }) => (
              <div
                key={label}
                className="rounded-xl border border-blue-300/10 bg-[#06142b]/85 px-5 py-6 text-center shadow-xl shadow-black/20"
              >
                <div
                  className={`mx-auto grid h-14 w-14 place-items-center rounded-xl ${bg} ${color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className={`mt-6 text-4xl font-bold tracking-tight ${color}`}>
                  {value}
                </div>
                <h3 className="mt-2 text-sm font-semibold text-white">{label}</h3>
                <p className="mx-auto mt-5 max-w-[170px] text-xs leading-5 text-slate-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 rounded-2xl border border-blue-300/10 bg-[#06142b]/80 px-6 py-6 shadow-xl shadow-black/20 md:grid-cols-[1fr_auto] md:items-center md:px-9">
          <div className="flex gap-6">
            <span className="text-6xl font-bold leading-none text-blue-500">“</span>
            <p className="max-w-xl text-base leading-7 text-slate-100">
              Kora AI changed our business. It&apos;s like having a full-time
              receptionist and marketing team. We can focus on our clients while
              Kora handles the rest.
            </p>
          </div>

          <div className="flex items-center gap-4 border-blue-300/10 md:border-l md:pl-10">
            <Image
              src="/images/restu_1.svg"
              alt="David Miller"
              width={54}
              height={54}
              className="h-14 w-14 rounded-full object-cover object-top"
            />
            <div>
              <h3 className="text-sm font-semibold text-white">David Miller</h3>
              <p className="mt-1 text-xs text-slate-400">
                Owner of Fresh Cuts Barbershop
              </p>
              <div className="mt-2 flex gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantFullBooked;
