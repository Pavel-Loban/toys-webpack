const viewBigImage = (e, imgGood) => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  imgGood.style.height = '300%';
  imgGood.style.width = '300%';
  imgGood.style.transform = 'translate(-' + x * 100 + '%, -' + y * 90 + '%)';
};


const bigImageNormal = (e, imgGood) => {
  imgGood.style.height = '100%';
  imgGood.style.width = '100%';
  imgGood.style.backgroundPosition = 'center';
  imgGood.style.backgroundSize = 'cover';
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  imgGood.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 0 + 'px)';
};

const imgActive = (e,imgGood) => {
  let images = document.querySelectorAll('.image');

  if (e.target.parentElement.classList.contains('image')) {
    imgGood.style.background = `url(${e.target.src}) no-repeat`;
    imgGood.style.height = '100%';
    imgGood.style.width = '100%';
    imgGood.style.backgroundPosition = 'center';
    imgGood.style.backgroundSize = 'cover';
    images.forEach((elem) => {
      elem.classList.remove('active-image');
    });
    e.target.parentElement.classList.add('active-image');
  }
}

class Review {
  constructor(selector1, selector2, countid) {
    this.selector1 = selector1;
    this.selector2 = selector2;
    this.countid = countid;
  }
}


const renderMessages = async (getResourse, MESSAGE_URI,itemId) => {
  const messages = await getResourse(`${MESSAGE_URI}`);
  const containerMessages = document.querySelector('.message_container');
  containerMessages.innerHTML = '';

  messages.reverse().forEach((elem) => {
    if (elem.countid === itemId) {

      containerMessages.innerHTML += `
        <div class="message-item">
        <div class="message-avatar">
            <figure class="avatar">
            </figure>
            <div>
                <h5> ${elem.selector1}</h5>
                <div class="date">${elem.datemessage}</div>
                <div class="time">${elem.timemessage}</div>
            </div>
        </div>
        <div class="message-content">
            ${elem.selector2}
        </div>
    </div>
        `;
    }
  });
};
const getinfo = async () => {
  const MESSAGE_URI = 'https://toys-goods.herokuapp.com/api/messages';
  let nameUser = document.querySelector('#name_user');
  let textUser = document.querySelector('#review_input');
  const itemId = Number(window.location.search.split('?id=')[1]);

  const newReview = new Review(nameUser.value.trim().replace(/\s+/g, ' '), textUser.value.trim().replace(/\s+/g, ' '), itemId);
  const currentDate = new Date();
  const timeNow = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
  const dateNow = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

  if (nameUser.value.trim() !== '' && textUser.value.trim() !== '') {
    await fetch(`${MESSAGE_URI}`, {

      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        "selector1": newReview.selector1,
        "selector2": newReview.selector2,
        "countid": itemId,
        "timemessage": timeNow,
        "datemessage": dateNow
      })
    })
      .then(
        res => {
          return res.json();
        }
      ).catch(err => {
        return ('!!Error', err);
      });
  }
};


const hoverSubmitDown = (e) => {
  if (e.target.classList.contains('btn_review')) {
    e.target.style.backgroundColor = 'rgb(174, 230, 64)';
  }

};
const hoverSubmitUp = (e) => {
  if (e.target.classList.contains('btn_review')) {
    e.target.style.backgroundColor = 'yellowgreen';
  }
};

export { viewBigImage, bigImageNormal, renderMessages,getinfo, hoverSubmitDown, hoverSubmitUp, imgActive };