"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

function AIDashboardOverview() {
  return (
    <section className="relative overflow-hidden bg-[#010813] px-4 py-16 text-zinc-100 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(76,141,246,0.18),transparent_34%)]" />

      <div className="relative flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <Badge
            className="border-blue-400/20 bg-blue-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-blue-300"
            variant="outline"
          >
            AI Dashboard Overview
          </Badge>

          <h1 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-5xl">
            Everything You Need{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent block">In One Place</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            The AI Dashboard gives you a real-time overview of every part of
            your business so you can make smarter decisions, faster.
          </p>
        </div>

        <div className="mt-14 w-full container ">
          <div className="relative rounded-2xl p-2 shadow-[0_0_80px_rgba(76,141,246,0.28)] backdrop-blur-sm sm:p-3">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] " />

            <div className="overflow-hidden rounded-xl shadow-2xl shadow-black/50">
              <Image
                src="/images/dash_1.svg"
                width={1200}
                height={675}
                alt="AI dashboard overview"
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIDashboardOverview;
