<template>
  <div class="hero has-background-grey-lighter is-fullheight" style="width: 100%;">
    <div class="section is-large has-background-grey-lighter has-text-centered" style="padding-top: 25px;">     
      <pubGenerator/>
      <chartGenerator/>
    </div>
  </div>
</template>

<script>
import chartGenerator from './generators/chartsGenerator'
import pubGenerator from './generators/publisherGenerator'

export default {
  components:{
    pubGenerator,
    chartGenerator,
  },
  data(){
    return{
    }
  }
}
</script>

<style>
</style>