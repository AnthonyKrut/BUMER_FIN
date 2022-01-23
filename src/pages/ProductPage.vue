<template>
  <section class="product-card" @show-not-available="$refs.outOfStockModal.openModal()">
    <div class="container">
      <div v-if="product" class="product-card-wrapper">
        <div class="product-card__top">
  <!--        <PrevNextProductArrow type="prev" />-->
  <!--        <PrevNextProductArrow type="next" />-->

          <ProductImages :product="product" />

          <div class="product-card__info-column">
            <div class="product-card__title">
              <div class="product-card__heading">
                {{ product[$_i18n_getFieldWithLocale('name')] }}
              </div>
              <div v-show="isOnSale" class="product-card__sale-label">
                SALE
              </div>
            </div>

            <ProductDetails :product="product" />
<!--            <ColorsList :product="product" />-->
            <SizesList :product="product" />

            <div class="sizes-grid-button">
              <div class="sizes-grid-button__inner" @click="$refs.sizesGridModal.openModal()">
                <SvgImage class="sizes-grid-button__icon" name="boot" />
                <span>{{ $t('product.size_grid') }} ></span>
              </div>
            </div>

            <div class="product-card__adaptive-wrapper">
              <ProductPrice :product="product" />

              <Btn class="product-card__buy-btn" @click.native="addProductToCart">
                <SvgImage class="product-card__cart-icon" name="cart" />
                {{ $t('product.buy') }}
              </Btn>
            </div>
          </div>
        </div>
      </div>

      <ThePreloader v-if="loading" />

      <Catalog
        v-if="recommendedProducts"
        class="product-card__catalog-recommend"
        :heading="$t('product.recommended')"
        heading-position="left"
        :products="recommendedProducts"
      />
    </div>

    <SizesGridModal ref="sizesGridModal" />
    <OutOfStockModal ref="outOfStockModal" />
  </section>
</template>

<script>
import SvgImage from '@/components/common/SvgImage.vue'
import Btn from '@/components/common/Btn'
import {mapActions, mapGetters, mapMutations} from 'vuex'
import SizesGridModal from '@/components/product/SizesGridModal'
import OutOfStockModal from '@/components/product/OutOfStockModal'
import Catalog from '@/components/catalog/Catalog'
import SizesList from '@/components/product/SizesList'
// import ColorsList from '@/components/product/ColorsList'
import ProductDetails from '@/components/product/ProductDetails'
// import PrevNextProductArrow from '@/components/product/PrevNextProductArrow'
import ProductImages from '@/components/product/ProductImages'
import ProductPrice from '@/components/product/ProductPrice'
import ThePreloader from '@/components/common/ThePreloader'
import i18n from '@/mixins/i18n'

export default {
  name: 'ProductPage',
  mixins: [i18n],
  components: {
    ThePreloader,
    ProductPrice,
    ProductImages,
    // PrevNextProductArrow,
    ProductDetails,
    // ColorsList,
    SizesList,
    Catalog,
    SizesGridModal,
    OutOfStockModal,
    Btn,
    SvgImage,
  },
  data() {
    return {
      loading: false,
      product: null,
    }
  },
  computed: {
    ...mapGetters('products', [
      'getProductsByCategoryId'
    ]),
    productId() {
      return this.$route.params.id
    },
    isOnSale() {
      return this.product?.items?.[0].price_sale
    },
    recommendedProducts() {
      return this.getProductsByCategoryId(this.product?.categoryId)
    }
  },
  created() {
    this.getProduct()
    this.getRecommendedProducts()
  },
  methods: {
    ...mapActions('products', [
      'fetchProduct',
      'fetchProducts'
    ]),
    ...mapMutations('common', [
      'openCartPopover',
    ]),
    ...mapMutations('cart', [
      'addToCart',
    ]),
    async getProduct() {
      this.loading = true
      this.product = await this.fetchProduct(this.productId)
      this.loading = false
    },
    async getRecommendedProducts() {
      await this.fetchProducts()
    },
    addProductToCart() {
      this.addToCart(this.product)
      this.openCartPopover()
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/functions";
@import "../assets/scss/mixins";

.product-card {
  position: relative;
}

.product-card__top {
  position: relative;
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
}

.product-card__info-column {
  width: 34%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
}

.product-card__adaptive-wrapper {
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
}

.product-card__title {
  display: flex;
  align-items: center;
  margin: 1em 0 2.5em;
  font-size: adaptive_fz(16px, 10px);
  font-weight: 700;

  @media screen and (max-width: 767px) {
    margin-bottom: 1em;
  }
}

.product-card__heading {
  margin-right: 2em;
  text-transform: uppercase;
}

.product-card__sale-label {
  padding: 0 1em;
  font-size: adaptive_fz(12px, 8px);
  line-height: 2.3em;
  color: $contrast_color;
  background-color: #c61d24;
}

.product-card__buy-btn {
  margin-top: 0.5em;
  padding: 0.83em 1.66em;
  font-size: adaptive_fz(12px, 9px);
}

.product-card__cart-icon {
  height: 18px;
  width: 18px;
  margin-right: 1em !important;
  stroke: $main_color
}

.sizes-grid-button {
  font-size: adaptive_fz(10px, 9px);
  font-weight: 300;
  line-height: 1.5em;
  text-transform: uppercase;
  color: #888888;
  margin-bottom: 50px;
}

.sizes-grid-button__inner {
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #aaaaaa;
  }
}

.sizes-grid-button__icon {
  width: 1.67em;
  height: 1.25em;
  margin-right: 0.5em;
  position: relative;
  top: -1px;
}

.product-card__catalog-recommend {
  margin-top: calc(3 * adaptive_fz(20px, 12px));
  margin-bottom: calc(4 * adaptive_fz(20px, 12px));

  @media screen and (max-width: 767px) {
    margin-bottom: calc(1.5 * adaptive_fz(20px, 12px));
  }
}

</style>
