import axios from 'axios'
import Vue from 'vue'
import i18n from '@/i18n.bootstrap'

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
      await axios.post('/Message/Send', null, {
        params:
          {
            text: `тел: ${userPhoneNumber}`,
            header: 'Запрос на обратный звонок',
            toEmail: 'here-will-be-email',
          },
      })
      Vue.swal(i18n.t('common.callback_successfull_heading'), i18n.t('common.callback_successfull_text'), 'success')
    },
  },
  namespaced: true,
}
