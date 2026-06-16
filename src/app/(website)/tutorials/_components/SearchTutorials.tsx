"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Search } from "lucide-react";
import { useMemo, useState } from "react";

const categories = [
  "Dashboard",
  "Website",
  "AI Assistant",
  "CRM",
  "Employees",
  "Calendar",
  "Analytics",
  "Automation",
  "Integrations",
];

const tutorials = [
  {
    title: "Getting Started Overview",
    level: "Beginner",
    category: "Dashboard",
    image: "/images/tuto_1.svg",
    dot: "bg-cyan-400",
  },
  {
    title: "Adding Your First Service",
    level: "Beginner",
    category: "Website",
    image: "/images/webb_1.svg",
    dot: "bg-cyan-400",
  },
  {
    title: "Setting Up Working Hours",
    level: "Beginner",
    category: "Calendar",
    image: "/images/dash_2.svg",
    dot: "bg-cyan-400",
  },
  {
    title: "Creating AI Responses",
    level: "Intermediate",
    category: "AI Assistant",
    image: "/images/korah_1.svg",
    dot: "bg-orange-400",
  },
  {
    title: "Building Your Homepage",
    level: "Intermediate",
    category: "Website",
    image: "/images/web_1.svg",
    dot: "bg-orange-400",
  },
  {
    title: "Understanding Analytics",
    level: "Advanced",
    category: "Analytics",
    image: "/images/dashboard_image.svg",
    dot: "bg-orange-500",
  },
];

function SearchTutorials() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredTutorials = useMemo(() => {
    return tutorials.filter((tutorial) => {
      const matchesSearch = tutorial.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        !activeCategory || tutorial.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.10),transparent_32%)]" />

      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-semibold text-white">
            Search Tutorials
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Find exactly what you need to learn.
          </p>
        </div>

        <div className="relative mt-5">
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search tutorials..."
            className="h-14 w-full rounded-lg border border-blue-300/15 bg-[#071126]/80 px-5 pr-12 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-300/35"
          />
          <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory((current) =>
                    current === category ? null : category
                  )
                }
                className={`h-9 rounded-md border px-6 text-xs font-semibold transition-colors ${
                  isActive
                    ? "border-blue-300/45 bg-blue-500/15 text-white"
                    : "border-blue-300/15 bg-[#071126]/70 text-slate-300 hover:border-blue-300/30 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-white">
            Tutorial Library
          </h3>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            View all tutorials
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {filteredTutorials.map((tutorial) => (
            <Link
              key={tutorial.title}
              href="#"
              className="group overflow-hidden rounded-lg border border-blue-300/15 bg-[#061126]/75 shadow-[0_0_30px_rgba(37,99,235,0.08)] transition-colors hover:border-blue-300/35"
            >
              <div className="relative h-28 overflow-hidden">
                <Image
                  src={tutorial.image}
                  alt=""
                  width={280}
                  height={150}
                  className="h-full w-full object-cover opacity-70 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061126] via-[#061126]/20 to-transparent" />

                <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-blue-700 shadow-[0_0_20px_rgba(255,255,255,0.24)]">
                  <Play className="ml-0.5 h-4 w-4 fill-current" />
                </span>
              </div>

              <div className="p-4">
                <h4 className="text-sm font-semibold leading-5 text-white">
                  {tutorial.title}
                </h4>
                <p className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                  <span className={`h-2 w-2 rounded-full ${tutorial.dot}`} />
                  {tutorial.level}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="mt-5 rounded-lg border border-blue-300/15 bg-[#071126]/70 p-6 text-center text-sm text-slate-400">
            No tutorials found.
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchTutorials;
