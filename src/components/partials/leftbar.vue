<template>
    <!-- BEGIN MAIN SIDEBAR -->
    <nav id="sidebar">
        <div id="main-menu">
            <ul class="sidebar-nav">
                <li class="current active">
                    <router-link to="/">
                        <i class="fa fa-dashboard"></i>
                        <span class="sidebar-text">Dashboard</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/cars">
                        <i class="glyph-icon flaticon-list40"></i>
                        <span class="sidebar-text">Car Listing</span>
                        <span class="label label-danger pull-right m-r-20 w-300">New</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/car/add">
                        <i class="glyph-icon flaticon-list40"></i>
                        <span class="sidebar-text">Add Car</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/support">
                        <i class="glyph-icon flaticon-teacher4"></i>
                        <span class="sidebar-text">Support</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
    <!-- END MAIN SIDEBAR -->
</template>

<script>
    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
