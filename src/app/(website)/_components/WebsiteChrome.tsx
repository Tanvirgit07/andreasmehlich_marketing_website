"use client";

import { usePathname } from "next/navigation";
import Footer from "@/reusable/Footer";
import Navbar from "@/reusable/Navbar";

const comingSoonRoutes = new Set([
  "/home-service",
  "/gym",
  "/dental-clinic",
  "/auto-service",
]);

function WebsiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = comingSoonRoutes.has(pathname);

  return (
    <div className="min-h-screen bg-[#010616]">
      {!hideChrome && <Navbar />}
      <main className={hideChrome ? "bg-[#010616]" : "min-h-screen bg-[#010616]"}>
        {children}
      </main>
      {!hideChrome && <Footer />}
    </div>
  );
}

export default WebsiteChrome;
