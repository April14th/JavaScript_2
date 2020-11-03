<template>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for Item..." v-model="filter" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" @click="filterCatalog" type="button"><i class="fas fa-search"></i></button>
        </div>
    </div>
</template>

<script>
import { get } from '../utils/requests.js';

export default {
    data() {
        return {
            filter: '',
            items: [],
            filteredCatalogItems: [],
            url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json'
        }
    },
    
    methods: {
        filterCatalog() {
            this.filteredCatalogItems = this.items.filter(el => el.productName.match(new RegExp(this.filter, 'i')))
        }
    },

    mounted() {
        get(this.url).then(items => { this.items = items, this.filteredCatalogItems = items });
    }
}
</script>

<style>

</style>