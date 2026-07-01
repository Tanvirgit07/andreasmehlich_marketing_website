"use client";

import React from "react";
import { Clock, Calendar, Mail, User } from "lucide-react";
import Image from "next/image";

export default function KoraGoApp() {
  // বাম পাশের ফিচার লিস্টের ডাটা
  const features = [
    {
      title: "Working Hours",
      description: "Track working hours and manage shifts easily.",
      icon: Clock,
      iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Calendar",
      description: "View schedules and upcoming appointments.",
      icon: Calendar,
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Inbox",
      description: "All messages, updates and announcements.",
      icon: Mail,
      iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Kora Assistant",
      description: "AI support for employees, anytime, anywhere.",
      icon: User, // আপনি চাইলে কাস্টম স্মাইলি আইকনও ব্যবহার করতে পারেন
      iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
  ];

  return (
    <section className="w-full bg-[#020717] px-6 lg:py-20  text-white md:px-12 lg:px-20 overflow-hidden">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* ================= LEFT COLUMN (Takes 4 Cols) ================= */}
        <div className="flex flex-col items-start space-y-6 lg:col-span-5">
          {/* Badge */}
          <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            🤖 KORA GO APP
          </div>

          {/* Title matching image_08479e.png */}
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:whitespace-nowrap">
            Kora GO{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              For Your Team
            </span>
          </h2>

          <p className="max-w-md text-base leading-relaxed text-zinc-400">
            Empower your employees with the Kora GO app. Everything they need —
            in one place.
          </p>

          {/* Features List */}
          <div className="flex flex-col space-y-5 pt-4 w-full">
            {features.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4 group">
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border transition-transform group-hover:scale-105 ${item.iconColor}`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-normal mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= MIDDLE COLUMN: Dummy Mobile Image (Takes 4 Cols) ================= */}
        <div className="flex items-center justify-center lg:col-span-3">
          <Image
            src="/images/phone_iamge.png"
            height={500}
            width={500}
            alt="app"
          />
        </div>

        {/* ================= RIGHT COLUMN: Chat Transcript & Audio Wave (Takes 4 Cols) ================= */}
        <div className="flex flex-col justify-center space-y-4 lg:col-span-4">
          {/* Audio Waveform Simulator Graphic Area */}
          <div className="h-14 w-full flex items-center justify-center gap-[3px] px-2 mb-4">
            {/* জ্যামিতিক অডিও বার যা ইমেজের সাথে মিলবে */}
            {[
              20, 35, 15, 45, 60, 25, 75, 40, 90, 50, 30, 65, 80, 20, 45, 70,
              35, 55, 25, 40, 15, 50,
            ].map((height, i) => (
              <div
                key={i}
                style={{ height: `${height}%` }}
                className="w-[3px] rounded-full bg-gradient-to-t from-blue-600 via-cyan-400 to-blue-500 opacity-85"
              />
            ))}
          </div>

          {/* Message 1: Kora AI */}
          <div className="w-full rounded-xl border border-zinc-900 bg-[#031133]/40 p-4 flex flex-col space-y-1.5 shadow-md">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-blue-400 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Kora
                AI
              </span>
              <span className="text-zinc-500 font-mono text-[11px]">00:02</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Hi! Thanks for calling Fresh Cuts. How can I help you today?
            </p>
          </div>

          {/* Message 2: Caller (Right / Offset indented slightly) */}
          <div className="w-[92%] ml-auto rounded-xl border border-blue-900/30 bg-[#041542]/70 p-4 flex flex-col space-y-1.5 shadow-md">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-zinc-300">Caller</span>
              <span className="text-zinc-500 font-mono text-[11px]">00:05</span>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Hi, I&apos;d like to book a haircut for tomorrow.
            </p>
          </div>

          {/* Message 3: Kora AI */}
          <div className="w-full rounded-xl border border-zinc-900 bg-[#031133]/40 p-4 flex flex-col space-y-1.5 shadow-md">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-blue-400 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Kora
                AI
              </span>
              <span className="text-zinc-500 font-mono text-[11px]">00:07</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Sure! What time works best for you?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
