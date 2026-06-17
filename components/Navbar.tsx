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
      className={`sticky top-0 z-50 max-w-full overflow-x-clip transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-card/90 shadow-[0_4px_30px_-10px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "bg-card/60 backdrop-blur-sm"
      }`}
    >
      <nav
        className="editorial-container grid w-full max-w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 sm:gap-4 sm:py-3.5 lg:py-4 xl:min-h-[5.5rem] xl:grid-cols-[minmax(0,auto)_minmax(0,1fr)_minmax(0,auto)] xl:items-center xl:gap-4 xl:py-3.5 2xl:gap-6 2xl:py-4"
        aria-label="Navigazione principale"
      >
        <a
          href="#home"
          className="block min-w-0 max-w-full justify-self-start transition-opacity duration-300 hover:opacity-80"
          aria-label="Dr. Giorgio Incarbone — Torna alla home"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            handleNavClick("#home");
          }}
        >
          <Logo variant="navbar" />
        </a>

        <ul className="hidden min-w-0 items-center justify-end gap-1 overflow-hidden xl:flex 2xl:justify-center 2xl:gap-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="whitespace-nowrap px-0.5 text-[10px] font-medium tracking-wide text-muted transition-colors duration-300 hover:text-primary 2xl:px-1 2xl:text-[12px]"
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

        <div className="flex shrink-0 items-center justify-end gap-2 justify-self-end sm:gap-3">
          <Button
            href="#contatti"
            size="sm"
            className="hidden px-4 py-2 text-[11px] xl:inline-flex 2xl:px-5 2xl:py-2.5 2xl:text-[13px]"
          >
            <span className="2xl:hidden">Consulenza</span>
            <span className="hidden 2xl:inline">Richiedi consulenza</span>
          </Button>

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
        </div>
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
