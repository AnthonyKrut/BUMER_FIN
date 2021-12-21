<template>
  <nav class="mobile-secondary-nav">
    <router-link
      v-for="item in items"
      :key="item.label"
      active-class="mobile-secondary-nav__item--active"
      class="mobile-secondary-nav__item"
      :to="{name: item.to}"
    >
      {{ item.label }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'MobileSecondaryNav',
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.mobile-secondary-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile-secondary-nav__item {
  color: $contrast_color;
  text-decoration: none;
  &:not(:last-child) {
    margin-bottom: 2em;
  }
  &:hover {
    color: $attention_color;
  }
  &.mobile-secondary-nav__item--active {
    color: $attention_color;
  }
}
</style>
