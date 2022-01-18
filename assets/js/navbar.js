const createNav = () => {
  let nav = document.querySelector(".nav");

  nav.innerHTML = `
  <div class="nav__toggle" id="nav-toggle">
  <i class="bx bxs-grid"></i>
</div>

<a href="../index.html" >
<img
src="../assets/img/logo.png"
alt="Logo da Bubalão"
class="nav__logo"
/>
</a>

<div class="nav__menu" id="nav-menu">
  <ul class="nav__list">
    <li class="nav__item">
      <a href="../index.html" class="nav__link active">Home</a>
    </li>
    <li class="nav__item">
    <a href="#" class="menu-item">Menina</a>
    <li class="nav__item">
    <a href="./components/menino.html" class="nav__link">Menino</a>
    </li>
    <li class="nav__item">
      <a href="#new" class="nav__link">Novidades</a>
    </li>
    <li class="nav__item">
      <a href="./shop.html" class="nav__link">Ofertas</a>
    </li>
  </ul>
</div>

<div class="nav__shop">
<a class="navbar-icon href="./components/cart.html"><i class='bx bx-shopping-bag icon-img'></i></a>
</div>
<div class="nav__shop">
<a><i class='bx bx-user icon-img' id="user-img" ></i>
<div class="login-logout-popup hide">
  <p class="account-info">Entrar como, name</p>
  <button class="btn" id="user-btn">Sair</button>
</div></a>
</div>
    `;
};

createNav();

// NAV POPUP
const userImageButton = document.querySelector("#user-img");
const userPopup = document.querySelector(".login-logout-popup");
const popuptext = document.querySelector(".account-info");
const actionBtn = document.querySelector("#user-btn");

userImageButton.addEventListener("click", () => {
  userPopup.classList.toggle("hide");
});

window.onload = () => {
  let user = JSON.parse(sessionStorage.user || null);
  if (user != null) {
    // means user is logged in
    popuptext.innerHTML = `Acessando como, ${user.name}`;
    actionBtn.innerHTML = "Sair";
    actionBtn.addEventListener("click", () => {
      sessionStorage.clear();
      location.reload();
    });
  } else {
    // user is logged out
    popuptext.innerHTML = "Acessar sua conta";
    actionBtn.innerHTML = "Entrar";
    actionBtn.addEventListener("click", () => {
      location.href = "../components/login.html";
    });
  }
};
