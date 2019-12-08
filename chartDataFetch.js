import axios from 'axios'
import { reject } from 'q'
import store from './src/store'

const dateAux = new Date()

//CONSERTAR PARA PRODUÇÃO
export default{
    dateChartFetch(date){
        return new Promise((resolve, reject) =>{
            axios
            .get(`https://mongo-lora-gutem.herokuapp.com/temptopic/${date}`)
            .then(resp => {
                resolve ({
                    labels: resp.data.map(v => v.hour).sort(),
                    datasets: [{
                        label: 'Temperatura em C°',
                        data:  resp.data.map(v => v.value),
                        backgroundColor: '#FA7C9126',
                        borderColor: '#FA7C91',
                        fill: true,
                        pointRadius: 1.5
                    }]
                })
            })
            .catch((err)=>{reject(err)})
        })
    },
    dateList(){
        return new Promise((resolve, reject) =>{
            axios
            .get('https://mongo-lora-gutem.herokuapp.com/temptopic')
            .then(resp => resolve([... new Set(resp.data.map(v => v.date))]))
            .catch(err => reject(err))
        })        
    },
    fetcher(dataLabel, resource = 'temptopic'){
        return new Promise((resolve, reject) =>{
            let url = (resource === 'temptopic' ? `https://mongo-lora-gutem.herokuapp.com/${resource}/${dateAux.getDate()}-${(dateAux.getMonth() + 1)}-${dateAux.getFullYear()}` : `https://mongo-lora-gutem.herokuapp.com/${resource}`)
            axios
            .get(url)
            .then(resp=>{                     
                if (resource == 'temptopic') store.dispatch('recoverLastPacket', resp.data[resp.data.length - 1]);                                        
                else if(resource == 'ratingtopic') store.dispatch('recoverLastRate', resp.data[resp.data.length - 1]);                        
                
                resolve ({
                    labels: resp.data.map(v => v.hour).sort(),
                    datasets: [{
                        label: dataLabel,
                        data:  resp.data.map(v => v.value)
                    }]
                })
            })
            .catch(err=> reject(err))
        })
    }
} 