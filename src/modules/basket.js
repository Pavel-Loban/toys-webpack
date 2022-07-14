
// const basketWrapper = document.querySelector('.basket-wrapper');
// const btnCheckout = document.querySelector('.title_checkout');
const btnPlusMinus = document.querySelectorAll('.item__btn ');
const totalPrice = document.querySelector('.total_price');
const cardTotal = document.querySelector('.item_total');
const cardPrice = document.querySelector('.item_price ');



//------------total price
const total = () => {
  const basketWrapper = document.querySelector('.basket-wrapper');

  let result = 0;

  if (basketWrapper.childElementCount > 0) {
    totalPrice.innerHTML = '';
    [...basketWrapper.children].forEach((elem) => {
      const total = +elem.querySelector('.item_total').value;
      const price = parseFloat(elem.querySelector('span').innerHTML);
      result += price * total;
      totalPrice.innerHTML = result;
    });
  } else {
    totalPrice.innerHTML = 0;
  }
};

const titleBasket = (basketWrapper) => {
  const titleBasket = document.querySelector('.basket_title');
  if (basketWrapper.childElementCount === 0) {

    titleBasket.innerHTML = 'Сart is empty';
  }
};

const reSaveGoods = ((e, arr) => {

  if (e.target.dataset.btn === 'btn-pos' || e.target.dataset.btn === 'btn-neg') {
    const container = e.target.closest('.basket-item');
    const count = container.querySelector('.item_total').value;
    const title = container.querySelector('.basket-item__title').innerHTML;
    if (localStorage.getItem('goods') !== null) {
      arr = JSON.parse(localStorage.getItem('goods'));
      arr.forEach(elem => {
        if (elem.title === title) {
          elem.counter = +elem.counter;

          elem.counter = count;
        }
      });
    }
    localStorage.setItem('goods', JSON.stringify(arr));
  }
});



//----------deled good
const delGoods = (e) => {
  const delGood = e.target.closest('.basket_item_delet');
  const item = e.target.closest('.basket-item');
  const titleGood = item.querySelector('.basket-item__title').innerHTML;

  if (localStorage.getItem('goods') !== null) {
    let arr = JSON.parse(localStorage.getItem('goods'));

    if (delGood) {
      arr.forEach((elem, index) => {
        if (elem.title === titleGood) {
          arr.splice(index, 1);
        }
      });
    }
    localStorage.setItem('goods', JSON.stringify(arr));
  }
};


//--------- вывод из локал товаров
const renderGoods = (basketWrapper) => {

  if (JSON.parse(localStorage.getItem('goods')) !== null) {
    // const basketWrapper = document.querySelector('.basket-wrapper');
    basketWrapper.innerHTML = '';
    JSON.parse(localStorage.getItem('goods')).forEach((elem) => {

      basketWrapper.innerHTML += `<div class="basket-item" data-id="${elem.id}">
            <div class="basket-item__row">
              <div class="basket_container_img item__basket">
                <div href="" class="basket_catalog__image ">
                  <img class="basket_img" src="${elem.imgSrc}" alt="${elem.title}" />
                </div>
              </div>
              <div class="basket-item__title item__basket">${elem.title}</div>
              <div class="item_count flex_center item__basket">
                <a class="item__btn item_action_text flex_center" data-btn="btn-neg">-1</a>
                <input class="item_total item_action_text" type="text" style="width: 30px;" value="${elem.counter}" readonly>
                <a class="item__btn item_action_text flex_center" data-btn="btn-pos">+1</a>
              </div>
              <div class="item_price item__basket">
                <span class="item_price item_action_text">
                ${elem.price}
                </span>
              </div>
              <div class="basket_item_delet item__basket">remove from cart</div>
            </div>
          </div>`;
    });
  }
};


//---------- проверка колва товара в локал и на странице
const getQuantityOfgoods = () => {
  const basketWrapper = document.querySelector('.basket-wrapper');
  if (basketWrapper.childElementCount === 0) {
    document.querySelector('.title_checkout').classList.add('_none');
  } else {
    document.querySelector('.title_checkout').classList.remove('_none');
  }
};

const intervalGetQuantityOfgoods = setInterval(() => {
  getQuantityOfgoods();
}, 1000);




const form = document.getElementById('form');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const basketTotalContainer = document.querySelector('.basket_total');
const sendGoods = () => {
  if (localStorage.getItem('post') === 'order') {
    form.classList.add('_none');
    document.querySelector('.form').style.opacity = 0;
    document.querySelector('.showme').classList.add('hideme');
    footer.classList.add('showme');
    header.classList.add('showme');
    document.querySelector('.basket-body').classList.add('showme');
    basketTotalContainer.classList.add('showme');
  }
}


const theEnd = () => {
  localStorage.clear();
  footer.classList.remove('showme');
  header.classList.remove('showme');
  document.querySelector('.basket-body').classList.remove('showme');
  basketTotalContainer.classList.remove('showme');
  window.location = 'catalog.html';
}

export { renderGoods, delGoods, reSaveGoods, total, titleBasket, getQuantityOfgoods, intervalGetQuantityOfgoods, sendGoods,theEnd };

