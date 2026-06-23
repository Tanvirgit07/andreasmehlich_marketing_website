"use client";

import Image from "next/image";
import {
  Bell,
  CalendarCheck,
  PhoneCall,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Customer Calls",
    description:
      "A customer calls your barbershop to book an appointment or ask a question.",
    color: "text-blue-400",
    border: "border-blue-400/60",
    bg: "bg-blue-600/10",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Kora Answers",
    description:
      "Kora AI answers instantly, qualifies the customer and understands their needs.",
    color: "text-purple-400",
    border: "border-purple-400/60",
    bg: "bg-purple-600/10",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Appointment Booked",
    description:
      "Kora books the appointment in your calendar in real-time.",
    color: "text-purple-400",
    border: "border-purple-400/60",
    bg: "bg-purple-600/10",
  },
  {
    number: "04",
    icon: Bell,
    title: "Reminder Sent",
    description:
      "Automated reminders are sent to reduce no-shows and keep your schedule running smoothly.",
    color: "text-emerald-400",
    border: "border-emerald-400/60",
    bg: "bg-emerald-600/10",
  },
  {
    number: "05",
    icon: Scissors,
    title: "Customer Visits",
    description:
      "The customer shows up, enjoys the service and you deliver a 5-star experience.",
    color: "text-orange-400",
    border: "border-orange-400/60",
    bg: "bg-orange-500/10",
  },
  {
    number: "06",
    icon: Star,
    title: "Review Requested",
    description:
      "Kora automatically requests a review to help you build trust and attract more clients.",
    color: "text-pink-400",
    border: "border-pink-400/60",
    bg: "bg-pink-500/10",
  },
];

function HowItWorks() {
  return (
    <section id = "how-to-use-it" className="relative isolate overflow-hidden bg-[#020813] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_50%_88%,rgba(37,99,235,0.16),transparent_35%)]" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.35em] text-blue-400">
            How It Works
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
            A Better Experience for You{" "}
            <span className="block">
              and Your{" "}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Clients.
              </span>
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            From the first call to the final review. Kora AI handles everything
            in between.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-5">
          {steps.map(
            ({ number, icon: Icon, title, description, color, border, bg }, index) => (
              <div key={title} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+48px)] top-10 hidden h-px w-[calc(100%-72px)] border-t border-dashed border-purple-300/35 xl:block" />
                )}

                <div
                  className={`mx-auto grid h-20 w-20 place-items-center rounded-full border ${border} ${bg} ${color} shadow-[0_0_32px_rgba(37,99,235,0.12)]`}
                >
                  <Icon className="h-9 w-9" />
                </div>

                <div className={`mt-5 text-lg font-bold ${color}`}>{number}</div>
                <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
                <p className="mx-auto mt-3 max-w-[190px] text-sm leading-6 text-slate-300">
                  {description}
                </p>
              </div>
            )
          )}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-blue-300/15 bg-[#06142b]/75 p-3 shadow-[0_0_55px_rgba(37,99,235,0.18)]">
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-blue-500/10 blur-3xl" />
          <Image
            src="/images/barb_3.svg"
            alt="Kora AI barbershop dashboard workflow preview"
            width={1471}
            height={323}
            className="h-auto w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
