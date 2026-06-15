"use client";

import { CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function PowerfulModules() {
  const features = [
    "Ask questions in natural language",
    "Get real-time business insights",
    "Take action directly from chat",
  ];

  return (
    <section className="relative overflow-hidden bg-[#020813] px-4 text-zinc-100 sm:px-6 lg:px-8 lg:pt-20 lg:pb-10">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18),transparent_34%)]" /> */}

      <div className="relative mx-auto w-full container space-y-12">
        {/* ================= TOP: HEADER TEXT SECTION ================= */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Badge className="border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-400">
            Powerful Modules
          </Badge>
          <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[42px]">
            All The Tools You Need <br />
            Built{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Right Into Your Dashboard
            </span>
          </h1>
          <p className="mx-auto max-w-md text-sm leading-6 text-zinc-400">
            KoraAI gives you everything your business needs in one place. No
            switching tools. No complexity.
          </p>
        </div>

        {/* ================= BOTTOM: TWO COLUMN CONTENT SECTION ================= */}
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 border-t border-blue-300/10 pt-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT COLUMN: TEXT & BENEFIT LIST */}
          <div className="lg:col-span-5">
            <div className="flex items-start gap-4">
              {/* Animated/Glowing Icon Box */}
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-500/20 to-purple-500/15 shadow-[0_0_28px_rgba(59,130,246,0.28)] group">
                <Sparkles className="h-8 w-8 text-blue-300 group-hover:scale-110 transition-transform" />
              </div>
              <div className="max-w-md space-y-5">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-blue-400">
                    AI Assistant
                  </span>
                  <h2 className="mt-2 text-4xl font-semibold tracking-tight text-white">
                    AI Assistant
                  </h2>
                  <p className="mt-2 text-lg font-semibold text-purple-300">
                    Your smart business partner.
                  </p>
                </div>

                <p className="max-w-md text-lg leading-8 text-zinc-400">
                  Ask anything, get insights, take action. Kora understands your
                  business and helps you make smarter decisions, faster.
                </p>

                {/* Bullet List */}
                <div className="space-y-3.5 pt-1">
                  {features.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <CheckCircle2 className="h-5 w-5 shrink-0 fill-blue-950 text-blue-500 transition-transform group-hover:scale-110" />
                      <span className="text-base font-medium text-zinc-300 transition-colors group-hover:text-zinc-200">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: DUMMY IMAGE INTERFACE (AI ASSISTANT CHAT) */}
          <div className="relative flex items-center justify-center lg:col-span-7">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute right-16 top-1/2 h-48 w-64 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[90px]" />

            <Image
              src="/images/dash_3.svg"
              width={758}
              height={515}
              alt="AI assistant module interface"
              className="relative z-10 h-auto w-full max-w-[758px] drop-shadow-[0_0_45px_rgba(37,99,235,0.22)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PowerfulModules;
