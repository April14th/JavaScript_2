<template>
<div>
    <template v-if="type == 'mainCatalog'">
        <div class="row antirow2" id="catalog">
            <item type="catalog" v-for="item of $store.state.filteredCatalogItems" :key="item.productId" :item="item" />
        </div>
    </template>
    <template v-if="type == 'productCatalog'">
        <div class="row antirow2" id="catalog">
            <item type="catalog" v-for="item of filterProductCatalog" :key="item.productId" :item="item" />
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
        filterProductCatalog() {
            return this.$store.state.filteredCatalogItems.filter(item => this.$store.state.filteredCatalogItems.indexOf(item) < 6);
        }
    }
}
</script>

<style>

</style>