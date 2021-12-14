<template>
  <nav class="top-header-nav">
    <router-link
      active-class="top-header-nav__item--active"
      class="top-header-nav__item"
      :to="{name: 'PaymentInfoPage'}"
    >
      Оплата
    </router-link>
    <router-link
      active-class="top-header-nav__item--active"
      class="top-header-nav__item"
      :to="{name: 'ShipmentInfoPage'}"
    >
      Доставка
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'TopHeaderNav',
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.top-header-nav {
  display: flex;
}

.top-header-nav__item {
  text-decoration: none;
  color: #FFFFFF;
  padding-left: 10px;
  padding-right: 10px;
  text-transform: uppercase;

  &:hover {
    color: #aaaaaa;
  }

  &.top-header-nav__item--active {
    color: $attention_color;
  }
}

</style>
