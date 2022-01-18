const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
  <div class="footer__container bd-grid">
  <div class="footer_box">
    <img
      src="../assets/img/logo.png"
      class="nav__logo"
      alt="logo bubalão"
    />
    <p class="footer__description">Nova coleção de 2022.</p>
    <div class="footer__social">
      <a href="" class="footer__social_item"
        ><i class="bx bxl-facebook"></i
      ></a>
      <a href="" class="footer__social_item"
        ><i class="bx bxl-instagram"></i
      ></a>
      <a href="" class="footer__social_item"><i class="bx bxl-twitter"></i></a>
      <a href="" class="footer__social_item"
        ><i class="bx bxl-pinterest"></i
      ></a>
    </div>
  </div>

  <div class="footer_box">
    <h3 class="footer__title">Explorar</h3>
    <ul>
      <li><a href="#" class="footer__link">Quem sommos</a></li>
      <li><a href="#" class="footer__link">Termos e Condições</a></li>
      <li>
        <a href="#" class="footer__link">Política de privacidade</a>
      </li>
      <li><a href="#" class="footer__link">Política de entrega</a></li>
      <li>
        <a href="#" class="footer__link">Troca e devoluções</a>
      </li>
    </ul>
  </div>

  <div class="footer_box">
    <h3 class="footer__title">Suporte</h3>
    <ul>
      <li><a href="#" class="footer__link">Como comprar</a></li>
      <li><a href="#" class="footer__link">Perguntas frequentes</a></li>
      <li><a href="#" class="footer__link">Guia de medidas</a></li>
      <li><a href="#" class="footer__link">Formas de pagamento</a></li>
      <li>
        <a href="#" class="footer__link">Atendimento ao cliente</a>
      </li>
      <li>
        <a href="#" class="footer__link">Minha conta</a>
      </li>
    </ul>
  </div>

  <div class="footer_box">
    <h3 class="footer__title">Fale conosco</h3>
    <ul>
      <li></li>
        <a href="#" class="footer__link"
          ><i class="bx bxl-whatsapp"></i> (11) 3907-9688</a
        >
      </li>
      <li><a href="#" class="footer__link"> <i class='bx bx-envelope' ></i> contato@bubalao.com.br</a></li>
    </ul>

    <div>
      <h3 class="footer__title">Pagamento</h3>
      <img src="../assets/img/bubalao-bandeiras-de-pagamento.png" alt="imagem dos cartões aceitos">
      <img src="../assets/img/site-seguro.png" alt="imagem site seguro">
    </div>
  </div>
</div>

<p class="footer__copy">
  &#169; 2021 Bubalão - CNPJ 018.733.088/0001-16 | Todos os direitos reservados
</p>
    `;
};

createFooter();
