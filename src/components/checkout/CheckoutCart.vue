<template>
  <div class="checkout-cart">
    <h2 class="checkout-cart__heading">
      {{ $t('cart.cart') }}
    </h2>

    <div v-if="cart.length" class="checkout-cart__content">
      <CheckoutCartItem
        v-for="product in cart"
        :key="product.article_num"
        :product="product"
      />
    </div>

    <div v-else class="checkout-page__empty">
      {{ $t('cart.empty_cart') }}
    </div>

    <div v-if="safe" class="checkout-page__discount">
      <div>{{ $t('cart.saving') }}</div>
      <div>{{safe}} грн</div>
    </div>

    <div class="checkout-page__total">
      <div class="checkout-page__total-label">
        {{ $t('cart.to_pay') }}
      </div>
      <div class="checkout-page__total-value">
        {{total}} грн
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import CheckoutCartItem from '@/components/product/CheckoutCartItem'

export default {
  name: 'CheckoutCart',
  components: {CheckoutCartItem},
  computed: {
    ...mapState('cart', [
      'cart',
    ]),
    ...mapGetters('cart', [
      'total',
      'safe'
    ])
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.checkout-cart {
  border: 5px solid #000000;
  padding: 3em 6em 4.5em 6em; //30px 60px 45px 60px;
  font-size: adaptive_fz(10px, 5px);

  @media screen and (min-width: 1440px) {
    font-size: 10px;
  }

  @media screen and (max-width: 991px) {
    border-width: 2px;
    padding: 3em;
  }
}

.checkout-cart__heading {
  font-size: adaptive_fz(20px, 12px);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 1em;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
}

//.checkout-cart__content {}

.checkout-page__discount {
  color: $cuccess_color;
  display: flex;
  justify-content: space-between;
  font-size: adaptive_fz(14px, 11px);
  margin: 2em 0 0.75em;

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }

  @media screen and (max-width: 991px) {
    margin-top: 1em;
  }
}

.checkout-page__total {
  font-size: adaptive_fz(20px, 12px);
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
}

.checkout-page__total-label {
  font-weight: normal;
}

.checkout-page__total-value {
  font-weight: bold;
}

.checkout-page__empty {
  font-size: adaptive_fz(20px, 12px);
  text-align: center;
  color: #cccccc;
  padding: 2.25em;
  text-transform: uppercase;
  border-bottom: 1px solid $divider_color;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
}

</style>
