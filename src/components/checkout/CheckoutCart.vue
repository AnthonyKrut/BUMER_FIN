<template>
<div class="checkout-cart">
  <h2 class="checkout-cart__heading">
    Корзина
  </h2>

  <div v-if="cart.length" class="checkout-cart__content">
    <CheckoutCartItem
      v-for="product in cart"
      :key="product.article_num"
      :product="product"
    />
  </div>

  <div v-else class="checkout-page__empty">
    Ваша корзина пока пуста
  </div>

  <div class="checkout-page__discount">
    <div>Экономия</div>
    <div>400 грн</div>
  </div>

  <div class="checkout-page__total">
    <div class="checkout-page__total-label">
      К оплате
    </div>
    <div class="checkout-page__total-value">
      4 998 грн
    </div>
  </div>

</div>
</template>

<script>
import {mapState} from 'vuex'
import CheckoutCartItem from '@/components/product/CheckoutCartItem'

export default {
  name: 'CheckoutCart',
  components: {CheckoutCartItem},
  computed: {
    ...mapState('cart', [
      'cart',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.checkout-cart {
  border: 5px solid #000000;
  padding: 30px 60px 45px 60px;
}

.checkout-cart__heading {
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
}

.checkout-cart__content {
  margin-bottom: 30px;
}

.checkout-page__discount {
  color: $cuccess_color;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 15px;
}

.checkout-page__total {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}

.checkout-page__total-label {
  font-weight: normal;
}

.checkout-page__total-value {
  font-weight: bold;
}

.checkout-page__empty {
  text-align: center;
  color: #cccccc;
  padding: 45px;
  text-transform: uppercase;
  border-bottom: 1px solid $divider_color;
  margin-bottom: 30px;
}

</style>
