<template>
  <section id="catalog-dynamic" class="catalog">
    <div class="container">
      <h2 class="catalog__title">
        {{ filters_selected.category }}
      </h2>

      <div class="catalog__filters filters">
        <div class="filter filter_sort">
          <div class="filter__title">
            <span>СОРТИРОВАТЬ ПО</span>
          </div>
          <div class="filter__body">
            <ul class="filter__list">
              <li
                v-for="sort_option in filters.sort_options"
                :key="sort_option"
                class="filter__option"
                :class="{active: false}"
              >
                {{ sort_option }}
              </li>
            </ul>
          </div>
        </div>

        <div class="filter filter_size">
          <div class="filter__title">
            <span>РАЗМЕР</span>
          </div>
          <div class="filter__body">
            <ul class="filter__list">
              <li
                v-for="size in filters.sizes"
                :key="size"
                class="filter__option"
                :class="{active: false}"
              >
                <span class="size-checkbox">{{ size }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="filter filter_color">
          <div class="filter__title">
            <span>ЦВЕТА</span>
          </div>
          <div class="filter__body">
            <ul class="filter__list">
              <li
                v-for="color in filters.colors"
                :key="color"
                class="filter__option"
                :class="{active: false}"
              >
                <span class="color-checkbox" :style="{backgroundColor: color.color_code}" />
                <span class="color-name">{{ color.color_name }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="filter filter_category">
          <div class="filter__title">
            <span>ВИД ОБУВИ</span>
          </div>
          <div class="filter__body">
            <ul class="filter__list">
              <li
                v-for="category in filters.categories"
                :key="category"
                class="filter__option"
                :class="{active: false}"
              >
                {{ category }}
              </li>
            </ul>
          </div>
        </div>
      </div>

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
export default {
  name: 'CategoryPage',
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
      filters: {
        sort_options: [
          'Возрастанию цены',
          'Убыванию цены',
          'Новинки',
        ],
        sizes: [
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
        ],
        colors: [
          {
            color_name: 'Зеленый',
            color_code: '#5c6b5c',
          },
          {
            color_name: 'Синий',
            color_code: '#3e5474',
          },
          {
            color_name: 'Терракотовый',
            color_code: '#f5973f',
          },
          {
            color_name: 'Коричневый',
            color_code: '#573a20',
          },
          {
            color_name: 'Серый',
            color_code: '#6d7073',
          },
          {
            color_name: 'Черный',
            color_code: '#000000',
          },
        ],
        categories: [
          'Кроссовки',
          'Ботинки',
          'Туфли',
        ],
      },
      filters_selected: {
        sort_option: null,
        sizes: [],
        colors: [],
        category: 'Категория не выбрана',
      },
    }
  },
  methods: {
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

  &__filters {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
    background: $contrast_color;
    // border: 1px solid blue;
    .filter {
      position: relative;
      width: 180px; // MAKE IT ADAPTIVE!
      font-size: adaptive_fz(12px, 8px);
      font-weight: 400;

      &_size {
        .filter__list {
          .filter__option {
            .size-checkbox {
              &::before {
                content: '';
                display: inline-block;
                width: 1.5em;
                height: 1.5em;
                border: 1px solid $grey_color;
                margin-right: 1em;
                vertical-align: middle;
              }
            }

            &.active .size-checkbox::before {
              background: url('../assets/img/svg/tick-black.svg') center/80% 80% no-repeat;
            }
          }
        }
      }

      &_color {
        .filter__list {
          .filter__option {
            display: flex;
            align-items: center;

            .color-checkbox {
              position: relative;
              width: 2.2em; // 23px;
              height: 2.2em; // 23px;
              border: 1px solid $contrast_color;
              box-shadow: 0 0 0 1px $grey_color;
              margin-right: 1em; // 10px;
            }

            &.active .color-checkbox {
              box-shadow: 0 0 0 1px $main_color;

              &::before,
              &::after {
                position: absolute;
                right: -2px;
                bottom: -2px;
                display: block;
                content: '';
                width: 1em; //11px;
                height: 1em; //11px;
                background: $main_color;
              }

              &::after {
                background: url('../assets/img/svg/tick.svg') center/75% no-repeat;
              }
            }
          }
        }
      }

      &__title {
        font-size: adaptive_fz(14px, 9px);
        line-height: 2.5em; // 1.5em;
        cursor: pointer;
        // border: 1px solid green;
        span {
          &::after {
            content: '';
            display: inline-block;
            width: 0.8em;
            height: 0.45em;
            margin-left: 0.5em;
            background: url('../assets/img/svg/arr-down.svg') center/contain no-repeat;
            // border: 1px solid green;
          }
        }
      }

      &__body {
        position: absolute;
        z-index: -1;
        bottom: 0;
        visibility: hidden;
        width: 100%;
        max-height: 300px;
        overflow-y: scroll;
        padding: 1em 0 1.5em;
        background: $contrast_color;
        border: 1px solid $grey_color;
        // transition: bottom 0.25s, top 0.25s;
      }

      &__list {
        list-style: none;
        margin-bottom: 1.5em;

        .filter__option {
          padding: 0 1.5em;
          line-height: 3em;
          cursor: pointer;

          &.active {
            background: #F5F5F5;
          }

          &:hover {
            background: #F5F5F5;
          }
        }
      }

      &__btn {
        margin: 0 1.5em;
        line-height: 3.33em;
        color: $contrast_color;
        text-align: center;
        background: $main_color;
        cursor: pointer;
      }

      &.active {
        .filter__title span::after {
          transform: rotate(180deg);
        }

        .filter__body {
          z-index: 1;
          bottom: unset;
          top: 100%;
          visibility: visible;
        }
      }
    }
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
