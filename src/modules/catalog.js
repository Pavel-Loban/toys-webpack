import {postData} from './addGoods';
let cartItemHTML = '';



const postDataFromCatalog = (e) => {
  if (e.target.classList.contains('item__btn_add')) {
    postData(e);
    }
};


const styleCursor = (e) => {
  const item = e.target.parentElement;
  let n = item.querySelector('.item_total ');
  if (e.target.dataset.btn === 'btn-neg' && n.value < 2) {

    item.querySelector('[data-btn=btn-neg]').style.cursor = 'not-allowed';

  } else if (e.target.dataset.btn === 'btn-neg' && n.value > 1) {
    item.querySelector('[data-btn=btn-neg]').style.cursor = 'pointer';
  }

};



const getModal = (modal) => {
  modal.classList.remove('_none');
};


const closeModal = (modal) => {
  modal.classList.add('_none');
};


//------------ only numbers

const phonNumberModal = (e) => {
  if (e.keyCode === 46 || e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 27 ||
    (e.keyCode === 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) {
    return;
  } else {
    if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }
};


const modalAddNumbers = (modalInput) => {
  if (modalInput.value.length === 6) {
    modalInput.value = modalInput.value.slice(0, 4) + '(' + modalInput.value.slice(4, 6) + ')';
  }
  if (modalInput.value.length === 7) {
    modalInput.value = modalInput.value.slice(0, -1);
  }
  if (modalInput.value.length === 6) {
    modalInput.value = modalInput.value.slice(0, -2);
  }

  if (modalInput.value.length === 14 || modalInput.value.length === 11) {
    modalInput.value = modalInput.value.slice(0, -2);
  }
  if (modalInput.value.length === 10 || modalInput.value.length === 13) {
    modalInput.value = modalInput.value + '-';
  }
};


const sortCatalog = (catalog) => {
  for (let i = 0; i < catalog.children.length; i++) {
    for (let j = i; j < catalog.children.length; j++) {
      if (parseInt(catalog.children[i].querySelector('.item_price ').innerText) < parseInt(catalog.children[j].querySelector('.item_price ').innerText)) {
        let replacedNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
        insertAfter(replacedNode, catalog.children[i]);
      }
    }
  }
};

const sortCatalogDesc = (catalog) => {
  for (let i = 0; i < catalog.children.length; i++) {
    for (let j = i; j < catalog.children.length; j++) {
      if (parseInt(catalog.children[i].querySelector('.item_price ').innerText) > parseInt(catalog.children[j].querySelector('.item_price ').innerText)) {
        let replacedNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
        insertAfter(replacedNode, catalog.children[i]);
      }
    }
  }
};



const insertAfter = (elem, refElem) => {
  return refElem.parentElement.insertBefore(elem, refElem.nextSibling);
};

const sortCatalogName = (catalog) => {
  for (let i = 0; i < catalog.children.length; i++) {
    for (let j = i; j < catalog.children.length; j++) {
      if (catalog.children[i].querySelector('.item_catalog__title').innerHTML > catalog.children[j].querySelector('.item_catalog__title ').innerHTML) {
        let replacedNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
        insertAfter(replacedNode, catalog.children[i]);
      }
    }
  }
};


const sortCatalogNameRevers = (catalog) => {
  for (let i = 0; i < catalog.children.length; i++) {
    for (let j = i; j < catalog.children.length; j++) {
      if (catalog.children[i].querySelector('.item_catalog__title').innerHTML < catalog.children[j].querySelector('.item_catalog__title ').innerHTML) {
        let replacedNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
        insertAfter(replacedNode, catalog.children[i]);
      }
    }
  }
};

const inputSearch = document.querySelector('.input_search');


inputSearch.addEventListener('input', () => {
  let nameGoods = document.querySelectorAll('.item_catalog__title');


  nameGoods.forEach((elem) => {

    if (!(elem.innerHTML.toLocaleLowerCase().includes(inputSearch.value.toLocaleLowerCase())) && inputSearch.value !== '') {
      elem.closest('.catalog__column').classList.add('_none');
      elem.closest('.catalog__column').classList.add('hide');
    } else {
      elem.closest('.catalog__column').classList.remove('_none');
      elem.closest('.catalog__column').classList.remove('hide');
    }

  });

  const newR = [...nameGoods];
  newR.every((elem) => {
    const noResult = document.querySelector('.no_result ');
    if(elem.parentElement.closest('.hide')){
      noResult.style.opacity = '1';
    }else
    noResult.style.opacity = '0';
  });
});

//--------scrool top-0
const assistant = document.querySelector('.assistent');

assistant.addEventListener('click',(e) => {
  window.scrollTo({top: 0,
    behavior: 'smooth'});
});

window.addEventListener('scroll',() => {
  assistant.hidden = (scrollY < document.documentElement.clientHeight);
});

export {styleCursor,getModal,sortCatalog,sortCatalogDesc,sortCatalogName,sortCatalogNameRevers,postDataFromCatalog,closeModal,phonNumberModal,modalAddNumbers};
