var isFamilyModalOpen = false;
var familyModal = null;

export function openFamilyModal(context = "") {
  if (isFamilyModalOpen) return;
  isFamilyModalOpen = true;

  if (typeof context === "object") context = "";

  familyModal = document.createElement("div");
  familyModal.className =
    "fixed inset-0 z-[100] flex items-center justify-center p-4";
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
          <h3 class="text-2xl font-bold mb-2" style="font-family:'Playfair Display',serif;color:#1A3A2E">Моя семья${context}</h3>
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

export function closeFamilyModal() {
  isFamilyModalOpen = false;
  if (familyModal) {
    familyModal.remove();
    familyModal = null;
  }
  document.body.style.overflow = "";
}
