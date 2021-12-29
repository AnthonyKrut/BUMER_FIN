
export default {
  state: () => ({
    isCartPopoverVisible: false,
    isMobileMenuVisible: false,
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
    openMobileMenu(state) {
      state.isMobileMenuVisible = true
    },
    closeMobileMenu(state) {
      state.isMobileMenuVisible = false
    },
  },
  getters: {},
  actions: {},
  namespaced: true,
}
