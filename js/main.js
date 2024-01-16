// =================== фон в хедері при скролі ==========================

(function backgroundForHeader() {
  const headerEl = document.querySelector(".page-header");

  if (!headerEl) return;

  document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      headerEl.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      return;
    }

    headerEl.style.backgroundColor = "transparent";
  });
})();