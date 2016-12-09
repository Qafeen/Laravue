import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: window.localStorage.token,
        user: JSON.parse(window.localStorage.user || '[]'),
        errors: null
    },
    mutations: {
        authenticate: function (state, user) {
            // Save login info in our data and set header in case it's not set already
            state.user = user;
            state.authenticated = true;
            state.token = window.localStorage.token;
        },

        destroyLogin: function (state) {
            // Cleanup when token was invalid our user has logged out
            state.user = null;
            state.token = null;
            state.authenticated = false;
            delete window.localStorage.token;
            if (this.$route.auth) this.$route.router.go('/login');
        },

        errors(state, msg) {
            state.errors = msg;
        }
    },
    getters: {
        host: (state) => {
            return state.host;
        },
        getToken: (state) => {
            return state.user.token;
        },
        name: (state) => {
            return state.name;
        },
        user: (state) => {
            return state.user;
        },
        errors: (state) => {
            return state.errors;
        }
    }
});