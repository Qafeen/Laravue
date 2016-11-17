<template>
    <div>
        <form  :action="getCarPicsUrl()"
               class="dropzone mb24"
               id="car-pictures-dropzone"
               enctype="multipart/form-data">
        </form>
    </div>
</template>

<style>
</style>

<script>
    import Dropzone from 'dropzone';

    export default {
        props: ['info', 'action', 'qualifiedKeys'],

        data() {
            return {
                image: '',
                hovering: false
            }
        },

        mounted() {
            this.setupDropZone();
        },

        methods: {
            getCarPicsUrl() {
                return `${config.api}/car/picture`;
            },

            setupDropZone() {
                var vm = this;
                Dropzone.options.carPicturesDropzone = {
                    paramName: "picture", // The name that will be used to transfer the file
                    maxFilesize: 2, // MB
                    maxFiles: 5,
                    acceptedFiles: 'image/*',
                    headers: { "X-PERSONAL-TOKEN": localStorage.token },
                    success(file, response) {
                        if (response.status == 'success') {
                            vm.qualifiedKeys.push(file.qualifiedKey = response.qualified_key);
                        } else {
                            vm.$store.commit('errors', response.message);
                        }
                    },
                    addRemoveLinks: true,
                    removedfile(file) {
                        vm.$http.delete(`${config.api}/car/picture/${file.qualifiedKey}`)
                        .then(function(response) {
                            vm.qualifiedKeys = _.find(vm.qualifiedKeys, (qualifiedKey) => {
                                return qualifiedKey != file.qualifiedKey;
                            }) || [];
                        });

                        var _ref;
                        return (_ref = file.previewElement) != null ?
                                _ref.parentNode.removeChild(file.previewElement) :
                                void 0;
                    }
                };

                return this;
            }
        }

    };
</script>