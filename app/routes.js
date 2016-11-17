export default [
    {
        path: '/',
        name: 'welcome',
        meta: {
            title: 'Welcome'
        },
        component: require('../components/Welcome.vue')
    },
    {
        path: '/login/',
        name: 'login',
        component: require('../components/Login.vue')
    },
    {
        path: '/register/',
        name: 'register',
        component: require('../components/Register.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
            title: 'Dashboard'
        },
        component: require('../components/Dashboard.vue')
    }
];
