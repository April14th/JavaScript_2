<template>
<div>
    <template v-if="type == 'mainCatalog'">
        <div class="row antirow2" id="catalog">
            <item type="catalog" v-for="item of $store.state.filteredCatalogItems" :key="item.productId" :item="item" />
        </div>
    </template>
    <template v-if="type == 'productCatalog'">
        <div class="row antirow2" id="catalog">
            <item type="catalog" v-for="item of sortTypeOfProducts" :key="item.productId" :item="item"  @click="qqq" />
        </div>
    </template>
</div>
</template>

<script>
import item from './item.vue';

export default {
    components: { item },

    props: {
        type: {
			type: String,
			default: 'mainCatalog'
		}
    },

    mounted() {
        this.$store.dispatch('requestDataCatalog');
    },

    computed: {
        filterPriceProductCatalog() {
            return this.$store.state.filteredCatalogItems.filter(item => item.productPrice <= +this.$parent.selectedPriceOfProducts)
        },

        filterQuantityProductCatalog() {
            if (this.$parent.selectedNumberOfProducts === '06' || this.$parent.selectedNumberOfProducts === '12' || this.$parent.selectedNumberOfProducts === '24') {
                return this.filterPriceProductCatalog.filter(item => this.filterPriceProductCatalog.indexOf(item) < +this.$parent.selectedNumberOfProducts);
            } else {
                return this.filterPriceProductCatalog;
            }
        },

        filterSizeProductCatalog() {
            if (this.$parent.selectedSizeOfProducts.length !== 0) {
                let arr = [];
                let filteredItems = [];
                for (let size of this.$parent.selectedSizeOfProducts) {
                    arr = this.filterQuantityProductCatalog.filter(product => product.productSizes.includes(size));
                    if (filteredItems.length == 0) {
                        filteredItems = arr.slice();
                    } else {
                        for (let product of arr) {
                            if (!filteredItems.includes(product)) {
                                filteredItems.push(product);
                            }
                        }
                    }
                }
                return filteredItems;
            } else {
                return this.filterQuantityProductCatalog;
            }   
        },

        sortTypeOfProducts() {
            if (this.$parent.selectedSortingTypeOfProducts === 'Price') {
                return this.filterSizeProductCatalog.sort(function (a, b) {
                    return a.productPrice - b.productPrice;
                })
            } else if (this.$parent.selectedSortingTypeOfProducts === 'Name') {
                return this.filterSizeProductCatalog.sort(function (a, b) {
                    if (a.productName > b.productName) {
                        return 1;
                    } else if (a.productName < b.productName) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
            }
        }
    }
}
</script>

<style>

</style>