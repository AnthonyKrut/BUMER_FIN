<template>
  <router-link :to="{name: 'Product'}" class="cart-popover-product-item">
    <div :style="`background-image:url(${product.items[0].pics[0]});`" class="cart-popover-product-item__left" />
    <div class="cart-popover-product-item__right">
      <div>
        <div class="cart-popover-product-item__name">
          Кроссовки
        </div>

        <div class="cart-popover-product-item__count">
          Кол-во: 1шт
        </div>

        <div class="cart-popover-product-item__size">
          Размер: 43
        </div>
      </div>

      <div>
        <div class="cart-popover-product-item__price-old">
          2 499
          <div class="cart-popover-product-item__currency-old">
            грн
          </div>
        </div>
        <div class="cart-popover-product-item__price">
          2 499
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
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.cart-popover-product-item {
  display: flex;
  background: $product_bg;
  border-bottom: 1px solid $divider_color;
  text-decoration: none;
  color: #000;

  &:hover {
    .cart-popover-product-item__right {
      background: darken($foreground,3%);
    }
  }
}

.cart-popover-product-item__left {
  width: 160px;
  height: 170px;
  background-position: center;
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

</style>
