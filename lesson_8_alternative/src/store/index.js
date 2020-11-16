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
        urlBasket: '/api/basket'
    },

    mutations: {
        filterCatalog() {
            this.state.filteredCatalogItems = this.state.items.filter(el => el.productName.match(new RegExp(this.state.filter, 'i')))
        },

        addToBasket(state, item) {
            let find = this.state.basketItems.find(el => el.productId == item.productId);
            if (find) {
                put(`${this.state.urlBasket}/${item.productId}`, { amount: 1 })
                    .then(s => {
                        if (s) {
                            find.amount++;
                        }
                    })
            } else {
                let newItem = Object.assign({}, item, { amount: 1 });
                post(this.state.urlBasket, newItem)
                    .then(s => {
                        if (s) {
                            this.state.basketItems.push(newItem);
                        }
                    })
            }
        },

        removeFromBasket(state, id) {
            let find = this.state.basketItems.find(el => el.productId == id);
            if (find.amount > 1) {
                put(`${this.state.urlBasket}/${id}`, { amount: -1 })
                    .then(s => {
                        if (s) {
                            find.amount--;
                        }
                    })
            } else {
                del(`${this.state.urlBasket}/${id}`)
                    .then(s => {
                        if (s) {
                            this.state.basketItems.splice(this.state.basketItems.indexOf(find), 1);
                        }
                    })
            }
        }
    },

    actions: {
        requestDataCatalog() {
            get(this.state.urlCatalog).then(items => { this.state.catalogItems = items, this.state.filteredCatalogItems = items });
        },

        requestDataBasket() {
            get(this.state.urlBasket).then(items => { this.state.basketItems = items.content });
        }
    },

    modules: {
        
    }
})