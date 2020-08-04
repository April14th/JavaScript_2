Vue.component('search-form', {
    props: ['user-search'],
    template: `<form action="#" class="search-form" @submit.prevent="$emit('filter')">
                <input type="text" class="search-field" v-model="userSearch">
                <button type="submit" class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>`
});