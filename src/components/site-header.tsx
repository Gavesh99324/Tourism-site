"use client";

import { useEffect, useState } from "react";

const menuItems = [
  "Holidays & Tours",
  "Success Stories",
  "About us",
  "FAQ",
  "Contact Us",
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-2 z-40 overflow-hidden rounded-2xl border border-[#e7eaf0] bg-white/95">
        <div className="flex items-center justify-between border-b border-[#edf0f4] px-4 py-3 text-[18px] font-medium md:px-6">
          <a href="mailto:info@olankatravels.com" className="truncate">
            info@olankatravels.com
          </a>
          <a href="tel:+94117358900" aria-label="Call us">
            ( +94 11 735 8900 )
          </a>
        </div>
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-2 text-[38px] leading-none">
            <span className="text-xl">🌍</span>
            <span className="text-3xl font-bold">Olanka</span>
            <span className="text-3xl font-medium text-[#2f3948]">Travels</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#quote"
              className="rounded-full bg-[#15bf61] px-5 py-2 text-base font-extrabold text-white transition hover:bg-[#10a753]"
            >
              Get a Quote
            </a>
            <button
              className="rounded-full border border-[#d7dbe4] px-3 py-2 text-xl"
              aria-label="Open main menu"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <aside
        className={`fixed inset-0 z-50 transition ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <button
          className={`absolute inset-0 bg-black/30 transition ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu overlay"
        />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-white p-6 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <p className="text-4xl font-bold">Olanka Travels</p>
            <button
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-[#d7dbe4] px-4 py-2 text-xl"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="mt-8 space-y-5 text-3xl font-medium text-[#2f3948]">
            {menuItems.map((item) => (
              <a key={item} className="block" href="#">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
