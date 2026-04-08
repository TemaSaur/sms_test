import { markAppInitialized } from "./modules/utils.js";
import { initHeader } from "./modules/header.js";
import { initHeroParallax } from "./modules/hero.js";
import { initRevealSections } from "./modules/reveal.js";
import { initCalculator } from "./modules/calculator.js";
import { initMap } from "./modules/map.js";
import { initCommunity } from "./modules/community.js";

/**
 * Vanilla bootstrap entrypoint.
 * This replaces previous React runtime mount and wires section behaviors directly to DOM.
 */

const cleanups = [];

/**
 * Initialize all currently migrated vanilla modules.
 */
function initApp() {
  if (!markAppInitialized()) return;

  // Keep init order stable: global shell -> visual effects -> section logic.
  registerCleanup(initHeader);
  registerCleanup(initHeroParallax);
  registerCleanup(initRevealSections);
  registerCleanup(initCalculator);
  registerCleanup(initMap);
  registerCleanup(initCommunity);

  // Optional debug marker.
  window.__familyNavigatorVanilla = {
    version: "1.0.0",
    initializedAt: new Date().toISOString(),
    destroy: destroyApp,
  };
}

/**
 * Registers a module and stores its cleanup function if returned.
 * @param {() => (void | (() => void))} moduleInit
 */
function registerCleanup(moduleInit) {
  try {
    const maybeCleanup = moduleInit();
    if (typeof maybeCleanup === "function") {
      cleanups.push(maybeCleanup);
    }
  } catch (error) {
    console.error("[vanilla:init] module failed:", error);
  }
}

/**
 * Teardown hook (useful in manual tests / hot reload scenarios).
 */
function destroyApp() {
  while (cleanups.length) {
    const cleanup = cleanups.pop();
    try {
      cleanup();
    } catch (error) {
      console.error("[vanilla:cleanup] failed:", error);
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp, { once: true });
} else {
  initApp();
}

// Cleanup on full page unload.
window.addEventListener("beforeunload", destroyApp, { once: true });
