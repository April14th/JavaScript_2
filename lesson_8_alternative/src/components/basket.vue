<template>
<div>
    <template v-if="type == 'headerBasket'">
        <div class="headerCartWrap" id="basket">
            <div class="headerCartWrapBlock"></div>
            <div class="headerCartWrapInAll">
                <div id="basket-items" class="headerCartWrapInAll">
                    <item type="basket" v-for="item of $store.state.basketItems" :key="item.productId" :item="item" @delete="remove" />
                </div>
                <div class="headerCartWrapTotalPrice">
                    <div>total</div>
                    <div>${{ totalPrice }}</div>
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
            
            <item type="shoppingCartBasket" v-for="item of $store.state.basketItems" 
            :key="item.productId" :item="item" :totalPrice="totalPrice" @delete="totalRemove" @count="count" />

            <div class="productDetailsButtons">
                <button>cLEAR SHOPPING CART</button>
                <button>cONTINUE sHOPPING</button>
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
        totalRemove(id) {
            let find = this.items.find(el => el.productId == id);
                del(`${this.url}/${id}`)
                    .then(s => {
                        if (s) {
                            this.items.splice(this.items.indexOf(find), 1);
                        }
                    })
        }
    },

    mounted() {
        this.$store.dispatch('requestDataBasket');
    },

    // computed: {
    //     totalPrice() {
    //         let sum = 0;
    //         this.items.forEach(function (item) {
    //             sum += item.productPrice * item.amount
    //         });
    //         return sum ? sum : 0;
    //     }
    // },
}
</script>

<style>

</style>