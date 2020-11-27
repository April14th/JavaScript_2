<template>
<div>
    <template v-if="type == 'headerBasket'">
        <div class="headerCartWrap" id="basket">
            <div class="headerCartWrapBlock"></div>
            <div class="headerCartWrapInAll">
                <div id="basket-items" class="headerCartWrapInAll">
                    <item type="basket" v-for="item of $store.state.basketItems" :key="item.productId" :item="item" />
                </div>
                <div class="headerCartWrapTotalPrice">
                    <div>total</div>
                    <div>${{ grandPrice }}</div>
                </div>
        
                <button type="button" class="productsButtonIndex">Checkout</button>
                <button type="button" class="productsButtonIndex">Go to cart</button>
            </div>
        </div>
    </template>
    <template v-if="type == 'shoppingCartBasket'">
        <div class="productDetailsAll container" id="basket2">
            <div class="productDetailsTitles">
                <div class="productDetailsTitlesLeft">Product Details</div>
                <div class="productDetailsTitlesRight">
                    <div>unite Price</div>
                    <div>quantity</div>
                    <div>shipping</div>
                    <div>Subtotal</div>
                    <div>Action</div>
                </div>
            </div>
            
            <item type="shoppingCartBasket" v-for="item of $store.state.basketItems" :key="item.productId" :item="item" />

            <div class="productDetailsButtons">
                <button @click="clearShoppingCartBasket()">cLEAR SHOPPING CART</button>
                <router-link to="/">cONTINUE sHOPPING</router-link>
            </div>
        </div>
    </template>
</div>
</template>

<script>
import item from './item.vue';
import { get, put, post, del } from '../utils/requests.js';

export default {
    components: { item },

    props: {
        type: {
			type: String,
			default: 'headerBasket'
		}
    },

    methods: {
        clearShoppingCartBasket() {
            this.$store.state.basketItems.forEach(basketItem => {
                this.$store.commit('clearShoppingCartBasket', 1)
            });
        }
    },

    mounted() {
        this.$store.dispatch('requestDataBasket');
    },

    computed: {
        grandPrice() {
            return this.$store.getters.grandPrice;
        }
    }
}
</script>

<style>

</style>