<template>
  <router-link class="catalog-product-item" :to="{name: 'Product', params: {id: product.id}}">
    <span v-if="product.isTop" class="catalog-product-item__label">
      TOP
    </span>
    <div v-show="isOnSale" class="catalog-product-item__label catalog-product-item__label--sale">
      SALE
    </div>

    <span class="catalog-product-item__image-wrapper">
      <img alt="" class="catalog-product-item__image" :src="image">
    </span>

    <span
      class="catalog-product-item__specs"
      :class="{'catalog-product-item__specs--adaptive': isSpecsAdaptive}"
    >
      <span class="catalog-product-item__sku">
        Арт: {{ product.article }}
      </span>

      <span class="catalog-product-item__price">
        {{ product.salePrice || product.price }} <span class="catalog-product-item__currency">грн</span>
      </span>
    </span>
  </router-link>
</template>

<script>
export default {
  name: 'CatalogProductItem',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
    isSpecsAdaptive: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    image() {
      return this.product?.images.find(i => i.imagePosition === 'Main')?.smallCropImageUri || '/img/no-image.svg'
    },
    isOnSale() {
      return this.product?.salePrice
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
      background: #000000;
    }

    .catalog-product-item__image {
      opacity: 0.97;
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
  z-index: 2;

  &.catalog-product-item__label--sale {
    color: $contrast_color;
    background-color: #c61d24;
  }
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
  transition: opacity 0.2s;
}

.catalog-product-item__specs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 10px 20px;
  margin-top: -45px;
  position: relative;
  z-index: 2;

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
