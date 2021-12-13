<template>
  <div class="mobile-main-nav">
    <router-link class="mobile-main-nav__category" :to="{name: 'Catalog'}">
      КРОССОВКИ
    </router-link>
    <router-link class="mobile-main-nav__category" :to="{name: 'Catalog'}">
      БОТИНКИ
    </router-link>
    <router-link class="mobile-main-nav__category" :to="{name: 'Catalog'}">
      ТУФЛИ
    </router-link>
    <router-link class="mobile-main-nav__category" :to="{name: 'Catalog'}">
      SALE
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MobileMainNav',
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
  line-height: 2em;
  color: $contrast_color;
  text-decoration: none;

  &:last-child {
    color: $attention_color;
  }

  &:hover {
    color: $attention_color;
  }

  &::after {
    content: '';
    width: 1.2em;
    height: 0.75em;
    background: url('../../assets/img/svg/tick-burg.svg') center/contain no-repeat;
    position: absolute;
    top: calc(50% - 0.5 * 0.75em);
    right: 2em;
  }
}

</style>
