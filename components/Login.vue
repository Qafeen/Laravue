<template>
    <!-- BEGIN LOGIN BOX -->
    <div class="container">
        <div class="alert alert-danger hide">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <h4>Validation Failed!</h4>
        </div>
        <!-- END ERROR BOX -->
        <div data-action="/login" method="post" id="login-form">
            <input type="text" placeholder="Username/Email" name="username" v-model="email"
                   class="input-field form-control email" />
            <input type="password" placeholder="Password" name="password" v-model="password"
                   class="input-field form-control password" />
            <div class="checkbox">
                <label>
                    <input type="checkbox" name="remember" data-theme="b" class="hide">
                    <div class="text-right">Remember Me</div>
                </label>
            </div>
            <div class="div-login text-center" style="margin:auto;">
                <button style="display: inline;" id="submit-form" @click="login"
                        class="btn btn-login ladda-button" data-style="expand-left">
                    <span class="ladda-label">login</span>
                </button>
            </div>
        </div>
        <div class="login-links">
            <a href="/password/reset">Forgot password?</a>
            <br>
            <a href="/register">Don't have an account? <strong>Sign Up</strong></a>
        </div>
    </div>
</template>

<style></style>

<script>
    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },

        methods: {
            login() {
                this.$http.post(`${config.api}/login`, this.$data)
                .then(function(response) {
                    window.localStorage.user  = JSON.stringify(response.body.user);
                    window.localStorage.token = response.body.token;

                    this.$router.push('/');
                    this.$router.go(1);
                })
            }
        }
    }
</script>
