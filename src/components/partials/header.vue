<template>
    <div>
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <router-link class="navbar-brand" to="/">
                        Laravue
                    </router-link>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right" v-show="isLoggedIn()">
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                {{ user().name }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu" role="menu">
                                <!-- Authentication Links -->
                                <li>
                                    <a @click="logout()">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right" v-show="! isLoggedIn()">
                        <!-- Authentication Links -->
                        <li>
                            <router-link to="/login">Login</router-link>
                        </li>
                        <li>
                            <router-link to="/register">Register</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
    route-link {
        display: inline-block;
        padding-top: 15px;
        cursor:pointer;
    }

    route-link:hover {
        color: #333;
        background-color: transparent;
    }
</style>

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
            isLoggedIn() {
                return Boolean(localStorage.token);
            },

            logout() {
                window.localStorage.clear();

                this.$router.push({name: 'welcome'});
                this.$router.go(1);
            },

            title() {
                return typeof this.$route.meta.title !== 'undefined' ?
                        this.$route.meta.title :
                        'Dashboard';
            },

            user() {
                return JSON.parse(localStorage.getItem('user')) || {name: ''};
            }
        }
    }
</script>