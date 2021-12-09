export default {
    state: () => ({
      isLangPopoverVisible: false,
      language: 'ru',
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
      selectLanguage(state, lang) {
        state.language = lang
        state.isLangPopoverVisible = false
      },
    },
    getters: {},
    actions: {},
    namespaced: true,
}