function _search (arr, id) {
    return arr.find(item => item.productId == id)
}

module.exports = {
    add(basket, item) {
        basket.content.push(item);
        return basket;
    },

    change(basket, id, amount) {
        let find = _search(basket.content, id)
        if (amount == 1 || amount == -1) {
            find.amount += amount;
        } else {
            find.amount = amount
        }
        return basket;
    },

    delete(basket, id) {
        if (id != 1) {
            let find = _search(basket.content, id)
            basket.content.splice(basket.content.indexOf(find), 1);
        } else { 
            basket.content.splice(0, basket.content.length);
        }
        return basket;    
    }
}