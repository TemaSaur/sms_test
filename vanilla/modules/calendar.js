import { qs } from "./utils.js";

export function initCalendar() {
  const section = qs("#calendar");
  if (!section) return () => {};

  if (section.dataset.calendarInitialized === "true") return () => {};
  section.dataset.calendarInitialized = "true";

  const cleanupFns = [];
  const registeredIds = new Set();

  const state = { activeFilter: "all" };

  const filterButtons = Array.from(
    section.querySelectorAll("[data-calendar-filter]"),
  );

  // Try to get cards by data-calendar-type, fallback to a structural selector
  let cards = Array.from(section.querySelectorAll("[data-calendar-type]"));
  if (!cards.length) {
    // fallback: look for typical event card containers (adjust if needed)
    cards = Array.from(
      section.querySelectorAll(".bg-white.rounded-2xl.shadow-sm"),
    );
  }
  if (!cards.length) return () => {};

  // Assign stable IDs and detect type from badge
  cards.forEach((card, index) => {
    card.dataset.calendarId = String(index + 1);

    const typeBadge = card.querySelector(".text-xs.font-semibold.rounded-full");
    const typeText = normalize(typeBadge?.textContent || "");

    if (typeText.includes("Онлайн")) card.dataset.calendarType = "online";
    else if (typeText.includes("Офлайн")) card.dataset.calendarType = "offline";
    else card.dataset.calendarType = "all";
  });

  function normalize(text) {
    return String(text || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getFilterFromButton(btn) {
    const text = normalize(btn.textContent || "");
    if (text.includes("Онлайн")) return "online";
    if (text.includes("Офлайн")) return "offline";
    return "all";
  }

  function setFilterButtonStyle(button, isActive) {
    if (!button) return;
    button.style.background = isActive ? "#3D8B6E" : "transparent";
    button.style.color = isActive ? "#fff" : "#4A6B5E";
    button.style.border = "none";
  }

  // FIXED: find button by Russian text (both states)
  function getRegisterButton(card) {
    const buttons = card.querySelectorAll("button");
    return Array.from(buttons).find((btn) => {
      const text = btn.textContent || "";
      return (
        text.includes("Зарегистрироваться") || text.includes("Вы записаны")
      );
    });
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
      button.innerHTML = "Зарегистрироваться";
    }
  }

  function cardMatchesFilter(card) {
    if (state.activeFilter === "all") return true;
    const cardType = card.dataset.calendarType || "online";
    return cardType === state.activeFilter;
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

  // Filter events
  filterButtons.forEach((btn) => {
    const handler = () => {
      state.activeFilter = getFilterFromButton(btn);
      render();
    };
    btn.addEventListener("click", handler);
    cleanupFns.push(() => btn.removeEventListener("click", handler));
  });

  // Toggle events (now the button will be found)
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
