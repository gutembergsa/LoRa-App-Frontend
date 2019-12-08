<template>
    <div>
        <div class="level-item has-text-centered">
            <b-field label="Dias anteriores">
                <b-select v-model="dateChosen" v-on:input="execChartFetch" size="is-small" placeholder="Selecione uma data">
                    <option
                        v-for="dates in this.dateList"
                        :values="dates"
                        :key="dates">
                        {{ dates }}
                    </option>
                </b-select>
            </b-field>        
        </div>         
        <div class="container" :class="{'is-small': this.$store.getters.returnMobileSize}" style="margin-top:50px;"> 
            <section :class="heroColor" class="hero is-bold">
                <div class="hero-body">
                    <div class="container" style="height: 100%;">
                        <h1 v-if="!showDateTitle" class="title has-text-left is-size-5">
                            {{`${graphTitle} || ${this.dateAux.getDate()}-${this.dateAux.getMonth() + 1}-${this.dateAux.getFullYear()}`}}
                        </h1>
                        <h1 v-else class="title has-text-left is-size-5">
                            {{`${graphTitle} || ${this.dateChosen}`}}
                        </h1>
                    </div>
                </div>
            </section>
            <canvas ref="myChart" class="chart">  
            </canvas>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js';
import chartFetch from '../../../../chartDataFetch'

export default {
    mounted(){
        this.chartElement = new Chart(this.$refs.myChart.getContext('2d'), {
            type: this.type,
            data: this.data,
            options: this.options
        });
        chartFetch
        .fetcher('Temperatura em C°')
        .then(dataset => {
            this.chartElement.config.data = dataset
            this.chartElement.update()
            this.getDateList()
        })            
    },
    data(){
        return{
            dateList: null,
            dateChosen: null,
            chartElement: null,
            dateAux: new Date(),
            showDateTitle: false
        }
    },
    methods:{
        execChartFetch(){
            chartFetch
            .dateChartFetch(this.dateChosen)
            .then(dataset => {
                this.chartElement.config.data = dataset
                this.chartElement.update()
                this.showDateTitle = true
            })
        },
        getDateList(){
            chartFetch
            .dateList()
            .then(dataset => this.dateList = dataset)
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
.chart{
width:auto;
height:auto;
}
</style>