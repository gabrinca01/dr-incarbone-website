const SCROLL_GAP = 20;
const READABILITY_OFFSET = 48;

function getHeaderOffset(): number {
  const header = document.getElementById("site-header");
  return (header?.offsetHeight ?? 80) + SCROLL_GAP;
}

function resolveScrollTarget(id: string): HTMLElement | null {
  const element = document.getElementById(id);
  if (!element) return null;

  if (element.tagName === "SECTION" || element.tagName === "MAIN") {
    const anchor = element.querySelector<HTMLElement>("[data-scroll-target]");
    if (anchor) return anchor;

    const heading = element.querySelector<HTMLElement>("h1, h2");
    if (heading) return heading;
  }

  return element;
}

function scrollToElement(
  target: HTMLElement,
  behavior: ScrollBehavior,
  extraOffset = 0,
) {
  const offset = getHeaderOffset() + extraOffset;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior,
  });
}

export function scrollToSection(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.replace(/^#/, "");
  if (!id) return;

  if (id === "home") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const section = document.getElementById(id);
  if (section) {
    const scrollTarget = section.querySelector<HTMLElement>("[data-scroll-target]");
    if (scrollTarget) {
      scrollToElement(scrollTarget, behavior, READABILITY_OFFSET);
      return;
    }
  }

  const target = resolveScrollTarget(id);
  if (!target) return;

  scrollToElement(target, behavior);
}

export function updateHeaderHeightVariable() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const height = header.offsetHeight;
  document.documentElement.style.setProperty("--header-height", `${height}px`);
}
