function _search (arr, id) {
    return arr.find(item => item.productId == id)
}

module.exports = {
    add(basket, item) {
        delete item.productSizes;
        basket.push(item);
        return basket;
    },

    change(basket, id, amount) {
        let find = _search(basket, id)
        if (amount == 1 || amount == -1) {
            find.amount += amount;
        } else {
            find.amount = amount
        }
        return basket;
    },

    delete(basket, id) {
        if (id != 1) {
            let find = _search(basket, id)
            basket.splice(basket.indexOf(find), 1);
        } else { 
            basket.splice(0, basket.length);
        }
        return basket;    
    }
}