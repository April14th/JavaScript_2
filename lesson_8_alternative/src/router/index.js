import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/mainpage.vue';

Vue.use(VueRouter);

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../views/checkout.vue')
    },
    {
        path: '/product',
        name: 'Product',
        component: () => import('../views/product.vue')
    },
    {
        path: '/shoppingCart',
        name: 'ShoppingCart',
        component: () => import('../views/shoppingCart.vue')
    },
    {
        path: '/singlePage',
        name: 'SinglePage',
        component: () => import('../views/singlePage.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
  })
  
  export default router;