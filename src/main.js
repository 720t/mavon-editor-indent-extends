import Vue from 'vue'

import App from './App'

import '@/styles/index.scss' // global css

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
