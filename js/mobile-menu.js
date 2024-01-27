(() => {
  const openMenuBtn = document.querySelector("[data-menu-open]");
  const closeMenuBtn = document.querySelector("[data-menu-close]");
  const menu = document.querySelector("[data-menu]");

  if (!openMenuBtn || !closeMenuBtn || !menu) {
    return;
  }

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    menu.classList.toggle("is-hidden");
  }
})();
