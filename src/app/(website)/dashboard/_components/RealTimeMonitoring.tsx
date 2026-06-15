"use client";

import {
  Activity,
  CalendarDays,
  Users,
  DollarSign,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

function RealTimeMonitoring() {
  // Left side features list
  const features = [
    {
      icon: Activity,
      title: "Active Conversations",
      desc: "See live calls and messages in real-time.",
      color: "text-blue-400",
      bg: "bg-blue-950/40",
    },
    {
      icon: CalendarDays,
      title: "Today's Appointments",
      desc: "Track all scheduled appointments for today.",
      color: "text-purple-400",
      bg: "bg-purple-950/40",
    },
    {
      icon: Users,
      title: "Team Activity",
      desc: "Monitor what your team is working on.",
      color: "text-emerald-400",
      bg: "bg-emerald-950/40",
    },
    {
      icon: DollarSign,
      title: "Revenue Tracking",
      desc: "See your income and growth in real-time.",
      color: "text-cyan-400",
      bg: "bg-cyan-950/40",
    },
    {
      icon: BarChart3,
      title: "Website Leads",
      desc: "Track website visitors and new leads.",
      color: "text-amber-400",
      bg: "bg-amber-950/40",
    },
  ];

  return (
    <div className="bg-[#020813] text-zinc-100 min-h-screen p-8 lg:p-12 flex flex-col justify-center items-center font-sans selection:bg-blue-500/30">
      <div className="container w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* ================= LEFT SIDE: TEXT CONTENT & FEATURES ================= */}
        <div className="lg:col-span-4 space-y-8 sticky top-12">
          <div className="space-y-4">
            <Badge className="bg-blue-950/60 text-blue-400 border-blue-900 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              Real-Time Business Monitoring
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
              Know What’s <br />
              Happening <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Right Now
              </span>
            </h1>
            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-md">
              Get a real-time view of your entire business. Monitor activity,
              track performance, and never miss an opportunity to grow.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3 max-w-md">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-xl bg-[#071125]/40 border border-zinc-900 hover:border-zinc-800 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg ${item.bg} ${item.color}`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              </div>
            ))}
          </div>

          <Button className="w-full max-w-md bg-blue-600 hover:bg-blue-500 text-white font-medium h-12 rounded-xl flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20 transition-all">
            Explore All Insights
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* ================= RIGHT SIDE: DASHBOARD WRAPPER (DUMMY IMAGE ALTERNATIVE) ================= */}
        <div className="lg:col-span-8 relative min-h-[380px] overflow-hidden rounded-2xl border border-zinc-900 bg-[#030a16] p-4 shadow-2xl shadow-black/80 group lg:min-h-0">
          <Image
            src="/images/dash_2.svg"
            fill
            alt="iamge"
            className="object-fill"
          />
        </div>
      </div>
    </div>
  );
}

export default RealTimeMonitoring;
