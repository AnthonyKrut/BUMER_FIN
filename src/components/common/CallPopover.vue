<template>
  <!-- <div v-if="isCartPopoverVisible" class="cart-popover"> -->
  <div>
    <div>
      <Btn
        class="cart-popover__footer-button"
        full-width
        @click.native="closeCartPopover"
      >
        Перейти в корзину
      </Btn>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/common/Btn'
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'CallPopover',
  components: {Btn},
  data() {
    return {}
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

</style>
