// Style reminder: 「訊號中樞」的互動必須簡短、可預期，並僅用來確認指令或引導訊號流向。

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");
  const menuLinks = menu?.querySelectorAll("a");
  const faqItems = document.querySelectorAll(".faq-item");

  const closeMenu = () => {
    if (!menuButton || !menu) return;
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "開啟導覽選單");
  };

  menuButton?.addEventListener("click", () => {
    const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menu?.classList.toggle("is-open", willOpen);
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.setAttribute("aria-label", willOpen ? "關閉導覽選單" : "開啟導覽選單");
  });

  menuLinks?.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton?.focus();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof Node && menu?.classList.contains("is-open") && !menu.contains(target) && !menuButton?.contains(target)) {
      closeMenu();
    }
  });

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) otherItem.open = false;
      });
    });
  });
});
