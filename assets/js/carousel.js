const carousel = () => {
  let card = document.querySelector(".container__product");

  card.innerHTML = `

<div class="card__product">
<div class="image__product">
  <span class="discount__tag">50% off</span>
  <img src="./img/card5.png" alt="" class="thumb__product" />
  <button class="card__btn">+ lista de desejos</button>
</div>
<div class="info__product">
  <h2 class="brand__product">brand</h2>
  <p class="short__desc_product">a short line about the cloth...</p>
  <span class="price">$20</span><span class="actual__price">$40</span>
</div>
</div>

<div class="card__product">
<div class="image__product">
  <span class="discount__tag">50% off</span>
  <img src="./img/card5.png" alt="" class="thumb__product" />
  <button class="card__btn">+ lista de desejos</button>
</div>
<div class="info__product">
  <h2 class="brand__product">brand</h2>
  <p class="short__desc_product">a short line about the cloth...</p>
  <span class="price">$20</span><span class="actual__price">$40</span>
</div>
</div>

<div class="card__product">
<div class="image__product">
  <span class="discount__tag">50% off</span>
  <img src="./img/card5.png" alt="" class="thumb__product" />
  <button class="card__btn">+ lista de desejos</button>
</div>
<div class="info__product">
  <h2 class="brand__product">brand</h2>
  <p class="short__desc_product">a short line about the cloth...</p>
  <span class="price">$20</span><span class="actual__price">$40</span>
</div>
</div>

<div class="card__product">
<div class="image__product">
  <span class="discount__tag">50% off</span>
  <img src="./img/card5.png" alt="" class="thumb__product" />
  <button class="card__btn">+ lista de desejos</button>
</div>
<div class="info__product">
  <h2 class="brand__product">brand</h2>
  <p class="short__desc_product">a short line about the cloth...</p>
  <span class="price">$20</span><span class="actual__price">$40</span>
</div>
</div>

<div class="card__product">
<div class="image__product">
  <span class="discount__tag">50% off</span>
  <img src="./img/card5.png" alt="" class="thumb__product" />
  <button class="card__btn">+ lista de desejos</button>
</div>
<div class="info__product">
  <h2 class="brand__product">brand</h2>
  <p class="short__desc_product">a short line about the cloth...</p>
  <span class="price">$20</span><span class="actual__price">$40</span>
</div>
</div>

<div class="card__product">
<div class="image__product">
  <span class="discount__tag">50% off</span>
  <img src="./img/card5.png" alt="" class="thumb__product" />
  <button class="card__btn">+ lista de desejos</button>
</div>
<div class="info__product">
  <h2 class="brand__product">brand</h2>
  <p class="short__desc_product">a short line about the cloth...</p>
  <span class="price">$20</span><span class="actual__price">$40</span>
</div>
</div>

<div class="card__product">
<div class="image__product">
  <span class="discount__tag">50% off</span>
  <img src="./img/card5.png" alt="" class="thumb__product" />
  <button class="card__btn">+ lista de desejos</button>
</div>
<div class="info__product">
  <h2 class="brand__product">brand</h2>
  <p class="short__desc_product">a short line about the cloth...</p>
  <span class="price">$20</span><span class="actual__price">$40</span>
</div>
</div>

<div class="card__product">
<div class="image__product">
  <span class="discount__tag">50% off</span>
  <img src="./img/card5.png" alt="" class="thumb__product" />
  <button class="card__btn">+ lista de desejos</button>
</div>
<div class="info__product">
  <h2 class="brand__product">brand</h2>
  <p class="short__desc_product">a short line about the cloth...</p>
  <span class="price">$20</span><span class="actual__price">$40</span>
</div>
</div>

<div class="card__product">
<div class="image__product">
  <span class="discount__tag">50% off</span>
  <img src="./img/card5.png" alt="" class="thumb__product" />
  <button class="card__btn">+ lista de desejos</button>
</div>
<div class="info__product">
  <h2 class="brand__product">brand</h2>
  <p class="short__desc_product">a short line about the cloth...</p>
  <span class="price">$20</span><span class="actual__price">$40</span>
</div>
</div>

<div class="card__product">
<div class="image__product">
  <span class="discount__tag">50% off</span>
  <img src="./img/card5.png" alt="" class="thumb__product" />
  <button class="card__btn">+ lista de desejos</button>
</div>
<div class="info__product">
  <h2 class="brand__product">brand</h2>
  <p class="short__desc_product">a short line about the cloth...</p>
  <span class="price">$20</span><span class="actual__price">$40</span>
</div>
</div>
     `;
};

carousel();

const productContainers = [...document.querySelectorAll(".container__product")];
const nxtBtn = [...document.querySelectorAll(".nxt__btn")];
const preBtn = [...document.querySelectorAll(".pre__btn")];

productContainers.forEach((item, i) => {
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = -containerDimenstions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
