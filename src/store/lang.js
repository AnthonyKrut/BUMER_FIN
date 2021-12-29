export default {
    state: () => ({
      isLangPopoverVisible: false,
    }),
    mutations: {
      openLangPopover(state) {
        state.isLangPopoverVisible = true
      },
      closeLangPopover(state) {
        state.isLangPopoverVisible = false
      },
      toggleLangPopover(state) {
        state.isLangPopoverVisible = !state.isLangPopoverVisible
      },
    },
    getters: {},
    actions: {},
    namespaced: true,
}
