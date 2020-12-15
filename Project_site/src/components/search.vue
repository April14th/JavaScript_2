<template>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Search for Item..." v-model="$store.state.filter" aria-label="Recipient's username" aria-describedby="basic-addon2">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" @click="$store.commit('filterCatalog')" type="button"><i class="fas fa-search"></i></button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>