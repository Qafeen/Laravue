<template>
    <div id="message-container">
        <div class="help-block alert bg-red m-t-10" v-show="errors">
            <ol class="m-b-0">
                <li v-for="error in errors">
                    {{ _.first(error) }}
                </li>
            </ol>
        </div>
    </div>
</template>

<style>
    #message-container ol {
        font-size: 14px;
    }
</style>

<style src="sweetalert/dist/sweetalert.css"></style>

<script>
    import 'sweetalert';

    export default {
        props: ['errors', 'messages'],

        data() {
            return {};
        },

        watch: {
            errors: (response) => {
                if (typeof response == 'string') {
                    swal(response);
                }
            }
        },

        methods: {
        }
    }
</script>
