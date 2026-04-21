import { openFamilyModal } from "./modal.js";
import { on, qs, qsa } from "./utils.js";

export function initMisc() {
  const subscribeBtns = qsa("[data-subscribe]");
  subscribeBtns.forEach((el) => {
    on(el, "click", () => {
      openFamilyModal(". Подписка");
    });
  });

  const allArticlesBtns = qsa("[data-all-articles]");
  allArticlesBtns.forEach((el) => {
    on(el, "click", () => {
      openFamilyModal(". Статьи");
    });
  });

  const communityBtns = qsa("[data-community]");
  communityBtns.forEach((el) => {
    on(el, "click", () => {
      openFamilyModal(". Сообщество");
    });
  });
}
