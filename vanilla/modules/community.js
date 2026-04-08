import { COMMUNITY_BOARD_POSTS } from "./data.js";
import { qs } from "./utils.js";

/**
 * Community section behavior:
 * - tab switch between "groups" and "board"
 * - board posts rendered dynamically
 * - per-post like toggle with local state
 */
export function initCommunity() {
  const section = qs("#community");
  if (!section) return () => {};
  
  // Prevent double initialization
  if (section.dataset.communityInitialized === "true") return () => {};
  section.dataset.communityInitialized = "true";

  const state = {
    activeTab: "groups",
    likedIds: new Set(),
  };

  // Find tab buttons using data-* attributes
  const tabButtons = Array.from(section.querySelectorAll("[data-community-tab]"));

  const groupsBlock = section.querySelector("[data-community-groups]");
  if (!groupsBlock) return () => {};

  // Create a dedicated board container right after groups cards.
  const boardContainer = document.createElement("div");
  boardContainer.className = "grid grid-cols-1 md:grid-cols-2 gap-5";
  boardContainer.style.display = "none";
  groupsBlock.parentElement?.appendChild(boardContainer);

  const cleanupFns = [];

  function setTabButtonStyle(button, active) {
    if (!button) return;
    button.style.background = active ? "#3D8B6E" : "transparent";
    button.style.color = active ? "#fff" : "#4A6B5E";
  }

  function updateTabsUi() {
    tabButtons.forEach((btn) => {
      const tabType = btn.getAttribute("data-community-tab");
      const shouldBeActive = state.activeTab === tabType;
      setTabButtonStyle(btn, shouldBeActive);
    });

    groupsBlock.style.display = state.activeTab === "groups" ? "" : "none";
    boardContainer.style.display = state.activeTab === "board" ? "" : "none";
  }

  function renderBoard() {
    boardContainer.innerHTML = "";

    COMMUNITY_BOARD_POSTS.forEach((post) => {
      const liked = state.likedIds.has(post.id);
      const likeCount = post.likes + (liked ? 1 : 0);

      const card = document.createElement("div");
      card.className =
        "rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-0.5";
      card.style.background = "white";
      card.style.border = "1px solid rgba(184,230,213,0.3)";

      card.innerHTML = `
        <div class="flex items-start gap-3 mb-4">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-base flex-shrink-0"
               style="background:${post.avatarBg}">
            ${post.avatar}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-sm font-semibold" style="color:#1A3A2E">${escapeHtml(post.author)}</span>
              <span class="px-2 py-0.5 rounded-full text-xs font-medium"
                    style="background:${post.tagColor}18;color:${post.tagColor}">
                ${escapeHtml(post.tag)}
              </span>
            </div>
            <p class="text-xs mt-0.5" style="color:#9CA3AF">${escapeHtml(post.time)}</p>
          </div>
        </div>

        <h4 class="font-bold text-sm mb-2" style="color:#1A3A2E">${escapeHtml(post.title)}</h4>
        <p class="text-sm leading-relaxed mb-4" style="color:#6B7A74">${escapeHtml(post.text)}</p>

        <div class="flex items-center gap-4">
          <button type="button"
            data-like-id="${post.id}"
            class="flex items-center gap-1.5 text-xs cursor-pointer transition-colors duration-200"
            style="color:${liked ? "#E05C6A" : "#9CA3AF"}">
            <i class="${liked ? "ri-heart-fill" : "ri-heart-line"}"></i>
            ${likeCount}
          </button>

          <button type="button" class="flex items-center gap-1.5 text-xs cursor-pointer"
            style="color:#9CA3AF">
            <i class="ri-chat-1-line"></i>${post.replies} ответов
          </button>

          <button type="button" class="flex items-center gap-1.5 text-xs cursor-pointer ml-auto"
            style="color:#3D8B6E">
            Читать далее <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      `;

      boardContainer.appendChild(card);
    });

    // CTA card.
    const cta = document.createElement("div");
    cta.className =
      "rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-0.5 md:col-span-2";
    cta.style.background = "rgba(184,230,213,0.15)";
    cta.style.border = "2px dashed rgba(61,139,110,0.3)";
    cta.innerHTML = `
      <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
           style="background:rgba(184,230,213,0.4)">
        <i class="ri-edit-line text-xl" style="color:#3D8B6E"></i>
      </div>
      <p class="font-semibold text-sm mb-1" style="color:#1A3A2E">Задайте свой вопрос</p>
      <p class="text-xs" style="color:#6B7A74">Сообщество поможет найти ответ</p>
    `;
    boardContainer.appendChild(cta);

    // Like handlers.
    boardContainer.querySelectorAll("[data-like-id]").forEach((btn) => {
      const handler = () => {
        const id = Number(btn.getAttribute("data-like-id"));
        if (state.likedIds.has(id)) state.likedIds.delete(id);
        else state.likedIds.add(id);
        renderBoard();
      };
      btn.addEventListener("click", handler);
      cleanupFns.push(() => btn.removeEventListener("click", handler));
    });
  }

  // Tab button handlers.
  tabButtons.forEach((btn) => {
    const handler = () => {
      const tabType = btn.getAttribute("data-community-tab");
      state.activeTab = tabType;
      updateTabsUi();
      if (state.activeTab === "board") renderBoard();
    };
    btn.addEventListener("click", handler);
    cleanupFns.push(() => btn.removeEventListener("click", handler));
  });

  // Initial render.
  updateTabsUi();

  return () => {
    cleanupFns.forEach((off) => {
      try {
        off();
      } catch {}
    });
    boardContainer.remove();
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
