<template>
    <div id="app">
        <headerComp />
        <router-view />
    </div>
</template>

<script>
import headerComp from './components/header.vue';

export default {
    components: { headerComp }
}
</script>

<style>

</style>