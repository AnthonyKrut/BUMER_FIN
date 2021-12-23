<template>
  <div class="product-images">
    <div class="product-images__secondary-imgs-wrapper">
      <img
        v-for="pic in product.items[0].pics"
        :key="pic"
        alt="product image small"
        class="product-images__secondary-img"
        :src="pic"
      >
    </div>

    <div class="product-images__main-img-wrapper">
      <img
        alt="product image big"
        class="product-images__main-img"
        :src="product.items[0].pics[0]"
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
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.product-images {
  display: flex;
  width: 67%;

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

  @media screen and (max-width: 767px) {
    width: 33%;
    //height: calc(1.36 * 0.33 * (100vw - 5px));
  }

  &:hover {
    box-shadow: inset 0 0 0 2px $text_color;
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
