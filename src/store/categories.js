import axios from 'axios'

export default {
  state: () => ({
    categories: [],
  }),
  mutations: {
    setCategories(state, data) {
      state.categories = data
    },
  },
  getters: {
    getCategoryById(state) {
      return (id) => {
        return state.categories?.find(category => category.id === id)
      }
    },
  },
  actions: {
    async fetchCategories({commit}) {
      const {data} = await axios.get('/category')
      commit('setCategories', data)
    },
    async fetchCategory(_, id) {
      const {data} = await axios.get(`/category/${id}`)
      return data
    },
  },
  namespaced: true,
}
