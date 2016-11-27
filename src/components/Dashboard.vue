<template>
    <!-- BEGIN MAIN CONTENT -->
    <div id="main-content" class="dashboard">
        <div class="page-title"> <i class="icon-custom-left"></i>
            <h3>Activity center</h3>
        </div>
        <div class="class">
            <div class="col-lg-6 col-md-6">
                <div class="panel no-bd bd-9 panel-stat">
                    <div class="panel-body bg-red">
                        <div class="icon"><i class="fa fa-cab"></i>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="stat-num">0</div>
                                <h3>Car Added</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                    <div class="panel no-bd bd-9 panel-stat">
                        <div class="panel-body bg-blue">
                            <div class="icon"><i class="fa fa-hand-o-up"></i>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="stat-num">0</div>
                                    <h3>Visitors to your car listing</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="col-lg-6 col-md-6">
                <div class="panel no-bd bd-9 panel-stat">
                    <div class="panel-body bg-purple">
                        <div class="icon"><i class="fa fa-bar-chart-o"></i>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="stat-num">0</div>
                                <h3>Support Tickets</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="panel no-bd bd-9 panel-stat">
                    <div class="panel-body bg-dark">
                        <div class="icon"><i class="fa fa-money"></i>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="stat-num">0</div>
                                <h3>Revenue</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END MAIN CONTENT -->
</template>
<style>
</style>
<script>
    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
