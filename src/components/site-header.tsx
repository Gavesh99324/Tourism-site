"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const desktopNavItems = [
  { label: "Holidays & Tours", href: "/tours" },
  { label: "Success Stories", href: "/#success" },
  { label: "About us", href: "/#about" },
  { label: "FAQ", href: "/tours#faq" },
];

const mobileNavItems = [
  { label: "Home", href: "/" },
  { label: "Holidays & Tours", href: "/tours" },
  { label: "Success Stories", href: "/#success" },
  { label: "About us", href: "/#about" },
  { label: "FAQ", href: "/tours#faq" },
  { label: "Contact Us", href: "/#quote" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 overflow-hidden border border-[#e7eaf0] bg-white/95">
        <div className="flex items-center justify-between border-b border-[#edf0f4] px-4 py-3 text-[18px] font-medium md:px-6">
          <a href="mailto:info@olankatravels.com" className="truncate">
            info@olankatravels.com
          </a>
          <a href="tel:+94117358900" aria-label="Call us">
            📞
          </a>
        </div>
        <div className="flex items-center justify-between border-b border-[#edf0f4] px-4 py-3 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-[38px] leading-none"
          >
            <span className="text-xl">🌍</span>
            <span className="text-3xl font-bold">Olanka</span>
            <span className="text-3xl font-medium text-[#2f3948]">Travels</span>
          </Link>

          <nav className="hidden items-center gap-8 pl-8 lg:flex">
            {desktopNavItems.map((item) => {
              const isActive =
                item.href === "/tours" ? pathname === "/tours" : false;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`border-b-4 px-1 py-4 text-[20px] font-medium transition ${isActive ? "border-[#3d82f0] text-[#101722]" : "border-transparent text-[#101722] hover:border-[#d4ddf6]"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href={pathname === "/tours" ? "#quote" : "#quote"}
              className="rounded-full bg-[#1fba5f] px-12 py-4 text-[20px] font-extrabold text-white transition hover:bg-[#17a551]"
            >
              Get a Quote
            </Link>
            <Link
              href="#quote"
              className="text-[20px] font-bold text-[#101722]"
            >
              Contact Us
            </Link>
            <span className="rounded-2xl border border-[#d7dbe4] px-4 py-2 text-[20px]">
              🇱🇰 LKR
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#quote"
              className="rounded-full bg-[#15bf61] px-5 py-2 text-base font-extrabold text-white transition hover:bg-[#10a753] lg:hidden"
            >
              Get a Quote
            </Link>
            <button
              className="rounded-full border border-[#d7dbe4] px-3 py-2 text-xl lg:hidden"
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
            {mobileNavItems.map((item) => (
              <Link
                key={item.label}
                className="block"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
