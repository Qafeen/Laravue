<template>
	<div>
    	<app-header></app-header>
	    <app-left-bar></app-left-bar>
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
    	components : {
    		AppHeader, AppLeftBar, AppMessage
    	}
  	}
</script>

<style>
	  @import '../../../node_modules/bootstrap/dist/css/bootstrap.css'


</style>