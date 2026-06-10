"use client";

import { useEffect } from "react";
import { scrollToSection, updateHeaderHeightVariable } from "@/lib/scroll-to-section";

export function SmoothScroll() {
  useEffect(() => {
    const syncHeaderHeight = () => updateHeaderHeightVariable();

    syncHeaderHeight();
    window.addEventListener("resize", syncHeaderHeight);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(syncHeaderHeight)
        : null;

    const header = document.getElementById("site-header");
    if (header && resizeObserver) {
      resizeObserver.observe(header);
    }

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      if (!document.getElementById(id)) return;

      event.preventDefault();
      scrollToSection(href);
    };

    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("resize", syncHeaderHeight);
      resizeObserver?.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
