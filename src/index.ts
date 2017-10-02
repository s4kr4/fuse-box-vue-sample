import * as Vue from 'vue/dist/vue.common.js'

import * as App from './components/App.vue'

Vue.component('app', App)

new Vue({
  el: '#root',
  render: h => h(App)
})
