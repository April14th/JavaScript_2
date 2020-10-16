class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppingsList = [];
        this.getSize();
        this.getStuffing();
        this.getToppings();
        this.calculateСharacteristicOfHamburger();
    }

    getSize() {
        const sizeButtons = document.querySelectorAll('.size');
        sizeButtons.forEach(function (sizeButton) {
            sizeButton.addEventListener('click', function (event) {
                hamburger.size = event.target.dataset.size;
            });
        });
    }

    getStuffing() {
        const stuffingButtons = document.querySelectorAll('.stuffing');
        stuffingButtons.forEach(function (stuffingButton) {
            stuffingButton.addEventListener('click', function (event) {
                hamburger.stuffing = event.target.dataset.stuffing;
            });
        });
    }

    calculateСharacteristicOfHamburger() {
        const calcBtn = document.querySelector('.calc-btn');
        this.calculatePrice(calcBtn);
        this.calculateCalories(calcBtn);
        this.initOrder(calcBtn);
    }

    calculatePrice(button) {
        button.addEventListener('click', function () {
            let priceFromSize = +document.querySelector('input[name="size"]:checked').dataset.price;
            let priceFromStuffing = +document.querySelector('input[name="stuffing"]:checked').dataset.price;
            let pricesFromToppings = document.querySelectorAll('input[name="topping"]:checked');
            let sumPricesFromToppings = 0;
            pricesFromToppings.forEach(function (priceFromTopping) {
                sumPricesFromToppings += +priceFromTopping.dataset.price;
            });
            hamburger.priceOfHamburger = priceFromSize + priceFromStuffing + sumPricesFromToppings;
        });
    };

    calculateCalories(button) {
        button.addEventListener('click', function () {
            let caloriesFromSize = +document.querySelector('input[name="size"]:checked').dataset.calorific;
            let caloriesFromStuffing = +document.querySelector('input[name="stuffing"]:checked').dataset.calorific;
            let caloriesFromToppings = document.querySelectorAll('input[name="topping"]:checked');
            let sumCaloriesFromToppings = 0;
            caloriesFromToppings.forEach(function (caloriesFromTopping) {
                sumCaloriesFromToppings += +caloriesFromTopping.dataset.calorific;
            });
            hamburger.calorificOfHamburger = caloriesFromSize + caloriesFromStuffing + sumCaloriesFromToppings;
        });
    };

    addTopping(topping, event) {
        topping = event.srcElement.dataset.topping;
        hamburger.toppingsList.push(topping);
    }

    removeTopping(topping, event) {
        topping = event.srcElement.dataset.topping;
        let indexTopping = hamburger.toppingsList.indexOf(topping);
        hamburger.toppingsList.splice(indexTopping, 1);
    }

    getToppings(topping) {
        const toppingButtons = document.querySelectorAll('.topping')
        toppingButtons.forEach(function (toppingButton) {
            toppingButton.addEventListener('click', function (event) {
                if (toppingButton.checked) {
                    hamburger.addTopping(topping, event);
                } else if (toppingButton) {
                    hamburger.removeTopping(topping, event);
                };
            });
        });
    }

    renderOrder() {
        return `<div class="order">
                    <h4 class="order-title">Вы заказали:</h4>
                    <span class="order-item">Гамбургер: ${hamburger.size}, ${hamburger.stuffing}</span>
                    <span class="order-item">Дополнительные добавки: ${hamburger.toppingsList.length ? hamburger.toppingsList.join(', ') : 'отсутствуют' }</span>
                    <span class="order-item">Цена: ${hamburger.priceOfHamburger} RUB</span>
                    <span class="order-item">Количесво каллорий: ${hamburger.calorificOfHamburger} кКал</span>
            </div>`
    }

    initOrder(button) {
        button.addEventListener('click', function() {
            document.getElementById('order-container').innerHTML = hamburger.renderOrder();
        });
    }
}

const defaultSize = document.querySelector('input[name="size"]:checked').dataset.size;
const defaultStuffing = document.querySelector('input[name="stuffing"]:checked').dataset.stuffing;
const hamburger = new Hamburger(defaultSize, defaultStuffing);