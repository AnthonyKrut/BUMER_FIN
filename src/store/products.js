import axios from 'axios'

export default {
  state: () => ({
    products: [],
  }),
  getters: {
    getProductsByCategoryId(state) {
      return (id) => {
        return state.products.filter(product => product.categoryId === id)
      }
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
  },
  actions: {
    async fetchProducts({commit}) {
      const {data} = await axios.get('product')
      let products = []
      for (let id in data) {
        products.push({id, ...data[id]})
      }
      commit('setProducts', products)
    },
    async fetchProduct(_, id) {
      const {data} = await axios.get(`product/${id}`)
      data.size = data.size.map(item => {
        if (!('is_active' in item)) {
          item.is_active = false
        }
        return item
      })
      return data
    },
  },
  namespaced: true,
}
