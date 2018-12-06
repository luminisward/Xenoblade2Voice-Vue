import Vue from 'vue'
import iView from 'iview'
import App from './App.vue'
import store from './store'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
