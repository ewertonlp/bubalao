const productImages = document.querySelectorAll(".product__images img");
const productImageSlide = document.querySelector(".image__slider");

let activeImageSlide = 0;

productImages.forEach((item, i) => {
  item.addEventListener("click", () => {
    productImages[activeImageSlide].classList.remove("active");
    item.classList.add("active");
    productImageSlide.style.backgroundImage = `url('${item.src}')`;
    activeImageSlide = i;
  });
});

// TOGGLE SIZE BUTTONS
const sizeBtns = document.querySelectorAll(".size__radio_btn ");
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
  item.addEventListener("click", () => {
    sizeBtns[checkedBtn].classList.remove("check");
    item.classList.add("check");
    checkedBtn = i;
  });
});
