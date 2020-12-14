<template>
<div>
    <template v-if="type == 'feturedCatalog'">
        <div class="row antirow2" id="catalog">
            <item type="catalog" v-for="item of $parent.filterFeturedCatalog" 
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
    }
}
</script>

<style>

</style>