function _search (arr, id, choosenSize) {
    return arr.find(item => item.productId == id && item.choosenSize == choosenSize)
}

module.exports = {
    add(basket, item) {
        delete item.productSizes;
        item.amount = +item.amount;
        basket.push(item);
        return basket;
    },

    change(basket, id, choosenSize, amount) {
        let find = _search(basket, id, choosenSize);
        if (amount == -1) {
            find.amount += amount;
        } else {
            find.amount = amount;
        }
        return basket;
    },

    delete(basket, id, choosenSize) {
        if (id, choosenSize) {
            let find = _search(basket, id, choosenSize)
            basket.splice(basket.indexOf(find), 1);
        } else { 
            basket.splice(0, basket.length);
        }
        return basket;    
    }
}