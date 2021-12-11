<template>
<div class="product-price">
  <div v-if="isOnSale" class="product-price__price-old">
    <div class="product-price__price-old-value">
      {{ priceOld }}
    </div>
    <div class="product-price__price-old-currency">грн</div>

  </div>
  <div class="product-price__price-active">
    <div class="product-price__price-active-value">
      {{ activePrice }}
    </div>
    <div class="product-price__price-active-currency">грн</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductPrice',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    isOnSale() {
      return this.product?.items?.[0].price_sale
    },
    activePrice() {
      return this.product.items[0].price_sale ? this.product.items[0].price_sale : this.product.items[0].price_stndrt
    },
    priceOld() {
      return this.product.items[0].price_stndrt
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.product-price__price-old {
  display: flex;
  align-items: flex-end;
}

.product-price__price-active {
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
}

.product-price__price-old-value {
  margin-right: 0.1em;
  font-size: adaptive_fz(25px, 14px);
  font-weight: 600;
  text-decoration: line-through;
  color: $text_color_light;
}

.product-price__price-old-currency {
  font-size: adaptive_fz(14px, 9px);
  color: $text_color_light;
}

.product-price__price-active-value {
  margin-right: 5px;
  font-size: adaptive_fz(80px, 20px);
  font-weight: bold;
  line-height: 1.2;
}

.product-price__price-active-currency {
  margin-bottom: 0.3em;
  font-size: adaptive_fz(30px, 16px);
  font-weight: bold;
}
</style>
