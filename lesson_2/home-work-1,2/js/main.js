class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = []; //массив товаров с версткой
        this._fetchProducts();
        this.render(); //вывод товаров на страницу
        this.getSumOfProductList();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', picture: 'notebook.jpg', price: 2000 },
            { id: 2, title: 'Mouse', picture: 'mouse.jpg', price: 20 },
            { id: 3, title: 'Keyboard', picture: 'keyboard.jpg', price: 200 },
            { id: 4, title: 'Gamepad', picture: 'gamepad.jpg', price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    getSumOfProductList() {
        let sumOfAllProducts = 0;
        for (let product of this.allProducts) {
            sumOfAllProducts += product.price;
        }
        //console.log(sumOfAllProducts);
    }
}

class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.picture = product.picture;
        this.price = product.price;
    }

    render() {
        return `<div class="product-item">
                <h3>${this.title}</h3>
                <img src="img/${this.picture}" alt="picture" width="204.8" height="156.3">
                <p>${this.price} RUB</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class Basket {
    constructor() {
        this.productItems = [];
        this.basketBtn = document.querySelector('.btn-cart');
        this.initBasket();
        this.basketContainer = document.querySelector('.basket');
        this.showOrHideBasket();
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

    renderBasket() {
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

    initBasket() {
        let tableTop = this.renderBasket();
        this.basketBtn.insertAdjacentHTML('afterend', tableTop);
    }

    addProductItemInBasket() {

    }

    deleteProductItemFromBasket() {

    }
}

class BasketItem {

    renderBasketItem() {

    }
}

const list = new ProductList();
const basket = new Basket();