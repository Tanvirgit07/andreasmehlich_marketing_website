"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
  // image_fc147c.png এর কলাম ভিত্তিক নেভিগেশন লিংক ডাটা
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "AI Dashboard", href: "#" },
        { label: "Website Builder", href: "#" },
        { label: "Kora Go", href: "#" },
        { label: "Pricing", href: "#" },
      ],
    },
    {
      title: "Kora Hub",
      links: [
        { label: "Kora Hub", href: "#" },
        { label: "Use Cases", href: "#" },
        { label: "Tutorials", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Search", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help Center", href: "help-center" },
        { label: "Impressum", href: "impressum" },
        { label: "Privacy Policy", href: "legals" },
        { label: "Terms of Service", href: "#" },
        { label: "DPA / AVV", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ];

  // সোশ্যাল মিডিয়া আইকন ডাটা
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="w-full bg-[#00091E] text-white px-6 py-16 md:px-12 lg:px-20 border-t border-zinc-900/40">
      <div className="mx-auto container">
        {/* Responsive Grid Layout Container */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12">
          <div className="flex flex-col items-start space-y-5 lg:col-span-4">
            {/* Brand Logo matching image_fc147c.png */}
            <div className="flex items-center gap-3 group">
              {/* Custom SVG Logo Icon identical to image profile */}
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 text-white font-black text-sm shadow-[0_2px_10px_rgba(37,99,235,0.3)]">
                K
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                KoraAI
              </span>
            </div>

            {/* Brand Paragraph Text */}
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400 font-normal">
              The AI Operating System for local businesses. All-in-one platform
              to automate, manage, and grow your business with AI.
            </p>

            {/* Social Icons Row with Rounded Background Circles */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800/60 bg-[#020b24]/60 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-[#031133] transition-all duration-200"
                  >
                    <IconComponent className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT SIDE: NAVIGATION LINKS COLUMNS (Takes 8 Cols) ================= */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8 lg:pl-8">
            {footerLinks.map((group, groupIdx) => (
              <div key={groupIdx} className="flex flex-col space-y-4">
                {/* Column Title */}
                <h3 className="text-sm font-bold tracking-wider text-white">
                  {group.title}
                </h3>

                {/* Links List */}
                <ul className="flex flex-col space-y-2.5">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-400 hover:text-white font-normal transition-colors duration-200 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
