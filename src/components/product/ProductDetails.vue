<template>
  <table class="table">
    <tbody>
      <tr>
        <td>{{ $t('product.top_material') }}:</td>
        <td>{{ product.top_material }}</td>
      </tr>
      <tr>
        <td>{{ $t('product.insole_material') }}:</td>
        <td>{{ product.insole_material }}</td>
      </tr>
      <tr>
        <td>{{ $t('product.outsole_material') }}:</td>
        <td>{{ product.sole_material }}</td>
      </tr>
      <tr>
        <td>{{ $t('product.season') }}:</td>
        <td>{{ product.season }}</td>
      </tr>
      <tr>
        <td>{{ $t('product.footwear_type') }}:</td>
        <td>{{ product.category }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
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
