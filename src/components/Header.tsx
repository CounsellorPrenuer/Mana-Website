"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react";
import Logo from "./Logo";
import Button from "./ui/Button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type NavLink = (typeof NAV_LINKS)[number];

function navDisplayLabel(link: NavLink) {
  return "navLabel" in link && link.navLabel ? link.navLabel : link.label;
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-white/90 shadow-xs backdrop-blur-lg"
          : "border-transparent bg-white"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-300 sm:px-8 lg:gap-8 lg:px-10",
          scrolled ? "min-h-[4rem] py-1.5" : "min-h-[5.25rem] py-2"
        )}
      >
        <Logo />

        <div className="hidden flex-1 items-center justify-end gap-6 lg:flex xl:gap-8">
          <nav className="flex items-center gap-0.5 xl:gap-1.5">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(true)}
                  onMouseLeave={() => setOpenDropdown(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-lavender hover:text-navy xl:px-4",
                      pathname.startsWith("/about") ||
                        pathname.startsWith("/why-mana") ||
                        pathname.startsWith("/who-should-join") ||
                        pathname.startsWith("/certification")
                        ? "bg-lavender text-navy"
                        : "text-slate"
                    )}
                  >
                    {navDisplayLabel(link)}
                    <ChevronDown className="h-3.5 w-3.5 shrink-0" />
                  </button>
                  <div
                    className={cn(
                      "absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2 transition-all duration-200",
                      openDropdown ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    )}
                  >
                    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white p-2 shadow-soft-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-lavender"
                        >
                          <div className="text-sm font-semibold text-navy">{child.label}</div>
                          <div className="mt-0.5 text-xs text-slate">{child.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-lavender hover:text-navy xl:px-4",
                    pathname === link.href ? "bg-lavender text-navy" : "text-slate"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <a
            href={SITE.parentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 whitespace-nowrap text-sm font-medium text-[#34306f]/80 transition-colors hover:text-navy xl:flex"
          >
            Visit Mentoria
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <Button href="/orientation" size="md" showArrow={false} className="shrink-0 whitespace-nowrap">
            {SITE.orientationCta}
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-navy lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-navy/10 bg-white transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[calc(100vh-5.25rem)] overflow-y-auto" : "max-h-0 border-t-0"
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-navy"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-3 flex flex-col border-l-2 border-lavender pl-3">
                  {link.children.slice(1).map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-slate"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={SITE.parentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#34306f]/80"
          >
            Visit Mentoria <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Button
            href="/orientation"
            size="md"
            showArrow={false}
            className="mt-3 justify-center"
            onClick={() => setMobileOpen(false)}
          >
            {SITE.orientationCta}
          </Button>
        </div>
      </div>
    </header>
  );
}
