<template>
  <div class="main-nav">
    <router-link
      v-for="category in categories"
      :key="category.id"
      class="main-nav__item"
      :to="{name: 'Catalog', params: {id: category.id}}"
    >
      {{ category[`name_${$i18n.locale}`] }}
    </router-link>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  name: 'MainNav',
  computed: {
    ...mapGetters('locales', [
      'getFieldByLocale',
    ]),
    ...mapState('categories', [
      'categories',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.main-nav {
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.main-nav__item {
  color: $main_color;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;
  margin-right: 20px;
  margin-left: 20px;

  &.main-nav__item--sale {
    color: $attention_color;
  }

  &:hover {
    color: $attention_color;
  }

  &.router-link-active {
    border-bottom-color: $attention_color;
  }
}
</style>
