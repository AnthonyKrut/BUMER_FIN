<template>
  <div class="mobile-main-nav">
    <router-link
      :to="{name: 'Home'}"
      active-class="mobile-main-nav__category--active"
      class="mobile-main-nav__category"
    >
      {{ $t('common.main_page')}}
    </router-link>
    <router-link
      v-for="category in categories"
      :key="category.id"
      :to="{name: 'Catalog', params: {id: category.id}}"
      active-class="mobile-main-nav__category--active"
      class="mobile-main-nav__category"
    >
      {{ category[$_i18n_getFieldWithLocale('name')] }}
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import i18n from '@/mixins/i18n'

export default {
  name: 'MobileMainNav',
  mixins: [i18n],
  computed: {
    ...mapState('categories', [
      'categories',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.mobile-main-nav {
  display: flex;
  flex-direction: column;
}

.mobile-main-nav__category {
  position: relative;
  padding: 0 2em 0 3em;
  border-bottom: 1px solid #252525;
  line-height: 3.8em;
  color: $contrast_color;
  text-decoration: none;
  text-transform: uppercase;

  &:last-child {
    color: $attention_color;
  }

  &:hover {
    color: #aaaaaa;
  }

  &::after {
    content: '';
    width: 1.2em;
    height: 0.75em;
    background: url('../../assets/img/svg/tick-burg.svg') center/contain no-repeat;
    position: absolute;
    top: calc(50% - 0.5 * 0.75em);
    right: 2em;
    transform: rotate(270deg);
  }

  &.mobile-main-nav__category--active {
    color: $attention_color;

    &::after {
      transform: rotate(-90deg);
    }
  }
}

</style>
