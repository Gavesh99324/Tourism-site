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
  const quoteHref = pathname === "/tours" ? "/tours#quote" : "/#quote";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 overflow-hidden border border-[#e7eaf0] bg-white/95">
        <div className="flex items-center justify-between border-b border-[#edf0f4] px-4 py-3 text-[16px] font-medium sm:text-[18px] md:px-6">
          <a href="mailto:info@olankatravels.com" className="truncate">
            info@olankatravels.com
          </a>
          <a
            href="tel:+94117358900"
            aria-label="Call us"
            className="inline-flex min-h-10 min-w-10 items-center justify-center"
          >
            📞
          </a>
        </div>
        <div className="flex items-center justify-between border-b border-[#edf0f4] px-4 py-3 md:px-6">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-[24px] leading-none sm:text-[30px] lg:text-[38px]"
          >
            <span className="text-base sm:text-xl">🌍</span>
            <span className="text-[20px] font-bold sm:text-[30px] xl:text-4xl">
              Olanka
            </span>
            <span className="text-[20px] font-medium text-[#2f3948] sm:text-[30px] xl:text-4xl">
              Travels
            </span>
          </Link>

          <nav className="hidden items-center gap-4 pl-4 xl:gap-8 xl:pl-8 lg:flex">
            {desktopNavItems.map((item) => {
              const isActive =
                item.href === "/tours" ? pathname === "/tours" : false;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`whitespace-nowrap border-b-4 px-1 py-4 text-[16px] font-medium transition xl:text-[20px] ${isActive ? "border-[#3d82f0] text-[#101722]" : "border-transparent text-[#101722] hover:border-[#d4ddf6]"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:gap-6 lg:flex">
            <Link
              href={quoteHref}
              className="whitespace-nowrap rounded-full bg-[#1fba5f] px-8 py-3 text-[16px] font-extrabold text-white transition hover:bg-[#17a551] xl:px-12 xl:py-4 xl:text-[20px]"
            >
              Get a Quote
            </Link>
            <Link
              href={quoteHref}
              className="whitespace-nowrap text-[16px] font-bold text-[#101722] xl:text-[20px]"
            >
              Contact Us
            </Link>
            <span className="whitespace-nowrap rounded-2xl border border-[#d7dbe4] px-3 py-2 text-[16px] xl:px-4 xl:text-[20px]">
              🇱🇰 LKR
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={quoteHref}
              className="inline-flex min-h-10 items-center rounded-full bg-[#15bf61] px-4 py-2 text-sm font-extrabold text-white transition hover:bg-[#10a753] sm:px-5 sm:text-base lg:hidden"
            >
              Get a Quote
            </Link>
            <button
              className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-[#d7dbe4] px-3 py-2 text-lg sm:text-xl lg:hidden"
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
            <p className="text-2xl font-bold sm:text-4xl">Olanka Travels</p>
            <button
              onClick={() => setMenuOpen(false)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#d7dbe4] px-4 py-2 text-xl"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <nav className="mt-8 space-y-5 text-2xl font-medium text-[#2f3948] sm:text-3xl">
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
