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
        let sumOfAllProducts = this.allProducts.reduce((sum, item) => sum += item.price, 0);
        console.log(sumOfAllProducts);
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
        this.basketItems = [];
        this.basketBtn = document.querySelector('.btn-cart');
        this.initBasketContainer();
        this.basketContainer = document.querySelector('.basket');
        this.showOrHideBasket();
        this.addProductItemInBasket()
            .then(data => {
                this.productItems = [data];
                this.renderBasketItem();
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
        for (let product of this.productItems) {
            const item = new BasketItem(product);
            this.basketItems.push(item);
            basketContainer.insertAdjacentHTML("beforeend", item.render());
        }
    }

    addProductItemInBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }

    deleteProductItemFromBasket() {

    }

    changeProductItemInBasket() {

    }
}

class BasketItem {

    render() {
        return `<tr class="table-item">
        <td>${basket.productItems}</td>
        <td>Наименование товара</td>
        <td>Количество</td>
        <td>Цена</td>
    </tr>`
    }

    init() {
        let tableItem = this.renderBasketItem();
        this.document.querySelector('.table-top').insertAdjacentHTML('afterend', tableItem);
    }
}

const list = new ProductList();
const basket = new Basket();