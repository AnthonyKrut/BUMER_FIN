export default {
  methods: {
    $_i18n_getFieldWithLocale(field = '') {
      const locale = this.$i18n.locale
      return field + locale[0].toUpperCase() + locale[1]
    },
  },
}
