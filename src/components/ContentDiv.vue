<template>
  <div class="hero has-background-grey-lighter is-fullheight" style="width: 100%;">
    <div class="section is-large has-background-grey-lighter has-text-centered" style="padding-top: 25px;">     
      <pubGenerator/>
      <chartsComp type="line" v-bind:data="data" graphTitle="Gráfico Teste"/>
    </div>
  </div>
</template>

<script>
import chartsComp from './contents/Charts.vue'
import pubGenerator from './publisherGenerator.vue'

export default {
  components:{
    pubGenerator,
    chartsComp,
  },
  data(){
    return{
      data:{
        labels: ['January', 'February', 'March', 'April', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
      }
    }
  }
}
</script>

<style>
</style>