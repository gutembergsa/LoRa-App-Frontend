import axios from 'axios'
import { reject } from 'q'

export default{
    fetcher(dataLabel, borderColor, backColor, resource = 'first'){
        return new Promise((resolve, reject) =>{
            axios
            .get(`https://mongo-lora-gutem.herokuapp.com/${resource}`)
            .then(resp=>{
                resolve ({
                    labels: resp.data.map(v => `data: ${v.date} || hora: ${v.hour}`),
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