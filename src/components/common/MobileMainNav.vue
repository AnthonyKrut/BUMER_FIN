<template>
  <div class="mobile-main-nav">
    <router-link
      v-for="item in items"
      :key="item.label"
      active-class="mobile-main-nav__category--active"
      class="mobile-main-nav__category"
      :to="{name: item.to}"
    >
      {{ item.label }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MobileMainNav',
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
  }

  &.mobile-main-nav__category--active {
    color: $attention_color;

    &::after {
      transform: rotate(-90deg);
    }
  }
}

</style>
