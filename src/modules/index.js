
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');



const nav = () => {
  const navigation = `
<div class="heder__container _container">
<a href="index.html" class="header__logo">
  <span class="logo">Magic</span><br /><span class="logo logo_two"
    >kingdom</span
  >
</a>
<div class="header__menu menu">
  <div class="menu__icon">
    <span></span>
  </div>
  <nav class="menu__body">
    <ul class="menu__list">
      <li class="menu__item">
        <a href="index.html" class="menu__link">Home</a>
      </li>
      <li class="menu__item">
        <a href="catalog.html" target="_blank" class="menu__link">Catalog</a>
      </li>
      <li class="menu__item">
        <a href="" class="menu__link">Pricing</a>
      </li>
      <li class="menu__item">
        <a data-scrollto=".footer" href="#" class="menu__link"
          >Contact</a
        >
      </li>
      <li class="menu__item menu_icon">
        <a data-tooltip="basket" href="basket.html" target="_blank" class="menu__link"
          ><img src="img/basket.svg" alt="" /><span class="amount"
            ></span
          ></a
        >
      </li>
      <li class="menu__item menu_icon">
        <a data-tooltip="Log in" href="#" class="menu__link"
          ><img src="img/person.svg" alt=""
        /></a>
      </li>
    </ul>
  </nav>
</div>
</div>
`;
header.innerHTML += navigation;
};



const foot = () => {
  const footerHtml = `
<div class="footer__top">
<div class="footer_main _container">
  <div class="footer_row">
    <div class="footer_column">
      <div class="footer__label">Company Info</div>
      <nav class="footer_menu menu_footer">
        <ul class="menu footer_list">
          <li class="menu_footer_item">
            <a href="" class="menu_footer_link">About Us</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="footer_column">
      <div class="footer__label">Menu</div>
      <nav class="footer_menu menu_footer">
        <ul class="menu footer_list">
          <li class="menu_footer_item">
            <a href="index.html" class="menu_footer_link">Home</a>
          </li>
          <li class="menu_footer_item">
            <a href="catalog.html" class="menu_footer_link">Catalog</a>
          </li>
          <li class="menu_footer_item">
            <a href="" class="menu_footer_link">Pricing</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="footer_column">
      <div class="footer__label">Social</div>
      <nav class="footer_menu menu_footer">
        <ul class="menu footer_list footer_icon_body">
          <li class="menu_footer_item footer_icon">
            <a href="" class="menu_footer_link footer_icon"><img src="img/footer/facebook-filled.svg" alt="social"></a>
          </li>
          <li class="menu_footer_item">
            <a href="" class="menu_footer_link footer_icon"><img src="img/footer/instagram-outlined.svg" alt="social"></a>
          </li>
          <li class="menu_footer_item">
            <a href="" class="menu_footer_link footer_icon"><img src="img/footer/twitter-outlined.svg" alt="social"></a>
          </li>
          <li class="menu_footer_item">
            <a href="" class="menu_footer_link footer_icon"><img src="img/footer/youtube.svg" alt="social"></a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="footer_column">
      <div class="footer__label">Contact</div>
      <div class="footer_contacts contacts_footer">
        <a
          href="tel:375290000000"
          class="contacts_footer_item contacts_footer_item_phone"
          >+375(29) 000-00-00</a
        >
        <a
          href=""
          class="contacts_footer_item contacts_footer_item_map"
          >Minsk Skriganova str. 14
        </a>
        <a
          href="mailto:marketing@it-academy.by"
          class="contacts_footer_item contacts_footer_item_email"
          >marketing@it-academy.by</a
        >
      </div>
    </div>
  </div>
</div>
</div>
<div class="footer__bottom">
<div class="footer_container _container">
  <div class="footer_copy">
    Made With Love By ITAcademy All Right Reserved
  </div>
</div>
</div>
`;
footer.innerHTML += footerHtml;
};



export {nav,foot};