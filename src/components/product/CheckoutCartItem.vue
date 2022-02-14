<template>
  <div class="checkout-cart-item">
    <router-link
      class="checkout-cart-item__left"
      :style="`background-image:url(${mainImage});`"
      :to="{name: 'Product', params: {id: product.id}}"
    />
    <div class="checkout-cart-item__right">
      <div>
        <div class="checkout-cart-item__remove-icon" @click="deleteFromCart(product.id)">
          <SvgImage name="trash" />
        </div>

        <router-link class="checkout-cart-item__name" :to="{name: 'Product', params: {id: product.id}}">
          {{ product[`name_${$i18n.locale}`] }}
        </router-link>

        <div
          v-for="size in sizes"
          :key="size.size"
          class="cart-popover-product-item__info"
        >
          <div class="checkout-cart-item__size">
            {{ $t('product.size') }}: {{ size.size }}
          </div>

          <div class="checkout-cart-item__count">
            <div class="checkout-cart-item__count-label">
              {{ $t('product.quantity_short') }}:
            </div>

            <Multiselect
              class="form__select checkout-cart-item__count-select"
              :options="quantityAvailable"
              placeholder=""
              :show-labels="false"
              :value="size.quantityInOrder"
              @input="onChangeQuantity($event, product, size.size)"
            />
          </div>
        </div>
      </div>

      <div>
        <div v-if="isOnSale" class="checkout-cart-item__price-old">
          <div class="checkout-cart-item__value-old">
            {{ priceOld }}
          </div>
          <div class="checkout-cart-item__currency-old">
            грн
          </div>
        </div>
        <div class="checkout-cart-item__price">
          <div class="checkout-cart-item__value">
            {{ activePrice }}
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
import {mapMutations} from 'vuex'

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
    mainImage() {
      return this.product?.images.find(i => i.imagePosition === 'Main')?.smallCropImageUri
    },
    sizes() {
      return this.product.productInfo.filter(i => i.quantityInOrder > 0)
    },
    isOnSale() {
      return this.product?.salePrice
    },
    activePrice() {
      return this.product.salePrice || this.product.price
    },
    priceOld() {
      return this.product.price
    },
    quantityAvailable() {
      return [1, 2, 3, 4, 5]
    },
  },
  methods: {
    ...mapMutations('cart', [
      'changeQuantity',
      'deleteFromCart',
    ]),
    onChangeQuantity(quantity, product, size) {
      this.changeQuantity({quantity, product, size})
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.checkout-cart-item {
  display: flex;
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
  padding: 1.5em 3em 2em 4em;
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
  margin-bottom: 20px;
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
  margin-bottom: 5px;
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
  margin-bottom: 15px;
}

.checkout-cart-item__count-label {
  color: #8e8e8e;
  margin-right: 10px;
}

.checkout-cart-item__count-select {
  width: 48px;
  height: 25px;
  position: relative;
  min-height: unset;

  &.multiselect--active {

    ::v-deep {
      .multiselect__select {
        top: 8px;
      }
    }
  }

  ::v-deep {
    .multiselect__tags {
      height: 25px;
      min-height: auto;
      padding: 3px 30px 0 6px;
    }

    .multiselect__select {
      width: 25px;
      height: 12px;
      right: 1px;
      top: 7px;
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
