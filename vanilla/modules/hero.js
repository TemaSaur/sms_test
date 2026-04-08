import { on, qs, throttle } from "./utils.js";

/**
 * Hero section behavior:
 * - parallax effect for .hero-img on page scroll
 */
export function initHeroParallax() {
  const heroImg = qs(".hero-img");
  if (!heroImg) return () => {};

  const updateParallax = () => {
    const y = window.scrollY * 0.3;
    heroImg.style.transform = `translateY(${y}px)`;
  };

  const throttledUpdate = throttle(updateParallax, 16);

  // Set initial position so image isn't stuck with stale inline transform from snapshot HTML.
  updateParallax();

  const offScroll = on(window, "scroll", throttledUpdate, { passive: true });

  return () => {
    offScroll();
  };
}
