<template>
    <div class="row antirow2" id="catalog">
        <item type="catalog" v-for="item of $store.state.filteredCatalogItems" :key="item.productId" :item="item" />
    </div>
</template>

<script>
import item from './item.vue';

export default {
    components: { item },

    mounted() {
        this.$store.dispatch('requestDataCatalog');
    }
}
</script>

<style>

</style>