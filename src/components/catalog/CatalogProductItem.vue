<template>
  <router-link class="catalog-product-item" :to="{name: 'Product'}">
    <span class="catalog-product-item__label">
      TOP
    </span>
    <span class="catalog-product-item__image-wrapper">
      <img alt="" class="catalog-product-item__image" src="/img/stock-items/item02-01.png">
    </span>
    <span 
      class="catalog-product-item__specs" 
      :class="{'catalog-product-item__specs--adaptive': isSpecsAdaptive}"
    >
      <span class="catalog-product-item__sku">
        QN380
      </span>
      <span class="catalog-product-item__price">
        2250 <span class="catalog-product-item__currency">грн</span>
      </span>
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'CatalogProductItem',
  props: {
    isSpecsAdaptive: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isOnSale(item) {
      return item.price_sale
    },
    activePrice(product) {
      if (product.price_sale) {
        return product.price_sale
      } else {
        return product.price_stndrt
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.catalog-product-item {
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-width: 300px;
  color: $main_color;
  text-decoration: none;

  &:hover {
    .catalog-product-item__image-wrapper {
      background: #e2e1e1;
    }
  }
}

.catalog-product-item__label {
  position: absolute;
  top: 1em;
  right: 1em;
  padding: 0 1em;
  font-size: adaptive_fz(12px, 8px);
  line-height: 2em;
  background-color: #f5973f;
}

.catalog-product-item__image-wrapper {
  flex-grow: 1;
  background: $product_bg;
  transition: background-color 0.2s;
}

.catalog-product-item__image {
  display: block;
  width: 100%;
  object-fit: cover;
}

.catalog-product-item__specs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.33em;

  &.catalog-product-item__specs--adaptive {
    @media screen and (max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}

.catalog-product-item__sku {
  font-size: adaptive_fz(12px, 8px);
  font-weight: 400;
  color: $text_color_dark;
}

.catalog-product-item__price {
  font-size: adaptive_fz(20px, 12px);
  font-weight: 700;
}

.catalog-product-item__currency {
  font-size: 0.75em;
}

</style>
