import {createStore} from 'vuex'

import auth from './auth'
import users from './users'
import products from './products'


export default new createStore({
  namespaced: true,
  modules: {
    auth,
    users,
    products,
  },
})
