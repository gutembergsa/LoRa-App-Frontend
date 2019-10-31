<template>
    <div class="columns is-multiline is-mobile">
        <div class="column">
            <textCard :showIcon="false" bulmaColor="is-pink" :valorBruto="10" grandeza='Receiver RX' unidade='pacotes'/>
        </div>
        <div class="column">
            <textCard :showIcon="false" bulmaColor="is-pink" :valorBruto="10" grandeza='Transmitter TX' unidade='pacotes'/>
        </div>
        <div class="column">
            <textCard :showIcon="true" icon="fa fa-thermometer-empty" :valorBruto="10" grandeza='Temperatura' unidade='C°'/>
        </div>
        <div class="container">
            <br>
            <div class="columns is-multiline is-mobile">
                <div class="column"><switchCard/></div>
                <div class="column"><switchCard/></div>
            </div>
        </div>
    </div> 
</template>

<script>
import textCard from "./contents/datacards/textCard.vue";
import sliderCard from "./contents/datacards/sliderCard.vue";
import switchCard from "./contents/datacards/switchCard.vue";

export default {
    data(){
        return{
            bigText: `Lorem ipsum velit curabitur
            justo consequat vulputate curabitur
            urna aliquam viverra class, ornare
            euismod viverra vivamus blandit risus
            suspendisse morbi rutrum`
        }
    },
    components:{
        textCard,
        sliderCard,
        switchCard
    }
}
</script>

<style>
.columnspace1{
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 24px;
}
</style>