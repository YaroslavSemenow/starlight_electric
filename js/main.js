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

// =================== приховуємо кастомний плейсхолдер, коли інпут не пустий ==========================

(function toggleCustomPlaceholder() {
  const inputWrapArr = document.querySelectorAll(".form-field__wrapper");
  const hideCustomPlaceholderClass = "form-field__custom-placeholder--hidden";

  if (!inputWrapArr?.length) return;

  inputWrapArr.forEach((inputWrapEl) => {
    const input = inputWrapEl.querySelector(".form-field");
    const customPlaceholder = inputWrapEl.querySelector(
      ".form-field__custom-placeholder"
    );

    input.addEventListener("input", (e) => {
      if (e.target.value.trim() === "") {
        customPlaceholder.classList.remove(hideCustomPlaceholderClass);
      } else {
        customPlaceholder.classList.add(hideCustomPlaceholderClass);
      }
    });
  });
})();

// =================== swiper з дотами ==========================

(function instSwiperWithDots() {
  var swiper = new Swiper(".swiper-with-dots-container", {
    slidesPerView: 6,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-with-dots-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">
            <span class="${className}__inner"></span>
          </span>`;
      },
    },
  });
})();

// =================== swiper з сертифікатами ==========================

(function instSwiperWithDots() {
  var swiper = new Swiper(".swiper-certificates-container", {
    slidesPerView: 4,
    spaceBetween: 26,
    navigation: {
      nextEl: ".swiper-certificates__button-next",
      prevEl: ".swiper-certificates__button-prev",
    },
  });
})();

// =================== accordion в секції FAQ ==========================

(function accordionFAQ() {
  const accordionArr = document.querySelectorAll(".faq-list__item");

  if (!accordionArr?.length) return;

  accordionArr.forEach((accordion) => {
    const dropdown = accordion.querySelector(".faq-list__desc");
    const btn = accordion.querySelector(".faq-list__button");
    const minusImg = "./images/minus.svg";
    const plusImg = "./images/plus.svg";

    btn.addEventListener("click", () => {
      if (!!dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
        dropdown.style.marginTop = null;
        btn.src = plusImg;
      } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        dropdown.style.marginTop = "20px";
        btn.src = minusImg;
      }
    });
  });
})();
