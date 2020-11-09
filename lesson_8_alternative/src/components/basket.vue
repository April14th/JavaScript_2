<template>
    <div class="headerCartWrap" id="basket">
        <div class="headerCartWrapBlock"></div>
        <div class="headerCartWrapInAll">
            <div id="basket-items" class="headerCartWrapInAll">
                <item type="basket" v-for="item of items" :key="item.productId" :item="item" @delete="remove" />
		    </div>
            <div class="headerCartWrapTotalPrice">
                <div>total</div>
                <div>${{ total }}</div>
            </div>
    
            <button type="button" class="productsButtonIndex">Checkout</button>
            <button type="button" class="productsButtonIndex">Go to cart</button>
        </div>
    </div>
</template>

<script>
import item from './item.vue';
import { get, put, post, del } from '../utils/requests.js';

export default {
    components: { item },

    data() {
        return {
            items: [],
            url: '/api/basket',
        }
    },

    methods: {
        add(item) {
            let find = this.items.find(el => el.productId == item.productId);
            if (find) {
                put(`${this.url}/${item.productId}`, { amount: 1 })
                    .then(s => {
                        if (s) {
                            find.amount++;
                        }
                    })
            } else {
                let newItem = Object.assign({}, item, { amount: 1 });
                post(this.url, newItem)
                    .then(s => {
                        if (s) {
                            this.items.push(newItem);
                        }
                    })
            }
        },

        remove(id) {
            let find = this.items.find(el => el.productId == id);
            if (find.amount > 1) {
                put(`${this.url}/${id}`, { amount: -1 })
                    .then(s => {
                        if (s) {
                            find.amount--;
                        }
                    })
            } else {
                del(`${this.url}/${id}`)
                    .then(s => {
                        if (s) {
                            this.items.splice(this.items.indexOf(find), 1);
                        }
                    })
            }
        },
    },
    
    mounted() {
        get(this.url).then(items => { this.items = items.content });
    },

    computed: {
        total() {
            let sum = 0;
            this.items.forEach(function (item) {
                sum += item.productPrice * item.amount
            });
            return sum ? sum : 0;
        }
    },
}
</script>

<style>

</style>