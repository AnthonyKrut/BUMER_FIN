import axios from 'axios'

export default {
    state: () => ({
      isCallPopoverVisible: false,
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
      async orderCallBack(context, userPhoneNumber) {
        context.commit('closeCallPopover')
        let message = 
            {
              title: 'CallBack Request',
              body: userPhoneNumber,
            }
        let res = await axios.post(message)
        console.log(res)
      },
    },
    namespaced: true,
}
  