import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import users from './users'
import products from './products'

Vue.use(Vuex)
export default new Vuex.Store({
  namespaced: true,
  modules: {
    auth,
    users,
    products,
  },
})
