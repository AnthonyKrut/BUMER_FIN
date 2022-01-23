<template>
  <section class="catalog-page">
    <div class="container">
      <h1 class="catalog__title">
        {{ categoryName }}
      </h1>

      <CatalogFilters />
      <div class="catalog-wrapper">
        <Catalog
          v-if="products.length && !loading"
          :is-columns-adaptive="true"
          :is-specs-adaptive="false"
          :products="products"
        />

        <ThePreloader v-if="loading" />
      </div>

      <div v-if="!products.length && !loading" class="catalog__notice">
        {{ $t('product.empty_product_list') }}
      </div>

      <br><br><br><br>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CatalogFilters from '@/components/catalog/CatalogFilters'
import Catalog from '@/components/catalog/Catalog'
import ThePreloader from '@/components/common/ThePreloader'
import i18n from '@/mixins/i18n'

export default {
  name: 'CatalogPage',
  components: {
    CatalogFilters,
    Catalog,
    ThePreloader,
  },
  mixins: [i18n],
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapGetters('products', [
      'getProductsByCategoryId',
    ]),
    ...mapGetters('categories', [
      'getCategoryById',
    ]),
    categoryId() {
      return this.$route.params.id
    },
    categoryName() {
      return this.getCategoryById(this.categoryId)?.[this.$_i18n_getFieldWithLocale('name')]
    },
    products() {
      return this.getProductsByCategoryId(this.categoryId)
    },
  },
  async created() {
    this.loading = true
    await this.fetchProducts()
    this.loading = false
  },
  methods: {
    ...mapActions('products', [
      'fetchProducts',
    ]),
  },
}
</script>

<style lang="scss" scoped>

.catalog-page {
  padding-bottom: 90px;

  @media screen and (max-width: 767px) {
    padding-bottom: 30px;
  }
}

.catalog__title {
  margin-bottom: 1.5em;
}

.catalog__notice {
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  color: #b6b6b6;
  font-weight: bold;
  margin-top: 40px;
}

.catalog-wrapper {
  position: relative;
}

</style>
