<template>
	<div>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
  	export default {
    	name : 'DefaultLayout',

    	data() {
    	    return { }
    	}
  	}
</script>

<style>
    @import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
</style>