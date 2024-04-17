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

// =================== кастомний чекбокс ==========================

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

// =================== accordion в секції questions ==========================

(function accordionQuestions() {
  const itemArr = document.querySelectorAll(".questions__item");

  if (!itemArr?.length) return;

  itemArr.forEach((item) => {
    const icon = item.querySelector(".questions__item-icon");

    item.addEventListener("click", () => {
      item.classList.toggle("is-open");

      if (item.classList.contains("is-open")) {
        icon.innerHTML = ` <span style="width: 9px; height: 2px; background: #85929A;"></span>`;
      } else {
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M1 6.75H11V5.25H1V6.75ZM5.25 1L5.25 11H6.75L6.75 1L5.25 1Z" fill="#85929A"/>
        </svg>`;
      }
    });
  });
})();

// =================== portfolio__switchers ==========================

(function portfolioSwitchers() {
  const portfolio = document.querySelector("#portfolio");

  const switchers = portfolio.querySelector(".portfolio__switchers");

  const btnResidential = switchers.querySelector(
    '[data-portfolio-gallery-btn="Residential"]'
  );
  const btnCommercial = switchers.querySelector(
    '[data-portfolio-gallery-btn="Commercial"]'
  );
  const btnIndustrial = switchers.querySelector(
    '[data-portfolio-gallery-btn="Industrial"]'
  );

  const galleryResidential = portfolio.querySelector(
    '[data-portfolio-gallery="Residential"]'
  );
  const galleryCommercial = portfolio.querySelector(
    '[data-portfolio-gallery="Commercial"]'
  );
  const galleryIndustrial = portfolio.querySelector(
    '[data-portfolio-gallery="Industrial"]'
  );

  switchers.addEventListener("click", (e) => {
    const dataset = e.target.dataset;

    switch (dataset.portfolioGalleryBtn) {
      case "Residential":
        btnResidential.classList.add("selected");
        btnCommercial.classList.remove("selected");
        btnIndustrial.classList.remove("selected");

        galleryResidential.classList.add("selected");
        galleryCommercial.classList.remove("selected");
        galleryIndustrial.classList.remove("selected");
        break;
      case "Commercial":
        btnResidential.classList.remove("selected");
        btnCommercial.classList.add("selected");
        btnIndustrial.classList.remove("selected");

        galleryResidential.classList.remove("selected");
        galleryCommercial.classList.add("selected");
        galleryIndustrial.classList.remove("selected");
        break;
      case "Industrial":
        btnResidential.classList.remove("selected");
        btnCommercial.classList.remove("selected");
        btnIndustrial.classList.add("selected");

        galleryResidential.classList.remove("selected");
        galleryCommercial.classList.remove("selected");
        galleryIndustrial.classList.add("selected");
        break;

      default:
        break;
    }
  });
})();

// =================== до/після в секції comparison ==========================

$(document).ready(function () {
  $(".comparison__first-divider").draggable({
    axis: "x",
    containment: "parent",
    drag: function (event, ui) {
      var position = ui.position.left;
      var containerWidth = $(".comparison__first").width();
      var dividerWidth = $(this).width();
      var maxWidth = containerWidth - dividerWidth;

      if (position < 0) {
        position = 0;
      } else if (position > maxWidth) {
        position = maxWidth;
      }

      $(".comparison__first-before").css("flex", "0 0 " + position + "px");
    },
  });
});


$(document).ready(function(){
  $('#contactForm').submit(function(e){
console.log("sdfsfsd");

      e.preventDefault(); // Зупиняємо стандартну відправку форми
      var formData = $(this).serialize(); // Збираємо дані з форми
      $.ajax({
          type: 'POST',
          url: 'send_email.php',
          data: formData,
          success: function(response){
              $('#response').html(response); // Виводимо відповідь сервера в блок з id "response"
          },
          error: function(){
              $('#response').html('Помилка при відправці повідомлення');
          }
      });
  });
});
