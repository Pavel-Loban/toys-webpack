import {sendGoods} from './basket'
const btnForm = document.querySelector('.form__button');


const validForm = (e) => {
    e.preventDefault();
    let inputReq = document.querySelectorAll('._req');
    const inputEmail = document.querySelector('._email');
    const inputPhone = document.querySelector('.phone');
    let emailVal = inputEmail.value;
    let phoneVal = inputPhone.value;

    let error = 0;

    const postOrder = async () => {

        // const BASKET_URI = 'http://localhost:3000/basket';
        const BASKET_LOCAL = 'https://raw.githubusercontent.com/Pavel-Loban/toys-webpack/main/src/data/goods.json';
        const totalPrice = document.querySelector('.total_price').innerHTML;
        const arrayGoodsOrder = [JSON.parse(localStorage.getItem('goods'))];
        const input = form.querySelectorAll('.form_input');
        // console.log(input);
        await fetch(`${BASKET_LOCAL}`, {
            method: 'POST',
            body: JSON.stringify({
                "goods": arrayGoodsOrder,
                "totalPrice": totalPrice,
                "locality": input[0].value,
                "street": input[1].value,
                "House": input[2].value,
                "Ent": input[3].value,
                "Floor": input[4].value,
                "Name": input[5].value,
                "Surname": input[6].value,
                "email": input[7].value,
                "Phone ": input[8].value,
                "Payment ": input[9].value
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
                //   console.log(e)
            });

    };



    const validEmail = ((email) => {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email);
    });
    const validPhone = ((phone) => {
        return !/^[0-9\s]*$/.test(phone);
    });

    inputReq.forEach((elem) => {
        if (elem.value === ''){
            elem.classList.add('_error');
            error++;
        }  else{
            elem.classList.remove('_error');
        }
    });
    if(validEmail(emailVal) ){
        inputEmail.classList.add('_error');
        error++;
    }else{
        inputEmail.classList.remove('_error');
    }

    if(validPhone(phoneVal) || phoneVal === ''){
        inputPhone.classList.add('_error');
        error++;
    }else{
        inputPhone.classList.remove('_error');
    }




    const clearInputs = () => {
        form.querySelectorAll('.form_input').forEach((elem) => {

            elem.value = '';
        });
    };


        if (error === 0) {

            postOrder(e);

            localStorage.setItem('post', 'order');
            localStorage.removeItem('goods');
            clearInputs();
            sendGoods();
        }


};


export { validForm};














