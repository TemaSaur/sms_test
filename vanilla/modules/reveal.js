import { qsa } from "./utils.js";

/**
 * Section reveal behavior using IntersectionObserver.
 * Targets elements with `.fade-in-section`.
 *
 * - Adds hidden classes on init (if absent)
 * - Reveals on intersection by switching to visible classes
 * - Leaves elements revealed once animated
 */
export function initRevealSections() {
  const sections = qsa(".fade-in-section");
  if (!sections.length) return () => {};

  // Ensure smooth scrolling behavior matches previous app behavior.
  document.documentElement.style.scrollBehavior = "smooth";

  // Prepare initial hidden state for all reveal sections.
  sections.forEach((section) => {
    section.classList.add("opacity-0", "translate-y-8");
    section.classList.remove("opacity-100", "translate-y-0");
  });

  // Fallback for older browsers without IntersectionObserver.
  if (typeof window.IntersectionObserver !== "function") {
    sections.forEach((section) => {
      section.classList.add("opacity-100", "translate-y-0");
      section.classList.remove("opacity-0", "translate-y-8");
    });
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        el.classList.add("opacity-100", "translate-y-0");
        el.classList.remove("opacity-0", "translate-y-8");

        // Reveal once and stop observing to reduce overhead.
        observer.unobserve(el);
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));

  return () => {
    observer.disconnect();
  };
}
