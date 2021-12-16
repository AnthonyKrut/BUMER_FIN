<template>
  <nav class="terms-nav">
    <router-link
      v-for="item in items"
      :key="item.label"
      active-class="terms-nav__item--active"
      class="terms-nav__item"
      :to="{ name: item.to }"
    >
      {{ item.label }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'TermsNav',
  data() {
    return {
      items: [
        {
          to: 'ShipmentInfoPage',
          label: this.$t('common.shipping'),
        },
        {
          to: 'PaymentInfoPage',
          label: this.$t('common.payment'),
        },
        {
          to: 'GuaranteeInfoPage',
          label: this.$t('common.guaranty'),
        },
        {
          to: 'CooperationInfoPage',
          label: this.$t('common.cooperation'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.terms-nav {
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  margin-right: 5%;
  font-size: adaptive_fz(14px, 9px);
  font-weight: 700;

  @media screen and (max-width: 767px) {
    flex-direction: row;
    margin-right: 0;
  }
}

.terms-nav__item {
  margin-left: 0;
  line-height: 3em;
  color: $main_color;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
    &.terms-nav__item--active {
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 767px) {
    flex-grow: 1;
  }
}

</style>
