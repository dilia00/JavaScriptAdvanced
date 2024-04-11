"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}
const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];


function creatItem(data) {
  data.forEach((item) => {
    const itemtEl = document.createElement("div");
    itemtEl.classList.add("item");
    itemtEl.dataset.id = item.id;
    contentEl.append(itemtEl);
    itemtEl.insertAdjacentHTML('beforeend', getTitle(item.product, item.id));

    const reviewsEl = document.createElement("div");
    reviewsEl.classList.add("content__reviews");
    itemtEl.append(reviewsEl);
    const reviewTitlesEl = document.createElement("h2");
    reviewTitlesEl.textContent = "Отзывы: ";
    reviewsEl.append(reviewTitlesEl);
    item.reviews.forEach((review) => {
      reviewsEl.insertAdjacentHTML('beforeend', getReview(review.id, review.text));
    });

    itemtEl.insertAdjacentHTML('beforeend', getform());
  });
}

function getTitle(product, id) {
  return ` 
  <h1 class="item__title">Продукт: ${product}</h1>
  <p class="item__id">Id: ${id}</p>`
}

function getReview(id, text) {
  return `
  <div class="review" >
    <h3 class="item__review-id">${id}: </h3>
    <p class="item__review-text">${text}</p>
  </div>`
}

function getform() {
  return ` 
    <form class="form" action="">
      <h3 class="form__title">Добавить отзыв</h3>
      <input class="input" type="text"  />
      <div class="message"></div>
      <button class="btn">Отправить</button>
    </form>`
}

const contentEl = document.querySelector(".content");
creatItem(initialData);


document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    const inputValueEl = e.target.parentNode.children[1].value;
    const messageEl = e.target.parentNode.children[2];
    const productEl = e.target.parentNode.parentNode;
    const reviewsEl = e.target.parentNode.parentNode.children[2];

    if (inputValueEl.length < 5 || inputValueEl.length > 10) {
      e.preventDefault();
      messageEl.textContent = 'Длина введенного значения не соответствует требованиям!';
    } else {
      const currentProduct = initialData.find(item => item.id === productEl.dataset.id);
      messageEl.textContent = '';
      initialData.forEach(item => {
        if (item.id === productEl.dataset.id) {
          item.reviews.push({ id: uid(), text: inputValueEl });
        }
      });

      reviewsEl.insertAdjacentHTML('beforeend', getReview(currentProduct.reviews[currentProduct.reviews.length - 1].id, currentProduct.reviews[currentProduct.reviews.length - 1].text));
    }
  }
});







