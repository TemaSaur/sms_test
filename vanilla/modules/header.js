import { on, qs } from "./utils.js";
import { openFamilyModal, closeFamilyModal } from "./modal.js";

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
  let isMenuOpen = false;

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
    icon.className = isMenuOpen
      ? "text-xl ri-close-line"
      : "text-xl ri-menu-line";
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

  // keep menu hidden desktop if nav exists
  if (mobileNav) {
    mobileNav.classList.add("hidden", "lg:flex");
  }

  applyHeaderSticky();
  cleanupFns.push(on(window, "scroll", applyHeaderSticky, { passive: true }));
  cleanupFns.push(
    on(window, "resize", () => {
      if (window.innerWidth >= 768) closeMenu();
    }),
  );

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
