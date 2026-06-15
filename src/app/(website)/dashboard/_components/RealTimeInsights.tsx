"use client";

import React from "react";
import {
  Clock,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

function RealTimeInsights() {
  const stats = [
    {
      icon: Clock,
      value: "0",
      title: "Missed Opportunities",
      desc: "AI Alerts Keep You Updated",
      iconColor: "text-blue-500",
      bgIcon: "bg-blue-950/40",
    },
    {
      icon: TrendingUp,
      value: "+28%",
      title: "More Bookings",
      desc: "Compared to Last Month",
      iconColor: "text-blue-400",
      bgIcon: "bg-blue-950/40",
    },
    {
      icon: Users,
      value: "98%",
      title: "Customer Response",
      desc: "Within Minutes",
      iconColor: "text-blue-500",
      bgIcon: "bg-blue-950/40",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      title: "Data Security",
      desc: "Enterprise Grade",
      iconColor: "text-emerald-500",
      bgIcon: "bg-emerald-950/40",
    },
  ];

  return (
    <div className="bg-[#020813] text-zinc-100  flex items-center justify-center p-6 font-sans">
      {/* Main Container Banner */}
      <div className="w-full container border border-zinc-900 bg-gradient-to-r from-[#030e21] via-[#04122c] to-[#030e21] rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative overflow-hidden shadow-2xl shadow-black/50">
        {/* Subtle wavy bottom background line glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />

        {/* --- LEFT SIDE: AI AVATAR & HEADING --- */}
        <div className="flex items-center gap-6 lg:border-r lg:border-zinc-800/80 lg:pr-12 shrink-0">
          {/* Glowing AI Smiley Face Avatar */}
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-black/40 border-2 border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.6)] shrink-0 animate-pulse">
            {/* Ambient inner glow layer */}
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-b from-blue-500/20 to-transparent blur-[2px]" />

            {/* Custom SVG/CSS for the exact Smiley look */}
            <div className="flex flex-col items-center justify-center gap-1.5 z-10">
              <div className="flex gap-2.5">
                <div className="w-2.5 h-4 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <div className="w-2.5 h-4 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </div>
              <div className="w-7 h-3 border-b-[3px] border-white rounded-b-full shadow-[0_2px_4px_rgba(255,255,255,0.5)] mt-0.5" />
            </div>
          </div>

          {/* Headline Texts */}
          <div className="space-y-1.5 max-w-[300px]">
            <h2 className="text-2xl lg:text-3xl font-bold text-zinc-100 tracking-tight leading-tight">
              Real-time insights.
            </h2>
            <p className="text-2xl lg:text-3xl font-bold text-blue-500 tracking-tight leading-tight">
              Smarter decisions.
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE: STATS GRID --- */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4 flex-1">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-2 pl-2 md:pl-4 ${
                idx !== stats.length - 1
                  ? "md:border-r md:border-zinc-800/60"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Micro Icon Box */}
                <div
                  className={`p-2 rounded-xl ${item.bgIcon} ${item.iconColor} border border-zinc-900/50`}
                >
                  <item.icon className="h-5 w-5" strokeWidth={2.5} />
                </div>
                {/* Main Metric Value */}
                <span className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {item.value}
                </span>
              </div>

              {/* Context Descriptions */}
              <div className="space-y-0.5 mt-1">
                <h4 className="text-sm font-semibold text-zinc-400">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RealTimeInsights;
