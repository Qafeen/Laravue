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

<style type="scss">
    @import '../../assets/sass/app.scss'
</style>
