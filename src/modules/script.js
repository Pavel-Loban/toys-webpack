"use strict"

const preloader = () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.toggle('loaded');
  };


const mobile = () => {

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEModile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};


if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}
};


//---------------меню бургер
const menuIcon = (iconMenu,menuBody) => {

    if(iconMenu){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    }
};




// прокрутка при клике

const scrollContacts = () => {
    const menuContact = document.querySelectorAll('.menu__link[data-scrollto]');
    if (menuContact.length > 0) {
        menuContact.forEach(link => {
            link.addEventListener('click', onMenuClick);
        });



        function onMenuClick(e) {
            const iconMenu = document.querySelector('.menu__icon');
            const menuBody = document.querySelector('.menu__body');
            const menuLink = e.target;
            if (menuLink.dataset.scrollto && document.querySelector(menuLink.dataset.scrollto)) {
                const gotoLink = document.querySelector(menuLink.dataset.scrollto);
                const gotoLinkValue = gotoLink.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

                if(iconMenu.classList.contains('_active')){
                    document.body.classList.remove('_lock');
                    iconMenu.classList.remove('_active');
                    menuBody.classList.remove('_active');
                }

                window.scrollTo({
                    top:gotoLinkValue,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }
}


//----------------------------counter goods

const counterGood = ((e) => {
    let counter;

    if(e.target.dataset.btn === 'btn-pos' || e.target.dataset.btn === 'btn-neg'){
        const counterItem = e.target.closest('.item_count');
        counter = counterItem.querySelector('.item_total');
    }

    if(e.target.dataset.btn === 'btn-pos'){
        counter.value++;
    }
    if(e.target.dataset.btn === 'btn-neg'){
        if(counter.value > 1){
            counter.value--;
        }
    }
});





//------------------hover + and -
const hoverBtnMouseDown = (e) => {
    if(e.target.classList.contains('item__btn')){
       e.target.style.backgroundColor = '#c6d9f3';
    }
};

const hoverBtnMouseUp = (e) => {
    if(e.target.classList.contains('item__btn')){
       e.target.style.backgroundColor = '#7baef1';
    }
};
const hoverBtnDown = (e) => {
    if(e.target.classList.contains('item__btn_add')){
        e.target.style.backgroundColor = 'rgb(174, 230, 64)';
    }

};
const hoverBtnUp = (e) => {
    if(e.target.classList.contains('item__btn_add')){
        e.target.style.backgroundColor = 'yellowgreen';
    }

};

export {preloader, menuIcon, scrollContacts,mobile,counterGood,hoverBtnMouseDown,hoverBtnMouseUp,hoverBtnDown,hoverBtnUp};


