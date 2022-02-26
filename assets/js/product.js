const productImages = document.getElementById("productImg");
const smallImg = document.getElementsByClassName("product__img");

smallImg[0].onclick = function () {
  productImages.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImages.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImages.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImages.src = smallImg[3].src;
};
smallImg[4].onclick = function () {
  productImages.src = smallImg[4].src;
};

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
