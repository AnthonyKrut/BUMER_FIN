<template>
  <nav class="nav">
    <router-link
      active-class="nav__item--active"
      class="nav__item"
      :to="{ name: 'ShipmentInfoPage' }"
    >
      Доставка
    </router-link>
    <router-link
      active-class="nav__item--active"
      class="nav__item"
      :to="{ name: 'PaymentInfoPage' }"
    > 
      Оплата
    </router-link>
    <router-link
      active-class="nav__item--active"
      class="nav__item"
      :to="{ name: 'GuaranteeInfoPage' }"
    >
      Гарантия 
    </router-link>
    <router-link
      active-class="nav__item--active"
      class="nav__item"
      :to="{ name: 'CooperationInfoPage' }"
    >
      Сотрудничество
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'TermsNav',
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.nav {
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  margin-right: 5%;
  font-size: adaptive_fz(14px, 9px);
  font-weight: 700;
}

.nav__item {
  line-height: 3em;
  color: $main_color;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
    &.nav__item--active {
    background-color: #f5f5f5;
  }
}

</style>