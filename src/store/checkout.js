import axios from 'axios'

export default {
  state: () => ({}),

  getters: {
    transformCityForView() {
      return (item) => {
        item.name_ru = item.descriptionRu
        item.name_ua = item.description
        item.id = item.ref
        return item
      }
    },
    transformPostOfficesForView() {
      return (item) => {
        item.name_ru = item.descriptionRu
        item.name_ua = item.description
        item.id = item.ref
        return item
      }
    },
    transformOrderForDB(state, getters, rootState, rootGetters) {
      return (data) => {
        data.orderProducts = rootGetters['cart/orderProducts']
        data.region = data.city?.name_ru
        data.destination = data.postOffice?.name_ru
        data.total = rootGetters['cart/total']
        data.status = 'Created'
        data.paymentMethod = data.paymentMethod.id
        data.deliveryMethod = data.deliveryMethod.id
        data.comment = data.comment || null
        return data
      }
    },
  },

  mutations: {},

  actions: {
    async fetchCities({getters}, str) {
      const {data} = await axios.post(`/NovayaPochta/GetCities?city=${str}`)
      return data.data.map(item => getters.transformCityForView(item))
    },
    async fetchPostOffices({getters}, cityId) {
      const {data} = await axios.post(`/NovayaPochta/GetDepartments?cityId=${cityId}`)
      return data.data.map(item => getters.transformPostOfficesForView(item))
    },
    async createOrder({getters}, form) {
      const transformedData = getters.transformOrderForDB(form)
      await axios.post('/Order/Create', transformedData)
    },
  },
  namespaced: true,
}
