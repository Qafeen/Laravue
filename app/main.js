
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
// import { sync } from 'vuex-router-sync';
import store from '../storage/store';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

/**
 * Registering components
 */
Vue.component('app-header', require('../components/partials/header.vue'));
Vue.component('app-leftbar', require('../components/partials/leftbar.vue'));
Vue.component('app-message', require('../components/partials/message.vue'));

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
});

// Syncing store with vue-router
// sync(store, router);

router.beforeEach((to, from, next) => {
    if ((! localStorage.token) && to.matched[0].name !== 'login') {
        next('login');
    } else if (localStorage.token && to.matched[0].name === 'login') {
        next('/');
    } else {
        next();
    }
});

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-PERSONAL-TOKEN', localStorage.token || '');

    next();
});


new Vue({
    store,
    router,
    data() {
        return { }
    },
    methods: {
        isAuth() {
            return localStorage.token || false;
        }
    }
}).$mount('#app');
