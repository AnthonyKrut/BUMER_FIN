import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import titleMixin from './mixins/meta'
import vueDebounce from 'vue-debounce'

createApp(App)
  .use(vueDebounce)
  .use(store)
  .use(router)
  .mixin(titleMixin)
  .mount('#app')
