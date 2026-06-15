"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/", dropdown: false },
  {
    label: "Product",
    href: "#",
    dropdown: true,
    items: [
      { label: "Dashboard", href: "dashboard" },
      { label: "Website Builder", href: "website-builder" },
      { label: "Kora Go", href: "#changelog" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    label: "Kora Hub",
    href: "#",
    dropdown: true,
    items: [
      { label: "Templates", href: "#templates" },
      { label: "Integrations", href: "#integrations" },
      { label: "Marketplace", href: "#marketplace" },
      { label: "Community", href: "#community" },
    ],
  },
  {
    label: "Company",
    href: "#",
    dropdown: true,
    items: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl">
      <div className="flex h-20 container mx-auto items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 select-none">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-blue-600 shadow-[0_10px_30px_rgba(37,99,235,0.35)]">
            <span className="text-lg font-black leading-none text-white">K</span>
          </span>
          <span className="text-xl font-semibold text-white">Kora AI</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(link.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(link.label)}
              >
                <button
                  className={`flex h-10 items-center gap-1.5 rounded-md px-3 text-base font-medium transition-colors outline-none ${
                    openMenu === link.label
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                  aria-expanded={openMenu === link.label}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    strokeWidth={2}
                    className={`transition-transform ${
                      openMenu === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-md border border-white/10 bg-[#081126] p-2 shadow-2xl shadow-black/40 transition-all duration-150 ${
                    openMenu === link.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="absolute -top-3 left-0 h-3 w-full" />
                  {link.items?.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex rounded-md px-3 py-2.5 text-base font-medium text-slate-300 transition-colors hover:bg-blue-500/15 hover:text-white focus:bg-blue-500/15 focus:text-white focus:outline-none"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block h-10 rounded-md px-3 py-2.5 text-base font-medium leading-5 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-md px-3 py-2 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            Login
          </Link>
          <Button
            asChild
            className="h-10 rounded-md bg-blue-600 px-5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition-colors hover:bg-blue-500"
          >
            <Link href="/demo">Book a Demo</Link>
          </Button>
        </div>

        <button
          className="rounded-md p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#050b1d] px-4 pb-5 pt-3 md:hidden">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-200"
              >
                {link.label}
              </Link>
              {link.dropdown && link.items && (
                <div className="mb-2 ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                  {link.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="/login"
              className="rounded-md border border-white/10 px-4 py-2.5 text-center text-base font-medium text-slate-200"
            >
              Login
            </a>
            <a
              href="/demo"
              className="rounded-md bg-blue-600 px-4 py-2.5 text-center text-base font-semibold text-white"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
