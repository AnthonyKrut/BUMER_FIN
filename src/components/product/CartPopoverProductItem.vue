<template>
  <router-link class="cart-popover-product-item" :to="{name: 'Product', params: {id: product.id}}">
    <div class="cart-popover-product-item__left" :style="`background-image:url(${mainImage});`" />
    <div class="cart-popover-product-item__right">
      <div>
        <div class="cart-popover-product-item__name">
          {{ product[`name_${$i18n.locale}`] }}
        </div>

        <div
          v-for="size in sizes"
          :key="size.size"
          class="cart-popover-product-item__info"
        >
          <div class="cart-popover-product-item__size">
            {{ $t('product.size') }}: {{ size.size }}
          </div>

          <div class="cart-popover-product-item__count">
            {{ $t('product.quantity_short') }}: {{ size.quantityInOrder }}шт
          </div>
        </div>
      </div>

      <div>
        <div v-if="isOnSale" class="cart-popover-product-item__price-old">
          {{ priceOld }}
          <div class="cart-popover-product-item__currency-old">
            грн
          </div>
        </div>
        <div class="cart-popover-product-item__price">
          {{ activePrice }}
          <div class="cart-popover-product-item__currency">
            грн
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CartPopoverProductItem',
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
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.cart-popover-product-item {
  display: flex;
  border-bottom: 1px solid $divider_color;
  text-decoration: none;
  align-items: center;
  color: #000;

  &:hover {
    .cart-popover-product-item__right {
      background: darken($foreground,3%);
    }
  }
}

.cart-popover-product-item__left {
  width: 160px;
  height: 160px;
  background-position: center top 5px;
  background-size: contain;
  background-repeat: no-repeat;
  border: 2px solid $foreground;
}

.cart-popover-product-item__right {
  background: $foreground;
  flex-grow: 1;
  padding: 30px 30px 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.1s;
}

.cart-popover-product-item__name {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 15px;
}

.cart-popover-product-item__count {
  color: #8e8e8e;
  font-size: 11px;
  font-weight: 400;
  margin-bottom: 5px;
}

.cart-popover-product-item__size {
  color: #8e8e8e;
  font-size: 11px;
  font-weight: 400;
  margin-bottom: 5px;
}

.cart-popover-product-item__price {
  font-size: 15px;
  font-weight: 700;
  display: flex;
  align-items: center;
}

.cart-popover-product-item__currency {
  font-size: 12px;
  font-weight: 700;
  margin-left: 5px;
  position: relative;
  top: 1px;
}

.cart-popover-product-item__price-old {
  font-weight: 500;
  font-size: 11px;
  color: #8e8e8e;
  text-decoration: line-through;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.cart-popover-product-item__currency-old {
  font-size: 9px;
  text-decoration: none;
  margin-left: 5px;
  position: relative;
  top: 1px;
  text-transform: uppercase;
}

.cart-popover-product-item__info {
  margin-bottom: 15px;
}

</style>
