<template>
  <component
    :is="componentName"
    class="button"
    :class="{'button--full-width': fullWidth}"
    :href="href"
    :to="{name: to}"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  },
  computed: {
    componentName() {
      if (this.to) {
        return 'router-link'
      } else if (this.href) {
        return 'a'
      }
      return 'div'
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.button {
  padding: 10px 30px;
  border: 1px solid $main_color;
  cursor: pointer;
  transition: 0.2s;
  display: inline-flex;
  color: $main_color;
  background: #FFFFFF;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  line-height: 1.3;


  &:hover {
    background: $main_color;
    color: #FFFFFF;
  }

  &.button--full-width {
    display: flex;
  }

  svg {
    margin-right: 14px;
  }
}


</style>
