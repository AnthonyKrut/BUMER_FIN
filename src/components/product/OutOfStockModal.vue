<template>
  <sweet-modal
    ref="outOfStockModal"
    class="out-of-stock-modal"
    :title="$t('product.out_of_stock_notice')"
  >
    <div class="out-of-stock-modal__text">
      {{ $t('product.sizes_grid_description') }}
    </div>
  </sweet-modal>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'

export default {
  name: 'OutOfStockModal',
  components: { SweetModal },
  created() { // problem  is here! https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle-ru
    this.$root.$on('openOutOfStockModal', () => {
      this.$refs.outOfStockModal.open()
    })
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

::v-deep {
  .sweet-modal {
    max-width: 520px;
  }

  .sweet-title {
    h2 {
      margin-top: 3.2em !important;
    }
  }

  .sweet-content {
    padding: 2em Min(7.5vw, 6.5em) 4.6em !important;
  }
}

.out-of-stock-modal__text {
  font-size: adaptive_fz(11px, 11px);
  line-height: 1.3em;
  color: $text_color_dark;
  text-align: center;
}

</style>
