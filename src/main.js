import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cardjson from '@/assets/Cards.json'
import vendor from '@/assets/vendors.json'
Vue.config.productionTip = false

new Vue({
  data(){return{
    cards: cardjson.cards,
    vendors: vendor.vendors
  }},
  
  router,
  render: h => h(App)
}).$mount('#app')
