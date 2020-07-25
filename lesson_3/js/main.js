const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = []; //массив товаров с версткой
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render();
                this.getSumOfProducts();
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    getSumOfProducts() {
        return this.allProducts.reduce((sum, item) => sum += item.price, 0);
    }

    // getSumOfProducts() {
    //     let sumOfAllProducts = 0;
    //     for (let product of this.allProducts) {
    //         sumOfAllProducts += product.price;
    //     }
    // }
}

class ProductItem {
    constructor(product, picture = 'https://placehold.it/200x150') {
        this.id = product.id_product;
        this.title = product.product_name;
        this.picture = picture;
        this.price = product.price;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <h3>${this.title}</h3>
                <img src="${this.picture}" alt="picture" width="200" height="150">
                <p>${this.price} RUB</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Basket {
    constructor() {
        this.productItems = [];
        this.renderedBasketItems = [];
        this.basketBtn = document.querySelector('.btn-cart');
        this.initBasketContainer();
        this.basketContainer = document.querySelector('.basket');
        this.showOrHideBasket();
        this.getProductItemInBasket()
            .then(data => {
                this.productItems = data;
                this.renderBasketItem();
                this.addProductItemInBasket();
            });
    }

    showOrHideBasket() {
        this.basketBtn.addEventListener('click', () => {
            if (this.basketContainer.classList[1] == 'hidden') {
                this.basketContainer.classList.remove('hidden');
            } else {
                this.basketContainer.classList.add('hidden');
            }
        });
    }

    renderBasketContainer() {
        return `<table class="basket hidden">
            <tr class="table-top">
                <td>ID</td>
                <td>Наименование товара</td>
                <td>Количество</td>
                <td>Цена</td>
            </tr>
            <tr>
                <td colspan="2">Итого:&nbsp;<span class="overall-price">0</span><span>&nbsp;RUB</span></td>
            </tr>
        </table>`
    }

    initBasketContainer() {
        let tableTop = this.renderBasketContainer();
        this.basketBtn.insertAdjacentHTML('afterend', tableTop);
    }

    renderBasketItem() {
        const tableTop = document.querySelector('.table-top');
        for (let product of this.productItems.contents) {
            const basketItem = new BasketItem(product);
            this.renderedBasketItems.push(basketItem);
            tableTop.insertAdjacentHTML("afterend", basketItem.render());
        }
        document.querySelector('.overall-price').textContent = basket.productItems.amount;
    }

    getProductItemInBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    getSumOfBasketProducts() {
        let resultPrice = 0;
        for (let product of basket.productItems.contents) {
            let totalPrice = product.price * product.quantity;
            document.querySelector(`.table-item-price[data-id="${product.id_product}"]`).textContent = totalPrice;
            resultPrice += totalPrice;
            document.querySelector('.overall-price').textContent = resultPrice;
        }
    }

    addProductItemInBasket() {
        document.querySelectorAll('.buy-btn').forEach(function(buyButton) {
            buyButton.addEventListener('click', function(event) {
                let buttonId = +event.target.parentNode.dataset.id;
                for (let product of basket.productItems.contents) {
                    if (product.id_product == buttonId) {
                        product.quantity++;
                        basket.productItems.countGoods++;
                        basket.getSumOfBasketProducts();
                    }
                    document.querySelector(`.table-item-count[data-id="${product.id_product}"]`).textContent = product.quantity;
                }
            });
        });
    }

    deleteProductItemFromBasket() {

    }

    changeProductItemInBasket() {

    }
}

class BasketItem {
    constructor(product) {
        this.id = product.id_product;
        this.title = product.product_name;
        this.price = product.price;
        this.count = product.quantity;
    }

    render() {
        return `<tr class="table-item">
        <td class="table-item-id" data-id="${this.id}">${this.id}</td>
        <td class="table-item-title" data-id="${this.id}">${this.title}</td>
        <td class="table-item-count" data-id="${this.id}">${this.count}</td>
        <td class="table-item-price" data-id="${this.id}">${this.price}</td>
    </tr>`
    }
}

const list = new ProductList();
const basket = new Basket();