import axios from 'axios'

export default {
    state: () => ({
      isCallPopoverVisible: false,
      userPhoneNumber: 'ppp',
    }),
    mutations: {
      openCallPopover(state) {
        state.isCallPopoverVisible = true
      },
      closeCallPopover(state) {
        state.isCallPopoverVisible = false
      },
      toggleCallPopover(state) {
        state.isCallPopoverVisible = !state.isCallPopoverVisible
      },
    },
    getters: {},
    actions: {
        async sendCallRequest() { // finish asap!
            const res = await axios.post() 
            console.log(res)
        },
    },
    namespaced: true,
}
  