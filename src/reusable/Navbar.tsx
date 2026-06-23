"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { signOut, useSession } from "next-auth/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/", dropdown: false },
  {
    label: "Product",
    href: "#",
    dropdown: true,
    items: [
      { label: "Dashboard", href: "dashboard" },
      { label: "Website Builder", href: "website-builder" },
      { label: "Kora Go", href: "kora-go" },
      { label: "Pricing", href: "pricing" },
    ],
  },
  {
    label: "Kora Hub",
    href: "#",
    dropdown: true,
    items: [
      { label: "Kora Hub", href: "kora-hub" },
      { label: "Use Cases", href: "use-cases" },
      { label: "Tutorials", href: "tutorials" },
    ],
  }, 
  {
    label: "Company",
    href: "#",
    dropdown: true,
    items: [
      { label: "About us", href: "about-us" },
      { label: "Contact", href: "contact" },
      { label: "Search", href: "search" },
    ],
  },
];

const normalizeHref = (href: string) => {
  if (href === "#") return href;
  return href.startsWith("/") ? href : `/${href}`;
};

const isRouteActive = (pathname: string, href: string) => {
  const normalizedHref = normalizeHref(href);
  if (normalizedHref === "#") return false;
  if (normalizedHref === "/") return pathname === "/";
  return pathname === normalizedHref || pathname.startsWith(`${normalizedHref}/`);
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const closeMobileMenu = () => setMobileOpen(false);
  const session = useSession();
  const user = session?.data?.user;
  const userName = user?.name || user?.email || "User";
  const userInitial = userName.charAt(0).toUpperCase();
  const isLoggedIn = session.status === "authenticated" && Boolean(user);
  const handleLogout = () => {
    closeMobileMenu();
    signOut({ callbackUrl: "/" });
  };

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
          {navLinks.map((link) => {
            const isActive =
              isRouteActive(pathname, link.href) ||
              Boolean(link.items?.some((item) => isRouteActive(pathname, item.href)));

            return link.dropdown ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(link.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(link.label)}
              >
                <button
                  className={cn(
                    "flex h-10 items-center gap-1.5 rounded-md px-3 text-base font-medium transition-colors outline-none",
                    isActive
                      ? "bg-blue-500/15 text-white"
                      : openMenu === link.label
                        ? "bg-white/10 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )}
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
                  {link.items?.map((item) => {
                    const isItemActive = isRouteActive(pathname, item.href);

                    return (
                      <Link
                        key={item.label}
                        href={normalizeHref(item.href)}
                        className={cn(
                          "flex rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-blue-500/15 hover:text-white focus:bg-blue-500/15 focus:text-white focus:outline-none",
                          isItemActive
                            ? "bg-blue-500/15 text-white"
                            : "text-slate-300"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={normalizeHref(link.href)}
                  className={cn(
                    "block h-10 rounded-md px-3 py-2.5 text-base font-medium leading-5 transition-colors hover:bg-white/5 hover:text-white",
                    isActive ? "bg-blue-500/15 text-white" : "text-slate-300"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <div className="group relative">
              <button className="inline-flex h-10 items-center gap-3 rounded-md border border-blue-300/10 bg-white/5 px-3 text-base font-medium text-slate-200 transition-colors hover:border-blue-300/25 hover:bg-white/10 hover:text-white">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-[0_0_18px_rgba(37,99,235,0.35)]">
                  {userInitial}
                </span>
                <span className="max-w-28 truncate">{userName}</span>
                <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-hover:rotate-180" />
              </button>

              <div className="invisible absolute right-0 top-full mt-3 w-44 translate-y-1 rounded-md border border-white/10 bg-[#081126] p-2 opacity-0 shadow-2xl shadow-black/40 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="absolute -top-3 left-0 h-3 w-full" />
                <Link
                  href="/pricing"
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-blue-500/15 hover:text-white"
                >
                  Pricing
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="block w-full rounded-md px-3 py-2.5 text-left text-sm font-medium text-slate-300 transition-colors hover:bg-blue-500/15 hover:text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              href="/signin"
              className="rounded-md px-3 py-2 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              Login
            </Link>
          )}
          <Button
            asChild
            className="h-10 rounded-md bg-blue-600 px-5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition-colors hover:bg-blue-500"
          >
            <Link href="/pricing">Book a Demo</Link>
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
          <ScrollArea className="max-h-[calc(100vh-6.5rem)] pr-2">
            {navLinks.map((link) => {
              const isActive =
                isRouteActive(pathname, link.href) ||
                Boolean(link.items?.some((item) => isRouteActive(pathname, item.href)));

              return (
                <div key={link.label}>
                  {!link.dropdown && (
                    <Link
                      href={normalizeHref(link.href)}
                      onClick={closeMobileMenu}
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-white/5 hover:text-white",
                        isActive ? "bg-blue-500/15 text-white" : "text-slate-200"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                  {link.dropdown && (
                    <div
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-base font-medium",
                        isActive ? "text-white" : "text-slate-200"
                      )}
                    >
                      {link.label}
                    </div>
                  )}
                  {link.dropdown && link.items && (
                    <div className="mb-2 ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                      {link.items.map((item) => {
                        const isItemActive = isRouteActive(pathname, item.href);

                        return (
                          <Link
                            key={item.label}
                            href={normalizeHref(item.href)}
                            onClick={closeMobileMenu}
                            className={cn(
                              "block rounded-md px-3 py-2 text-base transition-colors hover:bg-white/5 hover:text-white",
                              isItemActive
                                ? "bg-blue-500/15 text-white"
                                : "text-slate-400"
                            )}
                          >
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="mt-4 flex flex-col gap-2">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center justify-center gap-3 rounded-md border border-white/10 px-4 py-2.5 text-center text-base font-medium text-slate-200">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {userInitial}
                    </span>
                    <span className="max-w-40 truncate">{userName}</span>
                  </div>
                  <Link
                    href="/pricing"
                    onClick={closeMobileMenu}
                    className={cn(
                      "rounded-md border border-white/10 px-4 py-2.5 text-center text-base font-medium transition-colors hover:bg-white/5 hover:text-white",
                      isRouteActive(pathname, "/pricing")
                        ? "bg-blue-500/15 text-white"
                        : "text-slate-200"
                    )}
                  >
                    Pricing
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="rounded-md border border-white/10 px-4 py-2.5 text-center text-base font-medium text-slate-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/signin"
                  onClick={closeMobileMenu}
                  className={cn(
                    "rounded-md border border-white/10 px-4 py-2.5 text-center text-base font-medium transition-colors hover:bg-white/5 hover:text-white",
                    isRouteActive(pathname, "/signin")
                      ? "bg-blue-500/15 text-white"
                      : "text-slate-200"
                  )}
                >
                  Login
                </Link>
              )}
              <Link
                href="/pricing"
                onClick={closeMobileMenu}
                className="rounded-md bg-blue-600 px-4 py-2.5 text-center text-base font-semibold text-white"
              >
                Book a Demo
              </Link>
            </div>
          </ScrollArea>
        </div>
      )}
    </nav>
  );
}
