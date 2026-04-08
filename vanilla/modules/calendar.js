import { qs } from "./utils.js";

/**
 * Calendar section behavior:
 * - filter chips: Все / Онлайн / Офлайн
 * - per-event registration toggle:
 *   "Зарегистрироваться" <-> "Вы записаны"
 *
 * Works directly against snapshot HTML in #calendar.
 */
export function initCalendar() {
  const section = qs("#calendar");
  if (!section) return () => {};

  const cleanupFns = [];
  const registeredIds = new Set();

  const state = {
    activeFilter: "all", // all | online | offline
  };

  // Filter row
  const filterRow = findFilterRow(section);
  const filterButtons = filterRow ? Array.from(filterRow.querySelectorAll("button")) : [];

  // Event cards grid
  const cardsGrid = section.querySelector(".grid.grid-cols-1.gap-5.lg\\:grid-cols-3.md\\:grid-cols-2");
  const cards = cardsGrid
    ? Array.from(cardsGrid.children).filter((el) => el instanceof HTMLElement)
    : [];

  if (!filterButtons.length || !cards.length) return () => {};

  // Assign stable IDs + detect type from badge text.
  cards.forEach((card, index) => {
    card.dataset.calendarId = String(index + 1);

    const typeBadge = card.querySelector(".text-xs.font-semibold.rounded-full");
    const typeText = normalize(typeBadge?.textContent || "");

    if (typeText.includes("Онлайн")) card.dataset.calendarType = "online";
    else if (typeText.includes("Офлайн")) card.dataset.calendarType = "offline";
    else card.dataset.calendarType = "all";
  });

  function normalize(text) {
    return String(text || "").replace(/\s+/g, " ").trim();
  }

  function getFilterFromButton(btn) {
    const text = normalize(btn.textContent || "");
    if (text.includes("Онлайн")) return "online";
    if (text.includes("Офлайн")) return "offline";
    return "all";
  }

  function setFilterButtonStyle(button, isActive) {
    button.style.background = isActive ? "#3D8B6E" : "transparent";
    button.style.color = isActive ? "#fff" : "#4A6B5E";
    button.style.border = "none";
  }

  function getRegisterButton(card) {
    return card.querySelector("button");
  }

  function updateRegisterButton(button, isRegistered) {
    if (!button) return;

    if (isRegistered) {
      button.style.background = "#E8F7F2";
      button.style.color = "#3D8B6E";
      button.style.border = "1px solid #3D8B6E";
      button.innerHTML = '<i class="ri-check-line mr-1.5"></i>Вы записаны';
    } else {
      button.style.background = "linear-gradient(135deg, #3D8B6E, #2C5F4F)";
      button.style.color = "#fff";
      button.style.border = "none";
      button.textContent = "Зарегистрироваться";
    }
  }

  function cardMatchesFilter(card) {
    if (state.activeFilter === "all") return true;
    return card.dataset.calendarType === state.activeFilter;
  }

  function renderFilters() {
    filterButtons.forEach((btn) => {
      const filter = getFilterFromButton(btn);
      setFilterButtonStyle(btn, filter === state.activeFilter);
    });
  }

  function renderCards() {
    cards.forEach((card) => {
      const id = Number(card.dataset.calendarId || "0");
      const visible = cardMatchesFilter(card);

      card.style.display = visible ? "" : "none";

      const registerBtn = getRegisterButton(card);
      updateRegisterButton(registerBtn, registeredIds.has(id));
    });
  }

  function render() {
    renderFilters();
    renderCards();
  }

  // Bind filter events
  filterButtons.forEach((btn) => {
    const handler = () => {
      state.activeFilter = getFilterFromButton(btn);
      render();
    };

    btn.addEventListener("click", handler);
    cleanupFns.push(() => btn.removeEventListener("click", handler));
  });

  // Bind register toggle events
  cards.forEach((card) => {
    const id = Number(card.dataset.calendarId || "0");
    const btn = getRegisterButton(card);
    if (!btn || !id) return;

    const handler = () => {
      if (registeredIds.has(id)) registeredIds.delete(id);
      else registeredIds.add(id);

      updateRegisterButton(btn, registeredIds.has(id));
    };

    btn.addEventListener("click", handler);
    cleanupFns.push(() => btn.removeEventListener("click", handler));
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

function findFilterRow(section) {
  // The row is the inline-flex rounded-full group next to heading in #calendar.
  return (
    section.querySelector(".p-1.inline-flex.rounded-full.md\\:self-auto.self-start") ||
    section.querySelector(".inline-flex.rounded-full") ||
    null
  );
}
