<template>
    <div class="columns is-multiline is-mobile">
        <div class="column is-full">
            <textCard :showIcon="true" :valorBruto="this.temperature" icon="fa fa-thermometer-empty" grandeza='Temperatura' unidade='C°'/>
        </div>
        <div class="column is-full">
            <textCard :showIcon="false" :valorBruto="this.latency"  grandeza='Latencia' unidade='dBm'/>
        </div>
        <div class="column ">
            <textCard :showIcon="false" :valorBruto="this.receive" grandeza='Recebidos' unidade='Pacotes'/>
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
                broker.subscribe('ratings')
                setTimeout(() => {
                    this.temperature = this.$store.getters.returnLastPacket.value
                    this.latency = this.$store.getters.returnLastPacket.latency                    
                    this.receive = this.$store.getters.returnLastRate.receive       
                    this.sent = this.$store.getters.returnLastRate.sent
                }, 3000);
            })
            .catch(err=> console.log(err))
    },
    data(){
        return{
            temperature: 0,
            latency: 0,
            receive: 0,
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
            switch (topic) {
                case 'temperatura':
                    let pld = payload.toString().split('.')
                    let pld2 = pld[1].split('!')
                    console.log(`pacote temp: ${Object.values(packet)}`);
                    this.temperature = pld[0]
                    this.latency = pld2[1]
                    break;
                case 'ratings':
                    let payloadFormatted = payload.toString().split('|')
                    console.log(`pacote rat: ${packet}`);
                    this.receive = payloadFormatted[1]
                    this.sent = payloadFormatted[0]
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