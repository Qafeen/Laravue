<template>
    <!-- START SIGNUP BOX -->
    <div class="login-form">

        <div class="alert alert-danger" v-show="errors">
            <button type="button" class="close" @click="errors = false">&times;</button>
            <h4>Error!</h4>
            <h5 v-for="error in errors">{{ error }}</h5>
        </div>

        <input id="name" type="text" class="form-control"
               v-model="name" @keyup="snakeCaseUsername" autofocus />
        <input id="username" type="text" class="form-control"
               v-model="username" placeholder="Username" />
        <input id="email" type="email" class="form-control"
               v-model="email" placeholder="Email" />
        <input id="password" type="password" class="form-control"
               v-model="password" placeholder="Password" />

        <div class="form-group has-error has-feedback">
            <input id="password-confirm" type="password" class="form-control"
                   v-model="password_confirmation" placeholder="Confirm Password" />
        </div>

        <button id="register-btn" class="btn btn-login ladda-button"
                data-style="expand-left" @click="register">
            <span class="ladda-label">{{ register_text }}</span>
        </button>
        <div class="login-links">
            <a href="password_forgot.html">Forgot password?</a>
            <br>
            <a href="login.html">Already have an account? <strong>Sign In</strong></a>
        </div>
    </div>
</template>

<style>
    .login-box {
        max-width: 100%;
        margin-top: 0;
    }
</style>

<script>
    export default {
        data() {
            return {
                name: '',
                username: '',
                email: '',
                password: '',
                password_confirmation: '',
                register_text: 'SIGN UP',
                errors: false
            };
        },

        props: [ 'url' ],

        methods: {
            snakeCaseUsername() {
                return this.username = this.name.split(' ').map(function (item) {
                    return item.charAt(0).toLowerCase() + item.substring(1);
                }).join('-');
            },
            register() {
//                var l = Ladda.create(document.querySelector('#register-btn'));
//                l.start();

                this.register_text = 'Please wait...';
                this.$http.post(store.host + 'api/register', this.$data).then((response) => {
                    window.location = window.location.origin;
                }, (response) => {
                    console.log(response);
                    this.$set('errors', response.data);

                    this.register_text = 'SIGN UP';
//                    l.stop();
                });
            },
            changeTitle() {
                document.title = window.config.appname + ' | Register'
            }
        },
    };
</script>