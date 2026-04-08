import { qs } from "./utils.js";

/**
 * Courses section behavior:
 * - category filter buttons
 * - per-course enrollment toggle
 *
 * Works against the existing static HTML snapshot in #courses.
 */
export function initCourses() {
  const section = qs("#courses");
  if (!section) return () => {};

  const cleanupFns = [];
  const enrolledCourseIds = new Set();

  // 1) Filter chips row (first "flex flex-wrap gap-2 mb-8" inside #courses)
  const filterRow = section.querySelector(".flex.gap-2.flex-wrap.mb-8");
  if (!filterRow) return () => {};

  const filterButtons = Array.from(filterRow.querySelectorAll("button"));
  if (!filterButtons.length) return () => {};

  // 2) Course cards grid (contains .lg:grid-cols-4)
  const cardsGrid = section.querySelector(".grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4");
  if (!cardsGrid) return () => {};

  const cards = Array.from(cardsGrid.children).filter(
    (el) => el instanceof HTMLElement,
  );

  // Assign deterministic IDs to cards for enrollment state.
  cards.forEach((card, index) => {
    card.dataset.courseId = String(index + 1);
  });

  const state = {
    activeCategory: normalizeCategory(filterButtons[0].textContent || "Все"),
  };

  function setFilterButtonStyle(button, isActive) {
    if (isActive) {
      button.style.background = "#3D8B6E";
      button.style.color = "#fff";
      button.style.border = "1px solid #3D8B6E";
    } else {
      button.style.background = "#B8E6D5";
      button.style.color = "#4A6B5E";
      button.style.border = "1px solid #B8E6D5";
    }
  }

  function normalizeCategory(text) {
    return String(text || "").replace(/\s+/g, " ").trim();
  }

  function cardMatchesCategory(card, activeCategory) {
    if (activeCategory === "Все") return true;

    const badge = card.querySelector(".absolute.top-3.left-3 span");
    const badgeText = normalizeCategory(badge?.textContent || "");
    return badgeText === activeCategory;
  }

  function extractPriceFromCard(card) {
    const priceButton = Array.from(card.querySelectorAll("button")).find((btn) =>
      /·/.test(btn.textContent || ""),
    );
    if (!priceButton) return null;

    const text = (priceButton.textContent || "").trim();
    const parts = text.split("·");
    if (parts.length < 2) return null;
    return parts[1].trim();
  }

  function getPrimaryActionButton(card) {
    return card.querySelector("div.flex.flex-col.flex-1.p-5 > button:last-of-type");
  }

  function updateEnrollmentButton(card) {
    const courseId = Number(card.dataset.courseId || "0");
    const btn = getPrimaryActionButton(card);
    if (!btn || !courseId) return;

    const isEnrolled = enrolledCourseIds.has(courseId);
    const isFree = /Бесплатно/.test(card.textContent || "");
    const price = extractPriceFromCard(card);

    if (isEnrolled) {
      btn.style.background = "#E8F7F2";
      btn.style.color = "#3D8B6E";
      btn.style.border = "1px solid #3D8B6E";
      btn.innerHTML = '<i class="ri-check-line mr-1.5"></i>Записан';
      return;
    }

    btn.style.background = "linear-gradient(135deg, #3D8B6E, #2C5F4F)";
    btn.style.color = "#fff";
    btn.style.border = "none";

    if (isFree) {
      btn.textContent = "Начать бесплатно";
    } else if (price) {
      btn.textContent = `Записаться · ${price}`;
    } else {
      btn.textContent = "Записаться";
    }
  }

  function bindEnrollmentHandlers() {
    cards.forEach((card) => {
      const btn = getPrimaryActionButton(card);
      if (!btn) return;

      const handler = () => {
        const courseId = Number(card.dataset.courseId || "0");
        if (!courseId) return;

        if (enrolledCourseIds.has(courseId)) enrolledCourseIds.delete(courseId);
        else enrolledCourseIds.add(courseId);

        updateEnrollmentButton(card);
      };

      btn.addEventListener("click", handler);
      cleanupFns.push(() => btn.removeEventListener("click", handler));
    });
  }

  function renderFilters() {
    filterButtons.forEach((btn) => {
      const category = normalizeCategory(btn.textContent || "");
      const active = category === state.activeCategory;
      setFilterButtonStyle(btn, active);
    });
  }

  function renderCardsVisibility() {
    cards.forEach((card) => {
      const visible = cardMatchesCategory(card, state.activeCategory);
      card.style.display = visible ? "" : "none";
    });
  }

  function renderEnrollmentButtons() {
    cards.forEach((card) => updateEnrollmentButton(card));
  }

  function renderAll() {
    renderFilters();
    renderCardsVisibility();
    renderEnrollmentButtons();
  }

  // Filter handlers
  filterButtons.forEach((btn) => {
    const handler = () => {
      state.activeCategory = normalizeCategory(btn.textContent || "Все");
      renderAll();
    };
    btn.addEventListener("click", handler);
    cleanupFns.push(() => btn.removeEventListener("click", handler));
  });

  bindEnrollmentHandlers();
  renderAll();

  return () => {
    cleanupFns.forEach((off) => {
      try {
        off();
      } catch {}
    });
  };
}
