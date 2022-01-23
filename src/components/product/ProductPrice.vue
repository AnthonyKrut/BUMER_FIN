<template>
  <div class="product-price">
    <div v-if="isOnSale" class="product-price__price-old">
      <div class="product-price__price-old-value">
        {{ priceOld }}
      </div>
      <div class="product-price__price-old-currency">
        грн
      </div>
    </div>
    <div class="product-price__price-active">
      <div class="product-price__price-active-value">
        {{ activePrice }}
      </div>
      <div class="product-price__price-active-currency">
        грн
      </div>
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
@import "../../assets/scss/functions";

.product-price__price-old {
  display: flex;
  align-items: baseline;

  @media screen and (max-width: 767px) {
    justify-content: flex-end;
  }
}

.product-price__price-old-value {
  margin-right: 0.1em;
  font-size: adaptive_fz(25px, 14px);
  font-weight: 500;
  text-decoration: line-through;
  color: $text_color_light;

  @media screen and (min-width: 1440px) {
    font-size: 25px;
  }
}

.product-price__price-old-currency {
  font-size: adaptive_fz(14px, 9px);
  color: $text_color_light;

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
}

.product-price__price-active {
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    justify-content: flex-end;
  }
}

.product-price__price-active-value {
  margin-right: 0.05em;
  font-size: adaptive_fz(80px, 20px);
  font-weight: 700;
  line-height: 1.1em;

  @media screen and (min-width: 1440px) {
    font-size: 80px;
  }
}

.product-price__price-active-currency {
  font-size: adaptive_fz(30px, 16px);
  font-weight: 700;

  @media screen and (min-width: 1440px) {
    font-size: 30px;
  }
}
</style>
