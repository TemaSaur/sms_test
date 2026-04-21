import { CALCULATOR_BENEFITS, CALCULATOR_REGIONS } from "./data.js";
import { openFamilyModal } from "./modal.js";
import { childWord, clamp, formatRub, qs, on } from "./utils.js";

/**
 * Calculator module (vanilla rewrite of former React behavior):
 * - region select
 * - children +/- (1..6)
 * - housing subsidy yes/no toggle
 * - details show/hide
 * - total + line items recomputation
 */
export function initCalculator() {
  const section = qs("#calculator");
  if (!section) return () => {};

  // Prevent double initialization
  if (section.dataset.calculatorInitialized === "true") return () => {};
  section.dataset.calculatorInitialized = "true";

  const state = {
    region: "moscow",
    children: 1,
    housing: false,
    detailsOpen: false,
  };

  // --- locate existing DOM nodes using data-* attributes ---
  const regionSelect = section.querySelector("[data-calc-region]");
  const childrenBlock = section.querySelector("[data-calc-children]");
  const decBtn = section.querySelector("[data-calc-children-dec]");
  const incBtn = section.querySelector("[data-calc-children-inc]");
  const childrenValueEl = section.querySelector("[data-calc-children-value]");

  const housingBlock = section.querySelector("[data-calc-housing]");
  const housingYesBtn = section.querySelector("[data-calc-housing-yes]");
  const housingNoBtn = section.querySelector("[data-calc-housing-no]");

  const summaryBox = section.querySelector("[data-calc-summary]");
  const totalEl = section.querySelector("[data-calc-total]");
  const subtitleEl = section.querySelector("[data-calc-subtitle]");
  const detailsToggleBtn = section.querySelector("[data-calc-details-toggle]");

  const getPlanBtn = section.querySelector("[data-get-plan]");

  let detailsContainer =
    summaryBox?.querySelector("[data-calc-details]") || null;

  if (
    !regionSelect ||
    !childrenValueEl ||
    !housingYesBtn ||
    !housingNoBtn ||
    !summaryBox ||
    !decBtn ||
    !incBtn
  ) {
    return () => {};
  }

  // --- helpers ---
  function getRegion() {
    return (
      CALCULATOR_REGIONS.find((r) => r.value === state.region) ||
      CALCULATOR_REGIONS[0]
    );
  }

  function computeItems() {
    const region = getRegion();
    const multiplier = region.baseSupport / 15000;

    return CALCULATOR_BENEFITS.map((benefit) => {
      if (benefit.housingOnly && !state.housing) {
        return { ...benefit, amount: 0 };
      }
      const amount = Math.round(
        (benefit.base + benefit.perChild * state.children) * multiplier,
      );
      return { ...benefit, amount };
    }).filter((item) => item.amount > 0);
  }

  function computeTotal(items) {
    return items.reduce((sum, item) => sum + item.amount, 0);
  }

  function ensureDetailsContainer() {
    if (detailsContainer) return detailsContainer;

    detailsContainer = document.createElement("div");
    detailsContainer.setAttribute("data-calc-details", "true");
    detailsContainer.className = "mt-6 pt-6";
    detailsContainer.style.borderTop = "1px solid rgba(184,230,213,0.5)";
    detailsContainer.style.display = "none";

    const list = document.createElement("div");
    list.className = "space-y-3";
    list.setAttribute("data-calc-details-list", "true");
    detailsContainer.appendChild(list);

    summaryBox.appendChild(detailsContainer);
    return detailsContainer;
  }

  function updateChildrenUi() {
    childrenValueEl.textContent = String(state.children);
  }

  function updateHousingButtonsUi() {
    setHousingButtonStyle(housingYesBtn, state.housing === true);
    setHousingButtonStyle(housingNoBtn, state.housing === false);
  }

  function setHousingButtonStyle(button, active) {
    if (!button) return;
    button.style.background = active ? "#3D8B6E" : "#F8FDFB";
    button.style.color = active ? "white" : "#3D8B6E";
    button.style.border = `1.5px solid ${active ? "#3D8B6E" : "#B8E6D5"}`;
  }

  function updateDetailsToggleUi() {
    if (!detailsToggleBtn) return;

    const icon = detailsToggleBtn.querySelector("i");
    if (icon) {
      icon.className = state.detailsOpen ? "ri-eye-off-line" : "ri-eye-line";
    }

    const textNode = getLastTextNode(detailsToggleBtn);
    if (textNode) {
      textNode.textContent = state.detailsOpen ? "Скрыть" : "Подробнее";
    } else {
      detailsToggleBtn.textContent = state.detailsOpen ? "Скрыть" : "Подробнее";
    }
  }

  function updateSummaryUi(items) {
    const region = getRegion();
    const total = computeTotal(items);

    if (totalEl) totalEl.textContent = formatRub(total);
    if (subtitleEl) {
      subtitleEl.textContent = `в месяц · ${region.label} · ${state.children} ${childWord(state.children)}`;
    }
  }

  function updateDetailsUi(items) {
    const container = ensureDetailsContainer();
    const list = container.querySelector("[data-calc-details-list]");
    if (!list) return;

    list.innerHTML = "";
    items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "flex items-center justify-between gap-4";

      const left = document.createElement("div");
      left.className = "flex items-center gap-3";

      const iconWrap = document.createElement("div");
      iconWrap.className = "w-5 h-5 flex items-center justify-center";
      iconWrap.innerHTML =
        '<i class="ri-check-line text-sm" style="color:#3D8B6E"></i>';

      const label = document.createElement("span");
      label.className = "text-sm";
      label.style.color = "#4A6B5E";
      label.textContent = item.label;

      const amount = document.createElement("span");
      amount.className = "text-sm font-semibold whitespace-nowrap";
      amount.style.color = "#1A3A2E";
      amount.textContent = formatRub(item.amount);

      left.appendChild(iconWrap);
      left.appendChild(label);
      row.appendChild(left);
      row.appendChild(amount);
      list.appendChild(row);
    });

    container.style.display = state.detailsOpen ? "block" : "none";
  }

  function render() {
    // sync state with select if options differ from defaults
    if (regionSelect.value && regionSelect.value !== state.region) {
      state.region = regionSelect.value;
    }

    updateChildrenUi();
    updateHousingButtonsUi();
    updateDetailsToggleUi();

    const items = computeItems();
    updateSummaryUi(items);
    updateDetailsUi(items);
  }

  // --- events ---
  const disposers = [];

  disposers.push(
    bind(regionSelect, "change", (event) => {
      const value = event.target?.value;
      if (!value) return;
      state.region = value;
      render();
    }),
  );

  if (decBtn) {
    disposers.push(
      bind(decBtn, "click", () => {
        state.children = clamp(state.children - 1, 1, 6);
        render();
      }),
    );
  }

  if (incBtn) {
    disposers.push(
      bind(incBtn, "click", () => {
        state.children = clamp(state.children + 1, 1, 6);
        render();
      }),
    );
  }

  if (housingYesBtn) {
    disposers.push(
      bind(housingYesBtn, "click", () => {
        state.housing = true;
        render();
      }),
    );
  }

  if (housingNoBtn) {
    disposers.push(
      bind(housingNoBtn, "click", () => {
        state.housing = false;
        render();
      }),
    );
  }

  if (detailsToggleBtn) {
    disposers.push(
      bind(detailsToggleBtn, "click", () => {
        state.detailsOpen = !state.detailsOpen;
        render();
      }),
    );
  }

  on(getPlanBtn, "click", () => openFamilyModal(" + План выплат"));

  // initial render
  render();

  return () => {
    disposers.forEach((off) => off());
  };
}

/* -------------------- internal DOM utilities -------------------- */

function bind(target, eventName, handler) {
  if (!target || typeof target.addEventListener !== "function") return () => {};
  target.addEventListener(eventName, handler);
  return () => target.removeEventListener(eventName, handler);
}

function getLastTextNode(el) {
  const nodes = Array.from(el.childNodes).reverse();
  return nodes.find((node) => node.nodeType === Node.TEXT_NODE);
}
