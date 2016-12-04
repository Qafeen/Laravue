<template>
    <!-- START SIGNUP BOX -->
    <div>
        <app-header></app-header>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-default">
                        <div class="panel-heading">Register</div>
                        <div class="panel-body">
                            <div class="form-horizontal" role="form">
                                <div class="form-group">
                                    <label for="name" class="col-md-4 control-label">Name</label>

                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control"
                                               name="name" required autofocus />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control"
                                               name="email" required />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="password" class="col-md-4 control-label">Password</label>

                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control" name="password" required />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>

                                    <div class="col-md-6">
                                        <input id="password-confirm" type="password" class="form-control"
                                               name="password_confirmation" required />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-6 col-md-offset-4">
                                        <button class="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import AppHeader from './partials/header.vue';

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
                this.register_text = 'Please wait...';
                this.$http.post(store.host + 'api/register', this.$data).then((response) => {
                    window.location = window.location.origin;
                }, (response) => {
                    this.$set('errors', response.data);
                });
            }
        },

        components: {
            AppHeader
        }
    };
</script>
