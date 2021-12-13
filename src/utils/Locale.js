import Vue from 'vue'

const _getBrowserLanguage = () => {
  let lang
  let langShort

  if (navigator.languages && navigator.languages.length) {
    // latest versions of Chrome and Firefox set this correctly
    lang = navigator.languages[0]
  } else if (navigator.userLanguage) {
    // IE only
    lang = navigator.userLanguage
  } else {
    // latest versions of Chrome, Firefox, and Safari set this correctly
    lang = navigator.language
  }

  langShort = lang.split('-')[0]
  return langShort
}

const _implement = (val) => {
  Vue.prototype.$http.defaults.headers.common['Accept-Language'] = val
  localStorage.setItem('locale', val)
}

const setLocale = (lang = null) => {
  const defaultLang = 'ru'
  const fallbackLang = 'ru'
  const allowedLanguages = ['ru', 'ua']
  const localeStorageLang = localStorage.getItem('locale')
  let browserLang = _getBrowserLanguage()

  if (lang) {
    _implement(lang)
  } else if (localeStorageLang) {
    _implement(localeStorageLang)
  } else if (browserLang) {
    _implement(allowedLanguages.includes(browserLang) ? browserLang : fallbackLang)
  } else {
    _implement(defaultLang)
  }
}

export {
  setLocale,
}
