import axios from 'axios'

export default {
  state: () => ({
    isSearchFormActive: false,
  }),
  mutations: {
    openSearchForm(state) {
      state.isSearchFormActive = true
    },
    closeSearchForm(state) {
      state.isSearchFormActive = false
    },
    toggleSearchForm(state) {
      state.isSearchFormActive = !state.isSearchFormActive
    },
  },
  getters: {},
  actions: {
    async sendSearchRequest(context, userSearchRequest) {
      context.commit('closeSearchForm')
      let query = 
          {
            title: 'Search Request',
            body: userSearchRequest,
          }
      let res = await axios.post(query)
      console.log(res)
    },
  },
  namespaced: true,
}
  