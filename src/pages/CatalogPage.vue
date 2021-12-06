<template>
  <section class="catalog">
    <div class="container">
      <h2 class="catalog__title">
        Заголовок категории
      </h2>

      <CatalogFilters />

      <div v-if="catalog" class="catalog__table">
        <router-link
          v-for="product in catalog"
          :key="product.article_num"
          class="catalog__product product"
          :to="{name: 'Product'}"
        >
          <div v-if="isOnSale(product)" class="product__label">
            SALE
          </div>
          <div class="product__pic">
            <img alt="product picture" src="../../public/img/stock-items/item02-01.png">
          </div>
          <div class="product__specs">
            <div class="product__article">
              {{ product.article_num }}
            </div>
            <div class="product__price">
              {{ activePrice(product) }} <span>грн</span>
            </div>
          </div>
        </router-link>
      </div>

      <div v-else class="catalog__notice">
        Товаров с такими параметрами не обнаружено
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from 'vuex'
import CatalogFilters from '@/components/catalog/CatalogFilters'

export default {
  name: 'CategoryPage',
  components: {CatalogFilters},
  data() {
    return {
      catalog: [
        {
          article_num: 'QN 380',
          top_material: 'Натуральная кожа',
          insole_material: 'Овчина',
          sole_material: 'Полиуретан',
          season: 'Зима',
          category: 'Кроссовки',
          items: [
            {
              color_name: 'Зеленый',
              color_code: '#5c6b5c',
              price_stndrt: 2599,
              price_sale: 1999,
              isNew: true,
              rating: 4,
              sizes: [
                {
                  size_num: 40,
                  size_qty: 1,
                },
                {
                  size_num: 41,
                  size_qty: 2,
                },
                {
                  size_num: 42,
                  size_qty: 4,
                },
                {
                  size_num: 43,
                  size_qty: 8,
                }, {
                  size_num: 44,
                  size_qty: 6,
                },
                {
                  size_num: 45,
                  size_qty: 10,
                },
                {
                  size_num: 46,
                  size_qty: 0,
                },
              ],
              pics: [
                './img/stock-items/item01-01.png',
                './img/stock-items/item01-02.png',
                './img/stock-items/item01-03.png',
              ],
            },
            {
              color_name: 'Синий',
              color_code: '#3e5474',
              price_stndrt: 2599,
              price_sale: 1999,
              isNew: true,
              rating: 2,
              sizes: [
                {
                  size_num: 40,
                  size_qty: 1,
                },
                {
                  size_num: 41,
                  size_qty: 2,
                },
                {
                  size_num: 42,
                  size_qty: 4,
                },
                {
                  size_num: 43,
                  size_qty: 0,
                }, {
                  size_num: 44,
                  size_qty: 6,
                },
                {
                  size_num: 45,
                  size_qty: 9,
                },
                {
                  size_num: 46,
                  size_qty: 10,
                },
              ],
              pics: [
                './img/stock-items/item02-01.png',
                './img/stock-items/item02-02.png',
                './img/stock-items/item02-03.png',
              ],
            },
            {
              color_name: 'Черный',
              color_code: '#000000',
              price_stndrt: 2599,
              price_sale: 0,
              isNew: false,
              rating: 10,
              sizes: [
                {
                  size_num: 40,
                  size_qty: 0,
                },
                {
                  size_num: 41,
                  size_qty: 2,
                },
                {
                  size_num: 42,
                  size_qty: 4,
                },
                {
                  size_num: 43,
                  size_qty: 1,
                }, {
                  size_num: 44,
                  size_qty: 6,
                },
                {
                  size_num: 45,
                  size_qty: 9,
                },
                {
                  size_num: 46,
                  size_qty: 10,
                },
              ],
              pics: [
                './img/stock-items/item03-01.png',
                './img/stock-items/item03-02.png',
                './img/stock-items/item03-03.png',
              ],
            },
          ],
        },
        {
          article_num: 'QN 450',
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
              isNew: true,
              rating: 1,
              sizes: [
                {
                  size_num: 40,
                  size_qty: 1,
                },
                {
                  size_num: 41,
                  size_qty: 2,
                },
                {
                  size_num: 42,
                  size_qty: 0,
                },
                {
                  size_num: 43,
                  size_qty: 4,
                }, {
                  size_num: 44,
                  size_qty: 6,
                },
                {
                  size_num: 45,
                  size_qty: 9,
                },
                {
                  size_num: 46,
                  size_qty: 0,
                },
              ],
              pics: [
                './img/stock-items/item01-01.png',
                './img/stock-items/item01-02.png',
                './img/stock-items/item01-03.png',
              ],
            },
            {
              color_name: 'Синий',
              color_code: '#3e5474',
              price_stndrt: 2599,
              price_sale: 1999,
              isNew: true,
              rating: 2,
              sizes: [
                {
                  size_num: 40,
                  size_qty: 0,
                },
                {
                  size_num: 41,
                  size_qty: 2,
                },
                {
                  size_num: 42,
                  size_qty: 4,
                },
                {
                  size_num: 43,
                  size_qty: 0,
                }, {
                  size_num: 44,
                  size_qty: 6,
                },
                {
                  size_num: 45,
                  size_qty: 9,
                },
                {
                  size_num: 46,
                  size_qty: 10,
                },
              ],
              pics: [
                './img/stock-items/item02-01.png',
                './img/stock-items/item02-02.png',
                './img/stock-items/item02-03.png',
              ],
            },
            {
              color_name: 'Черный',
              color_code: '#000000',
              price_stndrt: 2599,
              price_sale: 0,
              isNew: false,
              rating: 6,
              sizes: [
                {
                  size_num: 40,
                  size_qty: 0,
                },
                {
                  size_num: 41,
                  size_qty: 2,
                },
                {
                  size_num: 42,
                  size_qty: 4,
                },
                {
                  size_num: 43,
                  size_qty: 1,
                }, {
                  size_num: 44,
                  size_qty: 6,
                },
                {
                  size_num: 45,
                  size_qty: 9,
                },
                {
                  size_num: 46,
                  size_qty: 10,
                },
              ],
              pics: [
                './img/stock-items/item03-01.png',
                './img/stock-items/item03-02.png',
                './img/stock-items/item03-03.png',
              ],
            },
          ],
        },
        {
          article_num: 'QN 900',
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
              isNew: false,
              rating: 0,
              sizes: [
                {
                  size_num: 40,
                  size_qty: 1,
                },
                {
                  size_num: 41,
                  size_qty: 2,
                },
                {
                  size_num: 42,
                  size_qty: 4,
                },
                {
                  size_num: 43,
                  size_qty: 1,
                }, {
                  size_num: 44,
                  size_qty: 0,
                },
                {
                  size_num: 45,
                  size_qty: 9,
                },
                {
                  size_num: 46,
                  size_qty: 0,
                },
              ],
              pics: [
                './img/stock-items/item01-01.png',
                './img/stock-items/item01-02.png',
                './img/stock-items/item01-03.png',
              ],
            },
            {
              color_name: 'Синий',
              color_code: '#3e5474',
              price_stndrt: 2599,
              price_sale: 1999,
              isNew: true,
              rating: 1,
              sizes: [
                {
                  size_num: 40,
                  size_qty: 1,
                },
                {
                  size_num: 41,
                  size_qty: 2,
                },
                {
                  size_num: 42,
                  size_qty: 0,
                },
                {
                  size_num: 43,
                  size_qty: 0,
                }, {
                  size_num: 44,
                  size_qty: 6,
                },
                {
                  size_num: 45,
                  size_qty: 2,
                },
                {
                  size_num: 46,
                  size_qty: 7,
                },
              ],
              pics: [
                './img/stock-items/item02-01.png',
                './img/stock-items/item02-02.png',
                './img/stock-items/item02-03.png',
              ],
            },
            {
              color_name: 'Черный',
              color_code: '#000000',
              price_stndrt: 2599,
              price_sale: 0,
              isNew: true,
              rating: 4,
              sizes: [
                {
                  size_num: 40,
                  size_qty: 0,
                },
                {
                  size_num: 41,
                  size_qty: 2,
                },
                {
                  size_num: 42,
                  size_qty: 4,
                },
                {
                  size_num: 43,
                  size_qty: 7,
                }, {
                  size_num: 44,
                  size_qty: 6,
                },
                {
                  size_num: 45,
                  size_qty: 9,
                },
                {
                  size_num: 46,
                  size_qty: 10,
                },
              ],
              pics: [
                './img/stock-items/item03-01.png',
                './img/stock-items/item03-02.png',
                './img/stock-items/item03-03.png',
              ],
            },
          ],
        },
      ],
    }
  },
  async created() {
    // await this.fetchAllProducts()
  },
  methods: {
    ...mapActions('products', [
      'fetchAllProducts',
    ]),
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
@import "../assets/scss/variables";
@import "../assets/scss/functions";
@import "../assets/scss/mixins";

.catalog {
  margin-bottom: 4em;
  font-size: adaptive_fz(25px, 14px);
  // .container {}
  &__title {
    padding: 1em 0 1.5em;
    // height: 1.25em;
    font-size: adaptive_fz(25px, 14px);
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    background: $contrast_color;
  }

  &__notice {
    font-size: adaptive_fz(14px, 9px);
    line-height: 2.5em; // 1.5em;
  }

  &__table {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    .product {
      @include product-small;
      font-size: adaptive_fz(20px, 12px);
      font-weight: 700;
      width: unset;
      cursor: pointer;
      // border: 1px solid red;
    }

    @media screen and (max-width: 575px) {
      grid-template-columns: 1fr 1fr;
    }
  }
}

</style>
