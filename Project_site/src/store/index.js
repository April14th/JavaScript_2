import Vue from 'vue';
import Vuex from 'vuex';

import { get, put, post, del } from '../utils/requests.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        filter: '',
        basketItems: [],
        catalogItems: [],
        filteredCatalogItems: [],
        choosenProduct: [],
        urlCatalog: '/api/catalog',
        urlBasket: '/api/basket',
    },

    mutations: {
        filterCatalog(state) {
            state.filteredCatalogItems = state.catalogItems.filter(el => el.productName.match(new RegExp(state.filter, 'i')))
        },

        addToBasket(state, item) {
            if (state.choosenProduct.length != 0) {
                let find = state.basketItems.find(el => el.productId == item.productId && el.choosenSize == item.choosenSize);
                if (find) {
                    put(`${state.urlBasket}/${item.productId}/${item.choosenSize}`, { amount: +find.amount + +item.amount})
                        .then(s => {
                            if (s) {
                                find.amount = +find.amount + +item.amount;
                            }
                        })
                } else {
                    let newItem = Object.assign({}, item)
                    post(state.urlBasket, newItem)
                        .then(s => {
                            if (s) {
                                state.basketItems.push(newItem);
                            }
                        })
                }
            }
        },

        removeFromBasket(state, item) {
            let find = state.basketItems.find(el => el.productId == item.productId && el.choosenSize == item.choosenSize);
            if (find.amount > 1) {
                put(`${state.urlBasket}/${item.productId}/${item.choosenSize}`, { amount: -1 })
                    .then(s => {
                        if (s) {
                            find.amount--;
                        }
                    })
            } else {
                del(`${state.urlBasket}/${item.productId}/${item.choosenSize}`)
                    .then(s => {
                        if (s) {
                            state.basketItems.splice(state.basketItems.indexOf(find), 1);
                        }
                    })
            }
        },

        clearShoppingCartBasket(state) {
                del(`${state.urlBasket}`)
                    .then(s => {
                        if (s) {
                            state.basketItems.splice(0, state.basketItems.length);
                        }
                    })
        },

        removeFromShoppingCartBasket(state, item) {
            let find = state.basketItems.find(el => el.productId == item.productId && el.choosenSize == item.choosenSize);
                del(`${state.urlBasket}/${item.productId}/${item.choosenSize}`)
                    .then(s => {
                        if (s) {
                            state.basketItems.splice(state.basketItems.indexOf(find), 1);
                        }
                    })
        },

        changeShoppingCartBasket(state, item) {
            put(`${state.urlBasket}/${item.productId}/${item.choosenSize}`, { amount: +item.amount })

        },

        getChoosenProduct(state, product) {
            state.choosenProduct = Object.assign({}, product, { amount: 1, choosenSize: product.productSizes[0] });
            return state.choosenProduct;
        }
    },

    getters: {
        grandPrice: state => {
            let sum = 0;
            state.basketItems.forEach(function (basketItem) {
                sum += basketItem.productPrice * basketItem.amount
            });
            return sum ? sum : 0;
        }
    },

    actions: {
        requestDataCatalog() {
            get(this.state.urlCatalog).then(items => { this.state.catalogItems = items, this.state.filteredCatalogItems = items });
        },

        requestDataBasket() {
            get(this.state.urlBasket).then(items => { this.state.basketItems = items });
        },
    },

    modules: {
        
    }
})