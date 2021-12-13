<template>
  <nav class="mobile-secondary-nav">
    <router-link class="mobile-secondary-nav__item" to="/">
      Оплата и доставка
    </router-link>
    <router-link class="mobile-secondary-nav__item" to="/">
      Новости
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'MobileSecondaryNav',
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
  &.nav__item--active {
    color: $attention_color;
  }
}
</style>
