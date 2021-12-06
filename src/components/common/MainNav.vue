<template>
  <div class="main-nav">
    <router-link class="main-nav__item" :to="{name: 'Catalog'}">
      КРОССОВКИ
    </router-link>
    <router-link class="main-nav__item" :to="{name: 'Catalog'}">
      БОТИНКИ
    </router-link>
    <router-link class="main-nav__item" :to="{name: 'Catalog'}">
      ТУФЛИ
    </router-link>
    <router-link class="main-nav__item main-nav__item--sale" :to="{name: 'Catalog'}">
      SALE
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.main-nav {
  display: flex;
  justify-content: space-between;
  width: 35%;
  @media screen and (max-width: 767px) {
    display: none;
  }
}

.main-nav__item {
  color: $main_color;
  text-decoration: none;
  &.main-nav__item--sale {
    color: $attention_color;
  }
  &:hover {
    color: $attention_color;
  }
}
</style>
