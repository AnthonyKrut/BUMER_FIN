<template>
  <section class="checkout-page">
    <div class="container">
      <h1>{{ $t('checkout.checkout') }}</h1>

      <div class="checkout-page__inner">
        <div class="checkout-page__left">
          <CheckoutForm ref="checkoutForm" />

          <div class="checkout-page__discount">
            <div>{{ $t('checkout.saving') }}</div>
            <div>400 грн</div>
          </div>

          <div class="checkout-page__total">
            <div class="checkout-page__total-label">
              {{ $t('checkout.to_pay') }}
            </div>
            <div class="checkout-page__total-value">
              4 998 грн
            </div>
          </div>

          <Btn full-width @click.native="$refs.checkoutForm.submit">
            {{ $t('checkout.confirm_checkout') }}
          </Btn>

          <div class="checkout-page__privacy-policy">
            {{ $t('checkout.privacy_policy_link') }}
            <router-link class="checkout-page__privacy-policy-link" :to="{name: 'PrivacyPolicyInfo'}">
              {{ $t('checkout.privacy_policy') }}
            </router-link>
          </div>
        </div>
        <div class="checkout-page__right">
          <CheckoutCart />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CheckoutForm from '@/components/checkout/CheckoutForm'
import Btn from '@/components/common/Btn'
import CheckoutCart from '@/components/checkout/CheckoutCart'
export default {
  name: 'CheckoutPage',
  components: {
    CheckoutCart,
    Btn,
    CheckoutForm,
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/functions";

.checkout-page__inner {
  display: flex;
  margin-bottom: 6em; //140px;
  font-size: adaptive_fz(25px, 14px);

  @media screen and (min-width: 1440px) {
    font-size: 25px;
  }

  @media screen and (max-width: 991px) {
    margin-bottom: 3em;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
}

.checkout-page__left {
  width: 50%;
  padding-right: 7.6%; //90px;

  @media screen and (max-width: 991px) {
    padding-right: 5%;
  }

  @media screen and (max-width: 767px) {
    order: 2;
    width: 100%;
    padding-right: 0;
  }
}

.checkout-page__right {
  width: 50%;
  padding-left: 3.4%;//40px;

  @media screen and (max-width: 991px) {
    padding-left: 0;
  }

  @media screen and (max-width: 767px) {
    order: 1;
    width: 100%;
    margin-bottom: 20px;
  }
}

.checkout-page__discount {
  color: $cuccess_color;
  display: flex;
  justify-content: space-between;
  font-size: adaptive_fz(14px, 11px);
  margin-bottom: 15px;

  @media screen and (max-width: 991px) {
    margin-bottom: 5px;
  }
}

.checkout-page__total {
  font-size: adaptive_fz(20px, 12px);
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
  }
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
