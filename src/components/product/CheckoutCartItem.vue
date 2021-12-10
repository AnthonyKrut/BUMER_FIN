<template>
  <div class="checkout-cart-item">
    <div class="checkout-cart-item__left" :style="`background-image:url(${product.items[0].pics[0]});`" />
    <div class="checkout-cart-item__right">
      <div>
        <div class="checkout-cart-item__remove-icon">
          <SvgImage name="trash" />
        </div>

        <router-link :to="{name: 'Product'}" class="checkout-cart-item__name">
          Кроссовки
        </router-link>

        <div class="checkout-cart-item__size">
          Размер: 43
        </div>

        <div class="checkout-cart-item__count">
          <div class="checkout-cart-item__count-label">
            Количество
          </div>

          <Multiselect
            :value="product.quantity || 1"
            class="form__select checkout-cart-item__count-select"
            :options="quantityAvailable"
            placeholder=""
            :show-labels="false"
            @change="changeQuantity"
          />
        </div>
      </div>

      <div>
        <div class="checkout-cart-item__price-old">
          2 499
          <div class="checkout-cart-item__currency-old">
            грн
          </div>
        </div>
        <div class="checkout-cart-item__price">
          2 499
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
    SvgImage
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
    }
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

.checkout-cart-item {
  display: flex;
  background: $product_bg;
  border-bottom: 1px solid $divider_color;
  text-decoration: none;
  color: #000;
}

.checkout-cart-item__left {
  width: 160px;
  height: 200px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-top: 14px solid $foreground;
  border-bottom: 14px solid $foreground;
}

.checkout-cart-item__right {
  background: $foreground;
  flex-grow: 1;
  padding: 15px 30px 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.1s;
  border-top: 14px solid $foreground;
  border-bottom: 14px solid $foreground;
  position: relative;
}

.checkout-cart-item__name {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 15px;
  display: block;
  color: #000;
  text-decoration: none;

  &:hover {
    color: $attention_color
  }
}

.checkout-cart-item__count {
  display: flex;
  align-items: center;
}

.checkout-cart-item__count-label {
  color: #8e8e8e;
  font-size: 11px;
  font-weight: 400;
  margin-bottom: 5px;
  margin-right: 35px;
}

.checkout-cart-item__size {
  color: #8e8e8e;
  font-size: 11px;
  font-weight: 400;
  margin-bottom: 5px;
}

.checkout-cart-item__price {
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.checkout-cart-item__currency {
  font-size: 12px;
  font-weight: 700;
  margin-left: 5px;
  position: relative;
  top: 1px;
}

.checkout-cart-item__price-old {
  font-weight: 500;
  font-size: 11px;
  color: #8e8e8e;
  text-decoration: line-through;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.checkout-cart-item__currency-old {
  font-size: 9px;
  text-decoration: none;
  margin-left: 5px;
  position: relative;
  top: 1px;
  text-transform: uppercase;
}

.checkout-cart-item__remove-icon {
  color: #777777;
  position: absolute;
  right: 3px;
  top: 3px;
  cursor: pointer;

  &:hover {
    color: $attention_color;
  }
}

.checkout-cart-item__count-select {
  width: 48px;
  height: 30px;
  position: relative;
  top: 1px;

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

</style>
