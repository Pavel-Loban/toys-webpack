import {preloader, menuIcon, scrollContacts, mobile,counterGood,hoverBtnMouseDown,hoverBtnMouseUp,hoverBtnDown,hoverBtnUp} from './modules/script';
import {styleCursor,getModal,sortCatalog,sortCatalogDesc,sortCatalogName,sortCatalogNameRevers,postDataFromCatalog,closeModal,phonNumberModal,modalAddNumbers} from './modules/catalog';

import  {nav, foot} from './modules/index';
import {renderListGoods,getResourse, getCountProductsBasket} from './modules/addGoods';

import './css/style.css';
import './css/catalog.css';

const catalog = document.querySelector('.catalog__body');
nav();
foot();
mobile();
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

// const BASKET_URL = 'http://localhost:8080/basket';
// const CATALOG_URL = 'http://localhost:3000/data';
const CATALOG_URL = 'https://toys-goods.herokuapp.com/api/good';

preloader();

setTimeout(preloader,1000);

// menuIcon();
scrollContacts();

iconMenu.addEventListener('click', () => {
    scrollContacts();
});

iconMenu.addEventListener('click',() => {
    menuIcon(iconMenu,menuBody);
});

renderListGoods(getResourse,CATALOG_URL);

const modal = document.querySelector('#modal1');
const modalInput = document.querySelector('.modal_input');
setTimeout(()=> {
    getModal(modal);
}, 3000);

document.querySelector('.modal_close_btn').addEventListener('click', () => {
    closeModal(modal);
} );


modalInput.addEventListener('keydown', (e) => {
    phonNumberModal(e);
} );

modalInput.addEventListener('input', () => {
    modalAddNumbers(modalInput);
} );

document.querySelector('.catalog__body').addEventListener('click', counterGood);

document.querySelector('.catalog__body').addEventListener('mousedown', hoverBtnMouseDown);
document.querySelector('.catalog__body').addEventListener('mouseup', hoverBtnMouseUp);
document.querySelector('.catalog__body').addEventListener('mousedown', hoverBtnDown);
document.querySelector('.catalog__body').addEventListener('mouseup', hoverBtnUp);


document.querySelector('.catalog__body').addEventListener('mousemove', styleCursor);

document.querySelector('#btn_price_high').addEventListener('click', () => {
    sortCatalog(catalog);
});



document.querySelector('#btn_price_smoll').addEventListener('click',() => {
    sortCatalogDesc(catalog);
});

document.querySelector('#btn_a_z_high').addEventListener('click', () => {
    sortCatalogName(catalog);
});

document.querySelector('#btn_a_z_smoll').addEventListener('click', () => {
    sortCatalogNameRevers(catalog);
});
let arr = JSON.parse(localStorage.getItem('goods')) || [];

document.querySelector('.catalog__body').addEventListener('click',(e)=>{
    postDataFromCatalog(e);
  });


const inputSearch = document.querySelector('.input_search');
const imgSearch = document.querySelector('.img_search');


imgSearch.addEventListener('click', () => {
  inputSearch.classList.toggle('_none');
});

inputSearch.addEventListener('blur', () => {
  inputSearch.classList.add('_none');
});

document.querySelector('.modal_send').addEventListener('mousedown', () => {
    document.querySelector('.modal_send').style.background = 'rgb(174, 230, 64)';
  });

  document.querySelector('.modal_send').addEventListener('mouseup', () => {
    document.querySelector('.modal_send').style.background = 'yellowgreen';
  });

  setInterval(getCountProductsBasket, 1000);