(() => {
  const menu = document.querySelector("[data-menu]");
  const openMenuBtn = document.querySelector("[data-menu-open]");
  const closeMenuBtn = menu.querySelector("[data-menu-close]");

  if (!openMenuBtn || !closeMenuBtn || !menu) {
    return;
  }

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);
  menu.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a") {
      toggleMenu();
    }
  });

  function toggleMenu() {
    menu.classList.toggle("is-hidden");
  }
})();
