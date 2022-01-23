<template>
  <div class="main-nav">
    <router-link
      v-for="category in categories"
      :key="category.id"
      :to="{name: 'Catalog', params: {id: category.id}}"
      class="main-nav__item"
    >
      {{ category[$_i18n_getFieldWithLocale('name')] }}
    </router-link>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import i18n from '@/mixins/i18n'

export default {
  name: 'MainNav',
  mixins: [i18n],
  computed: {
    ...mapState('categories', [
      'categories',
    ]),
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    ...mapActions('categories', [
      'fetchCategories',
    ]),
  },
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
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  border-top: 2px solid transparent;

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
