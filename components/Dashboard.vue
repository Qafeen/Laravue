<template>
    <div class="container">
        <div class="row">
            <div class="page-title">
                <i class="icon-custom-left"></i>
                <h3>Activity center</h3>
            </div>
            <div class="page-body">
                <clients></clients>
                <personal-access-token></personal-access-token>
                <authorized-clients></authorized-clients>
            </div>
        </div>
    </div>
    <!-- END MAIN CONTENT -->
</template>

<style></style>

<script>
    import Clients from './partials/Clients.vue'
    import PersonalAccessToken from './partials/PersonalAccessTokens.vue'
    import AuthorizedClients from './partials/AuthorizedClients.vue'

    export default {
        data() {
            return { }
        },

        components: {
            Clients, PersonalAccessToken, AuthorizedClients
        }
    }
</script>
