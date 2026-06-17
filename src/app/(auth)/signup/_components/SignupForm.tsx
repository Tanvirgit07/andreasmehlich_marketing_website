"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  Eye,
  EyeOff,
  Globe2,
  Lock,
  Mail,
  Phone,
  Store,
  User,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const features = [
  {
    title: "AI Receptionist",
    description: "Never miss a call and capture every opportunity.",
    icon: Phone,
    bg: "bg-violet-500/15",
    color: "text-violet-300",
  },
  {
    title: "CRM & Scheduling",
    description: "Manage leads, appointments and customer relationships.",
    icon: CalendarDays,
    bg: "bg-blue-500/15",
    color: "text-blue-300",
  },
  {
    title: "Website & Marketing",
    description: "Build your website and grow your business online.",
    icon: Globe2,
    bg: "bg-purple-500/15",
    color: "text-purple-300",
  },
];

function SignupForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!acceptedTerms) {
      toast.error("Please accept the terms and privacy policy.");
      return;
    }

    if (password !== repeatPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    createUser.mutate();
  }

  const createUser = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/register-business-owner`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: fullName,
            businessName,
            email,
            password,
            confirmPassword: repeatPassword,
          }),
        }
      );

      const response = await res.json().catch(() => null);

      if (!res.ok || response?.status === false) {
        throw new Error(response?.message || "Signup failed. Please try again.");
      }

      return response;
    },
    onSuccess: (response) => {
      toast.success(response?.message || "Account created successfully.");
      router.push("/signin");
    },
    onError: (error) => {
      toast.error(
        error instanceof Error
          ? error.message
          : "Signup failed. Please try again."
      );
    },
  });

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#010616] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_44%_40%,rgba(37,99,235,0.15),transparent_30%),radial-gradient(circle_at_0%_62%,rgba(139,92,246,0.20),transparent_32%),radial-gradient(circle_at_100%_36%,rgba(168,85,247,0.18),transparent_30%)]" />

      <div className="mx-auto grid min-h-[calc(100vh-96px)] max-w-6xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <section className="max-w-lg">
          <Link href="/" className="inline-flex items-center gap-4">
            <span className="text-6xl font-black leading-none tracking-tighter">
              <span className="bg-gradient-to-br from-blue-500 to-violet-500 bg-clip-text text-transparent">
                K
              </span>
            </span>
            <span className="text-3xl font-bold tracking-wide text-white">
              KORA AI
            </span>
          </Link>

          <h1 className="mt-10 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Create Your{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              KoraAI
            </span>{" "}
            Account
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-7 text-slate-300">
            Start your{" "}
            <span className="font-semibold text-blue-400">
              3-day free trial
            </span>{" "}
            and bring your business together in one AI operating system.
          </p>

          <div className="mt-7 inline-flex items-center gap-4 rounded-xl border border-fuchsia-400/40 bg-[#061126]/70 px-5 py-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/15 text-blue-300">
              <CalendarDays className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-base font-semibold text-violet-300">
                3-Day Free Trial
              </p>
              <p className="mt-1 text-sm text-slate-400">
                No credit card required.
              </p>
            </div>
          </div>

          <div className="mt-9 space-y-5">
            {features.map(({ title, description, icon: Icon, bg, color }) => (
              <div key={title} className="flex items-center gap-4">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${bg} ${color}`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-white">{title}</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-violet-400/45 bg-[#061126]/70 p-5 shadow-[0_0_70px_rgba(37,99,235,0.18)] backdrop-blur-sm sm:p-7 lg:p-8">
          <h2 className="text-2xl font-semibold text-white">Create Account</h2>
          <p className="mt-2 text-sm text-slate-400">
            Fill in the details below to get started.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
            <div className="relative">
              <User className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Full Name"
                required
                className="h-12 w-full rounded-lg border border-blue-300/15 bg-[#0a1730]/80 px-12 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-300/35"
              />
            </div>
            <div className="relative">
              <Store className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="businessName"
                value={businessName}
                onChange={(event) => setBusinessName(event.target.value)}
                placeholder="Business Name"
                required
                className="h-12 w-full rounded-lg border border-blue-300/15 bg-[#0a1730]/80 px-12 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-300/35"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email Address"
                required
                className="h-12 w-full rounded-lg border border-blue-300/15 bg-[#0a1730]/80 px-12 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-300/35"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                required
                className="h-12 w-full rounded-lg border border-blue-300/15 bg-[#0a1730]/80 px-12 pr-12 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-300/35"
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
              <input
                type={showRepeatPassword ? "text" : "password"}
                name="confirmPassword"
                value={repeatPassword}
                onChange={(event) => setRepeatPassword(event.target.value)}
                placeholder="Repeat Password"
                required
                className="h-12 w-full rounded-lg border border-blue-300/15 bg-[#0a1730]/80 px-12 pr-12 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-300/35"
              />
              <button
                type="button"
                aria-label="Toggle repeat password visibility"
                onClick={() => setShowRepeatPassword((value) => !value)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showRepeatPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            <label className="flex items-center gap-3 text-xs text-slate-400">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                className="h-5 w-5 rounded border-blue-300/20 bg-[#0a1730] accent-blue-600"
              />
              <span>
                I agree to the{" "}
                <Link href="/legals" className="text-blue-400">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/legals" className="text-blue-400">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <button
              type="submit"
              disabled={createUser.isPending}
              className="h-12 w-full rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 text-base font-semibold text-white shadow-[0_0_34px_rgba(79,70,229,0.42)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {createUser.isPending ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link href="/signin" className="font-medium text-blue-400">
              Sign In
            </Link>
          </p>

          {/* <div className="my-5 flex items-center gap-5 text-sm text-slate-500">
            <div className="h-px flex-1 bg-blue-300/10" />
            Or continue with
            <div className="h-px flex-1 bg-blue-300/10" />
          </div> */}

          {/* <div className="grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-blue-300/15 bg-[#061126]/60 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-white"
            >
              <span className="text-xl font-black text-blue-400">G</span>
              Continue with Google
            </button>
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-blue-300/15 bg-[#061126]/60 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-white"
            >
              <span className="grid h-5 w-5 grid-cols-2 gap-0.5">
                <span className="bg-red-500" />
                <span className="bg-green-500" />
                <span className="bg-blue-500" />
                <span className="bg-yellow-400" />
              </span>
              Continue with Microsoft
            </button>
          </div> */}
        </section>

        <p className="text-center text-sm text-slate-400 lg:col-span-2">
          <Lock className="mr-2 inline h-4 w-4" />
          Your data is secure and encrypted.
        </p>
      </div>
    </main>
  );
}

export default SignupForm;
