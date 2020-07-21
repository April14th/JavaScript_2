class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppingsList = [];
        this.getSize();
        this.getStuffing();
        this.calculateСharacteristicOfHamburger();
    }

    getSize() {
        const sizeButtons = document.querySelectorAll('.size');
        sizeButtons.forEach(function (sizeButton) {
            sizeButton.addEventListener('click', function (event) {
                hamburger.size = event.srcElement.dataset.size;

            });
        });
    }

    getStuffing() {
        const stuffingButtons = document.querySelectorAll('.stuffing');
        stuffingButtons.forEach(function (stuffingButton) {
            stuffingButton.addEventListener('click', function (event) {
                hamburger.stuffing = event.srcElement.dataset.stuffing;
            });
        });
    }

    calculateСharacteristicOfHamburger() {
        const calcBtn = document.querySelector('.calc-btn');
        this.calculatePrice(calcBtn);
        this.calculateCalories(calcBtn);
    }

    calculatePrice(button) {
        button.addEventListener('click', function () {
            let priceFromSize = +document.querySelector('input[name="size"]:checked').dataset.price;
            let priceFromStuffing = +document.querySelector('input[name="stuffing"]:checked').dataset.price;
            hamburger.priceOfHamburger = priceFromSize + priceFromStuffing;
        });
    };

    calculateCalories(button) {
        button.addEventListener('click', function () {
            let caloriesFromSize = +document.querySelector('input[name="size"]:checked').dataset.calorific;
            let caloriesFromStuffing = +document.querySelector('input[name="stuffing"]:checked').dataset.calorific;
            hamburger.calorificOfHamburger = caloriesFromSize + caloriesFromStuffing;
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


    // getToppings(topping) {
    //     const toppingButtons = document.querySelectorAll('.topping');
    //     toppingButtons.forEach(function(toppingButton) {
    //         topping = toppingButton.getAttribute('data-topping');
    //         hamburger.toppingsList.push(topping);
    //     });
    // };

    // addTopping(topping) {    // Добавить добавку }
    // removeTopping(topping) { // Убрать добавку }
    // getToppings(topping) {   // Получить список добавок }
    // getSize() {              // Узнать размер гамбургера }
    // getStuffing() {          // Узнать начинку гамбургера }
    // calculatePrice() {       // Узнать цену }
    // calculateCalories() {    // Узнать калорийность }
}

const hamburger = new Hamburger();
hamburger.getToppings();


