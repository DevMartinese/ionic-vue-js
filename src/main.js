import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Importar modulo de Ionic
import Ionic from '@ionic/vue';
//Importar modulo de CSS
import '@ionic/core/css/ionic.bundle.css'; 
//Vue.use sirve para llamar el modulo que se va a usar
Vue.use(Ionic);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
