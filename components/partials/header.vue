<template>
    <div class="top-right links" v-if="localStorage.token">
        <router-link to="login">Login</router-link>
    </div>
    <div class="top-right links" v-else>
        <router-link to="Dashboard">Dashboard</router-link>
        <a href="#" @click="logout()">Logout</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: this.$store.getters.user
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