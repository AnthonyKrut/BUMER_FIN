import Vue from 'vue'
import App from './App.vue'
import './assets/scss/main.scss'
import axios from 'axios'
import router from './router'
import store from './store'
import vueDebounce from 'vue-debounce'
import VueSweetalert2 from 'vue-sweetalert2'
import VueCookies from 'vue-cookies'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(vueDebounce)
Vue.use(VueSweetalert2)
Vue.use(VueCookies)

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseURL = process.env.VUE_APP_BASE_API_URI

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

