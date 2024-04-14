// =================== фон в хедері при скролі ==========================

(function backgroundForHeader() {
  const headerEl = document.querySelector(".page-header");

  if (!headerEl) return;

  const headerToggle = headerEl.dataset.headerBackground;
  const darkBackground = "rgba(0, 0, 0, 0.55)";
  const lightBackground = "rgb(255 255 255 / 98%)";
  const currentBackground =
    headerToggle === "light" ? lightBackground : darkBackground;

  document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      headerEl.style.backgroundColor = currentBackground;
      return;
    }

    headerEl.style.backgroundColor = "transparent";
  });
})();

// =================== swiper з дотами ==========================

// (function instSwiperWithDots() {
//   var swiper = new Swiper(".swiper-with-dots-container", {
//     slidesPerView: 2,
//     spaceBetween: 15,
//     slidesPerView: 1.8,
//     spaceBetween: 11,
//     breakpoints: {
//       500: {
//         slidesPerView: 3,
//       },
//       650: {
//         slidesPerView: 4,
//       },
//       1200: {
//         slidesPerView: 5,
//         spaceBetween: 20,
//       },
//       1550: {
//         slidesPerView: 6,
//       },
//     },
//     pagination: {
//       el: ".swiper-with-dots-pagination",
//       clickable: true,
//       renderBullet: function (index, className) {
//         return `<span class="${className}">
//             <span class="${className}__inner"></span>
//           </span>`;
//       },
//     },
//   });
// })();

// =================== accordion в секції services ==========================

(function accordionServices() {
  const itemArr = document.querySelectorAll(".services__item");

  if (!itemArr?.length) return;

  itemArr.forEach((item) => {
    const accordion = item.querySelector(".services__item-accordion");
    const openBtn = item.querySelector(".services__item-bottom-button.open");
    const closeBtn = item.querySelector(".services__item-bottom-button.close");

    openBtn.addEventListener("click", () => {
      accordion.classList.add("is-active");
    });

    closeBtn.addEventListener("click", () => {
      accordion.classList.remove("is-active");
    });
  });
})();

// =================== приховуємо кастомний плейсхолдер ==========================

(function checkTextarea() {
  const textareaWrapArr = document.querySelectorAll(".textarea-wrap");

  textareaWrapArr.forEach((textareaWrap) => {
    const textarea = textareaWrap.querySelector("textarea");
    const placeholder = textareaWrap.querySelector(".textarea-placeholder");

    textarea.addEventListener("input", (e) => {
      if (e.target.value.trim() !== "") {
        placeholder.style.display = "none";
      } else {
        placeholder.style.display = "block";
      }
    });
  });
})();

// кастомний чекбокс

(function toggleCheckbox() {
  const checkboxArr = document.querySelectorAll("form__checkbox");

  checkboxArr.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      const isChecked = event.target.checked;

      if (isChecked) {
        checkbox.classList.add("checked");
      } else {
        checkbox.classList.remove("checked");
      }
    });
  });
})();
