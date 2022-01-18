// redirect to home page if user logged in
window.onload = () => {
  if (sessionStorage.user) {
    user = JSON.parse(sessionStorage.user);
    if (compareToken(user.authToken, user.email)) {
      location.replace("/");
    }
  }
};

const loader = document.querySelector(".loader");

// select inputs
const submitBtn = document.querySelector(".submit-btn");
const name = document.querySelector("#name") || null;
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const number = document.querySelector("#number") || null;
const tac = document.querySelector("#terms-and-cond") || null;
const notification = document.querySelector("#notification") || null;

submitBtn.addEventListener("click", () => {
  if (name != null) {
    // signup page
    if (name.value.length < 3) {
      showAlert("Nome precisa ter mais de 3 letras");
    } else if (!email.value.length) {
      showAlert("Insira o seu e-mail");
    } else if (password.value.length < 8) {
      showAlert("Senha precisa ter no mínimo 8 caracteres");
    } else if (!number.value.length) {
      showAlert("Informe seu celular");
    } else if (!Number(number.value) || number.value.length < 10) {
      showAlert("Número inválido, Preencha com um número correto");
    } else if (!tac.checked) {
      showAlert("Você precisa aceitar os Termos e Condições");
    } else {
      // submit form
      loader.style.display = "block";
      sendData("/signup", {
        name: name.value,
        email: email.value,
        password: password.value,
        number: number.value,
        tac: tac.checked,
        notification: notification.checked,
        seller: false,
      });
    }
  } else {
    // login page
    if (!email.value.length || !password.value.length) {
      showAlert("Preencha todos os campos");
    } else {
      loader.style.display = "block";
      sendData("/login", {
        email: email.value,
        password: password.value,
      });
    }
  }
});

// SEND DATA FUNCTION
const senddata = (path, data) => {
  fetch(path, {
    method: "post",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      processData(response);
    });
};

const processdata = (data) => {
  loader.style.display = null;
  if (data.alert) {
    showAlert(data.alert);
  } else if (data.name) {
    // CREATE AUTHTOKEN
    data.authToken = generateToken(data.email);
    sessionStorage.user = JSON.stringify(data);
    location.replace("/");
  }
};

// ALERT FUNCTION
const showalert = (msg) => {
  let alertBox = document.querySelector(".alert-box");
  let alertMsg = document.querySelector(".alert-msg");
  alertMsg.innerHTML = msg;
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
};
