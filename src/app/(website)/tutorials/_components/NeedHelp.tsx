import Link from "next/link";
import { ArrowRight, GraduationCap, Headphones, MessageSquare } from "lucide-react";

function NeedHelp() {
  return (
    <section className="relative isolate overflow-hidden bg-[#010616] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.10),transparent_32%)]" />

      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-semibold text-white">Need More Help?</h2>
          <p className="mt-2 text-sm text-slate-400">
            We&apos;re here to help you succeed with KoraAI.
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.08fr_1.08fr]">
          <article className="rounded-xl border border-violet-400/30 bg-[#0b1027]/80 p-6 shadow-[0_0_34px_rgba(139,92,246,0.10)]">
            <div className="flex gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
                <Headphones className="h-9 w-9" strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Help Center</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                  Search our documentation and find answers to common questions.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-10 items-center justify-center gap-3 rounded-md border border-violet-400/40 px-5 text-sm font-semibold text-white transition-colors hover:bg-violet-500/10"
                >
                  Visit Help Center
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-blue-400/30 bg-[#061126]/80 p-6 shadow-[0_0_34px_rgba(37,99,235,0.10)]">
            <div className="flex gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-cyan-300">
                <MessageSquare className="h-9 w-9" strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  Contact Support
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                  Can&apos;t find what you need? Our team is here to help.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-10 items-center justify-center gap-3 rounded-md border border-blue-400/40 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-500/10"
                >
                  Contact Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-blue-300/15 bg-[#061126]/75 p-8 shadow-[0_0_34px_rgba(37,99,235,0.09)]">
            <h3 className="text-2xl font-semibold text-white">
              Ready To Master KoraAI?
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              Start learning today and unlock the full potential of KoraAI for
              your business.
            </p>
            <Link
              href="#"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-3 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 px-8 text-sm font-semibold text-white shadow-[0_0_28px_rgba(79,70,229,0.42)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <GraduationCap className="h-5 w-5" />
              Start Learning
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

export default NeedHelp;
