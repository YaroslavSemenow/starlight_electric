const toggleModal = (openModalBtnArr, modal, closeModalBtn) => {
  if (!openModalBtnArr?.length || !closeModalBtn || !modal) {
    return;
  }

  const toggleClass = () => modal.classList.toggle("is-hidden");

  openModalBtnArr.forEach((btn) => {
    btn.addEventListener("click", toggleClass);
  });

  closeModalBtn.addEventListener("click", toggleClass);
};

// модальне вікно з продукцією
(() => {
  const openModalBtnArr = document.querySelectorAll("[data-product-modal-open]");

  const modal = document.querySelector("[data-product-modal]");
  const closeModalBtn = document.querySelector("[data-product-modal-close]");

  toggleModal(openModalBtnArr, modal, closeModalBtn);
})();

// модальне вікно замовлення
(() => {
  const openModalBtnArr = document.querySelectorAll("[data-order-modal-open]");

  const modal = document.querySelector("[data-order-modal]");
  const closeModalBtn = document.querySelector("[data-order-modal-close]");

  toggleModal(openModalBtnArr, modal, closeModalBtn);
})();
