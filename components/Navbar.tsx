"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/site-data";
import { scrollToSection, updateHeaderHeightVariable } from "@/lib/scroll-to-section";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    updateHeaderHeightVariable();
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-card/90 shadow-[0_4px_30px_-10px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "bg-card/60 backdrop-blur-sm"
      }`}
    >
      <nav
        className="editorial-container flex min-h-[5.25rem] items-center justify-between gap-4 py-3 sm:min-h-[5.75rem] sm:py-3.5 md:min-h-[6.25rem] lg:min-h-[7.25rem] lg:py-4 xl:min-h-[8rem] xl:grid xl:grid-cols-[minmax(0,auto)_minmax(0,1fr)] xl:items-center xl:gap-10 2xl:min-h-[8.5rem] 2xl:gap-12"
        aria-label="Navigazione principale"
      >
        <a
          href="#home"
          className="block max-w-[58%] shrink-0 transition-opacity duration-300 hover:opacity-80 sm:max-w-none"
          aria-label="Dr. Giorgio Incarbone — Torna alla home"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            handleNavClick("#home");
          }}
        >
          <Logo variant="navbar" />
        </a>

        <div className="hidden min-w-0 items-center justify-end gap-5 xl:flex 2xl:gap-6">
          <ul className="flex min-w-0 items-center gap-3 2xl:gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="whitespace-nowrap text-[12px] font-medium tracking-wide text-muted transition-colors duration-300 hover:text-primary 2xl:text-[13px]"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button href="#contatti" size="sm" className="shrink-0">
            Richiedi consulenza
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-full p-2 text-primary transition-colors hover:bg-surface xl:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border/60 bg-card px-6 py-6 xl:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-2xl px-4 py-3.5 text-base font-medium text-primary transition-colors hover:bg-surface"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4 px-4">
              <Button
                href="#contatti"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Richiedi consulenza
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
