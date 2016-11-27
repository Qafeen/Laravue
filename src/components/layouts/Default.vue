<template>
	<div>
    	<app-header v-show="isLoggedIn"></app-header>
	    <app-left-bar v-show="isLoggedIn"></app-left-bar>
		<div class="content">
	        <transition name="fade">
	            <router-view></router-view>
	        </transition>
	    </div>
    </div>
</template>

<script>
	import AppHeader from '../partials/header.vue'
	import AppLeftBar from '../partials/leftbar.vue'
	import AppMessage from '../partials/message.vue'

  	export default {
    	name : 'DefaultLayout',

    	data() {
    	    return {
    	        isLoggedIn: Boolean(localStorage.token)
    	    }
    	},

    	components : {
    		AppHeader, AppLeftBar, AppMessage
    	}
  	}
</script>

<style>
    @import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
</style>