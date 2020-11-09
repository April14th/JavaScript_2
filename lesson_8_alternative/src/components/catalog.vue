<template>
    <div class="row antirow2" id="catalog">
        <item type="catalog" v-for="item of $parent.$children[0].$refs.searching.filteredCatalogItems" :key="item.productId" :item="item" />
    </div>
</template>

<script>
import item from './item.vue';

export default {
    components: { item }
}
</script>

<style>

</style>