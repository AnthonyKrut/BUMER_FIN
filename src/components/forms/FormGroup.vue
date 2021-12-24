<template>
  <div
    class="form-group"
    :class="{
      'form-group--error': field.$error,
      'form-group--small-spacing': smallSpacing
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    field: {
      type: Object,
      required: true,
    },
    smallSpacing: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">

.form-group {
  margin-bottom: 15px;

  @media screen and (max-width: 991px) {
    margin-bottom: 10px;
  }

  &.form-group--error {
    .form__input {
      border-color: #ff0000;
    }

    .form-group-error {
      display: block;
    }
  }

  &.form-group--small-spacing {
    margin-bottom: 10px;
  }
}
</style>
