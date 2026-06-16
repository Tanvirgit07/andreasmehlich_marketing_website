import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  Handshake,
  Headphones,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

const inquiryCards = [
  {
    title: "General Inquiries",
    description: "Questions about KoraAI and our products.",
    email: "info@koraai.com",
    icon: MessageSquare,
    color: "text-blue-300",
    bg: "bg-blue-500/15",
  },
  {
    title: "Support",
    description: "Get help with your account or technical issues.",
    email: "support@koraai.com",
    icon: Headphones,
    color: "text-violet-300",
    bg: "bg-violet-500/15",
  },
  {
    title: "Partnerships",
    description: "Explore partnership or affiliate opportunities.",
    email: "partnerships@koraai.com",
    icon: Handshake,
    color: "text-emerald-300",
    bg: "bg-emerald-500/15",
  },
  {
    title: "Sales",
    description: "Talk to our team about pricing and demos.",
    email: "sales@koraai.com",
    icon: BriefcaseBusiness,
    color: "text-amber-300",
    bg: "bg-amber-500/15",
  },
];

const contactMethods = [
  {
    title: "Phone",
    lines: ["0176 61235024", "Mo - Fr: 10 - 16 Uhr"],
    icon: Phone,
    color: "text-blue-300",
    bg: "bg-blue-500/10",
  },
  {
    title: "Email",
    lines: ["Info@koraai.de", "We reply within 24h"],
    icon: Mail,
    color: "text-violet-300",
    bg: "bg-violet-500/10",
  },
  {
    title: "Working Hours",
    lines: ["Mo - Fr: 10 - 16 Uhr", "(Berliner Zeitzone)"],
    icon: Clock3,
    color: "text-amber-300",
    bg: "bg-amber-500/10",
  },
];

function Contact() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_4%_42%,rgba(139,92,246,0.15),transparent_28%),radial-gradient(circle_at_96%_40%,rgba(37,99,235,0.20),transparent_30%)]" />

      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[0.98fr_1fr] lg:gap-14">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300">
              Contact Us
            </div>

            <h1 className="mt-7 text-5xl font-medium leading-[1.08] text-white sm:text-6xl lg:text-[64px]">
              We&apos;re Here to{" "}
              <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                Help You Succeed.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Have a question, need support or want to explore partnership
              opportunities? Our team is ready to help.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {inquiryCards.map(({ title, description, email, icon: Icon, color, bg }) => (
                <article
                  key={title}
                  className="rounded-xl  bg-[#061126]/70 p-6 shadow-[0_0_34px_rgba(37,99,235,0.08)]"
                >
                  <div className="flex gap-5">
                    <div
                      className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl ${bg} ${color}`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-white">{title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {description}
                      </p>
                      <a
                        href={`mailto:${email}`}
                        className={`mt-3 inline-flex items-center gap-2 text-sm font-semibold ${color}`}
                      >
                        {email}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-violet-400/35 bg-[#061126]/70 p-6 shadow-[0_0_48px_rgba(139,92,246,0.12)] backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-white">
              Send us a message
            </h2>

            <form className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="h-14 rounded-lg border border-blue-300/10 bg-[#0a1730]/75 px-5 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-300/35"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="h-14 rounded-lg border border-blue-300/10 bg-[#0a1730]/75 px-5 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-300/35"
                />
              </div>
              <input
                type="email"
                placeholder="Work Email"
                className="h-14 w-full rounded-lg border border-blue-300/10 bg-[#0a1730]/75 px-5 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-300/35"
              />
              <input
                type="text"
                placeholder="Company"
                className="h-14 w-full rounded-lg border border-blue-300/10 bg-[#0a1730]/75 px-5 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-300/35"
              />
              <textarea
                placeholder="How can we help you?"
                rows={5}
                className="w-full resize-none rounded-lg border border-blue-300/10 bg-[#0a1730]/75 px-5 py-4 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-300/35"
              />
              <button
                type="button"
                className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 text-sm font-semibold text-white shadow-[0_0_34px_rgba(79,70,229,0.42)] transition-transform hover:-translate-y-0.5"
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>

            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
              <Lock className="h-4 w-4" />
              We typically respond within 24 hours.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 rounded-2xl bg-[#061126]/70 p-8 shadow-[0_0_44px_rgba(37,99,235,0.10)] md:grid-cols-[0.95fr_1fr_1fr_1fr] lg:p-10">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-white">
              Multiple ways{" "}
              <span className="block bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text text-transparent">
                to connect
              </span>
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Choose the way that works best for you. We&apos;re always here.
            </p>
          </div>

          {contactMethods.map(({ title, lines, icon: Icon, color, bg }) => (
            <div key={title} className="border-blue-300/10 md:border-l md:pl-10">
              <div
                className={`grid h-14 w-14 place-items-center rounded-full ${bg} ${color}`}
              >
                <Icon className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <h3 className="mt-7 text-lg font-semibold text-white">{title}</h3>
              <div className="mt-3 space-y-2 text-sm text-slate-400">
                {lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
