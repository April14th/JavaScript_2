class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    getSize() {
        const sizeButtons = document.querySelectorAll('.size');
        sizeButtons.forEach(function(sizeButton) {
            sizeButton.addEventListener('click', function(event) {
                hamburger.size = event.srcElement.dataset.size;

            });
        });
    }
    
    getStuffing() {
        const stuffingButtons = document.querySelectorAll('.stuffing');
        stuffingButtons.forEach(function(stuffingButton) {
            stuffingButton.addEventListener('click', function(event) {
                hamburger.stuffing = event.srcElement.dataset.stuffing;
            });
        });
    }

    calculatePrice() {
        const calcBtn = document.querySelector('.calc-btn');
        calcBtn.addEventListener('click', function() {
           let priceOfSize = +document.querySelector('input[name="size"]:checked').dataset.price;
           let priceOfStuffing = +document.querySelector('input[name="stuffing"]:checked').dataset.price;
           hamburger.sumOfPrices = priceOfSize + priceOfStuffing;
        });
    }


    // addTopping(topping) {    // Добавить добавку }
    // removeTopping(topping) { // Убрать добавку }
    // getToppings(topping) {   // Получить список добавок }
    // getSize() {              // Узнать размер гамбургера }
    // getStuffing() {          // Узнать начинку гамбургера }
    // calculatePrice() {       // Узнать цену }
    // calculateCalories() {    // Узнать калорийность }
}

const hamburger = new Hamburger();
hamburger.getSize();
hamburger.getStuffing();
hamburger.calculatePrice();