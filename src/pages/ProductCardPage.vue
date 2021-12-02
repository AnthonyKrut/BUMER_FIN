<template>
  <section class="product-card">
    <div class="container">
      <div id="stock-article" class="stock-article">
        <div class="stock-article__top">
          <div class="arrow arrow_prev" />
          <div class="arrow arrow_next" />
          <div class="col-pics">
            <img
              v-for="pic in item_to_show.pics"
              :key="pic"
              :src="pic"
              alt="product image"
              @click="selectPic(pic)"
            >
          </div>

          <div class="main-pic">
            <img :src="pic_to_show" alt="big product image">
          </div>

          <div class="col-info">
            <div class="adaptive-wrapper01">
              <div class="col-info__title title">
                <div class="title__article">
                  {{ product.article_num }}
                </div>
                <div v-show="isOnSale" class="title__sale">
                  SALE
                </div>
              </div>
              <table class="col-info__table table">
                <tbody>
                <tr>
                  <td>Материал верха:</td>
                  <td>{{ product.top_material }}</td>
                </tr>
                <tr>
                  <td>Материал стельки:</td>
                  <td>{{ product.insole_material }}</td>
                </tr>
                <tr>
                  <td>Материал подошвы:</td>
                  <td>{{ product.sole_material }}</td>
                </tr>
                <tr style="color: transparent">
                  <td />
                  <td>.</td>
                </tr>
                <tr>
                  <td>Сезон:</td>
                  <td>{{ product.season }}</td>
                </tr>
                <tr>
                  <td>Вид обуви:</td>
                  <td>{{ product.category }}</td>
                </tr>
                </tbody>
              </table>
              <div class="col-info__colors colors">
                <div class="colors__title">
                  Цвет:
                </div>
                <div class="colors__list">
                  <div
                    v-for="item in product.items"
                    :key="item.color_code"
                    :class="{active: item_to_show === item}"
                    :style="{backgroundColor: item.color_code}"
                    class="colors__color"
                    @click="selectColor(item)"
                  />
                </div>
              </div>
            </div>

            <div class="adaptive-wrapper02">
              <div :class="{invisible: !isOnSale}" class="col-info__price-old">
                <span>{{ item_to_show.price_stndrt }}</span>грн
              </div>
              <div class="col-info__price-active">
                <span>{{ activePrice }}</span>грн
              </div>
              <Btn @click.native="addProductToCart">
                <SvgImage name="cart" />
                <span>Купить</span>
              </Btn>
            </div>
          </div>
        </div>
        <div class="stock-article__bottom">
          <ul class="sizes-available">
            <li
              :class="{notInStock: !isAvailableSize(40), active: item_to_cart.size === 40}"
              @click="selectSize(40)"
            >
              40
            </li>
            <li
              :class="{notInStock: !isAvailableSize(41), active: item_to_cart.size === 41}"
              @click="selectSize(41)"
            >
              41
            </li>
            <li
              :class="{notInStock: !isAvailableSize(42), active: item_to_cart.size === 42}"
              @click="selectSize(42)"
            >
              42
            </li>
            <li
              :class="{notInStock: !isAvailableSize(43), active: item_to_cart.size === 43}"
              @click="selectSize(43)"
            >
              43
            </li>
            <li
              :class="{notInStock: !isAvailableSize(44), active: item_to_cart.size === 44}"
              @click="selectSize(44)"
            >
              44
            </li>
            <li
              :class="{notInStock: !isAvailableSize(45), active: item_to_cart.size === 45}"
              @click="selectSize(45)"
            >
              45
            </li>
            <li
              :class="{notInStock: !isAvailableSize(46), active: item_to_cart.size === 46}"
              @click="selectSize(46)"
            >
              46
            </li>
          </ul>
          <div class="sizes-table-btn">
            <SvgImage name="boot" />
            <span>Таблица размеров ></span>
          </div>
        </div>
      </div>

      <div class="goods-offer">
        <!-- WRITE IDENTICAL TO START PAGE -->
        <div class="popular-products">
          <div class="popular-products__line line">
            <div class="line__product product">
              <div class="product__label">
                SALE
              </div>
              <div class="product__pic">
                <img alt="product picture" src="/img/stock-items/item01-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </div>
            <div class="line__product product">
              <div class="product__label">
                TOP
              </div>
              <div class="product__pic">
                <img alt="product picture" src="/img/stock-items/item02-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </div>
            <div class="line__product product">
              <div class="product__label" />
              <div class="product__pic">
                <img alt="product picture" src="/img/stock-items/item03-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </div>
            <div class="line__product product">
              <div class="product__label">
                NEW
              </div>
              <div class="product__pic">
                <img alt="product picture" src="/img/stock-items/item01-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sizes-modal">
      <div class="sizes-modal__wrapper">
        <div class="sizes-modal__btn" />
        <table class="sizes-modal__table">
          <caption>таблица размеров</caption>
          <thead>
          <tr>
            <th>EUR</th>
            <th>UK</th>
            <th>длина стопы</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td />
            <td />
            <td>.</td>
          </tr>
          <tr>
            <td>39</td>
            <td>5</td>
            <td>25,3</td>
          </tr>
          <tr>
            <td>40</td>
            <td>6</td>
            <td>25,8</td>
          </tr>
          <tr>
            <td>41</td>
            <td>7</td>
            <td>26,4</td>
          </tr>
          <tr>
            <td>42</td>
            <td>8</td>
            <td>27</td>
          </tr>
          <tr>
            <td>43</td>
            <td>9</td>
            <td>27,6</td>
          </tr>
          <tr>
            <td>44</td>
            <td>10</td>
            <td>28,3</td>
          </tr>
          <tr>
            <td>45</td>
            <td>11</td>
            <td>28,9</td>
          </tr>
          <tr>
            <td>46</td>
            <td>12</td>
            <td>29,6</td>
          </tr>
          <tr>
            <td>47</td>
            <td>13</td>
            <td>30,3</td>
          </tr>
          </tbody>
        </table>
        <div class="sizes-modal__text">
          Чтобы правильно измерить длину вашей стопы, поставьте ногу на лист бумаги, отметьте две точки, носок и
          пятка. Нарисуйте две линии перпендикулярно к ним - расстояние между этими линиями - это длина стопы.
        </div>
      </div>
    </div>
    <div class="added-modal">
      <!-- WRITE IDENTICAL TO sizes-modal -->
    </div>
  </section>
