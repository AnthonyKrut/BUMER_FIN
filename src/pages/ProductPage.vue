<template>
  <section :key="product && product.id" class="product-card" @show-not-available="$refs.outOfStockModal.openModal()">
    <div class="container">
      <TransitionWrapper>
        <div v-if="product" class="product-card-wrapper">
          <div class="product-card__top">
            <!--<PrevNextProductArrow type="prev" />-->
            <!--<PrevNextProductArrow type="next" />-->

            <ProductImages :product="product" />

            <div class="product-card__info-column">
              <div class="product-card__title">
                <div class="product-card__heading">
                  {{ product[`name_${$i18n.locale}`] }}
                </div>
                <div class="product-card__sale-label-wrapper">
                  <div v-show="isOnSale" class="product-card__label">
                    SALE
                  </div>
                  <div v-show="product.isNew" class="product-card__label product-card__label--new">
                    NEW
                  </div>
                </div>
              </div>

              <ProductDetails :product="product" />
              <ColorsList :product="product" :relatives="relatives" />
              <SizesList :product="product" />


              <div class="sizes-grid-button">
                <div class="sizes-grid-button__inner" @click="$refs.sizesGridModal.openModal()">
                  <SvgImage class="sizes-grid-button__icon" name="boot" />
                  <span>{{ $t('product.size_grid') }} ></span>
                </div>
              </div>

              <div class="product-card__adaptive-wrapper">
                <ProductPrice :product="product" />

                <ErrorBlock v-if="!isSizeSelected && error">
                  {{ error }}
                </ErrorBlock>

                <Btn class="product-card__buy-btn" @click.native="addProductToCart">
                  <SvgImage class="product-card__cart-icon" name="cart" />
                  {{ $t('product.buy') }}
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </TransitionWrapper>

      <TransitionWrapper>
        <div v-if="product">
          <div class="product-card__description" v-html="product[`description_${$i18n.locale}`]" />
          <div class="product-card__description2" v-html="$t('product.product_page_description')" />
        </div>
      </TransitionWrapper>

      <ThePreloader v-if="loading" />

      <TransitionWrapper>
        <Catalog
          v-if="product && recommendedProducts.length"
          class="product-card__catalog-recommend"
          :heading="$t('product.recommended')"
          heading-position="left"
          :products="recommendedProducts"
        />
      </TransitionWrapper>
    </div>

    <SizesGridModal ref="sizesGridModal" />
    <OutOfStockModal ref="outOfStockModal" />
  </section>
</template>

<script>
import SvgImage from '@/components/common/SvgImage.vue'
import Btn from '@/components/common/Btn'
import {mapActions, mapMutations, mapState} from 'vuex'
import SizesGridModal from '@/components/product/SizesGridModal'
import OutOfStockModal from '@/components/product/OutOfStockModal'
import Catalog from '@/components/catalog/Catalog'
import SizesList from '@/components/product/SizesList'
import ColorsList from '@/components/product/ColorsList'
import ProductDetails from '@/components/product/ProductDetails'
// import PrevNextProductArrow from '@/components/product/PrevNextProductArrow'
import ProductImages from '@/components/product/ProductImages'
import ProductPrice from '@/components/product/ProductPrice'
import ThePreloader from '@/components/common/ThePreloader'
import ErrorBlock from '@/components/common/ErrorBlock'
import TransitionWrapper from '@/components/common/TransitionWrapper'

export default {
  name: 'ProductPage',
  components: {
    TransitionWrapper,
    ErrorBlock,
    ThePreloader,
    ProductPrice,
    ProductImages,
    // PrevNextProductArrow,
    ProductDetails,
    ColorsList,
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
      recommendedProductsLoading: true,
      product: null,
      error: null,
      relatives: [],
    }
  },
  computed: {
    ...mapState('products', {
      recommendedProducts: 'products',
    }),
    productId() {
      return this.$route.params.id
    },
    isOnSale() {
      return this.product?.salePrice
    },
    isSizeSelected() {
      if (this.product?.productInfo?.length) {
        return this.product?.productInfo?.some(i => i.isActive)
      }
      return false
    },
  },
  watch: {
    productId() {
      this.getData()
    },
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapActions('products', [
      'fetchProduct',
      'fetchProducts',
      'fetchRelatives',
    ]),
    ...mapMutations('common', [
      'openCartPopover',
    ]),
    ...mapMutations('cart', [
      'addToCart',
    ]),
    async getData() {
      await this.getProduct()
      this.getRecommendedProducts()
      this.relatives = await this.fetchRelatives(this.product.article)
    },
    async getProduct() {
      this.loading = true
      this.product = await this.fetchProduct(this.productId)
      this.loading = false
    },
    async getRecommendedProducts() {
      this.recommendedProductsLoading = true
      await this.fetchProducts({
        colors: [this.product.color.id],
        categories: [this.product.category.id],
      })
      this.recommendedProductsLoading = false
    },
    addProductToCart() {
      if (!this.isSizeSelected) {
        this.error = this.$t('product.size_not_selected')
        return
      }
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

.product-card__label {
  padding: 0 1em;
  font-size: adaptive_fz(12px, 8px);
  line-height: 2.3em;
  color: $contrast_color;
  background-color: #c61d24;

  &.product-card__label--new {
    background: #6ca746;
  }
}

.product-card__buy-btn {
  margin-top: 0.5em;
  padding: 0.83em 1.66em;
  font-size: adaptive_fz(12px, 9px);

  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
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

.product-card__description {
  margin-top: 40px;
  margin-bottom: 80px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    font-size: 14px;
    margin-bottom: 0;
  }
}

.product-card__description2 {
  margin-top: 40px;
  margin-bottom: 130px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-top: 40px;
  }
}

.product-card__sale-label-wrapper {
  display: flex;

  > * {
    margin-left: 7px;
  }
}

</style>
