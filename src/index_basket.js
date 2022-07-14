import './css/style.css';
import './css/basket.css';

import { preloader, menuIcon, scrollContacts, mobile, hoverBtnMouseDown, hoverBtnMouseUp, counterGood } from './modules/script';
// import {} from './modules/catalog';
import { getCountProductsBasket } from './modules/addGoods';
import { renderGoods, delGoods, reSaveGoods, total, titleBasket, getQuantityOfgoods,intervalGetQuantityOfgoods, theEnd } from './modules/basket';
import { nav, foot } from './modules/index';
import { validForm} from './modules/forms';

nav();
foot();
mobile();
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuContact = document.querySelectorAll('.menu__link[data-scrollto]');
const basketWrapper = document.querySelector('.basket-wrapper');
let arr = JSON.parse(localStorage.getItem('goods')) || [];

preloader();

setTimeout(preloader, 1000);

scrollContacts();
iconMenu.addEventListener('click', () => {
    scrollContacts();
});

iconMenu.addEventListener('click', () => {
    menuIcon(iconMenu, menuBody);
});
renderGoods(basketWrapper);
setInterval(() => {
    renderGoods(basketWrapper);
}, 2000);
basketWrapper.addEventListener('mousedown', hoverBtnMouseDown);

basketWrapper.addEventListener('mouseup', hoverBtnMouseUp);
basketWrapper.addEventListener('click', counterGood);

document.querySelector('.basket-wrapper').addEventListener('click', (e) => {
    delGoods(e);
});

window.addEventListener('click', (e) => {
    reSaveGoods(e, arr);
});
setInterval(total, 500);
setInterval(() => {
    titleBasket(basketWrapper);
}, 1000);

setInterval(getCountProductsBasket, 1000);



const btnCheckout = document.querySelector('.title_checkout');
btnCheckout.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('title_checkout')) {
        e.target.style.backgroundColor = 'rgb(174, 230, 64)';
    }
});
btnCheckout.addEventListener('mouseup', (e) => {
    if (e.target.classList.contains('title_checkout')) {
        e.target.style.backgroundColor = 'yellowgreen';
    }
});

const titleContainerBasket = document.querySelector('.basket_title');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

document.querySelector('.title_checkout').addEventListener('click', () => {
    clearInterval(intervalGetQuantityOfgoods);
    header.classList.add('_none');
    titleContainerBasket.classList.add('_none');
    basketWrapper.classList.add('_none');
    footer.classList.add('_none');
    document.querySelector('.title_checkout').classList.add('_none');
    document.querySelector('#checkout').classList.add('_none');
    document.querySelector('.form_body').classList.remove('_none');
    document.querySelector('.form').style.opacity = 1;

});


const form = document.getElementById('form');
form.addEventListener('submit', ((e) => {

    validForm(e);

    // if (localStorage.getItem('post') === 'ttt') {
    //     document.querySelector('.showme').classList.add('hideme');
    // }


}));

form.addEventListener('click', (e) => {
    if (e.target.classList.contains('_req')) {
        e.target.addEventListener('blur', function () {
            if (e.target.value.trim() === '') {
                e.target.classList.add('_error');
            } else {
                e.target.classList.remove('_error');
            }
        });
    }
});

const basketTotalContainer = document.querySelector('.basket_total');

const showButton = document.querySelector('.show_button');

showButton.addEventListener('click', () => {
    theEnd();
  });