<template>
    <div class="container" :class="{'is-small': this.$store.getters.returnMobileSize}" style="margin-top:50px;"> 
        <section :class="heroColor" class="hero is-bold">
            <div class="hero-body">
                <div class="container" style="height: 100%;">
                    <h1 class="title has-text-left is-size-5">
                        {{graphTitle}}
                    </h1>
                </div>
            </div>
        </section>
        <canvas ref="myChart">  
        </canvas>
    </div>
</template>

<script>
import axios from "axios";
import Chart from 'chart.js';
export default {
    mounted(){
        this.chartElement = new Chart(this.$refs.myChart.getContext('2d'), {
            type: this.type,
            data: this.data,
            options: this.options,
        });
        setInterval(() => this.chartElement.update(), 5000);
    },
    data(){
        return{
            chartElement: null,
        }
    },
    props:{
        type: String,
        data: Object,
        options: Object,
        graphTitle: String,
        heroColor: String
    }

}
</script>

<style>

</style>