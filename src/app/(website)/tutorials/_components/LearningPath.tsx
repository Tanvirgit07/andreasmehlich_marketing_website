import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  CalendarDays,
  Globe2,
  Users,
} from "lucide-react";

const paths = [
  {
    title: "Getting Started",
    description: "Create your account, set up your business and go live.",
    count: "7 Tutorials",
    icon: BookOpen,
    color: "text-violet-300",
    iconBg: "bg-violet-500/15",
    border: "border-violet-400/50",
    glow: "shadow-[0_0_34px_rgba(139,92,246,0.12)]",
  },
  {
    title: "AI Assistant",
    description: "Learn how to configure and train your AI assistant.",
    count: "12 Tutorials",
    icon: Bot,
    color: "text-cyan-300",
    iconBg: "bg-cyan-500/15",
    border: "border-blue-400/50",
    glow: "shadow-[0_0_34px_rgba(37,99,235,0.12)]",
  },
  {
    title: "Website Builder",
    description: "Build, customize and publish your website.",
    count: "8 Tutorials",
    icon: Globe2,
    color: "text-emerald-300",
    iconBg: "bg-emerald-500/15",
    border: "border-emerald-400/45",
    glow: "shadow-[0_0_34px_rgba(16,185,129,0.10)]",
  },
  {
    title: "CRM & Customers",
    description: "Manage leads, customers and conversations.",
    count: "9 Tutorials",
    icon: Users,
    color: "text-cyan-300",
    iconBg: "bg-cyan-500/15",
    border: "border-cyan-400/45",
    glow: "shadow-[0_0_34px_rgba(6,182,212,0.10)]",
  },
  {
    title: "Scheduling & Calendar",
    description: "Set availability, services and appointments.",
    count: "6 Tutorials",
    icon: CalendarDays,
    color: "text-fuchsia-300",
    iconBg: "bg-fuchsia-500/15",
    border: "border-fuchsia-400/45",
    glow: "shadow-[0_0_34px_rgba(217,70,239,0.10)]",
  },
  {
    title: "Analytics & Reports",
    description: "Track performance and grow your business.",
    count: "5 Tutorials",
    icon: BarChart3,
    color: "text-amber-300",
    iconBg: "bg-amber-500/15",
    border: "border-amber-400/45",
    glow: "shadow-[0_0_34px_rgba(245,158,11,0.10)]",
  },
];

function LearningPath() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute right-16 top-0 -z-10 h-32 w-48 rounded-full bg-blue-600/25 blur-3xl" />

      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Choose Your Learning Path
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Follow structured learning paths designed to help you master every
            part of KoraAI.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {paths.map(
            ({ title, description, count, icon: Icon, color, iconBg, border, glow }) => (
              <article
                key={title}
                className={`relative overflow-hidden rounded-xl border ${border} bg-[#061126]/75 p-6 ${glow} transition-colors hover:border-opacity-80`}
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_24%)]" />

                <div className="flex items-start gap-6">
                  <div
                    className={`grid h-16 w-16 shrink-0 place-items-center rounded-xl ${iconBg} ${color}`}
                  >
                    <Icon className="h-9 w-9" strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-white">
                        {title}
                      </h3>
                      <span className="shrink-0 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">
                        {count}
                      </span>
                    </div>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
                      {description}
                    </p>

                    <button
                      type="button"
                      className={`mt-5 inline-flex h-10 items-center justify-center gap-3 rounded-md border px-5 text-sm font-semibold text-white transition-colors hover:bg-white/5 ${border}`}
                    >
                      Start Path
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default LearningPath;
