<template>
  <div class="catalog">
    <div 
      v-if="heading" 
      class="catalog__heading" 
      :class="{'catalog__heading--left': headingPosition === 'left'}"
    >
      {{ heading }}
    </div>
    <div class="catalog__body">
      <CatalogProductItem
        v-for="product in products"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script>
import CatalogProductItem from '@/components/catalog/CatalogProductItem'

export default {
  name: 'Catalog',
  components: {CatalogProductItem},
  props: {
    products: {
      type: Array,
      default() {
        return []
      },
    },
    heading: {
      type: String,
      default: null,
    },
    headingPosition: {
      type: String,
      default: 'center',
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.catalog {
  //margin-bottom: 80px;
}

.catalog__body {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 767px) {
    grid-gap: 8px;
  }
}

.catalog__heading {
  margin: 0 0 1.75em 0;
  font-size: adaptive_fz(20px, 12px);
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    margin: 0 0 1.5em 0;
  }

  &.catalog__heading--left {
    text-align: left;
    padding-left: 2em; //40px;
  }
}

</style>
