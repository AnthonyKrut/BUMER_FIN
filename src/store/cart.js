
export default {
  state: () => ({
    cart: JSON.stringify(localStorage.getItem('cart')) || [],
  }),
  getters: {
    total() {
      return 5432
    },
    safe() {
      return 200
    }
  },
  mutations: {
    addToCart(state, payload) {
      let product = {...payload}
      product = product.size.map(size => {
        size.quantityInOrder = size.isActive ? 1 : 0
        return size
      })
      state.cart.push(product)
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
  },
  actions: {},
  namespaced: true,
}
