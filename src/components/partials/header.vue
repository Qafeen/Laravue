<template>

    <div>
        <nav class="navbar navbar-default" role="navigation">
            <div class="container">
                <a class="navbar-brand" href="#">Brand</a>
                <ul class="nav navbar-nav">
                    <li class="active" v-if="!token">
                        <router-link to="Dashboard">Dashboard</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#" @click.prevent="logout()">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    
</template>

<script>
    export default {
        name : 'Header',
        data() {
            return {
                user: this.$store.getters.user,
                token: localStorage.token
            }
        },

        methods: {
            logout() {
                window.localStorage.clear();

                this.$router.push({name: 'login'});
                this.$router.go(1);
            },
            title() {
                return typeof this.$route.meta.title !== 'undefined' ? this.$route.meta.title : 'Dashboard';
            }
        }
    }
</script>