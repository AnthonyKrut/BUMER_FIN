<template>
  <section class="product-card">
    <div class="container">
      <div class="product-card__top">
        <PrevNextProductArrow type="prev" />
        <PrevNextProductArrow type="next" />

        <ProductImages :product="product" />

        <div class="product-card__info-column">
          <div class="product-card__title">
            <div class="product-card__sku">
              {{ product.article_num }}
            </div>
            <div v-show="isOnSale" class="product-card__sale-label">
              SALE
            </div>
          </div>

          <ProductDetails :product="product" />
          <ColorsList :product="product" />

          <div class="product-card__adaptive-wrapper">
            <ProductPrice :product="product" />

            <Btn class="product-card__buy-btn" @click.native="addProductToCart">
              <SvgImage class="product-card__cart-icon" name="cart" />
              {{ $t('product.buy') }}
            </Btn>
          </div>
        </div>
      </div>

      <SizesList :product="product" />

      <div class="sizes-grid-button">
        <div class="sizes-grid-button__inner" @click="$refs.sizesGridModal.openModal()">
          <SvgImage class="sizes-grid-button__icon" name="boot" />
          <span>{{ $t('product.size_grid') }} ></span>
        </div>
      </div>

      <Catalog 
        class="product-card__catalog-recommend" 
        :heading="$t('product.recommended')" 
        heading-position="left"
        :products="[1,2,3,4]"
      />
    </div>

    <SizesGridModal ref="sizesGridModal" />
  </section>
</template>

<script>
import SvgImage from '@/components/common/SvgImage.vue'
import Btn from '@/components/common/Btn'
import {mapMutations} from 'vuex'
import SizesGridModal from '@/components/product/SizesGridModal'
import Catalog from '@/components/catalog/Catalog'
import SizesList from '@/components/product/SizesList'
import ColorsList from '@/components/product/ColorsList'
import ProductDetails from '@/components/product/ProductDetails'
import PrevNextProductArrow from '@/components/product/PrevNextProductArrow'
import ProductImages from '@/components/product/ProductImages'
import ProductPrice from '@/components/product/ProductPrice'

export default {
  name: 'ProductPage',
  components: {
    ProductPrice,
    ProductImages,
    PrevNextProductArrow,
    ProductDetails,
    ColorsList,
    SizesList,
    Catalog,
    SizesGridModal,
    Btn,
    SvgImage,
  },
  data() {
    return {
      product: {
        article_num: 'QN 380',
        top_material: 'Натуральная кожа',
        insole_material: 'Овчина',
        sole_material: 'Полиуретан',
        season: 'Зима',
        category: 'Ботинки',
        items: [
          {
            color_name: 'Зеленый',
            color_code: '#5c6b5c',
            price_stndrt: 2599,
            price_sale: 1999,
            sizes: [40, 41, 42, 43, 44, 45],
            pics: [
              '/img/stock-items/item01-01.png',
              '/img/stock-items/item01-02.png',
              '/img/stock-items/item01-03.png',
              // './img/stock-items/item01-04.png'
            ],
          },
          {
            color_name: 'Синий',
            color_code: '#3e5474',
            price_stndrt: 2599,
            price_sale: 1999,
            sizes: [40, 41, 42, 44, 45, 46],
            pics: [
              '/img/stock-items/item02-01.png',
              '/img/stock-items/item02-02.png',
              '/img/stock-items/item02-03.png',
              // './img/stock-items/item02-04.png'
            ],
          },
          {
            color_name: 'Черный',
            color_code: '#000000',
            price_stndrt: 2599,
            price_sale: 0,
            sizes: [41, 42, 43, 44, 45, 46],
            pics: [
              '/img/stock-items/item03-01.png',
              '/img/stock-items/item03-02.png',
              '/img/stock-items/item03-03.png',
              // './img/stock-items/item03-04.png'
            ],
          },
        ],
      },
    }
  },
  computed: {
    isOnSale() {
      return this.product?.items?.[0].price_sale
    },
  },
  methods: {
    ...mapMutations('common', [
      'openCartPopover',
    ]),
    ...mapMutations('cart', [
      'addToCart',
    ]),
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

//.product-card {}

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

.product-card__sku {
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
  display: flex;
  font-size: adaptive_fz(12px, 9px);
  font-weight: 300;
  line-height: 1.5em;
  text-transform: uppercase;
  justify-content: center;
}

.sizes-grid-button__inner {
  cursor: pointer;
  
  &:hover {
    color: #aaaaaa;
  }
}

.sizes-grid-button__icon {
  width: 1.67em;
  height: 1.25em;
  margin-right: 0.5em;
}

.product-card__catalog-recommend {
  margin-top: calc(3 * adaptive_fz(20px, 12px));
  margin-bottom: calc(4 * adaptive_fz(20px, 12px));

  @media screen and (max-width: 767px) {
    margin-bottom: calc(1.5 * adaptive_fz(20px, 12px));
  }
}

</style>
