import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import router from './router'
import store from './store'
import vueDebounce from 'vue-debounce'
import VueSweetalert2 from 'vue-sweetalert2'
import VueCookies from 'vue-cookies'

Vue.use(vueDebounce)
Vue.use(VueSweetalert2)
Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

