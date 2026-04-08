import { on, qs } from "./utils.js";

/**
 * Header behavior:
 * - sticky style on scroll
 * - mobile menu toggle
 * - "Моя семья" modal open/close
 */
export function initHeader() {
  const header = qs("header");
  if (!header) return () => {};

  const mobileToggleBtn = qs("header .md\\:hidden");
  const mobileNav = qs("header nav");
  const familyButtons = Array.from(
    document.querySelectorAll("button, a"),
  ).filter((el) => el.textContent?.trim().includes("Моя семья"));

  let cleanupFns = [];
  let mobilePanel = null;
  let familyModal = null;
  let isMenuOpen = false;
  let isModalOpen = false;

  const navLinks = [
    { href: "#calculator", label: "Калькулятор" },
    { href: "#community", label: "Сообщество" },
    { href: "#courses", label: "Курсы" },
    { href: "#calendar", label: "События" },
    { href: "#map", label: "Карта" },
    { href: "#articles", label: "Статьи" },
    { href: "#psych-support", label: "Поддержка" },
  ];

  function applyHeaderSticky() {
    const sticky = window.scrollY > 40;
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.right = "0";
    header.style.zIndex = "50";
    header.style.transition = "all 300ms ease";
    header.style.background = sticky ? "rgba(255,255,255,0.95)" : "transparent";
    header.style.backdropFilter = sticky ? "blur(12px)" : "none";
    header.style.borderBottom = sticky
      ? "1px solid rgba(184,230,213,0.3)"
      : "none";
  }

  function updateMenuIcon() {
    const icon = mobileToggleBtn?.querySelector("i");
    if (!icon) return;
    icon.className = isMenuOpen ? "text-xl ri-close-line" : "text-xl ri-menu-line";
  }

  function closeMenu() {
    isMenuOpen = false;
    if (mobilePanel) {
      mobilePanel.remove();
      mobilePanel = null;
    }
    updateMenuIcon();
  }

  function openMenu() {
    if (!mobileToggleBtn) return;
    isMenuOpen = true;
    updateMenuIcon();

    mobilePanel = document.createElement("div");
    mobilePanel.className = "md:hidden px-4 pb-4 pt-2";
    mobilePanel.style.background = "rgba(255,255,255,0.97)";
    mobilePanel.style.borderBottom = "1px solid rgba(184,230,213,0.4)";

    const linksWrap = document.createElement("div");
    navLinks.forEach((item) => {
      const a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      a.className = "block py-3 text-sm font-medium cursor-pointer";
      a.style.color = "#2C5F4F";
      a.style.borderBottom = "1px solid rgba(184,230,213,0.3)";
      a.addEventListener("click", closeMenu);
      linksWrap.appendChild(a);
    });

    const actions = document.createElement("div");
    actions.className = "flex gap-2 mt-4";

    const familyBtn = document.createElement("button");
    familyBtn.type = "button";
    familyBtn.className =
      "flex-1 h-11 rounded-full text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap";
    familyBtn.style.background = "rgba(184,230,213,0.3)";
    familyBtn.style.color = "#2C5F4F";
    familyBtn.style.border = "1px solid rgba(61,139,110,0.3)";
    familyBtn.innerHTML = '<i class="ri-user-heart-line"></i>Моя семья';
    familyBtn.addEventListener("click", () => {
      closeMenu();
      openFamilyModal();
    });

    const calcLink = document.createElement("a");
    calcLink.href = "#calculator";
    calcLink.className =
      "flex-1 h-11 rounded-full text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap";
    calcLink.style.background = "linear-gradient(135deg, #3D8B6E, #2C5F4F)";
    calcLink.style.color = "white";
    calcLink.textContent = "Рассчитать";
    calcLink.addEventListener("click", closeMenu);

    actions.appendChild(familyBtn);
    actions.appendChild(calcLink);

    mobilePanel.appendChild(linksWrap);
    mobilePanel.appendChild(actions);

    header.appendChild(mobilePanel);
  }

  function toggleMenu() {
    if (isMenuOpen) closeMenu();
    else openMenu();
  }

  function closeFamilyModal() {
    isModalOpen = false;
    if (familyModal) {
      familyModal.remove();
      familyModal = null;
    }
    document.body.style.overflow = "";
  }

  function openFamilyModal() {
    if (isModalOpen) return;
    isModalOpen = true;

    familyModal = document.createElement("div");
    familyModal.className = "fixed inset-0 z-[100] flex items-center justify-center p-4";
    familyModal.style.background = "rgba(26,58,46,0.4)";
    familyModal.style.backdropFilter = "blur(6px)";
    familyModal.innerHTML = `
      <div class="w-full max-w-md rounded-3xl overflow-hidden" style="background:white">
        <div class="px-8 pt-8 pb-6 text-center relative" style="background:linear-gradient(135deg,#F0FAF7,#FFF8F0)">
          <button type="button" data-close-modal class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
            style="background:rgba(184,230,213,0.3);color:#2C5F4F">
            <i class="ri-close-line"></i>
          </button>
          <div class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style="background:linear-gradient(135deg,#3D8B6E,#2C5F4F)">
            <i class="ri-user-heart-line text-2xl text-white"></i>
          </div>
          <h3 class="text-2xl font-bold mb-2" style="font-family:'Playfair Display',serif;color:#1A3A2E">Моя семья</h3>
          <p class="text-sm" style="color:#6B7A74">Войдите, чтобы отслеживать пособия, сохранять маршруты и получать персональные рекомендации</p>
        </div>
        <div class="px-8 py-6">
          <div class="space-y-3 mb-4">
            <input type="email" placeholder="Email" class="w-full h-11 px-4 rounded-xl text-sm focus:outline-none"
              style="background:#F7FBF9;border:1px solid rgba(184,230,213,0.5);color:#374151" />
            <input type="password" placeholder="Пароль" class="w-full h-11 px-4 rounded-xl text-sm focus:outline-none"
              style="background:#F7FBF9;border:1px solid rgba(184,230,213,0.5);color:#374151" />
          </div>
          <button type="button" class="w-full h-12 rounded-xl font-semibold text-sm text-white transition-all duration-200 cursor-pointer whitespace-nowrap"
            style="background:linear-gradient(135deg,#3D8B6E,#2C5F4F)">
            Войти в личный кабинет
          </button>
        </div>
      </div>
    `;

    familyModal.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target === familyModal || target.closest("[data-close-modal]")) {
        closeFamilyModal();
      }
    });

    document.body.appendChild(familyModal);
    document.body.style.overflow = "hidden";
  }

  // keep menu hidden desktop if nav exists
  if (mobileNav) {
    mobileNav.classList.add("hidden", "lg:flex");
  }

  applyHeaderSticky();
  cleanupFns.push(on(window, "scroll", applyHeaderSticky, { passive: true }));
  cleanupFns.push(on(window, "resize", () => {
    if (window.innerWidth >= 768) closeMenu();
  }));

  if (mobileToggleBtn) {
    cleanupFns.push(on(mobileToggleBtn, "click", toggleMenu));
  }

  familyButtons.forEach((btn) => {
    cleanupFns.push(
      on(btn, "click", (event) => {
        event.preventDefault();
        openFamilyModal();
      }),
    );
  });

  return () => {
    closeMenu();
    closeFamilyModal();
    cleanupFns.forEach((fn) => fn());
    cleanupFns = [];
  };
}
