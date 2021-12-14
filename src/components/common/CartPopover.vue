<template>
  <div v-if="isCartPopoverVisible" class="cart-popover">
    <div v-if="cart.length" class="cart-popover__content">
      <CartPopoverProductItem
        v-for="product in cart"
        :key="product.article_num"
        :product="product"
      />
    </div>

    <div v-else class="cart-popover__empty">
      {{ $t('cart.empty_cart') }}
    </div>

    <div class="cart-popover__footer">
      <div v-if="cart.length" class="cart-popover__total-wrapper">
        <div class="cart-popover__total-label">
          {{ $t('cart.total') }}:
        </div>
        <div class="cart-popover__total-price">
          3 599 грн
        </div>
      </div>
      <Btn
        v-if="cart.length"
        class="cart-popover__footer-button"
        full-width
        to="Checkout"
        @click.native="closeCartPopover"
      >
        {{ $t('cart.go_to_cart') }}
      </Btn>

      <div class="cart-popover__footer-link" @click="closeCartPopover">
        {{ $t('cart.continue_purchaising') }}
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/common/Btn'
import CartPopoverProductItem from '@/components/product/CartPopoverProductItem'
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'CartPopover',
  components: {CartPopoverProductItem, Btn},
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
  computed: {
    ...mapState('common', [
      'isCartPopoverVisible',
    ]),
    ...mapState('cart', [
      'cart',
    ]),
  },
  methods: {
    ...mapMutations('common', [
      'closeCartPopover',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.cart-popover {
  width: 430px;
  max-width: 430px;
  position: absolute;
  top: 35px;
  right: 0;
  background: #FFFFFF;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.46);

}

.cart-popover__content {
  overflow-y: auto;
  max-height: calc(100vh - 350px);
}

.cart-popover__footer {
  padding: 20px 65px 20px 65px;
}

.cart-popover__footer-link {
  text-align: center;
  font-size: 12px;
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px;

  &:hover {
    text-decoration: none;
    color: $attention_color
  }
}

.cart-popover__footer-button {
  margin-bottom: 20px;
}

.cart-popover__total-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.cart-popover__total-label {
  font-size: 12px;
  text-transform: uppercase;
}

.cart-popover__total-price {
  font-size: 20px;
}

.cart-popover__empty {
  text-align: center;
  color: #cccccc;
  padding: 45px;
  text-transform: uppercase;
  border-bottom: 1px solid $divider_color;
}

</style>
