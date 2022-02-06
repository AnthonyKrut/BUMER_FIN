<template>
  <section class="catalog-page">
    <div class="container">
      <h1 v-if="category" class="catalog__title">
        {{ category[`name_${$i18n.locale}`] }}
      </h1>

      <CatalogFilters />

      <div class="catalog-wrapper">
        <TransitionWrapper>
          <Catalog
            v-if="products.length && !loading"
            :is-columns-adaptive="true"
            :is-specs-adaptive="false"
            :products="products"
          />
        </TransitionWrapper>

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
import {mapActions, mapGetters, mapState} from 'vuex'
import CatalogFilters from '@/components/catalog/CatalogFilters'
import Catalog from '@/components/catalog/Catalog'
import ThePreloader from '@/components/common/ThePreloader'
import TransitionWrapper from '@/components/common/TransitionWrapper'
import i18n from '@/mixins/i18n'

export default {
  name: 'CatalogPage',
  components: {
    CatalogFilters,
    TransitionWrapper,
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
    ...mapState('products', [
      'products',
    ]),
    ...mapGetters('categories', [
      'getCategoryById',
    ]),
    categoryId() {
      return this.$route.params.id
    },
    category() {
      return this.getCategoryById(this.categoryId)
    },
  },
  created() {
    this.getProducts()
  },
  watch: {
    categoryId() {
      this.getProducts()
    },
  },
  methods: {
    ...mapActions('products', [
      'fetchProducts',
    ]),
    async getProducts() {
      this.loading = true
      await this.fetchProducts([
        // {
        //   field: 'IsActive',
        //   value: true
        // },
        {
          field: 'CategoryId',
          value: this.categoryId,
        },
      ])
      this.loading = false
    },
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
