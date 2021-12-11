<template>
  <router-link :to="{name: 'Product'}" class="catalog-product-item">
    <div class="catalog-product-item__label">
      TOP
    </div>
    <div class="catalog-product-item__image-wrapper">
      <img alt="" class="catalog-product-item__image" src="/img/stock-items/item02-01.png">
    </div>
    <div class="catalog-product-item__specs">
      <div class="catalog-product-item__sku">
        QN380
      </div>
      <div class="catalog-product-item__price">
        2250 <span class="catalog-product-item__currency">грн</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CatalogProductItem',
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
  color: #000;
  text-decoration: none;

  &:hover {
    .catalog-product-item__image-wrapper {
      background: #e2e1e1;
    }
  }
}

.catalog-product-item__specs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.33em;
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
  background: #f0f0f0;
  transition: background-color 0.2s;
}

.catalog-product-item__image {
  display: block;
  width: 100%;
  object-fit: cover;
}

</style>
