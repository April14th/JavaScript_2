<template>
<div>
    <template v-if="type == 'mainCatalog'">
        <div class="row antirow2" id="catalog">
            <item type="catalog" v-for="item of $store.state.filteredCatalogItems" :key="item.productId" :item="item" />
        </div>
    </template>
    <template v-if="type == 'productCatalog'">
        <div class="row antirow2" id="catalog">
            <item type="catalog" v-for="item of sortTypeOfProducts" :key="item.productId" :item="item" />
        </div>
    </template>
    <template v-if="type == 'singlePageCatalog'">
        <div class="row antirow2" id="catalog">
            <item type="catalog" v-for="item of getRandomProducts" :key="item.productId" :item="item" />
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

        filterSizeProductCatalog() {
            if (this.$parent.selectedSizeOfProducts.length !== 0) {
                let arr = [];
                let filteredItems = [];
                for (let size of this.$parent.selectedSizeOfProducts) {
                    arr = this.filterPriceProductCatalog.filter(product => product.productSizes.includes(size));
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
                return this.filterPriceProductCatalog;
            }   
        },

        filterQuantityProductCatalog() {
            if (this.$parent.selectedNumberOfProducts === '06' || this.$parent.selectedNumberOfProducts === '12' || this.$parent.selectedNumberOfProducts === '24') {
                return this.filterSizeProductCatalog.filter(item => this.filterSizeProductCatalog.indexOf(item) < +this.$parent.selectedNumberOfProducts);
            } else {
                return this.filterSizeProductCatalog;
            }
        },

        sortTypeOfProducts() {
            if (this.$parent.selectedSortingTypeOfProducts === 'Price') {
                return this.filterQuantityProductCatalog.sort(function (a, b) {
                    return a.productPrice - b.productPrice;
                })
            } else if (this.$parent.selectedSortingTypeOfProducts === 'Name') {
                return this.filterQuantityProductCatalog.sort(function (a, b) {
                    if (a.productName > b.productName) {
                        return 1;
                    } else if (a.productName < b.productName) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
            }
        },

        getRandomProducts() {
            let keys = Object.keys(this.$store.state.filteredCatalogItems);
            let keysNum = keys.map(num => +num);
            let keysContainer = [];
            // for (let num of keysNum) {
            //     let randomKey = Math.floor(Math.random() * (keysNum[keysNum.length-1] - keysNum[0] + 1)) + keysNum[0];
            //     if ( keysContainer.length != 4 && !keysContainer.includes(randomKey) ) {
            //         keysContainer.push(randomKey);
            //     }
            // }
            if (this.$store.state.filteredCatalogItems != 0) {
                while (keysContainer.length < 4) {
                    let randomKey = Math.floor(Math.random() * (keysNum[keysNum.length-1] - keysNum[0] + 1)) + keysNum[0];
                    if (!keysContainer.includes(randomKey)) {
                        keysContainer.push(randomKey)
                    }
                }
                console.log(keysContainer);
                let randomProducts = [];
                for (let i = 0; i < keysContainer.length; i++) {
                    randomProducts.push(this.$store.state.filteredCatalogItems[keysContainer[i]]);
                }
                return randomProducts.sort(function (a, b) {
                    return a.productPrice - b.productPrice;
                })
            }
        }
    }
}
</script>

<style>

</style>