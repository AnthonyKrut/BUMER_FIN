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

    transformCategoryItemForView(state, getters, rootState, rootGetters) {
      const getLanguageCodeById = rootGetters['locales/getLanguageCodeById']

      return (item) => {
        item.description.forEach(i => {
          item[`name_${getLanguageCodeById(i.languageId)}`] = i.name
          return i

        })
        return item
      }
    },
  },
  actions: {
    async fetchCategories({commit, getters}) {
      const {data} = await axios.get('/Category/GetAll')

      const transformedData = data.map(item => getters.transformCategoryItemForView(item)).sort(i=>i.order)
      commit('setCategories', transformedData)
    },
    async fetchCategory(_, id) {
      const {data} = await axios.get(`/Category/${id}`)
      return data
    },
  },
  namespaced: true,
}
