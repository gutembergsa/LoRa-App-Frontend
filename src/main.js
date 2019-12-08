import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import 'bulma/css/bulma.css'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'

Vue.use(Buefy);
Vue.config.productionTip = false

Vue.use(Buefy);

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
