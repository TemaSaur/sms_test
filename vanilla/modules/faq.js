import { qs } from "./utils.js";

/**
 * FAQ section behavior:
 * - category filter chips
 * - accordion open/close
 *
 * Works against existing static snapshot markup in #faq.
 */
export function initFaq() {
  const section = qs("#faq");
  if (!section) return () => {};
  
  // Prevent double initialization
  if (section.dataset.faqInitialized === "true") return () => {};
  section.dataset.faqInitialized = "true";

  const cleanupFns = [];
  const state = {
    activeCategory: "Все",
    openId: 1,
  };

  const filterButtons = Array.from(section.querySelectorAll("[data-faq-category]"));
  const accordionRoot = section.querySelector("[data-faq-accordion]");
  const items = accordionRoot ? Array.from(accordionRoot.querySelectorAll("[data-faq-item]")) : [];

  if (!filterButtons.length || !items.length) return () => {};

  items.forEach((item, index) => {
    item.dataset.faqId = String(index + 1);

    const categoryEl = item.querySelector(".text-xs.font-semibold.uppercase");
    const category = normalize(categoryEl?.textContent || "Без категории");
    item.dataset.faqCategory = category;
  });

  function normalize(text) {
    return String(text || "").replace(/\s+/g, " ").trim();
  }

  function setFilterStyle(btn, active) {
    if (!btn) return;
    btn.style.background = active ? "#3D8B6E" : "#EEF7F3";
    btn.style.color = active ? "#fff" : "#3D8B6E";
    btn.style.border = "none";
  }

  function getCategory(item) {
    return normalize(item.dataset.faqCategory || "");
  }

  function isVisibleByCategory(item) {
    if (state.activeCategory === "Все") return true;
    return getCategory(item) === state.activeCategory;
  }

  function setExpanded(item, expanded) {
    const trigger = item.querySelector("[data-faq-trigger]");
    const dot = item.querySelector("span.mt-1.w-2.h-2.rounded-full");
    const chevronWrap = trigger?.querySelector("div.w-8.h-8");
    const chevron = trigger?.querySelector("i");
    const contentWrap = item.querySelector("div.transition-all.duration-300.overflow-hidden");

    item.style.background = expanded ? "#fff" : "#F7F4EF";
    item.style.border = expanded ? "1.5px solid #B8E6D5" : "1.5px solid transparent";

    if (dot) dot.style.opacity = expanded ? "1" : "0.4";

    if (chevronWrap) {
      chevronWrap.style.background = expanded ? "#3D8B6E" : "#E8F7F2";
      chevronWrap.style.transform = expanded ? "rotate(180deg)" : "rotate(0deg)";
    }

    if (chevron) chevron.style.color = expanded ? "#fff" : "#3D8B6E";

    if (contentWrap) {
      contentWrap.style.maxHeight = expanded ? "600px" : "0px";
    }
  }

  function renderFilters() {
    filterButtons.forEach((btn) => {
      const category = normalize(btn.getAttribute("data-faq-category") || "");
      const active = category === state.activeCategory;
      setFilterStyle(btn, active);
    });
  }

  function renderItems() {
    let firstVisibleId = null;

    items.forEach((item) => {
      const visible = isVisibleByCategory(item);
      item.style.display = visible ? "" : "none";
      if (visible && firstVisibleId == null) firstVisibleId = Number(item.dataset.faqId);
    });

    if (
      state.openId != null &&
      !items.some(
        (item) =>
          Number(item.dataset.faqId) === state.openId &&
          item.style.display !== "none",
      )
    ) {
      state.openId = firstVisibleId;
    }

    items.forEach((item) => {
      if (item.style.display === "none") return;
      const id = Number(item.dataset.faqId);
      setExpanded(item, id === state.openId);
    });
  }

  function render() {
    renderFilters();
    renderItems();
  }

  filterButtons.forEach((btn) => {
    const handler = () => {
      state.activeCategory = normalize(btn.textContent || "Все");
      render();
    };
    btn.addEventListener("click", handler);
    cleanupFns.push(() => btn.removeEventListener("click", handler));
  });

  items.forEach((item) => {
    const headerBtn = item.querySelector("button");
    if (!headerBtn) return;

    const handler = () => {
      const id = Number(item.dataset.faqId);
      state.openId = state.openId === id ? null : id;
      renderItems();
    };

    headerBtn.addEventListener("click", handler);
    cleanupFns.push(() => headerBtn.removeEventListener("click", handler));
  });

  render();

  return () => {
    cleanupFns.forEach((off) => {
      try {
        off();
      } catch {}
    });
  };
}
