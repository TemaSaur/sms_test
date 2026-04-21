import { qsa, on } from "./utils.js";
import { openFamilyModal } from "./modal.js";

export function initRoutes() {
  const cards = qsa("[data-route-card]");

  cards.forEach((el) => {
    const text = `<br>${el.dataset.routeCard}`;

    on(el, "click", () => openFamilyModal(text));
  });
}
