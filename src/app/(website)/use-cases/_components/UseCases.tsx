import {
  ArrowRight,
  Car,
  Clock3,
  Dumbbell,
  Flower2,
  Home,
  Scissors,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Users,
  Utensils,
} from "lucide-react";

const benefitChips = [
  {
    label: "Save Time",
    icon: Clock3,
    color: "text-blue-300",
    bg: "bg-blue-500/10",
  },
  {
    label: "Grow Revenue",
    icon: TrendingUp,
    color: "text-violet-300",
    bg: "bg-violet-500/10",
  },
  {
    label: "Delight Customers",
    icon: Users,
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
  },
];

const useCases = [
  {
    title: "Barbershop",
    text: "Automate bookings and grow your clients.",
    icon: Scissors,
    color: "text-violet-300",
    bg: "bg-violet-500/12",
    arrow: "text-violet-300",
  },
  {
    title: "Beauty Salon",
    text: "Increase appointments and revenue.",
    icon: Sparkles,
    color: "text-fuchsia-300",
    bg: "bg-fuchsia-500/12",
    arrow: "text-fuchsia-300",
  },
  {
    title: "Restaurant",
    text: "Manage reservations and customer loyalty.",
    icon: Utensils,
    color: "text-amber-300",
    bg: "bg-amber-500/12",
    arrow: "text-amber-300",
  },
  {
    title: "Gym & Fitness",
    text: "Fill your classes and retain members.",
    icon: Dumbbell,
    color: "text-emerald-300",
    bg: "bg-emerald-500/12",
    arrow: "text-emerald-300",
  },
  {
    title: "Spa & Wellness",
    text: "Create bookings and personalized experiences.",
    icon: Flower2,
    color: "text-violet-300",
    bg: "bg-violet-500/12",
    arrow: "text-violet-300",
  },
  {
    title: "Dental Clinic",
    text: "Automate reminders and reduce no-shows.",
    icon: Stethoscope,
    color: "text-blue-300",
    bg: "bg-blue-500/12",
    arrow: "text-blue-300",
  },
  {
    title: "Home Services",
    text: "Generate leads and book more jobs.",
    icon: Home,
    color: "text-blue-300",
    bg: "bg-blue-500/12",
    arrow: "text-blue-300",
  },
  {
    title: "Auto Service",
    text: "Convert more leads and grow revenue.",
    icon: Car,
    color: "text-amber-300",
    bg: "bg-amber-500/12",
    arrow: "text-amber-300",
  },
];

function UseCases() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-16 text-white sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_38%,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_18%_50%,rgba(14,165,233,0.09),transparent_28%)]" />

      <div className="container mx-auto grid items-center gap-12 lg:min-h-[calc(100vh-220px)] lg:grid-cols-[0.72fr_1fr] lg:gap-16">
        <div>
          <div className="inline-flex items-center rounded-full border border-fuchsia-400/35 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-blue-300">
            Use Cases
          </div>

          <h1 className="mt-8 max-w-xl text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-[64px]">
            Real Problems. Real{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              Solutions.
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
            Discover proven workflows, automation examples and real-world use
            cases that help local businesses save time, increase bookings and
            grow faster.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            {benefitChips.map(({ label, icon: Icon, color, bg }) => (
              <div
                key={label}
                className="flex items-center gap-3 text-sm text-slate-200"
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full border border-blue-300/10 ${bg} ${color}`}
                >
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {useCases.map(({ title, text, icon: Icon, color, bg, arrow }) => (
            <article
              key={title}
              className="group flex min-h-[225px] flex-col rounded-xl border border-blue-300/30 bg-[#061126]/70 p-6 shadow-[0_0_36px_rgba(37,99,235,0.08)] transition-colors hover:border-blue-300/30"
            >
              <div
                className={`grid h-20 w-20 place-items-center rounded-full ${bg} ${color} shadow-[0_0_28px_rgba(37,99,235,0.12)]`}
              >
                <Icon className="h-10 w-10" strokeWidth={1.7} />
              </div>

              <h2 className="mt-6 text-lg font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>

              <ArrowRight
                className={`mt-auto h-5 w-5 ${arrow} transition-transform group-hover:translate-x-1`}
                strokeWidth={1.8}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
