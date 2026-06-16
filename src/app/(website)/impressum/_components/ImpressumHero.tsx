import {
  Cookie,
  FileText,
  IdCard,
  ShieldCheck,
  Shield,
} from "lucide-react";

const resources = [
  { label: "Privacy Policy", icon: Shield, active: true },
  { label: "Impressum", icon: IdCard },
  { label: "Terms of Service", icon: FileText },
  { label: "DPA / AVV", icon: ShieldCheck },
  { label: "Cookie Policy", icon: Cookie },
];

function ImpressumHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-20 text-white sm:px-6 lg:min-h-[calc(100vh-80px)] lg:px-8 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_38%,rgba(37,99,235,0.10),transparent_30%),radial-gradient(circle_at_20%_52%,rgba(139,92,246,0.08),transparent_26%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-blue-300/10" />

      <div className="container mx-auto grid max-w-7xl items-center gap-14 lg:min-h-[calc(100vh-240px)] lg:grid-cols-[1fr_360px]">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-violet-400">
            Legal
          </div>

          <h1 className="mt-8 text-6xl font-semibold leading-none text-white sm:text-7xl lg:text-[92px]">
           
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Impressum
            </span>
          </h1>

          <p className="mt-9 text-lg text-slate-400">
            Last updated: June 2026
          </p>
        </div>

        <aside className="rounded-xl border border-blue-300/20 bg-[#061126]/55 p-7 shadow-[0_0_42px_rgba(37,99,235,0.08)] backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-white">Resources</h2>

          <div className="mt-6 space-y-2">
            {resources.map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                type="button"
                className={`flex h-14 w-full items-center gap-4 rounded-lg px-4 text-left text-base font-medium transition-colors ${
                  active
                    ? "bg-violet-500/18 text-white"
                    : "text-slate-300 hover:bg-blue-500/10 hover:text-white"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${
                    active ? "text-violet-300" : "text-slate-300"
                  }`}
                  strokeWidth={1.8}
                />
                {label}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ImpressumHero;
