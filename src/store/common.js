
export default {
  state: () => ({
    isCartPopoverVisible: false,
  }),
  mutations: {
    openCartPopover(state) {
      state.isCartPopoverVisible = true
    },
    closeCartPopover(state) {
      state.isCartPopoverVisible = false
    },
    toggleCartPopover(state) {
      state.isCartPopoverVisible = !state.isCartPopoverVisible
    },
  },
  getters: {},
  actions: {},
  namespaced: true,
}
