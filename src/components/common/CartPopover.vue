<template>
  <div
    v-if="isCartPopoverVisible"
    v-focus
    class="cart-popover"
    tabindex="0"
    @focusout="close($event)"
  >
    <div v-if="cart.length" class="cart-popover__content">
      <CartPopoverProductItem
        v-for="product in cart"
        :key="product.article"
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
          {{ total }} грн
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

      <div class="cart-popover__footer-link" @click="clearCart">
        Clear cart
      </div>

      <div class="cart-popover__footer-link" @click="closeCartPopover">
        {{ $t('cart.continue_purchaising') }}
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/common/Btn'
import CartPopoverProductItem from '@/components/product/CartPopoverProductItem'
import {mapGetters, mapMutations, mapState} from 'vuex'

export default {
  name: 'CartPopover',
  components: {CartPopoverProductItem, Btn},
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      },
    },
  },
  data() {
    return {
      catalog: [],
    }
  },
  computed: {
    ...mapState('common', [
      'isCartPopoverVisible',
    ]),
    ...mapState('cart', [
      'cart',
    ]),
    ...mapGetters('cart', [
      'total',
    ]),
  },
  methods: {
    ...mapMutations('cart', [
      'clearCart',
    ]),
    ...mapMutations('common', [
      'closeCartPopover',
    ]),
    close(event) {
      if (this.$el === event.relatedTarget || this.$el.contains(event.relatedTarget)) {
        return
      } else {
        this.closeCartPopover()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.cart-popover {
  width: 430px;
  position: absolute;
  top: 35px;
  right: 0;
  background: #FFFFFF;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.46);
  outline: none;

  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    position: fixed;
    top: 0;
  }
}

.cart-popover__content {
  overflow-y: auto;
  max-height: calc(100vh - 350px);

  @media screen and (max-width: 767px) {
    max-height: unset;
    padding: 20px;
  }
}

.cart-popover__footer {
  padding: 20px 65px 20px 65px;

  @media screen and (max-width: 767px) {
    padding: 20px;
  }
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
