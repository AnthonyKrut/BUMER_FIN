import axios from 'axios'

export default {
    state: () => ({
      isCallPopoverVisible: false,
      userPhoneNumber: '',
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
      setUserPhoneNumber(state, newValue) {
        state.userPhoneNumber = newValue
      },
    },
    getters: {},
    actions: {
      updateUserPhoneNumber(context, evt) {
        context.commit('setUserPhoneNumber', evt.target.value)
      },
      async orderCallBack(context) {
        context.commit('closeCallPopover')
        let url = 'https://jsonplaceholder.typicode.com/posts', // change to real!
            message = 
            {
              title: 'CallBack Request',
              body: context.state.userPhoneNumber,
            }
        let res = await axios.post(url, message)
        console.log(res)
        //console.log(message)
      },
    },
    namespaced: true,
}
  