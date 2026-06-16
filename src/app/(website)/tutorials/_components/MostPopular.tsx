import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

const tutorials = [
  {
    title: "How To Set Up KoraAI",
    level: "Beginner",
    duration: "15:00",
    image: "/images/dashboard_image.svg",
    dot: "bg-cyan-400",
    tint: "from-blue-500/10 to-transparent",
  },
  {
    title: "Build Your First Website",
    level: "Beginner",
    duration: "12:00",
    image: "/images/webb_1.svg",
    dot: "bg-emerald-400",
    tint: "from-violet-500/25 to-transparent",
  },
  {
    title: "Configure Your AI Assistant",
    level: "Intermediate",
    duration: "10:00",
    image: "/images/tuto_1.svg",
    dot: "bg-orange-400",
    tint: "from-blue-500/10 to-transparent",
  },
];

function MostPopular() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.12),transparent_32%)]" />

      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-white">
            Most Popular Tutorials
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            View all tutorials
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.title}
              href="#"
              className="group overflow-hidden rounded-xl border border-blue-300/15 bg-[#061126]/75 shadow-[0_0_34px_rgba(37,99,235,0.09)] transition-colors hover:border-blue-300/35"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={tutorial.image}
                  alt=""
                  width={520}
                  height={260}
                  className="h-full w-full object-cover opacity-65 transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${tutorial.tint}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061126] via-[#061126]/30 to-transparent" />

                <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-blue-700 shadow-[0_0_24px_rgba(255,255,255,0.25)] transition-transform group-hover:scale-105">
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </span>

                <span className="absolute bottom-3 right-3 rounded-md border border-white/20 bg-black/55 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                  {tutorial.duration}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">
                  {tutorial.title}
                </h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  <span className={`h-2 w-2 rounded-full ${tutorial.dot}`} />
                  {tutorial.level}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MostPopular;
