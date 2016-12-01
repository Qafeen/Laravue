<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login</div>
                    <div class="panel-body">
                        <div class="form-horizontal" role="form">
                            <div class="form-group">
                                <label for="username" class="col-md-4 control-label">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="username" type="username" class="form-control"
                                           name="username" v-model="username" required autofocus>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control"
                                           name="password" v-model="password" required>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-8 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>

                                    <router-link class="btn btn-link" to="password/reset">
                                        Forgot Your Password?
                                    </router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>

<script>
    export default {
        props: ['errors'],

        data() {
            return {
                username: '',
                password: ''
            }
        },

        methods: {
            login() {
                let _this = this;

                axios.post(`${config.api}/login`, this.$data)
                .then(function(response) {
                    console.log(response)
                    window.localStorage.user  = JSON.stringify(response.data.user);
                    window.localStorage.token = response.data.token;

                    _this.$router.push('/');
                    _this.$router.go(1);
                })
            }
        }
    }
</script>
