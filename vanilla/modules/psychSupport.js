import { qs } from "./utils.js";

/**
 * Psych support section behavior (safe mode):
 * - tab buttons only update their visual active state
 * - no panel hiding/removal
 * - specialist booking toggle buttons stay fully DOM-local
 */
export function initPsychSupport() {
  const section = qs("#psych-support");
  if (!section) return () => {};

  const cleanupFns = [];
  const bookedIds = new Set();

  const TAB_LABELS = ["Для родителей", "Для детей", "Для семьи"];
  let activeTabLabel = "Для родителей";

  const tabButtons = Array.from(section.querySelectorAll("button")).filter(
    (btn) => {
      const text = normalize(btn.textContent);
      return TAB_LABELS.some((label) => text.includes(label));
    },
  );

  if (!tabButtons.length) return () => {};

  const specialistButtons = Array.from(
    section.querySelectorAll("button"),
  ).filter((btn) => {
    const text = normalize(btn.textContent);
    return text.includes("Записаться") || text.includes("Записано");
  });

  function normalize(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function setTabButtonStyle(btn, active) {
    if (active) {
      btn.style.background = "#fff";
      btn.style.color = "#2C5F4F";
      btn.style.boxShadow = "0 2px 8px rgba(61,139,110,0.12)";
    } else {
      btn.style.background = "transparent";
      btn.style.color = "#6B7A74";
      btn.style.boxShadow = "none";
    }
  }

  function getTabLabel(btn) {
    const text = normalize(btn.textContent);
    return TAB_LABELS.find((label) => text.includes(label)) || null;
  }

  function renderTabs() {
    tabButtons.forEach((btn) => {
      const label = getTabLabel(btn);
      const active = label === activeTabLabel;
      setTabButtonStyle(btn, active);
    });
  }

  function updateBookingButton(btn, booked) {
    if (booked) {
      btn.style.background = "#3D8B6E";
      btn.style.color = "#fff";
      btn.style.border = "none";
      btn.innerHTML = '<i class="ri-check-line mr-1"></i>Записано!';
    } else {
      btn.style.background = "rgba(184,230,213,0.3)";
      btn.style.color = "#2C5F4F";
      btn.style.border = "1px solid rgba(61,139,110,0.25)";
      btn.innerHTML = '<i class="ri-calendar-line mr-1"></i>Записаться';
    }
  }

  tabButtons.forEach((btn) => {
    const handler = () => {
      const label = getTabLabel(btn);
      if (!label) return;
      activeTabLabel = label;
      renderTabs();
    };

    btn.addEventListener("click", handler);
    cleanupFns.push(() => btn.removeEventListener("click", handler));
  });

  specialistButtons.forEach((btn, index) => {
    const id = index + 1;
    btn.dataset.psBookId = String(id);

    const handler = () => {
      if (bookedIds.has(id)) bookedIds.delete(id);
      else bookedIds.add(id);
      updateBookingButton(btn, bookedIds.has(id));
    };

    btn.addEventListener("click", handler);
    cleanupFns.push(() => btn.removeEventListener("click", handler));
  });

  renderTabs();
  specialistButtons.forEach((btn, index) => {
    const id = index + 1;
    updateBookingButton(btn, bookedIds.has(id));
  });

  return () => {
    cleanupFns.forEach((off) => {
      try {
        off();
      } catch {}
    });
  };
}
