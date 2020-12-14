<template>
<div>
	<template v-if="type == 'catalog'">
		<div class="feturedItem">
            <div class="feturedImgWrap">
                 <div class="feturedBuy">
                    <button @click="$store.commit('addToBasket', item)">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
                <img class="feturedProduct" :src="item.productImg" alt="product1">
            </div>
            <div>
                <div class="feturedBuySm d-flex flex-column justify-content-around align-items-center align-items-md-start">
                    <div class="feturedItemName">{{ item.productName }}</div>
                    <div class="feturedItemPrice">${{ item.productPrice }}</div>
                    <button class="d-md-none">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
	</template>
    <template v-if="type == 'basket'">
		<div class="d-flex flex-column headerCartWrapIn">
            <img :src="item.productImg" alt="" width="85" height="100">
            <div>
                <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </span>
                <div>{{ item.productName }}</div>
                <div class="headerCartWrapPrice">{{ item.amount }}
                    <span>x</span> ${{ item.productPrice }}
                </div>
            </div>
            <button class="fas fa-times-circle basketDelBtn" @click="$store.commit('removeFromBasket', item.productId)"></button>
        </div>
	</template>
    <template v-if="type == 'shoppingCartBasket'">
        <div class="productDetailsProduct">
            <div class="productDetailsDescription">
                <img :src="item.productImg" alt="Product1">
                <div class="productDescription">
                    <div class="productDescriptionTitle">{{ item.productName }}</div>
                    <div>
                        <div class="productDescriptionFeature">Color: <span>Red</span></div>
                        <div class="productDescriptionFeature">Size: <span>Xll</span></div>
                    </div>
                </div>
            </div>
            <div class="productDetailsRight">
                <div class="productDetailsPrice">${{ item.productPrice }}</div>
                <div class="productDetailsQuantity">
                    <form>
                        <input ref="input" type="number" min="1" max="99" v-model="item.amount" @input="$store.commit('changeShoppingCartBasket', item)">
                    </form>
                </div>
                <div class="productDetailsShipping">Free</div>
                <div class="productDetailsSubtotal">${{ item.productPrice * item.amount }}</div>
                <div class="productDetailsAction"><i class="fas fa-times-circle" @click="$store.commit('removeFromShoppingCartBasket', item.productId)"></i></div>
            </div>
        </div>
	</template>
</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			default: () => ({
				productName: 'Product',
				productPrice: 100
			})
		},

		type: {
			type: String,
			default: 'catalog'
        }
    }
}

</script>

<style>
</style>