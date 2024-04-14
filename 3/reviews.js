import { getReviews, saveСhange, getKeys, removeProduct } from "./storage.js";

const contentEl = document.querySelector('.content');

creatItem();

contentEl.addEventListener('click', ({ target }) => {
    const productEl = target.closest('.product');

    if (target.closest('.show_hide')) {
        const reviewsEl = productEl.querySelector('.reviews');
        reviewsEl.classList.toggle('hidden');
        if (reviewsEl.classList.contains('hidden')) {
            target.textContent = 'Показать отзывы';
        } else {
            target.textContent = 'Скрыть отзывы';
        }
    }
    if (target.closest('.del')) {
        const reviewEl = target.closest('.review');
        const productKey = productEl.querySelector('.title').textContent;
        const productCurrentValue = reviewEl.querySelector('.txt').textContent;

        reviewEl.remove();

        const reviews = getReviews(productKey);

        const foundedIndex = reviews.findIndex((review) => review === productCurrentValue);

        if (foundedIndex !== -1) {
            reviews.splice(foundedIndex, 1);
            saveСhange(productKey, reviews);
        }

        if (getReviews(productKey).length <= 0) {
            removeProduct(productKey);
            productEl.remove();
        }
    }
});


function creatItem() {
    const arrProducts = getKeys();
    arrProducts.forEach((product) => {
        contentEl.insertAdjacentHTML('beforeend', getProductHtml(product));
        const reviewsEl = contentEl.querySelector(`.${getClass(product)}`);
        getReviews(product).forEach((review) => {
            reviewsEl.insertAdjacentHTML('beforeend', getReviewHtml(review));
        })
    });
}

function getProductHtml(product) {
    return `
        <div class="product">
            <h3 class="title">${product}</h3>
            <div class="reviews ${getClass(product)} hidden">
            </div>
            <button class="show_hide">Показать отзывы</button>
        </div>
    `;
}

function getReviewHtml(review) {
    return `
        <div class="review">
            <p class="txt">${review}</p>
            <button class="del">Удалить отзыв</button>
        </div>
    `;
}

function getClass(product) {
    return product.split(" ").join("_");
}

