import axios from 'axios'
import { reject } from 'q'
import store from './src/store'

const dateAux = new Date()


export default{
    fetcher(dataLabel, borderColor, backColor, resource = 'first'){
        return new Promise((resolve, reject) =>{
            axios
            .get(`https://mongo-lora-gutem.herokuapp.com/${resource}/${dateAux.getDate()}-${(dateAux.getMonth() + 1)}-${dateAux.getFullYear()}`)
            .then(resp=>{
                store.dispatch('recoverLastPacket', resp.data[resp.data.length - 1]);
                resolve ({
                    labels: resp.data.map(v => v.hour).sort(),
                    datasets: [{
                        label: dataLabel,
                        backgroundColor: borderColor,
                        borderColor: backColor,
                        data:  resp.data.map(v => v.value)
                    }]
                })
            })
            .catch((err)=>{reject(err)})
        })
    }
} 