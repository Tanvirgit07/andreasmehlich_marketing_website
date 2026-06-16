import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CirclePlay,
  GraduationCap,
  PlayCircle,
  Target,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Step-by-step",
    description: "Guides",
    color: "text-violet-300",
    bg: "bg-violet-500/10",
  },
  {
    icon: PlayCircle,
    title: "Video Tutorials",
    description: "Watch & Learn",
    color: "text-fuchsia-300",
    bg: "bg-fuchsia-500/10",
  },
  {
    icon: Target,
    title: "Practical Examples",
    description: "Real Use Cases",
    color: "text-purple-300",
    bg: "bg-purple-500/10",
  },
];

function Tutorials() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-16 text-white sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_40%,rgba(37,99,235,0.20),transparent_34%),radial-gradient(circle_at_16%_34%,rgba(139,92,246,0.10),transparent_26%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-blue-300/10" />

      <div className="container mx-auto grid items-center gap-8 lg:min-h-[calc(100vh-190px)] lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
        <div className="max-w-xl">
          <div className="text-sm font-bold uppercase tracking-[0.18em] text-violet-400">
            Tutorials
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-[72px]">
            Learn{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
              KoraAI.
            </span>
            <span className="block">Step By Step.</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
            Master every feature of KoraAI with tutorials, walkthroughs and
            practical guides.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 px-8 text-base font-semibold text-white shadow-[0_0_34px_rgba(79,70,229,0.48)] transition-transform hover:-translate-y-0.5"
            >
              <GraduationCap className="h-5 w-5" />
              Start Learning
            </Link>

            <Link
              href="#"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-md border border-blue-300/15 bg-[#061126]/70 px-8 text-base font-semibold text-slate-200 transition-colors hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-white"
            >
              <CirclePlay className="h-5 w-5" />
              Browse Tutorials
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-5">
            {features.map(({ icon: Icon, title, description, color, bg }) => (
              <div key={title} className="flex items-center gap-3">
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full border border-white/10 ${bg} ${color}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">{title}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-8 -z-10 rounded-full bg-blue-500/20 blur-3xl" />
          <Image
            src="/images/tuto_1.svg"
            alt="KoraAI tutorials dashboard with course cards and assistant preview"
            width={1136}
            height={840}
            priority
            className="mx-auto h-auto w-full max-w-[790px] drop-shadow-[0_0_70px_rgba(37,99,235,0.28)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Tutorials;
