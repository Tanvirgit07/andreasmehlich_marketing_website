import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  CalendarDays,
  ChevronRight,
  CircleHelp,
  CreditCard,
  FileText,
  Grid2X2,
  Inbox,
  Monitor,
  Phone,
  PlayCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const topics = [
  {
    title: "Dashboard",
    text: "Overview, widgets, reports and more",
    count: 14,
    icon: Grid2X2,
  },
  {
    title: "Assistant",
    text: "AI assistant, automations and tools",
    count: 22,
    icon: Bot,
  },
  {
    title: "Live View",
    text: "Real-time calls, activity and tracking",
    count: 9,
    icon: Monitor,
  },
  {
    title: "Calendar",
    text: "Scheduling, availability and booking",
    count: 11,
    icon: CalendarDays,
  },
  {
    title: "Inbox",
    text: "Messages, DMs and team inbox",
    count: 18,
    icon: Inbox,
  },
  {
    title: "Website Builder",
    text: "Websites, pages, SEO and domains",
    count: 31,
    icon: Monitor,
  },
  {
    title: "Kora Go",
    text: "Mobile app and on-the-go features",
    count: 12,
    icon: Phone,
  },
  {
    title: "Accounting",
    text: "Invoices, payments and accounting",
    count: 16,
    icon: FileText,
  },
  {
    title: "Employees",
    text: "Team, roles, permissions and more",
    count: 7,
    icon: Users,
  },
  {
    title: "Billing & Plans",
    text: "Subscription, billing and invoices",
    count: 8,
    icon: CreditCard,
  },
  {
    title: "API & Integrations",
    text: "Connect KoraAI with other tools",
    count: 13,
    icon: Sparkles,
  },
  {
    title: "Partnerships",
    text: "Become a partner or affiliate",
    count: 5,
    icon: ShieldCheck,
  },
];

const quickLinks = [
  "Getting Started",
  "Setup Guide",
  "Pricing & Limits",
  "Best Practices",
  "Frequently Asked Questions",
  "Release Notes",
];

const guides = [
  {
    title: "Dashboard Setup",
    text: "Learn how to configure your dashboard, customize widgets and understand your overview.",
    image: "/images/dashboard_image.svg",
    icon: Grid2X2,
  },
  {
    title: "Build Your Website",
    text: "Create your first website in minutes and connect your domain with our step-by-step guide.",
    image: "/images/webb_1.svg",
    icon: Monitor,
  },
  {
    title: "Kora Assistant",
    text: "Discover how the AI assistant can help you save time, automate tasks and grow your business.",
    image: "/images/korah_3.svg",
    icon: Bot,
  },
];

const resources = [
  {
    title: "Step-by-Step Guides",
    text: "Detailed tutorials to help you master every feature.",
    icon: BookOpen,
  },
  {
    title: "Video Tutorials",
    text: "Watch and learn with our easy to follow videos.",
    icon: PlayCircle,
  },
  {
    title: "System Documentation",
    text: "In-depth docs and references for power users and teams.",
    icon: FileText,
  },
  {
    title: "Best Practices",
    text: "Tips and strategies to get the most out of KoraAI.",
    icon: Star,
  },
  {
    title: "Ask the Community",
    text: "Get help from other KoraAI users in our community.",
    icon: CircleHelp,
  },
];

function HelpCenter() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_18%,rgba(37,99,235,0.14),transparent_30%),radial-gradient(circle_at_18%_70%,rgba(139,92,246,0.10),transparent_28%)]" />

      <div className="container mx-auto grid items-stretch gap-10 lg:grid-cols-[300px_1fr]">
        <aside className="h-full rounded-2xl border border-violet-400/40 bg-[#061126]/75 p-4 shadow-[0_0_48px_rgba(139,92,246,0.14)]">
          <div className="relative">
            <input
              placeholder="Search the Knowledge Hub..."
              className="h-11 w-full rounded-md border border-blue-300/15 bg-[#08152b]/80 px-4 pr-10 text-xs text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-300/35"
            />
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>

          <div className="mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300">
            Browse Topics
          </div>

          <div className="mt-3 space-y-1">
            {topics.map(({ title, text, count, icon: Icon }) => (
              <button
                key={title}
                type="button"
                className="flex w-full items-center gap-3 rounded-md px-2.5 py-2 text-left transition-colors hover:bg-blue-500/10"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-blue-500/12 text-blue-300">
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold text-white">
                    {title}
                  </span>
                  <span className="block truncate text-[10px] text-slate-500">
                    {text}
                  </span>
                </span>
                <span className="rounded-md bg-white/8 px-2 py-1 text-[10px] font-semibold text-slate-300">
                  {count}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-300">
            Quick Links
          </div>

          <div className="mt-3 overflow-hidden rounded-lg border border-blue-300/10">
            {quickLinks.map((link) => (
              <button
                key={link}
                type="button"
                className="flex w-full items-center justify-between border-b border-blue-300/10 bg-[#08152b]/55 px-3 py-3 text-left text-xs font-medium text-slate-300 last:border-b-0 hover:bg-blue-500/10 hover:text-white"
              >
                <span>{link}</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              </button>
            ))}
          </div>
        </aside>

        <div className="flex h-full flex-col">
          <div className="text-[11px] font-bold uppercase tracking-[0.26em] text-violet-300">
            Knowledge Hub
          </div>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[56px]">
            Everything you need to{" "}
            <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              run, manage and grow with KoraAI.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Explore guides, tutorials and documentation to help you get the most
            out of the KoraAI system.
          </p>

          <div className="mt-9 flex items-center justify-between gap-4">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-violet-300">
              Popular Guides
            </h2>
            <Link
              href="#"
              className="inline-flex h-9 items-center gap-2 rounded-full border border-blue-300/15 px-4 text-xs font-semibold text-slate-300 hover:bg-blue-500/10 hover:text-white"
            >
              View all guides
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {guides.map(({ title, text, image, icon: Icon }) => (
              <article
                key={title}
                className="rounded-xl border border-blue-300/15 bg-[#061126]/75 p-4 shadow-[0_0_34px_rgba(37,99,235,0.08)]"
              >
                <div className="relative h-40 overflow-hidden rounded-lg border border-blue-300/10 bg-[#071126]">
                  <Image
                    src={image}
                    alt=""
                    width={420}
                    height={240}
                    className="h-full w-full object-cover opacity-70"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-blue-300/15 bg-blue-500/15 px-3 py-1 text-[10px] font-bold uppercase text-blue-300">
                    Guide
                  </span>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-blue-500/15 text-blue-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {text}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex justify-end">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-blue-300/20 text-blue-400">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid flex-1 gap-px overflow-hidden rounded-xl border border-blue-300/15 bg-blue-300/10 sm:grid-cols-2 lg:grid-cols-5">
            {resources.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="bg-[#061126]/85 px-5 py-7 text-center"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-500/10 text-blue-300">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-sm font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-3 text-xs leading-5 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HelpCenter;
