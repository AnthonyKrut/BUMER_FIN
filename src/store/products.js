import axios from 'axios'

export default {
  state: () => ({}),
  mutations: {},
  getters: {},
  actions: {
    async fetchAllProducts({commit}) {
      const res = await axios.get('Product')
      console.log(commit)
      console.log(res)
      //context.commit('setDialogs', response.data.data)
    },
  },
  namespaced: true,
}
