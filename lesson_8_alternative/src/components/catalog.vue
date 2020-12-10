<template>
<div>
    <template v-if="type == 'mainCatalog'">
        <div class="row antirow2" id="catalog">
            <item type="catalog" v-for="item of $store.state.filteredCatalogItems" 
            :key="item.productId" 
            :item="item" />
        </div>
    </template>
    <template v-if="type == 'productCatalog'">
        <div class="row antirow2" id="catalog">
            <item type="catalog" v-for="item of $parent.filterQuantityProductCatalog" 
            :key="item.productId"
            :item="item" />
        </div>
    </template>
    <template v-if="type == 'singlePageCatalog'">
        <div class="row antirow2" id="catalog">
            <item type="catalog" v-for="item of $parent.getRandomProducts" 
            :key="item.productId" 
            :item="item" />
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
        },

        renderPagesProductCatalog: {
            type: Array
        }
    },

    // computed: {
        // filterPriceProductCatalog() {
        //     return this.$store.state.filteredCatalogItems.filter(item => item.productPrice <= +this.$parent.selectedPriceOfProducts)
        // },

        // filterSizeProductCatalog() {
        //     if (this.$parent.selectedSizeOfProducts.length !== 0) {
        //         let arr = [];
        //         let filteredItems = [];
        //         for (let size of this.$parent.selectedSizeOfProducts) {
        //             arr = this.filterPriceProductCatalog.filter(product => product.productSizes.includes(size));
        //             if (filteredItems.length == 0) {
        //                 filteredItems = arr.slice();
        //             } else {
        //                 for (let product of arr) {
        //                     if (!filteredItems.includes(product)) {
        //                         filteredItems.push(product);
        //                     }
        //                 }
        //             }
        //         }
        //         return filteredItems;
        //     } else {
        //         return this.filterPriceProductCatalog;
        //     }   
        // },

        // filterQuantityProductCatalog() {
        //     if (this.$parent.selectedNumberOfProducts === '06' || this.$parent.selectedNumberOfProducts === '12' || this.$parent.selectedNumberOfProducts === '24') {
        //         return this.filterSizeProductCatalog.filter(item => this.filterSizeProductCatalog.indexOf(item) < +this.$parent.selectedNumberOfProducts);
        //     } else {
        //         return this.filterSizeProductCatalog;
        //     }
        // },

        // sortTypeOfProducts() {
        //     if (this.$parent.selectedSortingTypeOfProducts === 'Price') {
        //         return this.filterQuantityProductCatalog.sort(function (a, b) {
        //             return a.productPrice - b.productPrice;
        //         })
        //     } else if (this.$parent.selectedSortingTypeOfProducts === 'Name') {
        //         return this.filterQuantityProductCatalog.sort(function (a, b) {
        //             if (a.productName > b.productName) {
        //                 return 1;
        //             } else if (a.productName < b.productName) {
        //                 return -1;
        //             } else {
        //                 return 0;
        //             }
        //         })
        //     }
        // },

        // renderPagesProductCatalog() {
        //     if (this.$store.state.filteredCatalogItems != 0) {
        //         let productsFilteredLength = this.filterSizeProductCatalog.length;
        //         let selectedNumberOfProducts = isNaN(this.$parent.selectedNumberOfProducts) ? this.filterSizeProductCatalog.length : +this.$parent.selectedNumberOfProducts;
        //         let count =  productsFilteredLength / selectedNumberOfProducts;
        //         class PaginationPage {
        //             constructor(pageNumber, pageIsActive) {
        //                 this.pageNumber = pageNumber,
        //                 this.pageIsActive = pageIsActive
        //             }
        //         }
        //         for (let i = 0; i <= Math.ceil(count); i++) {
        //             for (let item of this.$parent.pagination) {
        //                 let newPaginationItem = new PaginationPage(i, false);
        //                 if (item.pageNumber <= Math.ceil(count) && !this.$parent.pagination.some(obj => obj.pageNumber == newPaginationItem.pageNumber) && newPaginationItem.pageNumber != 0) {
        //                     this.$parent.pagination.push(newPaginationItem);
        //                 } else if (item.pageNumber > Math.ceil(count) && this.$parent.pagination.length > 1 || this.$parent.selectedNumberOfProducts === 'All' && this.$parent.pagination.length > 1) {
        //                     this.$parent.pagination.pop();
        //                 } else if (item.pageNumber == Math.ceil(count) && this.$parent.pagination.length > 1 && selectedNumberOfProducts == 24) {
        //                     this.$parent.pagination.pop();
        //                 }
        //             }
        //         }
        //         return this.$parent.pagination;
        //     }
        // }
    // }
}
</script>

<style>

</style>