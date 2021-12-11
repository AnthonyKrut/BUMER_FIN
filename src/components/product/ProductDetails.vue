<template>
  <table class="table">
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
  font-size: adaptive_fz(12px, 8px);
  font-weight: 400;
  line-height: 1.7em;

  tr {
    td:first-child {
      color: $text_color_dark;
      text-transform: uppercase;
    }

    td:last-child {
      font-weight: 700;
    }
  }
}
</style>
