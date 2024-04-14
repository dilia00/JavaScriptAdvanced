
function getReviews(product) {
    const reviews = localStorage.getItem(product);
    if (!reviews) {
        return [];
    }
    return JSON.parse(reviews);
};

function saveReview(product, review) {
    const reviews = getReviews(product);
    reviews.push(review);
    localStorage.setItem(product, JSON.stringify(reviews));
}

function getKeys() {
    return Object.keys(localStorage);
}

function saveСhange(product, reviews) {
    localStorage.setItem(product, JSON.stringify(reviews));
}

function removeProduct(product) {
    localStorage.removeItem(product);
}

export { getReviews, saveReview, removeProduct, getKeys, saveСhange };