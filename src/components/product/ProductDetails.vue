<template>
  <table class="table">
    <tbody>
    <tr>
      <td>Артикул:</td>
      <td>{{ product.article }}</td>
    </tr>
    <tr>
      <td>{{ $t('product.top_material') }}:</td>
      <td>{{ product[$_i18n_getFieldWithLocale('materialProduct')] }}</td>
    </tr>
    <tr>
      <td>{{ $t('product.insole_material') }}:</td>
      <td>{{ product[$_i18n_getFieldWithLocale('materialInSole')] }}</td>
    </tr>
    <tr>
      <td>{{ $t('product.outsole_material') }}:</td>
      <td>{{ product[$_i18n_getFieldWithLocale('materialSole')] }}</td>
    </tr>
    <tr>
      <td>{{ $t('product.footwear_type') }}:</td>
      <td>{{ category[$_i18n_getFieldWithLocale('name')] }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import i18n from '@/mixins/i18n'
import {mapActions} from 'vuex'

export default {
  name: 'ProductDetails',
  mixins: [i18n],
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      category: null,
    }
  },
  async mounted() {
    if (!this.product) return
    this.category =  await this.fetchCategory(this.product.categoryId)
  },
  methods: {
    ...mapActions('categories', [
      'fetchCategory',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.table {
  width: 100%;
  margin-bottom: 2.3em;
  font-size: adaptive_fz(12px, 10px);
  font-weight: 400;
  line-height: 1.7em;
  border-spacing: 2px;

  tr {
    td:first-child {
      color: $text_color_dark;
      text-transform: uppercase;
    }

    td:last-child {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 1em;
  }
}
</style>
