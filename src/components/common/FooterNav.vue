<template>
  <nav class="footer-nav">
    <router-link
      v-for="item in items"
      :key="item.label"
      active-class="footer-nav__item--active"
      class="footer-nav__item"
      :to="{name: item.to}"
    >
      {{ item.label }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'FooterNav',
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

.footer-nav {
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    align-items: center;
  }
}

.footer-nav__item {
  color: $contrast_color;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 1.25em;
    }
  }

  &:not(:last-child) {
    margin-bottom: 2em;
  }


  &:hover {
    color: #aaaaaa;
  }


  &.footer-nav__item--active {
    color: $attention_color;

    &:hover {
      color: $attention_color;
      cursor: default;
    }
  }
}
</style>
