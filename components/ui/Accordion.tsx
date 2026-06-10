"use client";

import { useState } from "react";
import type { FAQItem } from "@/types";

interface AccordionProps {
  items: FAQItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="premium-card divide-y divide-border/80 overflow-hidden rounded-3xl">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-300 hover:bg-surface/60 sm:px-7 sm:py-6"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-display text-lg font-medium text-primary sm:text-xl">
                  {item.question}
                </span>
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-all duration-500 ${
                    isOpen
                      ? "rotate-45 border-accent/30 bg-accent/[0.06]"
                      : "bg-surface"
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <path
                      d="M12 6v12M6 12h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-6 pb-6 sm:px-7 sm:pb-7"
            >
              <p className="text-sm leading-[1.75] text-muted sm:text-[15px]">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
