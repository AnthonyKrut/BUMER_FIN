<template>
  <section class="catalog-page">
    <div class="container">
      <h1>Заголовок категории</h1>

      <CatalogFilters />
      <Catalog v-if="products" :products="products" />

      <div v-else class="catalog__notice">
        {{ $t('product.empty_product_list') }}
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from 'vuex'
import CatalogFilters from '@/components/catalog/CatalogFilters'
import Catalog from '@/components/catalog/Catalog'

export default {
  name: 'CategoryPage',
  components: {
    CatalogFilters,
    Catalog,
  },
  data() {
    return {
      products: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
      ],
    }
  },
  async created() {
    await this.fetchAllProducts()
  },
  methods: {
    ...mapActions('products', [
      'fetchAllProducts',
    ]),
  },
}
</script>

<style lang="scss" scoped>

.catalog__notice {
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  color: #b6b6b6;
  font-weight: bold;
  margin-top: 40px;
}

</style>