</template>

<script>
import SvgImage from '../components/common/SvgImage.vue'
import Btn from '@/components/common/Btn'
import {mapMutations} from 'vuex'

export default {
  name: 'ProductCardPage',
  components: {
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
      item_to_show: {
        sizes: [],
      },
      pic_to_show: '/img/stock-items/item03-01.png',
      item_to_cart: {
        article_num: null,
        category: null,
        color_name: null,
        price: null,
        size: null,
        pic: null,
      },
    }
  },
  computed: {
    isOnSale() {
      return this.item_to_show.price_sale
    },
    activePrice() {
      if (this.item_to_show.price_sale) {
        return this.item_to_show.price_sale
      } else {
        return this.item_to_show.price_stndrt
      }
    },
  },
  methods: {
    ...mapMutations('common', [
      'openCartPopover'
    ]),
    ...mapMutations('cart', [
      'addToCart'
    ]),
    addProductToCart() {
      this.addToCart(this.product)
      this.openCartPopover()
    },
    selectPic(pic) {
      this.pic_to_show = pic
    },
    selectColor(item) {
      this.item_to_show = item
      this.pic_to_show = item.pics[0]
      this.item_to_cart.size = item.sizes[0]
    },
    isAvailableSize(arg) {
      return this.item_to_show.sizes.some(
        size => {
          return size === arg
        },
      )
    },
    selectSize(arg) {
      if (this.isAvailableSize(arg)) {
        this.item_to_cart.article_num = this.product.article_num
        this.item_to_cart.category = this.product.category
        this.item_to_cart.color_name = this.item_to_show.color_name
        this.item_to_cart.price = this.activePrice
        this.item_to_cart.size = arg
        this.item_to_cart.pic = this.item_to_show.pics[0]
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/functions";
@import "../assets/scss/mixins";

.product-card {
  .container {
    background: $contrast_color;
  }

  .stock-article {
    &__top {
      position: relative;
      display: flex;

      .arrow {
        position: absolute;
        top: calc(50% - 0.5 * Min(52.5px, Max(30px, 0.75 * 5vw)));
        width: 5vw;
        min-width: 40px;
        max-width: 70px;
        height: calc(0.75 * 5vw);
        min-height: 30px;
        max-height: 52.5px;
        cursor: pointer;
        // border: 1px solid red;
        &_prev {
          background: url('../assets/img/svg/arr-left-black.svg') 100% center/ 66% no-repeat;
          left: calc(-1 * Max(40px, 5vw));
        }

        &_next {
          background: url('../assets/img/svg/arr-right-black.svg') 0% center/ 66% no-repeat;
          right: calc(-1 * Max(40px, 5vw));
        }
      }

      .col-pics {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // border: 1px solid red;
        img {
          width: 50%;
          object-fit: contain;
          cursor: pointer;

          &:hover {
            box-shadow: 0 0 0 2px $grey_color;
          }
        }
      }

      .main-pic {
        // width: 42%;
        width: calc(0.42 * 90vw);
        max-width: calc (0.42 * 1180px);
        height: calc(0.57 * 90vw);
        max-height: calc(0.57 * 1180px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // border: 1px solid red;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          // border: 1px solid green;
        }
      }

      .col-info {
        width: 33%;
        //border: 1px solid red;
        &__title {
          display: flex;
          align-items: center;
          margin: 2em 0;
          font-size: adaptive_fz(16px, 10px);
          font-weight: 700;
          // border: 1px solid red;
          .title__article {
            margin-right: 2em;
            line-height: 1.2;
            text-transform: uppercase;
          }

          .title__sale {
            padding: 0 1em;
            font-size: adaptive_fz(12px, 8px);
            line-height: 2.5em;
            color: $contrast_color;
            background-color: #c61d24;
          }
        }

        &__table {
          width: 100%;
          margin-bottom: 2.3em;
          font-size: adaptive_fz(12px, 8px);
          font-weight: 400;
          line-height: 1.7em;
          // border: 1px solid blue;
          tr {
            td:first-child {
              color: $grey_color_dark;
              text-transform: uppercase;
            }

            td:last-child {
              font-weight: 700;
            }
          }
        }

        &__colors {
          margin-bottom: 5.5em;
          font-size: adaptive_fz(12px, 9px);
          font-weight: 400;

          .colors__title {
            margin-bottom: 1em;
            color: $grey_color_dark;
            // border: 1px solid red;
          }

          .colors__list {
            display: flex;
            // border: 1px solid red;
            .colors__color {
              position: relative;
              width: 26px;
              height: 26px;
              border: 2px solid $contrast_color;
              box-shadow: 0 0 0 2px $grey_color;
              cursor: pointer;

              &:not(:last-child) {
                margin-right: 10px;
              }

              &.active::before,
              &.active::after {
                position: absolute;
                right: -4px;
                bottom: -4px;
                display: block;
                content: '';
                width: 11px;
                height: 11px;
                background: $main_color;
              }

              &.active::after {
                background: url('../assets/img/svg/tick.svg') center/ 80% no-repeat;
              }
            }
          }
        }

        &__price-old {
          font-size: adaptive_fz(14px, 9px);
          color: $grey_color_light;
          // border: 1px solid red;
          &.invisible {
            visibility: hidden;
          }

          span {
            margin-right: 0.1em;
            font-size: adaptive_fz(25px, 14px);
            font-weight: 600;
            text-decoration: line-through;
          }
        }

        &__price-active {
          margin-bottom: 0.3em;
          font-size: adaptive_fz(30px, 16px);
          // border: 1px solid green;
          span {
            margin-right: 0.1em;
            font-size: adaptive_fz(80px, 20px);
            font-weight: 700;
            line-height: 1.5em;
          }
        }

        &__btn {
          display: inline-flex;
          padding: 0 2em;
          border: 1px solid $main_color;
          font-size: adaptive_fz(12px, 8px);
          font-weight: 700;
          line-height: 3.33em;
          cursor: pointer;

          svg {
            width: 1.5em;
            height: 3.33em;
            margin-right: 2em;
            stroke: $main_color
            // border: 1px solid green;
          }

          &:hover {
            color: $contrast_color;
            background: $main_color;

            svg {
              stroke: $contrast_color;
            }
          }

          // span {}
        }
      }

      @media screen and (max-width: 370px) {
        .col-info {
          &__colors {
            .colors__list {
              .colors__color {
                width: 20px;
                height: 20px;
              }
            }
          }

          &__btn {
            line-height: 2.66em;

            svg {
              height: 2.66em;
            }
          }
        }
      }
      @media screen and (max-width: 767px) {
        flex-direction: column-reverse;
        .arrow {
          top: 100%;

          &_prev {
            left: 0;
            background-position: 0% center;
          }

          &_next {
            right: 0;
            background-position: 100% center;
          }
        }
        .col-pics {
          width: 100%;
          flex-direction: row;

          img {
            width: 33%;
            height: calc(1.36 * 0.33 * (100vw - 5px));
          }
        }
        .main-pic {
          width: 100%;
          height: calc(1.36 * (100vw - 5px));
        }
        .col-info {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .adaptive-wrapper01 {
            width: 66%;
            //.col-info__table {// margin-bottom: 0;// 2.3em;}
            .col-info__colors {
              display: flex;
              align-items: center;
              margin-bottom: 0;

              .colors__title {
                padding-left: 0.15em;
                width: 50%;
              }

              .colors__list {
                width: 50%;
                padding-left: 1.15em;
              }
            }
          }

          .adaptive-wrapper02 {
            width: 33%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            .col-info__btn {
              align-self: flex-start;
            }
          }
        }
      }
    }

    &__bottom {
      text-align: center;
      // border: 1px solid green;
      .sizes-available {
        display: flex;
        justify-content: center;
        margin: 2.5em 0 1em;
        font-size: adaptive_fz(20px, 13px); // no adaptive fz!
        font-weight: 300;
        list-style-type: none;
        // border: 1px solid red;
        li {
          width: 2em;
          height: 2em;
          line-height: 2em;
          cursor: pointer;
          border: 1px solid transparent;
          // border: 1px solid red;
          &:not(:last-child) {
            margin-right: 0.75em;
          }

          &.active {
            border: 1px solid $grey_color_light;
          }

          &.notInStock {
            text-decoration: line-through;
            color: $grey_color_light;
          }
        }
      }

      .sizes-table-btn {
        display: inline-flex;
        margin-bottom: 8em;
        font-size: adaptive_fz(12px, 9px); // no adaptive fz!
        font-weight: 300;
        line-height: 1.5em;
        text-transform: uppercase;
        cursor: pointer;
        // border: 1px solid green;
        svg {
          width: 1.67em;
          height: 1.25em;
          margin-right: 0.5em;
          stroke: $main_color;
        }

        &:hover svg {
          stroke: $attention_color;
        }

        // span {}
      }
    }

    @media screen and (max-width: 575px) {
      width: 90%;
      margin: 0 auto;
    }
  }

  .goods-offer {
    @include popular-products;
  }

  .sizes-modal {
    position: fixed;
    top: -125vh;
    left: 0;
    z-index: 10;
    transform: rotate3d(1, 1, 0, 90deg);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 1s 0.125s ease;

    &.active {
      top: 0;
      transform: rotate3d(1, 1, 0, 0deg);
    }

    &__wrapper {
      position: relative;
      width: 45vw;
      max-width: calc(0.45 * 1180px);
      padding: 2.5em Min(calc(0.15 * 45vw), calc(0.15 * 1180px));
      font-size: adaptive_fz(14px, 9px);
      font-weight: 400;
      background-color: $contrast_color;
      @media screen and (max-width: 767px) {
        width: 75vw;
      }
    }

    &__btn {
      position: absolute;
      top: calc(0.05 * 40vw);
      right: calc(0.05 * 40vw);
      width: 16px;
      height: 16px;
      background: url('../assets/img/svg/cross.svg') center/ contain no-repeat;
      cursor: pointer;
    }

    &__table {
      width: 100%;
      margin-bottom: 2em;
      border-spacing: 0;

      caption {
        margin-bottom: 1.2em;
        font-size: adaptive_fz(25px, 12px);
        font-weight: 700;
        text-transform: uppercase;
      }

      tbody tr:first-child {
        visibility: hidden;
      }

      tr {
        line-height: 2em;
        text-transform: uppercase;
        text-align: center;

        th,
        td {
          border-bottom: 1px solid $grey_color;
        }

        th:last-child,
        td:last-child {
          width: 50%;
        }
      }
    }

    &__text {
      font-size: adaptive_fz(11px, 8px);
      line-height: 1.3em;
      color: $grey_color_dark;
      text-align: center;
    }
  }

  //.added-modal{}
}
</style>
