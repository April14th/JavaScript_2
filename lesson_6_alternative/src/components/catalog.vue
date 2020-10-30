<template>
    <div class="row antirow2" id="catalog">
        <item v-for="item of items" :key="item.productId" :item="item" :url="url" />
    </div>
</template>

<script>
import item from './item.vue';

export default {
    components: { item },

    data() {
        return {
            // filer: '',
            items: [],
            filteredCatalogItems: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
        }
    },

    methods: {
        get(url) {
            return fetch(url).then(d => d.json());
        },

        // filterCatalog() {
        //     this.filteredCatalogItems = this.items.filter(el => el.productName.match(new RegExp(this.filter, 'i')))
        // }
    },
    
    mounted() {
        this.get(this.url).then(items => { this.items = items, this.filteredCatalogItems = items });
    }
}
</script>

<style>

</style>