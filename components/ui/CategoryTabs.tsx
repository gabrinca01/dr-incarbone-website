"use client";

import { useState } from "react";
import type { PathologyCategory } from "@/types";

interface CategoryTabsProps {
  categories: PathologyCategory[];
}

export function CategoryTabs({ categories }: CategoryTabsProps) {
  const [activeId, setActiveId] = useState<PathologyCategory["id"]>(
    categories[0]?.id ?? "cranial",
  );

  const activeCategory =
    categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Categorie di patologie"
        className="flex flex-wrap justify-center gap-2 sm:gap-3"
      >
        {categories.map((category) => {
          const isActive = category.id === activeId;

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${category.id}`}
              id={`tab-${category.id}`}
              className={`rounded-full border px-5 py-2.5 text-xs font-medium tracking-wide transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${
                isActive
                  ? "border-accent/30 bg-accent text-white shadow-card"
                  : "border-border/80 bg-card text-muted hover:border-accent/20 hover:text-primary"
              }`}
              onClick={() => setActiveId(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {activeCategory && (
        <div
          id={`panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.id}`}
          className="premium-card mt-8 p-7 sm:mt-10 sm:p-9"
        >
          <h3 className="font-display text-xl font-medium text-primary sm:text-2xl">
            {activeCategory.title}
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.conditions.map((condition) => (
              <li
                key={condition.label}
                className={`rounded-xl border border-border/60 bg-surface px-4 py-3.5 text-sm text-primary ${
                  condition.subItems ? "sm:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {condition.label}
                </div>
                {condition.subItems && (
                  <ul className="mt-3 space-y-2 border-t border-border/50 pt-3 pl-5">
                    {condition.subItems.map((subItem) => (
                      <li
                        key={subItem}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <span
                          className="h-1 w-1 shrink-0 rounded-full bg-accent/60"
                          aria-hidden="true"
                        />
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
