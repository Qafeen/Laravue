<template>
    <div class="flex-center position-ref full-height">
        <div class="content">
            <div class="top-right links">
                <router-link to="login">Login</router-link>
                <router-link to="register">Register</router-link>
            </div>
            <div class="title m-b-md">
                {{ title }}
            </div>

            <div class="links">
                <a href="https://github.com/Qafeen/Laravue/wiki">Documentation</a>
                <a href="https://github.com/Qafeen/Laravue">GitHub</a>
            </div>
        </div>
    </div>
</template>

<style>
    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        height: 100vh;
        margin: 0;
    }

    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .position-ref {
        position: relative;
    }

    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }

    .content {
        text-align: center;
    }

    .title {
        font-weight: 100;
        font-size: 84px;
    }

    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }

    .m-b-md {
        margin-bottom: 30px;
    }
</style>

<script>
    export default {
        name : 'Welcome',
        data() {
            return {
                title: config.appname
            }
        }
    }
</script>
