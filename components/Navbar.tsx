"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/site-data";
import { textNav, textNavMobile } from "@/lib/typography";
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
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-card/90 shadow-[0_4px_30px_-10px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "bg-card/60 backdrop-blur-sm"
      }`}
    >
      <nav
        className="editorial-container grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-2 py-3 sm:gap-3 sm:py-3.5 lg:py-4 xl:min-h-[5.5rem] xl:grid-cols-[auto_minmax(0,1fr)_auto] xl:items-center xl:gap-4 xl:py-3.5 2xl:gap-6 2xl:py-4"
        aria-label="Navigazione principale"
      >
        <a
          href="#home"
          className="block min-w-0 overflow-hidden justify-self-start transition-opacity duration-300 hover:opacity-80"
          aria-label="Dr. Giorgio Incarbone — Torna alla home"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            handleNavClick("#home");
          }}
        >
          <Logo variant="navbar" />
        </a>

        <ul className="hidden min-w-0 items-center justify-center gap-0.5 overflow-hidden xl:flex 2xl:gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className={`whitespace-nowrap px-1 ${textNav} text-muted transition-colors duration-300 hover:text-primary 2xl:px-1.5`}
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

        <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2">
          <div className="hidden shrink-0 xl:block">
            <Button href="#contatti" size="sm" className="px-4 py-2 2xl:px-5 2xl:py-2.5">
              <span className="2xl:hidden">Consulenza</span>
              <span className="hidden 2xl:inline">Richiedi consulenza</span>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-full p-2.5 text-primary transition-colors hover:bg-surface xl:hidden"
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
          className="border-t border-border/60 bg-card px-5 py-5 sm:px-6 sm:py-6 xl:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block rounded-2xl px-4 py-3.5 ${textNavMobile} text-primary transition-colors hover:bg-surface`}
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
            <li className="mt-4">
              <Button
                href="#contatti"
                className="w-full max-w-full"
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
