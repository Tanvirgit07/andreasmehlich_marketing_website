import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Car,
  Dumbbell,
  Flower2,
  Home,
  Play,
  Quote,
  Scissors,
  Sparkles,
  Stethoscope,
  Target,
  Users,
  Utensils,
} from "lucide-react";

const storyCards = [
  {
    category: "Barbershop",
    title: "Fresh Cuts Barbershop",
    metric: "+38%",
    metricLabel: "More Bookings",
    description:
      "KoraAI handles our calls, books appointments and follows up. Game changer.",
    owner: "David Miller",
    role: "Owner",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    accent: "blue",
    image: "from-slate-950 via-slate-900 to-blue-950",
  },
  {
    category: "Beauty Salon",
    title: "Glow Beauty Salon",
    metric: "+42%",
    metricLabel: "Revenue Increase",
    description:
      "Since we started using KoraAI, our revenue increased and we never miss a call.",
    owner: "Sophia Taylor",
    role: "Owner",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    accent: "violet",
    image: "from-slate-950 via-purple-950 to-amber-950",
  },
  {
    category: "Dental Clinic",
    title: "Bright Smile Dental",
    metric: "+29%",
    metricLabel: "New Patients",
    description:
      "The AI receptionist is polite, professional and available 24/7.",
    owner: "Dr. James Carter",
    role: "Clinic Owner",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    accent: "cyan",
    image: "from-slate-950 via-slate-800 to-cyan-950",
  },
  {
    category: "Auto Service",
    title: "ProAuto Service",
    metric: "+51%",
    metricLabel: "Lead Conversion",
    description:
      "We get more leads, respond faster and close more deals with KoraAI.",
    owner: "Mike Johnson",
    role: "Owner",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    accent: "blue",
    image: "from-slate-950 via-blue-950 to-slate-900",
  },
];

const industries = [
  {
    icon: Scissors,
    title: "Barbershop",
    text: "Automate bookings and grow your clients",
    href: "/barbershops",
    color: "text-violet-300",
    bg: "bg-violet-500/10",
  },
  {
    icon: Sparkles,
    title: "Beauty Salon",
    text: "Increase appointments and revenue",
    href: "/beauty-salons",
    color: "text-fuchsia-300",
    bg: "bg-fuchsia-500/10",
  },
  {
    icon: Utensils,
    title: "Restaurant",
    text: "Manage reservations and customer loyalty",
    href: "/restaurants",
    color: "text-amber-300",
    bg: "bg-amber-500/10",
  },
  {
    icon: Dumbbell,
    title: "Gym & Fitness",
    text: "Fill your classes and retain members",
    href: "/gym",
    color: "text-emerald-300",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Flower2,
    title: "Spa & Wellness",
    text: "Create bookings and personalized experiences",
    href: "/wellness-spa",
    color: "text-violet-300",
    bg: "bg-violet-500/10",
  },
  {
    icon: Stethoscope,
    title: "Dental Clinic",
    text: "Automate reminders and reduce no-shows",
    href: "/dental-clinic",
    color: "text-sky-300",
    bg: "bg-sky-500/10",
  },
  {
    icon: Home,
    title: "Home Services",
    text: "Generate leads and book more jobs",
    href: "/home-service",
    color: "text-blue-300",
    bg: "bg-blue-500/10",
  },
  {
    icon: Car,
    title: "Auto Service",
    text: "Convert more leads and grow revenue",
    href: "/auto-service",
    color: "text-orange-300",
    bg: "bg-orange-500/10",
  },
];

const accentClasses = {
  blue: "text-blue-400 bg-blue-500/10 border-blue-300/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-300/20",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-300/20",
};

