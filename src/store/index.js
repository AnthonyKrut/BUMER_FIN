import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/auth'
import cart from '@/store/cart'
import products from '@/store/products'
import common from '@/store/common'

Vue.use(Vuex)
export default new Vuex.Store({
  namespaced: true,
  modules: {
    auth,
    cart,
    products,
    common,
  },
})
