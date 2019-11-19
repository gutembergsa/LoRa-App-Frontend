import axios from 'axios'
import { reject } from 'q'
import store from './src/store'

const dateAux = new Date()


export default{
    fetcher(dataLabel, resource = 'temptopic'){
        return new Promise((resolve, reject) =>{
            let url = (resource === 'temptopic' ? `https://mongo-lora-gutem.herokuapp.com/${resource}/${dateAux.getDate()}-${(dateAux.getMonth() + 1)}-${dateAux.getFullYear()}` : `https://mongo-lora-gutem.herokuapp.com/${resource}`)
            axios
            .get(url)
            .then(resp=>{
                console.log(resp.data[resp.data.length - 1]);
                if (resource == 'temptopic') {
                    store.dispatch('recoverLastPacket', resp.data[resp.data.length - 1]);                        
                }
                else if(resource == 'ratingtopic'){
                    store.dispatch('recoverLastRate', resp.data[resp.data.length - 1]);                        
                }
                resolve ({
                    labels: resp.data.map(v => v.hour).sort(),
                    datasets: [{
                        label: dataLabel,
                        data:  resp.data.map(v => v.value)
                    }]
                })
            })
            .catch((err)=>{reject(err)})
        })
    }
} 