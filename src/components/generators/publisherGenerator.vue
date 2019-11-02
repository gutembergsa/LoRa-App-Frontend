<template>
    <div class="columns is-multiline is-mobile">
        <div class="column is-full">
            <textCard :showIcon="true" :valorBruto="this.temperature" icon="fa fa-thermometer-empty" grandeza='Temperatura' unidade='C°'/>
        </div>
        <div class="column is-full">
            <textCard :showIcon="false" :valorBruto="this.latency"  grandeza='Latencia' unidade='dBm'/>
        </div>
        <div class="column ">
            <textCard :showIcon="false" :valorBruto="this.received" grandeza='Recebidos' unidade='Pacotes'/>
        </div>
        <div class="column">
            <textCard :showIcon="false" :valorBruto="this.sent" grandeza='Enviados' unidade='Pacotes'/>
        </div>
    </div> 
</template>

<script>
import textCard from "../contents/datacards/textCard.vue";
import sliderCard from "../contents/datacards/sliderCard.vue";
import switchCard from "../contents/datacards/switchCard.vue";
import {environment} from "../../../envConfig.js"
import * as mqtt from "mqtt"

export default {
    mounted(){
        this.connectToBroker()
            .then(broker =>{
                broker.on('message', this.checkMessage)
                broker.subscribe('temperatura')
                broker.subscribe('status')
                this.temperature = this.$store.getters.returnLastPacket.value
                this.latency = this.$store.getters.returnLastPacket.latency
            })
            .catch(err=> console.log(err))
    },
    data(){
        return{
            temperature: 0,
            latency: 0,
            received: 0,
            sent: 0
        }
    },
    components:{
        textCard,
        sliderCard,
        switchCard
    },
    methods:{
        connectToBroker(){
            return new Promise((resolve, reject)=>{
                let mqttClient = mqtt.connect(environment.broker_uri,{
                    clientId: 'FrontLoragutem'
                })
                mqttClient.on('connect', ()=> {
                    resolve(mqttClient)
                    if (!mqttClient.connected) {
                        reject('falha no broker')
                    }
                })            
            })
        },
        checkMessage(topic, payload, packet){
            let payloadFormatted = payload.toString().split(' | ')
            switch (topic) {
                case 'temperatura':
                    console.log(`pacote temp: ${Object.values(packet)}`);
                    this.temperature = payloadFormatted[0]
                    this.latency = payloadFormatted[1]
                    break;
                case 'ratings':
                    console.log(`pacote rat: ${packet}`);
                    this.received = payloadFormatted[0]
                    this.sent = payloadFormatted[1]
                    break;
                default:
                    break;
            }
        }
    },
}
</script>

<style>
.columnspace1{
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 24px;
}
</style>