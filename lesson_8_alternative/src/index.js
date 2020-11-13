import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './layout/styles/styles.css';

import Vue from 'vue';
import router from './router';

import app from './app.vue';

new Vue({
    router,
    render: h => h(app)
}).$mount('#app');