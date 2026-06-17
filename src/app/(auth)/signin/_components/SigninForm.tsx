"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  ArrowRight,
  Cloud,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";

const trustItems = [
  {
    title: "Enterprise Security",
    description: "Your data is safe with us",
    icon: ShieldCheck,
    color: "text-blue-300",
    bg: "bg-blue-500/10",
  },
  {
    title: "99.9% Uptime",
    description: "Reliable & Always On",
    icon: Lock,
    color: "text-cyan-300",
    bg: "bg-cyan-500/10",
  },
  {
    title: "GDPR Compliant",
    description: "We respect your privacy",
    icon: Cloud,
    color: "text-sky-300",
    bg: "bg-sky-500/10",
  },
  {
    title: "24/7 Support",
    description: "We're here to help",
    icon: Users,
    color: "text-emerald-300",
    bg: "bg-emerald-500/10",
  },
];

function SigninForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }

    try {
      setIsLoading(true);

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        throw new Error(res.error);
      }

      toast.success("Login successful.");
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#010616] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_44%,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_0%_50%,rgba(37,99,235,0.24),transparent_30%),radial-gradient(circle_at_100%_50%,rgba(168,85,247,0.24),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-blue-300/10" />

      <div className="mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-6xl flex-col items-center justify-center">
        <section className="grid w-full max-w-4xl overflow-hidden rounded-2xl border border-violet-400/45 bg-[#061126]/70 shadow-[0_0_70px_rgba(37,99,235,0.18)] backdrop-blur-sm lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative overflow-hidden border-b border-blue-300/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_78%,rgba(37,99,235,0.24),transparent_30%)]" />

            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-violet-300">
              Welcome Back
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-[44px]">
              Log in to{" "}
              <span className="block bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                KoraAI
              </span>
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
              Access your dashboard, manage your business and supercharge your
              productivity with KoraAI.
            </p>

            <div className="relative mx-auto mt-8 h-48 max-w-sm">
              <div className="absolute inset-x-10 bottom-4 h-10 rounded-full border border-blue-400/45 bg-blue-500/10 shadow-[0_0_42px_rgba(37,99,235,0.65)]" />
              <div className="absolute inset-x-20 bottom-0 h-6 rounded-full bg-violet-500/20 blur-xl" />
              <div className="absolute left-1/2 top-5 -translate-x-1/2 text-[120px] font-black leading-none tracking-tighter">
                <span className="bg-gradient-to-br from-blue-400 via-blue-600 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_36px_rgba(79,70,229,0.75)]">
                  K
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl font-semibold text-white">
              Log in to your account
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Enter your credentials to access your account.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-slate-200">
                  Email Address
                </label>
                <div className="relative mt-3">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="h-12 w-full rounded-lg border border-blue-300/10 bg-[#0a1730]/80 px-12 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-300/35"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-200">
                  Password
                </label>
                <div className="relative mt-3">
                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    required
                    className="h-12 w-full rounded-lg border border-blue-300/10 bg-[#0a1730]/80 px-12 pr-14 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-300/35"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label="Toggle password visibility"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  href="/forgotpassword"
                  className="text-sm font-medium text-violet-300 hover:text-violet-200"
                >
                  Forgot your password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 text-sm font-semibold text-white shadow-[0_0_34px_rgba(79,70,229,0.42)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isLoading ? "Logging In..." : "Log In"}
                {!isLoading && <ArrowRight className="h-5 w-5" />}
              </button>
            </form>

            {/* <div className="my-5 flex items-center gap-4 text-sm text-slate-500">
              <div className="h-px flex-1 bg-blue-300/10" />
              or
              <div className="h-px flex-1 bg-blue-300/10" />
            </div> */}

            {/* <button
              type="button"
              className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-blue-300/15 bg-[#061126]/60 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-white"
            >
              <span className="text-lg font-black text-white">
                <span className="text-blue-400">G</span>
              </span>
              Continue with Google
            </button> */}

            <p className="mt-6 text-sm text-slate-400">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-medium text-violet-300">
                Sign up
              </Link>
            </p>
          </div>
        </section>

        <div className="mt-8 grid w-full max-w-5xl gap-px overflow-hidden rounded-xl border border-blue-300/10 bg-blue-300/10 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ title, description, icon: Icon, color, bg }) => (
            <div key={title} className="flex items-center gap-4 bg-[#061126]/80 px-5 py-4">
              <div
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${bg} ${color}`}
              >
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-1 text-xs text-slate-400">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-slate-500">
          © 2024 KoraAI. All rights reserved.
        </p>
      </div>
    </main>
  );
}

export default SigninForm;
