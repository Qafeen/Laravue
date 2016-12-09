
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
// import { sync } from 'vuex-router-sync';
import store from './storage/store';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes,
    scrollBehavior (to, from, savedPosition) {
    	return { x: 0, y: 0 }
  	}
});

// Syncing store with vue-router
// sync(store, router);

router.beforeEach((to, from, next) => {
    if (to.meta.isAuthPage == true) {
        if ((!localStorage.token) && to.matched[0].name !== 'login') {
            next('login');
        } else {
            next('/');
        }

    } else {
        next();
    }
});

axios.defaults.baseURL = config.api;

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */
axios.interceptors.request.use(function (config) {
    config.headers.common['X-PERSONAL-TOKEN'] = localStorage.token || '';

    return config;
}, function (error) {
	return Promise.reject(error);
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