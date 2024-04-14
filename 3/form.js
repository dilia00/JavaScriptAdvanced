'use strict';

import { saveReview } from "./storage.js";

const productNameEl = document.querySelector('.product_name');
const productReviewEl = document.querySelector('.product_review');
const buttonEl = document.querySelector('.btn');


buttonEl.addEventListener('click', (e) => {
    if (!productNameEl.value) {
        checkingField(e, productNameEl, "*Поле не должно быть пустым");
    } else if (Number.isFinite(+productNameEl.value.split("")[0])) {
        checkingField(e, productNameEl, "*Имя продукта не должно начинаться с цифры");
    } else if (!productReviewEl.value) {
        checkingField(e, productReviewEl, "*Поле не должно быть пустым");
    } else {
        saveReview(productNameEl.value, productReviewEl.value);
    }
});


function checkingField(e, field, message) {
    e.preventDefault();
    field.value = "";
    field.setAttribute("placeholder", message);
    field.classList.add("error-color");
}


