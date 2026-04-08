// Shared utility helpers for vanilla modules.

const INIT_KEY = "__familyNavigatorVanillaInitialized__";

/**
 * Query a single element.
 * @param {string} selector
 * @param {ParentNode} [root=document]
 * @returns {Element|null}
 */
export function qs(selector, root = document) {
  return root.querySelector(selector);
}

/**
 * Query multiple elements.
 * @param {string} selector
 * @param {ParentNode} [root=document]
 * @returns {Element[]}
 */
export function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

/**
 * Event binding helper with optional options.
 * @param {EventTarget} target
 * @param {string} eventName
 * @param {(event: Event) => void} handler
 * @param {boolean|AddEventListenerOptions} [options]
 * @returns {() => void} cleanup
 */
export function on(target, eventName, handler, options) {
  if (!target || typeof target.addEventListener !== "function") {
    return () => {};
  }
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler, options);
}

/**
 * Delegated event listener helper.
 * @param {Element|Document} root
 * @param {string} eventName
 * @param {string} selector
 * @param {(event: Event, matchedEl: Element) => void} handler
 * @param {boolean|AddEventListenerOptions} [options]
 * @returns {() => void} cleanup
 */
export function delegate(root, eventName, selector, handler, options) {
  const listener = (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const match = target.closest(selector);
    if (!match) return;
    if (root instanceof Element && !root.contains(match)) return;
    handler(event, match);
  };

  root.addEventListener(eventName, listener, options);
  return () => root.removeEventListener(eventName, listener, options);
}

/**
 * Toggle class with optional force.
 * @param {Element|null|undefined} el
 * @param {string} className
 * @param {boolean} [force]
 */
export function toggleClass(el, className, force) {
  if (!el) return;
  if (typeof force === "boolean") {
    el.classList.toggle(className, force);
    return;
  }
  el.classList.toggle(className);
}

/**
 * Guard against duplicate app init.
 * Returns true if init should proceed, false if already initialized.
 * @returns {boolean}
 */
export function markAppInitialized() {
  if (window[INIT_KEY]) return false;
  window[INIT_KEY] = true;
  return true;
}

/**
 * No-op-safe numeric clamp.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

/**
 * Format RUB currency without fraction digits.
 * @param {number} amount
 * @returns {string}
 */
export function formatRub(amount) {
  return Number(amount || 0).toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });
}

/**
 * Russian plural for "ребёнок".
 * @param {number} count
 * @returns {string}
 */
export function childWord(count) {
  if (count === 1) return "ребёнок";
  if (count >= 2 && count <= 4) return "ребёнка";
  return "детей";
}

/**
 * Debounce helper.
 * @template {(...args: any[]) => void} T
 * @param {T} fn
 * @param {number} wait
 * @returns {T}
 */
export function debounce(fn, wait = 100) {
  let timeoutId = null;
  return function debounced(...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), wait);
  };
}

/**
 * Throttle helper.
 * @template {(...args: any[]) => void} T
 * @param {T} fn
 * @param {number} wait
 * @returns {T}
 */
export function throttle(fn, wait = 100) {
  let last = 0;
  let pendingTimer = null;
  let pendingArgs = null;

  return function throttled(...args) {
    const now = Date.now();
    const remaining = wait - (now - last);

    if (remaining <= 0) {
      if (pendingTimer) {
        clearTimeout(pendingTimer);
        pendingTimer = null;
      }
      last = now;
      fn.apply(this, args);
      return;
    }

    pendingArgs = args;
    if (!pendingTimer) {
      pendingTimer = setTimeout(() => {
        last = Date.now();
        pendingTimer = null;
        fn.apply(this, pendingArgs);
      }, remaining);
    }
  };
}
