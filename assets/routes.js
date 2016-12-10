export default [
    {
        path: '/',
        component: require('../components/layouts/Default.vue'),
        name: 'DefaultLayout',
        children: [
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
        ]
    },
    {
        path: '/dashboard',
        component: require('../components/layouts/App.vue'),
        meta: {
            isAuthPage: true
        },
        children: [
            {
                path: '/',
                name: 'dashboard',
                meta: {
                    title: 'Dashboard'
                },
                component: require('../components/Dashboard.vue')
            },
        ]
    }
]
