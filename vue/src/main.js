import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import request from './utils/request'
import global from '@/assets/css/global.css'

Vue.config.productionTip = false
Vue.prototype.request = request

new Vue({
  router,
  store,
  global,
  render: h => h(App)
}).$mount('#app')
