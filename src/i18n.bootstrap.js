import VueI18n from 'vue-i18n'
import Vue from 'vue'
import ru from '@/lang/ru'
import ua from '@/lang/ua'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'ru',
  fallbackLocale: 'ru',
  messages: {ru, ua},
})

export default i18n
