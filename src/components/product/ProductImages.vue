<template>
  <div class="product-images">
    <div class="product-images__secondary-imgs-wrapper">
      <img
        v-for="image in secondaryImages"
        :key="image.imageUri"
        alt="product image small"
        class="product-images__secondary-img"
        :class="{'product-images__secondary-img--active': image.id === mainImageId}"
        :src="image.imageUri"
        @click="mainImageId = image.id"
      >
    </div>

    <div class="product-images__main-img-wrapper">
      <img
        alt="product image big"
        class="product-images__main-img"
        :src="mainImage && mainImage.imageUri"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductImages',
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
      mainImageId: null,
    }
  },
  computed: {
    mainImage() {
      return this.product.images.find(i => i.id === this.mainImageId)
    },
    secondaryImages() {
      return this.product?.images || []
    },
  },
  mounted() {
    this.mainImageId = this.product?.images?.[0]?.id || null
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.product-images {
  display: flex;
  width: 66%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
}

.product-images__secondary-imgs-wrapper {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    order: 2;
    width: 100%;
    flex-direction: row;
  }
}

.product-images__secondary-img {
  width: 90%;
  object-fit: contain;
  cursor: pointer;
  border: 3px solid transparent;

  @media screen and (max-width: 767px) {
    width: 33%;
  }

  &:hover {
    opacity: 0.9;
  }

  &.product-images__secondary-img--active {
    border-color: #dedede;
  }
}

.product-images__main-img-wrapper {
  width: 75%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
}

.product-images__main-img {
  width: 100%;
  object-fit: contain;
}
</style>
