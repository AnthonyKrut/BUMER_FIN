import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/auth'
import cart from '@/store/cart'
import products from '@/store/products'
import common from '@/store/common'
import call from '@/store/call'
import lang from '@/store/lang'
import search from '@/store/search'
import categories from '@/store/categories'

Vue.use(Vuex)
export default new Vuex.Store({
  namespaced: true,
  modules: {
    auth,
    cart,
    products,
    common,
    call,
    lang,
    search,
    categories,
  },
})
