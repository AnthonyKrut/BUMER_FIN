<template>
  <div class="form-group-error">
    {{text}}
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
        return 'Поле обязательно для заполнения'
      } else if (this.type === 'email') {
        return 'Неверный формат email'
      } else if (this.type === 'phone') {
        return 'Неверный формат телефона'
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
