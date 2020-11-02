<template>
    <div class="row antirow2" id="catalog">
        <item type="catalog" v-for="item of items" :key="item.productId" :item="item" />
    </div>
</template>

<script>
import item from './item.vue';
import { get } from '../utils/requests.js';

export default {
    components: { item },

    data() {
        return {
            items: [],
            // filteredCatalogItems: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
        }
    },

    methods: {
        // filterCatalog() {
        //     this.filteredCatalogItems = this.items.filter(el => el.productName.match(new RegExp(this.filter, 'i')))
        // }
    },   
    
    mounted() {
        get(this.url).then(items => { this.items = items, this.filteredCatalogItems = items });
    }
}
</script>

<style>

</style>