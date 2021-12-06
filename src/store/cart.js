
export default {
  state: () => ({
    cart: [],
  }),
  mutations: {
    addToCart(state, payload) {
      state.cart.push(payload)
    },
  },
  getters: {},
  actions: {},
  namespaced: true,
}