function RealStories() {
  return (
    <section id="Real" className="relative isolate overflow-hidden bg-[#010616] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.13),transparent_30%),radial-gradient(circle_at_12%_50%,rgba(14,165,233,0.08),transparent_28%),radial-gradient(circle_at_88%_52%,rgba(139,92,246,0.09),transparent_28%)]" />

      <div className="container mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Real Stories. Real Results.
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              See how local businesses are growing
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            View all stories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {storyCards.map((story) => (
            <a
              key={story.title}
              href={story.url}
              target="_blank"
              rel="noreferrer"
              className="group relative min-h-[260px] overflow-hidden rounded-xl border border-blue-300/15 bg-[#061126]/80 p-5 shadow-[0_0_36px_rgba(37,99,235,0.10)] transition-colors hover:border-blue-300/35"
            >
              <div
                className={`absolute inset-y-0 right-0 w-[58%] bg-gradient-to-br ${story.image} opacity-80 blur-[1px]`}
              />
              <div className="absolute inset-y-0 right-0 w-[62%] bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.16),transparent_15%),linear-gradient(90deg,#061126_0%,rgba(6,17,38,0.28)_42%,rgba(6,17,38,0.75)_100%)]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061126] via-[#061126]/82 to-[#061126]/20" />

              <div className="relative z-10 flex h-full flex-col">
                <div
                  className={`w-fit rounded-md border px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${
                    accentClasses[story.accent as keyof typeof accentClasses]
                  }`}
                >
                  {story.category}
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-6 text-white">
                  {story.title}
                </h3>
                <p className="mt-4 text-3xl font-bold text-blue-400">
                  {story.metric}
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-300">
                  {story.metricLabel}
                </p>
                <p className="mt-5 max-w-[190px] text-xs leading-5 text-slate-300">
                  {story.description}
                </p>

                <div className="mt-auto flex items-end justify-between pt-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-gradient-to-br from-slate-200 to-blue-500 text-[10px] font-black text-white">
                      {story.owner
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        {story.owner}
                      </p>
                      <p className="text-[10px] text-slate-400">{story.role}</p>
                    </div>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-blue-200/50 bg-[#07142d]/70 text-white shadow-[0_0_24px_rgba(37,99,235,0.28)] transition-transform group-hover:scale-105">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-xl border border-blue-300/15 bg-[#061126]/70 p-6 shadow-[0_0_40px_rgba(37,99,235,0.10)]">
            <p className="text-xs font-semibold text-slate-400">
              Success Story
            </p>
            <h3 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl">
              From Missed Calls to Fully Booked.
            </h3>

            <div className="mt-5 grid items-center gap-6 md:grid-cols-[0.86fr_1fr]">
              <Image
                src="/images/korah_2.svg"
                alt="KoraAI customer success story"
                width={604}
                height={561}
                className="h-auto w-full max-w-[320px] justify-self-center drop-shadow-[0_0_38px_rgba(37,99,235,0.20)]"
              />

              <div className="space-y-5">
                <div className="flex gap-3">
                  <Users className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <div>
                    <h4 className="text-sm font-semibold text-blue-300">
                      The Problem
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      Fresh Cuts was missing calls and losing clients every day.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Target className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-300">
                      The Solution
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      KoraAI answered every call, booked appointments and
                      followed up.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0 text-violet-400" />
                  <div>
                    <h4 className="text-sm font-semibold text-violet-300">
                      The Results
                    </h4>
                    <p className="mt-1 text-xs leading-5 text-slate-300">
                      +38% more bookings, +21% revenue increase and -70% missed
                      calls.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-blue-300/15 bg-[#08152f]/70 p-4">
              <Quote className="h-5 w-5 text-blue-400" />
              <p className="mt-2 text-sm leading-6 text-slate-300">
                KoraAI changed our business. It&apos;s like having a full-time
                receptionist and marketing team.
              </p>
              <p className="mt-2 text-xs text-slate-400">
                - David Miller, Owner of Fresh Cuts
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-blue-300/15 bg-[#061126]/70 p-6 shadow-[0_0_40px_rgba(37,99,235,0.10)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-3xl font-semibold text-white">
                  Explore By Industry
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  See how KoraAI helps businesses like yours.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
              >
                View all industries
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {industries.map(({ icon: Icon, title, text, href, color, bg }) => (
                <Link
                  key={title}
                  href={href}
                  className="rounded-xl border border-blue-300/10 bg-[#08152f]/65 p-5 text-center transition-colors hover:border-blue-300/25"
                >
                  <div
                    className={`mx-auto grid h-14 w-14 place-items-center rounded-xl ${bg} ${color}`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <h4 className="mt-4 text-sm font-semibold text-white">
                    {title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RealStories;
