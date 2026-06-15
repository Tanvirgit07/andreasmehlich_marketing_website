"use client";

import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Globe2,
  Inbox,
  LayoutGrid,
  Link2,
  Repeat2,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import Image from "next/image";

function FeatureCopy({
  icon: Icon,
  eyebrow,
  title,
  highlight,
  description,
  features,
}: {
  icon: typeof CalendarDays;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-500/20 to-purple-500/15 text-blue-300 shadow-[0_0_28px_rgba(59,130,246,0.28)]">
        <Icon className="h-8 w-8" />
      </div>

      <div className="max-w-md space-y-5">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-2 text-lg font-semibold text-purple-300">
            {highlight}
          </p>
        </div>

        <p className="text-base leading-7 text-zinc-400">{description}</p>

        <div className="space-y-3.5">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 fill-blue-950 text-blue-500" />
              <span className="text-sm font-medium text-zinc-300">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ModuleImageFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-300/10 bg-[#041025]/80 p-2 shadow-2xl shadow-black/50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.12),transparent_58%)]" />
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={src}
          width={900}
          height={560}
          alt={alt}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

function CalendarMockup() {
  return <ModuleImageFrame src="/images/dash_4.svg" alt="Calendar dashboard" />;
}

function InboxMockup() {
  return <ModuleImageFrame src="/images/dash_5.svg" alt="Inbox dashboard" />;
}

function WebsiteMockup() {
  return (
    <ModuleImageFrame
      src="/images/dash_6.svg"
      alt="Website builder dashboard"
    />
  );
}

function AccountingMockup() {
  return (
    <ModuleImageFrame src="/images/dash_7.svg" alt="Accounting dashboard" />
  );
}

const moreFeatures = [
  { label: "CRM & Customers", icon: Users },
  { label: "Employee Management", icon: ShieldCheck },
  { label: "Tasks & Reminders", icon: LayoutGrid },
  { label: "Reports & Analytics", icon: BarChart3 },
  { label: "Automations", icon: Workflow },
  { label: "Integrations", icon: Link2 },
];

function CalendarInbox() {
  return (
    <section className="relative overflow-hidden bg-[#020813] px-4 text-zinc-100 sm:px-6 lg:px-8 lg:pb-20">
      <div className="max-w-7xl relative mx-auto space-y-10">
        <div className="grid items-center gap-10 border-t border-blue-300/10 pt-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <CalendarMockup />
          </div>
          <div className="lg:col-span-5">
            <FeatureCopy
              icon={CalendarDays}
              eyebrow="Calendar"
              title="Calendar"
              highlight="Manage time. Maximize productivity."
              description="Easily manage appointments, staff schedules, and availability. Reduce no-shows and keep your business running on time."
              features={[
                "Smart scheduling and availability",
                "Automated reminders and notifications",
                "Sync across all devices",
              ]}
            />
          </div>
        </div>

        <div className="grid items-center gap-10 border-t border-blue-300/10 pt-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <FeatureCopy
              icon={Inbox}
              eyebrow="Inbox"
              title="Inbox"
              highlight="All conversations. One inbox."
              description="Manage calls, WhatsApp, SMS, emails and chat messages in one unified inbox. Never miss a lead or message again."
              features={[
                "Calls, WhatsApp, SMS and Email",
                "AI-powered auto-replies",
                "Real-time team collaboration",
              ]}
            />
          </div>
          <div className="lg:col-span-7">
            <InboxMockup />
          </div>
        </div>

        <div className="grid items-center gap-10 border-t border-blue-300/10 pt-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <WebsiteMockup />
          </div>
          <div className="lg:col-span-5">
            <FeatureCopy
              icon={Globe2}
              eyebrow="Website Builder"
              title="Website Builder"
              highlight="Build, optimize and grow your online presence."
              description="Create stunning websites that convert visitors into customers. Built-in SEO, analytics and lead generation tools."
              features={[
                "Drag and drop website builder",
                "SEO and performance optimized",
                "Built-in leads and analytics",
              ]}
            />
          </div>
        </div>

        <div className="grid items-center gap-10 border-t border-blue-300/10 pt-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <FeatureCopy
              icon={BarChart3}
              eyebrow="Accounting Basics"
              title="Accounting Basics"
              highlight="Keep your finances organized."
              description="Track income, expenses, invoices and payments with powerful yet simple accounting tools built for local businesses."
              features={[
                "Invoices and estimates",
                "Expense tracking",
                "Revenue and profit reports",
              ]}
            />
          </div>
          <div className="lg:col-span-7">
            <AccountingMockup />
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-blue-300/10 bg-[#010B1D] p-8 shadow-2xl shadow-black/50 sm:p-10 mt-10 container mx-auto">
        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="flex items-center gap-8 lg:col-span-5">
            <div className="grid h-28 w-28 shrink-0 place-items-center rounded-full bg-blue-600/20 text-blue-300">
              <Repeat2 className="h-11 w-11" />
            </div>

            <div className="max-w-md">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                And Many More
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                And Many More Powerful Features
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                KoraAI is constantly evolving with new features and tools to
                help your business grow.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {moreFeatures.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-blue-300/10 bg-[#07162f]/80 px-4 py-4 text-sm font-semibold text-zinc-300"
              >
                <Icon className="h-5 w-5 text-blue-400" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalendarInbox;
