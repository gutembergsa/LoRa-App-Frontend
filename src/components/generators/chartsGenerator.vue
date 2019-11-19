<template>
    <div>     
      <chartsComp v-if="showChart1" type="line" heroColor="is-pink" v-bind:data="data1" :options="options" graphTitle="Temperatura"/>
    </div>
</template>

<script>
import chartsComp from '../contents/datacharts/Charts'
import chartFetch from '../../../chartDataFetch'

export default {
  components:{
    chartsComp,
  },
  data(){
    return{
        showChart1: false,
        showChart2: false,
        data1:  chartFetch
                    .fetcher(`Temperatura em C°`)
                    .then(dataset => {
                        this.data1 = dataset
                        this.showChart1 = true
                    }
        ),
        options: {         
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
        }
    }
  }
}
</script>

<style>
</style>