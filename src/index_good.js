// import {} from './modules/good';
import {preloader, menuIcon, scrollContacts, mobile,counterGood,hoverBtnMouseDown,hoverBtnMouseUp,hoverBtnDown,hoverBtnUp} from './modules/script';
import  {nav, foot} from './modules/index';

import { getResourse,getGoodItem, getCountProductsBasket} from './modules/addGoods';
import  {viewBigImage,bigImageNormal,renderMessages,getinfo, hoverSubmitDown, hoverSubmitUp, imgActive } from './modules/good';

import './css/style.css';
import './css/good.css';

nav();
foot();
mobile();

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');


preloader();
setTimeout(preloader,1000);
menuIcon();
scrollContacts();

iconMenu.addEventListener('click', () => {
  scrollContacts();
});

iconMenu.addEventListener('click',() => {
  menuIcon(iconMenu,menuBody);
});

const CATALOG_URL = 'https://toys-goods.herokuapp.com/api/good';
const MESSAGE_URI = 'https://toys-goods.herokuapp.com/api/messages';
const itemId = Number(window.location.search.split('?id=')[1]);
const moreImg = document.querySelector('.more_img');


getGoodItem(itemId,getResourse,CATALOG_URL);

const imgGood = document.querySelector('.product_img');
let bigImage = document.querySelector('.item_good__image');


moreImg.addEventListener('click', (e) => {
  imgActive(e,imgGood);
});
bigImage.addEventListener('mousemove', (e) => {
  viewBigImage(e,imgGood);
});

bigImage.addEventListener('mouseout',  (e) => {
  bigImageNormal(e,imgGood);
});

document.querySelector('.item_action').addEventListener('click', counterGood);

document.querySelector('.item_action').addEventListener('mousedown', hoverBtnMouseDown);

document.querySelector('.item_action').addEventListener('mouseup', hoverBtnMouseUp);

document.querySelector('.item_action').addEventListener('mousedown', hoverBtnDown);

document.querySelector('.item_action').addEventListener('mouseup', hoverBtnUp);

renderMessages(getResourse,MESSAGE_URI,itemId);


// getinfo(MESSAGE_URI);
let input = document.querySelector('.user_name');
let text = document.querySelector('.input_review');


document.querySelector('.form_review').addEventListener('submit', function (event) {
  "use strict"
  event.preventDefault();
// console.log(input.value)
  getinfo();
  input.value = '';
  text.value = '';
  renderMessages(getResourse,MESSAGE_URI,itemId);

});

document.querySelector('.button_container').addEventListener('mousedown', (e) => {
  hoverSubmitDown(e);
} );
document.querySelector('.button_container').addEventListener('mouseup', (e) => {
  hoverSubmitUp(e);
} );

setInterval(getCountProductsBasket, 1000);