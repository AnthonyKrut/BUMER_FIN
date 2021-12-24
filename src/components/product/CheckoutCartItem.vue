<template>
  <div class="checkout-cart-item">
    <div class="checkout-cart-item__left" :style="`background-image:url(${product.items[0].pics[0]});`" />
    <div class="checkout-cart-item__right">
      <div>
        <div class="checkout-cart-item__remove-icon">
          <SvgImage name="trash" />
        </div>

        <router-link class="checkout-cart-item__name" :to="{name: 'Product'}">
          Кроссовки
        </router-link>

        <div class="checkout-cart-item__size">
          Размер: 43
        </div>

        <div class="checkout-cart-item__color">
          Цвет: Зеленый
        </div>

        <div class="checkout-cart-item__count">
          <div class="checkout-cart-item__count-label">
            Количество
          </div>

          <Multiselect
            class="form__select checkout-cart-item__count-select"
            :options="quantityAvailable"
            placeholder=""
            :show-labels="false"
            :value="product.quantity || 1"
            @change="changeQuantity"
          />
        </div>
      </div>

      <div>
        <div class="checkout-cart-item__price-old">
          <div class="checkout-cart-item__value-old">
            2 499
          </div>
          <div class="checkout-cart-item__currency-old">
            грн
          </div>
        </div>
        <div class="checkout-cart-item__price">
          <div class="checkout-cart-item__value">
            2 499
          </div>
          <div class="checkout-cart-item__currency">
            грн
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import SvgImage from '@/components/common/SvgImage'

export default {
  name: 'CheckoutCartItem',
  components: {
    Multiselect,
    SvgImage,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    quantityAvailable () {
      return [1, 2, 3, 4, 5]
    },
  },
  methods: {
    changeQuantity(e) {
      console.log('changeQuantity', e)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.checkout-cart-item {
  display: flex;
  background: $product_bg;
  border-bottom: 1px solid $divider_color;
  text-decoration: none;
  color: #000;
}

.checkout-cart-item__left {
  width: 40%; //160px; //height: 200px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-top: 1em solid $foreground;
  border-bottom: 1em solid $foreground;
  font-size: adaptive_fz(14px, 5px);

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
}

.checkout-cart-item__right {
  position: relative;
  flex-grow: 1;
  padding: 1.5em 3em 2em 4em; //15px 30px 20px 40px;
  border-top: 1.25em solid $foreground;
  border-bottom: 1.25em solid $foreground;
  background: $foreground;
  transition: background-color 0.1s;
  font-size: adaptive_fz(10px, 5px);

  @media screen and (min-width: 1440px) {
    font-size: 10px;
  }

  @media screen and (max-width: 991px) {
    padding: 1em 1em 1em 2em;
    border-top-width: 0.5em;
    border-bottom-width: 0.5em;
  }
}

.checkout-cart-item__name {
  text-transform: uppercase;
  font-size: adaptive_fz(12px, 10px);
  font-weight: 700;
  margin-bottom: 0.75em;
  display: block;
  color: #000;
  text-decoration: none;

  &:hover {
    color: $attention_color
  }
}

.checkout-cart-item__size {
  color: #8e8e8e;
  font-size: adaptive_fz(11px, 9px);
  font-weight: 400;
  margin-bottom: 0.9em;
}

.checkout-cart-item__color {
  color: #8e8e8e;
  font-size: adaptive_fz(11px, 9px);
  font-weight: 400;
}

.checkout-cart-item__count {
  display: flex;
  align-items: center;
  font-size: adaptive_fz(11px, 9px);
  font-weight: 400;
  margin: 0.7em 0;
}

.checkout-cart-item__count-label {
  color: #8e8e8e;
  margin-right: 3.3em;
}

.checkout-cart-item__count-select {
  width: 48px;
  height: 30px;
  position: relative;
  min-height: unset;

  &.multiselect--active {

    ::v-deep {
      .multiselect__select {
        top: 10px;
      }
    }
  }

  ::v-deep {
    .multiselect__tags {
      height: 30px;
      min-height: auto;
      padding: 6px 30px 0 6px;
    }

    .multiselect__select {
      width: 30px;
      height: 12px;
      right: 1px;
      top: 9px;
      padding: 0px 8px;

      &:before {
        top: -45%
      }
    }

    .multiselect__option {
      padding: 7px 10px;
      min-height: auto;
    }
  }
}

.checkout-cart-item__price-old {
  display: flex;
  align-items: baseline;
  font-size: adaptive_fz(11px, 8px);
  font-weight: 500;
  color: #8e8e8e;
}

.checkout-cart-item__value-old {
  text-decoration: line-through;
}

.checkout-cart-item__currency-old {
  margin-left: 0.56em;
  font-size: adaptive_fz(9px, 8px);
  text-decoration: none;
}

.checkout-cart-item__price {
  display: flex;
  align-items: baseline;
  font-size: adaptive_fz(15px, 10px);
  font-weight: 700;
  line-height: 1.45em;
}

.checkout-cart-item__currency {
  margin-left: 0.4em;
  font-size: adaptive_fz(12px, 9px);
  font-weight: 700;
  text-transform: uppercase;
}

.checkout-cart-item__remove-icon {
  color: #777777;
  position: absolute;
  top: 1.5em; //3px;
  right: 3em; //3px;
  cursor: pointer;

  &:hover {
    color: $attention_color;
  }

  @media screen and (max-width: 991px) {
    right: 1em;
    top: 1em;
  }
}

</style>
