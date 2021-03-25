<template>
    <div id="app">
        <headerComp />
        <router-view />
        <footerComp />
    </div>
</template>

<script>
import headerComp from './components/header.vue';
import footerComp from './components/footer.vue';

export default {
    components: { headerComp, footerComp }
}
</script>

<style>

</style>