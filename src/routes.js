export default [
    {
        path : '/',
        component: require('./components/Layouts/Default.vue'),
        name : 'DefaultLayout',
        children :  [ 
            {
                path: '/',
                name: 'welcome',
                meta: {
                    title: 'Welcome'
                },
                component: require('./components/Welcome.vue')
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                meta: {
                    title: 'Dashboard',
                    isAuthPage: true
                },
                component: require('./components/Dashboard.vue')
            }
        ]
    },
    {
        path: '/login/',
        name: 'login',
        component: require('./components/Login.vue')
    },
    {
        path: '/register/',
        name: 'register',
        component: require('./components/Register.vue')
    }
]