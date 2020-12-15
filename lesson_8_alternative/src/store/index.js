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
        urlCatalog: '/api/catalog',
        urlBasket: '/api/basket',
    },

    mutations: {
        filterCatalog(state) {
            state.filteredCatalogItems = state.catalogItems.filter(el => el.productName.match(new RegExp(state.filter, 'i')))
        },

        addToBasket(state, item) {
            let find = state.basketItems.find(el => el.productId == item.productId);
            if (find) {
                put(`${state.urlBasket}/${item.productId}`, { amount: 1 })
                    .then(s => {
                        if (s) {
                            find.amount++;
                        }
                    })
            } else {
                let newItem = Object.assign({}, item, { amount: 1 });
                post(state.urlBasket, newItem)
                    .then(s => {
                        if (s) {
                            state.basketItems.push(newItem);
                        }
                    })
            }
        },

        removeFromBasket(state, id) {
            let find = state.basketItems.find(el => el.productId == id);
            if (find.amount > 1) {
                put(`${state.urlBasket}/${id}`, { amount: -1 })
                    .then(s => {
                        if (s) {
                            find.amount--;
                        }
                    })
            } else {
                del(`${state.urlBasket}/${id}`)
                    .then(s => {
                        if (s) {
                            state.basketItems.splice(state.basketItems.indexOf(find), 1);
                        }
                    })
            }
        },

        clearShoppingCartBasket(state, id) {
                del(`${state.urlBasket}/${id}`)
                    .then(s => {
                        if (s) {
                            state.basketItems.splice(0, state.basketItems.length);
                        }
                    })
        },

        removeFromShoppingCartBasket(state, id) {
            let find = state.basketItems.find(el => el.productId == id);
                del(`${state.urlBasket}/${id}`)
                    .then(s => {
                        if (s) {
                            state.basketItems.splice(state.basketItems.indexOf(find), 1);
                        }
                    })
        },

        changeShoppingCartBasket(state, item) {
            let find = state.basketItems.find(el => el.productId == item.productId);
                put(`${state.urlBasket}/${item.productId}`, { amount: +item.amount })
                    .then(s => {
                        if (s) {
                            find.amount;
                        }
                    })
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