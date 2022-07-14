import {preloader, menuIcon, scrollContacts, mobile} from './modules/script';

import  {nav, foot} from './modules/index';

import './css/style.css';
nav();
foot();
mobile();
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuContact = document.querySelectorAll('.menu__link[data-scrollto]');


preloader();

setTimeout(preloader,1000);

scrollContacts();
iconMenu.addEventListener('click', () => {
    scrollContacts();
});

iconMenu.addEventListener('click',() => {
    menuIcon(iconMenu,menuBody);
});





