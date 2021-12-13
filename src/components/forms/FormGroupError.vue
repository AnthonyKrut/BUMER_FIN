<template>
  <div class="form-group-error">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'FormGroupError',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    text() {
      if (this.type === 'required') {
        return this.$t('checkout.field_is_required')
      } else if (this.type === 'email') {
        return this.$t('checkout.wrong_email_format')
      } else if (this.type === 'phone') {
        return this.$t('checkout.wrong_phone_format')
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped>

.form-group-error {
  display: none;
  font-size: 12px;
  margin-top: 8px;
  color: #ff0000;
}
</style>
