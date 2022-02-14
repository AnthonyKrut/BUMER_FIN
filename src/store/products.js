import axios from 'axios'

export default {
  state: () => ({
    products: [],
  }),
  getters: {
    transformProductItemForView(state, getters, rootState, rootGetters) {
      const getLanguageCodeById = rootGetters['locales/getLanguageCodeById']

      return (item) => {
        item.productDescription.forEach(i => {
          item[`name_${getLanguageCodeById(i.languageId)}`] = i.name
          item[`description_${getLanguageCodeById(i.languageId)}`] = i.description
        })

        item.category.description.forEach(i => {
          item.category[`name_${getLanguageCodeById(i.languageId)}`] = i.name
        })

        item.color.description.forEach(i => {
          item.color[`name_${getLanguageCodeById(i.languageId)}`] = i.name
        })

        item.materialInSole.description.forEach(i => {
          item.materialInSole[`name_${getLanguageCodeById(i.languageId)}`] = i.name
        })

        item.materialProduct.description.forEach(i => {
          item.materialProduct[`name_${getLanguageCodeById(i.languageId)}`] = i.name
        })

        item.materialSole.description.forEach(i => {
          item.materialSole[`name_${getLanguageCodeById(i.languageId)}`] = i.name
        })

        item.productInfo.map(i => {
          i.isActive = false
          i.quantityInOrder = 0
          return i
        })

        return item
      }
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload
    },
  },
  actions: {
    async fetchProducts({commit, getters}, params) {
      const {data} = await axios.post('/Product/NestedRequest', params)

      const transformedData = data.map(item => getters.transformProductItemForView(item))
      commit('setProducts', transformedData)
    },

    async fetchProduct({getters}, id) {
      const {data} = await axios.get('/Product/GetById', {params: {id}})
      return getters.transformProductItemForView(data)
    },

    async fetchRelatives(_, article) {
      const {data} = await axios.post(`/Product/GetRelatives?article=${article}`)
      return data
    },
  },
  namespaced: true,
}
