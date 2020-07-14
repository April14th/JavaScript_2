const products = [
    {id: 1, title: 'Notebook', picture: 'notebook.jpg', price: 2000},
    {id: 2, title: 'Mouse', picture: 'mouse.jpg', price: 20},
    {id: 3, title: 'Keyboard', picture: 'keyboard.jpg', price: 200},
    {id: 4, title: 'Gamepad', picture: 'gamepad.jpg', price: 50},
];

const renderProduct = (title = 'Наименование товара', picture = 'Изображение товара', price = 'Цена товара') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="img/${picture}" alt="picture" width="204.8" height="156.3">
                <p>${price} RUB</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.picture, item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);