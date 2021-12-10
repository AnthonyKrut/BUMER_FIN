<template>
  <div class="checkout-page">
    <div class="container">
      <h1>Оформить заказ</h1>

      <div class="checkout-page__inner">
        <div class="checkout-page__left">
          <CheckoutForm ref="checkoutForm" />

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

          <Btn full-width @click.native="$refs.checkoutForm.submit">
            Подтвердить заказ
          </Btn>

          <div class="checkout-page__privacy-policy">
            Подтверждая заказ вы соглашаетесь с
            <router-link class="checkout-page__privacy-policy-link" :to="{name: 'PrivacyPolicyInfo'}">
              Политикой конфиденциальности
            </router-link>
          </div>
        </div>
        <div class="checkout-page__right">
          <CheckoutCart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutForm from '@/components/checkout/CheckoutForm'
import Btn from '@/components/common/Btn'
import CheckoutCart from '@/components/checkout/CheckoutCart'
export default {
  name: 'CheckoutPage',
  components: {CheckoutCart, Btn, CheckoutForm},
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.checkout-page__inner {
  display: flex;
  margin-right: -60px;
  margin-left: -60px;
  margin-bottom: 140px;
}

.checkout-page__left {
  width: 50%;
  padding-right: 60px;
  padding-left: 60px;
}

.checkout-page__right {
  width: 50%;
  padding-right: 60px;
  padding-left: 60px;
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
  margin-bottom: 50px;
}

.checkout-page__total-label {
  font-weight: normal;
}

.checkout-page__total-value {
  font-weight: bold;
}

.checkout-page__privacy-policy {
  font-size: 10px;
  margin-top: 10px;
  color: #6D6D6D;
}

.checkout-page__privacy-policy-link {
  color: #2048bf;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}


</style>
