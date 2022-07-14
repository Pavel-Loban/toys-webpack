// const CATALOG_URL = 'http://localhost:3000/data';
// const BASKET_URL = 'http://localhost:3000/basket';
// const CATALOG_URL = 'https://toys-goods.herokuapp.com/api/good';

const getResourse = async (url) => {

  try {
    const res = await fetch(url);
    // console.log(url)
    return await res.json();
  } catch (err) {
    console.log(err);
    throw new Error(`!!!!!!!!! ${err}`);

  }
};

const getListGood = async () => {
  const data = await getResourse(`${CATALOG_URL}`);
  return data;
};



//-----------------выводится товар на  страницу
const renderListGoods = async (getResourse, CATALOG_URL) => {

  const data = await getResourse(`${CATALOG_URL}`);

  const containerGoods = document.querySelector('.catalog__body');
  containerGoods.innerHTML = '';

  data.forEach((good) => {
    containerGoods.innerHTML += `
              <div class="catalog__column">
              <div class="catalog__item item_catalog" data-id="${good.id}">
                <a href="good.html?id=${good.id}" target="_blank" class="item_catalog__image _img">
                  <img class="product_img" src="${good.img_src}" alt="plastic constructor" />
                </a>
                <div class="item_catalog_content">
                  <div class="content">
                    <a href="good.html?id=${good.id}" target="_blank" class="item_catalog__link">
                      <h4 class="item_catalog__title">${good.title}</h4></a>
                  </div>
                </div>
                <div class="item_action">
                  <div class="item_price">
                    <span class="item_price item_action_text">${good.price}</span>
                  </div>
                  <div class="item_count flex_center">
                    <a class="item__btn item_action_text flex_center" data-btn="btn-neg">-1</a>
                  <input  class="item_total item_action_text" type="text" style="width: 30px;" value="1" readonly>
                  <a class="item__btn item_action_text flex_center" data-btn="btn-pos">+1</a>
                  </div>
                  <div class="btn_add flex_center">
                    <div  class="item__btn_add item_action_text flex_center" >Add</div>
                  </div>
                </div>
              </div>
            </div>
                `;
  });
};


//----------отдельная страница товара

const getGoodItem = async (goodId, getResourse, CATALOG_URL) => {
  const data = await getResourse(`${CATALOG_URL}`);

  const goodItem = data.find(item => item.id === goodId);

  const moreImg = document.querySelector('.more_img');
  const headerTitle = document.querySelector('.header_block_title');
  const good = document.querySelector('.good__item');
  const imgGood = document.querySelector('.product_img');
  const titleGood = document.querySelector('.item_good__title');
  const priceGood = document.querySelector('.item_price');

  headerTitle.innerHTML = goodItem.title;
  good.dataset.id = goodItem.id;
  imgGood.style.background = `url(${goodItem.img_src}) no-repeat`;
  imgGood.style.height = '100%';
  imgGood.style.width = '100%';
  imgGood.style.backgroundPosition = 'center';
  imgGood.style.backgroundSize = 'cover';
  titleGood.innerHTML = goodItem.title;
  imgGood.alt = goodItem.title;
  priceGood.innerHTML = goodItem.price;


  goodItem.more_image.forEach((img, index) => {
    if (index === 0) {
      moreImg.innerHTML += `
      <div class="image _img active-image"><img src=${img} alt="example"></div>
      `;
    } else
      moreImg.innerHTML += `
      <div class="image _img"><img src=${img} alt="example"></div>
      `;
  });
};




//----------------сохраняю товар в json и localStorage, который выбрал пользователь

// let arr = JSON.parse(localStorage.getItem('goods')) || [];

const postData = (e) => {
  let arr = JSON.parse(localStorage.getItem('goods')) || [];
  if (localStorage.getItem('goods') !== null) {
    arr = JSON.parse(localStorage.getItem('goods'));
  }
  const card = e.target.closest('.catalog__item');
  const countGood = card.querySelector('.item_total ');

  let good = {
    "title": card.querySelector('.item_catalog__title').innerText,
    "id": card.dataset.id,
    "imgSrc": card.querySelector('.product_img').getAttribute('src'),
    "counter": card.querySelector('.item_total').value,
    "price": card.querySelector('.item_action_text').innerText,
  };

  arr.push(good);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] !== undefined && arr[i].title === arr[j].title) {
        arr[i].counter = +arr[i].counter + (+arr[j].counter);
        arr.splice([j], 1);
      }
    }
  }
  countGood.value = 1;

  localStorage.setItem('goods', JSON.stringify(arr));
};

const postBasket = (() => {

  const totalPrice = document.querySelector('.total_price').innerHTML;

  [...basketWrapper.children].forEach((elem) => {

    fetch(`${BASKET_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        "title": elem.querySelector('.basket-item__title').innerText,
        "imgSrc": elem.querySelector('.basket_img').getAttribute('src'),
        "counter": elem.querySelector('.item_total').value,
        "price": elem.querySelector('.item_price ').innerText,
        "number": elem.dataset.id,
        "totalPrice": totalPrice
      }),
      headers: {
        "Content-type": "application/json; charset=utf-8"
      }
    }).then(
      res => {
        return res.json();
      }
    ).then(
      res => {
        console.log(res);
      }
    );
  });
});


//-------------count goods navbar

const getCountProductsBasket = () => {

  const countBasketNavbar = document.querySelector('.amount');
  if (JSON.parse(localStorage.getItem('goods')) !== null && JSON.parse(localStorage.getItem('goods')).length === 0) {
    countBasketNavbar.classList.add('_none');
  }

  let resultGoods = 0;

  if (JSON.parse(localStorage.getItem('goods') !== null)) {
    JSON.parse(localStorage.getItem('goods')).forEach((elem) => {

      if (JSON.parse(localStorage.getItem('goods')).length < 1) {
        countBasketNavbar.classList.add('_none');

      } else {
        countBasketNavbar.classList.remove('_none');
        resultGoods += +elem.counter;
        countBasketNavbar.innerHTML = resultGoods;
        countBasketNavbar.style.color = 'yellowgreen';
      }
    });
  }
};






export { renderListGoods, getResourse, getGoodItem, postData, getCountProductsBasket };